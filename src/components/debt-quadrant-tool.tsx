"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SECTIONS, getSectionScore } from "@/lib/assessment-data";

interface QuadrantInfo {
  name: string;
  color: string;
  bgClass: string;
  description: string;
  recommendation: string;
}

const QUADRANTS: Record<string, QuadrantInfo> = {
  governed: {
    name: "Governed",
    color: "#8FA680",
    bgClass: "bg-[rgba(143,166,128,0.12)] border-[#8FA680]",
    description:
      "High velocity, high discipline. This is the target state. Governance infrastructure is compounding — each new deployment costs less friction than the last.",
    recommendation:
      "Sustain the flywheel. Focus on cross-functional adoption, board-level reporting, and positioning governance as a competitive signal externally.",
  },
  reckless: {
    name: "Reckless",
    color: "#C8956B",
    bgClass: "bg-[rgba(200,149,107,0.1)] border-[#C8956B]",
    description:
      "High velocity, low discipline. Maximum short-term output; maximum long-term exposure. The most common quadrant in enterprise AI. The governance debt is accumulating invisibly.",
    recommendation:
      "Slow one deployment. Use it to establish the Minimum Viable Policy pattern: owner, data boundary, threshold, escalation path. Then replicate.",
  },
  bureaucratic: {
    name: "Bureaucratic",
    color: "#7A9BB5",
    bgClass: "bg-[rgba(122,155,181,0.1)] border-[#7A9BB5]",
    description:
      "High discipline, low velocity. Governance investment is not converting to shipped value. The controls exist but the delivery machinery is blocked.",
    recommendation:
      "Audit the bottleneck. Usually it is approval chains, not governance itself. Streamline sign-off without relaxing controls — the 90-day sprint is designed for this.",
  },
  stagnant: {
    name: "Stagnant",
    color: "#9A9086",
    bgClass: "bg-[rgba(154,144,134,0.1)] border-[#9A9086]",
    description:
      "Low velocity, low discipline. Both clocks have stopped. The quietest quadrant and typically the most dangerous — no delivery pressure and no governance pressure.",
    recommendation:
      "Start with executive sponsorship. Without board-level mandate, neither velocity nor discipline improvements hold. The 90-day sprint requires a named sponsor.",
  },
};

function getQuadrant(velocity: number, discipline: number): string {
  const highV = velocity >= 50;
  const highD = discipline >= 50;
  if (highV && highD) return "governed";
  if (highV && !highD) return "reckless";
  if (!highV && highD) return "bureaucratic";
  return "stagnant";
}

export function DebtQuadrantTool() {
  const [velocity, setVelocity] = useState(50);
  const [discipline, setDiscipline] = useState(50);
  const [fromAssessment, setFromAssessment] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("aion_assessment_answers");
      if (!raw) return;
      const answers: Record<number, number> = JSON.parse(raw);

      const disciplineScore =
        getSectionScore(1, answers) +
        getSectionScore(2, answers) +
        getSectionScore(3, answers);
      const velocityScore =
        getSectionScore(4, answers) + getSectionScore(5, answers);

      const disciplinePct = Math.round((disciplineScore / 60) * 100);
      const velocityPct = Math.round((velocityScore / 40) * 100);

      setDiscipline(disciplinePct);
      setVelocity(velocityPct);
      setFromAssessment(true);
    } catch {
      // ignore
    }
  }, []);

  const quadrantKey = getQuadrant(velocity, discipline);
  const quadrant = QUADRANTS[quadrantKey];

  const dotLeft = `${velocity}%`;
  const dotTop = `${100 - discipline}%`;

  return (
    <div className="space-y-10">
      {fromAssessment && (
        <div className="rounded-2xl border border-border bg-shell px-5 py-4 text-sm text-ink/70">
          Pre-filled from your recent assessment results. Adjust the sliders to
          explore scenarios.
        </div>
      )}

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        {/* Quadrant grid */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45 mb-4">
            Your position
          </p>
          <div className="relative aspect-square w-full rounded-[1.5rem] border border-border overflow-hidden">
            {/* Quadrant labels */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="flex items-center justify-center border-b border-r border-border/40 text-center p-4">
                <span className="text-sm font-medium text-ink/50">Bureaucratic</span>
              </div>
              <div className="flex items-center justify-center border-b border-border/40 text-center p-4 bg-[rgba(143,166,128,0.06)]">
                <span className="text-sm font-medium text-[#8FA680]">Governed ✓</span>
              </div>
              <div className="flex items-center justify-center border-r border-border/40 text-center p-4">
                <span className="text-sm font-medium text-ink/50">Stagnant</span>
              </div>
              <div className="flex items-center justify-center text-center p-4">
                <span className="text-sm font-medium text-ink/50">Reckless</span>
              </div>
            </div>

            {/* Axis labels */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute left-1/2 bottom-2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-ink/35">
                Value Velocity →
              </span>
              <span
                className="absolute top-1/2 left-2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-ink/35"
                style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
              >
                ← Governance Discipline
              </span>
            </div>

            {/* Dot */}
            <div
              className="pointer-events-none absolute z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink shadow-md transition-all duration-300"
              style={{ left: dotLeft, top: dotTop }}
            />
          </div>
        </div>

        {/* Controls + result */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-ink">
                  Governance Discipline
                </label>
                <span className="text-sm font-semibold text-ink">{discipline}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={discipline}
                onChange={(e) => setDiscipline(Number(e.target.value))}
                className="w-full accent-ink"
              />
              <p className="text-xs text-ink/50">
                How consistently are governance controls applied across your AI
                systems?
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-ink">
                  Value Velocity
                </label>
                <span className="text-sm font-semibold text-ink">{velocity}</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                className="w-full accent-ink"
              />
              <p className="text-xs text-ink/50">
                How fast can you take a validated use case from approval to
                production?
              </p>
            </div>
          </div>

          <div className={`rounded-[1.5rem] border p-6 space-y-3 ${quadrant.bgClass}`}>
            <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
              Current quadrant
            </p>
            <p
              className="font-serif text-3xl"
              style={{ color: quadrant.color }}
            >
              {quadrant.name}
            </p>
            <p className="text-sm leading-6 text-ink/70">
              {quadrant.description}
            </p>
            <div className="border-t border-border/40 pt-3">
              <p className="text-xs font-medium text-ink/45 uppercase tracking-wider mb-1">
                Recommended action
              </p>
              <p className="text-sm leading-6 text-ink/70">
                {quadrant.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {!fromAssessment && (
        <div className="rounded-[1.5rem] border border-border bg-shell p-6 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm font-medium text-ink">
              Get data-driven scores
            </p>
            <p className="text-sm text-ink/60 mt-0.5">
              The Maturity Assessment calculates your Discipline and Velocity
              scores from 25 questions.
            </p>
          </div>
          <Link
            href="/assessment"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper hover:opacity-90 transition-opacity"
          >
            Take the assessment
          </Link>
        </div>
      )}
    </div>
  );
}
