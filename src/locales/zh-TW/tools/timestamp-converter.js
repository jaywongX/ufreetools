export default {
  name: '時間戳轉換器',
  description: '在時間戳和人類可讀日期之間轉換，支援多種格式和時區',

  options: {
    inputType: '輸入類型',
    outputFormat: '輸出格式',
    timezone: '時區',
    includeTime: '包含時間',
    format: '格式字符串'
  },

  inputTypes: {
    timestamp: 'Unix時間戳',
    milliseconds: 'Unix毫秒',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: '日期字符串'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: '本地化格式',
    relative: '相對時間',
    custom: '自定義格式'
  },

  actions: {
    convert: '轉換',
    nowTimestamp: '當前時間戳',
    nowDate: '當前日期',
    copy: '複製',
    clear: '清除',
    refresh: '刷新',
    switch: '切換'
  },

  messages: {
    copied: '已複製到剪貼簿！',
    convertSuccess: '轉換成功',
    convertError: '轉換時間戳時出錯',
    invalidInput: '無效的輸入格式',
    invalidFormat: '無效的格式字符串'
  },

  timeUnits: {
    milliseconds: '毫秒',
    seconds: '秒',
    minutes: '分鐘',
    hours: '小時',
    days: '天'
  },

  labels: {
    unixTimestamp: 'Unix時間戳 (秒)',
    dateTime: '日期時間',
    inputValue: '輸入值',
    unitConversion: '時間單位轉換',
    timeUnitLabel: '時間單位'
  },

  placeholders: {
    enterTimestamp: '請輸入Unix時間戳',
    enterValue: '請輸入數值'
  },

  info: {
    aboutTimestamp: '關於Unix時間戳',
    timestampDescription: 'Unix時間戳表示從UTC時間1970年1月1日0時0分0秒開始經過的秒數。它是一種廣泛用於電腦系統和應用程序的時間表示方式。',
    commonUsage: '常見用途：',
    usages: {
      database: '數據庫記錄時間',
      api: 'API通信中的時間表示',
      logging: '日誌記錄',
      filesystem: '文件系統中的時間戳'
    }
  }
};