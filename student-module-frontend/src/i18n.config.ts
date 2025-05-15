import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: ['en', 'tr'],
    ns: ['home', 'about'], // Changed namespace
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}/translation.json', // Updated path
    },
    detection: {
      order: ['path', 'localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
