import type { Locale } from './i18n-config';

// We enumerate all dictionaries here for better security and bundler analysis
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  hi: () => import('./dictionaries/hi.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const key = (locale === 'hi' ? 'hi' : 'en') as Locale;
  return dictionaries[key]();
};
