import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Fabio Aulico and the purpose of this publishing platform on AI governance and enterprise architecture.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
          About
        </p>
        <h1 className="mt-5 font-serif text-5xl text-ink">Fabio Aulico</h1>
        <p className="mt-6 text-xl leading-9 text-ink/72">
          I work at the intersection of enterprise technology, integration,
          architecture, and AI governance. This site exists as a place to write
          more carefully about those themes than most company pages allow.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-border bg-paper p-8">
          <div className="space-y-5 text-lg leading-8 text-ink/72">
            <p>
              Much of the current AI conversation is either highly technical or
              highly promotional. I am more interested in the operating layer in
              between: the place where architecture, governance, ownership, and
              organizational reality meet.
            </p>
            <p>
              The writing here is shaped by that perspective. Some pieces are
              essayistic. Some are closer to framework notes. Some are builder
              logs. All of them are trying to be useful to serious readers.
            </p>
            <p>
              The audience I have in mind includes enterprise architects,
              technology leaders, governance teams, and operators who need AI to
              be manageable in practice, not just impressive in principle.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-shell p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-ink/45">
            Topics you will find here
          </p>
          <ul className="mt-6 space-y-4 text-base leading-7 text-ink/72">
            <li>AI governance as an operating model</li>
            <li>Enterprise architecture under AI pressure</li>
            <li>Integration, control surfaces, and platform design</li>
            <li>Frameworks from the book, explained in working terms</li>
            <li>Notes on publishing, tooling, and AI-assisted development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
