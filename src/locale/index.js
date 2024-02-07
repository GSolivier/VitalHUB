import { Platform, NativeModules } from 'react-native'
import { I18n } from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const i18n = new I18n();

const normalizeTranslate = {
    'en_US': 'en_US',
    'pt_BR': 'pt_BR',
    'en': 'en_US',
    'pt_US': 'pt_BR',
  }

const getLanguageByDevice = () => {
    return Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale // Adquire o idioma no device iOS
      : NativeModules.I18nManager.localeIdentifier // Adquire o idioma no device Android
  }

  i18n.translations = {
    'en_US': en,
    'pt_BR': pt,
  }

  const setLanguageToI18n = () => {
    const language = getLanguageByDevice()
    const translateNormalize = normalizeTranslate[language]
    const iHaveThisLanguage = i18n.translations.hasOwnProperty(translateNormalize)
    iHaveThisLanguage
      ? i18n.locale = translateNormalize
      : i18n.defaultLocale = 'en_US'
  }

setLanguageToI18n()


export default function translate(key){
    return i18n.t(key)
}