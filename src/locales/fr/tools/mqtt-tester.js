export default {
  name: 'Outil de test MQTT',
  description: 'Tester et déboguer les connexions MQTT, publier des messages et s\'abonner à des topics',

  connection: {
    title: 'Connexion',
    broker: 'Port',
    url: 'URL du broker',
    urlPlaceholder: 'Ex : mqtt://broker.example.com:1883',
    clientId: 'ID client',
    clientIdPlaceholder: 'Entrez un ID client ou laissez vide pour génération aléatoire',
    username: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    keepAlive: 'Maintenir la connexion',
    cleanSession: 'Nettoyer la session',
    autoReconnect: 'Reconnexion automatique',
    ssl: 'Utiliser SSL/TLS',
    sslOptions: 'Options SSL/TLS',
    protocol: 'Version du protocole',
    portInfo: 'Ports par défaut : MQTT(1883), WebSocket(8083)',
    connect: 'Se connecter',
    disconnect: 'Se déconnecter',
    status: 'Statut',
    connected: 'Connecté',
    disconnected: 'Déconnecté',
    connecting: 'Connexion en cours...'
  },

  publish: {
    title: 'Publication',
    topic: 'Topic',
    topicPlaceholder: 'Entrez le topic à publier',
    message: 'Message',
    messagePlaceholder: 'Entrez le contenu du message',
    qos: 'Qualité de service (QoS)',
    retain: 'Conserver',
    format: 'Format du contenu',
    text: 'Texte',
    json: 'JSON',
    hex: 'Hexadécimal',
    binary: 'Binaire',
    send: 'Publier',
    clear: 'Effacer',
    history: 'Historique',
    addToFavorites: 'Ajouter aux favoris',
    validateJson: 'Valider JSON'
  },

  subscribe: {
    title: 'Abonnement',
    topic: 'Topic',
    topicPlaceholder: 'Entrez le topic à s\'abonner (supporte les wildcards # et +)',
    qos: 'Qualité de service (QoS)',
    subscribe: 'S\'abonner',
    unsubscribe: 'Se désabonner',
    unsubscribeAll: 'Se désabonner de tout',
    subscriptions: 'Abonnements actifs',
    noSubscriptions: 'Aucun abonnement actif',
    addSubscription: 'Ajouter un abonnement',
    topicPatterns: 'Modèles de topics',
    systemTopics: 'Topics système'
  },

  messages: {
    title: 'Messages',
    received: 'Messages reçus',
    sent: 'Messages envoyés',
    topic: 'Topic',
    payload: 'Charge utile',
    qos: 'QoS',
    retained: 'Conservé',
    time: 'Heure',
    clear: 'Effacer les messages',
    export: 'Exporter les messages',
    filter: 'Filtrer',
    noMessages: 'Aucun message',
    view: 'Voir détails',
    copy: 'Copier la charge utile',
    duplicate: 'Dupliquer pour publication'
  },

  tools: {
    title: 'Outils',
    topicGenerator: 'Générateur de topics',
    payloadFormatter: 'Formateur de charge utile',
    qosExplainer: 'Explication QoS',
    wildcardTester: 'Testeur de wildcards',
    packetInspector: 'Inspecteur de paquets',
    loadTest: 'Test de charge'
  },

  settings: {
    title: 'Paramètres',
    maxMessages: 'Nombre max de messages',
    timeFormat: 'Format horaire',
    theme: 'Thème',
    autoExpand: 'Développer messages automatiquement',
    saveHistory: 'Sauvegarder l\'historique',
    clearOnDisconnect: 'Effacer messages à la déconnexion',
    advanced: 'Paramètres avancés',
    lastWill: 'Message testament'
  },

  lastWill: {
    title: 'Testament',
    enable: 'Activer le testament',
    topic: 'Topic testament',
    message: 'Message testament',
    qos: 'QoS testament',
    retain: 'Conserver testament'
  },

  notifications: {
    connectSuccess: 'Connecté à {broker}',
    connectError: 'Erreur de connexion : {error}',
    disconnected: 'Déconnecté du broker',
    subscribeSuccess: 'Abonné à {topic}',
    subscribeError: 'Échec abonnement : {error}',
    unsubscribeSuccess: 'Désabonné de {topic}',
    publishSuccess: 'Message publié sur {topic}',
    publishError: 'Échec publication : {error}',
    invalidJson: 'Charge utile JSON invalide',
    packetReceived: '{packets} paquets reçus'
  }
};