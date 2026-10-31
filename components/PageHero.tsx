import type { ReactNode } from "react";
import Link from "next/link";

// Dark opening banner shared by the inner pages: optional back link, gold eyebrow, a title whose last
// words can be picked out in gold, a lead line and an optional visual on the right.
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  back,
  aside,
  compact = false,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: ReactNode;
  back?: { href: string; label: string };
  aside?: ReactNode;
  /** Smaller title, for long headlines such as blog post titles. */
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero${aside ? " page-hero-split" : ""}${compact ? " page-hero-compact" : ""}`}>
      <div className="page-hero-copy">
        {back && (
          <Link href={back.href} className="page-hero-back">
            ← {back.label}
          </Link>
        )}
        <p className="eyebrow page-hero-eyebrow">{eyebrow}</p>
        <h1>
          {title}
          {accent && (
            <>
              {" "}
              <em>{accent}</em>
            </>
          )}
        </h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {children}
      </div>
      {aside && <div className="page-hero-aside">{aside}</div>}
    </section>
  );
}
