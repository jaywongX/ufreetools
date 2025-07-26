export default {
  name: 'パスワード生成ツール',
  description: 'カスタマイズ可能なオプションで安全でランダムなパスワードを生成',

  options: {
    length: 'パスワードの長さ',
    quantity: 'パスワード数',
    includeLowercase: '小文字 (a-z)',
    includeUppercase: '大文字 (A-Z)',
    includeNumbers: '数字 (0-9)',
    includeSymbols: '記号 (!@#$%)',
    excludeSimilar: '類似文字を除外 (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: '曖昧な記号を除外 ({}<>[]()\'"`\\)',
    requireAll: 'すべての文字タイプを必須にする',
    noConsecutive: '連続する類似文字なし',
    advancedOptions: '詳細オプション',
    characterTypes: '文字タイプ'
  },

  presets: {
    standard: '標準',
    strong: '強力',
    memorable: '覚えやすい',
    pin: 'PINコード',
    pronounceable: '発音可能',
    custom: 'カスタム',
    easyToRemember: '記憶しやすい',
    balanced: 'バランス',
    secure: '安全'
  },

  strength: {
    title: 'パスワード強度',
    veryWeak: '非常に弱い',
    weak: '弱い', 
    medium: '中程度',
    strong: '強い',
    veryStrong: '非常に強い',
    unknown: '不明'
  },

  actions: {
    generate: 'パスワードを生成',
    regenerate: '再生成',
    copy: 'コピー',
    copyAll: 'すべてコピー',
    clear: 'クリア',
    expand: '展開',
    collapse: '折りたたむ'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    allCopied: 'すべてのパスワードをクリップボードにコピーしました！',
    generated: 'パスワードが正常に生成されました',
    invalidOptions: '少なくとも1つの文字タイプを選択してください',
    tooManyPasswords: '最大パスワード数は100です',
    clickToGenerate: '上のボタンをクリックしてパスワードを生成'
  },

  errors: {
    copyFailed: 'パスワードをコピーできませんでした: ',
    copyFailedManual: 'コピーに失敗しました、手動でコピーしてください'
  },

  results: {
    title: '生成されたパスワード'
  },

  units: {
    passwords: 'パスワード'
  },

  tips: {
    title: 'パスワードセキュリティのヒント',
    useLength: '十分な長さのパスワード（少なくとも12文字）を使用してセキュリティを高める',
    useDifferent: 'サイトやサービスごとに異なるパスワードを使用する',
    changeRegularly: '重要なアカウントのパスワードを定期的に変更する',
    useManager: '複雑なパスワードを安全に保存するためにパスワードマネージャーの使用を検討する',
    use2FA: '二要素認証を有効にして追加の保護層を追加する'
  }
};