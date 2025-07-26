export default {
  name: 'YAML-JSONコンバーター',
  description: 'YAMLとJSON形式間の変換、カスタマイズ可能なオプション付き',

  input: {
    title: '入力',
    yamlPlaceholder: 'ここにYAMLを入力...',
    jsonPlaceholder: 'ここにJSONを入力...',
    loadSample: 'サンプルを読み込む',
    clearInput: '入力をクリア',
    uploadFile: 'ファイルをアップロード'
  },

  output: {
    title: '出力',
    copyOutput: '出力をコピー',
    downloadOutput: '出力をダウンロード',
    clearOutput: '出力をクリア'
  },

  options: {
    conversionMode: '変換モード',
    jsonToYaml: 'JSONからYAML',
    yamlToJson: 'YAMLからJSON',
    formatOutput: '出力をフォーマット',
    indentSize: 'インデントサイズ',
    quoteKeys: 'オブジェクトキーを引用符で囲む',
    sortKeys: 'キーをアルファベット順に並べ替え',
    flowStyle: 'YAMLフロースタイル',
    jsonCompatible: 'JSON互換',
    singleQuotes: 'シングルクォートを使用',
    includeSchema: 'スキーマを含める',
    preserveKeyOrder: 'キーの順序を保持'
  },

  flowStyles: {
    block: 'ブロックスタイル',
    flow: 'フロースタイル',
    auto: '自動'
  },

  validation: {
    validate: '変換前に検証',
    validInput: '有効な{format}',
    invalidInput: '無効な{format}：{error}',
    checkSyntax: '構文をチェック'
  },

  actions: {
    convert: '変換',
    swap: '形式を入れ替え',
    beautify: '整形',
    minify: '圧縮'
  },

  messages: {
    conversionSuccess: '変換に成功しました',
    conversionFailed: '変換に失敗しました：{error}',
    copySuccess: 'クリップボードにコピーしました',
    downloadSuccess: 'ファイルのダウンロードに成功しました',
    emptyInput: '変換する内容を入力してください',
    invalidYaml: '無効なYAML構文',
    invalidJson: '無効なJSON構文'
  }
}; 