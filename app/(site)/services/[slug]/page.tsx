import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService, services } from "@/lib/services";
import { Arrow } from "@/components/Arrow";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { anchor } from "@/lib/anchor";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title.join(" "),
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const index = services.findIndex((s) => s.slug === slug);
  const others = services.filter((s) => s.slug !== slug);
  const headings = [...service.sections.map((s) => s.heading), ...(service.tools ? ["Tools and technologies"] : [])];

  return (
    <>
      <PageHero
        back={{ href: "/services", label: "All Services" }}
        eyebrow={`SERVICE 0${index + 1}`}
        title={service.title[0]}
        accent={service.title[1]}
        lead={service.intro}
        aside={<img className="page-hero-icon" src={`/icons/${service.icon}.svg`} alt="" width={180} height={180} />}
      />

      <div className="detail">
        <nav className="detail-nav" aria-label="On this page">
          <p className="eyebrow">ON THIS PAGE</p>
          <ol>
            {headings.map((h) => (
              <li key={h}>
                <a href={`#${anchor(h)}`}>{h}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="detail-main">
          {service.sections.map((sec, i) => (
            <section key={sec.heading} id={anchor(sec.heading)} className="detail-section">
              <span className="detail-num">0{i + 1}</span>
              <h2>{sec.heading}</h2>
              <ul className="tick-list">
                {sec.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {sec.link && (
                <Link href={sec.link.href} className="detail-link">
                  {sec.link.label} <Arrow />
                </Link>
              )}
            </section>
          ))}

          {service.tools && (
            <section id={anchor("Tools and technologies")} className="detail-section detail-section-tools">
              <span className="detail-num">0{service.sections.length + 1}</span>
              <h2>Tools and technologies</h2>
              <dl className="service-tools">
                {service.tools.map((t) => (
                  <div key={t.group}>
                    <dt>{t.group}</dt>
                    <dd>
                      {t.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </div>

      <section className="related">
        <p className="eyebrow">EXPLORE MORE</p>
        <h2>Other services</h2>
        <div className="related-grid">
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="related-card">
              <img src={`/icons/${s.icon}.svg`} alt="" width={64} height={64} />
              <h3>{s.title.join(" ")}</h3>
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
