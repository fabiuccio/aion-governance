import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | AION Governance",
  description: "Legal notice and framework usage conditions for AION Governance.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col py-24">
       <section className="section-container max-w-3xl">
          <h1 className="text-3xl font-extrabold text-brand-dark mb-10 tracking-tight uppercase">Legal Disclaimer</h1>
          <div className="prose prose-sm text-brand-muted space-y-6 leading-relaxed">
             <p className="font-bold text-brand-dark uppercase tracking-wide">1. General Information Only</p>
             <p>
                The information provided on this website, including but not limited to the proprietary frameworks (Governed AI Loop, Debt Quadrant, Executive Action Framework, AIOS), is for general informational and educational purposes only. It is not intended as professional, legal, or strategic advice.
             </p>

             <p className="font-bold text-brand-dark uppercase tracking-wide">2. No Advisory Relationship</p>
             <p>
                Accessing this site or communicating with AION Governance via this site does not constitute an advisory-client relationship. Such relationships are only established through a formal, signed engagement letter.
             </p>

             <p className="font-bold text-brand-dark uppercase tracking-wide">3. Intellectual Property</p>
             <p>
                All proprietary frameworks mentioned on this site are the intellectual property of AION Governance and are protected by applicable copyright and trademark laws. Unauthorized use or reproduction is strictly prohibited.
             </p>

             <p className="font-bold text-brand-dark uppercase tracking-wide">4. Limitation of Liability</p>
             <p>
                AION Governance makes no warranties or representations about the accuracy or completeness of this site's content. Under no circumstances will AION Governance be liable for any direct, indirect, or consequential loss arising from the use of the information on this site.
             </p>
          </div>
       </section>
    </div>
  );
}
