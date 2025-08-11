import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Smartphone, Tablet, Monitor, Laptop } from 'lucide-react';

export function Responsiveness() {
  const [selectedBreakpoint, setSelectedBreakpoint] = useState('desktop');

  const breakpoints = [
    {
      name: 'Mobile',
      key: 'mobile',
      icon: Smartphone,
      range: '320px - 767px',
      description: 'Single column layouts, touch-optimized interactions',
      considerations: [
        'Minimum 44px touch targets',
        'Simplified navigation patterns',
        'Optimized content hierarchy',
        'Thumb-friendly interactions',
      ],
    },
    {
      name: 'Tablet',
      key: 'tablet',
      icon: Tablet,
      range: '768px - 1023px',
      description: 'Flexible layouts that work in portrait and landscape',
      considerations: [
        'Adaptive grid systems',
        'Contextual navigation',
        'Optimized for both touch and cursor',
        'Efficient use of screen space',
      ],
    },
    {
      name: 'Laptop',
      key: 'laptop',
      icon: Laptop,
      range: '1024px - 1439px',
      description: 'Multi-column layouts with enhanced functionality',
      considerations: [
        'Sidebar navigation patterns',
        'Multi-column content layouts',
        'Hover states and interactions',
        'Keyboard navigation support',
      ],
    },
    {
      name: 'Desktop',
      key: 'desktop',
      icon: Monitor,
      range: '1440px+',
      description: 'Full-featured layouts with maximum content density',
      considerations: [
        'Complex multi-column layouts',
        'Advanced interaction patterns',
        'Rich hover and focus states',
        'Optimized for productivity',
      ],
    },
  ];

  const responsivePatterns = [
    {
      name: 'Stacked to Horizontal',
      description: 'Elements stack vertically on mobile, arrange horizontally on larger screens',
      mobile: 'flex-col',
      desktop: 'md:flex-row',
    },
    {
      name: 'Hidden on Mobile',
      description: 'Secondary content hidden on mobile, visible on larger screens',
      mobile: 'hidden',
      desktop: 'md:block',
    },
    {
      name: 'Responsive Grid',
      description: 'Grid columns adapt based on screen size',
      mobile: 'grid-cols-1',
      desktop: 'md:grid-cols-2 lg:grid-cols-3',
    },
    {
      name: 'Responsive Text',
      description: 'Text sizes scale appropriately across devices',
      mobile: 'text-sm',
      desktop: 'md:text-base lg:text-lg',
    },
  ];

  const designPrinciples = [
    {
      title: 'Mobile First',
      description: 'Start with mobile constraints, then enhance for larger screens',
      benefits: [
        'Forces focus on essential content',
        'Ensures performance on slower devices',
        'Creates progressive enhancement',
        'Simplifies development process',
      ],
    },
    {
      title: 'Content Priority',
      description: 'Most important content should be accessible at all screen sizes',
      benefits: [
        'Improves user experience',
        'Reduces cognitive load',
        'Ensures accessibility',
        'Supports SEO goals',
      ],
    },
    {
      title: 'Touch Optimization',
      description: 'Design for touch interactions on mobile and tablet devices',
      benefits: [
        'Improves usability on touch devices',
        'Reduces user errors',
        'Enhances accessibility',
        'Supports diverse input methods',
      ],
    },
    {
      title: 'Performance Focus',
      description: 'Optimize for fast loading across all devices and connections',
      benefits: [
        'Better user experience',
        'Improved conversion rates',
        'Better search rankings',
        'Reduced bounce rates',
      ],
    },
  ];

  const testingChecklist = [
    {
      category: 'Visual Testing',
      items: [
        'Test all major breakpoints',
        'Verify content doesn\'t overflow',
        'Check image scaling and quality',
        'Ensure readable text sizes',
        'Validate color contrast ratios',
      ],
    },
    {
      category: 'Interaction Testing',
      items: [
        'Test touch targets on mobile',
        'Verify hover states work on desktop',
        'Check keyboard navigation',
        'Test form interactions',
        'Validate modal and dropdown behavior',
      ],
    },
    {
      category: 'Performance Testing',
      items: [
        'Test loading times on slow connections',
        'Verify image optimization',
        'Check for layout shifts',
        'Test with throttled CPU',
        'Validate offline functionality',
      ],
    },
    {
      category: 'Accessibility Testing',
      items: [
        'Test with screen readers',
        'Verify keyboard-only navigation',
        'Check focus indicators',
        'Test with zoom up to 200%',
        'Validate ARIA attributes',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Responsive Design</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Creating flexible, adaptive interfaces that work beautifully across all devices and screen sizes.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Responsive Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Responsive Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Responsive design isn't just about making things fit—it's about creating optimal experiences for each 
            context of use. We design with a mobile-first approach, progressively enhancing for larger screens 
            while ensuring content remains accessible and interactions feel natural across all devices.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Mobile First</Badge>
            <Badge variant="glass">Progressive Enhancement</Badge>
            <Badge variant="glass">Content Priority</Badge>
            <Badge variant="glass">Performance Focused</Badge>
          </div>
        </Card>

        {/* Breakpoint System */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Breakpoint System</CardTitle>
          <CardDescription className="font-kabel">Our responsive breakpoints and their design considerations</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {/* Breakpoint Selector */}
              <div className="flex flex-wrap gap-2 p-2 glass-card rounded-lg">
                {breakpoints.map((breakpoint) => {
                  const Icon = breakpoint.icon;
                  return (
                    <button
                      key={breakpoint.key}
                      onClick={() => setSelectedBreakpoint(breakpoint.key)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all font-kabel text-sm ${
                        selectedBreakpoint === breakpoint.key
                          ? 'bg-primary-500 text-white'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <Icon size={16} />
                      {breakpoint.name}
                    </button>
                  );
                })}
              </div>

              {/* Selected Breakpoint Details */}
              {breakpoints.map((breakpoint) => {
                if (selectedBreakpoint !== breakpoint.key) return null;
                const Icon = breakpoint.icon;
                
                return (
                  <div key={breakpoint.key} className="p-6 glass-card rounded-lg">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                        <Icon className="h-6 w-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold font-basement text-foreground text-lg">{breakpoint.name}</h4>
                        <p className="text-sm text-muted-foreground font-kabel">{breakpoint.range}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-kabel mb-4">{breakpoint.description}</p>
                    
                    <div>
                      <h5 className="font-medium font-basement text-foreground mb-3">Key Considerations</h5>
                      <ul className="space-y-2">
                        {breakpoint.considerations.map((consideration, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground font-kabel flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Responsive Patterns */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Responsive Patterns</CardTitle>
          <CardDescription className="font-kabel">Common patterns for adapting layouts across screen sizes</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {responsivePatterns.map((pattern, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold font-basement text-foreground">{pattern.name}</h4>
                    <Badge variant="neutral">Pattern</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-kabel mb-4">{pattern.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium font-basement text-foreground mb-2">Mobile</h5>
                      <code className="text-xs font-mono bg-muted/50 px-2 py-1 rounded text-foreground">
                        {pattern.mobile}
                      </code>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium font-basement text-foreground mb-2">Desktop</h5>
                      <code className="text-xs font-mono bg-muted/50 px-2 py-1 rounded text-foreground">
                        {pattern.desktop}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Design Principles */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Design Principles</CardTitle>
          <CardDescription className="font-kabel">Core principles that guide our responsive design decisions</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {designPrinciples.map((principle, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <h4 className="font-semibold font-basement text-foreground mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground font-kabel mb-4">{principle.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-2">Benefits</h5>
                    <ul className="space-y-1">
                      {principle.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                          <span className="text-success-500 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Layout Examples */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Layout Examples</CardTitle>
          <CardDescription className="font-kabel">Visual examples of responsive layout patterns</CardDescription>
          <CardContent>
            <div className="space-y-8">
              {/* Navigation Example */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Navigation Pattern</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-3">Mobile (Hamburger Menu)</h5>
                    <div className="p-4 glass-card rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-basement text-foreground">Logo</div>
                        <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                          <div className="space-y-1">
                            <div className="w-4 h-0.5 bg-foreground"></div>
                            <div className="w-4 h-0.5 bg-foreground"></div>
                            <div className="w-4 h-0.5 bg-foreground"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground font-kabel">Collapsed navigation for mobile</div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-3">Desktop (Horizontal Menu)</h5>
                    <div className="p-4 glass-card rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="font-basement text-foreground">Logo</div>
                        <div className="flex space-x-4 text-xs font-kabel">
                          <span>Home</span>
                          <span>About</span>
                          <span>Services</span>
                          <span>Contact</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground font-kabel mt-4">Full navigation visible</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid Example */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Content Grid Pattern</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-3">Mobile (Single Column)</h5>
                    <div className="p-4 glass-card rounded-lg">
                      <div className="space-y-3">
                        <div className="h-16 bg-muted/50 rounded"></div>
                        <div className="h-16 bg-muted/50 rounded"></div>
                        <div className="h-16 bg-muted/50 rounded"></div>
                      </div>
                      <div className="text-xs text-muted-foreground font-kabel mt-3">Stacked layout</div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-3">Desktop (Multi-Column)</h5>
                    <div className="p-4 glass-card rounded-lg">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 bg-muted/50 rounded"></div>
                        <div className="h-16 bg-muted/50 rounded"></div>
                        <div className="h-16 bg-muted/50 rounded"></div>
                      </div>
                      <div className="text-xs text-muted-foreground font-kabel mt-3">Grid layout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testing Checklist */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Testing Checklist</CardTitle>
          <CardDescription className="font-kabel">Comprehensive testing approach for responsive designs</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {testingChecklist.map((category, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <h4 className="font-semibold font-basement text-foreground mb-4">{category.category}</h4>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          className="mt-1 rounded border-border/50" 
                          id={`${category.category}-${itemIndex}`}
                        />
                        <label 
                          htmlFor={`${category.category}-${itemIndex}`}
                          className="text-sm font-kabel text-foreground cursor-pointer"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools and Resources */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Tools & Resources</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Essential tools for designing and testing responsive interfaces
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Design Tools</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Figma responsive design features</li>
                  <li>• Adobe XD responsive resize</li>
                  <li>• Sketch responsive symbols</li>
                  <li>• Browser developer tools</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Testing Tools</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Chrome DevTools device simulation</li>
                  <li>• BrowserStack for real device testing</li>
                  <li>• Responsive design checker tools</li>
                  <li>• Lighthouse performance audits</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Development</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• CSS Grid and Flexbox</li>
                  <li>• Tailwind CSS responsive utilities</li>
                  <li>• CSS Container Queries</li>
                  <li>• Progressive Web App features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Best Practices</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-success-500">✓ Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Start with mobile-first design approach</li>
                  <li>• Test on real devices, not just simulators</li>
                  <li>• Optimize images for different screen densities</li>
                  <li>• Use relative units (rem, em, %) when appropriate</li>
                  <li>• Implement progressive enhancement</li>
                  <li>• Consider touch interactions on all devices</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Assume desktop-first design will work on mobile</li>
                  <li>• Hide important content on smaller screens</li>
                  <li>• Use fixed pixel values for everything</li>
                  <li>• Ignore performance on slower devices</li>
                  <li>• Forget to test keyboard navigation</li>
                  <li>• Overlook accessibility on different screen sizes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}