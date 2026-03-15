import React, { createContext, PropsWithChildren } from 'react'
import { createCache } from './Cache'
import { createMapCache } from './cacheUtils'
import { type SDK } from '@ossy/sdk'

export const Context = createContext<Config>({} as Config)

const mapCache = createMapCache()
const Cache = createCache(mapCache)

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


