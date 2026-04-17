# AION Governance — Project Context

## Strategic Vision

AION is a framework brand, not yet a company. The name is a deliberate choice: Aion is the Hellenistic god of cyclical time, eternity, and the perpetual — which maps naturally to the Governed AI Loop and the idea of continuous, self-sustaining AI governance. It also reads as "AI-on", which is a functional secondary reading.

The sequence is: **book → Salesforce review conversation → AION public launch**.

Do not build a consulting company website before there are consulting clients. Do not publish a full services offering before the employment situation is resolved.

---

## Current Situation

- The founder is currently employed (at Salesforce). The website cannot present as a live company or consultancy until that situation is resolved.
- AION is being built as a framework brand first — something that can exist without legal incorporation.
- The book is the primary vehicle for establishing credibility and building an audience.
- The maturity assessment is the key interactive tool that drives email list sign-ups pre-launch.

---

## MVP Website Scope (Launch Phase)

The site at launch is a **book companion site with a maturity assessment**. Nothing more.

### Active routes (MVP):
| Route | Purpose |
|-------|---------|
| `/` | Hero + problem statement + four frameworks (brief) + assessment CTA |
| `/assessment` | AI governance maturity score tool |
| `/book` | Book page with pre-launch email capture |
| `/about` | Brief bio and the AION rationale |

### Hidden routes (built, not linked):
These pages exist in the codebase and are accessible by direct URL, but are not linked from the navigation or footer. They will be enabled when the company launches publicly.

| Route | Purpose |
|-------|---------|
| `/frameworks` | Full framework documentation |
| `/services` | Consulting services offering |
| `/resources` | Educational materials |
| `/contact` | Contact form |

### Legal pages (always accessible via footer):
| Route | Purpose |
|-------|---------|
| `/disclaimer` | Legal disclaimer (general info, not advice) |
| `/privacy` | Privacy notice (template, to be reviewed) |
| `/imprint` | Operator details (to be completed upon incorporation) |

---

## What AION Is (For Now)

- A framework for governing AI as a continuous operating discipline
- Built around four proprietary frameworks:
  - **Governed AI Loop** — continuous 5-phase governance cycle (Align → Constrain → Operate → Assure → Evolve)
  - **AI Debt Quadrant** — 2×2 risk/governance debt matrix
  - **Executive Action Framework** — 90-day board-level action plan
  - **AIOS (AI Operating System)** — M/A/C architecture for AI operations
- The book title is *The Governed Operating Model*

---

## What AION Is Not (Yet)

- Not an incorporated company
- Not a consulting firm accepting clients
- Not a service provider
- The website should not suggest otherwise during the MVP phase

---

## On the "Hidden Menu" Strategy

All full-site pages (services, resources, frameworks, contact) are kept in the codebase. When the time comes to launch the full company site, the navigation and footer links are re-enabled — no rebuild required.

To re-enable: add the hidden routes back to `navLinks` in [Navigation.tsx](src/components/Navigation.tsx) and add sections back to [Footer.tsx](src/components/Footer.tsx).

---

## Legal & Compliance Notes

- Privacy notice and imprint are working drafts. Both need legal review before formal launch.
- The disclaimer explicitly notes that AION content does not constitute legal, regulatory, financial, or investment advice — and calls out EU AI Act, ISO/IEC 42001, and NIST AI RMF specifically.
- Examples on the site are anonymised or wholly illustrative — not references to real clients.
- No legal entity exists yet. The imprint has TODO markers for company name, registration number, address, and contact email.

---

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom brand tokens:
  - `brand.dark` — #111827
  - `brand.accent` — #2563EB (blue, used for CTAs)
  - `brand.muted` — #4B5563
- Icons: **Lucide React**
- Hosted on: [TODO — add hosting provider]

---

## Open TODOs

- [ ] Choose and configure email delivery provider (contact form + newsletter)
- [ ] Choose and configure privacy-respecting analytics
- [ ] Insert contact email address for privacy and imprint pages
- [ ] Insert full legal entity details upon incorporation
- [ ] Have privacy notice reviewed by a data protection professional
- [ ] Decide on domain name (govai.io / aion.ai / other)
- [ ] Set up pre-launch email list capture on `/book` page
