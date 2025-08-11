import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface DuoToneImageProps {
  src: string;
  alt: string;
  color1?: string;
  color2?: string;
  intensity?: number;
  className?: string;
  overlay?: boolean;
  variant?: 'default' | 'cyberpunk' | 'neon' | 'vintage';
}

const duoToneVariants = {
  default: {
    color1: '#ef446a',
    color2: '#8b5cf6',
    blend: 'multiply'
  },
  cyberpunk: {
    color1: '#00ff88',
    color2: '#ef446a',
    blend: 'screen'
  },
  neon: {
    color1: '#8b5cf6',
    color2: '#00ff88',
    blend: 'overlay'
  },
  vintage: {
    color1: '#fbbf24',
    color2: '#ef446a',
    blend: 'multiply'
  }
};

export function DuoToneImage({
  src,
  alt,
  color1,
  color2,
  intensity = 0.7,
  className,
  overlay = false,
  variant = 'default',
}: DuoToneImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const variantConfig = duoToneVariants[variant];
  const finalColor1 = color1 || variantConfig.color1;
  const finalColor2 = color2 || variantConfig.color2;

  const duoToneStyle = {
    '--duo-tone-color-1': finalColor1,
    '--duo-tone-color-2': finalColor2,
    '--duo-tone-intensity': intensity,
  } as React.CSSProperties;

  return (
    <div className={cn('relative overflow-hidden group', className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-500',
          'filter grayscale',
          isLoaded ? 'opacity-100' : 'opacity-0',
          hasError && 'hidden'
        )}
        style={duoToneStyle}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      
      {/* Duo tone overlay */}
      <div 
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          'bg-gradient-to-br opacity-60 mix-blend-multiply',
          'group-hover:opacity-80'
        )}
        style={{
          background: `linear-gradient(135deg, ${finalColor1} 0%, ${finalColor2} 100%)`,
          mixBlendMode: variantConfig.blend as any,
          opacity: intensity
        }}
      />
      
      {/* Optional overlay content */}
      {overlay && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">+</span>
            </div>
            <span className="text-sm font-kabel">View Image</span>
          </div>
        </div>
      )}
      
      {/* Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="w-full h-full bg-muted/30 flex items-center justify-center min-h-[200px]">
          <div className="text-center text-muted-foreground">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-lg">?</span>
            </div>
            <span className="text-sm font-kabel">Image not found</span>
          </div>
        </div>
      )}
    </div>
  );
}