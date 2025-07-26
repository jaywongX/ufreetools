export default {
  name: 'WebSocket-Tester',
  description: 'Verbinden Sie sich mit WebSocket-Servern, senden Sie Nachrichten und sehen Sie die Antworten',

  // Verbindungseinstellungen
  connection: {
    url: 'WebSocket-URL',
    urlPlaceholder: 'z.B.: ws://echo.websocket.org',
    protocol: 'Subprotokoll (optional)',
    protocolPlaceholder: 'Kommagetrennt',
    connect: 'Verbinden',
    disconnect: 'Trennen',
    status: 'Verbindungsstatus',
    connected: 'Verbunden',
    disconnected: 'Getrennt',
    waiting: 'Warte auf Verbindung',
    autoReconnect: 'Automatische Wiederverbindung',
    reconnectMessage: 'Versuche erneut in {0} Sekunden...'
  },

  // Optionen
  options: {
    title: 'Optionen',
    autoScroll: 'Log automatisch scrollen'
  },

  // Nachrichtenbereich
  messages: {
    send: 'Nachricht senden',
    logs: 'Nachrichtenprotokoll',
    emptyLogs: 'Nachrichten nach der Verbindung werden hier angezeigt',
    placeholder: 'Nachricht eingeben...',
    sendButton: 'Senden',
    clearButton: 'Leeren',
    copyButton: 'Kopieren',
    clearLogs: 'Protokoll leeren',
    copyLogs: 'Protokoll kopieren',
    format: {
      title: 'Format',
      text: 'Text',
      json: 'JSON',
      binary: 'Binär'
    },
    templates: {
      json: 'JSON',
      text: 'Text'
    },
    types: {
      sent: 'Gesendet →',
      received: 'Empfangen ←',
      error: 'Fehler !',
      info: 'Info'
    }
  },

  // Gespeicherte Verbindungen
  savedConnections: {
    title: 'Gespeicherte Verbindungen',
    empty: 'Keine gespeicherten Verbindungen',
    save: 'Aktuelle Verbindung speichern',
    saveConnection: 'Verbindung speichern',
    connectionName: 'Verbindungsname',
    load: 'Laden',
    delete: 'Löschen',
    cancel: 'Abbrechen'
  },

  // Testserver
  testServers: {
    title: 'Testserver',
    description: 'Öffentliche WebSocket-Server zum Testen:',
    useServer: 'Diesen Server verwenden',
    servers: {
      echo: {
        name: 'Echo-Test',
        description: 'Sicherer Echo-Testserver mit WSS-Unterstützung'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Echo-Service von Postman mit WSS'
      }
    }
  },

  // Logmeldungen
  logs: {
    connectingTo: 'Verbinde mit {0}...',
    connectionSuccess: 'Verbindung erfolgreich',
    connectionError: 'WebSocket-Fehler',
    connectionClosed: 'Verbindung geschlossen (Code: {0}{1})',
    invalidJson: 'Ungültiges JSON: {0}',
    sendFailed: 'Senden fehlgeschlagen: {0}',
    emptyMessage: 'Nachricht darf nicht leer sein',
    notConnected: 'Nicht verbunden',
    copied: 'Protokoll kopiert',
    copyFailed: 'Kopieren fehlgeschlagen: {0}',
    serverSelected: 'Server ausgewählt: {0}',
    binaryData: '[Binärdaten]'
  }
};