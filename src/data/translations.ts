export interface TranslationStrings {
  siteTitle: string;
  siteSubtitle: string;
  siteBadge: string;
  searchPlaceholder: string;
  allAuthorities: string;
  allCategories: string;
  filterByAuthority: string;
  filterByCategory: string;
  filterByStatus: string;
  resetFilters: string;
  resultsCount: string;
  noResultsTitle: string;
  noResultsDesc: string;
  officialSourceBtn: string;
  whoIsAffected: string;
  whatToDoNow: string;
  safeVerificationLabel: string;
  safeBannerNotice: string;
  whatItMeansHeading: string;
  whatItMeansSubheading: string;
  officialSourcesHeading: string;
  officialSourcesSubheading: string;
  exportSingleFileBtn: string;
  exportTooltip: string;
  exportSuccessMsg: string;
  readMore: string;
  close: string;
  share: string;
  shareCopied: string;
  quickFacts: string;
  keyPoints: string;
  commonMisconception: string;
  officialAdvice: string;
  emergencyTitle: string;
  contactEmergency: string;
  contactMedical: string;
  contactPolice: string;
  footerDisclaimer: string;
  footerRights: string;
  verifiedOfficialBadge: string;
  navLatestNews: string;
  navWhatItMeans: string;
  navAuthorities: string;
  navEmergency: string;
  navNewsletter: string;
  favoritesTab: string;
  showAllNews: string;
  noFavoritesTitle: string;
  noFavoritesDesc: string;
  addToFavorites: string;
  removeFromFavorites: string;
  langSwitchLabel: string;
  categories: {
    all: string;
    residence_citizenship: string;
    taxes_civil_status: string;
    social_benefits: string;
    work_unemployment: string;
    pensions: string;
    healthcare: string;
    laws_parliament: string;
    daily_travel: string;
  };
  statuses: {
    all: string;
    enacted: string;
    proposal: string;
    procedural: string;
    under_review: string;
  };
}

