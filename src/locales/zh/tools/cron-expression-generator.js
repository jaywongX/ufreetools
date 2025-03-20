export default {
  name: 'Cron表达式生成器',
  description: '生成和验证cron表达式，并提供人类可读的描述',
  tabs: {
    simple: '简单模式',
    advanced: '高级模式',
    expression: '表达式',
    description: '描述'
  },
  simple: {
    minutes: '分钟',
    hours: '小时',
    days: '天',
    months: '月',
    daysOfWeek: '星期'
  },
  frequency: {
    everyMinute: '每分钟',
    everyHour: '每小时',
    everyDay: '每天在',
    everyWeek: '每周的',
    everyMonth: '每月的',
    custom: '自定义'
  },
  months: {
    january: '一月',
    february: '二月',
    march: '三月',
    april: '四月',
    may: '五月',
    june: '六月',
    july: '七月',
    august: '八月',
    september: '九月',
    october: '十月',
    november: '十一月',
    december: '十二月'
  },
  daysOfWeek: {
    sunday: '星期日',
    monday: '星期一',
    tuesday: '星期二',
    wednesday: '星期三',
    thursday: '星期四',
    friday: '星期五',
    saturday: '星期六'
  },
  advanced: {
    minutes: '分钟 (0-59)',
    hours: '小时 (0-23)',
    daysOfMonth: '每月的天 (1-31)',
    months: '月份 (1-12)',
    daysOfWeek: '星期 (0-6)',
    years: '年份 (可选)'
  },
  options: {
    syntax: '语法',
    timezone: '时区',
    includeYears: '包含年份字段',
    includeSeconds: '包含秒字段'
  },
  syntaxTypes: {
    standard: '标准 (5个字段)',
    quartz: 'Quartz (6个字段)',
    unix: 'Unix crontab'
  },
  actions: {
    generate: '生成表达式',
    validate: '验证',
    clear: '清除',
    copy: '复制表达式',
    showNextDates: '显示下次执行时间'
  },
  nextDates: '接下来{count}次执行的时间',
  messages: {
    copied: '已复制到剪贴板！',
    valid: '有效的cron表达式',
    invalid: '无效的cron表达式：{reason}',
    generated: 'Cron表达式已生成',
    noDescription: '此表达式没有可用的描述'
  }
} 