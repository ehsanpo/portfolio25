import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import { Card, CardContent, CardDescription, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { DuoToneImage } from '../../ui/DuoToneImage';
import { BentoGrid, BentoLayouts } from '../../ui/BentoGrid';
import { Loading } from '../../ui/Loading';
import { ParallaxImage } from '../../ui/ParallaxImage';
import { ParallaxGrid } from '../../ui/ParallaxGrid';
import { DecorativeElement } from '../../ui/DecorativeElements';
import { 
  Sparkles, 
  Grid3X3, 
  Loader, 
  Palette, 
  Image as ImageIcon,
  BarChart3,
  User,
  Mail,
  Star,
  Heart,
  Zap,
  Target,
  Code,
  Camera,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

export function EffectsShowcase() {
  const [loadingVariant, setLoadingVariant] = useState<'spinner' | 'cyberpunk' | 'matrix' | 'glitch'>('cyberpunk');
  const [isAnimated, setIsAnimated] = useState(true);

  const parallaxImages = [
    {
      id: '1',
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Modern workspace',
      title: 'Creative Workspace',
      description: 'Modern design studio with natural lighting',
      size: 'large' as const,
      speed: 0.3,
      direction: 'up' as const,
    },
    {
      id: '2',
      src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Design tools',
      title: 'Design Tools',
      description: 'Essential tools for creative work',
      size: 'tall' as const,
      speed: 0.4,
      direction: 'down' as const,
    },
    {
      id: '3',
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team collaboration',
      title: 'Team Meeting',
      description: 'Collaborative design session',
      size: 'medium' as const,
      speed: 0.2,
      direction: 'up' as const,
    },
    {
      id: '4',
      src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Digital interface',
      title: 'UI Design',
      description: 'Modern interface design',
      size: 'wide' as const,
      speed: 0.5,
      direction: 'down' as const,
    },
    {
      id: '5',
      src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Brand materials',
      title: 'Brand Identity',
      description: 'Complete brand design',
      size: 'small' as const,
      speed: 0.6,
      direction: 'up' as const,
    },
    {
      id: '6',
      src: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Creative process',
      title: 'Creative Process',
      description: 'Behind the scenes',
      size: 'medium' as const,
      speed: 0.3,
      direction: 'down' as const,
    },
  ];

  const sampleImages = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const portfolioBentoItems = [
    {
      id: 'hero',
      title: 'Welcome',
      description: 'Full-stack developer & designer',
      size: 'xl' as const,
      variant: 'gradient' as const,
      content: (
        <div className="text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold font-basement text-white mb-2">John Doe</h2>
          <p className="text-white/80 font-kabel">Creating digital experiences</p>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills',
      size: 'lg' as const,
      variant: 'glass' as const,
      content: (
        <div className="w-full">
          <div className="grid grid-cols-2 gap-3">
            <Badge variant="primary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="accent">Node.js</Badge>
            <Badge variant="success">AWS</Badge>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Projects',
      description: '25+ completed',
      size: 'md' as const,
      variant: 'default' as const,
      content: (
        <div className="text-center">
          <div className="text-3xl font-bold font-basement gradient-text mb-2">25+</div>
          <p className="text-sm text-muted-foreground font-kabel">Completed Projects</p>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      size: 'md' as const,
      variant: 'gradient' as const,
      content: (
        <div className="text-center">
          <Mail className="w-8 h-8 text-white mx-auto mb-2" />
          <p className="text-white/80 font-kabel text-sm">Let's work together</p>
        </div>
      )
    },
    {
      id: 'stats',
      title: 'GitHub',
      size: 'sm' as const,
      variant: 'glass' as const,
      content: (
        <div className="text-center">
          <Code className="w-6 h-6 text-primary-500 mx-auto mb-1" />
          <div className="text-lg font-bold font-basement text-foreground">1.2k</div>
          <div className="text-xs text-muted-foreground font-kabel">Commits</div>
        </div>
      )
    },
    {
      id: 'rating',
      title: 'Rating',
      size: 'sm' as const,
      variant: 'default' as const,
      content: (
        <div className="text-center">
          <div className="flex justify-center mb-1">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-3 h-3 text-warning-500 fill-current" />
            ))}
          </div>
          <div className="text-xs text-muted-foreground font-kabel">5.0 Rating</div>
        </div>
      )
    }
  ];

  const dashboardBentoItems = [
    {
      id: 'main-chart',
      title: 'Analytics Overview',
      size: 'xl' as const,
      variant: 'gradient' as const,
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <BarChart3 className="w-16 h-16 text-white/60" />
        </div>
      )
    },
    {
      id: 'users',
      title: 'Active Users',
      description: '+12% from last month',
      size: 'md' as const,
      variant: 'glass' as const,
      content: (
        <div className="text-center">
          <div className="text-2xl font-bold font-basement text-foreground mb-1">2.4k</div>
          <div className="text-xs text-success-500 font-kabel">+12% ↗</div>
        </div>
      )
    },
    {
      id: 'revenue',
      title: 'Revenue',
      description: 'This month',
      size: 'md' as const,
      variant: 'default' as const,
      content: (
        <div className="text-center">
          <div className="text-2xl font-bold font-basement text-foreground mb-1">$12.5k</div>
          <div className="text-xs text-success-500 font-kabel">+8% ↗</div>
        </div>
      )
    },
    {
      id: 'notifications',
      title: 'Alerts',
      size: 'sm' as const,
      variant: 'glass' as const,
      content: (
        <div className="text-center">
          <div className="w-8 h-8 bg-error-500/20 rounded-full flex items-center justify-center mx-auto mb-1">
            <span className="text-error-500 font-bold text-sm">3</span>
          </div>
          <div className="text-xs text-muted-foreground font-kabel">New alerts</div>
        </div>
      )
    },
    {
      id: 'performance',
      title: 'Performance',
      size: 'sm' as const,
      variant: 'default' as const,
      content: (
        <div className="text-center">
          <div className="text-lg font-bold font-basement text-success-500 mb-1">98%</div>
          <div className="text-xs text-muted-foreground font-kabel">Uptime</div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold font-basement gradient-text mb-4">Effects & Layouts</h2>
        <p className="text-lg text-muted-foreground mb-8 font-kabel">
          Advanced visual effects, layout systems, and interactive components inspired by cyberpunk and modern design aesthetics.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Parallax Effects */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Parallax Scrolling Effects</CardTitle>
          <CardDescription className="font-kabel text-white/80">Smooth parallax scrolling for immersive visual experiences</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-white mb-4">Background Parallax</h4>
                <p className="text-white/80 font-kabel text-sm mb-4">
                  Large background images with parallax scrolling effect. Scroll down to see the effect in action.
                </p>
                
                {/* Hero Parallax Example */}
                <ParallaxImage
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Hero background"
                  speed={0.5}
                  direction="up"
                  height="400px"
                  overlay={true}
                  overlayColor="black"
                  overlayOpacity={0.5}
                  className="rounded-lg"
                >
                  <div className="text-center text-white">
                    <h3 className="text-4xl font-bold font-basement mb-4">Parallax Hero Section</h3>
                    <p className="text-xl font-kabel mb-6 max-w-2xl">
                      Experience smooth parallax scrolling that creates depth and visual interest
                    </p>
                    <Button variant="glass" size="lg">
                      Explore More
                    </Button>
                  </div>
                </ParallaxImage>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Content Parallax Grid</h4>
                <p className="text-white/80 font-kabel text-sm mb-4">
                  Grid of images with different sizes and parallax speeds. Each image moves at a different rate.
                </p>
                
                <ParallaxGrid
                  images={parallaxImages}
                  columns={3}
                  gap="md"
                  variant="mixed"
                  showOverlay={true}
                />
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Masonry Parallax</h4>
                <p className="text-white/80 font-kabel text-sm mb-4">
                  Masonry layout with parallax effects for dynamic, Pinterest-style galleries.
                </p>
                
                <ParallaxGrid
                  images={parallaxImages.slice(0, 4)}
                  columns={3}
                  gap="lg"
                  variant="masonry"
                  showOverlay={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Duo Tone Images */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Duo Tone Image Effects</CardTitle>
          <CardDescription className="font-kabel">Creative image treatments with color overlays and blend modes</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Duo Tone Variants</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h5 className="text-sm font-basement text-foreground mb-2">Default</h5>
                    <DuoToneImage
                      src={sampleImages[0]}
                      alt="Default duo tone"
                      variant="default"
                      className="aspect-square rounded-lg"
                      overlay={true}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-basement text-foreground mb-2">Cyberpunk</h5>
                    <DuoToneImage
                      src={sampleImages[1]}
                      alt="Cyberpunk duo tone"
                      variant="cyberpunk"
                      className="aspect-square rounded-lg"
                      overlay={true}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-basement text-foreground mb-2">Neon</h5>
                    <DuoToneImage
                      src={sampleImages[2]}
                      alt="Neon duo tone"
                      variant="neon"
                      className="aspect-square rounded-lg"
                      overlay={true}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-basement text-foreground mb-2">Vintage</h5>
                    <DuoToneImage
                      src={sampleImages[3]}
                      alt="Vintage duo tone"
                      variant="vintage"
                      className="aspect-square rounded-lg"
                      overlay={true}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Custom Colors</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <DuoToneImage
                    src={sampleImages[0]}
                    alt="Custom duo tone 1"
                    color1="#ff6b6b"
                    color2="#4ecdc4"
                    intensity={0.8}
                    className="aspect-video rounded-lg"
                  />
                  <DuoToneImage
                    src={sampleImages[1]}
                    alt="Custom duo tone 2"
                    color1="#a8e6cf"
                    color2="#ff8b94"
                    intensity={0.6}
                    className="aspect-video rounded-lg"
                  />
                  <DuoToneImage
                    src={sampleImages[2]}
                    alt="Custom duo tone 3"
                    color1="#ffd93d"
                    color2="#6bcf7f"
                    intensity={0.7}
                    className="aspect-video rounded-lg"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bento Grid */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Bento Grid Layouts</CardTitle>
          <CardDescription className="font-kabel">Flexible grid system inspired by Japanese bento boxes for dynamic layouts</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Portfolio Layout</h4>
                <BentoGrid
                  items={portfolioBentoItems}
                  columns={4}
                  gap="md"
                />
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Dashboard Layout</h4>
                <BentoGrid
                  items={dashboardBentoItems}
                  columns={3}
                  gap="lg"
                />
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Compact Layout</h4>
                <BentoGrid
                  items={portfolioBentoItems.slice(0, 4)}
                  columns={6}
                  gap="sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading Components */}
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white">Loading Components</CardTitle>
          <CardDescription className="font-kabel text-white/80">Cyberpunk-inspired loading states and progress indicators</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white/80 font-kabel text-sm">Variant:</span>
                <div className="flex gap-2">
                  {(['spinner', 'cyberpunk', 'matrix', 'glitch'] as const).map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setLoadingVariant(variant)}
                      className={cn(
                        'px-3 py-1 rounded-lg text-sm font-kabel transition-all capitalize',
                        loadingVariant === variant
                          ? 'bg-white/30 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/20'
                      )}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => setIsAnimated(!isAnimated)}
                  className="flex items-center gap-2"
                >
                  {isAnimated ? <Pause size={16} /> : <Play size={16} />}
                  {isAnimated ? 'Pause' : 'Play'}
                </Button>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Loading Variants</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading variant="spinner" size="lg" color="white" />
                    <p className="text-white/80 font-kabel text-sm mt-3">Spinner</p>
                  </div>
                  
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading variant="cyberpunk" size="lg" />
                    <p className="text-white/80 font-kabel text-sm mt-3">Cyberpunk</p>
                  </div>
                  
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading variant="matrix" size="lg" />
                    <p className="text-white/80 font-kabel text-sm mt-3">Matrix</p>
                  </div>
                  
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading variant="glitch" size="lg" />
                    <p className="text-white/80 font-kabel text-sm mt-3">Glitch</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Loading with Text</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading 
                      variant="cyberpunk" 
                      size="md" 
                      text="INITIALIZING SYSTEM..."
                    />
                  </div>
                  
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading 
                      variant="matrix" 
                      size="md" 
                      text="PROCESSING DATA..."
                    />
                  </div>
                  
                  <div className="text-center p-6 glass-card rounded-lg border border-white/20">
                    <Loading 
                      variant="glitch" 
                      size="md" 
                      text="LOADING INTERFACE..."
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-white mb-4">Different Sizes</h4>
                <div className="flex items-center justify-center space-x-8 p-6 glass-card rounded-lg border border-white/20">
                  <div className="text-center">
                    <Loading variant={loadingVariant} size="sm" />
                    <p className="text-white/60 font-kabel text-xs mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <Loading variant={loadingVariant} size="md" />
                    <p className="text-white/60 font-kabel text-xs mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <Loading variant={loadingVariant} size="lg" />
                    <p className="text-white/60 font-kabel text-xs mt-2">Large</p>
                  </div>
                  <div className="text-center">
                    <Loading variant={loadingVariant} size="xl" />
                    <p className="text-white/60 font-kabel text-xs mt-2">Extra Large</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Decorative Elements</CardTitle>
          <CardDescription className="font-kabel">Tech-inspired decorative components for visual enhancement</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsAnimated(!isAnimated)}
                  className="flex items-center gap-2"
                >
                  {isAnimated ? <Pause size={16} /> : <Play size={16} />}
                  {isAnimated ? 'Pause' : 'Play'} Animations
                </Button>
                <Badge variant={isAnimated ? "success" : "neutral"}>
                  {isAnimated ? 'Animated' : 'Static'}
                </Badge>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Tech Patterns</h4>
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                  <div className="text-center">
                    <div className="p-4 glass-card rounded-lg mb-2">
                      <DecorativeElement variant="grid" size="md" color="accent" animated={isAnimated} />
                    </div>
                    <p className="text-xs text-muted-foreground font-kabel">Grid</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 glass-card rounded-lg mb-2">
                      <DecorativeElement variant="lines" size="md" color="primary" animated={isAnimated} />
                    </div>
                    <p className="text-xs text-muted-foreground font-kabel">Lines</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 glass-card rounded-lg mb-2">
                      <DecorativeElement variant="brackets" size="md" color="secondary" animated={isAnimated} />
                    </div>
                    <p className="text-xs text-muted-foreground font-kabel">Brackets</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 glass-card rounded-lg mb-2">
                      <DecorativeElement variant="scan" size="md" color="accent" animated={isAnimated} />
                    </div>
                    <p className="text-xs text-muted-foreground font-kabel">Scan</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 glass-card rounded-lg mb-2">
                      <DecorativeElement variant="circuit" size="md" color="primary" animated={isAnimated} />
                    </div>
                    <p className="text-xs text-muted-foreground font-kabel">Circuit</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-4 glass-card rounded-lg mb-2">
                      <DecorativeElement variant="noise" size="md" color="secondary" animated={isAnimated} />
                    </div>
                    <p className="text-xs text-muted-foreground font-kabel">Noise</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Data Display Elements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 glass-card rounded-lg">
                    <DecorativeElement variant="data" size="lg" color="accent" animated={isAnimated} />
                  </div>
                  
                  <div className="p-6 glass-card rounded-lg bg-black/50">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-accent-500">STATUS:</span>
                        <span className="text-success-500">ONLINE</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-accent-500">CPU:</span>
                        <span className="text-warning-500">67%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-accent-500">MEM:</span>
                        <span className="text-primary-500">4.2GB</span>
                      </div>
                      <div className="w-full h-1 bg-muted/30 rounded">
                        <div className="w-2/3 h-full bg-accent-500 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Corner Decorations</h4>
                <div className="relative p-8 glass-card rounded-lg">
                  <DecorativeElement variant="brackets" size="sm" color="accent" className="absolute top-4 left-4" animated={isAnimated} />
                  <DecorativeElement variant="brackets" size="sm" color="primary" className="absolute top-4 right-4" animated={isAnimated} />
                  <DecorativeElement variant="brackets" size="sm" color="secondary" className="absolute bottom-4 left-4" animated={isAnimated} />
                  <DecorativeElement variant="brackets" size="sm" color="accent" className="absolute bottom-4 right-4" animated={isAnimated} />
                  
                  <div className="text-center">
                    <h5 className="font-basement text-foreground text-lg mb-2">Decorated Content Area</h5>
                    <p className="text-muted-foreground font-kabel">
                      Content with decorative corner elements for a cyberpunk aesthetic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card variant="default" padding="lg">
          <CardTitle className="font-basement">Usage Examples</CardTitle>
          <CardDescription className="font-kabel">Real-world applications of effects and layouts</CardDescription>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Hero Section with Effects</h4>
                <div className="relative overflow-hidden rounded-lg">
                  <ParallaxImage
                    src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Tech background"
                    speed={0.3}
                    direction="up"
                    height="500px"
                    overlay={true}
                    overlayColor="black"
                    overlayOpacity={0.7}
                  >
                    <div className="relative z-30 text-center p-8">
                      <DecorativeElement variant="circuit" size="xl" color="accent" className="absolute top-0 right-0 opacity-20" animated={isAnimated} />
                      <DecorativeElement variant="noise" size="lg" color="primary" className="absolute bottom-0 left-0 opacity-10" animated={isAnimated} />
                      
                      <h3 className="text-3xl font-bold font-basement gradient-text mb-4">
                        Next-Gen Design System
                      </h3>
                      <p className="text-white/90 font-kabel mb-6 max-w-2xl mx-auto">
                        Experience the future of web design with cyberpunk-inspired components, 
                        advanced visual effects, and cutting-edge interaction patterns.
                      </p>
                      <div className="flex justify-center gap-3">
                        <Button variant="gradient">Explore Components</Button>
                        <Button variant="glass">View Documentation</Button>
                      </div>
                    </div>
                  </ParallaxImage>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Parallax Content Section</h4>
                <div className="relative p-8 glass-card rounded-lg overflow-hidden">
                  <DecorativeElement variant="circuit" size="xl" color="accent" className="absolute top-0 right-0 opacity-20" animated={isAnimated} />
                  <DecorativeElement variant="noise" size="lg" color="primary" className="absolute bottom-0 left-0 opacity-10" animated={isAnimated} />
                  
                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl font-bold font-basement gradient-text mb-4">
                      Advanced Visual Effects
                    </h3>
                    <p className="text-muted-foreground font-kabel mb-6 max-w-2xl mx-auto">
                      Combine decorative elements with parallax effects for stunning visual compositions
                      that engage users and create memorable experiences.
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="gradient">Learn More</Button>
                      <Button variant="glass">Try Demo</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Loading States in Context</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card variant="glass" className="text-center">
                    <div className="p-6">
                      <Loading variant="cyberpunk" size="md" text="Connecting..." />
                    </div>
                  </Card>
                  
                  <Card variant="default" className="text-center">
                    <div className="p-6">
                      <Loading variant="matrix" size="md" text="Processing..." />
                    </div>
                  </Card>
                  
                  <Card variant="gradient" className="text-center">
                    <div className="p-6">
                      <Loading variant="glitch" size="md" color="white" text="Loading..." />
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Image Gallery with Duo Tone</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sampleImages.map((image, index) => (
                    <DuoToneImage
                      key={index}
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      variant={['default', 'cyberpunk', 'neon', 'vintage'][index] as any}
                      className="aspect-square rounded-lg"
                      overlay={true}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium font-basement text-foreground mb-4">Mixed Effects Gallery</h4>
                <div className="space-y-6">
                  {/* Parallax + Duo Tone */}
                  <ParallaxImage
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Mixed effects demo"
                    speed={0.4}
                    direction="up"
                    height="300px"
                    overlay={true}
                    overlayColor="black"
                    overlayOpacity={0.3}
                    className="rounded-lg"
                  >
                    <div className="text-center text-white">
                      <DecorativeElement variant="brackets" size="md" color="accent" animated={isAnimated} />
                      <h4 className="text-2xl font-bold font-basement mt-4 mb-2">Combined Effects</h4>
                      <p className="font-kabel">Parallax + Decorative Elements</p>
                    </div>
                  </ParallaxImage>
                  
                  {/* Parallax Grid with different speeds */}
                  <ParallaxGrid
                    images={parallaxImages.slice(0, 6)}
                    columns={3}
                    gap="md"
                    variant="grid"
                    showOverlay={true}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Technical Implementation</CardTitle>
          <CardDescription className="font-kabel">How these effects are built and optimized</CardDescription>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Duo Tone Effect</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`// CSS blend modes and gradients
.duo-tone {
  filter: grayscale(100%);
}

.duo-tone::after {
  background: linear-gradient(135deg, var(--color-1), var(--color-2));
  mix-blend-mode: multiply;
  opacity: var(--intensity);
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Bento Grid System</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`// CSS Grid with dynamic sizing
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

.bento-item-xl {
  grid-column: span 3;
  grid-row: span 2;
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Parallax Scrolling</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`// Parallax effect with scroll listener
useEffect(() => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -speed;
    setOffset(rate);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [speed]);`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3">Cyberpunk Animations</h4>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    {`// Keyframe animations for tech effects
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}`}
                  </code>
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
                  <li>• Use effects purposefully to enhance content</li>
                  <li>• Test parallax effects on different devices</li>
                  <li>• Provide loading states for better UX</li>
                  <li>• Test performance on slower devices</li>
                  <li>• Respect user motion preferences</li>
                  <li>• Use appropriate parallax speeds (0.1-0.6)</li>
                  <li>• Use decorative elements sparingly</li>
                  <li>• Ensure accessibility with proper contrast</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold font-basement text-foreground mb-3 text-error-500">✗ Don't</h4>
                <ul className="space-y-2 text-sm text-muted-foreground font-kabel">
                  <li>• Overuse visual effects that distract from content</li>
                  <li>• Use parallax speeds that cause motion sickness</li>
                  <li>• Forget to provide fallbacks for failed images</li>
                  <li>• Use too many animated elements at once</li>
                  <li>• Ignore performance implications</li>
                  <li>• Apply parallax to critical content areas</li>
                  <li>• Make decorative elements interfere with usability</li>
                  <li>• Use effects that cause motion sickness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}