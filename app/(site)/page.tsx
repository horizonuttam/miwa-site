import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Marquee } from "@/components/Marquee";
import { CountUp } from "@/components/CountUp";
import { SteamOrbit } from "@/components/SteamOrbit";
import { site } from "@/lib/site";

const numbers = [
  { icon: "ai-cases", value: "5+", label: "AI business cases and AI and Analytics Solutions" },
  { icon: "newsletter", value: "700+", label: "Subscribers of the M.I.W.A Newsletter" },
  { icon: "brand-ip", value: "35+", label: "Client Proprietary IPs for Brand Development and sales growth" },
];

const outcomes = ["Simplify complexity", "Increase profit", "Reduce decision time"];

const patrons = [
  { src: "/media/client-sagami.png", alt: "Sagami", width: 264, height: 44 },
  { src: "/media/client-distingue.jpeg", alt: "Distingue Naturals", width: 137, height: 121 },
  { src: "/media/client-makenbreak.jpeg", alt: "MakenBreak", width: 300, height: 38 },
  { src: "/media/client-glass-politics.png", alt: "Glass Politics", width: 243, height: 80 },
];

const propositions = [
  {
    icon: "design-thinking",
    title: "Design Thinking",
    text: "Dashboards and software solutions aligned with your company’s identity and vision, with easy-to-use guides.",
  },
  {
    icon: "ai-strategy",
    title: "AI-Strategy",
    text: "Identify high-impact AI use cases to improve EBIT margins, and design, develop and deploy Agentic AI solutions.",
  },
  {
    icon: "analytics",
    title: "Analytics & Consulting",
    text: "From KPI tracking to future-ready business strategies, we help you make sense of data.",
  },
  {
    icon: "sustainable",
    title: "Sustainable by Design",
    text: "Eco-conscious, digital-first methods aligned with environmental and business goals.",
  },
];

const reasons = [
  { icon: "startups", title: "FOR STARTUPS", text: "Build strong AI ready brands by integrating AI in business processes" },
  {
    icon: "businesses",
    title: "FOR BUSINESSES",
    text: "Track KPIs, decode analytics, and unlock future opportunities at the intersection of A.I and Business.",
  },
  {
    icon: "social-impact",
    title: "FOR SOCIAL IMPACT",
    text: "With our STEAM approach, we transform abstract ideas into accessible frameworks and compelling communication",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">AI · ANALYTICS · BRANDING · GO-TO-MARKET</p>
          <h1>
            Mix it with the <em>Arts</em>
          </h1>
          <p className="hero-lead">
            With roots in Science, Tech, Engineering, Arts &amp; Math, we merge logic with creativity to deliver AI,
            Analytics, Brand Communication and Go-to-Market solutions that are innovative, evidence-based, impactful
            and AI-ready.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="btn btn-gold">
              EXPLORE OUR SERVICES <Arrow />
            </Link>
            <a href={site.quoteHref} className="btn btn-ghost">
              GET A QUOTE <Arrow />
            </a>
          </div>
        </div>
        <span className="hero-scroll" aria-hidden="true" />
      </section>

      <section className="about-company">
        <div className="about-company-copy">
          <p className="eyebrow">ABOUT OUR COMPANY</p>
          <h2>
            Where Imagination
            <br />
            Meets <em>Intelligence</em>
          </h2>
          <p className="about-company-lead">
            Born from STEAM (Science, Technology, Engineering, Arts &amp; Mathematics) research, MIWA combines visual
            creativity, design thinking, analytics, artificial intelligence and consulting expertise to help businesses
            grow sustainably.
          </p>
          <ul className="about-company-outcomes">
            {outcomes.map((o) => (
              <li key={o}>
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                  <circle cx="12" cy="12" r="12" />
                  <path d="M7 12.5l3.2 3.2L17 9" />
                </svg>
                {o}
              </li>
            ))}
          </ul>
          <blockquote className="about-company-quote">
            At MIWA, we don’t just deliver services. We consult, co-create, and guide.
          </blockquote>
          <Link href="/about-us" className="btn btn-dark">
            READ MORE <Arrow />
          </Link>
        </div>
        <div className="about-company-art">
          <SteamOrbit />
        </div>
      </section>

      <section className="impact">
        <h2 className="label">IMPACT IN NUMBERS</h2>
        <div className="impact-grid">
          {numbers.map((n) => (
            <div key={n.value} className="impact-card">
              <img src={`/icons/${n.icon}.svg`} alt="" width={72} height={72} />
              <p className="impact-value">
                <CountUp value={n.value} />
              </p>
              <p className="impact-label">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="value-intro">
        <h2>Our Value Propositions</h2>
        <p>
          Our unique blend of S.T.E.A.M thinking, AI and Analytics expertise and consulting insight ensures your
          <br />
          business not only make profits&nbsp; but also makes intelligent, sustainable decisions.
        </p>
      </section>

      <section className="value-band">
        {propositions.map((p) => (
          <div key={p.title} className="value-item">
            <img src={`/icons/${p.icon}.svg`} alt="" width={64} height={64} />
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </section>

      <section className="why">
        <h2>Why Choose MIWA</h2>
        <p className="why-sub">Transform your business by partnering with us!</p>
        <div className="why-grid">
          {reasons.map((r) => (
            <div key={r.title} className="olive-card why-card">
              <img src={`/icons/${r.icon}.svg`} alt="" width={96} height={96} />
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="patrons">
        <h2>OUR HAPPY PATRONS</h2>
        <p>Our Clients. Our Strength. Our Inspiration.</p>
        <Marquee
          className="patron-marquee patron-logos"
          items={patrons.map((p) => (
            <img key={p.alt} src={p.src} alt={p.alt} width={p.width} height={p.height} />
          ))}
        />
      </section>
    </>
  );
}
