import { useCallback, useEffect } from 'react'
import { useCache } from './Cache'
import { useSdk } from './useSdk'

export const AuthenticationStatus = {
  AuthenticationError: 'AuthenticationError',
  NotInitialized: 'NotInitialized',
  NotAuthenticated: 'NotAuthenticated',
  Verifying: 'Verifying',
  Authenticated: 'Authenticated',
  VerifySignIn: 'VerifySignIn'
}

const statusCacheKey = 'auth:status'

export const useAuthentication = () => {
  const sdk = useSdk()

  const {
    data: status = AuthenticationStatus.NotInitialized,
    set: setStatus
  } = useCache(statusCacheKey)

  const signUp = useCallback(
    (payload: { email: string; firstName: string; lastName: string }) => {
      setStatus(() => AuthenticationStatus.Verifying)
      return sdk.auth
        .signUp(payload)
        .then(() => setStatus(AuthenticationStatus.VerifySignIn))
        .catch((error: any) => {
          setStatus(AuthenticationStatus.AuthenticationError)
          return Promise.reject(error)
        })
    },
    [sdk]
  )

  const signIn = useCallback(
    (email: any) => {
      setStatus(() => AuthenticationStatus.Verifying)
      return sdk.auth.signIn({ email })
        .then(() => setStatus(AuthenticationStatus.VerifySignIn))
        .catch((error: any) => {
          setStatus(AuthenticationStatus.AuthenticationError)
          return Promise.reject(error)
        })
    },
    [sdk]
  )

  const verifySignIn = useCallback(
    (token: string) => {
      setStatus(() => AuthenticationStatus.Verifying)
      return sdk.auth.verifySignIn({ token })
        .then(() => setStatus(AuthenticationStatus.Authenticated))
        .catch((error: any) => {
          setStatus(AuthenticationStatus.AuthenticationError)
          return Promise.reject(error)
        })
    },
    [sdk]
  )

  const verifyInvitation = useCallback(
    (workspaceId: string, token: string) => {
      setStatus(() => AuthenticationStatus.Verifying)
      return sdk.auth.verifyInvitation({ workspaceId, token})
        .then(() => setStatus(AuthenticationStatus.Authenticated))
        .catch((error: any) => {
          setStatus(AuthenticationStatus.AuthenticationError)
          return Promise.reject(error)
        })
    },
    [sdk]
  )

  const signOff = useCallback(
    () => sdk.auth.signOff()
      .then(() => setStatus(AuthenticationStatus.NotAuthenticated)),
    [sdk]
  )

  const checkAuth = useCallback(() => {
    setStatus(() => AuthenticationStatus.Verifying)
    sdk.auth.getAuthenticatedUser()
      .then((user: any) => {
        if (!user) return Promise.reject()
        setStatus(() => AuthenticationStatus.Authenticated)
      })
      .catch(() => {
        setStatus(() => AuthenticationStatus.NotAuthenticated)
      })
  }, [sdk])

  useEffect(() => {
    if (status !== AuthenticationStatus.NotInitialized) return
    checkAuth()
  }, [status, checkAuth])

  return {
    status,
    signUp,
    signIn,
    signOff,
    verifySignIn,
    verifyInvitation
  }
}
