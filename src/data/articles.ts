export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  _id: string;
  title: string;
  youtubeId: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const yaziData: Blog[] = [
  {
    _id: "yazi_1",
    title: "Muris Muvazaası Nedir?",
    slug: "muris-muvazaasi-nedir",
    content: `
    Muris muvazaası, Türk Medeni Hukuku’nda sıkça karşılaşılan uyuşmazlıklardan biridir. 
    Miras bırakan, mirasçılarının saklı paylarını ortadan kaldırmak ya da azaltmak amacıyla taşınmazını üçüncü bir kişiye devrediyormuş gibi yapar. 
    Görünürde satış gibi gözüken bu işlem aslında bağış amacını taşır. 
    Yani işlemde görünüşteki sebep ile gerçek sebep birbirinden farklıdır ve bu nedenle muvazaa doğmuş olur. 
    
    Muris muvazaası davalarının en önemli özelliği, miras bırakanın gerçek iradesinin ortaya çıkarılmasıdır. 
    Mahkeme, görünürdeki sözleşmenin arkasında ne olduğunu araştırır. 
    Tarafların ekonomik durumları, tanık beyanları, yazılı belgeler ve olayın bütün koşulları bu incelemede dikkate alınır. 
    Bu nedenle muris muvazaası davası teknik bilgi ve dikkat gerektiren bir dava türüdür. 
    
    Saklı paylı mirasçıların hakları Anayasa ve Medeni Kanun tarafından korunmaktadır. 
    Bu sebeple, muris muvazaası halinde açılacak dava ile saklı payların korunması sağlanır. 
    Örneğin, miras bırakan kız çocuklarını mirastan mahrum bırakmak amacıyla taşınmazını yalnızca erkek çocuğuna devrederse, diğer çocuklar muris muvazaası davası açarak haklarını geri alabilirler. 
    
    Uygulamada Yargıtay kararları bu konuda yol gösterici rol oynamaktadır. 
    Yargıtay, murisin gerçek iradesinin ortaya çıkarılması için geniş bir delil incelemesi yapılmasını şart koşar. 
    Özellikle murisin ekonomik gücü, satış bedeli ile taşınmazın gerçek değeri arasındaki fark gibi unsurlar dikkatle değerlendirilir. 
    
    Sonuç olarak, muris muvazaası davaları miras hukukunun en kritik konularından biridir. 
    Hem mirasçılar arasındaki adaleti sağlamak hem de murisin gerçek iradesinin tespitini yapmak bu davaların amacıdır. 
    Bu nedenle, böyle bir durumda mutlaka uzman bir avukattan destek alınmalıdır.
        `,
    excerpt:
      "Muris muvazaası; miras bırakanın görünürde satış, gerçekte bağış niteliğindeki işlemleriyle saklı paylı mirasçıların haklarının ihlâl edilmesi hâlidir. Delillerin titizlikle incelenmesi gerekir.",
    image: "https://picsum.photos/id/1015/800/400",
    tags: [
      "muris muvazaası",
      "saklı pay",
      "miras hukuku",
      "tapu iptal",
      "tenkis",
    ],
    createdAt: "2025-09-20T10:00:00.000Z",
    updatedAt: "2025-09-20T10:00:00.000Z",
  },
  {
    _id: "yazi_2",
    title: "Tapu İptal ve Tescil Davalarında Dikkat Edilmesi Gerekenler",
    slug: "tapu-iptal-ve-tescil",
    content: `
    Tapu iptal ve tescil davaları, mülkiyet hakkını koruyan en önemli dava türlerinden biridir. 
    Bir taşınmazın usulsüz, sahte ya da hukuka aykırı yollarla başkasının adına geçirilmesi halinde açılır. 
    Bu davaların en temel amacı, taşınmazın gerçek malikinin belirlenmesi ve tapu kaydının düzeltilmesidir. 
    
    Davacı, mülkiyet hakkını çeşitli delillerle ispatlamak zorundadır. 
    Bu deliller arasında tapu kayıtları, kadastro tutanakları, tanık ifadeleri ve bilirkişi raporları yer alır. 
    Mahkemeler, tüm bu delilleri değerlendirerek taşınmazın gerçek sahibini tespit eder. 
    
    Uygulamada en sık görülen sebeplerden biri vekaletin kötüye kullanılmasıdır. 
    Bir kişinin başka birine verdiği vekaletname, kötüye kullanılarak taşınmazın haksız şekilde devri sağlanabilir. 
    Böyle bir durumda tapu iptal ve tescil davası açılarak hak ihlali ortadan kaldırılabilir. 
    
    Bunun yanı sıra, miras uyuşmazlıkları da tapu davalarının önemli bir sebebidir. 
    Mirasçıların haberi olmadan yapılan taşınmaz devri, muris muvazaası davalarına konu olabilir. 
    Dolayısıyla tapu iptal ve tescil davaları çoğu zaman miras hukuku ile iç içe geçmiştir. 
    
    Sonuç olarak, tapu iptal ve tescil davaları yalnızca bireylerin mülkiyet hakkını değil, aynı zamanda toplumun hukuk düzenini de korur. 
    Bu nedenle, davaların uzman bir hukukçu aracılığıyla yürütülmesi büyük önem taşır.
        `,
    excerpt:
      "Tapu iptal ve tescil davası; usulsüz devrin önlenmesi, gerçek malik adına kayıt yapılması ve mülkiyet hakkının korunması için açılır. Delil değerlendirmesi ve usul hataları kritik önemdedir.",
    image: "https://picsum.photos/id/1025/800/400",
    tags: [
      "tapu iptal",
      "tescil",
      "mülkiyet hakkı",
      "vekaletin kötüye kullanılması",
      "gayrimenkul hukuku",
    ],
    createdAt: "2025-09-21T12:00:00.000Z",
    updatedAt: "2025-09-21T12:00:00.000Z",
  },
  {
    _id: "yazi_3",
    title: "Kira Bedelinin Tespiti Davaları",
    slug: "kira-bedelinin-tespiti",
    content: `
    Kira bedelinin tespiti davaları, hem kiraya veren hem de kiracı açısından önem taşır. 
    Piyasa koşullarının değişmesi, enflasyonun yüksek seyretmesi ve kira sözleşmelerinin uzun süreli olması bu davaları gerekli kılar. 
    Amaç, kira bedelinin hakkaniyete uygun şekilde belirlenmesidir. 
    
    Türk Borçlar Kanunu, kira artışlarının belirli sınırlar içinde yapılmasını öngörmüştür. 
    Buna göre kira artışı, tüketici fiyat endeksi ile sınırlı tutulmuştur. 
    Ancak taraflar arasında uyuşmazlık çıktığında mahkeme devreye girer ve kira bedelini emsal kira bedellerini dikkate alarak belirler. 
    
    Kiracılar açısından bu davalar, kira bedelinin fahiş şekilde artırılmasını engellemek için önemlidir. 
    Kiraya verenler açısından ise kira gelirinin piyasa koşullarına uygun şekilde güncellenmesini sağlar. 
    Dolayısıyla bu dava türü, her iki taraf için de adil bir denge oluşturur. 
    
    Uygulamada bilirkişi raporları, kira bedelinin tespitinde belirleyici rol oynar. 
    Bilirkişiler, taşınmazın konumu, özellikleri ve emsal kiraları dikkate alarak adil bir bedel önerisinde bulunur. 
    Mahkeme de bu raporu esas alarak kararını verir. 
    
    Sonuç olarak, kira bedelinin tespiti davaları kira hukukunun en temel mekanizmalarından biridir. 
    Bu davalar sayesinde tarafların hakları korunur ve kira ilişkisi dengeli bir şekilde devam eder.
        `,
    excerpt:
      "Kira bedelinin tespiti; TÜFE sınırı ve emsal kiralar dikkate alınarak adil bedelin belirlenmesini amaçlar. Hem kiracı hem kiraya veren için denge sağlayan temel mekanizmadır.",
    image: "https://picsum.photos/id/1035/800/400",
    tags: [
      "kira bedeli tespiti",
      "TÜFE",
      "kira hukuku",
      "emsal kira",
      "TBK 138",
    ],
    createdAt: "2025-09-22T08:30:00.000Z",
    updatedAt: "2025-09-22T08:30:00.000Z",
  },
  {
    _id: "yazi_4",
    title: "Arsa Payı Karşılığı İnşaat Sözleşmeleri",
    slug: "arsa-payi-karsiligi-insaat",
    content: `
    Arsa payı karşılığı inşaat sözleşmeleri, arsa sahipleri ile müteahhitler arasında yapılan ve karşılıklı edimlere dayanan sözleşmelerdir. 
    Bu sözleşmelerde arsa sahibi arsasını müteahhitte devreder, müteahhit de karşılığında arsa sahibine bağımsız bölümler teslim eder. 
    Türkiye’de yaygın olarak kullanılan bu sözleşmeler, aynı zamanda en çok uyuşmazlık doğuran sözleşmeler arasındadır. 
    
    En sık karşılaşılan sorunlardan biri, müteahhidin inşaatı zamanında ve eksiksiz teslim etmemesidir. 
    Böyle durumlarda arsa sahibi, gecikme tazminatı talep edebilir ya da sözleşmeyi feshedebilir. 
    Ayrıca, inşaatın ayıplı olması da sık görülen uyuşmazlık nedenlerindendir. 
    
    Sözleşmenin resmi şekilde yapılması büyük önem taşır. 
    Resmi şekil şartına uyulmadan yapılan sözleşmeler geçersiz sayılır. 
    Bu da tarafların büyük mağduriyet yaşamasına sebep olabilir. 
    Dolayısıyla tarafların mutlaka noter aracılığıyla resmi sözleşme yapmaları gerekir. 
    
    Arsa payı karşılığı inşaat sözleşmelerinde, tarafların hak ve yükümlülüklerinin açıkça belirlenmesi esastır. 
    Teslim tarihi, bağımsız bölümlerin özellikleri, cezai şartlar ve uyuşmazlık halinde uygulanacak hükümler sözleşmede yer almalıdır. 
    
    Sonuç olarak, arsa payı karşılığı inşaat sözleşmeleri hem arsa sahipleri hem de yükleniciler için büyük avantajlar sağlayabilir. 
    Ancak doğru düzenlenmeyen sözleşmeler ciddi hukuki sorunlara yol açar. 
    Bu nedenle tarafların mutlaka uzman bir hukukçudan destek alması tavsiye edilir.
        `,
    excerpt:
      "Arsa payı karşılığı inşaat sözleşmeleri; teslim, cezai şart ve resmi şekil şartı gibi kritik maddelerle uyuşmazlıkları önler. Zamanında ve ayıpsız teslim en büyük risk alanıdır.",
    image: "https://picsum.photos/id/1045/800/400",
    tags: [
      "arsa payı karşılığı",
      "inşaat sözleşmesi",
      "gecikme tazminatı",
      "ayıplı iş",
      "noter şekli",
    ],
    createdAt: "2025-09-23T14:15:00.000Z",
    updatedAt: "2025-09-23T14:15:00.000Z",
  },
  {
    _id: "yazi_5",
    title: "Kamulaştırmasız El Atma Davaları",
    slug: "kamulastirmasiz-el-atma",
    content: `
    Kamulaştırmasız el atma, idarenin herhangi bir kamulaştırma işlemi yapmaksızın özel mülkiyete konu bir taşınmazı fiilen kullanmasıdır. 
    Bu durum mülkiyet hakkının ağır şekilde ihlal edilmesi anlamına gelir. 
    Taşınmazın maliki, mülkiyet hakkının ihlal edildiğini ileri sürerek idareye karşı dava açabilir. 
    
    Yargıtay uygulamalarında, kamulaştırmasız el atma davaları genellikle tazminat talepleriyle sonuçlanır. 
    Mahkemeler, taşınmazın güncel rayiç değerini dikkate alarak malike ödeme yapılmasına karar verir. 
    Böylece mülkiyet hakkı korunmuş olur. 
    
    Kamulaştırmasız el atma, çoğu zaman plansız şehirleşme ve imar uygulamalarından kaynaklanır. 
    İdare, acil bir ihtiyaç nedeniyle taşınmazı fiilen kullanmaya başlayabilir ancak bu durum hukuka uygun değildir. 
    Hukukun üstünlüğü gereği, mülkiyet hakkına keyfi müdahaleler engellenmelidir. 
    
    Bu davalarda zamanaşımı da önemli bir konudur. 
    Malikin uzun süre dava açmaması, hak kaybına yol açabilir. 
    Bu nedenle taşınmazına el atıldığını gören maliklerin vakit kaybetmeden hukuki yollara başvurması gerekir. 
    
    Sonuç olarak, kamulaştırmasız el atma davaları yalnızca bireysel bir hak arayışı değil, aynı zamanda hukuk devletinin korunmasıdır. 
    Bu nedenle bu tür davaların uzman bir hukukçu tarafından yürütülmesi son derece önemlidir.
        `,
    excerpt:
      "Kamulaştırmasız el atma; kamulaştırma yapılmaksızın taşınmaza fiili müdahaledir. Malik tazminat talep edebilir; rayiç değer, zamanaşımı ve yargı içtihatları davanın seyrini belirler.",
    image: "https://picsum.photos/id/1055/800/400",
    tags: [
      "kamulaştırmasız el atma",
      "tazminat",
      "imar hukuku",
      "mülkiyet hakkı",
      "idari eylem",
    ],
    createdAt: "2025-09-24T09:45:00.000Z",
    updatedAt: "2025-09-24T09:45:00.000Z",
  },
];

