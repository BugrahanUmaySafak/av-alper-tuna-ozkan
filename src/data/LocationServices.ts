export type LocationPageData = {
  slug: string;
  city: string;
  title: string;
  headerDescription: string;
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
};

export const locationPromoData = {
  teaser:
    "Kırıkkale’de gayrimenkul ve miras hukuku alanında uzman bir avukat olarak, müvekkillerime kamulaştırma, miras paylaşımı, kira ve kat karşılığı inşaat projelerinde hukuki destek sağlıyorum. Karmaşık hukuki süreçlerde haklarınızı koruyor ve stratejik çözümler sunuyorum.",
  services: [
    {
      title: "Miras Hukuku",
      description: "Mirasçılık, muris muvazaası, tereke ihtilafları",
    },
    {
      title: "Gayrimenkul Hukuku",
      description:
        "Tapu iptali/tescili, ortaklıkların giderilmesi, önalım (şufa) davaları",
    },
    {
      title: "Kira Hukuku",
      description: "Kira tahliyesi, sözleşme uyarlama, depozito uyuşmazlıkları",
    },
    {
      title: "İnşaat Hukuku",
      description:
        "Kat karşılığı inşaat, eser sözleşmeleri, kentsel dönüşüm süreçleri",
    },
    {
      title: "Kamulaştırma ve İmar",
      description:
        "Kamulaştırma, kamulaştırmasız el atma, imar ve kadastro davaları",
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
        "Seçilen strateji doğrultusunda, dava takibi, bilirkişi incelemeleri ve gerekli hukuki adımlar baştan sona yönetilir. Süreç boyunca müvekkil bilgilendirilir ve haklarının korunması sağlanır.",
    },
  ],
};

