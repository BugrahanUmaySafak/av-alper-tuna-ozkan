import type { Metadata } from "next";
import LocationLanding, {
  LocationLandingData,
} from "@/features/locations/LocationLanding";
import PageHeader from "@/components/page-header/PageHeader";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

const locationData: LocationLandingData = {
  slug: "/kirikkale-gayrimenkul-avukati",
  city: "Kırıkkale",
  title: "Kırıkkale Gayrimenkul Avukatı – Özkan Hukuk & Danışmanlık",
  heroImage: "/alpertunaozkan-homePage-contact.webp",
  heroAlt: "Kırıkkale şehir merkezi ve hukuk bürosu",
  intro:
    "Fabrikalar Mahallesi ve çevre ilçelerde yürütülen kamulaştırma, miras paylaşımı, kira ve kat karşılığı inşaat projelerinde yerel dinamikleri yakından takip ediyoruz. Bu açılış sayfası, Kırıkkale’de taşınmaz süreciyle karşılaşan kişiler için hangi hukuki başvuruların gündeme geldiğini, hangi belgelerin toplanması gerektiğini ve nasıl bir yol haritası izlediğimizi özetler.",
  ogImage: "/og/kirikkale.jpg",
  ogAlt: "Kırıkkale ofisinin toplantı masası",
  pageUrl: `${SITE_URL}/kirikkale-gayrimenkul-avukati`,
  services: [
    {
      title: "Kamulaştırma ve Bedel Artırımı",
      description:
        "Fabrikalar Mahallesi ve çevresindeki hızlı kamulaştırma kararlarında bilirkişi raporları, emsal değerler ve faiz hesaplarını yakından takip ederiz.",
    },
    {
      title: "Kamulaştırmasız El Atma",
      description:
        "Yol, park veya enerji projeleri nedeniyle fiili el atma yaşanan taşınmazlarda tazminat davaları açar ve keşif süreçlerini yönetiriz.",
    },
    {
      title: "Miras Paylaşımı ve Muris Muvazaası",
      description:
        "Kırıkkale merkezdeki aile taşınmazlarında paylaştırma, muris muvazaası ve saklı paya tecavüz konularında dava açarız.",
    },
    {
      title: "Kira ve Tahliye Uyuşmazlıkları",
      description:
        "Sanayi yapıları, lojistik depoları ve konutlar için kira uyarlama, tahliye taahhüdü ve ihtar süreçlerini organize ederiz.",
    },
    {
      title: "Kat Karşılığı İnşaat",
      description:
        "Arsa sahipleri için yüklenici temerrüdü, eksik iş ve cezai şartların uygulanması gibi konularda hukuki temsil sağlarız.",
    },
    {
      title: "Tapu İptal Davaları",
      description:
        "Usulsüz satışlar, vekâletin kötüye kullanılması veya paylı mülkiyetin paylaştırılması gereken durumlarda tapu davalarını yürütürüz.",
    },
  ],
  process: [
    {
      title: "Bilgi Toplama",
      description:
        "Taşınmazın tapu kayıtları, imar durumu, belediye yazıları, varsa kamulaştırma belgeleri ve veraset ilamı detaylı şekilde incelenir. Böylece dava veya müzakere sürecinde tüm hukuki zemin netleşir.",
    },
    {
      title: "Strateji Belirleme",
      description:
        "Toplanan bilgiler ışığında, müvekkilin hak kayıplarına uğramaması için en doğru çözüm yolu belirlenir. Süreç boyunca olası riskler açıklanır, yapılacaklar net şekilde paylaşılır ve her adım müvekkile açık şekilde anlatılır, süreçten haberdar olması sağlanır.",
    },
    {
      title: "Sürecin Yönetimi",
      description:
        "Seçilen strateji doğrultusunda, dava takibi, bilirkişi incelemeleri ve gerekli hukuki adımlar baştan sona yönetilir. Süreç boyunca müvekkil bilgilendirilir ve haklarının korunması sağlanır..",
    },
    {
      title: "Dava ve Takip",
      description:
        "Yetkili mahkemede dava açar, keşif talepleri, bilirkişi ve tanık süreçlerini koordine ederiz.",
    },
    {
      title: "Karar Sonrası İşlemler",
      description:
        "Tapu düzeltmesi, tahliye, icra veya tazminat ödemesi gibi sonuç adımlarını tamamlarız.",
    },
  ],
  faqs: [
    {
      question: "Kamulaştırma kararına itiraz ederken hangi belgeler gerekir?",
      answer:
        "Tapu kayıtları, tebligat nüshası, emsal satışlar ve ekspertiz raporları dosyaya eklenir; süreler kaçırılmamalıdır.",
    },
    {
      question: "Muris muvazaası davası ne kadar sürer?",
      answer:
        "Dosyanın yoğunluğuna göre 12–18 ay arası değişir; keşif ve bilirkişi süreçleri sürenin büyük kısmını oluşturur.",
    },
    {
      question: "Kira tahliye davası açmadan önce arabuluculuk gerekiyor mu?",
      answer:
        "Kira ilişkilerinde zorunlu arabuluculuk uygulandığından dava öncesinde bu süreç tamamlanmalıdır.",
    },
    {
      question: "Kat karşılığı sözleşmede cezai şart uygulanabilir mi?",
      answer:
        "Sözleşmede açık hüküm varsa gecikme veya eksik işlerde cezai şart talep edilebilir; mahkeme somut olaya göre değerlendirir.",
    },
    {
      question: "Kamulaştırmasız el atmada faiz nasıl işler?",
      answer:
        "Tazminata hükmedilen bedel, dava tarihinden itibaren yasal faize tabi olur; mahkeme kararında belirtilir.",
    },
  ],
  addressLines: [
    "Fabrikalar Mahallesi Ulubatlı Hasan Cad. No: 22",
    "Merkez / Kırıkkale",
    "71100",
  ],
  address: {
    street: "Fabrikalar Mah. Ulubatlı Hasan Cad. No:22",
    district: "Merkez",
    city: "Kırıkkale",
    postalCode: "71100",
    country: "TR",
  },
  phone: "+903188151010",
  phoneDisplay: "+90 (318) 815 10 10",
  workingHours: "Pazartesi – Cuma 09:00 – 18:00",
  mapEmbed:
    "https://www.google.com/maps?q=39.8413091,33.5002971&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Avukat+Alper+Tuna+Özkan/@39.8406944,33.4994228,17z/data=!3m1!4b1",
  directionsLink:
    "https://www.google.com/maps/dir/?api=1&destination=39.8413091,33.5002971",
  mapPlaceUrl:
    "https://www.google.com/maps/place/Avukat+Alper+Tuna+Özkan/@39.8406944,33.4994228,17z/data=!3m1!4b1",
  geo: { lat: 39.8413091, lng: 33.5002971 },
  supportingLinks: [
    {
      href: "/faaliyet-alanlarim",
      label: "Faaliyet Alanları",
      description:
        "Kamulaştırma, miras ve kira dosyalarına dair hizmetlerimizin tamamı.",
    },
    {
      href: "/makalelerim",
      label: "Makaleler",
      description:
        "Kırıkkale’de sık rastlanan uyuşmazlıklara dair makale özetleri.",
    },
    {
      href: "/videolarim",
      label: "Videolar",
      description: "Gayrimenkul hukukunda pratik bilgileri içeren videolar.",
    },
  ],
  crossLink: {
    href: "/iletisim",
    label: "İletişim ve Randevu",
    description:
      "Kırıkkale ofisiyle görüşmek için iletişim formunu kullanın veya arayın.",
  },
};

const toAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : new URL(value, SITE_URL).toString();

export const revalidate = 900;
export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  const ogImageAbsolute = toAbsoluteUrl(locationData.ogImage);

  return {
    title: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk & Danışmanlık",
    description:
      "Kırıkkale’de kamulaştırma, miras paylaşımı, kira ve kat karşılığı inşaat sözleşmeleri süreçlerinde hukuki yol haritası.",
    alternates: { canonical: locationData.pageUrl },
    openGraph: {
      type: "website",
      url: locationData.pageUrl,
      siteName: "Özkan Hukuk & Danışmanlık",
      locale: "tr_TR",
      title: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk & Danışmanlık",
      description:
        "Kırıkkale’de kamulaştırma, kira ve kat karşılığı inşaat uyuşmazlıklarının nasıl yönetildiğini öğrenin.",
      images: [
        {
          url: ogImageAbsolute,
          width: 1200,
          height: 630,
          alt: locationData.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Kırıkkale Gayrimenkul Avukatı",
      description:
        "Kamulaştırma, miras payı ve kira dosyaları için yerel hukuki bilgiler.",
      images: [ogImageAbsolute],
      site: "@alpertunaozkan",
      creator: "@alpertunaozkan",
    },
  };
}

export default function Page() {
  const heroImageAbsolute = toAbsoluteUrl(locationData.heroImage);
  const mapPlaceAbsolute = toAbsoluteUrl(locationData.mapPlaceUrl);
  const headerDescription =
    "Kamulaştırma, kira, miras paylaşımı ve kat karşılığı projelerde Kırıkkale’deki yerel dinamiklere uygun hukuki yol haritası.";

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${locationData.pageUrl}#legalservice`,
    name: "Özkan Hukuk & Danışmanlık",
    url: locationData.pageUrl,
    image: heroImageAbsolute,
    areaServed: { "@type": "City", name: locationData.city },
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://www.alpertunaozkan.com/#org",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.street,
      addressLocality:
        locationData.address.district ?? locationData.address.city,
      addressRegion: locationData.address.city,
      postalCode: locationData.address.postalCode,
      addressCountry: locationData.address.country,
    },
    telephone: locationData.phone,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    hasMap: mapPlaceAbsolute,
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.geo.lat,
      longitude: locationData.geo.lng,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: locationData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.alpertunaozkan.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kırıkkale Gayrimenkul Avukatı",
        item: locationData.pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        title="Kırıkkale Gayrimenkul Avukatı"
        description={headerDescription}
      />
      <LocationLanding location={locationData} showTitle={false} />
    </>
  );
}
