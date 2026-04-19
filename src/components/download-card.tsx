"use client";

import { useState, useTransition } from "react";
import { subscribeAction } from "@/app/actions";

interface DownloadCardProps {
  label: string;
  title: string;
  description: string;
  fields: string[];
  source: string;
}

export function DownloadCard({
  label,
  title,
  description,
  fields,
  source,
}: DownloadCardProps) {
  const [open, setOpen] = useState(false);
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

  return (
    <div className="rounded-[1.75rem] border border-border bg-paper p-7 flex flex-col gap-5">
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            {label}
          </p>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-shell px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-ink/50">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="shrink-0">
              <rect x="1.5" y="3.8" width="6" height="4.2" rx="0.8" stroke="currentColor" strokeWidth="1"/>
              <path d="M3 3.8V3a1.5 1.5 0 013 0v.8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            Book
          </span>
        </div>
        <h3 className="mt-2 font-serif text-2xl text-ink leading-snug">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
      </div>

      <ul className="space-y-1.5 border-l-2 border-border pl-4">
        {fields.map((f) => (
          <li key={f} className="text-xs leading-5 text-ink/60">
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {!open && !submitted && (
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-full items-center justify-center rounded-full bg-ink text-sm text-paper hover:opacity-90 transition-opacity"
          >
            Reserve early access →
          </button>
        )}

        {open && !submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="hidden" name="source" value={source} />
            <p className="text-xs text-ink/55 leading-5">
              Leave your email and you&apos;ll receive this template as soon as
              the toolkit ships with the book.
            </p>
            <input
              type="email"
              name="email"
              required
              autoFocus
              placeholder="name@company.com"
              className="h-10 w-full rounded-full border border-border bg-paper px-4 text-sm text-ink outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={isPending}
              className="h-10 w-full rounded-full bg-ink text-sm text-paper hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              {isPending ? "Saving…" : "Reserve my copy"}
            </button>
          </form>
        )}

        {submitted && (
          <div className="rounded-2xl border border-[#8FA680]/40 bg-[rgba(143,166,128,0.07)] px-4 py-3 text-center">
            <p className="text-sm font-medium text-ink">You&apos;re on the early access list.</p>
            <p className="text-xs text-ink/55 mt-0.5">
              This template ships with the book — you&apos;ll hear first.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
