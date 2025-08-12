import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { SkillsRadarChart } from "@/components/ui/SkillsRadarChart";
import { TechStackVisualizer } from "@/components/ui/TechStackVisualizer";
import { StatsDashboard } from "@/components/ui/StatsDashboard";
import { WorkExperience } from "@/components/ui/WorkExperience";
import { EducationTimeline } from "@/components/ui/EducationTimeline";
import { CertificationCard } from "@/components/ui/CertificationCard";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  Settings,
  TrendingUp,
  Target,
} from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function SkillsPage() {
  const { stacks, certifications, experience, contact } = portfolioData;

  const workExperience = experience
    .filter((exp) => exp.type === "experience")
    .map((exp) => {
      const endDate = exp.year.includes("-")
        ? exp.year.split(" - ")[1] + "-12-31"
        : exp.year + "-12-31";
      return {
        id: exp.title.toLowerCase().replace(/\s+/g, "-"),
        company: exp.org || "Professional Experience",
        position: exp.title,
        startDate: exp.year.includes("-")
          ? exp.year.split(" - ")[0] + "-01-01"
          : exp.year + "-01-01",
        endDate,
        location: "Various",
        employmentType: "full-time" as const,
        description: exp.description,
        technologies: exp.tags || [],
        current: !exp.year.includes("-") || exp.year.includes("Present"),
      };
    });

  const education = experience
    .filter((exp) => exp.type === "education")
    .map((exp) => {
      let field = "Technology";
      if (exp.description.includes("Music")) {
        field = "Music Production";
      } else if (exp.description.includes("Programming")) {
        field = "Programming";
      } else if (exp.description.includes("Electricity")) {
        field = "Automation";
      }

      return {
        id: exp.org.toLowerCase().replace(/\s+/g, "-"),
        institution: exp.org,
        degree: exp.title,
        field,
        startDate: exp.year + "-01-01",
        endDate: exp.year + "-12-31",
        location: contact.location,
        description: exp.description,
      };
    });

  const skillIcons = {
    "Front-end": <Code2 className="w-6 h-6" />,
    Backend: <Database className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Design: <Palette className="w-6 h-6" />,
    Cloud: <Globe className="w-6 h-6" />,
    DevOps: <Settings className="w-6 h-6" />,
    Apps: <Smartphone className="w-6 h-6" />,
    Multimedia: <Palette className="w-6 h-6" />,
  };

  const techSkills = stacks.flatMap((stack) => {
    const categoryMap: Record<
      string,
      | "design"
      | "frontend"
      | "backend"
      | "mobile"
      | "devops"
      | "database"
      | "other"
    > = {
      "front-end": "frontend",
      backend: "backend",
      database: "database",
      design: "design",
      cloud: "devops",
      devops: "devops",
      mobile: "mobile",
    };

    return stack.labels.map((label, index) => ({
      id: `${stack.slug}-${label}`.toLowerCase().replace(/\s+/g, "-"),
      name: label,
      category: categoryMap[stack.slug.toLowerCase()] || "other",
      level: parseInt(stack.data[index]) * 10,
      experience: "Professional",
      projects: Math.floor(Math.random() * 30) + 5,
      description: `${label} technology from ${stack.slug} stack`,
    }));
  });

  const githubStats = {
    totalRepos: 45,
    totalCommits: 2500,
    totalStars: 120,
    totalForks: 30,
    followers: 85,
    following: 60,
    contributions: 450,
    streak: 65,
    languages: [
      { name: "TypeScript", percentage: 45, color: "#3178c6" },
      { name: "JavaScript", percentage: 35, color: "#f7df1e" },
      { name: "CSS", percentage: 15, color: "#1572b6" },
      { name: "Other", percentage: 5, color: "#666" },
    ],
    recentActivity: [
      {
        type: "commit" as const,
        repo: "portfolio25",
        message: "Added new components",
        date: "2024-01-15",
      },
      {
        type: "pr" as const,
        repo: "design-system",
        message: "Updated color tokens",
        date: "2024-01-14",
      },
    ],
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, experience levels,
            and areas of expertise in modern web development.
          </p>
        </div>

        {/* Stats Dashboard */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">GitHub Wrapped</h2>
            <p className="text-muted-foreground">
              My development activity and achievements by the numbers
            </p>
          </div>

          <StatsDashboard githubStats={githubStats} />
        </section>

        {/* Skills Radar Chart */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Skill Chart</h2>
            <p className="text-muted-foreground">
              Visual representation of my technical competencies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SkillsRadarChart />
          </div>
        </section>

        {/* Tech Stack Visualizer */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Tech Timeline</h2>
            <p className="text-muted-foreground">
              Evolution of my technology stack over time
            </p>
          </div>

          <TechStackVisualizer skills={techSkills} />
        </section>

        {/* Technology Stacks */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Technology Stacks</h2>
            <p className="text-muted-foreground">
              My expertise across different technology domains
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {stacks.map((stack) => (
              <Card
                key={stack.slug}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary-500">
                      {skillIcons[stack.slug as keyof typeof skillIcons] || (
                        <Code2 className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{stack.slug}</CardTitle>
                      <CardDescription>
                        Professional expertise in {stack.slug.toLowerCase()}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {stack.labels.map((label, index) => {
                      const level = parseInt(stack.data[index]) * 10;
                      return (
                        <div key={label} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{label}</span>
                            <span className="text-sm font-medium">
                              {level}%
                            </span>
                          </div>
                          <Progress value={level} className="h-2" />
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.labels.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Development Process</h2>
            <p className="text-muted-foreground">
              My approach to building quality software
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-lg mb-2">Plan</CardTitle>
                <CardDescription>
                  Requirements analysis, architecture planning, and technology
                  selection
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Code2 className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-lg mb-2">Build</CardTitle>
                <CardDescription>
                  Iterative development with clean code, testing, and
                  documentation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-lg mb-2">Test</CardTitle>
                <CardDescription>
                  Comprehensive testing including unit, integration, and e2e
                  tests
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <CardTitle className="text-lg mb-2">Deploy</CardTitle>
                <CardDescription>
                  Optimized builds, CI/CD pipelines, and performance monitoring
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.name}
                title={cert.name}
                issuer="Professional Certification"
                issueDate={cert.year}
                description={`Certified in ${cert.name}`}
                logo={cert.img}
              />
            ))}
          </div>
        </section>

        {/* Work Experience Timeline */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Work Experience Timeline
            </h2>
            <p className="text-muted-foreground">
              Professional journey and key milestones
            </p>
          </div>

          <WorkExperience experience={workExperience} variant="timeline" />
        </section>

        {/* Education Timeline */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Education Timeline</h2>
            <p className="text-muted-foreground">
              Learning journey and continuous education
            </p>
          </div>

          <EducationTimeline education={education} variant="timeline" />
        </section>
      </div>
    </div>
  );
}
