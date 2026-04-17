export const siteConfig = {
  name: "Fabio Aulico",
  shortName: "AION",
  title: "Fabio Aulico | Essays on AI governance and enterprise architecture",
  description:
    "Personal essays, frameworks, and book notes on AI governance, enterprise architecture, and the operating realities of serious AI adoption.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aiongovernance.com",
  email: "fabio@aiongovernance.com",
  social: {
    linkedin: "https://www.linkedin.com",
  },
} as const;
