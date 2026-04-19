"use client";

import { useState, useTransition } from "react";

import { subscribeAction } from "@/app/actions";

interface NewsletterSignupProps {
  title: string;
  description: string;
  compact?: boolean;
  bare?: boolean;
  source?: "site" | "book";
}

export function NewsletterSignup({
  title,
  description,
  compact = false,
  bare = false,
  source = "site",
}: NewsletterSignupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      await subscribeAction(formData);
      setSubmitted(true);
    });
  }

  const inner = (
    <div className={bare ? "max-w-xl" : compact ? "max-w-xl" : "max-w-2xl"}>
      <p className="text-xs uppercase tracking-[0.24em] text-ink/50">
        Updates
      </p>
      <h2 className="mt-3 font-serif text-3xl text-ink">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/70">{description}</p>
      {submitted ? (
        <div className="mt-6 rounded-2xl border border-border bg-paper px-5 py-4">
          <p className="text-sm font-medium text-ink">You&apos;re on the list.</p>
          <p className="mt-1 text-sm text-ink/60">
            Check your inbox — a confirmation is on its way.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input type="hidden" name="source" value={source} />
          <input
            type="email"
            name="email"
            required
            placeholder="name@company.com"
            className="h-12 flex-1 rounded-full border border-border bg-paper px-5 text-sm text-ink outline-none ring-0 transition focus:border-accent"
          />
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper transition hover:bg-ink/90 disabled:opacity-50"
          >
            {isPending ? "Sending…" : "Stay in the loop"}
          </button>
        </form>
      )}
    </div>
  );

  if (bare) return inner;

  return (
    <div className="rounded-[2rem] border border-border bg-shell px-6 py-8 sm:px-8">
      {inner}
    </div>
  );
}
