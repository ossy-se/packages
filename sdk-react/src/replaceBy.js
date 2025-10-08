import { curry, map } from 'ramda'

export const replaceBy = curry((prop, item, list) => map(
  oldItem => oldItem[prop] === item[prop] ? item : oldItem,
  list
))