export const videoData: Video[] = [
  {
    _id: "video_1",
    title: "Miras Hukuku: Saklı Pay Nedir?",
    youtubeId: "iN3w0qv4Kpw",
    description:
      "Saklı pay kavramı ve muris muvazaası davaları hakkında kısa bilgi.",
    createdAt: "2025-09-20T11:00:00.000Z",
    updatedAt: "2025-09-20T11:00:00.000Z",
  },
  {
    _id: "video_2",
    title: "Gayrimenkul Hukuku: Tapu İptal Davaları",
    youtubeId: "OEV8gMkCHXQ",
    description: "Tapu iptal ve tescil süreçlerinin temel aşamaları.",
    createdAt: "2025-09-21T13:30:00.000Z",
    updatedAt: "2025-09-21T13:30:00.000Z",
  },
  {
    _id: "video_3",
    title: "Kira Hukuku: Tahliye Davaları",
    youtubeId: "Ke90Tje7VS0",
    description: "Kiracının tahliyesi hangi şartlarda mümkündür?",
    createdAt: "2025-09-22T15:45:00.000Z",
    updatedAt: "2025-09-22T15:45:00.000Z",
  },
  {
    _id: "video_4",
    title: "İnşaat Hukuku: Eser Sözleşmeleri",
    youtubeId: "fBNz5xF-Kx4",
    description: "İnşaat hukukunda eser sözleşmelerinin kapsamı.",
    createdAt: "2025-09-23T17:10:00.000Z",
    updatedAt: "2025-09-23T17:10:00.000Z",
  },
  {
    _id: "video_5",
    title: "Kamulaştırma Hukuku: El Atma Davaları",
    youtubeId: "ofme2o29ngU",
    description: "Kamulaştırmasız el atma davalarının özellikleri.",
    createdAt: "2025-09-24T19:00:00.000Z",
    updatedAt: "2025-09-24T19:00:00.000Z",
  },
];
