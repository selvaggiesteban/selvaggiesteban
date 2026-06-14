import es from './es.json';
import en from './en.json';

const dictionaries = { es, en } as const;

export type Locale = keyof typeof dictionaries;
export type TranslationKey = string;

export function getTranslations(locale: Locale) {
  const dict = dictionaries[locale] || dictionaries.es;
  return dict;
}

export function t(locale: Locale, key: string): string {
  const dict = getTranslations(locale);
  const keys = key.split('.');
  let value: any = dict;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  if (pathname.startsWith('/en')) return 'en';
  return 'es';
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export function getLocalePrefix(locale: Locale): string {
  return locale === 'es' ? '/es' : '/en';
}

export function localizedPath(locale: Locale, path: string): string {
  const prefix = getLocalePrefix(locale);
  return `${prefix}${path}`;
}