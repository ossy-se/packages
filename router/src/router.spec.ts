import { Router } from './router';
import { beforeEach, describe, expect, it } from '@jest/globals';
import casual from 'casual';
import { MockData, ExtendedSingleLangaugePage, ExtendedMultiLanguagePage } from './data.mock';
import { padWithSlash } from './utli'

describe('Router', () => {

    describe('single language router', () => {
        const pages = MockData.getPagesForSingleLanguageRouter()
        let router: Router<ExtendedSingleLangaugePage>;

        beforeEach(() => {
            router = Router.of<ExtendedSingleLangaugePage>({ pages });
        })

        describe('getPageById()', () => {

            describe('given an id that exist in any of the pages id field', () => {
                it('should return the route with matching id field', () => {
                    const page = router.pages[casual.integer(0, router.pages.length - 1)];
                    expect(router.getPageById(page.id)).toEqual(page);
                })
            })

            // move to react implementation
            // describe('given an id that does not exist in any of the routes id field', () => {
            //     it('should return the route with an id of 404', () => {
            //         expect(router.getPageById(casual.uuid).id).toEqual('404');
            //     })
            // })

        })

        describe('getPageByUrl()', () => {

            describe('given an url with domain', () => {
                pages.forEach(page => {
                    page.matchingUrls.forEach(pathname => {
                        const url = `https://${casual.domain}${padWithSlash(pathname)}`
                        const hash = casual.word
                        const query = casual.word
                        const query2 = casual.word
                        const queryValue = casual.word
                        const queryValue2 = casual.word
    
                        const pathnameAdditions = [
                            `?${query}=${queryValue}`,
                            `?${query}=${queryValue}&${query2}=${queryValue2}`,
                            `#${hash}`,
                            `#${hash}?${query}=${queryValue}`,
                            `#${hash}?${query}=${queryValue}&${query2}=${queryValue2}`,
                        ]
    
                        it(`page with path of ${page.path}, should math url of ${url}`, () => {
                            expect(router.getPageByUrl(url)).toEqual(page)
                        })
    
                        pathnameAdditions.forEach(addition => {
                            const urlWithAddition = `${url}${addition}`
                            it(`page with path of ${page.path}, should math url of ${urlWithAddition} `, () => {
                                expect(router.getPageByUrl(urlWithAddition)).toEqual(page)
                            })
                        })
                    })
                })
            })

            describe('given an url without domain', () => {
                pages.forEach(page => {
                    page.matchingUrls.forEach(pathname => {
                        const url = pathname
                        const hash = casual.word
                        const query = casual.word
                        const query2 = casual.word
                        const queryValue = casual.word
                        const queryValue2 = casual.word
    
                        const pathnameAdditions = [
                            `?${query}=${queryValue}`,
                            `?${query}=${queryValue}&${query2}=${queryValue2}`,
                            `#${hash}`,
                            `#${hash}?${query}=${queryValue}`,
                            `#${hash}?${query}=${queryValue}&${query2}=${queryValue2}`,
                        ]
    
                        it(`page with path of ${page.path}, should math url of ${url}`, () => {
                            expect(router.getPageByUrl(url)).toEqual(page)
                        })
    
                        pathnameAdditions.forEach(addition => {
                            const urlWithAddition = `${url}${addition}`
                            it(`page with path of ${page.path}, should math url of ${urlWithAddition} `, () => {
                                expect(router.getPageByUrl(urlWithAddition)).toEqual(page)
                            })
                        })
                    })
                })
            })


        })

        describe('getParamsFromUrl()', () => {
            describe('given an url that matches a page path with params', () => {
                it('should return the params as an object', () => {
                    const param1 = casual.uuid
                    const param2 = casual.uuid
                    const router = Router.of({ pages: [
                        { id: 'home', path: '/'},
                        { id: 'user', path: '/users/:id/posts/:postId' }
                    ]})
                    const params = router.getParamsFromUrl(`https://${casual.domain}/users/${param1}/posts/${param2}`)
                    expect(params).toEqual({ id: param1, postId: param2 })
                })
            })
        })

        describe('getPathname()', () => {

            describe('given a page id', () => {
                it('should return the pathanme of the page', () => {
                    const router = Router.of({ pages: [
                        { id: 'home', path: '/'},
                        { id: 'users', path: '/users' }
                    ]})
                    const pathname = router.getPathname({ id: 'users' })
                    expect(pathname).toEqual('/users')
                })
            })

            describe('given a page id and params', () => {
                it('should return the pathname with params interpolated into the pathname', () => {
                    const param1 = casual.uuid
                    const param2 = casual.uuid
                    const router = Router.of({ pages: [
                        { id: 'home', path: '/'},
                        { id: 'userPostSingle', path: '/users/:userId/posts/:postId' }
                    ]})
                    const pathname = router.getPathname({ id: 'userPostSingle', params: { userId: param1, postId: param2 } })
                    expect(pathname).toEqual(`/users/${param1}/posts/${param2}`)
                })
            })
        })

    })

    describe('multi language router', () => {
        const pages = MockData.getPagesForMultiLanguageRouter()
        let router: Router<ExtendedMultiLanguagePage>;

        beforeEach(() => {
            router = Router.of<ExtendedMultiLanguagePage>({ pages });
        })

        describe('getPageById()', () => {
            describe('given an id that exist in any of the pages id field', () => {
                it('should return the route with matching id field', () => {
                    const page = router.pages[casual.integer(0, router.pages.length - 1)];
                    expect(router.getPageById(page.id)).toEqual(page);
                })
            })
        })

        describe('getPageByUrl()', () => {

            describe('given an url with domain', () => {
                pages.forEach(page => {
                    page.matchingUrls.forEach(pathname => {
                        const url = `https://${casual.domain}${padWithSlash(pathname)}`
                        const hash = casual.word
                        const query = casual.word
                        const query2 = casual.word
                        const queryValue = casual.word
                        const queryValue2 = casual.word
    
                        const pathnameAdditions = [
                            `?${query}=${queryValue}`,
                            `?${query}=${queryValue}&${query2}=${queryValue2}`,
                            `#${hash}`,
                            `#${hash}?${query}=${queryValue}`,
                            `#${hash}?${query}=${queryValue}&${query2}=${queryValue2}`,
                        ]
    
                        it(`page with path of ${page.path}, should math url of ${url}`, () => {
                            expect(router.getPageByUrl(url)).toEqual(page)
                        })
    
                        pathnameAdditions.forEach(addition => {
                            const urlWithAddition = `${url}${addition}`
                            it(`page with path of ${page.path}, should math url of ${urlWithAddition} `, () => {
                                expect(router.getPageByUrl(urlWithAddition)).toEqual(page)
                            })
                        })
    
                    })
                })
            })

            describe('given an url without domain', () => {
                pages.forEach(page => {
                    page.matchingUrls.forEach(pathname => {
                        const url = pathname
                        const hash = casual.word
                        const query = casual.word
                        const query2 = casual.word
                        const queryValue = casual.word
                        const queryValue2 = casual.word
    
                        const pathnameAdditions = [
                            `?${query}=${queryValue}`,
                            `?${query}=${queryValue}&${query2}=${queryValue2}`,
                            `#${hash}`,
                            `#${hash}?${query}=${queryValue}`,
                            `#${hash}?${query}=${queryValue}&${query2}=${queryValue2}`,
                        ]
    
                        it(`page with path of ${page.path}, should math url of ${url}`, () => {
                            expect(router.getPageByUrl(url)).toEqual(page)
                        })
    
                        pathnameAdditions.forEach(addition => {
                            const urlWithAddition = `${url}${addition}`
                            it(`page with path of ${page.path}, should math url of ${urlWithAddition} `, () => {
                                expect(router.getPageByUrl(urlWithAddition)).toEqual(page)
                            })
                        })
    
                    })
                })
            })
 
        })

        describe('getParamsFromUrl()', () => {
            describe('given an url that matches a page path with params', () => {
                it('should return the params as an object', () => {
                    const param1 = casual.uuid
                    const param2 = casual.uuid
                    const router = Router.of({ pages: [
                        { id: 'home', path: { en: '/', sv: '/' } },
                        { id: 'user', path: { en: '/users/:id/posts/:postId', sv: '/anvandare/:id/inlagg/:postId' } }
                    ]})
                    const paramsEN = router.getParamsFromUrl(`https://${casual.domain}/en/users/${param1}/posts/${param2}`)
                    const paramsSV = router.getParamsFromUrl(`https://${casual.domain}/sv/anvandare/${param1}/inlagg/${param2}`)
                    expect(paramsEN).toEqual({ id: param1, postId: param2 })
                    expect(paramsSV).toEqual({ id: param1, postId: param2 })
                })
            })
        })

        describe('getPathname()', () => {

            describe('given a page id', () => {
                it('should return the pathname of the page with language included', () => {
                    const router = Router.of({ pages: [
                        { id: 'home', path: { en: '/', sv: '/' } },
                        { id: 'users', path: { en: '/users', sv: '/anvandare' } }
                    ]})
                    const pathnameEN = router.getPathname({ id: 'users', language: 'en' })
                    const pathnameSV = router.getPathname({ id: 'users', language: 'sv' })
                    expect(pathnameEN).toEqual('/en/users')
                    expect(pathnameSV).toEqual('/sv/anvandare')
                })
            })

            describe('given a page id and params', () => {
                it('should return the pathname with params interpolated into the pathname, and language included', () => {
                    const param1 = casual.uuid
                    const param2 = casual.uuid
                    const router = Router.of({ pages: [
                        { id: 'home', path: '/'},
                        { id: 'userPostSingle', path: {
                            en: '/users/:userId/posts/:postId',
                            sv: '/anvandare/:userId/inlagg/:postId'
                        } }
                    ]})
                    const pathnameEN = router.getPathname({ id: 'userPostSingle', language: 'en', params: { userId: param1, postId: param2 } })
                    const pathnameSV = router.getPathname({ id: 'userPostSingle', language: 'sv', params: { userId: param1, postId: param2 } })
                    expect(pathnameEN).toEqual(`/en/users/${param1}/posts/${param2}`)
                    expect(pathnameSV).toEqual(`/sv/anvandare/${param1}/inlagg/${param2}`)
                })
            })
        })

        
    })

})



// test cases
// single language by id

// router features
// navigate by page id
// navigate to the same page in a different language (updating the url) by language code
// navigate to the same page in a different language (updating the url) by language code and page id
// build proper hrefs for links by page id and params
// match url to page id
// get params from url

// default routes/pages
    // if no page with / (root) in multi language config, should redirect to default language (/:languageCode)

// should take in string or location object.
// if a string is passed the router will parse it to a location object
// should work on node and browser
