export default {
  name: 'UUID生成器',
  description: '生成随机UUID和GUID，带有可自定义选项',
  options: {
    version: 'UUID版本',
    quantity: '数量',
    format: '输出格式',
    uppercase: '大写',
    braces: '包含大括号',
    hyphens: '包含连字符'
  },
  versions: {
    v1: '版本1（基于时间）',
    v4: '版本4（随机）',
    v5: '版本5（命名空间）',
    custom: '自定义'
  },
  formats: {
    default: '默认',
    base64: 'Base64',
    binary: '二进制',
    hex: '十六进制'
  },
  actions: {
    generate: '生成UUID',
    copy: '复制',
    copyAll: '复制全部',
    clear: '清除',
    download: '下载为TXT'
  },
  messages: {
    copied: '已复制到剪贴板！',
    generated: 'UUID生成成功',
    tooMany: '最大允许数量为1000',
    invalidVersion: '无效的UUID版本',
    invalidNamespace: '无效的命名空间UUID'
  }
} 