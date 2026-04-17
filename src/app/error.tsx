"use client";

export default function ErrorPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Error</p>
      <h1 className="mt-5 font-serif text-5xl text-ink">
        Something did not load cleanly.
      </h1>
      <p className="mt-6 text-lg leading-8 text-ink/72">
        The page can be refreshed safely. If the issue continues, it is likely a
        content or environment configuration problem rather than a broken route.
      </p>
    </div>
  );
}
