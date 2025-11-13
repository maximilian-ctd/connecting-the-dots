// i18n Utility Functions

import type { Language } from './translations';

export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/en')) return 'en';
  return 'de'; // Default to German
}

export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === 'de' ? 'en' : 'de';
}

export function getPathForLanguage(lang: Language, currentPath: string): string {
  // Remove existing language prefix
  const pathWithoutLang = currentPath.replace(/^\/(de|en)/, '') || '/';
  return `/${lang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
}

