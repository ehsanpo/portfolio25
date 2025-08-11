import sitemapData from "../../docs/Sitemap.json";

export interface SitemapSection {
  title: string;
  type: string;
  content?: string;
  [key: string]: any;
}

export interface SitemapPage {
  path: string;
  title: string;
  description?: string;
  sections?: SitemapSection[];
  children?: SitemapPage[];
  type?: string;
}

export interface SitemapData {
  [key: string]: SitemapPage;
}

// Parse the sitemap JSON into a usable structure
export function parseSitemap(): SitemapData {
  return sitemapData as unknown as SitemapData;
}

// Get all pages from sitemap (including children)
export function getAllPages(): SitemapPage[] {
  const sitemap = parseSitemap();
  const pages: SitemapPage[] = [];

  Object.values(sitemap).forEach((page) => {
    pages.push(page);

    // Add children pages if they exist
    if (page.children) {
      page.children.forEach((child) => {
        pages.push(child);

        // Add nested children if they exist
        if (child.children) {
          pages.push(...child.children);
        }
      });
    }
  });

  return pages;
}

// Get page by path
export function getPageByPath(path: string): SitemapPage | undefined {
  const pages = getAllPages();
  return pages.find((page) => page.path === path);
}

// Get navigation items (main pages only)
export function getNavigationItems(): Array<{ label: string; href: string }> {
  const sitemap = parseSitemap();

  return Object.values(sitemap)
    .filter((page) => !page.path.includes(":") && page.path !== "/404") // Filter out dynamic routes and 404
    .map((page) => ({
      label: page.title,
      href: page.path,
    }));
}

// Get breadcrumbs for a given path
export function getBreadcrumbs(
  path: string
): Array<{ label: string; href: string }> {
  const breadcrumbs: Array<{ label: string; href: string }> = [];

  // Always start with home
  breadcrumbs.push({ label: "Home", href: "/" });

  if (path === "/") {
    return breadcrumbs;
  }

  const sitemap = parseSitemap();

  // Find the page and its parent
  for (const page of Object.values(sitemap)) {
    if (page.path === path) {
      breadcrumbs.push({ label: page.title, href: page.path });
      break;
    }

    // Check children
    if (page.children) {
      const childPage = page.children.find((child) => child.path === path);
      if (childPage) {
        breadcrumbs.push({ label: page.title, href: page.path });
        breadcrumbs.push({ label: childPage.title, href: childPage.path });
        break;
      }

      // Check nested children
      for (const child of page.children) {
        if (child.children) {
          const nestedChild = child.children.find(
            (nested) => nested.path === path
          );
          if (nestedChild) {
            breadcrumbs.push({ label: page.title, href: page.path });
            breadcrumbs.push({ label: child.title, href: child.path });
            breadcrumbs.push({
              label: nestedChild.title,
              href: nestedChild.path,
            });
            break;
          }
        }
      }
    }
  }

  return breadcrumbs;
}
