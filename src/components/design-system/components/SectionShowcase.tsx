import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../ui/Badge';
import { Section } from '../../ui/Section';
import { SkillsRadarChart } from '../../ui/SkillsRadarChart';
import { 
  Layout, 
  BarChart3, 
  Zap, 
  Target,
  Users,
  Code,
  Palette,
  Smartphone,
  Server,
  Settings
} from 'lucide-react';

export function SectionShowcase() {
  const [selectedView, setSelectedView] = useState<'sections' | 'radar'>('sections');

  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex gap-4 mb-8">
        <Button
          variant={selectedView === 'sections' ? 'default' : 'outline'}
          onClick={() => setSelectedView('sections')}
          className="flex items-center gap-2"
        >
          <Layout className="w-4 h-4" />
          Sections
        </Button>
        <Button
          variant={selectedView === 'radar' ? 'default' : 'outline'}
          onClick={() => setSelectedView('radar')}
          className="flex items-center gap-2"
        >
          <BarChart3 className="w-4 h-4" />
          Radar Chart
        </Button>
      </div>

      {selectedView === 'sections' && (
        <div className="space-y-12">
          {/* Section Component Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="w-5 h-5" />
                Section Component
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Flexible layout component for creating beautiful content sections with title/text or image/text combinations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Layout className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Flexible Layouts</h4>
                  <p className="text-sm text-muted-foreground">Title left/right, image combinations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Multiple Variants</h4>
                  <p className="text-sm text-muted-foreground">Default, glass, gradient, minimal</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Interactive</h4>
                  <p className="text-sm text-muted-foreground">Animations, CTAs, responsive</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Examples */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Section Examples</h3>
            
            {/* Title Left Example */}
            <Section
              title="About Our Mission"
              titlePosition="left"
              content="We believe in creating digital experiences that not only look beautiful but also solve real problems. Our approach combines cutting-edge technology with human-centered design to deliver solutions that make a difference."
              badges={['Innovation', 'Design', 'Technology']}
              ctaText="Learn More"
              ctaAction={() => console.log('CTA clicked')}
            />

            {/* Title Right Example */}
            <Section
              title="Our Process"
              titlePosition="right"
              variant="glass"
              content="From initial concept to final deployment, we follow a proven methodology that ensures quality, efficiency, and client satisfaction. Every project is unique, but our process remains consistent."
              badges={['Strategy', 'Design', 'Development', 'Launch']}
            />

            {/* Image Left Example */}
            <Section
              title="Creative Workspace"
              imagePosition="left"
              image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              variant="gradient"
              content="Our creative workspace is designed to inspire innovation and collaboration. With state-of-the-art equipment and a comfortable environment, we create the perfect conditions for breakthrough ideas."
              ctaText="Visit Our Studio"
            />

            {/* Image Right Example */}
            <Section
              title="Team Collaboration"
              imagePosition="right"
              image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
              content="Collaboration is at the heart of everything we do. Our diverse team brings together different perspectives and expertise to create solutions that exceed expectations."
              badges={['Teamwork', 'Innovation', 'Excellence']}
            />

            {/* Minimal Example */}
            <Section
              title="Simple & Clean"
              variant="minimal"
              content="Sometimes less is more. Our minimal design approach focuses on clarity, usability, and elegance. Every element serves a purpose, and nothing is superfluous."
            />
          </div>
        </div>
      )}

      {selectedView === 'radar' && (
        <div className="space-y-12">
          {/* Radar Chart Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Skills Radar Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Interactive radar chart for visualizing skill proficiency across different technology categories with filtering and animations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Interactive</h4>
                  <p className="text-sm text-muted-foreground">Hover for details</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Filterable</h4>
                  <p className="text-sm text-muted-foreground">Category filtering</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Animated</h4>
                  <p className="text-sm text-muted-foreground">Smooth transitions</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-medium">Professional</h4>
                  <p className="text-sm text-muted-foreground">Portfolio ready</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Radar Chart Examples */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Radar Chart Examples</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Default Size */}
              <Card>
                <CardHeader>
                  <CardTitle>Default Size</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Standard radar chart with all categories
                  </p>
                </CardHeader>
                <CardContent>
                  <SkillsRadarChart />
                </CardContent>
              </Card>

              {/* Large Size */}
              <Card>
                <CardHeader>
                  <CardTitle>Large Size</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Expanded view for detailed analysis
                  </p>
                </CardHeader>
                <CardContent>
                  <SkillsRadarChart size="lg" />
                </CardContent>
              </Card>

              {/* Frontend Focus */}
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Focus</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Filtered to show only frontend skills
                  </p>
                </CardHeader>
                <CardContent>
                  <SkillsRadarChart defaultFilter="frontend" />
                </CardContent>
              </Card>

              {/* Compact Size */}
              <Card>
                <CardHeader>
                  <CardTitle>Compact Size</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Perfect for sidebars and small spaces
                  </p>
                </CardHeader>
                <CardContent>
                  <SkillsRadarChart size="sm" />
                </CardContent>
              </Card>
            </div>

            {/* Category Legend */}
            <Card>
              <CardHeader>
                <CardTitle>Skill Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Frontend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Backend</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-red-500" />
                    <span className="text-sm">DevOps</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}