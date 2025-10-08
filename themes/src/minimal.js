import { Standard } from './standard.js'

export const Minimal = {
  ...Standard,

  surface: {
    'primary': 'hsl(0, 0%, 97%)',
    'secondary': 'hsl(0, 0%, 97%)',
    'radial-gradient': 'radial-gradient(hsl(199deg 98% 85%) 0%, hsl(0deg 0% 100%) 80%)',
    'linear-gradient': 'linear-gradient(162deg, hsl(0deg 0% 100%) 0%, hsl(199deg 0% 97%) 100%)'
    // 'surface-alt': 'hsl(80, 45%, 95%)'
  },

  separator: {
    'primary': 'hsl(0, 0%, 10%)',
    'accent': 'hsl(167, 89%, 43%)'
  },

  title: {

    default: {
      'font-family': '\'Fira Code\', monospace',
      'color': 'hsl(199deg 98% 10%)'
    },

    display: {
      'font-weight': '900',
      'line-height': '1.2',
      'font-size': 'min(54px, max(3.35vw, 32px))'
    },

    primary: {
      'font-family': '\'Fira Code\', monospace',
      'font-size': '2rem',
      'font-weight': '900',
      'line-height': '1.2'
    },

    secondary: {
      'font-size': '1.5rem',
      'font-weight': '900',
      'line-height': '1.3'
    },

    tertiary: {
      'font-size': '1.25rem',
      'font-weight': '900',
      'line-height': '1.4'
    },

    lead: {
      'color': 'hsl(167, 0%, 40%)',
      'font-size': '1.2rem',
      'font-weight': '200',
      'line-height': '1.5'
    },

    logo: {
      'font-weight': '900',
      'line-height': '1.2',
      'font-size': 'min(30px, max(3vw, 32px))'
    },

  },

  text: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'font-weight': '400',
      'font-size': '1rem',
      'line-height': '1.6',
      'color': 'hsl(182, 0%, 30%)'
    },

    small: {
      'font-size': '.8rem',
      'line-height': '1.2',
    }

  },

  button: {

    default: {
      'background': 'transparent',
      'color': 'hsl(0, 0%, 40%)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '999px',
      'padding': '8px 24px',
      'font-family': 'Roboto, sans-serif',
      'font-size': '14px',
      'font-weight': '500',
      'letter-spacing': '.7px',

      'background-hover': 'hsl(0, 0%, 90%)',
      'color-hover': 'hsl(0, 0%, 20%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)'
    },

    cta: {
      'background': 'hsl(167, 89%, 43%)',
      'color': 'hsl(0, 0%, 98%)',

      'background-hover': 'hsl(167, 89%, 38%)',
      'color-hover': 'hsl(0, 0%, 98%)'
    },

    link: {
      'background': 'transparent',
      'border-color': 'transparent',

      'background-hover': 'transparent',
      'color-hover': '#00bd7e'
    },

    tab: {
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': 'hsl(0, 0%, 0%)',
      'background-hover': 'transparent',
      'border-color-hover': 'transparent',

      'border-color-focus': 'transparent'
    },

    'tab-active': {
      'color': 'hsl(0, 0%, 2%)',
      'background': 'transparent',
      'border-style': 'solid',
      'border-color': 'transparent transparent hsl(0, 0%, 2%) transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': 'hsl(0, 0%, 2%)',
      'background-hover': 'transparent',

      'border-color-focus': 'transparent transparent hsl(0, 0%, 2%) transparent'
    },

    tag: {
      'padding': '8px',
      'background': 'transparent',
      'color': 'hsl(0, 0%, 10%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'var(--separator-primary)',
      'border-radius': '6px',
      'font-size': '12px',

      'background-hover': 'hsl(0, 0%, 93%)',
      'color-hover': 'hsl(0, 0%, 0%)'
    },

    'tag-active': {
      'padding': '8px',
      'background': 'hsl(0, 0%, 10%)',
      'color': 'hsl(0, 0%, 98%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(199, 98%, 43%)',
      'border-radius': '6px',
      'font-size': '12px',

      'background-hover': 'hsl(0, 0%, 30%)',
      'color-hover': 'hsl(0, 0%, 90%)'
    },

  },

  card: {

    default: {
      'background': 'transparent',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '2px',
      'padding': 'var(--space-l)',
      'border-radius': '14px'
    },

    cover: {
      'padding': '0',
    },

    resume: {
      'background': 'var(--surface-primary)',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '0 1px 0 0',
      'box-shadow': 'none',
      'padding': '24px 32px',
      'border-radius': '0'
    },

    hero: {
      'background': 'var(--surface-linear-gradient)',
      'border-color': 'transparent',
      'border-style': 'solid',
      'border-width': '1px',
      'box-shadow': 'none',
      'padding': 'var(--space-xl) var(--space-m)',
      'border-radius': '8px'
    }

  },

  resume: {
    'background': 'var(--surface-primary)',
    'header-background': 'var(--surface-primary)',
    'header-border-bottom': '1px solid var(--separator-primary)',
    'header-padding': '0 24px',
  }
}
