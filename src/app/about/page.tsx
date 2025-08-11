import React from "react";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { ArrowRight, Code, Heart, Coffee } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Self-taught developer turned design system architect, passionate
            about creating tools that empower teams to build beautiful,
            consistent experiences.
          </p>
        </div>

        {/* Overview */}
        <Card className="p-8">
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 text-primary-500 mr-3" />
            <h2 className="text-2xl font-semibold">My Journey</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              Started as a self-taught developer with a passion for both code
              and design. Over the years, I've specialized in building design
              systems that bridge the gap between design and development teams.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach focuses on creating scalable, maintainable component
              libraries that not only look great but also provide excellent
              developer experience and accessibility out of the box.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary-500 mb-2">8+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Design Systems
              </div>
            </div>
          </div>
        </Card>

        {/* Philosophy */}
        <Card className="p-8">
          <div className="flex items-center mb-6">
            <Heart className="h-6 w-6 text-primary-500 mr-3" />
            <h2 className="text-2xl font-semibold">Philosophy</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Design with Purpose</h3>
              <p className="text-muted-foreground">
                Every component should solve a real problem and provide clear
                value to both developers and end users.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Developer Experience First</h3>
              <p className="text-muted-foreground">
                Great tools make great products. I prioritize intuitive APIs,
                comprehensive documentation, and excellent tooling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Accessibility by Default</h3>
              <p className="text-muted-foreground">
                Inclusive design isn't optional. Every component is built with
                accessibility best practices from day one.
              </p>
            </div>
          </div>
        </Card>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <Badge className="mb-4">Core Values</Badge>
            <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Continuous learning and growth</li>
              <li>• Collaboration over competition</li>
              <li>• Quality over quantity</li>
              <li>• Empathy in every interaction</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Coffee className="h-5 w-5 text-primary-500 mr-2" />
              <Badge>Fun Fact</Badge>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              It's Always Time for Tea
            </h3>
            <p className="text-muted-foreground">
              You'll often find me with a cup of green tea while coding. I
              believe the best solutions come from a calm, focused mind.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
