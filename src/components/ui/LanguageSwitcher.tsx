import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./Button";
import { Globe } from "lucide-react";
import { locales, localeNames, type Locale } from "../../utils/i18n";

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    // Remove the current locale from the pathname
    const segments = pathname.split("/");

    // If the first segment is a locale, replace it
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      // If no locale in path, add it
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");
    router.push(newPath);
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
