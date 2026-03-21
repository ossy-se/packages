/**
 * CSS value - any valid CSS string (color, gradient, length, etc.)
 */
export type CssValue = string;

/**
 * Recursive structure for CSS variable groups.
 * Keys are CSS property names (kebab-case or camelCase).
 * Values are either CSS strings or nested groups.
 */
export type CssStyleGroup = {
  [key: string]: CssValue | CssStyleGroup | undefined;
};

/**
 * Surface variant - used for [data-surface="..."] blocks.
 * Supports background, foreground, separator, backdropFilter, and state variants.
 */
export interface SurfaceVariant extends CssStyleGroup {
  background?: CssValue;
  'background-hover'?: CssValue;
  'background-active'?: CssValue;
  foreground?: CssValue;
  'foreground-hover'?: CssValue;
  'foreground-active'?: CssValue;
  separator?: CssValue;
  backdropFilter?: CssValue;
}

/**
 * Space scale - spacing tokens used throughout the design system.
 */
export interface SpaceScale {
  none?: CssValue;
  xxs?: CssValue;
  xs?: CssValue;
  s?: CssValue;
  m?: CssValue;
  l?: CssValue;
  xl?: CssValue;
  xxl?: CssValue;
  [key: string]: CssValue | undefined;
}

/**
 * Max width scale - responsive container widths.
 */
export interface MaxWidthScale {
  xxs?: CssValue;
  xs?: CssValue;
  s?: CssValue;
  m?: CssValue;
  l?: CssValue;
  xl?: CssValue;
  xxl?: CssValue;
  full?: CssValue;
  [key: string]: CssValue | undefined;
}

/**
 * Color palette - foreground, accent, and semantic colors.
 * Cloud themes use either flat (Standard) or nested (CloudDark) structure.
 */
export interface ColorPalette {
  /** Flat structure (Standard, CloudLight) */
  base?: CssValue;
  primary?: CssValue;
  secondary?: CssValue;
  accent?: CssValue;
  info?: CssValue;
  danger?: CssValue;
  'alt-primary'?: CssValue;
  'alt-secondary'?: CssValue;
  /** Nested structure (CloudDark) */
  foreground?: {
    primary?: CssValue;
    secondary?: CssValue;
  };
  [key: string]: CssValue | { primary?: CssValue; secondary?: CssValue } | undefined;
}

/**
 * Surface definitions — flat preview strings (docs / tooling).
 * Aligns with `surfaces` keys: base, primary, accent.
 */
export interface SurfaceDefinitions {
  base?: CssValue;
  primary?: CssValue;
  accent?: CssValue;
  [key: string]: CssValue | undefined;
}

/**
 * Surfaces — named variants for `[data-surface="…"]`.
 * Canonical set: base, primary, accent.
 */
export interface SurfacesMap {
  base?: SurfaceVariant;
  primary?: SurfaceVariant;
  accent?: SurfaceVariant;
  [key: string]: SurfaceVariant | undefined;
}

/**
 * Theme - the complete design system theme structure.
 * Based on cloud-light and cloud-dark (the canonical themes).
 */
export interface Theme {
  /** Spacing scale - maps to --space-* CSS variables */
  space: SpaceScale;
  /** Max width scale - maps to --max-width-* CSS variables */
  'max-width': MaxWidthScale;

  /** Color palette */
  color?: ColorPalette;

  /** Base surface definitions - maps to --surface-* */
  surface: SurfaceDefinitions;

  /** Surface variants - maps to [data-surface="key"] blocks */
  surfaces: SurfacesMap;

  /** Separator colors */
  separator: CssStyleGroup;

  /** Title/heading styles */
  title: CssStyleGroup;

  /** Body text styles */
  text: CssStyleGroup;

  /** Button variant styles */
  button: CssStyleGroup;

  /** Card variant styles */
  card: CssStyleGroup;

  /** Resume-specific styles */
  resume?: CssStyleGroup;

  /** Additional theme sections - allows extensibility */
  [key: string]: SpaceScale | MaxWidthScale | CssStyleGroup | SurfacesMap | ColorPalette | SurfaceDefinitions | undefined;
}

/**
 * Theme identifier - the canonical theme names.
 */
export type ThemeId = 'cloud-light' | 'cloud-dark';
