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

const serviceSlugMap: Record<string, string> = {
  'software-a-medida': 'custom-software',
  'diseno-web-responsive': 'responsive-web-design',
  'posicionamiento-seo': 'seo-positioning',
  'posicionamiento-sem': 'sem-positioning',
  'e-mail-marketing': 'e-mail-marketing',
};

const cvSlugMap: Record<string, string> = {
  'desarrollador-web-full-stack': 'full-stack-web-developer',
  'ingeniero-en-software': 'software-engineer',
  'ingeniero-en-informatica': 'computer-science-engineer',
  'experto-en-posicionamiento-seo': 'seo-positioning-specialist',
};

function getMappedPath(pathname: string, from: Locale, to: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 2) return pathname;

  const section = segments[0];
  const slug = segments.slice(1).join('/');

  const map = section === 'services' ? serviceSlugMap
    : section === 'cv' ? cvSlugMap
    : null;

  if (!map) return pathname;

  const mappedSlug = from === 'es'
    ? (map[slug] ?? slug)
    : Object.entries(map).find(([, v]) => v === slug)?.[0] ?? slug;

  const newPrefix = getLocalePrefix(to);
  return `${newPrefix}/${section}/${mappedSlug}`;
}

export function getLocalizedUrl(url: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(url);
  const pathname = url.pathname;

  if (targetLocale === currentLocale) return pathname;

  let cleanPath = pathname;
  const prefix = getLocalePrefix(currentLocale);
  if (cleanPath.startsWith(prefix)) {
    cleanPath = cleanPath.slice(prefix.length) || '/';
  }

  const segments = cleanPath.split('/').filter(Boolean);
  if (segments.length >= 1 && ['services', 'cv'].includes(segments[0])) {
    return getMappedPath(cleanPath, currentLocale, targetLocale);
  }

  return `${getLocalePrefix(targetLocale)}${cleanPath === '/' ? '/' : cleanPath}`;
}