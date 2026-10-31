import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { founders, getFounder, type PortfolioItem } from "@/lib/founders";
import { Arrow } from "@/components/Arrow";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { anchor } from "@/lib/anchor";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return founders.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const founder = getFounder(slug);
  if (!founder) return {};
  return {
    title: `${founder.name}, ${founder.role}`,
    description: founder.bio,
    alternates: { canonical: `/about-us/${founder.slug}` },
    openGraph: { type: "profile", images: [founder.photo] },
  };
}

function Items({ heading, items }: { heading: string; items: PortfolioItem[] }) {
  if (!items.length) return null;
  return (
    <section id={anchor(heading)} className="detail-section">
      <h2>{heading}</h2>
      <ul className="portfolio-items">
        {items.map((i) => (
          <li key={i.title}>
            <h3>{i.title}</h3>
            {i.meta && <p className="portfolio-meta">{i.meta}</p>}
            {i.text && <p>{i.text}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function FounderPage({ params }: Props) {
  const { slug } = await params;
  const founder = getFounder(slug);
  if (!founder) notFound();
  const other = founders.find((f) => f.slug !== slug);
  const [first, ...rest] = founder.name.split(" ");
  const headings = [
    "About",
    "Focus areas",
    ...(
      [
        ["Selected projects", founder.projects],
        ["Education", founder.education],
        ["Publications", founder.publications],
        ["Awards", founder.awards],
        ["Certifications", founder.certifications],
      ] as const
    )
      .filter(([, list]) => list.length > 0)
      .map(([h]) => h),
  ];

  return (
    <>
      <PageHero
        back={{ href: "/about-us", label: "About Us" }}
        eyebrow={founder.role.toUpperCase()}
        title={first}
        accent={rest.join(" ")}
        lead={`${founder.headline} · ${founder.location}`}
        aside={
          <Image className="page-hero-photo" src={founder.photo} alt={founder.name} width={247} height={330} priority />
        }
      >
        <div className="hero-actions">
          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            LINKEDIN <Arrow />
          </a>
        </div>
      </PageHero>

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
          <section id={anchor("About")} className="detail-section">
            <h2>About</h2>
            {founder.about.map((p) => (
              <p key={p} className="portfolio-about">{p}</p>
            ))}
          </section>

          <section id={anchor("Focus areas")} className="detail-section">
            <h2>Focus areas</h2>
            <p className="portfolio-tags">
              {founder.focus.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </p>
          </section>

          <Items heading="Selected projects" items={founder.projects} />
          <Items heading="Education" items={founder.education} />
          <Items heading="Publications" items={founder.publications} />
          <Items heading="Awards" items={founder.awards} />

          {founder.certifications.length > 0 && (
            <section id={anchor("Certifications")} className="detail-section">
              <h2>Certifications</h2>
              <ul className="tick-list">
                {founder.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {other && (
        <section className="related">
          <p className="eyebrow">MEET THE {other.slug === "uttam-sharma" ? "FOUNDER" : "CO-FOUNDER"}</p>
          <Link href={`/about-us/${other.slug}`} className="related-person">
            <Image src={other.photo} alt="" width={120} height={160} />
            <div>
              <p className="ab-founder-role">{other.role}</p>
              <h2>{other.name}</h2>
              <span className="service-more">
                VIEW PORTFOLIO <Arrow />
              </span>
            </div>
          </Link>
        </section>
      )}

      <CtaBand />
    </>
  );
}
