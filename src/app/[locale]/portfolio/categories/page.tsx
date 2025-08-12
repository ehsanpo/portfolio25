import React from "react";
import { Card } from "@/components/ui/Card";

export default function PortfolioCategoriesPage() {
  const categories = [
    "Design Systems",
    "Web Applications",
    "Component Libraries",
    "UI/UX Design",
    "Frontend Development",
    "Full-Stack Projects",
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio <span className="gradient-text">Categories</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse projects by category
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card
              key={category}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold">{category}</h3>
              <p className="text-muted-foreground mt-2">
                View all {category.toLowerCase()} projects
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
