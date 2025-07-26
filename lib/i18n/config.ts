// lib/i18n/config.ts
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'it', 'ar', 'zh', 'de', 'fr'] as const,
}

export type Locale = (typeof i18n)['locales'][number]

export const languages = {
  en: { name: 'English', dir: 'ltr' },
  it: { name: 'Italiano', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'rtl' },
  zh: { name: '中文', dir: 'ltr' },
  de: { name: 'Deutsch', dir: 'ltr' },
  fr: { name: 'Français', dir: 'ltr' },
} as const
