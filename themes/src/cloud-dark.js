import { base } from './base.js'
import { topography } from './patterns/index.js'

const accent = 'hsl(167, 89%, 43%)'
const accentHover = 'hsl(167, 89%, 38%)'

/**
 * Dark analogue of CloudLight’s base: warm center (hue 15) → cyan edge (199).
 * Extra stops keep a smooth, visible blend like the light theme’s peach→sky wash.
 */
const basePageGradient =
  'radial-gradient(circle at center center, hsla(15, 58%, 22%, 1) 0%, hsla(20, 42%, 13%, 1) 38%, hsl(199, 34%, 10%) 72%, hsl(199, 30%, 7%) 100%)'

/** Same story as light’s linear-gradient: top-left cool → bottom-right hint of warmth. */
const baseLinearGradient =
  'linear-gradient(162deg, hsl(199, 32%, 10%) 0%, hsl(199, 28%, 8%) 42%, hsla(15, 45%, 12%, 0.9) 100%)'

/** `surfaces.base`: radial depth + diagonal wash (top layer first in CSS). */
const baseSurfaceGradient = `${basePageGradient}, ${baseLinearGradient}`

/** Raised-panel rim on dark UI (replaces light gray / glowy shadows). */
const surfaceOutline = 'hsla(199, 16%, 42%, .55)'
const surfaceOutlineMuted = 'hsla(199, 14%, 36%, .4)'
const ctaOutline = 'hsl(167, 55%, 24%)'

