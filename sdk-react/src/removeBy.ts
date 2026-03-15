export const removeBy = <T extends Record<string, unknown>>(
  prop: string,
  propValue: unknown,
  list: T[]
): T[] => {
  const index = list.findIndex((item) => item[prop] === propValue)
  return index === -1 ? list : [...list.slice(0, index), ...list.slice(index + 1)]
}
