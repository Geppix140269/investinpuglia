// lib/i18n/dictionaries.ts
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}
