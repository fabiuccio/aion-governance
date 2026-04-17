import Link from "next/link";

import { AdminArticleForm } from "@/components/admin-article-form";
import { getAllTags } from "@/lib/content/repository";

export default async function NewArticlePage() {
  const tags = await getAllTags();

  return (
    <div>
      <Link href="/admin/articles" className="text-sm text-ink/55 hover:text-ink">
        Back to articles
      </Link>
      <h1 className="mt-5 font-serif text-5xl text-ink">New article</h1>
      <div className="mt-10 rounded-[2rem] border border-border bg-paper p-8">
        <AdminArticleForm tags={tags} />
      </div>
    </div>
  );
}
