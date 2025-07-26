export default {
  name: 'MQTTテストツール',
  description: 'MQTT接続のテストとデバッグ、メッセージの公開とトピックの購読',

  connection: {
    title: '接続',
    broker: 'ポート番号',
    url: 'ブローカーURL',
    urlPlaceholder: '例：mqtt://broker.example.com:1883',
    clientId: 'クライアントID',
    clientIdPlaceholder: 'クライアントIDを入力するか空白でランダム生成',
    username: 'ユーザー名',
    password: 'パスワード',
    keepAlive: 'キープアライブ',
    cleanSession: 'セッションクリア',
    autoReconnect: '自動再接続',
    ssl: 'SSL/TLSを使用',
    sslOptions: 'SSL/TLSオプション',
    protocol: 'プロトコルバージョン',
    portInfo: 'デフォルトポート: MQTT(1883), WebSocket(8083)',
    connect: '接続',
    disconnect: '切断',
    status: 'ステータス',
    connected: '接続済み',
    disconnected: '切断済み',
    connecting: '接続中...'
  },

  publish: {
    title: '公開',
    topic: 'トピック',
    topicPlaceholder: '公開するトピックを入力',
    message: 'メッセージ',
    messagePlaceholder: 'メッセージ内容を入力',
    qos: 'サービス品質(QoS)',
    retain: '保持',
    format: 'コンテンツ形式',
    text: 'テキスト',
    json: 'JSON',
    hex: '16進数',
    binary: 'バイナリ',
    send: '公開',
    clear: 'クリア',
    history: '履歴',
    addToFavorites: 'お気に入りに追加',
    validateJson: 'JSONを検証'
  },

  subscribe: {
    title: '購読',
    topic: 'トピック',
    topicPlaceholder: '購読するトピックを入力（ワイルドカード#と+をサポート）',
    qos: 'サービス品質(QoS)',
    subscribe: '購読',
    unsubscribe: '購読解除',
    unsubscribeAll: 'すべての購読を解除',
    subscriptions: 'アクティブな購読',
    noSubscriptions: 'アクティブな購読はありません',
    addSubscription: '購読を追加',
    topicPatterns: 'トピックパターン',
    systemTopics: 'システムトピック'
  },

  messages: {
    title: 'メッセージ',
    received: '受信したメッセージ',
    sent: '送信したメッセージ',
    topic: 'トピック',
    payload: 'ペイロード',
    qos: 'QoS',
    retained: '保持',
    time: '時間',
    clear: 'メッセージをクリア',
    export: 'メッセージをエクスポート',
    filter: 'フィルター',
    noMessages: 'メッセージはありません',
    view: '詳細を表示',
    copy: 'ペイロードをコピー',
    duplicate: '公開用にコピー'
  },

  tools: {
    title: 'ツール',
    topicGenerator: 'トピックジェネレーター',
    payloadFormatter: 'ペイロードフォーマッター',
    qosExplainer: 'QoS説明',
    wildcardTester: 'ワイルドカードテスター',
    packetInspector: 'パケットインスペクター',
    loadTest: '負荷テスト'
  },

  settings: {
    title: '設定',
    maxMessages: '最大メッセージ数',
    timeFormat: '時間形式',
    theme: 'テーマ',
    autoExpand: 'メッセージを自動展開',
    saveHistory: '履歴を保存',
    clearOnDisconnect: '切断時にメッセージをクリア',
    advanced: '詳細設定',
    lastWill: 'ラストウィルメッセージ'
  },

  lastWill: {
    title: 'ラストウィル',
    enable: 'ラストウィルを有効化',
    topic: 'ラストウィルトピック',
    message: 'ラストウィルメッセージ',
    qos: 'ラストウィルQoS',
    retain: 'ラストウィル保持'
  },

  notifications: {
    connectSuccess: '{broker}に接続しました',
    connectError: '接続エラー：{error}',
    disconnected: 'ブローカーから切断されました',
    subscribeSuccess: '{topic}を購読しました',
    subscribeError: '購読失敗：{error}',
    unsubscribeSuccess: '{topic}の購読を解除しました',
    publishSuccess: 'メッセージが{topic}に公開されました',
    publishError: '公開失敗：{error}',
    invalidJson: '無効なJSONペイロード',
    packetReceived: '{packets}個のパケットを受信しました'
  }
};