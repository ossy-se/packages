import { toHsl } from './toHsl'

const createSurfacesCss = theme => css => {
  const surfaces = theme.surfaces
  if (!surfaces) return ''
  return Object.entries(surfaces)
    .reduce((css, [surfaceName, rules]) => {
      const vars = createCssVars(addSurfaceDefaults(rules))
      return css + (
`
[data-surface="${surfaceName}"] {
  ${vars}
}
`
)}, css)
}

const createSpacingCss = theme => css => {
  const { space } = theme
  if (!space) return ''
  const vars = createCssVars(Object.entries(space).reduce((acc, [key, value]) => ({...acc, [`space-${key}`]: value}), {}))
  return css + (
`
  :root {
    ${vars}
  }
`
  )
}

const createMaxWidthCss = theme => css => {
  const maxWidths = theme.maxWidth || theme['max-width']
  if (!maxWidths) return ''
  const vars = createCssVars(Object.entries(maxWidths).reduce((acc, [key, value]) => ({...acc, [`max-width-${key}`]: value}), {}))
  return css + (
`
  :root {
    ${vars}
  }
`
  )
}

const createRestVars = theme => css => {
  const vars = createCssVars(theme)
  return css + (
`
  :root {
    ${vars}
  }
`
  )
}

export const createCss = (theme, options) => {
  if (!theme) return ''
  return [
    createSpacingCss(theme),
    createMaxWidthCss(theme),
    createSurfacesCss(theme),
    createRestVars({ ...theme, maxWidth: undefined, 'max-width': undefined, surfaces: undefined, space: undefined }),
  ].reduce((css, fn) => fn(css), '')
}

function createCssVars(themePortion) {
  if (!themePortion) return ''
  return getCssVars(themePortion)
    .flatMap(Object.entries)
    .reduce((acc, [name, value]) => {
      return acc + `${name}: ${value};\n`
    }, '')
}

function getCssVars(styleObject, cssVars = [], _previousPath = '') {
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


export function differenciateColor(color) {
  const [h, s, l, a = 1] = toHsl(color)
  const isDark = l < 50
  const isTransparent = a < 1
  const isNeutral = s < 10
  
  const newl = isDark ? l + 5 : l - 5
  return `hsla(${h}, ${s}%, ${newl}%, ${a})`
}

function addSurfaceDefaults(surface) {
  const foreground = surface.foreground || 'hsl(182, 23%, 30%)'
  // TODO: check if background is a color, it could be a gradient or image
  const foregroundHover = surface['foreground-hover'] || differenciateColor(foreground)
  const foregroundActive = surface['foreground-active'] || differenciateColor(foregroundHover)

  const background = surface.background || 'hsl(0, 0%, 99%)'
  const backgroundHover = surface['background-hover'] || differenciateColor(background)
  const backgroundActive = surface['background-active'] || differenciateColor(backgroundHover)

  return {
    foreground: foreground,
    'foreground-hover': foregroundHover,
    'foreground-active': foregroundActive,
    background: background,
    'background-hover': backgroundHover,
    'background-active': backgroundActive,
    backdropFilter: 'saturate(180%) blur(10px)',
    ...surface
  }
}
