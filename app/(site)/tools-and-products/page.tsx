import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/lib/products";
import { Arrow } from "@/components/Arrow";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Tools and Products",
  description:
    "Tools and products built by MIWA, starting with Research Report, an AI agent skill that turns code analysis and research into typeset PDF technical documents.",
  alternates: { canonical: "/tools-and-products" },
};

export default function ToolsAndProducts() {
  return (
    <>
      <PageHero
        eyebrow="TOOLS & PRODUCTS"
        title="Tools we"
        accent="build"
        lead="Practical tools that come out of our own consulting work. Each one solves a problem we met on real projects."
      />

      <section className="products">
        <p className="eyebrow">AVAILABLE NOW</p>
        <h2>Our tools and products</h2>
        <div className="product-grid">
          {products.map((p, i) => (
            <article key={p.slug} id={p.slug} className="product-card">
              <div className="product-head">
                {p.logo && (
                  <Image src={p.logo.src} alt={p.logo.alt} width={160} height={160} className="product-logo" />
                )}
                <div>
                  <header>
                    <span className="detail-num">{String(i + 1).padStart(2, "0")}</span>
                    <p className="product-kind">
                      {p.kind} · {p.category}
                    </p>
                  </header>
                  <h3>{p.name}</h3>
                  <p className="product-tagline">{p.tagline}</p>
                </div>
              </div>

              <div className="product-body">
                <div>
                  <h4>What it does</h4>
                  <ul className="product-features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <dl className="product-meta">
                  <div>
                    <dt>Use it for</dt>
                    <dd>{p.uses.join(", ")}</dd>
                  </div>
                  <div>
                    <dt>Works with</dt>
                    <dd>{p.worksWith.join(", ")}</dd>
                  </div>
                  {p.requirements && (
                    <div>
                      <dt>Requires</dt>
                      <dd>{p.requirements}</dd>
                    </div>
                  )}
                </dl>
              </div>

              {p.sample && (
                <figure className="product-sample">
                  <Image
                    src={p.sample.src}
                    alt={p.sample.alt}
                    width={p.sample.width}
                    height={p.sample.height}
                    sizes="(max-width: 1100px) 100vw, 1100px"
                  />
                  <figcaption>{p.sample.caption}</figcaption>
                </figure>
              )}

              <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="btn btn-olive product-link">
                {p.link.label} <Arrow />
              </a>
            </article>
          ))}
        </div>
        <p className="product-soon">More tools are on the way. Follow our newsletter to hear when they launch.</p>
      </section>

      <CtaBand text="Need a tool built around your own workflow? Tell us the problem and we will design it with you." />
    </>
  );
}
