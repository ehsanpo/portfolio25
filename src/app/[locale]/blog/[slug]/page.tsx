import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, Share, Bookmark } from "lucide-react";
import { getBlogContent, parseMarkdownFile } from "@/utils/contentParser";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  // Get all blog content to find the specific item
  const blogItems = getBlogContent();
  const post = blogItems.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Parse the full markdown content
  const fullContent = parseMarkdownFile(`content/blog/${params.slug}.md`);

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
            {fullContent ? (
              <div dangerouslySetInnerHTML={{ __html: fullContent.content }} />
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
        <div className="space-y-6 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogItems
              .filter((item) => item.slug !== params.slug)
              .slice(0, 2)
              .map((relatedPost) => (
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
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogItems = getBlogContent();

  return blogItems.map((item) => ({
    slug: item.slug,
  }));
}
