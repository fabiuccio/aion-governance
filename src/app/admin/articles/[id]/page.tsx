import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminArticleForm } from "@/components/admin-article-form";
import { AdminDeleteButton } from "@/components/admin-delete-button";
import { getAllArticles, getAllTags } from "@/lib/content/repository";

interface AdminArticleDetailPageProps {
  params: {
    id: string;
  };
  searchParams?: {
    saved?: string;
    created?: string;
  };
}

export default async function AdminArticleDetailPage({
  params,
  searchParams,
}: AdminArticleDetailPageProps) {
  const [tags, articles] = await Promise.all([
    getAllTags(),
    getAllArticles(),
  ]);

  const article = articles.find((candidate) => candidate.id === params.id);

  if (!article) {
    notFound();
  }

  const confirmationMessage =
    searchParams?.saved === "1"
      ? searchParams.created === "1"
        ? "Article created and saved successfully."
        : "Article changes saved successfully."
      : undefined;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href="/admin/articles" className="text-sm text-ink/55 hover:text-ink">
          Back to articles
        </Link>
        <AdminDeleteButton articleId={params.id} />
      </div>
      <h1 className="mt-5 font-serif text-5xl text-ink">Edit article</h1>
      <div className="mt-10 rounded-[2rem] border border-border bg-paper p-8">
        <AdminArticleForm
          article={article}
          tags={tags}
          confirmationMessage={confirmationMessage}
        />
      </div>
    </div>
  );
}
