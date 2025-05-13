"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'
// Import translations directly as modules
import enTranslations from '@/translations/en.json'
import trTranslations from '@/translations/tr.json'

// Define recursive type that can handle nested objects of any depth
type TranslationValue = string | { [key: string]: TranslationValue }
type TranslationRecord = { [key: string]: TranslationValue }

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
  translations: {
    [lang: string]: TranslationRecord
  }
}

// Ensure translations are properly typed and available in a format that works in production
const translationsMap = {
  en: enTranslations as TranslationRecord,
  tr: trTranslations as TranslationRecord
};

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  translations: translationsMap
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
  }, [])

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  // Enhanced translation function to handle nested objects
  const t = (key: string): string => {
    try {
      const keys = key.split('.')
      // Use the statically imported translations
      let result: any = translationsMap[language] || translationsMap.en
      
      // Navigate through the nested structure
      for (const k of keys) {
        if (result === undefined || result === null) return key
        result = result[k]
      }
      
      // Return the result if it's a string, otherwise the original key
      return typeof result === 'string' ? result : key
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error)
      return key
    }
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: changeLanguage, 
      t,
      translations: translationsMap
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
