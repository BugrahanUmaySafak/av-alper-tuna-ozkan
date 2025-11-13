// ============================================================================
// Şehir içerikleri – yazım düzeltmeleri, Türkçe küçük harf normalize
// ============================================================================

import { serviceLocationKeywords } from "@/data/service";

export type CityKey = "ankara" | "kirikkale";

export type GalleryItem = {
  title: string;
  description: string;
  image: string;
  layout?: "square" | "wide" | "tall";
};

export type CityContent = {
  key: CityKey;
  name: string;
  slug: string;
  heroTitle: string;
  heroDescription: string;
  heroHighlight: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  stats: { label: string; value: string }[];
  services: string[];
  coords: [number, number];
  address: {
    title: string;
    lines: string[];
    mapsLink: string;
    directionsLink: string;
  };
  phone: string;
  email: string;
  officeHours: string;
  mapEmbed: string;
  gallery: GalleryItem[];
};

const COMMON_PHONE = "+90 (534) 018 19 33"; // UI
const COMMON_EMAIL = "av.alpertunaozkan@gmail.com";
const COMMON_HOURS = "Pazartesi - Cuma 09:00 - 18:00";

const trLower = (s: string) => s.toLocaleLowerCase("tr-TR");
const ankaraKeywords = serviceLocationKeywords.filter((k) =>
  trLower(k).includes("ankara")
);
const kirikkaleKeywords = serviceLocationKeywords.filter((k) =>
  trLower(k).includes("kırıkkale")
);

