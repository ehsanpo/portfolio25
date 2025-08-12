"use client";

import { useState, useEffect } from 'react';

export interface ContentMeta {
  title: string;
  description?: string;
  excerpt?: string;
  publishDate?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  meta: ContentMeta;
  content: string;
  filePath: string;
}

export function useContent(type: 'portfolio' | 'blog') {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/content?type=${type}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch ${type} content`);
        }
        
        const data = await response.json();
        setContent(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error(`Error fetching ${type} content:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [type]);

  return { content, loading, error };
}

// Convenience hooks for specific content types
export function usePortfolioContent() {
  return useContent('portfolio');
}

export function useBlogContent() {
  return useContent('blog');
}
