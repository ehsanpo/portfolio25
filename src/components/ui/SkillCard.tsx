import React from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
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
  Award
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SkillCardProps {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'mobile' | 'devops' | 'other';
  level: number; // 0-100
  experience?: string;
  projects?: number;
  certifications?: number;
  trending?: boolean;
  description?: string;
  relatedSkills?: string[];
  variant?: 'default' | 'glass' | 'gradient' | 'minimal';
  showProgress?: boolean;
  className?: string;
}

export function SkillCard({
  name,
  category,
  level,
  experience,
  projects,
  certifications,
  trending = false,
  description,
  relatedSkills = [],
  variant = 'default',
  showProgress = true,
  className,
}: SkillCardProps) {
  const getCategoryIcon = () => {
    switch (category) {
      case 'frontend':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'backend':
        return <Database className="w-5 h-5 text-green-500" />;
      case 'design':
        return <Palette className="w-5 h-5 text-purple-500" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-orange-500" />;
      case 'devops':
        return <Cloud className="w-5 h-5 text-cyan-500" />;
      default:
        return <Zap className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getLevelLabel = () => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    if (level >= 30) return 'Beginner';
    return 'Learning';
  };

  const getLevelColor = () => {
    if (level >= 90) return 'success';
    if (level >= 70) return 'primary';
    if (level >= 50) return 'warning';
    return 'neutral';
  };

  return (
    <Card 
      variant={variant} 
      hover 
      padding="lg" 
      className={cn('relative overflow-hidden', className)}
    >
      {/* Trending Badge */}
      {trending && (
        <div className="absolute top-4 right-4">
          <Badge variant="gradient" className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </Badge>
        </div>
      )}

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-muted/50 rounded-lg">
            {getCategoryIcon()}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold font-basement text-foreground text-lg mb-1">
              {name}
            </h3>
            
            <div className="flex items-center space-x-2">
              <Badge variant={getLevelColor() as any} className="text-xs">
                {getLevelLabel()}
              </Badge>
              <span className="text-xs text-muted-foreground font-kabel capitalize">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-kabel text-muted-foreground">Proficiency</span>
              <span className="text-sm font-basement text-foreground">{level}%</span>
            </div>
            <Progress value={level} className="h-2" />
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground font-kabel leading-relaxed">
            {description}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground font-kabel">
          <div className="flex items-center space-x-4">
            {experience && (
              <div className="flex items-center space-x-1">
                <span>{experience} experience</span>
              </div>
            )}
            {projects && projects > 0 && (
              <div className="flex items-center space-x-1">
                <span>{projects} project{projects > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
          
          {certifications && certifications > 0 && (
            <div className="flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>{certifications} cert{certifications > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {/* Related Skills */}
        {relatedSkills.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs font-medium font-basement text-foreground">Related:</span>
            <div className="flex flex-wrap gap-1">
              {relatedSkills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="neutral" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {relatedSkills.length > 3 && (
                <Badge variant="neutral" className="text-xs">
                  +{relatedSkills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
}