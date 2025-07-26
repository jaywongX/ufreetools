export default {
  name: 'WebSocketテスター',
  description: 'WebSocketサーバーに接続し、メッセージを送信してレスポンスを確認',

  connection: {
    url: 'WebSocket URL',
    urlPlaceholder: '例: ws://echo.websocket.org',
    protocol: 'サブプロトコル (オプション)',
    protocolPlaceholder: 'カンマ区切り',
    connect: '接続',
    disconnect: '切断',
    status: '接続状態',
    connected: '接続済み',
    disconnected: '未接続',
    waiting: '接続待機中',
    autoReconnect: '自動再接続',
    reconnectMessage: '{0}秒後に再接続を試みます...'
  },

  options: {
    title: 'オプション',
    autoScroll: 'ログを自動スクロール'
  },

  messages: {
    send: 'メッセージ送信',
    logs: 'メッセージログ',
    emptyLogs: '接続後のメッセージがここに表示されます',
    placeholder: '送信するメッセージを入力...',
    sendButton: '送信',
    clearButton: 'クリア',
    copyButton: 'コピー',
    clearLogs: 'ログをクリア',
    copyLogs: 'ログをコピー',
    format: {
      title: 'フォーマット',
      text: 'テキスト',
      json: 'JSON',
      binary: 'バイナリ'
    },
    templates: {
      json: 'JSON',
      text: 'テキスト'
    },
    types: {
      sent: '送信 →',
      received: '受信 ←',
      error: 'エラー !',
      info: '情報'
    }
  },

  savedConnections: {
    title: '保存済み接続',
    empty: '保存された接続がありません',
    save: '現在の接続を保存',
    saveConnection: '接続を保存',
    connectionName: '接続名',
    load: '読み込み',
    delete: '削除',
    cancel: 'キャンセル'
  },

  testServers: {
    title: 'テストサーバー',
    description: 'テスト用の公開WebSocketサーバー:',
    useServer: 'このサーバーを使用',
    servers: {
      echo: {
        name: 'Echoテスト',
        description: 'WSS接続をサポートするセキュアなエコーテストサーバー'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Postman提供のEchoサービス、WSS対応'
      }
    }
  },

  logs: {
    connectingTo: '{0} に接続中...',
    connectionSuccess: '接続成功',
    connectionError: 'WebSocketエラー',
    connectionClosed: '接続が閉じました (コード: {0}{1})',
    invalidJson: '無効なJSON形式: {0}',
    sendFailed: '送信失敗: {0}',
    emptyMessage: 'メッセージが空です',
    notConnected: 'WebSocketに接続されていません',
    copied: 'ログをクリップボードにコピーしました',
    copyFailed: 'コピー失敗: {0}',
    serverSelected: 'サーバーを選択: {0}',
    binaryData: '[バイナリデータ]'
  }
};