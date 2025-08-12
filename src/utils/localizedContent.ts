import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Use the existing Locale type from i18n utils
export type Locale = "en" | "sv" | "fa";

export interface ContentMeta {
  title: string;
  description?: string;
  excerpt?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  date?: string;
  author?: string;
  agency?: string;
  client?: string;
  background_image?: string;
  logo?: string;
  tagline?: string;
  case_link_url?: string;
  images?: string[];
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface ContentItem {
  slug: string;
  meta: ContentMeta;
  content: string;
  filePath: string;
}

/**
 * Content resolution strategy according to PLAN.AI.md (context-based, not URL-based):
 * 1. Try `/content/.../<slug>.<locale>.md`
 * 2. Else load `/content/.../<slug>.md` (default language) and mark for auto-translation
 */
export async function getLocalizedContent(
  type: "portfolio" | "blog",
  slug: string,
  locale: Locale = "en"
): Promise<ContentItem | null> {
  try {
    const contentDir = path.join(process.cwd(), "src", "content", type);
    const projectDir = path.join(contentDir, slug);

    // Strategy 1: Try localized version first
    const localizedFile = path.join(projectDir, `${slug}.${locale}.md`);
    if (fs.existsSync(localizedFile)) {
      const fileContent = fs.readFileSync(localizedFile, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        meta: data as ContentMeta,
        content,
        filePath: localizedFile,
      };
    }

    // Strategy 2: Fall back to default (English) version
    const defaultFile = path.join(projectDir, `${slug}.md`);
    if (fs.existsSync(defaultFile)) {
      const fileContent = fs.readFileSync(defaultFile, "utf8");
      const { data, content } = matter(fileContent);

      // TODO: If locale !== 'en', invoke AI to create translated version
      // For now, return the default content with a flag for translation needed
      return {
        slug,
        meta: {
          ...(data as ContentMeta),
          // Add a flag to indicate this content needs translation
          _needsTranslation: locale !== "en",
        },
        content,
        filePath: defaultFile,
      };
    }

    return null;
  } catch (error) {
    console.error(`Error fetching ${type} content for ${slug}:`, error);
    return null;
  }
}

/**
 * Get all content items of a specific type for a locale
 */
export async function getAllLocalizedContent(
  type: "portfolio" | "blog",
  locale: Locale = "en"
): Promise<ContentItem[]> {
  try {
    const contentDir = path.join(process.cwd(), "src", "content", type);

    if (!fs.existsSync(contentDir)) {
      return [];
    }

    const items: ContentItem[] = [];
    const directories = fs.readdirSync(contentDir, { withFileTypes: true });

    for (const dirent of directories) {
      if (dirent.isDirectory()) {
        const slug = dirent.name;
        const item = await getLocalizedContent(type, slug, locale);
        if (item) {
          items.push(item);
        }
      }
    }

    // Sort by date (newest first)
    return items.sort((a, b) => {
      const dateA = new Date(a.meta.date || a.meta.publishDate || 0);
      const dateB = new Date(b.meta.date || b.meta.publishDate || 0);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error(`Error fetching all ${type} content:`, error);
    return [];
  }
}

/**
 * Generate static params for all content items
 */
export async function generateContentStaticParams(type: "portfolio" | "blog") {
  try {
    const contentDir = path.join(process.cwd(), "src", "content", type);

    if (!fs.existsSync(contentDir)) {
      return [];
    }

    const directories = fs.readdirSync(contentDir, { withFileTypes: true });
    return directories
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => ({ slug: dirent.name }));
  } catch (error) {
    console.error(`Error generating static params for ${type}:`, error);
    return [];
  }
}
