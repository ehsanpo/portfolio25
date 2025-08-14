import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaseStudyLayout } from "@/components/ui/CaseStudyLayout";
import {
  getOptimizedImagePath,
  getPortfolioHeroImage,
  getPortfolioGalleryImages,
} from "@/utils/portfolioImages";
import { ArrowLeft } from "lucide-react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface ContentMeta {
  title: string;
  description?: string;
  excerpt?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  date?: string;
  author?: string;
  agency?: string;
  client?: string;
  background_image?: string;
  logo?: string;
  tagline?: string;
  case_link_url?: string;
  [key: string]: string | number | boolean | string[] | undefined;
}

interface PortfolioItem {
  slug: string;
  meta: ContentMeta;
  content: string;
  filePath: string;
}

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

// Server-side data fetching - direct file system access
async function getPortfolioItem(slug: string): Promise<PortfolioItem | null> {
  try {
    const contentDir = path.join(process.cwd(), "src", "content", "portfolio");
    const projectDir = path.join(contentDir, slug);
    const projectFile = path.join(projectDir, `${slug}.md`);

    if (!fs.existsSync(projectFile)) {
      return null;
    }

    const fileContent = fs.readFileSync(projectFile, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      meta: data as ContentMeta,
      content,
      filePath: projectFile,
    };
  } catch (error) {
    console.error("Error fetching portfolio item:", error);
    return null;
  }
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = await getPortfolioItem(slug);

  if (!project) {
    notFound();
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

        {/* Related Projects Section */}
        <RelatedProjects currentSlug={slug} />
      </div>
    </div>
  );
}

// Related Projects Component
async function RelatedProjects({ currentSlug }: { currentSlug: string }) {
  try {
    const contentDir = path.join(process.cwd(), "src", "content", "portfolio");
    const files = fs.readdirSync(contentDir);
    const portfolioItems: PortfolioItem[] = [];

    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && file !== currentSlug) {
        const projectFile = path.join(filePath, `${file}.md`);
        if (fs.existsSync(projectFile)) {
          const fileContent = fs.readFileSync(projectFile, "utf8");
          const { data, content } = matter(fileContent);
          portfolioItems.push({
            slug: file,
            meta: data as ContentMeta,
            content,
            filePath: projectFile,
          });
        }
      }
    }

    const relatedProjects = portfolioItems.slice(0, 2);

    if (relatedProjects.length === 0) {
      return null;
    }

    return (
      <div className="space-y-6 pt-12 border-t border-border">
        <h2 className="text-2xl font-bold">Related Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedProjects.map((relatedProject: PortfolioItem) => (
            <Link
              key={relatedProject.slug}
              href={`/portfolio/${relatedProject.slug}`}
              className="group"
            >
              <div className="p-6 border border-border rounded-lg hover:border-primary-500/50 transition-colors">
                <Badge variant="secondary" className="mb-3">
                  {relatedProject.meta.category || "Project"}
                </Badge>
                <h3 className="font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {relatedProject.meta.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {relatedProject.meta.excerpt ||
                    relatedProject.meta.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {relatedProject.meta.publishDate && (
                    <span>
                      {new Date(
                        relatedProject.meta.publishDate
                      ).toLocaleDateString()}
                    </span>
                  )}
                  {relatedProject.meta.readTime && (
                    <span>{relatedProject.meta.readTime}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching related projects:", error);
    return null;
  }
}

// Generate static params for all portfolio projects
export async function generateStaticParams() {
  try {
    const contentDir = path.join(process.cwd(), "src", "content", "portfolio");
    const files = fs.readdirSync(contentDir);
    const slugs: string[] = [];

    for (const file of files) {
      const filePath = path.join(contentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        const projectFile = path.join(filePath, `${file}.md`);
        if (fs.existsSync(projectFile)) {
          slugs.push(file);
        }
      }
    }

    return slugs.map((slug: string) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
