"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { usePortfolioContent } from "@/hooks/useContent";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getPortfolioPreviewImage } from "@/utils/portfolioImages";
import { ArrowRight, Filter, Grid, List, Calendar, Clock } from "lucide-react";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const { content: portfolioItems, loading, error } = usePortfolioContent();

  if (loading) {
    return (
      <div className="min-h-screen p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading portfolio: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("title")} <span className="gradient-text"></span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {t("filter")}
            </Button>
            <div className="flex gap-2">
              <Badge variant="secondary">
                {t("all")} ({portfolioItems.length})
              </Badge>
              <Badge variant="neutral">Design Systems</Badge>
              <Badge variant="neutral">Web Development</Badge>
              <Badge variant="neutral">Mobile</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.slug}
              className="group hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image/Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-t-lg overflow-hidden">
                <img
                  src={getPortfolioPreviewImage(item.slug, item.meta as any)}
                  alt={item.meta.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6 pt-6">
                {/* Changed pt-0 to pt-6 */}
                {/* Project Category */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.meta.category || "Project"}
                  </Badge>
                  {item.meta.featured && (
                    <Badge variant="primary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {item.meta.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.meta.description || item.meta.excerpt}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  {item.meta.publishDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.meta.publishDate).toLocaleDateString()}
                    </div>
                  )}
                  {item.meta.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.meta.readTime}
                    </div>
                  )}
                </div>

                {/* Tags */}
                {item.meta.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.meta.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="neutral" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.meta.tags.length > 3 && (
                      <Badge variant="neutral" className="text-xs">
                        +{item.meta.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}

                {/* View Project Button */}
                <Link href={`/portfolio/${item.slug}`}>
                  <Button className="w-full group/btn">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {portfolioItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Projects will appear here once content is added to the portfolio.
            </p>
          </div>
        )}

        {portfolioItems.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
