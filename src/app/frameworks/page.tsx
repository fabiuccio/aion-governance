import { Metadata } from "next";
import { Info, Target, Repeat, Cpu, BarChart2, Activity, ArrowRight, ShieldCheck, Zap, Layers, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AION Governance | Canonical Frameworks",
  description: "Detailed breakdown of the four AION frameworks: Governed AI Loop, Debt Quadrant, Executive Action Framework, and AIOS.",
};

export default function FrameworksPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Intro Section */}
      <section className="bg-brand-light py-20 border-b border-gray-100">
        <div className="section-container">
          <div className="max-w-3xl">
             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand-dark mb-6 leading-tight uppercase">Proprietary <br/>Methodology</h1>
             <p className="text-xl text-brand-muted leading-relaxed">
               AION Governance is built on four proprietary frameworks that interlock into a secondary, high-performance <span className="text-brand-dark font-bold underline decoration-brand-accent/20 underline-offset-4 decoration-2 italic">Governed AI Operating Model.</span>
             </p>
          </div>
        </div>
      </section>

      <GovernedAILoop />
      <DebtQuadrant />
      <ExecutiveAction />
      <AIOS />
      <Interlock />

      {/* Footer CTA */}
      <section className="py-24 bg-brand-light">
          <div className="section-container text-center">
             <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Ready to map your AI enterprise?</h2>
             <p className="text-brand-muted mb-12 max-w-xl mx-auto italic">
               We offer executive workshops that implement these canonical models directly onto your specific enterprise challenges.
             </p>
             <div className="flex justify-center space-x-6">
                <a href="/contact" className="btn-primary">Book a Consulting Call</a>
                <a href="/assessment" className="btn-secondary px-8 border-2">Start Maturity Check</a>
             </div>
          </div>
      </section>
    </div>
  );
}

