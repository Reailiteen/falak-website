import type {
  CtaMode,
  LandingContent,
  Locale,
  MascotConfig,
  ThemeTokens,
} from "@/lib/landing/types";

export const CTA_MODE: CtaMode = "hybrid";

export const SMS_ENABLED = false;

export const STORE_LINKS = {
  ios: "https://apps.apple.com/app/id0000000000",
  android: "https://play.google.com/store/apps/details?id=com.falak.app",
};

export const THEME_TOKENS: ThemeTokens = {
  color: {
    primary: "#7CCFD6",
    primaryStrong: "#2F9CA8",
    accent: "#F5C27D",
    surface: "#FFFCF5",
    surfaceAlt: "#F2FAFB",
    text: "#18313B",
    textMuted: "#516C74",
    border: "#CDE7EB",
    success: "#4D9B74",
    warning: "#BE7D35",
  },
  radius: {
    sm: "10px",
    md: "14px",
    lg: "20px",
    xl: "28px",
  },
  spacing: {
    section: "88px",
    container: "1120px",
  },
  motion: {
    fast: "180ms",
    base: "320ms",
  },
};

export const MASCOT_DEFAULT: MascotConfig = {
  characterId: "falak-guide",
  pose: "wave",
  expression: "warm",
  size: "md",
  placement: "hero",
  localeVariant: "mirrored",
};

