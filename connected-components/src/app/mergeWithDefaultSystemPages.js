import { isCatchAllRoutePath } from '@ossy/router'
import { NOT_FOUND_PAGE_ID, createDefaultSystemPages } from './defaultSystemPages.jsx'

function pageHasCatchAllPath(page, { supportedLanguages }) {
  if (typeof page.path === 'string') return isCatchAllRoutePath(page.path)
  if (page.path && typeof page.path === 'object') {
    const langs = supportedLanguages?.length ? supportedLanguages : Object.keys(page.path)
    return langs.some((l) => isCatchAllRoutePath(page.path[l]))
  }
  return false
}

/**
 * Appends default system routes (e.g. not-found) when the app has not already defined them.
 */
export function mergeWithDefaultSystemPages(appPages, appSettings) {
  const defaults = createDefaultSystemPages(appSettings)
  const toAdd = []
  for (const defPage of defaults) {
    if (appPages.some((p) => p.id === defPage.id)) continue
    if (defPage.id === NOT_FOUND_PAGE_ID && appPages.some((p) => pageHasCatchAllPath(p, appSettings))) {
      continue
    }
    toAdd.push(defPage)
  }
  return [...appPages, ...toAdd]
}
