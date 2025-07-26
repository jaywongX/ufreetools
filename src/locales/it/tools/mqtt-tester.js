export default {
  name: 'Strumento di Test MQTT',
  description: 'Testa e debugga connessioni MQTT, pubblica messaggi e sottoscrivi topic',

  connection: {
    title: 'Connessione',
    broker: 'Numero porta',
    url: 'URL broker',
    urlPlaceholder: 'Esempio: mqtt://broker.example.com:1883',
    clientId: 'ID client',
    clientIdPlaceholder: 'Inserisci ID client o lascia vuoto per generazione casuale',
    username: 'Nome utente',
    password: 'Password',
    keepAlive: 'Mantieni connessione',
    cleanSession: 'Pulisci sessione',
    autoReconnect: 'Riconnessione automatica',
    ssl: 'Usa SSL/TLS',
    sslOptions: 'Opzioni SSL/TLS',
    protocol: 'Versione protocollo',
    portInfo: 'Porte predefinite: MQTT(1883), WebSocket(8083)',
    connect: 'Connetti',
    disconnect: 'Disconnetti',
    status: 'Stato',
    connected: 'Connesso',
    disconnected: 'Disconnesso',
    connecting: 'Connessione in corso...'
  },

  publish: {
    title: 'Pubblicazione',
    topic: 'Topic',
    topicPlaceholder: 'Inserisci il topic da pubblicare',
    message: 'Messaggio',
    messagePlaceholder: 'Inserisci il contenuto del messaggio',
    qos: 'Qualità del servizio (QoS)',
    retain: 'Mantieni',
    format: 'Formato contenuto',
    text: 'Testo',
    json: 'JSON',
    hex: 'Esadecimale',
    binary: 'Binario',
    send: 'Pubblica',
    clear: 'Pulisci',
    history: 'Cronologia',
    addToFavorites: 'Aggiungi ai preferiti',
    validateJson: 'Valida JSON'
  },

  subscribe: {
    title: 'Sottoscrizione',
    topic: 'Topic',
    topicPlaceholder: 'Inserisci topic da sottoscrivere (supporta wildcard # e +)',
    qos: 'Qualità del servizio (QoS)',
    subscribe: 'Sottoscrivi',
    unsubscribe: 'Annulla sottoscrizione',
    unsubscribeAll: 'Annulla tutte le sottoscrizioni',
    subscriptions: 'Sottoscrizioni attive',
    noSubscriptions: 'Nessuna sottoscrizione attiva',
    addSubscription: 'Aggiungi sottoscrizione',
    topicPatterns: 'Pattern topic',
    systemTopics: 'Topic di sistema'
  },

  messages: {
    title: 'Messaggi',
    received: 'Messaggi ricevuti',
    sent: 'Messaggi inviati',
    topic: 'Topic',
    payload: 'Payload',
    qos: 'QoS',
    retained: 'Mantenuto',
    time: 'Ora',
    clear: 'Pulisci messaggi',
    export: 'Esporta messaggi',
    filter: 'Filtra',
    noMessages: 'Nessun messaggio',
    view: 'Visualizza dettagli',
    copy: 'Copia payload',
    duplicate: 'Duplica come pubblicazione'
  },

  tools: {
    title: 'Strumenti',
    topicGenerator: 'Generatore topic',
    payloadFormatter: 'Formattatore payload',
    qosExplainer: 'Spiegazione QoS',
    wildcardTester: 'Tester wildcard',
    packetInspector: 'Ispezione pacchetti',
    loadTest: 'Test carico'
  },

  settings: {
    title: 'Impostazioni',
    maxMessages: 'Numero massimo messaggi',
    timeFormat: 'Formato ora',
    theme: 'Tema',
    autoExpand: 'Espansione automatica messaggi',
    saveHistory: 'Salva cronologia',
    clearOnDisconnect: 'Pulisci messaggi alla disconnessione',
    advanced: 'Impostazioni avanzate',
    lastWill: 'Messaggio di testamento'
  },

  lastWill: {
    title: 'Testamento',
    enable: 'Abilita testamento',
    topic: 'Topic testamento',
    message: 'Messaggio testamento',
    qos: 'QoS testamento',
    retain: 'Mantieni testamento'
  },

  notifications: {
    connectSuccess: 'Connesso a {broker}',
    connectError: 'Errore connessione: {error}',
    disconnected: 'Disconnesso dal broker',
    subscribeSuccess: 'Sottoscritto a {topic}',
    subscribeError: 'Errore sottoscrizione: {error}',
    unsubscribeSuccess: 'Sottoscrizione annullata a {topic}',
    publishSuccess: 'Messaggio pubblicato su {topic}',
    publishError: 'Errore pubblicazione: {error}',
    invalidJson: 'Payload JSON non valido',
    packetReceived: 'Ricevuti {packets} pacchetti'
  }
};