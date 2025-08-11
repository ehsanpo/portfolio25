import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Download, Palette, Grid, Shield } from 'lucide-react';

const CustomLogo = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    className={className} 
    viewBox="0 0 27.8 26.7" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill="currentColor" 
      d="M0.5,19.4C0.2,19,0,18.7,0,18.2c0-0.4,0.2-0.8,0.5-1.1L17.1,0.5C17.4,0.2,17.8,0,18.2,0c0.4,0,0.8,0.2,1.1,0.5
        c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L2.7,19.4c-0.3,0.3-0.7,0.5-1.1,0.5C1.2,19.8,0.8,19.7,0.5,19.4z M12.4,25.6
        c-0.3,0.3-0.8,0.6-1.3,0.8s-1,0.3-1.5,0.3c-0.5,0-1.1-0.1-1.6-0.3c-0.5-0.2-1.1-0.5-1.5-1l-2.1-2.1c-0.4-0.4-0.6-0.8-0.5-1.2
        c0.1-0.4,0.4-0.8,0.9-1.3L20.6,5c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.8,0.2,1.1,0.5c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1
        l-15,15L9,23.4c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.5-0.1,0.7-0.4L25.1,8.4C25.4,8.1,25.8,8,26.2,8c0.4,0,0.8,0.2,1.1,0.5
        c0.3,0.3,0.5,0.7,0.5,1.1c0,0.4-0.2,0.8-0.5,1.1L12.4,25.6z"
    />
  </svg>
);

