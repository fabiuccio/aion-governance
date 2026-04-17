export type PublishStatus = "draft" | "published";
export type CommentStatus = "pending" | "approved" | "rejected";

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string | null;
}

export interface Tag {
  id: string;
  slug: string;
  name: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  contentMarkdown: string;
  status: PublishStatus;
  featuredImage?: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
  authorId: string;
  tagIds: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface Framework {
  id: string;
  slug: string;
  name: string;
  summary: string;
  practicalTakeaway: string;
  diagramTitle: string;
  diagramItems: string[];
  relatedEssaySlug?: string | null;
  bookAnchor?: string | null;
  contentMarkdown: string;
}

export interface Comment {
  id: string;
  articleId: string;
  authorName?: string | null;
  authorEmail?: string | null;
  body: string;
  status: CommentStatus;
  createdAt: string;
}

export interface ArticleWithRelations extends Article {
  author: Author;
  tags: Tag[];
  readingTime: string;
}

export interface FrameworkWithArticle extends Framework {
  relatedEssay?: ArticleWithRelations | null;
}
