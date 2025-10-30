import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { AsyncStatus } from './asyncStatus'
import { useSdk } from './useSdk'
import { removeBy } from './removeBy'

const statusPath = ['apiTokens', 'status']
const dataPath = ['apiTokens', 'data']

export const useApiTokens = () => {
  const sdk = useSdk()

  const {
    data: status = AsyncStatus.NotInitialized,
    set: setStatus
  } = useCache(statusPath)

  const {
    data: tokens = [],
    set: setTokens
  } = useCache(dataPath)

  const createApiToken = useCallback(
    (token: {
      name: string;
      description: string;
      expiresAt: string;
  }) => sdk.apiTokens.create(token)
      .then((token: any) => {
        setTokens((tokens: any[]) => [...tokens, token])
        return token
      }),
    [sdk]
  )

  const invalidateApiToken = useCallback(
    (id: string) => sdk.apiTokens.invalidate({ id })
      .then(() => setTokens((tokens: any[]) => removeBy('id', id, tokens))),
    [sdk]
  )

  const loadApiTokens = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    sdk.apiTokens.list()
      .then((tokens: any[]) => {
        setTokens(tokens)
        setStatus(AsyncStatus.Success)
      })
      .catch(() => { setStatus(AsyncStatus.Error) })
  }, [sdk])

  useEffect(() => {
    if (status !== AsyncStatus.NotInitialized) return
    loadApiTokens()
  }, [status])

  return {
    status,
    tokens,
    createApiToken,
    invalidateApiToken,
  }
}