export function Logo() {
  const logoVariations = [
    {
      name: 'Primary Logo',
      description: 'Main logo for most applications',
      usage: 'Headers, business cards, primary branding',
      minSize: '32px height',
    },
    {
      name: 'Logo Mark',
      description: 'Icon-only version for compact spaces',
      usage: 'Favicons, app icons, social media profiles',
      minSize: '16px square',
    },
    {
      name: 'Horizontal Logo',
      description: 'Wide format for headers and banners',
      usage: 'Website headers, email signatures, banners',
      minSize: '120px width',
    },
    {
      name: 'Stacked Logo',
      description: 'Vertical layout for narrow spaces',
      usage: 'Sidebars, mobile apps, vertical layouts',
      minSize: '80px width',
    },
  ];

  const colorVariations = [
    { name: 'Full Color', bg: 'bg-white', description: 'Primary brand colors on light backgrounds' },
    { name: 'Reversed', bg: 'bg-neutral-900', description: 'White version for dark backgrounds' },
    { name: 'Monochrome', bg: 'bg-neutral-100', description: 'Single color for special applications' },
    { name: 'Gradient', bg: 'bg-gradient-to-r from-primary-500 to-secondary-500', description: 'Gradient version for digital applications' },
  ];

  const usageGuidelines = [
    {
      category: 'Clear Space',
      description: 'Maintain adequate space around the logo',
      rule: 'Minimum clear space equals the height of the logo mark',
    },
    {
      category: 'Minimum Size',
      description: 'Ensure legibility at small sizes',
      rule: 'Never use smaller than specified minimum sizes',
    },
    {
      category: 'Placement',
      description: 'Position logo appropriately',
      rule: 'Top-left for websites, centered for documents',
    },
    {
      category: 'Background',
      description: 'Choose appropriate background contrast',
      rule: 'Ensure sufficient contrast for accessibility',
    },
  ];

  const prohibitedUses = [
    'Stretching or distorting the logo',
    'Changing colors outside brand palette',
    'Adding effects like drop shadows or outlines',
    'Placing on busy or low-contrast backgrounds',
    'Using outdated versions of the logo',
    'Recreating or modifying the logo',
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Logo Guidelines</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Our logo is the cornerstone of our brand identity. These guidelines ensure consistent and effective use across all applications.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Logo Showcase */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Primary Logo</CardTitle>
          <div className="flex items-center justify-center p-12 glass-card rounded-lg border border-white/20 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <CustomLogo className="text-white" size={32} />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold font-basement">Portfolio</div>
                <div className="text-sm font-kabel opacity-80">Design System</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="glass">SVG Format</Badge>
            <Badge variant="glass">Scalable</Badge>
            <Badge variant="glass">Accessible</Badge>
          </div>
        </Card>

        {/* Logo Variations */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Logo Variations</CardTitle>
          <CardDescription className="font-kabel">Different versions for various use cases</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {logoVariations.map((variation, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-center justify-center h-24 bg-muted/30 rounded-lg mb-4">
                    <div className="flex items-center space-x-2">
                      <CustomLogo className="text-primary-500" size={24} />
                      {variation.name !== 'Logo Mark' && (
                        <span className="font-basement text-foreground text-sm">
                          {variation.name === 'Stacked Logo' ? (
                            <div className="text-center">
                              <div>Portfolio</div>
                              <div>Design</div>
                            </div>
                          ) : (
                            'Portfolio'
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                  <h4 className="font-semibold font-basement text-foreground mb-2">{variation.name}</h4>
                  <p className="text-sm text-muted-foreground font-kabel mb-2">{variation.description}</p>
                  <div className="text-xs text-muted-foreground font-kabel">
                    <div>Usage: {variation.usage}</div>
                    <div>Min size: {variation.minSize}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Color Variations */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Color Variations</CardTitle>
          <CardDescription className="font-kabel">Logo adaptations for different backgrounds</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {colorVariations.map((color, index) => (
                <div key={index} className="text-center">
                  <div className={`${color.bg} p-8 rounded-lg border border-border/50 mb-3 flex items-center justify-center`}>
                    <div className="flex items-center space-x-2">
                      <CustomLogo className={`${
                        color.name === 'Reversed' ? 'text-white' : 
                        color.name === 'Gradient' ? 'text-white' :
                        'text-primary-500'
                      }`} size={24} />
                      <span className={`font-basement text-sm ${
                        color.name === 'Reversed' ? 'text-white' : 
                        color.name === 'Gradient' ? 'text-white' :
                        'text-foreground'
                      }`}>
                        Logo
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold font-basement text-foreground mb-1">{color.name}</h4>
                  <p className="text-xs text-muted-foreground font-kabel">{color.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Usage Guidelines</CardTitle>
          <CardDescription className="font-kabel">Rules for proper logo implementation</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {usageGuidelines.map((guideline, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-500/20 rounded-lg">
                      <Shield className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-basement text-foreground mb-1">{guideline.category}</h4>
                      <p className="text-sm text-muted-foreground font-kabel mb-2">{guideline.description}</p>
                      <p className="text-xs text-primary-500 font-kabel font-medium">{guideline.rule}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Clear Space Example */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Clear Space Requirements</CardTitle>
          <CardDescription className="font-kabel">Visual demonstration of minimum clear space</CardDescription>
          <CardContent>
            <div className="flex items-center justify-center p-12 glass-card rounded-lg">
              <div className="relative">
                {/* Clear space indicators */}
                <div className="absolute inset-0 border-2 border-dashed border-primary-500/30 -m-8"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-primary-500 font-kabel">
                  Clear space = logo height
                </div>
                
                {/* Logo */}
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CustomLogo className="text-primary-500" size={32} />
                  <span className="font-basement text-foreground">Portfolio</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prohibited Uses */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">What Not to Do</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Common mistakes to avoid when using the logo
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {prohibitedUses.map((prohibition, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 glass-card rounded-lg border border-white/20">
                  <span className="text-error-400 font-bold text-lg">✗</span>
                  <span className="text-sm text-white/80 font-kabel">{prohibition}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Download Assets */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Download Assets</CardTitle>
          <CardDescription className="font-kabel">Logo files in various formats for different uses</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Download className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-1">SVG Package</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-3">Vector files for web and print</p>
                <button className="text-xs text-primary-500 font-kabel hover:underline">Download SVG</button>
              </div>
              
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Grid className="w-6 h-6 text-secondary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-1">PNG Package</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-3">Raster files in multiple sizes</p>
                <button className="text-xs text-primary-500 font-kabel hover:underline">Download PNG</button>
              </div>
              
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-basement text-foreground mb-1">Brand Kit</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-3">Complete brand assets package</p>
                <button className="text-xs text-primary-500 font-kabel hover:underline">Download Kit</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}