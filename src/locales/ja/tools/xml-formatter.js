export default {
  name: 'XMLフォーマッター',
  description: 'XMLドキュメントの整形、美化、検証',

  options: {
    indentSize: 'インデントサイズ',
    useTabs: 'タブを使用',
    collapseContent: 'コンテンツを折りたたむ',
    maxLineWidth: '最大行幅',
    indentAttributes: '属性をインデント',
    sortAttributes: '属性をソート',
    newlineAfterPI: '処理命令後に改行',
    operationType: '操作タイプ',
    indentSettings: 'インデント設定',
    displayOptions: '表示オプション',
    showLineNumbers: '行番号を表示'
  },

  indentOptions: {
    twoSpaces: '2スペース',
    fourSpaces: '4スペース',
    tabIndent: 'タブインデント'
  },

  actions: {
    format: 'XMLをフォーマット',
    minify: 'XMLを圧縮',
    validate: '検証',
    toJSON: 'JSONに変換',
    copy: 'コピー',
    clear: 'クリア',
    download: 'ダウンロード',
    upload: 'XMLをアップロード',
    beautify: '美化',
    copyCode: 'コードをコピー'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    formatSuccess: 'XMLフォーマット成功',
    formatError: 'XMLフォーマット中にエラーが発生しました',
    validXml: 'XMLは有効です',
    invalidXml: '無効なXML: {0}',
    lineCol: '{line}行目、{col}列目',
    minifySuccess: 'XML圧縮成功',
    conversionSuccess: '変換成功',
    conversionError: '変換中にエラーが発生しました',
    pleaseEnterXml: 'XMLコンテンツを入力してください',
    processingError: 'XML処理中にエラーが発生しました: {0}',
    formatResult: 'フォーマット結果',
    characterCount: '文字数: {0}',
    lineCount: '行数: {0}',
    characterAndLineCount: '文字数: {0} | 行数: {1}'
  },

  input: {
    xmlInput: 'XML入力',
    placeholder: 'ここにXMLを貼り付けるか入力...'
  },

  examples: {
    title: 'XMLサンプル',
    description: 'クリックしてサンプルをロード:',
    simpleXml: 'シンプルなXML',
    bookstore: '書店カタログ',
    complexXml: '複雑なXML'
  }
};