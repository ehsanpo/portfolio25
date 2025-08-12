import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  // In a real app, you would fetch case study data based on the slug
  const caseStudy = {
    title: "Design System Implementation",
    category: "Design Systems",
    duration: "6 months",
    client: "Tech Startup",
    role: "Lead Designer & Developer",
    description:
      "Complete redesign and development of a scalable design system for a growing tech startup.",
    challenge:
      "The company had inconsistent UI components across multiple products, leading to poor user experience and development inefficiency.",
    solution:
      "Designed and implemented a comprehensive design system with reusable components, clear documentation, and automated testing.",
    results: [
      "70% reduction in development time for new features",
      "Improved brand consistency across all products",
      "95% developer adoption rate within 3 months",
    ],
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            {caseStudy.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            {caseStudy.title}
          </h1>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>Duration: {caseStudy.duration}</span>
            <span>Client: {caseStudy.client}</span>
            <span>Role: {caseStudy.role}</span>
          </div>
        </div>

        {/* Overview */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.description}
          </p>
        </Card>

        {/* Challenge */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.challenge}
          </p>
        </Card>

        {/* Solution */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-muted-foreground leading-relaxed">
            {caseStudy.solution}
          </p>
        </Card>

        {/* Results */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <ul className="space-y-3">
            {caseStudy.results.map((result) => (
              <li key={result} className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span className="text-muted-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8">
          <Button variant="outline">← Previous Case Study</Button>
          <Button variant="outline">Next Case Study →</Button>
        </div>
      </div>
    </div>
  );
}
