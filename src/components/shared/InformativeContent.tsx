// src/components/shared/InformativeContent.tsx
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, FileText, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/section/Section";
import Container from "@/components/container/Container";
import SmartFigureImage from "@/components/media/SmartFigureImage";
import YouTubeThumb from "@/components/media/YouTubeThumb";

import type { Video } from "@/features/videolarim/types";
import type { Article } from "@/features/makalelerim/types";

// SSR: "use client" yok

type Props = {
  videos: Video[];
  articles: Article[];
  videoTake?: number;
  articleTake?: number;
  title?: string;
  upperContent?: string | null;
  lowerContent?: string | null;
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
    <Section className="overflow-x-hidden">
      <Container className="px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            {title}
          </h2>
          {upperContent && (
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {upperContent}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* VIDEOLAR */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Videolarım
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {previewVideos.map((video, idx) => (
                <div key={video.id} className="mb-2 md:mb-4">
                  <Link href="/videolarim" className="block" prefetch={false}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer overflow-hidden max-w-full">
                      <CardContent className="p-4 md:p-5">
                        <div className="flex gap-3 md:gap-5 items-stretch">
                          {/* THUMBNAIL */}
                          <div className="relative w-32 sm:w-44 md:w-52 lg:w-56 aspect-video rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-gray-900">
                            <YouTubeThumb
                              youtubeId={video.youtubeId}
                              alt={video.title}
                              // kart genişlikleri için uygun sizes
                              sizes="(min-width:1024px) 224px, (min-width:768px) 208px, (min-width:640px) 176px, 128px"
                              // ilk kartı önceliklendirebilirsin:
                              priority={idx === 0}
                              // istersen kaliteyi 60–72 arası kullan
                              quality={60}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/90 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors">
                                <Play
                                  className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5"
                                  fill="white"
                                />
                              </div>
                            </div>
                          </div>

                          {/* METİN */}
                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h4 className="font-semibold text-gray-900 text-sm md:text-lg group-hover:text-red-600 line-clamp-2 mb-1 md:mb-2 leading-snug break-words">
                              {video.title}
                            </h4>
                            <div className="flex items-center text-xs md:text-sm text-gray-500 min-w-0">
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
              className="w-full group bg-white/50 backdrop-blur-sm hover:bg-white border-red-200 text-red-600 hover:text-red-700 py-5 md:py-6 text-base font-medium"
            >
              <Link href="/videolarim" prefetch={false}>
                <span className="inline-flex items-center">
                  Tüm Videoları İzle
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>

          {/* MAKALELER */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Makalelerim
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {previewArticles.map((yazi) => (
                <div key={yazi.id} className="mb-2 md:mb-4">
                  <Link href="/makalelerim" className="block" prefetch={false}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer overflow-hidden max-w-full">
                      <CardContent className="p-4 md:p-5">
                        <div className="flex gap-3 md:gap-5 items-stretch">
                          <SmartFigureImage
                            src={yazi.image.url}
                            alt={yazi.image.alt}
                            className="w-32 sm:w-44 md:w-52 lg:w-56 aspect-video rounded-xl shadow-md bg-gray-900 flex-shrink-0 overflow-hidden"
                          />
                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h4 className="font-semibold text-gray-900 text-sm md:text-lg group-hover:text-emerald-900 line-clamp-2 mb-1 md:mb-2 leading-snug break-words">
                              {yazi.title}
                            </h4>
                            <div className="flex items-center text-xs md:text-sm text-gray-500 min-w-0">
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
              className="w-full group bg-white/50 backdrop-blur-sm hover:bg-white border-emerald-300 text-emerald-900 hover:text-emerald-800 py-5 md:py-6 text-base font-medium"
            >
              <Link href="/makalelerim" prefetch={false}>
                <span className="inline-flex items-center">
                  Tüm Makaleleri Oku
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {lowerContent && (
          <div className="mt-10 md:mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {lowerContent}
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
