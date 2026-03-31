import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#111827", // Lead gray / Slate 900
          light: "#F9FAFB", // Minimal white / Gray 50
          accent: "#2563EB", // Professional Blue / Indigo 600
          muted: "#4B5563", // Text secondary / Gray 600
          border: "#E5E7EB", // Subtle borders / Gray 200
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
