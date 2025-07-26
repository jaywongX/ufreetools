export default {
  name: 'リクエストヘッダーエディター',
  description: 'HTTPリクエストヘッダーの作成、編集、テスト',

  editor: {
    title: 'ヘッダーエディター',
    headers: 'リクエストヘッダー',
    add: 'ヘッダーを追加',
    bulk: '一括編集',
    import: 'ヘッダーをインポート',
    export: 'ヘッダーをエクスポート',
    clear: 'すべてクリア',
    importError: 'インポートエラー'
  },

  header: {
    name: 'ヘッダー名',
    value: '値',
    description: '説明',
    namePlaceholder: 'ヘッダー名を入力',
    valuePlaceholder: 'ヘッダー値を入力',
    actions: '操作',
    enabled: '有効',
    duplicate: '複製',
    delete: '削除',
    noHeaders: 'リクエストヘッダーがありません。「追加」ボタンをクリックするか、テンプレートを読み込んで開始してください',
    bulkPlaceholder: 'リクエストヘッダーを貼り付けてください。形式: \'名前: 値\'、1行に1つ、または生のリクエストヘッダーテキストを貼り付けてください'
  },

  presets: {
    title: 'プリセット',
    save: '現在の設定を保存',
    load: 'プリセットを読み込む',
    delete: 'プリセットを削除',
    presetName: 'プリセット名',
    namePlaceholder: 'プリセット名を入力',
    confirmDelete: 'このプリセットを削除してもよろしいですか？',
    common: '一般的なヘッダー',
    custom: 'カスタムプリセット'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'ヘッダーをテスト',
    url: 'URL',
    urlPlaceholder: 'ヘッダーをテストするURLを入力',
    method: 'メソッド',
    send: 'リクエストを送信',
    response: 'レスポンス'
  },

  response: {
    title: 'レスポンス',
    status: 'ステータス',
    headers: 'レスポンスヘッダー',
    body: '本文',
    time: '時間',
    size: 'サイズ',
    loading: '読み込み中...',
    noResponse: 'プレビューを表示するにはリクエストヘッダーを追加してください',
    headerCount: 'リクエストヘッダー'
  },

  options: {
    title: 'オプション',
    followRedirects: 'リダイレクトに従う',
    timeout: 'タイムアウト（秒）',
    validateSSL: 'SSL証明書を検証',
    sendCredentials: '認証情報を送信'
  },

  formats: {
    title: 'エクスポート形式',
    raw: '生テキスト',
    json: 'JSON',
    curl: 'cURLコマンド',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'ヘッダーガイド',
    description: '一般的なHTTPヘッダーとその使用方法について学ぶ',
    securityHeaders: 'セキュリティヘッダー',
    cachingHeaders: 'キャッシュヘッダー',
    corsHeaders: 'CORSヘッダー',
    authenticationHeaders: '認証ヘッダー',
    commonValues: '一般的な値'
  },

  actions: {
    copy: 'コピー',
    format: 'フォーマット',
    validate: '検証',
    clear: 'クリア'
  },

  messages: {
    headerAdded: 'ヘッダーが追加されました',
    headerDeleted: 'ヘッダーが削除されました',
    headersCleared: 'すべてのヘッダーがクリアされました',
    presetSaved: 'プリセットが保存されました',
    presetLoaded: 'プリセットが読み込まれました',
    presetDeleted: 'プリセットが削除されました',
    requestSent: 'リクエストが送信されました',
    requestFailed: 'リクエスト失敗: {error}',
    copied: 'クリップボードにコピーされました',
    importSuccess: 'ヘッダーが正常にインポートされました',
    exportSuccess: 'ヘッダーが正常にエクスポートされました',
    invalidUrl: '無効なURL',
    pleaseEnterHeader: 'リクエストヘッダーテキストを入力してください',
    invalidHeader: '有効なリクエストヘッダーを解析できませんでした。「名前: 値」形式を使用してください',
    invalidHeaderName: '無効なリクエストヘッダー名: {error}',
    copyFailed: 'コピーに失敗しました。手動でコピーしてください'
  }
};