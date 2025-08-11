import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { AudioPlayer } from '../ui/AudioPlayer';
import { Volume2, VolumeX, Play, Pause, Bell, Zap, CheckCircle, AlertTriangle } from 'lucide-react';

export function Sounds() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const soundCategories = [
    {
      icon: CheckCircle,
      name: 'Success Sounds',
      description: 'Positive feedback for completed actions',
      sounds: [
        { name: 'Task Complete', duration: '0.5s', description: 'Gentle chime for task completion' },
        { name: 'Upload Success', duration: '0.8s', description: 'Rising tone for successful uploads' },
        { name: 'Save Confirmation', duration: '0.3s', description: 'Quick positive beep' },
      ],
    },
    {
      icon: AlertTriangle,
      name: 'Alert Sounds',
      description: 'Attention-grabbing sounds for important information',
      sounds: [
        { name: 'Error Alert', duration: '0.7s', description: 'Gentle but noticeable error sound' },
        { name: 'Warning Tone', duration: '0.6s', description: 'Cautionary sound for warnings' },
        { name: 'Validation Error', duration: '0.4s', description: 'Subtle form validation sound' },
      ],
    },
    {
      icon: Bell,
      name: 'Notification Sounds',
      description: 'Ambient sounds for system notifications',
      sounds: [
        { name: 'New Message', duration: '0.9s', description: 'Friendly notification chime' },
        { name: 'Reminder', duration: '1.2s', description: 'Gentle reminder melody' },
        { name: 'System Update', duration: '0.8s', description: 'Informative system sound' },
      ],
    },
    {
      icon: Zap,
      name: 'Interaction Sounds',
      description: 'Subtle feedback for user interactions',
      sounds: [
        { name: 'Button Click', duration: '0.1s', description: 'Crisp click sound' },
        { name: 'Hover Feedback', duration: '0.05s', description: 'Subtle hover sound' },
        { name: 'Toggle Switch', duration: '0.2s', description: 'Satisfying toggle sound' },
      ],
    },
  ];

  const designPrinciples = [
    {
      title: 'Purposeful',
      description: 'Every sound serves a clear functional purpose',
      guidelines: [
        'Provide meaningful feedback',
        'Support user understanding',
        'Enhance accessibility',
        'Guide user attention',
      ],
    },
    {
      title: 'Subtle',
      description: 'Sounds complement, never overwhelm the experience',
      guidelines: [
        'Use appropriate volume levels',
        'Keep durations brief',
        'Avoid repetitive sounds',
        'Respect user preferences',
      ],
    },
    {
      title: 'Consistent',
      description: 'Sound patterns follow logical, learnable rules',
      guidelines: [
        'Similar actions use similar sounds',
        'Maintain tonal consistency',
        'Follow established conventions',
        'Create predictable patterns',
      ],
    },
    {
      title: 'Accessible',
      description: 'Sounds work for users with different abilities',
      guidelines: [
        'Provide visual alternatives',
        'Respect reduced motion preferences',
        'Offer volume controls',
        'Support sound customization',
      ],
    },
  ];

  const sampleTracks = [
    { id: '1', title: 'Ambient Notification', artist: 'System Sounds', duration: '0:03' },
    { id: '2', title: 'Success Chime', artist: 'UI Feedback', duration: '0:02' },
    { id: '3', title: 'Error Alert', artist: 'System Alerts', duration: '0:04' },
    { id: '4', title: 'Button Click', artist: 'Interaction Sounds', duration: '0:01' },
    { id: '5', title: 'Hover Feedback', artist: 'Micro Interactions', duration: '0:01' },
  ];

  const musicTracks = [
    { id: '1', title: 'Digital Dreams', artist: 'Synthwave Collective', duration: '3:45' },
    { id: '2', title: 'Neon Nights', artist: 'Synthwave Collective', duration: '4:12' },
    { id: '3', title: 'Cyber City', artist: 'Synthwave Collective', duration: '3:28' },
    { id: '4', title: 'Electric Pulse', artist: 'Synthwave Collective', duration: '4:01' },
    { id: '5', title: 'Future Memories', artist: 'Synthwave Collective', duration: '3:55' },
  ];

  const playSound = (soundName: string) => {
    if (!soundEnabled) return;
    
    setCurrentlyPlaying(soundName);
    // Simulate sound playing
    setTimeout(() => {
      setCurrentlyPlaying(null);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div className="block-reveal">
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Sound Design</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Thoughtful audio feedback that enhances usability and creates delightful, accessible user experiences.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Sound Philosophy */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Sound Philosophy</CardTitle>
          <p className="text-lg text-white/90 font-kabel leading-relaxed mb-6">
            Sound is a powerful tool for communication and feedback. Our audio design enhances the user experience 
            through purposeful, subtle, and accessible sound patterns. We use audio to provide feedback, guide attention, 
            and create emotional connections while always respecting user preferences and accessibility needs.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="glass">Purposeful</Badge>
            <Badge variant="glass">Subtle</Badge>
            <Badge variant="glass">Accessible</Badge>
            <Badge variant="glass">Optional</Badge>
          </div>
        </Card>

        {/* Sound Controls */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Sound Controls</CardTitle>
          <CardDescription className="font-kabel">Global sound settings and preferences</CardDescription>
          <CardContent>
            <div className="flex items-center justify-between p-4 glass-card rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                  {soundEnabled ? (
                    <Volume2 className="w-6 h-6 text-primary-400" />
                  ) : (
                    <VolumeX className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold font-basement text-foreground">System Sounds</h4>
                  <p className="text-sm text-muted-foreground font-kabel">
                    {soundEnabled ? 'Sounds are enabled' : 'Sounds are disabled'}
                  </p>
                </div>
              </div>
              <Button
                variant={soundEnabled ? "primary" : "outline"}
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="flex items-center gap-2"
              >
                {soundEnabled ? <VolumeX size={16} /> : <Volume2 size={16} />}
                {soundEnabled ? 'Disable' : 'Enable'}
              </Button>
            </div>
            
            <div className="mt-4 p-4 glass-card rounded-lg">
              <h4 className="font-semibold font-basement text-foreground mb-3">User Preferences</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-kabel text-foreground">Notification sounds</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-kabel text-foreground">Interaction feedback</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-kabel text-foreground">Error alerts</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sound Categories */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Audio Players</CardTitle>
          <CardDescription className="font-kabel">Interactive audio players for different content types</CardDescription>
          <CardContent>
            <div className="space-y-8">
              {/* Single Track Player */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Single Track Player</h4>
                <AudioPlayer 
                  tracks={[{ id: '1', title: 'Digital Dreams', artist: 'Synthwave Collective', duration: '3:45' }]}
                  variant="single"
                />
              </div>

              {/* Album Player */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Album Player</h4>
                <AudioPlayer 
                  tracks={musicTracks}
                  albumTitle="Synthwave Collection"
                  albumArtist="Various Artists"
                  variant="album"
                />
              </div>

              {/* System Sounds Player */}
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">System Sounds Collection</h4>
                <AudioPlayer 
                  tracks={sampleTracks}
                  albumTitle="UI Sound Library"
                  albumArtist="Design System"
                  variant="album"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {soundCategories.map((category, index) => {
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
                    <CardTitle className="text-lg mb-2 font-basement">{category.name}</CardTitle>
                  </div>
                </div>
                
                <CardDescription className="font-kabel mb-4">
                  {category.description}
                </CardDescription>
                
                <div className="space-y-3">
                  {category.sounds.map((sound, soundIndex) => (
                    <div key={soundIndex} className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium font-basement text-foreground">{sound.name}</span>
                          <Badge variant="neutral" className="text-xs">{sound.duration}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground font-kabel">{sound.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => playSound(sound.name)}
                        disabled={!soundEnabled}
                        className="ml-3"
                      >
                        {currentlyPlaying === sound.name ? (
                          <Pause size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Design Principles */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Design Principles</CardTitle>
          <CardDescription className="font-kabel">Core principles guiding our sound design decisions</CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle, index) => (
                <div key={index} className="p-4 glass-card rounded-lg">
                  <h4 className="font-semibold font-basement text-foreground mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground font-kabel mb-3">{principle.description}</p>
                  <ul className="space-y-1">
                    {principle.guidelines.map((guideline, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground font-kabel flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Interactive Demo</CardTitle>
          <CardDescription className="font-kabel">Experience different sound interactions</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Button Interactions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="primary" 
                    onClick={() => playSound('Success Click')}
                    disabled={!soundEnabled}
                  >
                    Success Action
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => playSound('Standard Click')}
                    disabled={!soundEnabled}
                  >
                    Standard Action
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={() => playSound('Error Click')}
                    disabled={!soundEnabled}
                  >
                    Destructive Action
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">Form Interactions</h4>
                <div className="space-y-3 max-w-md">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Type to hear feedback..."
                      className="w-full px-4 py-2 glass-card rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      onChange={() => soundEnabled && playSound('Input Feedback')}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="demo-checkbox"
                      onChange={() => soundEnabled && playSound('Toggle Sound')}
                    />
                    <label htmlFor="demo-checkbox" className="text-sm font-kabel">
                      Enable notifications (click to hear toggle sound)
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-3">System Notifications</h4>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="glass" 
                    onClick={() => playSound('Success Notification')}
                    disabled={!soundEnabled}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle size={16} />
                    Success
                  </Button>
                  <Button 
                    variant="glass" 
                    onClick={() => playSound('Warning Notification')}
                    disabled={!soundEnabled}
                    className="flex items-center gap-2"
                  >
                    <AlertTriangle size={16} />
                    Warning
                  </Button>
                  <Button 
                    variant="glass" 
                    onClick={() => playSound('Info Notification')}
                    disabled={!soundEnabled}
                    className="flex items-center gap-2"
                  >
                    <Bell size={16} />
                    Info
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Technical Implementation</CardTitle>
          <CardDescription className="font-kabel">How to implement sound feedback in your applications</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Web Audio API</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`// Create audio context
const audioContext = new AudioContext();

// Play sound function
function playSound(frequency, duration) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Accessibility Considerations</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`// Respect user preferences
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

// Check for sound preferences
const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';

function playAccessibleSound(soundType) {
  if (!soundEnabled || prefersReducedMotion.matches) {
    return; // Skip sound playback
  }
  
  playSound(soundType);
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">React Hook Example</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`const useSound = () => {
  const [enabled, setEnabled] = useState(true);
  
  const playSound = useCallback((type) => {
    if (!enabled) return;
    
    // Play sound based on type
    switch(type) {
      case 'success':
        // Play success sound
        break;
      case 'error':
        // Play error sound
        break;
    }
  }, [enabled]);
  
  return { playSound, enabled, setEnabled };
};`}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Best Practices</CardTitle>
          <CardDescription className="font-kabel text-white/80 mb-6">
            Guidelines for implementing effective sound design
          </CardDescription>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✓ Do</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Provide user controls for sound preferences</li>
                  <li>• Use sounds to enhance, not replace visual feedback</li>
                  <li>• Keep sound durations brief (under 1 second)</li>
                  <li>• Test with users who have hearing impairments</li>
                  <li>• Respect system-level sound preferences</li>
                  <li>• Use consistent sound patterns for similar actions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-white mb-3">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-white/80 font-kabel">
                  <li>• Play sounds without user consent</li>
                  <li>• Use sounds as the only form of feedback</li>
                  <li>• Create jarring or unpleasant sounds</li>
                  <li>• Play multiple sounds simultaneously</li>
                  <li>• Ignore accessibility guidelines</li>
                  <li>• Use copyrighted audio without permission</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}