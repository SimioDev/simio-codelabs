export type Locale = 'es' | 'en';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en'];

export function getLocalizedUrl(path: string, locale: Locale): string {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path}`;
}

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const firstSegment = pathname.split('/')[1];

  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return defaultLocale;
}

export function stripLocaleFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (locales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  return '/' + segments.join('/');
}
