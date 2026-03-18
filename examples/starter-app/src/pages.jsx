import React from 'react'

const HomePage = () => (
  <main style={{ padding: '2rem', maxWidth: '40rem', margin: '0 auto' }}>
    <h1>Welcome to Ossy</h1>
    <p>
      This is the Hello Ossy example app. Edit <code>src/pages.jsx</code> and
      <code>src/config.js</code> to customize.
    </p>
    <p>
      <a href="/about">Go to About</a>
    </p>
  </main>
)

const AboutPage = () => (
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

export default [
  { id: 'home', path: '/', element: <HomePage /> },
  { id: 'about', path: '/about', element: <AboutPage /> },
]
