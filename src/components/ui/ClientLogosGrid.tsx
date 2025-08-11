import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { 
  Building, 
  Star, 
  Calendar, 
  ExternalLink,
  Users,
  Award,
  TrendingUp,
  Heart,
  Eye,
  Filter,
  Grid3X3,
  List,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Client {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  industry?: string;
  projectType?: string;
  year?: string;
  duration?: string;
  testimonial?: string;
  rating?: number;
  featured?: boolean;
  status?: 'completed' | 'ongoing' | 'upcoming';
  projectValue?: string;
  teamSize?: number;
  technologies?: string[];
}

interface ClientLogosGridProps {
  clients: Client[];
  variant?: 'logos-only' | 'cards' | 'detailed' | 'testimonials';
  layout?: 'grid' | 'masonry' | 'carousel';
  showFilters?: boolean;
  showStats?: boolean;
  columns?: 3 | 4 | 5 | 6;
  className?: string;
}

export function ClientLogosGrid({
  clients,
  variant = 'logos-only',
  layout = 'grid',
  showFilters = true,
  showStats = true,
  columns = 4,
  className,
}: ClientLogosGridProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  const industries = [...new Set(clients.map(c => c.industry).filter(Boolean))];
  const years = [...new Set(clients.map(c => c.year).filter(Boolean))].sort().reverse();

  const filteredClients = clients.filter(client => {
    const industryMatch = selectedIndustry === 'all' || client.industry === selectedIndustry;
    const yearMatch = selectedYear === 'all' || client.year === selectedYear;
    return industryMatch && yearMatch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success" className="text-xs">Completed</Badge>;
      case 'ongoing':
        return <Badge variant="warning" className="text-xs">Ongoing</Badge>;
      case 'upcoming':
        return <Badge variant="neutral" className="text-xs">Upcoming</Badge>;
      default:
        return null;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          'w-4 h-4',
          index < rating ? 'text-warning-500 fill-current' : 'text-muted'
        )}
      />
    ));
  };

  const getGridClasses = () => {
    const columnClasses = {
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
    };
    return columnClasses[columns];
  };

  const renderLogosOnly = () => (
    <div className={cn('grid gap-6', getGridClasses())}>
      {filteredClients.map((client, index) => (
        <div
          key={client.id}
          className={cn(
            'group relative transition-all duration-300 hover:scale-105',
            'animate-fade-in'
          )}
          style={{ animationDelay: `${index * 100}ms` }}
          onMouseEnter={() => setHoveredClient(client.id)}
          onMouseLeave={() => setHoveredClient(null)}
        >
          <Card variant="glass" hover className="aspect-square flex items-center justify-center p-6">
            {client.featured && (
              <div className="absolute top-2 right-2">
                <Star className="w-4 h-4 text-warning-500 fill-current" />
              </div>
            )}
            
            {client.logo ? (
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                <span className="text-lg font-bold font-basement text-primary-500">
                  {getInitials(client.name)}
                </span>
              </div>
            )}
            
            {/* Hover overlay */}
            {hoveredClient === client.id && (
              <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h4 className="font-basement text-lg mb-1">{client.name}</h4>
                  {client.industry && (
                    <p className="text-sm font-kabel opacity-80">{client.industry}</p>
                  )}
                  {client.year && (
                    <p className="text-xs font-kabel opacity-60 mt-1">{client.year}</p>
                  )}
                </div>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );

  const renderCards = () => (
    <div className={cn('grid gap-6', getGridClasses())}>
      {filteredClients.map((client, index) => (
        <Card 
          key={client.id}
          variant={client.featured ? 'gradient' : 'glass'} 
          hover 
          className={cn(
            'transition-all duration-500',
            'animate-fade-in'
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                    <span className="text-sm font-bold font-basement text-primary-500">
                      {getInitials(client.name)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className={cn(
                    'font-basement text-lg',
                    client.featured ? 'text-white' : 'text-foreground'
                  )}>
                    {client.name}
                  </h3>
                  {client.industry && (
                    <p className={cn(
                      'text-sm font-kabel',
                      client.featured ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      {client.industry}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                {client.featured && (
                  <Badge variant="glass">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                {client.status && getStatusBadge(client.status)}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-3">
              {client.projectType && (
                <div className="flex items-center justify-between">
                  <span className={cn(
                    'text-sm font-kabel',
                    client.featured ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    Project Type:
                  </span>
                  <Badge variant={client.featured ? "glass" : "neutral"} className="text-xs">
                    {client.projectType}
                  </Badge>
                </div>
              )}
              
              <div className="flex items-center justify-between text-sm">
                {client.year && (
                  <div className="flex items-center space-x-1">
                    <Calendar className={cn(
                      'w-4 h-4',
                      client.featured ? 'text-white/60' : 'text-muted-foreground'
                    )} />
                    <span className={cn(
                      'font-kabel',
                      client.featured ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      {client.year}
                    </span>
                  </div>
                )}
                
                {client.duration && (
                  <span className={cn(
                    'text-xs font-kabel',
                    client.featured ? 'text-white/60' : 'text-muted-foreground'
                  )}>
                    {client.duration}
                  </span>
                )}
              </div>

              {client.rating && (
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(client.rating)}
                  </div>
                  <span className={cn(
                    'text-xs font-kabel',
                    client.featured ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    {client.rating}/5
                  </span>
                </div>
              )}

              {client.technologies && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {client.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant={client.featured ? "glass" : "neutral"} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {client.technologies.length > 3 && (
                    <Badge variant={client.featured ? "glass" : "neutral"} className="text-xs">
                      +{client.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Website Link */}
            {client.website && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button
                  variant={client.featured ? "glass" : "outline"}
                  size="sm"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ExternalLink size={14} />
                  Visit Website
                </Button>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );

  const renderDetailed = () => (
    <div className="space-y-6">
      {filteredClients.map((client, index) => (
        <Card 
          key={client.id}
          variant={client.featured ? 'gradient' : 'glass'} 
          hover 
          className={cn(
            'transition-all duration-500',
            'animate-fade-in'
          )}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="p-6">
            <div className="flex items-start space-x-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                    <span className="text-xl font-bold font-basement text-primary-500">
                      {getInitials(client.name)}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className={cn(
                        'font-basement text-xl',
                        client.featured ? 'text-white' : 'text-foreground'
                      )}>
                        {client.name}
                      </h3>
                      {client.featured && (
                        <Badge variant="glass">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      {client.industry && (
                        <span className={cn(
                          'font-kabel',
                          client.featured ? 'text-white/80' : 'text-muted-foreground'
                        )}>
                          {client.industry}
                        </span>
                      )}
                      {client.year && (
                        <span className={cn(
                          'font-kabel',
                          client.featured ? 'text-white/80' : 'text-muted-foreground'
                        )}>
                          {client.year}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    {client.status && getStatusBadge(client.status)}
                    {client.rating && (
                      <div className="flex space-x-1">
                        {renderStars(client.rating)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {client.projectType && (
                    <div>
                      <span className={cn(
                        'text-xs font-basement',
                        client.featured ? 'text-white/60' : 'text-muted-foreground'
                      )}>
                        Project Type
                      </span>
                      <p className={cn(
                        'text-sm font-kabel',
                        client.featured ? 'text-white' : 'text-foreground'
                      )}>
                        {client.projectType}
                      </p>
                    </div>
                  )}
                  
                  {client.duration && (
                    <div>
                      <span className={cn(
                        'text-xs font-basement',
                        client.featured ? 'text-white/60' : 'text-muted-foreground'
                      )}>
                        Duration
                      </span>
                      <p className={cn(
                        'text-sm font-kabel',
                        client.featured ? 'text-white' : 'text-foreground'
                      )}>
                        {client.duration}
                      </p>
                    </div>
                  )}
                  
                  {client.teamSize && (
                    <div>
                      <span className={cn(
                        'text-xs font-basement',
                        client.featured ? 'text-white/60' : 'text-muted-foreground'
                      )}>
                        Team Size
                      </span>
                      <p className={cn(
                        'text-sm font-kabel',
                        client.featured ? 'text-white' : 'text-foreground'
                      )}>
                        {client.teamSize} members
                      </p>
                    </div>
                  )}
                </div>

                {/* Technologies */}
                {client.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {client.technologies.map((tech, idx) => (
                        <Badge key={idx} variant={client.featured ? "glass" : "neutral"} className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                {client.testimonial && (
                  <blockquote className={cn(
                    'text-sm font-kabel italic border-l-4 pl-4 mt-4',
                    client.featured 
                      ? 'border-white/30 text-white/90' 
                      : 'border-primary-500/30 text-muted-foreground'
                  )}>
                    "{client.testimonial}"
                  </blockquote>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-4 text-xs">
                    {client.projectValue && (
                      <span className={cn(
                        'font-kabel',
                        client.featured ? 'text-white/80' : 'text-muted-foreground'
                      )}>
                        Value: {client.projectValue}
                      </span>
                    )}
                  </div>
                  
                  {client.website && (
                    <Button
                      variant={client.featured ? "glass" : "outline"}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Visit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header with Stats */}
      {showStats && (
        <Card variant="gradient" padding="lg">
          <CardTitle className="font-basement text-white mb-4">Client Portfolio</CardTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold font-basement text-white mb-1">
                {clients.length}
              </div>
              <div className="text-white/80 font-kabel text-sm">Total Clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold font-basement text-white mb-1">
                {industries.length}
              </div>
              <div className="text-white/80 font-kabel text-sm">Industries</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold font-basement text-white mb-1">
                {clients.filter(c => c.featured).length}
              </div>
              <div className="text-white/80 font-kabel text-sm">Featured</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold font-basement text-white mb-1">
                {Math.round(clients.reduce((acc, c) => acc + (c.rating || 0), 0) / clients.filter(c => c.rating).length * 10) / 10}
              </div>
              <div className="text-white/80 font-kabel text-sm">Avg Rating</div>
            </div>
          </div>
        </Card>
      )}

      {/* Filters */}
      {showFilters && (
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Filter Clients</CardTitle>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              {/* Industry Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground font-kabel text-sm">Industry:</span>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setSelectedIndustry('all')}
                    className={cn(
                      'px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                      selectedIndustry === 'all'
                        ? 'bg-primary-500 text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    )}
                  >
                    All
                  </button>
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={cn(
                        'px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                        selectedIndustry === industry
                          ? 'bg-primary-500 text-white'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground font-kabel text-sm">Year:</span>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setSelectedYear('all')}
                    className={cn(
                      'px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                      selectedYear === 'all'
                        ? 'bg-secondary-500 text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    )}
                  >
                    All Years
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={cn(
                        'px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                        selectedYear === year
                          ? 'bg-secondary-500 text-white'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Mode */}
              {variant !== 'logos-only' && (
                <div className="flex items-center space-x-2">
                  <span className="text-muted-foreground font-kabel text-sm">View:</span>
                  <div className="flex bg-muted/50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        'p-2 rounded-md transition-all',
                        viewMode === 'grid'
                          ? 'bg-primary-500 text-white'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <Grid3X3 size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        'p-2 rounded-md transition-all',
                        viewMode === 'list'
                          ? 'bg-primary-500 text-white'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Client Grid */}
      <div>
        {variant === 'logos-only' && renderLogosOnly()}
        {variant === 'cards' && renderCards()}
        {variant === 'detailed' && renderDetailed()}
        {variant === 'testimonials' && renderDetailed()}
      </div>

      {/* Results Summary */}
      <Card variant="glass" padding="lg">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-muted-foreground font-kabel">
              Showing {filteredClients.length} of {clients.length} clients
            </span>
            {(selectedIndustry !== 'all' || selectedYear !== 'all') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedIndustry('all');
                  setSelectedYear('all');
                }}
                className="ml-4 text-primary-500 hover:text-primary-400"
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="primary">
              {clients.filter(c => c.status === 'completed').length} Completed
            </Badge>
            <Badge variant="warning">
              {clients.filter(c => c.status === 'ongoing').length} Ongoing
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}