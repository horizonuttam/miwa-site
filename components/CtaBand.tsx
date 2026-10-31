import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow } from "./Arrow";

// Closing call to action shared by the inner pages. The secondary button always asks for a quote; the
// primary one defaults to the services page and can point elsewhere on pages that are already about services.
export function CtaBand({
  text = "Tell us about your business, and we will show you where AI, analytics and design can make a difference.",
  primary = { href: "/services", label: "EXPLORE OUR SERVICES" },
}: {
  text?: string;
  primary?: { href: string; label: string };
}) {
  return (
    <section className="cta-band">
      <h2>
        Ready to <em>mix it with the arts</em>?
      </h2>
      <p>{text}</p>
      <div className="hero-actions">
        <Link href={primary.href} className="btn btn-gold">
          {primary.label} <Arrow />
        </Link>
        <a href={site.quoteHref} className="btn btn-ghost">
          GET A QUOTE <Arrow />
        </a>
      </div>
    </section>
  );
}
