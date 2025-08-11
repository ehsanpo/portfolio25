import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Settings,
  Users,
  Globe,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Design System Development",
      description:
        "Complete design system architecture from tokens to components",
      icon: Palette,
      features: [
        "Design Tokens",
        "Component Library",
        "Documentation",
        "Figma Integration",
      ],
    },
    {
      title: "Frontend Development",
      description:
        "Modern web applications with React, TypeScript, and Next.js",
      icon: Code,
      features: [
        "React/Next.js",
        "TypeScript",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      title: "UI/UX Consulting",
      description: "User experience strategy and interface design guidance",
      icon: Users,
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      title: "Performance Optimization",
      description: "Web performance audits and optimization strategies",
      icon: Zap,
      features: [
        "Core Web Vitals",
        "Bundle Optimization",
        "Caching Strategy",
        "Monitoring",
      ],
    },
    {
      title: "Technical Leadership",
      description: "Engineering management and technical strategy consulting",
      icon: Settings,
      features: [
        "Team Leadership",
        "Architecture Planning",
        "Code Review",
        "Mentoring",
      ],
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end web application development and deployment",
      icon: Globe,
      features: [
        "Backend APIs",
        "Database Design",
        "DevOps",
        "Cloud Deployment",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development services for modern web applications,
            design systems, and digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto group-hover:text-primary-500 transition-colors"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Consulting CTA */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary-500/5 to-secondary-500/5">
          <h2 className="text-2xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements
            and create a tailored solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
