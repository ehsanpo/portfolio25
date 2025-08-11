"use client";

import React from "react";
import { type SitemapPage, getAllPages } from "../../utils/sitemapParser";
import { useI18n } from "../../hooks/useI18n";
import { Button } from "../ui/Button";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../../utils/cn";

interface BreadcrumbProps {
  currentPath: string;
  onNavigate?: (page: SitemapPage) => void;
  className?: string;
}

export function Breadcrumb({
  currentPath,
  onNavigate,
  className,
}: Readonly<BreadcrumbProps>) {
  const { t } = useI18n();

  const getBreadcrumbPath = (path: string): SitemapPage[] => {
    const allPages = getAllPages();
    const currentPage = allPages.find((page) => page.path === path);

    if (!currentPage) return [];

    const breadcrumbs: SitemapPage[] = [];

    // Always add home if not already home
    if (path !== "/") {
      const homePage = allPages.find((page) => page.path === "/");
      if (homePage) {
        breadcrumbs.push(homePage);
      }
    }

    // Split path and build breadcrumb chain
    const pathSegments = path.split("/").filter(Boolean);
    let currentPath = "";

    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      const page = allPages.find((p) => p.path === currentPath);
      if (page && !breadcrumbs.find((b) => b.path === page.path)) {
        breadcrumbs.push(page);
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbPath(currentPath);

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs for home page or single-level pages
  }

  return (
    <nav
      aria-label={t("nav.breadcrumb") || "Breadcrumb"}
      className={cn("flex items-center space-x-1 text-sm", className)}
    >
      {breadcrumbs.map((page, index) => {
        const isLast = index === breadcrumbs.length - 1;
        const isHome = page.path === "/";

        return (
          <React.Fragment key={page.path}>
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => !isLast && onNavigate?.(page)}
              disabled={isLast}
              className={cn(
                "h-auto p-1 text-sm font-medium",
                isLast
                  ? "text-foreground cursor-default hover:bg-transparent"
                  : "text-muted-foreground hover:text-foreground",
                isHome && "px-2"
              )}
            >
              {isHome ? (
                <div className="flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">{t("nav.home") || "Home"}</span>
                </div>
              ) : (
                <span className="truncate max-w-32">
                  {t(`nav.${page.title.toLowerCase()}`) || page.title}
                </span>
              )}
            </Button>
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
