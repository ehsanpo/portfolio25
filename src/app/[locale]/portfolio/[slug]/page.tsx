import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, Share, Bookmark } from "lucide-react";
import { getPortfolioContent, parseMarkdownFile } from "@/utils/contentParser";

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const portfolioItems = getPortfolioContent();
  const project = portfolioItems.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Parse the full markdown content
  const fullContent = parseMarkdownFile(`content/portfolio/${params.slug}.md`);

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href="/portfolio">
          <Button variant="ghost" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Project Header */}
        <article className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">
                {project.meta.category || "Project"}
              </Badge>
              {project.meta.featured && (
                <Badge variant="primary">Featured</Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {project.meta.title}
            </h1>

            {project.meta.excerpt && (
              <p className="text-xl text-muted-foreground">
                {project.meta.excerpt}
              </p>
            )}

            {/* Project Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground py-4 border-y border-border">
              {project.meta.publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(project.meta.publishDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </div>
              )}
              {project.meta.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {project.meta.readTime}
                </div>
              )}
              {project.meta.client && <div>Client: {project.meta.client}</div>}
            </div>

            {/* Project Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Share className="w-4 h-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Bookmark className="w-4 h-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary-500 prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border">
            {fullContent ? (
              <div dangerouslySetInnerHTML={{ __html: fullContent.content }} />
            ) : (
              <p className="text-muted-foreground">Content not available.</p>
            )}
          </div>

          {/* Tags */}
          {project.meta.tags && (
            <div className="space-y-3 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.meta.tags.map((tag: string) => (
                  <Badge key={tag} variant="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Project Footer */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Link href="/portfolio">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                All Projects
              </Button>
            </Link>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Share className="w-4 h-4" />
                Share Project
              </Button>
            </div>
          </div>
        </article>

        {/* Related Projects Section */}
        <div className="space-y-6 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold">Related Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems
              .filter((item) => item.slug !== params.slug)
              .slice(0, 2)
              .map((relatedProject) => (
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
      </div>
    </div>
  );
}

// Generate static params for all portfolio projects
export async function generateStaticParams() {
  const portfolioItems = getPortfolioContent();
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}
