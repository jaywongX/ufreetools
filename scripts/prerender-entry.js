/**
 * 预渲染入口脚本
 *
 * 此脚本由 vite-prerender-plugin 在 Node.js 构建阶段执行。
 * 它使用 Vue SSR 将每个路由渲染为 HTML 字符串。
 *
 * 关键点：
 * - 所有 DOM/Web API 必须被 mock，因为此脚本运行在 Node.js 中
 * - 使用动态 import 确保浏览器 mock 在应用代码加载前就位
 * - 使用 @vue/server-renderer 的 renderToString 进行 SSR
 */

// ============================
// 浏览器 API Mock（在所有 import 之前执行）
// ============================
if (typeof window === 'undefined') {
  const storageMock = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };

  const classListMock = {
    add: () => {},
    remove: () => {},
    contains: () => false,
    toggle: () => false,
  };

  const styleMock = new Proxy({}, {
    get: () => '',
    set: () => true,
  });

  const elementMock = () => ({
    tagName: '',
    style: styleMock,
    classList: classListMock,
    setAttribute: () => {},
    getAttribute: () => null,
    appendChild: () => {},
    removeChild: () => {},
    insertBefore: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    children: [],
    childNodes: [],
    innerHTML: '',
    textContent: '',
    parentElement: null,
    parentNode: null,
    firstChild: null,
    lastChild: null,
    nextSibling: null,
    previousSibling: null,
    nodeType: 1,
    ownerDocument: null,
  });

  // 使用 Object.defineProperty 替代 Object.assign，因为 Node.js 中
  // navigator 等属性是 getter-only，Object.assign 无法覆盖
  const mockGlobals = {
    window: globalThis,
    document: {
      createElement: (tag) => ({ ...elementMock(), tagName: tag.toUpperCase() }),
      createTextNode: (text) => ({ textContent: text, nodeType: 3 }),
      createComment: (text) => ({ textContent: text, nodeType: 8 }),
      createDocumentFragment: () => ({ appendChild: () => {}, childNodes: [], children: [] }),
      getElementById: () => null,
      querySelector: () => null,
      querySelectorAll: () => [],
      body: { appendChild: () => {}, style: styleMock, classList: classListMock, innerHTML: '', querySelector: () => null, querySelectorAll: () => [] },
      head: { appendChild: () => {}, style: styleMock, classList: classListMock, innerHTML: '', querySelector: () => null, querySelectorAll: () => [] },
      addEventListener: () => {},
      removeEventListener: () => {},
      cookie: '',
      readyState: 'complete',
      documentElement: { style: styleMock, lang: 'en', classList: classListMock },
      createEvent: () => ({ initEvent: () => {} }),
      dispatchEvent: () => {},
      implementation: { createHTMLDocument: () => ({ documentElement: elementMock() }) },
    },
    navigator: {
      language: 'en',
      languages: ['en'],
      userAgent: 'Node.js prerender',
      clipboard: { writeText: () => Promise.resolve() },
      onLine: true,
      mediaDevices: { enumerateDevices: () => Promise.resolve([]) },
      connection: { effectiveType: '4g' },
    },
    localStorage: storageMock,
    sessionStorage: storageMock,
    getComputedStyle: () => new Proxy({}, { get: () => '' }),
    requestAnimationFrame: (cb) => setTimeout(cb, 0),
    cancelAnimationFrame: (id) => clearTimeout(id),
    ResizeObserver: class { observe() {} unobserve() {} disconnect() {} },
    IntersectionObserver: class {
      observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
    },
    MutationObserver: class {
      observe() {} disconnect() {} takeRecords() { return []; }
    },
    matchMedia: () => ({
      matches: false, addListener: () => {}, removeListener: () => {},
      addEventListener: () => {}, removeEventListener: () => {},
    }),
    Image: class { constructor() { return {}; } },
    HTMLCanvasElement: class {
      getContext() { return null; }
      toDataURL() { return ''; }
      toBlob() { return ''; }
    },
    HTMLVideoElement: class {},
    HTMLAudioElement: class {},
    Blob: globalThis.Blob || class { constructor() {} size = 0; type = ''; },
    URL: globalThis.URL,
    URLSearchParams: globalThis.URLSearchParams,
    XMLHttpRequest: class {
      open() {} send() {} abort() {}
      setRequestHeader() {} getResponseHeader() { return null; }
      getAllResponseHeaders() { return ''; }
      onreadystatechange = null; readyState = 0; status = 0; responseText = '';
    },
    WebSocket: class {
      constructor() {} send() {} close() {}
      addEventListener() {} removeEventListener() {}
    },
    performance: { now: () => Date.now(), timing: { navigationStart: Date.now() } },
    crypto: globalThis.crypto || {
      getRandomValues: (arr) => {
        for (let i = 0; i < arr.length; i++) arr[i] = Math.floor(Math.random() * 256);
        return arr;
      },
      subtle: { digest: () => Promise.resolve(new ArrayBuffer(32)) },
    },
    alert: () => {},
    confirm: () => true,
    prompt: () => null,
    scrollTo: () => {},
    scrollBy: () => {},
    scrollY: 0,
    scrollX: 0,
    innerHeight: 768,
    innerWidth: 1024,
    outerHeight: 768,
    outerWidth: 1024,
    screen: { width: 1920, height: 1080, availWidth: 1920, availHeight: 1080 },
    devicePixelRatio: 1,
    history: {
      pushState: () => {}, replaceState: () => {}, go: () => {}, back: () => {}, forward: () => {},
      length: 1, state: null,
    },
    atob: (s) => Buffer.from(s, 'base64').toString('binary'),
    btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
    requestIdleCallback: (cb) => setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 50 }), 0),
    cancelIdleCallback: clearTimeout,
  };

  for (const [key, value] of Object.entries(mockGlobals)) {
    Object.defineProperty(globalThis, key, {
      value,
      writable: true,
      configurable: true,
      enumerable: true,
    });
  }

  // 给 globalThis（即 window）添加缺失的 DOM 方法
  const domMethods = ['dispatchEvent', 'addEventListener', 'removeEventListener'];
  for (const method of domMethods) {
    if (typeof globalThis[method] !== 'function') {
      Object.defineProperty(globalThis, method, {
        value: () => {},
        writable: true,
        configurable: true,
        enumerable: true,
      });
    }
  }
}

