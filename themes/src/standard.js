import { topography } from './patterns/index.js'

export const Standard = {

  space: {
    none: '0',
    xxs: '2px',
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '64px',
    xxl: '128px',
  },

  'max-width': {
    xxs: '320px',
    xs: '414px',
    s: '600px',
    m: '900px',
    l: '1200px',
    xl: '1900px',
    xxl: '2000px',
    full: '100%',
  },

  color: {
    base: 'hsl(199, 90%, 98%)',
    primary: 'hsl(0, 0%, 100%)',
    secondary: 'hsl(0, 0%, 95%)',
    'alt-primary': 'hsl(168, 28%, 40%)',
    accent: 'hsl(167, 89%, 43%)',
    info: 'hsl(199deg 89% 43%)',
    danger: 'hsl(0 89% 43%)'
  },

  surfaces: {

    base: {
      background: 'hsl(199, 90%, 98%)',
      foreground: 'hsl(199, 90%, 10%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    primary: {
      background: 'hsl(0, 0%, 100%)',
      foreground: 'hsl(199, 90%, 10%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    secondary: {
      background: 'hsl(0, 0%, 95%)',
      foreground: 'hsl(199, 90%, 10%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    info: {
      background: 'hsl(199, 89%, 43%)',
      foreground: 'hsl(199, 89%, 10%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    danger: {
      background: 'hsl(0, 89%, 43%)',
      foreground: 'hsl(0, 89%, 10%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    accent: {
      background: 'hsl(167, 89%, 43%)',
      foreground: 'hsl(0, 0%, 100%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    'alt-primary': {
      background: 'hsl(199, 98%, 10%)',
      background: 'hsl(199deg 98% 17%)',
      background: 'hsl(168, 28%, 40%)',
      // background: 'hsl(168, 10%, 24%)',
      // background: 'hsl(167, 1%, 40%)',
      foreground: 'hsl(199deg 98% 98%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    'alt-secondary': {
      background: 'hsl(199, 98%, 10%)',
      background: 'hsl(168, 28%, 5%)',
      background: 'hsl(168, 28%, 35%)',
      foreground: 'hsl(199deg 98% 98%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    'linear-gradient': {
      background: 'linear-gradient(180deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',
      'background-hover': 'linear-gradient(180deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',
      'background-active': 'linear-gradient(180deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',
      foreground: 'hsl(182, 23%, 30%)',
      'foreground-hover': 'hsl(182, 23%, 30%)',
      'foreground-active': 'hsl(182, 23%, 30%)',
    },

  },

  surface: {
    'base': 'var(--color-base)',
    'primary': 'var(--color-primary)',
    'secondary': 'var(--color-secondary)',
    'accent': 'var(--color-accent)',
    'radial-gradient': 'radial-gradient(var(--color-base) 0%, var(--color-primary) 80%)',
    'linear-gradient': 'linear-gradient(180deg, hsl(0deg 0% 100%) 50%, hsl(199deg 98% 97%) 100%)',
    'decorated': `
      linear-gradient(180deg, var(--surface-primary) 0%, transparent 100%),
      ${topography()},
      linear-gradient(321deg, hsl(200, 80%, 85%) 0%, hsl(200, 100%, 97%) 20%, hsl(15, 100%, 95%) 80%, hsl(15, 100%, 85%) 100%)
    `,
  },

  separator: {
    primary: 'hsl(0, 0%, 85%)',
    accent: 'hsl(167, 89%, 43%)'
  },

  title: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'letter-spacing': '1px'
    },

    display: {
      'color': 'hsl(199, 90%, 10%)',
      'font-weight': '900',
      'line-height': '1.4',
      'font-size': 'min(54px, max(3.35vw, 32px))'
    },

    primary: {
      'color': 'hsl(199, 90%, 12%)',
      'font-size': '2.5rem',
      'font-weight': '900',
      'line-height': '1.2',
      'letter-spacing': '1px'
    },

    secondary: {
      'color': 'hsl(199, 90%, 16%)',
      'font-size': '1.5rem',
      'font-weight': '900',
      'line-height': '1.3',
      'letter-spacing': '1px'
    },

    tertiary: {
      'color': 'hsl(199, 20%, 32%)',
      'font-size': '1.2rem',
      'font-weight': '500',
      'line-height': '1.4',
      'letter-spacing': '0.25px'
    },

    lead: {
      'color': 'var(--color-accent)',
      'font-size': '1.3rem',
      'font-weight': '400',
      'line-height': '1.5'
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

    m: {
      'font-size': '.9rem',
      'line-height': '1.2',
    },

    s: {
      'font-size': '.8rem',
      'line-height': '1.2',
    },

    small: {
      'font-size': '.8rem',
      'line-height': '1.2',
    }

  },

  button: {

    default: {
      'font-family': 'Roboto, sans-serif',
      'background': 'hsl(0, 0%, 95%)',
      'color': 'hsl(0, 0%, 40%)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '999px',
      'padding': '8px 24px',
      'font-size': '14px',
      'font-weight': '500',
      'letter-spacing': '.7px',
      'line-height': '1',

      'background-hover': 'hsl(0, 0%, 90%)',
      'color-hover': 'hsl(0, 0%, 20%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)'
    },

    neutral: {
      'color': 'hsl(0, 0%, 40%)',
      'background': 'transparent',
      'border-width': '.5px'
    },

    cta: {
      'background': 'var(--color-accent)',
      'color': 'var(--color-primary)',

      'background-hover': 'hsl(167, 89%, 38%)',
      'color-hover': 'hsl(0, 0%, 98%)',
      'box-shadow': '3px 0 10px hsla(0, 0%, 85%, .75)',
    },

    command: {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'hsl(0, 0%, 99%)',
      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(199deg 89% 43%)'
    },

    'command-danger': {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'hsl(0, 0%, 99%)',
      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(0 89% 43%)'
    },

    link: {
      'padding': '8px',
      'font-weight': '300',
      'background': 'transparent',
      'border-color': 'transparent',

      'background-hover': 'transparent',
      'text-decoration-hover': 'underline'
    },

    tab: {
      color: 'hsl(199, 90%, 20%)',
      'background': 'transparent',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': 'var(--color-accent)',
      'background-hover': 'transparent',
      'border-color-hover': 'transparent transparent hsl(167, 89%, 43%) transparent',

      'border-color-focus': 'transparent transparent hsl(167, 89%, 43%) transparent'
    },

    'tab-active': {
      'background': 'transparent',
      'color': 'var(--color-accent)',
      'border-style': 'solid',
      'border-color': 'transparent transparent var(--color-accent) transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'background-hover': 'transparent',
      'color-hover': 'var(--color-accent)',

      'border-color-focus': 'transparent transparent hsl(167, 89%, 43%) transparent'
    },

    tag: {
      'padding': 'var(--space-s) var(--space-m)',
      'background': 'transparent',
      'color': 'hsl(0, 0%, 30%)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'var(--separator-primary)',
      'border-radius': 'var(--space-m)',
      'font-size': '.8rem',
      'font-weight': '300',

      'background-hover': 'hsl(0, 0%, 90%)'
    },

    'tag-active': {
      'padding': 'var(--space-s) var(--space-m)',
      'background': 'var(--color-accent)',
      'color': 'var(--color-primary)',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'var(--color-accent)',
      'border-radius': 'var(--space-m)',
      'font-size': '.8rem',
      'font-weight': '300',

      'background-hover': 'hsl(167, 89%, 38%)',
      'color-hover': 'hsl(0, 0%, 98%)'
    },

  },

  card: {

    border: {
      'background': 'transparent',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '.5px',
      'padding': 'var(--space-l)',
      'border-radius': 'var(--space-s)'
    },

    shadow: {
      'background': 'hsla(0, 0%, 100%, .5)',
      'backdrop-filter': 'blur(2px)',
      'border-radius': 'var(--space-s)',
      'border-color': 'hsla(0, 0%, 100%, 1)',
      'border-style': 'solid',
      'border-width': '0',
      'box-shadow': '3px 0 10px hsla(0, 0%, 85%, .2)',
      'padding': 'var(--space-l)',
    },

    decorated: {
      'background': 'var(--color-primary)',
      'border-radius': 'var(--space-s)',
      'border-color': 'var(--separator-primary)',
      'border-color': 'var(--color-accent)',
      'border-style': 'solid',
      'border-width': '0 0 0 4px',
      'box-shadow': '3px 0 10px hsla(0, 0%, 85%, .75)',
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
      // 'background': `
      //   ${topography},
      //   linear-gradient(321deg, hsl(200, 80%, 85%) 0%, hsl(200, 100%, 97%) 20%, hsl(15, 100%, 95%) 80%, hsl(15, 100%, 85%) 100%)
      // `,
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
    'background': 'var(--surface-base)'
  }
}
