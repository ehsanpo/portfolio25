import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MessageCircle, Heart, Lightbulb, Users, Zap, Target } from 'lucide-react';

export function ToneOfVoice() {
  const toneAttributes = [
    {
      icon: Heart,
      title: 'Friendly & Approachable',
      description: 'We talk like real humans, not corporate robots',
      examples: ['Hey there!', 'Let\'s dive in', 'Pretty cool, right?'],
      avoid: ['Please be advised', 'We regret to inform', 'As per our policy'],
    },
    {
      icon: Lightbulb,
      title: 'Clear & Direct',
      description: 'No fluff, just the good stuff you actually need',
      examples: ['Here\'s how it works', 'Quick tip:', 'The short version:'],
      avoid: ['Leverage synergistic solutions', 'Utilize best practices', 'Implement methodologies'],
    },
    {
      icon: Users,
      title: 'Inclusive & Welcoming',
      description: 'Everyone belongs here, whether you\'re a pro or just starting out',
      examples: ['Whether you\'re new to this or...', 'No matter your experience', 'We\'ve all been there'],
      avoid: ['Obviously', 'Everyone knows', 'It\'s simple'],
    },
    {
      icon: Zap,
      title: 'Enthusiastic & Motivating',
      description: 'We genuinely get excited about good design and want to share that energy',
      examples: ['This is where it gets interesting', 'You\'re gonna love this', 'Let\'s make something awesome'],
      avoid: ['As required', 'Standard procedure', 'Basic functionality'],
    },
    {
      icon: Target,
      title: 'Honest & Authentic',
      description: 'We admit when things are tricky and celebrate when they work well',
      examples: ['This part can be tricky', 'We\'re still figuring this out', 'Honestly, this just works better'],
      avoid: ['Perfect solution', 'Seamless integration', 'Effortless implementation'],
    },
  ];

  const contentTypes = [
    {
      type: 'Welcome Messages',
      tone: 'Warm and encouraging',
      example: 'Welcome! Ready to build something amazing? We\'re here to help you every step of the way.',
      avoid: 'Welcome to our platform. Please complete the onboarding process.',
    },
    {
      type: 'Error Messages',
      tone: 'Helpful and reassuring',
      example: 'Oops! Something went sideways. Let\'s get this sorted out together.',
      avoid: 'Error 404: The requested resource could not be found.',
    },
    {
      type: 'Success Messages',
      tone: 'Celebratory but not overwhelming',
      example: 'Nice work! Your changes are live and looking great.',
      avoid: 'Operation completed successfully. Status: 200 OK.',
    },
    {
      type: 'Loading States',
      tone: 'Patient and informative',
      example: 'Hang tight, we\'re working on it... This usually takes about 30 seconds.',
      avoid: 'Processing request. Please wait.',
    },
    {
      type: 'Feature Descriptions',
      tone: 'Excited but practical',
      example: 'This feature is a game-changer for busy teams. Here\'s why you\'ll love it...',
      avoid: 'This feature provides enhanced functionality for improved user experience.',
    },
  ];

  const writingPrinciples = [
    {
      title: 'Write Like You\'re Talking to a Friend',
      description: 'Use contractions, ask questions, share thoughts',
      examples: [
        'You\'ll probably want to...',
        'Here\'s what we\'ve learned...',
        'Quick question: have you tried...?'
      ]
    },
    {
      title: 'Show, Don\'t Just Tell',
      description: 'Use examples, stories, and real scenarios',
      examples: [
        'Picture this: you\'re building a dashboard and...',
        'We tried this approach and here\'s what happened...',
        'For example, when Sarah from our team...'
      ]
    },
    {
      title: 'Admit When Things Are Hard',
      description: 'Be honest about complexity and challenges',
      examples: [
        'This part gets a bit technical, but stick with us...',
        'We know this seems overwhelming at first...',
        'Fair warning: this might take a few tries to get right'
      ]
    },
    {
      title: 'Celebrate the Small Wins',
      description: 'Acknowledge progress and effort',
      examples: [
        'Look at you go!',
        'You\'re getting the hang of this',
        'That\'s exactly right'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Tone of Voice</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          We write like real humans who genuinely care about helping you succeed. Professional, but never stuffy.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Brand Voice Overview */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Our Voice</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Think of us as that friend who's really good at design and loves sharing what they know. 
            We're professional when it matters, playful when it fits, and always honest about both 
            the cool stuff and the tricky bits. We write like we actually want to help you succeed.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Human</Badge>
            <Badge variant="glass">Helpful</Badge>
            <Badge variant="glass">Honest</Badge>
            <Badge variant="glass">Enthusiastic</Badge>
          </div>
        </Card>

        {/* Tone Attributes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toneAttributes.map((attribute, index) => {
            const Icon = attribute.icon;
            const variants = ['glass', 'default'] as const;
            const variant = variants[index % 2];
            
            return (
              <Card key={index} variant={variant} hover padding="lg">
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
                    <h5 className="text-sm font-medium font-basement text-success-500 mb-2">✓ Say This</h5>
                    <ul className="text-xs text-muted-foreground font-kabel space-y-1">
                      {attribute.examples.map((example, idx) => (
                        <li key={idx}>• "{example}"</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium font-basement text-error-500 mb-2">✗ Not This</h5>
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
          <CardTitle className="font-basement">Content Examples</CardTitle>
          <CardDescription className="font-kabel">How our voice sounds across different types of content</CardDescription>
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
                      <h5 className="text-sm font-medium font-basement text-success-500 mb-2">✓ Our Way</h5>
                      <p className="text-sm text-muted-foreground font-kabel p-3 bg-success-500/10 rounded border border-success-500/20">
                        "{content.example}"
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium font-basement text-error-500 mb-2">✗ Corporate Way</h5>
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

        {/* Writing Principles */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Writing Principles</CardTitle>
          <CardDescription className="font-kabel">The core ideas that guide how we write</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {writingPrinciples.map((principle, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <h4 className="font-semibold font-basement text-foreground mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground font-kabel mb-3">{principle.description}</p>
                  <div className="space-y-1">
                    {principle.examples.map((example, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground font-kabel italic">
                        "{example}"
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Voice Guidelines */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Quick Voice Guidelines</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            The essentials for writing in our voice
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✓ Do This</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Use contractions (we're, you'll, it's)</li>
                  <li>• Ask questions to engage readers</li>
                  <li>• Share real examples and stories</li>
                  <li>• Admit when something is challenging</li>
                  <li>• Celebrate user achievements</li>
                  <li>• Write like you're helping a friend</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✗ Skip This</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Corporate jargon and buzzwords</li>
                  <li>• Overly formal language</li>
                  <li>• Assuming everyone knows everything</li>
                  <li>• Making things sound easier than they are</li>
                  <li>• Writing like a manual or documentation</li>
                  <li>• Being condescending or patronizing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Voice Checklist */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Voice Checklist</CardTitle>
          <CardDescription className="font-kabel mb-6">
            Before you publish, ask yourself these questions
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Does this sound like a real person wrote it?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Would I actually say this to a friend?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Is this genuinely helpful?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Am I being honest about complexity?</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Does this make the reader feel welcome?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Did I avoid jargon and buzzwords?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Is the next step clear?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm font-kabel text-foreground">Would I want to read this?</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}