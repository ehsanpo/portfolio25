"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import {
  getPortfolioHeroImage,
  getPortfolioGalleryImages,
} from "@/utils/portfolioImages";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { type ContentItem } from "@/utils/localizedContent";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const { currentLocale } = useLanguage();
  const [project, setProject] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string>("");

  // Get slug from params
  useEffect(() => {
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    };
    getSlug();
  }, [params]);

  // Load project data when slug or locale changes
  useEffect(() => {
    if (!slug) return;

    const loadProject = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/content?type=portfolio&slug=${slug}&locale=${currentLocale}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError("Project not found");
          } else {
            setError("Failed to load project");
          }
          setProject(null);
          return;
        }

        const projectData = await response.json();
        setProject(projectData);
      } catch (err) {
        setError("Failed to load project");
        console.error("Error loading project:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug, currentLocale]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading project...</p>
        </div>
      </div>
    );
  }

  // Show error or not found
  if (error || !project) {
    return (
      <div className="min-h-screen p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The project "{slug}" could not be found.
          </p>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Prepare hero image
  const heroImage = getPortfolioHeroImage(slug, project.meta);

  // Prepare gallery images
  const galleryImages = getPortfolioGalleryImages(slug, project.meta);

  // Prepare sections from content
  const sections = [
    {
      id: "overview",
      title: "Project Overview",
      content:
        project.content ||
        project.meta.description ||
        "No description available.",
      images: galleryImages.length > 0 ? galleryImages : undefined,
    },
  ];

  // Prepare technologies from tags
  const technologies =
    project.meta.tag && Array.isArray(project.meta.tag)
      ? project.meta.tag
      : project.meta.tags || [];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href="/portfolio">
          <Button variant="ghost" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Case Study Layout */}
        <CaseStudyLayout
          title={project.meta.title}
          subtitle={project.meta.tagline}
          description={
            project.meta.description ||
            project.content ||
            "No description available."
          }
          heroImage={heroImage}
          client={project.meta.client || project.meta.agency}
          role="Designer & Developer"
          duration={project.meta.date || "N/A"}
          technologies={technologies}
          category={
            Array.isArray(project.meta.category)
              ? project.meta.category[0]
              : project.meta.category || "Project"
          }
          status="completed"
          demoUrl={project.meta.case_link_url}
          sections={sections}
        />

        {/* Related Projects Section - Will be added later as a client component */}
      </div>
    </div>
  );
}