export const cityContent: Record<CityKey, CityContent> = {
  ankara: {
    key: "ankara",
    name: "Ankara",
    slug: "/ankara-gayrimenkul-avukati",
    heroTitle: "Ankara Gayrimenkul Avukatı",
    heroDescription:
      "Başkentteki gayrimenkul yatırımlarınızı sözleşmeden tahliye sürecine kadar uçtan uca yöneten hukuk ekibi.",
    heroHighlight:
      "Ankara'da gayrimenkul hukukuna dair dosyalarınızda 360° hukuki danışmanlık.",
    heroImage: "/alpertunaozkan-homePage-contact.webp",
    metaTitle: "Ankara Gayrimenkul Avukatı",
    metaDescription:
      "Ankara Gayrimenkul Avukatı | Ankara’da tapu iptal, kira uyarlama, kamulaştırma ve kat karşılığı inşaat sözleşmelerinde uçtan uca hukuki danışmanlık.",
    keywords: ankaraKeywords,
    summary:
      "Ankara'da gayrimenkul hukuku, miras hukuku, kira hukuku, inşaat hukuku, kamulaştırma ve imar hukuku alanlarında tam profesyonel hizmet veriyoruz.",
    stats: [
      { label: "Bölgesel Deneyim", value: "12+ yıl" },
      { label: "Gayrimenkul Dosyası", value: "650+" },
      { label: "Kat Karşılığı Proje", value: "45" },
    ],
    services: [
      "Çankaya, Yenimahalle ve Etimesgut’taki tapu iptal & tescil davaları",
      "Ankara’daki kamu projeleri için kamulaştırma ve bedel artırım davaları",
      "Kat karşılığı inşaat sözleşmeleri ve yüklenici ihtilafları",
      "Ticari plaza ve AVM kiralarında kira uyarlama & tahliye süreçleri",
    ],
    coords: [39.894828, 32.840317],
    address: {
      title: "Ankara Ofis",
      lines: [
        "Aşağı Öveçler Mah. 1328. Cad. Demirağ Apt. No:14/8",
        "Çankaya / Ankara",
      ],
      mapsLink:
        "https://www.google.com/maps/search/?api=1&query=Aşağı+Öveçler+Mahallesi+1328.+Cadde+Demirağ+Apt.+No:+14/8+Çankaya+ANKARA",
      directionsLink:
        "https://www.google.com/maps/dir/?api=1&destination=39.894828,32.840317",
    },
    phone: COMMON_PHONE,
    email: COMMON_EMAIL,
    officeHours: COMMON_HOURS,
    mapEmbed:
      "https://www.google.com/maps?q=39.894828,32.840317&z=16&output=embed",
    gallery: [
      {
        title: "Çankaya Ofis Girişi",
        description:
          "Müvekkilleri karşıladığımız danışma alanının örnek görseli.",
        image:
          "https://images.unsplash.com/photo-1529429617124-aee711a7045d?auto=format&fit=crop&w=900&q=80",
        layout: "wide",
      },
      {
        title: "Toplantı Odası",
        description: "Kat karşılığı sözleşmelere özel müzakere alanı.",
        image:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
        layout: "square",
      },
      {
        title: "Dava Dosyaları",
        description: "Tapu ve kamulaştırma dosyalarının arşiv düzeni.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
        layout: "tall",
      },
      {
        title: "Ofis Detayı",
        description: "Ankara ofisinde çalışma alanından bir detay.",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        layout: "wide",
      },
      {
        title: "Sunum Hazırlığı",
        description: "Duruşma dosyaları için hazırlık sürecinden kare.",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
        layout: "square",
      },
    ],
  },
  kirikkale: {
    key: "kirikkale",
    name: "Kırıkkale",
    slug: "/kirikkale-gayrimenkul-avukati",
    heroTitle: "Kırıkkale Gayrimenkul Avukatı",
    heroDescription:
      "Kırıkkale’de konut, sanayi ve tarım arazilerine ilişkin ihtilaflarda hızlı çözüm odaklı gayrimenkul avukatlığı.",
    heroHighlight:
      "Kırıkkale'de gayrimenkul hukukuna dair dosyalarınızda 360° hukuki danışmanlık.",
    heroImage: "/alpertunaozkan-homePage-contact.webp",
    metaTitle: "Kırıkkale Gayrimenkul Avukatı",
    metaDescription:
      "Kırıkkale Gayrimenkul Avukatı | Kırıkkale’de miras, kira, kamulaştırma ve kat karşılığı inşaat dosyalarında kapsamlı gayrimenkul hukuku hizmeti.",
    keywords: kirikkaleKeywords,
    summary:
      "Kırıkkale'de gayrimenkul hukuku, miras hukuku, kira hukuku, inşaat hukuku, kamulaştırma ve imar hukuku alanlarında tam profesyonel hizmet veriyoruz.",
    stats: [
      { label: "Bölgedeki Dosya Sayısı", value: "480+" },
      { label: "Kamulaştırma Uyuşmazlığı", value: "90+" },
      { label: "Tahliye & Kira Dosyası", value: "220+" },
    ],
    services: [
      "Kırıkkale merkezde kamulaştırma ve kamulaştırmasız el atma dosyaları",
      "Sanayi tesisleri ve lojistik depoları için kira sözleşmesi danışmanlığı",
      "Muris muvazaası ve miras payı davalarında stratejik temsil",
      "Kat karşılığı inşaat ve arsa payı karşılığı projelerin hukuki yönetimi",
    ],
    coords: [39.8413091, 33.5002971],
    address: {
      title: "Kırıkkale Ofis",
      lines: [
        "Yaylacık Mah. Ulubatlı Hasan Cad. Aydınlık Apt. No:22/9",
        "Merkez / Kırıkkale",
      ],
      mapsLink:
        "https://www.google.com/maps/place/Avukat+Alper+Tuna+Özkan/@39.8406944,33.4994228,17z/data=!3m1!4b1",
      directionsLink:
        "https://www.google.com/maps/dir/?api=1&destination=39.8413091,33.5002971",
    },
    phone: COMMON_PHONE,
    email: COMMON_EMAIL,
    officeHours: COMMON_HOURS,
    mapEmbed:
      "https://www.google.com/maps?q=39.8413091,33.5002971&z=16&output=embed",
    gallery: [
      {
        title: "Merkez Ofis",
        description: "Kırıkkale merkezdeki görüşme alanından örnek kare.",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
        layout: "square",
      },
      {
        title: "Dosya Hazırlığı",
        description: "Kamulaştırma dosyaları için teknik hazırlık sürecimiz.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        layout: "wide",
      },
      {
        title: "Görüşme Alanı",
        description:
          "Tahliye ve kira ihtilaflarında birebir değerlendirme ortamı.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
        layout: "tall",
      },
      {
        title: "Arşiv",
        description: "Bölgeye ait gayrimenkul dosyalarının düzeni.",
        image:
          "https://images.unsplash.com/photo-1468779036391-52341f60b55d?auto=format&fit=crop&w=900&q=80",
        layout: "wide",
      },
      {
        title: "Toplantı Notları",
        description: "Müvekkil toplantılarında kullanılan hazırlık masası.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
        layout: "square",
      },
    ],
  },
};

export const cityList = Object.values(cityContent);
