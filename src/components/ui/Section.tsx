import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';
import { cn } from '../../utils/cn';

interface SectionProps {
  title: string;
  content: string;
  titlePosition?: 'left' | 'right';
  imagePosition?: 'left' | 'right';
  image?: string;
  imageAlt?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'minimal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  badges?: string[];
  ctaText?: string;
  ctaAction?: () => void;
  className?: string;
}

export function Section({
  title,
  content,
  titlePosition = 'left',
  imagePosition = 'left',
  image,
  imageAlt,
  variant = 'default',
  size = 'md',
  badges = [],
  ctaText,
  ctaAction,
  className
}: SectionProps) {
  const hasImage = Boolean(image);
  const isMinimal = variant === 'minimal';
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const contentSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm',
    glass: 'bg-white/10 dark:bg-gray-800/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-xl',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700 rounded-xl',
    minimal: ''
  };

  if (isMinimal) {
    return (
      <div className={cn('space-y-4', className)}>
        <h2 className={cn('font-bold text-gray-900 dark:text-white', sizeClasses[size])}>
          {title}
        </h2>
        <p className={cn('text-gray-600 dark:text-gray-300 leading-relaxed', contentSizeClasses[size])}>
          {content}
        </p>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        {ctaText && ctaAction && (
          <Button onClick={ctaAction} className="mt-4">
            {ctaText}
          </Button>
        )}
      </div>
    );
  }

  if (hasImage) {
    const isImageLeft = imagePosition === 'left';
    
    return (
      <div className={cn(variantClasses[variant], 'p-8', className)}>
        <div className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
          !isImageLeft && 'lg:grid-flow-col-dense'
        )}>
          <div className={cn(!isImageLeft && 'lg:col-start-2')}>
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className={cn(isImageLeft ? 'lg:pl-8' : 'lg:pr-8')}>
            <h2 className={cn('font-bold text-gray-900 dark:text-white mb-4', sizeClasses[size])}>
              {title}
            </h2>
            <p className={cn('text-gray-600 dark:text-gray-300 leading-relaxed mb-6', contentSizeClasses[size])}>
              {content}
            </p>
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {badges.map((badge, index) => (
                  <Badge key={index} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
            {ctaText && ctaAction && (
              <Button onClick={ctaAction}>
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Title and text layout
  const isTitleLeft = titlePosition === 'left';
  
  return (
    <div className={cn(variantClasses[variant], 'p-8', className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className={cn(!isTitleLeft && 'lg:col-start-2')}>
          <h2 className={cn('font-bold text-gray-900 dark:text-white', sizeClasses[size])}>
            {title}
          </h2>
        </div>
        <div className={cn(isTitleLeft ? 'lg:pl-8' : 'lg:pr-8')}>
          <p className={cn('text-gray-600 dark:text-gray-300 leading-relaxed mb-6', contentSizeClasses[size])}>
            {content}
          </p>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
          {ctaText && ctaAction && (
            <Button onClick={ctaAction}>
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}