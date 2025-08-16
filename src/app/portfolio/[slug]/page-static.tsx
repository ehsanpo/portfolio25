import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { ProseBlock } from "@/components/blocks/ProseBlock";
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

      {/* Project Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold font-basement gradient-text mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {project.client && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Client:</span>{" "}
                  <span className="font-medium">{project.client}</span>
                </div>
              )}
              {project.year && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Year:</span>{" "}
                  <span className="font-medium">{project.year}</span>
                </div>
              )}
              {project.role && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Role:</span>{" "}
                  <span className="font-medium">{project.role}</span>
                </div>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 justify-center">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="gradient" size="lg">
                    View Live Site
                  </Button>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    View Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <ProseBlock content={project.content} />
    </div>
  );
}
