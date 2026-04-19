import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { getFeaturedArticles } from "@/lib/content/repository";

export default async function HomePage() {
  const featuredArticles = await getFeaturedArticles();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-24 pt-16 sm:px-8">

      {/* Hero */}
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Fabio Aulico · AION Governance
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-[1.08] text-ink sm:text-5xl">
          Writing about enterprise AI — as architecture, not policy.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
          A publishing platform for operators working on the gap between AI
          ambition and production reality. Essays, tools, and the forthcoming
          book <em>Govern or Fail</em>.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper"
          >
            Read the book pitch
          </Link>
          <Link
            href="/essays"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink hover:border-accent/50 transition-colors"
          >
            Read the essays
          </Link>
          <Link
            href="/assessment"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink hover:border-accent/50 transition-colors"
          >
            Use the tools
          </Link>
        </div>
      </section>

      {/* Core Thesis + Why This Exists */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-border border-l-[3px] border-l-[#8FA680] bg-shell p-8">
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
      </section>

      {/* Directory band */}
      <section>
        <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="py-8 sm:py-0 sm:pr-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink/40">
              The book
            </p>
            <p className="mt-3 text-base leading-7 text-ink/70">
              <em>Govern or Fail</em>: the full argument, thirteen chapters,
              forthcoming late 2026.
            </p>
            <Link
              href="/book"
              className="mt-3 inline-block text-sm text-ink/60 hover:text-ink transition-colors"
            >
              Read the pitch →
            </Link>
          </div>
          <div className="py-8 sm:px-8 sm:py-0">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink/40">
              Essays
            </p>
            <p className="mt-3 text-base leading-7 text-ink/70">
              Working out the argument in public, with new pieces as the book
              progresses.
            </p>
            <Link
              href="/essays"
              className="mt-3 inline-block text-sm text-ink/60 hover:text-ink transition-colors"
            >
              Read the essays →
            </Link>
          </div>
          <div className="py-8 sm:pl-8 sm:py-0">
            <p className="text-[10px] uppercase tracking-[0.22em] text-ink/40">
              Tools
            </p>
            <p className="mt-3 text-base leading-7 text-ink/70">
              Interactive Debt Quadrant, 25-question maturity assessment,
              90-day executive action sprint.
            </p>
            <Link
              href="/assessment"
              className="mt-3 inline-block text-sm text-ink/60 hover:text-ink transition-colors"
            >
              Open the tools →
            </Link>
          </div>
        </div>
      </section>

      {/* A note on this site */}
      <section className="py-2">
        <hr className="border-border" />
        <div className="py-12 sm:py-14">
          <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
            A note on this site
          </p>
          <div className="mt-8 space-y-5 font-serif text-xl leading-9 text-ink">
            <p>
              I started paying close attention to AI in late 2022, when GPT-3.5
              made it clear the work of the next decade was going to be different
              from the work of the last one. The question was what that actually
              meant inside large organisations.
            </p>
            <p>
              Before that, I spent fifteen years on the enterprise side of
              technology — integration architecture, middleware, DevOps, and
              complex programme delivery at companies like Swisscom, UBS,
              Philips, and Roche, then consulting and solution architecture in
              Switzerland. I am now a Senior Account Partner at Salesforce. The
              constant across those roles was the same gap: the distance between
              what new technology could do and what enterprises could actually
              absorb.
            </p>
            <p>
              Since 2023 I have been learning this new wave by building with it.
              Python notebooks, fine-tuning small models, quantisation, LangChain
              and LangGraph, MCP, agents, vibe-coding tools, a home lab built
              around an RTX 4090 running local models. This site is coded by me
              with Codex and Claude Code. I find the shortest path to
              understanding a technology is to put my hands on it.
            </p>
            <p>
              What I saw, repeatedly, was the gap between how fast AI moves in
              the open world and how slowly it metabolises inside enterprises.
              That is what the book is about — and what this site is for. Part
              field notes from my own experiments, part the working-out of the
              argument that became <em>Govern or Fail</em>.
            </p>
          </div>
        </div>
        <hr className="border-border" />
      </section>

      {/* Recent essays */}
      <section className="space-y-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Recent essays
          </p>
          <Link href="/essays" className="text-sm text-ink/60 hover:text-ink transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter — bare, left-aligned */}
      <section>
        <hr className="border-border mb-12" />
        <NewsletterSignup
          bare
          title="Book updates and occasional notes"
          description="A note when there is something worth sending — new essays, framework updates, and progress on Govern or Fail. No funnel sequence."
        />
      </section>

    </div>
  );
}
