import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { 
  Code, 
  Server, 
  Palette, 
  Smartphone, 
  Settings,
  Play,
  Pause,
  RotateCcw,
  TrendingUp
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'mobile' | 'devops';
  trending?: boolean;
  description?: string;
}

interface SkillsRadarChartProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showControls?: boolean;
  showLegend?: boolean;
  defaultFilter?: string;
  className?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', trending: true, description: 'Advanced React development with hooks and context' },
  { name: 'TypeScript', level: 90, category: 'frontend', trending: true, description: 'Type-safe JavaScript development' },
  { name: 'Next.js', level: 85, category: 'frontend', trending: true, description: 'Full-stack React framework' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', description: 'Utility-first CSS framework' },
  { name: 'Vue.js', level: 75, category: 'frontend', description: 'Progressive JavaScript framework' },
  { name: 'Angular', level: 70, category: 'frontend', description: 'Enterprise web application framework' },
  
  // Backend
  { name: 'Node.js', level: 88, category: 'backend', description: 'Server-side JavaScript runtime' },
  { name: 'Python', level: 82, category: 'backend', description: 'Versatile programming language' },
  { name: 'PostgreSQL', level: 85, category: 'backend', description: 'Advanced relational database' },
  { name: 'MongoDB', level: 78, category: 'backend', description: 'NoSQL document database' },
  { name: 'GraphQL', level: 80, category: 'backend', trending: true, description: 'Query language for APIs' },
  { name: 'REST APIs', level: 90, category: 'backend', description: 'RESTful web services' },
  
  // Design
  { name: 'Figma', level: 88, category: 'design', description: 'Collaborative design tool' },
  { name: 'UI/UX Design', level: 85, category: 'design', description: 'User interface and experience design' },
  { name: 'Adobe Creative Suite', level: 75, category: 'design', description: 'Professional design software' },
  { name: 'Prototyping', level: 82, category: 'design', description: 'Interactive design prototypes' },
  
  // Mobile
  { name: 'React Native', level: 80, category: 'mobile', trending: true, description: 'Cross-platform mobile development' },
  { name: 'Flutter', level: 65, category: 'mobile', trending: true, description: 'Google\'s UI toolkit' },
  { name: 'iOS Development', level: 70, category: 'mobile', description: 'Native iOS app development' },
  
  // DevOps
  { name: 'Docker', level: 85, category: 'devops', description: 'Containerization platform' },
  { name: 'AWS', level: 78, category: 'devops', description: 'Amazon Web Services cloud platform' },
  { name: 'CI/CD', level: 82, category: 'devops', description: 'Continuous integration and deployment' },
  { name: 'Git', level: 95, category: 'devops', description: 'Version control system' }
];

const categoryColors = {
  frontend: '#3b82f6', // blue
  backend: '#10b981', // green
  design: '#8b5cf6', // purple
  mobile: '#f59e0b', // orange
  devops: '#ef4444' // red
};

const categoryIcons = {
  frontend: Code,
  backend: Server,
  design: Palette,
  mobile: Smartphone,
  devops: Settings
};

