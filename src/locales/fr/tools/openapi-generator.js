export default {
  name: 'Générateur OpenAPI → Client TypeScript',
  description: 'Génère automatiquement des interfaces TypeScript et du code client à partir de spécifications OpenAPI, améliorant l\'efficacité de la collaboration frontend/backend',

  options: {
    exportSchemas: 'Exporter toutes les définitions de modèles',
    generateClient: 'Générer le code client API',
    addComments: 'Ajouter des commentaires et documentation',
    useEnums: 'Utiliser des énumérations TypeScript (au lieu de types union de chaînes)',
    indentSize: 'Taille d\'indentation',
    operationType: 'Type d\'opération',
    displayOptions: 'Options d\'affichage'
  },

  inputMode: {
    toggleToFile: 'Basculer vers le téléchargement de fichier',
    toggleToText: 'Basculer vers la saisie de texte',
    loadExample: 'Charger un exemple'
  },

  fileUpload: {
    dragAndDrop: 'Glissez-déposez un fichier OpenAPI ici, ou cliquez pour télécharger',
    supportedFormats: 'Formats de fichiers supportés : .json, .yaml et .yml',
    fileSelected: 'Fichier sélectionné : {0} ({1})'
  },

  textInput: {
    placeholder: 'Collez la spécification OpenAPI (JSON ou YAML) ici...'
  },

  actions: {
    generate: 'Générer le code TypeScript',
    processing: 'Traitement en cours...',
    clear: 'Effacer',
    copy: 'Copier le code',
    download: 'Télécharger le code'
  },

  results: {
    generatedCode: 'Code TypeScript généré',
    copied: 'Copié dans le presse-papiers',
    error: 'Erreur',
    characterCount: 'Nombre de caractères : {0}'
  },

  errors: {
    parseError: 'Impossible d\'analyser la spécification OpenAPI. Assurez-vous de fournir un format JSON ou YAML valide.',
    invalidSpec: 'Spécification OpenAPI invalide. Aucun identifiant de version openapi ou swagger trouvé.',
    processingError: 'Erreur lors du traitement de la spécification OpenAPI : {0}'
  }
};