export default {
  name: 'WebSocket Tester',
  description: 'Connect to WebSocket servers, send messages and view responses',
  connection: {
    url: 'WebSocket URL',
    urlPlaceholder: 'e.g. ws://echo.websocket.org',
    protocol: 'Subprotocol (optional)',
    protocolPlaceholder: 'Comma separated',
    connect: 'Connect',
    disconnect: 'Disconnect',
    status: 'Connection Status',
    connected: 'Connected',
    disconnected: 'Disconnected',
    waiting: 'Waiting to Connect',
    autoReconnect: 'Auto Reconnect',
    reconnectMessage: 'Will try to reconnect in {0} seconds...'
  },
  options: {
    title: 'Options',
    autoScroll: 'Auto Scroll Logs'
  },
  messages: {
    send: 'Send Messages',
    logs: 'Message Logs',
    emptyLogs: 'Messages will appear here once connected',
    placeholder: 'Enter message to send...',
    sendButton: 'Send',
    clearButton: 'Clear',
    copyButton: 'Copy',
    clearLogs: 'Clear Logs',
    copyLogs: 'Copy Logs',
    format: {
      title: 'Format',
      text: 'Plain Text',
      json: 'JSON',
      binary: 'Binary'
    },
    templates: {
      json: 'JSON',
      text: 'Text'
    },
    types: {
      sent: 'Sent →',
      received: 'Received ←',
      error: 'Error !',
      info: 'Info'
    }
  },
  savedConnections: {
    title: 'Saved Connections',
    empty: 'No saved connections',
    save: 'Save Current Connection',
    saveConnection: 'Save Connection',
    connectionName: 'Connection Name',
    load: 'Load',
    delete: 'Delete',
    cancel: 'Cancel'
  },
  testServers: {
    title: 'Test Servers',
    description: 'Here are some public WebSocket servers available for testing:',
    useServer: 'Use This Server',
    servers: {
      echo: {
        name: 'Echo Test',
        description: 'Secure echo test server, supports WSS connections'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Echo service provided by Postman, supports WSS'
      }
    }
  },
  logs: {
    connectingTo: 'Connecting to {0}...',
    connectionSuccess: 'Connection successful',
    connectionError: 'WebSocket error',
    connectionClosed: 'Connection closed (Code: {0}{1})',
    invalidJson: 'Invalid JSON format: {0}',
    sendFailed: 'Send failed: {0}',
    emptyMessage: 'Message cannot be empty',
    notConnected: 'WebSocket not connected',
    copied: 'Logs copied to clipboard',
    copyFailed: 'Copy failed: {0}',
    serverSelected: 'Server selected: {0}',
    binaryData: '[Binary data]'
  }
} 