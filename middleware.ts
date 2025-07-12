// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const acceptLanguage = req.headers.get('accept-language') || 'en-US,en;q=0.9';

    // 提取首选语言代码（如 zh、en）
    const langMatch = acceptLanguage.match(/([a-zA-Z-]+)/);
    const lang = langMatch ? langMatch[1].toLowerCase() : 'en';

    let redirectPath = '/en/';

    if (lang.startsWith('zh-TW')) {
        redirectPath = '/zh-TW/';
    } else if (lang.startsWith('zh')) {
        redirectPath = '/zh/';
    } else if (lang.startsWith('es')) {
        redirectPath = '/es/';
    } else if (lang.startsWith('hi')) {
        redirectPath = '/hi/';
    } else if (lang.startsWith('ar')) {
        redirectPath = '/ar/';
    } else if (lang.startsWith('ru')) {
        redirectPath = '/ru/';
    } else if (lang.startsWith('fr')) {
        redirectPath = '/fr/';
    } else if (lang.startsWith('ja')) {
        redirectPath = '/ja/';
    } else if (lang.startsWith('pt')) {
        redirectPath = '/pt/';
    } else if (lang.startsWith('de')) {
        redirectPath = '/de/';
    } else if (lang.startsWith('id')) {
        redirectPath = '/id/';
    } else if (lang.startsWith('ko')) {
        redirectPath = '/ko/';
    } else if (lang.startsWith('it')) {
        redirectPath = '/it/';
    }

    // 拼接完整路径（保留原始路径部分，如 /about）
    const pathname = new URL(req.url).pathname;
    const localizedPath = redirectPath + pathname.replace(/^\/+/, '');

    return NextResponse.redirect(new URL(localizedPath, req.url), 301);
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.)(?!zh|en|es|hi|ar|ru|fr|ja|pt|de|id|ko|it|zh-TW|da|el|fi|hu|ms|nl|sv).*)',
};