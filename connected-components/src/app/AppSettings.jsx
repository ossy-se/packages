
export function defaultAppSettings() {
    return {
      workspaceId: undefined,
      defaultLanguage: undefined,
      supportedLanguages: [],
      theme: undefined,
      themes: undefined,
      routes: [],
      pages: [],
      initialEntries: [],
      initialIndex: 0,
      router: 'browser',
      gaId: undefined,
      apiUrl: undefined,
      devMode: false,
      /** When true (default), `App` renders `<html>` / `<head>` / `<body>` for SSR + hydrateRoot(document). Set false if the app entry already provides the document. */
      includeDocumentShell: true,
      /** Site / app label (e.g. chrome); not wired to `<title>` — pages own document title. */
      documentTitle: undefined,
      title: undefined,
      metaDescription: undefined,
      themeColor: undefined,
      /** `<html lang>`; falls back to `defaultLanguage` then `en`. */
      htmlLang: undefined,
      /** Favicon URL; default `/favicon.ico`. Use `null` or `false` to omit. */
      faviconHref: undefined,
      /** When true, main app sidebar is collapsed to icons (from server cookie / app-settings). */
      sidebarPrimaryCollapsed: false,
    }
  }