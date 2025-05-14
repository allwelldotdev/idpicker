"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import '@/lib/i18n';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && ['en', 'tr'].includes(savedLang)) {
      i18n.changeLanguage(savedLang);
    }
    setIsLoaded(true);
  }, [i18n]);

  const setLanguage = (lang: string) => {
    if (['en', 'tr'].includes(lang)) {
      i18n.changeLanguage(lang);
      localStorage.setItem('language', lang);
      router.refresh();
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ 
      language: i18n.language, 
      setLanguage,
      t: (key: string) => t(key)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);

const loadTranslationFile = async (lang: string) => {
  try {
    const response = await fetch(`/locales/${lang}/common.json`);
    if (!response.ok) throw new Error('Failed to load translations');
    return await response.json();
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    return null;
  }
};