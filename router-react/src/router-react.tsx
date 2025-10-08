'use client'
import React, { createContext, useContext, useCallback } from 'react'
import { MultiLanguagePage, Router as OssyRouter, RouterOptions, SingleLanguagePage, Page as _Page } from '@ossy/router'

export const RouterContext = createContext({
  pages: [] as RouterPage[],
  defaultLanguage: undefined as string | undefined,
  supportedLanguages: [] as string[]
})

export const useRouter = () => useContext(RouterContext)


const appendSlash = (string: string) => string[string.length - 1] === '/'
  ? string : `${string}/`

const prependSlash = (string: string) => string[0] === '/'
  ? string : `/${string}`

const padWithSlash = (string = '') => appendSlash(prependSlash(string))

export const Router = <T extends RouterPage>({
  url,
  pages = [],
  defaultLanguage = undefined,
  supportedLanguages = []
}: RouterProps<T> ) => {
  let href: string;
  let pathname: string;
  let hash: string;
  let search: string;

  if (url) {
    const urlParts = url.match(/([^?#]*)(\?[^#]*)?(#.*)?/);
    href = url;
    pathname = urlParts?.[1] || '';
    hash = urlParts?.[3] || '';
    search = urlParts?.[2] || '';
  } else if (typeof window !== 'undefined') {
     href = window.location.href
     pathname = window.location.pathname
     hash = window.location.hash
     search = hash?.includes('?') ? hash.split('?')[1] :  window.location.search
  } else {
    return <></>
  }

  const isMultiLanguage = supportedLanguages.length > 1 && !!defaultLanguage
  const potentialLanguage = pathname.split('/')[1] || ''
  const language = supportedLanguages.includes(potentialLanguage) ? potentialLanguage : defaultLanguage
  const router = OssyRouter.of<T>({ pages, defaultLanguage, supportedLanguages })
  const params = router.getParamsFromUrl(href)
  const searchParams = new URLSearchParams(search)

  let activePage: T = router.getPageByUrl(href) as T

  if (!activePage) {
    if (isMultiLanguage) {
      if (pathname === '/') {
        if (typeof window !== 'undefined') {
          window.location.href = '/' + defaultLanguage
        }
      }
    }

    activePage = isMultiLanguage
      ? pages.find(page => padWithSlash((page.path as Record<string, string>)[(language as string)]) === '*') as T
      : pages.find(page => padWithSlash(page.path as string) === '*') as T
  }

  if (!activePage) {
    console.warn('[RouterReact] No active page found for', pathname)
    return <></>
  }

  /**
   * @deprecated router do not support setting client side only search params.
   * Use getHref with search params instead
   * 
   * Note: That migh not be true though because we have the back() and navigate() functions....
   */
  const setSearchParam = useCallback((name: string, value: any) => {
    if (typeof window === 'undefined') return
    window.history.pushState({}, '', `${pathname}?${searchParams.toString()}`)
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set(name, value)
    history.pushState({ }, "", `?${newSearchParams.toString()}`)
  }, [searchParams])

  /**
   * takes either a string id or an object with id, params and language
   *  - params.id - id of the page to get the href for
   *  - param.language - language to use for the href, defaults to current language
   *  - param.params - params to use for the href, defaults to current params
   * @param {string|object}
   * @returns {string}
   */
  const getHref = useCallback((getHrefRequest: string | GetHrefRequest | GetHrefOfActivePageByLanguageRequest) => {
    // Can be supplied from params, if not will be taken from active page
    let _pageId: string;
    let _params: Record<string, string> = {}
    let _language: string | undefined;
    
    // Can only be supplied from params, will not be taken from active page
    let hash: string | undefined;
    let search: string | undefined;


    if (typeof getHrefRequest === 'string') {
      _pageId = getHrefRequest
      _params = params
      _language = language
    } else if (isGetHrefOfActivePageByLanguageRequest(getHrefRequest)) {
      _pageId = activePage.id
      _params = params
      _language = getHrefRequest.language
    } else {
      _pageId = getHrefRequest?.id || activePage.id
      _params = getHrefRequest?.params || params
      _language = getHrefRequest?.language || language
    }

    if (_pageId.includes('#')) {
      const [_id, _hash] = _pageId.split('#')
      _pageId = _id
      hash = _hash

      if (hash.includes('?')) {
        const [_hash, _search] = _pageId.split('?')
        hash = _hash
        search = _search
      }

    } else if (_pageId.includes('?')) {
      const [_id, _search] = _pageId.split('?')
      _pageId = _id
      search = _search
    }

    let pathname = router.getPathname({
      id: _pageId.replace('@', ''),
      params: _params,
      language: _language
    })

    if (hash) {
      pathname = pathname + '#' + hash
    }

    if (search) {
      pathname = pathname + '?' + search
    }

    return pathname
  }, [router, language])

  const navigate = useCallback((navigationRequest: string | '@back' | GetHrefRequest | GetHrefOfActivePageByLanguageRequest) => {
    if (typeof window === 'undefined') return
    if (!navigationRequest) return

    if (navigationRequest === '@back') {
      window.history.back()
      return
    }

    const href = getHref(navigationRequest)
    if (!href) return
    window.location.href = href
    
  }, [getHref])

  const back = useCallback(() => {
    if (typeof window === 'undefined') return
    window.history.back()
  }, [])

  const context = {
    href,
    pages,
    language,
    defaultLanguage,
    supportedLanguages,
    params,
    searchParams: {
      ...Array.from(searchParams.entries()).reduce((all, [key, value]) => ({ ...all, [key]: value }), {}),
      // set: setSearchParam
    },
    navigate,
    getHref,
    back,
  }

  if (activePage?.redirect) {
    navigate({ id: activePage.redirect })
  }
  
  const renderedPage = activePage?.element || activePage?.render?.()

  return (
      <RouterContext.Provider value={context}>
         { renderedPage }
      </RouterContext.Provider>
  )

}

export interface RouterProps<T extends RouterPage> extends RouterOptions<T> {
  /** 
   * Render page associated with the given url.
   * Used to render the page on server side where window.location is not available
   * @type string
   * @default undefined
  */
  url?: string;
}

export type RouterPage = SingleLanguageRouterPage | MultiLanguageRouterPage

export interface SingleLanguageRouterPage extends SingleLanguagePage {
  /** If provided the page will redirect to the given page id
   * @default undefined
   * @type {string}
   * @example { redirect: '@home'}
  */
  redirect?: string;
  element?: React.ReactNode;
  render: () => React.ReactNode
}

export interface MultiLanguageRouterPage extends MultiLanguagePage {
  /** If provided the page will redirect to the given page id
   * @default undefined
   * @type {string}
   * @example { redirect: '@home'}
  */
  redirect?: string;
  element?: React.ReactNode;
  render: () => React.ReactNode
}

export interface GetHrefRequest {
  id?: string;
  language?: string;
  params?: Record<string, string>;
}

export interface GetHrefOfActivePageByLanguageRequest {
  language: string;
}

function isGetHrefOfActivePageByLanguageRequest(request: any): request is GetHrefOfActivePageByLanguageRequest {
  return !request.id && request.language !== undefined
}