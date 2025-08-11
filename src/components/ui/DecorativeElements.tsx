import React from 'react';
import { cn } from '../../utils/cn';

interface DecorativeElementProps {
  variant?: 'grid' | 'lines' | 'dots' | 'brackets' | 'scan' | 'noise' | 'circuit' | 'data';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'muted';
  animated?: boolean;
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
};

const colorClasses = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  accent: 'text-accent-500',
  white: 'text-white',
  muted: 'text-muted-foreground',
};

export function DecorativeElement({
  variant = 'grid',
  size = 'md',
  color = 'accent',
  animated = true,
  fullScreen = false,
  text,
  className,
}: DecorativeElementProps) {
  const renderGrid = () => (
    <div className={cn(
      'grid grid-cols-8 gap-0.5 opacity-30',
      animated && 'animate-pulse'
    )}>
      {Array.from({ length: 64 }, (_, i) => (
        <div
          key={i}
          className={cn(
            'aspect-square border border-current',
            Math.random() > 0.7 && 'bg-current'
          )}
          style={{
            animationDelay: animated ? `${i * 0.02}s` : undefined
          }}
        />
      ))}
    </div>
  );

  const renderLines = () => (
    <div className="relative opacity-40">
      {/* Diagonal lines */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className={cn(
            'absolute w-full h-0.5 bg-current transform rotate-45 origin-left',
            animated && 'animate-pulse'
          )}
          style={{
            top: `${i * 12.5}%`,
            animationDelay: animated ? `${i * 0.1}s` : undefined
          }}
        />
      ))}
      {/* Horizontal lines */}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`h-${i}`}
          className={cn(
            'absolute w-full h-px bg-current',
            animated && 'animate-pulse'
          )}
          style={{
            top: `${25 + i * 25}%`,
            animationDelay: animated ? `${i * 0.15}s` : undefined
          }}
        />
      ))}
    </div>
  );

  const renderDots = () => (
    <div className={cn(
      'grid grid-cols-6 gap-2 opacity-50',
      animated && 'animate-pulse'
    )}>
      {Array.from({ length: 36 }, (_, i) => (
        <div
          key={i}
          className={cn(
            'w-1 h-1 rounded-full bg-current',
            animated && 'animate-ping'
          )}
          style={{
            animationDelay: animated ? `${i * 0.05}s` : undefined
          }}
        />
      ))}
    </div>
  );

  const renderBrackets = () => (
    <div className="relative opacity-60">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-current" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-current" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-current" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-current" />
      
      {/* Center cross */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={cn(
          'w-4 h-0.5 bg-current',
          animated && 'animate-pulse'
        )} />
        <div className={cn(
          'w-0.5 h-4 bg-current absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          animated && 'animate-pulse'
        )} />
      </div>
      
      {/* Side markers */}
      <div className="absolute top-1/4 left-0 w-2 h-0.5 bg-current" />
      <div className="absolute top-3/4 left-0 w-2 h-0.5 bg-current" />
      <div className="absolute top-1/4 right-0 w-2 h-0.5 bg-current" />
      <div className="absolute top-3/4 right-0 w-2 h-0.5 bg-current" />
    </div>
  );

  const renderScan = () => (
    <div className="relative overflow-hidden opacity-50">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-12 gap-px">
        {Array.from({ length: 144 }, (_, i) => (
          <div key={i} className="bg-current opacity-10" />
        ))}
      </div>
      
      {/* Scanning line */}
      <div className={cn(
        'absolute w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent',
        animated && 'animate-bounce'
      )} />
      
      {/* Data blocks */}
      <div className="absolute top-1/4 left-1/4 w-8 h-2 bg-current opacity-80" />
      <div className="absolute top-1/2 right-1/4 w-6 h-1 bg-current opacity-60" />
      <div className="absolute bottom-1/4 left-1/3 w-4 h-3 bg-current opacity-70" />
    </div>
  );

  const renderNoise = () => (
    <div className="relative opacity-30">
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className={cn(
            'absolute w-px h-px bg-current',
            animated && 'animate-ping'
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: animated ? `${Math.random() * 2}s` : undefined
          }}
        />
      ))}
    </div>
  );

  const renderCircuit = () => (
    <div className="relative opacity-40">
      {/* Circuit paths */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path
          d="M10,10 L30,10 L30,30 L70,30 L70,50 L90,50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className={animated ? 'animate-pulse' : ''}
        />
        <path
          d="M10,90 L30,90 L30,70 L70,70 L70,50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className={animated ? 'animate-pulse' : ''}
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M50,10 L50,30 M50,70 L50,90"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className={animated ? 'animate-pulse' : ''}
          style={{ animationDelay: '1s' }}
        />
        
        {/* Circuit nodes */}
        <circle cx="30" cy="30" r="2" fill="currentColor" className={animated ? 'animate-ping' : ''} />
        <circle cx="70" cy="50" r="2" fill="currentColor" className={animated ? 'animate-ping' : ''} style={{ animationDelay: '0.3s' }} />
        <circle cx="50" cy="70" r="2" fill="currentColor" className={animated ? 'animate-ping' : ''} style={{ animationDelay: '0.6s' }} />
      </svg>
    </div>
  );

  const renderData = () => (
    <div className="relative font-mono text-xs opacity-60">
      {/* Data streams */}
      <div className="space-y-1">
        <div className={cn('flex space-x-1', animated && 'animate-pulse')}>
          <span>SEC_EP_</span>
          <span className="text-accent-500">RCN.002</span>
        </div>
        <div className={cn('flex space-x-1', animated && 'animate-pulse')} style={{ animationDelay: '0.2s' }}>
          <span>WICKED</span>
          <span className="text-primary-500">S88</span>
        </div>
        <div className={cn('flex space-x-1', animated && 'animate-pulse')} style={{ animationDelay: '0.4s' }}>
          <span>AW.2KG5™</span>
        </div>
        <div className={cn('flex space-x-1', animated && 'animate-pulse')} style={{ animationDelay: '0.6s' }}>
          <span className="text-secondary-500">691</span>
          <span>PG-3P</span>
        </div>
      </div>
      
      {/* Progress bars */}
      <div className="mt-2 space-y-1">
        <div className="w-full h-0.5 bg-muted">
          <div className={cn(
            'h-full bg-accent-500 transition-all duration-2000',
            animated && 'animate-pulse'
          )} style={{ width: '60%' }} />
        </div>
        <div className="w-full h-0.5 bg-muted">
          <div className={cn(
            'h-full bg-primary-500 transition-all duration-2000',
            animated && 'animate-pulse'
          )} style={{ width: '80%', animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );

  const renderElement = () => {
    switch (variant) {
      case 'lines':
        return renderLines();
      case 'dots':
        return renderDots();
      case 'brackets':
        return renderBrackets();
      case 'scan':
        return renderScan();
      case 'noise':
        return renderNoise();
      case 'circuit':
        return renderCircuit();
      case 'data':
        return renderData();
      default:
        return renderGrid();
    }
  };

  const content = (
    <div className={cn(
      'flex flex-col items-center justify-center',
      fullScreen ? 'min-h-screen space-y-4' : '',
      className
    )}>
      <div className={cn(
        sizeClasses[size],
        colorClasses[color],
        'relative flex items-center justify-center'
      )}>
        {renderElement()}
      </div>
      {text && (
        <div className={cn(
          'font-kabel text-center mt-4',
          variant === 'cyberpunk' || variant === 'matrix' || variant === 'glitch' || variant === 'data'
            ? 'text-accent-500 font-mono text-xs' 
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
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
        {content}
      </div>
    );
  }

  return content;
}