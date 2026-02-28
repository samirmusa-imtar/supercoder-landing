export const brand = {
  name: "Supercoder",
  cta: "اطلب عرضًا تجريبيًا",
  heroTitle: "التوظيف الأذكى",
  heroSub: "تقارير فورية. قرار أسرع.",
  heroDescription:
    "منصة مقابلات مدعومة بالذكاء الاصطناعي لفرز المرشحين بسرعة، مع نزاهة وتدقيق وتقارير جاهزة.",
  ctaPrimary: "ابدأ الآن",
  ctaSecondary: "شاهد الفيديو",
} as const;

export const heroReportSnippet = {
  score: "87",
  violationsLabel: "مخالفات",
  items: ["عدم ذكر الخبرة", "سيرة غير مكتملة"],
  mainCardLabel: "مثال تقرير فوري",
  mainCardSub: "نزاهة + تدقيق",
  cards: [
    { title: "عدم ذكر الخبرة", sub: "تنبيه تلقائي" },
    { title: "سيرة غير مكتملة", sub: "اقتراح أسئلة متابعة" },
  ] as const,
  floatingChips: ["تقارير خلال دقائق", "100% نزاهة وتدقيق"] as const,
} as const;

export const statsSection = {
  pill: "الأرقام",
  heading: "أرقام تُحدث الفرق",
  sub: "وقت أقل. قرار أسرع.",
  cards: [
    { value: 60, suffix: "%", label: "وقت أقل" },
    { value: 5, suffix: " دقائق", label: "تقارير فورية" },
    { value: 100, suffix: "%", label: "نزاهة وتدقيق" },
    { value: 1, suffix: "", label: "تقارير جاهزة" },
  ],
} as const;

export const productVisionSection = {
  pill: "رؤية المنتج",
  heading: "التوظيف للعالم الحديث",
  sub: "الفرق العالمية هي المستقبل.",
  cards: [
    {
      title: "وظّف عالميًا، فورًا",
      desc: "وصول إلى كفاءات معتمدة مسبقًا في دقائق.",
    },
    {
      title: "مقابلات بالذكاء الاصطناعي",
      desc: "تقييم موضوعي وتقارير جاهزة فور انتهاء المقابلة.",
    },
    {
      title: "وقت أقل، قرار أسرع",
      desc: "تقارير خلال دقائق بدل أيام.",
    },
    {
      title: "تقارير جاهزة للقرار",
      desc: "درجة، رادار مهارات، نقاط قوة وفجوات، وتوصية واضحة.",
    },
  ],
} as const;

export const featuresSection = {
  pill: "المزايا",
  heading: "مزايا مدعومة بالذكاء الاصطناعي",
  cards: [
    {
      title: "الذكاء الاصطناعي",
      desc: "تحليل السير الذاتية فوراً لتحديد واختيار أفضل المرشحين — أسرع وأذكى.",
    },
    {
      title: "التقييم",
      desc: "أسئلة تقنية وغير تقنية خاصة بالوظيفة لتقييم المهارات بدقة.",
    },
    {
      title: "المقابلة",
      desc: "أسئلة حية وتكيّفية تتطور مع كل إجابة.",
    },
    {
      title: "دعم",
      desc: "دعم سلس للعربية والإنجليزية، مع المزيد من اللغات قريباً.",
    },
  ],
} as const;

export const howItWorksSection = {
  heading: "كيف تعمل المنصة؟",
  sub: "اضغط على كل خطوة لمعرفة التفاصيل — الخطوات الخمس من البداية حتى القرار.",
  steps: [
    {
      title: "حدّد الدور أو ارفع وصف الوظيفة",
      desc: "إنشاء أسئلة مخصصة تلقائياً وفق المهارات والمتطلبات.",
    },
    {
      title: "دعوة المرشحين",
      desc: "إرسال رابط المقابلة للمرشحين عبر البريد فوراً.",
    },
    {
      title: "المرشح يجري المقابلة",
      desc: "فيديو في أي وقت ومكان مع مراقبة النزاهة.",
    },
    {
      title: "تقارير فورية من الذكاء الاصطناعي",
      desc: "ملخصات، درجات، ونقاط قوة/تحسين بعد المقابلة.",
    },
    {
      title: "قرّر بثقة",
      desc: "رفع جودة الاختيار وتقليل الوقت للوصول لأفضل مرشح.",
    },
  ],
  step1Panel: {
    stepTitle: "الخطوة #١",
    panelTitle: "إنشاء أسئلة مخصصة وفق الدور والمتطلبات",
    jobOverview: "وصف الوظيفة",
    jobOverviewPlaceholder: "[نظرة عامة على الدور]",
    questionsLabel: "أسئلة المقابلة",
    questionsStatus: "جاري إنشاء الأسئلة…",
    confirmLabel: "تأكيد الأسئلة",
  },
} as const;

