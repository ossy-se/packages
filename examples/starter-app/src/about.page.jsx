import React from 'react'

// Optional: export metadata to override id/path (e.g. for multi-language)
// export const metadata = { path: { en: '/about', sv: '/om' } }

export default () => (
  <main style={{ padding: '2rem', maxWidth: '40rem', margin: '0 auto' }}>
    <h1>About</h1>
    <p>
      The Ossy Ecosystem provides routing, theming, workspace context, and SDK
      integration for content-driven applications.
    </p>
    <p>
      <a href="/">Back to Home</a>
    </p>
  </main>
)
