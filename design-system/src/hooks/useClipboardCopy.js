const isSafariBrowser = () => {
  // https://gist.github.com/michancio/10105690
  const isChrome = navigator.userAgent.indexOf('Chrome') > -1
  const isSafari = navigator.userAgent.indexOf('Safari') > -1

    if (isSafari){
        if (isChrome)  // Chrome seems to have both Chrome and Safari userAgents
            return false;
        else
            return true;
    }
    return false;
}

export const useClipboardCopy = () => {
  if (isSafariBrowser()) return [false, () => {}]
  return [
    true,
    textToCopy => navigator.permissions.query({name: 'clipboard-write'})
      .then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
          navigator.clipboard.writeText(textToCopy)
        }
      })
    ]
}