const EN_CONTENT: LandingContent = {
  nav: {
    logoWord: "Falak",
    links: {
      howItWorks: "How it works",
      parents: "For parents",
      kids: "For kids",
      faq: "FAQ",
    },
    cta: "Download app",
    languageToggle: "العربية",
  },
  hero: {
    badge: "Built for calm family growth",
    title: "Guide healthy habits with less pressure and more consistency.",
    subtitle:
      "Falak helps guardians and children stay aligned through quests, habits, and rewards with a calm rhythm your family can keep.",
    ctaPrimaryIos: "Download on App Store",
    ctaPrimaryAndroid: "Get it on Google Play",
    ctaSecondary: "See how Falak works",
    phoneLabel: "Get a download link by phone",
    phonePlaceholder: "Your mobile number",
    phoneButton: "Text me the app",
    phoneDisabledNote: "SMS delivery is coming soon. Store buttons are ready now.",
    trust: [
      "Family-friendly tone",
      "Role-based parent/child experience",
      "Offline-friendly sync",
    ],
  },
  socialProof: {
    heading: "Trusted by families building steadier routines",
    testimonialSnippet:
      "Falak helped us move from reminders and stress to a simple flow my daughter actually follows.",
    testimonialAuthor: "Noura, Guardian",
  },
  roleSplit: {
    heading: "Two connected experiences, one shared goal",
    parentTitle: "For parents",
    parentDescription:
      "See each child’s week at a glance, approve rewards, and stay informed without a heavy or judgmental tone.",
    kidTitle: "For kids",
    kidDescription:
      "Children focus on today’s quests, mark progress, and earn rewards through a clear and encouraging routine.",
  },
  howItWorks: {
    heading: "How Falak works in three simple steps",
    steps: [
      {
        title: "Set up quests and habits",
        description:
          "Guardians create one-off todos or repeating habits and choose what matters most this week.",
      },
      {
        title: "Children complete daily focus",
        description:
          "Kids open their dashboard, mark tasks done, and see progress in a calm, understandable way.",
      },
      {
        title: "Approve rewards and celebrate growth",
        description:
          "Parents review pending actions, approve rewards, and reinforce consistent progress over perfection.",
      },
    ],
  },
  features: {
    heading: "Everything you need to keep routines steady",
    items: [
      {
        title: "Quest scheduling",
        description:
          "Plan todos and repeating habits by day so routines stay realistic and visible.",
        icon: "calendar",
      },
      {
        title: "Parent approvals",
        description:
          "Review completed quests and reward requests quickly from one dashboard.",
        icon: "shield",
      },
      {
        title: "Rewards store",
        description:
          "Motivate children with meaningful rewards while keeping expectations clear.",
        icon: "gift",
      },
      {
        title: "Weekly progress",
        description:
          "See completion counts, trends, and what needs attention this week.",
        icon: "spark",
      },
      {
        title: "Offline-friendly",
        description:
          "Falak caches data and refreshes in the background to stay dependable.",
        icon: "sync",
      },
      {
        title: "Notifications",
        description:
          "Gentle reminders help everyone stay aligned without constant follow-up.",
        icon: "check",
      },
    ],
  },
  proof: {
    heading: "Real outcomes families can feel",
    testimonials: [
      {
        quote:
          "The best part is the tone. It feels supportive, not punishing, for both of us.",
        author: "Amal",
        role: "Mother of two",
      },
      {
        quote:
          "My son now checks his focus list on his own. We argue less and finish more.",
        author: "Khaled",
        role: "Guardian",
      },
      {
        quote:
          "The reward approvals are quick, and the weekly view keeps us on track.",
        author: "Reem",
        role: "Parent",
      },
    ],
    stats: [
      { value: "78%", label: "Weekly quest completion", source: "Pilot cohort, Jan 2026" },
      { value: "4.6/5", label: "Parent satisfaction", source: "In-app survey, Feb 2026" },
      { value: "31%", label: "More consistent routines", source: "30-day retention sample" },
      { value: "2m", label: "Median daily check-in", source: "Usage telemetry, 2026" },
    ],
  },
  safety: {
    heading: "Built for trust, safety, and reliability",
    points: [
      "Role separation keeps guardian and child flows clear.",
      "Secure authentication with Clerk.",
      "Reliable backend architecture powered by Supabase.",
      "Consistent data state to prevent disappearing lists or stale views.",
    ],
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Who is Falak for?",
        answer:
          "Falak is designed for guardians and children who want a calmer, more consistent routine around daily tasks and habits.",
      },
      {
        question: "Can I manage more than one child?",
        answer:
          "Yes. Guardians can switch between children and view each child’s week, quests, and pending actions.",
      },
      {
        question: "Does Falak support repeating habits?",
        answer:
          "Yes. You can configure habits on specific days and also add one-off todo quests.",
      },
      {
        question: "What happens when internet is unstable?",
        answer:
          "Falak is offline-friendly. It uses cached data and refreshes in the background when connectivity returns.",
      },
      {
        question: "How are rewards handled?",
        answer:
          "Children earn rewards through quest completion, and guardians approve reward actions from the parent dashboard.",
      },
      {
        question: "Is Arabic supported?",
        answer:
          "Yes. Falak’s landing and app experience are planned for full bilingual support with proper RTL behavior.",
      },
    ],
  },
  finalCta: {
    heading: "Start in under 2 minutes",
    subtitle:
      "Download Falak now and set your family’s first calm, achievable routine today.",
    ctaPrimaryIos: "Download on App Store",
    ctaPrimaryAndroid: "Get it on Google Play",
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    language: "Language",
    rights: "All rights reserved.",
  },
  seo: {
    title: "Falak | Calm quest and rewards app for families",
    description:
      "Falak helps parents and children build healthy habits with quests, rewards, and calm weekly progress tracking.",
  },
};

