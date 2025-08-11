"use client";

import React, { useState } from "react";
import {
  type SitemapPage,
  getAllPages,
  parseSitemap,
} from "../../utils/sitemapParser";
import { SiteNavigation } from "../navigation/SiteNavigation";
import { Breadcrumb } from "../navigation/Breadcrumb";
import { PageRouter } from "../navigation/PageRouter";
import { useI18n } from "../../hooks/useI18n";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import {
  Navigation,
  Map,
  FileText,
  Layers,
  ArrowRight,
  Home,
  Briefcase,
  User,
  Mail,
} from "lucide-react";

export function NavigationDemo() {
  const { t } = useI18n();
  const [selectedDemo, setSelectedDemo] = useState<
    "overview" | "full" | "components"
  >("overview");
  const [selectedPage, setSelectedPage] = useState<string>("/");

  const allPages = getAllPages();
  const sitemap = parseSitemap();
  const topLevelPages = Object.values(sitemap);

  const demoModes = [
    {
      id: "overview" as const,
      name: "Navigation Overview",
      description: "Explore the navigation structure and statistics",
      icon: Navigation,
    },
    {
      id: "components" as const,
      name: "Component Showcase",
      description: "Test individual navigation components",
      icon: Layers,
    },
    {
      id: "full" as const,
      name: "Full Page Router",
      description: "Experience the complete navigation system",
      icon: Map,
    },
  ];

  const handlePageSelect = (page: SitemapPage) => {
    setSelectedPage(page.path);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-primary-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{allPages.length}</h3>
          <p className="text-muted-foreground">
            {t("nav.total_pages") || "Total Pages"}
          </p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-secondary-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Layers className="w-6 h-6 text-secondary-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{topLevelPages.length}</h3>
          <p className="text-muted-foreground">
            {t("nav.main_sections") || "Main Sections"}
          </p>
        </Card>

        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Navigation className="w-6 h-6 text-accent-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">3</h3>
          <p className="text-muted-foreground">Navigation Types</p>
        </Card>
      </div>

      {/* Site Structure */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Site Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topLevelPages.map((page) => {
            const getIcon = () => {
              if (page.path === "/") return Home;
              if (page.path.includes("portfolio")) return Briefcase;
              if (page.path.includes("about")) return User;
              if (page.path.includes("contact")) return Mail;
              return FileText;
            };
            const Icon = getIcon();

            return (
              <div
                key={page.path}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
              >
                <Icon className="w-5 h-5 text-primary-500" />
                <div className="flex-1">
                  <div className="font-medium">{page.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {page.path}
                  </div>
                </div>
                {page.children && (
                  <Badge variant="secondary" className="text-xs">
                    {page.children.length} children
                  </Badge>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );

  const renderComponents = () => (
    <div className="space-y-8">
      {/* Breadcrumb Demo */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Breadcrumb Navigation</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="page-selector" className="text-sm font-medium">
              Selected Page:
            </label>
            <select
              id="page-selector"
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="px-3 py-1 border border-border rounded-md bg-background text-foreground"
            >
              {allPages.map((page) => (
                <option key={page.path} value={page.path}>
                  {page.title} ({page.path})
                </option>
              ))}
            </select>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <Breadcrumb
              currentPath={selectedPage}
              onNavigate={handlePageSelect}
            />
          </div>
        </div>
      </Card>

      {/* Navigation Variants */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Navigation Variants</h3>

        <div className="space-y-6">
          {/* Horizontal Navigation */}
          <div>
            <h4 className="font-medium mb-2">Horizontal Navigation</h4>
            <div className="p-4 bg-muted/30 rounded-lg">
              <SiteNavigation
                variant="horizontal"
                activePagePath={selectedPage}
                onPageChange={handlePageSelect}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div>
            <h4 className="font-medium mb-2">Mobile Navigation</h4>
            <div className="p-4 bg-muted/30 rounded-lg">
              <SiteNavigation
                variant="mobile"
                activePagePath={selectedPage}
                onPageChange={handlePageSelect}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  const renderFullRouter = () => (
    <div className="h-[600px] border border-border rounded-lg overflow-hidden">
      <PageRouter
        initialPath={selectedPage}
        showSidebar={true}
        showBreadcrumb={true}
      />
    </div>
  );

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-basement gradient-text mb-4">
            Site Navigation System
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Complete navigation solution with breadcrumbs, sidebar, and mobile
            support
          </p>

          {/* Demo Mode Selector */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {demoModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <Button
                  key={mode.id}
                  variant={selectedDemo === mode.id ? "primary" : "outline"}
                  onClick={() => setSelectedDemo(mode.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {mode.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          {selectedDemo === "overview" && renderOverview()}
          {selectedDemo === "components" && renderComponents()}
          {selectedDemo === "full" && renderFullRouter()}
        </div>

        {/* Features List */}
        <Card className="mt-12 p-6">
          <h3 className="text-xl font-semibold mb-4">Navigation Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Sitemap-driven structure",
              "Hierarchical navigation",
              "Breadcrumb trails",
              "Mobile-responsive design",
              "Internationalization support",
              "Keyboard navigation",
              "Accessibility features",
              "Multiple display variants",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default NavigationDemo;
