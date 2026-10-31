// Content mirrors the live Wix site at miwa.org.in word for word.
export const site = {
  name: "MIWA",
  fullName: "Mix it with the Arts",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.miwa.org.in",
  tagline: "Where Imagination Meets Intelligence",
  motto: "Arts is the new Sport!",
  description:
    "With roots in Science, Tech, Engineering, Arts & Math, we merge logic with creativity to deliver AI, Analytics, Brand Communication and Go-to-Market solutions that are innovative, evidence-based, impactful and AI-ready.",
  email: "uttamsharma78@gmail.com",
  quoteHref: "mailto:uttamsharma78@gmail.com?subject=Lets%20catch%20up!",
  phone: "+353-894291711",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/uttam-sharma-0243a795/" },
  ],
  nav: [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "INDUSTRIES", href: "/industries" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "BLOGS", href: "/blog" },
  ],
  book: "https://www.amazon.com/Mix-Arts-TRANSFORMING-EDUCATION-DEVELOPMENT/dp/B0DGPQ9LTZ",
};
