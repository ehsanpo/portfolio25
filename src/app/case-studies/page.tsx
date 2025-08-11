import React from "react";
import { Card } from "../../components/ui/Card";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Design System Implementation",
      description:
        "Complete redesign and development of a scalable design system",
      category: "Design Systems",
      duration: "6 months",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack development of a modern e-commerce solution",
      category: "Web Development",
      duration: "8 months",
    },
    {
      title: "Mobile App Design",
      description:
        "UI/UX design and prototyping for a fintech mobile application",
      category: "Mobile Design",
      duration: "4 months",
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dives into my design and development process, challenges faced,
            and solutions implemented
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-1">{study.title}</h3>
                </div>
                <p className="text-muted-foreground">{study.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{study.duration}</span>
                  <span className="text-sm text-primary">
                    View Case Study →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
