export default {
  name: 'Testeur WebSocket',
  description: 'Se connecter à un serveur WebSocket, envoyer des messages et voir les réponses',

  connection: {
    url: 'URL WebSocket',
    urlPlaceholder: 'Exemple : ws://echo.websocket.org',
    protocol: 'Sous-protocole (optionnel)',
    protocolPlaceholder: 'Séparés par des virgules',
    connect: 'Connexion',
    disconnect: 'Déconnexion',
    status: 'Statut de connexion',
    connected: 'Connecté',
    disconnected: 'Déconnecté',
    waiting: 'En attente de connexion',
    autoReconnect: 'Reconnexion automatique',
    reconnectMessage: 'Tentative de reconnexion dans {0} secondes...'
  },

  options: {
    title: 'Options',
    autoScroll: 'Défilement automatique des logs'
  },

  messages: {
    send: 'Envoyer un message',
    logs: 'Journal des messages',
    emptyLogs: 'Les messages apparaîtront ici après connexion',
    placeholder: 'Saisissez votre message...',
    sendButton: 'Envoyer',
    clearButton: 'Effacer',
    copyButton: 'Copier',
    clearLogs: 'Effacer le journal',
    copyLogs: 'Copier le journal',
    format: {
      title: 'Format',
      text: 'Texte brut',
      json: 'JSON',
      binary: 'Binaire'
    },
    templates: {
      json: 'JSON',
      text: 'Texte'
    },
    types: {
      sent: 'Envoyé →',
      received: 'Reçu ←',
      error: 'Erreur !',
      info: 'Information'
    }
  },

  savedConnections: {
    title: 'Connexions sauvegardées',
    empty: 'Aucune connexion sauvegardée',
    save: 'Sauvegarder cette connexion',
    saveConnection: 'Enregistrer la connexion',
    connectionName: 'Nom de la connexion',
    load: 'Charger',
    delete: 'Supprimer',
    cancel: 'Annuler'
  },

  testServers: {
    title: 'Serveurs de test',
    description: 'Voici quelques serveurs WebSocket publics pour vos tests :',
    useServer: 'Utiliser ce serveur',
    servers: {
      echo: {
        name: 'Test Echo',
        description: 'Serveur echo sécurisé avec support WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Service Echo de Postman avec support WSS'
      }
    }
  },

  logs: {
    connectingTo: 'Connexion à {0}...',
    connectionSuccess: 'Connexion réussie',
    connectionError: 'Erreur WebSocket',
    connectionClosed: 'Connexion fermée (code : {0}{1})',
    invalidJson: 'JSON invalide : {0}',
    sendFailed: 'Échec d\'envoi : {0}',
    emptyMessage: 'Le message ne peut pas être vide',
    notConnected: 'Non connecté au WebSocket',
    copied: 'Journal copié dans le presse-papiers',
    copyFailed: 'Échec de copie : {0}',
    serverSelected: 'Serveur sélectionné : {0}',
    binaryData: '[Données binaires]'
  }
};