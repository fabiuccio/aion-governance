import type { Metadata } from "next";
import { GlossaryBrowser } from "@/components/glossary-browser";
import { GLOSSARY } from "@/lib/glossary-data";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Forty terms from Govern or Fail — AI governance vocabulary defined precisely and linked to the frameworks that use them.",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          Reference
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Glossary</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          {GLOSSARY.length} terms from <em>Govern or Fail</em> — defined
          precisely, linked to the frameworks that use them. The full glossary
          with extended commentary appears in the book.
        </p>
      </div>
      <div className="mt-14">
        <GlossaryBrowser />
      </div>
    </div>
  );
}
