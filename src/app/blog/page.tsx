"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { useBlogContent } from "@/hooks/useContent";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogPage() {
  const t = useTranslations('blog');
  const { content: posts, loading, error } = useBlogContent();

  if (loading) {
    return (
      <div className="min-h-screen p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-6 lg:p-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading blog: {error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const categories = [
    "All",
    "Design Systems",
    "Development",
    "Accessibility",
    "UX Design",
  ];

  // Find featured post
  const featuredPost = posts.find((post) => post.meta.featured);
  const regularPosts = posts.filter((post) => !post.meta.featured);

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="cursor-pointer hover:bg-primary-500 hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
        {/* Featured Post */}
        {featuredPost && (
          <Card className="p-8 border-primary-500/20 bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
            <Badge className="mb-4">Featured</Badge>
            <h2 className="text-2xl font-bold mb-4">
              {featuredPost.meta.title}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              {featuredPost.meta.excerpt || featuredPost.meta.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {featuredPost.meta.publishDate
                    ? new Date(
                        featuredPost.meta.publishDate
                      ).toLocaleDateString()
                    : "Recent"}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.meta.readTime || "5 min read"}
                </div>
                <Badge variant="secondary">
                  {featuredPost.meta.category || "Article"}
                </Badge>
              </div>
              <Link href={`/blog/${featuredPost.slug}`}>
                <Button className="group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Card>
        )}{" "}
        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Card
                key={post.slug}
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                      {post.meta.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.meta.excerpt || post.meta.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.meta.publishDate
                        ? new Date(post.meta.publishDate).toLocaleDateString()
                        : "Recent"}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.meta.readTime || "5 min read"}
                    </div>
                    <Badge variant="secondary">
                      {post.meta.category || "Article"}
                    </Badge>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto group-hover:text-primary-500 transition-colors"
                    >
                      Read More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Newsletter Signup */}
        <Card className="p-8 text-center bg-gradient-to-br from-secondary-500/5 to-accent-500/5">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get notified when I publish new articles about design systems and
            development.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
