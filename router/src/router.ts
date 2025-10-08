
import { padWithSlash } from './utli'

export interface SingleLanguagePage {
    id: string;
    path: string;
}

export interface MultiLanguagePage {
    id: string;
    path: { [language: string]: string };
}

export type Page = SingleLanguagePage | MultiLanguagePage

export interface RouterOptions<T extends Page = Page> {
    pages: T[];
    /** Required for multi language router */
    defaultLanguage?: string;
     /** Required for multi language router */
    supportedLanguages?: string[];
}


/** Router
 * 
 * Handles
 * - build href from route id
 * 
 * */ 
export class Router<T extends Page = Page>  {

    static of<T extends Page = Page> (options: RouterOptions<T>) {
        return new Router<T>(options);
    }

    pages: T[];
    defaultLanguage?: string;
    supportedLanguages?: string[];

    constructor({
        pages,
        defaultLanguage,
        supportedLanguages
    }: RouterOptions<T>) {
        this.pages = pages || [];
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages || [];
    }

    getPageById(id: string) {
        return this.pages.find(page => page.id === id)
            ?? this.pages.find(page => page.id === '404')
    }

    getPageByUrl(_url: string) {
        if (typeof _url !== 'string' ||  this.pages?.length === 0) return

        let url: URL

        try {
            url = new URL(_url)
        } catch {
            // If url is not valid, try to parse it with localhost.com fince URL needs domain, but it wont be used
            url = new URL(_url, 'http://localhost.com')
        }

        const pathname = padWithSlash(url.pathname)
        const pathnameParts = pathname.split('/').filter(x => !!x)

        const exactMatch = this.pages.find(page => {
            const paths = typeof page.path === 'string'
                ? [page.path]
                : Object.entries(page.path).map(([language, path]) => `/${language}${path}`,)

            return paths.map(padWithSlash).includes(pathname)
        })

        if (exactMatch) return exactMatch

        const dynamicMatch = this.pages.find(page => {
            // take path from page and find positions of params
            // then take params from url and insert them into url
            // then see if url matches
            const paths = typeof page.path === 'string'
                ? [page.path]
                : Object.entries(page.path).map(([language, path]) => `/${language}${path}`,)

            const matchContenders = paths.map(path => path
                .split('/')
                .filter(x => !!x)
                .reduce((contender, part, index) => {
                    return part.startsWith(':')
                        ? contender + pathnameParts[index] + '/'
                        : contender + part + '/'
                }, '/')
            )
                
            return matchContenders.includes(pathname)
        })

        return dynamicMatch
    }

    getParamsFromUrl(_url: string): Record<string, string> {
        if (typeof _url !== 'string' ||  this.pages?.length === 0) return {}

        let url: URL

        try {
            url = new URL(_url)
        } catch {
            // If url is not valid, try to parse it with localhost.com fince URL needs domain, but it wont be used
            url = new URL(_url, 'http://localhost.com')
        }

        const pathname = padWithSlash(url.pathname)
        const pathnameParts = pathname.split('/').filter(x => !!x)
        const page = this.getPageByUrl(_url)
        
        let params: Record<string, string> = {}
        
        if (typeof page?.path === 'string') {
            const pageParts = page.path.split('/').filter(x => !!x)
            pageParts.forEach((part, index) => {
                if (part.startsWith(':')) {
                    params[part.slice(1)] = pathnameParts[index]
                }
            })
        }

        if (typeof page?.path === 'object') {
            const language = pathname.split('/')[1]
            const pageParts = page.path[language].split('/').filter(x => !!x)
            pageParts.forEach((part, index) => {
                if (part.startsWith(':')) {
                    params[part.slice(1)] = pathnameParts[index + 1]
                }
            })
        }

        return params
    }

    getPathname({ id, params, language }: { id: string, params?: Record<string, string>, language?: string }): string | undefined {
        const page = this.getPageById(id)
        if (!page) return undefined
        let pathnameTemplate = page.path

        if (typeof pathnameTemplate === 'object') {
            if (!language) throw new Error('[Router][getPathname()] Language is required for multi language router')
            if (!params) return '/' + language + pathnameTemplate[language]

            return pathnameTemplate[language]
                .split('/')
                .filter(x => !!x)
                .reduce((pathanme, part) => {

                    if (part.startsWith(':')) {
                        const key = part.replace(':', '')
                        return pathanme + '/' + params[key]
                    }

                    return pathanme + '/' + part

                }, `/${language}`)
        }

        if (typeof pathnameTemplate === 'string') {
            if (!params) return pathnameTemplate

            if (!pathnameTemplate.includes(':')) {
                return pathnameTemplate
            }

            return pathnameTemplate
                .split('/')
                .filter(x => !!x)
                .reduce((pathanme, part) => {

                    if (part.startsWith(':')) {
                        const key = part.replace(':', '')
                        return pathanme + '/' + params[key]
                    }

                    return pathanme + '/' + part

                }, '')
        }

        return undefined
    }

}