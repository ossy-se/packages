export const replaceBy = <T extends Record<string, unknown>>(
  prop: string,
  item: T,
  list: T[]
): T[] =>
  list.map((oldItem) => (oldItem[prop] === item[prop] ? item : oldItem))
