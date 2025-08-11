import React from "react";
import { SectionRenderer, BlockType } from "../blocks/BlockRegistry";
import { SitemapPage, SitemapSection } from "../../utils/sitemapParser";

interface PageProps {
  page: SitemapPage;
  className?: string;
}

export function Page({ page, className }: Readonly<PageProps>) {
  return (
    <div className={className}>
      {/* Page Header */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold font-basement gradient-text mb-4">
          {page.title}
        </h1>
        {page.description && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {page.description}
          </p>
        )}
      </div>

      {/* Render Sections */}
      {page.sections && page.sections.length > 0 && (
        <div className="space-y-16">
          {page.sections.map((section: SitemapSection, index: number) => (
            <SectionRenderer
              key={`${section.type}-${index}`}
              section={{
                ...section,
                type: section.type as BlockType,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
