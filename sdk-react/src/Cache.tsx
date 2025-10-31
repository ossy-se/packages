import React, {
  createContext,
  useReducer,
  useContext,
  useCallback
} from 'react'

const getInitialState = () => ({})
export const CacheContext = createContext<any>({})

const Actions = {
  Set: 'SET'
}

const createReducer = ({ set, get }: { set: any, get: any }) => (
  state = getInitialState(),
  action: any
) => {
  switch (action.type) {

  case Actions.Set: {
    let data

    if (typeof action.data === 'function') {
      const previousValue = get(action.cachePath, state)
      data = action.data(previousValue)
    } else {
      data = action.data
    }

    return set(action.cachePath, data, state)
  }

  default:
    return ({ ...state })

  }
}

export const createCache = ({ get: _get, set: _set }: { get: any, set: any}) => (props: any) => {

  const [state, updateState] = useReducer(
    createReducer({ set: _set, get: _get }),
    getInitialState()
  )

  const set = useCallback((cachePath: any) => (data: any) => {
    updateState({ type: Actions.Set, cachePath, data })
  }, [updateState])

  const get = useCallback((cachePath: any) =>
    _get(cachePath, state),
  [state, _get]
  )

  return (
    <CacheContext.Provider value={{ get, set }} {...props} />
  )
}

export const useCache = (cachePath: any, defaultValue?: any) => {
  // TODO: Add default value to context here, otherwise it will be undefined in the set((data) => { ...  }) function
  const { get, set } = useContext(CacheContext)

  const getData = () => {
    const data = get(cachePath)
    return data === undefined || data === null
      ? defaultValue
      : data
  }

  return ({
    data: getData(),
    set: set(cachePath)
  })
}
