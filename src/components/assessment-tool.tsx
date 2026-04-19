"use client";

import { useState, useTransition } from "react";
import {
  SECTIONS,
  MATURITY_STAGES,
  getMaturityStage,
  getTotalScore,
  getSectionScore,
  type Section,
  type MaturityStage,
} from "@/lib/assessment-data";
import { saveAssessmentResultAction } from "@/app/actions";

type Step = "intro" | number | "results";

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full bg-[rgb(var(--shell))] rounded-full h-1.5 mb-8">
      <div
        className="bg-[rgb(var(--accent))] h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}

function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium tracking-widest uppercase text-[rgb(var(--accent))] mb-3">
          Free Assessment
        </p>
        <h1 className="text-3xl font-serif text-[rgb(var(--ink))] mb-4">
          AI Governance Maturity Assessment
        </h1>
        <p className="text-lg text-[rgb(var(--ink))] opacity-80 leading-relaxed">
          Answer 25 questions across five governance dimensions and receive your
          personalised maturity score — from{" "}
          <span className="italic">Invisible</span> to{" "}
          <span className="italic">Strategic</span>.
        </p>
      </div>

      <div className="grid gap-3">
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-[rgb(var(--shell))]"
          >
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[rgb(var(--accent))] text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {section.id}
            </span>
            <div>
              <p className="font-medium text-[rgb(var(--ink))] text-sm">
                {section.title}
              </p>
              <p className="text-xs text-[rgb(var(--ink))] opacity-60">
                {section.phase} phase · 5 questions
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-[rgb(var(--ink))] opacity-60">
        <span>≈ 8 minutes</span>
        <span>·</span>
        <span>25 questions</span>
        <span>·</span>
        <span>Instant results</span>
      </div>

      <button
        onClick={onStart}
        className="w-full py-3 px-6 bg-[rgb(var(--ink))] text-[rgb(var(--paper))] font-medium rounded-lg hover:opacity-90 transition-opacity"
      >
        Start assessment
      </button>
    </div>
  );
}

