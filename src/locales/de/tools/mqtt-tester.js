export default {
  name: 'MQTT Test Tool',
  description: 'MQTT-Verbindungen testen und debuggen, Nachrichten publizieren und Themen abonnieren',

  // Verbindungseinstellungen
  connection: {
    title: 'Verbindung',
    broker: 'Broker',
    url: 'Broker URL',
    urlPlaceholder: 'z.B.: mqtt://broker.example.com:1883',
    clientId: 'Client ID',
    clientIdPlaceholder: 'Client ID eingeben oder leer lassen für automatische Generierung',
    username: 'Benutzername',
    password: 'Passwort',
    keepAlive: 'Keep Alive',
    cleanSession: 'Clean Session',
    autoReconnect: 'Auto-Reconnect',
    ssl: 'SSL/TLS verwenden',
    sslOptions: 'SSL/TLS Optionen',
    protocol: 'Protokollversion',
    portInfo: 'Standard Ports: MQTT(1883), WebSocket(8083)',
    connect: 'Verbinden',
    disconnect: 'Trennen',
    status: 'Status',
    connected: 'Verbunden',
    disconnected: 'Getrennt',
    connecting: 'Verbindung wird hergestellt...'
  },

  // Nachrichten publizieren
  publish: {
    title: 'Publizieren',
    topic: 'Topic',
    topicPlaceholder: 'Topic eingeben',
    message: 'Nachricht',
    messagePlaceholder: 'Nachrichteninhalt eingeben',
    qos: 'QoS (Quality of Service)',
    retain: 'Retain',
    format: 'Format',
    text: 'Text',
    json: 'JSON',
    hex: 'Hexadezimal',
    binary: 'Binär',
    send: 'Senden',
    clear: 'Löschen',
    history: 'Verlauf',
    addToFavorites: 'Zu Favoriten hinzufügen',
    validateJson: 'JSON validieren'
  },

  // Themen abonnieren
  subscribe: {
    title: 'Abonnieren',
    topic: 'Topic',
    topicPlaceholder: 'Topic zum Abonnieren eingeben (Wildcards # und + unterstützt)',
    qos: 'QoS',
    subscribe: 'Abonnieren',
    unsubscribe: 'Abbestellen',
    unsubscribeAll: 'Alle abbestellen',
    subscriptions: 'Aktive Abonnements',
    noSubscriptions: 'Keine aktiven Abonnements',
    addSubscription: 'Abonnement hinzufügen',
    topicPatterns: 'Topic Muster',
    systemTopics: 'System Topics'
  },

  // Nachrichtenverwaltung
  messages: {
    title: 'Nachrichten',
    received: 'Empfangene Nachrichten',
    sent: 'Gesendete Nachrichten',
    topic: 'Topic',
    payload: 'Payload',
    qos: 'QoS',
    retained: 'Retained',
    time: 'Zeit',
    clear: 'Nachrichten löschen',
    export: 'Nachrichten exportieren',
    filter: 'Filter',
    noMessages: 'Keine Nachrichten',
    view: 'Details anzeigen',
    copy: 'Payload kopieren',
    duplicate: 'Als Publikation kopieren'
  },

  // Werkzeuge
  tools: {
    title: 'Werkzeuge',
    topicGenerator: 'Topic Generator',
    payloadFormatter: 'Payload Formatierer',
    qosExplainer: 'QoS Erklärung',
    wildcardTester: 'Wildcard Tester',
    packetInspector: 'Paket Inspektor',
    loadTest: 'Lasttest'
  },

  // Einstellungen
  settings: {
    title: 'Einstellungen',
    maxMessages: 'Maximale Nachrichtenanzahl',
    timeFormat: 'Zeitformat',
    theme: 'Theme',
    autoExpand: 'Nachrichten automatisch aufklappen',
    saveHistory: 'Verlauf speichern',
    clearOnDisconnect: 'Nachrichten bei Trennung löschen',
    advanced: 'Erweiterte Einstellungen',
    lastWill: 'Last Will & Testament'
  },

  // Last Will Einstellungen
  lastWill: {
    title: 'Last Will',
    enable: 'Aktivieren',
    topic: 'Last Will Topic',
    message: 'Last Will Nachricht',
    qos: 'Last Will QoS',
    retain: 'Last Will Retain'
  },

  // Benachrichtigungen
  notifications: {
    connectSuccess: 'Verbunden mit {broker}',
    connectError: 'Verbindungsfehler: {error}',
    disconnected: 'Verbindung zum Broker getrennt',
    subscribeSuccess: 'Abonniert {topic}',
    subscribeError: 'Abonnement fehlgeschlagen: {error}',
    unsubscribeSuccess: 'Abbestellt {topic}',
    publishSuccess: 'Nachricht an {topic} gesendet',
    publishError: 'Publikation fehlgeschlagen: {error}',
    invalidJson: 'Ungültige JSON Payload',
    packetReceived: '{packets} Pakete empfangen'
  }
};