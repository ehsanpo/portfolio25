import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Building Scalable Component APIs",
      excerpt:
        "How to design component interfaces that grow with your team and product requirements.",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Design Systems",
      featured: true,
    },
    {
      title: "TypeScript Patterns for Better DX",
      excerpt:
        "Leveraging TypeScript's type system to create better developer experiences.",
      date: "Dec 10, 2023",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "The Evolution of Design Tokens",
      excerpt:
        "From static stylesheets to dynamic design token systems that scale.",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      category: "Design Systems",
    },
    {
      title: "Accessibility in Component Libraries",
      excerpt:
        "Ensuring your design system components are accessible by default.",
      date: "Nov 28, 2023",
      readTime: "7 min read",
      category: "Accessibility",
    },
  ];

  const categories = [
    "All",
    "Design Systems",
    "Development",
    "Accessibility",
    "UX Design",
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on design systems, development best practices, and building
            better user experiences.
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
        {posts.filter((post) => post.featured)[0] && (
          <Card className="p-8 border-primary-500/20 bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
            <Badge className="mb-4">Featured</Badge>
            <h2 className="text-2xl font-bold mb-4">
              {posts.filter((post) => post.featured)[0].title}
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              {posts.filter((post) => post.featured)[0].excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {posts.filter((post) => post.featured)[0].date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {posts.filter((post) => post.featured)[0].readTime}
                </div>
                <Badge variant="secondary">
                  {posts.filter((post) => post.featured)[0].category}
                </Badge>
              </div>
              <Button className="group">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        )}

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
          <div className="space-y-6">
            {posts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.title}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto group-hover:text-primary-500 transition-colors"
                    >
                      Read More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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
