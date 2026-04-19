import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How AION Governance collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
        Data &amp; privacy
      </p>
      <h1 className="mt-5 font-serif text-5xl text-ink">Privacy Notice</h1>
      <p className="mt-6 text-lg leading-8 text-ink/70">
        This notice explains how AION Governance collects, uses, and stores
        personal data in connection with this website. It applies to all
        visitors and subscribers.
      </p>

      <div className="mt-14 space-y-12 text-base leading-7 text-ink/70">

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            1. Controller
          </h2>
          <p>
            The data controller for this website is Fabio Aulico, 8854 Siebnen, Switzerland.{" "}
            <a
              href="mailto:fabio@aion-governance.ch"
              className="text-ink hover:text-ink/70 transition-colors"
            >
              fabio@aion-governance.ch
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            2. Data we collect
          </h2>
          <p>
            We collect personal data only when you actively provide it. This
            currently includes:
          </p>
          <ul className="space-y-3 border-l-2 border-border pl-5">
            <li>
              <span className="font-medium text-ink">
                Newsletter and book update sign-ups
              </span>{" "}
              — your email address, and optionally your name, if you subscribe
              to updates.
            </li>
            <li>
              <span className="font-medium text-ink">
                AI Governance Maturity Assessment
              </span>{" "}
              — your email address, optionally your name, your answers to the
              25 assessment questions, and your maturity score, if you request a
              results report.
            </li>
          </ul>
          <p>
            We do not collect sensitive personal data, financial data, or any
            data from minors. We do not use cookies for tracking or advertising.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            3. How we use your data
          </h2>
          <p>Data you submit is used solely for the following purposes:</p>
          <ul className="space-y-3 border-l-2 border-border pl-5">
            <li>
              <span className="font-medium text-ink">Sending updates</span> —
              to inform subscribers of new essays, framework publications, and
              book launch details, where they have signed up for this.
            </li>
            <li>
              <span className="font-medium text-ink">
                Delivering assessment results
              </span>{" "}
              — to send the personalised maturity report by email when
              requested.
            </li>
          </ul>
          <p>
            We do not use your data for automated profiling, targeted
            advertising, or sale to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            4. Third-party services
          </h2>
          <p>
            This website uses a limited number of third-party services:
          </p>
          <ul className="space-y-3 border-l-2 border-border pl-5">
            <li>
              <span className="font-medium text-ink">
                Supabase (database and authentication)
              </span>{" "}
              — subscriber emails and assessment results are stored in a
              Supabase PostgreSQL database hosted on AWS infrastructure in
              Europe. Supabase privacy policy:{" "}
              <span className="text-ink/50">supabase.com/privacy</span>
            </li>
            <li>
              <span className="font-medium text-ink">
                Resend (email delivery)
              </span>{" "}
              — transactional emails (newsletter confirmations, assessment
              reports) are sent via Resend. Resend privacy policy:{" "}
              <span className="text-ink/50">resend.com/legal/privacy-policy</span>
            </li>
            <li>
              <span className="font-medium text-ink">
                Vercel Analytics (website analytics)
              </span>{" "}
              — privacy-friendly, cookieless page view analytics hosted by
              Vercel. No personal data is stored; no cookie banner is required.
              Vercel privacy policy:{" "}
              <span className="text-ink/50">vercel.com/legal/privacy-policy</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            5. Data retention
          </h2>
          <p>
            Subscriber email addresses are retained for as long as the
            subscription is active. Assessment results are retained
            indefinitely in aggregated form for analysis. You may request
            deletion at any time by writing to the contact address below.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            6. Your rights
          </h2>
          <p>
            Under GDPR and the Swiss Federal Act on Data Protection (revFADP),
            you have the right to access, correct, or delete personal data we
            hold about you, and to object to its processing. To exercise any of
            these rights, write to{" "}
            <a
              href="mailto:fabio@aion-governance.ch"
              className="text-ink hover:text-ink/70 transition-colors"
            >
              fabio@aion-governance.ch
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-ink/45">
            7. Changes to this notice
          </h2>
          <p>
            This notice may be updated when material changes occur. The date
            below reflects the last revision.
          </p>
        </section>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-ink/45">
            Last updated: April 2026 · Questions:{" "}
            <a
              href="mailto:fabio@aion-governance.ch"
              className="text-ink/60 hover:text-ink transition-colors"
            >
              fabio@aion-governance.ch
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
