import { remove, findIndex, propEq, curry } from 'ramda'

export const removeBy = curry((prop, propValue, list) => {
  const index = findIndex(propEq(prop, propValue), list)
  const temp = index === -1 ? list : remove(index, 1, list)
  return temp
})
