"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import {
  sendAssessmentReport,
  sendNewsletterConfirmation,
  sendBookUpdatesConfirmation,
} from "@/lib/email";

export async function subscribeAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const source = String(formData.get("source") ?? "site");
  const client = createSupabaseServerClient();

  if (!email || !client || !hasSupabaseEnv()) {
    return;
  }

  if (source === "book") {
    await client.from("book_updates_signups").upsert({ email, source });
    await sendBookUpdatesConfirmation(email);
    return;
  }

  await client.from("newsletter_signups").upsert({ email, source });
  await sendNewsletterConfirmation(email);
}

export async function saveAssessmentResultAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim() || null;
  const score = Number(formData.get("score") ?? 0);
  const stageName = String(formData.get("stageName") ?? "").trim();
  const answersRaw = String(formData.get("answers") ?? "{}");

  if (!email) return;

  let answers: Record<string, number> = {};
  try {
    answers = JSON.parse(answersRaw);
  } catch {
    // ignore parse errors
  }

  const client = createSupabaseServerClient();
  if (!client || !hasSupabaseEnv()) return;

  await client.from("assessment_results").insert({
    email,
    name,
    score,
    stage_name: stageName,
    answers,
  });

  await sendAssessmentReport({ email, name, score, answers: answers as Record<number, number> });
}

export async function submitCommentAction(formData: FormData) {
  const articleId = String(formData.get("articleId") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const authorName = String(formData.get("authorName") ?? "").trim() || null;
  const authorEmail = String(formData.get("authorEmail") ?? "").trim() || null;

  if (!body || !articleId) return;

  const client = createSupabaseServerClient();
  if (!client || !hasSupabaseEnv()) return;

  await client.from("comments").insert({
    article_id: articleId,
    author_name: authorName,
    author_email: authorEmail,
    body,
  });
}
