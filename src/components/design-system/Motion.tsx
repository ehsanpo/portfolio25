import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Play, Pause, RotateCcw, Zap, ArrowRight, Loader } from 'lucide-react';

export function Motion() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [triggerDemo, setTriggerDemo] = useState(0);

  const motionPrinciples = [
    {
      title: 'Purposeful',
      description: 'Every animation serves a clear purpose - guiding attention, providing feedback, or showing relationships.',
      example: 'Button hover states indicate interactivity',
    },
    {
      title: 'Natural',
      description: 'Motion feels organic and follows real-world physics with appropriate easing curves.',
      example: 'Cards ease out when appearing, like objects settling',
    },
    {
      title: 'Responsive',
      description: 'Animations adapt to user preferences and device capabilities.',
      example: 'Reduced motion for accessibility preferences',
    },
    {
      title: 'Performant',
      description: 'Smooth 60fps animations that don\'t impact usability or battery life.',
      example: 'GPU-accelerated transforms and opacity changes',
    },
  ];

  const easingCurves = [
    { name: 'ease-out', curve: 'cubic-bezier(0, 0, 0.2, 1)', use: 'Elements entering the screen' },
    { name: 'ease-in', curve: 'cubic-bezier(0.4, 0, 1, 1)', use: 'Elements leaving the screen' },
    { name: 'ease-in-out', curve: 'cubic-bezier(0.4, 0, 0.2, 1)', use: 'Elements moving within the screen' },
    { name: 'linear', curve: 'cubic-bezier(0, 0, 1, 1)', use: 'Loading indicators and progress' },
  ];

  const durations = [
    { name: 'Fast', duration: '150ms', use: 'Micro-interactions, hover states' },
    { name: 'Base', duration: '300ms', use: 'Standard transitions, modals' },
    { name: 'Slow', duration: '500ms', use: 'Complex animations, page transitions' },
    { name: 'Slower', duration: '700ms', use: 'Onboarding, storytelling' },
  ];

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Motion Design</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Thoughtful motion design that enhances usability, provides feedback, and creates delightful user experiences.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Motion Principles */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Motion Principles</CardTitle>
          <p className="text-white/90 font-kabel mb-6">
            Our motion design follows these core principles to create meaningful and accessible animations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {motionPrinciples.map((principle, index) => (
              <div key={index} className="p-4 glass-card rounded-lg border border-white/20">
                <h4 className="font-semibold font-basement text-white mb-2">{principle.title}</h4>
                <p className="text-sm text-white/80 font-kabel mb-3">{principle.description}</p>
                <p className="text-xs text-white/60 font-kabel italic">Example: {principle.example}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Easing Curves */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Easing Curves</CardTitle>
          <CardDescription className="font-kabel">Different easing functions for different types of motion</CardDescription>
          <CardContent>
            <div className="space-y-4">
              {easingCurves.map((easing, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-8 bg-primary-500/20 rounded relative overflow-hidden">
                      <div 
                        className={`w-2 h-2 bg-primary-500 rounded-full absolute top-3 ${isPlaying ? 'animate-bounce' : ''}`}
                        style={{ 
                          animationTimingFunction: easing.curve,
                          animationDuration: '2s',
                          animationIterationCount: 'infinite'
                        }}
                      />
                    </div>
                    <div>
                      <code className="text-sm font-mono font-medium text-foreground">{easing.name}</code>
                      <p className="text-xs text-muted-foreground font-kabel">{easing.use}</p>
                    </div>
                  </div>
                  <code className="text-xs font-mono text-muted-foreground">{easing.curve}</code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Duration Scale */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Duration Scale</CardTitle>
          <CardDescription className="font-kabel">Consistent timing for different types of animations</CardDescription>
          <CardContent>
            <div className="mb-6 p-4 glass-card rounded-lg border border-warning-500/30 bg-warning-500/10">
              <h4 className="font-semibold font-basement text-warning-600 mb-2">⚠️ Minimum Duration Rule</h4>
              <p className="text-sm text-muted-foreground font-kabel">
                All action animations must have a minimum duration of <strong>180ms</strong>. 
                No action animation should be less than 180ms to ensure users can perceive the feedback and maintain accessibility standards.
              </p>
            </div>
            <div className="space-y-4">
              {durations.map((duration, index) => (
                <div key={index} className="flex items-center justify-between p-4 glass-card rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
                        style={{ 
                          animationDuration: duration.duration,
                          animationIterationCount: 'infinite'
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-sm font-medium font-basement text-foreground">{duration.name}</span>
                      <p className="text-xs text-muted-foreground font-kabel">{duration.use}</p>
                    </div>
                  </div>
                  <code className="text-sm font-mono text-muted-foreground">{duration.duration}</code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demos */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Interactive Demos</CardTitle>
          <CardDescription className="font-kabel">Experience different types of motion in action</CardDescription>
          <CardContent>
            <div className="space-y-8">
              {/* Controls */}
              <div className="flex items-center gap-4">
                <Button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  variant={isPlaying ? "primary" : "outline"}
                  className="flex items-center gap-2"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {isPlaying ? 'Pause' : 'Play'} Animations
                </Button>
                <Button 
                  onClick={() => setTriggerDemo(prev => prev + 1)}
                  variant="glass"
                  className="flex items-center gap-2"
                >
                  <RotateCcw size={16} />
                  Trigger Demo
                </Button>
                <Badge variant={isPlaying ? "success" : "neutral"}>
                  {isPlaying ? 'Running' : 'Paused'}
                </Badge>
              </div>

              {/* Hover States */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Hover States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" className="transition-all duration-300 hover:scale-105">
                    Scale on Hover
                  </Button>
                  <Button variant="glass" className="transition-all duration-300 hover:shadow-lg">
                    Shadow on Hover
                  </Button>
                  <Button variant="outline" className="transition-all duration-300 hover:border-primary-500">
                    Border on Hover
                  </Button>
                </div>
              </div>

              {/* Loading States */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Loading States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" isLoading className="flex items-center gap-2">
                    Loading Button
                  </Button>
                  <div className="flex items-center gap-2 p-3 glass-card rounded-lg">
                    <Loader className={`w-4 h-4 text-primary-500 ${isPlaying ? 'animate-spin' : ''}`} />
                    <span className="text-sm font-kabel text-foreground">Processing...</span>
                  </div>
                </div>
              </div>

              {/* Entrance Animations */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Entrance Animations</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <Card 
                      key={`${item}-${triggerDemo}`}
                      variant="default" 
                      hover 
                      blockReveal
                      className="text-center"
                    >
                      <div className="p-4">
                        <Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                        <h5 className="font-basement text-foreground mb-1">Card {item}</h5>
                        <p className="text-xs text-muted-foreground font-kabel">Block reveal animation</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Micro-interactions */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Micro-interactions</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="p-3 glass-card rounded-lg transition-all duration-200 hover:scale-110 active:scale-95">
                    <ArrowRight className="w-5 h-5 text-primary-500 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="p-3 glass-card rounded-lg transition-all duration-200 hover:rotate-12">
                    <Zap className="w-5 h-5 text-secondary-500" />
                  </button>
                  <button className="p-3 glass-card rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25">
                    <Play className="w-5 h-5 text-accent-500" />
                  </button>
                </div>
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
                  <li>• Use motion to guide user attention</li>
                  <li>• Provide immediate feedback for interactions</li>
                  <li>• Respect user preferences for reduced motion</li>
                  <li>• Keep animations between 180ms-500ms for UI feedback</li>
                  <li>• Never use action animations shorter than 180ms</li>
                  <li>• Use consistent easing curves</li>
                  <li>• Test on slower devices</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Animate just for the sake of animation</li>
                  <li>• Use motion that causes motion sickness</li>
                  <li>• Make users wait for decorative animations</li>
                  <li>• Use different easing for similar interactions</li>
                  <li>• Animate too many elements at once</li>
                  <li>• Ignore performance implications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Motion & Accessibility</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Ensuring our motion design is inclusive and accessible to all users
          </CardDescription>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 glass-card rounded-lg border border-white/20">
                <h4 className="font-semibold font-basement text-white mb-2">Reduced Motion</h4>
                <p className="text-sm text-white/80 font-kabel mb-3">
                  Respect the prefers-reduced-motion media query to disable or reduce animations for users who prefer less motion.
                </p>
                <code className="text-xs font-mono text-white/70 bg-black/20 p-2 rounded">
                  @media (prefers-reduced-motion: reduce) {'{'}
                  <br />
                  &nbsp;&nbsp;* {'{ animation-duration: 0.01ms !important; }'}
                  <br />
                  {'}'}
                </code>
              </div>
              
              <div className="p-4 glass-card rounded-lg border border-white/20">
                <h4 className="font-semibold font-basement text-white mb-2">Focus Management</h4>
                <p className="text-sm text-white/80 font-kabel">
                  Ensure focus states are clearly visible and that animations don't interfere with keyboard navigation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}