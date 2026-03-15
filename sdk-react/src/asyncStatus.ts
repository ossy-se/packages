export const AsyncStatus = {
  NotInitialized: 'NotInitialized',
  Loading: 'Loading',
  Success: 'Success',
  Error: 'Error'
} as const

export type AsyncStatusType = (typeof AsyncStatus)[keyof typeof AsyncStatus]
