import React, {
  createContext,
  useReducer,
  useContext,
  useCallback
} from 'react'

const getInitialState = () => ({})
export const CacheContext = createContext({})

const Actions = {
  Set: 'SET'
}

// get: (path, state)
// set: (path, value, state)

const createReducer = ({ set, get }) => (
  state = getInitialState(),
  action
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

export const createCache = ({ get: _get, set: _set }) => props => {

  const [state, updateState] = useReducer(
    createReducer({ set: _set, get: _get }),
    getInitialState()
  )

  const set = useCallback(cachePath => data => {
    updateState({ type: Actions.Set, cachePath, data })
  }, [updateState])

  const get = useCallback(cachePath =>
    _get(cachePath, state),
    [state, _get]
  )

  return (
    <CacheContext.Provider value={{ get, set }} {...props} />
  )
}

export const useCache = (cachePath, defaultValue) => {
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
