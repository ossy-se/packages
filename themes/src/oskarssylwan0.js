import { Standard } from './standard.js'
import { topography } from './patterns/index.js'

export const OskarsSylwan = {

  space: Standard.space,
  'max-width': Standard['max-width'],

  color: {
    primary: 'hsl(0, 0%, 99%)',
    secondary: 'hsl(199deg 98% 90%)',
    accent: 'hsl(167, 89%, 43%)',
    info: 'hsl(199deg 89% 43%)',
    danger: 'hsl(0 89% 43%)',
    'alt-primary':  'hsl(199deg 98% 17%)',
    'alt-secondary': 'hsl(199, 98%, 10%)'
  },

  surface: {
    'primary': 'var(--color-primary)',
    'secondary': 'var(--color-secondary)',
    'accent': 'var(--color-accent)',
    'alt-primary': 'var(--color-alt-primary)',
    'alt-secondary': 'var(--color-alt-secondary)',
    'radial-gradient': 'radial-gradient(hsl(199deg 98% 85%) 0%, hsl(0deg 0% 100%) 80%)',
    'linear-gradient': 'linear-gradient(162deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 99%) 100%)',
    'decorated': `
      linear-gradient(180deg, var(--surface-primary) 0%, transparent 100%),
      ${topography()},
      linear-gradient(321deg, hsl(200, 80%, 85%) 0%, hsl(200, 100%, 97%) 20%, hsl(15, 100%, 95%) 80%, hsl(15, 100%, 85%) 100%)
    `,
    // 'alt': 'hsl(80, 45%, 95%)'
  },

  separator: {
    primary: 'hsl(0, 0%, 90%)',
    accent: 'hsl(167, 89%, 43%)'
  },

  title: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'color': 'var(--color-alt-primary)',
      'letter-spacing': '1px'
    },

    display: {
      'font-weight': '900',
      'line-height': '1.4',
      'font-size': 'min(54px, max(3.35vw, 32px))'
    },

    primary: {
      'font-size': '2rem',
      'font-weight': '900',
      'line-height': '1.2',
      'letter-spacing': '1px'
    },

    secondary: {
      'font-size': '1.5rem',
      'font-weight': '900',
      'line-height': '1.3',
      'letter-spacing': '1px'
    },

    tertiary: {
      'font-size': '1.25rem',
      'font-weight': '900',
      'line-height': '1.4',
      'letter-spacing': '0.25px'
    },

    lead: {
      'color': 'hsl(167, 89%, 43%)',
      'font-size': '1.2rem',
      'font-weight': '600',
      'line-height': '1.5',
      'letter-spacing': '0px'
    },

  },

  text: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'font-weight': '300',
      'font-size': '1.1rem',
      'line-height': '1.6',
      'color': 'hsl(182, 23%, 30%)'
    },

    small: {
      'font-size': '.8rem',
      'line-height': '1.2',
    }

  },

  button: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'background': 'transparent',
      'color': 'hsl(0, 0%, 50%)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '16px',
      'padding': '8px 24px',
      'font-size': '16px',
      'font-weight': '500',
      'letter-spacing': '.7px',

      'background-hover': 'hsl(0, 0%, 90%)',
      'color-hover': 'hsl(0, 0%, 20%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)'
    },

    cta: {
      'background': 'var(--color-accent)',
      'color': 'var(--color-primary)',

      'background-hover': 'hsl(167, 89%, 38%)',
      'color-hover': 'hsl(0, 0%, 98%)'
    },

    link: {
      'font-weight': '300',
      'background': 'transparent',
      'border-color': 'transparent',

      'background-hover': 'transparent',
      'text-decoration-hover': 'underline'
    },

    'link-alt': {
      'color': 'var(--color-primary)',
      'font-weight': '300',
      'background': 'transparent',
      'border-color': 'transparent',
      'padding': '0',

      'background-hover': 'transparent',
      'color-hover': 'var(--color-secondary)',
      'text-decoration-hover': 'underline'
    },

    tab: {
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',
      'font-weight': '300',
      'color': 'var(--color-alt-secondary)',

      'color-hover': 'var(--color-accent)',
      'background-hover': 'transparent',
      'border-color-hover': 'transparent transparent hsl(167, 89%, 43%) transparent',

      'border-color-focus': 'transparent transparent hsl(167, 89%, 43%) transparent'
    },

    'tab-active': {
      'color': 'hsl(167, 89%, 43%)',
      'border-style': 'solid',
      'border-color': 'transparent transparent hsl(167, 89%, 43%) transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'background-hover': 'transparent',
      'color-hover': 'hsl(167, 89%, 43%)',

      'border-color-focus': 'transparent transparent hsl(167, 89%, 43%) transparent'
    },

    tag: {
      'padding': '8px',
      'background': 'hsl(0, 0%, 95%)',
      'color': 'hsl(0, 0%, 30%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(0, 0%, 90%)',
      'border-radius': '4px',
      'font-size': '12px',

      'background-hover': 'hsl(0, 0%, 90%)'
    },

    'tag-active': {
      'active-padding': '8px',
      'active-background': 'hsla(199, 98%, 43%, .2)',
      'active-color': 'hsl(0, 0%, 20%)',
      'active-border-width': '1px',
      'active-border-style': 'solid',
      'active-border-color': 'hsl(199, 98%, 43%)',
      'active-border-radius': '4px',
      'active-font-size': '12px'
    },

  },

  card: {

    default: {
      'background': 'hsl(0, 0%, 100%)',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '1px',
      'box-shadow': '3px 0 10px hsla(0, 0%, 85%, .75)',
      'padding': '32px',
      'border-radius': '8px'
    },

    cover: {
      'padding': '0',
    },

    resume: {
      'background': 'hsl(0, 0%, 100%)',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '0 1px 0 0',
      'box-shadow': 'none',
      'padding': '24px 32px',
      'border-radius': '0'
    },

    hero: {
      'background': `
        ${topography},
        linear-gradient(321deg, hsl(200, 80%, 85%) 0%, hsl(200, 100%, 97%) 20%, hsl(15, 100%, 95%) 80%, hsl(15, 100%, 85%) 100%)
      `,
      'border-color': 'transparent',
      'border-style': 'solid',
      'border-width': '1px',
      'box-shadow': '3px 0 10px hsla(0, 0%, 85%, .75)',
      'padding': 'var(--space-xl) var(--space-m)',
      'border-radius': '25px'
    }

  },

  resume: {
    'header-border-bottom': '1px solid var(--separator-primary)',
    'header-padding': '0 24px',
    'background': 'var(--surface-linear-gradient)'
  }
}
