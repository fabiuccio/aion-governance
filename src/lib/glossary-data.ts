export interface GlossaryTerm {
  term: string;
  definition: string;
  relatedFramework?: string;
  relatedSlug?: string;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "AI Governance",
    definition:
      "The policies, processes, and technical controls that define how AI systems are developed, deployed, monitored, and retired within an organisation. Effective AI governance is enforced in architecture, not documented in policy.",
  },
  {
    term: "AI Operating System (AIOS)",
    definition:
      "The governed control plane that centralises routing, identity, policy enforcement, and audit logging for all AI system requests. A design target your existing infrastructure grows into — not a product you can buy.",
    relatedFramework: "AIOS",
    relatedSlug: "aios",
  },
  {
    term: "AI System Record",
    definition:
      "Structured documentation capturing an AI system's purpose, business and technical owners, data inputs, operating constraints, compliance status, and performance indicators. The atomic unit of any AI inventory.",
  },
  {
    term: "Audit Trail",
    definition:
      "Machine-readable logs sufficient to reconstruct any AI decision — its inputs, model version, and output — at the individual decision level. The baseline evidence requirement for regulatory compliance under the EU AI Act.",
  },
  {
    term: "Bureaucratic Quadrant",
    definition:
      "The Debt Quadrant state characterised by high governance discipline but low value velocity. Audits pass; nothing ships. Governance investment is not converting to delivered value.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Business Owner",
    definition:
      "The named individual accountable for an AI system's business outcomes and governance compliance. Distinct from the technical owner, who is responsible for operational performance. Both must be named in the AI System Record.",
  },
  {
    term: "Change Management (AI)",
    definition:
      "The formal process for modifying an AI system's constraints, data boundaries, or underlying model — including impact assessment, governance review, and sign-off. Absence of change management is one of the primary causes of governance drift.",
  },
  {
    term: "Confidence Threshold",
    definition:
      "The minimum model confidence level below which a decision is escalated to human review rather than acted upon automatically. Thresholds must be documented, technically enforced, and regularly tested.",
  },
  {
    term: "Connector Library",
    definition:
      "Reusable integration components that connect AI systems to approved data sources under enforced governance controls. One of the five components of AIOS.",
    relatedFramework: "AIOS",
    relatedSlug: "aios",
  },
  {
    term: "Data Boundary",
    definition:
      "An explicit, enforced specification of which data an AI system is permitted to access or use. A data boundary is only meaningful when technically enforced — documentation alone is not a boundary.",
  },
  {
    term: "Debt Quadrant",
    definition:
      "The diagnostic framework that plots AI systems on two axes — Governance Discipline and Value Velocity — placing the estate in one of four states: Reckless, Governed, Stagnant, or Bureaucratic. Diagnosis precedes treatment.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Digital Omnibus Act",
    definition:
      "European legislation that adjusted enforcement timelines for parts of the EU AI Act, delaying compliance deadlines for certain system categories. Material to organisations planning EU AI Act compliance roadmaps in 2025–2026.",
  },
  {
    term: "Escalation Path",
    definition:
      "The defined route by which an AI decision that falls below a confidence threshold is routed to human oversight. Must be tested under realistic conditions — not assumed to work.",
  },
  {
    term: "EU AI Act",
    definition:
      "The European Union's risk-based regulatory framework for AI systems, classifying them across four risk tiers — unacceptable, high, limited, and minimal — with corresponding obligations for providers and deployers.",
  },
  {
    term: "Executive Action Framework",
    definition:
      "The 90-day, executive-sponsored sprint for establishing AI governance, structured across five phases: Inventory (weeks 1–2), Debt Audit (weeks 3–4), Architect (weeks 5–7), Govern (weeks 8–11), and Institutionalise (weeks 12–13).",
    relatedFramework: "Executive Action Framework",
    relatedSlug: "executive-action-framework",
  },
  {
    term: "Governed AI Loop",
    definition:
      "The five-phase continuous operating cadence: Align, Constrain, Operate, Assure, Evolve. Not a project methodology — an ongoing rhythm that runs for the full lifetime of an AI system in production.",
    relatedFramework: "Governed AI Loop",
    relatedSlug: "governed-ai-loop",
  },
  {
    term: "Governed Quadrant",
    definition:
      "The target state in the Debt Quadrant: high value velocity and high governance discipline. Faster than the Reckless quadrant by the third deployment, because reusable governance infrastructure compounds.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Governance Debt",
    definition:
      "The accumulated gap between what governance documents specify and what infrastructure actually enforces. Grows silently. Surfaces at audit, incident, or regulatory review.",
  },
  {
    term: "Governance Discipline",
    definition:
      "The consistency and completeness with which governance controls are applied across AI systems in an organisation. One of the two axes of the Debt Quadrant.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Governance Project",
    definition:
      "A time-bounded governance effort that ends when an AI system goes live. The anti-pattern the Governed AI Loop is designed to replace — governance that stops at deployment is not governance.",
  },
  {
    term: "Governance Registry",
    definition:
      "The centralised, maintained record of all AI systems in production, their owners, operating constraints, compliance status, and review history. The operational form of the AI inventory.",
  },
  {
    term: "High-Risk AI System",
    definition:
      "Under the EU AI Act, AI systems deployed in regulated application domains — including employment, education, critical infrastructure, access to essential services, and law enforcement — requiring conformity assessment before deployment.",
  },
  {
    term: "Human Oversight",
    definition:
      "The operational capacity to review, override, or halt AI system decisions. Required for high-risk systems under the EU AI Act. A design requirement, not a fallback — human oversight that cannot be exercised in practice is not oversight.",
  },
  {
    term: "Incident Response (AI)",
    definition:
      "The defined process for detecting, escalating, containing, and resolving AI system failures or governance breaches. Must be documented separately from general IT incident response and tested at least annually.",
  },
  {
    term: "Maturity Stage",
    definition:
      "One of five levels describing an organisation's AI governance capability: Invisible (0–19), Aware (20–39), Controlled (40–59), Optimised (60–79), Strategic (80–100). Determined by the AI Governance Maturity Assessment.",
  },
  {
    term: "Minimum Viable Policy",
    definition:
      "The minimum set of governance controls necessary to move an AI system from Reckless to Controlled: a named business owner, documented data boundaries, a confidence threshold, and a tested escalation path.",
  },
  {
    term: "Model Card",
    definition:
      "Structured documentation describing a machine learning model's intended use, performance characteristics, known limitations, and training data provenance. Required for high-risk systems under the EU AI Act.",
  },
  {
    term: "Model Drift",
    definition:
      "Degradation in an AI model's performance, accuracy, or alignment with its intended purpose over time, typically caused by distributional shift in input data. Must be detected automatically, not discovered through user complaints.",
  },
  {
    term: "Observability",
    definition:
      "The degree to which an AI system's decisions, inputs, and outputs can be monitored, reconstructed, and audited — both in real time and historically. One of the five components of AIOS.",
    relatedFramework: "AIOS",
    relatedSlug: "aios",
  },
  {
    term: "Policy Enforcement",
    definition:
      "The technical application of governance rules to AI system behaviour, as distinct from documented policies that rely on individual developers or operators to comply voluntarily.",
  },
  {
    term: "Reckless Quadrant",
    definition:
      "The Debt Quadrant state characterised by high value velocity but low governance discipline. Maximum short-term output; maximum long-term exposure. The most common self-reported quadrant; the most common actual quadrant.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Responsible AI",
    definition:
      "The practice of developing and deploying AI systems in ways that are fair, transparent, accountable, and aligned with human values. The necessary but insufficient precursor to governed AI — principles without enforcement are not governance.",
  },
  {
    term: "Risk Classification",
    definition:
      "The process of assigning an EU AI Act risk category to an AI system based on its application domain, potential impact, and deployment context. Required in the Inventory phase of the Executive Action Framework.",
  },
  {
    term: "Routing & Policy Enforcement",
    definition:
      "The AIOS component that directs every AI request through applicable governance checks before execution — data boundary validation, identity verification, policy evaluation, and logging.",
    relatedFramework: "AIOS",
    relatedSlug: "aios",
  },
  {
    term: "Secrets & Identity",
    definition:
      "The AIOS component managing authentication, authorisation, and secrets for AI system access to data sources, APIs, and infrastructure. Centralisation here eliminates per-system credential sprawl.",
    relatedFramework: "AIOS",
    relatedSlug: "aios",
  },
  {
    term: "Stagnant Quadrant",
    definition:
      "The Debt Quadrant state characterised by low value velocity and low governance discipline. Both clocks have stopped. The quietest quadrant, and typically the most dangerous — no pressure to govern, no evidence of value.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Swiss FADP",
    definition:
      "The Swiss Federal Act on Data Protection (revised 2023), broadly aligned with GDPR and applicable to organisations processing personal data of Swiss residents. Relevant to data retention and subject access requirements.",
  },
  {
    term: "Technical Owner",
    definition:
      "The named individual responsible for an AI system's technical operation, maintenance, and performance. Distinct from the business owner, who holds accountability for outcomes and compliance.",
  },
  {
    term: "Value Velocity",
    definition:
      "The speed at which an organisation can take validated AI use cases from approval to production value delivery. One of the two axes of the Debt Quadrant. Governed organisations achieve higher velocity by deployment three.",
    relatedFramework: "Debt Quadrant",
    relatedSlug: "debt-quadrant",
  },
  {
    term: "Velocity Flywheel",
    definition:
      "The compounding dynamic by which governance infrastructure — reusable artefacts, enforced controls, stable operating patterns — reduces deployment friction across successive AI deployments. The mechanism by which governed teams overtake ungoverned ones.",
  },
  {
    term: "Velocity Thesis",
    definition:
      "The central argument of Govern or Fail: ungoverned AI is a short-term arbitrage that collapses; governed AI is a compounding structural advantage by the third deployment. Governance and speed are not in tension — they are in sequence.",
  },
];
