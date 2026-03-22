import React from 'react'
import { NotFound } from '@ossy/pages'

/** Reserved id for the unknown-route fallback; apps override by defining a page with the same id. */
export const NOT_FOUND_PAGE_ID = 'not-found'

function catchAllPath({ defaultLanguage, supportedLanguages }) {
  const langs = supportedLanguages?.length ? supportedLanguages : []
  const isMulti = langs.length > 1 && defaultLanguage
  if (!isMulti) return '*'
  return Object.fromEntries(langs.map((l) => [l, '*']))
}

/**
 * Built-in router pages merged into {@link App} unless the app already supplies an equivalent route.
 * Add new entries here as you introduce more overridable defaults (each should use a stable `id`).
 */
export function createDefaultSystemPages(appSettings) {
  const path = catchAllPath(appSettings)
  return [
    {
      id: NOT_FOUND_PAGE_ID,
      path,
      element: <NotFound />,
      render: () => <NotFound />,
    },
  ]
}
