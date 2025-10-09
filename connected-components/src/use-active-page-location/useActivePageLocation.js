import { useAppSettings } from '../app/AppSettings.jsx'
const appendSlash = string => string[string.length - 1] === '/'
  ? string : `${string}/`

const prependSlash = string => string[0] === '/'
  ? string : `/${string}`

const padWithSlash = string => appendSlash(prependSlash(string))

const Predicates = {
  byLength: desiredLength => route => {
    const routeParts = route.split('/').filter(x => !!x)
    return routeParts.length === desiredLength
  },
  byParamPlaceHolders: activePathname => route => {
    const routeParts = route.split('/').filter(x => !!x).reduce(
      (parts, part) => part.startsWith(':') ? [...parts, '.+?'] : [...parts, part],
      []
    ).join('/')

    const regex = new RegExp(`^${padWithSlash(routeParts)}$`)
    const passes = regex.test(activePathname)
    return passes
  }
}

export const useActivePageLocation = (path) => {
  console.log('useActivePageLocation path', path)
  const { routes: pages } = useAppSettings()

  if (!path) return 

  // TODO: this needs tests because I don't think it works right
  const activePathname = path === '' ? '/' : padWithSlash(path)
  const registeredPageRoutes = pages.map(page => padWithSlash(page.path))
  const exactRouteMatch = registeredPageRoutes.find(route => route === activePathname)
  let activePageLocation

  if (!!exactRouteMatch) {
    activePageLocation = exactRouteMatch
  } else {
    const activePathnameParts = activePathname.split('/').filter(x => !!x)
    const dynamicRouteMatch = registeredPageRoutes.find(route => (
      Predicates.byLength(activePathnameParts.length)(route) && Predicates.byParamPlaceHolders(activePathname)(route)
    ))

    activePageLocation = dynamicRouteMatch
  }

  console.log('useActivePageLocation exactRouteMatch', exactRouteMatch)
  console.log('useActivePageLocation activePageLocation', activePageLocation)

  return activePageLocation
}
