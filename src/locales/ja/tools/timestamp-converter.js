export default {
  name: 'タイムスタンプ変換ツール',
  description: 'タイムスタンプと人間が読める日付の間で変換、複数のフォーマットとタイムゾーンをサポート',

  options: {
    inputType: '入力タイプ',
    outputFormat: '出力フォーマット',
    timezone: 'タイムゾーン',
    includeTime: '時間を含める',
    format: 'フォーマット文字列'
  },

  inputTypes: {
    timestamp: 'Unixタイムスタンプ',
    milliseconds: 'Unixミリ秒',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: '日付文字列'
  },

  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'ローカライズ形式',
    relative: '相対時間',
    custom: 'カスタムフォーマット'
  },

  actions: {
    convert: '変換',
    nowTimestamp: '現在のタイムスタンプ',
    nowDate: '現在の日付',
    copy: 'コピー',
    clear: 'クリア',
    refresh: '更新',
    switch: '切り替え'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    convertSuccess: '変換成功',
    convertError: 'タイムスタンプ変換中にエラーが発生しました',
    invalidInput: '無効な入力形式',
    invalidFormat: '無効なフォーマット文字列'
  },

  timeUnits: {
    milliseconds: 'ミリ秒',
    seconds: '秒',
    minutes: '分',
    hours: '時間',
    days: '日'
  },

  labels: {
    unixTimestamp: 'Unixタイムスタンプ（秒）',
    dateTime: '日付時刻',
    inputValue: '入力値',
    unitConversion: '時間単位変換',
    timeUnitLabel: '時間単位'
  },

  placeholders: {
    enterTimestamp: 'Unixタイムスタンプを入力してください',
    enterValue: '数値を入力してください'
  },

  info: {
    aboutTimestamp: 'Unixタイムスタンプについて',
    timestampDescription: 'UnixタイムスタンプはUTC時間1970年1月1日0時0分0秒から経過した秒数を表します。これはコンピュータシステムやアプリケーションで広く使用されている時間表現方法です。',
    commonUsage: '一般的な用途：',
    usages: {
      database: 'データベースの時間記録',
      api: 'API通信での時間表現',
      logging: 'ログ記録',
      filesystem: 'ファイルシステムのタイムスタンプ'
    }
  }
}; 