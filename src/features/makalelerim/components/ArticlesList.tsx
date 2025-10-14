"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

import { getAllMock } from "../mock";
import type { Article } from "../types";
import Section from "@/components/section/Section";
import React from "react";

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

function SmartCardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-56 sm:h-60 lg:h-64 overflow-hidden rounded-t-xl">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover blur-[2px] scale-105"
        aria-hidden
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-contain object-center"
        priority={false}
      />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
    </div>
  );
}

export default function ArticlesList() {
  const [articles] = React.useState<Article[]>(() => getAllMock());

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
                <SmartCardImage src={a.image.url} alt={a.image.alt} />

                <CardHeader className="flex-1 flex flex-col justify-between gap-3">
                  <CardTitle className="text-lg font-semibold leading-7 h-[3.5rem] overflow-hidden line-clamp-2">
                    {a.title}
                  </CardTitle>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground h-5">
                    <CalendarDays className="h-4 w-4" />
                    <span>{formatTR(a.publishedAt)}</span>
                  </div>

                  <div className="flex justify-center gap-2 max-h-7 overflow-hidden mb-3">
                    {a.keywords.slice(0, 3).map((k) => (
                      <Badge
                        key={k}
                        className="bg-blue-50 text-blue-700 border border-blue-200 font-medium hover:bg-blue-100 transition"
                      >
                        {k}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
