import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | AION Governance",
  description: "Legal disclaimer for AION Governance — general information only, not professional advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col py-24">
      <section className="section-container max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-4">Legal Notice</p>
        <h1 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase">Disclaimer</h1>
        <p className="text-brand-muted text-sm mb-12 leading-relaxed">
          Please read this disclaimer carefully before using the AION Governance website or any materials published under the AION name.
        </p>

        <div className="space-y-10 text-brand-muted text-sm leading-relaxed">

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">1. General Information Only</p>
            <p>
              All content published on this website — including articles, framework descriptions, assessment tools, and any associated materials — is provided for general informational and educational purposes only. AION Governance aims to support awareness of AI governance principles and to share frameworks that organisations may find useful as a starting point for their own thinking.
            </p>
            <p className="mt-3">
              Nothing on this site constitutes, or should be construed as, legal advice, regulatory guidance, financial advice, or investment advice of any kind.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">2. Not a Substitute for Professional Counsel</p>
            <p>
              AI governance is a rapidly evolving field that intersects law, regulation, risk management, and organisational strategy. Readers and users of this site are strongly encouraged to seek independent legal and compliance counsel before making decisions based on any content published here.
            </p>
            <p className="mt-3">
              This applies in particular — but not exclusively — to compliance with standards and regulations such as:
            </p>
            <ul className="mt-3 space-y-1 list-none pl-4 border-l-2 border-brand-accent/20">
              <li>The EU Artificial Intelligence Act (EU AI Act)</li>
              <li>ISO/IEC 42001 — AI Management Systems</li>
              <li>NIST AI Risk Management Framework (NIST AI RMF)</li>
              <li>Applicable national data protection laws (including the GDPR and Swiss nDSG)</li>
            </ul>
            <p className="mt-3">
              The frameworks and models described on this site are designed to assist thinking, not to guarantee compliance with any specific regulatory requirement.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">3. No Advisory Relationship</p>
            <p>
              Accessing this site, reading its content, or communicating with AION Governance through any channel does not establish an advisory or consulting relationship. Any such relationship is formed exclusively through a formal, written engagement agreement.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">4. Illustrative Examples</p>
            <p>
              Any examples, scenarios, or case descriptions referenced on this site are either wholly illustrative or have been anonymised and generalised. They do not represent specific organisations, clients, projects, or events, and should not be interpreted as such.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">5. Intellectual Property</p>
            <p>
              The AION framework names — including the Governed AI Loop, the AI Debt Quadrant, the Executive Action Framework, and AIOS — and all associated descriptions, diagrams, and written content are the intellectual property of the author and AION Governance. Reproduction, adaptation, or redistribution without explicit written permission is prohibited.
            </p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-wide text-xs mb-3">6. Limitation of Liability</p>
            <p>
              AION Governance makes no warranties, express or implied, regarding the accuracy, completeness, or fitness for purpose of any content on this site. To the fullest extent permitted by applicable law, AION Governance shall not be liable for any direct, indirect, incidental, consequential, or special loss or damage arising from the use of, or reliance on, any information published on this site.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              This disclaimer was last updated in 2025. It may be revised without prior notice.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
