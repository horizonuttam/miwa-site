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
  /** Examples of the output, each shown full width under the details. */
  samples?: { src: string; alt: string; width: number; height: number; caption: string }[];
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
    samples: [
      {
        src: "/products/research-report-sample.png",
        alt: "Three pages from a sample report: a cover page, an executive summary with KPI callouts and a recommendation, and a findings page with a SQL query and data table",
        width: 1249,
        height: 600,
        caption:
          "Sample output: cover, executive summary and findings pages from a five-page report on a caching strategy for an orders API.",
      },
    ],
  },
  {
    slug: "rag-testset-builder",
    name: "RAG Testset Builder",
    kind: "Agent skill",
    category: "LLM Ops",
    tagline:
      "Builds verifiable ground-truth test sets for RAG systems from your own documents, with every expected answer tied to an exact quote and page.",
    features: [
      "Samples documents across the corpus with a fixed seed, at random, by group (year, folder or type) or from your own list",
      "Extracts atomic fact cards from each page and rejects any that do not quote the source word for word",
      "Plans queries across seven types, from lookups and filters to trends, summaries and edge cases",
      "Runs scripted checks on quotes, numbers, answerability and \"nothing found\" answers before anything reaches the test set",
      "Keeps people in the loop: you approve the sample, the query plan and the final review sheet",
      "Exports versioned .jsonl files for automated scoring and a .docx test document for manual testers",
    ],
    uses: [
      "Golden sets for internal chatbots",
      "Persona and out-of-scope testing",
      "Regression scoring in CI/CD",
      "User acceptance testing",
    ],
    worksWith: ["Claude Code", "Cursor", "Codex CLI", "Any agent that can run local Python"],
    requirements:
      "Python 3.12+ and an OpenAI, Azure OpenAI or Anthropic key. Documents must be in a local folder or listed in a CSV.",
    link: { href: "https://www.agensi.io/skills/rag-testset-builder", label: "GET IT ON AGENSI" },
    logo: {
      src: "/products/rag-testset-builder-logo.png",
      alt: "RAG Testset Builder badge: Queries with ground truth, a MIWA skill",
    },
    samples: [
      {
        src: "/products/rag-testset-builder-workflow.png",
        alt: "Workflow diagram in three lanes: user and Claude checkpoints, repeatable scripts, and the user's own LLM, running from set-up through sampling, fact cards, query plan, generation, automatic checks, human review and freeze to the final test document",
        width: 1902,
        height: 703,
        caption:
          "How it works: scripts and your LLM do the heavy lifting, while you sign off the sample, the query plan and the final review before the set is frozen.",
      },
      {
        src: "/products/rag-testset-builder-scoring.png",
        alt: "Page from a generated test document showing query types, a pass, partial and fail scoring table by answer type, and a blank results table",
        width: 1092,
        height: 781,
        caption:
          "Sample output: the scoring guide and results table from a generated test document, ready for manual testers.",
      },
    ],
  },
];
