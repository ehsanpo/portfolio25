import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FileText, Users, Lightbulb, Target, Shield, Zap } from 'lucide-react';

export function DesignGuidelines() {
  const guidelineCategories = [
    {
      icon: Users,
      title: 'User-Centered Design',
      description: 'Put users at the center of every design decision',
      guidelines: [
        'Conduct user research before designing',
        'Create user personas and journey maps',
        'Test designs with real users regularly',
        'Prioritize user needs over business requirements',
        'Design for accessibility from the start',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Visual Hierarchy',
      description: 'Guide users through content with clear hierarchy',
      guidelines: [
        'Use size, color, and spacing to create hierarchy',
        'Limit to 3 levels of visual importance per screen',
        'Ensure primary actions are most prominent',
        'Group related elements together',
        'Use consistent patterns throughout',
      ],
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Create clear, actionable, and helpful content',
      guidelines: [
        'Write in plain, conversational language',
        'Front-load important information',
        'Use active voice and action-oriented language',
        'Provide clear next steps for users',
        'Keep content scannable with headings and lists',
      ],
    },
    {
      icon: Shield,
      title: 'Consistency',
      description: 'Maintain consistency across all touchpoints',
      guidelines: [
        'Use design system components consistently',
        'Apply the same patterns for similar interactions',
        'Maintain consistent terminology',
        'Follow established navigation patterns',
        'Use consistent spacing and alignment',
      ],
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimize for speed and efficiency',
      guidelines: [
        'Minimize cognitive load on users',
        'Reduce the number of steps to complete tasks',
        'Optimize images and assets for web',
        'Design for fast loading times',
        'Provide immediate feedback for user actions',
      ],
    },
  ];

  const designProcess = [
    {
      phase: 'Research',
      description: 'Understand the problem and users',
      activities: [
        'User interviews and surveys',
        'Competitive analysis',
        'Requirements gathering',
        'Stakeholder alignment',
      ],
    },
    {
      phase: 'Define',
      description: 'Synthesize insights and define solutions',
      activities: [
        'Create user personas',
        'Define user stories and requirements',
        'Establish success metrics',
        'Create project roadmap',
      ],
    },
    {
      phase: 'Design',
      description: 'Create and iterate on design solutions',
      activities: [
        'Wireframing and prototyping',
        'Visual design and branding',
        'Design system implementation',
        'Accessibility review',
      ],
    },
    {
      phase: 'Test',
      description: 'Validate designs with users',
      activities: [
        'Usability testing',
        'A/B testing',
        'Accessibility testing',
        'Performance testing',
      ],
    },
    {
      phase: 'Implement',
      description: 'Build and launch the solution',
      activities: [
        'Development collaboration',
        'Quality assurance',
        'Launch preparation',
        'Post-launch monitoring',
      ],
    },
  ];

  const qualityChecklist = [
    {
      category: 'Usability',
      items: [
        'Navigation is intuitive and consistent',
        'Primary actions are clearly identifiable',
        'Error states provide helpful guidance',
        'Loading states keep users informed',
        'Forms are easy to complete',
      ],
    },
    {
      category: 'Accessibility',
      items: [
        'Color contrast meets WCAG AA standards',
        'All interactive elements are keyboard accessible',
        'Images have appropriate alt text',
        'Headings follow proper hierarchy',
        'Focus indicators are clearly visible',
      ],
    },
    {
      category: 'Visual Design',
      items: [
        'Typography is readable and well-sized',
        'Spacing follows the 8px grid system',
        'Colors align with brand guidelines',
        'Visual hierarchy guides user attention',
        'Design is consistent across screens',
      ],
    },
    {
      category: 'Content',
      items: [
        'Language is clear and concise',
        'Tone matches brand voice',
        'Information is scannable',
        'CTAs are action-oriented',
        'Error messages are helpful',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Design Guidelines</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Comprehensive guidelines that ensure consistent, user-centered design across all our products and experiences.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Design Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Design Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Great design is invisible—it solves problems without drawing attention to itself. Our design philosophy 
            centers on creating intuitive, accessible, and delightful experiences that empower users to achieve 
            their goals efficiently. We believe in designing with empathy, testing with users, and iterating based on data.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">User-Centered</Badge>
            <Badge variant="glass">Accessible</Badge>
            <Badge variant="glass">Data-Driven</Badge>
            <Badge variant="glass">Iterative</Badge>
          </div>
        </Card>

        {/* Core Guidelines */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidelineCategories.map((category, index) => {
            const Icon = category.icon;
            const variants = ['glass', 'default'] as const;
            const variant = variants[index % 2];
            
            return (
              <Card key={index} variant={variant} hover padding="lg">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 font-basement">{category.title}</CardTitle>
                  </div>
                </div>
                
                <CardDescription className="font-kabel mb-4">
                  {category.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {category.guidelines.map((guideline, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground font-kabel flex items-start">
                      <span className="text-primary-500 mr-2 mt-1">•</span>
                      {guideline}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Design Process */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Design Process</CardTitle>
          <CardDescription className="font-kabel">Our structured approach to solving design problems</CardDescription>
          <CardContent>
            <div className="space-y-6">
              {designProcess.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 glass-card rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-basement font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold font-basement text-foreground">{phase.phase}</h4>
                      <Badge variant="neutral" className="text-xs">
                        Phase {index + 1}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-kabel mb-3">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="text-xs text-muted-foreground font-kabel flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quality Checklist */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Quality Checklist</CardTitle>
          <CardDescription className="font-kabel">Essential checks before launching any design</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {qualityChecklist.map((category, index) => (
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

        {/* Collaboration Guidelines */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Collaboration Guidelines</CardTitle>
          <CardDescription className="font-kabel">How to work effectively with cross-functional teams</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2 text-center">With Developers</h4>
                <ul className="space-y-1 text-xs text-muted-foreground font-kabel">
                  <li>• Provide detailed specifications</li>
                  <li>• Use design tokens and components</li>
                  <li>• Review implementations together</li>
                  <li>• Document edge cases and states</li>
                </ul>
              </div>
              
              <div className="p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2 text-center">With Product</h4>
                <ul className="space-y-1 text-xs text-muted-foreground font-kabel">
                  <li>• Align on user needs and goals</li>
                  <li>• Define success metrics together</li>
                  <li>• Prioritize features collaboratively</li>
                  <li>• Share user research insights</li>
                </ul>
              </div>
              
              <div className="p-4 glass-card rounded-lg">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="font-basement text-foreground mb-2 text-center">With Stakeholders</h4>
                <ul className="space-y-1 text-xs text-muted-foreground font-kabel">
                  <li>• Present design rationale clearly</li>
                  <li>• Show user research evidence</li>
                  <li>• Explain design decisions</li>
                  <li>• Gather feedback constructively</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documentation Standards */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Documentation Standards</CardTitle>
          <CardDescription className="font-kabel">How to document design decisions and specifications</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 glass-card rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-3">Design Specifications</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-2">Include</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground font-kabel">
                      <li>• Component states (default, hover, active, disabled)</li>
                      <li>• Spacing and sizing measurements</li>
                      <li>• Color values and typography specs</li>
                      <li>• Interaction behaviors and animations</li>
                      <li>• Responsive breakpoint behaviors</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium font-basement text-foreground mb-2">Format</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground font-kabel">
                      <li>• Use design system tokens</li>
                      <li>• Provide code snippets where helpful</li>
                      <li>• Include accessibility requirements</li>
                      <li>• Document edge cases and error states</li>
                      <li>• Link to relevant research or decisions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 glass-card rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-3">Decision Documentation</h4>
                <p className="text-sm text-muted-foreground font-kabel mb-3">
                  Document the reasoning behind design decisions to help future team members understand the context.
                </p>
                <div className="bg-muted/50 p-3 rounded text-xs font-mono">
                  <div className="text-foreground mb-2">Decision Record Template:</div>
                  <div className="text-muted-foreground">
                    • Problem: What problem are we solving?<br/>
                    • Options: What alternatives did we consider?<br/>
                    • Decision: What did we choose and why?<br/>
                    • Consequences: What are the trade-offs?
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continuous Improvement */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Continuous Improvement</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            How we evolve and improve our design practices
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Regular Reviews</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Weekly design critiques and feedback sessions</li>
                  <li>• Monthly design system updates and reviews</li>
                  <li>• Quarterly user research and testing cycles</li>
                  <li>• Annual accessibility audits and improvements</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">Learning & Growth</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Stay updated with design trends and best practices</li>
                  <li>• Attend design conferences and workshops</li>
                  <li>• Share knowledge through internal presentations</li>
                  <li>• Contribute to design community discussions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}