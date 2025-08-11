import React from "react";
import { Button } from "./Button";
import { useI18n, type Locale } from "../../hooks/useI18n";

const localeNames: Record<Locale, string> = {
  en: "EN",
  sv: "SV",
  fa: "فا",
};

const localeFullNames: Record<Locale, string> = {
  en: "English",
  sv: "Svenska",
  fa: "فارسی",
};

export function LocaleToggle() {
  const { locale, locales, switchLocale, t } = useI18n();

  const handleLocaleSwitch = () => {
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    switchLocale(locales[nextIndex]);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLocaleSwitch}
      className="font-medium"
      aria-label={t("locale.switch")}
      title={`${t("locale.switch")} (${localeFullNames[locale]})`}
    >
      {localeNames[locale]}
    </Button>
  );
}

export default LocaleToggle;
