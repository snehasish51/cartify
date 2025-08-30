import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';
import hi from './locales/hi.json';

const locales = RNLocalize.getLocales();
const i18n = new I18n();
if (Array.isArray(locales)) {
  i18n.locale = locales[0]?.languageTag ? locales[0].languageTag : 'en';
}
i18n.enableFallback = true;
i18n.defaultLocale = 'en';

i18n.translations = {
  en,
  hi,
};

export default i18n;
