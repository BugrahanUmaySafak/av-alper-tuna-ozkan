import { serviceLocationKeywords } from "@/data/service";

export type CityKey = "ankara" | "kirikkale";

type CityContent = {
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
  gallery: { title: string; description: string; image: string }[];
};

const COMMON_PHONE = "+90 (534) 018 19 33";
const COMMON_EMAIL = "av.alpertunaozkan@gmail.com";
const COMMON_HOURS = "Pazartesi - Cuma 09:00 - 18:00";

const ankaraKeywords = serviceLocationKeywords.filter((k) =>
  k.toLowerCase().includes("ankara")
);
const kirikkaleKeywords = serviceLocationKeywords.filter((k) =>
  k.toLowerCase().includes("kırıkkale")
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
      "Çankaya ve çevresindeki yüksek hacimli tapu, kira ve kamulaştırma dosyalarında 360° hukuki danışmanlık.",
    heroImage: "/alpertunaozkan-homePage-contact.webp",
    metaTitle: "Ankara Gayrimenkul Avukatı | Özkan Hukuk",
    metaDescription:
      "Ankara’da tapu iptal ve tescil, kira artışı, kamulaştırma ve kat karşılığı inşaat sözleşmelerinde uzman gayrimenkul avukatı desteği alın.",
    keywords: ankaraKeywords,
    summary:
      "Ankara’da emlak yatırımları, ticari kiralamalar ve büyük ölçekli dönüşüm projeleri için mahkeme ve müzakere süreçlerini aynı anda yöneten disiplinli bir ekip.",
    stats: [
      { label: "Bölgesel Deneyim", value: "12+ yıl" },
      { label: "Gayrimenkul Dosyası", value: "650+ " },
      { label: "Kat Karşılığı Proje", value: "45" },
    ],
    services: [
      "Çankaya, Yenimahalle ve Etimesgut’taki tapu iptal & tescil davaları",
      "Ankara’daki kamu projeleri için kamulaştırma ve bedel artırım davaları",
      "Kat karşılığı inşaat sözleşmeleri ve yüklenici ihtilafları",
      "Ticari plaza ve AVM kiralarında kira uyarlama & tahliye süreçleri",
    ],
    address: {
      title: "Ankara Ofis",
      lines: [
        "Aşağı Öveçler Mahallesi 1328. Cadde",
        "Demirağ Apartmanı No: 14/8",
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
      },
      {
        title: "Toplantı Odası",
        description: "Kat karşılığı sözleşmelere özel müzakere alanı.",
        image:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Dava Dosyaları",
        description: "Tapu ve kamulaştırma dosyalarının arşiv düzeni.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
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
      "Merkez ve çevre ilçelerdeki kamulaştırmasız el atma, kira ve miras kaynaklı davalarda yerel çözüm ortaklığı.",
    heroImage: "/alpertunaozkan-homePage-contact.webp",
    metaTitle: "Kırıkkale Gayrimenkul Avukatı | Özkan Hukuk",
    metaDescription:
      "Kırıkkale’de miras paylaşımı, kira uyuşmazlıkları, kat karşılığı sözleşmeler ve kamulaştırma davaları için uzman gayrimenkul avukatı desteği.",
    keywords: kirikkaleKeywords,
    summary:
      "Kırıkkale’nin fabrika bölgeleri ve yeni konut projelerinde doğan tüm tapu, kira ve miras ihtilaflarını yerinde takip ediyoruz.",
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
    address: {
      title: "Kırıkkale Ofis",
      lines: [
        "Yaylacık Mahallesi Ulubatlıhasan Caddesi",
        "Aydınlık Apartmanı No: 22/9",
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
      },
      {
        title: "Dosya Hazırlığı",
        description: "Kamulaştırma dosyaları için teknik hazırlık sürecimiz.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Görüşme Alanı",
        description:
          "Tahliye ve kira ihtilaflarında birebir değerlendirme ortamı.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
};

export const cityList = Object.values(cityContent);
