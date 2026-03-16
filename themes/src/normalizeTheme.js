import { base } from './base.js'

/**
 * Normalizes a theme to ensure it has the required structure for the design system.
 * Merges missing required fields from base. Use this when consuming themes
 * from external sources or when themes may be incomplete.
 *
 * @param {object} theme - Raw theme object (e.g. CloudLight, CloudDark)
 * @returns {object} Normalized theme with guaranteed structure
 */
export function normalizeTheme(theme) {
  if (!theme) return null

  return {
    ...theme,
    space: theme.space ?? base.space,
    'max-width': theme['max-width'] ?? theme.maxWidth ?? base['max-width'],
    color: theme.color ?? base.color,
    surfaces: { ...base.surfaces, ...theme.surfaces },
    separator: { ...base.separator, ...theme.separator },
    title: { ...base.title, ...theme.title },
    text: { ...base.text, ...theme.text },
    button: { ...base.button, ...theme.button },
    card: { ...base.card, ...theme.card },
    resume: { ...base.resume, ...theme.resume },
  }
}
