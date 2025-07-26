export default {
  name: 'WebSocket測試器',
  description: '連接到WebSocket伺服器，發送訊息並查看回應',

  connection: {
    url: 'WebSocket地址',
    urlPlaceholder: '例如: ws://echo.websocket.org',
    protocol: '子協議 (可選)',
    protocolPlaceholder: '逗號分隔',
    connect: '連接',
    disconnect: '斷開',
    status: '連接狀態',
    connected: '已連接',
    disconnected: '未連接',
    waiting: '等待連接',
    autoReconnect: '自動重連',
    reconnectMessage: '將在 {0} 秒後嘗試重新連接...'
  },

  options: {
    title: '選項',
    autoScroll: '自動滾動日誌'
  },

  messages: {
    send: '發送訊息',
    logs: '訊息日誌',
    emptyLogs: '連接後的訊息將顯示在這裡',
    placeholder: '輸入要發送的訊息...',
    sendButton: '發送',
    clearButton: '清空',
    copyButton: '複製',
    clearLogs: '清空日誌',
    copyLogs: '複製日誌',
    format: {
      title: '格式',
      text: '純文字',
      json: 'JSON',
      binary: '二進制'
    },
    templates: {
      json: 'JSON',
      text: '文字'
    },
    types: {
      sent: '發送 →',
      received: '接收 ←',
      error: '錯誤 !',
      info: '資訊'
    }
  },

  savedConnections: {
    title: '已保存的連接',
    empty: '暫無保存的連接',
    save: '保存當前連接',
    saveConnection: '保存連接',
    connectionName: '連接名稱',
    load: '載入',
    delete: '刪除',
    cancel: '取消'
  },

  testServers: {
    title: '測試伺服器',
    description: '以下是一些可用於測試的公共WebSocket伺服器:',
    useServer: '使用此伺服器',
    servers: {
      echo: {
        name: 'Echo測試',
        description: '安全的回顯測試伺服器，支援WSS連接'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Postman提供的Echo服務，支援WSS'
      }
    }
  },

  logs: {
    connectingTo: '正在連接到 {0}...',
    connectionSuccess: '連接成功',
    connectionError: 'WebSocket錯誤',
    connectionClosed: '連接關閉 (代碼: {0}{1})',
    invalidJson: '無效的JSON格式: {0}',
    sendFailed: '發送失敗: {0}',
    emptyMessage: '訊息不能為空',
    notConnected: '未連接WebSocket',
    copied: '日誌已複製到剪貼簿',
    copyFailed: '複製失敗: {0}',
    serverSelected: '已選擇伺服器: {0}',
    binaryData: '[二進制數據]'
  }
};