export const translations: Record<'ar' | 'sv', TranslationStrings> = {
  ar: {
    siteTitle: 'سويدنا الآن',
    siteSubtitle: 'المنصة العربية الموثوقة لمتابعة القوانين، القرارات، وتحديثات الجهات الرسمية السويدية',
    siteBadge: 'تحديثات رسمية موثقة 100%',
    searchPlaceholder: 'ابحث في القرارات، القوانين، الجهات (مثل: الإقامة، الضرائب، الحد الأدنى للراتب، الجنسية)...',
    allAuthorities: 'جميع الجهات الرسمية',
    allCategories: 'جميع المجالات',
    filterByAuthority: 'الجهة الرسمية',
    filterByCategory: 'المجال والتصنيف',
    filterByStatus: 'حالة القرار',
    resetFilters: 'إعادة ضبط الفلاتر',
    resultsCount: 'تحديث وقرار رسمي',
    noResultsTitle: 'لم يتم العثور على قرارات مطابقة للبحث',
    noResultsDesc: 'جرب البحث بكلمات أخرى أو اختر "جميع المجالات" أو "جميع الجهات" لإظهار التحديثات المتاحة.',
    officialSourceBtn: 'المصدر الرسمي للقرار',
    whoIsAffected: 'من يتأثر بهذا القرار؟',
    whatToDoNow: 'ماذا عليك أن تفعل الآن؟',
    safeVerificationLabel: 'صياغة آمنة بحسب المصدر الرسمي',
    safeBannerNotice: 'تنبيه أمان: نحن لا ننشر شائعات أو تسريبات غير مؤكدة. جميع المعلومات مأخوذة مباشرة من المصادر الحكومية السويدية. تحقق دائماً من الرابط الرسمي قبل اتخاذ أي قرار قانوني أو إجرائي.',
    whatItMeansHeading: 'ماذا يعني هذا للمقيم العربي في السويد؟',
    whatItMeansSubheading: 'شروحات مبسطة وعملية لأبرز القوانين والإجراءات التي تهم حياتك اليومية، عملك، وإقامتك في السويد',
    officialSourcesHeading: 'دليل المصادر والجهات السويدية الرسمية',
    officialSourcesSubheading: 'روابط مباشرة وأرقام تواصل معتمدة لكافة المؤسسات والدوائر الحكومية السويدية الثمانية',
    exportSingleFileBtn: 'تحميل الموقع كملف HTML مستقل',
    exportTooltip: 'احفظ الصفحة بالكامل كملف HTML واحد يعمل بدون إنترنت على حاسوبك أو هاتفك',
    exportSuccessMsg: 'تم تجهيز وتنزيل ملف HTML المستقل بنجاح!',
    readMore: 'قراءة التفاصيل والخطوات',
    close: 'إغلاق',
    share: 'مشاركة التحديث',
    shareCopied: 'تم نسخ الرابط!',
    quickFacts: 'حقائق سريعة',
    keyPoints: 'النقاط الجوهرية للقرار:',
    commonMisconception: 'شائعة شائعة وتصحيحها:',
    officialAdvice: 'النصيحة القانونية المعتمدة:',
    emergencyTitle: 'أرقام الطوارئ والمساعدة الرسمية في السويد',
    contactEmergency: '112 للطوارئ والإنقاذ العاجل',
    contactMedical: '1177 للاستشارات الطبية وحجز المستوصف',
    contactPolice: '114 14 للشرطة في الحالات غير الطارئة',
    footerDisclaimer: 'موقع "سويدنا الآن" هو مركز إعلامي توثيقي مستقل للمقيمين والناطقين بالعربية في مملكة السويد. يعتمد الموقع حصراً على الوثائق والمصادر الحكومية الرسمية (Riksdagen, Regeringen, Migrationsverket, Skatteverket, Försäkringskassan, Arbetsförmedlingen, 1177). لا يقدم الموقع استشارات قانونية خاصة ملزمة، ويُوصى دائماً بمراجعة الجهة المختصة أو محامٍ معتمد.',
    footerRights: 'جميع الحقوق محفوظة © سويدنا الآن - Sverige Nu',
    verifiedOfficialBadge: 'مصدر حكومي معتمد',
    navLatestNews: 'أحدث القرارات',
    navWhatItMeans: 'ماذا يعني هذا لي؟',
    navAuthorities: 'المصادر الرسمية',
    navEmergency: 'أرقام الطوارئ',
    navNewsletter: 'النشرة الأسبوعية',
    favoritesTab: 'المفضلة المحفوظة',
    showAllNews: 'عرض كل القرارات',
    noFavoritesTitle: 'لا توجد أخبار محفوظة في المفضلة بعد',
    noFavoritesDesc: 'يمكنك حفظ أي قرار أو تحديث ترغب بمراجعته لاحقاً بالضغط على أيقونة القلب في بطاقة الخبر.',
    addToFavorites: 'حفظ في المفضلة',
    removeFromFavorites: 'إزالة من المفضلة',
    langSwitchLabel: 'Byt till Svenska',
    categories: {
      all: 'جميع المجالات',
      residence_citizenship: 'الهجرة والإقامة',
      taxes_civil_status: 'الضرائب والسجل المدني',
      social_benefits: 'التأمينات الاجتماعية',
      work_unemployment: 'العمل والبطالة',
      pensions: 'التقاعد والمعاشات',
      healthcare: 'الصحة والرعاية 1177',
      laws_parliament: 'القوانين والبرلمان',
      daily_travel: 'السفر والحياة اليومية'
    },
    statuses: {
      all: 'جميع الحالات',
      enacted: 'قرار نافذ رسمياً',
      proposal: 'مقترح قيد الدراسة',
      procedural: 'تحديث تنظيمي إجرائي',
      under_review: 'قيد المراجعة البرلمانية'
    }
  },
  sv: {
    siteTitle: 'Sverige Nu',
    siteSubtitle: 'Officiella beslut, lagändringar och myndighetsuppdateringar i Sverige på arabiska och svenska',
    siteBadge: '100% Verifierade Myndighetskällor',
    searchPlaceholder: 'Sök bland beslut, lagar, myndigheter (t.ex. arbetstillstånd, skatt, medborgarskap)...',
    allAuthorities: 'Alla myndigheter',
    allCategories: 'Alla områden',
    filterByAuthority: 'Myndighet',
    filterByCategory: 'Kategori och område',
    filterByStatus: 'Beslutets status',
    resetFilters: 'Återställ filter',
    resultsCount: 'uppdateringar och beslut',
    noResultsTitle: 'Inga beslut matchar din sökning',
    noResultsDesc: 'Prova andra sökord eller välj "Alla områden" och "Alla myndigheter".',
    officialSourceBtn: 'Officiell källa till beslutet',
    whoIsAffected: 'Vem berörs av beslutet?',
    whatToDoNow: 'Vad behöver du göra nu?',
    safeVerificationLabel: 'Verifierad officiell källa',
    safeBannerNotice: 'Säkerhetsmeddelande: Vi publicerar inga obekräftade rykten. All information inhämtas direkt från officiella svenska myndigheter. Kontrollera alltid den officiella länken före juridiska beslut.',
    whatItMeansHeading: 'Vad betyder detta för dig i Sverige?',
    whatItMeansSubheading: 'Tydliga och praktiska förklaringar av lagar och regler som berör vardag, arbete och uppehållstillstånd i Sverige',
    officialSourcesHeading: 'Officiella svenska myndighetskällor',
    officialSourcesSubheading: 'Direktlänkar och kontaktuppgifter till Sveriges åtta centrala myndigheter och samhällsorgan',
    exportSingleFileBtn: 'Ladda ner webbplatsen som fristående HTML',
    exportTooltip: 'Spara hela webbplatsen som en enda offline-HTML-fil för dator och mobil',
    exportSuccessMsg: 'Den fristående HTML-filen har genererats och laddats ner!',
    readMore: 'Läs detaljer och åtgärder',
    close: 'Stäng',
    share: 'Dela uppdatering',
    shareCopied: 'Länk kopierad!',
    quickFacts: 'Snabbfakta',
    keyPoints: 'Viktigaste punkterna:',
    commonMisconception: 'Vanlig missuppfattning och rättelse:',
    officialAdvice: 'Officiellt och praktiskt råd:',
    emergencyTitle: 'Viktiga telefonnummer och samhällsservice i Sverige',
    contactEmergency: '112 vid akut nödsituation',
    contactMedical: '1177 för sjukvårdsrådgivning dygnet runt',
    contactPolice: '114 14 för icke-akuta polisärenden',
    footerDisclaimer: 'Sverige Nu är en oberoende informationsportal för arabisktalande boende i Sverige. Plattformen baseras strikt på officiella källor (Riksdagen, Regeringen, Migrationsverket, Skatteverket, Försäkringskassan, Arbetsförmedlingen, 1177). Portalen ersätter inte juridisk rådgivning.',
    footerRights: 'Alla rättigheter förbehållna © Sverige Nu - سويدنا الآن',
    verifiedOfficialBadge: 'Officiell Myndighetskälla',
    navLatestNews: 'Senaste beslut',
    navWhatItMeans: 'Vad betyder det för mig?',
    navAuthorities: 'Officiella källor',
    navEmergency: 'Viktiga nummer',
    navNewsletter: 'Veckobrev',
    favoritesTab: 'Sparade favoriter',
    showAllNews: 'Visa alla beslut',
    noFavoritesTitle: 'Inga sparade favoriter ännu',
    noFavoritesDesc: 'Klicka på hjärtikonen på valfritt beslutskort för att spara uppdateringen och läsa den senare.',
    addToFavorites: 'Spara som favorit',
    removeFromFavorites: 'Ta bort från favoriter',
    langSwitchLabel: 'التبديل إلى العربية',
    categories: {
      all: 'Alla områden',
      residence_citizenship: 'Migration & Uppehållstillstånd',
      taxes_civil_status: 'Skatt & Folkbokföring',
      social_benefits: 'Socialförsäkring',
      work_unemployment: 'Arbete & Arbetsförmedling',
      pensions: 'Pensioner',
      healthcare: 'Hälsa & Sjukvård 1177',
      laws_parliament: 'Lagar & Riksdagen',
      daily_travel: 'Resor & Vardagsliv'
    },
    statuses: {
      all: 'Alla statusar',
      enacted: 'Gällande lag & bestämmelse',
      proposal: 'Förslag under utredning',
      procedural: 'Rutinändring / Handläggning',
      under_review: 'Riksdagsbehandling pågår'
    }
  }
};
