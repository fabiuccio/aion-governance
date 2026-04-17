import { AdminImageUploader } from "@/components/admin-image-uploader";
import { AdminSaveButton } from "@/components/admin-save-button";
import { saveArticleAction } from "@/app/admin/actions";
import { ArticleWithRelations, Tag } from "@/lib/content/types";

interface AdminArticleFormProps {
  article?: ArticleWithRelations | null;
  tags: Tag[];
  confirmationMessage?: string;
}

export function AdminArticleForm({
  article,
  tags,
  confirmationMessage,
}: AdminArticleFormProps) {
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
            className="h-12 w-full rounded-2xl border border-border bg-paper px-4 outline-none focus:border-accent"
          />
        </label>
        <label className="space-y-2 text-sm text-ink/75">
          <span>Slug</span>
          <input
            name="slug"
            defaultValue={article?.slug}
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
          You can also place inline images inside the markdown body with normal
          markdown syntax: `![Alt text](https://image-url)`.
        </p>
      </label>
      <AdminImageUploader targetInputId="featured-image-url" />
      <label className="space-y-2 text-sm text-ink/75">
        <span>Content markdown</span>
        <textarea
          name="contentMarkdown"
          defaultValue={article?.contentMarkdown}
          rows={18}
          className="w-full rounded-[1.5rem] border border-border bg-paper px-4 py-3 font-mono text-sm outline-none focus:border-accent"
        />
      </label>
      <div className="grid gap-6 md:grid-cols-2">
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
      <AdminSaveButton />
    </form>
  );
}
