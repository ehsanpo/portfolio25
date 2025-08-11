import { Locale } from "../hooks/useI18n";
import { autoTranslator } from "./autoTranslator";

export interface LocalizedContent {
  [locale: string]: string;
}

export interface ContentItem {
  id: string;
  type: "page" | "section" | "component" | "text";
  key: string;
  content: LocalizedContent;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export interface ContentMetadata {
  totalItems: number;
  locales: Locale[];
  lastUpdated: Date;
}

class ContentManager {
  private readonly cache = new Map<string, ContentItem>();
  private readonly baseLocale: Locale;

  constructor(baseLocale: Locale = "en") {
    this.baseLocale = baseLocale;
  }

  // Create or update content item
  async upsertContent(
    id: string,
    type: ContentItem["type"],
    key: string,
    content: string | LocalizedContent,
    locale?: Locale
  ): Promise<ContentItem> {
    const now = new Date();
    const existingItem = this.cache.get(id);

    let localizedContent: LocalizedContent;

    if (typeof content === "string") {
      const targetLocale = locale || this.baseLocale;
      localizedContent = existingItem?.content || {};
      localizedContent[targetLocale] = content;
    } else {
      localizedContent = content;
    }

    const item: ContentItem = {
      id,
      type,
      key,
      content: localizedContent,
      createdAt: existingItem?.createdAt || now,
      updatedAt: now,
      version: (existingItem?.version || 0) + 1,
    };

    this.cache.set(id, item);
    return item;
  }

  // Get content by ID and locale
  getContent(id: string, locale: Locale = this.baseLocale): string | null {
    const item = this.cache.get(id);
    if (!item) return null;

    // Try exact locale match first
    if (item.content[locale]) {
      return item.content[locale];
    }

    // Fallback to base locale
    if (item.content[this.baseLocale]) {
      return item.content[this.baseLocale];
    }

    // Fallback to any available locale
    const availableLocales = Object.keys(item.content);
    if (availableLocales.length > 0) {
      return item.content[availableLocales[0]];
    }

    return null;
  }

  // Auto-translate missing locales for a content item
  async autoTranslateContent(
    id: string,
    targetLocales: Locale[]
  ): Promise<ContentItem | null> {
    const item = this.cache.get(id);
    if (!item) return null;

    const availableLocales = Object.keys(item.content) as Locale[];
    const sourceLocale = availableLocales.includes(this.baseLocale)
      ? this.baseLocale
      : availableLocales[0];

    if (!sourceLocale) return item;

    const sourceText = item.content[sourceLocale];
    const missingLocales = targetLocales.filter(
      (locale) => !item.content[locale]
    );

    if (missingLocales.length === 0) return item;

    try {
      const translationPromises = missingLocales.map(async (locale) => {
        const result = await autoTranslator.translate({
          text: sourceText,
          fromLocale: sourceLocale,
          toLocale: locale,
          context: `Content type: ${item.type}, Key: ${item.key}`,
        });
        return { locale, translation: result.translatedText };
      });

      const translations = await Promise.all(translationPromises);

      // Update the content with new translations
      const updatedContent = { ...item.content };
      translations.forEach(({ locale, translation }) => {
        updatedContent[locale] = translation;
      });

      return this.upsertContent(id, item.type, item.key, updatedContent);
    } catch (error) {
      console.error("Auto-translation failed:", error);
      return item;
    }
  }

  // Bulk auto-translate all content
  async autoTranslateAll(targetLocales: Locale[]): Promise<void> {
    const items = Array.from(this.cache.values());

    for (const item of items) {
      await this.autoTranslateContent(item.id, targetLocales);
    }
  }

  // Search content by key pattern
  searchContent(
    keyPattern: string,
    locale: Locale = this.baseLocale
  ): ContentItem[] {
    const results: ContentItem[] = [];
    const regex = new RegExp(keyPattern, "i");

    for (const item of this.cache.values()) {
      if (regex.test(item.key) && item.content[locale]) {
        results.push(item);
      }
    }

    return results.sort((a, b) => a.key.localeCompare(b.key));
  }

