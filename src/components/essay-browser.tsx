"use client";

import { useMemo, useState } from "react";

import { ArticleCard } from "@/components/article-card";
import { ArticleWithRelations, Tag } from "@/lib/content/types";

const ITEMS_PER_PAGE = 12;

interface EssayBrowserProps {
  articles: ArticleWithRelations[];
  tags: Tag[];
}

export function EssayBrowser({ articles, tags }: EssayBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(1, totalPages));
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setCurrentPage(1);
  }

  function handleTagChange(tag: string) {
    setActiveTag(tag);
    setCurrentPage(1);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-border bg-shell p-6">
        <input
          value={query}
          onChange={handleQueryChange}
          placeholder="Search essays"
          className="h-12 rounded-full border border-border bg-paper px-5 text-sm text-ink outline-none focus:border-accent"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleTagChange("all")}
            className={`rounded-full px-4 py-2 text-sm ${
              activeTag === "all" ? "bg-ink text-paper" : "border border-border text-ink/65"
            }`}
          >
            All topics
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => handleTagChange(tag.slug)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeTag === tag.slug ? "bg-ink text-paper" : "border border-border text-ink/65"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {paginated.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-[1.75rem] border border-dashed border-border bg-paper p-8 text-center text-ink/60">
          No essays match this filter yet.
        </div>
      ) : null}

      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink/65 disabled:opacity-40 hover:border-accent hover:text-accent transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-ink/50">
            {safePage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink/65 disabled:opacity-40 hover:border-accent hover:text-accent transition-colors"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
