export default {
  name: 'MQTT測試工具',
  description: '測試和調試MQTT連接，發布消息和訂閱主題',

  connection: {
    title: '連接',
    broker: '端口號',
    url: '代理URL',
    urlPlaceholder: '例如：mqtt://broker.example.com:1883',
    clientId: '客戶端ID',
    clientIdPlaceholder: '輸入客戶端ID或留空隨機生成',
    username: '用戶名',
    password: '密碼',
    keepAlive: '保持連接',
    cleanSession: '清除會話',
    autoReconnect: '自動重連',
    ssl: '使用SSL/TLS',
    sslOptions: 'SSL/TLS選項',
    protocol: '協議版本',
    portInfo: '默認端口: MQTT(1883), WebSocket(8083)',
    connect: '連接',
    disconnect: '斷開連接',
    status: '狀態',
    connected: '已連接',
    disconnected: '已斷開連接',
    connecting: '連接中...'
  },

  publish: {
    title: '發布',
    topic: '主題',
    topicPlaceholder: '輸入要發布的主題',
    message: '消息',
    messagePlaceholder: '輸入消息內容',
    qos: '服務質量(QoS)',
    retain: '保留',
    format: '內容格式',
    text: '文本',
    json: 'JSON',
    hex: '十六進制',
    binary: '二進制',
    send: '發布',
    clear: '清除',
    history: '歷史記錄',
    addToFavorites: '添加到收藏',
    validateJson: '驗證JSON'
  },

  subscribe: {
    title: '訂閱',
    topic: '主題',
    topicPlaceholder: '輸入要訂閱的主題（支持通配符#和+）',
    qos: '服務質量(QoS)',
    subscribe: '訂閱',
    unsubscribe: '取消訂閱',
    unsubscribeAll: '取消所有訂閱',
    subscriptions: '活動訂閱',
    noSubscriptions: '沒有活動訂閱',
    addSubscription: '添加訂閱',
    topicPatterns: '主題模式',
    systemTopics: '系統主題'
  },

  messages: {
    title: '消息',
    received: '接收的消息',
    sent: '發送的消息',
    topic: '主題',
    payload: '負載',
    qos: 'QoS',
    retained: '保留',
    time: '時間',
    clear: '清除消息',
    export: '導出消息',
    filter: '篩選',
    noMessages: '沒有消息',
    view: '查看詳情',
    copy: '複製負載',
    duplicate: '複製為發布'
  },

  tools: {
    title: '工具',
    topicGenerator: '主題生成器',
    payloadFormatter: '負載格式化器',
    qosExplainer: 'QoS說明',
    wildcardTester: '通配符測試器',
    packetInspector: '數據包檢查器',
    loadTest: '負載測試'
  },

  settings: {
    title: '設置',
    maxMessages: '最大消息數',
    timeFormat: '時間格式',
    theme: '主題',
    autoExpand: '自動展開消息',
    saveHistory: '保存歷史記錄',
    clearOnDisconnect: '斷開連接時清除消息',
    advanced: '高級設置',
    lastWill: '遺囑消息'
  },

  lastWill: {
    title: '遺囑',
    enable: '啟用遺囑',
    topic: '遺囑主題',
    message: '遺囑消息',
    qos: '遺囑QoS',
    retain: '遺囑保留'
  },

  notifications: {
    connectSuccess: '已連接到{broker}',
    connectError: '連接錯誤：{error}',
    disconnected: '已從代理斷開連接',
    subscribeSuccess: '已訂閱{topic}',
    subscribeError: '訂閱失敗：{error}',
    unsubscribeSuccess: '已取消訂閱{topic}',
    publishSuccess: '消息已發布到{topic}',
    publishError: '發布失敗：{error}',
    invalidJson: '無效的JSON負載',
    packetReceived: '已接收{packets}個數據包'
  }
};