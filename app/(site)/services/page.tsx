import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { Arrow } from "@/components/Arrow";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "At MIWA, we empower businesses, startups, and organisations to unlock the potential of AI, data, and analytics.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="What we"
        accent="do"
        lead="At MIWA, we empower businesses, startups, and organisations to unlock the potential of AI, data, and analytics. We bridge the gap between business vision and technological innovation, delivering practical, scalable solutions that drive efficiency, improve decision-making, and create measurable business impact."
      />
      <section className="services">
        <div className="services-grid">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="service-card">
              <span className="service-num">0{i + 1}</span>
              <img src={`/icons/${s.icon}.svg`} alt="" width={80} height={80} />
              <h2>
                {s.title[0]}
                <br />
                {s.title[1]}
              </h2>
              <p>{s.summary}</p>
              <span className="service-more">
                READ MORE <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand primary={{ href: "/about-us", label: "ABOUT MIWA" }} />
    </>
  );
}
