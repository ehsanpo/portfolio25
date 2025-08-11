import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export function Input({ 
  label, 
  error, 
  helper, 
  className, 
  id, 
  ...props 
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium font-basement text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-3 rounded-lg transition-all duration-300 font-kabel',
          'glass-card border border-border/50',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'placeholder:text-muted-foreground',
          'hover:border-primary-500/50',
          error 
            ? 'border-error-500 focus:ring-error-500' 
            : 'focus:ring-primary-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-error-500 font-kabel">{error}</p>
      )}
      {helper && !error && (
        <p className="text-sm text-muted-foreground font-kabel">{helper}</p>
      )}
    </div>
  );
}