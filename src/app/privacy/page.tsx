import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | AION Governance",
  description: "Our commitment to executive data privacy and secure communication.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col py-24">
       <section className="section-container max-w-3xl">
          <h1 className="text-3xl font-extrabold text-brand-dark mb-10 tracking-tight uppercase">Privacy Notice</h1>
          <div className="prose prose-sm text-brand-muted space-y-6 leading-relaxed">
             <p className="font-bold text-brand-dark uppercase tracking-wide underline underline-offset-4 decoration-2 decoration-brand-accent/30">1. Data Collection</p>
             <p>
                We collect minimal personal data through our inquiry and book notification forms, including names, enterprise email addresses, and professional context. This data is used solely for responding to your inquiries.
             </p>

             <p className="font-bold text-brand-dark uppercase tracking-wide underline underline-offset-4 decoration-2 decoration-brand-accent/30">2. Cookies and Tracking</p>
             <p>
                This site operates with essential cookies only. We do not use third-party marketing trackers or behavioral analytic scripts that compromise your executive privacy.
             </p>

             <p className="font-bold text-brand-dark uppercase tracking-wide underline underline-offset-4 decoration-2 decoration-brand-accent/30">3. Information Sharing</p>
             <p>
                AION Governance does not sell, rent, or trade your personal information. Data is only shared with third-party service providers (e.g., email notification systems) for the sole purpose of delivering our services to you.
             </p>
             
             <p className="font-bold text-brand-dark uppercase tracking-wide underline underline-offset-4 decoration-2 decoration-brand-accent/30">4. Your Rights</p>
             <p>
                Under applicable Swiss and GDPR regulations, you have the right to request access to, correction of, or deletion of your personal data held by us. Please contact advisory@aion-governance.ch for any privacy-related requests.
             </p>
          </div>
       </section>
    </div>
  );
}
