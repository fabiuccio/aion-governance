import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated reading and reference list for AI governance practitioners — regulatory guidance, infrastructure tooling, academic references, and working standards.",
};

const SECTIONS = [
  {
    title: "Regulatory & Standards",
    items: [
      {
        title: "EU AI Act — Full Text",
        org: "European Parliament",
        description:
          "The consolidated regulation text. Annex III lists high-risk systems. Title III covers obligations for providers and deployers. Essential reading before any compliance planning.",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689",
      },
      {
        title: "EU AI Act — NIST AI RMF Mapping",
        org: "NIST",
        description:
          "How the EU AI Act requirements map to the NIST AI Risk Management Framework. Useful if your organisation already uses NIST frameworks.",
        url: "https://airc.nist.gov/Docs/1",
      },
      {
        title: "NIST AI Risk Management Framework 1.0",
        org: "NIST",
        description:
          "The US voluntary framework for managing AI risks. Structured around four functions: Govern, Map, Measure, Manage. Good complement to the Governed AI Loop.",
        url: "https://airc.nist.gov/RMF",
      },
      {
        title: "Swiss Federal Act on Data Protection (revFADP)",
        org: "Swiss Confederation",
        description:
          "The revised Swiss data protection legislation, effective September 2023. Broadly aligned with GDPR. Applies to any organisation processing data of Swiss residents.",
        url: "https://www.fedlex.admin.ch/eli/cc/2022/491/en",
      },
      {
        title: "ISO/IEC 42001 — AI Management Systems",
        org: "ISO",
        description:
          "The international standard for AI management systems. Provides a certifiable framework for responsible AI development and governance. Increasingly referenced in procurement requirements.",
        url: "https://www.iso.org/standard/81230.html",
      },
    ],
  },
  {
    title: "Architecture & Infrastructure",
    items: [
      {
        title: "Model Context Protocol (MCP) Specification",
        org: "Anthropic",
        description:
          "The open protocol for connecting AI models to data sources and tools. Relevant to AIOS connector design — MCP-compatible connectors reduce integration friction significantly.",
        url: "https://modelcontextprotocol.io/specification",
      },
      {
        title: "Agent-to-Agent (A2A) Protocol",
        org: "Google",
        description:
          "Google's protocol for multi-agent communication. Relevant to governance teams building orchestration layers — A2A defines how agents discover capabilities and delegate tasks.",
        url: "https://google.github.io/A2A/",
      },
      {
        title: "OWASP Top 10 for LLM Applications",
        org: "OWASP",
        description:
          "The ten most critical security risks for LLM-based applications. Prompt injection, insecure output handling, and training data poisoning are the three with the most direct governance implications.",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
      },
    ],
  },
  {
    title: "AI Gateways & Policy Enforcement",
    items: [
      {
        title: "Kong AI Gateway",
        org: "Kong",
        description:
          "Enterprise API gateway with AI-specific plugins for routing, rate limiting, and observability. One entry point into AIOS Routing & Policy Enforcement.",
        url: "https://konghq.com/products/kong-ai-gateway",
      },
      {
        title: "Portkey AI Gateway",
        org: "Portkey",
        description:
          "Open-source AI gateway focused on reliability and observability across LLM providers. Good starting point for teams without an existing API gateway practice.",
        url: "https://portkey.ai",
      },
      {
        title: "Cloudflare AI Gateway",
        org: "Cloudflare",
        description:
          "Cloudflare's managed AI gateway offering caching, rate limiting, and request logging. Lowest-friction entry point for teams already on Cloudflare infrastructure.",
        url: "https://developers.cloudflare.com/ai-gateway/",
      },
    ],
  },
  {
    title: "Observability & Audit",
    items: [
      {
        title: "Langfuse",
        org: "Langfuse",
        description:
          "Open-source LLM observability platform. Traces, evals, and prompt management. Self-hostable. The closest available starting point for AIOS Observability & Audit Logging.",
        url: "https://langfuse.com",
      },
      {
        title: "Helicone",
        org: "Helicone",
        description:
          "LLM observability and proxy layer with request logging, cost tracking, and analytics. Useful for teams wanting managed observability without self-hosting.",
        url: "https://helicone.ai",
      },
      {
        title: "OpenTelemetry for AI / Semantic Conventions",
        org: "OpenTelemetry",
        description:
          "The emerging standard for AI/ML observability instrumentation. GenAI semantic conventions define how to attribute spans for LLM calls. Foundation for vendor-neutral audit logging.",
        url: "https://opentelemetry.io/docs/specs/semconv/gen-ai/",
      },
    ],
  },
  {
    title: "GRC & Compliance Tools",
    items: [
      {
        title: "Drata",
        org: "Drata",
        description:
          "Continuous compliance automation platform. Relevant for teams managing SOC 2 or ISO 27001 alongside AI governance — evidence collection can be extended to AI system controls.",
        url: "https://drata.com",
      },
      {
        title: "Vanta",
        org: "Vanta",
        description:
          "Security and compliance automation. Similar to Drata. Strong integrations with cloud providers and SaaS tools that AI systems typically depend on.",
        url: "https://vanta.com",
      },
    ],
  },
  {
    title: "Academic & Research",
    items: [
      {
        title: "Datasheets for Datasets",
        org: "Gebru et al., 2021",
        description:
          "The foundational paper proposing structured documentation for training datasets — the conceptual precursor to Model Cards. Required reading for anyone designing AI System Records.",
        url: "https://arxiv.org/abs/1803.09010",
      },
      {
        title: "Model Cards for Model Reporting",
        org: "Mitchell et al., 2019 (Google)",
        description:
          "The original model card proposal. Defines a structured format for documenting model performance, intended use, and limitations. Now a de facto standard and referenced in the EU AI Act.",
        url: "https://arxiv.org/abs/1810.03993",
      },
      {
        title: "Accountability of AI Under the Law",
        org: "Doshi-Velez et al., Harvard",
        description:
          "A legal and technical framework for AI accountability. Examines how existing legal doctrines apply to AI decision-making. Relevant to teams designing escalation and liability structures.",
        url: "https://arxiv.org/abs/1711.01134",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Reference
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Resources</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          Curated references for AI governance practitioners — regulatory texts,
          infrastructure tooling, and academic foundations. Kept current;
          organised by category.
        </p>
        <p className="mt-2 text-sm text-ink/40">Last updated: April 2026</p>
      </div>

      <div className="mt-14 space-y-16">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-2xl text-ink border-b border-border pb-4">
              {section.title}
            </h2>
            <div className="mt-6 space-y-6">
              {section.items.map((item) => (
                <div key={item.title} className="grid gap-1 sm:grid-cols-[1fr_auto]">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ink hover:text-ink/70 transition-colors"
                      >
                        {item.title}
                      </a>
                      <span className="text-xs text-ink/40">{item.org}</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex h-8 items-center justify-center self-start rounded-full border border-border px-3 text-xs text-ink/50 hover:border-accent/50 hover:text-ink transition-colors whitespace-nowrap"
                  >
                    Open →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
