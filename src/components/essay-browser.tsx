"use client";

import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/article-card";
import { ArticleWithRelations, Tag } from "@/lib/content/types";

interface EssayBrowserProps {
  articles: ArticleWithRelations[];
  tags: Tag[];
}

export function EssayBrowser({ articles, tags }: EssayBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("all");

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesQuery =
        query.length === 0 ||
        [article.title, article.subtitle, article.excerpt]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesTag =
        activeTag === "all" ||
        article.tags.some((tag) => tag.slug === activeTag);

      return matchesQuery && matchesTag;
    });
  }, [activeTag, articles, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-border bg-shell p-6">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search essays"
          className="h-12 rounded-full border border-border bg-paper px-5 text-sm text-ink outline-none focus:border-accent"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag("all")}
            className={`rounded-full px-4 py-2 text-sm ${
              activeTag === "all"
                ? "bg-ink text-paper"
                : "border border-border text-ink/65"
            }`}
          >
            All topics
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => setActiveTag(tag.slug)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeTag === tag.slug
                  ? "bg-ink text-paper"
                  : "border border-border text-ink/65"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-border bg-paper p-8 text-center text-ink/60">
          No essays match this filter yet.
        </div>
      ) : null}
    </div>
  );
}
