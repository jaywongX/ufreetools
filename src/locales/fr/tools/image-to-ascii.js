export default {
  name: 'Image vers ASCII',
  description: 'Convertit des images en art ASCII avec des options personnalisables',

  upload: {
    title: 'Télécharger une image',
    dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
    maxSize: 'Taille maximale : 5 Mo',
    supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF',
    pasteImage: 'Ou collez une image depuis le presse-papiers'
  },

  options: {
    title: 'Options de conversion',
    width: 'Largeur de sortie',
    height: 'Hauteur de sortie',
    preserveAspect: 'Conserver les proportions',
    colored: 'Sortie en couleur',
    charSet: 'Jeu de caractères',
    charSets: {
      standard: 'Standard',
      simple: 'Simple',
      complex: 'Complexe',
      blocks: 'Caractères bloc',
      custom: 'Personnalisé'
    },
    customChars: 'Caractères personnalisés',
    invert: 'Inverser les couleurs',
    threshold: 'Seuil de luminosité',
    brightness: 'Luminosité',
    contrast: 'Contraste',
    fontFamily: 'Police de caractères',
    fontSize: 'Taille de police',
    lineHeight: 'Hauteur de ligne',
    backgroundColor: 'Couleur de fond',
    textColor: 'Couleur du texte'
  },

  output: {
    title: 'Sortie ASCII',
    preview: 'Aperçu',
    raw: 'ASCII brut',
    html: 'HTML',
    copyToClipboard: 'Copier dans le presse-papiers',
    downloadTxt: 'Télécharger en TXT',
    downloadHtml: 'Télécharger en HTML',
    downloadImage: 'Télécharger en image',
    stats: {
      title: 'Statistiques',
      characters: 'Nombre de caractères',
      lines: 'Nombre de lignes',
      colors: 'Nombre de couleurs',
      size: 'Taille du texte'
    }
  },

  presets: {
    title: 'Préréglages',
    save: 'Sauvegarder les paramètres actuels',
    load: 'Charger un préréglage',
    delete: 'Supprimer un préréglage',
    presetName: 'Nom du préréglage',
    default: 'Par défaut',
    detailed: 'Détaillé',
    minimalist: 'Minimaliste',
    blocky: 'Style bloc',
    small: 'Petit',
    inverted: 'Inversé'
  },

  adjustment: {
    title: 'Ajustement de l\'image',
    grayscale: 'Niveaux de gris',
    negative: 'Négatif',
    resize: 'Redimensionner avant conversion',
    crop: 'Recadrer l\'image',
    rotate: 'Rotation',
    flipH: 'Retournement horizontal',
    flipV: 'Retournement vertical'
  },

  animation: {
    title: 'Animation',
    animated: 'Traiter comme animation',
    frameDelay: 'Délai entre images',
    loop: 'Boucle d\'animation',
    loopCount: 'Nombre de boucles',
    extractFrame: 'Extraire l\'image actuelle'
  },

  actions: {
    convert: 'Convertir en ASCII',
    resetOptions: 'Réinitialiser les options',
    refreshPreview: 'Rafraîchir l\'aperçu',
    loadImage: 'Charger une nouvelle image',
    applyChanges: 'Appliquer les modifications',
    selectImage: 'Sélectionner une image',
    reset: 'Réinitialiser',
    processing: 'Traitement en cours...',
    generate: 'Générer ASCII',
    copy: 'Copier',
    download: 'Télécharger'
  },

  messages: {
    converting: 'Conversion de l\'image en ASCII...',
    conversionComplete: 'Conversion terminée',
    conversionFailed: 'Échec de la conversion : {error}',
    copied: 'ASCII copié dans le presse-papiers',
    downloadStarted: 'Téléchargement démarré',
    downloadComplete: 'ASCII téléchargé',
    downloadFailed: 'Échec du téléchargement',
    copyFailed: 'Échec de la copie',
    resetComplete: 'Réinitialisation terminée',
    asciiGenerated: 'Art ASCII généré',
    generationFailed: 'Échec de la génération ASCII',
    presetSaved: 'Préréglage sauvegardé',
    presetLoaded: 'Préréglage chargé',
    presetDeleted: 'Préréglage supprimé',
    invalidImage: 'Format d\'image invalide ou fichier corrompu',
    imageTooBig: 'L\'image est trop grande pour la conversion',
    selectOrLoad: 'Veuillez sélectionner une image ou charger depuis une URL',
    asciiWillDisplay: 'L\'ASCII s\'affichera ici',
    customCharsPlaceholder: 'Entrez des caractères du plus sombre au plus clair...',
    tip: 'Ajustez les paramètres puis cliquez sur "Générer ASCII" pour voir le résultat',
    drapPlaceHolder: 'Sélectionnez ou glissez-déposez une image ici',
    noImage: 'Veuillez d\'abord sélectionner une image',
    generateAscii: 'Cliquez sur "Générer ASCII" pour convertir l\'image',
    tip2: 'Astuce : Utilisez le bouton Copier pour mettre l\'ASCII dans le presse-papiers, ou Télécharger pour le sauvegarder.'
  },

  charSets: {
    standard: 'Standard',
    simple: 'Simple',
    blocks: 'Blocs',
    custom: 'Personnalisé'
  },

  settings: {
    title: 'Paramètres ASCII',
    customCharsetLabel: 'Jeu de caractères personnalisé (du plus sombre au plus clair)',
    asciiWidth: 'Largeur ASCII',
    invert: 'Inverser les couleurs',
    colored: 'Sortie en couleur',
    fontSize: 'Taille de police'
  },

  preview: {
    originalImage: 'Image originale',
    generatedAscii: 'ASCII généré'
  }
};