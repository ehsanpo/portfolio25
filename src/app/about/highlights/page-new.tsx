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
import {
  Trophy,
  Calendar,
  ExternalLink,
  Award,
  CheckCircle,
} from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function AboutHighlightsPage() {
  // Extract work experience from portfolio data
  const workExperience = portfolioData.experience
    .filter((item) => item.type === "experience")
    .map((exp) => ({
      id: exp.org.toLowerCase().replace(/\s+/g, "-"),
      company: exp.org,
      position: exp.title,
      startDate: exp.year.includes("-") ? exp.year.split(" - ")[0] : exp.year,
      endDate:
        exp.year.includes("-") && exp.year.includes("Present")
          ? undefined
          : exp.year.includes("-")
          ? exp.year.split(" - ")[1]
          : undefined,
      location: "Sweden", // Default location based on portfolio context
      employmentType: "full-time" as const,
      description: exp.description,
      technologies: exp.tags,
      achievements: exp.project?.technologies || [],
      current: exp.year.includes("Present"),
    }));

  // Extract education from portfolio data
  const education = portfolioData.experience
    .filter((item) => item.type === "education")
    .map((edu) => ({
      id: edu.org.toLowerCase().replace(/\s+/g, "-"),
      institution: edu.org,
      degree: edu.title,
      field: edu.tags.length > 0 ? edu.tags.join(", ") : "Technology",
      startDate: edu.year,
      location: "Sweden",
      description: edu.description,
      coursework: edu.project?.technologies || [],
      honors: edu.awards,
      current: false,
    }));

  // Transform certifications into achievements
  const certificationAchievements = {
    id: "certifications",
    title: "Professional Certifications",
    description: `Earned ${portfolioData.certifications.length} professional certifications across various technologies`,
    year: "2017 - 2022",
    icon: <CheckCircle className="w-5 h-5" />,
    details: portfolioData.certifications
      .slice(0, 5)
      .map((cert) => `${cert.name} (${cert.year})`),
  };

  // Transform awards into achievements
  const awardsAchievement = {
    id: "awards",
    title: "Industry Awards",
    description: `Recognized with ${portfolioData.awards.length} prestigious industry awards`,
    year: "Various Years",
    icon: <Award className="w-5 h-5" />,
    details: portfolioData.awards.map(
      (award) => `${award.name}: ${award.description}`
    ),
  };

  // Highlighted projects as achievements
  const highlightedProjects = portfolioData.experience
    .filter((item) => item.highlighted && item.project?.title)
    .slice(0, 3);

  const projectAchievements = {
    id: "highlighted-projects",
    title: "Highlighted Projects",
    description: `Led development of ${highlightedProjects.length} major projects with significant impact`,
    year: "2017 - Present",
    icon: <Trophy className="w-5 h-5" />,
    details: highlightedProjects.map((project) => project.project.title),
  };

  const achievements = [
    certificationAchievements,
    awardsAchievement,
    projectAchievements,
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
              {portfolioData.contact.yearsOfExperience} years of professional
              development experience
            </p>
          </div>

          <WorkExperience experience={workExperience} />
        </section>

        {/* Education & Learning */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Education & Learning</h2>
            <p className="text-muted-foreground">
              Continuous learning journey and formal education
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

                  <div className="space-y-2">
                    {achievement.details.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards Showcase */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground">
              Industry recognition for outstanding work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.awards.map((award, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="aspect-video mb-4 bg-muted/20 rounded-lg overflow-hidden">
                    <img
                      src={award.images}
                      alt={award.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg mb-2">{award.name}</CardTitle>
                  <CardDescription className="mb-4">
                    {award.description}
                  </CardDescription>
                  {award.link && (
                    <a
                      href={`/${award.link}`}
                      className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 text-sm font-medium"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground">
              Professional development and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {portfolioData.certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 aspect-square"
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-12 h-12 mb-3 bg-muted/20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-xs leading-tight mb-1">
                    {cert.name}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
