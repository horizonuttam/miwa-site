export type PortfolioItem = { title: string; meta?: string; text?: string };

export type Founder = {
  slug: string;
  role: string;
  name: string;
  photo: string;
  bio: string;
  headline: string;
  location: string;
  linkedin: string;
  about: string[];
  focus: string[];
  education: PortfolioItem[];
  projects: PortfolioItem[];
  publications: PortfolioItem[];
  awards: PortfolioItem[];
  certifications: string[];
};

export const founders: Founder[] = [
  {
    slug: "uttam-sharma",
    role: "Founder, Business Lead",
    name: "Uttam Sharma",
    photo: "/media/founder-uttam.avif",
    bio: "Uttam is an analytics and AI professional at Idiro Analytics, Dublin, working across data science, machine learning, MLOps and agentic AI. MSc in Business Analytics, UCD Smurfit Business School.",
    headline: "Analytics and AI professional",
    location: "Dublin, Ireland",
    linkedin: "https://www.linkedin.com/in/uttam-sharma-0243a795/",
    about: [
      "Uttam works where business analytics, data science and AI meet, and is currently with Idiro Analytics in Dublin. The focus is on taking machine learning and AI from idea to production: MLOps, retrieval-augmented generation (RAG), agentic AI and the cloud platforms that run them.",
      "Uttam studied for an MSc in Business Analytics at UCD Michael Smurfit Graduate Business School, covering statistics, optimisation, machine learning, decision support systems and technology consulting. Before analytics, Uttam trained and published as an engineer, and co-wrote the book Mix it with the Arts, the research that started MIWA.",
    ],
    focus: ["Python", "Machine learning", "MLOps", "XGBoost", "RAG", "Agentic AI", "LangChain", "Microsoft Azure", "Docker", "Streamlit", "Tableau"],
    education: [
      {
        title: "MSc Business Analytics",
        meta: "UCD Michael Smurfit Graduate Business School, 2025 to 2026",
        text: "Statistics, business optimisation, algorithms and heuristics, machine learning, decision support systems, data management, AI and technology consulting.",
      },
    ],
    projects: [
      {
        title: "Reporter: Agent Skill for automated technical reporting",
        meta: "2026",
        text: "An AI agent skill that turns code repositories and research into structured PDF reports, with a repeatable workflow from analysis to validation.",
      },
      {
        title: "Beyond GDP: an Urban Happiness Index and machine learning model",
        meta: "2026",
        text: "A decision support system testing whether urban environmental quality explains life satisfaction, built on eight public datasets covering 122 countries and a PCA-weighted index.",
      },
      {
        title: "Marketing Campaign Score Optimiser",
        meta: "2025 to 2026",
        text: "An optimisation model and simulation tool that maximises campaign effectiveness within budget and audience limits.",
      },
      {
        title: "Predictive maintenance for offshore wind farms",
        meta: "EirGrid CleanerGrid Hackathon, 2026",
        text: "A decision support blueprint based on CRISP-DM, co-created with Shubhangi Gupta.",
      },
      {
        title: "Financial analytics: solar-based boilers in Ireland",
        meta: "2025",
        text: "A financial model of energy demand, supply and technology efficiency, co-created with Shubhangi Gupta.",
      },
      {
        title: "Irish Forestry Decision Support System",
        text: "Data modelling and a Tableau dashboard designed for technical and non-technical users, guided by the TIMO mascot.",
      },
    ],
    publications: [
      { title: "Mix it with the Arts", meta: "Notion Press, 2024. Co-authored with Shubhangi Gupta." },
      { title: "Experimental study to analyse parameters improving cabin air quality", meta: "SAE, 2022" },
      { title: "Design and development of low-cost mud pot air coolers", meta: "IRJET, 2021" },
      { title: "Development of a mini inline cutting machine using e-waste", meta: "IJSR, 2019" },
    ],
    awards: [
      { title: "Top 6 of 36 teams", meta: "RSM Consulting, 2026" },
      { title: "Best Pitch (Solar Ireland)", meta: "Green Tech HQ, 2025" },
      { title: "Runner-up, Covid-19 Ideathon", meta: "Indian Innovation Council, 2020" },
      { title: "Best Research Paper Award", meta: "IIT BHU, 2019" },
    ],
    certifications: [
      "Building with Claude API (Anthropic)",
      "Developing Machine Learning Models in Production (DataCamp)",
      "MLOps Concepts (DataCamp)",
      "Understanding Machine Learning (DataCamp)",
      "Introduction to Streamlit (Great Learning)",
      "ESG (Udemy)",
      "Data Visualisation on Tableau (Udemy)",
      "IoT Data Analytics (Udemy)",
      "Data Science (Udemy)",
    ],
  },
  {
    slug: "shubhangi-gupta",
    role: "Co-Founder, Strategy Lead",
    name: "Shubhangi Gupta",
    photo: "/media/founder-shubhangi.avif",
    bio: "Shubhangi is a consulting professional, with experience in profit improvement via cost reduction, and an MSc in Strategic Management from UCD Smurfit Business School, Dublin",
    headline: "Strategy and consulting professional",
    location: "Dublin, Ireland",
    linkedin: "https://www.linkedin.com/in/shubhangi-gupta-82741216a/",
    about: [
      "Shubhangi brings strategic management thinking and business acumen to MIWA. With a consulting background in profit improvement through cost reduction, Shubhangi leads MIWA's strategy and go-to-market work.",
      "Shubhangi holds an MSc in Strategic Management from UCD Smurfit Business School, Dublin, and co-wrote the book Mix it with the Arts, the research that started MIWA. Shubhangi's artistic practice shapes the brand and visual work behind MIWA's projects.",
    ],
    focus: ["Strategy consulting", "Profit improvement", "Cost reduction", "Go-to-market strategy", "Brand and visual design"],
    education: [
      { title: "MSc Strategic Management", meta: "UCD Smurfit Business School, Dublin" },
    ],
    projects: [
      {
        title: "Predictive maintenance for offshore wind farms",
        meta: "EirGrid CleanerGrid Hackathon, 2026",
        text: "A decision support blueprint based on CRISP-DM, co-created with Uttam Sharma.",
      },
      {
        title: "Financial analytics: solar-based boilers in Ireland",
        meta: "2025",
        text: "A financial model of energy demand, supply and technology efficiency, co-created with Uttam Sharma.",
      },
      {
        title: "Digital art IP for MakenBreak",
        text: "Original digital art that simplified complex physics concepts and reached more than 100 students.",
      },
    ],
    publications: [
      { title: "Mix it with the Arts", meta: "Notion Press, 2024. Co-authored with Uttam Sharma." },
    ],
    awards: [],
    certifications: [],
  },
];

export function getFounder(slug: string) {
  return founders.find((f) => f.slug === slug);
}
