"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, FileText, User, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Blog, Video } from "@/data/articles";
import Container from "@/components/Container";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface Props {
  videos: Video[];
  makaleler: Blog[];
}

export default function InformativeContentClient({ videos, makaleler }: Props) {
  const previewVideos = videos.slice(0, 2);
  const previewYazilar = makaleler.slice(0, 2);

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hukuki İçerik ve Analizler
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hukuki gelişmeler ve pratik çözümler hakkında uzman perspektifiyle
            hazırlanmış içeriklere erişin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Videolarımız</h3>
            </div>

            <div className="space-y-6">
              {previewVideos.map((video) => (
                <div key={video._id} className="mb-4">
                  <Link href="/videolarim">
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="relative w-32 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                            <LiteYouTubeEmbed
                              id={video.youtubeId}
                              title={video.title}
                              noCookie={true}
                              poster="mqdefault"
                              adNetwork={false}
                              wrapperClass="yt-lite w-full h-full"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-base group-hover:text-red-600 line-clamp-2 mb-3 leading-snug">
                              {video.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span className="font-medium">
                                  Av. Alper Tuna Özkan
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(video.createdAt).toLocaleDateString(
                                  "tr-TR"
                                )}
                              </div>
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
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Makalelerim</h3>
            </div>

            <div className="space-y-6">
              {previewYazilar.map((yazi) => (
                <div key={yazi._id} className="mb-4">
                  <Link href={`/makalelerim/${yazi.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="relative w-32 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                            <Image
                              src={yazi.image || "/placeholder.svg"}
                              alt={yazi.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              priority
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-base group-hover:text-emerald-600 line-clamp-2 mb-3 leading-snug">
                              {yazi.title}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                <span className="font-medium">
                                  Av. Alper Tuna Özkan
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {new Date(yazi.createdAt).toLocaleDateString(
                                  "tr-TR"
                                )}
                              </div>
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
              className="w-full group bg-white/50 backdrop-blur-sm hover:bg-white border-emerald-200 text-emerald-600 hover:text-emerald-700 py-6 text-base font-medium"
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

        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hukuki gelişmeleri takip etmek ve doğru bilgiye ulaşmak için
              düzenli olarak hazırladığımız içerikleri inceleyebilirsiniz.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
