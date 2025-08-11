import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ArrowRight, Filter, Grid, List } from "lucide-react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Enterprise Design System",
      description:
        "Comprehensive component library serving 50+ applications across multiple brands",
      image: "from-primary-500 to-secondary-500",
      tags: ["React", "TypeScript", "Storybook", "Design System"],
      category: "Design System",
    },
    {
      title: "E-commerce Platform",
      description:
        "Complete redesign of shopping experience with custom checkout flow",
      image: "from-secondary-500 to-accent-500",
      tags: ["Next.js", "Stripe", "Tailwind", "UX"],
      category: "Web Application",
    },
    {
      title: "Mobile Banking App",
      description:
        "React Native app with biometric authentication and real-time transactions",
      image: "from-accent-500 to-primary-500",
      tags: ["React Native", "Expo", "Security", "FinTech"],
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
