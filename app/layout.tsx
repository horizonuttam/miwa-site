import type { Metadata } from "next";
import { Amatic_SC, Lato, Oswald, Playfair_Display, Work_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Google stand-ins for the Wix fonts: Oswald for DIN Neuzeit Grotesk Condensed,
// Work Sans for Work Sans and Wix Madefor, Playfair Display for blog headings.
const work = Work_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700"], variable: "--font-work", display: "swap" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"], style: ["normal", "italic"], variable: "--font-lato", display: "swap" });
const amatic = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-amatic", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-din", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Home | MIWA",
    template: "%s | MIWA",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "MIWA | Mix it with the Arts",
    description: site.description,
    url: site.url,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "MIWA logo" }],
  },
  twitter: { card: "summary" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IE"
      className={`${work.variable} ${lato.variable} ${amatic.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.fullName,
              alternateName: site.name,
              url: site.url,
              logo: `${site.url}/logo.png`,
              description: site.description,
              email: site.email,
              telephone: site.phone,
              sameAs: site.socials.map((s) => s.href),
            }),
          }}
        />
      </body>
    </html>
  );
}
