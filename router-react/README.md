# @ossy/router-react

A React router built for server side rendering and multi-language support with localized paths.

What this package tries to do is to lift the responsibility of creating language aware links to a single provider, the `<Router/>` component.

The components that want to trigger a navigation only need to be aware of the pageId (with eventual params) they want to navigate to.

Loading of appropriate data is still the responsibility of the component.

This Router is aimed towards websites that want to prerender as much as possible on the server and therefore doesn't include many client side functionality that you might want for SPAs, like setting search params without doing a full navigation.

## Features
- Easy to use
- Supports single language websites
- Supports multi language websites with localized paths
- Supports prerendering (API is only hooks based ATM, API that works for server components is comming)

## Roadmap
- [ ] API that works on server components (non hooks API)
- [ ] Trigger navigation programaticly on the client (`router.navigate()`)
- [ ] Update search params without doing full navigation, for times you keep state in the url
- [ ] Redirects

## Table of Contents

- [@ossy/router-react](#ossyrouter-react)
- [Features](#features)
- [What problem does this package solve?](#what-problem-does-this-package-solve)
- [Installation](#installation)
- [Usage](#usage)
  - [Single language website setup](#single-language-website-setup)
  - [Multi language website setup](#multi-language-website-setup)
  - [Server side rendering](#server-side-rendering)
  - [Navigation](#navigation)
    - [Navigation with params](#navigation-with-params)
      - [Note on default params](#note-on-default-params)
    - [Navigating to specific page in a specific language](#navigating-to-specific-page-in-a-specific-language)
    - [Switching language (same page)](#switching-language-same-page)
    - [Navigating back](#navigating-back)
    - [Redirects](#redirects)

## What problem does this package solve?
When creating links in your app it's not uncommon to hard code the path you want to navigate to.

```tsx
const MyComponent = () => {
 const { org } = useParams()
 return (
    <nav>
        <a href={`/${org}`}>Org home</a>
        <a href={`/${org}/users`}>Org users</a>
    </nav>
 )
}
```
This works pretty OK when you only have to worry about one language.
But what happens when you want to add another language with localized paths?
How would that look like inside a component?

```tsx
const MyComponent = () => {
 const { language, org } = useParams()

 const paths = {
    en: {
        home: `/${org}`,
        users: `/${org}/users`
    },
    sv: {
        home: `/${org}`,
        users: `/${org}/anvandare`
    }
 }

 return (
    <nav>
        <a href={paths[language].home}>Org home</a>
        <a href={paths[language].users}>Org users</a>
    </nav>
 )
}
```
The example above doesn't look too bad, but keep in mind it's only for one extra language and in one component. Imagine doing that everytime you want to navigate?

What this package tries to do is to lift the responsibility of creating language aware links to a single provider, the `<Router/>` component.

The components that want to trigger a navigation only need to be aware of the pageId (with eventual params) they want to navigate to.

```tsx
const MyComponent = () => {
 const router = useRouter()

 return (
    <nav>
        <a href={router.getHref('home')}>Org home</a>
        <a href={router.getHref('users')}>Org users</a>
    </nav>
 )
}
```
To take this one step further, if you were to integrate with a cms you could add the pageId to the data, and you wouldn't need to update the component or data if the paths changes.

In the below example we pretend to load data from a CMS and itterate through navigation links.
In this made up case, the `data.navigationLinks.href` refers to the pageId.

```tsx
const MyComponent = () => {
 const router = useRouter()
 const { data } = useDataFromSomeCms()

 return (
   <nav>
    {data.navigationLinks(link => (
      <a href={router.getHref(link.href)} key={link.href}>{link.label}</a>)
    )}
   </nav>
 )
}
```


## Installation
```
npm install @ossy/router-react
```

## Usage

### Single language website setup
```tsx
import { Router } from '@ossy/router-react'

const pages = [
  { id: 'home', path: '/', element: <h1>Home page<h1> },
  { id: 'users', path: '/users', element: <h1>Users page<h1> },
  { id: 'user', path: '/users/:userId', element: <h1>User page<h1> },
]

export const App = () => (
  <html>
    <head>
      <title>My app</title>
    </head>
    <body>
        <Router pages={pages} />
    </body>
  </html>
)
```

### Multi language website setup

Setting up a multi language website is just a matter of providing the `<Router/>` component with some additional information. Both `defaultLanguage` and `supportedLanguages` are required for multi language websites. To specify paths for each supported language, provide the `page.path` key with an object containing key value pairs that corresponds with the language and it's associated path for that page.

- When navigating to a page on a multi language site, the language needs to be at the root.
So the urls for a page with the config below becomes `/en/users` and `/sv/anvandare`, both rendering the same element.
  ```tsx
    {
        id: 'users',
        path: {
          en: '/users',
          sv: '/anvandare'
        },
        element: <h1>Users page<h1>
    },
  ```
- It's then up to the rendered element to read the language from the `useRouter()` hook and load appropriate data.
- If users navigate to the root url, the router will redirect to the default language

```tsx
import { Router } from '@ossy/router-react'

const routerConfig = {
  defaultLanguage: ['en'],
  supportedLanguages: ['en', 'sv'],
  pages: [
    {
        id: 'home',
        path: {
          en: '/',
          sv: '/',
        },
        element: <h1>Home page<h1>
    },
    {
        id: 'users',
        path: {
          en: '/users',
          sv: '/anvandare'
        },
        element: <h1>Users page<h1>
    },
    {
        id: 'user',
        path: {
          en: '/users/:userId',
          sv: '/anvandare/:userId'
        },
        element: <h1>User page<h1>
    },
  ]
}

export const App = () => (
  <html>
    <head>
      <title>My app</title>
    </head>
    <body>
        <Router {...routerConfig} />
    </body>
  </html>
)
```

### Server side rendering
- `@ossy/react-router` provides no server on it's own.
- Meaning it's up to you wich server framework you choose to use, be it Expressjs or something else.
- Then you can use any of the React dom static methods to actually render the page.
- To provide the active url use the url prop on the router.

### Navigation

Navigation is done by getting the `href` through `router.getHref(<pageId>)` and using regular `<a/>` tags to do the actual navigation.

```tsx
const router = useRouter()
<a href={router.getHref('users')}>Users</a>
```

#### Navigation with params
To create an href with params, provide `getHref()` with an options objet.
```tsx
const router = useRouter()
const userId = '111'
<a href={router.getHref({ id: 'user', params: { userId } })}>User ${userId}</a>
```

##### Note on default params
The default params for the `getHref()` call will be taken from the url.
This means that if a user have navigated to `/users/:userId` and you want to build a link to
`/users/:userId/details`, you don't need to supply the userId to the `getHref()` call since it already exists in the url.

#### Navigating to specific page in a specific language
For multi language websites, the default behaviour is that `getHref()` returns the href for the active language, This can be overriden by providing the target language in the options object.
```tsx
const router = useRouter()
<a href={router.getHref({ id: 'home', language: 'en' })}>Home</a>
```

#### Hash and search params
To add hash and search params, add them to the end of the pageId.
```tsx
const router = useRouter()
<a href={router.getHref('@collection#main?sort=desc')}>Collection</a>
```

#### Switching language (same page)
Switching the language of the current page is done by navigating to that route.
To make it easier, if pageId is left out of the getHref call, it will assume you want the current page.
So to make a language switcher could look as easy as this:
```
const router = useRouter()
<a href={router.getHref({ language: 'en' })}>English</a>
<a href={router.getHref({ language: 'sv' })}>Swedish</a>
<a href={router.getHref({ language: 'es' })}>Spanish</a>
```

#### Navigating back
Backwards navigation can be done with the `router.back()` methods.
It just calls `window.history.back()` under the hood.
```tsx
const router = useRouter()
<Button href={router.back()}>Back</Button>
```

#### Redirects
You can redirect by setting the redirect field on the page defenition to the pageId you want to redirect to.
The redirect will take place on the client.
In the example below, the `/services` will redirect to `/contact`.
```tsx
const pages = [
  {
    id: 'services',
    redirect: '@contact',
    path: '/services'
  },
  {
    id: 'contact',
    path: '/contact'
  }
]
```

## Why not open source?

TLDR: It might be in the future.

Right now the source is in a private monorepo with other private packages and workflows.
It's to much of a hassle to break it out right now.