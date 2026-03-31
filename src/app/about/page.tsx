import { Metadata } from "next";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Founder | AION Governance",
  description: "Meet the executive coach and strategist behind AION's proprietary AI governance frameworks.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
       <section className="py-24 lg:py-32 bg-brand-light">
          <div className="section-container lg:grid lg:grid-cols-2 lg:gap-20 items-center">
             <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-6 leading-tight uppercase">The Founder</h1>
                <p className="text-xl text-brand-muted mb-8 leading-relaxed italic border-l-4 border-brand-accent/20 pl-6">
                   "Governance is not a technical problem; it is an organizational and strategic imperative."
                </p>
                <div className="space-y-6 text-brand-muted text-sm leading-relaxed mb-10">
                   <p>
                      With over 15 years in enterprise strategy and high-performance operating models, the founder of AION Governance has guided numerous Fortune 500 leadership teams through the complexities of digital transformation and proprietary AI scale.
                   </p>
                   <p>
                      The four core frameworks—Governed AI Loop, Debt Quadrant, Executive Action Framework, and AIOS—were developed through direct interventions within organizations that were struggling to move beyond the "pilot trap."
                   </p>
                   <p>
                      Today, AION serves as a boutique advisory firm for executives who understand that high-quality governance is the ultimate accelerator for AI value realization.
                   </p>
                </div>
                <div className="flex space-x-6">
                   <a href="/contact" className="btn-primary">Connect with the Founder</a>
                   <a href="#" className="flex items-center space-x-2 text-brand-muted hover:text-brand-accent text-xs font-bold uppercase tracking-widest transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn Profile</span>
                   </a>
                </div>
             </div>
             <div className="order-1 lg:order-2 mb-16 lg:mb-0 aspect-square bg-gray-200 rounded-3xl relative overflow-hidden border border-gray-300 shadow-xl max-w-lg mx-auto lg:max-w-none">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono text-[10px] uppercase tracking-widest text-center p-12">
                   [ Founder Portrait Placeholder: <br/> Professional / Executive Headshot ]
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent"></div>
             </div>
          </div>
       </section>

       <section className="py-24 bg-white">
          <div className="section-container text-center max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-8 tracking-tight uppercase">The AION Mission</h2>
             <p className="text-brand-muted mb-12 leading-relaxed">
               To provide the strategic clarity and rigorous frameworks necessary for AI to become a baseline, high-performance operating model for every global enterprise.
             </p>
          </div>
       </section>
    </div>
  );
}
