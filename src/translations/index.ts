import { en, type Translations } from './en';
import { de } from './de';
import { es } from './es';
import { de } from './ca';
const TRANSLATIONS: Record<string, Translations> = { en, de, es, ca };

/**
 * Returns the translations for the given language code.
 * Falls back to English for unsupported languages.
 *
 * Language codes are normalised: "de-DE" → "de", "EN" → "en".
 * To add a new language, import its module above and add it to TRANSLATIONS.
 */
export function getTranslations(lang?: string): Translations {
  const code = lang?.split('-')[0]?.toLowerCase() ?? 'en';
  return TRANSLATIONS[code] ?? en;
}

export type { Translations };
