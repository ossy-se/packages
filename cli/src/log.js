// interface LogInput {
//   type: TypeOfMessage;
//   message: string;
//   data?: any;
//   dataPrefix: string;
// }

const TypeOfMessage = {
  Info: 'INFO',
  Error: 'ERROR',
  Debug: 'DEBUG'
}


export const log = (...params) => { console.log(...params) }
const prefixTo = (prefix, message) => `[${prefix}]${message.startsWith('[') ? '' : ': '}`

export const logInfo = logInput => {
  const messagePrefix = prefixTo(TypeOfMessage.Info, logInput.message)
  log(`${messagePrefix}${logInput.message}`)
}

export const logError = logInput => {
  const messagePrefix = prefixTo(TypeOfMessage.Error, logInput.message)
  log('\n')
  log(`${messagePrefix}${logInput.message}`)
  logInput.error && log('[Reason]:', logInput.error)
  log('\n')
}

export const logDebug = logInput => {
  const isDebugOn = process.env.DEBUG || true
  if (!isDebugOn) return
  const messagePrefix = prefixTo(TypeOfMessage.Debug, logInput.message)
  log('\n')
  log(`${messagePrefix}${logInput.message}`)
  logInput.data && log('[DEBUG DATA]:', logInput.data)
  log('\n')
}

export const logErrorAndReject = logInput => {
  logError(logInput)
  return Promise.reject(logInput.error)
}
