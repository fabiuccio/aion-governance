import { Metadata } from "next";
import { Users, Presentation, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Services & Workshops | AION Governance",
  description: "Boutique AI governance consulting, executive coaching, and frameworks implementation workshops.",
};

export default function ServicesPage() {
  const services = [
    {
       title: "Executive Strategic Audit",
       description: "A 30-day diagnostic deep-dive mapping your current AI debt against our proprietary quadrants.",
       icon: <TrendingUp className="w-6 h-6 text-brand-accent" />,
       id: "audit",
    },
    {
       title: "AIOS Implementation",
       description: "Technical and strategic oversight for building your enterprise's unified governed AI layer.",
       icon: <Lightbulb className="w-6 h-6 text-brand-accent" />,
       id: "aios",
    },
    {
       title: "Governed Loop Workshops",
       description: "Intensive 2-day team sessions on the Align → Constrain → Operate → Assure → Evolve cycle.",
       icon: <Presentation className="w-6 h-6 text-brand-accent" />,
       id: "workshops",
    },
    {
       title: "Boutique Advisory",
       description: "Ongoing retainer-based executive coaching for AI maturity and high-performance scale.",
       icon: <Users className="w-6 h-6 text-brand-accent" />,
       id: "advisory",
    },
  ];

  return (
    <div className="flex flex-col">
       <section className="bg-brand-dark text-white py-24">
          <div className="section-container">
             <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight uppercase">Strategic <br/>Services</h1>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed italic">
                   "We don't build models; we build the models that govern the models."
                </p>
             </div>
          </div>
       </section>

       <section className="py-24">
          <div className="section-container">
             <div className="grid md:grid-cols-2 gap-12">
                {services.map((s) => (
                  <div key={s.id} className="p-10 border border-gray-100 rounded-2xl hover:border-brand-accent/50 transition-all group bg-white shadow-sm hover:shadow-lg">
                     <div className="mb-6 p-4 bg-gray-50 rounded-lg w-fit group-hover:bg-brand-accent/10 transition-colors">{s.icon}</div>
                     <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-brand-dark">{s.title}</h3>
                     <p className="text-brand-muted text-sm leading-relaxed mb-8">{s.description}</p>
                     <a href="/contact" className="text-xs font-bold uppercase tracking-widest text-brand-accent hover:underline decoration-2 underline-offset-4">Inquire Now →</a>
                  </div>
                ))}
             </div>
          </div>
       </section>

       <section className="py-24 bg-brand-light border-y border-gray-100">
          <div className="section-container text-center max-w-3xl">
             <h2 className="text-3xl font-bold mb-6 tracking-tight uppercase">Custom Workshops</h2>
             <p className="text-brand-muted mb-10 leading-relaxed italic">
               Tailored for executive leadership teams looking to move from reckless pilots to governed enterprise-wide scale.
             </p>
             <div className="aspect-video bg-gray-200 rounded-2xl border border-gray-300 flex items-center justify-center text-gray-500 font-mono text-[10px] uppercase tracking-widest p-12 text-center">
               [ Workshop Case Study Visualization: Transforming Debt into Discipline ]
             </div>
          </div>
       </section>
    </div>
  );
}
