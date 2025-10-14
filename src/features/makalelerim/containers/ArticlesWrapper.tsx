"use client";

import PageHeader from "@/components/PageHeader";
import ArticlesList from "../components/ArticlesList";

export default function ArticlesWrapper() {
  return (
    <>
      <PageHeader
        title="Makalelerim"
        description="Gayrimenkul hukukuna dair kapsamlı yazılar."
      />
      <ArticlesList />
    </>
  );
}
