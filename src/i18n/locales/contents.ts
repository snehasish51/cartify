import { TranslateOptions } from 'i18n-js';
import i18n from '..';

export const contents = (key: string, options?: TranslateOptions) => {
  return i18n.t(key, options);
};
