import React, { createContext, PropsWithChildren } from 'react'
import { createCache } from './Cache'
import { path, set, lensPath } from 'ramda'
import { type SDK } from '@ossy/sdk'

export const Context = createContext<Config>({} as Config)

const Cache = createCache({
  get: path,
  set: (path: any, value: any, data: any) => set(lensPath(path), value, data)
})

export interface Config {
  sdk: SDK
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


