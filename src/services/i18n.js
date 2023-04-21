import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ka'],
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18next;
