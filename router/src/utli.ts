const appendSlash = (string: string) => string[string.length - 1] === '/'
  ? string : `${string}/`

const prependSlash = (string: string) => string[0] === '/'
  ? string : `/${string}`

export const padWithSlash = (string = '') => appendSlash(prependSlash(string))

/** True when a route path is the catch-all segment (`*`, `/*`, etc.). Used for unknown-URL fallbacks. */
export const isCatchAllRoutePath = (path: string | undefined) => {
  if (path == null || typeof path !== 'string') return false
  const trimmed = path.replace(/^\/+|\/+$/g, '')
  return trimmed === '*'
}