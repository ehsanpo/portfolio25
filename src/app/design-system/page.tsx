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
import {
  Palette,
  Type,
  Grid,
  Layers,
  Zap,
  Eye,
  ArrowRight,
  Sparkles,
  Heart,
  Coffee,
  Star,
} from "lucide-react";

export default function DesignSystemPage() {
  const systemOverview = {
    components: 45,
    tokens: 120,
    patterns: 25,
    guidelines: 15,
  };

  const designSystemSections = [
    {
      id: "overview",
      title: "Overview",
      description:
        "Introduction to the design system philosophy and architecture",
      icon: <Eye className="w-6 h-6" />,
      path: "/design-system/overview",
      color: "bg-blue-500",
      featured: true,
    },
    {
      id: "brand-values",
      title: "Brand Values",
      description: "Core principles that guide every design decision",
      icon: <Heart className="w-6 h-6" />,
      path: "/design-system/brand-values",
      color: "bg-red-500",
    },
    {
      id: "logo",
      title: "Logo",
      description: "Brand identity, logo variations, and usage guidelines",
      icon: <Sparkles className="w-6 h-6" />,
      path: "/design-system/logo",
      color: "bg-purple-500",
    },
    {
      id: "colors",
      title: "Colors",
      description:
        "Color palette, semantic colors, and accessibility guidelines",
      icon: <Palette className="w-6 h-6" />,
      path: "/design-system/colors",
      color: "bg-green-500",
      featured: true,
    },
    {
      id: "typography",
      title: "Typography",
      description: "Font system, hierarchy, and text styling guidelines",
      icon: <Type className="w-6 h-6" />,
      path: "/design-system/typography",
      color: "bg-yellow-500",
      featured: true,
    },
    {
      id: "iconography",
      title: "Iconography",
      description: "Icon library, styles, and usage principles",
      icon: <Grid className="w-6 h-6" />,
      path: "/design-system/iconography",
      color: "bg-indigo-500",
    },
    {
      id: "components",
      title: "Components",
      description: "Complete component library with usage examples",
      icon: <Layers className="w-6 h-6" />,
      path: "/design-system/components",
      color: "bg-pink-500",
      featured: true,
    },
    {
      id: "design-tokens",
      title: "Design Tokens",
      description: "Token architecture and implementation guidelines",
      icon: <Zap className="w-6 h-6" />,
      path: "/design-system/design-tokens",
      color: "bg-orange-500",
    },
    {
      id: "spacing",
      title: "Spacing",
      description: "Spatial relationships and layout principles",
      icon: <Grid className="w-6 h-6" />,
      path: "/design-system/spacing",
      color: "bg-teal-500",
    },
    {
      id: "motion",
      title: "Motion",
      description: "Animation principles and interaction patterns",
      icon: <Zap className="w-6 h-6" />,
      path: "/design-system/motion",
      color: "bg-cyan-500",
    },
    {
      id: "accessibility",
      title: "Accessibility",
      description: "Inclusive design practices and WCAG compliance",
      icon: <Eye className="w-6 h-6" />,
      path: "/design-system/accessibility",
      color: "bg-lime-500",
    },
    {
      id: "design-guidelines",
      title: "Design Guidelines",
      description: "Best practices and design principles",
      icon: <Star className="w-6 h-6" />,
      path: "/design-system/design-guidelines",
      color: "bg-rose-500",
    },
  ];

  const featuredSections = designSystemSections.filter(
    (section) => section.featured
  );

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Design <span className="gradient-text">System</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive design system that brings consistency, scalability,
            and beauty to every digital experience.
          </p>
        </div>

        {/* System Overview Stats */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">System Overview</h2>
            <p className="text-muted-foreground">
              A complete design language built for modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Layers className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl mb-1">
                  {systemOverview.components}
                </CardTitle>
                <CardDescription>Components</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl mb-1">
                  {systemOverview.tokens}
                </CardTitle>
                <CardDescription>Design Tokens</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Grid className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl mb-1">
                  {systemOverview.patterns}
                </CardTitle>
                <CardDescription>UI Patterns</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl mb-1">
                  {systemOverview.guidelines}
                </CardTitle>
                <CardDescription>Guidelines</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Sections</h2>
            <p className="text-muted-foreground">
              Start exploring the most important parts of the design system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredSections.map((section) => (
              <Link key={section.id} href={section.path}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${section.color} text-white group-hover:scale-110 transition-transform`}
                      >
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">
                            {section.title}
                          </CardTitle>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                        </div>
                        <CardDescription className="leading-relaxed">
                          {section.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* All Sections Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Complete System</h2>
            <p className="text-muted-foreground">
              Explore all sections of the design system
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {designSystemSections.map((section) => (
              <Link key={section.id} href={section.path}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {section.icon}
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary-500 transition-colors">
                      {section.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {section.description}
                    </CardDescription>
                    {section.featured && (
                      <Badge variant="gradient" className="mt-3">
                        Featured
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Sparkles className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <CardTitle className="mb-3">Purposeful Beauty</CardTitle>
                <CardDescription>
                  Every design element serves a purpose while maintaining
                  aesthetic appeal. Beauty without function is decoration;
                  function without beauty is incomplete.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <CardTitle className="mb-3">Human-Centered</CardTitle>
                <CardDescription>
                  Design decisions are made with real people in mind.
                  Accessibility, usability, and inclusivity are not
                  afterthoughts but fundamental principles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                <CardTitle className="mb-3">Systematic Approach</CardTitle>
                <CardDescription>
                  Consistency through systematic design. Tokens, components, and
                  patterns work together to create cohesive experiences across
                  all touchpoints.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Personal Touch */}
        <section className="space-y-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Coffee className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <CardTitle className="text-xl mb-3">
                      Crafted with Care
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      This design system is more than documentation—it's a
                      reflection of my approach to creating digital experiences.
                      Every component, token, and guideline has been
                      thoughtfully considered and refined through real-world
                      use.
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4">Start Exploring</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dive into the design system and see how thoughtful design
                decisions create better user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/design-system/overview">
                  <Button size="lg" className="group">
                    View Overview
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/design-system/components">
                  <Button variant="outline" size="lg">
                    Browse Components
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
