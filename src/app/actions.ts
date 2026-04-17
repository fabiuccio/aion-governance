"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export async function subscribeAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const source = String(formData.get("source") ?? "site");
  const client = createSupabaseServerClient();

  if (!email || !client || !hasSupabaseEnv()) {
    return;
  }

  if (source === "book") {
    await client.from("book_updates_signups").upsert({ email, source });
    return;
  }

  await client.from("newsletter_signups").upsert({ email, source });
}
