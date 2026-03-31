import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Layers, BarChart3, AlertTriangle, Cpu, Repeat, Target, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white border-b border-gray-100">
        <div className="section-container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-dark/5 border border-brand-dark/10 text-brand-dark text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              The Enterprise AI Governance Standard
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-brand-dark mb-10 leading-[1.05]">
              From AI activity to <br/>
              <span className="text-brand-accent italic font-serif">governed</span> AI at scale.
            </h1>
            <p className="text-xl text-brand-muted mb-12 leading-relaxed max-w-2xl mx-auto">
              Move beyond reckless experimentation. AION Governance provides the framework to transform AI from a board-level liability into a high-performance operating model.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/assessment" className="btn-primary px-10 py-4 flex items-center justify-center text-sm font-bold uppercase tracking-widest">
                Check AI Governance Maturity <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/book" className="btn-secondary px-10 py-4 flex items-center justify-center text-sm font-bold uppercase tracking-widest border-2">
                About the book
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.03)_0%,transparent_70%)] pointer-events-none"></div>
      </section>

      {/* 2. The Problem Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
             <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-8 tracking-tighter uppercase border-l-4 border-brand-accent pl-6">
                  The Governance Gap
                </h2>
                <div className="space-y-8 text-brand-muted text-lg leading-relaxed">
                   <p>
                      Industry data remains stark: <span className="text-brand-dark font-bold">85-90% of enterprise AI initiatives fail</span> to reach meaningful production. The "pilot trap" isn't a technical failure; it's a failure of the operating model.
                   </p>
                   <p>
                      As we shift from simple outputs to <span className="text-brand-dark font-bold italic underline decoration-brand-accent/20">Agentic AI</span>, the stakes are increasing. EU AI Act, ISO 42001, and NIST requirements are no longer optional—they are Board-level liabilities.
                   </p>
                   <p>
                      Enterprises often accumulate "Governance Debt" long before model problems appear. Without rigorous constraints, your AI scale is limited by the very risk it creates.
                   </p>
                </div>
             </div>
             <div className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <div className="text-sm font-bold text-brand-dark uppercase tracking-widest mb-6 flex items-center">
                   <AlertTriangle className="mr-2 w-4 h-4 text-brand-accent" /> Board-Level Risks
                </div>
                <div className="space-y-6">
                   <div className="flex items-start space-x-4 border-b border-gray-50 pb-4">
                      <div className="text-2xl font-black text-brand-accent opacity-20">01</div>
                      <p className="text-sm text-brand-dark font-medium uppercase leading-tight italic">Ungoverned Agentic Actions leading to reputational damage.</p>
                   </div>
                   <div className="flex items-start space-x-4 border-b border-gray-50 pb-4">
                      <div className="text-2xl font-black text-brand-accent opacity-20">02</div>
                      <p className="text-sm text-brand-dark font-medium uppercase leading-tight italic">Regulatory non-compliance with global AI standards.</p>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="text-2xl font-black text-brand-accent opacity-20">03</div>
                      <p className="text-sm text-brand-dark font-medium uppercase leading-tight italic">Accumulated Governance Debt stalling value velocity.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. The AION Operating Model */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-brand-dark mb-4 tracking-tight uppercase underline decoration-brand-accent/30 decoration-offset-8">
               AION Operating Model
            </h2>
            <p className="text-brand-muted uppercase text-xs tracking-[0.3em] font-bold">Four pillars of governed scale</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             <Link href="/frameworks#loop" className="group border border-gray-100 p-8 rounded-2xl hover:border-brand-accent/50 hover:shadow-lg transition-all bg-white flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <Repeat className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-dark tracking-tight uppercase">Governed AI Loop</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8 flex-grow italic">
                  A 5-phase production cadence (Align to Evolve) ensuring continuous alignment.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent underline underline-offset-4 decoration-2">Learn More</div>
             </Link>
             
             <Link href="/frameworks#debt" className="group border border-gray-100 p-8 rounded-2xl hover:border-brand-accent/50 hover:shadow-lg transition-all bg-white flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <BarChart3 className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-dark tracking-tight uppercase">Debt Quadrant</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8 flex-grow italic text-balance">
                  Mapping Governance Discipline against Value Velocity to diagnose your current state.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent underline underline-offset-4 decoration-2">Learn More</div>
             </Link>

             <Link href="/frameworks#executive" className="group border border-gray-100 p-8 rounded-2xl hover:border-brand-accent/50 hover:shadow-lg transition-all bg-white flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <Target className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-dark tracking-tight uppercase">Action Framework</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8 flex-grow italic">
                  The proprietary 90-day sprint methodology for building a governed operating model.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent underline underline-offset-4 decoration-2">Learn More</div>
             </Link>

             <Link href="/frameworks#aios" className="group border border-gray-100 p-8 rounded-2xl hover:border-brand-accent/50 hover:shadow-lg transition-all bg-white flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded mb-6 group-hover:bg-brand-accent/10 transition-colors">
                  <Cpu className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-dark tracking-tight uppercase">AI Operating System</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8 flex-grow italic">
                  A unified, governed substrate through which all enterprise agents and data must flow.
                </p>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent underline underline-offset-4 decoration-2">Learn More</div>
             </Link>
          </div>
        </div>
      </section>

      {/* 4. Who We Serve */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-3xl font-bold tracking-tighter uppercase mb-4 italic">The Strategic Alignment</h2>
             <p className="text-gray-400 text-sm uppercase tracking-widest">Built for the corporate board and operational leadership</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
             {/* Technology & Data Leaders */}
             <div>
                <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-gray-800">Tech & Data Leaders</h4>
                <div className="space-y-6">
                   <p className="text-xs text-gray-400 font-medium uppercase tracking-tight italic">"We need to move beyond pilots and build a scalable infrastructure."</p>
                   <ul className="space-y-4">
                      <li className="flex items-start space-x-3 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                         <span>Eliminate architectural fragmentation through the unified AIOS substrate.</span>
                      </li>
                      <li className="flex items-start space-x-3 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                         <span>Automate governance workflows across the entire model lifecycle.</span>
                      </li>
                   </ul>
                </div>
             </div>

             {/* Risk & Legal */}
             <div>
                <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-gray-800">Risk & Legal</h4>
                <div className="space-y-6">
                   <p className="text-xs text-gray-400 font-medium uppercase tracking-tight italic">"Agentic AI is a liability we cannot yet quantify or constrain."</p>
                   <ul className="space-y-4">
                      <li className="flex items-start space-x-3 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                         <span>Implement deterministic constraints for non-deterministic AI agent actions.</span>
                      </li>
                      <li className="flex items-start space-x-3 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                         <span>Achieve transparent compliance with ISO 42001 and EU AI Act.</span>
                      </li>
                   </ul>
                </div>
             </div>

             {/* Business Owners */}
             <div>
                <h4 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-gray-800">Business Owners</h4>
                <div className="space-y-6">
                   <p className="text-xs text-gray-400 font-medium uppercase tracking-tight italic">"Governance is slowing down our time-to-market."</p>
                   <ul className="space-y-4">
                      <li className="flex items-start space-x-3 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                         <span>Transform governance into a high-octane growth engine instead of an obstacle.</span>
                      </li>
                      <li className="flex items-start space-x-3 text-sm text-gray-300">
                         <div className="w-1 h-1 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                         <span>Deliver governed value at a higher velocity than reckless competitors.</span>
                      </li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Proof & Next Steps */}
      <section className="py-24 bg-white">
        <div className="section-container">
           <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                 <h2 className="text-4xl font-extrabold text-brand-dark mb-6 tracking-tight uppercase leading-tight">
                    Proof through <br/>Methodology.
                 </h2>
                 <p className="text-brand-muted text-lg leading-relaxed mb-8">
                    Discover how to build a high-performance operating model for AI. 
                    Our forthcoming book, <span className="text-brand-dark font-bold italic underline border-brand-accent underline-offset-4 decoration-brand-accent/20">The Governed Operating Model</span>, details the exact implementation paths of our proprietary frameworks.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 border border-gray-100 rounded-xl">
                       <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                       <span className="text-xs font-bold uppercase text-brand-dark">C-Suite Audit Checklist</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 border border-gray-100 rounded-xl">
                       <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                       <span className="text-xs font-bold uppercase text-brand-dark">AI Governance Audit Workbook</span>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-5 bg-brand-light p-10 rounded-3xl border border-gray-100">
                 <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-tighter">Immediate Next Steps</h3>
                 <p className="text-sm text-brand-muted mb-10 leading-relaxed uppercase tracking-wide">
                    The path from technical debt to high performance begins with a single diagnostic sprint.
                 </p>
                 <div className="space-y-6">
                    <Link href="/assessment" className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-[0.2em] inline-flex justify-center flex">
                       Indicative Maturity Check
                    </Link>
                    <Link href="/contact" className="btn-secondary w-full py-4 text-xs font-bold uppercase tracking-[0.2em] inline-flex justify-center flex">
                       Request a 90-Day Sprint
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
