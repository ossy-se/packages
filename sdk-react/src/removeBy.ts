import { remove } from 'ramda'

export const removeBy = <T extends Record<string, unknown>>(
  prop: string,
  propValue: unknown,
  list: T[]
): T[] => {
  const index = list.findIndex((item) => item[prop] === propValue)
  return index === -1 ? list : remove(index, 1, list)
}
