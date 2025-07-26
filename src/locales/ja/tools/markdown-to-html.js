export default {
  name: 'MarkdownからHTML',
  description: 'Markdownテキストをカスタマイズ可能なオプションでHTMLに変換',

  input: {
    title: 'Markdownを入力',
    placeholder: 'ここにMarkdownテキストを入力または貼り付け...',
    loadSample: 'サンプルを読み込む',
    clearInput: 'クリア',
    uploadFile: 'Markdownファイルをアップロード',
    paste: 'クリップボードから貼り付け',
    charCount: '文字数',
    lineCount: '行数'
  },

  output: {
    title: 'HTML出力',
    copied: 'HTMLがクリップボードにコピーされました',
    download: 'HTMLをダウンロード',
    copyOutput: 'HTMLをコピー',
    clearOutput: '出力をクリア',
    previewTab: 'プレビュー',
    htmlTab: 'HTMLコード',
    previewMode: 'プレビューモード',
    sourceMode: 'HTMLソース'
  },

  options: {
    title: '変換オプション',
    headerIds: '自動見出しID',
    gfm: 'GitHub風Markdown',
    tables: 'テーブル',
    breaks: '改行',
    smartLists: 'スマートリスト',
    smartypants: 'スマート句読点',
    xhtml: 'XHTML',
    highlight: '構文ハイライト',
    sanitize: 'HTMLサニタイズ',
    footnotes: '脚注',
    taskLists: 'タスクリスト',
    emoji: '絵文字サポート',
    includeStyle: 'デフォルトCSSを含める',
    realtimePreview: 'リアルタイムプレビュー',
    scrollSync: 'スクロール同期',
    htmlOptions: 'HTMLオプション'
  },

  styles: {
    title: 'スタイルオプション',
    theme: 'テーマ',
    codeTheme: 'コードテーマ',
    customCSS: 'カスタムCSS',
    fontSize: 'フォントサイズ',
    lineHeight: '行の高さ',
    enableCustom: 'カスタムスタイルを有効化'
  },

  themes: {
    default: 'デフォルト',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'ダークモード',
    custom: 'カスタム'
  },

  codeThemes: {
    default: 'デフォルト',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'HTMLに変換',
    clearAll: 'すべてクリア',
    copyHtml: 'HTMLをコピー',
    saveAsHtml: 'HTMLとして保存',
    generateToc: '目次を生成'
  },

  messages: {
    conversionSuccess: 'Markdownの変換に成功しました',
    conversionFailed: 'Markdownの変換に失敗しました：{error}',
    emptyInput: '変換するMarkdownを入力してください',
    copied: 'HTMLがクリップボードにコピーされました',
    tocGenerated: '目次が生成されました'
  },

  alerts: {
    copied: 'クリップボードにコピーされました',
    copyFailed: 'クリップボードへのコピーに失敗しました',
    pasteFailed: 'クリップボードからの貼り付けに失敗しました',
    confirmClear: '入力内容をクリアしてもよろしいですか？'
  },

  status: {
    lastConversion: '最終変換時間'
  },

  samples: {
    basic: '基本サンプル',
    extended: '拡張サンプル',
    article: '記事サンプル'
  },

  download: {
    title: 'MarkdownからHTMLへのエクスポート'
  }
};