export function SkillsRadarChart({ 
  size = 'md', 
  showControls = true, 
  showLegend = true,
  defaultFilter = 'all',
  className = '' 
}: SkillsRadarChartProps) {
  const [filter, setFilter] = useState(defaultFilter);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(1);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const sizeConfig = {
    sm: { canvas: 200, padding: 20, fontSize: 10 },
    md: { canvas: 300, padding: 30, fontSize: 12 },
    lg: { canvas: 400, padding: 40, fontSize: 14 },
    xl: { canvas: 500, padding: 50, fontSize: 16 }
  };

  const config = sizeConfig[size];
  const center = config.canvas / 2;
  const radius = center - config.padding;

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  useEffect(() => {
    drawRadarChart();
  }, [filteredSkills, animationProgress, hoveredSkill]);

  const drawRadarChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, config.canvas, config.canvas);

    // Draw grid
    drawGrid(ctx);
    
    // Draw skills
    drawSkills(ctx);
    
    // Draw labels
    drawLabels(ctx);
  };

  const drawGrid = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)';
    ctx.lineWidth = 1;

    // Draw concentric circles
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.arc(center, center, (radius * i) / 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Draw radial lines
    const angleStep = (2 * Math.PI) / filteredSkills.length;
    for (let i = 0; i < filteredSkills.length; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.lineTo(
        center + Math.cos(angle) * radius,
        center + Math.sin(angle) * radius
      );
      ctx.stroke();
    }
  };

  const drawSkills = (ctx: CanvasRenderingContext2D) => {
    if (filteredSkills.length === 0) return;

    const angleStep = (2 * Math.PI) / filteredSkills.length;
    const points: { x: number; y: number; skill: Skill }[] = [];

    // Calculate points
    filteredSkills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const skillRadius = (skill.level / 100) * radius * animationProgress;
      const x = center + Math.cos(angle) * skillRadius;
      const y = center + Math.sin(angle) * skillRadius;
      points.push({ x, y, skill });
    });

    // Draw filled area
    if (points.length > 2) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.forEach(point => ctx.lineTo(point.x, point.y));
      ctx.closePath();
      
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Draw skill points
    points.forEach(({ x, y, skill }) => {
      const isHovered = hoveredSkill?.name === skill.name;
      const pointRadius = isHovered ? 8 : 6;
      
      ctx.beginPath();
      ctx.arc(x, y, pointRadius, 0, 2 * Math.PI);
      ctx.fillStyle = categoryColors[skill.category];
      ctx.fill();
      
      if (isHovered) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw trending indicator
      if (skill.trending) {
        ctx.beginPath();
        ctx.arc(x + 8, y - 8, 3, 0, 2 * Math.PI);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
      }
    });
  };

  const drawLabels = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#374151';
    ctx.font = `${config.fontSize}px Inter, sans-serif`;
    ctx.textAlign = 'center';

    const angleStep = (2 * Math.PI) / filteredSkills.length;
    
    filteredSkills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const labelRadius = radius + 15;
      const x = center + Math.cos(angle) * labelRadius;
      const y = center + Math.sin(angle) * labelRadius;
      
      ctx.fillText(skill.name, x, y);
      
      // Draw skill level
      ctx.font = `${config.fontSize - 2}px Inter, sans-serif`;
      ctx.fillStyle = '#6b7280';
      ctx.fillText(`${skill.level}%`, x, y + 15);
      
      // Reset font
      ctx.font = `${config.fontSize}px Inter, sans-serif`;
      ctx.fillStyle = '#374151';
    });
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if click is on a skill point
    const angleStep = (2 * Math.PI) / filteredSkills.length;
    
    filteredSkills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const skillRadius = (skill.level / 100) * radius;
      const pointX = center + Math.cos(angle) * skillRadius;
      const pointY = center + Math.sin(angle) * skillRadius;
      
      const distance = Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2);
      if (distance <= 10) {
        setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill);
      }
    });
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationProgress(0);
    
    const animate = () => {
      setAnimationProgress(prev => {
        const next = prev + 0.02;
        if (next >= 1) {
          setIsAnimating(false);
          return 1;
        }
        animationRef.current = requestAnimationFrame(animate);
        return next;
      });
    };
    
    animate();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const resetChart = () => {
    stopAnimation();
    setAnimationProgress(1);
    setHoveredSkill(null);
  };

  const getCategoryStats = () => {
    const stats = categories.map(category => {
      const categorySkills = skills.filter(skill => skill.category === category);
      const average = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
      return {
        category,
        count: categorySkills.length,
        average: Math.round(average),
        icon: categoryIcons[category],
        color: categoryColors[category]
      };
    });
    return stats;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Controls */}
      {showControls && (
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All Skills
            </Button>
            {categories.map(category => {
              const Icon = categoryIcons[category];
              return (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className="flex items-center gap-1 capitalize"
                >
                  <Icon className="w-3 h-3" />
                  {category}
                </Button>
              );
            })}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={isAnimating ? stopAnimation : startAnimation}
              className="flex items-center gap-1"
            >
              {isAnimating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              {isAnimating ? 'Pause' : 'Animate'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetChart}
              className="flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Radar Chart */}
        <div className="flex-1 flex flex-col items-center">
          <canvas
            ref={canvasRef}
            width={config.canvas}
            height={config.canvas}
            onClick={handleCanvasClick}
            className="border border-border rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
          {/* Skill Details */}
          {hoveredSkill && (
            <Card className="mt-4 w-full max-w-sm">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {React.createElement(categoryIcons[hoveredSkill.category], { 
                    className: "w-5 h-5",
                    style: { color: categoryColors[hoveredSkill.category] }
                  })}
                  {hoveredSkill.name}
                  {hoveredSkill.trending && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="font-semibold">{hoveredSkill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${hoveredSkill.level}%`,
                        backgroundColor: categoryColors[hoveredSkill.category]
                      }}
                    />
                  </div>
                  {hoveredSkill.description && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {hoveredSkill.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="lg:w-80 space-y-4">
            <h4 className="font-semibold text-lg">Skill Categories</h4>
            <div className="space-y-3">
              {getCategoryStats().map(({ category, count, average, icon: Icon, color }) => (
                <div 
                  key={category}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" style={{ color }} />
                    <div>
                      <div className="font-medium capitalize">{category}</div>
                      <div className="text-sm text-muted-foreground">
                        {count} skill{count !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{average}%</div>
                    <div className="text-sm text-muted-foreground">avg</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Overall Stats */}
            <div className="p-4 bg-muted/30 rounded-lg">
              <h5 className="font-medium mb-2">Overall Stats</h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Total Skills</div>
                  <div className="font-semibold">{skills.length}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Trending</div>
                  <div className="font-semibold">
                    {skills.filter(s => s.trending).length}
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Categories</div>
                  <div className="font-semibold">{categories.length}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Avg Level</div>
                  <div className="font-semibold">
                    {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}