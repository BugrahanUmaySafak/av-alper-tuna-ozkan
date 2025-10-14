import type { Article } from "./types";

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Boşanma Davalarında Mal Paylaşımı Nasıl Olur?",
    slug: "bosanma-davalarinda-mal-paylasimi",
    excerpt:
      "Evlilik birliği sona erdiğinde mal paylaşımı, tarafların mal rejimine ve edinim şekline göre belirlenir. Bu yazıda, mal paylaşımının temel ilkelerini ve uygulama örneklerini ele alıyoruz.",
    content: `
      <p>Boşanma davalarında en çok tartışılan konulardan biri mal paylaşımıdır. Türk Medeni Kanunu’na göre eşler arasında <strong>edinilmiş mallara katılma rejimi</strong> geçerlidir. Bu rejim, evlilik süresince edinilen malların yarı yarıya paylaşılmasını öngörür.</p>
      <p>Ancak bazı durumlarda istisnalar söz konusudur. Örneğin, eşlerden birinin evlilikten önce sahip olduğu mallar, miras veya bağış yoluyla edindiği mallar <em>kişisel mal</em> olarak kabul edilir ve paylaşım dışı kalır.</p>
      <p>Mahkemeler, mal paylaşımında sadece mülkiyet durumuna değil, katkı oranına da bakar. Özellikle ev hanımı olan eşin emeği de mal rejimi tasfiyesinde dikkate alınır.</p>
      <p>Sonuç olarak, mal paylaşımı davası her ne kadar teknik bir konu olsa da, adil bir sonuç için profesyonel hukuki destek almak büyük önem taşır.</p>
    `,
    image: {
      url: "https://picsum.photos/400/600",
      alt: "Boşanma davası ve mal paylaşımı görseli",
    },
    keywords: ["boşanma", "mal paylaşımı", "aile hukuku", "edinilmiş mallar"],
    publishedAt: "2025-10-10T08:30:00Z",
    updatedAt: "2025-10-10T08:30:00Z",
    seo: {
      title: "Boşanma Davalarında Mal Paylaşımı | Özkan Hukuk Danışmanlık",
      description:
        "Boşanma sonrası mal paylaşımının nasıl yapıldığını, hangi malların paylaşım dışı kaldığını ve hukuki sürecin detaylarını öğrenin.",
      canonicalUrl:
        "https://site.com/makalelerim/bosanma-davalarinda-mal-paylasimi",
    },
  },
  {
    id: "2",
    title: "Kira Hukukunda Tahliye Süreci ve Kiracı Hakları",
    slug: "kira-hukukunda-tahliye-sureci",
    excerpt:
      "Kira sözleşmesinin feshi ve kiracının tahliyesi belirli yasal koşullara tabidir. Bu makalede tahliye sebeplerini, kiracının haklarını ve dava sürecini açıklıyoruz.",
    content: `
      <p>Kira ilişkilerinde en sık yaşanan anlaşmazlıkların başında tahliye talepleri gelir. Türk Borçlar Kanunu’na göre kiraya veren, kiracıyı ancak <strong>haklı nedenlerle</strong> tahliye ettirebilir.</p>
      <p>Tahliye sebepleri arasında kira bedelinin ödenmemesi, taşınmazın gereksinim nedeniyle istenmesi veya kira süresinin bitimi gibi durumlar yer alır. Ancak bu nedenlerin mahkemede somut olarak ispatlanması gerekir.</p>
      <p>Kiracı açısından bakıldığında ise, haksız tahliye taleplerine karşı <em>itiraz hakkı</em> mevcuttur. Kiracının konut dokunulmazlığı Anayasa ile güvence altına alınmıştır.</p>
      <p>Pratikte, tahliye davaları genellikle <strong>icra takibi</strong> veya <strong>mahkeme kararı</strong> ile yürütülür. Sürecin uzamaması için doğru dava türünün seçilmesi ve sürelere dikkat edilmesi gerekir.</p>
    `,
    image: {
      url: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=1200&q=80",
      alt: "Kiracı tahliyesi ve kira hukuku görseli",
    },
    keywords: ["kira hukuku", "tahliye", "kiracı hakları", "borçlar kanunu"],
    publishedAt: "2025-10-08T09:45:00Z",
    updatedAt: "2025-10-08T09:45:00Z",
    seo: {
      title: "Kira Hukukunda Tahliye Süreci | Özkan Hukuk Danışmanlık",
      description:
        "Kira sözleşmesinin sona erdirilmesi, tahliye davaları ve kiracı haklarına dair kapsamlı açıklama.",
      canonicalUrl:
        "https://site.com/makalelerim/kira-hukukunda-tahliye-sureci",
    },
  },
  {
    id: "3",
    title: "Ticari Sözleşmelerde Dikkat Edilmesi Gereken Noktalar",
    slug: "ticari-sozlesmelerde-dikkat-edilmesi-gerekenler",
    excerpt:
      "Ticari sözleşmelerde açık, ölçülebilir ve hukuka uygun hükümlerin yer alması tarafların menfaatini korur. Bu makalede ticari sözleşme hazırlamanın püf noktalarını anlatıyoruz.",
    content: `
      <p>Ticari ilişkilerde yapılan sözleşmeler, taraflar arasındaki hak ve yükümlülükleri belirleyen en önemli araçtır. Ancak her sözleşme aynı düzeyde koruma sağlamaz; dikkat edilmediğinde ciddi hukuki ve mali riskler doğabilir.</p>
      <p>Sözleşme hazırlanırken öncelikle tarafların unvanları, yetki belgeleri, vergi numaraları gibi resmi bilgilerin eksiksiz olması gerekir. Ayrıca, <strong>uyuşmazlık çözüm yöntemi</strong> (tahkim, arabuluculuk, mahkeme yetkisi) açıkça belirtilmelidir.</p>
      <p>Ek olarak, cezai şart, teslimat süreleri, fesih koşulları ve gizlilik hükümleri gibi maddelerin net olması gerekir. Bu hükümler ileride doğabilecek uyuşmazlıkları büyük ölçüde engeller.</p>
      <p>Unutulmamalıdır ki, iyi hazırlanmış bir ticari sözleşme yalnızca tarafları değil, iş sürekliliğini ve itibarı da korur.</p>
    `,
    image: {
      url: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1200&q=80",
      alt: "Ticari sözleşme ve el sıkışma görseli",
    },
    keywords: [
      "ticari sözleşme",
      "şirket hukuku",
      "tahkim",
      "arabuluculuk",
      "cezai şart",
    ],
    publishedAt: "2025-10-05T11:15:00Z",
    updatedAt: "2025-10-05T11:15:00Z",
    seo: {
      title: "Ticari Sözleşmelerde Dikkat Edilmesi Gerekenler | Özkan Hukuk",
      description:
        "Ticari sözleşme hazırlarken hukuki risklerden korunmak için dikkat edilmesi gereken temel noktalar.",
      canonicalUrl:
        "https://site.com/makalelerim/ticari-sozlesmelerde-dikkat-edilmesi-gerekenler",
    },
  },
  {
    id: "4",
    title: "Miras Hukuku ve Vasiyetname Düzenleme Süreci",
    slug: "miras-hukuku-ve-vasiyetname-duzenleme-sureci",
    excerpt:
      "Miras hukukunun temel kavramlarını, miras paylaşımında yaşanan sık sorunları ve vasiyetname düzenlerken dikkat edilmesi gereken hukuki ayrıntıları ele alıyoruz.",
    content: `
      <p><strong>Miras hukuku</strong>, bir kişinin ölümüyle birlikte malvarlığının kimlere ve nasıl geçeceğini düzenleyen hukuk dalıdır. Türk Medeni Kanunu'na göre mirasçılar, kanuni mirasçılar ve atanmış mirasçılar olmak üzere ikiye ayrılır. Kanuni mirasçılar arasında altsoy, üstsoy, eş ve belirli durumlarda devlet yer alır.</p>

      <h2>1. Mirasın Açılması ve Yasal Mirasçılar</h2>
      <p>Miras, miras bırakanın ölüm anında <em>kendiliğinden</em> açılır ve mirasçılar, bu andan itibaren terekenin (miras bırakanın malvarlığı) hak sahibi olurlar. Ancak mirasın intikali (geçişi) bazı durumlarda tartışmalı hale gelebilir. Özellikle mirasçılardan biri tarafından reddi miras yapılması, miras paylarının yeniden hesaplanmasını gerektirir.</p>
      <p>Kanuni mirasçılar şu sıraya göre belirlenir:</p>
      <ul>
        <li><strong>Birinci zümre:</strong> Çocuklar ve onların altsoyu</li>
        <li><strong>İkinci zümre:</strong> Anne, baba ve onların altsoyu</li>
        <li><strong>Üçüncü zümre:</strong> Büyük anne, büyük baba ve onların altsoyu</li>
      </ul>
      <p>Eş, her durumda mirasçı olur ve payı, bulunduğu zümreye göre değişir.</p>

      <h2>2. Vasiyetname Türleri ve Geçerlilik Şartları</h2>
      <p>Vasiyetname, bir kimsenin ölümünden sonra malvarlığının nasıl paylaşılacağını belirten <strong>tek taraflı bir irade beyanıdır</strong>. Üç tür vasiyetname vardır:</p>
      <ol>
        <li><strong>Resmi vasiyetname:</strong> Noter veya yetkili memur huzurunda iki tanıkla düzenlenir.</li>
        <li><strong>El yazılı vasiyetname:</strong> Vasiyetçinin el yazısı ile yazması, tarih atması ve imzalaması gerekir.</li>
        <li><strong>Sözlü vasiyetname:</strong> Olağanüstü hallerde, iki tanık önünde sözlü olarak yapılabilir. Ancak geçerliliği için kısa sürede resmi makamlara bildirilmesi gerekir.</li>
      </ol>
      <p>Vasiyetnamenin geçerli olabilmesi için vasiyetçinin <strong>ayırt etme gücüne sahip</strong> olması ve iradesinin herhangi bir baskı altında olmaması şarttır.</p>

      <h2>3. Saklı Pay (Zorunlu Pay) Kavramı</h2>
      <p>Türk hukukunda bazı mirasçılar, miras bırakanın tasarruf özgürlüğünü sınırlayan <strong>saklı pay hakkına</strong> sahiptir. Saklı pay; çocuklar, eş ve anne-baba için geçerlidir. Bu paydan az miras verilmesi veya tamamen yoksun bırakılması durumunda, mirasçılar <em>tenkis davası</em> açabilir.</p>

      <h2>4. Miras Paylaşımı ve Uygulamada Karşılaşılan Sorunlar</h2>
      <p>Miras paylaşımında sıklıkla karşılaşılan uyuşmazlıklar arasında mirasçıların pay oranları, mirasın tespiti, vasiyetnamenin iptali ve mirasın reddi yer alır. Özellikle <strong>gayrimenkul tespiti</strong> ve <strong>taşınmaz kayıtlarının miras payına yansıtılması</strong> konuları dikkatle ele alınmalıdır.</p>
      <p>Bu süreçte noterden alınan mirasçılık belgesi (veraset ilamı), paylaşımın temel belgesidir. Ancak terekenin büyüklüğüne göre <strong>miras ortaklığı</strong> (elbirliği mülkiyeti) devam eder ve tarafların anlaşmasıyla paylaşım (izale-i şuyu) yapılabilir.</p>

      <h2>5. Vasiyetnamenin İptali ve Tenkis Davaları</h2>
      <p>Vasiyetnamenin iptali, genellikle vasiyetçinin ehliyetsizliği, baskı altında düzenleme veya şekil şartlarının ihlali gerekçeleriyle açılır. Mahkeme, şekil eksikliği veya irade sakatlığı tespit ederse vasiyetnamenin tamamını veya bir kısmını iptal edebilir.</p>
      <p>Tenkis davası ise saklı payı zedeleyen tasarrufların azaltılması amacıyla açılır. Bu davalar, mirasın açılmasından itibaren <strong>1 yıl içinde</strong> açılmalıdır. Aksi halde hak düşer.</p>

      <h2>6. Avukat Desteğinin Önemi</h2>
      <p>Miras hukuku, teknik detaylar barındıran bir alandır. Vasiyetnamenin doğru hazırlanması, ileride çıkabilecek davaların önüne geçer. Aynı şekilde miras paylaşım sürecinde yapılacak hatalar, <strong>maddi kayıplara</strong> ve <strong>aile içi ihtilaflara</strong> yol açabilir.</p>
      <p>Profesyonel bir avukat, hem miras planlaması hem de dava süreçlerinde yol gösterici olur. Ayrıca uluslararası miras ilişkilerinde (örneğin yurtdışında malvarlığı bulunan miras bırakanlar için) özel düzenlemelerin dikkate alınması gerekir.</p>

      <p>Sonuç olarak, miras hukuku yalnızca ölüm sonrası mal paylaşımıyla ilgili değildir; aynı zamanda bir <strong>yaşam planlaması</strong> aracıdır. Bilinçli şekilde hazırlanmış bir vasiyetname, hem miras bırakanın iradesini korur hem de mirasçılar arasındaki olası çatışmaları en aza indirir.</p>
    `,
    image: {
      url: "https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&w=1200&q=80",
      alt: "Miras hukuku ve vasiyetname düzenleme süreci görseli",
    },
    keywords: [
      "miras hukuku",
      "vasiyetname",
      "saklı pay",
      "tenkis davası",
      "veraset ilamı",
      "miras paylaşımı",
    ],
    publishedAt: "2025-10-14T09:30:00Z",
    updatedAt: "2025-10-14T09:30:00Z",
    seo: {
      title:
        "Miras Hukuku ve Vasiyetname Düzenleme Süreci | Özkan Hukuk Danışmanlık",
      description:
        "Mirasın paylaşımı, saklı pay, vasiyetname türleri, mirasçılık belgesi ve tenkis davalarına ilişkin kapsamlı açıklama. Miras hukukunda profesyonel rehber.",
      canonicalUrl:
        "https://site.com/makalelerim/miras-hukuku-ve-vasiyetname-duzenleme-sureci",
    },
  },
];

export function getAllMock() {
  return [...MOCK_ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBySlugMock(slug: string) {
  return MOCK_ARTICLES.find((a) => a.slug === slug) ?? null;
}
