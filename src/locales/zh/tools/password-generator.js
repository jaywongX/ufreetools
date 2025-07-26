export default {
  name: '密码生成器',
  description: '生成安全、随机的密码，带有可自定义选项',

  options: {
    length: '密码长度',
    quantity: '密码数量',
    includeLowercase: '小写字母 (a-z)',
    includeUppercase: '大写字母 (A-Z)',
    includeNumbers: '数字 (0-9)',
    includeSymbols: '符号 (!@#$%)',
    excludeSimilar: '排除相似字符 (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: '排除模糊符号 ({}<>[]()\'"`\\)',
    requireAll: '要求所有字符类型',
    noConsecutive: '无连续相似字符',
    advancedOptions: '高级选项',
    characterTypes: '字符类型'
  },

  presets: {
    standard: '标准',
    strong: '强壮',
    memorable: '易记',
    pin: 'PIN码',
    pronounceable: '可发音',
    custom: '自定义',
    easyToRemember: '易于记忆',
    balanced: '平衡',
    secure: '安全'
  },

  strength: {
    title: '密码强度',
    veryWeak: '非常弱',
    weak: '弱', 
    medium: '中等',
    strong: '强',
    veryStrong: '非常强',
    unknown: '未知'
  },

  actions: {
    generate: '生成密码',
    regenerate: '重新生成',
    copy: '复制',
    copyAll: '复制全部',
    clear: '清除',
    expand: '展开',
    collapse: '收起'
  },

  messages: {
    copied: '已复制到剪贴板！',
    allCopied: '所有密码已复制到剪贴板！',
    generated: '密码生成成功',
    invalidOptions: '请至少选择一种字符类型',
    tooManyPasswords: '最大密码数量为100',
    clickToGenerate: '点击上方按钮生成密码'
  },

  errors: {
    copyFailed: '无法复制密码: ',
    copyFailedManual: '复制失败，请手动复制'
  },

  results: {
    title: '生成的密码'
  },

  units: {
    passwords: '个密码'
  },

  tips: {
    title: '密码安全提示',
    useLength: '使用足够长的密码（至少12个字符）提高安全性',
    useDifferent: '对每个网站或服务使用不同的密码',
    changeRegularly: '定期更换重要账户的密码',
    useManager: '考虑使用密码管理器安全存储复杂密码',
    use2FA: '启用双因素认证以增加额外保护层'
  }
}; 