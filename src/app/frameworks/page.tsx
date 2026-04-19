import type { Metadata } from "next";
import Link from "next/link";

import { getFrameworks } from "@/lib/content/repository";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Four interlocking frameworks from Govern or Fail: the Debt Quadrant, Governed AI Loop, AIOS, and Executive Action Framework.",
};

const READING_ORDER = ["debt-quadrant", "governed-ai-loop", "aios", "executive-action-framework"];

const FRAMEWORK_SUBTITLES: Record<string, string> = {
  "debt-quadrant": "Where does your AI estate sit?",
  "governed-ai-loop": "How do you run governed AI in production?",
  "aios": "What do you build to make that possible?",
  "executive-action-framework": "How do you start in the next 90 days?",
};

export default async function FrameworksPage() {
  const rawFrameworks = await getFrameworks();

  const frameworks = [...rawFrameworks].sort((a, b) => {
    const ai = READING_ORDER.indexOf(a.slug);
    const bi = READING_ORDER.indexOf(b.slug);
    if (ai === -1 && bi === -1) return a.name.localeCompare(b.name);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Frameworks
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">
          Four frameworks. One operating model.
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          The book is built around four interlocking frameworks. Read in this
          order: the Debt Quadrant diagnoses where your estate sits, the
          Governed AI Loop is the operating cadence, AIOS is the infrastructure,
          and the Executive Action Framework is how you start.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {frameworks.map((framework, i) => (
          <Link
            key={framework.id}
            href={`/frameworks/${framework.slug}`}
            className="group rounded-[1.75rem] border border-border bg-paper p-7 transition hover:border-accent/35"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
                {i + 1} of 4
              </p>
              <span className="text-xs text-ink/35 group-hover:text-accent transition-colors">
                Read →
              </span>
            </div>
            <h2 className="mt-3 font-serif text-3xl text-ink">
              {framework.name}
            </h2>
            {FRAMEWORK_SUBTITLES[framework.slug] && (
              <p className="mt-2 text-sm italic text-ink/55">
                {FRAMEWORK_SUBTITLES[framework.slug]}
              </p>
            )}
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
