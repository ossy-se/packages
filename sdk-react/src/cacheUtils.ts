export function getFromMap(key: string, state: unknown): unknown {
  const map = state as Map<string, unknown>
  return map.get(key)
}

export function setInMap(
  key: string,
  value: unknown,
  state: unknown
): Map<string, unknown> {
  const map = state as Map<string, unknown>
  const next = new Map(map)
  next.set(key, value)
  return next
}

export function createMapCache() {
  return {
    getInitialState: () => new Map<string, unknown>(),
    get: getFromMap,
    set: setInMap
  }
}
