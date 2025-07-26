export default {
  name: 'Outil de formatage HTML',
  description: 'Formate et embellit le code HTML pour améliorer la lisibilité',
  formatMode: 'Mode de formatage',
  beautify: 'Embellir',
  minify: 'Minifier',
  formatOptions: 'Options de formatage',
  removeComments: 'Supprimer les commentaires',
  preserveComments: 'Conserver les commentaires',
  showLineNumbers: 'Afficher les numéros de ligne',
  helpText: "L'outil d'embellissement/minification HTML aide les développeurs à organiser ou optimiser rapidement le code HTML, améliorant la lisibilité ou réduisant la taille des fichiers.",
  input: 'Entrée HTML',
  inputPlaceholder: 'Collez ou saisissez du code HTML ici...',
  examples: 'Exemples',

  exampleNames: {
    simple: 'HTML simple',
    complex: 'Page HTML complexe'
  },

  beautifiedResult: 'Résultat embelli',
  minifiedResult: 'Résultat minifié',

  stats: {
    chars: 'Caractères',
    lines: 'Lignes',
    reduction: 'Réduction de {chars} caractères ({percent}%)'
  },

  indentOptions: {
    spaces: '{count} espaces',
    tab: 'Indentation par tabulation'
  },

  errorMessages: {
    emptyInput: 'Veuillez entrer le code HTML à traiter',
    processingFailed: 'Échec du traitement HTML : {message}'
  },

  options: {
    indentSize: 'Taille de l\'indentation',
    wrapLength: 'Longueur de ligne',
    indentInnerHtml: 'Indenter le HTML interne',
    preserveNewlines: 'Conserver les sauts de ligne',
    maxPreserveNewlines: 'Nombre maximum de sauts de ligne consécutifs',
    wrapAttributes: 'Retour à la ligne des attributs',
    sortAttributes: 'Trier les attributs',
    sortClassNames: 'Trier les noms de classe'
  },

  actions: {
    format: 'Formatter HTML',
    minify: 'Minifier',
    clear: 'Effacer',
    copy: 'Copier',
    download: 'Télécharger',
    upload: 'Téléverser un fichier'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    formatSuccess: 'Formatage HTML réussi',
    formatError: 'Erreur lors du formatage HTML',
    invalidHtml: 'Syntaxe HTML invalide'
  }
};