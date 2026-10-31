import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, formatDate } from "@/lib/posts";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Blog",
  description: "All posts from MIWA on AI, STEAM, analytics and design thinking.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getPosts();
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="The MIWA"
        accent="Blog"
        lead={`Writing on AI, STEAM, analytics and design thinking. ${posts.length} articles and counting.`}
      />
      <section className="blog">
        {posts.length === 0 ? (
          <p>No posts yet. Write one in the portal at <code>/keystatic</code>.</p>
        ) : (
          <ul className="post-grid">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="post-tile">
                  {p.cover && <img src={p.cover} alt="" loading="lazy" />}
                  <span className="post-meta">
                    {formatDate(p.date)} · {p.minutes} min read
                  </span>
                  <h2>
                    <span>{p.title}</span>
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <CtaBand />
    </>
  );
}
