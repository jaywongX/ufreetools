// middleware.ts

export default function middleware(request: Request) {
    const url = new URL(request.url);
  
    // 获取 Accept-Language 请求头
    const acceptLanguage = request.headers.get('accept-language') || 'en-US,en;q=0.9';
  
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
    const pathname = url.pathname;
    const localizedPath = redirectPath + pathname.replace(/^\/+/, '');
  
    // 构造目标 URL
    const redirectUrl = `https://${url.host}${localizedPath}`;
  
    // 返回重定向响应（307 用于测试，上线后可改为 301）
    return Response.redirect(redirectUrl, 301);
  }
  
  // 控制只对非语言路径生效（排除静态资源和语言路径）
  export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.)(?!zh|en|es|hi|ar|ru|fr|ja|pt|de|id|ko|it|zh-TW|da|el|fi|hu|ms|nl|sv).*)',
  };