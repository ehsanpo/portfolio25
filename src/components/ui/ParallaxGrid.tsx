import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface ParallaxGridImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
  speed?: number;
  direction?: 'up' | 'down';
}

interface ParallaxGridProps {
  images: ParallaxGridImage[];
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  variant?: 'masonry' | 'grid' | 'mixed';
  showOverlay?: boolean;
  className?: string;
}

const sizeClasses = {
  small: 'aspect-square',
  medium: 'aspect-[4/3]',
  large: 'aspect-[3/2]',
  tall: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
};

const gapClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
};

const columnClasses = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
};

function ParallaxGridItem({ 
  image, 
  showOverlay = false 
}: { 
  image: ParallaxGridImage; 
  showOverlay?: boolean; 
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (!itemRef.current) return;

      const rect = itemRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const speed = image.speed || 0.3;
      const direction = image.direction || 'up';
      
      let rate = scrolled * -speed;
      if (direction === 'down') {
        rate = scrolled * speed;
      }

      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [image.speed, image.direction]);

  return (
    <div
      ref={itemRef}
      className={cn(
        'relative overflow-hidden rounded-lg group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl',
        sizeClasses[image.size]
      )}
    >
      {/* Parallax Image */}
      <div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url(${image.src})`,
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Hover Overlay */}
      {showOverlay && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
          <div className="text-center text-white p-4">
            {image.title && (
              <h4 className="font-basement text-lg mb-2">{image.title}</h4>
            )}
            {image.description && (
              <p className="text-sm font-kabel opacity-90">{image.description}</p>
            )}
          </div>
        </div>
      )}

      {/* Content Overlay */}
      {(image.title || image.description) && !showOverlay && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          {image.title && (
            <h4 className="font-basement text-lg mb-1">{image.title}</h4>
          )}
          {image.description && (
            <p className="text-sm font-kabel opacity-90">{image.description}</p>
          )}
        </div>
      )}
    </div>
  );
}

export function ParallaxGrid({
  images,
  columns = 3,
  gap = 'md',
  variant = 'mixed',
  showOverlay = true,
  className,
}: ParallaxGridProps) {
  if (variant === 'masonry') {
    return (
      <div className={cn(
        'columns-1 md:columns-2 lg:columns-3 space-y-4',
        columns === 4 && 'xl:columns-4',
        gapClasses[gap],
        className
      )}>
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid mb-4">
            <ParallaxGridItem image={image} showOverlay={showOverlay} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(
      'grid',
      columnClasses[columns],
      gapClasses[gap],
      className
    )}>
      {images.map((image) => (
        <ParallaxGridItem key={image.id} image={image} showOverlay={showOverlay} />
      ))}
    </div>
  );
}