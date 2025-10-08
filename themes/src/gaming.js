import { Standard } from './standard.js'
import { topography } from './patterns/index.js'

export const Gaming = {

  space: Standard.space,
  'max-width': Standard['max-width'],

  surface: {
    'primary': 'hsl(325, 93%, 2%)',
    'secondary': 'hsl(325, 93%, 2%)',
    'linear-gradient': 'linear-gradient(180deg, hsl(325, 93%, 6%) 0%, hsl(325, 93%, 2%) 50%)',
    'radial-gradient': 'radial-gradient(hsl(325, 93%, 15%) 0%, hsl(325, 93%, 2%) 50%)'
  },

  separator: {
    'primary': 'hsl(325, 80%, 18%)',
    'accent': 'hsl(26, 82%, 53%)'
  },

  title: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'color': 'hsl(182, 83%, 54%)',
      'letter-spacing': '1px'
    },

    display: {
      'font-weight': 'normal',
      'line-height': '1.2',
      'font-weight': '700',
      'font-size': 'min(54px, max(3.35vw, 32px))'
    },

    primary: {
      'font-size': '2rem',
      'font-weight': '700',
      'line-height': '1.2',
      'letter-spacing': '1px'
    },

    secondary: {
      'font-size': '1.5rem',
      'font-weight': '700',
      'line-height': '1.3',
      'letter-spacing': '1px'
    },

    tertiary: {
      'font-size': '1.25rem',
      'font-weight': '400',
      'line-height': '1.4',
      'letter-spacing': '0.25px'
    },

    lead: {
      'color': 'hsl(182, 80%, 40%)',
      'font-size': '1.2rem',
      'font-weight': '700',
      'line-height': '1.5',
      'letter-spacing': '0.15px'
    },

    logo: {
      'font-family': '\'Alfa Slab One\', monospace',
      'font-weight': '700',
      'line-height': '1.2',
      'font-size': 'min(30px, max(3vw, 32px))'
    },

  },

  text: {

    default: {
      'font-family': '\'Tilt Neon\', sans-serif',
      'font-weight': '400',
      'font-size': '1rem',
      'line-height': '1.6',
      'color': 'hsl(182, 83%, 94%)'
    },

    small: {
      'font-size': '1rem',
    }

  },

  button: {

    default: {
      'background': 'transparent',
      'color': 'hsl(41, 96%, 56%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(41, 96%, 56%)',
      'border-radius': '2px',
      'padding': '8px 24px',
      'font-family': '\'Share Tech Mono\', monospace',
      'font-size': '16px',
      'font-weight': '400',

      'background-hover': 'hsla(26, 82%, 33%, .1)',
      'color-hover': 'hsl(26, 82%, 73%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)'
    },

    cta: {
      'background': 'linear-gradient(90deg, hsl(50, 96%, 57%) 0%, hsl(41, 96%, 56%) 50%, hsl(26, 82%, 53%) 100%)',
      'color': 'hsl(23, 84%, 5%)',
      'box-shadow': '0 3px 6px rgba(0,0,0,.16)',
      'border-color': 'hsl(26, 82%, 53%)',

      'background-hover': 'linear-gradient(90deg, hsl(50, 96%, 57%) 0%, hsl(41, 96%, 56%) 50%, hsl(26, 82%, 53%) 100%)',
      'color-hover': 'hsl(23, 84%, 5%)'
    },

    link: {
      'background': 'transparent',
      'color': 'hsl(41, 96%, 56%)',
      'border-color': 'transparent',

      'background-hover': 'transparent',
      'color-hover': 'hsl(41, 96%, 36%)'
    },

    tab: {
      'color': 'hsl(41, 96%, 56%)',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'padding': '16px 24px',

      'color-hover': 'hsl(41, 96%, 26%)',
      'background-hover': 'hsla(26, 82%, 33%, .3)',

      'border-color-focus': 'transparent transparent hsl(41, 96%, 56%) transparent'
    },

    'tab-active': {
      'color': 'hsl(41, 96%, 56%)',
      'border-style': 'solid',
      'border-color': 'transparent transparent hsl(41, 96%, 56%) transparent',
      'border-width': '4px 0 4px 0',
      'padding': '16px 24px',

      'border-color-focus': 'transparent transparent hsl(41, 96%, 56%) transparent'
    },

    tag: {
      'padding': '8px',
      'background': 'hsla(325, 93%, 4%, .9)',
      'color': 'hsl(0, 0%, 90%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(325, 80%, 30%)',
      'border-radius': '4px',
      'font-size': '12px',

      'background-hover': 'hsla(325, 93%, 15%, 1)',
      'color-hover': 'hsl(0, 0%, 90%)',

      'background-focus': 'hsla(325, 93%, 4%, .9)'
    },

    'tag-active': {
      'padding': '8px',
      'background': 'hsla(325, 93%, 15%, 1)',
      'color': 'hsl(0, 0%, 90%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(325, 80%, 30%)',
      'border-radius': '4px',
      'font-size': '12px',

      'background-hover': 'hsla(325, 93%, 15%, 1)',
      'color-hover': 'hsl(0, 0%, 90%)',

      'background-focus': 'hsla(325, 93%, 15%, 1)'
    },

  },

  card: {

    default: {
      'background': 'hsla(325, 93%, 4%, .9)',
      'border-color': 'hsl(325, 80%, 18%)',
      'border-style': 'solid',
      'border-width': '1px',
      'box-shadow': '3px 0 10px hsla(325, 80%, 18%, .75)',
      'padding': '32px',
      'border-radius': '8px'
    },

    cover: {
      'padding': '0',
    },

    resume: {
      'background': 'hsla(325, 93%, 4%, .9)',
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
