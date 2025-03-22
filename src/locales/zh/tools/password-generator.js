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
    noConsecutive: '无连续相似字符'
  },
  presets: {
    standard: '标准',
    strong: '强壮',
    memorable: '易记',
    pin: 'PIN码',
    pronounceable: '可发音',
    custom: '自定义'
  },
  strength: {
    veryWeak: '非常弱',
    weak: '弱', 
    medium: '中等',
    strong: '强',
    veryStrong: '非常强'
  },
  actions: {
    generate: '生成密码',
    regenerate: '重新生成',
    copy: '复制',
    copyAll: '复制全部',
    clear: '清除'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generated: '密码生成成功',
    invalidOptions: '请至少选择一种字符类型',
    tooManyPasswords: '最大密码数量为100'
  }
} 