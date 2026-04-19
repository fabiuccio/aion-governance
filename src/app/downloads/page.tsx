import type { Metadata } from "next";
import { DownloadCard } from "@/components/download-card";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Working templates from the Executive Action Framework — AI inventory, ownership register, minimum viable policy, and board report outline.",
};

const DOWNLOADS = [
  {
    id: "template-a",
    label: "Template A",
    title: "Business Unit AI Inventory Survey",
    description:
      "A structured survey for business unit leads to self-report AI systems in use. Covers system name, purpose, vendor, data sources, and governance status. Designed to be sent by the governance team during the Inventory phase (weeks 1–2) of the 90-day sprint.",
    fields: [
      "System name and version",
      "Business unit and primary function",
      "System purpose and decisions made",
      "Vendor / technology stack",
      "Data sources accessed",
      "Estimated volume of decisions per month",
      "EU AI Act risk category (self-assessed)",
      "Current governance status",
    ],
    source: "template-a" as const,
  },
  {
    id: "template-b",
    label: "Template B",
    title: "AI System Record",
    description:
      "The canonical record for a single AI system in your governance registry. One record per system. Maintained by the technical owner; reviewed by the business owner quarterly.",
    fields: [
      "System ID and slug",
      "Business owner (name, role, contact)",
      "Technical owner (name, role, contact)",
      "Purpose and decision scope",
      "Data inputs and classification",
      "Documented constraints",
      "Technically enforced constraints",
      "Confidence threshold",
      "Escalation path",
      "EU AI Act classification",
      "Monitoring status and last audit date",
      "Review frequency and next review date",
    ],
    source: "template-b" as const,
  },
  {
    id: "template-c",
    label: "Template C",
    title: "Minimum Viable Policy",
    description:
      "A one-page governance policy for a single AI system. The MVP: enough control to move from Reckless to Controlled. Drafted by the governance team; approved by the business owner.",
    fields: [
      "System in scope",
      "Policy owner and effective date",
      "Permitted uses",
      "Prohibited uses and hard limits",
      "Data boundary specification",
      "Confidence threshold and escalation trigger",
      "Escalation procedure (step by step)",
      "Change control process",
      "Review schedule",
      "Signatures (business owner, technical owner)",
    ],
    source: "template-c" as const,
  },
  {
    id: "template-d",
    label: "Template D",
    title: "AI Ownership Register",
    description:
      "The master register of all AI systems and their named owners. Maintained by the governance function; reviewed at board level quarterly. The operational output of the Inventory phase.",
    fields: [
      "System name and ID",
      "Business unit",
      "Business owner",
      "Technical owner",
      "EU AI Act risk category",
      "Governance status (Reckless / Controlled / Governed)",
      "Last review date",
      "Next review date",
      "Open issues",
    ],
    source: "template-d" as const,
  },
  {
    id: "template-e",
    label: "Template E",
    title: "Board Report Slide Outline",
    description:
      "A five-slide structure for executive-level AI governance reporting. Designed for quarterly board or executive committee use. Covers portfolio health, risk exposure, compliance posture, and 90-day priorities.",
    fields: [
      "Slide 1: AI Portfolio Overview — system count, risk distribution, maturity score",
      "Slide 2: Governance Incidents — count, severity, resolution status",
      "Slide 3: Compliance Readiness — EU AI Act status, audit-ready percentage",
      "Slide 4: Velocity and Value — deployments completed, deployment time trend",
      "Slide 5: 90-Day Priorities — top 3 governance actions with owners and dates",
    ],
    source: "template-e" as const,
  },
];

export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Templates
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Downloads</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          The five working templates from the Executive Action Framework. Each
          one is a deliverable from the 90-day sprint — leave the program with
          all five filled in.
        </p>
        <p className="mt-4 text-base text-ink/55">
          Files are being finalised for release. Enter your email on any
          template to be notified when it ships.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {DOWNLOADS.map((dl) => (
          <DownloadCard key={dl.id} {...dl} />
        ))}
      </div>
    </div>
  );
}
