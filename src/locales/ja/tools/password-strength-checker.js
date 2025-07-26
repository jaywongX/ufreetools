export default {
  name: 'パスワード強度チェッカー',
  description: 'パスワードの強度を確認・分析し、詳細なセキュリティ指標を提供',

  input: {
    title: 'パスワードを入力して検査',
    placeholder: 'ここにパスワードを入力...',
    showPassword: 'パスワードを表示',
    hidePassword: 'パスワードを非表示',
    clear: 'クリア',
    generate: 'パスワードを生成',
    check: '強度をチェック',
    empty: '評価結果を表示するにはパスワードを入力してください',
    disclaimer: 'セキュリティ強度評価のために任意のパスワードを入力してください。パスワードは保存されず、サーバーに送信されることもありません。'
  },

  results: {
    title: 'パスワード強度評価',
    strength: '強度',
    score: 'スコア',
    entropy: 'エントロピー値',
    crackTime: '推定解読時間',
    very_weak: '非常に弱い',
    weak: '弱い',
    fair: '普通',
    good: '良い',
    strong: '強い',
    very_strong: '非常に強い',
    feedback: 'フィードバック',
    suggestions: '改善提案',
    warnings: '検出された問題',
    noWarnings: '警告は検出されませんでした',
    noSuggestions: '利用可能な提案はありません'
  },

  details: {
    title: '詳細分析',
    length: 'パスワード長',
    charset: '文字の多様性',
    patterns: '使用されているパターン',
    uniqueChars: 'ユニークな文字',
    uppercase: '大文字',
    lowercase: '小文字',
    numbers: '数字',
    symbols: '特殊記号',
    repetitions: '繰り返し',
    sequences: '連続文字',
    dictionary: '辞書単語',
    leaked: '漏洩履歴',
    reused: '再利用されたパターン'
  },

  patterns: {
    dictionary: '辞書単語',
    sequence: '連続文字',
    repeat: '繰り返し文字',
    spatial: '空間パターン（キーボード）',
    date: '日付パターン',
    year: '年号パターン',
    common: '一般的なパスワード',
    name: '名前パターン',
    reversal: '逆転語',
    leet: 'リート置換',
    predictable: '予測可能なパターン'
  },

  crackTimes: {
    instantly: '瞬時',
    seconds: '数秒以内',
    minutes: '数分以内',
    hours: '数時間以内',
    days: '数日以内',
    months: '数ヶ月以内',
    years: '数年以内',
    centuries: '数世紀以内',
    forever: '事実上永遠'
  },

  suggestions: {
    addWords: '単語や文字を追加',
    addSymbols: '記号を含める',
    addNumbers: '数字を含める',
    upperLower: '大文字と小文字を混在させる',
    avoidPatterns: 'キーボード上の連続した文字や繰り返し文字の使用を避ける',
    avoidCommon: '辞書ベースのパスワードや一般的なパスワードを避ける（文字を数字に置き換えても、例えば「e」を「3」に）',
    avoidPersonal: '個人情報を避ける',
    avoidDictionary: '辞書単語を避ける',
    usePassphrase: '記憶しやすい強力なパスワードを作成するために、複合語、無関係な単語の組み合わせ、または頭字語の使用を検討する',
    increaseLonger: 'パスワードの長さを増やす',
    avoidSequence: '順序パターンを避ける',
    avoidRepeated: '繰り返し文字を避ける',
    avoidDates: '日付や年号を避ける',
    addMoreChars: 'パスワードの長さを少なくとも12文字に増やす。文字を1つ追加するごとに、解読の難易度は倍増します',
    addTypes: 'パスワードの複雑さを高めるために{types}を追加',
    useManager: 'パスワードマネージャーを使用して強力なパスワードを生成・管理し、サイトごとに異なるパスワードを使用する'
  },

  generator: {
    title: 'パスワードジェネレーター',
    length: '長さ',
    options: 'オプション',
    uppercase: '大文字を含める',
    lowercase: '小文字を含める',
    numbers: '数字を含める',
    symbols: '記号を含める',
    excludeSimilar: '類似文字を除外',
    excludeAmbiguous: '曖昧な文字を除外',
    generate: 'パスワードを生成',
    passphrase: 'パスフレーズを生成',
    wordCount: '単語数',
    separator: '単語区切り文字',
    capitalize: '先頭文字を大文字に',
    includeNumber: '数字を含める',
    includeSymbol: '記号を含める'
  },

  common: {
    copy: 'クリップボードにコピー',
    save: '履歴に保存',
    clear: 'クリア',
    refresh: '更新',
    copied: 'クリップボードにコピーしました',
    saved: '履歴に保存しました',
    history: '履歴',
    noHistory: '利用可能な履歴がありません',
    common: '一般'
  },

  breach: {
    title: 'データ漏洩チェック',
    description: 'パスワードが既知のデータ漏洩に含まれているかチェック',
    disclaimer: 'パスワードがネットワーク経由で送信されることはありません。ハッシュ値の一部のみをチェックします。',
    checkButton: '漏洩をチェック',
    safe: '既知の漏洩では見つかりませんでした',
    found: '{count}件のデータ漏洩で発見されました！',
    warning: 'このパスワードはデータ漏洩で公開されているため、使用すべきではありません。',
    checking: '漏洩をチェック中...'
  },

  settings: {
    title: '設定',
    algorithm: '強度アルゴリズム',
    history: '履歴を保存',
    clearHistory: '履歴をクリア',
    breachCheck: '漏洩をチェック',
    timeout: 'タイムアウト後にクリア',
    timeoutDuration: 'タイムアウト時間（秒）',
    clipboard: 'コピー後にクリップボードをクリア',
    language: '言語'
  },

  score: {
    none: '評価なし'
  },

  descriptions: {
    none: 'パスワード強度を評価できません',
    veryWeak: 'このパスワードは非常に簡単に推測または解読され、極めて安全ではありません',
    weak: 'このパスワードはセキュリティが低く、簡単に解読される可能性があります',
    fair: 'このパスワードはある程度のセキュリティを持っていますが、改善の余地があります',
    good: 'これはセキュリティの高いパスワードで、解読が困難です',
    veryStrong: 'これは非常に安全なパスワードで、解読はほぼ不可能です'
  },

  length: {
    none: 'なし',
    tooShort: '短すぎる',
    acceptable: '許容可能',
    good: '良好',
    excellent: '優秀'
  },

  lengthMessage: {
    none: 'パスワードが入力されていません',
    needMore: '少なくとも{min}文字必要です',
    better: '{min}文字以上だとより安全です',
    good: '素晴らしい！長いパスワードは解読が難しいです',
    excellent: '優れた長さです！'
  },

  complexity: {
    none: 'なし',
    veryLow: '非常に低い',
    fair: '普通',
    good: '良好',
    excellent: '優秀'
  },

  issues: {
    tooShort: 'パスワードが短すぎます（8文字未満）',
    noUppercase: '大文字が含まれていません',
    noLowercase: '小文字が含まれていません',
    noNumbers: '数字が含まれていません',
    noSymbols: '特殊記号が含まれていません',
    hasSequence: '一般的なキーボード配列（「qwerty」や「123456」など）が含まれています',
    hasRepeated: '繰り返し文字（「aaa」や「111」など）が含まれています',
    commonPassword: '一般的または推測しやすいパスワードが使用されています'
  },

  characters: '文字',

  tips: {
    title: 'パスワードセキュリティのヒント',
    length: '少なくとも12文字のパスワードを使用する',
    mix: '大文字、小文字、数字、特殊記号を混在させる',
    avoid: '一般的な単語、フレーズ、個人情報の使用を避ける',
    unique: '複数のサイトで同じパスワードを使用しない',
    manager: '複雑なパスワードの生成と保存にパスワードマネージャーの使用を検討する'
  }
};