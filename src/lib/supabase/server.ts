import "server-only";

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

import { hasSupabaseEnv } from "@/lib/supabase/env";

export function createSupabaseServerClient() {
  if (!hasSupabaseEnv()) {
    return null;
  }

  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: Record<string, unknown>) {
          try {
            cookieStore.set({ name, value, ...(options as object) });
          } catch {}
        },
        remove(name: string, options: Record<string, unknown>) {
          try {
            cookieStore.set({ name, value: "", ...(options as object) });
          } catch {}
        },
      },
    },
  );
}

export async function getSupabaseUser() {
  const client = createSupabaseServerClient();
  if (!client) return null;

  const {
    data: { user },
  } = await client.auth.getUser();

  return user;
}
