import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { SectionDivider } from '../ui/SectionDivider';
import { Badge } from '../ui/Badge';
import { Waves, Scissors, Triangle, Smile, Zap, MoreHorizontal } from 'lucide-react';

export function SectionDividers() {
  const dividerTypes = [
    {
      variant: 'clip' as const,
      name: 'Clip Path Divider',
      icon: Scissors,
      description: 'Angular geometric design with notches',
      usage: 'Modern layouts, tech-focused content',
    },
    {
      variant: 'diagonal' as const,
      name: 'Diagonal Divider',
      description: 'Simple angled cut design',
      icon: Triangle,
      usage: 'Clean sections, minimal layouts',
    },
    {
      variant: 'curve' as const,
      name: 'Curve Divider',
      description: 'Smooth curved transition',
      icon: Smile,
      usage: 'Soft transitions, friendly designs',
    },
    {
      variant: 'zigzag' as const,
      name: 'Zigzag Divider',
      icon: Zap,
      description: 'Dynamic zigzag pattern',
      usage: 'Energetic sections, creative layouts',
    },
    {
      variant: 'dots' as const,
      name: 'Dots Divider',
      icon: MoreHorizontal,
      description: 'Animated dot pattern',
      usage: 'Subtle separations, loading states',
    },
  ];

  const colors = [
    { name: 'Primary', value: 'primary' as const, bg: 'bg-primary-500' },
    { name: 'Secondary', value: 'secondary' as const, bg: 'bg-secondary-500' },
    { name: 'Accent', value: 'accent' as const, bg: 'bg-accent-500' },
    { name: 'White', value: 'white' as const, bg: 'bg-white' },
  ];

  const heights = [
    { name: 'Small', value: 'sm' as const, description: '64px height' },
    { name: 'Medium', value: 'md' as const, description: '96px height' },
    { name: 'Large', value: 'lg' as const, description: '128px height' },
    { name: 'Extra Large', value: 'xl' as const, description: '192px height' },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Section Dividers</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Visual separators that create smooth transitions between content sections with various geometric patterns.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Divider Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Design Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Section dividers create visual rhythm and help organize content into digestible chunks. 
            They should enhance the flow of information while adding visual interest without being distracting. 
            Each divider style conveys a different mood and works best with specific content types.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Rhythmic</Badge>
            <Badge variant="glass">Purposeful</Badge>
            <Badge variant="glass">Scalable</Badge>
            <Badge variant="glass">Responsive</Badge>
          </div>
        </Card>

        {/* Divider Variants */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Divider Variants</CardTitle>
          <CardDescription className="font-kabel">Different styles for various design contexts</CardDescription>
          <CardContent>
            <div className="space-y-8">
              {dividerTypes.map((divider, index) => {
                const Icon = divider.icon;
                return (
                  <div key={divider.variant} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-500/20 rounded-lg border border-primary-500/30">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-basement text-foreground text-lg">{divider.name}</h4>
                        <p className="text-sm text-muted-foreground font-kabel">{divider.description}</p>
                      </div>
                      <Badge variant="neutral" className="ml-auto">
                        {divider.usage}
                      </Badge>
                    </div>
                    
                    {/* Divider Examples */}
                    <div className="space-y-4">
                      {/* Normal */}
                      <div>
                        <div className="text-sm font-basement text-foreground mb-2">Normal Direction</div>
                        <div className="bg-muted/30 rounded-lg overflow-hidden">
                          <SectionDivider 
                            variant={divider.variant}
                            color="primary"
                            height="md"
                          />
                        </div>
                      </div>
                      
                      {/* Flipped */}
                      <div>
                        <div className="text-sm font-basement text-foreground mb-2">Flipped Direction</div>
                        <div className="bg-muted/30 rounded-lg overflow-hidden">
                          <SectionDivider 
                            variant={divider.variant}
                            color="secondary"
                            height="md"
                            flip={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Color Options */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Color Options</CardTitle>
          <CardDescription className="font-kabel">Different color variants for various backgrounds</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {colors.map((color) => (
                <div key={color.value} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded ${color.bg}`} />
                    <span className="font-basement text-foreground">{color.name}</span>
                  </div>
                  <div className="bg-muted/30 rounded-lg overflow-hidden">
                    <SectionDivider 
                      variant="wave"
                      color={color.value}
                      height="sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Height Options */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Height Options</CardTitle>
          <CardDescription className="font-kabel">Different sizes for various layout needs</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {heights.map((height) => (
                <div key={height.value} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-basement text-foreground">{height.name}</span>
                    <Badge variant="neutral" className="text-xs">{height.description}</Badge>
                  </div>
                  <div className="bg-muted/30 rounded-lg overflow-hidden">
                    <SectionDivider 
                      variant="curve"
                      color="primary"
                      height={height.value}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Usage Examples</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            How to use section dividers in real layouts
          </CardDescription>
          <CardContent>
            <div className="space-y-8">
              {/* Hero to Content Transition */}
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Hero to Content Transition</h4>
                <div className="glass-card rounded-lg border border-white/20 overflow-hidden">
                  {/* Mock hero section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-center">
                    <h3 className="text-2xl font-bold font-basement text-white mb-2">Hero Section</h3>
                    <p className="text-white/80 font-kabel">Main call-to-action area</p>
                  </div>
                  
                  {/* Divider */}
                  <SectionDivider variant="wave" color="white" height="md" />
                  
                  {/* Mock content section */}
                  <div className="bg-background p-8 text-center">
                    <h3 className="text-xl font-basement text-foreground mb-2">Content Section</h3>
                    <p className="text-muted-foreground font-kabel">Main content area</p>
                  </div>
                </div>
              </div>

              {/* Content to Footer Transition */}
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Content to Footer Transition</h4>
                <div className="glass-card rounded-lg border border-white/20 overflow-hidden">
                  {/* Mock content section */}
                  <div className="bg-background p-8 text-center">
                    <h3 className="text-xl font-basement text-foreground mb-2">Main Content</h3>
                    <p className="text-muted-foreground font-kabel">Article or page content</p>
                  </div>
                  
                  {/* Divider */}
                  <SectionDivider variant="clip" color="primary" height="lg" />
                  
                  {/* Mock footer section */}
                  <div className="bg-primary-500 p-8 text-center">
                    <h3 className="text-xl font-basement text-white mb-2">Footer Section</h3>
                    <p className="text-white/80 font-kabel">Contact and links</p>
                  </div>
                </div>
              </div>

              {/* Multiple Dividers */}
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Multiple Section Flow</h4>
                <div className="glass-card rounded-lg border border-white/20 overflow-hidden">
                  {/* Section 1 */}
                  <div className="bg-background p-6 text-center">
                    <h4 className="font-basement text-foreground">Section One</h4>
                  </div>
                  
                  <SectionDivider variant="diagonal" color="secondary" height="sm" />
                  
                  {/* Section 2 */}
                  <div className="bg-secondary-500/10 p-6 text-center">
                    <h4 className="font-basement text-foreground">Section Two</h4>
                  </div>
                  
                  <SectionDivider variant="curve" color="accent" height="sm" flip={true} />
                  
                  {/* Section 3 */}
                  <div className="bg-accent-500/10 p-6 text-center">
                    <h4 className="font-basement text-foreground">Section Three</h4>
                  </div>
                  
                  <SectionDivider variant="zigzag" color="primary" height="sm" />
                  
                  {/* Section 4 */}
                  <div className="bg-primary-500/10 p-6 text-center">
                    <h4 className="font-basement text-foreground">Section Four</h4>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guide */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Implementation Guide</CardTitle>
          <CardDescription className="font-kabel">How to use section dividers effectively</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Basic Usage</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`<SectionDivider 
  variant="clip" 
  color="primary" 
  height="md" 
/>`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Advanced Usage</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`<SectionDivider 
  variant="clip" 
  color="secondary" 
  height="lg" 
  flip={true}
  className="my-8"
/>`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Between Sections</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`<section className="bg-primary-500">
  {/* Hero content */}
</section>

<SectionDivider 
  variant="clip" 
  color="primary" 
  height="md" 
/>

<section className="bg-background">
  {/* Main content */}
</section>`}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Best Practices</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-success-500">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use dividers to create visual hierarchy</li>
                  <li>• Match divider style to overall design theme</li>
                  <li>• Consider the content flow and transitions</li>
                  <li>• Use appropriate colors for background contrast</li>
                  <li>• Test dividers at different screen sizes</li>
                  <li>• Use flip property for directional variety</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Overuse dividers - they lose impact</li>
                  <li>• Use dividers that clash with content style</li>
                  <li>• Make dividers too tall for mobile screens</li>
                  <li>• Use low contrast colors that disappear</li>
                  <li>• Mix too many different divider styles</li>
                  <li>• Forget to test on different backgrounds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Interactive Demo</CardTitle>
          <CardDescription className="font-kabel">Try different combinations of dividers</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Demo sections with dividers */}
              <div className="glass-card rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-center">
                  <h3 className="text-xl font-bold font-basement text-white mb-2">Welcome Section</h3>
                  <p className="text-white/80 font-kabel">Hero area with gradient background</p>
                </div>
                
                <SectionDivider variant="wave" color="white" height="md" />
                
                <div className="bg-background p-8 text-center">
                  <h3 className="text-xl font-basement text-foreground mb-2">About Section</h3>
                  <p className="text-muted-foreground font-kabel">Main content with standard background</p>
                </div>
                
                <SectionDivider variant="clip" color="accent" height="lg" />
                
                <div className="bg-accent-500/10 p-8 text-center">
                  <h3 className="text-xl font-basement text-foreground mb-2">Features Section</h3>
                  <p className="text-muted-foreground font-kabel">Highlighted content area</p>
                </div>
                
                <SectionDivider variant="curve" color="secondary" height="md" flip={true} />
                
                <div className="bg-secondary-500 p-8 text-center">
                  <h3 className="text-xl font-basement text-white mb-2">Contact Section</h3>
                  <p className="text-white/80 font-kabel">Call-to-action area</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Technical Implementation</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            How the dividers are built and optimized
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">SVG Dividers</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Scalable vector graphics for crisp edges</li>
                  <li>• preserveAspectRatio="none" for responsive scaling</li>
                  <li>• currentColor for theme integration</li>
                  <li>• Optimized viewBox for performance</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">CSS Clip-Path</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Modern CSS for geometric shapes</li>
                  <li>• Calc() functions for responsive design</li>
                  <li>• Hardware acceleration friendly</li>
                  <li>• Fallback support for older browsers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}