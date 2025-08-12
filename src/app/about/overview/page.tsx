import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Lightbulb, Code, Palette, Users, Target, Coffee } from "lucide-react";

export default function AboutOverviewPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            The journey of a self-taught developer driven by curiosity and
            passion
          </p>
        </div>

        {/* Introduction */}
        <section className="prose prose-lg max-w-none">
          <Card className="p-8">
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hello! I'm a self-taught developer who found their calling in
                the intersection of code and creativity. My journey began with
                curiosity—wondering how websites worked led to countless hours
                of experimentation, learning, and eventually, a career I'm
                passionate about.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">What Drives Me</h2>
            <p className="text-muted-foreground">
              The principles that guide my work and approach to development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <CardTitle>Curiosity First</CardTitle>
                </div>
                <CardDescription>
                  Every problem is a puzzle waiting to be solved. I approach
                  challenges with genuine curiosity, always asking "what if?"
                  and "how might we?"
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-500" />
                  <CardTitle>Craft & Quality</CardTitle>
                </div>
                <CardDescription>
                  Code is poetry in motion. I believe in writing clean,
                  maintainable code that not only works today but stands the
                  test of time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-6 h-6 text-purple-500" />
                  <CardTitle>Design Thinking</CardTitle>
                </div>
                <CardDescription>
                  Every pixel has purpose. I approach development through a
                  design lens, ensuring functionality never comes at the expense
                  of user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-green-500" />
                  <CardTitle>Human-Centered</CardTitle>
                </div>
                <CardDescription>
                  Technology should enhance human connection, not replace it. I
                  build solutions that put people first, always considering
                  accessibility and inclusion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Learning Philosophy</h2>
          </div>

          <Card className="p-8">
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Target className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Practice-Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Learning by doing, building real projects that solve real
                    problems
                  </p>
                </div>
                <div>
                  <Code className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Community-Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    Contributing to open source, sharing knowledge, and learning
                    from others
                  </p>
                </div>
                <div>
                  <Lightbulb className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Future-Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Staying curious about emerging technologies and evolving
                    best practices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Personal Touch */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Beyond the Code</h2>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
            <CardContent>
              <div className="flex items-start gap-4">
                <Coffee className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">When I'm Not Coding</h3>
                  <p className="text-muted-foreground mb-4">
                    You'll find me exploring new coffee shops (always in search
                    of the perfect brew), reading about design philosophy, or
                    experimenting with new technologies just for fun. I believe
                    the best solutions come from a well-rounded perspective, and
                    life outside of work often provides the most unexpected
                    inspiration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="neutral">Coffee Enthusiast</Badge>
                    <Badge variant="neutral">Design Lover</Badge>
                    <Badge variant="neutral">Continuous Learner</Badge>
                    <Badge variant="neutral">Problem Solver</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Focus */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Current Focus</h2>
          </div>

          <Card className="p-6">
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Currently, I'm passionate about advancing design systems,
                  exploring the intersection of AI and user experience, and
                  building tools that make developers' lives easier. I'm always
                  looking for opportunities to contribute to meaningful projects
                  and collaborate with like-minded professionals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Design Systems</Badge>
                  <Badge>Frontend Architecture</Badge>
                  <Badge>Developer Experience</Badge>
                  <Badge>Performance Optimization</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
