export default {
  name: 'WebSocket测试器',
  description: '连接到WebSocket服务器，发送消息并查看响应',

  connection: {
    url: 'WebSocket地址',
    urlPlaceholder: '例如: ws://echo.websocket.org',
    protocol: '子协议 (可选)',
    protocolPlaceholder: '逗号分隔',
    connect: '连接',
    disconnect: '断开',
    status: '连接状态',
    connected: '已连接',
    disconnected: '未连接',
    waiting: '等待连接',
    autoReconnect: '自动重连',
    reconnectMessage: '将在 {0} 秒后尝试重新连接...'
  },

  options: {
    title: '选项',
    autoScroll: '自动滚动日志'
  },

  messages: {
    send: '发送消息',
    logs: '消息日志',
    emptyLogs: '连接后的消息将显示在这里',
    placeholder: '输入要发送的消息...',
    sendButton: '发送',
    clearButton: '清空',
    copyButton: '复制',
    clearLogs: '清空日志',
    copyLogs: '复制日志',
    format: {
      title: '格式',
      text: '纯文本',
      json: 'JSON',
      binary: '二进制'
    },
    templates: {
      json: 'JSON',
      text: '文本'
    },
    types: {
      sent: '发送 →',
      received: '接收 ←',
      error: '错误 !',
      info: '信息'
    }
  },

  savedConnections: {
    title: '保存的连接',
    empty: '暂无保存的连接',
    save: '保存当前连接',
    saveConnection: '保存连接',
    connectionName: '连接名称',
    load: '加载',
    delete: '删除',
    cancel: '取消'
  },

  testServers: {
    title: '测试服务器',
    description: '以下是一些可用于测试的公共WebSocket服务器:',
    useServer: '使用此服务器',
    servers: {
      echo: {
        name: 'Echo测试',
        description: '安全的回显测试服务器，支持WSS连接'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Postman提供的Echo服务，支持WSS'
      }
    }
  },

  logs: {
    connectingTo: '正在连接到 {0}...',
    connectionSuccess: '连接成功',
    connectionError: 'WebSocket错误',
    connectionClosed: '连接关闭 (代码: {0}{1})',
    invalidJson: '无效的JSON格式: {0}',
    sendFailed: '发送失败: {0}',
    emptyMessage: '消息不能为空',
    notConnected: '未连接WebSocket',
    copied: '日志已复制到剪贴板',
    copyFailed: '复制失败: {0}',
    serverSelected: '已选择服务器: {0}',
    binaryData: '[二进制数据]'
  }
}; 