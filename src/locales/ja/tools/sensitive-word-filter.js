export default {
  name: '不適切な単語フィルター',
  description: 'テキスト内の不適切な単語を検出・フィルタリングし、カスタム辞書とフィルタリングルールをサポート',

  input: {
    title: '入力テキスト',
    placeholder: '検出したいテキストを入力してください...',
    loadSample: 'サンプルを読み込む',
    clearInput: '入力をクリア',
    uploadFile: 'テキストファイルをアップロード'
  },

  output: {
    title: 'フィルタリング後のテキスト',
    original: '元のテキスト',
    filtered: 'フィルタリング後のテキスト',
    statistics: '統計データ',
    copyOutput: 'フィルタリング後のテキストをコピー',
    clearOutput: '出力をクリア',
    download: 'フィルタリング後のテキストをダウンロード'
  },

  options: {
    title: 'フィルタリングオプション',
    filterMode: 'フィルタリングモード',
    caseSensitive: '大文字と小文字を区別',
    wholeWordOnly: '完全一致のみ',
    customReplacement: 'カスタム置換',
    replacementChar: '置換文字',
    highlightWords: '不適切な単語をハイライト',
    customDictionary: 'カスタム辞書',
    importDictionary: '辞書をインポート',
    exportDictionary: '辞書をエクスポート'
  },

  filterModes: {
    replace: '不適切な単語を置換',
    highlight: '不適切な単語をハイライト',
    remove: '不適切な単語を削除',
    detect: '検出のみ'
  },

  dictionary: {
    title: '単語辞書',
    add: '単語を追加',
    remove: '削除',
    clear: '辞書をクリア',
    wordInput: '追加する単語を入力',
    categories: 'カテゴリー',
    severity: '重要度',
    bulkAdd: '一括追加',
    search: '辞書を検索'
  },

  categories: {
    profanity: '卑猥語',
    slurs: '中傷',
    adult: '成人向けコンテンツ',
    offensive: '攻撃的なコンテンツ',
    violence: '暴力',
    discrimination: '差別',
    personal: '個人情報',
    custom: 'カスタム'
  },

  severityLevels: {
    low: '低',
    medium: '中',
    high: '高',
    critical: '重大'
  },

  statistics: {
    totalWords: '総単語数',
    sensitiveWords: '不適切な単語数',
    uniqueSensitiveWords: 'ユニークな不適切な単語数',
    severityBreakdown: '重要度の内訳',
    categoryBreakdown: 'カテゴリー内訳',
    cleanlinessScore: '純度スコア'
  },

  filterOptions: {
    title: 'フィルターモード',
    modes: {
      asterisk: '* に置換',
      custom: 'カスタム置換文字',
      remove: '不適切な単語を削除'
    },
    replaceChar: {
      title: '置換文字',
      placeholder: '置換文字を入力'
    }
  },

  customWords: {
    title: 'カスタム不適切単語辞書',
    addWord: '単語を追加',
    addPrompt: '追加する不適切な単語を入力してください：',
    removeWord: '削除'
  },

  actions: {
    filter: 'フィルタリング開始',
    reset: 'リセット',
    processing: '処理中...',
    clearAll: 'すべてクリア',
    copyFiltered: 'フィルタリング後のテキストをコピー',
    downloadReport: 'レポートをダウンロード',
    resetSettings: '設定をリセット'
  },

  results: {
    title: 'フィルタリング結果',
    tabs: {
      filteredResult: 'フィルタリング結果',
      detectionReport: '検出レポート'
    },
    filteredText: {
      title: 'フィルタリング後のテキスト',
      copy: '結果をコピー',
      empty: 'フィルタリング結果がありません'
    },
    statistics: {
      detectedCount: '検出された不適切な単語の数',
      retentionRate: 'テキスト保持率',
      totalWords: 'テキスト総単語数'
    },
    detectedWords: {
      title: '検出された不適切な単語',
      empty: '不適切な単語は検出されませんでした'
    }
  },

  messages: {
    copied: 'クリップボードにコピーされました',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    noInput: 'フィルタリングするテキストを入力してください',
    inputTooLong: '入力テキストが長すぎます',
    wordAdded: '単語が不適切単語辞書に追加されました',
    wordExists: 'この単語は既に不適切単語辞書に存在します',
    wordRemoved: '単語が不適切単語辞書から削除されました',
    filterSuccess: 'テキストのフィルタリングが成功しました',
    noSensitiveWords: '不適切な単語は見つかりませんでした',
    dictionaryCleared: '辞書がクリアされました',
    dictionaryImported: '辞書がインポートされました',
    dictionaryExported: '辞書がエクスポートされました',
    emptyText: 'フィルタリングするテキストを入力してください'
  }
}; 