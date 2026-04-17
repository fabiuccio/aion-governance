"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/essays", label: "Essays" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/book", label: "Book" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-sm uppercase tracking-[0.28em] text-ink/60">
            AION
          </span>
          <span className="font-serif text-lg text-ink">Fabio Aulico</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-ink" : "text-ink/60 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/admin"
          className="hidden text-sm text-ink/50 transition-colors hover:text-ink md:block"
        >
          Admin
        </Link>
      </div>
    </header>
  );
}
