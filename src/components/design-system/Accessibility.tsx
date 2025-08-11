import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Shield, Eye, Keyboard, Volume2, Users, CheckCircle } from 'lucide-react';

export function Accessibility() {
  const accessibilityPrinciples = [
    {
      icon: Eye,
      title: 'Perceivable',
      description: 'Information must be presentable in ways users can perceive',
      guidelines: [
        'Provide text alternatives for images',
        'Ensure sufficient color contrast',
        'Make content adaptable to different presentations',
        'Use clear, readable fonts',
      ],
    },
    {
      icon: Keyboard,
      title: 'Operable',
      description: 'Interface components must be operable by all users',
      guidelines: [
        'Make all functionality keyboard accessible',
        'Give users enough time to read content',
        'Don\'t use content that causes seizures',
        'Help users navigate and find content',
      ],
    },
    {
      icon: Users,
      title: 'Understandable',
      description: 'Information and UI operation must be understandable',
      guidelines: [
        'Make text readable and understandable',
        'Make content appear and operate predictably',
        'Help users avoid and correct mistakes',
        'Use clear, simple language',
      ],
    },
    {
      icon: Shield,
      title: 'Robust',
      description: 'Content must be robust enough for various assistive technologies',
      guidelines: [
        'Maximize compatibility with assistive technologies',
        'Use valid, semantic HTML',
        'Ensure content works across different browsers',
        'Follow web standards and best practices',
      ],
    },
  ];

  const colorContrast = [
    { level: 'AA Normal', ratio: '4.5:1', description: 'Minimum for normal text' },
    { level: 'AA Large', ratio: '3:1', description: 'Minimum for large text (18pt+)' },
    { level: 'AAA Normal', ratio: '7:1', description: 'Enhanced for normal text' },
    { level: 'AAA Large', ratio: '4.5:1', description: 'Enhanced for large text' },
  ];

  const keyboardNavigation = [
    { key: 'Tab', function: 'Move to next focusable element' },
    { key: 'Shift + Tab', function: 'Move to previous focusable element' },
    { key: 'Enter', function: 'Activate buttons and links' },
    { key: 'Space', function: 'Activate buttons, checkboxes' },
    { key: 'Arrow Keys', function: 'Navigate within components' },
    { key: 'Escape', function: 'Close modals and dropdowns' },
  ];

  const ariaAttributes = [
    { attribute: 'aria-label', usage: 'Provides accessible name when visible text is insufficient' },
    { attribute: 'aria-labelledby', usage: 'References other elements that describe the current element' },
    { attribute: 'aria-describedby', usage: 'References elements that provide additional description' },
    { attribute: 'aria-expanded', usage: 'Indicates if a collapsible element is expanded' },
    { attribute: 'aria-hidden', usage: 'Hides decorative elements from screen readers' },
    { attribute: 'role', usage: 'Defines what an element is or does' },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Accessibility</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Creating inclusive experiences that work for everyone, regardless of ability or technology used.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Accessibility Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Our Commitment to Accessibility</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Accessibility isn't an afterthought—it's fundamental to good design. We build for the full spectrum 
            of human diversity, including people with disabilities, different devices, varying internet speeds, 
            and diverse cultural contexts. When we design inclusively, we create better experiences for everyone.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">WCAG 2.1 AA</Badge>
            <Badge variant="glass">Inclusive</Badge>
            <Badge variant="glass">Universal</Badge>
            <Badge variant="glass">Compliant</Badge>
          </div>
        </Card>

        {/* WCAG Principles */}
        <div className="grid md:grid-cols-2 gap-6">
          {accessibilityPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            const variants = ['glass', 'default'] as const;
            const variant = variants[index % 2];
            
            return (
              <Card key={index} variant={variant} hover padding="lg">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 font-basement">{principle.title}</CardTitle>
                  </div>
                </div>
                
                <CardDescription className="font-kabel mb-4">
                  {principle.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {principle.guidelines.map((guideline, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground font-kabel flex items-start">
                      <CheckCircle className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      {guideline}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Color Contrast */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Color Contrast Requirements</CardTitle>
          <CardDescription className="font-kabel">WCAG contrast ratio standards for text readability</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {colorContrast.map((contrast, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Badge variant={index < 2 ? "warning" : "success"}>
                      {contrast.level}
                    </Badge>
                    <div>
                      <div className="font-semibold font-basement text-foreground">{contrast.ratio}</div>
                      <div className="text-sm text-muted-foreground font-kabel">{contrast.description}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-foreground rounded border border-border/50"></div>
                    <div className="w-8 h-8 bg-background rounded border border-border/50"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 glass-card rounded-lg">
              <h4 className="font-semibold font-basement text-foreground mb-3">Testing Tools</h4>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="text-center p-3 bg-muted/30 rounded">
                  <div className="font-kabel text-sm text-foreground">WebAIM Contrast Checker</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded">
                  <div className="font-kabel text-sm text-foreground">Colour Contrast Analyser</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded">
                  <div className="font-kabel text-sm text-foreground">Stark (Figma Plugin)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Keyboard Navigation */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Keyboard Navigation</CardTitle>
          <CardDescription className="font-kabel">Essential keyboard shortcuts and navigation patterns</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {keyboardNavigation.map((nav, index) => (
                <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                  <div className="flex items-center space-x-4">
                    <kbd className="px-3 py-1 bg-muted text-foreground rounded font-mono text-sm border border-border">
                      {nav.key}
                    </kbd>
                    <span className="text-sm font-kabel text-foreground">{nav.function}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 glass-card rounded-lg">
              <h4 className="font-semibold font-basement text-foreground mb-3">Focus Management</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                <li>• Visible focus indicators on all interactive elements</li>
                <li>• Logical tab order that follows visual layout</li>
                <li>• Focus trapping in modals and dialogs</li>
                <li>• Skip links for main content navigation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* ARIA Attributes */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">ARIA Attributes</CardTitle>
          <CardDescription className="font-kabel">Essential ARIA attributes for screen reader compatibility</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {ariaAttributes.map((aria, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <code className="text-sm font-mono font-medium text-primary-500 bg-primary-500/10 px-2 py-1 rounded">
                      {aria.attribute}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground font-kabel">{aria.usage}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 glass-card rounded-lg">
              <h4 className="font-semibold font-basement text-foreground mb-3">Example Implementation</h4>
              <div className="bg-muted/50 p-4 rounded-lg">
                <code className="text-sm font-mono text-foreground">
                  {`<button 
  aria-label="Close dialog"
  aria-expanded="true"
  aria-controls="dialog-content"
>
  <X aria-hidden="true" />
</button>`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screen Reader Testing */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Screen Reader Testing</CardTitle>
          <CardDescription className="font-kabel">Tools and techniques for testing with assistive technologies</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">NVDA</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-2">Free Windows screen reader</p>
                <Badge variant="primary" className="text-xs">Windows</Badge>
              </div>
              
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-secondary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">VoiceOver</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-2">Built-in macOS screen reader</p>
                <Badge variant="secondary" className="text-xs">macOS</Badge>
              </div>
              
              <div className="p-4 glass-card rounded-lg text-center">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2">JAWS</h4>
                <p className="text-xs text-muted-foreground font-kabel mb-2">Professional Windows screen reader</p>
                <Badge variant="accent" className="text-xs">Windows</Badge>
              </div>
            </div>
            
            <div className="mt-6 p-4 glass-card rounded-lg">
              <h4 className="font-semibold font-basement text-foreground mb-3">Testing Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Navigate using only keyboard</li>
                  <li>• Test with screen reader enabled</li>
                  <li>• Verify all images have alt text</li>
                  <li>• Check form labels and error messages</li>
                </ul>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Test color contrast ratios</li>
                  <li>• Verify focus indicators are visible</li>
                  <li>• Check heading structure (h1-h6)</li>
                  <li>• Test with zoom up to 200%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Guidelines */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Implementation Guidelines</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Practical steps for building accessible interfaces
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Development</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Use semantic HTML elements</li>
                  <li>• Implement proper heading hierarchy</li>
                  <li>• Add ARIA attributes where needed</li>
                  <li>• Ensure keyboard navigation works</li>
                  <li>• Test with assistive technologies</li>
                  <li>• Validate HTML and check for errors</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Design</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Design with sufficient color contrast</li>
                  <li>• Don't rely solely on color for meaning</li>
                  <li>• Ensure touch targets are large enough</li>
                  <li>• Provide clear focus indicators</li>
                  <li>• Use consistent navigation patterns</li>
                  <li>• Include accessibility in design reviews</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Resources & Tools</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Guidelines & Standards</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• <a href="#" className="text-primary-500 hover:underline">WCAG 2.1 Guidelines</a></li>
                  <li>• <a href="#" className="text-primary-500 hover:underline">WAI-ARIA Authoring Practices</a></li>
                  <li>• <a href="#" className="text-primary-500 hover:underline">Section 508 Standards</a></li>
                  <li>• <a href="#" className="text-primary-500 hover:underline">A11y Project Checklist</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Testing Tools</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• <a href="#" className="text-primary-500 hover:underline">axe DevTools</a></li>
                  <li>• <a href="#" className="text-primary-500 hover:underline">WAVE Web Accessibility Evaluator</a></li>
                  <li>• <a href="#" className="text-primary-500 hover:underline">Lighthouse Accessibility Audit</a></li>
                  <li>• <a href="#" className="text-primary-500 hover:underline">Pa11y Command Line Tool</a></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}