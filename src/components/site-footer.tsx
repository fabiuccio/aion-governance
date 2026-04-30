export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-ink/65 sm:px-8">
        <div className="max-w-sm space-y-3">
          <p className="font-serif text-xl text-ink">AION Governance</p>
          <p className="text-xs text-ink/45 italic">
            AION — AI-on. Governance switched on in architecture, not written in
            policy.
          </p>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-4 text-center text-xs uppercase tracking-[0.18em] text-ink/45 sm:px-8">
        © {year} AION Governance
      </div>
    </footer>
  );
}
