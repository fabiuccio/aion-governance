import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 text-sm text-ink/65 sm:px-8 md:flex-row md:justify-between md:gap-8">
        <div className="max-w-sm space-y-3">
          <p className="font-serif text-xl text-ink">
            Fabio Aulico · AION Governance
          </p>
          <p>
            Essays, notes, and frameworks on AI governance, enterprise
            architecture, and the operating realities behind durable AI work.
          </p>
          <p className="text-xs text-ink/45 italic">
            AION — AI-on. Governance switched on in architecture, not written in
            policy.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/35">
              Tools
            </p>
            <nav className="flex flex-col gap-2">
              <Link href="/assessment" className="hover:text-ink transition-colors">Assessment</Link>
              <Link href="/debt-quadrant" className="hover:text-ink transition-colors">Debt Quadrant</Link>
            </nav>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/35">
              Reference
            </p>
            <nav className="flex flex-col gap-2">
              <Link href="/glossary" className="hover:text-ink transition-colors">Glossary</Link>
              <Link href="/resources" className="hover:text-ink transition-colors">Resources</Link>
              <Link href="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
              <Link href="/imprint" className="hover:text-ink transition-colors">Imprint</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-4 text-center text-xs uppercase tracking-[0.18em] text-ink/45 sm:px-8">
        © {year} Fabio Aulico
      </div>
    </footer>
  );
}
