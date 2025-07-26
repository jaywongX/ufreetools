export default {
  name: 'HTTPプロキシ検出器',
  description: '接続内のHTTPプロキシと中間デバイスを検出・分析',
  title: 'フロントエンドプロキシ検出器',
  intro: 'ネットワーク接続がプロキシを使用しているかどうかを検出し、X-Forwarded-Forおよびその他のプロキシ関連HTTPヘッダー情報を分析',

  detection: {
    title: 'プロキシ検出',
    start: '検出開始',
    detecting: '検出中...',
    stop: '検出停止',
    completed: '検出完了',
    noProxies: 'プロキシは検出されませんでした',
    proxiesFound: '検出されたプロキシ：{count}'
  },

  options: {
    title: '検出オプション',
    testUrl: 'テストURL',
    urlPlaceholder: 'テストするURLを入力（デフォルト：自動）',
    testMethod: 'HTTPメソッド',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'タイムアウト（秒）',
    parallel: '並列テスト',
    techniques: '検出技術',
    headerAnalysis: 'ヘッダー分析',
    traceMethod: 'TRACEメソッド',
    viaHeader: 'Viaヘッダーチェック',
    maxForwards: 'Max-Forwardsテスト',
    fingerprinting: 'プロキシフィンガープリント',
    timing: 'タイミング分析',
    advanced: '詳細オプション',
    apiSelection: 'API選択'
  },

  apis: {
    ipify: 'ipify API',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: '検出結果',
    summary: 'プロキシ概要',
    headers: '完全なリクエストヘッダー',
    info: 'プロキシ情報の説明',
    detected: 'プロキシを検出',
    notDetected: 'プロキシは検出されませんでした',
    detectedDescription: 'リクエストは1つ以上のプロキシサーバーを経由した可能性があります',
    notDetectedDescription: 'リクエストは直接ターゲットサーバーに到達したようです、プロキシを経由していません',
    clientInfo: 'クライアントIP情報',
    remoteIp: 'リモートIPアドレス',
    location: '地理的位置',
    isp: 'ISPプロバイダー',
    proxyHeaders: 'プロキシ関連ヘッダー',
    details: '詳細結果',
    proxy: 'プロキシ',
    type: 'タイプ',
    ip: 'IPアドレス',
    software: 'ソフトウェア',
    confidence: '信頼度',
    latency: '遅延',
    headers: '変更されたヘッダー',
    fingerprint: 'フィンガープリント',
    export: '結果をエクスポート',
    clear: '結果をクリア',
    noData: '利用可能なデータなし',
    originalRequest: '元のリクエスト',
    modifiedRequest: '変更後のリクエスト',
    proxyChain: 'プロキシチェーン',
    server: 'サーバー',
    notSet: '未設定'
  },

  types: {
    forward: 'フォワードプロキシ',
    reverse: 'リバースプロキシ',
    transparent: '透過プロキシ',
    anonymous: '匿名プロキシ',
    elite: '高匿名プロキシ',
    caching: 'キャッシュプロキシ',
    gateway: 'ゲートウェイ',
    loadBalancer: 'ロードバランサー',
    cdn: 'CDN',
    corporate: '企業プロキシ',
    unknown: '不明なタイプ'
  },

  headers: {
    title: 'ヘッダー分析',
    original: '元のヘッダー',
    modified: '変更後のヘッダー',
    added: '追加されたヘッダー',
    removed: '削除されたヘッダー',
    changed: '変更されたヘッダー',
    suspicious: '不審なヘッダー',
    select: '分析するヘッダーを選択',
    name: 'ヘッダー名',
    value: '値',
    all: 'すべてのHTTPリクエストヘッダー',
    notFound: 'このヘッダー情報は見つかりませんでした'
  },

  details: {
    title: 'プロキシ詳細',
    software: 'ソフトウェア',
    version: 'バージョン',
    features: '機能',
    modifications: '変更',
    behavior: '動作',
    security: 'セキュリティへの影響',
    recommendations: '推奨事項'
  },

  map: {
    title: '接続図',
    client: 'あなたのクライアント',
    target: 'ターゲットサーバー',
    hop: 'ホップ {n}',
    direct: '直接接続',
    proxied: 'プロキシ接続',
    unknown: '不明なパス'
  },

  actions: {
    copyHeaders: 'リクエストヘッダーをコピー',
    copyToClipboard: 'クリップボードにコピー'
  },

  messages: {
    startDetection: 'プロキシ検出を開始...',
    detectionComplete: 'プロキシ検出完了',
    error: '検出失敗: {message}',
    timeout: '検出タイムアウト',
    exportComplete: '結果のエクスポートに成功',
    noConnection: '接続を確立できません',
    limitedResults: '制限により結果が限定されています',
    privateNetwork: 'プライベートネットワークを検出',
    publicNetwork: '公共ネットワークを検出',
    warning: '警告：{message}',
    proxyRemoved: 'プロキシが検出ヘッダーを削除している可能性があります',
    copied: 'リクエストヘッダーをクリップボードにコピーしました',
    copyFailed: 'コピーに失敗しました、手動でコピーしてください',
    unknown: '不明なエラー'
  },

  info: {
    description: 'HTTPプロキシはクライアントとサーバーの間に位置する中間サーバーで、様々な目的でHTTPリクエストを処理することができます。プロキシはネットワークプロバイダー、組織、企業、または個人によって設定されることがあります。'
  },

  xff: {
    title: 'X-Forwarded-Forとは？',
    description: 'X-Forwarded-For (XFF) は、HTTPプロキシやロードバランサーを介してWebサーバーに接続するクライアントの元のIPアドレスを識別するために使用されるHTTPヘッダーフィールドです。リクエストがプロキシを経由すると、サーバーは通常プロキシサーバーのIPアドレスしか見ることができませんが、XFFヘッダーは元のクライアントIPを追跡する方法を提供します。',
    notFound: 'X-Forwarded-Forヘッダーが見つかりませんでした。これはリクエストがプロキシを経由していないか、プロキシがこのヘッダーを追加していないことを示しています。',
    format: {
      title: 'XFFヘッダーの形式',
      description: 'XFFヘッダーの標準形式はカンマ区切りのIPアドレスリストで、最も左のIPが元のクライアントで、その後に経由したプロキシサーバーが続きます：'
    },
    related: {
      title: 'その他の関連プロキシヘッダー',
      forwardedProto: 'クライアントがプロキシに接続するために使用したプロトコル（HTTPまたはHTTPS）を識別',
      forwardedHost: 'クライアントが要求した元のホスト名を識別',
      via: 'リクエストとレスポンスが経由したプロキシサーバーを示す',
      forwarded: 'クライアントとすべてのプロキシ情報を含む、より新しい標準ヘッダー'
    },
    importance: {
      title: 'なぜプロキシ情報が重要なのか',
      security: 'セキュリティとアクセス制御 - 乱用を防止しIPベースのアクセス制御を実施するために、クライアントIPを正確に識別することが重要',
      logging: 'ログ記録 - 監査や問題診断のために、プロキシIPよりも実際のクライアントIPを記録する方が有用',
      geolocation: '位置情報サービス - IPベースの位置情報サービスは、正確な結果を提供するために実際のクライアントIPを必要とする',
      content: 'コンテンツのカスタマイズ - 一部のサービスはユーザーの地理的位置に基づいてローカライズされたコンテンツを提供'
    },
    security: {
      title: 'セキュリティ上の考慮事項',
      description: 'X-Forwarded-Forヘッダーはクライアントによって偽造される可能性があることに注意が必要です。高いセキュリティ要件がある環境では、既知のプロキシサーバーから追加されたXFF情報のみを信頼するか、他の方法でクライアントIPを検証すべきです。'
    }
  },

  privacy: {
    title: 'プライバシーに関するヒント',
    description: '検出プロセス中、あなたのIPアドレスとHTTPヘッダー情報は分析のためにサードパーティのAPIサービスに送信されます。これらのサービスはサービス提供のためにこれらの情報を収集・保存する場合があります。',
    suggestion: 'プライバシーに関する懸念がある場合は、別のAPIプロバイダーを選択するか、VPNサービスの使用を検討してください。'
  }
};