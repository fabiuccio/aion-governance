import Link from "next/link";

export default function AdminIndexPage() {
  return (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Admin</p>
      <h1 className="font-serif text-5xl text-ink">Editorial workspace</h1>
      <p className="max-w-2xl text-lg leading-8 text-ink/72">
        This is the entry point for the lightweight editor. Use the article list
        if you are already signed in, or the login page if you are not.
      </p>
      <div className="flex gap-4">
        <Link
          href="/admin/articles"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper"
        >
          Open articles
        </Link>
        <Link
          href="/admin/login"
          className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm text-ink"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
