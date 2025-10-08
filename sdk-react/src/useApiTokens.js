import { useCallback, useEffect } from 'react'
import { useCache } from './Cache.jsx'
import { AsyncStatus } from './asyncStatus.js'
import { useSdk } from './useSdk.js'
import { removeBy } from './removeBy.js'

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
    description => sdk.apiTokens.create(description)
      .then(newToken => {
        setTokens(tokens => [...tokens, newToken])
        return newToken
      }),
    [sdk]
  )

  const invalidateApiToken = useCallback(
    tokenId => sdk.apiTokens.invalidate(tokenId)
      .then(() => setTokens(tokens => removeBy('id', tokenId, tokens))),
    [sdk]
  )

  const loadApiTokens = useCallback(() => {
    setStatus(AsyncStatus.Loading)
    sdk.apiTokens.getAll()
      .then(tokens => {
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
