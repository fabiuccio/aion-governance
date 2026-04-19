import type { Metadata } from "next";
import { DebtQuadrantTool } from "@/components/debt-quadrant-tool";

export const metadata: Metadata = {
  title: "Debt Quadrant Tool",
  description:
    "Plot your AI estate on the Debt Quadrant. Two axes: Governance Discipline and Value Velocity. Four states: Governed, Reckless, Bureaucratic, Stagnant.",
};

export default function DebtQuadrantPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Interactive tool
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Debt Quadrant</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          Where does your AI estate actually sit? Plot your position on the two
          axes that determine whether AI investment is compounding or collapsing.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: "Governed", sub: "High D · High V" },
            { name: "Reckless", sub: "Low D · High V" },
            { name: "Bureaucratic", sub: "High D · Low V" },
            { name: "Stagnant", sub: "Low D · Low V" },
          ].map((q) => (
            <div
              key={q.name}
              className="rounded-xl border border-border bg-shell px-3 py-3 text-center"
            >
              <p className="text-sm font-medium text-ink">{q.name}</p>
              <p className="text-xs text-ink/45 mt-0.5">{q.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <DebtQuadrantTool />
      </div>
    </div>
  );
}
