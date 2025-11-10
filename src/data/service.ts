import { Scale, Building2, KeyRound, Hammer, LandPlot } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Miras Hukuku",
    icon: Scale,
    features: [
      "Mirastan Mal Kaçırma Davaları (Muris Muvazaası)",
      "Tenkis Talebi ve Saklı Pay Davaları",
      "Terekeye İade Davaları",
      "Vasiyetname Hazırlanması",
      "Mirastan Feragat Sözleşmeleri",
      "İstihkak Davaları",
      "Terekenin Tespiti Davaları",
      "Mirasın Reddi",
      "Ölünce Kadar Bakma Sözleşmeleri",
      "Mirasçılık Belgesi İstemi",
      "İntikal",
    ],
  },
  {
    title: "Gayrimenkul Hukuku",
    icon: Building2,
    features: [
      "Tapu İptal ve Tescil Davaları",
      "Ön Ödemeli Konut Satış Sözleşmeleri",
      "Taşınmaz Satış Vaadi Sözleşmeleri",
      "Vekaletin Kötüye Kullanılması Davaları",
      "Ortaklığın Giderilmesi Davaları",
      "Önalım (Şufa) Davaları",
      "İnançlı İşlem Davaları",
      "Tapu Sicilinin Düzeltilmesi Davaları",
      "Ecrimisil (Haksız İşgal) Tazminatı Davası",
      "Taşkın Yapı / Olağan-Olağanüstü Zamanaşımı ile Taşınmaz Mülkiyetinin Kazanılması",
      "Elbirliğiyle Mülkiyetin Paylı Mülkiyete Çevrilmesi",
      "İntifa Hakları",
    ],
  },
  {
    title: "Kira Hukuku",
    icon: KeyRound,
    features: [
      "Kiracının Tahliyesi (İhtiyaç, yeniden inşa ve imar, yeni malik vs.)",
      "Kira Bedelinin Tespiti Davaları",
      "Kiralayanın Devri ve Alt Kira İlişkileri Davaları",
      "Kira Sözleşmesinin Sona Ermesi ve Uzaması Davaları",
      "Kira Sözleşmesinin Uyarlanması Davaları (TBK m. 138, olağanüstü hal / değişen koşullar)",
      "Depozito ve Güvence Bedeli Uyuşmazlıkları",
      "Kiralayanın Ayıplı Olması ve Sorumluluk Davaları",
      "Kira Şerhi ve Tescil İşlemleri",
      "Stopaj ve Vergi Kaynaklı Sorunlar",
    ],
  },
  {
    title: "İnşaat Hukuku",
    icon: Hammer,
    features: [
      "Arsa Payı Karşılığı İnşaat Sözleşmeleri",
      "Eser Sözleşmeleri",
      "Ayıplı ve Eksik İş / Gecikme Tazminatı Davaları",
      "Arsa Sahibinin Temerrüdü Davaları",
      "Yüklenicinin Temerrüdü Davaları",
      "Yapının İmar Kanununa Aykırı Olması",
      "Sözleşmenin Feshi ve Erken Fesih Hakkı",
      "Eser Sözleşmesinin Yeni Koşullara Uyarlanması",
      "Arsa Sahibinin Dikey ve Yatay Büyümeden Kaynaklı Hakları",
      "Bağımsız Bölüm Satın Alan 3. Kişilerin Hakları",
      "Riskli Yapı Tespiti ve Yıkım Kararı",
      "Kentsel Dönüşüm Davaları",
      "Kentsel Dönüşüm Sürecinde İnşaat Sözleşmeleri",
    ],
  },
  {
    title: "Kamulaştırma ve İmar Hukuku",
    icon: LandPlot,
    features: [
      "Kamulaştırma Davaları",
      "Acele Kamulaştırma Davaları",
      "Kamulaştırmasız El Atma Davaları (Hukuki El Atma ve Fiili El Atma)",
      "İmar Uygulaması Davaları",
      "Kadastro Davaları",
      "İmar Uygulamasının İptali Davaları",
      "22-A Kadastro Yenileme Uygulaması ve Uygulamadan Kaynaklanan Davalar",
    ],
  },
];

export const serviceTitles = services.map((service) => service.title);

const SERVICE_LOCATIONS = ["Kırıkkale", "Ankara"] as const;

export const serviceLocationKeywords = SERVICE_LOCATIONS.flatMap((city) =>
  serviceTitles.map((title) => `${city} ${title}`)
);
