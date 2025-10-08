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
    base: 'hsl(199, 90%, 99%)',
    primary: 'hsl(0, 0%, 100%)',
    secondary: 'hsl(199deg 90% 98%)',
    accent: 'hsl(167, 89%, 43%)',
    info: 'hsl(199deg 89% 43%)',
    danger: 'hsl(0 89% 43%)'
  },

  surfaces: {

    base: {
      background: 'var(--color-base)',
      // background: 'tomato'
    }

  },

  surface: {

    'base': 'var(--color-base)',
    'primary': 'var(--color-primary)',
    'secondary': 'var(--color-secondary)',
    'accent': 'var(--color-accent)',
    'radial-gradient': 'radial-gradient(var(--color-base) 0%, var(--color-primary) 80%)',
    'linear-gradient': 'linear-gradient(162deg, tomato 0%, tomato 100%)',
  },

  separator: {
    primary: 'hsl(0, 0%, 95%)',
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
      'border-radius': '16px',
      'padding': '8px 24px',
      'font-size': '16px',
      'font-weight': '500',
      'letter-spacing': '.7px',
      'line-height': '1',

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
      'color': 'hsl(199deg 29% 23%)',
      'font-weight': '300',
      'background': 'transparent',
      'border-color': 'transparent',

      'background-hover': 'transparent',
      'text-decoration-hover': 'underline'
    },

    tab: {
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
      'background': 'hsl(0, 0%, 95%)',
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
      'border-width': '1px',
      'padding': 'var(--space-l)',
      'border-radius': 'var(--space-s)'
    },

    shadow: {
      'background': 'var(--color-primary)',
      'border-radius': 'var(--space-s)',
      'border-color': 'var(--separator-primary)',
      'border-color': 'var(--color-accent)',
      'border-style': 'solid',
      'border-width': '0',
      'box-shadow': '3px 0 10px hsla(0, 0%, 85%, .75)',
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
    'background': 'var(--surface-linear-gradient)'
  }
}
