import React, {
  createContext,
  useReducer,
  useContext,
  useCallback
} from 'react'

export const CacheContext = createContext<any>({})

const Actions = {
  Set: 'SET'
}

interface CacheConfig {
  get: (key: string, state: unknown) => unknown
  set: (key: string, value: unknown, state: unknown) => unknown
  getInitialState?: () => unknown
}

const createReducer = ({ set, get, getInitialState }: CacheConfig) => (
  state: unknown,
  action: any
) => {
  const initialState = getInitialState?.() ?? {}
  if (state === undefined) state = initialState
  switch (action.type) {

  case Actions.Set: {
    let data

    if (typeof action.data === 'function') {
      const previousValue = get(action.cacheKey, state)
      data = action.data(previousValue)
    } else {
      data = action.data
    }

    return set(action.cacheKey, data, state)
  }

  default:
    return state

  }
}

export const createCache = ({
  get: _get,
  set: _set,
  getInitialState
}: CacheConfig) => (props: any) => {
  const initialState = getInitialState?.() ?? {}
  const [state, updateState] = useReducer(
    createReducer({ set: _set, get: _get, getInitialState }),
    undefined as unknown,
    () => initialState
  )

  const set = useCallback((cacheKey: string) => (data: unknown) => {
    updateState({ type: Actions.Set, cacheKey, data })
  }, [updateState])

  const get = useCallback((cacheKey: string) =>
    _get(cacheKey, state),
  [state, _get]
  )

  return (
    <CacheContext.Provider value={{ get, set }} {...props} />
  )
}

export const useCache = (cacheKey: string, defaultValue?: unknown) => {
  const { get, set } = useContext(CacheContext)

  const getData = () => {
    const data = get(cacheKey)
    return data === undefined || data === null
      ? defaultValue
      : data
  }

  return {
    data: getData(),
    set: set(cacheKey)
  }
}
