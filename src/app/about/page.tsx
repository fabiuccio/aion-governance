import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Fabio Aulico — eighteen years inside enterprise AI and integration deployments, author of Govern or Fail.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          About
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Fabio Aulico</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          Eighteen years inside enterprise AI and integration deployments —
          close enough to see both the ambition that drives them and the
          organisational reality that stops most of them. I work at the
          intersection of enterprise technology, integration architecture, and AI
          governance, currently as a Senior Account Partner at Salesforce.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-border bg-paper p-8">
          <div className="space-y-5 text-lg leading-8 text-ink/72">
            <p>
              Most of the current AI conversation is either highly technical or
              highly promotional. I am more interested in the operating layer in
              between: the place where architecture, governance, ownership, and
              organisational reality actually meet. That is the subject of the
              book —{" "}
              <em>
                Govern or Fail: The Executive Playbook for Enterprise AI That
                Actually Scales
              </em>{" "}
              — and of the essays on this site.
            </p>
            <p>
              The audience I write for includes Chief Digital Officers, CIOs,
              CTOs, enterprise architects, and the operators working under them
              who need AI to be manageable in practice, not just impressive in
              principle.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            What you will find here
          </p>
          <ul className="mt-6 space-y-4 text-base leading-7 text-ink/72">
            <li>
              Essays on AI governance as an architecture problem, not a policy
              problem
            </li>
            <li>
              Framework notes drawn from the book, written in working terms
            </li>
            <li>
              Builder logs on publishing, tooling, and AI-assisted development
            </li>
            <li>
              EU AI Act commentary grounded in what the Digital Omnibus delay
              actually changes
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] border border-border bg-paper p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
          What AION means
        </p>
        <div className="mt-5 space-y-5 text-base leading-7 text-ink/72">
          <p>
            AION carries two meanings deliberately. As a technical contraction
            — AI-on — it names the operating state this site argues for:
            governance switched on in architecture, enforced on every request,
            rather than written into policy documents that production AI systems
            never consult.
          </p>
          <p>
            As a classical reference — the ancient Greek word for age or era —
            it names the larger claim: that eras are defined by the governing
            discipline of the systems that power them. The AI era will be
            defined by whether enterprises build governance into the operating
            layer or discover, too late, that they never did.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm text-ink hover:border-accent/50 transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href={`mailto:${siteConfig.email}`}
          className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm text-ink hover:border-accent/50 transition-colors"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