function SectionStep({
  section,
  answers,
  onAnswer,
  onNext,
  onBack,
  isFirst,
}: {
  section: Section;
  answers: Record<number, number>;
  onAnswer: (questionId: number, value: number) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
}) {
  const allAnswered = section.questions.every((q) => answers[q.id] !== undefined);
  const sectionScore = getSectionScore(section.id, answers);
  const maxSectionScore = section.questions.length * 4;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-[rgb(var(--accent))] mb-1">
          Section {section.id} of {SECTIONS.length} · {section.phase} phase
        </p>
        <h2 className="text-2xl font-serif text-[rgb(var(--ink))] mb-2">
          {section.title}
        </h2>
        <p className="text-sm text-[rgb(var(--ink))] opacity-70 leading-relaxed">
          {section.description}
        </p>
      </div>

      <div className="space-y-6">
        {section.questions.map((question, qIndex) => (
          <div key={question.id} className="space-y-3">
            <p className="text-sm font-medium text-[rgb(var(--ink))]">
              <span className="text-[rgb(var(--accent))] mr-2">
                Q{question.id}.
              </span>
              {question.text}
            </p>
            <div className="space-y-2">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => onAnswer(question.id, option.value)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${
                      selected
                        ? "border-[rgb(var(--accent))] bg-[rgba(var(--accent),0.08)] text-[rgb(var(--ink))] font-medium"
                        : "border-[rgb(var(--border))] text-[rgb(var(--ink))] opacity-80 hover:border-[rgb(var(--accent))] hover:opacity-100"
                    }`}
                  >
                    <span className="text-[rgb(var(--accent))] font-semibold mr-2 text-xs">
                      {option.value}
                    </span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {allAnswered && (
        <div className="p-4 rounded-lg bg-[rgb(var(--shell))] text-center">
          <p className="text-xs text-[rgb(var(--ink))] opacity-60 mb-1">
            Section score
          </p>
          <p className="text-2xl font-serif text-[rgb(var(--ink))]">
            {sectionScore}{" "}
            <span className="text-base opacity-50">/ {maxSectionScore}</span>
          </p>
        </div>
      )}

      <div className="flex gap-3">
        {!isFirst && (
          <button
            onClick={onBack}
            className="flex-1 py-3 px-6 border border-[rgb(var(--border))] text-[rgb(var(--ink))] font-medium rounded-lg hover:border-[rgb(var(--accent))] transition-colors"
          >
            Back
          </button>
        )}
        <button
          onClick={onNext}
          disabled={!allAnswered}
          className="flex-1 py-3 px-6 bg-[rgb(var(--ink))] text-[rgb(var(--paper))] font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {section.id === SECTIONS.length ? "See results" : "Next section"}
        </button>
      </div>
    </div>
  );
}

function StageBar({ activeStage }: { activeStage: number }) {
  return (
    <div className="flex gap-1">
      {MATURITY_STAGES.map((s: MaturityStage) => (
        <div
          key={s.stage}
          className={`flex-1 h-2 rounded-full transition-all ${
            s.stage <= activeStage
              ? "bg-[rgb(var(--accent))]"
              : "bg-[rgb(var(--shell))]"
          }`}
          title={s.name}
        />
      ))}
    </div>
  );
}

function ResultsStep({
  answers,
  onReset,
}: {
  answers: Record<number, number>;
  onReset: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const totalScore = getTotalScore(answers);
  const stage = getMaturityStage(totalScore);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setError(null);

    const formData = new FormData();
    formData.set("email", email);
    formData.set("name", name);
    formData.set("score", String(totalScore));
    formData.set("stageName", stage.name);
    formData.set("answers", JSON.stringify(answers));

    startTransition(async () => {
      try {
        await saveAssessmentResultAction(formData);
        setSubmitted(true);
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-[rgb(var(--accent))] mb-1">
          Your result
        </p>
        <h2 className="text-2xl font-serif text-[rgb(var(--ink))] mb-2">
          Stage {stage.stage}: {stage.name}
        </h2>
        <p className="text-4xl font-serif text-[rgb(var(--ink))] mb-4">
          {totalScore}
          <span className="text-xl opacity-40"> / 100</span>
        </p>
        <StageBar activeStage={stage.stage} />
      </div>

      <div className="p-5 rounded-lg bg-[rgb(var(--shell))] space-y-3">
        <p className="text-sm text-[rgb(var(--ink))] leading-relaxed">
          {stage.description}
        </p>
        <div className="border-t border-[rgb(var(--border))] pt-3">
          <p className="text-xs font-medium text-[rgb(var(--accent))] uppercase tracking-wider mb-1">
            Recommended next step
          </p>
          <p className="text-sm text-[rgb(var(--ink))] opacity-80 leading-relaxed">
            {stage.recommendation}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-[rgb(var(--ink))]">
          Section breakdown
        </h3>
        {SECTIONS.map((section) => {
          const sScore = getSectionScore(section.id, answers);
          const max = section.questions.length * 4;
          const pct = Math.round((sScore / max) * 100);
          return (
            <div key={section.id} className="space-y-1">
              <div className="flex justify-between text-xs text-[rgb(var(--ink))]">
                <span className="opacity-80">{section.title}</span>
                <span className="font-medium">
                  {sScore}/{max}
                </span>
              </div>
              <div className="w-full bg-[rgb(var(--shell))] rounded-full h-1.5">
                <div
                  className="bg-[rgb(var(--accent))] h-1.5 rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="text-sm font-medium text-[rgb(var(--ink))] mb-1">
              Get a detailed report by email
            </p>
            <p className="text-xs text-[rgb(var(--ink))] opacity-60 mb-3">
              We&apos;ll send your full results and personalised recommendations.
              No spam — ever.
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[rgb(var(--border))] bg-transparent text-sm text-[rgb(var(--ink))] placeholder:opacity-40 focus:outline-none focus:border-[rgb(var(--accent))]"
              />
              <input
                type="email"
                placeholder="Work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-[rgb(var(--border))] bg-transparent text-sm text-[rgb(var(--ink))] placeholder:opacity-40 focus:outline-none focus:border-[rgb(var(--accent))]"
              />
            </div>
          </div>
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          <button
            type="submit"
            disabled={isPending || !email}
            className="w-full py-3 px-6 bg-[rgb(var(--ink))] text-[rgb(var(--paper))] font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {isPending ? "Sending…" : "Send my report"}
          </button>
        </form>
      ) : (
        <div className="p-5 rounded-lg bg-[rgb(var(--shell))] text-center">
          <p className="text-sm font-medium text-[rgb(var(--ink))]">
            Report on its way
          </p>
          <p className="text-xs text-[rgb(var(--ink))] opacity-60 mt-1">
            Check your inbox — including spam, just in case.
          </p>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full py-2 text-sm text-[rgb(var(--ink))] opacity-50 hover:opacity-80 transition-opacity"
      >
        Retake assessment
      </button>
    </div>
  );
}

export function AssessmentTool() {
  const [step, setStep] = useState<Step>("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const currentSectionIndex =
    typeof step === "number" ? SECTIONS.findIndex((s) => s.id === step) : -1;

  const totalQuestions = SECTIONS.reduce(
    (sum, s) => sum + s.questions.length,
    0
  );
  const answeredCount = Object.keys(answers).length;

  function handleAnswer(questionId: number, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (step === "intro") {
      setStep(SECTIONS[0].id);
    } else if (typeof step === "number") {
      const idx = SECTIONS.findIndex((s) => s.id === step);
      if (idx < SECTIONS.length - 1) {
        setStep(SECTIONS[idx + 1].id);
      } else {
        setStep("results");
        try {
          localStorage.setItem("aion_assessment_answers", JSON.stringify(answers));
        } catch {
          // ignore — localStorage may be unavailable
        }
      }
    }
  }

  function handleBack() {
    if (typeof step === "number") {
      const idx = SECTIONS.findIndex((s) => s.id === step);
      if (idx === 0) {
        setStep("intro");
      } else {
        setStep(SECTIONS[idx - 1].id);
      }
    }
  }

  function handleReset() {
    setStep("intro");
    setAnswers({});
  }

  const showProgress = step !== "intro" && step !== "results";

  return (
    <div>
      {showProgress && (
        <ProgressBar current={answeredCount} total={totalQuestions} />
      )}

      {step === "intro" && <IntroStep onStart={handleNext} />}

      {typeof step === "number" &&
        (() => {
          const section = SECTIONS.find((s) => s.id === step)!;
          return (
            <SectionStep
              key={section.id}
              section={section}
              answers={answers}
              onAnswer={handleAnswer}
              onNext={handleNext}
              onBack={handleBack}
              isFirst={currentSectionIndex === 0}
            />
          );
        })()}

      {step === "results" && (
        <ResultsStep answers={answers} onReset={handleReset} />
      )}
    </div>
  );
}
