"use client";

import PageHeader from "@/components/PageHeader";
import ArticleDetail from "../components/ArticleDetail";
import { getBySlugMock } from "../mock";

interface Props {
  slug: string;
}

export default function ArticleDetailWrapper({ slug }: Props) {
  const article = getBySlugMock(slug);

  return (
    <>
      <PageHeader
        title={article?.title ?? "Makale"}
        description={article?.excerpt ?? "Makale detayları"}
      />

      {article ? (
        <ArticleDetail slug={slug} />
      ) : (
        <div className="py-12 text-center text-muted-foreground">
          İstediğiniz makale bulunamadı.
        </div>
      )}
    </>
  );
}
