"use client";

import Link from "next/link";
import Container from "@/components/container/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Section from "@/components/section/Section";
import React from "react";
import type { Article } from "../types";
import { useArticles } from "../actions/useArticles";
import SmartFigureImage from "@/components/media/SmartFigureImage";

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

export default function ArticlesList({
  initialItems,
}: {
  initialItems: Article[];
}) {
  const { data: articles } = useArticles(initialItems);
  if (!articles) return null;

  return (
    <Section>
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/makalelerim/${a.slug}`}
              className="block h-full"
            >
              <Card className="group h-full flex flex-col overflow-hidden transition hover:shadow-lg p-0 border-0 rounded-xl">
                <SmartFigureImage
                  src={a.image.url}
                  alt={a.image.alt}
                  className="w-full h-56 sm:h-60 lg:h-64 rounded-t-xl"
                />

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold leading-8">
                    {a.title}
                  </CardTitle>

                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {formatTR(a.publishedAt)}
                  </div>
                </CardHeader>

                <CardContent className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {a.keywords.slice(0, 3).map((k) => (
                      <Badge key={k}>{k}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
