import type { Metadata } from "next";
import Link from "next/link";

import { getFrameworks } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Short explainers on recurring ideas from the book, including the Governed AI Loop, Debt Quadrant, AIOS, and Executive Action Framework.",
};

export default async function FrameworksPage() {
  const frameworks = await getFrameworks();

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Frameworks
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">
          Reusable ideas, kept grounded
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          These pages are not product sheets. They are short explainers for a
          few recurring concepts that sit behind the book and the essays.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {frameworks.map((framework) => (
          <Link
            key={framework.id}
            href={`/frameworks/${framework.slug}`}
            className="rounded-[1.75rem] border border-border bg-paper p-7 transition hover:border-accent/35"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
              {framework.diagramTitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink">
              {framework.name}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70">
              {framework.summary}
            </p>
            <p className="mt-5 text-sm text-ink/55">
              Practical takeaway: {framework.practicalTakeaway}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
