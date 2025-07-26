export default {
  name: 'Éditeur d\'en-têtes HTTP',
  description: 'Créez, éditez et testez des en-têtes de requête HTTP',

  editor: {
    title: 'Éditeur d\'en-têtes',
    headers: 'En-têtes',
    add: 'Ajouter un en-tête',
    bulk: 'Édition en masse',
    import: 'Importer des en-têtes',
    export: 'Exporter des en-têtes',
    clear: 'Tout effacer',
    importError: 'Erreur d\'importation'
  },

  header: {
    name: 'Nom',
    value: 'Valeur',
    description: 'Description',
    namePlaceholder: 'Saisir le nom de l\'en-tête',
    valuePlaceholder: 'Saisir la valeur de l\'en-tête',
    actions: 'Actions',
    enabled: 'Activé',
    duplicate: 'Dupliquer',
    delete: 'Supprimer',
    noHeaders: 'Aucun en-tête, cliquez sur "Ajouter" ou chargez un modèle',
    bulkPlaceholder: 'Collez des en-têtes (format : \'Nom: Valeur\' un par ligne) ou du texte brut'
  },

  presets: {
    title: 'Préréglages',
    save: 'Enregistrer la configuration',
    load: 'Charger un préréglage',
    delete: 'Supprimer un préréglage',
    presetName: 'Nom du préréglage',
    namePlaceholder: 'Saisir un nom de préréglage',
    confirmDelete: 'Confirmer la suppression ?',
    common: 'En-têtes courants',
    custom: 'Préréglages personnalisés'
  },

  common: {
    userAgent: 'User-Agent',
    contentType: 'Content-Type',
    authorization: 'Authorization',
    acceptLanguage: 'Accept-Language',
    acceptEncoding: 'Accept-Encoding',
    cacheControl: 'Cache-Control',
    cookie: 'Cookie',
    referer: 'Referer',
    origin: 'Origin'
  },

  test: {
    title: 'Tester les en-têtes',
    url: 'URL',
    urlPlaceholder: 'Saisir une URL pour tester',
    method: 'Méthode',
    send: 'Envoyer la requête',
    response: 'Réponse'
  },

  response: {
    title: 'Réponse',
    status: 'Statut',
    headers: 'En-têtes de réponse',
    body: 'Corps',
    time: 'Temps',
    size: 'Taille',
    loading: 'Chargement...',
    noResponse: 'Ajoutez des en-têtes pour voir un aperçu',
    headerCount: 'en-têtes'
  },

  options: {
    title: 'Options',
    followRedirects: 'Suivre les redirections',
    timeout: 'Délai d\'expiration (secondes)',
    validateSSL: 'Valider les certificats SSL',
    sendCredentials: 'Envoyer les identifiants'
  },

  formats: {
    title: 'Formats d\'export',
    raw: 'Texte brut',
    json: 'JSON',
    curl: 'Commande cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
    fetch: 'Fetch API',
    axios: 'Axios'
  },

  guides: {
    title: 'Guide des en-têtes',
    description: 'Comprendre les en-têtes HTTP courants et leur utilisation',
    securityHeaders: 'En-têtes de sécurité',
    cachingHeaders: 'En-têtes de cache',
    corsHeaders: 'En-têtes CORS',
    authenticationHeaders: 'En-têtes d\'authentification',
    commonValues: 'Valeurs courantes'
  },

  actions: {
    copy: 'Copier',
    format: 'Formatter',
    validate: 'Valider',
    clear: 'Effacer'
  },

  messages: {
    headerAdded: 'En-tête ajouté',
    headerDeleted: 'En-tête supprimé',
    headersCleared: 'Tous les en-têtes ont été effacés',
    presetSaved: 'Préréglage enregistré',
    presetLoaded: 'Préréglage chargé',
    presetDeleted: 'Préréglage supprimé',
    requestSent: 'Requête envoyée',
    requestFailed: 'Échec de la requête : {error}',
    copied: 'Copié dans le presse-papiers',
    importSuccess: 'Importation réussie',
    exportSuccess: 'Exportation réussie',
    invalidUrl: 'URL invalide',
    pleaseEnterHeader: 'Saisissez du texte d\'en-tête',
    invalidHeader: 'Aucun en-tête valide trouvé (format : \'Nom: Valeur\')',
    invalidHeaderName: 'Nom d\'en-tête invalide : {error}',
    copyFailed: 'Échec de la copie, veuillez copier manuellement'
  }
};