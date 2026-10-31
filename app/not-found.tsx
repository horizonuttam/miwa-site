import Link from "next/link";
import SiteLayout from "./(site)/layout";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Arrow";

export default function NotFound() {
  return (
    <SiteLayout>
      <PageHero eyebrow="ERROR 404" title="Page not" accent="found" lead="That page doesn't exist or has moved.">
        <div className="hero-actions">
          <Link href="/" className="btn btn-gold">
            BACK TO HOME <Arrow />
          </Link>
          <Link href="/blog" className="btn btn-ghost">
            READ THE BLOG <Arrow />
          </Link>
        </div>
      </PageHero>
    </SiteLayout>
  );
}
