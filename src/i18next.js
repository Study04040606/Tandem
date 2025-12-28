import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    fallbackLng: 'de',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  backend: {
    loadPath: '/Tandem/locales/{{lng}}/{{ns}}.json', //изметить путь на продакшене
  }    
  });

export default i18n;