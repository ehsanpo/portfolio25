import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { 
  Download, 
  FileText, 
  Image, 
  Code, 
  Palette, 
  File,
  ExternalLink,
  Eye,
  Calendar,
  User,
  Briefcase,
  Award,
  BookOpen,
  Folder,
  Archive,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  type: 'resume' | 'portfolio' | 'case-study' | 'code' | 'design' | 'certificate' | 'other';
  format: 'PDF' | 'ZIP' | 'PNG' | 'JPG' | 'SVG' | 'JSON' | 'MD';
  size: string;
  lastUpdated: string;
  downloadUrl?: string;
  previewUrl?: string;
  featured?: boolean;
  downloadCount?: number;
  version?: string;
  tags?: string[];
}

interface DownloadCenterProps {
  items: DownloadItem[];
  title?: string;
  description?: string;
  showStats?: boolean;
  showFilters?: boolean;
  showPreview?: boolean;
  variant?: 'grid' | 'list' | 'categories';
  className?: string;
}

export function DownloadCenter({
  items,
  title = "Download Center",
  description = "Access my professional documents, portfolios, and resources",
  showStats = true,
  showFilters = true,
  showPreview = true,
  variant = 'grid',
  className,
}: DownloadCenterProps) {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [downloadingItems, setDownloadingItems] = useState<Set<string>>(new Set());

  const types = [
    { id: 'all', name: 'All Files', icon: Folder, color: 'text-primary-500' },
    { id: 'resume', name: 'Resume', icon: FileText, color: 'text-blue-500' },
    { id: 'portfolio', name: 'Portfolio', icon: Briefcase, color: 'text-purple-500' },
    { id: 'case-study', name: 'Case Studies', icon: BookOpen, color: 'text-green-500' },
    { id: 'code', name: 'Code', icon: Code, color: 'text-orange-500' },
    { id: 'design', name: 'Design', icon: Palette, color: 'text-pink-500' },
    { id: 'certificate', name: 'Certificates', icon: Award, color: 'text-yellow-500' },
  ];

  const formats = [...new Set(items.map(item => item.format))];

  const filteredItems = items.filter(item => {
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    const formatMatch = selectedFormat === 'all' || item.format === selectedFormat;
    return typeMatch && formatMatch;
  });

  const getTypeIcon = (type: string) => {
    const typeConfig = types.find(t => t.id === type);
    return typeConfig ? typeConfig.icon : File;
  };

  const getTypeColor = (type: string) => {
    const typeConfig = types.find(t => t.id === type);
    return typeConfig ? typeConfig.color : 'text-muted-foreground';
  };

  const getFormatColor = (format: string) => {
    const colors = {
      PDF: 'bg-red-500/20 text-red-400 border-red-500/30',
      ZIP: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      PNG: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      JPG: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      SVG: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      JSON: 'bg-green-500/20 text-green-400 border-green-500/30',
      MD: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };
    return colors[format as keyof typeof colors] || 'bg-muted text-muted-foreground border-border';
  };

  const handleDownload = async (item: DownloadItem) => {
    setDownloadingItems(prev => new Set([...prev, item.id]));
    
    // Simulate download delay
    setTimeout(() => {
      setDownloadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
      
      // Trigger actual download
      if (item.downloadUrl) {
        const link = document.createElement('a');
        link.href = item.downloadUrl;
        link.download = `${item.title}.${item.format.toLowerCase()}`;
        link.click();
      }
    }, 1500);
  };

  const handlePreview = (item: DownloadItem) => {
    if (item.previewUrl) {
      window.open(item.previewUrl, '_blank');
    }
  };

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item, index) => {
        const Icon = getTypeIcon(item.type);
        const isDownloading = downloadingItems.has(item.id);
        
        return (
          <Card 
            key={item.id}
            variant={item.featured ? 'gradient' : 'glass'} 
            hover 
            className={cn(
              'transition-all duration-500 relative overflow-hidden',
              'animate-fade-in'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.featured && (
              <div className="absolute top-4 right-4">
                <Badge variant="glass">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
            
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className={cn(
                  'w-12 h-12 rounded-lg flex items-center justify-center border',
                  item.featured 
                    ? 'bg-white/20 border-white/30' 
                    : 'bg-primary-500/20 border-primary-500/30'
                )}>
                  <Icon className={cn(
                    'w-6 h-6',
                    item.featured ? 'text-white' : getTypeColor(item.type)
                  )} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    'font-basement text-lg mb-1 truncate',
                    item.featured ? 'text-white' : 'text-foreground'
                  )}>
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={item.featured ? "glass" : "neutral"}
                      className={cn('text-xs border', getFormatColor(item.format))}
                    >
                      {item.format}
                    </Badge>
                    <span className={cn(
                      'text-xs font-kabel',
                      item.featured ? 'text-white/60' : 'text-muted-foreground'
                    )}>
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={cn(
                'text-sm font-kabel leading-relaxed mb-4',
                item.featured ? 'text-white/90' : 'text-muted-foreground'
              )}>
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant={item.featured ? "glass" : "neutral"} className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Metadata */}
              <div className="flex items-center justify-between text-xs mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className={cn(
                    'w-3 h-3',
                    item.featured ? 'text-white/60' : 'text-muted-foreground'
                  )} />
                  <span className={cn(
                    'font-kabel',
                    item.featured ? 'text-white/80' : 'text-muted-foreground'
                  )}>
                    {item.lastUpdated}
                  </span>
                </div>
                
                {item.downloadCount && (
                  <div className="flex items-center space-x-1">
                    <Download className={cn(
                      'w-3 h-3',
                      item.featured ? 'text-white/60' : 'text-muted-foreground'
                    )} />
                    <span className={cn(
                      'font-kabel',
                      item.featured ? 'text-white/80' : 'text-muted-foreground'
                    )}>
                      {item.downloadCount} downloads
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={item.featured ? "glass" : "gradient"}
                  size="sm"
                  onClick={() => handleDownload(item)}
                  isLoading={isDownloading}
                  className="flex-1 flex items-center justify-center gap-2"
                >
                  <Download size={14} />
                  {isDownloading ? 'Downloading...' : 'Download'}
                </Button>
                
                {showPreview && item.previewUrl && (
                  <Button
                    variant={item.featured ? "glass" : "outline"}
                    size="sm"
                    onClick={() => handlePreview(item)}
                    className="flex items-center gap-2"
                  >
                    <Eye size={14} />
                    Preview
                  </Button>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-3">
      {filteredItems.map((item, index) => {
        const Icon = getTypeIcon(item.type);
        const isDownloading = downloadingItems.has(item.id);
        
        return (
          <Card 
            key={item.id}
            variant="glass" 
            hover 
            className={cn(
              'transition-all duration-300',
              'animate-fade-in'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary-500/20 rounded-lg border border-primary-500/30">
                  <Icon className={cn('w-5 h-5', getTypeColor(item.type))} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-basement text-foreground truncate">{item.title}</h3>
                    {item.featured && (
                      <Star className="w-4 h-4 text-warning-500 fill-current" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-kabel truncate">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <Badge 
                      variant="neutral"
                      className={cn('text-xs border mb-1', getFormatColor(item.format))}
                    >
                      {item.format}
                    </Badge>
                    <div className="text-xs text-muted-foreground font-kabel">
                      {item.size}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {showPreview && item.previewUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePreview(item)}
                        className="p-2"
                      >
                        <Eye size={16} />
                      </Button>
                    )}
                    
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => handleDownload(item)}
                      isLoading={isDownloading}
                      className="flex items-center gap-2"
                    >
                      <Download size={14} />
                      {isDownloading ? 'Downloading' : 'Download'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

  const renderCategoriesView = () => (
    <div className="space-y-8">
      {types.slice(1).map((type) => {
        const categoryItems = filteredItems.filter(item => item.type === type.id);
        if (categoryItems.length === 0) return null;
        
        const Icon = type.icon;
        
        return (
          <div key={type.id}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-500/20 rounded-lg border border-primary-500/30">
                <Icon className={cn('w-6 h-6', type.color)} />
              </div>
              <div>
                <h3 className="font-basement text-foreground text-xl">{type.name}</h3>
                <p className="text-sm text-muted-foreground font-kabel">
                  {categoryItems.length} file{categoryItems.length > 1 ? 's' : ''} available
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryItems.map((item, index) => {
                const isDownloading = downloadingItems.has(item.id);
                
                return (
                  <Card 
                    key={item.id}
                    variant={item.featured ? 'gradient' : 'glass'} 
                    hover 
                    className={cn(
                      'transition-all duration-300',
                      'animate-fade-in'
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h4 className={cn(
                            'font-basement text-foreground mb-1 truncate',
                            item.featured && 'text-white'
                          )}>
                            {item.title}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={item.featured ? "glass" : "neutral"}
                              className={cn('text-xs border', getFormatColor(item.format))}
                            >
                              {item.format}
                            </Badge>
                            <span className={cn(
                              'text-xs font-kabel',
                              item.featured ? 'text-white/60' : 'text-muted-foreground'
                            )}>
                              {item.size}
                            </span>
                          </div>
                        </div>
                        
                        {item.featured && (
                          <Star className="w-4 h-4 text-white fill-current" />
                        )}
                      </div>
                      
                      <p className={cn(
                        'text-sm font-kabel mb-4 line-clamp-2',
                        item.featured ? 'text-white/90' : 'text-muted-foreground'
                      )}>
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className={cn(
                          'font-kabel',
                          item.featured ? 'text-white/60' : 'text-muted-foreground'
                        )}>
                          Updated {item.lastUpdated}
                        </span>
                        
                        {item.downloadCount && (
                          <span className={cn(
                            'font-kabel',
                            item.featured ? 'text-white/60' : 'text-muted-foreground'
                          )}>
                            {item.downloadCount} downloads
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant={item.featured ? "glass" : "gradient"}
                          size="sm"
                          onClick={() => handleDownload(item)}
                          isLoading={isDownloading}
                          className="flex-1 flex items-center justify-center gap-2"
                        >
                          <Download size={14} />
                          {isDownloading ? 'Downloading' : 'Download'}
                        </Button>
                        
                        {showPreview && item.previewUrl && (
                          <Button
                            variant={item.featured ? "glass" : "outline"}
                            size="sm"
                            onClick={() => handlePreview(item)}
                            className="flex items-center gap-2"
                          >
                            <Eye size={14} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={cn('space-y-8', className)}>
      {/* Header */}
      <Card variant="gradient" padding="lg">
        <CardTitle className="font-basement text-white mb-2">{title}</CardTitle>
        <CardDescription className="font-kabel text-white/80 mb-6">{description}</CardDescription>
        
        {showStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold font-basement text-white mb-1">
                {items.length}
              </div>
              <div className="text-white/80 font-kabel text-sm">Total Files</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold font-basement text-white mb-1">
                {items.filter(i => i.featured).length}
              </div>
              <div className="text-white/80 font-kabel text-sm">Featured</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold font-basement text-white mb-1">
                {formats.length}
              </div>
              <div className="text-white/80 font-kabel text-sm">Formats</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold font-basement text-white mb-1">
                {items.reduce((acc, item) => acc + (item.downloadCount || 0), 0)}
              </div>
              <div className="text-white/80 font-kabel text-sm">Downloads</div>
            </div>
          </div>
        )}
      </Card>

      {/* Filters */}
      {showFilters && (
        <Card variant="glass" padding="lg">
          <CardTitle className="font-basement">Filter Downloads</CardTitle>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              {/* Type Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground font-kabel text-sm">Type:</span>
                <div className="flex flex-wrap gap-1">
                  {types.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={cn(
                          'flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                          selectedType === type.id
                            ? 'bg-primary-500 text-white'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {type.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Format Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground font-kabel text-sm">Format:</span>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setSelectedFormat('all')}
                    className={cn(
                      'px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                      selectedFormat === 'all'
                        ? 'bg-secondary-500 text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    )}
                  >
                    All Formats
                  </button>
                  {formats.map((format) => (
                    <button
                      key={format}
                      onClick={() => setSelectedFormat(format)}
                      className={cn(
                        'px-3 py-1 rounded-lg text-sm font-kabel transition-all',
                        selectedFormat === format
                          ? 'bg-secondary-500 text-white'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Download Grid */}
      <div>
        {variant === 'grid' && renderGridView()}
        {variant === 'list' && renderListView()}
        {variant === 'categories' && renderCategoriesView()}
      </div>

      {/* Results Summary */}
      <Card variant="glass" padding="lg">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-muted-foreground font-kabel">
              Showing {filteredItems.length} of {items.length} files
            </span>
            {(selectedType !== 'all' || selectedFormat !== 'all') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedType('all');
                  setSelectedFormat('all');
                }}
                className="ml-4 text-primary-500 hover:text-primary-400"
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="primary">
              {items.filter(i => i.featured).length} Featured
            </Badge>
            <Badge variant="success">
              {items.reduce((acc, item) => acc + (item.downloadCount || 0), 0)} Total Downloads
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}