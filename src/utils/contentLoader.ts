import contentIndex from "../data/content-index.json";

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
  [key: string]: any;
}

export interface ContentItem {
  slug: string;
  meta: ContentMeta;
  excerpt?: string;
}

// Get all portfolio content
export function getPortfolioContent(): ContentItem[] {
  return contentIndex.portfolio || [];
}

// Get all blog content
export function getBlogContent(): ContentItem[] {
  return contentIndex.blog || [];
}

// Get content by slug and type
export function getContentBySlug(
  type: "portfolio" | "blog",
  slug: string
): ContentItem | null {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  return content.find((item) => item.slug === slug) || null;
}

// Get featured content
export function getFeaturedContent(type: "portfolio" | "blog"): ContentItem[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  return content.filter((item) => item.meta.featured === true);
}

// Get recent content
export function getRecentContent(
  type: "portfolio" | "blog",
  limit: number = 3
): ContentItem[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  const sorted = [...content].sort((a, b) => {
    const dateA = new Date(a.meta.publishDate || "1970-01-01").getTime();
    const dateB = new Date(b.meta.publishDate || "1970-01-01").getTime();
    return dateB - dateA;
  });
  return sorted.slice(0, limit);
}

// Get content by category
export function getContentByCategory(
  type: "portfolio" | "blog",
  category: string
): ContentItem[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  return content.filter(
    (item) => item.meta.category?.toLowerCase() === category.toLowerCase()
  );
}

// Get all categories
export function getCategories(type: "portfolio" | "blog"): string[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  const categories = new Set<string>();

  content.forEach((item) => {
    if (item.meta.category) {
      categories.add(item.meta.category);
    }
  });

  return Array.from(categories).sort((a, b) => a.localeCompare(b));
}

// Get all tags
export function getTags(type: "portfolio" | "blog"): string[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  const tags = new Set<string>();

  content.forEach((item) => {
    if (item.meta.tags) {
      item.meta.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
