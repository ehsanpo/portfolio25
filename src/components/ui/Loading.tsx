import React from 'react';
import { cn } from '../../utils/cn';

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse' | 'cyberpunk' | 'matrix' | 'glitch';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const colorClasses = {
  primary: 'text-primary-500 border-primary-500',
  secondary: 'text-secondary-500 border-secondary-500',
  accent: 'text-accent-500 border-accent-500',
  white: 'text-white border-white',
};

export function Loading({
  variant = 'spinner',
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className,
}: LoadingProps) {
  const renderSpinner = () => (
    <div className={cn(
      'border-2 border-t-transparent rounded-full animate-spin',
      sizeClasses[size],
      colorClasses[color]
    )} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'rounded-full animate-pulse',
            size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : size === 'lg' ? 'w-3 h-3' : 'w-4 h-4',
            colorClasses[color].split(' ')[0]
          )}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="flex items-end space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            'animate-pulse',
            size === 'sm' ? 'w-1' : size === 'md' ? 'w-1.5' : size === 'lg' ? 'w-2' : 'w-3',
            colorClasses[color].split(' ')[0]
          )}
          style={{
            height: `${20 + Math.random() * 20}px`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div className={cn(
      'rounded-full animate-ping',
      sizeClasses[size],
      colorClasses[color].split(' ')[0]
    )} />
  );

  const renderCyberpunk = () => (
    <div className="relative">
      {/* Main loading element */}
      <div className={cn(
        'border border-accent-500 bg-black/80 backdrop-blur-sm',
        size === 'sm' ? 'w-16 h-8' : size === 'md' ? 'w-24 h-12' : size === 'lg' ? 'w-32 h-16' : 'w-40 h-20'
      )}>
        {/* Scanning line */}
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-0.5 bg-accent-500 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 animate-pulse" />
        </div>
      </div>
      
      {/* Corner brackets */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-accent-500" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-accent-500" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-accent-500" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-accent-500" />
      
      {/* Glitch effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 animate-pulse opacity-30" />
    </div>
  );

  const renderMatrix = () => (
    <div className="relative">
      <div className={cn(
        'grid grid-cols-4 gap-0.5',
        size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : size === 'lg' ? 'w-16 h-16' : 'w-20 h-20'
      )}>
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className={cn(
              'bg-accent-500 animate-pulse',
              size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
              animationDuration: '1.5s'
            }}
          />
        ))}
      </div>
      
      {/* Scanning lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-0.5 bg-accent-500/80 animate-bounce" style={{ top: '25%' }} />
        <div className="absolute w-full h-0.5 bg-primary-500/80 animate-bounce" style={{ top: '75%', animationDelay: '0.5s' }} />
      </div>
    </div>
  );

  const renderGlitch = () => (
    <div className="relative">
      <div className={cn(
        'bg-black border border-accent-500 relative overflow-hidden',
        sizeClasses[size]
      )}>
        {/* Base text */}
        <div className="absolute inset-0 flex items-center justify-center text-accent-500 font-mono text-xs font-bold">
          LOAD
        </div>
        
        {/* Glitch layers */}
        <div className="absolute inset-0 flex items-center justify-center text-primary-500 font-mono text-xs font-bold animate-pulse opacity-70">
          LOAD
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-secondary-500 font-mono text-xs font-bold animate-pulse opacity-50" style={{ animationDelay: '0.1s' }}>
          LOAD
        </div>
        
        {/* Scan lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/20 to-transparent animate-pulse" />
        
        {/* Static noise */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'bars':
        return renderBars();
      case 'pulse':
        return renderPulse();
      case 'cyberpunk':
        return renderCyberpunk();
      case 'matrix':
        return renderMatrix();
      case 'glitch':
        return renderGlitch();
      default:
        return renderSpinner();
    }
  };

  const content = (
    <div className={cn(
      'flex flex-col items-center justify-center space-y-4',
      fullScreen ? 'min-h-screen' : 'p-8',
      className
    )}>
      {renderLoader()}
      {text && (
        <div className={cn(
          'font-kabel text-center',
          variant === 'cyberpunk' || variant === 'matrix' || variant === 'glitch' 
            ? 'text-accent-500 font-mono' 
            : 'text-muted-foreground',
          size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'
        )}>
          {text}
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}