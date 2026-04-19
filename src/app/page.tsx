import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { getFeaturedArticles, getFrameworks } from "@/lib/content/repository";

export default async function HomePage() {
  const [featuredArticles, frameworks] = await Promise.all([
    getFeaturedArticles(),
    getFrameworks(),
  ]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-24 pt-16 sm:px-8">
      <section className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
            Fabio Aulico · AION Governance
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Enterprise AI scales when governance is architecture, not policy.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-ink/72">
            A publishing platform for operators working on the gap between AI
            ambition and production reality. Essays, frameworks, and the
            forthcoming book —{" "}
            <em>
              Govern or Fail: The Executive Playbook for Enterprise AI That
              Actually Scales.
            </em>
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/essays"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper"
            >
              Read the essays
            </Link>
            <Link
              href="/book"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm text-ink"
            >
              About the book
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Core thesis
          </p>
          <p className="mt-5 font-serif text-3xl leading-tight text-ink">
            Ungoverned AI is a short-term arbitrage that collapses. Governed AI
            is a compounding structural advantage by the third deployment.
          </p>
          <p className="mt-5 text-base leading-7 text-ink/70">
            The governance failures breaking enterprise AI programs are not
            policy failures. They are architecture failures — distance between
            what governance documents say and what the infrastructure actually
            enforces.
          </p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-border bg-paper p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Why this exists
          </p>
          <div className="mt-5 space-y-5 text-lg leading-8 text-ink/74">
            <p>
              Between eighty and ninety-five percent of enterprise AI initiatives
              never reach production. The technology works in most of them. What
              fails is the operating model around it.
            </p>
            <p>
              This site works through that problem in public — the gap between
              what governance documents say and what production infrastructure
              actually enforces. Less company posture, more clear thinking.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-ink px-8 py-10 text-paper">
          <p className="text-xs uppercase tracking-[0.24em] text-paper/55">
            Current threads
          </p>
          <ul className="mt-6 space-y-4 text-base leading-7 text-paper/78">
            <li>
              The Debt Quadrant: diagnosing where your AI estate actually sits
            </li>
            <li>
              AIOS: the runtime layer that turns governance documents into
              enforced policy
            </li>
            <li>
              The Velocity Thesis: why governed teams overtake ungoverned ones by
              deployment three
            </li>
            <li>
              EU AI Act preparation: what the delayed enforcement actually
              changes
            </li>
            <li>
              Builder notes on writing, publishing, and AI-assisted development
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
              Recent essays
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink">Start here</h2>
          </div>
          <Link href="/essays" className="text-sm text-ink/60 hover:text-ink">
            View all essays
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Frameworks
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink">
            Four frameworks. One operating model.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">
            The Debt Quadrant diagnoses where your estate sits. The Governed AI
            Loop is the operating cadence. AIOS is the infrastructure. The
            Executive Action Framework is how you start.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {frameworks.map((framework) => (
            <Link
              key={framework.id}
              href={`/frameworks/${framework.slug}`}
              className="rounded-[1.75rem] border border-border bg-paper p-6 transition hover:border-accent/35"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
                Framework
              </p>
              <h3 className="mt-3 font-serif text-3xl text-ink">
                {framework.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-ink/70">
                {framework.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSignup
        title="Book updates and occasional notes"
        description="A note when there is something worth sending — new essays, framework updates, and progress on Govern or Fail. No funnel sequence."
      />
    </div>
  );
}
