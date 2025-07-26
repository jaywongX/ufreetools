export default {
  name: '密碼強度檢查器',
  description: '檢查和分析密碼強度，提供詳細的安全指標',

  input: {
    title: '輸入密碼進行檢測',
    placeholder: '在此輸入密碼...',
    showPassword: '顯示密碼',
    hidePassword: '隱藏密碼',
    clear: '清除',
    generate: '產生密碼',
    check: '檢查強度',
    empty: '請輸入密碼以查看評估結果',
    disclaimer: '輸入任何密碼進行安全強度評估。您的密碼不會被儲存或發送到任何伺服器。'
  },

  results: {
    title: '密碼強度評估',
    strength: '強度',
    score: '得分',
    entropy: '熵值',
    crackTime: '估計破解時間',
    very_weak: '非常弱',
    weak: '弱',
    fair: '一般',
    good: '好',
    strong: '強',
    very_strong: '非常強',
    feedback: '回饋',
    suggestions: '改進建議',
    warnings: '檢測到的問題',
    noWarnings: '未檢測到警告',
    noSuggestions: '沒有可用的建議'
  },

  details: {
    title: '詳細分析',
    length: '密碼長度',
    charset: '字元多樣性',
    patterns: '使用的模式',
    uniqueChars: '唯一字元',
    uppercase: '大寫字母',
    lowercase: '小寫字母',
    numbers: '數字',
    symbols: '特殊符號',
    repetitions: '重複',
    sequences: '序列',
    dictionary: '字典詞',
    leaked: '曾洩露',
    reused: '重複使用的模式'
  },

  patterns: {
    dictionary: '字典詞',
    sequence: '連續字元',
    repeat: '重複字元',
    spatial: '空間模式（鍵盤）',
    date: '日期模式',
    year: '年份模式',
    common: '常見密碼',
    name: '名稱模式',
    reversal: '反向詞',
    leet: '黑客語言替換',
    predictable: '可預測模式'
  },

  crackTimes: {
    instantly: '瞬間',
    seconds: '幾秒內',
    minutes: '幾分鐘內',
    hours: '幾小時內',
    days: '幾天內',
    months: '幾個月內',
    years: '幾年內',
    centuries: '幾個世紀內',
    forever: '實際上永遠'
  },

  suggestions: {
    addWords: '添加更多單詞或字元',
    addSymbols: '包含符號',
    addNumbers: '包含數字',
    upperLower: '混合大小寫',
    avoidPatterns: '避免使用鍵盤上的連續字元或重複字元',
    avoidCommon: '避免使用基於詞典的密碼或常見密碼，哪怕通過替換字母為數字（例如把"e"換成"3"）',
    avoidPersonal: '避免個人資訊',
    avoidDictionary: '避免字典詞',
    usePassphrase: '考慮使用連詞組合、不相關單詞的組合或首字母縮略詞來創建記憶性更好的強密碼',
    increaseLonger: '增加密碼長度',
    avoidSequence: '避免順序模式',
    avoidRepeated: '避免重複字元',
    avoidDates: '避免日期和年份',
    addMoreChars: '增加密碼長度至少12個字元，每增加一個字元，破解難度都會成倍增加',
    addTypes: '添加{types}以增加密碼複雜度',
    useManager: '使用密碼管理器來產生和管理強密碼，每個網站使用不同的密碼'
  },

  generator: {
    title: '密碼產生器',
    length: '長度',
    options: '選項',
    uppercase: '包含大寫字母',
    lowercase: '包含小寫字母',
    numbers: '包含數字',
    symbols: '包含符號',
    excludeSimilar: '排除相似字元',
    excludeAmbiguous: '排除歧義字元',
    generate: '產生密碼',
    passphrase: '產生密碼短語',
    wordCount: '單詞數量',
    separator: '單詞分隔符',
    capitalize: '首字母大寫',
    includeNumber: '包含數字',
    includeSymbol: '包含符號'
  },

  common: {
    copy: '複製到剪貼簿',
    save: '儲存到歷史',
    clear: '清除',
    refresh: '刷新',
    copied: '已複製到剪貼簿',
    saved: '已儲存到歷史',
    history: '歷史記錄',
    noHistory: '沒有可用的歷史記錄',
    common: '常見'
  },

  breach: {
    title: '資料洩露檢查',
    description: '檢查您的密碼是否出現在已知的資料洩露中',
    disclaimer: '您的密碼永遠不會通過網路發送。只檢查部分雜湊值。',
    checkButton: '檢查洩露',
    safe: '在已知洩露中未發現',
    found: '在{count}個資料洩露中發現！',
    warning: '此密碼已在資料洩露中被曝光，不應再使用。',
    checking: '檢查洩露中...'
  },

  settings: {
    title: '設定',
    algorithm: '強度算法',
    history: '儲存歷史',
    clearHistory: '清除歷史',
    breachCheck: '檢查洩露',
    timeout: '逾時後清除',
    timeoutDuration: '逾時時長（秒）',
    clipboard: '複製後清除剪貼簿',
    language: '語言'
  },

  score: {
    none: '無評分'
  },

  descriptions: {
    none: '無法評估密碼強度',
    veryWeak: '這個密碼非常容易被猜測或破解，極其不安全',
    weak: '這個密碼安全性較低，可能會被輕易破解',
    fair: '這個密碼具有一定安全性，但仍有提升空間',
    good: '這是一個安全性較高的密碼，破解難度較大',
    veryStrong: '這是一個非常安全的密碼，幾乎不可能被破解'
  },

  length: {
    none: '無',
    tooShort: '太短',
    acceptable: '可接受',
    good: '良好',
    excellent: '優秀'
  },

  lengthMessage: {
    none: '尚未輸入密碼',
    needMore: '至少需要{min}個字元',
    better: '{min}個或更多字元會更安全',
    good: '很好！長密碼更難被破解',
    excellent: '優秀的長度！'
  },

  complexity: {
    none: '無',
    veryLow: '非常低',
    fair: '一般',
    good: '良好',
    excellent: '優秀'
  },

  issues: {
    tooShort: '密碼太短（不足8個字元）',
    noUppercase: '沒有包含大寫字母',
    noLowercase: '沒有包含小寫字母',
    noNumbers: '沒有包含數字',
    noSymbols: '沒有包含特殊符號',
    hasSequence: '包含常見鍵盤序列（如"qwerty"或"123456"）',
    hasRepeated: '包含重複的字元（如"aaa"或"111"）',
    commonPassword: '使用了常見或易猜測的密碼'
  },

  characters: '個字元',

  tips: {
    title: '密碼安全小貼士',
    length: '使用至少12個字元的密碼',
    mix: '混合使用大寫、小寫字母、數字和特殊符號',
    avoid: '避免使用常見單詞、短語或個人資訊',
    unique: '不要在多個網站使用相同的密碼',
    manager: '考慮使用密碼管理器來產生和儲存複雜密碼'
  }
};