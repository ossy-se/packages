import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { useSdk } from './useSdk'
import { AsyncStatus } from './asyncStatus'

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
    (user: any) => {
      return sdk.user.update(user)
        .then((updatedUser: any) => {
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
      .then((user: any) => {
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
