const appendSlash = (string: string) => string[string.length - 1] === '/'
  ? string : `${string}/`

const prependSlash = (string: string) => string[0] === '/'
  ? string : `/${string}`

export const padWithSlash = (string = '') => appendSlash(prependSlash(string))