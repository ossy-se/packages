import React, { createContext, PropsWithChildren } from 'react'
import { createCache } from './Cache' // TODO: We should use Cache from @ossy-se/components when it becomes public
import { path, set, lensPath } from 'ramda' // TODO: not be dependent on ramda

export const Context = createContext<Config>({} as Config)

const Cache = createCache({
  get: path,
  set: (path: any, value: any, data: any) => set(lensPath(path), value, data)
})

export interface Config {
  sdk: any
}

export const WorkspaceProvider = ({ sdk, children }: PropsWithChildren<Config>) => {
  return (
    <Cache>
      <Context.Provider value={{ sdk }}>
        {children}
      </Context.Provider>
    </Cache>
  )
}


