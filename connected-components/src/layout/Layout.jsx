import { useMemo, useEffect, useState } from 'react'
import {
  useResource,
  AsyncStatus
} from '@ossy/sdk-react'

export const Layout = ({
  layoutId,
  ...props
}) => {
  const { status, resource } = useResource(layoutId)

  const layoutStyles = useMemo(() => !resource.data
    ? {}
    : ({
      display: 'grid',
      gridTemplateRows: resource.data.rows,
      gridTemplateColumns: resource.data.columns,
      gridTemplateAreas: resource.data.areas
    }), [resource])

  return status === AsyncStatus.Success
    ? (<div {...props} style={layoutStyles} />)
    : <></>
}
