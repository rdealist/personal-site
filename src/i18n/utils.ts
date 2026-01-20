/**
 * i18n Utility Functions
 * Helper functions for internationalization
 */

import { useLocale } from 'next-intl';
import type { Locale } from './config';

// Re-export Locale type for convenience
export type { Locale };

/**
 * Get localized URL for a given path
 */
export function getLocalizedUrl(path: string, locale: Locale): string {
  const basePath = locale === 'zh' ? '' : `/${locale}`;
  return `${basePath}${path}`;
}

/**
 * Format date according to locale
 */
export function formatDate(
  date: Date,
  locale: Locale,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
  };

  return date.toLocaleDateString(localeMap[locale], options);
}

/**
 * Format number according to locale
 */
export function formatNumber(
  num: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions
): string {
  const localeMap: Record<Locale, string> = {
    en: 'en-US',
    zh: 'zh-CN',
  };

  return num.toLocaleString(localeMap[locale], options);
}

/**
 * Get text direction for locale
 */
export function getTextDirection(locale: Locale): 'ltr' | 'rtl' {
  // Both English and Chinese are LTR languages
  // Add more locales here as needed
  return 'ltr';
}

/**
 * Check if a translation key exists
 */
export function hasTranslation(
  namespace: string,
  key: string,
  locale: Locale
): boolean {
  try {
    const messages = require(`@/messages/${locale}.json`);
    return namespace.split('.').reduce((obj, part) => obj?.[part], messages)?.[key] !== undefined;
  } catch {
    return false;
  }
}

/**
 * Get all available locales
 */
export function getAllLocales(): Locale[] {
  return ['en', 'zh'];
}

/**
 * Get locale display name in native language
 */
export function getLocaleDisplayName(locale: Locale): string {
  const displayNames: Record<Locale, string> = {
    en: 'English',
    zh: '中文',
  };
  return displayNames[locale];
}

/**
 * Get locale flag emoji
 */
export function getLocaleFlag(locale: Locale): string {
  const flags: Record<Locale, string> = {
    en: '🇺🇸',
    zh: '🇨🇳',
  };
  return flags[locale];
}

/**
 * Hook for using localized date formatting
 */
export function useLocalizedDateFormat() {
  const locale = useLocale() as Locale;

  return (date: Date, options?: Intl.DateTimeFormatOptions) =>
    formatDate(date, locale, options);
}

/**
 * Hook for using locale-aware utilities
 */
export function useLocaleUtils() {
  const locale = useLocale() as Locale;

  return {
    locale,
    formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) =>
      formatDate(date, locale, options),
    formatNumber: (num: number, options?: Intl.NumberFormatOptions) =>
      formatNumber(num, locale, options),
    textDirection: getTextDirection(locale),
    displayName: getLocaleDisplayName(locale),
    flag: getLocaleFlag(locale),
    isDefaultLocale: locale === 'zh',
  };
}
