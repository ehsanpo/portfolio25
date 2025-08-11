import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Palette, Type, Layers, Grid, Zap, Shield, Smartphone } from 'lucide-react';

export function Overview() {
  const features = [
    {
      icon: Palette,
      title: 'Color System',
      description: 'Comprehensive color palette with semantic meaning and accessibility in mind.',
    },
    {
      icon: Type,
      title: 'Typography',
      description: 'Carefully crafted type scale with optimal readability and visual hierarchy.',
    },
    {
      icon: Layers,
      title: 'Components',
      description: 'Reusable components with consistent styling and interactive states.',
    },
    {
      icon: Grid,
      title: 'Spacing System',
      description: '8px-based spacing system for consistent rhythm and alignment.',
    },
    {
      icon: Zap,
      title: 'Interactive States',
      description: 'Smooth animations and micro-interactions for enhanced user experience.',
    },
    {
      icon: Shield,
      title: 'Accessibility',
      description: 'WCAG compliant with proper contrast ratios and keyboard navigation.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach with breakpoints optimized for all devices.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center block-reveal">
        <h1 className="text-5xl md:text-6xl font-bold font-basement gradient-text mb-6 animate-gradient">
          Design System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-kabel">
          A comprehensive design system built for modern web applications. 
          Featuring beautiful components, consistent spacing, and thoughtful interactions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg" className="font-semibold">
            Get Started
          </Button>
          <Button variant="glass" size="lg">
            View Components
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card variant="glass" hover className="text-center">
          <div className="text-3xl font-bold font-basement gradient-text mb-2">50+</div>
          <div className="text-sm text-muted-foreground font-kabel">Components</div>
        </Card>
        <Card variant="neon" hover className="text-center">
          <div className="text-3xl font-bold font-basement text-secondary-400 mb-2">7</div>
          <div className="text-sm text-muted-foreground font-kabel">Color Palettes</div>
        </Card>
        <Card variant="gradient" hover className="text-center">
          <div className="text-3xl font-bold font-basement text-white mb-2">100%</div>
          <div className="text-sm text-white/80 font-kabel">Accessible</div>
        </Card>
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-3xl font-bold font-basement text-foreground text-center mb-4">
          Everything you need to build great interfaces
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-kabel">
          Our design system provides all the building blocks you need to create consistent, 
          beautiful, and accessible user interfaces.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const variants = ['glass', 'default', 'gradient'] as const;
            const variant = variants[index % 3];
            
            return (
              <Card key={index} variant={variant} hover padding="lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <CardTitle className="text-base mb-2 font-basement">{feature.title}</CardTitle>
                    <CardDescription className="font-kabel">{feature.description}</CardDescription>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Version Info */}
      <Card variant="gradient" padding="lg" className="border-primary-500/30">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <CardTitle className="font-basement text-white">Version 2.0.0</CardTitle>
              <Badge variant="success">Stable</Badge>
            </div>
            <CardDescription className="text-white/80 font-kabel">
              The latest stable release with dark mode, glassmorphism effects, and enhanced animations.
            </CardDescription>
          </div>
          <div className="flex gap-3">
            <Button variant="glass" size="sm">
              Changelog
            </Button>
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              Download
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}