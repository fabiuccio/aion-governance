"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { hasSupabaseEnv } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils";

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const client = createSupabaseServerClient();

  if (!client || !hasSupabaseEnv()) {
    return;
  }

  const { error } = await client.auth.signInWithPassword({ email, password });

  if (error) {
    return;
  }

  redirect("/admin/articles");
}

export async function signOutAction() {
  const client = createSupabaseServerClient();

  if (client) {
    await client.auth.signOut();
  }

  redirect("/admin/login");
}

export async function saveArticleAction(formData: FormData) {
  const client = createSupabaseServerClient();

  if (!client || !hasSupabaseEnv()) {
    return;
  }

  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "");
  const slug = slugify(String(formData.get("slug") ?? title));
  const subtitle = String(formData.get("subtitle") ?? "");
  const excerpt = String(formData.get("excerpt") ?? "");
  const featuredImage = String(formData.get("featuredImage") ?? "").trim();
  const contentMarkdown = String(formData.get("contentMarkdown") ?? "");
  const status = String(formData.get("status") ?? "draft");
  const tagIds = formData.getAll("tagIds").map(String);
  const seoTitle = String(formData.get("seoTitle") ?? "").trim() || title;
  const seoDescription = String(formData.get("seoDescription") ?? "").trim() || excerpt;
  const publishedAtRaw = String(formData.get("publishedAt") ?? "").trim();
  const now = new Date().toISOString();
  const publishedAt = status === "published"
    ? publishedAtRaw ? new Date(publishedAtRaw).toISOString() : now
    : null;

  const payload = {
    slug,
    title,
    subtitle,
    excerpt,
    featured_image: featuredImage || null,
    content_markdown: contentMarkdown,
    status,
    updated_at: now,
    seo_title: seoTitle,
    seo_description: seoDescription,
    author_id: "fabio-aulico",
    published_at: publishedAt,
  };

  if (id) {
    const { error } = await client.from("articles").update(payload).eq("id", id);
    if (error) {
      return;
    }

    await client.from("article_tags").delete().eq("article_id", id);
    if (tagIds.length > 0) {
      await client
        .from("article_tags")
        .insert(tagIds.map((tagId) => ({ article_id: id, tag_id: tagId })));
    }

    revalidatePath("/admin/articles");
    revalidatePath("/essays");
    redirect(`/admin/articles/${id}?saved=1`);
  }

  const { data, error } = await client
    .from("articles")
    .insert({ ...payload, created_at: now })
    .select("id")
    .single();

  if (error || !data) {
    return;
  }

  if (tagIds.length > 0) {
    await client
      .from("article_tags")
      .insert(tagIds.map((tagId) => ({ article_id: data.id, tag_id: tagId })));
  }

  revalidatePath("/admin/articles");
  revalidatePath("/essays");
  redirect(`/admin/articles/${data.id}?saved=1&created=1`);
}

export async function deleteArticleAction(formData: FormData) {
  const client = createSupabaseServerClient();

  if (!client || !hasSupabaseEnv()) {
    return;
  }

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const { error } = await client.from("articles").delete().eq("id", id);
  if (error) return;

  revalidatePath("/admin/articles");
  revalidatePath("/essays");
  redirect("/admin/articles");
}
