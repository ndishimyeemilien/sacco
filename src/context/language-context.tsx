
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { en } from '@/locales/en';
import { fr } from '@/locales/fr';
import { rw } from '@/locales/rw';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string, options?: { [key: string]: string | number }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: { [key: string]: any } = {
  en,
  fr,
  rw,
};

const getTranslation = (obj: any, key: string, locale: string) => {
    const keys = key.split('.');
    let result = obj[locale];
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
        console.warn(`Translation not found for key: ${key} in locale: ${locale}`);
        return key;
        }
    }
    return result;
};


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('en');

  const t = useCallback((key: string, options?: { [key: string]: string | number }) => {
    let text = getTranslation(translations, key, locale);
    if (options) {
        Object.keys(options).forEach((k) => {
            text = text.replace(new RegExp(`{{${k}}}`, 'g'), options[k]);
        });
    }
    return text;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
