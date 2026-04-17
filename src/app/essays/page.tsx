import type { Metadata } from "next";

import { EssayBrowser } from "@/components/essay-browser";
import { getAllTags, getPublishedArticles } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Essays and notes on AI governance, enterprise architecture, platforms, and building durable operating models for AI.",
};

export default async function EssaysPage() {
  const [articles, tags] = await Promise.all([
    getPublishedArticles(),
    getAllTags(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Essays
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Notes in public</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          Writing on AI governance, enterprise architecture, infrastructure, and
          the operator-level realities behind serious AI adoption.
        </p>
      </div>
      <div className="mt-12">
        <EssayBrowser articles={articles} tags={tags} />
      </div>
    </div>
  );
}
