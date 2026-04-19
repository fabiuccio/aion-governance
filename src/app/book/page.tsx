import type { Metadata } from "next";
import Image from "next/image";

import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Govern or Fail — The Book",
  description:
    "Govern or Fail: The Executive Playbook for Enterprise AI That Actually Scales. Forthcoming 2026 from Fabio Aulico.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
            The book
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-tight text-ink">
            Govern or Fail
          </h1>
          <p className="mt-3 text-xl leading-8 text-ink/60">
            The Executive Playbook for Enterprise AI That Actually Scales
          </p>
          <p className="mt-2 text-sm text-ink/45">
            Fabio Aulico · Forthcoming 2026
          </p>
          <p className="mt-8 text-xl leading-9 text-ink/72">
            Between eighty and ninety-five percent of enterprise AI initiatives
            never reach production. The technology works in most of them. What
            fails is the operating model around it.
          </p>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            <em>Govern or Fail</em> is a practitioner&apos;s guide to the
            governance architecture that separates the AI programs that scale
            from the ones that stall. It is built around four interlocking
            frameworks — the Debt Quadrant for diagnosis, the Governed AI Loop
            for operating cadence, AIOS for runtime infrastructure, and the
            Executive Action Framework for the first 90 days.
          </p>
          <blockquote className="mt-8 border-l-2 border-accent pl-6">
            <p className="font-serif text-2xl leading-snug text-ink">
              Ungoverned AI is a short-term arbitrage that collapses. Governed
              AI is a compounding structural advantage by the third deployment.
            </p>
          </blockquote>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-6">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/cover-B-typographic.png"
              alt="Govern or Fail book cover"
              width={480}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-border bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            Who it is for
          </p>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Chief Digital Officers, CIOs, CTOs, and enterprise architects at
            mid-to-large organisations where AI programs are under board
            pressure to show returns and under regulatory pressure to demonstrate
            control. Readers already know AI governance matters. This book is
            for readers who need to make it operational.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            What is inside
          </p>
          <ul className="mt-4 space-y-2 text-base leading-7 text-ink/70">
            <li>
              Thirteen chapters across four parts: Why AI Fails at Scale, Where
              It Breaks in Practice, The Architecture Shift, Strategic
              Consequences
            </li>
            <li>Nine original diagrams</li>
            <li>
              Six appendices: Executive Action Framework, 10-question Maturity
              Assessment, Data Notes, Glossary, and Resources
            </li>
            <li>A 36-month cost scenario model with full assumptions</li>
          </ul>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            The four frameworks
          </p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-ink/70">
            <li>
              <span className="font-medium text-ink">Debt Quadrant</span> —
              diagnosis
            </li>
            <li>
              <span className="font-medium text-ink">Governed AI Loop</span> —
              operating cadence
            </li>
            <li>
              <span className="font-medium text-ink">AIOS</span> — runtime
              infrastructure
            </li>
            <li>
              <span className="font-medium text-ink">
                Executive Action Framework
              </span>{" "}
              — first 90 days
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-border bg-paper p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Tone
          </p>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            This is not a hype book and not a manifesto for reckless speed. It
            is aimed at readers who need clearer language, stronger operating
            models, and a credible path from experimentation to accountable use.
            The Salesforce case studies and enterprise architecture patterns
            are real. The cost scenarios use disclosed assumptions. The 90-day
            sprint has been stress-tested against the organisations where
            governance fails most visibly.
          </p>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Current status
          </p>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            Manuscript complete. Expert review in progress. Target publication:
            late 2026.
          </p>
          <p className="mt-5 text-base leading-7 text-ink/60">
            For a note when the book is available — and occasionally, for an
            essay — drop your email below.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <NewsletterSignup
          title="Get notified when it ships"
          description="A note when the book is available, with any early access or pre-order details. No funnel sequence."
          compact
          source="book"
        />
      </div>
    </div>
  );
}
