export default {
  name: 'Outil de conversion CSV en JSON',
  description: 'Convertir des données CSV au format JSON avec des options personnalisables',

  options: {
    delimiter: 'Séparateur',
    quote: 'Caractère de citation',
    header: 'Première ligne comme en-tête',
    dynamicTyping: 'Typage dynamique',
    dynamicTypingDescription: 'Convertir les chaînes numériques en nombres, "vrai/faux" en booléens, etc.',
    skipEmptyLines: 'Ignorer les lignes vides',
    comments: 'Caractère de commentaire',
    outputFormat: 'Format de sortie',
    indentation: 'Indentation',
    encoding: 'Encodage',
    newline: 'Saut de ligne',
    title: 'Options de conversion'
  },

  delimiters: {
    comma: 'Virgule (,)',
    semicolon: 'Point-virgule (;)',
    tab: 'Tabulation (\\t)',
    pipe: 'Barre verticale (|)',
    custom: 'Personnalisé'
  },

  formats: {
    array: 'Tableau d\'objets',
    arrayOfArrays: 'Tableau de tableaux',
    keyed: 'Objet clé-valeur',
    nested: 'Objet imbriqué'
  },

  preview: {
    input: 'Entrée...',
    output: 'Sortie...',
    rawCsv: 'CSV brut',
    parsedCsv: 'CSV analysé',
    jsonOutput: 'Sortie JSON',
    firstRows: 'Premières {count} lignes',
    showAll: 'Afficher tout'
  },

  actions: {
    convert: 'Convertir',
    copy: 'Copier JSON',
    download: 'Télécharger JSON',
    clear: 'Effacer',
    uploadCsv: 'Importer CSV',
    swap: 'Échanger entrée/sortie',
    loadExample: 'Charger un exemple',
    clearInput: 'Effacer l\'entrée',
    formatOutput: 'Formatter la sortie',
    copyResult: 'Copier le résultat',
    downloadResult: 'Télécharger le résultat',
    paste: 'Coller',
    showOptions: 'Afficher options',
    hideOptions: 'Masquer options',
    uploadJson: 'Importer JSON'
  },

  results: {
    rowsProcessed: '{count} lignes traitées',
    conversionComplete: 'Conversion terminée',
    copied: 'Copié dans le presse-papier',
    downloaded: 'Téléchargé',
    error: 'Erreur'
  },

  errors: {
    noData: 'Aucune donnée CSV à convertir',
    invalidCsv: 'Format CSV invalide',
    parsingFailed: 'Échec de l\'analyse : {error}',
    missingHeader: 'Ligne d\'en-tête manquante',
    invalidJson: 'Format JSON invalide',
    formatFailed: 'Échec du formatage : {error}',
    copyFailed: 'Échec de la copie, veuillez copier manuellement',
    downloadFailed: 'Échec du téléchargement',
    pasteError: 'Impossible de coller depuis le presse-papier',
    conversionFailed: 'Échec de la conversion'
  },

  conversion: {
    title: 'Direction de conversion',
    csvToJson: {
      title: 'CSV vers JSON',
      delimiterLabel: 'Séparateur',
      headerLabel: 'Première ligne comme en-tête',
      dynamicTypingLabel: 'Inférence automatique des types',
      skipEmptyLinesLabel: 'Ignorer les lignes vides',
      convertButton: 'Convertir CSV en JSON'
    },
    jsonToCsv: {
      title: 'JSON vers CSV',
      delimiterLabel: 'Séparateur',
      headerLabel: 'Inclure la ligne d\'en-tête',
      quotesLabel: 'Ajouter des guillemets à tous les champs',
      nestedModeLabel: 'Mode de traitement des objets imbriqués',
      flat: 'Aplatir',
      stringify: 'Convertir en chaîne',
      ignore: 'Ignorer',
      convertButton: 'Convertir JSON en CSV'
    }
  },

  stats: {
    processed: 'Lignes de données traitées',
    fields: 'Nombre de champs/colonnes',
    inputSize: 'Taille avant conversion',
    outputSize: 'Taille après conversion',
    title: 'Statistiques'
  },

  messages: {
    copied: 'Copié dans le presse-papier',
    download: 'Téléchargé',
    error: 'Erreur'
  },

  formatBytes: {
    bytes: 'octets',
    kb: 'Ko',
    mb: 'Mo',
    gb: 'Go',
    tb: 'To'
  }
};