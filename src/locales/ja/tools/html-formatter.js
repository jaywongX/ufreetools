export default {
  name: 'HTML フォーマッター',
  description: 'HTMLコードを整形して可読性を向上',
  formatMode: 'フォーマットモード',
  beautify: '整形',
  minify: '圧縮',
  formatOptions: 'フォーマットオプション',
  removeComments: 'コメントを削除',
  preserveComments: 'コメントを保持',
  showLineNumbers: '行番号を表示',
  helpText: 'HTML整形/圧縮ツールは、開発者がHTMLコードを素早く整理または最適化し、可読性を向上させたりファイルサイズを縮小したりするのに役立ちます。',
  input: 'HTML 入力',
  inputPlaceholder: 'ここにHTMLコードを貼り付けるか入力してください...',
  examples: '例',

  exampleNames: {
    simple: 'シンプルなHTML',
    complex: '複雑なHTMLページ'
  },

  beautifiedResult: '整形結果',
  minifiedResult: '圧縮結果',

  stats: {
    chars: '文字数',
    lines: '行数',
    reduction: '{chars}文字削減 ({percent}%)'
  },

  indentOptions: {
    spaces: '{count}個のスペース',
    tab: 'タブインデント'
  },

  errorMessages: {
    emptyInput: '処理するHTMLコードを入力してください',
    processingFailed: 'HTML処理に失敗しました: {message}'
  },

  options: {
    indentSize: 'インデントサイズ',
    wrapLength: '折り返し長さ',
    indentInnerHtml: '内部HTMLをインデント',
    preserveNewlines: '改行を保持',
    maxPreserveNewlines: '最大連続改行数',
    wrapAttributes: '属性の折り返し',
    sortAttributes: '属性の並べ替え',
    sortClassNames: 'クラス名の並べ替え'
  },

  actions: {
    format: 'HTMLを整形',
    minify: '圧縮',
    clear: 'クリア',
    copy: 'コピー',
    download: 'ダウンロード',
    upload: 'ファイルをアップロード'
  },

  messages: {
    copied: 'クリップボードにコピーしました！',
    formatSuccess: 'HTMLの整形に成功しました',
    formatError: 'HTMLの整形中にエラーが発生しました',
    invalidHtml: 'HTML構文が無効です'
  }
};