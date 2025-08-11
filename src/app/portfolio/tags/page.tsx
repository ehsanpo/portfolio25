import React from "react";
import { Card } from "../../../components/ui/Card";
import { Badge } from "../../../components/ui/Badge";

export default function PortfolioTagsPage() {
  const tags = [
    "React",
    "TypeScript",
    "Design System",
    "Next.js",
    "Tailwind",
    "Storybook",
    "Figma",
    "Component Library",
    "UI/UX",
    "Frontend",
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio <span className="gradient-text">Tags</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse projects by technology and category
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">All Tags</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-primary-500 hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
