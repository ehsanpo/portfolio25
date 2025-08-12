export const locales = ["en", "sv", "fa"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

export const rtlLocales = ["fa"];

export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale);
}

export const localeNames = {
  en: "English",
  sv: "Svenska",
  fa: "فارسی",
} as const;
