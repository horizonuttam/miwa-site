"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { Arrow } from "./Arrow";

const icons = {
  phone: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2.2V17h16V7.2l-8 5.3z",
  linkedin: "M5 3.5A1.75 1.75 0 1 1 5 7a1.75 1.75 0 0 1 0-3.5zM3.5 9h3v11.5h-3zM9.5 9h2.9v1.6h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.6 2 3.6 4.6v6.86h-3v-6.08c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.21v6.19h-3z",
};

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d={d} fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  const linkedin = site.socials.find((s) => s.label === "LinkedIn");
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/media/logo-wix.png" alt="MIWA logo" width={56} height={53} />
            <span>{site.motto}</span>
          </Link>
          <p className="footer-tagline">{site.tagline}</p>
          <p className="footer-about">
            STEAM-led consulting in AI, analytics, brand communication and go-to-market strategy.
          </p>
          <a href={site.quoteHref} className="btn btn-gold">
            GET A QUOTE <Arrow />
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="footer-head">Explore</p>
          <ul className="footer-list">
            {site.nav.map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link href={n.href} aria-current={active ? "page" : undefined}>
                    {n.label.charAt(0) + n.label.slice(1).toLowerCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <p className="footer-head">Services</p>
          <ul className="footer-list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title.join(" ")}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-head">Get in touch</p>
          <ul className="footer-list footer-contact">
            <li>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
                <Icon d={icons.phone} />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Icon d={icons.mail} />
                {site.email}
              </a>
            </li>
            {linkedin && (
              <li>
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
                  <Icon d={icons.linkedin} />
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.fullName}
        </p>
        <a href="#top" className="footer-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
