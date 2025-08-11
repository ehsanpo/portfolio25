import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
  content: string;
  filePath: string;
}

export interface ContentIndex {
  portfolio: ContentItem[];
  blog: ContentItem[];
}

// Get content directory path
const getContentDir = () => path.join(process.cwd(), "content");

// Parse markdown file with frontmatter
export function parseMarkdownFile(filePath: string): ContentItem | null {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    // Extract slug from file path
    const slug = path.basename(filePath, ".md");

    return {
      slug,
      meta: data as ContentMeta,
      content,
      filePath,
    };
  } catch (error) {
    console.error(`Error parsing markdown file: ${filePath}`, error);
    return null;
  }
}

// Get all markdown files in a directory
function getMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files: string[] = [];

  function walkDir(currentPath: string) {
    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name);

      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
  }

  walkDir(dirPath);
  return files;
}

// Get all portfolio content
export function getPortfolioContent(): ContentItem[] {
  const portfolioDir = path.join(getContentDir(), "portfolio");
  const markdownFiles = getMarkdownFiles(portfolioDir);

  return markdownFiles
    .map(parseMarkdownFile)
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => {
      // Sort by publish date, newest first
      const dateA = new Date(a.meta.publishDate || "1970-01-01").getTime();
      const dateB = new Date(b.meta.publishDate || "1970-01-01").getTime();
      return dateB - dateA;
    });
}

// Get all blog content
export function getBlogContent(): ContentItem[] {
  const blogDir = path.join(getContentDir(), "blog");
  const markdownFiles = getMarkdownFiles(blogDir);

  return markdownFiles
    .map(parseMarkdownFile)
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => {
      // Sort by publish date, newest first
      const dateA = new Date(a.meta.publishDate || "1970-01-01").getTime();
      const dateB = new Date(b.meta.publishDate || "1970-01-01").getTime();
      return dateB - dateA;
    });
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

// Get content by tag
export function getContentByTag(
  type: "portfolio" | "blog",
  tag: string
): ContentItem[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  return content.filter((item) =>
    item.meta.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
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

// Build complete content index
export function buildContentIndex(): ContentIndex {
  return {
    portfolio: getPortfolioContent(),
    blog: getBlogContent(),
  };
}

// Get recent content
export function getRecentContent(
  type: "portfolio" | "blog",
  limit: number = 3
): ContentItem[] {
  const content =
    type === "portfolio" ? getPortfolioContent() : getBlogContent();
  return content.slice(0, limit);
}
