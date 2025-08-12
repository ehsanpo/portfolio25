import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, User, Briefcase, Coffee } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function AboutPage() {
  const { contact, experience } = portfolioData;
  const workExperience = experience.filter((exp) => exp.type === "experience");
  const education = experience.filter((exp) => exp.type === "education");

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            About <span className="gradient-text">{contact.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {contact.description}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{contact.role}</span>
            <span>•</span>
            <span>{contact.location}</span>
            <span>•</span>
            <span>{contact.yearsOfExperience} years experience</span>
          </div>
        </div>

        {/* Overview Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover my journey, philosophy, and what drives me to create
              exceptional digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-primary-500" />
                  <CardTitle>My Story</CardTitle>
                </div>
                <CardDescription className="mb-4">
                  From curiosity-driven exploration to professional mastery,
                  learn about my self-taught journey in the world of development
                  and design.
                </CardDescription>
                <Link href="/about/overview">
                  <Button variant="outline" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-primary-500" />
                  <CardTitle>Work Highlights</CardTitle>
                </div>
                <CardDescription className="mb-4">
                  Explore key projects, roles, and contributions that have
                  shaped my career and demonstrate my impact across various
                  organizations.
                </CardDescription>
                <Link href="/about/highlights">
                  <Button variant="outline" className="group">
                    View Timeline
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Summary</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <CardTitle className="mb-2">Professional Experience</CardTitle>
                <CardDescription>
                  {workExperience.length} roles across{" "}
                  {contact.yearsOfExperience} years, working with leading
                  companies and innovative startups.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <User className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <CardTitle className="mb-2">Education & Training</CardTitle>
                <CardDescription>
                  {education.length} educational experiences including
                  specialized training in web development and automation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Coffee className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <CardTitle className="mb-2">Location</CardTitle>
                <CardDescription>
                  Based in {contact.location}, working with clients globally.
                  Always up for a coffee chat about technology and design.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Preview */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground">
              A snapshot of my technical capabilities
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Design Systems",
              "UI/UX Design",
              "Frontend Architecture",
              "API Development",
              "Performance Optimization",
              "Accessibility",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Link href="/skills">
              <Button className="group">
                View Full Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
