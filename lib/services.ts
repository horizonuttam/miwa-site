export type ServiceSection = {
  heading: string;
  points: string[];
  link?: { label: string; href: string };
};

export type Service = {
  slug: string;
  icon: string;
  title: [string, string];
  summary: string;
  intro: string;
  sections: ServiceSection[];
  tools?: { group: string; items: string[] }[];
};

export const services: Service[] = [
  {
    slug: "brand-business-communication",
    icon: "brand-communication",
    title: ["Brand", "Business Communication"],
    summary:
      "Integrate AI to strengthen brand communication, optimise customer engagement, and drive measurable sales growth with a direct impact on business performance.",
    intro:
      "We build brands that look and sound the same wherever customers meet them, from a social media post to a full website. Our team pairs artistic craft with large language models (LLMs) to move from idea to finished design faster, without losing the human touch.",
    sections: [
      {
        heading: "Complete branding for social media and the web",
        points: [
          "Visual identity drawn by hand in Adobe Photoshop and Procreate: logos, colour palettes, typography and illustration styles.",
          "LLMs used for market research, tone of voice, content calendars and first drafts of copy, which our team then reviews and refines.",
          "One consistent look and message across your social channels, website and print material.",
        ],
      },
      {
        heading: "Website development with artistic character",
        points: [
          "Websites designed and built around the right artistic elements for your brand, not generic templates.",
          "Proprietary mascots and brand characters that guide visitors and make your business memorable.",
          "Custom illustrations, icons and brand elements that you own outright.",
          "Fast, mobile-friendly and search-optimised from launch.",
        ],
      },
      {
        heading: "Brand IP and content products",
        points: [
          "Development of brand intellectual property: characters, visual stories and signature design assets.",
          "Brochures, company profiles, pitch decks and product catalogues.",
          "Infographics and explainer visuals that turn a complex offer into a simple story.",
          "SEO-optimised blogs and articles that grow your digital visibility.",
        ],
      },
    ],
    tools: [
      { group: "Design", items: ["Adobe Photoshop", "Procreate"] },
      { group: "AI", items: ["Large language models (LLMs)"] },
    ],
  },
  {
    slug: "ai-strategy-consulting",
    icon: "strategy-roadmap",
    title: ["Analytics & AI", "Strategy Consulting"],
    summary:
      "Integrate AI sustainably for long-term business value by embedding Agentic AI, knowledge retrieval, and LLMs into business workflows",
    intro:
      "We help leadership teams build an AI strategy that is tied to business results, planned around the capability they already have and owned jointly by business, data, IT and risk teams. We then stay involved to take the first use cases from pilot to production.",
    sections: [
      {
        heading: "The problems we solve",
        points: [
          "Too much AI noise: with every vendor now selling AI, it is hard to tell what will help your business.",
          "Pilots that never scale: tools that work in testing but are rejected by the people expected to use them, because they had no say in the design.",
          "No clear ownership: nobody accountable for AI risk, no approval route for new use cases and no agreed way to measure value.",
        ],
      },
      {
        heading: "AI readiness across six areas",
        points: [
          "Data foundations: quality, lineage and access to the data that feeds your models.",
          "Governance and risk: policies and controls aligned with the EU AI Act and GDPR.",
          "Infrastructure and MLOps: cloud platforms, monitoring and the processes that move models into production.",
          "People and ways of working: skills, roles and how business, data and IT teams work together.",
          "Use-case portfolio: a ranked pipeline scored on value, feasibility, risk and time to impact.",
          "Responsible AI: fairness, explainability and human oversight.",
        ],
      },
      {
        heading: "How we work",
        points: [
          "Leadership alignment: workshops that turn your business strategy into a clear AI ambition with a small set of priority use cases.",
          "Value and feasibility: business cases and scoring that show where AI will pay back first.",
          "Operating model: roles, governance and funding matched to your organisation's AI maturity.",
          "Pilot to production: playbooks, training and change management to move successful pilots into everyday operations.",
        ],
      },
      {
        heading: "What you get",
        points: [
          "A strategy your board can approve, with value and risk quantified.",
          "A ranked, costed list of use cases, each with a named owner.",
          "Governance that lasts beyond the first wave of projects, including an EU AI Act risk classification so high-risk uses are flagged early.",
          "Staff who use AI because they helped shape it.",
        ],
      },
    ],
  },
  {
    slug: "analytics-ai-solutions",
    icon: "ai-cloud",
    title: ["Analytics and AI", "Solutions"],
    summary:
      "Identify and track the right KPIs, leveraging machine learning and predictive analytics to deliver accurate forecasts and A.I and data-driven decisions on cloud.",
    intro:
      "We build the data and AI systems that turn strategy into results, from bringing your data together on the cloud to deploying AI agents that work alongside your teams.",
    sections: [
      {
        heading: "Data and analytics foundations",
        points: [
          "Data consolidation: scattered and duplicated data brought into one trusted source with agreed definitions.",
          "Cloud migration: data and workloads moved to a modern, secure cloud platform so costly legacy systems can be retired.",
          "Dashboards and reporting: automated pipelines and reports that show what is happening in the business, without manual rework.",
          "Machine learning and predictive analytics: KPI tracking, forecasting, customer churn prediction and segmentation.",
        ],
      },
      {
        heading: "AI solutions for companies and teams",
        points: [
          "Agentic AI: AI agents that plan and complete multi-step tasks, connect to your tools and systems, and hand over to a person where judgement is needed.",
          "Retrieval-augmented generation (RAG): AI assistants that answer questions from your own documents, policies and knowledge bases, with sources shown. Typical uses include customer support, HR and policy queries, sales enablement and internal search.",
          "Document and query automation: reviewing documents at scale and handling routine customer or staff queries.",
        ],
      },
      {
        heading: "Custom app development with vibe coding",
        points: [
          "AI-assisted development (vibe coding) turns an idea into a working prototype in days rather than months.",
          "Prototypes are tested with your team, then hardened into secure, maintainable applications.",
          "Internal tools, customer-facing apps and AI-powered workflows built around how your teams work.",
        ],
      },
    ],
    tools: [
      { group: "Cloud", items: ["Microsoft Azure", "Microsoft Fabric", "Amazon Web Services", "Oracle Cloud"] },
      { group: "EU sovereign cloud", items: ["OVHcloud", "Hetzner"] },
      { group: "AI services", items: ["Claude", "Microsoft Copilot", "OpenAI", "Mistral", "Qwen", "Kimi"] },
      { group: "Agents and integration", items: ["LangChain", "Model Context Protocol (MCP)"] },
      { group: "Analytics", items: ["Power BI", "Tableau", "Python", "R"] },
    ],
  },
  {
    slug: "steam-expertise",
    icon: "steam",
    title: ["STEAM Expertise", "(Our Intellectual Edge)"],
    summary:
      "We combine design thinking, creativity, and an artistic mindset with STEAM principles and prompt engineering to accelerate innovation and deliver effective solutions faster.",
    intro:
      "MIWA began as research into STEAM: Science, Technology, Engineering, Arts and Mathematics. That research shapes how we work. We treat art as a working discipline, not decoration. Design, storytelling, visual hierarchy, colour psychology, simplicity and interaction design are the tools that turn complex information into something people understand and act on.",
    sections: [
      {
        heading: "Our design thinking approach",
        points: [
          "Start with people: who will use this, what decision they need to make and what they already know.",
          "Make complexity simple: remove noise and use visual hierarchy so the key message lands first.",
          "Tell the story: one well-designed chart can explain in seconds what pages of technical language cannot.",
          "Prototype and refine: build quickly, watch how people use it and improve.",
        ],
      },
      {
        heading: "Design thinking in data and dashboards",
        points: [
          "Data alone does not create understanding. A dashboard is a communication experience, not only a reporting tool.",
          "The Irish Forestry Decision Support System shows this in practice. It covers land suitability, sustainability, economics and long-term scenarios in Tableau, and uses clean layouts, structured navigation and a mascot, TIMO, who guides users through each sheet.",
          "When people feel confident with the information in front of them, adoption, collaboration and decision speed all improve.",
        ],
        link: {
          label: "Read: How Arts Make Communication Easier",
          href: "/blog/how-arts-make-communication-easier-transforming-complex-data-into-human-understanding",
        },
      },
      {
        heading: "Design thinking in technology and AI products",
        points: [
          "AI assistants and agents designed around how people ask questions and make decisions, with clear answers and visible sources.",
          "Interfaces that show what the AI is doing and when a person should step in, so users trust the output.",
          "Onboarding, mascots and visual guides that make new tools friendly for non-technical users.",
          "Prompt engineering treated as a design task: clear structure, tone and examples that produce reliable results.",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
