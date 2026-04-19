"use client";

import { useTransition, useState } from "react";

import { submitCommentAction } from "@/app/actions";
import { ApprovedComment } from "@/lib/content/repository";
import { formatLongDate } from "@/lib/utils";

interface CommentSectionProps {
  articleId: string;
  comments: ApprovedComment[];
}

export function CommentSection({ articleId, comments }: CommentSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await submitCommentAction(formData);
      setSubmitted(true);
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-ink/45">Discussion</p>
        <h2 className="mt-3 font-serif text-3xl text-ink">Comments</h2>
      </div>

      {comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-[1.5rem] border border-border bg-shell p-5">
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-ink/45">
                <span>{comment.author_name ?? "Anonymous"}</span>
                <span>{formatLongDate(comment.created_at)}</span>
              </div>
              <p className="mt-3 leading-7 text-ink/78">{comment.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-ink/50">No comments yet. Be the first.</p>
      )}

      {submitted ? (
        <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900">
          Comment submitted. It will appear after moderation.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="articleId" value={articleId} />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-ink/75">
              <span>Name (optional)</span>
              <input
                name="authorName"
                className="h-11 w-full rounded-2xl border border-border bg-paper px-4 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="space-y-2 text-sm text-ink/75">
              <span>Email (optional, not published)</span>
              <input
                name="authorEmail"
                type="email"
                className="h-11 w-full rounded-2xl border border-border bg-paper px-4 text-sm outline-none focus:border-accent"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-ink/75">
            <span>Comment</span>
            <textarea
              name="body"
              required
              rows={4}
              className="w-full rounded-[1.5rem] border border-border bg-paper px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Submitting..." : "Submit comment"}
          </button>
        </form>
      )}
    </div>
  );
}
