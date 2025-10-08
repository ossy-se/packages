import { Standard } from './standard.js'
import { topography } from './patterns/index.js'

export const Tepit = {

  space: Standard.space,
  'max-width': Standard['max-width'],

  color: {
    foreground: {
      primary: 'hsl(207, 70%, 95%)',
      secondary: 'hsl(207, 20%, 80%)'
    },
    accent: 'hsl(23, 100%, 53%)'
  },

  surface: {
    'primary': 'hsl(207, 95%, 8%)',
    'secondary': 'hsl(207, 95%, 10%)',
    'radial-gradient': 'radial-gradient(hsl(199deg 98% 85%) 0%, hsl(0deg 0% 100%) 80%)',
    'linear-gradient': 'linear-gradient(162deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',

    'decorated': `
      linear-gradient(180deg, var(--surface-primary) 0%, transparent 100%),
      ${topography('hsla(354, 80%, 38%, .3)')},
      linear-gradient(180deg, var(--surface-primary) 0%, transparent 100%),
      linear-gradient(-135deg, var(--surface-primary) 20%, hsl(354, 50%, 38%) 100%)
    `,
  },

  surfaces: {
    ...Standard.surfaces,

    base: {
      background: 'hsl(207, 95%, 10%)',
      foreground: 'hsl(207, 70%, 95%)',
      separator: 'hsl(203, 50%, 15%)',
    },

    primary: {
      foreground: 'hsl(207, 70%, 95%)',
      'foreground-hover': 'hsl(207, 70%, 96%)',
      background: 'hsla(207, 95%, 8%, .6)',
      'background-hover': 'hsla(207, 95%, 8%, .7)',
      backdropFilter: 'saturate(180%) blur(10px)',
      separator: 'hsl(203, 50%, 15%)',
    },

    secondary: {
      background: 'hsl(207, 95%, 10%)',
      foreground: 'hsl(207, 70%, 95%)',
      separator: 'hsl(203, 50%, 15%)',
    },

    decorated: {
      background: `
      linear-gradient(180deg, var(--surface-primary) 0%, transparent 100%),
      ${topography('hsla(354, 80%, 38%, .3)')},
      linear-gradient(180deg, var(--surface-primary) 0%, transparent 100%),
      linear-gradient(-135deg, var(--surface-primary) 20%, hsl(354, 50%, 38%) 100%)
    `,
    'background-hover': 'var(--surface-primary)',
    'background-active': 'var(--surface-primary)',
      foreground: 'hsl(182, 23%, 95%)',
    },


  },

  separator: {
    primary: 'hsl(203, 50%, 15%)',
    accent: 'hsl(23, 100%, 53%)'
  },

  title: {

    default: {
      'font-family': 'Work Sans, sans-serif',
      'color': 'var(--color-foreground-primary)',
      'letter-spacing': '1px'
    },

    display: {
      'font-weight': '900',
      'line-height': '1.2',
      'font-size': 'min(54px, max(3.35vw, 32px))',
      'color': 'hsl(207, 70%, 95%)',
      'letter-spacing': '1.5px'
    },

    primary: {
      'font-size': '2rem',
      'font-weight': '900',
      'line-height': '1.2',
      'letter-spacing': '1.2px'
    },

    secondary: {
      'font-size': '1.5rem',
      'font-weight': '600',
      'line-height': '1.3',
      'letter-spacing': '1px'
    },

    tertiary: {
      'font-size': '1.25rem',
      'font-weight': '600',
      'line-height': '1.4',
      'letter-spacing': '0.25px'
    },

    lead: {
      'color': 'var(--color-accent)',
      'font-size': '1.2rem',
      'font-weight': '600',
      'line-height': '1.5',
      'letter-spacing': '0.15px'
    },

    logo: {
      'font-weight': '400',
      'line-height': '1.2',
      'font-size': 'min(42px, max(3vw, 48px))',
      'font-family': 'Fasthand, sans-serif',
      'color': 'hsl(207, 70%, 95%)'
    },

  },

  text: {

    default: {
      'font-family': 'Work Sans, sans-serif',
      'font-weight': '100',
      'font-size': '1rem',
      'line-height': '1.6',
      'letter-spacing': '1px',
      'color': 'var(--color-foreground-secondary)'
    },

    small: {
      'font-size': '.8rem',
      'line-height': '1.2',
    }

  },

  button: {

    default: {
      'background': 'transparent',
      'color': 'var(--color-foreground-secondary)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '16px',
      'padding': '8px 24px',
      'font-family': 'Work Sans, sans-serif',
      'font-size': '1rem',
      'font-weight': '400',

      'background-hover': 'hsl(0, 0%, 90%)',
      'color-hover': 'hsl(0, 0%, 20%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)'
    },

    cta: {
      'background': 'var(--color-accent)',
      'color': 'var(--color-foreground-primary)',

      'background-hover': 'hsl(23, 100%, 43%)',
      'color-hover': 'hsl(0, 0%, 98%)'
    },

    link: {
      'font-weight': '100',
      'font-size': '1rem',
      'background': 'transparent',
      'border-color': 'transparent',

      'background-hover': 'transparent',
      'color-hover': 'hsl(23, 100%, 80%)'
    },

    command: {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'transparent',
      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(199deg 89% 43%)'
    },

    'command-danger': {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'transparent',
      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(0, 89%, 43%)'
    },

    tab: {
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': 'hsl(23, 100%, 53%)',
      'background-hover': 'transparent',
      'border-color-hover': 'transparent transparent hsl(23, 100%, 53%) transparent',

      'border-color-focus': 'transparent transparent hsl(23, 100%, 53%) transparent'
    },

    'tab-active': {
      'color': 'hsl(23, 100%, 53%)',
      'border-style': 'solid',
      'border-color': 'transparent transparent hsl(23, 100%, 53%) transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'background-hover': 'transparent',
      'color-hover': 'hsl(23, 100%, 53%)',

      'border-color-focus': 'transparent transparent hsl(23, 100%, 53%) transparent'
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
      'padding': '8px',
      'background': 'hsla(199, 98%, 43%, .2)',
      'color': 'hsl(0, 0%, 20%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(199, 98%, 43%)',
      'border-radius': '4px',
      'font-size': '12px'
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
