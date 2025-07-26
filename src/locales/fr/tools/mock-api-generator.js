export default {
  name: 'Générateur de Mock API',
  description: 'Génère automatiquement des Mock API à partir de spécifications OpenAPI',

  options: {
    version: 'Version OpenAPI',
    format: 'Format de sortie',
    includeExamples: 'Inclure exemples de réponse',
    responseDynamism: 'Dynamisme des réponses',
    responseType: 'Type de réponse',
    arrayLength: 'Longueur des tableaux',
    responseFormat: 'Format de réponse'
  },

  formats: {
    json: 'JSON Server',
    express: 'Express.js',
    mockjs: 'Mock.js',
    msw: 'Mock Service Worker'
  },

  actions: {
    generate: 'Générer Mock',
    preview: 'Prévisualiser API',
    clear: 'Effacer',
    copy: 'Copier code',
    download: 'Télécharger',
    uploadSpec: 'Importer spécification OpenAPI',
    uploadJava: 'Importer fichier classe Java',
    generateJson: 'Générer JSON',
    generateBuilder: 'Générer Builder',
    format: 'Formatter'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    generationSuccess: 'Mock API généré avec succès',
    generationError: 'Erreur lors de la génération du Mock API',
    specRequired: 'Veuillez fournir une spécification OpenAPI',
    fileUploaded: 'Importé',
    parseError: 'Échec de l\'analyse de la classe Java, vérifiez le format du fichier'
  },

  help: {
    uploadHint: 'Supporte l\'import de fichiers .java, analyse automatique de la structure de classe pour générer la configuration Mock. Les propriétés d\'objets imbriqués multiples ne sont pas encore supportées'
  },

  fields: {
    title: 'Définition des champs',
    addField: 'Ajouter champ',
    addChildField: 'Ajouter sous-champ',
    fieldName: 'Nom du champ'
  },

  fieldTypes: {
    string: 'Chaîne',
    number: 'Nombre',
    boolean: 'Booléen',
    date: 'Date',
    name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    address: 'Adresse',
    id: 'ID',
    image: 'URL image',
    array: 'Tableau',
    object: 'Objet'
  },

  array: {
    itemType: 'Type d\'élément',
    arrayFields: 'Champs du tableau'
  },

  object: {
    childFields: 'Sous-champs'
  },

  responseTypes: {
    object: 'Objet unique',
    array: 'Tableau d\'objets',
    custom: 'Structure personnalisée'
  },

  responseFormats: {
    dataOnly: 'Données uniquement',
    standard: 'Réponse REST standard (code, data, message)'
  },

  placeholder: {
    output: '// Les données Mock générées apparaîtront ici'
  }
};