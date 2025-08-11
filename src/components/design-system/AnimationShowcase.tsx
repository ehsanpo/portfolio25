import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Play, Pause, RotateCcw, Sparkles, Zap, Heart, Star, ArrowRight } from 'lucide-react';

export function AnimationShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [triggerReveal, setTriggerReveal] = useState(0);

  const handleRevealTrigger = () => {
    setTriggerReveal(prev => prev + 1);
  };

  const animations = [
    {
      name: 'Gradient Animation',
      duration: '8s linear infinite',
      description: 'Animated gradient background that shifts position and size',
      keyframes: {
        '0%, 100%': 'background-size: 200% 200%, background-position: left center',
        '50%': 'background-size: 300% 300%, background-position: right center'
      }
    },
    {
      name: 'Scroll Animation',
      duration: '30s linear infinite',
      description: 'Horizontal scrolling animation for continuous content',
      keyframes: {
        '0%': 'transform: translateX(0)',
        '100%': 'transform: translateX(-50%)'
      }
    },
    {
      name: 'Marquee Animation',
      duration: 'var(--duration) infinite linear',
      description: 'Horizontal marquee with gap-aware positioning',
      keyframes: {
        'from': 'transform: translateX(0)',
        'to': 'transform: translateX(calc(-100% - var(--gap)))'
      }
    },
    {
      name: 'Marquee Vertical',
      duration: 'var(--duration) linear infinite',
      description: 'Vertical marquee with gap-aware positioning',
      keyframes: {
        'from': 'transform: translateY(0)',
        'to': 'transform: translateY(calc(-100% - var(--gap)))'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Animations & Effects</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Comprehensive animation system with gradients, scrolling, marquees, and visual effects.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Animation Controls */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Animation Controls</CardTitle>
          <div className="flex items-center gap-4 mb-6">
            <Button 
              onClick={() => setIsPlaying(!isPlaying)}
              variant={isPlaying ? "glass" : "glass"}
              className="flex items-center gap-2"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Play'} Animations
            </Button>
            <Button 
              onClick={handleRevealTrigger}
              variant="glass"
              className="flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Trigger Reveal
            </Button>
            <Badge variant="glass">
              {isPlaying ? 'Running' : 'Paused'}
            </Badge>
          </div>
        </Card>

        {/* Gradient Animation */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Gradient Animation</CardTitle>
          <CardDescription className="font-kabel">8s linear infinite gradient background animation</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div className="p-8 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 animate-gradient text-center">
                <h3 className="text-2xl font-bold font-basement text-white mb-2">Animated Gradient Background</h3>
                <p className="text-white/80 font-kabel">Background size and position animate continuously</p>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-2">Keyframes</h4>
                <code className="text-sm font-mono text-foreground">
                  {`0%, 100%: background-size: 200% 200%, background-position: left center
50%: background-size: 300% 300%, background-position: right center`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scroll Animation */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Scroll Animation</CardTitle>
          <CardDescription className="font-kabel">30s linear infinite horizontal scrolling</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div className="overflow-hidden bg-muted/30 rounded-lg p-4">
                <div className={`flex space-x-8 ${isPlaying ? 'animate-scroll' : ''}`} style={{ width: '200%' }}>
                  <div className="flex space-x-8 min-w-full">
                    <div className="flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-lg">
                      <Star className="w-5 h-5 text-primary-500" />
                      <span className="font-kabel text-foreground">Scrolling Item 1</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-secondary-500/20 px-4 py-2 rounded-lg">
                      <Heart className="w-5 h-5 text-secondary-500" />
                      <span className="font-kabel text-foreground">Scrolling Item 2</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent-500/20 px-4 py-2 rounded-lg">
                      <Zap className="w-5 h-5 text-accent-500" />
                      <span className="font-kabel text-foreground">Scrolling Item 3</span>
                    </div>
                  </div>
                  <div className="flex space-x-8 min-w-full">
                    <div className="flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-lg">
                      <Star className="w-5 h-5 text-primary-500" />
                      <span className="font-kabel text-foreground">Scrolling Item 1</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-secondary-500/20 px-4 py-2 rounded-lg">
                      <Heart className="w-5 h-5 text-secondary-500" />
                      <span className="font-kabel text-foreground">Scrolling Item 2</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent-500/20 px-4 py-2 rounded-lg">
                      <Zap className="w-5 h-5 text-accent-500" />
                      <span className="font-kabel text-foreground">Scrolling Item 3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-2">Keyframes</h4>
                <code className="text-sm font-mono text-foreground">
                  {`0%: transform: translateX(0)
100%: transform: translateX(-50%)`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marquee Animation */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Marquee Animation</CardTitle>
          <CardDescription className="font-kabel">Horizontal marquee with variable duration and gap</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div className="overflow-hidden bg-muted/30 rounded-lg p-4">
                <div 
                  className={`flex space-x-4 ${isPlaying ? 'animate-marquee' : ''}`}
                  style={{ '--duration': '15s', '--gap': '1rem' } as React.CSSProperties}
                >
                  <div className="flex space-x-4 shrink-0">
                    <Badge variant="primary">Marquee Item 1</Badge>
                    <Badge variant="secondary">Marquee Item 2</Badge>
                    <Badge variant="accent">Marquee Item 3</Badge>
                    <Badge variant="success">Marquee Item 4</Badge>
                    <Badge variant="warning">Marquee Item 5</Badge>
                  </div>
                  <div className="flex space-x-4 shrink-0">
                    <Badge variant="primary">Marquee Item 1</Badge>
                    <Badge variant="secondary">Marquee Item 2</Badge>
                    <Badge variant="accent">Marquee Item 3</Badge>
                    <Badge variant="success">Marquee Item 4</Badge>
                    <Badge variant="warning">Marquee Item 5</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-2">Keyframes</h4>
                <code className="text-sm font-mono text-foreground">
                  {`from: transform: translateX(0)
to: transform: translateX(calc(-100% - var(--gap)))`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marquee Vertical Animation */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Marquee Vertical Animation</CardTitle>
          <CardDescription className="font-kabel">Vertical marquee with variable duration and gap</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div className="h-48 overflow-hidden bg-muted/30 rounded-lg p-4">
                <div 
                  className={`flex flex-col space-y-4 ${isPlaying ? 'animate-marquee-vertical' : ''}`}
                  style={{ '--duration': '12s', '--gap': '1rem' } as React.CSSProperties}
                >
                  <div className="flex flex-col space-y-4 shrink-0">
                    <div className="flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                      <span className="font-kabel text-foreground">Vertical Item 1</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-secondary-500/20 px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-secondary-500" />
                      <span className="font-kabel text-foreground">Vertical Item 2</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent-500/20 px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-accent-500" />
                      <span className="font-kabel text-foreground">Vertical Item 3</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 shrink-0">
                    <div className="flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                      <span className="font-kabel text-foreground">Vertical Item 1</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-secondary-500/20 px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-secondary-500" />
                      <span className="font-kabel text-foreground">Vertical Item 2</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent-500/20 px-4 py-2 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-accent-500" />
                      <span className="font-kabel text-foreground">Vertical Item 3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold font-basement text-foreground mb-2">Keyframes</h4>
                <code className="text-sm font-mono text-foreground">
                  {`from: transform: translateY(0)
to: transform: translateY(calc(-100% - var(--gap)))`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Block Reveal Animation */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Block Reveal Animation</CardTitle>
          <CardDescription className="font-kabel text-white/80">Animated reveal effect with gradient overlay</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card 
                  key={`reveal-1-${triggerReveal}`}
                  variant="glass" 
                  hover 
                  blockReveal
                  className="text-center"
                >
                  <div className="p-6">
                    <Sparkles className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                    <h4 className="font-basement text-foreground mb-2">Animated Card</h4>
                    <p className="text-sm text-muted-foreground font-kabel">
                      This card reveals with a smooth gradient animation
                    </p>
                  </div>
                </Card>

                <Card 
                  key={`reveal-2-${triggerReveal}`}
                  variant="default" 
                  hover 
                  blockReveal
                  className="text-center"
                >
                  <div className="p-6">
                    <Zap className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
                    <h4 className="font-basement text-foreground mb-2">Default Card</h4>
                    <p className="text-sm text-muted-foreground font-kabel">
                      Combined with different card variants
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Animation Reference */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Animation Reference</CardTitle>
          <CardDescription className="font-kabel">Complete animation system overview</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {animations.map((animation, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold font-basement text-foreground">{animation.name}</h4>
                    <Badge variant="neutral" className="text-xs">{animation.duration}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-kabel mb-3">{animation.description}</p>
                  <div className="bg-muted/50 p-3 rounded text-xs font-mono">
                    {Object.entries(animation.keyframes).map(([key, value]) => (
                      <div key={key} className="text-foreground">
                        <span className="text-primary-500">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}