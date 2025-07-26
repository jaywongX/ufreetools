export default {
  name: 'CSVからJSONへの変換ツール',
  description: 'CSVデータをJSONフォーマットに変換、カスタマイズ可能なオプション付き',

  options: {
    delimiter: '区切り文字',
    quote: '引用符',
    header: '先頭行をヘッダーとして使用',
    dynamicTyping: '動的型変換',
    dynamicTypingDescription: '数字の文字列を数値に、「true/false」をブール値に変換など',
    skipEmptyLines: '空行をスキップ',
    comments: 'コメント文字',
    outputFormat: '出力形式',
    indentation: 'インデント',
    encoding: 'エンコーディング',
    newline: '改行文字',
    title: '変換オプション'
  },

  delimiters: {
    comma: 'カンマ (,)',
    semicolon: 'セミコロン (;)',
    tab: 'タブ (\\t)',
    pipe: 'パイプ (|)',
    custom: 'カスタム'
  },

  formats: {
    array: 'オブジェクト配列',
    arrayOfArrays: '配列の配列',
    keyed: 'キー付きオブジェクト',
    nested: 'ネストされたオブジェクト'
  },

  preview: {
    input: '入力...',
    output: '出力...',
    rawCsv: '生のCSV',
    parsedCsv: '解析後のCSV',
    jsonOutput: 'JSON出力',
    firstRows: '最初の {count} 行',
    showAll: 'すべて表示'
  },

  actions: {
    convert: '変換',
    copy: 'JSONをコピー',
    download: 'JSONをダウンロード',
    clear: 'クリア',
    uploadCsv: 'CSVをアップロード',
    swap: '入力/出力を入れ替え',
    loadExample: '例を読み込む',
    clearInput: '入力をクリア',
    formatOutput: '出力をフォーマット',
    copyResult: '結果をコピー',
    downloadResult: '結果をダウンロード',
    paste: '貼り付け',
    showOptions: 'オプションを表示',
    hideOptions: 'オプションを非表示',
    uploadJson: 'JSONをアップロード'
  },

  results: {
    rowsProcessed: '{count} 行が処理されました',
    conversionComplete: '変換完了',
    copied: 'クリップボードにコピーしました',
    downloaded: 'ダウンロードしました',
    error: 'エラー'
  },

  errors: {
    noData: '変換するCSVデータがありません',
    invalidCsv: '無効なCSV形式です',
    parsingFailed: '解析に失敗しました: {error}',
    missingHeader: 'ヘッダー行がありません',
    invalidJson: '無効なJSON形式です',
    formatFailed: 'フォーマットに失敗しました: {error}',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください',
    downloadFailed: 'ダウンロードに失敗しました',
    pasteError: 'クリップボードから貼り付けできません',
    conversionFailed: '変換に失敗しました'
  },

  conversion: {
    title: '変換方向',
    csvToJson: {
      title: 'CSVからJSONへ',
      delimiterLabel: '区切り文字',
      headerLabel: '最初の行をヘッダーとして使用',
      dynamicTypingLabel: 'データ型を自動推測',
      skipEmptyLinesLabel: '空行をスキップ',
      convertButton: 'CSVをJSONに変換'
    },
    jsonToCsv: {
      title: 'JSONからCSVへ',
      delimiterLabel: '区切り文字',
      headerLabel: 'ヘッダー行を含める',
      quotesLabel: 'すべてのフィールドに引用符を追加',
      nestedModeLabel: 'ネストされたデータの処理方法を選択',
      flat: 'フラット化',
      stringify: '文字列に変換',
      ignore: '無視',
      convertButton: 'JSONをCSVに変換'
    }
  },

  stats: {
    processed: '処理されたデータ行数',
    fields: 'フィールド数/列数',
    inputSize: '変換前のサイズ',
    outputSize: '変換後のサイズ',
    title: '統計データ'
  },

  messages: {
    copied: 'クリップボードにコピーしました',
    download: 'ダウンロードしました',
    error: 'エラー'
  },

  formatBytes: {
    bytes: 'バイト',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  }
};