import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-sm uppercase tracking-[0.28em] text-ink/60">
            AION
          </span>
          <span className="font-serif text-lg text-ink">Governance</span>
        </Link>
      </div>
    </header>
  );
}
