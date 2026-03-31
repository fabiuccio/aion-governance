import { Metadata } from "next";
import { Download, FileText, LayoutGrid, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Gated Assets | AION Governance",
  description: "Free and premium executive assets for enterprise AI governance strategy.",
};

export default function ResourcesPage() {
  const assets = [
    { title: "Debt Quadrant Canvas", type: "PDF", gated: false },
    { title: "Governed Loop Implementation Guide", type: "Whitepaper", gated: true },
    { title: "AIOS Architecture Blueprint", type: "Technical Spec", gated: true },
    { title: "90-Day Framework Checklist", type: "Excel", gated: false },
  ];

  return (
    <div className="flex flex-col">
       <section className="bg-brand-light py-20 border-b border-gray-100">
          <div className="section-container">
             <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase">Executive Resources</h1>
                <p className="text-lg text-brand-muted leading-relaxed">
                  Proven tools and strategic assets to help you implement our proprietary governance models across your organization.
                </p>
             </div>
          </div>
       </section>

       <section className="py-24">
          <div className="section-container">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {assets.map((asset) => (
                  <div key={asset.title} className="p-8 border border-gray-100 rounded-xl hover:border-brand-accent/50 transition-all bg-white shadow-sm flex flex-col justify-between h-full">
                     <div>
                        <div className="mb-4 text-brand-accent"><FileText className="w-8 h-8" /></div>
                        <h3 className="font-bold text-brand-dark mb-2 uppercase tracking-tighter text-sm">{asset.title}</h3>
                        <p className="text-[10px] text-brand-muted uppercase tracking-widest">{asset.type}</p>
                     </div>
                     <div className="mt-8">
                        {asset.gated ? (
                           <button className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-muted group">
                              <Lock className="w-4 h-4 text-brand-muted group-hover:text-brand-accent" />
                              <span>Gated Asset</span>
                           </button>
                        ) : (
                           <button className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-accent hover:underline decoration-2 underline-offset-4">
                              <Download className="w-4 h-4" />
                              <span>Download Now</span>
                           </button>
                        )}
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </section>

       <section className="py-24 bg-gray-50/50">
          <div className="section-container max-w-4xl text-center">
             <h2 className="text-3xl font-bold mb-6 tracking-tight uppercase">Premium Access</h2>
             <p className="text-brand-muted mb-12 italic leading-relaxed">
               Registered clients get full access to our high-fidelity implementation specs and private case studies. 
               Connect with us to gain full access to the AION Knowledge Base.
             </p>
             <a href="/contact" className="btn-primary">Become a Member</a>
          </div>
       </section>
    </div>
  );
}
