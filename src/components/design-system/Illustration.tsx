import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Image, Palette, Users, Lightbulb, Heart, Zap } from 'lucide-react';

export function Illustration() {
  const illustrationTypes = [
    {
      icon: Users,
      title: 'Character Illustrations',
      description: 'Friendly, diverse characters that represent our users',
      usage: 'Onboarding, empty states, success messages',
      style: 'Geometric, approachable, inclusive',
    },
    {
      icon: Lightbulb,
      title: 'Conceptual Graphics',
      description: 'Abstract representations of ideas and processes',
      usage: 'Feature explanations, landing pages, tutorials',
      style: 'Clean lines, meaningful metaphors, clear hierarchy',
    },
    {
      icon: Zap,
      title: 'Icon Illustrations',
      description: 'Detailed icons that go beyond simple symbols',
      usage: 'Feature highlights, category representations',
      style: 'Consistent stroke width, balanced composition',
    },
    {
      icon: Heart,
      title: 'Emotional Graphics',
      description: 'Illustrations that convey feelings and brand personality',
      usage: 'Error states, celebrations, brand moments',
      style: 'Warm colors, organic shapes, expressive elements',
    },
  ];

  const styleGuide = [
    {
      aspect: 'Color Palette',
      description: 'Use brand colors with thoughtful application',
      guidelines: [
        'Primary colors for main subjects',
        'Secondary colors for supporting elements',
        'Neutral tones for backgrounds and shadows',
        'Accent colors for highlights and details',
      ],
    },
    {
      aspect: 'Line Style',
      description: 'Consistent stroke weights and styles',
      guidelines: [
        '2-4px stroke weight for main elements',
        'Rounded line caps and joins',
        'Consistent spacing between elements',
        'Clean, geometric shapes',
      ],
    },
    {
      aspect: 'Composition',
      description: 'Balanced and purposeful layouts',
      guidelines: [
        'Clear focal points and hierarchy',
        'Generous white space',
        'Consistent perspective and scale',
        'Aligned to 8px grid system',
      ],
    },
    {
      aspect: 'Accessibility',
      description: 'Inclusive and accessible design',
      guidelines: [
        'High contrast ratios',
        'Meaningful alt text',
        'Cultural sensitivity',
        'Diverse representation',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Illustration</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Our illustration system creates cohesive, meaningful visuals that support our brand story and enhance user understanding.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Illustration Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Illustration Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Our illustrations are more than decoration—they're communication tools that clarify complex ideas, 
            guide user actions, and create emotional connections. Every illustration serves a purpose and 
            reflects our brand values of clarity, inclusivity, and human-centered design.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Purposeful</Badge>
            <Badge variant="glass">Inclusive</Badge>
            <Badge variant="glass">Consistent</Badge>
            <Badge variant="glass">Accessible</Badge>
          </div>
        </Card>

        {/* Illustration Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {illustrationTypes.map((type, index) => {
            const Icon = type.icon;
            const variants = ['glass', 'default'] as const;
            const variant = variants[index % 2];
            
            return (
              <Card key={index} variant={variant} hover padding="lg">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 font-basement">{type.title}</CardTitle>
                  </div>
                </div>
                
                <CardDescription className="font-kabel mb-4">
                  {type.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-1">Usage</h5>
                    <p className="text-xs text-muted-foreground font-kabel">{type.usage}</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-1">Style</h5>
                    <p className="text-xs text-muted-foreground font-kabel">{type.style}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Style Guide */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Style Guide</CardTitle>
          <CardDescription className="font-kabel">Visual guidelines for creating consistent illustrations</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {styleGuide.map((guide, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <h4 className="font-semibold font-basement text-foreground mb-2">{guide.aspect}</h4>
                  <p className="text-sm text-muted-foreground font-kabel mb-3">{guide.description}</p>
                  <ul className="space-y-1">
                    {guide.guidelines.map((guideline, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Example Scenarios */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Example Scenarios</CardTitle>
          <CardDescription className="font-kabel">How to apply illustrations in different contexts</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Empty State */}
              <div className="p-6 glass-card rounded-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image className="w-12 h-12 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">No projects yet</h4>
                <p className="text-sm text-muted-foreground font-kabel mb-4">
                  Create your first project to get started with our platform
                </p>
                <Badge variant="primary">Empty State Illustration</Badge>
              </div>

              {/* Success State */}
              <div className="p-6 glass-card rounded-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-success-500/20 to-accent-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-success-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">Setup complete!</h4>
                <p className="text-sm text-muted-foreground font-kabel mb-4">
                  Your account is ready and you're all set to begin
                </p>
                <Badge variant="success">Success State Illustration</Badge>
              </div>

              {/* Feature Highlight */}
              <div className="p-6 glass-card rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-lg flex items-center justify-center">
                    <Palette className="w-8 h-8 text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-basement text-foreground mb-1">Advanced Customization</h4>
                    <p className="text-sm text-muted-foreground font-kabel">
                      Tailor every aspect of your workspace to match your workflow
                    </p>
                  </div>
                  <Badge variant="secondary">Feature Illustration</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Creation Guidelines */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Creation Guidelines</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Best practices for creating new illustrations
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Process</h4>
                <ol className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>1. Define the purpose and context</li>
                  <li>2. Sketch initial concepts</li>
                  <li>3. Apply brand colors and style</li>
                  <li>4. Test for accessibility and clarity</li>
                  <li>5. Optimize for different sizes</li>
                  <li>6. Document usage guidelines</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Technical Specs</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• SVG format for scalability</li>
                  <li>• Optimized file sizes</li>
                  <li>• Consistent naming conventions</li>
                  <li>• Proper semantic markup</li>
                  <li>• Alt text for accessibility</li>
                  <li>• Multiple size variants</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Usage Examples</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-400" />
                </div>
                <h5 className="font-basement text-foreground mb-1 text-sm">Onboarding</h5>
                <p className="text-xs text-muted-foreground font-kabel">Welcome new users</p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary-400" />
                </div>
                <h5 className="font-basement text-foreground mb-1 text-sm">Features</h5>
                <p className="text-xs text-muted-foreground font-kabel">Explain functionality</p>
              </div>
              
              <div className="text-center p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-400" />
                </div>
                <h5 className="font-basement text-foreground mb-1 text-sm">Emotions</h5>
                <p className="text-xs text-muted-foreground font-kabel">Connect with users</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}