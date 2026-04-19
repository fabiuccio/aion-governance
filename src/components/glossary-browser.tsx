"use client";

import { useState } from "react";
import Link from "next/link";
import { GLOSSARY, type GlossaryTerm } from "@/lib/glossary-data";

export function GlossaryBrowser() {
  const [query, setQuery] = useState("");

  const filtered = GLOSSARY.filter(
    (t) =>
      t.term.toLowerCase().includes(query.toLowerCase()) ||
      t.definition.toLowerCase().includes(query.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="space-y-6">
      <input
        type="search"
        placeholder="Search terms or definitions…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-12 rounded-full border border-border bg-paper px-5 text-sm text-ink outline-none transition focus:border-accent placeholder:text-ink/35"
      />

      <p className="text-xs text-ink/45">
        {filtered.length} of {GLOSSARY.length} terms
      </p>

      <dl className="space-y-0 divide-y divide-border">
        {filtered.map((item: GlossaryTerm) => (
          <div key={item.term} className="py-6 grid gap-3 sm:grid-cols-[220px_1fr]">
            <dt className="font-medium text-ink text-base leading-snug pt-0.5">
              {item.term}
              {item.relatedFramework && (
                <span className="block mt-1 text-xs text-ink/40">
                  → {item.relatedFramework}
                </span>
              )}
            </dt>
            <dd className="text-base leading-7 text-ink/70">
              {item.definition}
              {item.relatedSlug && (
                <Link
                  href={`/frameworks/${item.relatedSlug}`}
                  className="ml-2 text-xs text-accent hover:underline"
                >
                  Framework →
                </Link>
              )}
            </dd>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-ink/45">
            No terms match &ldquo;{query}&rdquo;
          </div>
        )}
      </dl>
    </div>
  );
}
