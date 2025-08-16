import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, Share, Bookmark } from "lucide-react";

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
  author?: string;
  [key: string]: string | number | boolean | string[] | undefined;
}

interface BlogItem {
  slug: string;
  meta: ContentMeta;
  content: string;
  filePath: string;
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Server-side data fetching
async function getBlogItem(slug: string): Promise<BlogItem | null> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/content?type=blog`,
      { cache: "force-cache" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog content");
    }

    const data: BlogItem[] = await response.json();
    return data.find((item: BlogItem) => item.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching blog item:", error);
    return null;
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogItem(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">
                {post.meta.category || "Article"}
              </Badge>
              {post.meta.featured && <Badge variant="primary">Featured</Badge>}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.meta.title}
            </h1>

            {post.meta.excerpt && (
              <p className="text-xl text-muted-foreground">
                {post.meta.excerpt}
              </p>
            )}

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground py-4 border-y border-border">
              {post.meta.publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.meta.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
              {post.meta.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.meta.readTime}
                </div>
              )}
              {post.meta.author && <div>By {post.meta.author}</div>}
            </div>

            {/* Article Actions */}
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

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary-500 prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p className="text-muted-foreground">Content not available.</p>
            )}
          </div>

          {/* Tags */}
          {post.meta.tags && (
            <div className="space-y-3 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.meta.tags.map((tag) => (
                  <Badge key={tag} variant="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Article Footer */}
          <div className="flex justify-between items-center pt-8 border-t border-border">
            <Link href="/blog">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                All Articles
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Share className="w-4 h-4" />
                Share Article
              </Button>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <RelatedPosts currentSlug={slug} />
      </div>
    </div>
  );
}

// Related Posts Component
async function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/content?type=blog`,
      { cache: "force-cache" }
    );

    if (!response.ok) {
      return null;
    }

    const blogItems: BlogItem[] = await response.json();
    const relatedPosts = blogItems
      .filter((item: BlogItem) => item.slug !== currentSlug)
      .slice(0, 2);

    if (relatedPosts.length === 0) {
      return null;
    }

    return (
      <div className="space-y-6 pt-12 border-t border-border">
        <h2 className="text-2xl font-bold">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((relatedPost: BlogItem) => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="group"
            >
              <div className="p-6 border border-border rounded-lg hover:border-primary-500/50 transition-colors">
                <Badge variant="secondary" className="mb-3">
                  {relatedPost.meta.category || "Article"}
                </Badge>
                <h3 className="font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {relatedPost.meta.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {relatedPost.meta.excerpt || relatedPost.meta.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {relatedPost.meta.publishDate && (
                    <span>
                      {new Date(
                        relatedPost.meta.publishDate
                      ).toLocaleDateString()}
                    </span>
                  )}
                  {relatedPost.meta.readTime && (
                    <span>{relatedPost.meta.readTime}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return null;
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/content?type=blog`,
      { cache: "force-cache" }
    );

    if (!response.ok) {
      return [];
    }

    const blogItems: BlogItem[] = await response.json();
    return blogItems.map((item: BlogItem) => ({
      slug: item.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
