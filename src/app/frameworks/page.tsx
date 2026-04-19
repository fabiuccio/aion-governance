import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "A working guide to the four frameworks Govern or Fail is built on — the Debt Quadrant, Governed AI Loop, AIOS, and Executive Action Framework.",
};

export default function FrameworksPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-16 sm:px-8">

      {/* Hero */}
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Frameworks
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink sm:text-6xl">
          Four frameworks. One operating model.
        </h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          A working guide to the conceptual structures this book is built on —
          what a framework is for, why governance needs them, and how the four
          interlocking ones fit together.
        </p>
      </div>

      {/* Why frameworks */}
      <section className="mt-16 rounded-[2rem] border border-border bg-shell p-8 sm:p-10">
        <h2 className="font-serif text-3xl text-ink">Why frameworks</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-ink/72">
          <p>
            A framework is not a template you fill in. It is a shared way of
            seeing a problem — a compression of experience into a structure that
            other people can reason about, argue with, and apply.
          </p>
          <p>
            In enterprise AI, frameworks matter for a specific reason. The
            problems are novel, the vocabulary is fragmented, and the
            consequences of getting governance wrong are now too large to solve
            in ad hoc conversations. When a CIO, a CISO, a business unit head,
            and a board director talk about &ldquo;AI governance,&rdquo; they
            are usually talking about four different things. A shared framework
            gives them a place where they can disagree precisely instead of
            agreeing vaguely.
          </p>
          <p>
            The four frameworks on this page are the ones{" "}
            <em>Govern or Fail</em> is built on. Each does a different job.
            Together they form the operating model the book argues for —
            diagnosis, cadence, architecture, execution.
          </p>
          <p>
            Read them in the order they appear below. The sequence matters.
            Diagnosis before treatment. Treatment rhythm before infrastructure.
            Infrastructure before the 90-day sprint that stands it up.
          </p>
        </div>
      </section>

      {/* Framework cards */}
      <div className="mt-8 space-y-6">

        {/* Card 1 — Debt Quadrant */}
        <div className="rounded-[2rem] border border-border border-l-[3px] border-l-[#8FA680] bg-paper p-8 sm:p-10">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-xs uppercase tracking-[0.22em] text-ink/35">01 · Diagnostic</p>
          </div>
          <h2 className="mt-2 font-serif text-4xl text-ink">Debt Quadrant</h2>
          <p className="mt-1 text-base italic text-ink/50">
            Where does your AI estate sit?
          </p>
          <div className="mt-6 space-y-4 text-base leading-7 text-ink/72">
            <p>
              The Debt Quadrant plots AI systems on two axes: governance
              discipline and value velocity. Four positions emerge.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "Reckless",
                  sub: "high velocity, low discipline",
                  body: "Fast delivery with no brakes. Maximum short-term value, maximum long-term exposure. The most common actual position; the least common self-reported one.",
                },
                {
                  name: "Governed",
                  sub: "high velocity, high discipline",
                  body: "The target state. Faster than Reckless by the third deployment, because reusable governance infrastructure compounds.",
                  accent: true,
                },
                {
                  name: "Bureaucratic",
                  sub: "low velocity, high discipline",
                  body: "Oversight without delivery. Audits pass, nothing ships.",
                },
                {
                  name: "Stagnant",
                  sub: "low velocity, low discipline",
                  body: "Both clocks stopped. The quietest quadrant, the most dangerous. No pressure to govern, no evidence of value, no external forcing function.",
                },
              ].map((q) => (
                <div
                  key={q.name}
                  className={`rounded-xl border p-4 ${q.accent ? "border-[#8FA680] bg-[rgba(143,166,128,0.07)]" : "border-border bg-shell"}`}
                >
                  <p className="font-medium text-ink">{q.name}</p>
                  <p className="text-xs text-ink/45 mt-0.5">{q.sub}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">{q.body}</p>
                </div>
              ))}
            </div>
            <p>
              The only wrong answer is a flattering one. Most self-assessments
              place the organisation in Governed. Most data-based assessments
              place it somewhere between Reckless and Bureaucratic. The gap
              between the two is usually the most useful piece of information
              in any AI governance conversation.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/debt-quadrant"
              className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper hover:opacity-90 transition-opacity"
            >
              Place your estate on the Quadrant →
            </Link>
          </div>
        </div>

        {/* Card 2 — Governed AI Loop */}
        <div className="rounded-[2rem] border border-border bg-paper p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/35">02 · Operating cadence</p>
          <h2 className="mt-2 font-serif text-4xl text-ink">Governed AI Loop</h2>
          <p className="mt-1 text-base italic text-ink/50">
            How do you run governed AI in production?
          </p>
          <div className="mt-6 space-y-4 text-base leading-7 text-ink/72">
            <p>
              Five phases, continuously:{" "}
              <strong className="text-ink font-medium">
                Align → Constrain → Operate → Assure → Evolve.
              </strong>
            </p>
            <div className="space-y-3 border-l-2 border-border pl-5">
              {[
                { phase: "Align", body: "What the AI system is supposed to do, for whom, under what constraints. Intent and ownership." },
                { phase: "Constrain", body: "The data boundaries, policy rules, and thresholds that define acceptable behaviour." },
                { phase: "Operate", body: "The system running under the constraints, with every decision logged." },
                { phase: "Assure", body: "Monitoring, audit, and incident response that verify the constraints are holding." },
                { phase: "Evolve", body: "Controlled change: policy updates, model changes, boundary adjustments. Feeds back into Align." },
              ].map((p) => (
                <div key={p.phase}>
                  <span className="font-medium text-ink">{p.phase}</span>
                  <span className="text-ink/70"> — {p.body}</span>
                </div>
              ))}
            </div>
            <p>
              The Loop is continuous by design. &ldquo;Project-based
              governance&rdquo; is the pattern that fails — it treats governance
              as a one-time onboarding rather than an operating rhythm that runs
              as long as the AI system is in production.
            </p>
            <p className="font-medium text-ink">
              If governance activity in your organisation stops when the system
              goes live, you are running a governance project, not a governance
              loop.
            </p>
          </div>
        </div>

        {/* Card 3 — AIOS */}
        <div className="rounded-[2rem] border border-border bg-paper p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/35">03 · Architecture</p>
          <h2 className="mt-2 font-serif text-4xl text-ink">
            AIOS — AI Operating System
          </h2>
          <p className="mt-1 text-base italic text-ink/50">
            What do you build to make governance enforceable?
          </p>
          <div className="mt-6 space-y-4 text-base leading-7 text-ink/72">
            <p>
              AIOS is a synthesised target architecture, not a product. It names
              the governed control plane where every AI request is routed,
              authenticated, logged, policy-checked, and bounded — by default,
              for every system, without depending on individual developers to do
              the right thing.
            </p>
            <p className="font-medium text-ink">Five components:</p>
            <ol className="space-y-3">
              {[
                { n: "1", name: "Routing & Policy Enforcement", body: "The traffic cop. Every AI request passes through this layer; policy is applied at runtime, not checked by documentation." },
                { n: "2", name: "Governance Registry", body: "The source of truth for approved systems, policies, callers, and data domains." },
                { n: "3", name: "Observability & Audit Logging", body: "Every call logged with enough detail to reconstruct the decision. Tamper-evident." },
                { n: "4", name: "Secrets & Identity", body: "IdP-bound authentication. Who is calling, with what right, for how long." },
                { n: "5", name: "Connector Library", body: "Approved, reusable bridges to enterprise data and external tools." },
              ].map((c) => (
                <li key={c.n} className="flex gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-shell text-xs font-semibold text-ink/50 mt-0.5">
                    {c.n}
                  </span>
                  <span>
                    <span className="font-medium text-ink">{c.name}</span>
                    <span className="text-ink/70"> — {c.body}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p>
              AIOS is not a tollbooth you can buy. It is a design target your
              existing infrastructure grows into — through API gateway maturity,
              identity integration, and the five components above. Vendor AI
              governance modules address parts of this at the single-product
              scope; AIOS is how you enforce governance across the AI systems
              you did <em>not</em> buy from any single vendor.
            </p>
          </div>
        </div>

        {/* Card 4 — Executive Action Framework */}
        <div className="rounded-[2rem] border border-border bg-paper p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/35">04 · Execution</p>
          <h2 className="mt-2 font-serif text-4xl text-ink">
            Executive Action Framework
          </h2>
          <p className="mt-1 text-base italic text-ink/50">
            How do you start in the next 90 days?
          </p>
          <div className="mt-6 space-y-4 text-base leading-7 text-ink/72">
            <p>
              A time-boxed, executive-sponsored sprint with five phases and one
              named output per phase.
            </p>
            <div className="space-y-3">
              {[
                { phase: "Phase 1 — Inventory", weeks: "Weeks 1–2", output: "AI system register", body: "Catalogue every AI system, pilot, and shadow use." },
                { phase: "Phase 2 — Debt Audit", weeks: "Weeks 3–4", output: "Quadrant placement", body: "Honest assessment of discipline and velocity per system." },
                { phase: "Phase 3 — Architect", weeks: "Weeks 5–7", output: "AIOS sprint plan", body: "Registry, routing, audit, identity, connectors. Named owner per component." },
                { phase: "Phase 4 — Govern", weeks: "Weeks 8–11", output: "First two governed systems live", body: "Two production AI systems move from shadow to the control plane. Policies enforced at runtime." },
                { phase: "Phase 5 — Institutionalise", weeks: "Weeks 12–13", output: "Steady-state operating model", body: "Named owners, recurring reviews, quarterly cadence." },
              ].map((p) => (
                <div key={p.phase} className="rounded-xl border border-border bg-shell px-5 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span className="font-medium text-ink text-sm">{p.phase}</span>
                    <span className="text-xs text-ink/40">{p.weeks}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-accent uppercase tracking-wide">
                    {p.output}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-ink/65">{p.body}</p>
                </div>
              ))}
            </div>
            <p>
              At Day 90, you have a board-ready governance report, a maturity
              score, and a 12-month roadmap. You do not have a fully governed AI
              estate — that takes 12 to 18 months. What you have is the accurate
              picture of where you stand, the ownership structure to act on it,
              and the board&apos;s mandate to continue.
            </p>
            <p className="font-medium text-ink">
              90 days from now, this programme is either in production or it is
              abandoned. There is no Phase 2 extension. The deadline is a
              feature, not a bug.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/sprint"
              className="inline-flex h-10 items-center justify-center rounded-full bg-ink px-5 text-sm text-paper hover:opacity-90 transition-opacity"
            >
              Run the 90-day sprint →
            </Link>
          </div>
        </div>
      </div>

      {/* Closing block */}
      <section className="mt-8 rounded-[2rem] border border-border bg-shell p-8 sm:p-10">
        <h2 className="font-serif text-3xl text-ink">How they fit together</h2>
        <div className="mt-5 space-y-4 text-base leading-7 text-ink/72">
          <p>
            The Debt Quadrant tells you where you are. The Governed AI Loop
            tells you how governed systems run. AIOS tells you what
            infrastructure you need to build. The Executive Action Framework
            tells you how to start.
          </p>
          <p>
            Each is useful alone. Together they are an operating model.
          </p>
          <p>
            The book works through them in detail — with cases, data, and the
            political dynamics that architecture alone cannot solve. The tools
            on this site operationalise the ones that benefit from
            interactivity: the{" "}
            <Link href="/debt-quadrant" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">
              Debt Quadrant
            </Link>{" "}
            for plotting your own estate, the{" "}
            <Link href="/assessment" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">
              Maturity Assessment
            </Link>{" "}
            for scoring governance discipline, the{" "}
            <Link href="/sprint" className="text-ink underline underline-offset-2 hover:text-ink/70 transition-colors">
              90-Day Sprint
            </Link>{" "}
            for running the EAF end to end.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/book"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm text-ink hover:border-accent/50 transition-colors"
          >
            About the book →
          </Link>
        </div>
      </section>

    </div>
  );
}
