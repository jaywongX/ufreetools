export default {
  name: 'Optimiseur SVG',
  description: 'Optimise et nettoie les fichiers SVG pour améliorer les performances et réduire la taille des fichiers',

  upload: {
    title: 'Téléverser SVG',
    dropzone: 'Glissez-déposez un fichier SVG ici ou cliquez pour téléverser',
    or: 'ou',
    pasteCode: 'Coller le code SVG',
    maxSize: 'Taille maximale : 5 Mo',
    onlySvg: 'Seuls les fichiers SVG sont acceptés',
    selected: 'Sélectionné',
    changeFile: 'Changer de fichier'
  },

  input: {
    title: 'Entrée SVG',
    pasteHere: 'Collez le code SVG ici...',
    loadExample: 'Charger un exemple',
    clear: 'Effacer',
    validate: 'Valider le SVG'
  },

  output: {
    title: 'Résultat optimisé',
    copyToClipboard: 'Copier dans le presse-papiers',
    download: 'Télécharger SVG',
    beforeSize: 'Taille originale',
    afterSize: 'Taille optimisée',
    reduction: 'Réduction',
    reductionBy: 'Réduit de',
    svgCode: 'Code SVG'
  },

  options: {
    title: 'Options d\'optimisation',
    preset: 'Préréglage',
    presets: {
      default: 'Par défaut',
      light: 'Léger',
      aggressive: 'Agressif',
      custom: 'Personnalisé'
    },
    removeComments: 'Supprimer les commentaires',
    removeCommentsDesc: 'Supprime les commentaires et sections CDATA',
    removeHiddenElements: 'Supprimer les éléments cachés',
    removeEmptyContainers: 'Supprimer les conteneurs vides',
    removeUnusedDefs: 'Supprimer les définitions inutilisées',
    removeViewBox: 'Supprimer viewBox',
    keepViewBox: 'Conserver viewBox',
    keepViewBoxDesc: 'Conserve l\'attribut viewBox pour maintenir l\'évolutivité du SVG',
    cleanupIDs: 'Nettoyer les ID',
    cleanupIDsDesc: 'Supprime ou raccourcit les ID non référencés',
    convertColors: 'Convertir les couleurs en hexadécimal',
    removeMetadata: 'Supprimer les métadonnées',
    removeMetadataDesc: 'Supprime les éléments &lt;metadata&gt;',
    removeDoctype: 'Supprimer le type de document',
    removeXMLProcInst: 'Supprimer les instructions XML',
    removeEditorsNS: 'Supprimer les espaces de noms des éditeurs',
    collapseGroups: 'Fusionner les groupes',
    collapseGroupsDesc: 'Fusionne les éléments de groupe sans attributs spéciaux',
    convertPathData: 'Optimiser les données de chemin',
    convertPathDataDesc: 'Convertit les données de chemin en coordonnées relatives, réduit les décimales, etc.',
    convertTransforms: 'Optimiser les transformations',
    convertShapeToPath: 'Convertir les formes en chemins',
    convertShapeToPathDesc: 'Convertit les formes de base en éléments &lt;path&gt;',
    removeUselessStrokeAndFill: 'Supprimer les traits et remplissages inutiles',
    moveElemsAttrsToGroup: 'Déplacer les attributs vers le groupe',
    mergePaths: 'Fusionner les chemins',
    minifyStyles: 'Minifier les styles',
    inlineStyles: 'Styles en ligne',
    inlineStylesDesc: 'Convertit les styles des éléments &lt;style&gt; en styles en ligne',
    cleanupNumericValues: 'Arrondir les valeurs numériques',
    precision: 'Précision numérique',
    decimalPlaces: 'Décimales',
    lowPrecision: 'Faible précision (taille plus petite)',
    highPrecision: 'Haute précision (meilleure qualité)',
    removeDimensions: 'Supprimer les dimensions',
    removeDimensionsDesc: 'Supprime les attributs width/height, utilise viewBox pour contrôler la taille',
    sortAttrs: 'Trier les attributs',
    sortAttrsDesc: 'Range les attributs des éléments par ordre alphabétique'
  },

  view: {
    title: 'Aperçu',
    original: 'Original',
    optimized: 'Optimisé',
    showBorder: 'Afficher la bordure',
    backgroundColor: 'Couleur d\'arrière-plan',
    grid: 'Afficher la grille',
    zoom: 'Zoom',
    toggleAnimation: 'Basculer l\'animation'
  },

  actions: {
    optimize: 'Optimiser',
    optimizing: 'Optimisation en cours...',
    resetOptions: 'Réinitialiser les options',
    download: 'Télécharger le SVG optimisé',
    copy: 'Copier',
    copyCode: 'Copier le code',
    viewCode: 'Voir le code',
    viewPreview: 'Voir l\'aperçu'
  },

  messages: {
    optimizationSuccess: 'Optimisation SVG réussie',
    optimizationFailed: 'Échec de l\'optimisation SVG : {error}',
    invalidSvg: 'Fichier ou code SVG invalide',
    copied: 'Copié dans le presse-papiers',
    copyFailed: 'Échec de la copie, veuillez copier manuellement',
    downloaded: 'SVG optimisé téléchargé',
    emptyInput: 'Veuillez fournir un code SVG ou un fichier à optimiser',
    onlySvgAllowed: 'Veuillez téléverser un fichier au format SVG !',
    failedToLoadLibrary: 'Impossible de charger la bibliothèque SVGO'
  }
};