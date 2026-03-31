import { Metadata } from "next";
import { BookOpen, Check, Target, ShieldCheck, Cpu, Zap, ArrowRight, Layers, FileText, BarChart3, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Govern or Fail | The AION Governance Field Guide",
  description: "High-performance AI Governance strategy for the enterprise executive. Move from 95% PoC failure to governed scale.",
};

export default function BookPage() {
  const learningOutcomes = [
    "How to inventory and classify your entire enterprise AI estate.",
    "How to accurately place systems in the Debt Quadrant.",
    "How to execute the 90-day Executive Action Framework sprint.",
    "How to design the AIOS layer using your existing architecture.",
    "How to embed the Governed AI Loop across multi-disciplinary teams.",
    "How to transform governance into a high-octane growth engine."
  ];

  const personas = [
    {
      title: "CIO / CDO / CAIO",
      scenario: "You're being asked to 'scale AI' across the enterprise while your architecture and governance are still PoC-era."
    },
    {
      title: "CRO / General Counsel / CISO",
      scenario: "You're accountable for AI risk and EU AI Act exposure but keep getting slideware instead of operational evidence."
    },
    {
      title: "Head of Data & Analytics / AI",
      scenario: "You're building useful models, but they stall between pilot and production because ownership and integration aren't resolved."
    },
    {
      title: "Business Unit Leader (GM / COO)",
      scenario: "You sponsor AI use cases and feel the value, but you're uneasy about who owns failures when an agent makes a bad decision."
    }
  ];

  const toc = [
    {
      part: "Part One: Context of Chaos",
      chapters: [
        { title: "A Brief History of the Future", desc: "How every tech wave created the same governance gap, and why AI is the pattern compressed." },
        { title: "The 2026 Landscape", desc: "Why agentic AI and EU AI Act enforcement make ungoverned AI a board-level liability." },
        { title: "The Language Problem", desc: "Why misaligned vocabulary kills AI projects before the first line of code is written." }
      ]
    },
    {
      part: "Part Two: The Vibe Coding Trap",
      chapters: [
        { title: "Just Because You Can, Doesn't Mean You Should", desc: "Vibe coding as rational but dangerous behavior: rapid builds without architecture or ownership." },
        { title: "The Debt Quadrant", desc: "The 2x2 that shows you’re Reckless, Governed, Stagnant, or Bureaucratic—and why most enterprises misdiagnose." },
        { title: "From Creative Sprawl to Governed Flow", desc: "How the Governed AI Loop becomes the structural replacement for ad-hoc deployment." }
      ]
    },
    {
      part: "Part Three: Enterprise Reality",
      chapters: [
        { title: "Why 95% of PoCs Fail", desc: "The PoC trap: clean demos that die on integration, TCO shock, and retrofitted governance." },
        { title: "Determinism in an Agentic World", desc: "What 'predictable enough' means for agents, and why MCP/A2A are prerequisites for scale." },
        { title: "Technical Demystification: MCP, A2A, and AI Glue", desc: "The minimum technical understanding executives need to evaluate vendors and govern the fabric." }
      ]
    },
    {
      part: "Part Four: Architecture of Governance",
      chapters: [
        { title: "ISO/IEC 42001 and the Rise of AIOS", desc: "What ISO 42001 actually requires, and how AIOS turns a management system into runtime enforcement." },
        { title: "The AI Operating System", desc: "AIOS in full: routing, policy enforcement, and why owning this layer determines who really governs your AI." },
        { title: "The Governed AI Loop in Practice", desc: "Phase-by-phase rollout of Align, Constrain, Operate, Assure, Evolve as a repeatable rhythm." }
      ]
    },
    {
      part: "Part Five: The Future of Alignment",
      chapters: [
        { title: "Governed AI Leadership by 2030", desc: "What organizations that treat governance as an operating system look like in practice." },
        { title: "The Compounding Advantage", desc: "How governed AI estates accumulate structural advantage in speed, trust, and resilience." }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Section */}
      {/* TODO: Finalize book title: Governed or Fail vs The Governed AI Loop */}
      <section className="relative py-24 bg-brand-light overflow-hidden">
        <div className="section-container relative z-10 lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="max-w-xl">
             <div className="inline-flex px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Forthcoming Executive Guide</div>
             <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-dark mb-10 leading-[0.95] uppercase">
                Govern <br/>or <span className="text-brand-accent italic font-serif">Fail</span>.
             </h1>
             <p className="text-xl text-brand-muted mb-12 leading-relaxed max-w-lg border-l-4 border-brand-accent pl-6">
                85-95% of enterprise AI initiatives fail to reach production scale. The problem isn't technical capacity—it's a lack of a <span className="text-brand-dark font-bold italic underline decoration-brand-accent/20 underline-offset-4">Governed AI Operating Model.</span>
             </p>
             <p className="text-brand-muted mb-12 leading-relaxed max-w-lg uppercase text-xs font-bold tracking-widest">
                2026 is the inflection point. Agents, regulation, and technical debt make ungoverned AI a board-level liability. This is your field guide.
             </p>
             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="#signup" className="btn-primary py-4 px-10 text-xs font-bold uppercase tracking-widest flex items-center justify-center">
                   Get Early Chapters <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
             </div>
          </div>
          <div className="mt-16 lg:mt-0 aspect-[3/4] bg-brand-dark rounded-lg shadow-2xl relative overflow-hidden border-8 border-white/10 group overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.2)_0%,transparent_70%)] group-hover:scale-110 transition-transform duration-700"></div>
             <div className="absolute inset-x-0 top-1/3 text-center px-12">
                <h4 className="text-brand-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8">The Executive Guide</h4>
                <h3 className="text-white text-5xl font-black uppercase tracking-tighter leading-[0.9]">Govern <br/>or Fail</h3>
                <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-8"></div>
             </div>
             <div className="absolute bottom-12 inset-x-0 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">AION Governance</div>
          </div>
        </div>
      </section>

      {/* 2. Persona Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="section-container">
           <div className="text-center mb-20 max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-brand-dark mb-4 uppercase tracking-tighter">Who this book is for</h2>
              <p className="text-brand-muted uppercase text-[10px] tracking-widest font-bold">Specific scenarios for high-stakes leadership</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {personas.map((persona, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-3xl bg-brand-light flex flex-col hover:border-brand-accent transition-all group">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm"><Users className="w-5 h-5 text-brand-accent" /></div>
                   <h4 className="text-xs font-black uppercase text-brand-dark mb-4 tracking-widest pb-3 border-b border-brand-accent/20">{persona.title}</h4>
                   <p className="text-[11px] uppercase italic text-brand-muted leading-relaxed font-medium">"{persona.scenario}"</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Learning Outcomes Section */}
      <section className="py-24 bg-white border-b border-gray-50 overflow-hidden">
        <div className="section-container">
           <div className="grid lg:grid-cols-12 gap-20 items-start">
              <div className="lg:col-span-12">
                 <h2 className="text-3xl font-extrabold text-brand-dark mb-12 uppercase tracking-tighter underline underline-offset-8 decoration-brand-accent/20 decoration-4">What you'll learn</h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                    {learningOutcomes.map((outcome, i) => (
                      <div key={i} className="flex space-x-5 group">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center text-[10px] font-black text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                            0{i+1}
                         </div>
                         <p className="text-sm font-medium text-brand-dark leading-relaxed uppercase tracking-tight italic">{outcome}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Inside the book (TOC-lite) */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="section-container max-w-4xl">
           <div className="mb-20 text-center">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">Inside the Book</h2>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">Comprehensive Part Breakdown</p>
           </div>
           
           <div className="space-y-12">
              {toc.map((part, i) => (
                <div key={i} className="border-l border-brand-accent/30 pl-10 relative">
                   <div className="absolute -left-1.5 top-0 w-3 h-3 bg-brand-accent rounded-full mb-8"></div>
                   <h3 className="text-brand-accent text-xs font-black uppercase tracking-[0.2em] mb-10">{part.part}</h3>
                   <div className="space-y-8">
                      {part.chapters.map((chapter, j) => (
                        <div key={j} className="group">
                           <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight group-hover:text-brand-accent transition-colors italic">{chapter.title}</h4>
                           <p className="text-xs text-gray-400 leading-relaxed max-w-2xl font-medium tracking-wide uppercase">{chapter.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              ))}
              
              {/* Back Matter Section */}
              <div className="border-l border-brand-accent/30 pl-10 relative pt-12">
                 <div className="absolute -left-1.5 top-12 w-3 h-3 bg-brand-accent rounded-full"></div>
                 <h3 className="text-brand-accent text-xs font-black uppercase tracking-[0.2em] mb-10 italic underline underline-offset-4 decoration-2">Monday Morning Tools</h3>
                 <div className="grid sm:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                       <h5 className="text-[11px] font-bold text-white uppercase tracking-widest mb-2 font-serif">Executive Action Framework</h5>
                       <p className="text-[10px] text-gray-400 leading-relaxed uppercase">Full 90-day sprint architecture with templates and board rubrics.</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                       <h5 className="text-[11px] font-bold text-white uppercase tracking-widest mb-2 font-serif">Maturity Assessment</h5>
                       <p className="text-[10px] text-gray-400 leading-relaxed uppercase">The canonical 0-100 scoring model for internal audits.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Reader Bonuses Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <div className="section-container">
           <div className="bg-brand-light p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-lg">
                 <h2 className="text-3xl font-extrabold text-brand-dark mb-6 tracking-tight uppercase leading-tight">Reader Bonuses.</h2>
                 <p className="text-brand-muted text-sm leading-relaxed mb-6 italic uppercase tracking-tight">
                    Every copy of <span className="font-bold text-brand-dark">Govern or Fail</span> includes access to our exclusive C-Suite Audit Checklist and the digital version of the AION Governance Audit Workbook.
                 </p>
                 <Link href="/resources" className="text-xs font-bold uppercase tracking-widest text-brand-accent underline underline-offset-8 decoration-2">View Resources Hub</Link>
              </div>
              <div className="grid grid-cols-2 gap-4 flex-shrink-0">
                 <div className="w-32 h-40 bg-white border border-gray-100 rounded shadow-sm p-4 flex items-center justify-center text-[10px] font-bold text-brand-muted text-center uppercase tracking-widest">Audit <br/>Workbook</div>
                 <div className="w-32 h-40 bg-white border border-gray-100 rounded shadow-sm p-4 mt-8 flex items-center justify-center text-[10px] font-bold text-brand-muted text-center uppercase tracking-widest">C-Suite <br/>Evidence</div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Status / CTA Section */}
      <section id="signup" className="py-24 bg-brand-light">
          <div className="section-container text-center max-w-xl mx-auto">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <BookOpen className="text-brand-accent w-6 h-6" />
             </div>
             <h2 className="text-4xl font-extrabold mb-6 uppercase tracking-tight">Get Early Chapters</h2>
             <p className="text-brand-muted mb-12 italic text-sm leading-relaxed uppercase tracking-tighter">
               Join the waitlist for <span className="font-bold text-brand-dark">Govern or Fail</span> and receive Chapters 1 & 5 immediately, plus the 90-day Executive Action rollout plan.
             </p>
             <form className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-accent transition-all text-sm font-bold uppercase tracking-widest shadow-sm"
                />
                <button className="btn-primary py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-xl">
                   Notify Me & Get Early Chapters
                </button>
                <div className="flex justify-center space-x-6 pt-10 grayscale opacity-40">
                   <div className="text-[10px] font-bold uppercase tracking-widest border border-gray-300 px-4 py-2 opacity-50">Amazon</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest border border-gray-300 px-4 py-2 opacity-50 font-serif italic">Hardcover Edition</div>
                </div>
             </form>
          </div>
      </section>
    </div>
  );
}
