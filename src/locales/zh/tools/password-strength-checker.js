export default {
  name: '密码强度检查器',
  description: '检查和分析密码强度，提供详细的安全指标',

  input: {
    title: '输入密码进行检测',
    placeholder: '在此输入密码...',
    showPassword: '显示密码',
    hidePassword: '隐藏密码',
    clear: '清除',
    generate: '生成密码',
    check: '检查强度',
    empty: '请输入密码以查看评估结果',
    disclaimer: '输入任何密码进行安全强度评估。您的密码不会被存储或发送到任何服务器。'
  },

  results: {
    title: '密码强度评估',
    strength: '强度',
    score: '得分',
    entropy: '熵值',
    crackTime: '估计破解时间',
    very_weak: '非常弱',
    weak: '弱',
    fair: '一般',
    good: '好',
    strong: '强',
    very_strong: '非常强',
    feedback: '反馈',
    suggestions: '改进建议',
    warnings: '检测到的问题',
    noWarnings: '未检测到警告',
    noSuggestions: '没有可用的建议'
  },

  details: {
    title: '详细分析',
    length: '密码长度',
    charset: '字符多样性',
    patterns: '使用的模式',
    uniqueChars: '唯一字符',
    uppercase: '大写字母',
    lowercase: '小写字母',
    numbers: '数字',
    symbols: '特殊符号',
    repetitions: '重复',
    sequences: '序列',
    dictionary: '字典词',
    leaked: '曾泄露',
    reused: '重复使用的模式'
  },

  patterns: {
    dictionary: '字典词',
    sequence: '连续字符',
    repeat: '重复字符',
    spatial: '空间模式（键盘）',
    date: '日期模式',
    year: '年份模式',
    common: '常见密码',
    name: '名称模式',
    reversal: '反向词',
    leet: '黑客语言替换',
    predictable: '可预测模式'
  },

  crackTimes: {
    instantly: '瞬间',
    seconds: '几秒内',
    minutes: '几分钟内',
    hours: '几小时内',
    days: '几天内',
    months: '几个月内',
    years: '几年内',
    centuries: '几个世纪内',
    forever: '实际上永远'
  },

  suggestions: {
    addWords: '添加更多单词或字符',
    addSymbols: '包含符号',
    addNumbers: '包含数字',
    upperLower: '混合大小写',
    avoidPatterns: '避免使用键盘上的连续字符或重复字符',
    avoidCommon: '避免使用基于词典的密码或常见密码，哪怕通过替换字母为数字（例如把"e"换成"3"）',
    avoidPersonal: '避免个人信息',
    avoidDictionary: '避免字典词',
    usePassphrase: '考虑使用连词组合、不相关单词的组合或首字母缩略词来创建记忆性更好的强密码',
    increaseLonger: '增加密码长度',
    avoidSequence: '避免顺序模式',
    avoidRepeated: '避免重复字符',
    avoidDates: '避免日期和年份',
    addMoreChars: '增加密码长度至少12个字符，每增加一个字符，破解难度都会成倍增加',
    addTypes: '添加{types}以增加密码复杂度',
    useManager: '使用密码管理器来生成和管理强密码，每个网站使用不同的密码'
  },

  generator: {
    title: '密码生成器',
    length: '长度',
    options: '选项',
    uppercase: '包含大写字母',
    lowercase: '包含小写字母',
    numbers: '包含数字',
    symbols: '包含符号',
    excludeSimilar: '排除相似字符',
    excludeAmbiguous: '排除歧义字符',
    generate: '生成密码',
    passphrase: '生成密码短语',
    wordCount: '单词数量',
    separator: '单词分隔符',
    capitalize: '首字母大写',
    includeNumber: '包含数字',
    includeSymbol: '包含符号'
  },

  common: {
    copy: '复制到剪贴板',
    save: '保存到历史',
    clear: '清除',
    refresh: '刷新',
    copied: '已复制到剪贴板',
    saved: '已保存到历史',
    history: '历史记录',
    noHistory: '没有可用的历史记录',
    common: '常见'
  },

  breach: {
    title: '数据泄露检查',
    description: '检查您的密码是否出现在已知的数据泄露中',
    disclaimer: '您的密码永远不会通过网络发送。只检查部分哈希值。',
    checkButton: '检查泄露',
    safe: '在已知泄露中未发现',
    found: '在{count}个数据泄露中发现！',
    warning: '此密码已在数据泄露中被曝光，不应再使用。',
    checking: '检查泄露中...'
  },

  settings: {
    title: '设置',
    algorithm: '强度算法',
    history: '保存历史',
    clearHistory: '清除历史',
    breachCheck: '检查泄露',
    timeout: '超时后清除',
    timeoutDuration: '超时时长（秒）',
    clipboard: '复制后清除剪贴板',
    language: '语言'
  },

  score: {
    none: '无评分'
  },

  descriptions: {
    none: '无法评估密码强度',
    veryWeak: '这个密码非常容易被猜测或破解，极其不安全',
    weak: '这个密码安全性较低，可能会被轻易破解',
    fair: '这个密码具有一定安全性，但仍有提升空间',
    good: '这是一个安全性较高的密码，破解难度较大',
    veryStrong: '这是一个非常安全的密码，几乎不可能被破解'
  },

  length: {
    none: '无',
    tooShort: '太短',
    acceptable: '可接受',
    good: '良好',
    excellent: '优秀'
  },

  lengthMessage: {
    none: '尚未输入密码',
    needMore: '至少需要{min}个字符',
    better: '{min}个或更多字符会更安全',
    good: '很好！长密码更难被破解',
    excellent: '优秀的长度！'
  },

  complexity: {
    none: '无',
    veryLow: '非常低',
    fair: '一般',
    good: '良好',
    excellent: '优秀'
  },

  issues: {
    tooShort: '密码太短（不足8个字符）',
    noUppercase: '没有包含大写字母',
    noLowercase: '没有包含小写字母',
    noNumbers: '没有包含数字',
    noSymbols: '没有包含特殊符号',
    hasSequence: '包含常见键盘序列（如"qwerty"或"123456"）',
    hasRepeated: '包含重复的字符（如"aaa"或"111"）',
    commonPassword: '使用了常见或易猜测的密码'
  },

  characters: '个字符',

  tips: {
    title: '密码安全小贴士',
    length: '使用至少12个字符的密码',
    mix: '混合使用大写、小写字母、数字和特殊符号',
    avoid: '避免使用常见单词、短语或个人信息',
    unique: '不要在多个网站使用相同的密码',
    manager: '考虑使用密码管理器来生成和存储复杂密码'
  }
}; 