import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetailWrapper from "@/features/makalelerim/containers/ArticleDetailWrapper";
import { getArticleBySlug } from "@/features/makalelerim/actions/articles";

export const metadata: Metadata = {
  title: "Makale | Özkan Hukuk Danışmanlık",
};

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();
  return <ArticleDetailWrapper slug={params.slug} initialArticle={article} />;
}
