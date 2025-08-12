"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface Messages {
  [key: string]: any;
}

export function useTranslations(namespace: string) {
  const { currentLocale } = useLanguage();
  const [messages, setMessages] = useState<Messages>({});

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messageModule = await import(`../../messages/${currentLocale}.json`);
        setMessages(messageModule.default);
      } catch (error) {
        console.error(`Failed to load messages for locale ${currentLocale}:`, error);
        // Fallback to English
        try {
          const fallbackModule = await import(`../../messages/en.json`);
          setMessages(fallbackModule.default);
        } catch (fallbackError) {
          console.error('Failed to load fallback messages:', fallbackError);
        }
      }
    };

    loadMessages();
  }, [currentLocale]);

  return function t(key: string): string {
    const keys = key.split('.');
    let value = messages[namespace];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}
