import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information and operator details for AION Governance.",
};

export default function ImprintPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
        Legal information
      </p>
      <h1 className="mt-5 font-serif text-5xl text-ink">Imprint</h1>
      <p className="mt-6 text-lg leading-8 text-ink/70">
        AION Governance is operated as an independent publishing practice by its
        founder, prior to formal incorporation. The content, frameworks, and
        tools on this site represent independent intellectual work.
      </p>

      <div className="mt-14 space-y-10">
        <div className="grid gap-1">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            Responsible person
          </p>
          <p className="mt-2 text-base text-ink">Fabio Aulico</p>
        </div>

        <div className="grid gap-1">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            Address
          </p>
          <address className="mt-2 not-italic text-base leading-7 text-ink">
            Fabio Aulico
            <br />
            Rämistrasse 18
            <br />
            8001 Zürich
            <br />
            Switzerland
          </address>
        </div>

        <div className="grid gap-1">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            Contact
          </p>
          <p className="mt-2 text-base text-ink">
            <a
              href="mailto:fabio@aion-governance.ch"
              className="hover:text-ink/70 transition-colors"
            >
              fabio@aion-governance.ch
            </a>
          </p>
        </div>

        <div className="grid gap-1">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            Content responsibility
          </p>
          <p className="mt-2 text-base leading-7 text-ink/70">
            Fabio Aulico is responsible for all editorial content published on
            this website in accordance with applicable Swiss law. All opinions
            expressed are personal and do not represent the views of any
            employer or client.
          </p>
        </div>

        <div className="grid gap-1">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            Hosting
          </p>
          <p className="mt-2 text-base leading-7 text-ink/70">
            This website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-border bg-shell p-7">
          <p className="text-xs uppercase tracking-[0.22em] text-ink/45">
            Incorporation status
          </p>
          <p className="mt-3 text-base leading-7 text-ink/70">
            AION Governance is not yet a registered legal entity. Full
            registration details — including company name, Swiss UID, and
            registered address — will be published on this page upon
            incorporation, expected in 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
