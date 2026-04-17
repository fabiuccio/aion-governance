import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getFrameworkBySlug } from "@/lib/content/repository";

interface FrameworkPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: FrameworkPageProps): Promise<Metadata> {
  const framework = await getFrameworkBySlug(params.slug);

  if (!framework) return {};

  return {
    title: framework.name,
    description: framework.summary,
  };
}

export default async function FrameworkPage({ params }: FrameworkPageProps) {
  const framework = await getFrameworkBySlug(params.slug);

  if (!framework) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <Link href="/frameworks" className="text-sm text-ink/55 hover:text-ink">
        Back to frameworks
      </Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Framework
          </p>
          <h1 className="mt-4 font-serif text-5xl text-ink">
            {framework.name}
          </h1>
          <p className="mt-6 text-xl leading-9 text-ink/72">
            {framework.summary}
          </p>
          <MarkdownRenderer
            content={framework.contentMarkdown}
            className="mt-8"
          />
        </div>
        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-border bg-shell p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
              Diagram
            </p>
            <h2 className="mt-3 font-serif text-2xl text-ink">
              {framework.diagramTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {framework.diagramItems.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-border bg-paper px-4 py-3 text-sm text-ink/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-border bg-paper p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
              Practical takeaway
            </p>
            <p className="mt-4 text-base leading-7 text-ink/72">
              {framework.practicalTakeaway}
            </p>
          </div>
          {framework.relatedEssay ? (
            <div className="rounded-[2rem] border border-border bg-paper p-7">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
                Related essay
              </p>
              <Link
                href={`/essays/${framework.relatedEssay.slug}`}
                className="mt-4 block font-serif text-2xl text-ink"
              >
                {framework.relatedEssay.title}
              </Link>
            </div>
          ) : null}
          <Link
            href="/book"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm text-ink"
          >
            Back to the book
          </Link>
        </aside>
      </div>
    </div>
  );
}
