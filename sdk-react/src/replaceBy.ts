import { map } from 'ramda'

export const replaceBy = <T extends Record<string, unknown>>(
  prop: string,
  item: T,
  list: T[]
): T[] =>
  map(
    (oldItem: T) => (oldItem[prop] === item[prop] ? item : oldItem),
    list
  )
