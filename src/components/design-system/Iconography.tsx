import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Home, User, Settings, Search, Heart, Star, Download, Upload, Edit, Trash, Plus, Minus, Check, X, ArrowRight, ArrowLeft, Mail, Phone, Calendar, Clock, Map, Camera, Image, Video, File, Folder, Link, Share, Copy, Save, Printer as Print, RefreshCw as Refresh } from 'lucide-react';

export function Iconography() {
  const iconCategories = [
    {
      name: 'Navigation',
      description: 'Icons for navigation and wayfinding',
      icons: [
        { icon: Home, name: 'Home' },
        { icon: ArrowRight, name: 'Arrow Right' },
        { icon: ArrowLeft, name: 'Arrow Left' },
        { icon: Search, name: 'Search' },
      ],
    },
    {
      name: 'Actions',
      description: 'Icons for user actions and interactions',
      icons: [
        { icon: Plus, name: 'Add' },
        { icon: Edit, name: 'Edit' },
        { icon: Trash, name: 'Delete' },
        { icon: Save, name: 'Save' },
      ],
    },
    {
      name: 'Communication',
      description: 'Icons for communication and contact',
      icons: [
        { icon: Mail, name: 'Email' },
        { icon: Phone, name: 'Phone' },
        { icon: Share, name: 'Share' },
        { icon: Link, name: 'Link' },
      ],
    },
    {
      name: 'Media',
      description: 'Icons for media and file types',
      icons: [
        { icon: Image, name: 'Image' },
        { icon: Video, name: 'Video' },
        { icon: Camera, name: 'Camera' },
        { icon: File, name: 'File' },
      ],
    },
    {
      name: 'Interface',
      description: 'Icons for interface elements',
      icons: [
        { icon: Settings, name: 'Settings' },
        { icon: User, name: 'User' },
        { icon: Check, name: 'Check' },
        { icon: X, name: 'Close' },
      ],
    },
    {
      name: 'Utility',
      description: 'Icons for utility functions',
      icons: [
        { icon: Download, name: 'Download' },
        { icon: Upload, name: 'Upload' },
        { icon: Copy, name: 'Copy' },
        { icon: Refresh, name: 'Refresh' },
      ],
    },
  ];

  const iconSizes = [
    { size: 12, name: 'xs', usage: 'Inline text, small buttons' },
    { size: 16, name: 'sm', usage: 'Form inputs, compact interfaces' },
    { size: 20, name: 'base', usage: 'Standard buttons, navigation' },
    { size: 24, name: 'lg', usage: 'Headers, prominent actions' },
    { size: 32, name: 'xl', usage: 'Feature highlights, empty states' },
    { size: 48, name: '2xl', usage: 'Hero sections, large displays' },
  ];

  const usageGuidelines = [
    {
      category: 'Consistency',
      good: ['Use the same icon for the same action', 'Maintain consistent stroke width', 'Apply uniform sizing'],
      avoid: ['Different icons for same function', 'Mixed icon styles', 'Inconsistent proportions'],
    },
    {
      category: 'Clarity',
      good: ['Choose recognizable symbols', 'Ensure adequate contrast', 'Test at small sizes'],
      avoid: ['Overly complex designs', 'Ambiguous meanings', 'Poor visibility'],
    },
    {
      category: 'Accessibility',
      good: ['Provide text labels', 'Use semantic markup', 'Ensure touch targets'],
      avoid: ['Icons without context', 'Color-only meaning', 'Too small touch areas'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Iconography</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Our icon system provides clear, consistent visual communication through carefully selected and styled symbols.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Icon Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Icon Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Icons are a universal language that transcends cultural and linguistic barriers. Our iconography 
            prioritizes clarity, consistency, and recognition. We use the Lucide icon library as our foundation, 
            ensuring a cohesive visual system with excellent accessibility and scalability.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Clear</Badge>
            <Badge variant="glass">Consistent</Badge>
            <Badge variant="glass">Scalable</Badge>
            <Badge variant="glass">Accessible</Badge>
          </div>
        </Card>

        {/* Icon Library */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Icon Library</CardTitle>
          <CardDescription className="font-kabel">Our complete icon set organized by category</CardDescription>
          <CardContent>
            <div className="space-y-8">
              {iconCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold font-basement text-foreground">{category.name}</h4>
                      <p className="text-sm text-muted-foreground font-kabel">{category.description}</p>
                    </div>
                    <Badge variant="neutral">{category.icons.length} icons</Badge>
                  </div>
                  
                  <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
                    {category.icons.map((iconItem, iconIndex) => {
                      const IconComponent = iconItem.icon;
                      return (
                        <div key={iconIndex} className="flex flex-col items-center p-3 glass-card rounded-lg hover:bg-primary-500/10 transition-colors group">
                          <IconComponent className="w-6 h-6 text-foreground group-hover:text-primary-500 transition-colors mb-2" />
                          <span className="text-xs text-muted-foreground font-kabel text-center">{iconItem.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Icon Sizes */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Icon Sizes</CardTitle>
          <CardDescription className="font-kabel">Standardized sizes for different use cases</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {iconSizes.map((size, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 glass-card rounded-lg">
                      <Star className={`text-primary-500`} size={size.size} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <code className="text-sm font-mono font-medium text-foreground">{size.name}</code>
                        <span className="text-sm text-muted-foreground font-kabel">({size.size}px)</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-kabel">{size.usage}</p>
                    </div>
                  </div>
                  <Badge variant="neutral" className="text-xs">
                    {size.size}px
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Usage Examples</CardTitle>
          <CardDescription className="font-kabel">How icons are used in different contexts</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Buttons */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover:bg-muted/50 transition-colors">
                    <Share size={16} />
                    Share
                  </button>
                  <button className="p-2 glass-card rounded-lg hover:bg-muted/50 transition-colors">
                    <Heart size={16} className="text-error-500" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Navigation</h4>
                <nav className="flex space-x-1 bg-muted/50 p-1 rounded-lg w-fit">
                  <button className="flex items-center gap-2 px-3 py-2 bg-primary-500 text-white rounded-md text-sm">
                    <Home size={16} />
                    Home
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground text-sm">
                    <User size={16} />
                    Profile
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground text-sm">
                    <Settings size={16} />
                    Settings
                  </button>
                </nav>
              </div>

              {/* Form Elements */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Form Elements</h4>
                <div className="space-y-3 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full pl-10 pr-4 py-2 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notifications" className="rounded" />
                    <label htmlFor="notifications" className="flex items-center gap-2 text-sm font-kabel">
                      <Mail size={16} className="text-muted-foreground" />
                      Email notifications
                    </label>
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Status Indicators</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-success-500" />
                    <span className="font-kabel">Task completed successfully</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <X size={16} className="text-error-500" />
                    <span className="font-kabel">Unable to save changes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-warning-500" />
                    <span className="font-kabel">Processing your request</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Usage Guidelines</CardTitle>
          <CardDescription className="font-kabel">Best practices for implementing icons</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {usageGuidelines.map((guideline, index) => (
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

        {/* Technical Implementation */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Technical Implementation</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            How to implement icons in your code
          </CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">React/JSX</h4>
                <div className="bg-black/20 p-4 rounded-lg">
                  <code className="text-sm font-mono text-white/90">
                    {`import { Download, Share } from 'lucide-react';

<button className="flex items-center gap-2">
  <Download size={16} />
  Download File
</button>`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-white mb-3">CSS Classes</h4>
                <div className="bg-black/20 p-4 rounded-lg">
                  <code className="text-sm font-mono text-white/90">
                    {`.icon-sm { width: 16px; height: 16px; }
.icon-base { width: 20px; height: 20px; }
.icon-lg { width: 24px; height: 24px; }`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Accessibility</h4>
                <div className="bg-black/20 p-4 rounded-lg">
                  <code className="text-sm font-mono text-white/90">
                    {`<button aria-label="Download file">
  <Download size={16} aria-hidden="true" />
</button>

<span className="sr-only">Download file</span>`}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}