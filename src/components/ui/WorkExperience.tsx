import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Building,
  Star,
  Clock,
  Users,
  Target,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface WorkExperienceItem {
  id: string;
  company: string;
  position: string;
  department?: string;
  startDate: string;
  endDate?: string;
  location: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  description?: string;
  achievements?: string[];
  technologies?: string[];
  projects?: string[];
  teamSize?: number;
  reportingTo?: string;
  logo?: string;
  website?: string;
  current?: boolean;
  featured?: boolean;
  remote?: boolean;
}

interface WorkExperienceProps {
  experience: WorkExperienceItem[];
  variant?: 'timeline' | 'cards' | 'minimal';
  showDetails?: boolean;
  showTechnologies?: boolean;
  showAchievements?: boolean;
  className?: string;
}

export function WorkExperience({
  experience,
  variant = 'timeline',
  showDetails = true,
  showTechnologies = true,
  showAchievements = true,
  className,
}: WorkExperienceProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  const getDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    
    const totalMonths = years * 12 + months;
    if (totalMonths < 12) {
      return `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
    }
    const remainingMonths = totalMonths % 12;
    if (remainingMonths === 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    }
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  };

  const getEmploymentTypeBadge = (type: string) => {
    const variants = {
      'full-time': 'success',
      'part-time': 'warning',
      'contract': 'primary',
      'freelance': 'secondary',
      'internship': 'neutral',
    } as const;
    
    return (
      <Badge variant={variants[type as keyof typeof variants] || 'neutral'} className="text-xs capitalize">
        {type.replace('-', ' ')}
      </Badge>
    );
  };

  const renderTimelineView = () => (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted" />
      <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500" />
      
      <div className="space-y-8">
        {experience.map((item, index) => (
          <div key={item.id} className="relative flex items-start space-x-6">
            {/* Timeline node */}
            <div className="relative z-10 w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            
            {/* Content */}
            <Card 
              variant={item.featured ? 'gradient' : 'glass'} 
              hover 
              className="flex-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    {/* Company logo */}
                    <div className="flex-shrink-0">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={`${item.company} logo`}
                          className="w-12 h-12 rounded-lg object-cover border border-border/50"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                          <span className="text-sm font-bold font-basement text-primary-500">
                            {getInitials(item.company)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        'font-basement text-xl mb-1',
                        item.featured ? 'text-white' : 'text-foreground'
                      )}>
                        {item.position}
                      </h3>
                      <p className={cn(
                        'text-lg font-kabel mb-2',
                        item.featured ? 'text-white/90' : 'text-muted-foreground'
                      )}>
                        {item.company}
                      </p>
                      {item.department && (
                        <p className={cn(
                          'text-sm font-kabel',
                          item.featured ? 'text-white/80' : 'text-muted-foreground'
                        )}>
                          {item.department}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    {item.current && (
                      <Badge variant="success" className="text-xs">
                        Current
                      </Badge>
                    )}
                    {item.featured && (
                      <Badge variant="glass">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {getEmploymentTypeBadge(item.employmentType)}
                  </div>
                </div>

                {/* Date, Location, and Details */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className={cn(
                      'w-4 h-4',
                      item.featured ? 'text-white/60' : 'text-muted-foreground'
                    )} />
                    <span className={cn(
                      'font-kabel',
                      item.featured ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
                    </span>
                    <span className={cn(
                      'text-xs font-kabel',
                      item.featured ? 'text-white/60' : 'text-muted-foreground'
                    )}>
                      ({getDuration(item.startDate, item.endDate)})
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <MapPin className={cn(
                      'w-4 h-4',
                      item.featured ? 'text-white/60' : 'text-muted-foreground'
                    )} />
                    <span className={cn(
                      'font-kabel',
                      item.featured ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      {item.location}
                      {item.remote && ' (Remote)'}
                    </span>
                  </div>

                  {item.teamSize && (
                    <div className="flex items-center space-x-1">
                      <Users className={cn(
                        'w-4 h-4',
                        item.featured ? 'text-white/60' : 'text-muted-foreground'
                      )} />
                      <span className={cn(
                        'font-kabel',
                        item.featured ? 'text-white/80' : 'text-muted-foreground'
                      )}>
                        Team of {item.teamSize}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <p className={cn(
                    'text-sm font-kabel leading-relaxed mb-4',
                    item.featured ? 'text-white/90' : 'text-muted-foreground'
                  )}>
                    {item.description}
                  </p>
                )}

                {/* Technologies Preview */}
                {showTechnologies && item.technologies && item.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant={item.featured ? "glass" : "neutral"} className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {item.technologies.length > 4 && (
                        <Badge variant={item.featured ? "glass" : "neutral"} className="text-xs">
                          +{item.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Expandable Details */}
                {showDetails && (item.achievements || item.projects) && (
                  <div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(item.id)}
                      className={cn(
                        'flex items-center gap-2 mb-4',
                        item.featured ? 'text-white hover:text-white/80' : 'text-primary-500 hover:text-primary-400'
                      )}
                    >
                      {expandedItems.includes(item.id) ? (
                        <>
                          <ChevronUp size={16} />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          Show Details
                        </>
                      )}
                    </Button>

                    {expandedItems.includes(item.id) && (
                      <div className="space-y-4">
                        {showAchievements && item.achievements && item.achievements.length > 0 && (
                          <div>
                            <h5 className={cn(
                              'font-basement text-sm mb-2',
                              item.featured ? 'text-white' : 'text-foreground'
                            )}>
                              Key Achievements
                            </h5>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx} className={cn(
                                  'text-xs font-kabel flex items-start',
                                  item.featured ? 'text-white/80' : 'text-muted-foreground'
                                )}>
                                  <Target className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-success-500" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.projects && item.projects.length > 0 && (
                          <div>
                            <h5 className={cn(
                              'font-basement text-sm mb-2',
                              item.featured ? 'text-white' : 'text-foreground'
                            )}>
                              Notable Projects
                            </h5>
                            <ul className="space-y-1">
                              {item.projects.map((project, idx) => (
                                <li key={idx} className={cn(
                                  'text-xs font-kabel flex items-start',
                                  item.featured ? 'text-white/80' : 'text-muted-foreground'
                                )}>
                                  <Zap className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-primary-500" />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {showTechnologies && item.technologies && item.technologies.length > 4 && (
                          <div>
                            <h5 className={cn(
                              'font-basement text-sm mb-2',
                              item.featured ? 'text-white' : 'text-foreground'
                            )}>
                              All Technologies
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {item.technologies.map((tech, idx) => (
                                <Badge key={idx} variant={item.featured ? "glass" : "neutral"} className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Info */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    {item.reportingTo && (
                      <span className={cn(
                        'font-kabel',
                        item.featured ? 'text-white/60' : 'text-muted-foreground'
                      )}>
                        Reporting to: {item.reportingTo}
                      </span>
                    )}
                  </div>
                  
                  {item.website && (
                    <Button
                      variant={item.featured ? "glass" : "outline"}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Company
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCardsView = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {experience.map((item, index) => (
        <Card 
          key={item.id}
          variant={item.featured ? 'gradient' : 'glass'} 
          hover 
          className={cn(
            'transition-all duration-500',
            'animate-fade-in'
          )}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start space-x-4 mb-4">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="w-16 h-16 rounded-lg object-cover border border-border/50"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                  <span className="text-lg font-bold font-basement text-primary-500">
                    {getInitials(item.company)}
                  </span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={cn(
                      'font-basement text-lg mb-1',
                      item.featured ? 'text-white' : 'text-foreground'
                    )}>
                      {item.position}
                    </h3>
                    <p className={cn(
                      'text-base font-kabel mb-1',
                      item.featured ? 'text-white/90' : 'text-muted-foreground'
                    )}>
                      {item.company}
                    </p>
                    {item.department && (
                      <p className={cn(
                        'text-sm font-kabel',
                        item.featured ? 'text-white/80' : 'text-muted-foreground'
                      )}>
                        {item.department}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end space-y-1">
                    {item.current && (
                      <Badge variant="success" className="text-xs">
                        Current
                      </Badge>
                    )}
                    {item.featured && (
                      <Badge variant="glass">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {getEmploymentTypeBadge(item.employmentType)}
                  </div>
                </div>
              </div>
            </div>

            {/* Date and Location */}
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className={cn(
                  'w-4 h-4',
                  item.featured ? 'text-white/60' : 'text-muted-foreground'
                )} />
                <span className={cn(
                  'font-kabel',
                  item.featured ? 'text-white/80' : 'text-muted-foreground'
                )}>
                  {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
                </span>
                <span className={cn(
                  'text-xs font-kabel',
                  item.featured ? 'text-white/60' : 'text-muted-foreground'
                )}>
                  ({getDuration(item.startDate, item.endDate)})
                </span>
              </div>
              
              <div className="flex items-center space-x-1">
                <MapPin className={cn(
                  'w-4 h-4',
                  item.featured ? 'text-white/60' : 'text-muted-foreground'
                )} />
                <span className={cn(
                  'font-kabel',
                  item.featured ? 'text-white/80' : 'text-muted-foreground'
                )}>
                  {item.location}
                  {item.remote && ' (Remote)'}
                </span>
              </div>

              {item.teamSize && (
                <div className="flex items-center space-x-1">
                  <Users className={cn(
                    'w-4 h-4',
                    item.featured ? 'text-white/60' : 'text-muted-foreground'
                  )} />
                  <span className={cn(
                    'font-kabel',
                    item.featured ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    Team of {item.teamSize}
                  </span>
                </div>
              )}
            </div>

            {/* Description */}
            {item.description && (
              <p className={cn(
                'text-sm font-kabel leading-relaxed mb-4',
                item.featured ? 'text-white/90' : 'text-muted-foreground'
              )}>
                {item.description}
              </p>
            )}

            {/* Technologies Preview */}
            {showTechnologies && item.technologies && item.technologies.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {item.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant={item.featured ? "glass" : "neutral"} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {item.technologies.length > 4 && (
                    <Badge variant={item.featured ? "glass" : "neutral"} className="text-xs">
                      +{item.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Achievements Preview */}
            {showAchievements && item.achievements && item.achievements.length > 0 && (
              <div className="mb-4">
                <h5 className={cn(
                  'font-basement text-sm mb-2',
                  item.featured ? 'text-white' : 'text-foreground'
                )}>
                  Key Achievements
                </h5>
                <ul className="space-y-1">
                  {item.achievements.slice(0, 2).map((achievement, idx) => (
                    <li key={idx} className={cn(
                      'text-xs font-kabel flex items-start',
                      item.featured ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      <Award className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-success-500" />
                      {achievement}
                    </li>
                  ))}
                  {item.achievements.length > 2 && (
                    <li className={cn(
                      'text-xs font-kabel italic',
                      item.featured ? 'text-white/60' : 'text-muted-foreground'
                    )}>
                      +{item.achievements.length - 2} more achievements
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Expandable Details */}
            {showDetails && (item.achievements || item.projects) && (
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpanded(item.id)}
                  className={cn(
                    'flex items-center gap-2',
                    item.featured ? 'text-white hover:text-white/80' : 'text-primary-500 hover:text-primary-400'
                  )}
                >
                  {expandedItems.includes(item.id) ? (
                    <>
                      <ChevronUp size={16} />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Show All Details
                    </>
                  )}
                </Button>

                {expandedItems.includes(item.id) && (
                  <div className="space-y-4 mt-4">
                    {showAchievements && item.achievements && item.achievements.length > 2 && (
                      <div>
                        <h5 className={cn(
                          'font-basement text-sm mb-2',
                          item.featured ? 'text-white' : 'text-foreground'
                        )}>
                          All Achievements
                        </h5>
                        <ul className="space-y-1">
                          {item.achievements.slice(2).map((achievement, idx) => (
                            <li key={idx} className={cn(
                              'text-xs font-kabel flex items-start',
                              item.featured ? 'text-white/80' : 'text-muted-foreground'
                            )}>
                              <Award className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-success-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.projects && item.projects.length > 0 && (
                      <div>
                        <h5 className={cn(
                          'font-basement text-sm mb-2',
                          item.featured ? 'text-white' : 'text-foreground'
                        )}>
                          Notable Projects
                        </h5>
                        <ul className="space-y-1">
                          {item.projects.map((project, idx) => (
                            <li key={idx} className={cn(
                              'text-xs font-kabel flex items-start',
                              item.featured ? 'text-white/80' : 'text-muted-foreground'
                            )}>
                              <Zap className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-primary-500" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {showTechnologies && item.technologies && item.technologies.length > 4 && (
                      <div>
                        <h5 className={cn(
                          'font-basement text-sm mb-2',
                          item.featured ? 'text-white' : 'text-foreground'
                        )}>
                          All Technologies
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.slice(4).map((tech, idx) => (
                            <Badge key={idx} variant={item.featured ? "glass" : "neutral"} className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );

  const renderMinimalView = () => (
    <div className="space-y-4">
      {experience.map((item, index) => (
        <div 
          key={item.id}
          className={cn(
            'flex items-center justify-between p-4 glass-card rounded-lg hover:bg-muted/50 transition-colors',
            'animate-fade-in'
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <h4 className="font-basement text-foreground">{item.position}</h4>
              <p className="text-sm text-muted-foreground font-kabel">{item.company}</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-kabel text-foreground">
              {formatDate(item.startDate)} - {item.endDate ? formatDate(item.endDate) : 'Present'}
            </div>
            <div className="text-xs text-muted-foreground font-kabel">
              {item.location} • {getDuration(item.startDate, item.endDate)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('space-y-8', className)}>
      {variant === 'timeline' && renderTimelineView()}
      {variant === 'cards' && renderCardsView()}
      {variant === 'minimal' && renderMinimalView()}
    </div>
  );
}