export default {
  name: 'Markdown vers HTML',
  description: 'Convertir du texte Markdown en HTML avec des options personnalisables',

  input: {
    title: 'Saisie Markdown',
    placeholder: 'Saisissez ou collez votre texte Markdown ici...',
    loadSample: 'Charger un exemple',
    clearInput: 'Effacer',
    uploadFile: 'Importer un fichier Markdown',
    paste: 'Coller depuis le presse-papiers',
    charCount: 'Nombre de caractères',
    lineCount: 'Nombre de lignes'
  },

  output: {
    title: 'Sortie HTML',
    copied: 'HTML copié dans le presse-papiers',
    download: 'Télécharger HTML',
    copyOutput: 'Copier HTML',
    clearOutput: 'Effacer la sortie',
    previewTab: 'Aperçu',
    htmlTab: 'Code HTML',
    previewMode: 'Mode aperçu',
    sourceMode: 'Code source HTML'
  },

  options: {
    title: 'Options de conversion',
    headerIds: 'IDs automatiques pour titres',
    gfm: 'Markdown style GitHub',
    tables: 'Tableaux',
    breaks: 'Sauts de ligne',
    smartLists: 'Listes intelligentes',
    smartypants: 'Ponctuation intelligente',
    xhtml: 'XHTML',
    highlight: 'Coloration syntaxique',
    sanitize: 'Nettoyer HTML',
    footnotes: 'Notes de bas de page',
    taskLists: 'Listes de tâches',
    emoji: 'Support des emojis',
    includeStyle: 'Inclure CSS par défaut',
    realtimePreview: 'Aperçu en temps réel',
    scrollSync: 'Synchronisation du défilement',
    htmlOptions: 'Options HTML'
  },

  styles: {
    title: 'Options de style',
    theme: 'Thème',
    codeTheme: 'Thème de code',
    customCSS: 'CSS personnalisé',
    fontSize: 'Taille de police',
    lineHeight: 'Hauteur de ligne',
    enableCustom: 'Activer styles personnalisés'
  },

  themes: {
    default: 'Par défaut',
    github: 'GitHub',
    bootstrap: 'Bootstrap',
    bulma: 'Bulma',
    medium: 'Medium',
    solarized: 'Solarized',
    dark: 'Mode sombre',
    custom: 'Personnalisé'
  },

  codeThemes: {
    default: 'Par défaut',
    github: 'GitHub',
    vscode: 'VS Code',
    atom: 'Atom',
    dracula: 'Dracula',
    monokai: 'Monokai',
    solarized: 'Solarized'
  },

  actions: {
    convert: 'Convertir en HTML',
    clearAll: 'Tout effacer',
    copyHtml: 'Copier HTML',
    saveAsHtml: 'Enregistrer en HTML',
    generateToc: 'Générer sommaire'
  },

  messages: {
    conversionSuccess: 'Conversion Markdown réussie',
    conversionFailed: 'Échec de conversion Markdown : {error}',
    emptyInput: 'Veuillez saisir du Markdown à convertir',
    copied: 'HTML copié dans le presse-papiers',
    tocGenerated: 'Sommaire généré'
  },

  alerts: {
    copied: 'Copié dans le presse-papiers',
    copyFailed: 'Échec de la copie',
    pasteFailed: 'Échec du collage',
    confirmClear: 'Confirmez-vous vouloir effacer le contenu ?'
  },

  status: {
    lastConversion: 'Dernière conversion'
  },

  samples: {
    basic: 'Exemple basique',
    extended: 'Exemple étendu',
    article: 'Exemple d\'article'
  },

  download: {
    title: 'Export Markdown vers HTML'
  }
};