const AR_CONTENT: LandingContent = {
  nav: {
    logoWord: "فلك",
    links: {
      howItWorks: "كيف يعمل",
      parents: "للآباء",
      kids: "للأطفال",
      faq: "الأسئلة الشائعة",
    },
    cta: "حمّل التطبيق",
    languageToggle: "English",
  },
  hero: {
    badge: "مصمم لنمو عائلي هادئ",
    title: "ساعد أطفالك على بناء عادات أفضل بهدوء وبدون ضغط.",
    subtitle:
      "فلك يساعد الوالدين والأطفال على الالتزام بالمهام والعادات عبر نظام تحديات ومكافآت واضح ومريح.",
    ctaPrimaryIos: "حمّل من App Store",
    ctaPrimaryAndroid: "حمّل من Google Play",
    ctaSecondary: "تعرّف على طريقة عمل فلك",
    phoneLabel: "استلم رابط التحميل عبر الجوال",
    phonePlaceholder: "رقم الجوال",
    phoneButton: "أرسل الرابط",
    phoneDisabledNote: "خدمة الرسائل النصية ستتوفر قريباً. أزرار المتاجر متاحة الآن.",
    trust: [
      "أسلوب داعم للعائلة",
      "تجربة منفصلة للوالد والطفل",
      "تزامن يعمل حتى مع ضعف الاتصال",
    ],
  },
  socialProof: {
    heading: "موثوق لدى عائلات تبحث عن روتين أكثر ثباتاً",
    testimonialSnippet:
      "فلك نقلنا من التذكير المستمر والتوتر إلى روتين بسيط تلتزم به ابنتي بسهولة.",
    testimonialAuthor: "نورة، ولي أمر",
  },
  roleSplit: {
    heading: "تجربتان مترابطتان لهدف واحد",
    parentTitle: "للآباء",
    parentDescription:
      "لوحة واضحة تعرض تقدم كل طفل خلال الأسبوع، مع متابعة الطلبات والمكافآت بدون لهجة قاسية.",
    kidTitle: "للأطفال",
    kidDescription:
      "لوحة الطفل تعرض مهام اليوم بوضوح، مع متابعة التقدم وكسب المكافآت بطريقة مشجعة.",
  },
  howItWorks: {
    heading: "كيف يعمل فلك في 3 خطوات بسيطة",
    steps: [
      {
        title: "أنشئ المهام والعادات",
        description:
          "ولي الأمر يحدد مهاماً يومية أو عادات متكررة ويختار ما هو مهم لهذا الأسبوع.",
      },
      {
        title: "ينجز الطفل مهام اليوم",
        description:
          "الطفل يفتح لوحته، يحدد ما أنجزه، ويرى تقدمه بشكل هادئ وواضح.",
      },
      {
        title: "وافق على المكافآت وادعم الاستمرارية",
        description:
          "الوالدان يراجعان الطلبات المعلقة ويعززان التقدم المنتظم بدل السعي للكمال.",
      },
    ],
  },
  features: {
    heading: "كل ما تحتاجه لعادات ثابتة داخل البيت",
    items: [
      {
        title: "جدولة التحديات",
        description: "خطط للمهام والعادات المتكررة حسب الأيام بشكل واضح ومرن.",
        icon: "calendar",
      },
      {
        title: "موافقات الوالدين",
        description: "راجع الإنجاز وطلبات المكافآت بسرعة من لوحة واحدة.",
        icon: "shield",
      },
      {
        title: "متجر المكافآت",
        description: "حفّز الأطفال بمكافآت واضحة مع توقعات واقعية ومتوازنة.",
        icon: "gift",
      },
      {
        title: "تقدم أسبوعي",
        description: "شاهد نسبة الإنجاز وما يحتاج تركيزاً خلال الأسبوع.",
        icon: "spark",
      },
      {
        title: "دعم العمل دون اتصال",
        description: "البيانات محفوظة محلياً وتُحدث تلقائياً في الخلفية.",
        icon: "sync",
      },
      {
        title: "تنبيهات ذكية",
        description: "تذكيرات هادئة تساعد الأسرة على الالتزام دون ضغط مستمر.",
        icon: "check",
      },
    ],
  },
  proof: {
    heading: "نتائج واقعية يمكن ملاحظتها داخل الأسرة",
    testimonials: [
      {
        quote: "أفضل شيء في فلك هو الأسلوب الهادئ. داعم وليس عقابي.",
        author: "أمل",
        role: "أم لطفلين",
      },
      {
        quote: "ابني صار يراجع مهامه بنفسه. نقاشاتنا أقل وإنجازنا أعلى.",
        author: "خالد",
        role: "ولي أمر",
      },
      {
        quote: "موافقات المكافآت سريعة، وعرض الأسبوع يبقينا على المسار.",
        author: "ريم",
        role: "ولي أمر",
      },
    ],
    stats: [
      { value: "٪78", label: "إتمام التحديات أسبوعياً", source: "عينة تجريبية، يناير 2026" },
      { value: "4.6/5", label: "رضا أولياء الأمور", source: "استبيان داخل التطبيق، فبراير 2026" },
      { value: "٪31", label: "تحسن استمرارية العادات", source: "عينة احتفاظ 30 يوماً" },
      { value: "2د", label: "متوسط تسجيل يومي", source: "بيانات الاستخدام، 2026" },
    ],
  },
  safety: {
    heading: "مبني على الثقة والاعتمادية",
    points: [
      "فصل واضح بين صلاحيات الوالد والطفل.",
      "مصادقة آمنة عبر Clerk.",
      "بنية خلفية مستقرة عبر Supabase.",
      "مصدر بيانات موحد لتفادي اختفاء القوائم أو تعارض الحالة.",
    ],
  },
  faq: {
    heading: "الأسئلة الشائعة",
    items: [
      {
        question: "لمن صُمم تطبيق فلك؟",
        answer:
          "فلك صُمم للأسر التي تريد بناء عادات ومهام يومية بطريقة هادئة ومنظمة بين الوالدين والأطفال.",
      },
      {
        question: "هل يمكن إدارة أكثر من طفل؟",
        answer:
          "نعم، يمكن لولي الأمر التبديل بين الأطفال ومتابعة تقدم كل طفل أسبوعياً.",
      },
      {
        question: "هل يدعم فلك العادات المتكررة؟",
        answer:
          "نعم، يمكنك تحديد عادات في أيام معينة إضافة إلى مهام لمرة واحدة.",
      },
      {
        question: "ماذا يحدث عند ضعف الإنترنت؟",
        answer:
          "فلك يدعم العمل دون اتصال؛ يعرض البيانات المخزنة ويُحدثها عند عودة الاتصال.",
      },
      {
        question: "كيف تتم إدارة المكافآت؟",
        answer:
          "يحصل الأطفال على المكافآت عند الإنجاز، ويقوم الوالدان بالموافقة من لوحة المتابعة.",
      },
      {
        question: "هل يدعم اللغة العربية؟",
        answer:
          "نعم، التجربة مصممة لدعم العربية بالكامل مع اتجاه RTL صحيح.",
      },
    ],
  },
  finalCta: {
    heading: "ابدأ خلال أقل من دقيقتين",
    subtitle: "حمّل فلك الآن وابدأ أول روتين عائلي هادئ وقابل للاستمرار اليوم.",
    ctaPrimaryIos: "حمّل من App Store",
    ctaPrimaryAndroid: "حمّل من Google Play",
  },
  footer: {
    privacy: "الخصوصية",
    terms: "الشروط",
    contact: "تواصل",
    language: "اللغة",
    rights: "جميع الحقوق محفوظة.",
  },
  seo: {
    title: "فلك | تطبيق هادئ للمهام والمكافآت العائلية",
    description:
      "فلك يساعد الوالدين والأطفال على بناء عادات صحية عبر التحديات والمكافآت ومتابعة أسبوعية واضحة.",
  },
};

export const LANDING_CONTENT: Record<Locale, LandingContent> = {
  en: EN_CONTENT,
  ar: AR_CONTENT,
};

export const STATS_WITH_SOURCES = {
  en: "Metrics reflect current pilot and internal product telemetry; refresh monthly.",
  ar: "الأرقام مبنية على عينة تشغيلية وبيانات داخلية، ويتم تحديثها شهرياً.",
} as const;
