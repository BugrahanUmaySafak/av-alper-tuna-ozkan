"use client";

import PageHeader from "@/components/PageHeader";
import ArticleDetail from "../components/ArticleDetail";
import type { Article } from "../types";

export default function ArticleDetailWrapper({
  slug,
  initialArticle,
}: {
  slug: string;
  initialArticle: Article;
}) {
  return (
    <>
      <PageHeader title={initialArticle.title} description="" />
      <ArticleDetail slug={slug} initialArticle={initialArticle} />
    </>
  );
}
