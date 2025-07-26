export default {
  name: 'Détecteur de proxy HTTP',
  description: 'Détecte et analyse les proxies HTTP et équipements intermédiaires dans les connexions',
  title: 'Détecteur de proxy côté client',
  intro: 'Détecte si votre connexion réseau utilise un proxy, analyse les en-têtes HTTP comme X-Forwarded-For et autres informations liées aux proxies',

  detection: {
    title: 'Détection de proxy',
    start: 'Commencer la détection',
    detecting: 'Détection en cours...',
    stop: 'Arrêter la détection',
    completed: 'Détection terminée',
    noProxies: 'Aucun proxy détecté',
    proxiesFound: 'Proxies détectés : {count}'
  },

  options: {
    title: 'Options de détection',
    testUrl: 'URL de test',
    urlPlaceholder: 'Entrez une URL à tester (par défaut : automatique)',
    testMethod: 'Méthode HTTP',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Délai (secondes)',
    parallel: 'Tests parallèles',
    techniques: 'Techniques de détection',
    headerAnalysis: 'Analyse des en-têtes',
    traceMethod: 'Méthode TRACE',
    viaHeader: 'Vérification Via',
    maxForwards: 'Test Max-Forwards',
    fingerprinting: 'Empreinte de proxy',
    timing: 'Analyse temporelle',
    advanced: 'Options avancées',
    apiSelection: 'Sélection API'
  },

  apis: {
    ipify: 'API ipify',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'Résultats de détection',
    summary: 'Résumé proxy',
    headers: 'En-têtes complets',
    info: 'Explication des infos proxy',
    detected: 'Proxy détecté',
    notDetected: 'Aucun proxy détecté',
    detectedDescription: 'Votre requête a probablement traversé un ou plusieurs serveurs proxy',
    notDetectedDescription: 'Votre requête semble être arrivée directement au serveur cible sans proxy',
    clientInfo: 'Infos IP client',
    remoteIp: 'Adresse IP distante',
    location: 'Localisation',
    isp: 'Fournisseur ISP',
    proxyHeaders: 'En-têtes liés aux proxies',
    details: 'Détails des résultats',
    proxy: 'Proxy',
    type: 'Type',
    ip: 'Adresse IP',
    software: 'Logiciel',
    confidence: 'Confiance',
    latency: 'Latence',
    headers: 'En-têtes modifiés',
    fingerprint: 'Empreinte',
    export: 'Exporter résultats',
    clear: 'Effacer résultats',
    noData: 'Aucune donnée disponible',
    originalRequest: 'Requête originale',
    modifiedRequest: 'Requête modifiée',
    proxyChain: 'Chaîne de proxy',
    server: 'Serveur',
    notSet: 'Non défini'
  },

  types: {
    forward: 'Proxy direct',
    reverse: 'Proxy inverse',
    transparent: 'Proxy transparent',
    anonymous: 'Proxy anonyme',
    elite: 'Proxy hautement anonyme',
    caching: 'Proxy de cache',
    gateway: 'Passerelle',
    loadBalancer: 'Répartiteur de charge',
    cdn: 'CDN',
    corporate: 'Proxy d\'entreprise',
    unknown: 'Type inconnu'
  },

  headers: {
    title: 'Analyse des en-têtes',
    original: 'En-têtes originaux',
    modified: 'En-têtes modifiés',
    added: 'En-têtes ajoutés',
    removed: 'En-têtes supprimés',
    changed: 'En-têtes changés',
    suspicious: 'En-têtes suspects',
    select: 'Sélectionner en-têtes à analyser',
    name: 'Nom en-tête',
    value: 'Valeur',
    all: 'Tous les en-têtes HTTP',
    notFound: 'Cet en-tête n\'a pas été trouvé'
  },

  details: {
    title: 'Détails du proxy',
    software: 'Logiciel',
    version: 'Version',
    features: 'Fonctionnalités',
    modifications: 'Modifications',
    behavior: 'Comportement',
    security: 'Impact sécurité',
    recommendations: 'Recommandations'
  },

  map: {
    title: 'Carte de connexion',
    client: 'Votre client',
    target: 'Serveur cible',
    hop: 'Saut {n}',
    direct: 'Connexion directe',
    proxied: 'Connexion proxy',
    unknown: 'Chemin inconnu'
  },

  actions: {
    copyHeaders: 'Copier en-têtes',
    copyToClipboard: 'Copier dans presse-papiers'
  },

  messages: {
    startDetection: 'Début de détection proxy...',
    detectionComplete: 'Détection proxy terminée',
    error: 'Échec détection : {message}',
    timeout: 'Délai dépassé',
    exportComplete: 'Export réussi',
    noConnection: 'Connexion impossible',
    limitedResults: 'Résultats limités à cause de restrictions',
    privateNetwork: 'Réseau privé détecté',
    publicNetwork: 'Réseau public détecté',
    warning: 'Avertissement : {message}',
    proxyRemoved: 'Un proxy pourrait supprimer les en-têtes de détection',
    copied: 'En-têtes copiés dans presse-papiers',
    copyFailed: 'Échec copie, copiez manuellement',
    unknown: 'Erreur inconnue'
  },

  info: {
    description: 'Un proxy HTTP est un serveur intermédiaire situé entre un client et un serveur, qui peut traiter les requêtes HTTP à diverses fins. Les proxies peuvent être configurés par des fournisseurs internet, organisations, entreprises ou particuliers.'
  },

  xff: {
    title: 'Qu\'est-ce que X-Forwarded-For ?',
    description: 'X-Forwarded-For (XFF) est un champ d\'en-tête HTTP utilisé pour identifier l\'adresse IP originale d\'un client se connectant à un serveur web via un proxy ou un répartiteur de charge. Quand une requête passe par un proxy, le serveur ne voit généralement que l\'IP du proxy, et l\'en-tête XFF permet de retrouver l\'IP originale du client.',
    notFound: 'Aucun en-tête X-Forwarded-For trouvé, ce qui suggère que la requête n\'a pas traversé de proxy ou que le proxy n\'a pas ajouté cet en-tête.',
    format: {
      title: 'Format de l\'en-tête XFF',
      description: 'Le format standard de l\'en-tête XFF est une liste d\'adresses IP séparées par des virgules, où l\'IP la plus à gauche est le client original et les suivantes sont les proxies traversés :'
    },
    related: {
      title: 'Autres en-têtes proxy liés',
      forwardedProto: 'Identifie le protocole (HTTP/HTTPS) utilisé par le client pour se connecter au proxy',
      forwardedHost: 'Identifie le nom d\'hôte original demandé par le client',
      via: 'Indique les serveurs proxy traversés par la requête et la réponse',
      forwarded: 'En-tête standard plus récent contenant les infos client et tous les proxies'
    },
    importance: {
      title: 'Pourquoi les infos proxy sont importantes',
      security: 'Sécurité et contrôle d\'accès - Identifier correctement l\'IP client est crucial pour prévenir les abus et appliquer des contrôles d\'accès par IP',
      logging: 'Journalisation - Pour l\'audit et le dépannage, enregistrer l\'IP réelle du client est plus utile que l\'IP du proxy',
      geolocation: 'Services de géolocalisation - Les services basés sur IP ont besoin de l\'IP réelle pour fournir des résultats précis',
      content: 'Personnalisation de contenu - Certains services adaptent leur contenu selon la localisation de l\'utilisateur'
    },
    security: {
      title: 'Considérations de sécurité',
      description: 'Notez que l\'en-tête X-Forwarded-For peut être falsifié par le client. Dans les environnements à haute sécurité, ne faites confiance qu\'aux infos XFF ajoutées par des proxies connus, ou utilisez d\'autres méthodes pour valider l\'IP client.'
    }
  },

  privacy: {
    title: 'Note de confidentialité',
    description: 'Pendant la détection, votre adresse IP et en-têtes HTTP seront envoyés à des services API tiers pour analyse. Ces services peuvent collecter et stocker ces informations pour fournir leur service.',
    suggestion: 'Si la confidentialité vous préoccupe, choisissez un autre fournisseur API ou envisagez d\'utiliser un VPN.'
  }
};