export default {
  name: 'Convertisseur cURL',
  description: 'Convertir des commandes cURL en extraits de code pour différents langages de programmation',
  title: 'cURL vers code',
  subtitle: 'Transformez des commandes cURL en code pour plusieurs langages, facilitant l\'intégration de requêtes HTTP dans vos projets',

  input: {
    title: 'Commande cURL',
    placeholder: 'Entrez une commande cURL ici',
    parse: 'Analyser cURL',
    clear: 'Effacer',
    examples: 'Exemples :',
    options: 'Options d\'analyse',
    validateCommand: 'Valider la commande',
    formatCurl: 'Formatter cURL'
  },

  options: {
    detectAuth: 'Détection automatique d\'authentification',
    resolveVariables: 'Résoudre les variables d\'environnement',
    processContinuations: 'Traiter les continuations de ligne (\\)',
    followRedirects: 'Suivre les redirections',
    preserveHeaders: 'Conserver tous les en-têtes',
    ignoreErrors: 'Ignorer les erreurs d\'analyse',
    noDuplicateHeaders: 'Pas d\'en-têtes dupliqués (garder le dernier)'
  },

  output: {
    title: 'Code généré',
    language: 'Langage cible',
    copy: 'Copier',
    copyTooltip: 'Copier dans le presse-papiers',
    download: 'Télécharger',
    beautify: 'Beautifier',
    codeTitle: 'Code {language}',
    errorTitle: 'Erreur de conversion',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Navigateur (fetch)',
      curl: 'cURL (formaté)',
      json: 'JSON (objet requête)',
      har: 'HAR (archive HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },

  request: {
    title: 'Détails de la requête',
    method: 'Méthode',
    url: 'URL',
    headers: 'En-têtes',
    body: 'Corps',
    auth: 'Authentification',
    options: 'Options',
    cookie: 'Cookie',
    queryParams: 'Paramètres',
    formData: 'Données de formulaire',
    visualize: 'Visualiser'
  },

  visualization: {
    title: 'Visualisation',
    request: 'Requête',
    response: 'Réponse',
    headers: 'En-têtes',
    body: 'Corps',
    timing: 'Chronologie',
    raw: 'Brut'
  },

  analysis: {
    title: 'Analyse',
    insecureWarning: 'Attention : cette commande utilise --insecure/-k (vérification SSL désactivée)',
    verboseIgnored: 'Note : le mode verbeux (-v) est ignoré',
    unsupportedOptions: 'Options non supportées',
    warnings: 'Avertissements',
    info: 'Informations'
  },

  messages: {
    parsing: 'Analyse de la commande cURL...',
    parseFailed: 'Échec de l\'analyse : {error}',
    parseSuccess: 'Commande analysée avec succès',
    copied: 'Code copié dans le presse-papiers',
    downloaded: 'Code téléchargé',
    invalidCurl: 'Commande cURL invalide',
    emptyCurl: 'Veuillez entrer une commande cURL',
    validCurl: 'Commande cURL valide',
    unknownOption: 'Option inconnue : {option}',
    unsupportedMethod: 'Attention : la méthode HTTP {method} n\'est pas supportée dans tous les langages',
    curlRequired: 'La commande doit commencer par "curl "',
    copyFailed: 'Échec de la copie, veuillez copier manuellement'
  },

  examples: {
    title: 'Exemples de commandes cURL',
    basic: 'Requête GET simple',
    headers: 'En-têtes personnalisés',
    post: 'POST avec JSON',
    formData: 'Soumission de formulaire',
    auth: 'Authentification basique',
    complex: 'Exemple complexe',
    exampleCommands: {
      getRequest: 'Requête GET',
      postJson: 'POST JSON',
      postForm: 'POST formulaire',
      withAuth: 'Avec authentification',
      uploadFile: 'Téléversement de fichier'
    }
  },

  actions: {
    convert: 'Convertir',
    converting: 'Conversion en cours...'
  }
};