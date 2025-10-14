export interface Slide {
  image: string;
  mobileImage: string;
  title: string;
  description: string;
  features: string[];
}

export const slides: Slide[] = [
  {
    image: "/slider/insaat.webp",
    mobileImage: "/slider/mobile/insaat-mobile.webp",
    title: "İnşaat Hukuku",
    description:
      "Projelerinizde hukuki süreçleri yönetir, sözleşmeler ve uyuşmazlıklarda çözüm üretiriz.",
    features: [
      "Kat Karşılığı İnşaat",
      "Kentsel Dönüşüm",
      "Ayıplı ve Eksik İş",
      "Gecikme Tazminatı",
      "Sözleşmenin Feshi",
    ],
  },
  {
    image: "/slider/gayrimenkul.webp",
    mobileImage: "/slider/mobile/gayrimenkul-mobile.webp",
    title: "Gayrimenkul Hukuku",
    description:
      "Taşınmaz mülkiyetinde haklarınızı korur, tapu iptali ve tescil süreçlerini yürütürüz.",
    features: [
      "Tapu İptal ve Tescil",
      "Ortaklığın Giderilmesi Davaları",
      "Önalım(Şufa) Davaları",
      "Tapu Sicilinin Düzeltilmesi",
      "Taşınmaz Mülkiyetinin Kazanılması",
    ],
  },
  {
    image: "/slider/miras.webp",
    mobileImage: "/slider/mobile/miras-mobile.webp",
    title: "Miras Hukuku",
    description:
      "Miras yoluyla intikal eden taşınmazlarda paydaş ihtilaflarını çözer, haklarınızı güvence altına alırız.",
    features: [
      "Mirastan Mal Kaçırma(Muris Muvazaası)",
      "Tenkis ve Saklı Pay",
      "Terekeye İade",
      "Mirasçılık Belgesi İstemi",
      "İstihkak Davaları",
    ],
  },
  {
    image: "/slider/kira.webp",
    mobileImage: "/slider/mobile/kira-mobile.webp",
    title: "Kira Hukuku",
    description:
      "Kira ilişkilerinde hak ve yükümlülüklerinizi korur, uyuşmazlıklarda hukuki destek sağlar ve süreçleri yönetiriz.",
    features: [
      "Kira Bedelinin Tespiti",
      "Kiracının Tahliyesi",
      "Kira Sözleşmesinin Uyarlanması",
      "Kiralananın Devri ve Alt Kira İlişkileri",
      "Depozito ve Güvence Bedeli",
    ],
  },
  {
    image: "/slider/imar.webp",
    mobileImage: "/slider/mobile/imar-mobile.webp",
    title: "Kamulaştırma ve İmar Hukuku",
    description:
      "Kamulaştırma ve imar süreçlerinde haklarınızı korur, hukuki strateji ve çözüm odaklı takip yürütürüz.",
    features: [
      "Kamulaştırmasız El Atma",
      "İmar Uygulaması ve İptali",
      "Kamulaştırma ve Acele Kamulaştırma",
      "Kadastro Yenileme Davaları",
    ],
  },
];
