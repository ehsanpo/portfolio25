import React from 'react';
import { Button } from './Button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  variant?: 'default' | 'glass' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  variant = 'default',
  size = 'md',
  className,
}: PaginationProps) {
  const getVisiblePages = () => {
    const pages: (number | 'ellipsis')[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    // Adjust if we're near the beginning or end
    if (currentPage <= halfVisible) {
      endPage = Math.min(totalPages, maxVisiblePages);
    }
    if (currentPage > totalPages - halfVisible) {
      startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    }
    
    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis');
      }
    }
    
    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis');
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  const getButtonVariant = (isActive: boolean) => {
    if (variant === 'glass') {
      return isActive ? 'gradient' : 'glass';
    }
    if (variant === 'minimal') {
      return isActive ? 'primary' : 'ghost';
    }
    return isActive ? 'primary' : 'outline';
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className={cn('flex items-center justify-center space-x-1', className)} aria-label="Pagination">
      {/* First page */}
      {showFirstLast && currentPage > 1 && (
        <Button
          variant={getButtonVariant(false)}
          size={size}
          onClick={() => onPageChange(1)}
          className={sizeClasses[size]}
          aria-label="Go to first page"
        >
          First
        </Button>
      )}

      {/* Previous page */}
      {showPrevNext && (
        <Button
          variant={getButtonVariant(false)}
          size={size}
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={cn('flex items-center gap-1', sizeClasses[size])}
          aria-label="Go to previous page"
        >
          <ChevronLeft size={16} />
          {size !== 'sm' && 'Previous'}
        </Button>
      )}

      {/* Page numbers */}
      {visiblePages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <div
              key={`ellipsis-${index}`}
              className={cn(
                'flex items-center justify-center text-muted-foreground',
                sizeClasses[size]
              )}
            >
              <MoreHorizontal size={16} />
            </div>
          );
        }

        const isActive = page === currentPage;
        return (
          <Button
            key={page}
            variant={getButtonVariant(isActive)}
            size={size}
            onClick={() => onPageChange(page)}
            className={cn(
              sizeClasses[size],
              isActive && 'font-semibold'
            )}
            aria-label={`Go to page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </Button>
        );
      })}

      {/* Next page */}
      {showPrevNext && (
        <Button
          variant={getButtonVariant(false)}
          size={size}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={cn('flex items-center gap-1', sizeClasses[size])}
          aria-label="Go to next page"
        >
          {size !== 'sm' && 'Next'}
          <ChevronRight size={16} />
        </Button>
      )}

      {/* Last page */}
      {showFirstLast && currentPage < totalPages && (
        <Button
          variant={getButtonVariant(false)}
          size={size}
          onClick={() => onPageChange(totalPages)}
          className={sizeClasses[size]}
          aria-label="Go to last page"
        >
          Last
        </Button>
      )}
    </nav>
  );
}