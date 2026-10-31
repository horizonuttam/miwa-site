// One-off import of the Wix blog into content/blog/*.md, with images in public/blog/<slug>/.
// Usage: node scripts/import-wix.mjs [--force]
// Reads the blog sitemap for the post list (the RSS feed stops at 20), then each post page.
// Images are resized to 1600px wide and saved as WebP (GIFs are kept as they are).
// Existing Markdown files are skipped unless --force is passed, so edits made in the portal are kept.

import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";
import sharp from "sharp";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const SITE = "https://www.miwa.org.in";
const root = path.resolve(import.meta.dirname, "..");
const postsDir = path.join(root, "content", "blog");
const imagesDir = path.join(root, "public", "blog");
const force = process.argv.includes("--force");
const UA = { "User-Agent": "Mozilla/5.0 (MIWA blog import)" };

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Wix rate-limits bursts, so retry with a growing pause.
async function get(url, tries = 4) {
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url, { headers: UA });
      if (res.ok) return res;
      if (i >= tries || ![429, 500, 502, 503, 504].includes(res.status)) throw new Error(`${res.status} for ${url}`);
    } catch (e) {
      if (i >= tries) throw e;
    }
    await wait(3000 * i);
  }
}

// Wix serves resized copies; the original lives at /media/<file>.
function originalImage(url) {
  const m = /static\.wixstatic\.com\/media\/([^/?#]+?\.(?:png|jpe?g|gif|webp|avif))/i.exec(url ?? "");
  return m ? { url: `https://static.wixstatic.com/media/${m[1]}`, file: m[1].replace("~mv2", "") } : null;
}

async function download(img, slug, base = img.file.replace(/\.\w+$/, "")) {
  const dir = path.join(imagesDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  const gif = /\.gif$/i.test(img.file);
  const name = gif ? `${base}.gif` : `${base}.webp`;
  const dest = path.join(dir, name);
  if (!fs.existsSync(dest)) {
    const buf = Buffer.from(await (await get(img.url)).arrayBuffer());
    fs.writeFileSync(dest, gif ? buf : await sharp(buf).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer());
  }
  return `/blog/${slug}/${name}`;
}

// First real paragraph of the post, trimmed to a sentence or two.
function excerptFrom(markdown) {
  const para = markdown.split(/\n{2,}/).map((p) => p.trim()).find((p) => p.length > 60 && !/^(#|!\[|\||>|-|\d+\.)/.test(p)) ?? "";
  const clean = para.replace(/[*_`]/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\s+/g, " ").trim();
  const sentences = clean.match(/[^.!?]+[.!?]+/g) ?? [clean];
  let out = "";
  for (const s of sentences) {
    if ((out + s).length > 220 && out) break;
    out += s;
  }
  return out.trim();
}

const td = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-" });
td.use(gfm);
td.remove(["button", "svg", "style", "script", "noscript"]);
td.addRule("iframe", {
  filter: "iframe",
  replacement: (_, node) => {
    const src = node.getAttribute("src");
    return src ? `\n\n[Watch the embedded media](${src})\n\n` : "";
  },
});

async function convertBody($, body, slug) {
  // Images: replace each Wix figure with a plain <img> pointing at a local copy.
  for (const fig of body.find("figure").toArray()) {
    const $fig = $(fig);
    const id = $fig.find("wow-image").attr("id") ?? "";
    const img = originalImage(`static.wixstatic.com/media/${id}`) ?? originalImage($fig.find("img").attr("src"));
    if (!img) continue;
    const local = await download(img, slug);
    const alt = $fig.find("img").attr("alt") || $fig.find("figcaption").text().trim();
    const caption = $fig.find("figcaption").text().trim();
    $fig.replaceWith(`<p><img src="${local}" alt="${alt.replace(/"/g, "&quot;")}"></p>${caption ? `<p><em>${caption}</em></p>` : ""}`);
  }
  for (const el of body.find("img").toArray()) {
    const src = $(el).attr("src") ?? "";
    if (src.startsWith("/blog/")) continue;
    const img = originalImage(src);
    if (img) $(el).attr("src", await download(img, slug));
  }

  // Tables: Markdown tables need a header row, and cells must be single-line.
  body.find("table").each((_, table) => {
    const $t = $(table);
    $t.find("td, th").each((_, cell) => {
      const parts = $(cell).find("p").map((_, p) => $(p).html()).get();
      if (parts.length) $(cell).html(parts.join("<br>"));
    });
    if (!$t.find("thead").length) {
      const first = $t.find("tr").first();
      first.find("td").each((_, c) => { c.tagName = "th"; });
      $t.prepend($("<thead></thead>").append(first));
    }
  });

  // Drop Wix wrapper attributes so Turndown sees clean markup.
  body.find("*").each((_, el) => {
    for (const a of Object.keys(el.attribs ?? {})) {
      if (!["href", "src", "alt", "colspan", "rowspan"].includes(a)) $(el).removeAttr(a);
    }
  });

  return td
    .turndown(body.html() ?? "")
    .replace(/_\*\*\*\*_|\*\*\*\*/g, "") // Wix splits bold runs: **a****b** -> **ab**
    .replace(/^[ \t ]+$/gm, "") // lines left by empty Wix paragraphs
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const sitemap = cheerio.load(await (await get(`${SITE}/blog-posts-sitemap.xml`)).text(), { xml: true });
const links = sitemap("loc").map((_, el) => sitemap(el).text().trim()).get().filter((u) => u.includes("/post/"));

fs.mkdirSync(postsDir, { recursive: true });
let written = 0;
for (const link of links) {
  const slug = decodeURIComponent(link.split("/post/")[1]).replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  const file = path.join(postsDir, `${slug}.md`);
  if (fs.existsSync(file) && !force) {
    console.log(`skip   ${slug} (already imported)`);
    continue;
  }
  try {
    const $ = cheerio.load(await (await get(link)).text());
    const body = $('[data-hook="post-description"]').first();
    if (!body.length) throw new Error("post body not found");
    const title = $('meta[property="og:title"]').attr("content") || $('[data-hook="post-title"]').first().text().trim();
    const published = $('meta[property="article:published_time"]').attr("content");
    const date = published ? published.slice(0, 10) : new Date().toISOString().slice(0, 10);
    const markdown = await convertBody($, body, slug);
    const coverImg = originalImage($('meta[property="og:image"]').attr("content"));
    const cover = coverImg ? await download(coverImg, slug, "cover") : "";
    const front = [
      "---",
      `title: ${JSON.stringify(title)}`,
      `date: ${date}`,
      `excerpt: ${JSON.stringify(excerptFrom(markdown))}`,
      ...(cover ? [`cover: ${cover}`] : []),
      "---",
    ].join("\n");
    fs.writeFileSync(file, `${front}\n\n${markdown}\n`);
    written++;
    console.log(`import ${slug}`);
    await wait(500);
  } catch (e) {
    console.error(`FAILED ${slug}: ${e.message}`);
  }
}
console.log(`\n${written} post(s) written, ${links.length} in the sitemap.`);
