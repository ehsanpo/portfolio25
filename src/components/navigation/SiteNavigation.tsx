"use client";

import React, { useState } from "react";
import {
  parseSitemap,
  getAllPages,
  type SitemapPage,
} from "../../utils/sitemapParser";
import { useI18n } from "../../hooks/useI18n";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Settings,
  Wrench,
  Palette,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { cn } from "../../utils/cn";

// Icon mapping for different page types
const getPageIcon = (path: string, title: string) => {
  if (path === "/") return Home;
  if (path.includes("/about")) return User;
  if (path.includes("/portfolio")) return Briefcase;
  if (path.includes("/blog")) return FileText;
  if (path.includes("/contact")) return Mail;
  if (path.includes("/skills")) return Settings;
  if (path.includes("/toolbox")) return Wrench;
  if (path.includes("/design-system")) return Palette;
  return FileText; // Default icon
};

interface SiteNavigationProps {
  activePagePath?: string;
  onPageChange?: (page: SitemapPage) => void;
  variant?: "sidebar" | "horizontal" | "mobile";
  className?: string;
}

interface NavigationItemProps {
  page: SitemapPage;
  level: number;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onPageChange?: (page: SitemapPage) => void;
  activePagePath?: string;
  expandedPaths: Set<string>;
  toggleExpanded: (path: string) => void;
}

function NavigationItem({
  page,
  level,
  isActive,
  isExpanded,
  onToggle,
  onPageChange,
  activePagePath,
  expandedPaths,
  toggleExpanded,
}: Readonly<NavigationItemProps>) {
  const { t } = useI18n();
  const Icon = getPageIcon(page.path, page.title);
  const hasChildren = page.children && page.children.length > 0;

  const paddingLeft = `${level * 1.5}rem`;

  return (
    <div className="w-full">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className={cn(
          "w-full justify-start text-left group transition-all duration-200",
          isActive && "bg-primary-500/10 border-primary-500/20"
        )}
        style={{ paddingLeft }}
        onClick={() => {
          if (hasChildren) {
            onToggle();
          } else {
            onPageChange?.(page);
          }
        }}
      >
        <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
        <span className="flex-grow text-sm font-medium truncate">
          {t(`nav.${page.title.toLowerCase()}`) || page.title}
        </span>

        {hasChildren && (
          <div className="ml-2 flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </div>
        )}

        {!hasChildren && (
          <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </Button>

      {/* Children Navigation */}
      {hasChildren && isExpanded && (
        <div className="mt-1 space-y-1">
          {page.children!.map((child) => (
            <NavigationItem
              key={child.path}
              page={child}
              level={level + 1}
              isActive={activePagePath === child.path}
              isExpanded={expandedPaths?.has(child.path) || false}
              onToggle={() => toggleExpanded?.(child.path)}
              onPageChange={onPageChange}
              activePagePath={activePagePath}
              expandedPaths={expandedPaths}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteNavigation({
  activePagePath = "/",
  onPageChange,
  variant = "sidebar",
  className,
}: Readonly<SiteNavigationProps>) {
  const { t } = useI18n();
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(
    new Set(["/"])
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sitemap = parseSitemap();
  const topLevelPages = Object.values(sitemap);

  const toggleExpanded = (path: string) => {
    const newExpanded = new Set(expandedPaths);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedPaths(newExpanded);
  };

  const handlePageChange = (page: SitemapPage) => {
    onPageChange?.(page);
    setIsMobileMenuOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className={cn("lg:hidden", className)}>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
          <span className="text-sm font-medium">{t("nav.menu") || "Menu"}</span>
        </Button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setIsMobileMenuOpen(false);
                }
              }}
              aria-label="Close menu"
            />
            <Card className="absolute top-16 left-4 right-4 max-h-[calc(100vh-5rem)] overflow-y-auto p-4">
              <div className="space-y-2">
                {topLevelPages.map((page) => (
                  <NavigationItem
                    key={page.path}
                    page={page}
                    level={0}
                    isActive={activePagePath === page.path}
                    isExpanded={expandedPaths.has(page.path)}
                    onToggle={() => toggleExpanded(page.path)}
                    onPageChange={handlePageChange}
                    activePagePath={activePagePath}
                    expandedPaths={expandedPaths}
                    toggleExpanded={toggleExpanded}
                  />
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <nav className={cn("hidden lg:flex items-center space-x-1", className)}>
        {topLevelPages.slice(0, 6).map((page) => {
          const Icon = getPageIcon(page.path, page.title);
          const isActive = activePagePath === page.path;

          return (
            <Button
              key={page.path}
              variant={isActive ? "secondary" : "ghost"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className="flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden xl:inline">
                {t(`nav.${page.title.toLowerCase()}`) || page.title}
              </span>
            </Button>
          );
        })}
      </nav>
    );
  }

  // Sidebar variant (default)
  return (
    <div
      className={cn(
        "w-80 h-full bg-background/95 backdrop-blur border-r border-border/50",
        className
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold font-basement">
            {t("nav.site_navigation") || "Site Navigation"}
          </h2>
          <Badge variant="secondary" className="text-xs">
            {getAllPages().length} {t("nav.pages") || "pages"}
          </Badge>
        </div>

        <div className="space-y-1 max-h-[calc(100vh-10rem)] overflow-y-auto">
          {topLevelPages.map((page) => (
            <NavigationItem
              key={page.path}
              page={page}
              level={0}
              isActive={activePagePath === page.path}
              isExpanded={expandedPaths.has(page.path)}
              onToggle={() => toggleExpanded(page.path)}
              onPageChange={handlePageChange}
              activePagePath={activePagePath}
              expandedPaths={expandedPaths}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex justify-between">
              <span>{t("nav.total_pages") || "Total Pages"}:</span>
              <span>{getAllPages().length}</span>
            </div>
            <div className="flex justify-between">
              <span>{t("nav.main_sections") || "Main Sections"}:</span>
              <span>{topLevelPages.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteNavigation;
