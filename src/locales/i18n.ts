import en from './en/translation.json'
import ja from './ja/translation.json'
import i18n from 'i18next'
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = { en, ja }

i18n
  .use(i18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    keySeparator: false,
    interpolation: { escapeValue: false },
  })

export default i18n
