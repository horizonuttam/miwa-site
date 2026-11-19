// Tools and products MIWA builds. Add a new entry here and it appears on /tools-and-products.
export type Product = {
  slug: string;
  name: string;
  /** Short label shown above the name, e.g. "Agent skill". */
  kind: string;
  category: string;
  tagline: string;
  features: string[];
  uses: string[];
  worksWith: string[];
  requirements?: string;
  link: { href: string; label: string };
  /** Square badge or logo, stored under public/. */
  logo?: { src: string; alt: string };
  /** Example of the output, shown full width under the details. */
  sample?: { src: string; alt: string; width: number; height: number; caption: string };
};

export const products: Product[] = [
  {
    slug: "research-report",
    name: "Research Report",
    kind: "Agent skill",
    category: "Technical documentation",
    tagline:
      "Turns code analysis and session research into professionally typeset PDF reports and technical design documents.",
    features: [
      "Scans a repository for languages, dependencies and architecture",
      "Tracks the questions, sources and dead ends from your research session, and cites external sources",
      "Renders PDFs with a cover page, numbered sections, KPI callouts, charts and tables",
      "Works from a short brief: length, audience and scope",
    ],
    uses: ["High-level designs", "Low-level designs", "Audits", "Handover documents", "Research summaries"],
    worksWith: ["Claude Code", "Cursor", "Codex CLI", "Any agent that can run local Python"],
    requirements: "Python 3.9+ with ReportLab and Matplotlib",
    link: { href: "https://www.agensi.io/skills/research-report", label: "GET IT ON AGENSI" },
    logo: {
      src: "/products/research-report-logo.png",
      alt: "Reporter badge: Research into reports, a MIWA skill",
    },
    sample: {
      src: "/products/research-report-sample.png",
      alt: "Three pages from a sample report: a cover page, an executive summary with KPI callouts and a recommendation, and a findings page with a SQL query and data table",
      width: 1249,
      height: 600,
      caption:
        "Sample output: cover, executive summary and findings pages from a five-page report on a caching strategy for an orders API.",
    },
  },
];
