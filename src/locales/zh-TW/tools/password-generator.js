export default {
  name: '密碼產生器',
  description: '產生安全、隨機的密碼，帶有可自訂選項',

  options: {
    length: '密碼長度',
    quantity: '密碼數量',
    includeLowercase: '小寫字母 (a-z)',
    includeUppercase: '大寫字母 (A-Z)',
    includeNumbers: '數字 (0-9)',
    includeSymbols: '符號 (!@#$%)',
    excludeSimilar: '排除相似字元 (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: '排除模糊符號 ({}<>[]()\'"`\\)',
    requireAll: '要求所有字元類型',
    noConsecutive: '無連續相似字元',
    advancedOptions: '進階選項',
    characterTypes: '字元類型'
  },

  presets: {
    standard: '標準',
    strong: '強壯',
    memorable: '易記',
    pin: 'PIN碼',
    pronounceable: '可發音',
    custom: '自訂',
    easyToRemember: '易於記憶',
    balanced: '平衡',
    secure: '安全'
  },

  strength: {
    title: '密碼強度',
    veryWeak: '非常弱',
    weak: '弱', 
    medium: '中等',
    strong: '強',
    veryStrong: '非常強',
    unknown: '未知'
  },

  actions: {
    generate: '產生密碼',
    regenerate: '重新產生',
    copy: '複製',
    copyAll: '複製全部',
    clear: '清除',
    expand: '展開',
    collapse: '收起'
  },

  messages: {
    copied: '已複製到剪貼簿！',
    allCopied: '所有密碼已複製到剪貼簿！',
    generated: '密碼產生成功',
    invalidOptions: '請至少選擇一種字元類型',
    tooManyPasswords: '最大密碼數量為100',
    clickToGenerate: '點擊上方按鈕產生密碼'
  },

  errors: {
    copyFailed: '無法複製密碼: ',
    copyFailedManual: '複製失敗，請手動複製'
  },

  results: {
    title: '產生的密碼'
  },

  units: {
    passwords: '個密碼'
  },

  tips: {
    title: '密碼安全提示',
    useLength: '使用足夠長的密碼（至少12個字元）提高安全性',
    useDifferent: '對每個網站或服務使用不同的密碼',
    changeRegularly: '定期更換重要帳戶的密碼',
    useManager: '考慮使用密碼管理器安全儲存複雜密碼',
    use2FA: '啟用雙因素認證以增加額外保護層'
  }
};