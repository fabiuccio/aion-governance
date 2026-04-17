import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getArticleBySlug, getRelatedArticles } from "@/lib/content/repository";
import { formatLongDate } from "@/lib/utils";

interface EssayPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const related = await getRelatedArticles(article.slug);

  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8">
      <Link href="/essays" className="text-sm text-ink/55 hover:text-ink">
        Back to essays
      </Link>
      <article className="mt-8">
        <div className="border-b border-border pb-10">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-ink/45">
            <span>{formatLongDate(article.publishedAt)}</span>
            <span>{article.readingTime}</span>
            <span>By {article.author.name}</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-ink">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl leading-10 text-ink/72">
            {article.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-full border border-border px-3 py-1 text-xs text-ink/55"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/48">
            Updated {formatLongDate(article.updatedAt)}
          </p>
        </div>

        <MarkdownRenderer content={article.contentMarkdown} className="pt-8" />
      </article>

      <section className="mt-20 border-t border-border pt-10">
        <div className="rounded-[1.75rem] border border-dashed border-border bg-shell p-6 text-sm leading-7 text-ink/65">
          Comments are supported in the schema and admin flow, but they are
          disabled for the initial launch while the editorial workflow settles.
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-20 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
              Related essays
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink">
              Continue reading
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((candidate) => (
              <ArticleCard key={candidate.id} article={candidate} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
