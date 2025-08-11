import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0.1 to 1.0, where 0.5 is half speed
  direction?: 'up' | 'down' | 'left' | 'right';
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  height?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  direction = 'up',
  overlay = false,
  overlayColor = 'black',
  overlayOpacity = 0.4,
  height = '100vh',
  className,
  children,
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${offset}px)`;
      case 'down':
        return `translateY(${-offset}px)`;
      case 'left':
        return `translateX(${offset}px)`;
      case 'right':
        return `translateX(${-offset}px)`;
      default:
        return `translateY(${offset}px)`;
    }
  };

  return (
    <div
      ref={imageRef}
      className={cn('relative overflow-hidden', className)}
      style={{ height }}
    >
      {/* Parallax Image */}
      <div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url(${src})`,
          transform: getTransform(),
        }}
        role="img"
        aria-label={alt}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}

      {/* Content */}
      {children && (
        <div className="relative z-20 h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}