import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Heart, Target, Users, Lightbulb, Shield, Zap } from 'lucide-react';

export function BrandValues() {
  const values = [
    {
      icon: Zap,
      title: 'Craftsmanship',
      description: 'You demonstrate deep technical skill (TypeScript, React, Node.js) and deliver polished, maintainable solutions. This value communicates your commitment to code quality, robust architectures and thoughtful UX details.',
      principles: ['Code quality', 'Robust architectures', 'Thoughtful UX details'],
    },
    {
      icon: Heart,
      title: 'User-First Mindset',
      description: 'From WCAG-compliant redesigns to RTL support and intuitive customer portals, you always design for real people. This value highlights empathy, accessibility and focus on clear, engaging experiences.',
      principles: ['Empathy', 'Accessibility', 'Clear experiences'],
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'Your testimonials and projects emphasize partnering closely with designers, clients and cross-functional teams. Emphasize open communication, mutual respect and shared ownership of outcomes.',
      principles: ['Open communication', 'Mutual respect', 'Shared ownership'],
    },
    {
      icon: Lightbulb,
      title: 'Continuous Growth',
      description: 'With certifications spanning cybersecurity, AWS, Scrum and advanced analytics—and 12 years of evolving expertise—you\'re driven to learn and adapt. This value spotlights curiosity, upskilling and staying on the cutting edge.',
      principles: ['Curiosity', 'Upskilling', 'Cutting edge'],
    },
    {
      icon: Target,
      title: 'Impact-Driven Innovation',
      description: 'Whether boosting engagement at Telavox, reducing support tickets at Bredband2 or growing hardware-store sales with ToolPool, you engineer solutions that move the needle. This value signals your results-oriented approach and creative problem-solving.',
      principles: ['Results-oriented', 'Creative problem-solving', 'Real impact'],
    },
  ];

  const designPhilosophy = [
    {
      emoji: '🧠',
      title: 'Clarity > Fancy Confusion',
      description: 'If someone lands on a page and goes "wait... what am I supposed to do here?" — that\'s a fail. I try to keep things super clear and chill. No fluff. Just obvious paths, real content, and functionality that makes sense. (Good UX feels like a quiet high five.)',
    },
    {
      emoji: '🎯',
      title: 'Function First, Always',
      description: 'I love pretty things as much as the next person, but if a gradient or animation doesn\'t do anything... why is it there? Every visual choice—colors, fonts, layout, whatever—should help people use the thing better (and feel a bit of your vibe/brand too).',
    },
    {
      emoji: '♿',
      title: 'Accessible from the Start',
      description: 'Accessibility isn\'t some bonus feature I slap on at the end. It\'s baked in from the beginning. I follow WCAG, support RTL, and try to make sure everything just works for everyone — no matter how they browse or what tools they use. Internet for all 💪',
    },
    {
      emoji: '📱',
      title: 'Built to Bend, Not Break',
      description: 'Big screen? Tiny phone? Weird fridge display? I\'m on it. Every layout I make is flexible, fast, and kinda like that friend who can vibe at any party. Performance is a big deal too — slow sites are a crime, sorry not sorry.',
    },
    {
      emoji: '🔁',
      title: 'Design = Listening + Tweaking',
      description: 'Real talk: the first version is never perfect. I build fast, test often, and pay attention when users (or clients!) say "this part feels off." Iteration is where the magic happens — and it\'s way more fun when you treat it like a conversation.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Brand Values</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Five core values that guide every design decision and shape the principles that define how I work.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Mission Statement */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">My Mission</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed">
            I wanna help people — businesses, indie makers, whoever — bring their ideas to life on the web. 
            Not with bloated, over-engineered nonsense, but with thoughtful, clean, human-centered stuff that 
            actually works (and looks kinda nice too 👀).
          </p>
          <br />
          <p className="text-lg text-white/90 font-kabel leading-relaxed">
            I believe tech should feel empowering, not overwhelming. So whether it's building a slick landing page 
            or a full-on web app, I try to keep things simple, efficient, and just a bit fun — using modern tools, 
            open-source magic, and way too many browser tabs 😂.
          </p>
          <br />
          <p className="text-lg text-white/90 font-kabel leading-relaxed">
            At the end of the day, it's about making a real impact, creating smooth experiences, and building cool 
            partnerships that don't just end after launch day. I'm not here to be "the expert" — I'm here to build 
            with you, learn along the way, and ship things we're both proud of.
          </p>
        </Card>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const variants = ['glass', 'default'] as const;
            const variant = variants[index % 2];
            
            return (
              <Card key={index} variant={variant} hover padding="lg" blockReveal={index % 3 === 0}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                    <Icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 font-basement">{value.title}</CardTitle>
                  </div>
                </div>
                
                <CardDescription className="font-kabel mb-4">
                  {value.description}
                </CardDescription>
                
                <div className="space-y-2">
                  {value.principles.map((principle, idx) => (
                    <Badge key={idx} variant="primary" className="mr-2 mb-2">
                      {principle}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Design Philosophy */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement mb-4">Design Philosophy</CardTitle>
          <div className="space-y-6">
            {designPhilosophy.map((philosophy, index) => (
              <div key={index} className="p-4 glass-card rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{philosophy.emoji}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold font-basement text-foreground mb-2">{philosophy.title}</h4>
                    <p className="text-muted-foreground font-kabel leading-relaxed">{philosophy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}