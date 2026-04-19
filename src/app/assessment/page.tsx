import { Metadata } from "next";
import { AssessmentTool } from "@/components/assessment-tool";

export const metadata: Metadata = {
  title: "AI Governance Maturity Assessment | AION Governance",
  description:
    "Answer 25 questions across five governance dimensions and receive your personalised AI Governance Maturity score — from Invisible to Strategic.",
  openGraph: {
    title: "AI Governance Maturity Assessment",
    description:
      "Benchmark your organisation's AI governance in under 10 minutes. Get a personalised maturity score and actionable recommendations.",
  },
};

export default function AssessmentPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <AssessmentTool />
      </div>
    </main>
  );
}
