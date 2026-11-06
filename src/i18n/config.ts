export const SITE_URL = 'https://xavierjodoin.com';
export const CONTACT_EMAIL = 'hello@xavierjodoin.com';

export type Locale = 'en' | 'fr';
export const locales: Locale[] = ['en', 'fr'];

export const htmlLang: Record<Locale, string> = { en: 'en-CA', fr: 'fr-CA' };
export const ogLocale: Record<Locale, string> = { en: 'en_CA', fr: 'fr_CA' };

export const homePath: Record<Locale, string> = { en: '/', fr: '/fr/' };

export const absolute = (path: string) => new URL(path, SITE_URL).toString();

export const mailto = (locale: Locale) => {
  const subject = locale === 'fr' ? 'Projet IA — appel découverte' : 'AI project — discovery call';
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
};

/** Alternate URLs for a page, keyed by locale. Used for hreflang + the language switch. */
export type Alternates = Partial<Record<Locale, string>>;
