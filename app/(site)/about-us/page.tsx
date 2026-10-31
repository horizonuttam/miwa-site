import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { founders } from "@/lib/founders";
import { Arrow } from "@/components/Arrow";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The MIWA Story. MIWA stands at the intersection of Consulting, Creativity and A.I and Analytics.",
  alternates: { canonical: "/about-us" },
};

const pillars = [
  {
    icon: "strategy-roadmap",
    title: "Consulting",
    text: "Strategic management thinking and business acumen, turned into plans that are future-ready and environmentally responsible.",
  },
  {
    icon: "design-thinking",
    title: "Creativity",
    text: "Art, design and storytelling that help businesses, startups and organisations communicate with clarity.",
  },
  {
    icon: "ai-cloud",
    title: "AI & Analytics",
    text: "The belief that every problem can be solved through A.I, engineering and data principles, to unlock growth.",
  },
];

const journey = [
  {
    step: "Research",
    title: "Roots in S.T.E.A.M",
    text: "MIWA began as a research initiative into Science, Technology, Engineering, Arts and Mathematics.",
  },
  {
    step: "2024",
    title: "The book",
    text: "Mix it with the Arts, by Uttam Sharma and Shubhangi Gupta, is published by Notion Press.",
  },
  {
    step: "Venture",
    title: "A consulting practice",
    text: "The research grows into a consulting-driven venture working with businesses, startups and organisations.",
  },
  {
    step: "Today",
    title: "AI, analytics and brand",
    text: "MIWA delivers AI, analytics, brand communication and go-to-market work for clients in Ireland and India.",
  },
];

const testimonials: { quote: string; name: string; place?: string }[] = [
  {
    quote:
      "The digital art IP created by Shubhangi and Uttam were fantastic! It really simplified the complex physics concepts and reach over 100+ students, really thankful to them!",
    name: "MakenBreak Founders",
    place: "New Delhi, India",
  },
  {
    quote:
      "The SEO optimized blogs were game change for my soap brand! It helped me reach potential customers and increased my digital visibility!",
    name: "Distingue Founder",
    place: "Dublin, Ireland",
  },
  {
    quote:
      "MIWA helped us strategize the GTM for our latex free condoms (Medical product) by conducting Primary and Secondary research, using AI effectively.",
    name: "Sagami",
  },
  {
    quote: "MIWA helped in developing GTM using AI tools effectively, conducting primary surveys as well.",
    name: "Glass Politics",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="The MIWA"
        accent="Story"
        lead="What started as a research initiative has now grown into a consulting-driven venture."
      />

      <section className="ab-story">
        <div className="ab-story-copy">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>Consulting, Creativity and A.I, in one place</h2>
          <p>
            Founded by <strong>Shubhangi Gupta</strong>, who brings strategic management thinking and business acumen,
            and <strong>Uttam Sharma</strong>, who believes that every problem can be solved through A.I, engineering
            and data principles. MIWA stands at the intersection of Consulting, Creativity and A.I and Analytics.
          </p>
          <p>
            From its roots in S.T.E.A.M, MIWA has evolved into a consulting-driven venture helping businesses,
            startups, and organisations communicate with clarity, unlock growth through analytics and build strategies
            that are future-ready and environmentally responsible.
          </p>
        </div>
        <aside className="ab-book">
          <Image src="/media/book.png" alt="Mix it with the Arts book cover" width={262} height={406} />
          <div>
            <p className="eyebrow ab-eyebrow-light">IT ALL STARTED WITH THE BOOK</p>
            <h3>Mix it with the Arts</h3>
            <p>By Uttam Sharma and Shubhangi Gupta. Notion Press, 2024.</p>
            <a href={site.book} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              BUY NOW <Arrow />
            </a>
          </div>
        </aside>
      </section>

      <section className="ab-pillars">
        <p className="eyebrow">WHAT WE STAND FOR</p>
        <h2>Three disciplines, one way of working</h2>
        <div className="ab-pillar-grid">
          {pillars.map((p) => (
            <div key={p.title} className="ab-pillar">
              <img src={`/icons/${p.icon}.svg`} alt="" width={72} height={72} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ab-journey">
        <p className="eyebrow ab-eyebrow-light">OUR JOURNEY</p>
        <h2>From research to results</h2>
        <ol className="ab-timeline">
          {journey.map((j) => (
            <li key={j.title}>
              <span className="ab-step">{j.step}</span>
              <h3>{j.title}</h3>
              <p>{j.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ab-founders">
        <div className="ab-founders-head">
          <p className="eyebrow">THE TEAM</p>
          <h2>Our Creative Founders</h2>
          <p>A strategist and a technologist who bring art, business and AI together.</p>
        </div>
        <div className="ab-founder-grid">
          {founders.map((f) => (
            <Link key={f.slug} href={`/about-us/${f.slug}`} className="ab-founder">
              <Image src={f.photo} alt={f.name} width={247} height={358} />
              <div className="ab-founder-body">
                <p className="ab-founder-role">{f.role}</p>
                <h3>{f.name}</h3>
                <p>{f.bio}</p>
                <span className="ab-founder-more">
                  VIEW PORTFOLIO <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <p className="eyebrow ab-eyebrow-light ab-center">TESTIMONIALS</p>
        <h2>Client Success Stories: Hear What Our Clients Say</h2>
        <Marquee
          className="testimonial-marquee"
          items={testimonials.map((t) => (
            <figure key={t.name}>
              <p className="stars" aria-label="5 stars">★★★★★</p>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                {t.name}
                {t.place && (
                  <>
                    <br />
                    {t.place}
                  </>
                )}
              </figcaption>
            </figure>
          ))}
        />
      </section>

      <CtaBand />
    </>
  );
}
