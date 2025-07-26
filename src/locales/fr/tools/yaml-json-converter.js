export default {
  name: 'Convertisseur YAML-JSON',
  description: 'Convertir entre les formats YAML et JSON avec des options personnalisables',

  input: {
    title: 'Entrée',
    yamlPlaceholder: 'Entrez du YAML ici...',
    jsonPlaceholder: 'Entrez du JSON ici...',
    loadSample: 'Charger un exemple',
    clearInput: 'Effacer l\'entrée',
    uploadFile: 'Téléverser un fichier'
  },

  output: {
    title: 'Sortie',
    copyOutput: 'Copier la sortie',
    downloadOutput: 'Télécharger la sortie',
    clearOutput: 'Effacer la sortie'
  },

  options: {
    conversionMode: 'Mode de conversion',
    jsonToYaml: 'JSON vers YAML',
    yamlToJson: 'YAML vers JSON',
    formatOutput: 'Formater la sortie',
    indentSize: 'Taille de l\'indentation',
    quoteKeys: 'Guillemeter les clés',
    sortKeys: 'Trier les clés alphabétiquement',
    flowStyle: 'Style de flux YAML',
    jsonCompatible: 'Compatible JSON',
    singleQuotes: 'Utiliser des guillemets simples',
    includeSchema: 'Inclure le schéma',
    preserveKeyOrder: 'Préserver l\'ordre des clés'
  },

  flowStyles: {
    block: 'Style bloc',
    flow: 'Style flux',
    auto: 'Automatique'
  },

  validation: {
    validate: 'Valider avant conversion',
    validInput: '{format} valide',
    invalidInput: '{format} invalide : {error}',
    checkSyntax: 'Vérifier la syntaxe'
  },

  actions: {
    convert: 'Convertir',
    swap: 'Échanger les formats',
    beautify: 'Beautifier',
    minify: 'Minifier'
  },

  messages: {
    conversionSuccess: 'Conversion réussie',
    conversionFailed: 'Échec de la conversion : {error}',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    emptyInput: 'Veuillez entrer du contenu à convertir',
    invalidYaml: 'Syntaxe YAML invalide',
    invalidJson: 'Syntaxe JSON invalide'
  }
};