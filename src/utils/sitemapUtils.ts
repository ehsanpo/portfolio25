import sitemap from "../../docs/Sitemap.json";

export interface SitemapPage {
  path: string;
  title: string;
  description?: string;
  sections?: Array<{ title: string; type: string }>;
  children?: SitemapPage[];
}

export interface NavigationItem {
  path: string;
  title: string;
  children?: NavigationItem[];
}

function parseSitemapEntry(entry: any): SitemapPage {
  return {
    path: entry.path,
    title: entry.title,
    description: entry.description,
    sections: entry.sections,
    children: entry.children?.map(parseSitemapEntry),
  };
}

export function getAllPages(): SitemapPage[] {
  const pages: SitemapPage[] = [];

  for (const [, entry] of Object.entries(sitemap)) {
    const page = parseSitemapEntry(entry);
    pages.push(page);

    // Add children recursively
    if (page.children) {
      const addChildren = (children: SitemapPage[]) => {
        children.forEach((child) => {
          pages.push(child);
          if (child.children) {
            addChildren(child.children);
          }
        });
      };
      addChildren(page.children);
    }
  }

  return pages;
}

export function getNavigationStructure(): NavigationItem[] {
  const mainPages = [
    "home",
    "about",
    "portfolio",
    "services",
    "skills",
    "blog",
    "toolbox",
    "design_system",
    "case_studies",
    "music",
    "contact",
  ];

  return mainPages
    .map((key) => {
      const entry = (sitemap as any)[key];
      if (!entry) return null;

      const item: NavigationItem = {
        path: entry.path,
        title: entry.title,
      };

      if (entry.children) {
        item.children = entry.children.map((child: any) => ({
          path: child.path,
          title: child.title,
          children: child.children?.map((grandchild: any) => ({
            path: grandchild.path,
            title: grandchild.title,
          })),
        }));
      }

      return item;
    })
    .filter(Boolean) as NavigationItem[];
}

export function getPageByPath(path: string): SitemapPage | null {
  const allPages = getAllPages();
  return allPages.find((page) => page.path === path) || null;
}
