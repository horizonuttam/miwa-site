import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { founders } from "@/lib/founders";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/industries",
    "/about-us",
    ...founders.map((f) => `/about-us/${f.slug}`),
    "/blog",
  ].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
  }));
  const posts = getPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.date,
  }));
  return [...pages, ...posts];
}
