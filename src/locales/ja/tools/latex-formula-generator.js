export default {
  name: 'LaTeX数式ジェネレーター',
  description: 'リアルタイムでLaTeX数式を生成してエクスポート',

  // UI文本
  input: 'LaTeXコードを入力',

  output: 'プレビュー結果',
  renderButton: '数式をレンダリング',
  exportButton: '画像としてエクスポート',
  copyButton: 'LaTeXコードをコピー',

  // 設定
  settings: {
    title: '設定',
    fontSize: 'フォントサイズ',
    textColor: 'テキストカラー',
    backgroundColor: '背景色',
    displayMode: '表示モード',
    displayModeInline: 'インラインモード',
    displayModeBlock: 'ブロックモード'
  },

  // 例
  examples: {
    title: '例',
    basic: '基本的な数式',
    fraction: '分数',
    superscript: '上付き/下付き',
    integral: '積分',
    matrix: '行列',
    more: 'その他の例'
  },

  // メッセージ
  copied: 'クリップボードにコピーしました',

  errorTitle: 'レンダリングエラー',
  errorMessage: 'LaTeX構文を確認してください'
};