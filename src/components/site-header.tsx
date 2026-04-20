"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const TOOLS_MENU = [
  {
    group: "Self-assessment",
    items: [
      { href: "/assessment", label: "Maturity Assessment", description: "Score your AI governance across 5 dimensions" },
      { href: "/debt-quadrant", label: "Debt Quadrant", description: "Plot discipline vs. velocity for your AI estate" },
    ],
  },
  {
    group: "Reference",
    items: [
      { href: "/glossary", label: "Glossary", description: "40 terms defined precisely" },
      { href: "/resources", label: "Resources", description: "Regulatory, infrastructure, and academic reading" },
    ],
  },
];

const PRIMARY_NAV = [
  { href: "/essays", label: "Essays" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/book", label: "Book" },
  { href: "/about", label: "About" },
];

const TOOLS_PATHS = TOOLS_MENU.flatMap((g) => g.items.map((i) => i.href));

function ToolsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = TOOLS_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-sm transition-colors",
          isActive || open ? "text-ink" : "text-ink/60 hover:text-ink",
        )}
      >
        Tools
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={cn("transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full mt-3 w-[460px] -translate-x-1/2 rounded-[1.25rem] border border-border bg-paper shadow-lg shadow-ink/5">
          <div className="grid grid-cols-2 gap-px p-2">
            {TOOLS_MENU.map((group) => (
              <div key={group.group} className="rounded-[0.875rem] bg-shell p-3">
                <p className="px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/35">
                  {group.group}
                </p>
                <div className="mt-1 space-y-0.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 transition-colors hover:bg-paper",
                        pathname.startsWith(item.href) && "bg-paper",
                      )}
                    >
                      <p className="text-sm font-medium text-ink">{item.label}</p>
                      <p className="mt-0.5 text-xs leading-4 text-ink/50">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-sm uppercase tracking-[0.28em] text-ink/60">
            AION
          </span>
          <span className="font-serif text-lg text-ink">Fabio Aulico</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors",
                pathname.startsWith(item.href) ? "text-ink" : "text-ink/60 hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ToolsMenu />
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
