export default {
  name: 'JavaScript整形ツール',
  description: 'オンラインJavaScript整形・検証ツール、圧縮と美化に対応',
  options: {
    indent: 'インデント',
    quotes: '引用符スタイル',
    semicolons: 'セミコロン',
    trailingComma: '末尾のカンマ'
  },
  actions: {
    format: 'JavaScriptを整形',
    minify: '圧縮',
    beautify: '美化',
    clear: 'クリア',
    copy: 'コピー',
    download: 'ダウンロード'
  },
  messages: {
    copied: 'クリップボードにコピーしました！',
    formatSuccess: 'JavaScriptの整形に成功しました',
    formatError: 'JavaScriptの整形中にエラーが発生しました'
  }
}