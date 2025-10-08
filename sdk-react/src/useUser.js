import { useCallback, useEffect } from 'react'
import { useCache } from './Cache.jsx'
import { useSdk } from './useSdk.js'
import { AsyncStatus } from './asyncStatus.js'

const statusPath = ['user', 'status']
const userPath = ['user', 'data']

export const useUser = () => {
  const sdk = useSdk()

  const {
    data: status = AsyncStatus.NotInitialized,
    set: setStatus
  } = useCache(statusPath)

  const {
    data: user = {},
    set: setUser
  } = useCache(userPath)

  const update = useCallback(
    user => {
      return sdk.user.update(user)
        .then((updatedUser) => {
          setUser(updatedUser)
          return updatedUser
        })
    },
    [sdk]
  )

  useEffect(() => {
    if (status !== AsyncStatus.NotInitialized) return
    setStatus(() => AsyncStatus.Loading)

    sdk.user.details()
      .then(user => {
        if (!user) return Promise.reject()
        setUser(user)
        setStatus(() => AsyncStatus.Success)
      })
      .catch(() => {
        setUser({})
        setStatus(() => AsyncStatus.Error)
      })

  }, [status])

  return {
    status,
    user,
    update
  }
}
