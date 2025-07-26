export default {
  name: 'cURL変換ツール',
  description: 'cURLコマンドを異なるプログラミング言語のコードスニペットに変換',
  title: 'cURLからコードへ',
  subtitle: 'cURLコマンドを様々なプログラミング言語のコードに変換し、HTTPリクエストをプロジェクトに簡単に統合',

  input: {
    title: 'cURLコマンド',
    placeholder: 'ここにcURLコマンドを入力',
    parse: 'cURLを解析',
    clear: 'クリア',
    examples: 'コマンド例:',
    options: 'パーサーオプション',
    validateCommand: 'コマンドを検証',
    formatCurl: 'cURLをフォーマット'
  },

  options: {
    detectAuth: '認証を自動検出',
    resolveVariables: '環境変数を解決',
    processContinuations: '行継続文字(\\)を処理',
    followRedirects: 'リダイレクトに従う',
    preserveHeaders: 'すべてのヘッダーを保持',
    ignoreErrors: '解析エラーを無視',
    noDuplicateHeaders: '重複ヘッダーなし（最後のものを使用）'
  },

  output: {
    title: 'コード出力',
    language: '対象言語',
    copy: 'コピー',
    copyTooltip: 'クリップボードにコピー',
    download: 'ダウンロード',
    beautify: '整形',
    codeTitle: '{language} コード',
    errorTitle: '変換エラー',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'ブラウザ (fetch)',
      curl: 'cURL (フォーマット済み)',
      json: 'JSON (リクエストオブジェクト)',
      har: 'HAR (HTTPアーカイブ)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'リクエスト詳細',
    method: 'メソッド',
    url: 'URL',
    headers: 'ヘッダー',
    body: 'ボディ',
    auth: '認証',
    options: 'オプション',
    cookie: 'Cookie',
    queryParams: 'クエリパラメータ',
    formData: 'フォームデータ',
    visualize: '可視化'
  },

  visualization: {
    title: 'リクエスト可視化',
    request: 'リクエスト',
    response: 'レスポンス',
    headers: 'ヘッダー',
    body: 'ボディ',
    timing: 'タイミング',
    raw: '生データ'
  },

  analysis: {
    title: 'コマンド分析',
    insecureWarning: '警告：このコマンドは--insecure/-k（SSL検証が無効）を使用しています',
    verboseIgnored: '注意：詳細モード(-v)は変換で無視されました',
    unsupportedOptions: '未サポートのオプション',
    warnings: '警告',
    info: '情報'
  },

  messages: {
    parsing: 'cURLコマンドを解析中...',
    parseFailed: 'cURLコマンドの解析に失敗しました：{error}',
    parseSuccess: 'cURLコマンドの解析に成功しました',
    copied: 'コードがクリップボードにコピーされました',
    downloaded: 'コードがダウンロードされました',
    invalidCurl: '無効なcURLコマンド',
    emptyCurl: 'cURLコマンドを入力してください',
    validCurl: '有効なcURLコマンド',
    unknownOption: '不明なオプション：{option}',
    unsupportedMethod: '警告：すべての言語がHTTPメソッド{method}をサポートしているわけではありません',
    curlRequired: 'コマンドは "curl " で始まる必要があります',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください'
  },

  examples: {
    title: 'cURLコマンド例',
    basic: '基本的なGETリクエスト',
    headers: 'カスタムヘッダー',
    post: 'JSONを使用したPOST',
    formData: 'フォームデータ送信',
    auth: '基本認証',
    complex: '複雑な例',
    exampleCommands: {
      getRequest: 'GETリクエスト',
      postJson: 'POST JSON',
      postForm: 'POSTフォーム',
      withAuth: '認証付き',
      uploadFile: 'ファイルアップロード'
    }
  },

  actions: {
    convert: '変換',
    converting: '変換中...'
  }
};