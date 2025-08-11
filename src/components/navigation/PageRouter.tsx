"use client";

import React, { useState, useEffect } from "react";
import { type SitemapPage, getPageByPath } from "../../utils/sitemapParser";
import { Page } from "../pages/Page";
import { SiteNavigation } from "./SiteNavigation";
import { Breadcrumb } from "./Breadcrumb";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";

interface PageRouterProps {
  initialPath?: string;
  showSidebar?: boolean;
  showBreadcrumb?: boolean;
  className?: string;
}

export function PageRouter({
  initialPath = "/",
  showSidebar = true,
  showBreadcrumb = true,
  className,
}: Readonly<PageRouterProps>) {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [currentPage, setCurrentPage] = useState<SitemapPage | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load current page based on path
  useEffect(() => {
    const page = getPageByPath(currentPath);
    setCurrentPage(page || null);
  }, [currentPath]);

  const handlePageChange = (page: SitemapPage) => {
    setCurrentPath(page.path);
    setIsSidebarOpen(false);
  };

  const handleBreadcrumbNavigate = (page: SitemapPage) => {
    setCurrentPath(page.path);
  };

  if (!currentPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The page "{currentPath}" could not be found.
          </p>
          <Button onClick={() => setCurrentPath("/")}>Go to Homepage</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-background flex", className)}>
      {/* Sidebar */}
      {showSidebar && (
        <>
          {/* Mobile Sidebar Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={cn(
              "fixed top-4 left-4 z-50 lg:hidden",
              "bg-background/80 backdrop-blur border border-border/50"
            )}
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>

          {/* Mobile Sidebar Overlay */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <button
                className="absolute inset-0 bg-black/50"
                onClick={() => setIsSidebarOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsSidebarOpen(false);
                  }
                }}
                aria-label="Close sidebar"
              />
              <div className="absolute left-0 top-0 h-full">
                <SiteNavigation
                  activePagePath={currentPath}
                  onPageChange={handlePageChange}
                  variant="sidebar"
                />
              </div>
            </div>
          )}

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <SiteNavigation
              activePagePath={currentPath}
              onPageChange={handlePageChange}
              variant="sidebar"
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Breadcrumb */}
        {showBreadcrumb && (
          <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border/50">
            <div className="container mx-auto px-4 py-3">
              <Breadcrumb
                currentPath={currentPath}
                onNavigate={handleBreadcrumbNavigate}
              />
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1">
          <Page page={currentPage} />
        </main>
      </div>
    </div>
  );
}

export default PageRouter;
