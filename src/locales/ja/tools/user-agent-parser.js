export default {
  name: 'User Agentパーサー',
  description: 'ブラウザのユーザーエージェント文字列を解析し、ブラウザ、OS、デバイス情報を識別',

  input: {
    label: 'ユーザーエージェント (User-Agent) 文字列',
    placeholder: 'ユーザーエージェント文字列を入力または貼り付け...'
  },

  actions: {
    parse: '解析',
    detect: '現在のブラウザを検出',
    clear: 'クリア'
  },

  results: {
    title: '解析結果',
    summary: '概要',
    details: '詳細情報',
    originalUA: '元のユーザーエージェント文字列'
  },

  sections: {
    browser: 'ブラウザ',
    os: 'オペレーティングシステム',
    device: 'デバイス',
    other: 'その他情報'
  },

  deviceTypes: {
    mobile: 'モバイルデバイス',
    tablet: 'タブレット',
    desktop: 'デスクトップデバイス'
  },

  fields: {
    name: '名称',
    version: 'バージョン',
    engine: 'エンジン',
    platform: 'プラットフォーム',
    type: 'タイプ',
    vendor: 'メーカー',
    model: 'モデル',
    isMobile: 'モバイルデバイス',
    isTablet: 'タブレット',
    isDesktop: 'デスクトップデバイス'
  },

  messages: {
    parsingError: 'ユーザーエージェント文字列の解析中にエラーが発生しました',
    emptyInput: 'ユーザーエージェント文字列を入力してください',
    unknown: '不明',
    yes: 'はい',
    no: 'いいえ'
  },

  tips: {
    description: 'ユーザーエージェント(User-Agent)は、ブラウザがサーバーに送信する識別文字列で、ブラウザ、OS、デバイス情報などが含まれます。',
    useCases: 'ウェブ分析、ブラウザ互換性処理、デバイス適応などのシナリオでよく使用されます。'
  }
};