/** Standard dark theme — aligned with CloudLight (hue, typography, radii); same accent as light. */
export const CloudDark = {
  ...base,

  color: {
    ...base.color,
    base: 'hsl(199, 28%, 10%)',
    primary: 'hsl(199, 25%, 14%)',
    secondary: 'hsl(199, 22%, 18%)',
    accent,
    foreground: {
      primary: 'hsl(199, 32%, 96%)',
      secondary: 'hsl(199, 14%, 68%)',
    },
  },

  /** Flat tokens for docs / tooling; matches `surfaces` keys (base, primary, accent). */
  surface: {
    base: baseSurfaceGradient,
    primary: 'hsla(199, 28%, 14%, 0.5)',
    accent,
  },

  surfaces: {
    ...base.surfaces,

    base: {
      background: baseSurfaceGradient,
      'background-hover': baseSurfaceGradient,
      'background-active': baseSurfaceGradient,
      foreground: 'hsl(199, 32%, 96%)',
      separator: 'hsla(199, 18%, 22%, 0.9)',
    },

    primary: {
      foreground: 'hsl(182, 23%, 88%)',
      'foreground-hover': 'hsl(182, 25%, 95%)',
      background: 'hsla(199, 28%, 14%, 0.45)',
      'background-hover': 'hsla(199, 28%, 18%, 0.58)',
      backdropFilter: 'saturate(180%) blur(12px)',
      separator: surfaceOutlineMuted,
    },

    accent: {
      ...base.surfaces.accent,
      foreground: 'hsl(0, 0%, 98%)',
      separator: surfaceOutlineMuted,
    },
  },

  separator: {
    ...base.separator,
    primary: 'hsl(199, 18%, 22%)',
    accent,
  },

  title: {
    ...base.title,

    default: {
      'font-family': 'Roboto, sans-serif',
      'font-weight': '900',
      'color': 'hsl(199, 40%, 92%)',
      'letter-spacing': '1px',
    },

    display: {
      'line-height': '1.1',
      'font-size': 'min(80px, max(2.9vw, 32px))',
      'font-family': 'Roboto, sans-serif',
      'font-weight': '700',
      'color': 'hsl(199, 35%, 96%)',
    },

    primary: {
      'font-size': '2rem',
      'line-height': '1.2',
      'letter-spacing': '1px',
      'font-weight': '900',
    },

    secondary: {
      'font-size': '1.5rem',
      'line-height': '1.3',
      'letter-spacing': '1px',
      'font-weight': '900',
    },

    tertiary: {
      'font-size': '1.25rem',
      'line-height': '1.4',
      'letter-spacing': '0.25px',
      'font-weight': '500',
    },

    lead: {
      'color': accent,
      'font-size': '1.2rem',
      'line-height': '1.5',
      'letter-spacing': '0.15px',
    },

    logo: {
      'font-family': 'Roboto, sans-serif',
      'line-height': '1',
      'font-size': 'min(30px, max(3vw, 32px))',
      'color': 'hsl(199, 35%, 96%)',
    },
  },

  text: {
    ...base.text,

    default: {
      'font-family': 'Roboto, sans-serif',
      'font-weight': '500',
      'font-size': '1rem',
      'line-height': '1.6',
      'color': 'hsl(182, 12%, 72%)',
    },
  },

  button: {
    ...base.button,

    default: {
      'background': 'transparent',
      'color': 'hsl(199, 12%, 70%)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '999px',
      'padding': '8px 16px',
      'font-family': 'Roboto, sans-serif',
      'font-size': '14px',
      'font-weight': '500',
      'letter-spacing': '.7px',

      'background-hover': 'hsla(199, 22%, 20%, .85)',
      'color-hover': 'hsl(199, 35%, 96%)',

      'background-disabled': 'hsla(199, 15%, 14%, .5)',
      'color-disabled': 'hsl(199, 10%, 42%)',
    },

    header: {
      'color': 'hsl(199, 12%, 58%)',
      'background': 'transparent',
      'border-width': '.5px',
    },

    secondary: {
      'background': 'hsla(199, 22%, 18%, .85)',
      'color': 'hsl(199, 30%, 92%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': surfaceOutlineMuted,

      'background-hover': 'hsla(199, 22%, 24%, .92)',
      'color-hover': 'hsl(199, 35%, 98%)',
    },

    cta: {
      'background': accent,
      'color': 'hsl(0, 0%, 98%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': ctaOutline,
      'box-shadow': 'none',

      'background-hover': accentHover,
      'color-hover': 'hsl(0, 0%, 98%)',
    },

    link: {
      'button-link-background': 'transparent',
      'button-link-border-color': 'transparent',

      'button-link-background-hover': 'transparent',
      'button-link-color-hover': accent,
    },

    command: {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'hsla(199, 22%, 14%, .9)',
      'background-hover': 'hsla(199, 22%, 18%, .95)',
      'color-hover': 'hsl(199deg 89% 43%)',
    },

    'command-danger': {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'hsla(199, 22%, 14%, .9)',
      'background-hover': 'hsla(199, 22%, 18%, .95)',
      'color-hover': 'hsl(0 89% 43%)',
    },

    tab: {
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': accent,
      'background-hover': 'transparent',
      'border-color-hover': `transparent transparent ${accent} transparent`,

      'border-color-focus': `transparent transparent ${accent} transparent`,
    },

    'tab-active': {
      'color': accent,
      'border-style': 'solid',
      'border-color': `transparent transparent ${accent} transparent`,
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'background-hover': 'transparent',
      'color-hover': accent,

      'border-color-focus': `transparent transparent ${accent} transparent`,
    },

    tag: {
      'padding': 'var(--space-s) var(--space-m)',
      'background': 'transparent',
      'color': 'hsl(199, 14%, 68%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'var(--separator-primary)',
      'border-radius': 'var(--space-m)',
      'font-size': '.8rem',
      'font-weight': '300',

      'background-hover': 'hsla(199, 18%, 22%, 0.55)',
    },

    'tag-active': {
      'padding': 'var(--space-s) var(--space-m)',
      'background': 'hsla(167, 89%, 43%, .22)',
      'color': 'hsl(167, 70%, 88%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': accent,
      'border-radius': 'var(--space-m)',
      'font-size': '.8rem',
      'font-weight': '300',
      'background-hover': 'hsla(167, 89%, 43%, .32)',
      'color-hover': 'hsl(0, 0%, 98%)',
    },
  },

  card: {
    ...base.card,

    default: {
      'background': 'hsl(199, 26%, 12%)',
      'border-color': surfaceOutline,
      'border-style': 'solid',
      'border-width': '1px',
      'box-shadow': 'none',
      'padding': '32px',
      'border-radius': '24px',
    },

    cover: {
      'padding': '0',
    },

    resume: {
      'background': 'hsl(199, 26%, 12%)',
      'border-color': surfaceOutline,
      'border-style': 'solid',
      'border-width': '0 1px 0 0',
      'box-shadow': 'none',
      'padding': '24px 32px',
      'border-radius': '0',
    },

    hero: {
      'background': `
        ${topography('hsla(199, 40%, 28%, .35)')},
        linear-gradient(321deg, hsl(200, 40%, 16%) 0%, hsl(200, 32%, 11%) 20%, hsl(15, 35%, 14%) 80%, hsl(15, 40%, 11%) 100%)
      `,
      'border-color': surfaceOutline,
      'border-style': 'solid',
      'border-width': '1px',
      'box-shadow': 'none',
      'padding': 'var(--space-xl) var(--space-m)',
      'border-radius': '25px',
    },
  },

  resume: {
    ...base.resume,
    'header-border-bottom': '1px solid var(--separator-primary)',
    'header-padding': '0 24px',
    'background': baseLinearGradient,
  },
}
