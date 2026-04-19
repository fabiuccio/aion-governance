import "server-only";

import { cache } from "react";

import { Article, ArticleWithRelations, FrameworkWithArticle, Tag } from "@/lib/content/types";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { calculateReadingTime } from "@/lib/utils";

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string | null;
  content_markdown: string;
  status: "draft" | "published";
  featured_image: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  author_id: string;
  seo_title: string | null;
  seo_description: string | null;
  profiles:
    | {
        id: string;
        slug: string;
        full_name: string;
        role: string | null;
        bio: string | null;
        avatar_url: string | null;
      }
    | {
        id: string;
        slug: string;
        full_name: string;
        role: string | null;
        bio: string | null;
        avatar_url: string | null;
      }[]
    | null;
  article_tags:
    | {
        tag_id: string;
        tags:
          | {
              id: string;
              slug: string;
              name: string;
            }
          | {
              id: string;
              slug: string;
              name: string;
            }[];
      }[]
    | null;
}

interface FrameworkRow {
  id: string;
  slug: string;
  name: string;
  summary: string;
  practical_takeaway: string | null;
  diagram_title: string | null;
  diagram_items: unknown;
  content_markdown: string;
  related_essay_slug: string | null;
}

async function fetchArticlesFromSupabase(status?: "draft" | "published") {
  if (!hasSupabaseEnv()) {
    return [];
  }

  const client = createSupabaseServerClient();

  if (!client) {
    return [];
  }

  let query = client
    .from("articles")
    .select(
      `
        id,
        slug,
        title,
        subtitle,
        excerpt,
        content_markdown,
        status,
        featured_image,
        created_at,
        updated_at,
        published_at,
        author_id,
        seo_title,
        seo_description,
        profiles:author_id (
          id,
          slug,
          full_name,
          role,
          bio,
          avatar_url
        ),
        article_tags (
          tag_id,
          tags (
            id,
            slug,
            name
          )
        )
      `,
    )
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("updated_at", { ascending: false });

  if (status === "published") {
    query = query
      .eq("status", status)
      .lte("published_at", new Date().toISOString());
  } else if (status) {
    query = query.eq("status", status);
  }

  const { data, error } = await query;

  if (error || !data) {
    return [];
  }

  return (data as ArticleRow[])
    .map(mapArticleRow)
    .filter((article): article is ArticleWithRelations => Boolean(article));
}

async function fetchFrameworksFromSupabase() {
  if (!hasSupabaseEnv()) {
    return [];
  }

  const client = createSupabaseServerClient();

  if (!client) {
    return [];
  }

  const { data, error } = await client
    .from("frameworks")
    .select(
      `
        id,
        slug,
        name,
        summary,
        practical_takeaway,
        diagram_title,
        diagram_items,
        content_markdown,
        related_essay_slug
      `,
    )
    .order("name", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data as FrameworkRow[];
}

async function fetchTagsFromSupabase() {
  if (!hasSupabaseEnv()) {
    return [];
  }

  const client = createSupabaseServerClient();

  if (!client) {
    return [];
  }

  const { data, error } = await client
    .from("tags")
    .select("id, slug, name")
    .order("name", { ascending: true });

  if (error || !data) {
    return [];
  }

  return data as Tag[];
}

function normalizeProfile(profile: ArticleRow["profiles"]) {
  if (!profile) return null;
  return Array.isArray(profile) ? profile[0] ?? null : profile;
}

function normalizeTags(row: ArticleRow) {
  return (row.article_tags ?? [])
    .map((entry) => {
      const nested = entry.tags;
      const tag = Array.isArray(nested) ? nested[0] : nested;

      if (!tag) return null;

      return {
        id: tag.id,
        slug: tag.slug,
        name: tag.name,
      };
    })
    .filter((tag): tag is Tag => Boolean(tag));
}

function mapArticleRow(row: ArticleRow): ArticleWithRelations | null {
  const profile = normalizeProfile(row.profiles);

  if (!profile) {
    return null;
  }

  const mapped: Article = {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle ?? "",
    excerpt: row.excerpt ?? "",
    contentMarkdown: row.content_markdown,
    status: row.status,
    featuredImage: row.featured_image,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
    authorId: row.author_id,
    tagIds: (row.article_tags ?? []).map((entry) => entry.tag_id),
    seoTitle: row.seo_title ?? row.title,
    seoDescription: row.seo_description ?? row.excerpt ?? "",
  };

  return {
    ...mapped,
    author: {
      id: profile.id,
      slug: profile.slug,
      name: profile.full_name,
      role: profile.role ?? "",
      bio: profile.bio ?? "",
      avatar: profile.avatar_url,
    },
    tags: normalizeTags(row),
    readingTime: calculateReadingTime(row.content_markdown),
  };
}

export const getPublishedArticles = cache(async () => {
  return fetchArticlesFromSupabase("published");
});

export const getAllArticles = cache(async () => {
  const supabaseArticles = await fetchArticlesFromSupabase();
  return [...supabaseArticles].sort((left, right) =>
    right.updatedAt.localeCompare(left.updatedAt),
  );
});

export const getArticleBySlug = cache(async (slug: string) => {
  const supabaseArticles = await fetchArticlesFromSupabase("published");
  return supabaseArticles.find((candidate) => candidate.slug === slug) ?? null;
});

export const getRelatedArticles = cache(async (slug: string, limit = 2) => {
  const articles = await fetchArticlesFromSupabase("published");
  const current = articles.find((article) => article.slug === slug);
  if (!current) return [];

  return articles
    .filter(
      (article) =>
        article.slug !== slug &&
        article.tagIds.some((tagId) => current.tagIds.includes(tagId)),
    )
    .slice(0, limit)
    .map((article) => article);
});

export const getAllTags = cache(async () => fetchTagsFromSupabase());

export const getFrameworks = cache(async () => {
  const published = await getPublishedArticles();
  const supabaseFrameworks = await fetchFrameworksFromSupabase();
  return supabaseFrameworks.map<FrameworkWithArticle>((framework) => ({
    id: framework.id,
    slug: framework.slug,
    name: framework.name,
    summary: framework.summary,
    practicalTakeaway: framework.practical_takeaway ?? "",
    diagramTitle: framework.diagram_title ?? "Framework diagram",
    diagramItems: Array.isArray(framework.diagram_items)
      ? framework.diagram_items.map(String)
      : [],
    relatedEssaySlug: framework.related_essay_slug,
    contentMarkdown: framework.content_markdown,
    relatedEssay:
      published.find((article) => article.slug === framework.related_essay_slug) ??
      null,
  }));
});

export const getFrameworkBySlug = cache(async (slug: string) => {
  const all = await getFrameworks();
  return all.find((framework) => framework.slug === slug) ?? null;
});

export interface ApprovedComment {
  id: string;
  author_name: string | null;
  body: string;
  created_at: string;
}

export const getApprovedComments = cache(async (articleId: string): Promise<ApprovedComment[]> => {
  if (!hasSupabaseEnv() || !articleId) return [];

  const client = createSupabaseServerClient();
  if (!client) return [];

  const { data, error } = await client
    .from("comments")
    .select("id, author_name, body, created_at")
    .eq("article_id", articleId)
    .eq("moderation_status", "approved")
    .order("created_at", { ascending: true });

  if (error || !data) return [];
  return data as ApprovedComment[];
});

export const getFeaturedArticles = cache(async () => {
  const published = await getPublishedArticles();
  return published.slice(0, 3);
});
