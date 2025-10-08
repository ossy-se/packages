import { Standard } from './standard.js'

export const PlexusSanitas = {
  ...Standard,

  surface: {
    ...Standard.surface,
    'radial-gradient': 'radial-gradient(hsl(199deg 98% 85%) 0%, hsl(0deg 0% 100%) 80%)',
    'linear-gradient': 'linear-gradient(162deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',
    'accent': 'hsl(99, 22%, 53%)',
    "elevated": "hsl(78, 33%, 100%)",
    "elevated-box-shadow": "2px 2px 5px hsla(0, 0%, 0%, .2)",
  },

  surfaces: {
    ...Standard.surfaces,

    decorated: {
      background: `
      bottom right/ contain no-repeat url('https://d1yuixo7x29bj4.cloudfront.net/vrSn7bi0_xiS9tYvtx9UN/dx36yLKqsgmJeOnPQia-1.png'),
      bottom left/ contain no-repeat url('https://d1yuixo7x29bj4.cloudfront.net/vrSn7bi0_xiS9tYvtx9UN/zzMz3L7Ym5J4Y7Vyzm_iN.png'),
      linear-gradient(180deg, hsl(201deg 100% 99%) 0%, hsl(60deg 20% 99%) 50%, 	hsl(80, 45%, 95%) 100%)
    `,
      'background-hover': 'hsl(80, 45%, 94%)',
      'background-active': 'hsl(80, 45%, 90%)',
      foreground: 'hsl(31, 94%, 61%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    primary: {
      background: 'hsl(78, 33%, 99%)',
      foreground: 'hsl(99, 22%, 53%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    secondary: {
      background: 'hsl(80, 45%, 95%)',
      foreground: 'hsl(99, 22%, 53%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    accent: {
      background: 'hsl(99, 22%, 53%)',
      foreground: 'hsl(78, 33%, 99%)',
      separator: 'hsl(99, 22%, 48%)',
    },
    
  },

  separator: {
    primary: 'hsl(0, 0%, 90%)',
    accent: 'hsl(167, 89%, 43%)'
  },

  title: {

    default: {
      'font-family': "'Tilt Neon', sans-serif",
    },

    display: {
      'font-weight': '400',
      'line-height': '1.2',
      'font-size': '2rem',
      'color': "#f9a03f",
    },

    primary: {
      'font-size': '2rem',
      'font-weight': '400',
      'line-height': '1.2',
      'color': '#7ea16b',
    },

    secondary: {
      'font-size': '1.5rem',
      'font-weight': '200',
      'line-height': '1.3',
      'letter-spacing': '1px',
      'color': 'hsl(58, 10%, 34%)',
    },

    tertiary: {
      'font-size': '1.25rem',
      'font-weight': '600',
      'line-height': '1.4',
      "color": "hsl(99, 22%, 53%)",
    },

    alt: {
      'color': '#f9a03f',
      'font-size': '2rem',
      'font-weight': '400',
    },

    lead: {
      'color': 'hsl(167, 89%, 43%)',
      'font-size': '1.2rem',
      'font-weight': '900',
      'line-height': '1.5',
      'letter-spacing': '0.15px'
    },

    logo: {
      'font-weight': '700',
      'font-size': '2rem',
      'color': "#7ea16b",
    },

  },

  text: {

    default: {
      'font-family': "'Tilt Neon', sans-serif",
      'font-weight': '400',
      'font-size': '1rem',
      'line-height': '1.6',
      'color': 'hsl(182, 23%, 30%)'
    },

    secondary: {
      'color': 'hsl(58, 10%, 54%)'
    },

    small: {
      'font-size': '.8rem',
      'line-height': '1.2',
    }

  },

  button: {

    default: {
      'background': 'hsl(99, 22%, 93%)',
      'color': 'hsl(80, 45%, 40%)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '16px',
      'padding': '8px 24px',
      'font-family': 'Roboto, sans-serif',
      'font-size': '16px',
      'font-weight': '700',
      'letter-spacing': '.7px',

      'background-hover': 'hsl(99, 22%, 90%)',
      'color-hover': 'hsl(0, 0%, 20%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)'
    },

    cta: {
      'background': 'hsl(99, 22%, 53%)',
      'color': '#fff',

      'background-hover': 'hsl(99, 22%, 43%)',
      'color-hover': 'hsl(0, 0%, 98%)'
    },

    link: {
      'background': 'transparent',
      'color': 'hsl(80, 45%, 40%)',
      'border-color': 'transparent',
      "padding": '4px',
      "font-weight": '400',
      "font": "'Tilt Neon', sans-serif",

      'background-hover': 'transparent',
      'color-hover': 'hsl(99, 22%, 43%)'
    },

    tab: {
      'font-family': '"Tilt Neon", sans-serif',
      'color': 'hsl(80, 45%, 40%)',
      'background': 'transparent',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': 'hsl(90, 30%, 35%)',
      'background-hover': 'hsl(99, 22%, 93%)',
      'border-color-hover': 'transparent',

      'border-color-focus': 'transparent',
      'background-focus': 'hsl(99, 22%, 93%)',
    },

    'tab-active': {
      'font-family': '"Tilt Neon", sans-serif',
      'background': 'transparent',
      'color': 'hsl(80, 45%, 40%)',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'background-hover': 'transparent',
      'color-hover': 'hsl(167, 89%, 43%)',

      'border-color-focus': 'transparent'
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
      'background': 'hsl(78, 33%, 100%)',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '1px 0 0 1px',
      'box-shadow': '3px 3px 0px 3px #7ea16b',
      'padding': 'var(--space-l)',
      'border-radius': '24px',
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
    'header-border-bottom': '1px solid var(--separator-primary)',
    'header-padding': '0 24px',
    'background': 'var(--surface-linear-gradient)'
  }
}
