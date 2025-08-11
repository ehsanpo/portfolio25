import React from "react";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Badge } from "../../../components/ui/Badge";

interface PortfolioProjectPageProps {
  params: {
    slug: string;
  };
}

export default function PortfolioProjectPage({
  params,
}: PortfolioProjectPageProps) {
  // In a real app, you would fetch project data based on the slug
  const project = {
    title: "Modern E-commerce Platform",
    category: "Web Development",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    description:
      "A fully responsive e-commerce platform with modern design and seamless user experience.",
    features: [
      "Product catalog with advanced filtering",
      "Shopping cart and checkout process",
      "User authentication and profiles",
      "Payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe API",
    ],
    liveUrl: "https://example-store.com",
    githubUrl: "https://github.com/example/ecommerce-platform",
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {project.description}
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Button>View Live Project</Button>
            <Button variant="outline">View on GitHub</Button>
          </div>
        </div>

        {/* Project Image/Gallery would go here */}
        <Card className="p-8 text-center">
          <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">
              Project Screenshots & Demo
            </span>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Development Process */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Development Process
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Planning & Design</h3>
                  <p className="text-muted-foreground text-sm">
                    User research, wireframing, and UI design
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Frontend and backend implementation
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Testing & Deployment</h3>
                  <p className="text-muted-foreground text-sm">
                    Quality assurance and production deployment
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Project Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>

            {/* Links */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                <Button className="w-full" size="sm">
                  View Live Project
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  View Source Code
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8">
          <Button variant="outline">← Previous Project</Button>
          <Button variant="outline">Next Project →</Button>
        </div>
      </div>
    </div>
  );
}
