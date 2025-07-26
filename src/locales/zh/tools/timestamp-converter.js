export default {
  name: '时间戳转换器',
  description: '在时间戳和人类可读日期之间转换，支持多种格式和时区',

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
    clear: '清除',
    refresh: '刷新',
    switch: '切换'
  },

  messages: {
    copied: '已复制到剪贴板！',
    convertSuccess: '转换成功',
    convertError: '转换时间戳时出错',
    invalidInput: '无效的输入格式',
    invalidFormat: '无效的格式字符串'
  },

  timeUnits: {
    milliseconds: '毫秒',
    seconds: '秒',
    minutes: '分钟',
    hours: '小时',
    days: '天'
  },

  labels: {
    unixTimestamp: 'Unix时间戳 (秒)',
    dateTime: '日期时间',
    inputValue: '输入值',
    unitConversion: '时间单位转换',
    timeUnitLabel: '时间单位'
  },

  placeholders: {
    enterTimestamp: '请输入Unix时间戳',
    enterValue: '请输入数值'
  },

  info: {
    aboutTimestamp: '关于Unix时间戳',
    timestampDescription: 'Unix时间戳表示从UTC时间1970年1月1日0时0分0秒开始经过的秒数。它是一种广泛用于计算机系统和应用程序的时间表示方式。',
    commonUsage: '常见用途：',
    usages: {
      database: '数据库记录时间',
      api: 'API通信中的时间表示',
      logging: '日志记录',
      filesystem: '文件系统中的时间戳'
    }
  }
}; 