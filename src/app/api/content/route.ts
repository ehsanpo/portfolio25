import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ContentMeta {
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
  [key: string]: string | number | boolean | string[] | undefined;
}

interface ContentItem {
  slug: string;
  meta: ContentMeta;
  content: string;
  filePath: string;
}

// Get content directory path
const getContentDir = (type: "portfolio" | "blog") => {
  return path.join(process.cwd(), "src", "content", type);
};

// Parse markdown file
const parseMarkdownFile = (filePath: string, slug: string): ContentItem => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    meta: data as ContentMeta,
    content,
    filePath,
  };
};

// Get content for a specific type
const getContentForType = (type: "portfolio" | "blog"): ContentItem[] => {
  const contentDir = getContentDir(type);

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);
  const contentItems: ContentItem[] = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Look for index.md or folder-name.md
      const indexPath = path.join(filePath, "index.md");
      const namedPath = path.join(filePath, `${file}.md`);

      if (fs.existsSync(indexPath)) {
        contentItems.push(parseMarkdownFile(indexPath, file));
      } else if (fs.existsSync(namedPath)) {
        contentItems.push(parseMarkdownFile(namedPath, file));
      }
    } else if (file.endsWith(".md")) {
      const slug = file.replace(".md", "");
      contentItems.push(parseMarkdownFile(filePath, slug));
    }
  }

  // Sort by publish date (newest first)
  return contentItems.sort((a, b) => {
    const dateA = new Date(a.meta.publishDate || "1970-01-01");
    const dateB = new Date(b.meta.publishDate || "1970-01-01");
    return dateB.getTime() - dateA.getTime();
  });
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") as "portfolio" | "blog";

  if (!type || !["portfolio", "blog"].includes(type)) {
    return NextResponse.json(
      { error: "Invalid content type" },
      { status: 400 }
    );
  }

  try {
    const content = getContentForType(type);
    return NextResponse.json(content);
  } catch (error) {
    console.error(`Error loading ${type} content:`, error);
    return NextResponse.json(
      { error: "Failed to load content" },
      { status: 500 }
    );
  }
}
