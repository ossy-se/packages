import React from 'react'

const documentBaseStyle = { margin: 0, padding: 0 }

/**
 * Full HTML document wrapper for SSR / hydrateRoot(document, …).
 *
 * @param {{
 *   appSettings: Record<string, unknown>,
 *   children: import('react').ReactNode,
 * }} props
 */
export function AppDocumentShell({ appSettings, children }) {
  const title =
    appSettings.documentTitle ?? appSettings.title ?? 'App'
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
  const description =
    typeof appSettings.metaDescription === 'string'
      ? appSettings.metaDescription
      : undefined
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
        {description ? <meta name="description" content={description} /> : null}
        <title>{title}</title>
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
