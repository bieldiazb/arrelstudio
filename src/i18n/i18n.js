import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ca from './locales/ca.json'
import es from './locales/es.json'

const savedLang = localStorage.getItem('i18nextLng')
const browserLang = navigator.language?.startsWith('es') ? 'es' : 'ca'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ca: { translation: ca },
      es: { translation: es },
    },
    lng: savedLang || browserLang,
    fallbackLng: 'ca',
    interpolation: { escapeValue: false },
  })

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng)
})

export default i18n