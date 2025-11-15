import React, {
  useState,
  createContext,
  useContext,
} from 'react'
import { createCss } from './createCss.js'

const getCssVars = (styleObject, cssVars = [], _previousPath = '') => {

  return Object.entries(styleObject).map(([key, value]) => {

    if (typeof value === 'object') {
      return !!_previousPath
        ? getCssVars(value, cssVars, `${_previousPath}-${key}`)
        : getCssVars(value, cssVars, `--${key}`)
    } else if (!!_previousPath) {
      return { [`${_previousPath}-${key}`]: value }
    } else {
      return { [`--${key}`]: value }
    }
  }).flat()

}

export const addCssProperties = (element, styleObject) => {
  getCssVars(styleObject)
    .flatMap(x => Object.entries(x))
    .forEach(([name, value]) => {
      element.style.setProperty(name, value)
  })
}

export const removeCssProperties = (element, styleObject) => {
  getCssVars(styleObject)
    .flatMap(x => Object.entries(x))
    .forEach(([name, value]) => {
      element.style.removeProperty(name)
  })
}

const ThemeContext = createContext({})

export const Theme = ({
  theme,
  themes = {},
  elementSelector = ':root',
  children,
  ...props
}) => {
  const _themes = typeof theme === 'object' ? { default: theme } : themes
  const [activeTheme, setTheme] = useState(typeof theme === 'object' ? 'default' : theme)
  const activeThemeValues = _themes[activeTheme]

  return (
    <ThemeContext.Provider value={{ activeTheme, themes: Object.keys(_themes), setTheme, }} {...props}>
      <style href="@ossy/design-system/surface" precedence='high'>
      {`
        [data-surface] {
          background: var(--background, trasparent);
          color: var(--foreground);
          fill: var(--foreground);
          backdrop-filter: var(--backdropFilter);
          transition: background .3s, color .3s, fill .3s;
        }

        [data-surface="neutral"] {
          --background: transparent;
          --backdropFilter: none;
        }

        [data-selectable] {
          cursor: pointer;
        }

        [data-selectable]:hover {
          --background: var(--background-hover);
          --foreground: var(--foreground-hover);
        }

        [data-selectable]:active {
          --background: var(--background-active);
          --foreground: var(--foreground-active);
        }
      `}
      </style>
      <style href={`@ossy/design-system/theme/${activeTheme}`}>
        {createCss(activeThemeValues)}
      </style>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
