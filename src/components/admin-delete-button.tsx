"use client";

import { useRef } from "react";

import { deleteArticleAction } from "@/app/admin/actions";

export function AdminDeleteButton({ articleId }: { articleId: string }) {
  const formRef = useRef<HTMLFormElement>(null);

  function handleClick() {
    if (window.confirm("Delete this article? This cannot be undone.")) {
      formRef.current?.requestSubmit();
    }
  }

  return (
    <form ref={formRef} action={deleteArticleAction}>
      <input type="hidden" name="id" value={articleId} />
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex h-10 items-center justify-center rounded-full border border-red-200 px-5 text-sm text-red-600 transition-colors hover:bg-red-50"
      >
        Delete
      </button>
    </form>
  );
}
