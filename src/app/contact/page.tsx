import { Metadata } from "next";
import { Mail, Globe, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact AION Governance | Strategic Advisory",
  description: "Get in touch with AION Governance for boutique advisory, executive coaching, or workshops regarding high-performance AI scale.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
       <section className="py-24 bg-brand-light">
          <div className="section-container">
             <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-6 leading-tight uppercase underline transition-all decoration-brand-accent/20">Contact <br/>Advisory</h1>
                <p className="text-xl text-brand-muted mb-12 max-w-2xl leading-relaxed italic border-l-4 border-brand-accent/20 pl-6">
                   "We prioritize strategic alignment over technical volume. Let's discuss your governance gaps."
                </p>
             </div>
          </div>
       </section>

       <section className="py-24">
          <div className="section-container lg:grid lg:grid-cols-2 lg:gap-20">
             <div>
                <h3 className="text-xl font-bold mb-8 uppercase tracking-tighter text-brand-dark">Send an Inquiry</h3>
                <form className="space-y-6">
                   <div className="grid md:grid-flow-col md:auto-cols-fr gap-6">
                      <div className="flex flex-col space-y-1.5">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Full Name</label>
                         <input type="text" className="px-4 py-3 bg-brand-light border border-gray-100 rounded-lg focus:outline-none focus:border-brand-accent transition-colors text-sm" placeholder="Executive Name" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Enterprise Email</label>
                         <input type="email" className="px-4 py-3 bg-brand-light border border-gray-100 rounded-lg focus:outline-none focus:border-brand-accent transition-colors text-sm" placeholder="exec@company.com" />
                      </div>
                   </div>
                   <div className="flex flex-col space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Target Framework of Interest</label>
                      <select className="px-4 py-3 bg-brand-light border border-gray-100 rounded-lg focus:outline-none focus:border-brand-accent transition-colors text-sm uppercase font-medium tracking-wide">
                         <option>General Advisory</option>
                         <option>Governed AI Loop</option>
                         <option>Debt Quadrant Audit</option>
                         <option>Executive Action Sprint</option>
                         <option>AIOS Layer Implementation</option>
                      </select>
                   </div>
                   <div className="flex flex-col space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Context / Challenges</label>
                      <textarea rows={5} className="px-4 py-3 bg-brand-light border border-gray-100 rounded-lg focus:outline-none focus:border-brand-accent transition-colors text-sm" placeholder="Briefly describe your current governance maturity and hurdles..."></textarea>
                   </div>
                   <button type="submit" className="btn-primary w-full md:w-fit py-4 px-12 text-sm uppercase tracking-widest font-bold">Submit Inquiry</button>
                </form>
             </div>
             
             <div className="mt-16 lg:mt-0 space-y-12">
                <div>
                   <h3 className="text-xl font-bold mb-8 uppercase tracking-tighter text-brand-dark">Firm Details</h3>
                   <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                         <Mail className="w-5 h-5 text-brand-accent mt-0.5" />
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Direct Outreach</p>
                            <p className="text-sm font-medium text-brand-dark">advisory@aion-governance.ch</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <Globe className="w-5 h-5 text-brand-accent mt-0.5" />
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">HQ / Boutique Firm</p>
                            <p className="text-sm font-medium text-brand-dark">Zurich, Switzerland</p>
                         </div>
                      </div>
                      <div className="flex items-start space-x-4">
                         <Clock className="w-5 h-5 text-brand-accent mt-0.5" />
                         <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-1">Response Time</p>
                            <p className="text-sm font-medium text-brand-dark italic text-brand-muted">Typically within 48 business hours.</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Visual Placeholder for Office / Environment */}
                <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-[10px] uppercase tracking-widest text-center p-12 leading-relaxed">
                       [ Context Visualization: <br/> Professional Advisory Environment <br/> (Zurich / Minimalist Office) ]
                    </div>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
}
