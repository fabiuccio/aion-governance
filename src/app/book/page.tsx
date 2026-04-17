import type { Metadata } from "next";

import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Book",
  description:
    "A forthcoming book on AI governance, enterprise architecture, and the operating model required to move from experiments to governed AI systems.",
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
            A book about governance as operating reality, not ceremonial policy.
          </h1>
          <p className="mt-6 text-xl leading-9 text-ink/72">
            The book brings together the core argument behind this site:
            enterprise AI succeeds when governance becomes part of the operating
            model rather than an afterthought layered onto experiments.
          </p>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <div className="aspect-[4/5] rounded-[1.5rem] border border-border bg-paper p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-ink/40">
              Working cover
            </p>
            <div className="mt-16">
              <p className="font-serif text-4xl leading-tight text-ink">
                The Governed
                <br />
                Operating Model
              </p>
              <p className="mt-6 text-sm leading-6 text-ink/55">
                Notes on architecture, control, and enterprise AI beyond the
                pilot stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-border bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            What problem it addresses
          </p>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Why AI programs keep stalling between demo success and production
            credibility, and what governance has to do with that gap.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            Who it is for
          </p>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Enterprise architects, technology leaders, governance teams, and
            operators trying to make AI legible inside real organizations.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-border bg-paper p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
            What sits inside
          </p>
          <p className="mt-4 text-base leading-7 text-ink/70">
            Frameworks such as the Governed AI Loop, Debt Quadrant, AIOS, and a
            practical action sequence for the first serious governance moves.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-border bg-paper p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Tone of the project
          </p>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            This is not a hype book and not a manifesto for reckless speed. It
            is aimed at readers who want clearer language, stronger operating
            models, and a more credible path from experimentation to accountable
            use.
          </p>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Current status
          </p>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            Chapters are being developed alongside essays and framework notes on
            this site. The public material is designed to stand on its own while
            also feeding the larger book.
          </p>
        </div>
      </section>

      <div className="mt-20">
        <NewsletterSignup
          title="Book updates"
          description="If you want a note when the manuscript, excerpts, or launch details are ready, this is the simplest way to keep track."
          compact
          source="book"
        />
      </div>
    </div>
  );
}
