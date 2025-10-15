"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, FileText, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/section/Section";

import type { Video } from "@/features/videolarim/types";
import type { Article } from "@/features/makalelerim/types";
import Container from "../container/Container";

type Props = {
  videos: Video[];
  articles: Article[];
  videoTake?: number;
  articleTake?: number;
  title?: string;
  upperContent?: string | null; // 👈 opsiyonel
  lowerContent?: string | null; // 👈 opsiyonel
};

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

export default function InformativeContent({
  videos,
  articles,
  videoTake = 2,
  articleTake = 2,
  title = "Hukuki İçerik ve Analizler",
  upperContent = null,
  lowerContent = null,
}: Props) {
  const previewVideos = videos.slice(0, videoTake);
  const previewArticles = articles.slice(0, articleTake);

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>

          {upperContent && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {upperContent}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* VIDEOLAR */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Videolarım</h3>
            </div>

            <div className="space-y-6">
              {previewVideos.map((video) => (
                <div key={video.id} className="mb-4">
                  <Link href="/videolarim">
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer overflow-hidden">
                      <CardContent className="p-5">
                        <div className="flex gap-4 md:gap-5">
                          <div className="relative w-44 h-24 md:w-52 md:h-28 lg:w-56 lg:h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-gray-900">
                            <Image
                              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                              alt={video.title}
                              fill
                              sizes="224px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                <Play
                                  className="w-6 h-6 text-white ml-1"
                                  fill="white"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h4 className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-red-600 line-clamp-2 mb-2 leading-snug">
                              {video.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span className="truncate">
                                {formatTR(video.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full group bg-white/50 backdrop-blur-sm hover:bg-white border-red-200 text-red-600 hover:text-red-700 py-6 text-base font-medium"
            >
              <Link href="/videolarim">
                <span className="inline-flex items-center">
                  Tüm Videoları İzle
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>

          {/* MAKALELER */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Makalelerim</h3>
            </div>

            <div className="space-y-6">
              {previewArticles.map((yazi) => (
                <div key={yazi.id} className="mb-4">
                  <Link href={`/makalelerim`}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer overflow-hidden">
                      <CardContent className="p-5">
                        <div className="flex gap-4 md:gap-5">
                          <div className="relative w-44 h-24 md:w-52 md:h-28 lg:w-56 lg:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                            <Image
                              src={yazi.image.url}
                              alt={yazi.image.alt}
                              fill
                              sizes="224px"
                              priority
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                          </div>

                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h4 className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-emerald-900 line-clamp-2 mb-2 leading-snug">
                              {yazi.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span className="truncate">
                                {formatTR(yazi.publishedAt)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full group bg-white/50 backdrop-blur-sm hover:bg-white border-emerald-300 text-emerald-900 hover:text-emerald-800 py-6 text-base font-medium"
            >
              <Link href="/makalelerim">
                <span className="inline-flex items-center">
                  Tüm Makaleleri Oku
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {lowerContent && (
          <div className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                {lowerContent}
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
