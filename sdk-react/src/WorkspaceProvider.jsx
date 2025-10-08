import React, { createContext } from 'react'
import { createCache } from './Cache.jsx' // TODO: We should use Cache from @ossy-se/components when it becomes public
import { path, set, lensPath } from 'ramda' // TODO: not be dependent on ramda

export const Context = createContext({})

const Cache = createCache({
  get: path,
  set: (path, value, data) => set(lensPath(path), value, data)
})

export const WorkspaceProvider = ({ sdk, children }) => {
  return (
    <Cache>
      <Context.Provider value={{ sdk }}>
        {children}
      </Context.Provider>
    </Cache>
  )
}


