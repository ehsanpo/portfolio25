import React from 'react';
import { cn } from '../../utils/cn';

interface SectionDividerProps {
  variant?: 'clip' | 'diagonal' | 'curve' | 'zigzag' | 'dots';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'transparent';
  height?: 'sm' | 'md' | 'lg' | 'xl';
  flip?: boolean;
  className?: string;
}

const heightClasses = {
  sm: 'h-16',
  md: 'h-24',
  lg: 'h-32',
  xl: 'h-48',
};

const colorClasses = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  accent: 'text-accent-500',
  white: 'text-white',
  transparent: 'text-transparent',
};

export function SectionDivider({
  variant = 'clip',
  color = 'white',
  height = 'md',
  flip = false,
  className,
}: SectionDividerProps) {
  const renderClipDivider = () => (
    <div 
      className={cn(
        'w-full bg-current',
        flip && 'scale-y-[-1]'
      )}
      style={{
        clipPath: 'polygon(0 0, 25% 0, calc(25% + 9px) 9px, calc(75% - 9px) 9px, 75% 0, 100% 0, 100% 100%, 60% 100%, calc(60% - 8px) calc(100% - 8px), calc(40% + 8px) calc(100% - 8px), 40% 100%, 0 100%)',
        padding: '24px'
      }}
    />
  );

  const renderDiagonalDivider = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      className={cn(flip && 'scale-y-[-1]')}
    >
      <polygon 
        points="0,0 100,0 100,80 0,100" 
        fill="currentColor"
      />
    </svg>
  );

  const renderCurveDivider = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      className={cn(flip && 'scale-y-[-1]')}
    >
      <path 
        d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" 
        fill="currentColor"
      />
    </svg>
  );

  const renderZigzagDivider = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="100%" 
      height="100%" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      className={cn(flip && 'scale-y-[-1]')}
    >
      <polygon 
        points="0,0 20,100 40,0 60,100 80,0 100,100 100,100 0,100" 
        fill="currentColor"
      />
    </svg>
  );

  const renderDotsDivider = () => (
    <div className={cn('flex justify-center items-center space-x-2', flip && 'scale-y-[-1]')}>
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="w-2 h-2 bg-current rounded-full animate-pulse"
          style={{ animationDelay: `${index * 200}ms` }}
        />
      ))}
    </div>
  );

  const renderDivider = () => {
    switch (variant) {
      case 'clip':
        return renderClipDivider();
      case 'diagonal':
        return renderDiagonalDivider();
      case 'curve':
        return renderCurveDivider();
      case 'zigzag':
        return renderZigzagDivider();
      case 'dots':
        return renderDotsDivider();
      default:
        return renderClipDivider();
    }
  };

  return (
    <div className={cn(
      'w-full overflow-hidden',
      heightClasses[height],
      colorClasses[color],
      className
    )}>
      {renderDivider()}
    </div>
  );
}