export const reportSection = {
  heading: "شكل التقرير",
  explanation:
    "التقييم درجة ٠–١٠٠ لأداء المرشح. الرادار مخطط مهارات. نقاط القوة والفجوات والمخالفات. التوصية موافقة أو متابعة.",
  tabs: ["التقييم", "الرادار", "نقاط القوة والفجوات", "التوصية"],
  miniLabels: {
    score: "87",
    radar: "رادار",
    strengths: "نقاط قوة",
    gaps: "فجوات",
    violations: "مخالفات",
    recommendation: "توصية",
  },
  radarTitle: "الرادار",
  radarSub: "مخطط الرادار — المهارات",
  recommendationText: "توصية الموافقة / المتابعة مع تفاصيل موجزة.",
} as const;

export const reportExampleSection = {
  heading: "مثال من التقرير الفعلي",
  matchTitle: "تطابق السيرة مع الدور",
  matchPercent: "47%",
  paragraph:
    "المرشح يظهر خبرة قوية في الشبكات والقيادة، مع نقص في الخبرة العملية على AWS و Docker وأدوات الأمن السيبراني المطلوبة للدور.",
  strengthsTitle: "نقاط القوة",
  strengths: [
    "خبرة واسعة في الشبكات وإدارة البنية التحتية",
    "قيادة وإدارة فريق قوية",
  ],
  gapsTitle: "الفجوات",
  gaps: [
    "لا خبرة عملية مع خدمات AWS السحابية",
    "لا يظهر خبرة في Docker أو CI/CD",
  ],
  interviewScoreLabel: "درجة المقابلة",
  interviewScore: "5.5",
  skillRows: [
    { label: "خبرة ٥–٨ سنوات في تقنية المعلومات", value: 8 },
    { label: "خدمات AWS السحابية", value: 5 },
    { label: "شهادة AWS Solutions Architect", value: 2 },
    { label: "بكالوريوس تقنية معلومات أو ما يعادله", value: 7 },
    { label: "معرفة الأمن السيبراني", value: 4 },
    { label: "خبرة الشبكات", value: 7 },
    { label: "الأمان والامتثال", value: 6 },
  ],
} as const;

export const reportInsightsData = {
  headerSummary: {
    overallScore: "5.5",
    overallScoreMax: "10",
    match: "47%",
    decisionApproval: "موافقة",
    decisionFollowup: "متابعة",
    activeDecision: "approval" as const,
    strengthsLabel: "نقاط قوة",
    gapsLabel: "فجوات",
    violationsLabel: "مخالفات",
  },
  skillsCardTitle: "المهارات والتقييم (من 10)",
  sortOrder: {
    high: "الأعلى",
    low: "الأدنى",
    label: "ترتيب",
  },
  skills: [
    { label: "سنوات الخبرة في تقنية المعلومات", value: 8 },
    { label: "خبرة في خدمات AWS السحابية", value: 5 },
    { label: "شهادة Solutions Architect", value: 2 },
    { label: "المؤهل العلمي (بكالوريوس تقنية معلومات)", value: 7 },
    { label: "معرفة الأمن السيبراني", value: 4 },
    { label: "خبرة في الشبكات", value: 7 },
    { label: "الأمان والامتثال", value: 6 },
  ] as const,
  strengthsTitle: "نقاط القوة",
  strengths: [
    "خبرة واسعة في مجال الشبكات وإدارة البنية التحتية.",
    "قدرة قوية على قيادة الفرق وإدارة المشاريع التقنية.",
    "معرفة جيدة بأدوات الأمن السيبراني و Docker.",
    "خبرة عملية في بيئات العمل المختلفة، مع تركيز على AWS بشكل أساسي.",
  ] as const,
  gapsTitle: "الفجوات والتحديات",
  gaps: [
    "خبرة عملية محدودة في خدمات AWS السحابية المتقدمة.",
    "لا توجد خبرة عملية واضحة في CI/CD أو Docker في سياق التكامل المستمر.",
    "الحصول على شهادة Solutions Architect بمستوى مبتدئ (تقييم 2/10) يشير إلى حاجة للتطوير في هذا المجال.",
  ] as const,
  notesTitle: "الملاحظات والمخالفات",
  notes:
    "لا توجد مخالفات جوهرية تذكر، لكن يُنصح بتدريب إضافي في مجال الحوسبة السحابية و أتمتة النشر.",
  showMore: "عرض المزيد",
  showLess: "عرض أقل",
  recommendationTitle: "التوصية النهائية",
  recommendation: {
    approval: {
      label: "موافقة",
      justification:
        "المرشح يظهر كفاءة قوية في الشبكات والقيادة مع إمكانية التطوير في AWS عبر تدريب موجّه.",
    },
    followup: {
      label: "متابعة",
      justification:
        "يمكن المتابعة بعد تقييم الخبرة العملية في CI/CD والحوسبة السحابية.",
    },
    active: "approval" as const,
  },
  quickSummary: {
    strengthsLabel: "نقاط القوة",
    strengths: "عالية في الشبكات والقيادة",
    gapsLabel: "الفجوات",
    gaps: "ضعف في AWS المتقدم و CI/CD",
    finalScoreLabel: "الدرجة النهائية",
    finalScore: "5.5 / 7",
    decisionLabel: "القرار",
    decision: "موافقة مشروطة",
  },
} as const;

