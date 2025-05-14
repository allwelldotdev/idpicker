'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../../public/locales/en/common.json';
import trTranslations from '../../public/locales/tr/common.json';

i18next
  .use(initReactI18next)
  .init({
    defaultNS: 'common',
    fallbackLng: 'en',
    resources: {
      en: {
        common: enTranslations,
      },
      tr: {
        common: trTranslations,
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
