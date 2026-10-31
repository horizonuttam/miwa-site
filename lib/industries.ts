// Sectors MIWA works with. Each lists what MIWA offers under its four capabilities.
export type Capability = "AI strategy" | "Go-to-market" | "Analytics" | "Software";

export type Industry = {
  slug: string;
  icon: string;
  name: string;
  intro: string;
  offers: Partial<Record<Capability, string>>;
};

export const capabilities: { name: Capability; icon: string; text: string; href: string }[] = [
  {
    name: "AI strategy",
    icon: "ai-strategy",
    text: "Find the AI use cases worth doing, build the business case and roll them out with clear governance.",
    href: "/services/ai-strategy-consulting",
  },
  {
    name: "Go-to-market",
    icon: "strategy-roadmap",
    text: "Primary and secondary research, positioning, pricing and launch plans for new products and markets.",
    href: "/services/brand-business-communication",
  },
  {
    name: "Analytics",
    icon: "analytics",
    text: "The right KPIs, dashboards and predictive models, so decisions rest on evidence rather than instinct.",
    href: "/services/analytics-ai-solutions",
  },
  {
    name: "Software",
    icon: "ai-cloud",
    text: "Agentic AI, RAG assistants, web dashboards and small apps, built quickly and hosted where you need them.",
    href: "/services/analytics-ai-solutions",
  },
];

export const audiences = [
  { icon: "startups", name: "Startups", text: "AI-ready brands and launch strategies from day one." },
  { icon: "businesses", name: "Growing businesses", text: "Analytics, AI and go-to-market support to scale with confidence." },
  {
    icon: "social-impact",
    name: "Social impact and public bodies",
    text: "STEAM thinking that turns complex ideas into clear, accessible communication.",
  },
];

export const industries: Industry[] = [
  {
    slug: "retail",
    icon: "ind-retail",
    name: "Retail",
    intro: "Shops, e-commerce and multichannel retailers competing on range, price and customer experience.",
    offers: {
      "AI strategy": "AI for demand forecasting, pricing and customer service, prioritised by payback.",
      "Go-to-market": "Market entry, channel strategy and launch plans built on primary and secondary research.",
      Analytics: "Sales, basket and customer dashboards that show what sells, where and to whom.",
      Software: "Product recommendations, stock alerts and customer support assistants.",
    },
  },
  {
    slug: "fmcg",
    icon: "ind-fmcg",
    name: "FMCG",
    intro: "Consumer brands that need to stand out on the shelf and online.",
    offers: {
      "AI strategy": "AI-assisted research, content and campaign testing at speed.",
      "Go-to-market": "Positioning, pricing and launch strategy for new products and markets.",
      Analytics: "Campaign, channel and sell-through tracking against clear KPIs.",
      Software: "Websites, brand assets and content tools built around your identity.",
    },
  },
  {
    slug: "education",
    icon: "ind-education",
    name: "Education",
    intro: "Schools, edtech companies and training providers making learning engaging.",
    offers: {
      "AI strategy": "Safe, practical AI adoption for teaching and administration.",
      "Go-to-market": "Programme launch and enrolment strategy.",
      Analytics: "Learner engagement and outcome dashboards.",
      Software: "Learning apps, digital art IP and STEAM content that simplify complex topics.",
    },
  },
  {
    slug: "energy",
    icon: "ind-energy",
    name: "Energy",
    intro: "Utilities, renewables developers and energy service companies.",
    offers: {
      "AI strategy": "Predictive maintenance and forecasting use cases, assessed for value and risk.",
      "Go-to-market": "Market sizing and entry plans for new energy products.",
      Analytics: "Financial models of demand, supply and technology efficiency.",
      Software: "Decision support systems for asset and grid planning.",
    },
  },
  {
    slug: "environment",
    icon: "ind-environment",
    name: "Environment",
    intro: "Forestry, land, water and environmental agencies and consultancies.",
    offers: {
      "AI strategy": "Machine learning on environmental indicators for monitoring and scenario planning.",
      Analytics: "Data modelling of land suitability, sustainability and long-term scenarios.",
      Software: "Interactive decision support dashboards for technical and non-technical users.",
    },
  },
  {
    slug: "esg",
    icon: "ind-esg",
    name: "ESG",
    intro: "Organisations measuring, improving and reporting their environmental, social and governance performance.",
    offers: {
      "AI strategy": "Responsible AI governance aligned with the EU AI Act and GDPR.",
      "Go-to-market": "Clear communication of sustainability credentials to customers and investors.",
      Analytics: "ESG data collection, KPI tracking and reporting dashboards.",
      Software: "Automated data pipelines and reporting tools.",
    },
  },
  {
    slug: "construction",
    icon: "ind-construction",
    name: "Civil & Construction",
    intro: "Contractors, engineering firms and property developers.",
    offers: {
      "AI strategy": "AI for document review, tender analysis and site reporting.",
      "Go-to-market": "Bid strategy and market positioning.",
      Analytics: "Project cost, schedule and safety dashboards.",
      Software: "Field apps and knowledge assistants for project teams.",
    },
  },
  {
    slug: "automobile",
    icon: "ind-auto",
    name: "Automobile & Suppliers",
    intro: "Vehicle makers, dealers and component suppliers.",
    offers: {
      "AI strategy": "Predictive maintenance, quality inspection and demand planning.",
      "Go-to-market": "Entry strategy for new models, parts and markets.",
      Analytics: "Supplier performance, inventory and sales analytics.",
      Software: "Dealer and supplier portals, and RAG assistants over technical manuals.",
    },
  },
  {
    slug: "food-agriculture",
    icon: "ind-food",
    name: "Food & Agriculture",
    intro: "Growers, food producers, wholesalers and food retailers.",
    offers: {
      "AI strategy": "Yield and demand forecasting, and automated quality checks.",
      "Go-to-market": "Route to market for new food products and export markets.",
      Analytics: "Supply chain, waste and margin dashboards.",
      Software: "Traceability tools and simple apps for farm and factory teams.",
    },
  },
];

export const techProducts = [
  {
    name: "Agentic AI",
    text: "AI agents that plan and complete multi-step tasks, connect to your tools and hand over to a person where judgement is needed.",
  },
  {
    name: "RAG solutions",
    text: "Assistants that answer from your own documents and knowledge bases with sources shown, for support, HR, sales and internal search.",
  },
  {
    name: "Analytics products",
    text: "Machine learning features built into your product, from churn prediction to forecasting and segmentation.",
  },
  {
    name: "Web-based dashboards",
    text: "Interactive dashboards in Power BI, Tableau or as custom web apps, designed for the people who use them.",
  },
  {
    name: "Small apps, cloud or local",
    text: "Lightweight tools built fast with AI-assisted development, hosted on Azure, AWS or EU cloud, or run on your own machines for privacy.",
  },
  {
    name: "Product go-to-market",
    text: "Positioning, pricing and launch strategy that gets your digital product in front of the right users.",
  },
];
