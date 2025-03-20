export default {
  name: '时间戳转换器',
  description: '在时间戳和人类可读日期之间转换',
  options: {
    inputType: '输入类型',
    outputFormat: '输出格式',
    timezone: '时区',
    includeTime: '包含时间',
    format: '格式字符串'
  },
  inputTypes: {
    timestamp: 'Unix时间戳',
    milliseconds: 'Unix毫秒',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: '日期字符串'
  },
  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: '本地化格式',
    relative: '相对时间',
    custom: '自定义格式'
  },
  actions: {
    convert: '转换',
    nowTimestamp: '当前时间戳',
    nowDate: '当前日期',
    copy: '复制',
    clear: '清除'
  },
  messages: {
    copied: '已复制到剪贴板！',
    convertSuccess: '转换成功',
    convertError: '转换时间戳时出错',
    invalidInput: '无效的输入格式',
    invalidFormat: '无效的格式字符串'
  }
} 