export const complianceBadges = ["B2B فقط", "سجلات تدقيق", "RBAC", "PDPL"] as const;

export const videoSection = {
  heading: "شاهد Supercoder AI في العمل",
  sub: "اكتشف كيف تُجرى المقابلات وتُقيّم التقارير تلقائياً.",
  playHint: "انقر على الفيديو لتفعيل الصوت",
  youtubeUrl: "https://www.youtube.com/watch?v=AHUB_MQQGJ4",
  embedUrl: "https://www.youtube.com/embed/AHUB_MQQGJ4?start=1&autoplay=1&mute=1",
} as const;

export const faqSection = {
  heading: "الأسئلة الشائعة",
  items: [
    {
      q: "ما هو Supercoder AI وكيف يعمل؟",
      a: "Supercoder AI منصة مقابلات آلية تساعد الشركات على فرز المرشحين بسرعة عبر مقابلات مدعومة بالذكاء الاصطناعي للمطابقة والتحقق من الملاءمة، مع تحليل مفصل للمهارات.",
    },
    {
      q: "هل مقابِل الذكاء الاصطناعي مناسب للدور التقنية وغير التقنية؟",
      a: "نعم. المنصة تدعم أدواراً تقنية وغير تقنية من خلال أسئلة قابلة للتخصيص ومقاييس مناسبة لكل نوع دور.",
    },
    {
      q: "كيف تُعالج بيانات المرشحين وهل هناك امتثال لقوانين الخصوصية؟",
      a: "نلتزم بمعايير الخصوصية والامتثال المناسبة (مثل PDPL) ونوفر خيارات تحكم في البيانات والاحتفاظ بها.",
    },
    {
      q: "هل يمكنني تخصيص أسئلة المقابلة؟",
      a: "نعم. يمكنك تحديد المهارات والمتطلبات وتوليد أسئلة مخصصة تلقائياً أو تعديلها يدوياً.",
    },
    {
      q: "ماذا يحدث إذا خالف مرشح قواعد المراقبة أثناء المقابلة؟",
      a: "يتم تسجيل المخالفات في التقرير (مثل عدم ذكر الخبرة أو سيرة غير مكتملة) لاتخاذ قرار مستنير.",
    },
    {
      q: "هل يمكنني دعوة فريقي لاستخدام منصة Supercoder AI معي؟",
      a: "نعم. تدعم المنصة فرق العمل مع صلاحيات وادوار (RBAC) مناسبة.",
    },
    {
      q: "ماذا يتضمن تقرير الذكاء الاصطناعي؟",
      a: "يتضمن درجة التقييم، مخطط الرادار للمهارات، نقاط القوة والفجوات والمخالفات، وتوصية واضحة (موافقة أو متابعة).",
    },
    {
      q: "كيف تضمن المنصة العدالة وتقليل التحيز في المقابلات؟",
      a: "نستخدم معايير موضوعية وأسئلة موحدة وقابلة للمراجعة لتقليل التحيز وتعزيز العدالة في التقييم.",
    },
    {
      q: "ما اللغات المدعومة في المقابلات؟",
      a: "العربية والإنجليزية مدعومتان حالياً، مع المزيد من اللغات قريباً.",
    },
  ],
} as const;

export const demoFormSection = {
  heading: "اطلب عرضًا تجريبيًا",
  fields: {
    fullName: "الاسم الكامل",
    company: "اسم الشركة",
    email: "البريد الوظيفي",
    emailPlaceholder: "work@company.com",
    phone: "الجوال (اختياري)",
    phonePlaceholder: "+966...",
    industry: "القطاع",
    companySize: "حجم الشركة",
    monthlyInterviews: "عدد المقابلات شهريًا",
    message: "رسالة",
    messagePlaceholder: "أخبرنا عن احتياجاتك...",
    consent: "موافقة على سياسة الخصوصية",
    submit: "إرسال الطلب",
  },
} as const;

export const formSelectOptions = {
  industry: [
    { value: "", label: "اختر القطاع" },
    { value: "tech", label: "تقنية" },
    { value: "finance", label: "مالية" },
    { value: "health", label: "صحة" },
    { value: "retail", label: "تجزئة" },
    { value: "government", label: "حكومة" },
    { value: "other", label: "أخرى" },
  ],
  companySize: [
    { value: "", label: "حجم الشركة" },
    { value: "1-10", label: "1–10" },
    { value: "11-50", label: "11–50" },
    { value: "51-200", label: "51–200" },
    { value: "201-500", label: "201–500" },
    { value: "500+", label: "500+" },
  ],
  monthlyInterviews: [
    { value: "", label: "عدد المقابلات شهريًا" },
    { value: "1-10", label: "1–10" },
    { value: "11-50", label: "11–50" },
    { value: "51-200", label: "51–200" },
    { value: "200+", label: "200+" },
  ],
} as const;

export const footerContent = {
  partner: "بالشراكة مع IMTAR",
  links: [
    { label: "الخصوصية", href: "/privacy" },
    { label: "الشروط", href: "/terms" },
    { label: "تواصل", href: "#demo" },
  ],
} as const;
