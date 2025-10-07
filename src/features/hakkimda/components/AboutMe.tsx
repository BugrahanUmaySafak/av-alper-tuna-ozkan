import Container from "@/components/Container";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Görsel */}
          <div className="md:col-span-6 relative overflow-hidden rounded-2xl shadow-xl w-full aspect-[3/4]">
            <Image
              src="/alpertunaozkan2.webp"
              alt="Avukat Alper Tuna Özkan"
              fill
              className="object-cover object-center"
              priority
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Metin */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Avukat Alper Tuna Özkan
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                1994 yılında Kırıkkale’de doğan Alper Tuna Özkan, hukuka olan
                tutkusu ve çözüm odaklı yaklaşımıyla kariyerini
                şekillendirmiştir. 2019 yılında Ufuk Üniversitesi Hukuk
                Fakültesi’nden mezun olduktan sonra, özellikle gayrimenkul ve
                miras hukuku alanlarında derin bir uzmanlık geliştirmiş ve
                karmaşık hukuki meselelerde müvekkillerine somut ve güvenilir
                çözümler sunmayı ilke edinmiştir.
              </p>
              <p>
                Kariyeri boyunca, vatandaşların yıllardır idare ile süren
                mülkiyet ve kamulaştırmasız el atma davalarında etkili çözümler
                üreterek haklarını korumuş; müteahhit firmalar ve arsa
                sahipleriyle yürütülen kat karşılığı inşaat ve kentsel dönüşüm
                projelerinde süreçleri stratejik şekilde yönetmiştir. Bu
                çalışmalar, onu sektörde uzman bir avukat olarak ön plana
                çıkarmıştır.
              </p>
              <p>
                Özkan Hukuk ve Danışmanlık Bürosu’nun kurucusu olarak
                faaliyetlerini sürdüren Alper Tuna Özkan, özellikle gayrimenkul
                ve miras hukuku alanlarında müvekkillerine rehberlik etmekte,
                taşınmaz mülkiyeti, tapu iptali ve tescil ile miras yoluyla
                intikal eden taşınmazlardaki paydaş ihtilaflarını etkin biçimde
                çözmektedir. Aynı zamanda kira hukuku ve mülkiyetle bağlantılı
                diğer uyuşmazlıklarda da stratejik ve pratik çözümler üreterek
                müvekkillerinin haklarını güvence altına almaktadır.
              </p>
              <p>
                Her vakaya derin bir özenle yaklaşan Av. Alper Tuna Özkan,
                hukuki süreçleri sadece dava gözüyle değerlendirmekle kalmayıp,
                stratejik ve pratik çözümler geliştirerek müvekkillerinin
                haklarını korumakta ve hukuki süreçlerini etkin şekilde
                yönetmektedir. Etik ve profesyonel yaklaşımı, derin alan bilgisi
                ve çözüm odaklı çalışmasıyla, gayrimenkul ve miras hukuku
                alanında uzman bir avukat olarak öne çıkmaktadır.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
