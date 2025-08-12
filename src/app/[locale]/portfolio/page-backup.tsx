import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Filter, Grid, List, Calendar, Clock } from "lucide-react";
import { getPortfolioContent } from "@/utils/contentParser";

export default function PortfolioPage() {
  // Get portfolio content from markdown files
  const portfolioItems = getPortfolioContent();

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in design systems, web development, and user experience design.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <div className="flex gap-2">
              <Badge variant="secondary">All ({portfolioItems.length})</Badge>
              <Badge variant="outline">Design Systems</Badge>
              <Badge variant="outline">Web Development</Badge>
              <Badge variant="outline">Mobile</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.slug} className="group hover:shadow-lg transition-all duration-300">
              {/* Project Image/Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-t-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4 mx-auto opacity-50"></div>
                  <span className="text-sm text-muted-foreground">Project Preview</span>
                </div>
              </div>

              <div className="p-6 pt-0">
                {/* Project Category */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.meta.category || 'Project'}
                  </Badge>
                  {item.meta.featured && (
                    <Badge variant="primary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {item.meta.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.meta.description || item.meta.excerpt}
                </p>

                {/* Project Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  {item.meta.publishDate && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.meta.publishDate).toLocaleDateString()}
                    </div>
                  )}
                  {item.meta.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.meta.readTime}
                    </div>
                  )}
                </div>

                {/* Tags */}
                {item.meta.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.meta.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {item.meta.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.meta.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}

                {/* View Project Button */}
                <Link href={`/portfolio/${item.slug}`}>
                  <Button className="w-full group/btn">
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {portfolioItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Projects will appear here once content is added to the portfolio.
            </p>
          </div>
        )}

        {portfolioItems.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
      category: "Mobile App",
    },
    {
      title: "Documentation Platform",
      description:
        "Interactive documentation with live code examples and component playground",
      image: "from-primary-500 to-accent-500",
      tags: ["MDX", "Storybook", "Documentation", "Developer Tools"],
      category: "Developer Tools",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Real-time analytics dashboard with custom data visualizations",
      image: "from-secondary-500 to-primary-500",
      tags: ["D3.js", "Chart.js", "React", "Analytics"],
      category: "Data Visualization",
    },
    {
      title: "Brand Identity System",
      description:
        "Complete visual identity with design tokens and brand guidelines",
      image: "from-accent-500 to-secondary-500",
      tags: ["Figma", "Design Tokens", "Brand", "Guidelines"],
      category: "Brand Design",
    },
  ];

  const categories = [
    "All",
    "Design System",
    "Web Application",
    "Mobile App",
    "Developer Tools",
    "Data Visualization",
    "Brand Design",
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing design systems, web
            applications, and developer tools built with modern technologies.
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-primary-500 mr-2" />
              <h3 className="font-semibold">Filter Projects</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
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
        </Card>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${project.image} rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300`}
              />

              <div className="space-y-3">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto group-hover:text-primary-500 transition-colors"
                >
                  View Project{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>

        {/* Stats */}
        <Card className="p-8 text-center">
          <h3 className="text-2xl font-semibold mb-6">Portfolio Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Design Systems
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                100+
              </div>
              <div className="text-sm text-muted-foreground">
                Components Built
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500 mb-2">
                99%
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
