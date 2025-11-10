"use client";

import Link from "next/link";
import Container from "@/components/container/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Pencil } from "lucide-react";
import Section from "@/components/section/Section";
import React from "react";
import type { Article } from "../types";
import SmartFigureImage from "@/components/media/SmartFigureImage";
import { useArticles } from "../actions/useArticles";
import { getDisplayDate } from "@/lib/date";

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
          {articles.map((a, idx) => {
            const { text, isUpdated } = getDisplayDate(
              a.createdAt,
              a.updatedAt
            );
            return (
              <Link
                key={a.id}
                href={`/makalelerim/${a.slug}`}
                className="block h-full"
                prefetch={false}
              >
                <Card className="group h-full flex flex-col overflow-hidden transition hover:shadow-lg p-0 border-0 rounded-xl">
                  <SmartFigureImage
                    src={a.image.url}
                    tinySrc={a.image.tinyUrl ?? a.image.url}
                    alt={a.image.alt}
                    /* 👇 sadece ilk karta öncelik ver */
                    priority={idx === 0}
                    className="w-full h-56 sm:h-60 lg:h-64 rounded-t-xl"
                  />

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold leading-8">
                      {a.title}
                    </CardTitle>

                    <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        {isUpdated ? (
                          <Pencil className="h-4 w-4" />
                        ) : (
                          <CalendarDays className="h-4 w-4" />
                        )}
                        {text}
                      </span>
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
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
