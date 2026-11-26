
// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}


// ===============================
// LANGUAGE TRANSLATIONS
// ===============================

const translations = {
  ja: {
    home: "ホーム", story: "私の物語", hometown: "故郷", culture: "文化",
    eyebrow: "私のルーツを紹介します",
    heroTitle: "美しい <span>バングラデシュ</span>",
    heroSubtitle: "私の故郷、私の誇り",
    heroDescription: "自然、文化、そして人々の温かさ。私の大切な故郷バングラデシュを紹介します。",
    discover: "もっと見る", roots: "私のルーツ",
    homeland: "私の故郷について",
    homelandText1: "バングラデシュは南アジアにある美しい国です。豊かな自然、たくさんの川、緑の田園風景で知られています。",
    homelandText2: "人々は温かく、伝統や文化を大切にしています。",
    beautifulHometown: "私の故郷・ボラ",
    bholaText1: "ボラはバングラデシュ南部にある、国内最大の島です。バリサル管区に属し、メグナ川とテトゥリア川に囲まれています。",
    bholaText2: "ボラには美しい川、緑の田畑、ヤシの木、そして静かな村があります。",
    bholaText3: "ククリ・ムクリやジャコブタワーなど、訪れてみたい場所もあります。",
    traditions: "文化と伝統", cultureTitle: "バングラデシュの文化",
    nature: "美しい自然",
    natureText: "大きな川、緑の田畑、たくさんの木々。ボラの自然は私の心を落ち着かせてくれます。",
    food: "伝統料理",
    foodText: "魚、ヒルサ、エビ、ルイ、カトラなど、バングラデシュにはおいしい料理がたくさんあります。",
    people: "温かい人々",
    peopleText: "家族や友人、地域の人々とのつながりは、私にとって大切な宝物です。",
    twoCountries: "二つの国、二つの思い出",
    japan: "日本での生活",
    japanText: "現在、私は日本でITを勉強しています。新しい文化や技術を学びながら、将来の夢に向かって頑張っています。",
    visitJapan: "日本について見る",
    backHome: "ホームに戻る", goHome: "ホームへ",
    footerText: "私の故郷と大切な思い出",
    backToHome: "ホームページに戻る"
  },

  en: {
    home: "Home", story: "My Story", hometown: "Hometown", culture: "Culture",
    eyebrow: "Discover my roots",
    heroTitle: "Beautiful <span>Bangladesh</span>",
    heroSubtitle: "My homeland, my pride",
    heroDescription: "Nature, culture, and warm-hearted people. Welcome to my beautiful homeland, Bangladesh.",
    discover: "Discover More", roots: "My Roots",
    homeland: "About My Homeland",
    homelandText1: "Bangladesh is a beautiful country in South Asia. It is known for its rich nature, many rivers, and green landscapes.",
    homelandText2: "Its people are warm and welcoming, and they value their traditions and culture.",
    beautifulHometown: "My Hometown, Bhola",
    bholaText1: "Bhola is the largest island in Bangladesh, located in the south. It belongs to Barisal Division and lies between the Meghna and Tetulia rivers.",
    bholaText2: "Bhola has beautiful rivers, green fields, coconut trees, and peaceful villages.",
    bholaText3: "Places like Char Kukri Mukri and Jacob Tower are wonderful places to visit.",
    traditions: "Culture & Traditions", cultureTitle: "Bangladeshi Culture",
    nature: "Beautiful Nature",
    natureText: "Wide rivers, green fields, and many trees. The natural beauty of Bhola brings peace to my heart.",
    food: "Traditional Food",
    foodText: "Bangladesh has many delicious foods, including fish, hilsa, shrimp, Rui, and Katla.",
    people: "Warm-hearted People",
    peopleText: "My family, friends, and community are precious parts of my life.",
    twoCountries: "Two Countries, Two Memories",
    japan: "Life in Japan",
    japanText: "I am currently studying IT in Japan. I am learning about new cultures and technology while working toward my dreams.",
    visitJapan: "Discover Japan",
    backHome: "Back to Home", goHome: "Go Home",
    footerText: "My homeland and precious memories",
    backToHome: "Return to Homepage"
  },

  bn: {
    home: "হোম", story: "আমার গল্প", hometown: "আমার জন্মভূমি", culture: "সংস্কৃতি",
    eyebrow: "আমার শিকড়কে জানুন",
    heroTitle: "সুন্দর <span>বাংলাদেশ</span>",
    heroSubtitle: "আমার দেশ, আমার গর্ব",
    heroDescription: "প্রকৃতি, সংস্কৃতি এবং মানুষের ভালোবাসা। পরিচিত হোন আমার প্রিয় জন্মভূমি বাংলাদেশের সঙ্গে।",
    discover: "আরও জানুন", roots: "আমার শিকড়",
    homeland: "আমার জন্মভূমি সম্পর্কে",
    homelandText1: "বাংলাদেশ দক্ষিণ এশিয়ার একটি সুন্দর দেশ। নদী, সবুজ প্রকৃতি এবং সমৃদ্ধ ঐতিহ্যের জন্য দেশটি পরিচিত।",
    homelandText2: "এ দেশের মানুষ অতিথিপরায়ণ এবং নিজেদের সংস্কৃতি ও ঐতিহ্যকে ভালোবাসে।",
    beautifulHometown: "আমার জন্মভূমি ভোলা",
    bholaText1: "ভোলা বাংলাদেশের দক্ষিণাঞ্চলে অবস্থিত দেশের সর্ববৃহৎ দ্বীপ। এটি বরিশাল বিভাগের অন্তর্গত এবং মেঘনা ও তেঁতুলিয়া নদীর মাঝখানে অবস্থিত।",
    bholaText2: "ভোলায় রয়েছে সুন্দর নদী, সবুজ মাঠ, নারকেল গাছ এবং শান্ত গ্রাম।",
    bholaText3: "চর কুকরি-মুকরি ও জ্যাকব টাওয়ার ভোলার দর্শনীয় স্থানগুলোর মধ্যে অন্যতম।",
    traditions: "সংস্কৃতি ও ঐতিহ্য", cultureTitle: "বাংলাদেশের সংস্কৃতি",
    nature: "সুন্দর প্রকৃতি",
    natureText: "বিস্তীর্ণ নদী, সবুজ মাঠ আর অসংখ্য গাছপালা। ভোলার প্রকৃতি আমার মনকে শান্ত করে।",
    food: "ঐতিহ্যবাহী খাবার",
    foodText: "বাংলাদেশের জনপ্রিয় খাবারের মধ্যে রয়েছে মাছ, ইলিশ, চিংড়ি, রুই ও কাতলা।",
    people: "অতিথিপরায়ণ মানুষ",
    peopleText: "পরিবার, বন্ধু এবং এলাকার মানুষের সঙ্গে সম্পর্ক আমার জীবনের অমূল্য সম্পদ।",
    twoCountries: "দুটি দেশ, দুটি স্মৃতি",
    japan: "জাপানে জীবন",
    japanText: "বর্তমানে আমি জাপানে আইটি বিষয়ে পড়াশোনা করছি। নতুন সংস্কৃতি ও প্রযুক্তি শিখে নিজের স্বপ্নের দিকে এগিয়ে যাচ্ছি।",
    visitJapan: "জাপান সম্পর্কে জানুন",
    backHome: "হোমে ফিরে যান", goHome: "হোমে যান",
    footerText: "আমার জন্মভূমি ও প্রিয় স্মৃতি",
    backToHome: "মূল পেজে ফিরে যান"
  },

  hi: {
    home: "होम", story: "मेरी कहानी", hometown: "मेरा गृहनगर", culture: "संस्कृति",
    eyebrow: "मेरी जड़ों को जानें",
    heroTitle: "सुंदर <span>बांग्लादेश</span>",
    heroSubtitle: "मेरा देश, मेरा गर्व",
    heroDescription: "प्रकृति, संस्कृति और लोगों का अपनापन। मेरे सुंदर देश बांग्लादेश में आपका स्वागत है।",
    discover: "और जानें", roots: "मेरी जड़ें",
    homeland: "मेरे देश के बारे में",
    homelandText1: "बांग्लादेश दक्षिण एशिया का एक सुंदर देश है। यह अपनी नदियों, हरियाली और समृद्ध प्रकृति के लिए जाना जाता है।",
    homelandText2: "यहाँ के लोग मिलनसार हैं और अपनी परंपराओं तथा संस्कृति को महत्व देते हैं।",
    beautifulHometown: "मेरा गृहनगर भोला",
    bholaText1: "भोला बांग्लादेश के दक्षिण में स्थित देश का सबसे बड़ा द्वीप है। यह बरिशाल विभाग में मेघना और तेतुलिया नदियों के बीच स्थित है।",
    bholaText2: "भोला में सुंदर नदियाँ, हरे खेत, नारियल के पेड़ और शांत गाँव हैं।",
    bholaText3: "चार कुकरी मुकरी और जैकब टावर यहाँ के दर्शनीय स्थान हैं।",
    traditions: "संस्कृति और परंपराएँ", cultureTitle: "बांग्लादेश की संस्कृति",
    nature: "सुंदर प्रकृति",
    natureText: "विशाल नदियाँ, हरे खेत और पेड़-पौधे। भोला की प्राकृतिक सुंदरता मन को शांति देती है।",
    food: "पारंपरिक भोजन",
    foodText: "बांग्लादेश में मछली, हिल्सा, झींगा, रोहू और कतला जैसे स्वादिष्ट भोजन मिलते हैं।",
    people: "मिलनसार लोग",
    peopleText: "मेरा परिवार, दोस्त और समुदाय मेरे जीवन की अनमोल संपत्ति हैं।",
    twoCountries: "दो देश, दो यादें",
    japan: "जापान में जीवन",
    japanText: "मैं वर्तमान में जापान में आईटी की पढ़ाई कर रहा हूँ। नई संस्कृति और तकनीक सीखते हुए अपने सपनों की ओर बढ़ रहा हूँ।",
    visitJapan: "जापान के बारे में जानें",
    backHome: "होम पर वापस जाएँ", goHome: "होम जाएँ",
    footerText: "मेरा देश और अनमोल यादें",
    backToHome: "मुख्य पृष्ठ पर लौटें"
  },

  ar: {
    home: "الرئيسية", story: "قصتي", hometown: "مسقط رأسي", culture: "الثقافة",
    eyebrow: "اكتشف جذوري",
    heroTitle: "بنغلاديش <span>الجميلة</span>",
    heroSubtitle: "وطني، مصدر فخري",
    heroDescription: "الطبيعة والثقافة وطيبة الناس. مرحباً بكم في وطني الجميل بنغلاديش.",
    discover: "اكتشف المزيد", roots: "جذوري",
    homeland: "عن وطني",
    homelandText1: "بنغلاديش بلد جميل في جنوب آسيا، تشتهر بأنهارها الكثيرة وطبيعتها الخضراء.",
    homelandText2: "شعبها ودود ويعتز بتقاليده وثقافته.",
    beautifulHometown: "مسقط رأسي، بولا",
    bholaText1: "بولا هي أكبر جزيرة في بنغلاديش، وتقع في الجنوب بين نهري ميغنا وتيتوليا ضمن منطقة باريسال.",
    bholaText2: "تتميز بولا بالأنهار الجميلة والحقول الخضراء وأشجار جوز الهند والقرى الهادئة.",
    bholaText3: "تُعد شار كوكري موكري وبرج جاكوب من الأماكن الجميلة للزيارة.",
    traditions: "الثقافة والتقاليد", cultureTitle: "ثقافة بنغلاديش",
    nature: "الطبيعة الجميلة",
    natureText: "الأنهار الواسعة والحقول الخضراء والأشجار الكثيرة. جمال بولا الطبيعي يمنحني السلام.",
    food: "الأطعمة التقليدية",
    foodText: "تشتهر بنغلاديش بأطباق السمك والهلسا والروبيان والروهي والكاتلا.",
    people: "شعب طيب",
    peopleText: "عائلتي وأصدقائي ومجتمعي من أثمن الأشياء في حياتي.",
    twoCountries: "بلدان وذكريان",
    japan: "الحياة في اليابان",
    japanText: "أدرس حالياً تقنية المعلومات في اليابان، وأتعلم ثقافات وتقنيات جديدة لتحقيق أحلامي.",
    visitJapan: "اكتشف اليابان",
    backHome: "العودة للرئيسية", goHome: "اذهب للرئيسية",
    footerText: "وطني وذكرياتي الثمينة",
    backToHome: "العودة إلى الصفحة الرئيسية"
  },

  zh: {
    home: "首页", story: "我的故事", hometown: "家乡", culture: "文化",
    eyebrow: "了解我的根源",
    heroTitle: "美丽的<span>孟加拉国</span>",
    heroSubtitle: "我的祖国，我的骄傲",
    heroDescription: "自然、文化和热情的人们。欢迎来到我美丽的祖国孟加拉国。",
    discover: "了解更多", roots: "我的根源",
    homeland: "关于我的祖国",
    homelandText1: "孟加拉国是南亚一个美丽的国家，以众多河流、绿色自然风光和丰富的文化而闻名。",
    homelandText2: "这里的人们热情友好，非常重视传统和文化。",
    beautifulHometown: "我的家乡——博拉",
    bholaText1: "博拉是孟加拉国南部最大的岛屿，属于巴里萨尔专区，位于梅克纳河和特图利亚河之间。",
    bholaText2: "博拉拥有美丽的河流、绿色田野、椰子树和宁静的村庄。",
    bholaText3: "库克里穆克里岛和雅各布塔是值得参观的地方。",
    traditions: "文化与传统", cultureTitle: "孟加拉国文化",
    nature: "美丽的自然",
    natureText: "宽阔的河流、绿色的田野和茂盛的树木。博拉的自然风光让我感到平静。",
    food: "传统美食",
    foodText: "孟加拉国有许多美食，包括鱼、希尔萨鱼、虾、罗希鱼和卡特拉鱼。",
    people: "热情的人们",
    peopleText: "家人、朋友和社区是我生命中珍贵的财富。",
    twoCountries: "两个国家，两段回忆",
    japan: "在日本的生活",
    japanText: "我目前在日本学习IT，在学习新文化和技术的同时努力实现自己的梦想。",
    visitJapan: "了解日本",
    backHome: "返回首页", goHome: "回到首页",
    footerText: "我的祖国与珍贵回忆",
    backToHome: "返回主页"
  },

  ko: {
    home: "홈", story: "나의 이야기", hometown: "고향", culture: "문화",
    eyebrow: "나의 뿌리를 알아보세요",
    heroTitle: "아름다운 <span>방글라데시</span>",
    heroSubtitle: "나의 조국, 나의 자부심",
    heroDescription: "자연과 문화, 그리고 따뜻한 사람들. 아름다운 나의 조국 방글라데시에 오신 것을 환영합니다.",
    discover: "더 알아보기", roots: "나의 뿌리",
    homeland: "나의 조국에 대하여",
    homelandText1: "방글라데시는 남아시아에 있는 아름다운 나라입니다. 많은 강과 푸른 자연으로 유명합니다.",
    homelandText2: "사람들은 친절하며 전통과 문화를 소중히 여깁니다.",
    beautifulHometown: "나의 고향, 볼라",
    bholaText1: "볼라는 방글라데시 남부에 있는 나라에서 가장 큰 섬입니다. 바리살 지역에 속하며 메그나강과 테툴리아강 사이에 있습니다.",
    bholaText2: "볼라에는 아름다운 강과 푸른 들판, 코코넛 나무와 평화로운 마을이 있습니다.",
    bholaText3: "차르 쿠크리 무크리와 제이콥 타워는 방문하기 좋은 명소입니다.",
    traditions: "문화와 전통", cultureTitle: "방글라데시 문화",
    nature: "아름다운 자연",
    natureText: "넓은 강과 푸른 들판, 많은 나무들. 볼라의 자연은 제 마음을 편안하게 해줍니다.",
    food: "전통 음식",
    foodText: "방글라데시에는 생선, 힐사, 새우, 루이, 카틀라 등 맛있는 음식이 많습니다.",
    people: "따뜻한 사람들",
    peopleText: "가족과 친구, 지역 공동체는 제 삶에서 소중한 존재입니다.",
    twoCountries: "두 나라, 두 가지 추억",
    japan: "일본에서의 생활",
    japanText: "저는 현재 일본에서 IT를 공부하고 있습니다. 새로운 문화와 기술을 배우며 꿈을 향해 나아가고 있습니다.",
    visitJapan: "일본 알아보기",
    backHome: "홈으로 돌아가기", goHome: "홈으로",
    footerText: "나의 고향과 소중한 추억",
    backToHome: "홈페이지로 돌아가기"
  },

  fr: {
    home: "Accueil", story: "Mon histoire", hometown: "Ma ville natale", culture: "Culture",
    eyebrow: "Découvrez mes origines",
    heroTitle: "Le magnifique <span>Bangladesh</span>",
    heroSubtitle: "Mon pays, ma fierté",
    heroDescription: "La nature, la culture et la gentillesse des habitants. Bienvenue dans mon beau pays, le Bangladesh.",
    discover: "En savoir plus", roots: "Mes origines",
    homeland: "À propos de mon pays",
    homelandText1: "Le Bangladesh est un magnifique pays d'Asie du Sud, connu pour ses nombreuses rivières et ses paysages verdoyants.",
    homelandText2: "Ses habitants sont chaleureux et attachés à leurs traditions et à leur culture.",
    beautifulHometown: "Ma ville natale, Bhola",
    bholaText1: "Bhola est la plus grande île du Bangladesh, située au sud du pays, entre les rivières Meghna et Tetulia, dans la division de Barisal.",
    bholaText2: "Bhola possède de belles rivières, des champs verdoyants, des cocotiers et des villages paisibles.",
    bholaText3: "Char Kukri Mukri et la tour Jacob sont de beaux endroits à visiter.",
    traditions: "Culture et traditions", cultureTitle: "La culture bangladaise",
    nature: "Une belle nature",
    natureText: "De grandes rivières, des champs verts et de nombreux arbres. La nature de Bhola m'apporte la paix.",
    food: "Cuisine traditionnelle",
    foodText: "Le Bangladesh propose de délicieux plats à base de poisson, de hilsa, de crevettes, de rui et de katla.",
    people: "Des gens chaleureux",
    peopleText: "Ma famille, mes amis et ma communauté sont très précieux pour moi.",
    twoCountries: "Deux pays, deux souvenirs",
    japan: "La vie au Japon",
    japanText: "J'étudie actuellement l'informatique au Japon. Je découvre de nouvelles cultures et technologies pour réaliser mes rêves.",
    visitJapan: "Découvrir le Japon",
    backHome: "Retour à l'accueil", goHome: "Accueil",
    footerText: "Mon pays et mes précieux souvenirs",
    backToHome: "Retour à la page d'accueil"
  },

  ne: {
    home: "गृहपृष्ठ", story: "मेरो कथा", hometown: "मेरो जन्मस्थान", culture: "संस्कृति",
    eyebrow: "मेरो जरा चिन्नुहोस्",
    heroTitle: "सुन्दर <span>बंगलादेश</span>",
    heroSubtitle: "मेरो देश, मेरो गर्व",
    heroDescription: "प्रकृति, संस्कृति र न्यानो मन भएका मानिसहरू। मेरो सुन्दर देश बंगलादेशमा स्वागत छ।",
    discover: "थप जान्नुहोस्", roots: "मेरा जरा",
    homeland: "मेरो देशको बारेमा",
    homelandText1: "बंगलादेश दक्षिण एसियाको सुन्दर देश हो। यो धेरै नदी र हरियालीका लागि प्रसिद्ध छ।",
    homelandText2: "यहाँका मानिसहरू मिलनसार छन् र आफ्नो परम्परा तथा संस्कृतिलाई माया गर्छन्।",
    beautifulHometown: "मेरो जन्मस्थान भोला",
    bholaText1: "भोला बंगलादेशको दक्षिणमा रहेको देशको सबैभन्दा ठूलो टापु हो। यो बरिसाल क्षेत्रमा मेघना र टेटुलिया नदीको बीचमा छ।",
    bholaText2: "भोलामा सुन्दर नदी, हरिया खेत, नरिवलका रूख र शान्त गाउँहरू छन्।",
    bholaText3: "चार कुकरी मुकरी र ज्याकब टावर यहाँका घुम्नलायक ठाउँ हुन्।",
    traditions: "संस्कृति र परम्परा", cultureTitle: "बंगलादेशको संस्कृति",
    nature: "सुन्दर प्रकृति",
    natureText: "ठूला नदी, हरिया खेत र धेरै रूखहरू। भोलाको प्राकृतिक सुन्दरताले मलाई शान्ति दिन्छ।",
    food: "परम्परागत खाना",
    foodText: "बंगलादेशमा माछा, हिल्सा, झिँगा, रुही र कतला जस्ता स्वादिला खाना पाइन्छन्।",
    people: "मायालु मानिसहरू",
    peopleText: "मेरो परिवार, साथीहरू र समुदाय मेरो जीवनका अमूल्य सम्पत्ति हुन्।",
    twoCountries: "दुई देश, दुई सम्झना",
    japan: "जापानको जीवन",
    japanText: "म अहिले जापानमा आईटी पढ्दै छु। नयाँ संस्कृति र प्रविधि सिक्दै आफ्नो सपनातर्फ अघि बढिरहेको छु।",
    visitJapan: "जापानबारे जान्नुहोस्",
    backHome: "गृहपृष्ठमा फर्कनुहोस्", goHome: "गृहपृष्ठ",
    footerText: "मेरो देश र अमूल्य सम्झनाहरू",
    backToHome: "मुख्य पृष्ठमा फर्कनुहोस्"
  },

  vi: {
    home: "Trang chủ", story: "Câu chuyện của tôi", hometown: "Quê hương", culture: "Văn hóa",
    eyebrow: "Khám phá cội nguồn của tôi",
    heroTitle: "<span>Bangladesh</span> xinh đẹp",
    heroSubtitle: "Quê hương tôi, niềm tự hào của tôi",
    heroDescription: "Thiên nhiên, văn hóa và những con người thân thiện. Chào mừng bạn đến với quê hương Bangladesh xinh đẹp của tôi.",
    discover: "Khám phá thêm", roots: "Cội nguồn của tôi",
    homeland: "Về quê hương tôi",
    homelandText1: "Bangladesh là một đất nước xinh đẹp ở Nam Á, nổi tiếng với nhiều dòng sông và cảnh quan xanh tươi.",
    homelandText2: "Người dân thân thiện và luôn trân trọng truyền thống, văn hóa của mình.",
    beautifulHometown: "Quê hương tôi, Bhola",
    bholaText1: "Bhola là hòn đảo lớn nhất Bangladesh, nằm ở phía nam, thuộc vùng Barisal và nằm giữa sông Meghna và sông Tetulia.",
    bholaText2: "Bhola có những dòng sông tuyệt đẹp, cánh đồng xanh, hàng dừa và những ngôi làng yên bình.",
    bholaText3: "Char Kukri Mukri và tháp Jacob là những địa điểm đáng ghé thăm.",
    traditions: "Văn hóa và truyền thống", cultureTitle: "Văn hóa Bangladesh",
    nature: "Thiên nhiên tươi đẹp",
    natureText: "Những dòng sông rộng lớn, cánh đồng xanh và nhiều cây cối. Thiên nhiên Bhola mang lại sự bình yên cho tôi.",
    food: "Ẩm thực truyền thống",
    foodText: "Bangladesh có nhiều món ăn ngon như cá, cá hilsa, tôm, cá Rui và cá Katla.",
    people: "Con người thân thiện",
    peopleText: "Gia đình, bạn bè và cộng đồng là những điều quý giá trong cuộc sống của tôi.",
    twoCountries: "Hai đất nước, hai kỷ niệm",
    japan: "Cuộc sống ở Nhật Bản",
    japanText: "Hiện tại tôi đang học CNTT tại Nhật Bản. Tôi học hỏi văn hóa và công nghệ mới để tiến gần hơn đến ước mơ của mình.",
    visitJapan: "Khám phá Nhật Bản",
    backHome: "Về trang chủ", goHome: "Trang chủ",
    footerText: "Quê hương và những kỷ niệm quý giá",
    backToHome: "Quay lại trang chủ"
  },

  si: {
    home: "මුල් පිටුව", story: "මගේ කතාව", hometown: "මගේ ගම", culture: "සංස්කෘතිය",
    eyebrow: "මගේ මුල් ගැන දැනගන්න",
    heroTitle: "සුන්දර <span>බංග්ලාදේශය</span>",
    heroSubtitle: "මගේ මව්බිම, මගේ ආඩම්බරය",
    heroDescription: "ස්වභාවධර්මය, සංස්කෘතිය සහ ආදරණීය මිනිසුන්. මගේ සුන්දර මව්බිම වන බංග්ලාදේශයට සාදරයෙන් පිළිගනිමු.",
    discover: "තවත් දැනගන්න", roots: "මගේ මුල්",
    homeland: "මගේ මව්බිම ගැන",
    homelandText1: "බංග්ලාදේශය දකුණු ආසියාවේ පිහිටි සුන්දර රටකි. එය ගංගා සහ හරිත පරිසරය සඳහා ප්‍රසිද්ධය.",
    homelandText2: "එහි ජනතාව මිත්‍රශීලී වන අතර තම සම්ප්‍රදායන් හා සංස්කෘතිය අගය කරති.",
    beautifulHometown: "මගේ ගම, භෝලා",
    bholaText1: "භෝලා යනු බංග්ලාදේශයේ දකුණේ පිහිටි විශාලතම දූපතයි. එය බරිසල් ප්‍රදේශයට අයත් වන අතර මේඝනා සහ ටෙටුලියා ගංගා අතර පිහිටා ඇත.",
    bholaText2: "භෝලාහි සුන්දර ගංගා, හරිත කෙත්වතු, පොල් ගස් සහ නිස්කලංක ගම්මාන ඇත.",
    bholaText3: "චාර් කුක්රි මුක්රි සහ ජේකබ් කුළුණ නැරඹීමට සුදුසු ස්ථාන වේ.",
    traditions: "සංස්කෘතිය සහ සම්ප්‍රදායන්", cultureTitle: "බංග්ලාදේශ සංස්කෘතිය",
    nature: "සුන්දර ස්වභාවධර්මය",
    natureText: "විශාල ගංගා, හරිත කෙත්වතු සහ ගස්. භෝලාහි ස්වභාවික සුන්දරත්වය මගේ සිතට සැනසීමක් ගෙන දෙයි.",
    food: "සාම්ප්‍රදායික ආහාර",
    foodText: "බංග්ලාදේශයේ මාළු, හිල්සා, ඉස්සන්, රුයි සහ කට්ලා වැනි රසවත් ආහාර තිබේ.",
    people: "ආදරණීය මිනිසුන්",
    peopleText: "මගේ පවුල, මිතුරන් සහ ප්‍රජාව මගේ ජීවිතයේ වටිනාම දේවල් වේ.",
    twoCountries: "රටවල් දෙකක්, මතකයන් දෙකක්",
    japan: "ජපානයේ ජීවිතය",
    japanText: "මම දැනට ජපානයේ තොරතුරු තාක්ෂණය හදාරමින් සිටිමි. නව සංස්කෘතීන් සහ තාක්ෂණය ඉගෙන ගනිමින් මගේ සිහින කරා යමි.",
    visitJapan: "ජපානය ගැන දැනගන්න",
    backHome: "මුල් පිටුවට ආපසු", goHome: "මුල් පිටුවට යන්න",
    footerText: "මගේ මව්බිම සහ වටිනා මතකයන්",
    backToHome: "මුල් පිටුවට ආපසු යන්න"
  }
};


