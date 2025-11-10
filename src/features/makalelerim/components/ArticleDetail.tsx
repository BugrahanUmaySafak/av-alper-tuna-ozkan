"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container/Container";
import Section from "@/components/section/Section";
import { useMemo } from "react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Pencil, ArrowLeft, Tag, Timer } from "lucide-react";
import type { Article } from "../types";
import { useArticle } from "../hooks/useArticle";

function formatTR(iso?: string) {
  if (!iso) return "";
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

export default function ArticleDetail({
  slug,
  initialArticle,
}: {
  slug: string;
  initialArticle: Article;
}) {
  const { data: article } = useArticle(slug, initialArticle);
  if (!article) notFound();

  const html = useMemo(() => normalizeHtml(article.content), [article.content]);

  const heroSrc = article.image.url;
  const heroTiny = article.image.tinyUrl ?? heroSrc;

  return (
    <>
      {/* HERO */}
      <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden mt-2 sm:mt-4 lg:mt-6 rounded-xl">
        <Image
          src={heroTiny}
          alt={article.image.alt}
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover blur-[2px] scale-105"
          decoding="async"
        />
        <Image
          src={heroSrc}
          alt={article.image.alt}
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
      </div>

      <Section>
        <Container>
          <div className="mb-4">
            <Link
              href="/makalelerim"
              className="inline-flex items-center gap-2 text-sm rounded-md border px-3 py-1.5 hover:bg-accent transition"
              aria-label="Tüm yazılara geri dön"
              prefetch={false}
            >
              <ArrowLeft className="h-4 w-4" />
              Tüm yazılara geri dön
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatTR(article.createdAt)}
            </span>

            {article.updatedAt && (
              <span className="inline-flex items-center gap-1.5">
                <Pencil className="h-4 w-4" />
                Güncellendi: {formatTR(article.updatedAt)}
              </span>
            )}

            {article.category && (
              <span className="inline-flex items-center gap-1.5 text-black">
                <Badge variant="category" size="sm">
                  <Tag className="h-4 w-4 mr-2" />
                  {article.category.name}
                </Badge>
              </span>
            )}

            {typeof article.readingMinutes === "number" && (
              <span className="inline-flex items-center gap-1.5">
                <Timer className="h-4 w-4" />
                {article.readingMinutes} dk
              </span>
            )}
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
            <div className="mt-6 flex flex-wrap gap-2">
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