  // Get all content items
  getAllContent(): ContentItem[] {
    return Array.from(this.cache.values());
  }

  // Get content by type
  getContentByType(type: ContentItem["type"]): ContentItem[] {
    return Array.from(this.cache.values()).filter((item) => item.type === type);
  }

  // Export content to JSON
  exportContent(): { items: ContentItem[]; metadata: ContentMetadata } {
    const items = this.getAllContent();
    const allLocales = new Set<Locale>();
    let lastUpdated = new Date(0);

    items.forEach((item) => {
      Object.keys(item.content).forEach((locale) =>
        allLocales.add(locale as Locale)
      );
      if (item.updatedAt > lastUpdated) {
        lastUpdated = item.updatedAt;
      }
    });

    return {
      items,
      metadata: {
        totalItems: items.length,
        locales: Array.from(allLocales),
        lastUpdated,
      },
    };
  }

  // Import content from JSON
  importContent(data: { items: ContentItem[] }): void {
    data.items.forEach((item) => {
      this.cache.set(item.id, {
        ...item,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
      });
    });
  }

  // Clear all content
  clear(): void {
    this.cache.clear();
  }

  // Get translation status for all content
  getTranslationStatus(targetLocales: Locale[]): {
    id: string;
    key: string;
    type: string;
    completedLocales: Locale[];
    missingLocales: Locale[];
    completionPercentage: number;
  }[] {
    const items = this.getAllContent();

    return items.map((item) => {
      const availableLocales = Object.keys(item.content) as Locale[];
      const completedLocales = targetLocales.filter((locale) =>
        availableLocales.includes(locale)
      );
      const missingLocales = targetLocales.filter(
        (locale) => !availableLocales.includes(locale)
      );
      const completionPercentage = Math.round(
        (completedLocales.length / targetLocales.length) * 100
      );

      return {
        id: item.id,
        key: item.key,
        type: item.type,
        completedLocales,
        missingLocales,
        completionPercentage,
      };
    });
  }
}

// Create a singleton instance
export const contentManager = new ContentManager("en");

// Initialize with some sample content
const initializeSampleContent = async () => {
  // Navigation items
  await contentManager.upsertContent(
    "nav-home",
    "text",
    "nav.home",
    "Home",
    "en"
  );
  await contentManager.upsertContent(
    "nav-portfolio",
    "text",
    "nav.portfolio",
    "Portfolio",
    "en"
  );
  await contentManager.upsertContent(
    "nav-blog",
    "text",
    "nav.blog",
    "Blog",
    "en"
  );
  await contentManager.upsertContent(
    "nav-about",
    "text",
    "nav.about",
    "About",
    "en"
  );
  await contentManager.upsertContent(
    "nav-contact",
    "text",
    "nav.contact",
    "Contact",
    "en"
  );

  // Hero section
  await contentManager.upsertContent(
    "hero-title",
    "text",
    "hero.title",
    "Design System Portfolio",
    "en"
  );
  await contentManager.upsertContent(
    "hero-subtitle",
    "text",
    "hero.subtitle",
    "A comprehensive, production-ready design system",
    "en"
  );
  await contentManager.upsertContent(
    "hero-cta",
    "text",
    "hero.cta",
    "Explore Components",
    "en"
  );

  // Auto-translate to all locales
  await contentManager.autoTranslateAll(["sv", "fa"]);
};

// Initialize sample content
initializeSampleContent().catch(console.error);

// Utility function to get translated content with fallback
export function getTranslatedContent(
  key: string,
  locale: Locale,
  fallback?: string
): string {
  // First try to find content by key pattern
  const items = contentManager.searchContent(
    `^${key.replace(".", "\\.")}$`,
    locale
  );
  if (items.length > 0) {
    return contentManager.getContent(items[0].id, locale) || fallback || key;
  }

  // Fallback to the key itself or provided fallback
  return fallback || key;
}
