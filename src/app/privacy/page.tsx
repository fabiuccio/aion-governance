import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | AION Governance",
  description: "How AION Governance collects, uses, and protects personal data.",
};

// TODO: Have this notice reviewed by a qualified legal or data protection professional before publishing.

export default function PrivacyPage() {
  return (
    <div className="flex flex-col py-24">
      <section className="section-container max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-4">Data & Privacy</p>
        <h1 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase">Privacy Notice</h1>
        <p className="text-brand-muted text-sm mb-2 leading-relaxed">
          This notice explains how AION Governance collects, uses, and stores personal data in connection with this website.
        </p>
        <p className="text-brand-muted text-sm mb-12 leading-relaxed">
          {/* TODO: Insert legal entity name and registered address when incorporated */}
          This is a preliminary template. It will be updated with complete legal entity details prior to formal launch.
        </p>

        <div className="space-y-10 text-brand-muted text-sm leading-relaxed">

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">1. What Data We Collect</p>
            <p>We collect personal data only when you actively provide it. This currently includes:</p>
            <ul className="mt-3 space-y-2 list-none pl-4 border-l-2 border-brand-accent/20">
              <li>
                <span className="font-medium text-brand-dark">Contact form submissions</span> — your name, email address, and any message or context you choose to include when reaching out via the contact form.
              </li>
              <li>
                <span className="font-medium text-brand-dark">Newsletter or update sign-ups</span> — your email address, if you choose to subscribe to updates related to the book or AION content.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect sensitive personal data, financial data, or data relating to minors.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">2. How We Use Your Data</p>
            <p>Data you submit is used solely for the following purposes:</p>
            <ul className="mt-3 space-y-2 list-none pl-4 border-l-2 border-brand-accent/20">
              <li><span className="font-medium text-brand-dark">Responding to your inquiry</span> — to reply to messages sent through the contact form.</li>
              <li><span className="font-medium text-brand-dark">Sending updates</span> — if you have signed up for notifications, to inform you of relevant content such as book launch updates or new framework publications.</li>
              <li><span className="font-medium text-brand-dark">Improving our services</span> — to understand, in aggregate, what topics are of interest to visitors.</li>
            </ul>
            <p className="mt-3">
              We do not use your data for automated decision-making, profiling, or targeted advertising.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">3. Third-Party Services</p>
            <p>
              This website uses a limited number of third-party services to operate. These may include:
            </p>
            <ul className="mt-3 space-y-2 list-none pl-4 border-l-2 border-brand-accent/20">
              <li>
                <span className="font-medium text-brand-dark">Email delivery</span> — {/* TODO: Insert name of email service provider (e.g. Resend, Mailchimp, SendGrid) */}
                <span className="italic text-gray-400">[TODO: name of provider]</span>, used to receive and manage contact form submissions and newsletter sends.
              </li>
              <li>
                <span className="font-medium text-brand-dark">Web analytics</span> — {/* TODO: Insert analytics provider (e.g. Plausible, Fathom, Google Analytics) and privacy settings */}
                <span className="italic text-gray-400">[TODO: name of provider]</span>, used to understand aggregate website traffic in a privacy-respecting manner.
              </li>
            </ul>
            <p className="mt-3">
              We select third-party providers with data protection and minimal data collection in mind. We do not sell data to third parties, and we do not use advertising networks.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">4. Data Retention</p>
            <p>
              {/* TODO: Define retention policy once operational processes are established */}
              Personal data is retained only for as long as necessary to fulfil the purpose for which it was collected. Contact form data is retained for a reasonable period to support follow-up communication, after which it is deleted. Newsletter subscribers may unsubscribe at any time.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">5. Your Rights as a Data Subject</p>
            <p>
              Depending on your jurisdiction, you may have the following rights with respect to your personal data:
            </p>
            <ul className="mt-3 space-y-1 list-none pl-4 border-l-2 border-brand-accent/20">
              <li><span className="font-medium text-brand-dark">Access</span> — to request a copy of the data we hold about you.</li>
              <li><span className="font-medium text-brand-dark">Correction</span> — to request that inaccurate data be corrected.</li>
              <li><span className="font-medium text-brand-dark">Deletion</span> — to request that your data be erased where there is no lawful basis for retention.</li>
              <li><span className="font-medium text-brand-dark">Objection</span> — to object to the use of your data for specific purposes.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at the address below. We will respond within a reasonable timeframe and in accordance with applicable law.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">6. Contact for Privacy Questions</p>
            <p>
              For any questions or requests relating to this privacy notice or the handling of your personal data, please write to:
            </p>
            <div className="mt-3 pl-4 border-l-2 border-brand-accent/20">
              {/* TODO: Insert contact email address for privacy requests */}
              <p className="font-medium text-brand-dark">AION Governance — Data Privacy</p>
              <p className="italic text-gray-400">[TODO: insert contact email address]</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              {/* TODO: Update this date when the notice is reviewed and finalised */}
              This privacy notice is a working draft. Last reviewed: 2025. It will be updated prior to launch and whenever material changes occur.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
