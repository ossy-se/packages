import React, { useResource, AsyncStatus } from '@ossy/sdk-react'
import { Theme } from '@ossy/design-system'

export const ThemeProvider = props => {
  const { status, resource: theme } = useResource('PCX53TaGviq4_8KvK-VOp')
  return status === AsyncStatus.Success
    ? <Theme theme={theme.data} {...props}/>
    : <></>
}
