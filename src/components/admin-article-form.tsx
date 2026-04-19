"use client";

import { useState } from "react";

import { saveArticleAction } from "@/app/admin/actions";
import { AdminImageUploader } from "@/components/admin-image-uploader";
import { AdminSaveButton } from "@/components/admin-save-button";
import { AdminWysiwygEditor } from "@/components/admin-wysiwyg-editor";
import { ArticleWithRelations, Tag } from "@/lib/content/types";
import { slugify } from "@/lib/utils";

interface AdminArticleFormProps {
  article?: ArticleWithRelations | null;
  tags: Tag[];
  confirmationMessage?: string;
}

function toDatetimeLocal(isoString?: string | null): string {
  if (!isoString) return "";
  try {
    return new Date(isoString).toISOString().slice(0, 16);
  } catch {
    return "";
  }
}

export function AdminArticleForm({ article, tags, confirmationMessage }: AdminArticleFormProps) {
  const isNew = !article?.id;
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [markdownContent, setMarkdownContent] = useState(article?.contentMarkdown ?? "");
  const [seoTitle, setSeoTitle] = useState(article?.seoTitle ?? "");
  const [seoDescription, setSeoDescription] = useState(article?.seoDescription ?? "");

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isNew) {
      const derived = slugify(e.target.value);
      setSlug(derived);
      setSeoTitle(e.target.value);
    }
  }

  function handleExcerptChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (isNew) {
      setSeoDescription(e.target.value);
    }
  }

  return (
    <form action={saveArticleAction} className="space-y-6">
      {confirmationMessage ? (
        <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
          {confirmationMessage}
        </div>
      ) : null}
      <input type="hidden" name="id" defaultValue={article?.id} />

      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm text-ink/75">
          <span>Title</span>
          <input
            name="title"
            defaultValue={article?.title}
            onChange={handleTitleChange}
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          />
        </label>
        <label className="space-y-2 text-sm text-ink/75">
          <span>Slug</span>
          <input
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-ink/75">
        <span>Subtitle</span>
        <input
          name="subtitle"
          defaultValue={article?.subtitle}
          className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
        />
      </label>

      <label className="space-y-2 text-sm text-ink/75">
        <span>Excerpt</span>
        <textarea
          name="excerpt"
          defaultValue={article?.excerpt}
          onChange={handleExcerptChange}
          rows={3}
          className="w-full rounded-[1.5rem] border border-border bg-paper px-4 py-3 outline-none focus:border-accent"
        />
      </label>

      <label className="space-y-2 text-sm text-ink/75">
        <span>Featured image URL</span>
        <input
          id="featured-image-url"
          name="featuredImage"
          defaultValue={article?.featuredImage ?? ""}
          placeholder="https://..."
          className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
        />
        <p className="text-xs leading-6 text-ink/55">
          You can also place inline images inside the markdown body with normal markdown syntax:{" "}
          <code className="rounded bg-shell px-1">![Alt text](https://image-url)</code>
        </p>
      </label>
      <AdminImageUploader targetInputId="featured-image-url" />

      <div className="space-y-2 text-sm text-ink/75">
        <span>Content</span>
        <input type="hidden" name="contentMarkdown" value={markdownContent} />
        <AdminWysiwygEditor
          initialMarkdown={markdownContent}
          onChange={setMarkdownContent}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <label className="space-y-2 text-sm text-ink/75">
          <span>Status</span>
          <select
            name="status"
            defaultValue={article?.status ?? "draft"}
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label className="space-y-2 text-sm text-ink/75">
          <span>Publish date</span>
          <input
            type="datetime-local"
            name="publishedAt"
            defaultValue={toDatetimeLocal(article?.publishedAt)}
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          />
        </label>
        <label className="space-y-2 text-sm text-ink/75">
          <span>Tags</span>
          <select
            name="tagIds"
            multiple
            defaultValue={article?.tags.map((tag) => tag.id)}
            className="min-h-32 w-full rounded-[1.5rem] border border-border bg-paper px-4 py-3 outline-none focus:border-accent"
          >
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm text-ink/75">
          <span>SEO title</span>
          <input
            name="seoTitle"
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          />
        </label>
        <label className="space-y-2 text-sm text-ink/75">
          <span>SEO description</span>
          <input
            name="seoDescription"
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          />
        </label>
      </div>

      <AdminSaveButton />
    </form>
  );
}
