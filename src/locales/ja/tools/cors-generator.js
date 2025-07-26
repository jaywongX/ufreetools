export default {
  name: 'CORSコンフィグジェネレーター',
  description: 'クロスオリジンリソース共有(CORS)設定を素早く作成、様々なサーバー環境をサポート',

  options: {
    title: 'CORSオプション',
    allowedOrigins: {
      title: '許可するオリジン (Access-Control-Allow-Origin)',
      allowAll: 'すべてのオリジンを許可 (*) <span class="text-yellow-500 text-xs ml-1">(安全ではなく、認証情報をサポートしません)</span>',
      specific: '特定のドメインを許可 (推奨)',
      addOrigin: 'オリジンを追加',
      placeholder: 'オリジンを入力（例：https://example.com）',
      wildcard: 'サブドメインを許可（ワイルドカード）',
      null: 'nullオリジンを許可',
      remove: 'ドメインを削除'
    },
    allowedMethods: {
      title: '許可するHTTPメソッド (Access-Control-Allow-Methods)',
      selectMethods: 'HTTPメソッドを選択',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: '許可するリクエストヘッダー (Access-Control-Allow-Headers)',
      all: 'すべてのリクエストヘッダーを許可(*)',
      specific: '特定のヘッダーのみ',
      addHeader: 'ヘッダーを追加',
      headerPlaceholder: 'ヘッダー名を入力',
      common: '一般的なリクエストヘッダー',
      custom: 'カスタムリクエストヘッダー',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'ヘッダーを削除'
    },
    exposedHeaders: {
      title: '公開するレスポンスヘッダー (Access-Control-Expose-Headers)',
      description: 'ブラウザがアクセスできるレスポンスヘッダー',
      addHeader: '公開するヘッダーを追加',
      headerPlaceholder: 'ヘッダー名を入力'
    },
    credentials: {
      title: '認証情報を許可 (Access-Control-Allow-Credentials)',
      description: 'CookieとAuthorizationヘッダーの使用を許可',
      allow: '認証情報を許可',
      warning: '特定のオリジンとのみ使用可能、ワイルドカード(*)との併用は不可'
    },
    maxAge: {
      title: 'プリフライトリクエストのキャッシュ時間 (Access-Control-Max-Age)',
      description: 'プリフライトリクエスト結果のキャッシュ時間（秒）',
      seconds: '秒',
      default: 'デフォルト：',
      recommended: '推奨：3600（1時間）'
    },
    serverType: {
      title: 'サーバータイプ',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'HTTPヘッダー'
    }
  },

  output: {
    title: '生成されたヘッダー',
    instructions: 'これらのヘッダーをサーバーレスポンスに追加してください：',
    copy: 'ヘッダーをコピー',
    test: 'ヘッダーをテスト',
    downloadConfig: '設定をダウンロード'
  },

  configs: {
    title: '設定例',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },

  testing: {
    title: 'CORSテスト',
    description: 'CORS設定が正しく動作しているかテスト',
    originUrl: '送信元URL',
    targetUrl: '対象URL',
    method: 'リクエストメソッド',
    credentials: '認証情報を含める',
    headers: 'カスタムヘッダー',
    addHeader: 'ヘッダーを追加',
    testButton: 'CORSをテスト',
    results: 'テスト結果',
    success: 'CORSテスト成功 ✓',
    failure: 'CORSテスト失敗 ✗',
    details: 'レスポンス詳細',
    response: 'レスポンス',
    logs: 'CORSログ',
    errorDetails: 'エラー詳細'
  },

  presets: {
    title: 'プリセット',
    api: 'APIサーバー',
    assets: '静的リソース（CDN）',
    auth: '認証サービス',
    publicAccess: '公開アクセス',
    restrictive: '制限的',
    load: 'プリセットを読み込む',
    save: '現在の設定をプリセットとして保存'
  },

  tips: {
    title: 'CORSヒント',
    tip1: 'クロスオリジンリソース共有（CORS）は、HTTPヘッダーに基づくメカニズムで、サーバーが自身以外のオリジン（ドメイン、プロトコル、ポート）からリソースをロードすることをブラウザに許可するための仕組みです。',
    tip2: 'CORS保護は現代のブラウザのセキュリティ機能で、ウェブページが異なるオリジンのサーバーにリクエストを送信することを防ぎ、クロスサイトリクエストフォージェリ攻撃からユーザーを保護します。',
    usage: {
      title: 'CORSの使用シナリオ:',
      tip1: 'フロントエンドJavaScriptが異なるドメインのAPIにアクセスできるようにする',
      tip2: 'クロスドメインのAjaxリクエストまたはFetchリクエストをサポート',
      tip3: 'フォント、CSS、その他のリソースへのクロスドメインアクセスを許可',
      tip4: 'マイクロサービスアーキテクチャ内のサービス間通信を設定',
    },
    safe: 'セキュリティヒント: 通常、許可されるオリジンとして「*」ワイルドカードを使用することは避け、信頼できる特定のドメインを明示的に指定して、潜在的なセキュリティリスクを減らすべきです。'
  },

  messages: {
    copied: 'ヘッダーがクリップボードにコピーされました',
    configDownloaded: '設定がダウンロードされました',
    testStarted: 'CORSテストを開始しました',
    testSucceeded: 'CORSリクエスト成功',
    testFailed: 'CORSリクエスト失敗：{error}',
    presetSaved: 'プリセットが保存されました',
    presetLoaded: 'プリセットが読み込まれました'
  },

  config: {
    title: '設定',
    empty: 'CORS設定を生成するオプションを選択してください',
    copied: '設定がクリップボードにコピーされました！',
    copy: 'コピー'
  },

  comments: {
    expressMiddleware: "// Expressアプリケーションでミドルウェアを使用",
    applyGlobalCors: "// CORSミドルウェアを適用",
    applySpecificRoute: "// または特定のルートにのみ適用",
    applyRequest: "// リクエストを処理",
    apacheAllowedOrigins: "# 許可されるドメイン",
    apacheAllowedMethods: "# 許可されるHTTPメソッド",
    apacheAllowedHeaders: "# 許可されるHTTPヘッダー",
    apacheAllowedCredentials: "# 認証情報の許可",
    preflightCacheDuration: "# プリフライトリクエストのキャッシュ時間",
    apacheExposeHeaders: '# 公開するレスポンスヘッダー',
    handlePreflightRequest: "# プリフライトリクエストの処理",
    nginxConfiguration: "# CORS設定\n# この設定をサーバーまたはlocationブロックに追加",
    nginxAllowedOrigins: "# 許可されるドメイン",
    nginxAllowedMethods: "# 許可されるHTTPメソッド",
    nginxAllowedHeaders: "# 許可されるHTTPヘッダー",
    nginxAllowedCredentials: "# 認証情報の許可",
    nginxPreflightCacheDuration: "# プリフライトリクエストのキャッシュ時間",
    nginxExposeHeaders: '# 公開するレスポンスヘッダー',
    nginxHandlePreflight: "# プリフライトリクエストの処理",
    httpHeadersConfiguration: "# CORS HTTPヘッダー設定",
    httpAllowedOrigins: "# 許可されるドメイン",
    httpAllowedMethods: "# 許可されるHTTPメソッド",
    httpAllowedHeaders: "# 許可されるHTTPヘッダー",
    httpAllowedCredentials: "# 認証情報の許可",
    httpPreflightCacheDuration: "# プリフライトリクエストのキャッシュ時間",
    httpExposeHeaders: '# 公開するレスポンスヘッダー',
  }
};