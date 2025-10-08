import { Standard } from './standard.js'
import { topography } from './patterns/index.js'

// hsl(198, 96%, 10%) accent from old site


export const Glass = {
  ...Standard,

  surface: {
    ...Standard.surface,
    primary: 'hsl(0, 100%, 100%)',
    secondary: 'hsl(199deg 98% 97%)',
    'radial-gradient': 'radial-gradient(hsl(199deg 98% 85%) 0%, hsl(0deg 0% 100%) 80%)',
    'linear-gradient': 'linear-gradient(162deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',
    decorated: `
      linear-gradient(0deg, var(--surface-primary) 0%, transparent 100%),
      ${topography()},
      linear-gradient(321deg, hsl(200, 80%, 85%) 0%, hsl(200, 100%, 97%) 20%, hsl(15, 100%, 95%) 80%, hsl(15, 100%, 85%) 100%)
    `,
  },

  surfaces: {
    ...Standard.surfaces,

    // base: {
    //   background: 'hsl(199, 90%, 98%)',
    //   foreground: 'hsl(199, 90%, 10%)',
    //   separator: 'hsl(0, 0%, 95%)',
    // },

    base: {
      background: `
       radial-gradient(circle at center center, hsla(15, 100%, 94%, 1) 0%, hsl(199, 90%, 98%) 50%)
      `,
      foreground: 'hsl(199, 90%, 10%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    primary: {
      foreground: 'hsl(182, 23%, 30%)',
      'foreground-hover': 'hsl(182, 23%, 25%)',
      background: 'hsla(0, 0%, 100%, .6)',
      'background-hover': 'hsla(0, 0%, 90%, .7)',
      backdropFilter: 'saturate(180%) blur(10px)',
    },

    'alt-primary': {
      foreground: 'hsl(199deg 98% 98%)',
      background: 'hsla(0, 0%, 30%, .8)',
      backdropFilter: 'saturate(90%) blur(4px)',
    },

    // primary: {
    //   background: 'hsl(199, 90%, 100%)',
    //   'background-hover': 'hsl(199, 90%, 98%)',
    //   foreground: 'hsl(182, 23%, 30%)',
    //   'foreground-hover': 'hsl(182, 23%, 30%)',
    // },

    secondary: {
      background: 'hsl(199deg 98% 97%)',
      'background-hover': 'hsl(199deg 98% 95%)',
      foreground: 'hsl(182, 23%, 30%)',
      'foreground-hover': 'hsl(182, 23%, 20%)',
    },

    // 'radial-gradient': {
    //   background: 'radial-gradient(hsl(199deg 98% 85%) 0%, hsl(0deg 0% 100%) 80%)',
    //   foreground: 'hsl(182, 23%, 30%)',
    // },

    // 'linear-gradient': {
    //   background: 'linear-gradient(162deg, hsl(0deg 0% 100%) 0%, hsl(199deg 98% 97%) 100%)',
    //   foreground: 'hsl(182, 23%, 30%)',
    // },

    // 'alt-primary': {
    //   // background: 'hsl(199, 98%, 10%)',
    //   background: 'hsl(199deg 98% 17%)',
    //   // background: 'hsl(168, 28%, 40%)',
    //   // background: 'hsl(168, 28%, 60%)',
    //   // background: 'hsl(168, 10%, 24%)',
    //   // background: 'hsl(167, 1%, 40%)',
    //   foreground: 'hsl(199deg 98% 98%)',
    //   separator: 'hsl(0, 0%, 95%)',
    // },

    'alt-secondary': {
      background: 'hsl(199, 98%, 10%)',
      background: 'hsl(168, 28%, 5%)',
      background: 'hsl(168, 28%, 35%)',
      foreground: 'hsl(199deg 98% 98%)',
      separator: 'hsl(0, 0%, 95%)',
    },

    // decorated: {
    //   background: `
    //     linear-gradient(0deg, var(--surface-primary) 0%, transparent 100%),
    //     ${topography()},
    //     linear-gradient(90deg, hsla(200, 80%, 85%, .9) 0%, hsla(200, 100%, 97%, .9) 20%, hsla(15, 100%, 95%, .9) 80%, hsla(15, 100%, 85%, .9) 100%)
    //   `,
    //   foreground: 'hsl(182, 23%, 30%)',
    // },

    // decorated: {
    //   background: `
    //     radial-gradient(ellipse at center, transparent 100%, var(--surfaces-primary-background) 100%),
    //     ${topography()},
    //     linear-gradient(90deg, hsla(200, 80%, 85%, 1) 0%, hsla(200, 100%, 97%, 1) 20%, hsla(15, 100%, 95%, 1) 80%, hsla(15, 100%, 85%, 1) 100%)
    //   `,
    //   foreground: 'hsl(182, 23%, 30%)',
    // },
    // hsl(168, 28%, 40%)
    // decorated: {
    //   background: `
    //     radial-gradient(ellipse at center, transparent 0%, var(--surfaces-alt-primary-background) 70%),
    //     ${topography()},
    //     linear-gradient(90deg, hsla(168, 28%, 40%, 1) 0%, hsla(168, 28%, 40%, 1) 20%, hsla(168, 28%, 40%, 1) 80%, hsla(168, 28%, 40%, 1) 100%)
    //   `,
    //   foreground: 'hsl(182, 23%, 30%)',
    // },

  },

  separator: {
    ...Standard.separator,
    'primary': 'hsl(0, 0%, 90%)',
    'accent': 'hsl(167, 89%, 43%)'
  },

  title: {
    ...Standard.title,

    default: {
      'font-family': 'Roboto, sans-serif',
      'font-weight': '900',
      'color': 'hsl(199deg 98% 17%)',
      'letter-spacing': '1px'
    },

    display: {
      'line-height': '1.1',
      'font-size': 'min(80px, max(2.9vw, 32px))',
      'font-family': 'Roboto, sans-serif',
      'font-weight': '700',
    },

    primary: {
      'font-size': '2rem',
      'line-height': '1.2',
      'letter-spacing': '1px'
    },

    secondary: {
      'font-size': '1.5rem',
      'line-height': '1.3',
      'letter-spacing': '1px'
    },

    tertiary: {
      'font-size': '1.25rem',
      'line-height': '1.4',
      'letter-spacing': '0.25px'
    },

    lead: {
      'color': 'hsl(167, 89%, 43%)',
      'font-size': '1.2rem',
      'line-height': '1.5',
      'letter-spacing': '0.15px'
    },

    logo: {
      'font-family': 'Roboto, sans-serif',
      'line-height': '1',
      'font-size': 'min(30px, max(3vw, 32px))'
    },

  },

  text: {
    ...Standard.text,

    default: {
      'font-family': 'Roboto, sans-serif',
      'font-weight': '500',
      'font-size': '1rem',
      'line-height': '1.6',
      'color': 'hsl(182, 23%, 30%)'
    },

  },

  button: {
    ...Standard.button,

    default: {
      'background': 'transparent',
      'color': 'hsl(0, 0%, 50%)',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-radius': '999px',
      'padding': '8px 16px',
      'font-family': 'Roboto, sans-serif',
      'font-size': '14px',
      'font-weight': '500',
      'letter-spacing': '.7px',

      'background-hover': 'hsl(0, 0%, 90%)',
      'color-hover': 'hsl(0, 0%, 20%)',

      'background-disabled': 'hsl(0, 0%, 94%)',
      'color-disabled': 'hsl(0, 0%, 50%)',
    },

    header: {
      'color': 'hsl(0, 0%, 80%)',
      'background': 'transparent',
      'border-width': '.5px'
    },

    secondary: {
      'background': 'hsla(0, 0%, 98%, .8)',
      'color': 'hsl(0, 0%, 20%)',
      'border-width': '.5px',

      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(0, 0%, 15%)'
    },

    cta: {
      'background': 'hsl(167, 89%, 43%)',
      'color': 'hsl(0, 0%, 98%)',

      'background-hover': 'hsl(167, 89%, 38%)',
      'color-hover': 'hsl(0, 0%, 98%)'
    },

    link: {
      'button-link-background': 'transparent',
      'button-link-border-color': 'transparent',

      'button-link-background-hover': 'transparent',
      'button-link-color-hover': 'hsl(167, 89%, 43%)'
    },

    command: {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'hsl(0, 0%, 99%)',
      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(199deg 89% 43%)'
      // 'color-hover': 'hsl(167, 89%, 43%)'
    },

    'command-danger': {
      'border-radius': '4px',
      'padding': '4px',

      'background': 'hsl(0, 0%, 99%)',
      'background-hover': 'hsl(0, 0%, 95%)',
      'color-hover': 'hsl(0 89% 43%)'
    },


    tab: {
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': '4px 0 4px 0',
      'border-radius': '0',
      'padding': '16px 24px',

      'color-hover': 'hsl(167, 89%, 43%)',
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

  },

  card: {
    ...Standard.card,

    default: {
      'background': 'hsl(0, 0%, 100%)',
      'border-color': 'var(--separator-primary)',
      'border-style': 'solid',
      'border-width': '0',
      'box-shadow': 'none',
      'padding': '32px',
      'border-radius': '24px'
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
    ...Standard.resume,
    'header-border-bottom': '1px solid var(--separator-primary)',
    'header-padding': '0 24px',
    'background': 'var(--surface-linear-gradient)'
  }
}