// 2. Governed AI Loop Section
function GovernedAILoop() {
  const steps = [
    { name: "Align", text: "Business objectives with AI feasibility and strategy." },
    { name: "Constrain", text: "Define clear operational boundaries and risk thresholds." },
    { name: "Operate", text: "Deploy and manage the AI within defined constraints." },
    { name: "Assure", text: "Continuous monitoring and auditing of outcomes." },
    { name: "Evolve", text: "Iterate based on performance data and new capabilities." },
  ];

  return (
    <section id="loop" className="py-24 border-b border-gray-50 scroll-mt-20">
      <div className="section-container">
         <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
               <div className="p-3 bg-brand-accent/10 rounded-lg"><Repeat className="w-8 h-8 text-brand-accent" /></div>
               <h2 className="text-3xl font-extrabold text-brand-dark uppercase tracking-tight">Governed AI Loop</h2>
            </div>
            <p className="text-lg text-brand-muted mb-12 leading-relaxed max-w-2xl italic">
               A 5-phase, always-on operating rhythm that ensures every AI system remains aligned with enterprise risk and business value. This is a production operating cadence, NOT a project lifecycle or maturity model.
            </p>
            
            {/* Visual Stepper placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
               {steps.map((step, idx) => (
                  <div key={idx} className="relative p-6 bg-brand-light border border-gray-100 rounded-xl group transition-all">
                     <div className="text-brand-accent font-black text-2xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">0{idx+1}</div>
                     <h4 className="font-bold text-brand-dark uppercase tracking-tighter text-sm mb-2">{step.name}</h4>
                     <p className="text-[10px] uppercase text-brand-muted leading-relaxed font-medium">{step.text}</p>
                     {idx < steps.length - 1 && (
                        <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-200">
                           <ChevronRight className="w-6 h-6" />
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}

// 3. Debt Quadrant Section
function DebtQuadrant() {
  return (
    <section id="debt" className="py-24 bg-white border-b border-gray-50 scroll-mt-20">
      <div className="section-container">
         <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
               <div className="p-3 bg-brand-accent/10 rounded-lg"><BarChart2 className="w-8 h-8 text-brand-accent" /></div>
               <h2 className="text-3xl font-extrabold text-brand-dark uppercase tracking-tight">Debt Quadrant</h2>
            </div>
            <p className="text-lg text-brand-muted mb-12 leading-relaxed max-w-2xl italic">
               A 2x2 diagnostic mapping Governance Discipline against Value Velocity to identify deep technical and legal debt within your AI portfolio.
            </p>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-7">
                  {/* 2x2 Quadrant Grid */}
                  <div className="relative aspect-square max-w-md mx-auto border-l-4 border-b-4 border-brand-dark p-8">
                     {/* Y-Axis Label */}
                     <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap text-brand-muted">
                        Governance Discipline (Low → High)
                     </div>
                     {/* X-Axis Label */}
                     <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap text-brand-muted">
                        Value Velocity (Low → High)
                     </div>
                     
                     <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-4 relative">
                        {/* Reckless: High-V, Low-G (Top-Left position based on axis) */}
                        <div className="flex items-center justify-center border-2 border-dashed border-gray-200 p-6 text-center group hover:bg-red-50/20 hover:border-red-500/20 transition-all">
                           <div>
                              <h4 className="font-extrabold text-brand-dark uppercase tracking-tighter text-sm mb-1 group-hover:text-red-600 transition-colors">Reckless</h4>
                              <p className="text-[10px] text-brand-muted font-bold tracking-widest leading-tight uppercase">High-V / Low-G</p>
                           </div>
                        </div>
                        {/* Governed: High-V, High-G (Top-Right) */}
                        <div className="flex items-center justify-center border-4 border-brand-accent p-6 text-center bg-brand-accent/5 group hover:bg-brand-accent/10 transition-all shadow-xl">
                           <div>
                              <h4 className="font-extrabold text-brand-dark uppercase tracking-tighter text-sm mb-1 text-brand-accent transition-colors">Governed</h4>
                              <p className="text-[10px] text-brand-muted font-bold tracking-widest leading-tight uppercase">High-V / High-G</p>
                           </div>
                        </div>
                        {/* Stagnant: Low-V, Low-G (Bottom-Left) */}
                        <div className="flex items-center justify-center border-2 border-dashed border-gray-200 p-6 text-center group hover:bg-gray-100 transition-all">
                           <div>
                              <h4 className="font-extrabold text-brand-dark uppercase tracking-tighter text-sm mb-1">Stagnant</h4>
                              <p className="text-[10px] text-brand-muted font-bold tracking-widest leading-tight uppercase">Low-V / Low-G</p>
                           </div>
                        </div>
                        {/* Bureaucratic: Low-V, High-G (Bottom-Right) */}
                        <div className="flex items-center justify-center border-2 border-dashed border-gray-200 p-6 text-center group hover:bg-yellow-50/20 hover:border-yellow-500/20 transition-all">
                           <div>
                              <h4 className="font-extrabold text-brand-dark uppercase tracking-tighter text-sm mb-1 group-hover:text-yellow-600 transition-colors">Bureaucratic</h4>
                              <p className="text-[10px] text-brand-muted font-bold tracking-widest leading-tight uppercase">Low-V / High-G</p>
                           </div>
                        </div>
                        
                        {/* Centered provocation line inside or below grid */}
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-5 p-10 bg-brand-light rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-bold text-brand-dark uppercase tracking-tight mb-6 italic underline decoration-brand-accent/20 decoration-2 underline-offset-4 leading-tight">
                    "Most enterprises believe they are Governed. Most are Reckless or Bureaucratic."
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed mb-8">
                     Success in enterprise AI requires moving from the silos of the Reckless and Bureaucratic quadrants into a high-octane Governed operating model.
                  </p>
                  <a href="/assessment" className="text-xs font-bold uppercase tracking-widest text-brand-accent flex items-center group">
                     Diagnose your position <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

// 4. Executive Action Framework Section
function ExecutiveAction() {
  const phases = [
    { week: "Pre-sprint", phase: "Preparation", output: "Executive Sponsorship & Estate Inventory" },
    { week: "Weeks 1–2", phase: "Audit", output: "Debt Quadrant Positioning & Estate Audit" },
    { week: "Weeks 3–4", phase: "Standardization", output: "Minimum Viable Standards & ISO/NIST Mapping" },
    { week: "Weeks 5–6", phase: "Governance", output: "Formalized Ownership & Policy Substrate" },
    { week: "Weeks 7–8", phase: "Activation", output: "AIOS Layer Setup & Pilot Onboarding" },
    { week: "Weeks 9–12", phase: "Reporting", output: "AI Governance Maturity Score & Board Report" },
  ];

  return (
    <section id="executive" className="py-24 bg-white border-b border-gray-50 scroll-mt-20">
      <div className="section-container">
         <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
               <div className="p-3 bg-brand-accent/10 rounded-lg"><Target className="w-8 h-8 text-brand-accent" /></div>
               <h2 className="text-3xl font-extrabold text-brand-dark uppercase tracking-tight">Executive Action Framework</h2>
            </div>
            <p className="text-lg text-brand-muted mb-12 leading-relaxed max-w-2xl italic">
               A 90-day, executive-sponsored sprint methodology that creates an inventory of the AI estate, formalizes standards, and produces a board-ready report.
            </p>

            <div className="overflow-hidden border border-gray-100 rounded-2xl shadow-sm">
               <table className="w-full text-left border-collapse bg-white">
                  <thead>
                     <tr className="bg-brand-dark text-white uppercase text-[10px] tracking-widest font-bold">
                        <th className="px-6 py-4 border-b border-gray-800">Timeline</th>
                        <th className="px-6 py-4 border-b border-gray-800">Phase</th>
                        <th className="px-6 py-4 border-b border-gray-800">Key Deliverable</th>
                     </tr>
                  </thead>
                  <tbody>
                     {phases.map((p, idx) => (
                        <tr key={idx} className="hover:bg-brand-light transition-colors border-b border-gray-50">
                           <td className="px-6 py-4 text-xs font-bold text-brand-dark uppercase tracking-wide">{p.week}</td>
                           <td className="px-6 py-4 text-[10px] text-brand-muted uppercase font-black">{p.phase}</td>
                           <td className="px-6 py-4 text-xs italic text-brand-dark">{p.output}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            
            <p className="mt-8 text-xs text-brand-muted italic uppercase leading-relaxed max-w-lg">
               Note: This is the 90-day governance sprint methodology found in the Executive Book. Our online diagnostic assessment utilizes this same maturity model.
            </p>
         </div>
      </div>
    </section>
  );
}

// 5. AI Operating System (AIOS) Section
function AIOS() {
  return (
    <section id="aios" className="py-24 bg-white border-b border-gray-50 scroll-mt-20">
      <div className="section-container">
         <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
               <div className="p-3 bg-brand-accent/10 rounded-lg"><Cpu className="w-8 h-8 text-brand-accent" /></div>
               <h2 className="text-3xl font-extrabold text-brand-dark uppercase tracking-tight">AI Operating System (AIOS)</h2>
            </div>
            <p className="text-lg text-brand-muted mb-12 leading-relaxed max-w-2xl italic">
               The canonical, governed substrate of people, processes, and controls that enforces rule-based governance regardless of which agentic application runs on top.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <div className="group border-l-4 border-brand-accent pl-6 py-4 bg-brand-light rounded-r-xl">
                     <h4 className="text-xs font-black uppercase text-brand-dark mb-2 tracking-widest">What it is</h4>
                     <p className="text-sm text-brand-muted leading-relaxed uppercase font-medium">A governed OS-like kernel for enterprise AI operations.</p>
                  </div>
                  <div className="group border-l-4 border-brand-dark/20 pl-6 py-4 hover:border-brand-accent transition-all">
                     <h4 className="text-xs font-black uppercase text-brand-dark mb-2 tracking-widest">What it replaces</h4>
                     <p className="text-sm text-brand-muted leading-relaxed uppercase font-medium">Replaces shadow AI, ad-hoc integrations, and siloed point-solution governance.</p>
                  </div>
               </div>
               
               <div className="p-8 border border-gray-100 rounded-3xl bg-brand-dark text-white">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Conceptual Architecture Substrate</h4>
                  <ul className="space-y-6">
                     <li className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-brand-accent/20 rounded flex items-center justify-center text-brand-accent text-xs">M</div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest">MCP Foundation</p>
                           <p className="text-[10px] text-gray-400 mt-1 uppercase italic leading-tight">Unified Model Context Protocol integration.</p>
                        </div>
                     </li>
                     <li className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-brand-accent/20 rounded flex items-center justify-center text-brand-accent text-xs">A</div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest">A2A Governed Fabric</p>
                           <p className="text-[10px] text-gray-400 mt-1 uppercase italic leading-tight">Secure Agent-to-Agent communication layer.</p>
                        </div>
                     </li>
                     <li className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-brand-accent/20 rounded flex items-center justify-center text-brand-accent text-xs">C</div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest">Compliance Kernel</p>
                           <p className="text-[10px] text-gray-400 mt-1 uppercase italic leading-tight">ISO 42001 / NIST AI RMF / EU AI Act enforcement.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

// 6. How they interlock section
function Interlock() {
   return (
      <section className="py-24 bg-brand-light border-y border-gray-50">
        <div className="section-container text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-brand-dark mb-12 tracking-tight uppercase underline decoration-brand-accent/20 underline-offset-8">How the Frameworks Interlock</h2>
            <div className="grid md:grid-cols-3 gap-8 relative">
               <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h4 className="text-xs font-extrabold uppercase text-brand-accent mb-4">Strategic Pulse</h4>
                  <p className="text-sm font-medium text-brand-dark italic leading-relaxed uppercase tracking-tighter">
                     "Executive Action Framework populates the initial Quadrant and standardizes the Loop."
                  </p>
               </div>
               <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h4 className="text-xs font-extrabold uppercase text-brand-accent mb-4">Operational Rhythm</h4>
                  <p className="text-sm font-medium text-brand-dark italic leading-relaxed uppercase tracking-tighter">
                     "The Loop provides the continuous per-system cadence, while the Quadrant maps the portfolio portfolio."
                  </p>
               </div>
               <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <h4 className="text-xs font-extrabold uppercase text-brand-accent mb-4">Technical Substrate</h4>
                  <p className="text-sm font-medium text-brand-dark italic leading-relaxed uppercase tracking-tighter">
                     "The AIOS makes the governance real by enforcing the constraints defined in the Loop."
                  </p>
               </div>
               
               {/* Subtle connection lines could be added here in SVG */}
            </div>
            <div className="mt-16 p-8 border border-dashed border-gray-300 rounded-2xl flex items-center justify-center text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em]">
               [ Interactive Map Placeholder: Interlocking Operating Model Visualization ]
            </div>
        </div>
      </section>
   );
}
