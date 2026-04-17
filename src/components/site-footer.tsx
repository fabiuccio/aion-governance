import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 text-sm text-ink/65 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-md space-y-3">
          <p className="font-serif text-xl text-ink">Fabio Aulico</p>
          <p>
            Essays, notes, and frameworks on AI governance, enterprise
            architecture, and the operating realities behind durable AI work.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/essays" className="hover:text-ink">
            Essays
          </Link>
          <Link href="/frameworks" className="hover:text-ink">
            Frameworks
          </Link>
          <Link href="/book" className="hover:text-ink">
            Book
          </Link>
          <Link href="/about" className="hover:text-ink">
            About
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <Link href="/imprint" className="hover:text-ink">
            Imprint
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-4 text-center text-xs uppercase tracking-[0.18em] text-ink/45 sm:px-8">
        © {year} Fabio Aulico
      </div>
    </footer>
  );
}
