export default {
  name: 'Tester WebSocket',
  description: 'Connettiti a server WebSocket, invia messaggi e visualizza le risposte',

  connection: {
    url: 'URL WebSocket',
    urlPlaceholder: 'Esempio: ws://echo.websocket.org',
    protocol: 'Sottoprotocollo (opzionale)',
    protocolPlaceholder: 'Separati da virgola',
    connect: 'Connetti',
    disconnect: 'Disconnetti',
    status: 'Stato connessione',
    connected: 'Connesso',
    disconnected: 'Disconnesso',
    waiting: 'In attesa di connessione',
    autoReconnect: 'Riconnessione automatica',
    reconnectMessage: 'Tentativo di riconnessione tra {0} secondi...'
  },

  options: {
    title: 'Opzioni',
    autoScroll: 'Scorrimento automatico log'
  },

  messages: {
    send: 'Invia messaggio',
    logs: 'Log messaggi',
    emptyLogs: 'I messaggi appariranno qui dopo la connessione',
    placeholder: 'Inserisci il messaggio da inviare...',
    sendButton: 'Invia',
    clearButton: 'Pulisci',
    copyButton: 'Copia',
    clearLogs: 'Pulisci log',
    copyLogs: 'Copia log',
    format: {
      title: 'Formato',
      text: 'Testo semplice',
      json: 'JSON',
      binary: 'Binario'
    },
    templates: {
      json: 'JSON',
      text: 'Testo'
    },
    types: {
      sent: 'Inviato →',
      received: 'Ricevuto ←',
      error: 'Errore !',
      info: 'Informazione'
    }
  },

  savedConnections: {
    title: 'Connessioni salvate',
    empty: 'Nessuna connessione salvata',
    save: 'Salva connessione corrente',
    saveConnection: 'Salva connessione',
    connectionName: 'Nome connessione',
    load: 'Carica',
    delete: 'Elimina',
    cancel: 'Annulla'
  },

  testServers: {
    title: 'Server di test',
    description: 'Ecco alcuni server WebSocket pubblici per i test:',
    useServer: 'Usa questo server',
    servers: {
      echo: {
        name: 'Test Echo',
        description: 'Server echo sicuro con supporto WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Servizio echo fornito da Postman con supporto WSS'
      }
    }
  },

  logs: {
    connectingTo: 'Connessione a {0} in corso...',
    connectionSuccess: 'Connessione riuscita',
    connectionError: 'Errore WebSocket',
    connectionClosed: 'Connessione chiusa (codice: {0}{1})',
    invalidJson: 'JSON non valido: {0}',
    sendFailed: 'Invio fallito: {0}',
    emptyMessage: 'Il messaggio non può essere vuoto',
    notConnected: 'WebSocket non connesso',
    copied: 'Log copiato negli appunti',
    copyFailed: 'Copia fallita: {0}',
    serverSelected: 'Server selezionato: {0}',
    binaryData: '[Dati binari]'
  }
};