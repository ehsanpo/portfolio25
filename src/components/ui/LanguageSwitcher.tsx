import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./Button";
import { Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "../../utils/i18n";

export function LanguageSwitcher() {
  const { currentLocale, setLocale } = useLanguage();

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div className="relative group">
      <Button variant="ghost" size="sm" className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        {localeNames[currentLocale]}
      </Button>

      <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[120px]">
        {locales.map((locale) => (
          <button
            key={locale}
            onClick={() => switchLocale(locale)}
            className={`block w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
              locale === currentLocale ? "bg-muted font-medium" : ""
            }`}
          >
            {localeNames[locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
