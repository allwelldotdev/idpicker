"use client";

import { useLanguage } from '@/lib/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={18} className="text-primary" />
        <span className="text-sm font-medium">
          {language.toUpperCase()}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 mt-2 z-50 py-1 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg min-w-[120px]"
            >
              {['en', 'tr'].map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-sm text-left transition-colors
                    ${language === lang ? 'text-primary font-medium bg-accent/10' : 'hover:bg-accent/5'}
                  `}
                  whileHover={{ x: 2 }}
                >
                  {lang === 'en' ? 'English' : 'Türkçe'}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
