import React from "react";
import { type Metadata } from "next";

import { HeroBlock } from "@/components/blocks/HeroBlock";
import { ProjectGridBlock } from "@/components/blocks/ProjectGridBlock";
import {
  getAllPortfolioItems,
  getFeaturedPortfolioItems,
} from "@/utils/portfolioContent";

export const metadata: Metadata = {
  title: "Portfolio | Ehsan Pourhadi",
  description:
    "Explore my portfolio of web development projects, from modern React applications to comprehensive design systems.",
  openGraph: {
    title: "Portfolio | Ehsan Pourhadi",
    description:
      "Explore my portfolio of web development projects, from modern React applications to comprehensive design systems.",
    type: "website",
  },
};

export default function PortfolioPage() {
  // Get all portfolio items at build time
  const allProjects = getAllPortfolioItems();
  const featuredProjects = getFeaturedPortfolioItems();

  // Convert portfolio items to the format expected by ProjectGridBlock
  const projectsForGrid = allProjects.map((project) => ({
    id: project.slug,
    title: project.title,
    description: project.description,
    image: project.image
      ? `/optimized/portfolio/${project.slug}/${project.image}`
      : undefined,
    href: `/portfolio/${project.slug}`,
    tags: project.tags,
  }));

  const featuredProjectsForGrid = featuredProjects.map((project) => ({
    id: project.slug,
    title: project.title,
    description: project.description,
    image: project.image
      ? `/optimized/portfolio/${project.slug}/${project.image}`
      : undefined,
    href: `/portfolio/${project.slug}`,
    tags: project.tags,
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Portfolio Hero */}
      <HeroBlock
        title="My Portfolio"
        subtitle="Explore my collection of web development projects, from modern React applications to comprehensive design systems."
        primaryCta={{
          label: "View Featured Work",
          href: "#featured",
        }}
        secondaryCta={{
          label: "All Projects",
          href: "#all-projects",
        }}
      />

      {/* Featured Projects */}
      {featuredProjectsForGrid.length > 0 && (
        <div id="featured">
          <ProjectGridBlock
            title="Featured Projects"
            projects={featuredProjectsForGrid}
            columns={3}
          />
        </div>
      )}

      {/* All Projects */}
      <div id="all-projects">
        <ProjectGridBlock
          title="All Projects"
          projects={projectsForGrid}
          columns={3}
        />
      </div>
    </div>
  );
}
