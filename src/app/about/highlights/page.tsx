import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { WorkExperience } from "@/components/ui/WorkExperience";
import { EducationTimeline } from "@/components/ui/EducationTimeline";
import { Trophy, Calendar, ExternalLink } from "lucide-react";

export default function AboutHighlightsPage() {
  const workExperience = [
    {
      id: "tech-innovators",
      company: "Tech Innovators Inc.",
      position: "Senior Frontend Developer",
      startDate: "2022-01-01",
      location: "Remote",
      employmentType: "full-time" as const,
      description:
        "Led frontend architecture decisions and mentored junior developers while building scalable React applications.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
      achievements: [
        "Improved application performance by 40% through optimization",
        "Mentored 5 junior developers",
        "Implemented comprehensive testing strategy",
      ],
      current: true,
    },
    {
      id: "digital-solutions",
      company: "Digital Solutions Ltd.",
      position: "Frontend Developer",
      startDate: "2020-01-01",
      endDate: "2022-01-01",
      location: "Stockholm, Sweden",
      employmentType: "full-time" as const,
      description:
        "Developed and maintained multiple client projects, focusing on responsive design and user experience.",
      technologies: ["React", "JavaScript", "SASS", "Webpack"],
      achievements: [
        "Delivered 12+ client projects on time",
        "Established design system reducing development time by 30%",
        "Improved accessibility compliance to WCAG 2.1 AA",
      ],
    },
    {
      id: "startup-ventures",
      company: "StartUp Ventures",
      position: "Junior Developer",
      startDate: "2019-01-01",
      endDate: "2020-01-01",
      location: "Stockholm, Sweden",
      employmentType: "full-time" as const,
      description:
        "First professional role, contributing to various frontend projects and learning industry best practices.",
      technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
      achievements: [
        "Contributed to 8+ projects in first year",
        "Learned modern development workflows",
        "Built first production-ready applications",
      ],
    },
  ];

  const education = [
    {
      id: "self-directed",
      institution: "Various Online Platforms",
      degree: "Self-Directed Learning",
      field: "Web Development",
      startDate: "2018-01-01",
      location: "Online",
      description:
        "Continuous learning through courses, documentation, and hands-on projects",
      coursework: [
        "Completed 50+ online courses",
        "Built 20+ personal projects",
        "Contributed to open source projects",
      ],
      current: true,
    },
    {
      id: "cs-fundamentals",
      institution: "FreeCodeCamp & CS50",
      degree: "Computer Science Fundamentals",
      field: "Computer Science",
      startDate: "2018-01-01",
      endDate: "2019-12-31",
      location: "Online",
      description:
        "Foundation in computer science principles and web development",
      honors: [
        "Full Stack Web Development Certification",
        "Responsive Web Design Certification",
        "JavaScript Algorithms and Data Structures",
      ],
    },
  ];

  const achievements = [
    {
      id: "open-source",
      title: "Open Source Contributor",
      description: "Active contributor to various open source projects",
      year: "2021 - Present",
      icon: <Trophy className="w-5 h-5" />,
      details: [
        "5+ repositories contributed to",
        "50+ pull requests merged",
        "Documentation improvements",
      ],
    },
    {
      id: "speaker",
      title: "Tech Conference Speaker",
      description: "Presented on modern frontend development practices",
      year: "2023",
      icon: <Calendar className="w-5 h-5" />,
      details: [
        "'Building Scalable Design Systems' at React Nordic",
        "Workshop on Performance Optimization",
      ],
    },
    {
      id: "certifications",
      title: "Certification Achievements",
      description: "Industry-recognized certifications and training",
      year: "2019 - 2023",
      icon: <Trophy className="w-5 h-5" />,
      details: [
        "AWS Certified Developer",
        "Google Analytics Certified",
        "Accessibility Specialist (IAAP)",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Highlights</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Key milestones and achievements in my professional journey
          </p>
        </div>

        {/* Work Experience */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground">
              My career progression and key contributions
            </p>
          </div>

          <WorkExperience experience={workExperience} />
        </section>

        {/* Education & Learning */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Education & Learning</h2>
            <p className="text-muted-foreground">
              Self-directed learning journey and formal education
            </p>
          </div>

          <EducationTimeline education={education} />
        </section>

        {/* Key Achievements */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground">
              Notable accomplishments and recognitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary-500">{achievement.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="mb-4">
                    {achievement.description}
                  </CardDescription>
                  <ul className="space-y-1">
                    {achievement.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <p className="text-muted-foreground">
              Technical skills developed throughout my career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Frontend Development</h3>
                <div className="space-y-2">
                  <Badge variant="primary">React</Badge>
                  <Badge variant="primary">Next.js</Badge>
                  <Badge variant="primary">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Design Systems</h3>
                <div className="space-y-2">
                  <Badge variant="secondary">Component Libraries</Badge>
                  <Badge variant="secondary">Design Tokens</Badge>
                  <Badge variant="secondary">Storybook</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Performance</h3>
                <div className="space-y-2">
                  <Badge variant="success">Web Vitals</Badge>
                  <Badge variant="success">Code Splitting</Badge>
                  <Badge variant="success">Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Accessibility</h3>
                <div className="space-y-2">
                  <Badge variant="warning">WCAG 2.1</Badge>
                  <Badge variant="warning">Screen Readers</Badge>
                  <Badge variant="warning">Inclusive Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Projects */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Current Projects</h2>
            <p className="text-muted-foreground">
              What I'm working on right now
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="mb-2">
                      Design System Portfolio
                    </CardTitle>
                    <Badge variant="gradient">In Progress</Badge>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <CardDescription className="mb-4">
                  Building a comprehensive portfolio showcasing design system
                  development and modern frontend practices.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="neutral">Next.js</Badge>
                  <Badge variant="neutral">TypeScript</Badge>
                  <Badge variant="neutral">Tailwind</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="mb-2">
                      Open Source Contributions
                    </CardTitle>
                    <Badge variant="glass">Ongoing</Badge>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                </div>
                <CardDescription className="mb-4">
                  Contributing to React ecosystem projects and maintaining
                  several developer tools and utilities.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="neutral">React</Badge>
                  <Badge variant="neutral">OSS</Badge>
                  <Badge variant="neutral">Community</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
