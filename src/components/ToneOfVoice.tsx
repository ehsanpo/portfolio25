import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { MessageCircle, Heart, Lightbulb, Shield, Users, Zap } from 'lucide-react';

export function ToneOfVoice() {
  const toneAttributes = [
    {
      icon: Heart,
      title: 'Friendly',
      description: 'Warm, approachable, and welcoming',
      examples: ['Welcome back!', 'We\'re here to help', 'Thanks for choosing us'],
      avoid: ['Access denied', 'Invalid input', 'Error occurred'],
    },
    {
      icon: Lightbulb,
      title: 'Clear',
      description: 'Simple, direct, and easy to understand',
      examples: ['Save changes', 'Upload complete', 'Next step'],
      avoid: ['Utilize this functionality', 'Proceed to execute', 'Implement solution'],
    },
    {
      icon: Shield,
      title: 'Trustworthy',
      description: 'Reliable, honest, and transparent',
      examples: ['Your data is secure', 'This will take 2 minutes', 'Here\'s what happened'],
      avoid: ['Trust us', 'Don\'t worry', 'Everything is fine'],
    },
    {
      icon: Users,
      title: 'Inclusive',
      description: 'Welcoming to all users and backgrounds',
      examples: ['Choose your preference', 'For everyone', 'All users can'],
      avoid: ['Guys', 'Obviously', 'Just do this'],
    },
    {
      icon: Zap,
      title: 'Empowering',
      description: 'Confident, encouraging, and supportive',
      examples: ['You\'ve got this', 'Great choice', 'Well done'],
      avoid: ['You failed', 'Wrong answer', 'Try again'],
    },
  ];

  const contentTypes = [
    {
      type: 'Error Messages',
      tone: 'Helpful and solution-focused',
      example: 'We couldn\'t save your changes. Please check your connection and try again.',
      avoid: 'Save failed. Error 500.',
    },
    {
      type: 'Success Messages',
      tone: 'Celebratory but not overwhelming',
      example: 'Great! Your profile has been updated successfully.',
      avoid: 'CONGRATULATIONS!!! Profile updated!!!',
    },
    {
      type: 'Loading States',
      tone: 'Informative and reassuring',
      example: 'Uploading your files... This usually takes about 30 seconds.',
      avoid: 'Please wait...',
    },
    {
      type: 'Empty States',
      tone: 'Encouraging and actionable',
      example: 'Ready to get started? Create your first project to begin.',
      avoid: 'No data found.',
    },
    {
      type: 'Onboarding',
      tone: 'Welcoming and guiding',
      example: 'Let\'s set up your workspace. We\'ll walk you through each step.',
      avoid: 'Complete the setup process.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Tone of Voice</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Our voice reflects our brand values and creates consistent, meaningful connections with users across all touchpoints.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Brand Voice Overview */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Our Voice</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            We speak with confidence and clarity, always putting the user first. Our tone is professional yet approachable, 
            helpful without being condescending, and honest about both capabilities and limitations.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Human</Badge>
            <Badge variant="glass">Helpful</Badge>
            <Badge variant="glass">Honest</Badge>
            <Badge variant="glass">Clear</Badge>
          </div>
        </Card>

        {/* Tone Attributes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toneAttributes.map((attribute, index) => {
            const Icon = attribute.icon;
            const variants = ['glass', 'default'] as const;
            const variant = variants[index % 2];
            
            return (
              <Card key={index} variant={variant} hover padding="lg" blockReveal={index % 3 === 0}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 font-basement">{attribute.title}</CardTitle>
                  </div>
                </div>
                
                <CardDescription className="font-kabel mb-4">
                  {attribute.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium font-basement text-success-500 mb-2">✓ Use</h5>
                    <ul className="text-xs text-muted-foreground font-kabel space-y-1">
                      {attribute.examples.map((example, idx) => (
                        <li key={idx}>• "{example}"</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-error-500 mb-2">✗ Avoid</h5>
                    <ul className="text-xs text-muted-foreground font-kabel space-y-1">
                      {attribute.avoid.map((example, idx) => (
                        <li key={idx}>• "{example}"</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Content Types */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Content Types & Examples</CardTitle>
          <CardDescription className="font-kabel">How to apply our tone across different types of content</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {contentTypes.map((content, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium font-basement text-foreground">{content.type}</h4>
                    <Badge variant="primary">{content.tone}</Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium font-basement text-success-500 mb-2">✓ Good Example</h5>
                      <p className="text-sm text-muted-foreground font-kabel p-3 bg-success-500/10 rounded border border-success-500/20">
                        "{content.example}"
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium font-basement text-error-500 mb-2">✗ Avoid</h5>
                      <p className="text-sm text-muted-foreground font-kabel p-3 bg-error-500/10 rounded border border-error-500/20">
                        "{content.avoid}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Writing Guidelines */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Writing Guidelines</CardTitle>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-4">General Principles</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Write for your audience, not for yourself</li>
                  <li>• Use active voice whenever possible</li>
                  <li>• Keep sentences short and scannable</li>
                  <li>• Use familiar words over fancy ones</li>
                  <li>• Be specific rather than vague</li>
                  <li>• Show, don't just tell</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-4">Formatting</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Use sentence case for buttons and labels</li>
                  <li>• Avoid unnecessary punctuation in UI</li>
                  <li>• Use parallel structure in lists</li>
                  <li>• Write descriptive link text</li>
                  <li>• Use consistent terminology</li>
                  <li>• Test with real users</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voice Checklist */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Voice Checklist</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Use this checklist to ensure your content aligns with our brand voice
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Is it helpful to the user?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Is it easy to understand?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Does it sound human?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Is it inclusive?</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Does it build trust?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Is it actionable?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Does it match our brand?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-white/90 font-kabel">Would I want to read this?</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}