export const kirikkaleLocationPageData: LocationPageData = {
  slug: "/kirikkale-gayrimenkul-avukati",
  city: "Kırıkkale",
  title: "Kırıkkale Gayrimenkul Hukuku Hizmetleri",
  headerDescription:
    "Kamulaştırma, kira, miras paylaşımı ve kat karşılığı projelerde Kırıkkale’deki yerel dinamiklere uygun hukuki yol haritası.",
  heroImage: "/oda.webp",
  heroAlt: "Kırıkkale gayrimenkul avukatı ofisinde toplantı odası",
  intro:
    "Kırıkkale’de gayrimenkul hukuku alanında uzman bir avukat olarak, müvekkillerime kamulaştırma, miras paylaşımı, kira ve kat karşılığı inşaat projelerinde hukuki destek sağlıyorum. Karmaşık hukuki süreçlerde haklarınızı koruyor ve stratejik çözümler sunuyorum. Bu sayfa, Kırıkkale’de taşınmaz süreçleriyle karşılaşan kişiler için gerekli hukuki başvuruları, toplanması gereken belgeleri ve izlenmesi gereken adımları özetlemektedir.",
  ogImage: "/og/kirikkale.jpg",
  ogAlt: "Kırıkkale ofisinin toplantı masası",
  pageUrl: "/kirikkale-gayrimenkul-avukati",
  services: [
    {
      title: "Kamulaştırma ve Bedel Artırımı",
      description:
        "Taşınmazlarınızın değer kaybını önlemek için kamulaştırma kararlarını, bilirkişi raporlarını ve emsal değerleri yakından takip ediyoruz.",
    },
    {
      title: "Kamulaştırmasız El Atma",
      description:
        "Yol, park veya enerji projeleri gibi durumlarda idarenin taşınmazları haksız kullanmasına karşı süreci yönetiyor, vatandaşların tazminatını alıyoruz; keşif ve dava süreçlerini titizlikle yürütüyoruz.",
    },
    {
      title: "Miras Paylaşımı, Muris Muvazaası ve Mal Kaçırma",
      description:
        "Mirasçılardan mal kaçırılması, vasiyet, veraset ve saklı pay ihlalleri konularında dava açıyor ve adil paylaşım sağlıyoruz.",
    },
    {
      title: "Kira ve Tahliye Uyuşmazlıkları",
      description:
        "Konut ve ticari taşınmazlarda kira sözleşmesi hazırlama, tahliye taahhüdü ve tahliye davalarını yürütüyoruz; ayrıca kira bedelinin tespiti davalarında hukuki destek sağlıyoruz.",
    },
    {
      title: "Kat Karşılığı İnşaat",
      description:
        "Arsa payı karşılığı inşaat projelerinde hukuki danışmanlık sunuyoruz; mimari projeye uygunluk, yüklenici sorumlulukları, eksik iş ve cezai şartların uygulanması konularında süreçleri yönetiyoruz.",
    },
    {
      title: "Tapu İptal ve Tescil Davaları",
      description:
        "Usulsüz satışlar, vekâletin kötüye kullanılması, şufa (önalım) ve taşınmaz satış vaadi konularında hukuki temsil sağlıyoruz.",
    },
  ],
  process: [
    {
      title: "Bilgi Toplama",
      description:
        "Taşınmazın tapu kaydı, imar planı, belediye yazıları ve varsa kamulaştırma evrakları ile miras, vasiyet veya veraset belgelerini temin ediyoruz.",
    },
    {
      title: "Ön Görüşme ve Yol Haritası",
      description:
        "Dosyanın hedefini belirliyor ve sözleşme öncesi kontrolleri yapıyoruz; tahliye, kira, miras veya kat karşılığı projelerde izlenecek adımları planlıyor, ihtar veya başvuru şartlarını kontrol ediyoruz.",
    },
    {
      title: "Arabuluculuk / Uzlaşma",
      description:
        "Dava öncesi uzlaşma ve arabuluculuk süreçlerini yönetiyor, dava şartlarının yerine getirilip getirilmediğini kontrol ediyor ve sürecin eksiksiz ilerlemesini sağlıyoruz.",
    },
    {
      title: "Dava ve Takip",
      description:
        "Yetkili mahkemede dava açıyor, keşif talepleri, bilirkişi ve tanık süreçlerini organize ediyoruz. Tapu iptali, miras, kira veya kat karşılığı inşaat davalarında aktif takip sağlıyoruz.",
    },
    {
      title: "Karar Sonrası İşlemler",
      description:
        "Mahkeme kararına bağlı olarak tapu düzeltmesi, tahliye, icra veya tazminat ödemesi, sözleşme ve projeye uygunluk denetimi gibi sonuç adımlarını tamamlıyoruz.",
    },
  ],
  faqs: [
    {
      question:
        "Tapuda adıma kayıtlı taşınmazın imar planında yol, park, okul gibi kamu alanında görünmesi veya fiilen kamu tarafından kullanılması halinde ne yapmam gerekiyor?",
      answer: `Taşınmazınız imar planında yol, park, okul gibi bir kamu hizmetine ayrılmışsa veya idare taşınmazınızı fiilen kullanıyorsa, bu durum kamulaştırmasız el atma olarak değerlendirilir.

- Fiilî el atma: İdarenin taşınmazı fiziksel olarak kullanması (yol yapılması, park alanı açılması vb.).
- Hukukî el atma: Taşınmazın imar planında kamu alanına ayrılması nedeniyle uzun süre tasarruf edilemez hâle gelmesi.

Her iki durumda da ilgili idareye karşı taşınmaz bedeli için tazminat davası açabilirsiniz. Süreç, taşınmazın niteliği, kullanım şekli ve plan kararlarının tarihine göre değiştiğinden, önce idarenin hangi tür el atmayı gerçekleştirdiğinin tespiti yapılır; ardından uygun dava türü ile tazminat talep edilir.`,
    },
    {
      question: "Kiracıyı hangi durumlarda tahliye edebilirim?",
      answer: `Kiracının tahliyesi ancak kanunda belirtilen sınırlı sebeplerden biri varsa mümkündür. En sık karşılaşılan tahliye nedenleri şunlardır:
      
Ev sahibinden kaynaklanan tahliye sebepleri:
  - Gerçek ihtiyaç: Ev sahibi veya yakınları taşınmazı konut ya da işyeri olarak gerçekten kullanacaksa.
  - Esaslı tadilat / yeniden inşa: Taşınmaz kapsamlı bir tadilata girecek ve bu süreçte kullanılamayacaksa.
  - Yeni malikin ihtiyacı: Evi satın alan yeni malik kendisi veya yakınları için kullanacaksa.

Kiracıdan kaynaklanan tahliye sebepleri:
  - Yazılı tahliye taahhüdü: Kiracı belirli bir tarihte çıkacağını yazılı olarak taahhüt etmişse.
  - İki haklı ihtar: Kiracı kira bedelini düzenli ödemediği için aynı kira döneminde iki kez ihtar gönderilmişse.
  - Kiranın ödenmemesi: Kiracı kira bedelini ödemezse icra yoluyla tahliye istenebilir.
  
Diğer tahliye sebepleri:
  - Kiracının taşınmaza veya komşulara zarar veren davranışları
  - Kira ilişkisinin taraf için çekilmez hâle gelmesi
  - 10 yıllık uzama süresinin dolması`,
    },
    {
      question:
        "Müteahhit inşaatı zamanında bitirmedi veya işi terk etti. Ne yapabilirim?",
      answer: `Müteahhidin sözleşmede belirlenen süreye uymaması veya inşaatı tamamen bırakması durumunda arsa sahiplerinin Türk Borçlar Kanunu’ndan doğan önemli hakları vardır:

- Gecikmeden kaynaklanan zararlar (kira kaybı, ek masraflar vb.) tazmin edilebilir.
- İnşaatın seviyesi tespit edilerek sözleşme feshedilebilir ve inşaat başka bir müteahhide tamamlatılabilir.
- Yarım kalan işin tamamlanması için yapılan tüm masraflar önceki müteahhitten talep edilebilir.

Somut olayda hangi yolun daha doğru olduğu; sözleşmenin içeriğine, gecikme süresine ve inşaatın mevcut seviyesine göre değişir. Bu süreç teknik olduğu için arsa sahiplerinin hak kaybı yaşamaması adına profesyonel destek alınması önemlidir.`,
    },
    {
      question:
        "Hisseli bir taşınmazımız var. Diğer ortaklarla anlaşamıyoruz. Bu durumda taşınmazı nasıl satabilir veya paylaşabiliriz? Tek başıma işlem yapabilir miyim?",
      answer: `Taşınmazın hangi mülkiyet türüne tabi olduğu, tek başına işlem yapıp yapamayacağınızı belirler.

- Paylı mülkiyet: Herkesin payı bellidir ve bu nedenle paydaş, kendi payını tek başına devredebilir; ancak bu tasarruf sadece kendi payını kapsar ve tüm taşınmaz üzerinde yetki vermez.
- Elbirliği mülkiyeti: Paylar belirli olmadığından ortakların birlikte hareket etmesi zorunludur; bir ortak kendi hissesini tek başına satamaz veya devredemez.

Ortakların anlaşamaması nedeniyle satış veya paylaşım yapılamıyorsa çözüm, ortaklığın giderilmesi (izale-i şuyu) davasıdır. Mahkeme önce taşınmazın fiilen taksiminin mümkün olup olmadığını değerlendirir; taksim mümkünse bölüştürme yapılır, teknik olarak mümkün değilse taşınmaz ihale yoluyla satışa çıkarılır ve satış bedeli ortaklara payları oranında dağıtılır. Bu yolla tıkanıklık giderilir ve herkes taşınmazdaki hakkı oranında parasal karşılığını almış olur.`,
    },
    {
      question:
        "Müteahhitle yazılı bir sözleşme yaptım, daireyi aldım ama inşaat bittiği hâlde teslim etmiyor. Ne yapabilirim?",
      answer: `Taşınmaz satışları kanunen şekle tabiidir ve normalde geçerli olabilmesi için resmi şekilde yapılması gerekir. Ancak tüketiciyi koruyan düzenlemeler sayesinde, müteahhit ile yapılan adi yazılı sözleşmeler çoğu durumda ön ödemeli konut satış sözleşmesi olarak kabul edilir ve satıcının şekle aykırılık iddiasıyla sorumluluktan kaçınmasına izin verilmez.

Müteahhit daireyi teslim etmezse, tüketici tapu iptal ve tescil davası açarak hem sözleşmenin geçerliliğinin tanınmasını hem de bağımsız bölümün kendi adına tescilini talep edebilir. Bu süreç teknik ve ayrıntılı olduğundan, hem sözleşme yapılmadan önce hem de uyuşmazlık ortaya çıktığında hak kaybı yaşamamak için gayrimenkul alanında uzman bir avukattan destek alınması büyük önem taşır.`,
    },
    {
      question:
        "Birine verdiğim vekâlet kötüye kullanılarak taşınmazım başkasına devredilmiş. Böyle bir durumda ne yapabilirim?",
      answer: `Vekâletin kötüye kullanılması hâlinde, yapılan işlem hukuken geçersiz sayılabileceği için tapu iptal ve tescil davası açılması mümkündür.

Ancak taşınmazın şu anda kimin üzerinde olduğu, devrin kaç el değiştirdiği ve özellikle sonraki alıcının iyi niyetli olup olmadığı davanın seyrini doğrudan etkiler. Türk hukukunda iyi niyetli üçüncü kişilerin korunması esastır; bu nedenle işlem zinciri dikkatle incelenmeli, vekâletnamenin kapsamı ve kötüye kullanma olgusu somut delillerle ortaya konmalıdır. Süreç teknik olduğundan, hak kaybına uğramamak için uzman bir avukattan destek alınması önemlidir.`,
    },
    {
      question:
        "Taşınmazımın imar planında konut alanından park, yol, okul gibi bir donatı alanına dönüştürüldüğünü ya da imar uygulamasında hukuka aykırı bir değişiklik yapıldığını düşünüyorum. Bu durumda ne yapabilirim?",
      answer: `İmar planının taşınmazınızı konut alanından park, yol, okul gibi bir donatı alanına dönüştürmesi veya yapılan imar uygulamasının hukuka aykırı şekilde yer değiştirme, düzenleme hatası ya da mülkiyet hakkını ölçüsüz biçimde kısıtlama sonucunu doğurması hâlinde, öncelikle işlemin hukuka uygunluğu teknik ve hukuki açıdan incelenir; aykırılık tespit edilirse ilgili imar planının veya imar uygulamasının iptali talebiyle dava açılabilir.

Bu tür davalar şehir plancılığı ilkeleri, kamu yararı, eşitlik ve ölçülülük gibi teknik kriterler içerdiğinden, hem plan kararının hem de taşınmaz üzerindeki etkisinin uzman raporlarıyla ortaya konulması gerekir. Bu nedenle sürecin başından itibaren gayrimenkul ve imar hukuku alanında deneyimli bir avukatla çalışmak, davanın sağlıklı şekilde yürütülmesi için önemlidir.`,
    },
    {
      question:
        "Kadastro yenilemesi (22/a uygulaması) sonrasında taşınmazımın yüzölçümünde azalma olduğunu fark ettim. Bu durumda ne yapabilirim?",
      answer: `Kadastro yenilemesi sonrasında taşınmazın yüzölçümünde eksilme görülmesi hâlinde öncelikle azalmanın kaynağı teknik olarak belirlenmelidir; bunun için eski–yeni kadastro paftaları, ölçüm belgeleri ve sınırlandırma tutanakları uzman harita mühendisleri ve bu konuda deneyimli avukatlar tarafından karşılaştırılır.

- Eğer yüzölçüm kaybı kadastro yenilemesindeki ölçüm/tespit hatalarından kaynaklanıyorsa, bu durum tapu sicilinin hatalı tutulmasından doğan zarar niteliğindedir ve TMK m. 1007 uyarınca Devlete karşı tazminat davası açılır; tazminat taşınmazın dava tarihi itibarıyla emsal satışlara göre gerçek değeri üzerinden hesaplanır.
- Buna karşılık azalma komşu parseller lehine hatalı sınır kaymasından doğmuşsa, bu kez ilgili komşu parsele karşı tapu iptal ve tescil davası açılması gerekir.

Bu nedenle kaybın kaynağının doğru tespiti sürecin en kritik aşamasıdır ve teknik-hukuki incelemenin uzmanlık gerektirmesi sebebiyle bu tür durumlarda profesyonel destek alınması önemlidir.`,
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
  phone: "+905340181933",
  phoneDisplay: "+90 (534) 018 19 33",
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
};
