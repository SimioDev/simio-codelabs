import type { Locale } from '@/utils/i18n';
import es from './es.json';
import en from './en.json';

const translations = { es, en };

export function useTranslations(lang: Locale = 'es') {
  return translations[lang];
}

export function t(lang: Locale, key: string): any {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }

  return value;
}
