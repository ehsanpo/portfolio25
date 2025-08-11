import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Camera, Users, Lightbulb, Eye, Palette, Grid } from 'lucide-react';

export function Photography() {
  const photoTypes = [
    {
      icon: Users,
      title: 'People & Lifestyle',
      description: 'Authentic moments that showcase real people using our products',
      guidelines: ['Natural expressions', 'Diverse representation', 'Candid interactions', 'Professional quality'],
      usage: 'Hero sections, testimonials, about pages',
    },
    {
      icon: Lightbulb,
      title: 'Product Photography',
      description: 'Clean, focused shots that highlight product features and benefits',
      guidelines: ['Consistent lighting', 'Minimal backgrounds', 'Sharp focus', 'Multiple angles'],
      usage: 'Product pages, feature highlights, documentation',
    },
    {
      icon: Eye,
      title: 'Environmental',
      description: 'Contextual shots showing products and services in real-world settings',
      guidelines: ['Natural environments', 'Authentic contexts', 'Good composition', 'Brand alignment'],
      usage: 'Case studies, landing pages, marketing materials',
    },
    {
      icon: Palette,
      title: 'Abstract & Conceptual',
      description: 'Artistic images that convey ideas, emotions, or brand values',
      guidelines: ['Strong visual metaphors', 'Brand color harmony', 'Clean composition', 'High impact'],
      usage: 'Blog headers, concept illustrations, brand moments',
    },
  ];

  const technicalSpecs = [
    { aspect: 'Resolution', requirement: 'Minimum 2400px wide for hero images', note: 'Higher resolution for print materials' },
    { aspect: 'Format', requirement: 'WebP with JPEG fallback', note: 'PNG for images requiring transparency' },
    { aspect: 'Compression', requirement: '80-90% quality for web', note: 'Balance file size with visual quality' },
    { aspect: 'Color Space', requirement: 'sRGB for web, Adobe RGB for print', note: 'Consistent color reproduction' },
    { aspect: 'Aspect Ratios', requirement: '16:9, 4:3, 1:1, 3:2 standard ratios', note: 'Multiple crops for responsive design' },
  ];

  const styleGuidelines = [
    {
      category: 'Lighting',
      good: ['Natural, soft lighting', 'Even exposure', 'Minimal harsh shadows', 'Consistent color temperature'],
      avoid: ['Overexposed highlights', 'Deep shadows', 'Mixed color temperatures', 'Artificial-looking lighting'],
    },
    {
      category: 'Composition',
      good: ['Rule of thirds', 'Leading lines', 'Balanced elements', 'Clear focal points'],
      avoid: ['Cluttered backgrounds', 'Tilted horizons', 'Distracting elements', 'Poor framing'],
    },
    {
      category: 'Color',
      good: ['Brand color harmony', 'Natural skin tones', 'Consistent saturation', 'Complementary palettes'],
      avoid: ['Oversaturated colors', 'Unnatural tints', 'Clashing color schemes', 'Inconsistent processing'],
    },
    {
      category: 'Subject Matter',
      good: ['Authentic moments', 'Diverse representation', 'Professional quality', 'Brand alignment'],
      avoid: ['Staged-looking poses', 'Stereotypical imagery', 'Poor quality shots', 'Off-brand content'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Photography</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Our photography guidelines ensure consistent, high-quality imagery that supports our brand story and connects with our audience.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Photography Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Photography Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Our photography captures authentic moments and real experiences. We prioritize natural lighting, 
            genuine expressions, and diverse representation. Every image should feel approachable, professional, 
            and aligned with our brand values of inclusivity and human-centered design.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Authentic</Badge>
            <Badge variant="glass">Inclusive</Badge>
            <Badge variant="glass">Professional</Badge>
            <Badge variant="glass">Natural</Badge>
          </div>
        </Card>

        {/* Photo Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {photoTypes.map((type, index) => {
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
                    <h5 className="text-sm font-medium font-basement text-foreground mb-2">Guidelines</h5>
                    <ul className="space-y-1">
                      {type.guidelines.map((guideline, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-1">Usage</h5>
                    <p className="text-xs text-muted-foreground font-kabel">{type.usage}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Technical Specifications</CardTitle>
          <CardDescription className="font-kabel">Technical requirements for photography assets</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="flex items-start justify-between p-4 glass-card rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold font-basement text-foreground mb-1">{spec.aspect}</h4>
                    <p className="text-sm text-muted-foreground font-kabel">{spec.requirement}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-xs text-muted-foreground font-kabel italic">{spec.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Style Guidelines */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Style Guidelines</CardTitle>
          <CardDescription className="font-kabel">Visual standards for consistent photography</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {styleGuidelines.map((guideline, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <h4 className="font-semibold font-basement text-foreground mb-4">{guideline.category}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium font-basement text-success-500 mb-2">✓ Good Practices</h5>
                      <ul className="space-y-1">
                        {guideline.good.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                            <span className="text-success-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium font-basement text-error-500 mb-2">✗ Avoid</h5>
                      <ul className="space-y-1">
                        {guideline.avoid.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                            <span className="text-error-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Example Applications */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Example Applications</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            How photography is used across different contexts
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Hero Section */}
              <div className="p-4 glass-card rounded-lg border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg mb-3 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white/60" />
                </div>
                <h5 className="font-basement text-white mb-1 text-sm">Hero Section</h5>
                <p className="text-xs text-white/70 font-kabel">Large, impactful lifestyle photography</p>
              </div>

              {/* Product Showcase */}
              <div className="p-4 glass-card rounded-lg border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-lg mb-3 flex items-center justify-center">
                  <Grid className="w-8 h-8 text-white/60" />
                </div>
                <h5 className="font-basement text-white mb-1 text-sm">Product Grid</h5>
                <p className="text-xs text-white/70 font-kabel">Clean product shots with consistent styling</p>
              </div>

              {/* Team Photos */}
              <div className="p-4 glass-card rounded-lg border border-white/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-lg mb-3 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white/60" />
                </div>
                <h5 className="font-basement text-white mb-1 text-sm">Team Photos</h5>
                <p className="text-xs text-white/70 font-kabel">Professional portraits with personality</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sourcing Guidelines */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Sourcing Guidelines</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Preferred Sources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Custom photography (preferred)</li>
                  <li>• High-quality stock from Unsplash</li>
                  <li>• Licensed images from Getty/Shutterstock</li>
                  <li>• User-generated content (with permission)</li>
                  <li>• Professional photo shoots</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Quality Checklist</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• High resolution and sharp focus</li>
                  <li>• Proper licensing and attribution</li>
                  <li>• Brand-appropriate subject matter</li>
                  <li>• Consistent with style guidelines</li>
                  <li>• Optimized for web performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Considerations */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Accessibility Considerations</CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 glass-card rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-2">Alt Text</h4>
                <p className="text-sm text-muted-foreground font-kabel mb-3">
                  Provide descriptive alt text that conveys the meaning and context of images.
                </p>
                <div className="bg-muted/50 p-3 rounded text-xs font-mono">
                  alt="Team members collaborating around a laptop in a bright, modern office space"
                </div>
              </div>
              
              <div className="p-4 glass-card rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-2">Text Overlay</h4>
                <p className="text-sm text-muted-foreground font-kabel">
                  Ensure sufficient contrast when placing text over images. Use overlays or image treatments as needed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}