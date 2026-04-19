import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Four interlocking frameworks from Govern or Fail — the Debt Quadrant, Governed AI Loop, AIOS, and Executive Action Framework.",
};

const FRAMEWORKS = [
  {
    number: "01",
    slug: "debt-quadrant",
    name: "Debt Quadrant",
    question: "Where does your AI estate sit?",
    summary:
      "Plots your AI systems on two axes — Governance Discipline and Value Velocity — placing the estate in one of four states: Governed, Reckless, Bureaucratic, or Stagnant. Diagnosis precedes treatment.",
    cta: { label: "Use the interactive tool", href: "/debt-quadrant" },
    bookChapter: "Chapters 3–4",
  },
  {
    number: "02",
    slug: "governed-ai-loop",
    name: "Governed AI Loop",
    question: "How do you run governed AI in production?",
    summary:
      "Five continuous phases: Align, Constrain, Operate, Assure, Evolve. Not a project methodology — an operating rhythm that runs for the full lifetime of every AI system in production.",
    cta: { label: "See full definition in glossary", href: "/glossary" },
    bookChapter: "Chapters 6–12",
  },
  {
    number: "03",
    slug: "aios",
    name: "AIOS",
    question: "What do you build to make that possible?",
    summary:
      "The governed control plane that centralises routing, identity, policy enforcement, and audit logging for all AI system requests. A design target your existing infrastructure grows into — not a product you can buy.",
    cta: { label: "See full definition in glossary", href: "/glossary" },
    bookChapter: "Chapter 11",
  },
  {
    number: "04",
    slug: "executive-action-framework",
    name: "Executive Action Framework",
    question: "How do you start in the next 90 days?",
    summary:
      "A 90-day, executive-sponsored sprint across five phases: Inventory, Debt Audit, Architect, Govern, Institutionalise. Five templates, five deliverables, one board-ready output at Day 90.",
    cta: { label: "Run the 90-day sprint", href: "/sprint" },
    bookChapter: "Chapter 13",
  },
];

export default function FrameworksPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Frameworks
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">
          Four frameworks. One operating model.
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          Read in order: the Debt Quadrant diagnoses where your estate sits, the
          Governed AI Loop is the operating cadence, AIOS is the infrastructure,
          and the Executive Action Framework is how you start. The full argument
          is in the book.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {FRAMEWORKS.map((fw) => (
          <div
            key={fw.slug}
            className="rounded-[1.75rem] border border-border bg-paper p-7 flex flex-col gap-5"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.22em] text-ink/35">
                  {fw.number} of 4
                </p>
                <span className="text-xs text-ink/35">{fw.bookChapter}</span>
              </div>
              <h2 className="mt-2 font-serif text-3xl text-ink">{fw.name}</h2>
              <p className="mt-1 text-sm italic text-ink/50">{fw.question}</p>
              <p className="mt-4 text-base leading-7 text-ink/70">
                {fw.summary}
              </p>
            </div>
            <div className="mt-auto">
              <Link
                href={fw.cta.href}
                className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink hover:border-accent/50 transition-colors"
              >
                {fw.cta.label} →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border border-border bg-shell p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
          The full argument
        </p>
        <p className="mt-4 text-lg leading-8 text-ink/70">
          The glossary defines every term precisely. The tools make two of the
          four frameworks interactive. The complete framework argument — with
          diagrams, worked examples, and the cases where each breaks down —
          is in <em>Govern or Fail</em>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper hover:opacity-90 transition-opacity"
          >
            About the book
          </Link>
          <Link
            href="/glossary"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink hover:border-accent/50 transition-colors"
          >
            Browse the glossary
          </Link>
        </div>
      </div>
    </div>
  );
}
