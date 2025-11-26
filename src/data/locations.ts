export type LocationLandingData = {
  slug: string;
  city: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  ogImage: string;
  ogAlt: string;
  pageUrl: string;
  services: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  addressLines: string[];
  address: {
    street: string;
    district?: string;
    city: string;
    postalCode?: string;
    country: string;
  };
  phone: string;
  phoneDisplay: string;
  email?: string;
  workingHours: string;
  mapEmbed: string;
  mapLink: string;
  directionsLink: string;
  mapPlaceUrl: string;
  geo: { lat: number; lng: number };
  supportingLinks: { href: string; label: string; description: string }[];
  crossLink: { href: string; label: string; description: string };
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alpertunaozkan.com";

export const kirikkaleLocation: LocationLandingData = {
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
        "Taşınmazın tapu kaydı, imar planı, belediye yazıları ve varsa kamulaştırma evraklarını toplarız.",
    },
    {
      title: "Ön Görüşme ve Yol Haritası",
      description:
        "Dosyanın hedefini belirler, arabuluculuk zorunluluğu olup olmadığını inceler, süreleri planlarız.",
    },
    {
      title: "Arabuluculuk / Uzlaşma",
      description:
        "Tahliye, kira ve kat karşılığı uyuşmazlıklarda zorunlu veya ihtiyari arabuluculuk sürecini yönetiriz.",
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
  mapEmbed: "https://www.google.com/maps?q=39.8413091,33.5002971&z=16&output=embed",
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
      description: "Kamulaştırma, miras ve kira dosyalarına dair hizmetlerimizin tamamı.",
    },
    {
      href: "/makalelerim",
      label: "Makaleler",
      description: "Kırıkkale’de sık rastlanan uyuşmazlıklara dair makale özetleri.",
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
    description: "Kırıkkale ofisiyle görüşmek için iletişim formunu kullanın veya arayın.",
  },
};

export const locationPages = {
  kirikkale: kirikkaleLocation,
};
