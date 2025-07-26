export default {
  name: 'User Agent ジェネレーター',
  description: '様々なブラウザやデバイスのUser-Agent文字列を生成し、ウェブサイトテスト、クローリング、開発に活用',

  filters: {
    title: 'フィルター条件',
    browser: 'ブラウザ',
    os: 'オペレーティングシステム',
    deviceType: 'デバイスタイプ'
  },

  browsers: {
    all: 'すべてのブラウザ',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    opera: 'Opera',
    edge: 'Edge',
    ie: 'Internet Explorer',
    unknown: '不明なブラウザ'
  },

  operatingSystems: {
    all: 'すべてのOS',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    android: 'Android',
    ios: 'iOS',
    unknown: '不明なOS'
  },

  deviceTypes: {
    all: 'すべてのデバイス',
    desktop: 'デスクトップ',
    mobile: 'モバイル',
    tablet: 'タブレット',
    unknown: '不明なデバイス'
  },

  generation: {
    quantity: '生成数',
    generateRandom: 'ランダムUser-Agentを生成',
    clearResults: '結果をクリア'
  },

  results: {
    title: '生成結果',
    copyAll: 'すべてコピー',
    empty: '"ランダムUser-Agentを生成"ボタンをクリックして結果を生成'
  },

  messages: {
    copied: 'クリップボードにコピーしました',
    allCopied: 'すべてのUser-Agentをクリップボードにコピー',
    copyFailed: 'コピー失敗、手動でコピーしてください'
  },

  info: {
    formatTitle: 'User-Agent フォーマット説明',
    formatDescription: 'User-Agent文字列には通常、ブラウザ名、バージョン、OS、デバイス情報などが含まれます。フォーマット例：',
    formatExample: 'Mozilla/5.0 (プラットフォーム情報) エンジン情報 ブラウザ情報',
    examplesTitle: '一般的なUser-Agent例：',
    chromeWindows: 'Chrome (Windows):',
    firefoxMac: 'Firefox (macOS):',
    safariIOS: 'Safari (iOS):',
    useCasesTitle: '使用シナリオ：',
    useCases: [
      'ウェブサイト互換性テスト',
      'クローリングとデータ収集',
      'API開発とテスト',
      'ブラウザ検知回避',
      '異なるデバイスアクセスのシミュレーション'
    ]
  }
};