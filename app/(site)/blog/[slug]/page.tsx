import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getPosts, formatDate } from "@/lib/posts";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      ...(post.cover && { images: [post.cover] }),
    },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  // Most imported posts open with their cover picture, so only add the cover when the body doesn't start with an image.
  const opensWithImage = /^\s*(<p>\s*)?<img/.test(post.html);
  const more = getPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  return (
    <>
      <PageHero
        back={{ href: "/blog", label: "All Posts" }}
        eyebrow={`${formatDate(post.date).toUpperCase()} · ${post.minutes} MIN READ`}
        title={post.title}
        compact
      />
      <div className="post-page">
        <article className="post">
          {post.cover && !opensWithImage && <img className="post-cover" src={post.cover} alt="" />}
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
      {more.length > 0 && (
        <section className="related related-posts">
          <p className="eyebrow">KEEP READING</p>
          <h2>More from the blog</h2>
          <ul className="post-grid">
            {more.map((p) => (
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
        </section>
      )}
      <CtaBand />
    </>
  );
}
