import { PracticalGuide } from '../types';

export const practicalGuides: PracticalGuide[] = [
  {
    id: 'guide-salary-threshold',
    titleAr: 'ماذا يعني رفع شرط الراتب لإقامة العمل (Lönekrav)؟',
    titleSv: 'Vad innebär det höjda lönekravet för arbetstillstånd?',
    topicAr: 'إقامات العمل والرواتب',
    topicSv: 'Arbetstillstånd & Lönekrav',
    summaryAr: 'شرح مبسط لقاعدة الـ 80% من متوسط الرواتب السويدية، وكيفية التأكد من أن وظيفتك وعقدك لا يعرضان إقامتك للخطر.',
    summarySv: 'Enkel sammanfattning av kravet på 80% av medianlönen och hur du säkerställer att din anställning uppfyller kraven.',
    keyPointsAr: [
      'الحد الأدنى محسوب على الراتب الإجمالي (Brutto) قبل خصم الضريبة، ولا تشمل البدلات غير الثابتة مثل ساعات العمل الإضافي غير المضمونة.',
      'الشرط يطبق على تقديم الطلبات الجديدة وتجديد الإقامات الحالية الصادرة لغرض العمل.',
      'هناك استثناءات قانونية لبعض المهن الطبية والأكاديمية والتخصصية النادرة وفق قائمة مصلحة الهجرة.',
      'إذا كان عقدك القديم براتب أقل، يجب توقيع ملحق عقد رسمي مع رب العمل وتقديمه مع كشوفات الرواتب.'
    ],
    keyPointsSv: [
      'Kravet baseras på månatlig bruttolön och räknar inte med osäkra rörliga tillägg.',
      'Gäller både förstagångsansökningar och förlängningar av arbetstillstånd.',
      'Vissa bristyrken har särskilda undantag enligt gällande förordning.',
      'Om din nuvarande lön är lägre behöver anställningsavtalet omförhandlas före förlängning.'
    ],
    commonMisconceptionAr: 'شائعة خاطئة: "الشرط يشمل أصحاب الإقامات الدائمة أو إقامات اللجوء أو لم الشمل". الحقيقة: هذا الشرط ينطبق حصراً على إقامات العمل (Arbetstillstånd) وليس على حاملي الإقامة الدائمة أو المؤقتة الإنسانية.',
    commonMisconceptionSv: 'Missuppfattning: "Gäller alla med uppehållstillstånd". Fakta: Gäller uteslutande arbetstillstånd, inte permanent uppehållstillstånd eller asyl/skyddsstatus.',
    officialAdviceAr: 'تحدث مع صاحب العمل أو نقابتك العمالية قبل 6 أشهر من انتهاء إقامتك لمراجعة عقدك ومطابقته لأحدث شروط مصلحة الهجرة.',
    officialAdviceSv: 'Stäm av din lönenivå med din arbetsgivare och fackförening i god tid före ansökan.',
    authorityId: 'migrationsverket',
    officialUrl: 'https://www.migrationsverket.se/Privatpersoner/Arbeta-i-Sverige/Krav-for-arbetstillstand.html'
  },
  {
    id: 'guide-citizenship-proposals',
    titleAr: 'شروط الجنسية الجديدة: ما هو مؤكد وما هو مجرد مقترح؟',
    titleSv: 'Nya medborgarskapskrav: Vad är gällande lag och vad är förslag?',
    topicAr: 'الجنسية السويدية',
    topicSv: 'Svenskt medborgarskap',
    summaryAr: 'دليل التمييز بين القوانين المطبقة اليوم والمقترحات والتحقيقات الحكومية التي لم يصوت عليها البرلمان بعد.',
    summarySv: 'Guide som skiljer gällande lagstiftning från pågående utredningar och remissförslag.',
    keyPointsAr: [
      'القانون الساري اليوم: يتطلب 5 سنوات إقامة قانونية متصلة (أو 4 سنوات لحاملي صفة لاجئ)، وإقامة دائمة نافذة (PUT)، وحسن السيرة وخلو السجل من الديون لدى Kronofogden.',
      'المقترح قيد الدراسة (SOU): يوصي برفع مدة الإقامة إلى 8 سنوات، واختبار لغة سويدية (مستوى B1 تقريباً)، واختبار ثقافة مجتمعية، وإثبات إعالة ذاتية.',
      'حتى الآن، لا يوجد اختبار لغة مطلوب في طلبات الجنسية التي يتم معالجتها اليوم وفق القانون النافذ.',
      'أي تغيير في القانون يدخل حيز التنفيذ فقط بعد موافقة البرلمان (Riksdagen) وتحديد تاريخ نفاذ معلن مسبقاً.'
    ],
    keyPointsSv: [
      'Gällande lag idag: 5 års hemvist (4 år för flyktingar), permanent uppehållstillstånd samt hederlig vandel utan skulder.',
      'Utredningsförslag: 8 års hemvist, språkprov, samhällskunskapsprov och egenförsörjningskrav.',
      'Inget språktest krävs för ansökningar som prövas enligt gällande lag idag.',
      'Lagändringar blir bindande först efter riksdagsbeslut med fastställt ikraftträdandedatum.'
    ],
    commonMisconceptionAr: 'شائعة: "تم إيقاف منح الجنسية للمهاجرين". الحقيقة: مصلحة الهجرة مستمرة في معالجة طلبات الجنسية يومياً وفق القانون الحالي الساري دون توقف.',
    commonMisconceptionSv: 'Missuppfattning: "Medborgarskap har stoppats". Fakta: Migrationsverket handlägger kontinuerligt ansökningar enligt gällande lagstiftning.',
    officialAdviceAr: 'إذا كنت مستوفياً للشروط الحالية ولديك إقامة دائمة وخمس سنوات إقامة، تقدم بطلبك فوراً ولا تنتظر الشائعات.',
    officialAdviceSv: 'Uppfyller du kraven idag kan du lämna in din ansökan utan att avvakta framtida förslag.',
    authorityId: 'regeringen_riksdagen',
    officialUrl: 'https://www.migrationsverket.se/Privatpersoner/Bli-svensk-medborgare.html'
  },
  {
    id: 'guide-folkbokforing-address',
    titleAr: 'تثبيت العنوان الصحيح لدى مصلحة الضرائب وتجنب الملاحقة القانونية',
    titleSv: 'Korrekt folkbokföring hos Skatteverket och undvikande av lagöverträdelser',
    topicAr: 'السكن والسجل المدني',
    topicSv: 'Bostad & Folkbokföring',
    summaryAr: 'كيف تحمي نفسك من تهمة "جريمة السجل المدني" (Folkbokföringsbrott) وتضمن وصول بريدك الرسمي بشكل صحيح.',
    summarySv: 'Så säkerställer du att din adress är korrekt registrerad och undviker påföljder för folkbokföringsbrott.',
    keyPointsAr: [
      'القانون السويدي يفرض التسجيل في المكان الذي "تبيت فيه معظم لياليك" (Huvudsaklig dygnsvila).',
      'تسجيل عنوانك على شقة صديق أو عنوان شكلي دون سكن حقيقي يعد مخالفة يعاقب عليها القانون بغرامات أو بالسجن.',
      'إذا كنت تستأجر من الباطن (Andra hand)، يحق لك قانونياً تسجيل عنوانك على الشقة مع وضع اسمك على الباب أو إضافة c/o.',
      'تغيير العنوان مجاني تماماً بنسبة 100% عبر موقع skatteverket.se بضغطة زر باستخدام BankID.'
    ],
    keyPointsSv: [
      'Lagen kräver att du är folkbokförd där du har din huvudsakliga dygnsvila.',
      'Skenbosättning eller att vara skriven hos bekanta utan att faktiskt bo där kan vara straffbart.',
      'Andrahandshyresgäster ska vara folkbokförda på bostadens lägenhetsnummer.',
      'Flyttanmälan är alltid helt gratis på Skatteverkets officiella hemsida med BankID.'
    ],
    commonMisconceptionAr: 'شائعة: "المؤجر منعني من تسجيل العنوان لذلك أنا معفى من المسؤولية". الحقيقة: المؤجر لا يملك قانوناً منعك من التسجيل، والقانون يحاسبك أنت شخصياً عن صحة عنوانك.',
    commonMisconceptionSv: 'Missuppfattning: "Hyresvärden godkänner inte folkbokföring så jag kan inte skriva mig där". Fakta: Lagen ger hyresvärden ingen rätt att hindra korrekt folkbokföring.',
    officialAdviceAr: 'قم بتفعيل البريد الرقمي الحكومي (مثل Kivra أو Min Myndighetspost) مجاناً حتى تصلك رسائل الدوائر الرسمية فوراً أينما كنت.',
    officialAdviceSv: 'Skaffa digital brevlåda (t.ex. Kivra) för att aldrig missa viktig myndighetspost.',
    authorityId: 'skatteverket',
    officialUrl: 'https://www.skatteverket.se/privat/folkbokforing/flyttaochandradress.html'
  },
  {
    id: 'guide-bostadsbidrag',
    titleAr: 'إعانة السكن للأسر والشباب (Bostadsbidrag): الشروط وطريقة التقديم',
    titleSv: 'Bostadsbidrag från Försäkringskassan: Villkor och beräkning',
    topicAr: 'المساعدات والأسرة',
    topicSv: 'Ekonomiskt stöd & Familj',
    summaryAr: 'تعرف على معايير استحقاق إعانة السكن من صندوق التأمينات، والمبالغ التقديرية، وكيف تتجنب فخ رد الأموال (Återkrav).',
    summarySv: 'Genomgång av villkor för bostadsbidrag och hur du undviker återkrav genom korrekt inkomstanmälan.',
    keyPointsAr: [
      'تستحق الأسر التي لديها أطفال وتعيش في السويد إعانة سكن بناءً على حجم الإيجار، مساحة الشقة، ومستوى الدخل السنوي الإجمالي.',
      'يمكن للشباب بين سن 18 و28 عاماً من ذوي الدخل المنخفض أو الطلاب التقديم أيضاً على إعانة سكن للشباب (Bostadsbidrag till unga).',
      'يتم احتساب الإعانة أولاً بشكل تقديري، ثم تُجرى مراجعة سنوية نهائية (Avstämning) بعد تقديم الإقرار الضريبي.',
      'إذا زاد دخلك خلال العام ولم تبلغ Försäkringskassan، ستطالب بإعادة المبالغ الزائدة التي صُرفت لك.'
    ],
    keyPointsSv: [
      'Barnfamiljer med låg inkomst kan beviljas bostadsbidrag baserat på hyra, yta och beräknad årsinkomst.',
      'Unga mellan 18 och 28 år kan söka särskilt bostadsbidrag för unga.',
      'Bidraget är preliminärt och stäms av i efterhand mot deklarerad årsinkomst.',
      'Ändras din inkomst under året måste du anmäla det omgående för att slippa återkrav.'
    ],
    commonMisconceptionAr: 'شائعة: "إعانة السكن تؤثر سلباً على طلب الإقامة الدائمة أو الجنسية". الحقيقة: إعانة السكن حق تأميني للأسر من Försäkringskassan ولا تحتسب كمساعدة شؤون اجتماعية ضارة (Ekonomiskt bistånd).',
    commonMisconceptionSv: 'Missuppfattning: "Bostadsbidrag försämrar chansen till permanent uppehållstillstånd". Fakta: Bostadsbidrag är en del av den allmänna socialförsäkringen och påverkar inte prövningen negativt.',
    officialAdviceAr: 'استخدم حاسبة الدعم على موقع Försäkringskassan قبل التقديم، وأبلغ عن أي تغير في الراتب فور حدوثه.',
    officialAdviceSv: 'Gör en provberäkning på Försäkringskassans webbplats och meddela inkomstförändringar direkt.',
    authorityId: 'forsakringskassan',
    officialUrl: 'https://www.forsakringskassan.se/privatperson/foralder/bostadsbidrag-till-barnfamiljer'
  },
  {
    id: 'guide-healthcare-interpreter',
    titleAr: 'حقك القانوني في مترجم طبي مجاني (1177) وسقف تكلفة العلاج',
    titleSv: 'Din lagliga rätt till tolk i vården och högkostnadsskydd (1177)',
    topicAr: 'الرعاية الصحية',
    topicSv: 'Hälso- och sjukvård',
    summaryAr: 'كل ما تحتاج معرفته عن حجز المترجم الطبي، وسقف تكلفة الأدوية والفحوصات (Högkostnadsskydd)، وحالات الطوارئ.',
    summarySv: 'Allt om tolkbokning i vården, högkostnadsskydd för läkarbesök och receptbelagda läkemedel samt akutvård.',
    keyPointsAr: [
      'يحق لك بموجب قانون الرعاية الصحية السويدي طلب مترجم عربي رسمي مجاني لأي موعد طبي أو فحص في المستوصف أو المستشفى.',
      'المترجم الطبي ملزم بالسرية المهنية التامة بموجب القانون السويدي (Tystnadsplikt) ولا يشارك معلوماتك مع أي جهة أخرى.',
      'نظام سقف التكاليف (Högkostnadsskydd): لا تدفع أكثر من حد أقصى سنوي محدد لزيارات الأطباء (عادة حوالي 1,300-1,400 كرونة سنوياً)، وبعدها تصبح الزيارات مجانية تماماً عبر البطاقة المجانية (Frikort).',
      'الأدوية الموصوفة بوصفة طبية مشمولة أيضاً بسقف تكلفة متدرج، ولا يدفع المريض أكثر من 2,850 كرونة سنوياً مهما بلغت أسعار الأدوية.'
    ],
    keyPointsSv: [
      'Enligt hälso- och sjukvårdslagen har du rätt till kostnadsfri tolk vid läkarbesök.',
      'Tolk har strikt tystnadsplikt enligt svensk lag.',
      'Högkostnadsskydd sätter ett årligt maxtak för läkarbesök (frikort) och receptbelagda läkemedel.',
      'Barn under 18 år har avgiftsfri sjukvård och receptbelagda läkemedel inom förmånen är gratis.'
    ],
    commonMisconceptionAr: 'شائعة: "المترجم قد يبلغ دائرة الهجرة عن حالتي الصحية". الحقيقة: المترجم والطاقم الطبي محظور عليهم قانوناً إفشاء أي سر طبي لأي جهة بما فيها مصلحة الهجرة والشرطة (إلا في جرائم جسيمة محددة للغاية كحماية الأطفال).',
    commonMisconceptionSv: 'Missuppfattning: "Tolk kan rapportera till Migrationsverket". Fakta: Vårdpersonal och auktoriserade tolkar har absolut tystnadsplikt.',
    officialAdviceAr: 'احفظ رقم 1177 في هاتفك للاستشارات الصحية غير الطارئة، واتصل على 112 فقط في حالات الخطر المباشر على الحياة.',
    officialAdviceSv: 'Ring 1177 för medicinsk rådgivning dygnet runt, och 112 vid livshotande tillstånd.',
    authorityId: '1177',
    officialUrl: 'https://www.1177.se/sa-fungerar-varden/lagar-och-rattigheter/tolkning-till-ditt-sprak/'
  },
  {
    id: 'guide-travel-schengen',
    titleAr: 'كيف تتأكد من سلامة إقامتك ووثائقك قبل السفر خارج السويد؟',
    titleSv: 'Kontrollera uppehållstillstånd och resedokument inför utlandsresa',
    topicAr: 'السفر والحدود',
    topicSv: 'Resor & Gränskontroll',
    summaryAr: 'شروط السفر ببطاقة الإقامة السويدية (UT-kort)، مدة البقاء خارج السويد دون فقدان الإقامة، وقواعد صلاحية جواز السفر.',
    summarySv: 'Regler kring uppehållstillståndskort vid utlandsresa, giltighetstid på pass och hur länge du kan vistas utomlands.',
    keyPointsAr: [
      'يجب دائماً حمل بطاقة الإقامة البلاستيكية الأصلية (UT-kort) وجواز السفر الساري أثناء السفر خارج السويد؛ القرار الورقي لا يكفي لركوب الطائرة أو عبور الحدود.',
      'إذا كان طلب تجديد إقامتك قيد الانتظار وانتهت بطاقتك القديمة، فلا تسافر خارج السويد حتى يصدر القرار وتستلم البطاقة الجديدة، لأن شركات الطيران سترفض صعودك في رحلة العودة.',
      'لحاملي الإقامة الدائمة: يحق لك السفر، ولكن البقاء خارج السويد أكثر من سنة متواصلة يعرض الإقامة الدائمة للإلغاء ما لم تبلغ مصلحة الهجرة مسبقاً (Anmälan om att behålla PUT).',
      'التأكد من أن جواز سفرك سارٍ لمدة 3 أشهر على الأقل بعد التاريخ المخطط للعودة عند السفر داخل وخارج منطقة الشنغن.'
    ],
    keyPointsSv: [
      'Ha alltid med giltigt pass och fysiskt uppehållstillståndskort (UT-kort) vid resor utanför Sverige.',
      'Res inte ut ur landet om du väntar på förlängningsbeslut och ditt tidigare kort har löpt ut.',
      'Personer med permanent uppehållstillstånd riskerar att förlora tillståndet om de vistas utomlands mer än ett år utan förhandsanmälan.',
      'Kontrollera passets giltighetstid i god tid före resan.'
    ],
    commonMisconceptionAr: 'شائعة: "إذا كان لدي إشعار استلام من الهجرة يمكنني العودة للسويد". الحقيقة: السفارات وشركات الطيران في الخارج لا تعترف بإشعارات الاستلام وتطلب بطاقة إقامة سارية المفعول.',
    commonMisconceptionSv: 'Missuppfattning: "Kvitto på inlämnad ansökan räcker för inresa till Sverige". Fakta: Flygbolag och gränspoliser kräver giltigt fysiskt uppehållstillståndskort.',
    officialAdviceAr: 'تحقق من تاريخ انتهاء بطاقة إقامتك وجواز سفرك قبل 6 أشهر من حجز أي تذكرة طيران خارج السويد.',
    officialAdviceSv: 'Kontrollera giltighetstiden på UT-kort och pass minst sex månader innan du bokar utlandsresor.',
    authorityId: 'daily_life',
    officialUrl: 'https://www.migrationsverket.se/Privatpersoner/Resa-med-uppehallstillstand.html'
  }
];
