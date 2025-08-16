import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PORTFOLIO_CONTENT_PATH = path.join(
  process.cwd(),
  "src/content/portfolio"
);

export interface PortfolioItem {
  slug: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  gallery?: string[];
  tags?: string[];
  year?: string;
  client?: string;
  role?: string;
  technologies?: string[];
  website?: string;
  github?: string;
  featured?: boolean;
  category?: string;
  [key: string]: unknown;
}

export function getAllPortfolioSlugs(): string[] {
  if (!fs.existsSync(PORTFOLIO_CONTENT_PATH)) {
    return [];
  }

  const directories = fs
    .readdirSync(PORTFOLIO_CONTENT_PATH, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return directories;
}

export function getPortfolioItem(
  slug: string,
  locale: string = "en"
): PortfolioItem | null {
  try {
    const portfolioDir = path.join(PORTFOLIO_CONTENT_PATH, slug);

    if (!fs.existsSync(portfolioDir)) {
      return null;
    }

    // Try to find localized version first, then fall back to default
    const possibleFiles = [`${slug}.${locale}.md`, `${slug}.md`];

    let filePath: string | null = null;
    for (const fileName of possibleFiles) {
      const testPath = path.join(portfolioDir, fileName);
      if (fs.existsSync(testPath)) {
        filePath = testPath;
        break;
      }
    }

    if (!filePath) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Get images from the directory
    const files = fs.readdirSync(portfolioDir);
    const imageFiles = files.filter(
      (file) =>
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file) && !file.includes("logo")
    );
    const logoFile = files.find(
      (file) =>
        file.includes("logo") && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    );

    // Process tags - handle both 'tags' and 'tag' fields
    let tags: string[] = [];
    if (Array.isArray(data.tags)) {
      tags = data.tags;
    } else if (Array.isArray(data.tag)) {
      tags = data.tag;
    }

    // Process category - handle both array and string
    let category: string | undefined;
    if (Array.isArray(data.category)) {
      category = data.category[0];
    } else if (typeof data.category === "string") {
      category = data.category;
    }

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      content,
      image: logoFile || imageFiles[0],
      gallery: imageFiles,
      tags,
      year: data.year || data.date,
      client: data.client,
      role: data.role,
      technologies: Array.isArray(data.technologies) ? data.technologies : [],
      website: data.case_link_url || data.website,
      github: data.github,
      featured: data.featured || false,
      category,
      ...data,
    };
  } catch (error) {
    console.error(`Error loading portfolio item ${slug}:`, error);
    return null;
  }
}

export function getAllPortfolioItems(locale: string = "en"): PortfolioItem[] {
  const slugs = getAllPortfolioSlugs();
  const items = slugs
    .map((slug) => {
      try {
        return getPortfolioItem(slug, locale);
      } catch (error) {
        console.error(`Error loading portfolio item ${slug}:`, error);
        return null;
      }
    })
    .filter((item): item is PortfolioItem => item !== null);

  return items;
}

export function getFeaturedPortfolioItems(
  locale: string = "en"
): PortfolioItem[] {
  return getAllPortfolioItems(locale)
    .filter((item) => item.featured)
    .slice(0, 6); // Limit to 6 featured items
}
