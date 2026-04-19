import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "90-Day Executive Action Framework",
  description:
    "A 90-day, executive-sponsored sprint to establish AI governance. Five phases, five templates, one board-ready output.",
};

const PHASES = [
  {
    number: "01",
    weeks: "Weeks 1–2",
    name: "Inventory",
    output: "AI System Register",
    description:
      "Identify every AI system in production. Send Template A to business unit leads. Consolidate responses into the AI Ownership Register (Template D). Assign or confirm a business owner and technical owner for each system.",
    actions: [
      "Deploy Template A survey to all business unit leads",
      "Collect and consolidate responses within 10 business days",
      "Draft initial AI Ownership Register using Template D",
      "Flag any systems with no identified owner as critical governance gaps",
      "Confirm executive sponsor sign-off on the register",
    ],
  },
  {
    number: "02",
    weeks: "Weeks 3–4",
    name: "Debt Audit",
    output: "Quadrant Placement",
    description:
      "Score each system on the Debt Quadrant. Assess governance discipline (data boundaries, ownership, constraints) and value velocity (deployment time, reuse, cost visibility) per system. Identify the highest-risk Reckless systems and any Stagnant systems.",
    actions: [
      "Score each system's governance discipline (0–10 per system)",
      "Score each system's value velocity (0–10 per system)",
      "Place each system in the Debt Quadrant",
      "Identify the top three Reckless systems requiring immediate MVP controls",
      "Document the audit results for board reporting",
    ],
  },
  {
    number: "03",
    weeks: "Weeks 5–7",
    name: "Architect",
    output: "AIOS Sprint Plan",
    description:
      "Design the control plane. Assess which AIOS components are partially in place and which need to be built or bought. Produce a sprint plan for the five components: Routing & Policy Enforcement, Governance Registry, Observability & Audit Logging, Secrets & Identity, and Connector Library.",
    actions: [
      "Assess maturity of each AIOS component against current infrastructure",
      "Identify the minimal AIOS build required to govern the top-three Reckless systems",
      "Draft the AIOS sprint plan with delivery milestones",
      "Confirm technical ownership for the AIOS build",
      "Align with security and infrastructure teams on integration requirements",
    ],
  },
  {
    number: "04",
    weeks: "Weeks 8–11",
    name: "Govern",
    output: "First Two Governed Systems Live",
    description:
      "Apply the Minimum Viable Policy (Template C) to the two highest-priority systems. Wire the systems through initial AIOS components. Confirm decision logging, escalation paths, and confidence thresholds are technically enforced, not merely documented.",
    actions: [
      "Draft and approve Minimum Viable Policy for each target system",
      "Complete AI System Records for each target system (Template B)",
      "Wire each system through available AIOS components",
      "Verify decision logging is operational at the individual decision level",
      "Test escalation paths under realistic conditions",
      "Confirm business owner sign-off on each policy",
    ],
  },
  {
    number: "05",
    weeks: "Weeks 12–13",
    name: "Institutionalise",
    output: "Steady-State Operating Model",
    description:
      "Establish the Governed AI Loop as an operating rhythm, not a project. Assign quarterly review cadences. Produce the board report (Template E). Publish the 12-month roadmap. Confirm executive mandate to continue.",
    actions: [
      "Assign quarterly Governed AI Loop review owners per system",
      "Produce board report using Template E",
      "Present maturity score and 12-month roadmap to executive committee",
      "Confirm executive mandate and budget for months 4–18",
      "Publish the AI Ownership Register as a live internal resource",
      "Schedule the first quarterly Assure review",
    ],
  },
];

export default function SprintPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Executive Action Framework
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">
          The 90-Day Sprint
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          Five phases. One named executive sponsor. Five deliverables. At Day 90
          you have a board-ready governance report, a maturity score, and a
          12-month roadmap.
        </p>
        <p className="mt-4 text-base leading-7 text-ink/60">
          You do not have a fully governed AI estate — that takes 12 to 18
          months. What you have is an accurate picture of where you stand, the
          ownership structure to act on it, and the board&apos;s mandate to
          continue. The deadline is a feature.
        </p>
      </div>

      {/* Phase timeline */}
      <div className="mt-14 space-y-6">
        {PHASES.map((phase, i) => (
          <div
            key={phase.number}
            className="rounded-[1.75rem] border border-border bg-paper p-7"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-shell border border-border">
                <span className="text-xs font-semibold text-ink/60">
                  {phase.number}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-serif text-2xl text-ink">{phase.name}</h2>
                  <span className="text-sm text-ink/45">{phase.weeks}</span>
                </div>
                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-shell px-3 py-1">
                  <span className="text-xs text-ink/45 uppercase tracking-wider">
                    Output:
                  </span>
                  <span className="text-xs font-medium text-ink">
                    {phase.output}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-ink/70">
                  {phase.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {phase.actions.map((action) => (
                    <li
                      key={action}
                      className="flex items-start gap-2 text-sm leading-6 text-ink/65"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink/30" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < PHASES.length - 1 && (
              <div className="mt-4 ml-5 h-4 w-px bg-border" />
            )}
          </div>
        ))}
      </div>

      {/* Templates + CTA */}
      <div className="mt-14 rounded-[2rem] border border-border bg-shell p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
          Working templates
        </p>
        <h2 className="mt-3 font-serif text-3xl text-ink">
          Five deliverables. Five templates.
        </h2>
        <p className="mt-4 text-base leading-7 text-ink/70">
          Each phase produces one artefact. The templates are being finalised
          and will be available for download shortly.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "A — Business Unit AI Inventory Survey",
            "B — AI System Record",
            "C — Minimum Viable Policy",
            "D — AI Ownership Register",
            "E — Board Report Slide Outline",
          ].map((t) => (
            <div
              key={t}
              className="rounded-xl border border-border bg-paper px-4 py-3 text-sm text-ink/70"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/downloads"
            className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper hover:opacity-90 transition-opacity"
          >
            Browse downloads
          </Link>
          <Link
            href="/assessment"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm text-ink hover:border-accent/50 transition-colors"
          >
            Take the Maturity Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
