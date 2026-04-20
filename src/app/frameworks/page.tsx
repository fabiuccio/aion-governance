import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Four interlocking frameworks underpin Govern or Fail — the Debt Quadrant, Governed AI Loop, AIOS, and Executive Action Framework.",
};

export default function FrameworksPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Frameworks
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink sm:text-6xl">
          Four frameworks. One operating model.
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          <em>Govern or Fail</em> is built around four interlocking frameworks.
          Each one answers a different question. Read in sequence, they form a
          complete operating model: diagnosis, cadence, architecture, execution.
        </p>
      </div>

      <hr className="mt-14 border-border" />

      <div className="mt-14 max-w-2xl space-y-10 text-lg leading-8 text-ink/78">
        <p>
          <strong className="font-semibold text-ink">
            The Debt Quadrant — diagnostic.
          </strong>{" "}
          Where does your AI estate actually sit? Two axes, four positions. Most
          organisations self-assess as "Governed" and data-assess as "Reckless."
          The gap is usually the most useful finding.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            The Governed AI Loop — operating cadence.
          </strong>{" "}
          Five phases, continuously: Align, Constrain, Operate, Assure, Evolve.
          Not a project methodology. The rhythm that runs for the full
          production life of an AI system.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            AIOS — architecture.
          </strong>{" "}
          The governed control plane where every AI request is routed,
          authenticated, logged, policy-checked, and bounded. Not a product you
          can buy. A design target your infrastructure grows into.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Executive Action Framework — execution.
          </strong>{" "}
          The 90-day sprint, five phases, one named output per phase. The
          on-ramp from ungoverned to governed.
        </p>
      </div>

      <hr className="mt-14 border-border" />

      <p className="mt-14 max-w-2xl text-lg leading-8 text-ink/72">
        Full treatment of each framework is in the book. The{" "}
        <Link
          href="/debt-quadrant"
          className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors"
        >
          Debt Quadrant
        </Link>{" "}
        has an interactive surface for plotting your own estate. The{" "}
        <Link
          href="/assessment"
          className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors"
        >
          Maturity Assessment
        </Link>{" "}
        scores your governance discipline across 25 questions.
      </p>
    </div>
  );
}
