import Link from "next/link";

import { ArticleWithRelations } from "@/lib/content/types";
import { formatLongDate } from "@/lib/utils";

interface ArticleCardProps {
  article: ArticleWithRelations;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-border bg-paper p-6 transition hover:-translate-y-0.5 hover:border-accent/35">
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-ink/45">
        <span>{formatLongDate(article.publishedAt)}</span>
        <span>{article.readingTime}</span>
      </div>
      <Link href={`/essays/${article.slug}`} className="mt-4 block">
        <h3 className="font-serif text-2xl leading-tight text-ink">
          {article.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-ink/68">{article.excerpt}</p>
      </Link>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag.id}
            className="rounded-full border border-border px-3 py-1 text-xs text-ink/55"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </article>
  );
}
