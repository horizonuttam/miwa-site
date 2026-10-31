import type { Metadata } from "next";
import Link from "next/link";
import { audiences, capabilities, industries, techProducts, type Capability } from "@/lib/industries";
import { Arrow } from "@/components/Arrow";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industries and Businesses",
  description:
    "AI strategy, go-to-market, analytics and software solutions for retail, FMCG, education, energy, environment, ESG, construction, automotive, food and agriculture, and tech products.",
  alternates: { canonical: "/industries" },
};

const order: Capability[] = ["AI strategy", "Go-to-market", "Analytics", "Software"];

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES & BUSINESSES"
        title="Industries we"
        accent="serve"
        lead="From retail shelves to wind farms, we bring AI strategy, go-to-market, analytics and software to the sectors that shape everyday life."
      />

      <section className="ind-audiences">
        <p className="eyebrow">WHO WE WORK WITH</p>
        <div className="ind-audience-grid">
          {audiences.map((a) => (
            <div key={a.name} className="ind-audience">
              <img src={`/icons/${a.icon}.svg`} alt="" width={64} height={64} />
              <div>
                <h2>{a.name}</h2>
                <p>{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ind-caps">
        <p className="eyebrow ab-eyebrow-light">WHAT WE BRING TO EVERY SECTOR</p>
        <h2>Four capabilities, one partner</h2>
        <div className="ind-cap-grid">
          {capabilities.map((c) => (
            <Link key={c.name} href={c.href} className="ind-cap">
              <img src={`/icons/${c.icon}.svg`} alt="" width={64} height={64} />
              <h3>{c.name}</h3>
              <p>{c.text}</p>
              <span className="service-more">
                LEARN MORE <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="ind-list">
        <p className="eyebrow">SECTORS</p>
        <h2>Where we make a difference</h2>
        <div className="ind-grid">
          {industries.map((ind) => (
            <article key={ind.slug} id={ind.slug} className="ind-card">
              <header>
                <img src={`/icons/${ind.icon}.svg`} alt="" width={64} height={64} />
                <h3>{ind.name}</h3>
              </header>
              <p className="ind-intro">{ind.intro}</p>
              <dl>
                {order
                  .filter((cap) => ind.offers[cap])
                  .map((cap) => (
                    <div key={cap}>
                      <dt>{cap}</dt>
                      <dd>{ind.offers[cap]}</dd>
                    </div>
                  ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="tech" className="ind-tech">
        <div className="ind-tech-head">
          <img src="/icons/ind-tech.svg" alt="" width={120} height={120} />
          <div>
            <p className="eyebrow ab-eyebrow-light">FEATURED SECTOR</p>
            <h2>
              Tech, Apps & <em>Digital Products</em>
            </h2>
            <p>
              Startups and product teams building software, platforms and digital services. We design, build and launch
              AI-powered products, and help them find their market.
            </p>
          </div>
        </div>
        <ul className="ind-tech-grid">
          {techProducts.map((t, i) => (
            <li key={t.name}>
              <span className="detail-num">0{i + 1}</span>
              <h3>{t.name}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand text="Whatever your sector, tell us the challenge and we will show you where AI, analytics and design can make a difference." />
    </>
  );
}
