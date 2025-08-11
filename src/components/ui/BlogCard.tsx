import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { ShareButtons } from './ShareButtons';
import { 
  Calendar, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Bookmark,
  BookmarkCheck,
  Tag,
  ArrowRight,
  ExternalLink,
  Star
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface BlogCardProps {
  title: string;
  excerpt: string;
  content?: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
    role?: string;
  };
  publishDate: string;
  readTime: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  slug?: string;
  views?: number;
  likes?: number;
  comments?: number;
  featured?: boolean;
  variant?: 'default' | 'glass' | 'gradient' | 'minimal' | 'horizontal';
  size?: 'small' | 'medium' | 'large';
  showAuthor?: boolean;
  showStats?: boolean;
  showShare?: boolean;
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  content,
  author,
  publishDate,
  readTime,
  category,
  tags = [],
  featuredImage,
  slug,
  views = 0,
  likes = 0,
  comments = 0,
  featured = false,
  variant = 'default',
  size = 'medium',
  showAuthor = true,
  showStats = true,
  showShare = true,
  className,
}: BlogCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const sizeClasses = {
    small: 'aspect-[4/3]',
    medium: 'aspect-video',
    large: 'aspect-[3/2]',
  };

  if (variant === 'horizontal') {
    return (
      <Card 
        variant={featured ? 'gradient' : 'glass'} 
        hover 
        className={cn('overflow-hidden', className)}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          {featuredImage && (
            <div className="md:w-1/3 relative overflow-hidden">
              <img
                src={featuredImage}
                alt={title}
                className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {featured && (
                <div className="absolute top-4 left-4">
                  <Badge variant="glass">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="space-y-4">
              {/* Category and Date */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {category && (
                    <Badge variant="primary" className="text-xs">
                      {category}
                    </Badge>
                  )}
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground font-kabel">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground font-kabel">
                    <Clock className="w-3 h-3" />
                    <span>{readTime}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-4 h-4 text-primary-500" />
                  ) : (
                    <Bookmark className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>

              {/* Title and Excerpt */}
              <div>
                <h3 className={cn(
                  'font-basement text-xl mb-3 line-clamp-2',
                  featured ? 'text-white' : 'text-foreground'
                )}>
                  {title}
                </h3>
                <p className={cn(
                  'text-sm font-kabel leading-relaxed line-clamp-3',
                  featured ? 'text-white/90' : 'text-muted-foreground'
                )}>
                  {excerpt}
                </p>
              </div>

              {/* Author */}
              {showAuthor && (
                <div className="flex items-center space-x-3">
                  {author.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center border border-primary-500/30">
                      <span className="text-xs font-bold font-basement text-primary-500">
                        {getInitials(author.name)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className={cn(
                      'text-sm font-basement',
                      featured ? 'text-white' : 'text-foreground'
                    )}>
                      {author.name}
                    </p>
                    {author.role && (
                      <p className={cn(
                        'text-xs font-kabel',
                        featured ? 'text-white/70' : 'text-muted-foreground'
                      )}>
                        {author.role}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Stats and Actions */}
              <div className="flex items-center justify-between">
                {showStats && (
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground font-kabel">
                    {views > 0 && (
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{views}</span>
                      </div>
                    )}
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className="flex items-center space-x-1 hover:text-error-500 transition-colors"
                    >
                      <Heart className={cn('w-3 h-3', isLiked && 'fill-current text-error-500')} />
                      <span>{likes + (isLiked ? 1 : 0)}</span>
                    </button>
                    {comments > 0 && (
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{comments}</span>
                      </div>
                    )}
                  </div>
                )}
                
                <Button
                  variant={featured ? "glass" : "gradient"}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  Read More
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      variant={featured ? 'gradient' : variant} 
      hover 
      className={cn('overflow-hidden group', className)}
    >
      {/* Featured Image */}
      {featuredImage && (
        <div className={cn('relative overflow-hidden', sizeClasses[size])}>
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay with category */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category and Featured badges */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            {category && (
              <Badge variant="glass" className="text-white">
                {category}
              </Badge>
            )}
            {featured && (
              <Badge variant="glass">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>

          {/* Bookmark button */}
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="absolute top-4 right-4 p-2 glass-card rounded-lg hover:bg-white/20 transition-colors"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-white" />
            ) : (
              <Bookmark className="w-4 h-4 text-white" />
            )}
          </button>

          {/* Read time */}
          <div className="absolute bottom-4 right-4">
            <Badge variant="glass" className="text-white">
              <Clock className="w-3 h-3 mr-1" />
              {readTime}
            </Badge>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className={cn(
          'font-basement text-xl leading-tight line-clamp-2',
          featured ? 'text-white' : 'text-foreground'
        )}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className={cn(
          'text-sm font-kabel leading-relaxed line-clamp-3',
          featured ? 'text-white/90' : 'text-muted-foreground'
        )}>
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant={featured ? "glass" : "neutral"} className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant={featured ? "glass" : "neutral"} className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Author */}
        {showAuthor && (
          <div className="flex items-center space-x-3">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center border border-primary-500/30">
                <span className="text-sm font-bold font-basement text-primary-500">
                  {getInitials(author.name)}
                </span>
              </div>
            )}
            <div className="flex-1">
              <p className={cn(
                'text-sm font-basement',
                featured ? 'text-white' : 'text-foreground'
              )}>
                {author.name}
              </p>
              {author.role && (
                <p className={cn(
                  'text-xs font-kabel',
                  featured ? 'text-white/70' : 'text-muted-foreground'
                )}>
                  {author.role}
                </p>
              )}
            </div>
            <div className="text-xs text-muted-foreground font-kabel">
              {formatDate(publishDate)}
            </div>
          </div>
        )}

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          {showStats && (
            <div className="flex items-center space-x-4 text-xs text-muted-foreground font-kabel">
              {views > 0 && (
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{views}</span>
                </div>
              )}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="flex items-center space-x-1 hover:text-error-500 transition-colors"
              >
                <Heart className={cn('w-3 h-3', isLiked && 'fill-current text-error-500')} />
                <span>{likes + (isLiked ? 1 : 0)}</span>
              </button>
              {comments > 0 && (
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>{comments}</span>
                </div>
              )}
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            {showShare && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2"
                >
                  <Share2 size={16} />
                </Button>
                
                {showShareMenu && (
                  <div className="absolute right-0 bottom-full mb-2 z-20">
                    <div className="glass-card p-4 rounded-lg border border-border/50 min-w-[200px]">
                      <ShareButtons
                        title={title}
                        description={excerpt}
                        hashtags={tags}
                        variant="minimal"
                        showLabels={false}
                        platforms={['twitter', 'linkedin', 'copy']}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <Button
              variant={featured ? "glass" : "gradient"}
              size="sm"
              className="flex items-center gap-2"
            >
              Read Article
              <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}