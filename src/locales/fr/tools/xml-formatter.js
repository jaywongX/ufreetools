export default {
  name: 'Formateur XML',
  description: 'Formate, embellit et valide des documents XML',

  options: {
    indentSize: 'Taille d\'indentation',
    useTabs: 'Utiliser des tabulations',
    collapseContent: 'Réduire le contenu',
    maxLineWidth: 'Largeur maximale de ligne',
    indentAttributes: 'Indenter les attributs',
    sortAttributes: 'Trier les attributs',
    newlineAfterPI: 'Nouvelle ligne après instruction de traitement',
    operationType: 'Type d\'opération',
    indentSettings: 'Paramètres d\'indentation',
    displayOptions: 'Options d\'affichage',
    showLineNumbers: 'Afficher les numéros de ligne'
  },

  indentOptions: {
    twoSpaces: '2 espaces',
    fourSpaces: '4 espaces',
    tabIndent: 'Tabulation'
  },

  actions: {
    format: 'Formater XML',
    minify: 'Minifier XML',
    validate: 'Valider',
    toJSON: 'Convertir en JSON',
    copy: 'Copier',
    clear: 'Effacer',
    download: 'Télécharger',
    upload: 'Importer XML',
    beautify: 'Embellir',
    copyCode: 'Copier le code'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    formatSuccess: 'Formatage XML réussi',
    formatError: 'Erreur lors du formatage XML',
    validXml: 'XML valide',
    invalidXml: 'XML invalide : {0}',
    lineCol: 'Ligne {line}, colonne {col}',
    minifySuccess: 'Minification XML réussie',
    conversionSuccess: 'Conversion réussie',
    conversionError: 'Erreur lors de la conversion',
    pleaseEnterXml: 'Veuillez saisir du contenu XML',
    processingError: 'Erreur de traitement XML : {0}',
    formatResult: 'Résultat du formatage',
    characterCount: 'Nombre de caractères : {0}',
    lineCount: 'Nombre de lignes : {0}',
    characterAndLineCount: 'Caractères : {0} | Lignes : {1}'
  },

  input: {
    xmlInput: 'Entrée XML',
    placeholder: 'Collez ou saisissez du XML ici...'
  },

  examples: {
    title: 'Exemples XML',
    description: 'Cliquez pour charger un exemple :',
    simpleXml: 'XML simple',
    bookstore: 'Catalogue de librairie',
    complexXml: 'XML complexe'
  }
};