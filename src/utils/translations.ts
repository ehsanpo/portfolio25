import { Locale } from "../contexts/LocaleContext";

// Basic translations for UI elements
export const translations = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      "design-system": "Design System",
    },
    common: {
      "read-more": "Read More",
      "view-project": "View Project",
      "back-to-portfolio": "Back to Portfolio",
      loading: "Loading...",
      "not-found": "Not Found",
      error: "Error",
    },
    portfolio: {
      title: "Portfolio",
      "all-projects": "All Projects",
      "project-details": "Project Details",
      client: "Client",
      agency: "Agency",
      technologies: "Technologies",
      category: "Category",
    },
    blog: {
      title: "Blog",
      "latest-posts": "Latest Posts",
      "read-time": "min read",
      "published-on": "Published on",
    },
  },
  sv: {
    navigation: {
      home: "Hem",
      about: "Om",
      portfolio: "Portfolio",
      blog: "Blogg",
      contact: "Kontakt",
      "design-system": "Designsystem",
    },
    common: {
      "read-more": "Läs mer",
      "view-project": "Visa projekt",
      "back-to-portfolio": "Tillbaka till Portfolio",
      loading: "Laddar...",
      "not-found": "Hittades inte",
      error: "Fel",
    },
    portfolio: {
      title: "Portfolio",
      "all-projects": "Alla projekt",
      "project-details": "Projektdetaljer",
      client: "Klient",
      agency: "Byrå",
      technologies: "Teknologier",
      category: "Kategori",
    },
    blog: {
      title: "Blogg",
      "latest-posts": "Senaste inlägg",
      "read-time": "min läsning",
      "published-on": "Publicerad",
    },
  },
  fa: {
    navigation: {
      home: "خانه",
      about: "درباره",
      portfolio: "نمونه کار",
      blog: "وبلاگ",
      contact: "تماس",
      "design-system": "سیستم طراحی",
    },
    common: {
      "read-more": "ادامه مطلب",
      "view-project": "مشاهده پروژه",
      "back-to-portfolio": "بازگشت به نمونه کار",
      loading: "در حال بارگذاری...",
      "not-found": "یافت نشد",
      error: "خطا",
    },
    portfolio: {
      title: "نمونه کار",
      "all-projects": "تمام پروژه‌ها",
      "project-details": "جزئیات پروژه",
      client: "مشتری",
      agency: "آژانس",
      technologies: "تکنولوژی‌ها",
      category: "دسته‌بندی",
    },
    blog: {
      title: "وبلاگ",
      "latest-posts": "آخرین نوشته‌ها",
      "read-time": "دقیقه مطالعه",
      "published-on": "منتشر شده در",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
export type NestedTranslationKey = {
  [K in keyof typeof translations.en]: keyof (typeof translations.en)[K];
};

export function getTranslation(
  locale: Locale,
  section: keyof typeof translations.en,
  key: string
): string {
  const translation =
    translations[locale]?.[section]?.[
      key as keyof (typeof translations.en)[typeof section]
    ];

  // Fallback to English if translation not found
  if (!translation) {
    return (
      translations.en[section]?.[
        key as keyof (typeof translations.en)[typeof section]
      ] || key
    );
  }

  return translation;
}

export function t(
  locale: Locale,
  section: keyof typeof translations.en,
  key: string
): string {
  return getTranslation(locale, section, key);
}
