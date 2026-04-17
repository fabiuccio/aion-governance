import { subscribeAction } from "@/app/actions";

interface NewsletterSignupProps {
  title: string;
  description: string;
  compact?: boolean;
  source?: "site" | "book";
}

export function NewsletterSignup({
  title,
  description,
  compact = false,
  source = "site",
}: NewsletterSignupProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-shell px-6 py-8 sm:px-8">
      <div className={compact ? "max-w-xl" : "max-w-2xl"}>
        <p className="text-xs uppercase tracking-[0.24em] text-ink/50">
          Updates
        </p>
        <h2 className="mt-3 font-serif text-3xl text-ink">{title}</h2>
        <p className="mt-4 text-base leading-7 text-ink/70">{description}</p>
        <form action={subscribeAction} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input type="hidden" name="source" value={source} />
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            className="h-12 flex-1 rounded-full border border-border bg-paper px-5 text-sm text-ink outline-none ring-0 transition focus:border-accent"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm text-paper transition hover:bg-ink/90"
          >
            Stay in the loop
          </button>
        </form>
      </div>
    </div>
  );
}
