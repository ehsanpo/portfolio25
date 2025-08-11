import React from 'react';
import { Card } from './Card';
import { cn } from '../../utils/cn';

interface BentoItem {
  id: string;
  title?: string;
  description?: string;
  content: React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'glass' | 'gradient';
  className?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-2 row-span-1',
  lg: 'col-span-2 row-span-2',
  xl: 'col-span-3 row-span-2',
};

const gapClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const columnClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
};

export function BentoGrid({
  items,
  columns = 4,
  gap = 'md',
  className,
}: BentoGridProps) {
  return (
    <div className={cn(
      'grid auto-rows-[200px]',
      columnClasses[columns],
      gapClasses[gap],
      className
    )}>
      {items.map((item, index) => (
        <Card
          key={item.id}
          variant={item.variant || 'glass'}
          hover
          className={cn(
            'transition-all duration-500 overflow-hidden',
            sizeClasses[item.size],
            'animate-fade-in',
            item.className
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="p-4 h-full flex flex-col">
            {item.title && (
              <h3 className="font-basement text-foreground text-lg mb-2">
                {item.title}
              </h3>
            )}
            {item.description && (
              <p className="text-sm text-muted-foreground font-kabel mb-4">
                {item.description}
              </p>
            )}
            <div className="flex-1 flex items-center justify-center">
              {item.content}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

// Preset Bento layouts
export const BentoLayouts = {
  portfolio: [
    { id: 'hero', size: 'xl' as const, variant: 'gradient' as const },
    { id: 'about', size: 'md' as const, variant: 'glass' as const },
    { id: 'skills', size: 'lg' as const, variant: 'default' as const },
    { id: 'projects', size: 'md' as const, variant: 'glass' as const },
    { id: 'contact', size: 'sm' as const, variant: 'gradient' as const },
    { id: 'testimonial', size: 'md' as const, variant: 'default' as const },
  ],
  dashboard: [
    { id: 'stats', size: 'lg' as const, variant: 'gradient' as const },
    { id: 'chart1', size: 'md' as const, variant: 'glass' as const },
    { id: 'chart2', size: 'md' as const, variant: 'default' as const },
    { id: 'activity', size: 'sm' as const, variant: 'glass' as const },
    { id: 'notifications', size: 'sm' as const, variant: 'default' as const },
    { id: 'quick-actions', size: 'md' as const, variant: 'gradient' as const },
  ],
  gallery: [
    { id: 'featured', size: 'xl' as const, variant: 'gradient' as const },
    { id: 'image1', size: 'sm' as const, variant: 'glass' as const },
    { id: 'image2', size: 'md' as const, variant: 'default' as const },
    { id: 'image3', size: 'sm' as const, variant: 'glass' as const },
    { id: 'image4', size: 'lg' as const, variant: 'default' as const },
    { id: 'image5', size: 'sm' as const, variant: 'gradient' as const },
  ],
};