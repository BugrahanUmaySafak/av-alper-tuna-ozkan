// src/features/makalelerim/components/ArticleDetail.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/section/Section";
import { useMemo } from "react";
import { getBySlugMock } from "../mock";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Pencil } from "lucide-react";

function formatTR(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function normalizeHtml(html: string): string {
  const hasParagraph = /<\s*p[\s>]/i.test(html);
  if (hasParagraph) return html;
  return html
    .split(/\n{2,}/g)
    .map((b) => `<p>${b.trim().replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export default function ArticleDetail({ slug }: { slug: string }) {
  const article = useMemo(() => getBySlugMock(slug), [slug]);
  if (!article) notFound();

  const html = useMemo(() => normalizeHtml(article.content), [article.content]);

  return (
    <>
      <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden mt-2 sm:mt-4 lg:mt-6 rounded-xl">
        <Image
          src={article.image.url}
          alt=""
          fill
          sizes="100vw"
          className="object-cover blur-[2px] scale-105"
          aria-hidden
          priority
        />
        <Image
          src={article.image.url}
          alt={article.image.alt}
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      </div>

      <Section>
        <Container>
          <Button asChild variant="outline" className="gap-2 mb-6">
            <Link href="/makalelerim">
              <ArrowLeft className="h-4 w-4" />
              Tüm yazılara geri dön
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatTR(article.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Pencil className="h-4 w-4" />
              Güncellendi: {formatTR(article.updatedAt)}
            </span>
          </div>

          <article
            className={[
              "border border-border/60 rounded-xl bg-card shadow-sm",
              "p-6 md:p-8",
              "max-w-none text-[15px] leading-7",
              "[&>p]:mt-0 [&>p]:mb-4",
              "[&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:text-2xl [&>h2]:font-semibold",
              "[&>h3]:mt-6 [&>h3]:mb-2 [&>h3]:text-xl [&>h3]:font-semibold",
              "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4",
              "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4",
              "[&_li]:my-1",
              "[&_a]:text-blue-600 hover:[&_a]:underline",
            ].join(" ")}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {article.keywords.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {article.keywords.map((k) => (
                <Badge key={k} className="text-sm px-3 py-1.5">
                  {k}
                </Badge>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
