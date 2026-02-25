'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

type Language = 'en' | 'es';

const translations: Record<Language, Record<string, string>> = { en, es };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('latino-lang') as Language | null;
    if (stored === 'en' || stored === 'es') {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('latino-lang', newLang);
    document.documentElement.lang = newLang;
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang][key] ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
