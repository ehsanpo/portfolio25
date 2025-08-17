import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import { ArrowLeft } from "lucide-react";
import {
  getAllPortfolioSlugs,
  getPortfolioItem,
} from "@/utils/portfolioContent";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each portfolio item
export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getPortfolioItem(resolvedParams.slug);

  if (!project) {
    return {
      title: "Portfolio Item Not Found",
      description: "The requested portfolio item could not be found.",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: project.image
        ? [
            {
              url: `/optimized/portfolio/${project.slug}/${project.image}`,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const resolvedParams = await params;
  const project = getPortfolioItem(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Transform basic portfolio data into CaseStudyLayout format
  const sections = [
    {
      id: "overview",
      title: "Project Overview",
      content: project.content,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/portfolio">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Use CaseStudyLayout for proper portfolio presentation */}
      <CaseStudyLayout
        title={project.title}
        description={project.description}
        heroImage={
          project.image
            ? `/optimized/portfolio/${project.slug}/${project.image}`
            : undefined
        }
        client={project.client || "Personal Project"}
        role={project.role || "Full-Stack Developer"}
        duration={project.year || "2024"}
        technologies={project.technologies || []}
        category={project.category || "Web Development"}
        status="completed"
        demoUrl={project.website}
        githubUrl={project.github}
        sections={sections}
      />
    </div>
  );
}
