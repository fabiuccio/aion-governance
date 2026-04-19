export interface AnswerOption {
  value: number;
  label: string;
}

export interface Question {
  id: number;
  text: string;
  options: AnswerOption[];
}

export interface Section {
  id: number;
  title: string;
  phase: string;
  description: string;
  questions: Question[];
}

export interface MaturityStage {
  stage: number;
  name: string;
  range: [number, number];
  description: string;
  recommendation: string;
}

const STANDARD_OPTIONS: AnswerOption[] = [
  { value: 0, label: "Not at all / We haven't started" },
  { value: 1, label: "Informally / Ad hoc efforts exist" },
  { value: 2, label: "Partially / Some structure in place" },
  { value: 3, label: "Mostly / Consistent but not complete" },
  { value: 4, label: "Fully / Systematic and documented" },
];

export const SECTIONS: Section[] = [
  {
    id: 1,
    title: "Inventory and Ownership",
    phase: "Align",
    description:
      "How well does your organisation know what AI systems it operates, who owns them, and how they connect to business outcomes?",
    questions: [
      {
        id: 1,
        text: "Does your organisation maintain a comprehensive, up-to-date inventory of all AI systems in production?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 2,
        text: "Is there a named business owner—distinct from the technical owner—for each AI system?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 3,
        text: "Have your AI systems been classified under the EU AI Act risk categories (or an equivalent regulatory framework)?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 4,
        text: "Are the KPIs and business outcomes each AI system is expected to influence explicitly documented?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 5,
        text: "Is the inventory reviewed and updated at a defined frequency (e.g., quarterly) rather than only when issues arise?",
        options: STANDARD_OPTIONS,
      },
    ],
  },
  {
    id: 2,
    title: "Constraint and Control",
    phase: "Constrain",
    description:
      "How effectively does your organisation define and enforce boundaries on what AI systems can and cannot do?",
    questions: [
      {
        id: 6,
        text: "Are explicit data boundaries defined for each AI system—specifying which data it may and may not access or use?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 7,
        text: "Do your AI systems operate with documented confidence thresholds below which decisions are escalated to humans?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 8,
        text: "Are operating constraints enforced technically (e.g., guardrails, access controls) rather than relying on procedural policies alone?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 9,
        text: "Are escalation paths tested regularly to confirm they work as intended under realistic conditions?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 10,
        text: "Is there a formal change management process for modifying AI system constraints, including impact assessment and sign-off?",
        options: STANDARD_OPTIONS,
      },
    ],
  },
  {
    id: 3,
    title: "Monitoring and Assurance",
    phase: "Assure",
    description:
      "Can your organisation detect problems, reconstruct decisions, and demonstrate compliance when it matters most?",
    questions: [
      {
        id: 11,
        text: "Are AI system decisions logged at a level that captures the inputs, model version, and output for each individual decision?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 12,
        text: "Can you reconstruct any specific AI decision made in the past 12 months within a reasonable timeframe?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 13,
        text: "Is model drift—degradation in performance or alignment over time—detected automatically rather than discovered through complaints?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 14,
        text: "Could your organisation produce audit-ready evidence of AI governance compliance within 48 hours of a regulator request?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 15,
        text: "Is there a documented incident response playbook specifically for AI failures, distinct from general IT incident response?",
        options: STANDARD_OPTIONS,
      },
    ],
  },
  {
    id: 4,
    title: "Deployment Economics and Reuse",
    phase: "Operate",
    description:
      "How efficiently does your organisation deploy AI and extract value across the business through reuse and cost discipline?",
    questions: [
      {
        id: 16,
        text: "Can your organisation take a validated AI use case from approval to production in under eight weeks?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 17,
        text: "Are governance artefacts (risk assessments, data cards, model cards) reused across similar projects rather than rebuilt each time?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 18,
        text: "Is the total cost of running each AI system—including compute, licences, and human oversight—tracked and reviewed regularly?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 19,
        text: "Does your AI portfolio include deliberate diversification across vendors or model providers to reduce concentration risk?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 20,
        text: "Does your organisation have a multi-year AI Operating System (AIOS) roadmap that is reviewed by senior leadership at least annually?",
        options: STANDARD_OPTIONS,
      },
    ],
  },
  {
    id: 5,
    title: "Governance Integration with Business Strategy",
    phase: "Evolve",
    description:
      "How deeply is AI governance embedded in your organisation's strategic decision-making and competitive positioning?",
    questions: [
      {
        id: 21,
        text: "Does your board or executive committee receive structured AI governance reporting—covering risk, performance, and compliance—at least quarterly?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 22,
        text: "Have business units outside the technology function adopted AI governance practices as part of their own operating rhythms?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 23,
        text: "Does your organisation actively demonstrate its AI governance posture to external stakeholders—clients, partners, or regulators?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 24,
        text: "Can you point to measurable improvements in AI performance, risk reduction, or cost efficiency attributable to governance activities?",
        options: STANDARD_OPTIONS,
      },
      {
        id: 25,
        text: "Is responsible AI governance treated as a source of competitive advantage rather than a compliance cost in your organisation?",
        options: STANDARD_OPTIONS,
      },
    ],
  },
];

export const MATURITY_STAGES: MaturityStage[] = [
  {
    stage: 1,
    name: "Invisible",
    range: [0, 19],
    description:
      "AI governance is largely absent. Systems operate without formal oversight, ownership, or controls. Risks accumulate invisibly.",
    recommendation:
      "Start with a full AI inventory and assign named business owners. Establish basic operating constraints before expanding AI use.",
  },
  {
    stage: 2,
    name: "Aware",
    range: [20, 39],
    description:
      "Your organisation recognises the need for governance but practices are informal and inconsistent. Good intentions exist but are not yet systematic.",
    recommendation:
      "Formalise your inventory, classify systems by risk, and introduce documented constraints. Focus on the Align and Constrain phases.",
  },
  {
    stage: 3,
    name: "Controlled",
    range: [40, 59],
    description:
      "Core governance structures are in place. Ownership, constraints, and monitoring exist but may not yet be fully integrated or consistently applied.",
    recommendation:
      "Strengthen audit readiness and incident response. Begin embedding governance artefact reuse to reduce deployment friction.",
  },
  {
    stage: 4,
    name: "Optimised",
    range: [60, 79],
    description:
      "Governance is systematic and measurable. Your organisation can demonstrate compliance, reuse artefacts, and deploy AI efficiently.",
    recommendation:
      "Focus on strategic integration: board-level reporting, cross-functional adoption, and positioning governance as a business advantage.",
  },
  {
    stage: 5,
    name: "Strategic",
    range: [80, 100],
    description:
      "AI governance is a strategic capability. It accelerates deployment, protects the business, and differentiates your organisation externally.",
    recommendation:
      "Sustain your edge by sharing practices externally, contributing to standards, and continuing to innovate your governance model.",
  },
];

export function getMaturityStage(score: number): MaturityStage {
  return (
    MATURITY_STAGES.find((s) => score >= s.range[0] && score <= s.range[1]) ??
    MATURITY_STAGES[0]
  );
}

export function getSectionScore(
  sectionId: number,
  answers: Record<number, number>
): number {
  const section = SECTIONS.find((s) => s.id === sectionId);
  if (!section) return 0;
  return section.questions.reduce(
    (sum, q) => sum + (answers[q.id] ?? 0),
    0
  );
}

export function getTotalScore(answers: Record<number, number>): number {
  return Object.values(answers).reduce((sum, v) => sum + v, 0);
}
