import casual from 'casual';
import { MultiLanguagePage, SingleLanguagePage } from './router';

export interface ExtendedSingleLangaugePage extends SingleLanguagePage {
    matchingUrls: string[]
}

export interface ExtendedMultiLanguagePage extends MultiLanguagePage {
    matchingUrls: string[]
}

export class MockData {

 static getPagesForSingleLanguageRouter() {
    return [
        {
            id: 'home',
            path: '/',
            matchingUrls: [
                '',
                '/',
            ]
        },
        {
            id: 'users',
            path: '/users',
            matchingUrls: [
                '/users',
            ]
        },
        {
            id: 'user',
            path: '/users/:id',
            matchingUrls: [
                `/users/${casual.uuid}`,
            ]
        },
        {
            id: 'userPosts',
            path: '/users/:id/posts',
            matchingUrls: [
                `/users/${casual.uuid}/posts`,
            ]
        },
        {
            id: 'userPost',
            path: '/users/:id/posts/:postId',
            matchingUrls: [
                `/users/${casual.uuid}/posts/${casual.uuid}`,
            ]
        },
        {
            id: 'userPostComments',
            path: '/users/:id/posts/:postId/comments',
            matchingUrls: [
                `/users/${casual.uuid}/posts/${casual.uuid}/comments`,
            ]
        },
    ]
} 

static getPagesForMultiLanguageRouter() {
    return [
        {
            id: 'home',
            path: {
                en: '/',
                es: '/',
            },
            matchingUrls: [
                '/en',
                '/es'
            ]
        },
        {
            id: 'users',
            path: {
                en: '/users',
                es: '/usuarios',
            },
            matchingUrls: [
                '/en/users',
                '/es/usuarios'
            ]
        },
        {
            id: 'user',
            path: {
                en: '/users/:id',
                es: '/usuarios/:id',
            },
            matchingUrls: [
                `/en/users/${casual.uuid}`,
                `/es/usuarios/${casual.uuid}`
            ]
        },
        {
            id: 'userPosts',
            path: {
                en: '/users/:id/posts',
                es: '/usuarios/:id/posts',
            },
            matchingUrls: [
                `/en/users/${casual.uuid}/posts`,
                `/es/usuarios/${casual.uuid}/posts`
            ]
        },
        {
            id: 'userPost',
            path: {
                en: '/users/:id/posts/:postId',
                es: '/usuarios/:id/posts/:postId',
            },
            matchingUrls: [
                `/en/users/${casual.uuid}/posts/${casual.uuid}`,
                `/es/usuarios/${casual.uuid}/posts/${casual.uuid}`
            ]
        },
        {
            id: 'userPostComments',
            path: {
                en: '/users/:id/posts/:postId/comments',
                es: '/usuarios/:id/posts/:postId/comentarios',
            },
            matchingUrls: [
                `/en/users/${casual.uuid}/posts/${casual.uuid}/comments`,
                `/es/usuarios/${casual.uuid}/posts/${casual.uuid}/comentarios`
            ]
        },
            
    ]
}
}