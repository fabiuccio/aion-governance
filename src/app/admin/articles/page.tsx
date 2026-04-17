import Link from "next/link";
import { redirect } from "next/navigation";

import { signOutAction } from "@/app/admin/actions";
import { getAllArticles } from "@/lib/content/repository";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { getSupabaseUser } from "@/lib/supabase/server";
import { formatLongDate } from "@/lib/utils";

export default async function AdminArticlesPage() {
  const [user, articles] = await Promise.all([
    getSupabaseUser(),
    getAllArticles(),
  ]);

  if (hasSupabaseEnv() && !user) {
    redirect("/admin/login");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink/45">
            Admin
          </p>
          <h1 className="mt-4 font-serif text-5xl text-ink">Articles</h1>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/articles/new"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper"
          >
            New article
          </Link>
          {user ? (
            <form action={signOutAction}>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm text-ink"
              >
                Sign out
              </button>
            </form>
          ) : null}
        </div>
      </div>

      <div className="rounded-[2rem] border border-border bg-paper p-6">
        {!hasSupabaseEnv() ? (
          <p className="mb-6 rounded-2xl border border-dashed border-border bg-shell p-4 text-sm text-ink/68">
            Supabase is not configured yet, so this screen is showing the seeded
            publishing inventory as a preview of the editor experience.
          </p>
        ) : null}
        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/admin/articles/${article.id}`}
              className="flex flex-col gap-2 rounded-[1.5rem] border border-border px-5 py-4 transition hover:border-accent/35"
            >
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-ink/45">
                <span>{article.status}</span>
                <span>{formatLongDate(article.publishedAt)}</span>
              </div>
              <h2 className="font-serif text-2xl text-ink">{article.title}</h2>
              <p className="text-sm text-ink/62">{article.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
