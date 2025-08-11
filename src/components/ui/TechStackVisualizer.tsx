import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { Progress } from './Progress';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap,
  Star,
  TrendingUp,
  Award,
  Eye,
  EyeOff,
  Filter,
  RotateCcw
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface TechSkill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'mobile' | 'devops' | 'database' | 'other';
  level: number; // 0-100
  experience: string;
  projects: number;
  trending?: boolean;
  connections?: string[]; // IDs of related skills
  description?: string;
  color?: string;
}

interface TechStackVisualizerProps {
  skills: TechSkill[];
  variant?: 'network' | 'grid' | 'tree' | 'timeline';
  showConnections?: boolean;
  showFilters?: boolean;
  interactive?: boolean;
  className?: string;
}

export function TechStackVisualizer({
  skills,
  variant = 'network',
  showConnections = true,
  showFilters = true,
  interactive = true,
  className,
}: TechStackVisualizerProps) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [filteredCategory, setFilteredCategory] = useState<string>('all');
  const [showOnlyTrending, setShowOnlyTrending] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const categories = [
    { id: 'all', name: 'All Skills', icon: Zap, color: 'text-primary-500' },
    { id: 'frontend', name: 'Frontend', icon: Code, color: 'text-blue-500' },
    { id: 'backend', name: 'Backend', icon: Database, color: 'text-green-500' },
    { id: 'design', name: 'Design', icon: Palette, color: 'text-purple-500' },
    { id: 'mobile', name: 'Mobile', icon: Smartphone, color: 'text-orange-500' },
    { id: 'devops', name: 'DevOps', icon: Cloud, color: 'text-cyan-500' },
  ];

  const filteredSkills = skills.filter(skill => {
    const categoryMatch = filteredCategory === 'all' || skill.category === filteredCategory;
    const trendingMatch = !showOnlyTrending || skill.trending;
    return categoryMatch && trendingMatch;
  });

  const getSkillSize = (level: number) => {
    if (level >= 90) return 'w-20 h-20 text-lg';
    if (level >= 70) return 'w-16 h-16 text-base';
    if (level >= 50) return 'w-14 h-14 text-sm';
    return 'w-12 h-12 text-xs';
  };

  const getSkillColor = (category: string) => {
    const colors = {
      frontend: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
      backend: 'from-green-500/20 to-green-600/20 border-green-500/30',
      design: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
      mobile: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
      devops: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
      database: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30',
      other: 'from-gray-500/20 to-gray-600/20 border-gray-500/30',
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  const resetAnimation = () => {
    setAnimationKey(prev => prev + 1);
  };

  const renderNetworkView = () => (
    <div className="relative p-8 glass-card rounded-lg min-h-[500px] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {/* Connection lines */}
        {showConnections && filteredSkills.map((skill, index) => 
          skill.connections?.map((connectionId, connIndex) => {
            const connectedSkill = skills.find(s => s.id === connectionId);
            if (!connectedSkill || !filteredSkills.includes(connectedSkill)) return null;
            
            return (
              <svg key={`${skill.id}-${connectionId}`} className="absolute inset-0 pointer-events-none">
                <line
                  x1={`${20 + (index % 5) * 20}%`}
                  y1={`${20 + Math.floor(index / 5) * 25}%`}
                  x2={`${20 + (skills.findIndex(s => s.id === connectionId) % 5) * 20}%`}
                  y2={`${20 + Math.floor(skills.findIndex(s => s.id === connectionId) / 5) * 25}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary-500/30"
                  strokeDasharray="4 4"
                />
              </svg>
            );
          })
        )}
      </div>

      {/* Skills nodes */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-items-center">
        {filteredSkills.map((skill, index) => (
          <div
            key={`${skill.id}-${animationKey}`}
            className={cn(
              'relative group cursor-pointer transition-all duration-500 hover:scale-110',
              selectedSkill === skill.id && 'scale-125 z-20',
              'animate-fade-in'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
          >
            {/* Skill node */}
            <div className={cn(
              'rounded-full bg-gradient-to-br border-2 flex items-center justify-center transition-all duration-300 relative overflow-hidden',
              getSkillSize(skill.level),
              getSkillColor(skill.category),
              selectedSkill === skill.id && 'ring-4 ring-primary-500/50'
            )}>
              {/* Trending indicator */}
              {skill.trending && (
                <div className="absolute -top-1 -right-1">
                  <TrendingUp className="w-4 h-4 text-success-500" />
                </div>
              )}
              
              {/* Skill name */}
              <span className={cn(
                'font-basement font-bold text-center leading-tight',
                skill.level >= 70 ? 'text-foreground' : 'text-muted-foreground'
              )}>
                {skill.name}
              </span>
              
              {/* Level indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-full">
                <div 
                  className="h-full bg-primary-500 rounded-b-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

            {/* Skill details on hover */}
            {selectedSkill === skill.id && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-30">
                <Card variant="glass" className="w-64 p-4">
                  <h4 className="font-basement text-foreground mb-2">{skill.name}</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-kabel">Level:</span>
                      <span className="font-basement text-foreground">{skill.level}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-kabel">Experience:</span>
                      <span className="font-basement text-foreground">{skill.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-kabel">Projects:</span>
                      <span className="font-basement text-foreground">{skill.projects}</span>
                    </div>
                    {skill.description && (
                      <p className="text-muted-foreground font-kabel mt-2">{skill.description}</p>
                    )}
                  </div>
                </Card>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill, index) => (
        <Card 
          key={`${skill.id}-${animationKey}`}
          variant="glass" 
          hover 
          className={cn(
            'transition-all duration-500',
            'animate-fade-in'
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={cn(
                'w-12 h-12 rounded-lg bg-gradient-to-br border flex items-center justify-center',
                getSkillColor(skill.category)
              )}>
                <span className="font-basement font-bold text-sm text-foreground">
                  {skill.name.slice(0, 2)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-basement text-foreground">{skill.name}</h4>
                  {skill.trending && (
                    <TrendingUp className="w-4 h-4 text-success-500" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-kabel capitalize">{skill.category}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-kabel text-muted-foreground">Proficiency</span>
                  <span className="font-basement text-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} variant="gradient" />
              </div>
              
              <div className="flex justify-between text-xs text-muted-foreground font-kabel">
                <span>{skill.experience}</span>
                <span>{skill.projects} projects</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderTreeView = () => (
    <div className="space-y-8">
      {categories.slice(1).map((category) => {
        const categorySkills = filteredSkills.filter(skill => skill.category === category.id);
        if (categorySkills.length === 0) return null;
        
        const Icon = category.icon;
        
        return (
          <div key={category.id} className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-500/20 rounded-lg border border-primary-500/30">
                <Icon className={cn('w-5 h-5', category.color)} />
              </div>
              <h3 className="font-basement text-foreground text-lg">{category.name}</h3>
              <Badge variant="neutral">{categorySkills.length} skills</Badge>
            </div>
            
            <div className="ml-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categorySkills.map((skill, index) => (
                <div 
                  key={`${skill.id}-${animationKey}`}
                  className={cn(
                    'p-4 glass-card rounded-lg transition-all duration-500 hover:scale-105',
                    'animate-fade-in'
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <h4 className="font-basement text-foreground mb-2">{skill.name}</h4>
                    <div className="text-2xl font-bold font-basement text-primary-500 mb-1">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-muted-foreground font-kabel">
                      {skill.experience}
                    </div>
                    {skill.trending && (
                      <Badge variant="success" className="mt-2 text-xs">
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={cn('space-y-8', className)}>
      {/* Controls */}
      {showFilters && (
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Tech Stack Controls</CardTitle>
          <div className="flex flex-wrap items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <span className="text-white/80 font-kabel text-sm">Category:</span>
              <div className="flex flex-wrap gap-1">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setFilteredCategory(category.id)}
                      className={cn(
                        'flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                        filteredCategory === category.id
                          ? 'bg-white/30 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/20'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-white/80 font-kabel text-sm">View:</span>
              <div className="flex bg-white/20 rounded-lg p-1">
                {(['network', 'grid', 'tree'] as const).map((view) => (
                  <button
                    key={view}
                    onClick={() => {/* View switching would be handled by parent */}}
                    className={cn(
                      'px-3 py-1 rounded-md text-sm font-kabel transition-all capitalize',
                      variant === view
                        ? 'bg-white/30 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/20'
                    )}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Filter */}
            <Button
              variant="glass"
              size="sm"
              onClick={() => setShowOnlyTrending(!showOnlyTrending)}
              className={cn(
                'flex items-center gap-2',
                showOnlyTrending && 'bg-success-500/20 text-success-400'
              )}
            >
              <TrendingUp size={16} />
              {showOnlyTrending ? 'Show All' : 'Trending Only'}
            </Button>

            {/* Reset Animation */}
            <Button
              variant="glass"
              size="sm"
              onClick={resetAnimation}
              className="flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Replay
            </Button>
          </div>
        </Card>
      )}

      {/* Visualizer Content */}
      <Card variant="glass" padding="lg">
        <CardTitle className="font-basement">Interactive Tech Stack</CardTitle>
        <CardDescription className="font-kabel">
          {variant === 'network' && 'Network view showing skill relationships and proficiency levels'}
          {variant === 'grid' && 'Grid view with detailed skill cards and progress indicators'}
          {variant === 'tree' && 'Hierarchical view organized by technology categories'}
        </CardDescription>
        <CardContent>
          {variant === 'network' && renderNetworkView()}
          {variant === 'grid' && renderGridView()}
          {variant === 'tree' && renderTreeView()}
        </CardContent>
      </Card>

      {/* Skill Legend */}
      <Card variant="default" padding="lg">
        <CardTitle className="font-basement">Skill Levels</CardTitle>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="w-12 h-12 bg-success-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-basement text-success-500">90+</span>
              </div>
              <div className="text-sm font-basement text-foreground">Expert</div>
              <div className="text-xs text-muted-foreground font-kabel">Advanced proficiency</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-basement text-primary-500">70+</span>
              </div>
              <div className="text-sm font-basement text-foreground">Advanced</div>
              <div className="text-xs text-muted-foreground font-kabel">Strong skills</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="w-8 h-8 bg-warning-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-basement text-warning-500">50+</span>
              </div>
              <div className="text-sm font-basement text-foreground">Intermediate</div>
              <div className="text-xs text-muted-foreground font-kabel">Working knowledge</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="w-6 h-6 bg-neutral-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-xs font-basement text-neutral-500">30+</span>
              </div>
              <div className="text-sm font-basement text-foreground">Learning</div>
              <div className="text-xs text-muted-foreground font-kabel">Basic understanding</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}