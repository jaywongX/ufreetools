export default {
  name: 'Générateur de configuration CORS',
  description: 'Crée rapidement des configurations CORS pour divers environnements serveur',

  options: {
    title: 'Options CORS',
    allowedOrigins: {
      title: 'Origines autorisées (Access-Control-Allow-Origin)',
      allowAll: 'Toutes origines (*) <span class="text-yellow-500 text-xs ml-1">(non sécurisé, sans credentials)</span>',
      specific: 'Origines spécifiques (recommandé)',
      addOrigin: 'Ajouter origine',
      placeholder: 'Ex: https://exemple.com',
      wildcard: 'Sous-domaines (wildcard)',
      null: 'Autoriser null',
      remove: 'Supprimer'
    },
    allowedMethods: {
      title: 'Méthodes HTTP autorisées (Access-Control-Allow-Methods)',
      selectMethods: 'Sélectionner méthodes',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'En-têtes autorisés (Access-Control-Allow-Headers)',
      all: 'Tous en-têtes (*)',
      specific: 'En-têtes spécifiques',
      addHeader: 'Ajouter en-tête',
      headerPlaceholder: 'Nom de l\'en-tête',
      common: 'En-têtes courants',
      custom: 'Personnalisés',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Supprimer'
    },
    exposedHeaders: {
      title: 'En-têtes exposés (Access-Control-Expose-Headers)',
      description: 'En-têtes de réponse accessibles au navigateur',
      addHeader: 'Ajouter en-tête',
      headerPlaceholder: 'Nom de l\'en-tête'
    },
    credentials: {
      title: 'Credentials (Access-Control-Allow-Credentials)',
      description: 'Autoriser cookies et en-têtes d\'authentification',
      allow: 'Autoriser credentials',
      warning: 'Nécessite des origines spécifiques, incompatible avec *'
    },
    maxAge: {
      title: 'Cache pré-vol (Access-Control-Max-Age)',
      description: 'Durée de cache des résultats pré-vol (secondes)',
      seconds: 'secondes',
      default: 'Défaut :',
      recommended: 'Recommandé : 3600 (1h)'
    },
    serverType: {
      title: 'Type de serveur',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'En-têtes HTTP'
    }
  },

  output: {
    title: 'En-têtes générés',
    instructions: 'Ajouter ces en-têtes aux réponses serveur :',
    copy: 'Copier en-têtes',
    test: 'Tester en-têtes',
    downloadConfig: 'Télécharger configuration'
  },

  configs: {
    title: 'Exemples de configuration',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },

  testing: {
    title: 'Test CORS',
    description: 'Vérifier le bon fonctionnement de votre configuration',
    originUrl: 'URL origine',
    targetUrl: 'URL cible',
    method: 'Méthode HTTP',
    credentials: 'Inclure credentials',
    headers: 'En-têtes personnalisés',
    addHeader: 'Ajouter en-tête',
    testButton: 'Tester CORS',
    results: 'Résultats',
    success: 'Test CORS réussi ✓',
    failure: 'Test CORS échoué ✗✗',
    details: 'Détails réponse',
    response: 'Réponse',
    logs: 'Logs CORS',
    errorDetails: 'Détails erreur'
  },

  presets: {
    title: 'Préréglages',
    api: 'Serveur API',
    assets: 'Ressources statiques (CDN)',
    auth: 'Service d\'authentification',
    publicAccess: 'Accès public',
    restrictive: 'Restrictif',
    load: 'Charger préréglage',
    save: 'Sauvegarder préréglage'
  },

  tips: {
    title: 'Conseils CORS',
    tip1: 'CORS est un mécanisme basé sur les en-têtes HTTP permettant le partage de ressources entre origines différentes.',
    tip2: 'CORS est une fonctionnalité de sécurité des navigateurs modernes contre les attaques CSRF.',
    usage: {
      title: 'Cas d\'usage CORS :',
      tip1: 'Accès à des APIs depuis différents domaines',
      tip2: 'Requêtes Ajax/Fetch cross-origin',
      tip3: 'Accès à des polices/CSS cross-origin',
      tip4: 'Communication entre microservices',
    },
    safe: 'Conseil sécurité : Éviter le wildcard (*) et spécifier des domaines de confiance.'
  },

  messages: {
    copied: 'En-têtes copiés',
    configDownloaded: 'Configuration téléchargée',
    testStarted: 'Test démarré',
    testSucceeded: 'Requête CORS réussie',
    testFailed: 'Échec requête CORS : {error}',
    presetSaved: 'Préréglage sauvegardé',
    presetLoaded: 'Préréglage chargé'
  },

  config: {
    title: 'Configuration',
    empty: 'Configurer les options pour générer',
    copied: 'Configuration copiée !',
    copy: 'Copier'
  },

  comments: {
    expressMiddleware: "// Middleware Express",
    applyGlobalCors: "// Appliquer middleware CORS",
    applySpecificRoute: "// Ou appliquer à une route spécifique",
    applyRequest: "// Traiter requête",
    apacheAllowedOrigins: "# Origines autorisées",
    apacheAllowedMethods: "# Méthodes autorisées",
    apacheAllowedHeaders: "# En-têtes autorisés",
    apacheAllowedCredentials: "# Credentials autorisés",
    preflightCacheDuration: "# Durée cache pré-vol",
    apacheExposeHeaders: '# En-têtes exposés',
    handlePreflightRequest: "# Gestion requête pré-vol",
    nginxConfiguration: "# Configuration CORS\n# Ajouter au bloc server/location",
    nginxAllowedOrigins: "# Origines autorisées",
    nginxAllowedMethods: "# Méthodes autorisées",
    nginxAllowedHeaders: "# En-têtes autorisés",
    nginxAllowedCredentials: "# Credentials autorisés",
    nginxPreflightCacheDuration: "# Durée cache pré-vol",
    nginxExposeHeaders: '# En-têtes exposés',
    nginxHandlePreflight: "# Gestion requête pré-vol",
    httpHeadersConfiguration: "# Configuration en-têtes HTTP",
    httpAllowedOrigins: "# Origines autorisées",
    httpAllowedMethods: "# Méthodes autorisées",
    httpAllowedHeaders: "# En-têtes autorisés",
    httpAllowedCredentials: "# Credentials autorisés",
    httpPreflightCacheDuration: "# Durée cache pré-vol",
    httpExposeHeaders: '# En-têtes exposés',
  }
};