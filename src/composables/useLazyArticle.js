import { onMounted, watch } from 'vue'
import { defaultLocale } from './useLazyLocales'

// 全局缓存对象
const articleCache = {}
// 跟踪已注入的 article
const injectedArticles = new Set()

// 用 Vite 的 import.meta.glob 动态收集所有 article 文件
const articleModules = import.meta.glob('../locales/*/tools/*-article.js');

// 缓存 key
function cacheKey(lang, toolId) {
    return `${lang}_${toolId}`
}

// 加载工具article
export async function loadToolArticle(lang, toolId) {
    // 获取当前语言
    lang = lang || i18n.global.locale.value;
    // 构造相对路径
    const key = `../locales/${lang}/tools/${toolId}-article.js`;
    const importFn = articleModules[key];
    if (!importFn) {
        // 可以 fallback 到英文或返回 null
        const fallbackKey = `../locales/${defaultLocale}/tools/${toolId}-article.js`;
        if (articleModules[fallbackKey]) {
            return (await articleModules[fallbackKey]()).default;
        }
        return null;
    }
    return (await importFn()).default;
}

// 加载工具article并注入
export async function loadToolArticleAndInject(useI18n, toolId) {
    const { locale, mergeLocaleMessage } = useI18n
    const lang = locale.value
    const key = cacheKey(lang, toolId)

    // 检查是否已经注入过
    if (injectedArticles.has(key)) {
        return // 已经注入过，直接返回
    }

    if (articleCache[key]) {
        // 已缓存，直接注入
        mergeLocaleMessage(lang, {
            tools: {
                [toolId]: { article: articleCache[key] }
            }
        })
        injectedArticles.add(key) // 标记为已注入
        return
    }
    const article = await loadToolArticle(lang, toolId)
    if (article) {
        articleCache[key] = article
        mergeLocaleMessage(lang, {
            tools: {
                [toolId]: { article }
            }
        })
        injectedArticles.add(key) // 标记为已注入
    }
}