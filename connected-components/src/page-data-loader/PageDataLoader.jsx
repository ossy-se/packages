import { useEffect, useState } from 'react'
import { useResources, AsyncStatus } from '@ossy/sdk-react'
import { Switch, useDocumentTitle } from '@ossy/design-system'
import { useActivePageLocation } from '../use-active-page-location'

const getLoadingPageSettings = () => ({
  title: 'Loading...'
})

const getErrorPageSettings = () => ({
  title: 'Error'
})

const getNotFoundPageSettings = () => ({
  title: 'Not found'
})

const getDefaultPageSettings = () => ({
  title: undefined
})

const PageStatus = {
  Loading: 'Loading',
  Error: 'Error',
  Success: 'Success',
  NotFound: 'NotFound'
}

export const PageDataLoader = ({ children }) => {
  const activePageLocation = useActivePageLocation()
  const { status, resources: folder } = useResources(`/pages${activePageLocation}`)
  const [pageStatus, setPageStatus] = useState(PageStatus.Loading)
  const [pageSettings, setPageSettings] = useState(getLoadingPageSettings())

  useDocumentTitle(pageSettings.title)

  useEffect(() => {
    if ([AsyncStatus.NotInitialized, AsyncStatus.Loading].includes(status)) {
      setPageSettings(getLoadingPageSettings())
      return setPageStatus(PageStatus.Loading)
    } else if ([AsyncStatus.Error].includes(status)) {
      setPageSettings(getErrorPageSettings())
      return setPageStatus(PageStatus.Error)
    } else if ([AsyncStatus.Success].includes(status)) {
      const pageSettings = folder.find(entry => entry.name === 'Page settings')

      if (!pageSettings) {
        setPageSettings(getNotFoundPageSettings())
        return setPageStatus(PageStatus.NotFound)
      }

      setPageSettings({
        title: pageSettings.data.title,
        layout: pageSettings.data.layout,
        slots: pageSettings.data.slots
      })

      setPageStatus(PageStatus.Success)

    }

    return () => {
      setPageSettings(getDefaultPageSettings())
    }

  }, [status, folder])

  return (
    <Switch on={pageStatus}>

      <Switch.Case match={[PageStatus.NotFound]}>
        Page not found
      </Switch.Case>

      <Switch.Case match={[PageStatus.Error]}>
        Couldn't load the page
      </Switch.Case>

      <Switch.Case match={[PageStatus.Loading]}>
        Page Loading
      </Switch.Case>

      <Switch.Case match={[PageStatus.Success]}>
        {children}
      </Switch.Case>

    </Switch>

  )
}
