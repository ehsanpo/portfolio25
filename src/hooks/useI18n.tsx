'use client';

import React, { createContext, useContext, ReactNode, useState, useMemo, useCallback } from 'react';
import { getTranslatedContent } from '../utils/contentManager';

export type Locale = 'en' | 'sv' | 'fa';

export interface I18nContextType {
  locale: Locale;
  locales: Locale[];
  switchLocale: (locale: Locale) => void;
  isRTL: boolean;
  t: (key: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Translation strings
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.site_navigation': 'Site Navigation',
    'nav.pages': 'pages',
    'nav.total_pages': 'Total Pages',
    'nav.main_sections': 'Main Sections',
    'nav.breadcrumb': 'Breadcrumb',
    'hero.title': 'Design System Portfolio',
    'hero.subtitle': 'A comprehensive, production-ready design system',
    'hero.cta': 'Explore Components',
    'projects.title': 'Featured Projects',
    'blog.title': 'Latest Articles',
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Ready to start your next project?',
    'contact.cta': 'Get In Touch',
    'skills.title': 'Skills',
    'theme.toggle': 'Toggle theme',
    'locale.switch': 'Switch language'
  },
  sv: {
    'nav.home': 'Hem',
    'nav.portfolio': 'Portfölj',
    'nav.blog': 'Blogg',
    'nav.about': 'Om',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Meny',
    'nav.site_navigation': 'Webbnavigering',
    'nav.pages': 'sidor',
    'nav.total_pages': 'Totalt Sidor',
    'nav.main_sections': 'Huvudsektioner',
    'nav.breadcrumb': 'Brödsmulor',
    'hero.title': 'Design System Portfölj',
    'hero.subtitle': 'Ett omfattande, produktionsklart designsystem',
    'hero.cta': 'Utforska Komponenter',
    'projects.title': 'Utvalda Projekt',
    'blog.title': 'Senaste Artiklarna',
    'contact.title': 'Låt Oss Arbeta Tillsammans',
    'contact.subtitle': 'Redo att starta ditt nästa projekt?',
    'contact.cta': 'Kom I Kontakt',
    'skills.title': 'Färdigheter',
    'theme.toggle': 'Växla tema',
    'locale.switch': 'Byt språk'
  },
  fa: {
    'nav.home': 'خانه',
    'nav.portfolio': 'نمونه کارها',
    'nav.blog': 'وبلاگ',
    'nav.about': 'درباره',
    'nav.contact': 'تماس',
    'nav.menu': 'منو',
    'nav.site_navigation': 'ناوبری سایت',
    'nav.pages': 'صفحات',
    'nav.total_pages': 'کل صفحات',
    'nav.main_sections': 'بخش‌های اصلی',
    'nav.breadcrumb': 'مسیر صفحه',
    'hero.title': 'پورتفولیو سیستم طراحی',
    'hero.subtitle': 'یک سیستم طراحی جامع و آماده تولید',
    'hero.cta': 'اکتشاف کامپوننت‌ها',
    'projects.title': 'پروژه‌های ویژه',
    'blog.title': 'آخرین مقالات',
    'contact.title': 'بیایید با هم کار کنیم',
    'contact.subtitle': 'آماده شروع پروژه بعدی هستید؟',
    'contact.cta': 'در تماس باشید',
    'skills.title': 'مهارت‌ها',
    'theme.toggle': 'تغییر تم',
    'locale.switch': 'تغییر زبان'
  }
};

interface I18nProviderProps {
  readonly children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps): ReactNode {
  const [locale, setLocale] = useState<Locale>('en');
  const locales: Locale[] = ['en', 'sv', 'fa'];
  const isRTL = locale === 'fa';

  const switchLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  }, []);

  const t = useCallback((key: string, fallback?: string): string => {
    // First try static translations
    const staticTranslation = translations[locale][key as keyof typeof translations[typeof locale]];
    if (staticTranslation) {
      return staticTranslation;
    }

    // Then try content manager
    const dynamicTranslation = getTranslatedContent(key, locale, fallback);
    return dynamicTranslation;
  }, [locale]);

  const contextValue = useMemo(() => ({
    locale,
    locales,
    switchLocale,
    isRTL,
    t
  }), [locale, switchLocale, isRTL, t]);

  return (
    <I18nContext.Provider value={contextValue}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Helper hook for simpler translation access
export function useTranslation() {
  const { t } = useI18n();
  return { t };
}
