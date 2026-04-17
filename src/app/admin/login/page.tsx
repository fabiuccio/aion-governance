import { signInAction } from "@/app/admin/actions";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-xl">
      <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Admin</p>
      <h1 className="mt-5 font-serif text-5xl text-ink">Editor login</h1>
      <p className="mt-6 text-lg leading-8 text-ink/72">
        Minimal Supabase Auth entry point for article management.
      </p>
      <div className="mt-10 rounded-[2rem] border border-border bg-paper p-8">
        {hasSupabaseEnv() ? (
          <form action={signInAction} className="space-y-5">
            <label className="block space-y-2 text-sm text-ink/75">
              <span>Email</span>
              <input
                name="email"
                type="email"
                className="h-12 w-full rounded-2xl border border-border bg-shell px-4 outline-none focus:border-accent"
              />
            </label>
            <label className="block space-y-2 text-sm text-ink/75">
              <span>Password</span>
              <input
                name="password"
                type="password"
                className="h-12 w-full rounded-2xl border border-border bg-shell px-4 outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper"
            >
              Sign in
            </button>
          </form>
        ) : (
          <p className="text-base leading-7 text-ink/72">
            Add `NEXT_PUBLIC_SUPABASE_URL` and
            `NEXT_PUBLIC_SUPABASE_ANON_KEY` to enable the protected editor flow.
            Until then, the public site works with seeded content.
          </p>
        )}
      </div>
    </div>
  );
}
