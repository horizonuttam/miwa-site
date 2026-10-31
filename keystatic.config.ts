import { config, collection, fields } from "@keystatic/core";

// Writing portal at /keystatic.
// Locally it edits the files on disk. When deployed, it commits to GitHub and
// Vercel redeploys the site, so a published post is live in about a minute.
const repo = process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO as `${string}/${string}` | undefined;

export default config({
  storage: repo ? { kind: "github", repo } : { kind: "local" },
  ui: {
    brand: { name: "MIWA blog" },
  },
  collections: {
    blog: collection({
      label: "Blog posts",
      path: "content/blog/*",
      slugField: "title",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "date"],
      schema: {
        title: fields.slug({
          name: { label: "Title" },
          slug: { label: "URL", description: "The address of the post: miwa.org.in/blog/<this>" },
        }),
        date: fields.date({ label: "Publish date", defaultValue: { kind: "today" }, validation: { isRequired: true } }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "One or two sentences shown on the blog list and in search results.",
          multiline: true,
          validation: { length: { min: 1, max: 300 } },
        }),
        cover: fields.image({
          label: "Cover image",
          directory: "public/blog",
          publicPath: "/blog/",
        }),
        content: fields.markdoc({
          label: "Post",
          extension: "md",
          options: {
            image: { directory: "public/blog", publicPath: "/blog/" },
          },
        }),
      },
    }),
  },
});
