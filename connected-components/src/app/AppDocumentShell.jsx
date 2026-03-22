import React from 'react'

const documentBaseStyle = { margin: 0, padding: 0 }

/**
 * Full HTML document wrapper for SSR / hydrateRoot(document, …).
 * Does not render `<title>` or `<meta name="description">`; each page (or layout) should render
 * those so React can hoist them to `<head>` without duplicating tags from the shell.
 *
 * @param {{
 *   appSettings: Record<string, unknown>,
 *   children: import('react').ReactNode,
 * }} props
 */
export function AppDocumentShell({ appSettings, children }) {
  const lang =
    typeof appSettings.htmlLang === 'string'
      ? appSettings.htmlLang
      : typeof appSettings.defaultLanguage === 'string'
        ? appSettings.defaultLanguage
        : 'en'
  const themeColor =
    typeof appSettings.themeColor === 'string'
      ? appSettings.themeColor
      : '#000000'
  let faviconHref = '/favicon.ico'
  if (appSettings.faviconHref === null || appSettings.faviconHref === false) {
    faviconHref = null
  } else if (typeof appSettings.faviconHref === 'string') {
    faviconHref = appSettings.faviconHref || null
  }
  const gaId = typeof appSettings.gaId === 'string' ? appSettings.gaId : undefined

  return (
    <html lang={lang} style={documentBaseStyle}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={themeColor} />
        {faviconHref ? <link rel="icon" href={faviconHref} /> : null}
        <style>
          {`
            *, *::before, *::after {
              box-sizing: border-box;
            }
          `}
        </style>

      </head>
      <body style={documentBaseStyle}>{children}</body>
    </html>
  )
}
