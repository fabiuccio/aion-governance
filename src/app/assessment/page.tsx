"use client";

import { useState } from "react";
import { ClipboardList, AlertCircle, ArrowRight, CheckCircle2, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// 1. Maturity Model Data
const maturityStages = [
  {
    range: [0, 20],
    level: 1,
    name: "Invisible",
    description: "AI adoption is happening ad-hoc with zero central oversight. Governance debt is accumulating rapidly, and risk is unquantified.",
    nextSteps: ["Start an AI estate inventory", "Identify a formal governance owner", "Draft an initial AI acceptable use policy"]
  },
  {
    range: [21, 40],
    level: 2,
    name: "Aware",
    description: "The organization recognizes AI risk but lacks enforceable controls. Shadow AI is prevalent, and governance is reactive.",
    nextSteps: ["Formalize the AI Governance Committee", "Audit current shadow AI usage", "Establish minimum security standards"]
  },
  {
    range: [41, 60],
    level: 3,
    name: "Controlled",
    description: "Initial policies and controls are in place. Basic monitoring exists, but governance is often seen as a project-level hurdle.",
    nextSteps: ["Implement a centralized AI model registry", "Define incident response protocols", "Standardize the Governed AI Loop"]
  },
  {
    range: [61, 80],
    level: 4,
    name: "Optimized",
    description: "Governance is integrated into the production lifecycle. Automated controls exist, and risk is managed proactively.",
    nextSteps: ["Consolidate onto a unified AIOS layer", "Automate compliance reporting", "Scale the Governed AI Loop across all BU's"]
  },
  {
    range: [81, 100],
    level: 5,
    name: "Strategic",
    description: "Governance is a strategic differentiator. AI operations are fully transparent, audited, and optimized for high-velocity value.",
    nextSteps: ["No next moves for now"]
  }
];

// 2. Assessment Questions
const questions = [
  {
    id: 1,
    dimension: "Inventory & Ownership",
    text: "Do you have a centralized, up-to-date inventory of all AI systems and their respective business owners?",
    options: [
      { text: "No inventory or clear ownership.", score: 0 },
      { text: "Partial/informal list with some owners.", score: 1 },
      { text: "Centralized list, but inconsistent updates.", score: 2 },
      { text: "Formal registry with designated owners.", score: 3 },
      { text: "Automated model registry with real-time tracking.", score: 4 }
    ]
  },
  {
    id: 2,
    dimension: "Shadow AI",
    text: "How prevalent is 'Shadow AI' (unauthorized or unvetted AI tools) within your enterprise?",
    options: [
      { text: "Widespread and unmanaged.", score: 0 },
      { text: "Suspected, but no detection mechanism.", score: 1 },
      { text: "Detected intermittently; no clear policy.", score: 2 },
      { text: "Policy-governed; most tools are vetted.", score: 3 },
      { text: "Full visibility and technical enforcement.", score: 4 }
    ]
  },
  {
    id: 3,
    dimension: "Policies & Controls",
    text: "To what extent are AI-specific policies (e.g., usage standards, risk thresholds) enforced during production?",
    options: [
      { text: "No AI-specific policies exist.", score: 0 },
      { text: "Policies exist but are rarely enforced.", score: 1 },
      { text: "Manual review/enforcement on key projects.", score: 2 },
      { text: "Consistently enforced through reviews.", score: 3 },
      { text: "Technically enforced via automated kernels.", score: 4 }
    ]
  },
  {
    id: 4,
    dimension: "Monitoring & Response",
    text: "Do you have established protocols for monitoring AI performance and responding to incidents (e.g., hallucinations or bias)?",
    options: [
      { text: "No monitoring or response protocols.", score: 0 },
      { text: "Monitoring is ad-hoc by technical teams.", score: 1 },
      { text: "Incident response plan exists but is untested.", score: 2 },
      { text: "Consistent monitoring and response drills.", score: 3 },
      { text: "Real-time automated alerting and circuit-breakers.", score: 4 }
    ]
  },
  {
    id: 5,
    dimension: "AI Operating System",
    text: "How much of your AI estate operates through a unified substrate for people, process, and controls?",
    options: [
      { text: "Siloed and fragmented integrations.", score: 0 },
      { text: "Initial attempts at common tooling.", score: 1 },
      { text: "Shared dev layers with ad-hoc governance.", score: 2 },
      { text: "Mature governance layer; most systems integrated.", score: 3 },
      { text: "Unified AIOS layer for all enterprise agents.", score: 4 }
    ]
  },
  {
    id: 6,
    dimension: "Board-Level Reporting",
    text: "Does the Board or executive leadership receive regular reports on AI risk management and ROI velocity?",
    options: [
      { text: "No AI-specific board reporting.", score: 0 },
      { text: "Reporting is project-centric and infrequent.", score: 1 },
      { text: "Yearly risk/value summary reports.", score: 2 },
      { text: "Quarterly reviews of the AI estate.", score: 3 },
      { text: "Real-time dashboards on governed scale.", score: 4 }
    ]
  },
  {
    id: 7,
    dimension: "Governed Loop Alignment",
    text: "Are your AI production cadences aligned to a consistent, repeatableGoverned AI rhythm (Align to Evolve)?",
    options: [
      { text: "AI is delivered as one-off projects.", score: 0 },
      { text: "Loose attempts at repeatable stages.", score: 1 },
      { text: "Repeated stages for high-priority systems.", score: 2 },
      { text: "Formal adoption of the Governed AI Loop.", score: 3 },
      { text: "The Loop is the foundational operating model.", score: 4 }
    ]
  }
];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = Intro, 0+ = Questions, 100 = Results
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<any>(null);

  const startAssessment = () => {
    setAnswers([]);
    setCurrentStep(0);
  };

  const handleAnswer = (score: number) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    const stage = maturityStages.find(s => percentage >= s.range[0] && percentage <= s.range[1]);
    
    setResult({ score: percentage, stage });
    setCurrentStep(100); // 100 as the Results stage
  };

  const reset = () => {
    setCurrentStep(-1);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-[70vh] bg-brand-light py-16">
      <div className="section-container max-w-2xl px-6">
        
        {/* Intro Step */}
        {currentStep === -1 && (
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
               <ClipboardList className="text-brand-accent w-8 h-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-brand-dark mb-4 tracking-tight uppercase leading-tight">AI Governance <br/>Maturity Assessment</h1>
            <p className="text-brand-muted mb-10 leading-relaxed max-w-lg mx-auto">
              This indicative assessment uses a simplified version of the <span className="font-bold underline decoration-brand-accent/20">AION Executive Action Framework</span> maturity model. 
              It will identify which stage you likely sit in and provide immediate next moves.
            </p>
            <button onClick={startAssessment} className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center">
              Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}

        {/* Stepper Questions */}
        {currentStep >= 0 && currentStep < 100 && (
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div className="mb-8 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-brand-muted">
               <span className="text-brand-accent">Dimension: {questions[currentStep].dimension}</span>
               <span>{currentStep + 1} / {questions.length}</span>
            </div>
            
            <div className="mb-10 min-h-[60px]">
               <h2 className="text-xl font-bold text-brand-dark leading-tight">{questions[currentStep].text}</h2>
            </div>
            
            <div className="space-y-3">
               {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-5 border border-gray-100 rounded-xl hover:border-brand-accent group transition-all bg-brand-light/20 hover:bg-white"
                  >
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-brand-muted group-hover:text-brand-dark transition-colors">{option.text}</span>
                        <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-brand-accent" />
                     </div>
                  </button>
               ))}
            </div>

            <div className="mt-12 flex justify-between items-center">
               <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-accent h-full transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
               </div>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {currentStep === 100 && result && (
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom duration-500">
             <div className="text-center mb-12">
               <div className="inline-block p-6 rounded-full bg-brand-dark text-white text-5xl font-black mb-6 border-8 border-brand-accent/10">
                  {result.score}
               </div>
               <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-muted mb-2">Indicative Maturity Score</h2>
               <h3 className="text-4xl font-extrabold text-brand-dark tracking-tight uppercase flex items-center justify-center">
                  Stage {result.stage.level}: {result.stage.name}
               </h3>
             </div>

             <div className="space-y-8 mb-12">
                <div className="p-6 bg-brand-light border border-gray-100 rounded-xl italic text-brand-muted leading-relaxed">
                   "{result.stage.description}"
                </div>
                
                <div className="space-y-4">
                   <h4 className="font-bold text-xs uppercase tracking-widest text-brand-dark flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-brand-accent" /> Recommended Next Moves
                   </h4>
                   <ul className="space-y-3">
                      {result.stage.nextSteps.map((step: string, idx: number) => (
                        <li key={idx} className="flex space-x-3 text-sm text-brand-muted font-medium bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                           <span className="text-brand-accent font-bold">0{idx+1}</span>
                           <span>{step}</span>
                        </li>
                      ))}
                   </ul>
                </div>
             </div>

             <div className="space-y-4 pt-8 border-t border-gray-50">
                <button className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest opacity-60 cursor-not-allowed">
                   Download Maturity Audit Workbook
                </button>
                <Link href="/contact" className="btn-secondary w-full py-4 text-xs font-bold uppercase tracking-widest border-2 inline-flex justify-center flex">
                   Request 90-Day Sprint Implementation
                </Link>
                <button onClick={reset} className="w-full text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-dark flex items-center justify-center p-4 transition-colors">
                   <RotateCcw className="w-3 h-3 mr-2" /> Retake Assessment
                </button>
             </div>
             
             {/* TODO: Implement email capture / backend sync here */}
             <p className="mt-8 text-[9px] text-gray-400 text-center uppercase tracking-widest leading-relaxed">
               This tool does not store sensitive data. Scores are calculated client-side ensuring executive privacy.
             </p>
          </div>
        )}

      </div>
    </div>
  );
}
