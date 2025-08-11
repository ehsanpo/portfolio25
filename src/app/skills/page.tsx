import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Progress } from "../../components/ui/Progress";

export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 94 },
      ],
    },
    {
      category: "Design Systems",
      skills: [
        { name: "Component Architecture", level: 95 },
        { name: "Design Tokens", level: 90 },
        { name: "Storybook", level: 85 },
        { name: "Figma", level: 80 },
        { name: "CSS-in-JS", level: 88 },
      ],
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "REST APIs", level: 85 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
      ],
    },
  ];

  const certifications = [
    "AWS Solutions Architect",
    "Google Analytics Certified",
    "React Professional Certificate",
    "Figma Professional",
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across frontend development, design systems, and
            modern web technologies.
          </p>
        </div>

        {/* Skills Chart */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6">
              <h3 className="text-xl font-semibold mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Current Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Storybook",
              "Figma",
              "Git",
              "Docker",
              "AWS",
              "Vercel",
              "Prisma",
              "PostgreSQL",
              "Jest",
              "Cypress",
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Certifications */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center p-3 rounded-lg bg-muted/30"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">8+</div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Design Systems</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Components</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
