export default {
  name: 'UUID生成ツール',
  description: 'ランダムなUUIDとGUIDを生成、カスタマイズオプション付き、データベースの主キーや一時ファイル名などに最適',

  options: {
    version: 'UUIDバージョン',
    quantity: '数量',
    format: 'フォーマットオプション',
    includeDash: 'ハイフン(-)を含める',
    generateCount: '生成数'
  },

  versions: {
    v1: 'バージョン1（時間ベース）',
    v4: 'バージョン4（ランダム）',
    v5: 'バージョン5（ネームスペース）',
    custom: 'カスタム'
  },

  quantities: {
    single: '1つ',
    five: '5つ',
    ten: '10個',
    twenty: '20個'
  },

  formats: {
    default: 'デフォルト',
    base64: 'Base64',
    binary: 'バイナリ',
    hex: '16進数',
    noDash: 'ハイフンなし'
  },

  actions: {
    generate: 'UUID生成',
    copy: 'コピー',
    copyAll: 'すべてコピー',
    clear: '結果をクリア',
    download: 'TXTとしてダウンロード'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    generated: 'UUIDの生成に成功しました',
    tooMany: '最大許容数は1000です',
    invalidVersion: '無効なUUIDバージョンです',
    invalidNamespace: '無効なネームスペースUUIDです',
    copyFailed: 'コピーに失敗しました'
  }
}; 