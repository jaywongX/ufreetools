import { createI18n } from 'vue-i18n'

const loadedLanguages = {}
export const defaultLocale = 'en'

// 用 Vite 的 glob 收集所有语言包
const localeModules = import.meta.glob('../locales/*/index.js')
export async function loadLocaleMessages(locale) {
  if (loadedLanguages[locale]) {
    return loadedLanguages[locale]
  }
  // 动态导入
  const importFn = localeModules[`../locales/${locale}/index.js`]
  if (!importFn) {
    throw new Error(`Locale file for "${locale}" not found`)
  }
  const messages = (await importFn()).default
  loadedLanguages[locale] = messages
  return messages
}

// 配置i18n
export const i18n = createI18n({
  legacy: false, // 使用组合式API
  locale: defaultLocale,
  messages: { [defaultLocale]: {} }
})