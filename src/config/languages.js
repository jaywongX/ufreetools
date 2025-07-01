/**
 * Supported languages configuration
 */
export const languages = [
  { code: 'en', name: 'English', chineseName: '英文', nativeName: 'English' },
  { code: 'zh', name: '简体中文', chineseName: '简体中文', nativeName: '简体中文' },
  { code: 'es', name: 'Spanish', chineseName: '西班牙文', nativeName: 'Español' },
  { code: 'hi', name: 'Hindi', chineseName: '印地文', nativeName: 'हिंदी' },
  { code: 'ar', name: 'Arabic', chineseName: '阿拉伯文', nativeName: 'العربية' },
  { code: 'ru', name: 'Russian', chineseName: '俄文', nativeName: 'Русский язык' },
  { code: 'fr', name: 'French', chineseName: '法文', nativeName: 'Français' },
  { code: 'ja', name: 'Japanese', chineseName: '日文', nativeName: '日本語' },
  { code: 'pt', name: 'Portuguese', chineseName: '葡萄牙文', nativeName: 'Português' },
  { code: 'de', name: 'German', chineseName: '德文', nativeName: 'Deutsch' },
  { code: 'id', name: 'Indonesian', chineseName: '印尼文', nativeName: 'Indonesia' },
  // { code: 'it', name: 'Italian', chineseName: '意大利文', nativeName: 'Italiano' },
  // { code: 'ko', name: 'Korean', chineseName: '韩文', nativeName: '한국어' },
  // { code: 'nl', name: 'Dutch', chineseName: '荷兰文', nativeName: 'Nederlands' },
  // { code: 'sv', name: 'Swedish', chineseName: '瑞典文', nativeName: 'Svenska' },
  // { code: 'zh-TW', name: '繁體中文', chineseName: '繁体中文', nativeName: '繁體中文' },
  // { code: 'da', name: 'Danish', chineseName: '丹麦文', nativeName: 'Dansk' },
  // { code: 'el', name: 'Greek', chineseName: '希腊文', nativeName: 'Ελληνικά' },
  // { code: 'fi', name: 'Finnish', chineseName: '芬兰文', nativeName: 'Suomi' },
  // { code: 'hu', name: 'Hungarian', chineseName: '匈牙利文', nativeName: 'Magyar' },
  // { code: 'ms', name: 'Malay', chineseName: '马来文', nativeName: 'Melayu' },

];

export const defaultLanguage = 'en';

// Get supported language
export const supportedLanguages = languages;

// Get supported language codes
export const supportedLanguageCodes = languages.map(lang => lang.code);

// Get supported language names
export const supportedLanguageNames = languages.map(lang => lang.name);

// Get supported language native names
export const supportedLanguageNativeNames = languages.map(lang => lang.nativeName);

// Get supported language chinese names
export const supportedLanguageChineseNames = languages.map(lang => lang.chineseName);

// Get supported language codes and connect with or
export const supportedLanguageCodesWithOr = supportedLanguageCodes.join('|');

// Check if a language code is supported
export const isLanguageSupported = (code) => supportedLanguageCodes.includes(code); 