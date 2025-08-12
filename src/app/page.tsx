"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Star, Users, Award } from "lucide-react";

export default function HomePage() {
  const t = useTranslations('hero');
  const nav = useTranslations('navigation');
  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('greeting')} <span className="gradient-text">{t('title')}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              {t('cta')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              {nav('design-system')}
            </Button>
          </div>
        </div>

        {/* Featured Work */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground">
              Recent projects and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group">
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Enterprise Design System
              </h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive component library serving 50+ applications
              </p>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Storybook</Badge>
              </div>
              <Button variant="ghost" className="p-0 h-auto">
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="group">
              <div className="aspect-video bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Component Documentation
              </h3>
              <p className="text-muted-foreground mb-4">
                Interactive documentation with live code examples
              </p>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">Storybook</Badge>
                <Badge variant="secondary">MDX</Badge>
                <Badge variant="secondary">Figma</Badge>
              </div>
              <Button variant="ghost" className="p-0 h-auto">
                View Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="group">
              <div className="aspect-video bg-gradient-to-br from-accent-500 to-primary-500 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Brand Identity System
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete visual identity with design tokens and guidelines
              </p>
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">Design Tokens</Badge>
                <Badge variant="secondary">Figma</Badge>
                <Badge variant="secondary">Brand</Badge>
              </div>
              <Button variant="ghost" className="p-0 h-auto">
                View System <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-muted-foreground">Components Built</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-3xl font-bold">100+</span>
              </div>
              <p className="text-muted-foreground">Developers Served</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <ArrowRight className="h-6 w-6 text-primary-500 mr-2" />
                <span className="text-3xl font-bold">99%</span>
              </div>
              <p className="text-muted-foreground">Uptime Achieved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
