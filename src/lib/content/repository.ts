import "server-only";

import { cache } from "react";

import { articles, authors, frameworks, tags } from "@/lib/content/seed";
import { Article, ArticleWithRelations, FrameworkWithArticle, Tag } from "@/lib/content/types";
import { calculateReadingTime } from "@/lib/utils";

function enrichArticle(article: Article): ArticleWithRelations {
  const author = authors.find((candidate) => candidate.id === article.authorId);

  if (!author) {
    throw new Error(`Missing author for article ${article.slug}`);
  }

  return {
    ...article,
    author,
    tags: article.tagIds
      .map((tagId) => tags.find((tag) => tag.id === tagId))
      .filter((tag): tag is Tag => Boolean(tag)),
    readingTime: calculateReadingTime(article.contentMarkdown),
  };
}

export const getPublishedArticles = cache(async () => {
  return articles
    .filter((article) => article.status === "published")
    .sort((left, right) => {
      const leftDate = left.publishedAt ?? left.updatedAt;
      const rightDate = right.publishedAt ?? right.updatedAt;
      return rightDate.localeCompare(leftDate);
    })
    .map(enrichArticle);
});

export const getAllArticles = cache(async () => {
  return [...articles]
    .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt))
    .map(enrichArticle);
});

export const getArticleBySlug = cache(async (slug: string) => {
  const article = articles.find((candidate) => candidate.slug === slug && candidate.status === "published");
  return article ? enrichArticle(article) : null;
});

export const getRelatedArticles = cache(async (slug: string, limit = 2) => {
  const current = articles.find((article) => article.slug === slug);
  if (!current) return [];

  return articles
    .filter(
      (article) =>
        article.slug !== slug &&
        article.status === "published" &&
        article.tagIds.some((tagId) => current.tagIds.includes(tagId)),
    )
    .slice(0, limit)
    .map(enrichArticle);
});

export const getAllTags = cache(async () => tags);

export const getFrameworks = cache(async () => {
  const published = await getPublishedArticles();
  return frameworks.map<FrameworkWithArticle>((framework) => ({
    ...framework,
    relatedEssay: published.find((article) => article.slug === framework.relatedEssaySlug) ?? null,
  }));
});

export const getFrameworkBySlug = cache(async (slug: string) => {
  const all = await getFrameworks();
  return all.find((framework) => framework.slug === slug) ?? null;
});

export const getFeaturedArticles = cache(async () => {
  const published = await getPublishedArticles();
  return published.slice(0, 3);
});
