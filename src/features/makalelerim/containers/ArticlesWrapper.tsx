"use client";

import PageHeader from "@/components/PageHeader";
import ArticlesList from "../components/ArticlesList";
import type { Article } from "../types";

export default function ArticlesWrapper({
  initialItems,
}: {
  initialItems: Article[];
}) {
  return (
    <>
      <PageHeader
        title="Makalelerim"
        description="Gayrimenkul hukukuna dair kapsamlı yazılar."
      />
      <ArticlesList initialItems={initialItems} />
    </>
  );
}
