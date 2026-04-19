export const siteConfig = {
  name: "Fabio Aulico",
  shortName: "AION",
  title: "Fabio Aulico | Essays on AI governance and enterprise architecture",
  description:
    "Fabio Aulico's essays and forthcoming book on why enterprise AI scales when governance is architecture, not policy.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aion-governance.ch",
  email: "fabio@aion-governance.ch",
  social: {
    linkedin: "https://www.linkedin.com/in/faulico",
  },
} as const;
