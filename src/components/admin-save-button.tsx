"use client";

import { useFormStatus } from "react-dom";

export function AdminSaveButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Saving..." : "Save article"}
    </button>
  );
}
