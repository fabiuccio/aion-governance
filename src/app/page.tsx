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
            Fabio Aulico&apos;s notes on AI governance
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            Essays, frameworks, and book material on how enterprise AI becomes
            governable.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-ink/72">
            This is a personal publishing platform for operator-level
            reflections on AI governance, enterprise architecture, integration,
            and the practical discipline required to move beyond AI theater.
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
              Explore the book
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Core thesis
          </p>
          <p className="mt-5 font-serif text-3xl leading-tight text-ink">
            AI governance is not a paperwork layer added after the fact.
          </p>
          <p className="mt-5 text-base leading-7 text-ink/70">
            It is an operating discipline that has to show up in architecture,
            decision rights, interfaces, and delivery rhythm. The site is where
            I am working through that idea in public.
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
              The goal is simple: to collect essays, working ideas, and
              frameworks that are useful to serious operators dealing with AI in
              large organizations.
            </p>
            <p>
              It is intentionally personal-first. Less company posture, more
              clear thinking. Less funnel behavior, more durable writing.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-ink px-8 py-10 text-paper">
          <p className="text-xs uppercase tracking-[0.24em] text-paper/55">
            Current threads
          </p>
          <ul className="mt-6 space-y-4 text-base leading-7 text-paper/78">
            <li>Governance debt and its architectural roots</li>
            <li>The operating layer behind enterprise AI</li>
            <li>Frameworks from the book, explained without sales language</li>
            <li>Builder notes on tools, infrastructure, and publishing</li>
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
            Working structures from the book
          </h2>
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
        description="A simple email list for new essays, framework updates, and progress on the book. No funnel sequence. Just updates when there is something worth sending."
      />
    </div>
  );
}
