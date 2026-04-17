import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminArticleForm } from "@/components/admin-article-form";
import { getAllArticles, getAllTags } from "@/lib/content/repository";

interface AdminArticleDetailPageProps {
  params: {
    id: string;
  };
}

export default async function AdminArticleDetailPage({
  params,
}: AdminArticleDetailPageProps) {
  const [tags, articles] = await Promise.all([
    getAllTags(),
    getAllArticles(),
  ]);

  const article = articles.find((candidate) => candidate.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <Link href="/admin/articles" className="text-sm text-ink/55 hover:text-ink">
        Back to articles
      </Link>
      <h1 className="mt-5 font-serif text-5xl text-ink">Edit article</h1>
      <div className="mt-10 rounded-[2rem] border border-border bg-paper p-8">
        <AdminArticleForm article={article} tags={tags} />
      </div>
    </div>
  );
}
