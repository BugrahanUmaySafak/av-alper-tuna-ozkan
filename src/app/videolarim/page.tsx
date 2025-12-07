// src/app/videolarim/page.tsx
import type { Metadata } from "next";
import VideoListWrapper from "@/features/videolarim/containers/VideoListWrapper";
import { getVideos } from "@/features/videolarim/actions/videos";
import type { Video } from "@/features/videolarim/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";
const PAGE_URL = `${SITE_URL}/videolarim`;
const abs = (path: string) => new URL(path, SITE_URL).toString();

export async function generateMetadata(): Promise<Metadata> {
  const title = "Gayrimenkul Hukuku Videoları | Avukat Alper Tuna Özkan";
  const description =
    "Gayrimenkul hukukuna dair kısa ve açıklayıcı videolar. Kira, tapu, inşaat sözleşmeleri ve kamulaştırma hakkında bilgilendirici içerikler.";

  return {
    title,
    description,
    alternates: { canonical: PAGE_URL },
    openGraph: {
      type: "website",
      url: PAGE_URL,
      title,
      description,
      images: [
        { url: `${SITE_URL}/og/og-videos.jpg`, width: 1200, height: 630 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og/og-videos.jpg`],
    },
  };
}

export const revalidate = 900;
export const dynamic = "force-static";

/* -------------------- PAGE -------------------- */
export default async function VideolarimPage() {
  // Verileri getir
  const items: Video[] = await getVideos();

  // Tarihe göre yeni → eski sıralama
  items.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));

  const hasItems = items.length > 0;

  // CollectionPage (sayfa düzeyi)
  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#page`,
    url: PAGE_URL,
    name: "Gayrimenkul Hukuku Videoları",
    isPartOf: { "@id": `${SITE_URL}/#org` },
    mainEntity: hasItems ? { "@id": `${PAGE_URL}#list` } : undefined,
  };

  // ItemList (liste yapısı)
  const itemListJsonLd = hasItems
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${PAGE_URL}#list`,
        itemListOrder: "http://schema.org/ItemListOrderDescending",
        numberOfItems: items.length,
        itemListElement: items.map((v, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${PAGE_URL}#${v.id}`,
          item: {
            "@type": "VideoObject",
            "@id": `${PAGE_URL}#vid-${v.id}`,
            name: v.title,
          },
        })),
      }
    : null;

  // Her video için VideoObject
  const videoObjectsJsonLd = hasItems
    ? items.map((v) => {
        const embedUrl = `https://www.youtube.com/embed/${v.youtubeId}`;
        const thumb =
          v.coverUrl ?? `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`;

        return {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "@id": `${PAGE_URL}#vid-${v.id}`,
          name: v.title,
          description: v.category?.name
            ? `Video: ${v.category.name} kategorisinde bilgilendirme.`
            : "Gayrimenkul hukuku üzerine bilgilendirici video.",
          url: `${PAGE_URL}#${v.id}`, // Detay sayfan yoksa anchor ile işaretle
          // contentUrl: "https://www.youtube.com/watch?v=...", // YouTube için genelde kullanmayız
          embedUrl,
          thumbnailUrl: [thumb],
          uploadDate: v.createdAt, // ISO tarih beklenir
          inLanguage: "tr",
          isFamilyFriendly: true,
          publisher: { "@type": "Organization", "@id": `${SITE_URL}/#org` },
        };
      })
    : [];

  // Breadcrumbs (opsiyonel ama faydalı)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: abs("/") },
      { "@type": "ListItem", position: 2, name: "Videolarım", item: PAGE_URL },
    ],
  };

  return (
    <>
      {/* JSON-LD'ler */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageJsonLd),
        }}
      />
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}
      {hasItems && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoObjectsJsonLd),
          }}
        />
      )}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* UI */}
      <VideoListWrapper />
    </>
  );
}
