import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | AION Governance",
  description: "Legal information and operator details for AION Governance.",
};

export default function ImprintPage() {
  return (
    <div className="flex flex-col py-24">
      <section className="section-container max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-4">Legal Information</p>
        <h1 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase">Imprint</h1>
        <p className="text-brand-muted text-sm mb-12 leading-relaxed">
          AION Governance is currently operated by its founder as an independent practice. Full legal entity details will be updated upon incorporation. The information below reflects the current status.
        </p>

        <div className="space-y-8 text-sm">

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2 text-gray-400">Company Legal Name</p>
            {/* TODO: Insert registered company name once incorporated */}
            <p className="font-medium text-brand-dark italic">[TODO — to be completed upon incorporation]</p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2 text-gray-400">Registered Address</p>
            {/* TODO: Insert registered address */}
            <p className="font-medium text-brand-dark italic">[TODO — registered address]</p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2 text-gray-400">Company Registration Number</p>
            {/* TODO: Insert company registration number (e.g. Swiss UID: CHE-XXX.XXX.XXX) */}
            <p className="font-medium text-brand-dark italic">[TODO — registration number]</p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2 text-gray-400">Responsible Person</p>
            {/* TODO: Insert full name of the person responsible for content */}
            <p className="font-medium text-brand-dark italic">[TODO — founder name]</p>
          </div>

          <div>
            <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2 text-gray-400">Contact</p>
            {/* TODO: Insert public contact email address */}
            <p className="font-medium text-brand-dark italic">[TODO — contact email]</p>
          </div>

        </div>

        <div className="mt-16 p-6 bg-brand-light border border-gray-100 rounded-xl">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-3">Current Operating Status</p>
          <p className="text-sm text-brand-muted leading-relaxed">
            AION Governance is currently operated by its founder as an independent practice, prior to formal incorporation. The frameworks, content, and tools published on this site represent independent intellectual work. Full legal entity details — including company name, registration number, and registered address — will be published on this page upon incorporation.
          </p>
        </div>

      </section>
    </div>
  );
}
