import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
        Not found
      </p>
      <h1 className="mt-5 font-serif text-5xl text-ink">
        That page does not exist.
      </h1>
      <p className="mt-6 text-lg leading-8 text-ink/72">
        The publishing structure has been simplified, so some older brochure
        routes may no longer be available.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper"
      >
        Return home
      </Link>
    </div>
  );
}
