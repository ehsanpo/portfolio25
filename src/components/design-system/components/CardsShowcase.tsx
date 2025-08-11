import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { Sparkles, Heart, Star, Zap, Users, Target, Shield } from 'lucide-react';

export function CardsShowcase() {
  const [triggerReveal, setTriggerReveal] = React.useState(0);

  const handleTriggerReveal = () => {
    setTriggerReveal(prev => prev + 1);
  };

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Cards</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Flexible card components with multiple variants, hover effects, and animation options.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Card Variants */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Card Variants</CardTitle>
          <CardDescription className="font-kabel text-white/80">Four different card styles with unique visual effects</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default" hover className="text-center">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-basement text-foreground mb-2">Default Card</h4>
                  <p className="text-sm text-muted-foreground font-kabel">Standard card with solid background</p>
                </div>
              </Card>

              <Card variant="glass" hover className="text-center">
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-secondary-400" />
                  </div>
                  <h4 className="font-basement text-foreground mb-2">Glass Card</h4>
                  <p className="text-sm text-muted-foreground font-kabel">Glassmorphism effect with backdrop blur</p>
                </div>
              </Card>

              <Card variant="gradient" hover className="text-center">
                <div className="p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-basement text-white mb-2">Gradient Card</h4>
                  <p className="text-sm text-white/80 font-kabel">Gradient background with brand colors</p>
                </div>
              </Card>

              <Card variant="neon" hover className="text-center">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-basement text-foreground mb-2">Neon Card</h4>
                  <p className="text-sm text-muted-foreground font-kabel">Glowing border with neon effects</p>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Card Sizes */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Card Padding Options</CardTitle>
          <CardDescription className="font-kabel">Different padding sizes for various content types</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="default" padding="sm" className="text-center">
                <h4 className="font-basement text-foreground mb-2">Small Padding</h4>
                <p className="text-sm text-muted-foreground font-kabel">Compact content</p>
              </Card>

              <Card variant="default" padding="md" className="text-center">
                <h4 className="font-basement text-foreground mb-2">Medium Padding</h4>
                <p className="text-sm text-muted-foreground font-kabel">Standard content spacing</p>
              </Card>

              <Card variant="default" padding="lg" className="text-center">
                <h4 className="font-basement text-foreground mb-2">Large Padding</h4>
                <p className="text-sm text-muted-foreground font-kabel">Spacious content layout</p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Block Reveal Animation */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Block Reveal Animation</CardTitle>
          <CardDescription className="font-kabel">Cards with animated reveal effects - each card animates with a staggered delay</CardDescription>
          <CardContent>
            <div className="mb-6">
              <Button 
                variant="gradient" 
                onClick={handleTriggerReveal}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Trigger Block Reveal Animation
              </Button>
              <p className="text-sm text-muted-foreground font-kabel mt-2">
                Click the button to see the staggered animation effect with automatic delays
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card 
                key={`reveal-1-${triggerReveal}`}
                variant="glass" 
                hover 
              >
                <CardHeader>
                  <CardTitle className="font-basement">Animated Card 1</CardTitle>
                  <CardDescription className="font-kabel">This card has a block reveal animation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-kabel">
                    The block reveal animation creates a smooth entrance effect.
                  </p>
                </CardContent>
              </Card>

              <Card 
                key={`reveal-2-${triggerReveal}`}
                variant="gradient" 
                hover 
              >
                <CardHeader>
                  <CardTitle className="font-basement text-white">Animated Card 2</CardTitle>
                  <CardDescription className="font-kabel text-white/80">Gradient variant with reveal effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 font-kabel">
                    Combined with gradient backgrounds for stunning visuals.
                  </p>
                </CardContent>
              </Card>

              <Card 
                key={`reveal-2-${triggerReveal}`}
                variant="default" 
                hover 
              >
                <CardHeader>
                  <CardTitle className="font-basement">Animated Card 3</CardTitle>
                  <CardDescription className="font-kabel">Default variant with animation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Works with all card variants and hover effects.
                  </p>
                </CardContent>
              </Card>
              
              <Card 
                key={`reveal-3-${triggerReveal}`}
                variant="gradient" 
                hover 
                className="text-center"
              >
                <div className="p-6">
                  <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="font-basement text-white mb-2">Gradient Card</h4>
                  <p className="text-sm text-white/80 font-kabel">
                    Third card with longer delay
                  </p>
                </div>
              </Card>
              
              <Card 
                key={`reveal-4-${triggerReveal}`}
                variant="glass" 
                hover 
                className="text-center"
              >
                <div className="p-6">
                  <Users className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
                  <h4 className="font-basement text-foreground mb-2">Fourth Card</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Each card has automatic delay
                  </p>
                </div>
              </Card>
              
              <Card 
                key={`reveal-5-${triggerReveal}`}
                variant="default" 
                hover 
                className="text-center"
              >
                <div className="p-6">
                  <Target className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                  <h4 className="font-basement text-foreground mb-2">Fifth Card</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Staggered timing creates flow
                  </p>
                </div>
              </Card>
              
              <Card 
                key={`reveal-6-${triggerReveal}`}
                variant="glass" 
                hover 
                className="text-center"
              >
                <div className="p-6">
                  <Shield className="w-12 h-12 text-success-500 mx-auto mb-4" />
                  <h4 className="font-basement text-foreground mb-2">Sixth Card</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    Final card completes sequence
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="mt-6 p-4 glass-card rounded-lg">
              <h4 className="font-basement text-foreground mb-2">How It Works</h4>
              <p className="text-sm text-muted-foreground font-kabel mb-3">
                Each card with <code className="bg-muted/50 px-1 rounded">blockReveal={true}</code> gets an automatic 150ms delay 
                based on its render order. The first card animates immediately, the second after 150ms, third after 300ms, and so on.
              </p>
              <div className="text-xs text-muted-foreground font-kabel">
                <strong>Animation sequence:</strong> Card 1 (0ms) → Card 2 (150ms) → Card 3 (300ms) → Card 4 (450ms) → Card 5 (600ms) → Card 6 (750ms)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Feature Cards</CardTitle>
          <CardDescription className="font-kabel">Cards showcasing features with icons and descriptions</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: 'User-Centered', description: 'Designed with users in mind', color: 'text-error-500' },
                { icon: Star, title: 'High Quality', description: 'Premium components and interactions', color: 'text-warning-500' },
                { icon: Zap, title: 'Fast Performance', description: 'Optimized for speed and efficiency', color: 'text-primary-500' },
                { icon: Users, title: 'Team Friendly', description: 'Built for collaborative development', color: 'text-secondary-500' },
                { icon: Target, title: 'Goal Oriented', description: 'Focused on achieving user objectives', color: 'text-accent-500' },
                { icon: Shield, title: 'Secure & Reliable', description: 'Built with security best practices', color: 'text-success-500' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                const variants = ['default', 'glass'] as const;
                const variant = variants[index % 2];
                
                return (
                  <Card key={index} variant={variant} hover>
                    <div className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h4 className="font-basement text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground font-kabel">{feature.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Card Composition */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Card Composition</CardTitle>
          <CardDescription className="font-kabel">Using CardHeader, CardContent, and CardTitle components</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="font-basement">Card with Header</CardTitle>
                  <CardDescription className="font-kabel">This card uses the CardHeader component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-kabel">
                    The CardHeader creates a clear separation between the title area and content.
                  </p>
                </CardContent>
              </Card>

              <Card variant="default" padding="lg">
                <CardTitle className="font-basement">Simple Card</CardTitle>
                <CardDescription className="font-kabel">This card uses direct title and description</CardDescription>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground font-kabel">
                    Simple cards work well for straightforward content without complex layouts.
                  </p>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}