// ============================
// 预渲染函数
// ============================
export async function prerender({ url }) {
  // 使用动态 import 确保浏览器 mock 在应用代码加载前就位
  const { createSSRApp } = await import('vue');
  const { renderToString } = await import('@vue/server-renderer');
  const { createRouter, createMemoryHistory } = await import('vue-router');

  // 导入 App 组件和路由配置
  const { default: App } = await import('../src/App.vue');
  const { routes } = await import('../src/router/index.js');

  // 从 URL 解析语言
  const urlParts = url.split('/').filter(Boolean);
  const lang = urlParts[0] || 'en';

  // 创建内存路由
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

  // 导航到目标 URL
  router.push(url);
  await router.isReady();

  // 创建 Vue SSR 应用实例
  const app = createSSRApp(App);
  app.use(router);

  // 设置 i18n
  try {
    const { i18n, loadLocaleMessages, defaultLocale } = await import('../src/composables/useLazyLocales');
    const { supportedLanguageCodes } = await import('../src/config/languages.js');
    const targetLang = supportedLanguageCodes.includes(lang) ? lang : defaultLocale;
    const messages = await loadLocaleMessages(targetLang);
    i18n.global.setLocaleMessage(targetLang, messages);
    i18n.global.locale.value = targetLang;
    app.use(i18n);
  } catch (e) {
    console.warn(`[prerender] i18n setup failed for locale "${lang}":`, e.message);
  }

  // 渲染为 HTML 字符串
  let html;
  try {
    html = await renderToString(app);
  } catch (e) {
    console.warn(`[prerender] renderToString failed for "${url}":`, e.message);
    html = '';
  }

  return {
    html,
    links: new Set(),
  };
}