// ===============================
// LANGUAGE SELECTOR
// ===============================

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  const supportedLanguages = Object.keys(translations);
  const storageKey = "jihadBangladeshLanguage";

  function applyLanguage(language) {
    const selectedLanguage = translations[language]
      ? language
      : "ja";

    const words = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;
    document.documentElement.dir =
      selectedLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (words[key] !== undefined) {
        // These translations are fixed strings written in this file.
        element.innerHTML = words[key];
      }
    });

    languageSelect.value = selectedLanguage;
  }

  let savedLanguage = "ja";

  try {
    const saved = localStorage.getItem(storageKey);

    if (saved && supportedLanguages.includes(saved)) {
      savedLanguage = saved;
    }
  } catch (error) {
    console.log("Language preference could not be loaded.");
  }

  applyLanguage(savedLanguage);

  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;

    applyLanguage(selectedLanguage);

    try {
      localStorage.setItem(storageKey, selectedLanguage);
    } catch (error) {
      console.log("Language preference could not be saved.");
    }
  });
}


// ===============================
// ANIMATED BACKGROUND PARTICLES
// ===============================

const canvas = document.getElementById("particles");
const ctx = canvas ? canvas.getContext("2d") : null;

if (canvas && ctx) {
  let particles = [];
  let width = 0;
  let height = 0;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(
      Math.floor(width / 13),
      65
    );

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.35 + 0.1,
      opacity: Math.random() * 0.5 + 0.2
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(69, 214, 173, ${particle.opacity})`;

      ctx.fill();

      if (!reducedMotion) {
        particle.y -= particle.speed;

        if (particle.y < -5) {
          particle.y = height + 5;
          particle.x = Math.random() * width;
        }
      }
    });

    if (!reducedMotion) {
      requestAnimationFrame(drawParticles);
    }
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  drawParticles();
}
