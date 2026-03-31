import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | AION Governance",
  description: "Boutique firm registration and legal details for AION Governance.",
};

export default function ImprintPage() {
  return (
    <div className="flex flex-col py-24">
       <section className="section-container max-w-3xl">
          <h1 className="text-3xl font-extrabold text-brand-dark mb-10 tracking-tight uppercase">Imprint</h1>
          <div className="prose prose-sm text-brand-muted space-y-8 leading-relaxed">
             <div>
                <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2">Company Name</p>
                <p className="text-sm font-medium">AION Governance AG (Placeholder)</p>
             </div>

             <div>
                <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2">Address</p>
                <p className="text-sm font-medium">Boutique Executive Office<br/>Zurich, Switzerland</p>
             </div>

             <div>
                <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2">Company Number (Placeholder)</p>
                <p className="text-sm font-medium">CHE-XXX.XXX.XXX</p>
             </div>

             <div>
                <p className="font-bold text-brand-dark uppercase tracking-widest text-[10px] mb-2">Editor responsible for content</p>
                <p className="text-sm font-medium italic underline decoration-brand-accent/20 transition-all decoration-2 underline-offset-4">[Founder Name Placeholder]</p>
             </div>

             <div className="p-6 bg-brand-light border border-gray-100 rounded-xl mt-12">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4 opacity-70">Regulatory & Compliance Notice</p>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase">
                   AION Governance is a private boutique advisory firm. We do not provide banking, financial, or regulated legal services. Our services are strictly strategic and organizational in nature.
                </p>
             </div>
          </div>
       </section>
    </div>
  );
}
