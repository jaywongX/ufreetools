export default {
    name: 'CSSフォーマッター',
    description: '読みやすさを向上させるためにCSSコードをフォーマットし美化',
    options: {
      indentSize: 'インデントサイズ',
      indentWithTabs: 'タブでインデント',
      convertQuotes: '引用符を変換',
      sortSelectors: 'セレクタを並べ替え',
      sortProperties: 'プロパティを並べ替え',
      compressColors: 'カラー値を圧縮',
      expandShorthand: '省略プロパティを展開'
    },
    actions: {
      format: 'CSSをフォーマット',
      minify: '圧縮',
      clear: 'クリア',
      copy: 'コピー',
      download: 'ダウンロード',
      upload: 'ファイルをアップロード'
    },
    messages: {
      copied: 'クリップボードにコピーしました！',
      formatSuccess: 'CSSのフォーマットに成功しました',
      formatError: 'CSSのフォーマット中にエラーが発生しました',
      invalidCss: '無効なCSS構文'
    }
  }