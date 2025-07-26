export default {
  name: 'Outil de traitement par lot d\'images',
  description: 'Redimensionner, convertir et optimiser plusieurs images en une seule opération',

  input: {
    title: 'Images en entrée',
    dropzone: 'Glissez-déposez des images ici ou cliquez pour parcourir',
    addMore: 'Ajouter plus d\'images',
    selectImages: 'Sélectionner des images',
    clearAll: 'Tout effacer',
    maxFiles: 'Maximum {count} images',
    maxSize: 'Taille maximale par image : {size}MB',
    supportedFormats: 'Formats supportés : {formats}'
  },

  options: {
    title: 'Options de réglage',
    settingsTitle: 'Paramètres de réglage',
    resizeMode: 'Mode de redimensionnement',
    resizeMethod: 'Méthode de redimensionnement',
    pixelMode: 'Pixels',
    percentageMode: 'Pourcentage',
    maxDimensionMode: 'Dimensions maximales',
    outputFormat: 'Format de sortie',
    quality: 'Qualité',
    width: 'Largeur',
    height: 'Hauteur',
    maintainAspectRatio: 'Conserver le ratio',
    maxWidth: 'Largeur maximale',
    maxHeight: 'Hauteur maximale',
    percentage: 'Pourcentage',
    backgroundColor: 'Couleur de fond',
    naming: 'Nommage des fichiers',
    filenamePrefix: 'Préfixe du nom de fichier',
    filenameSuffix: 'Suffixe du nom de fichier',
    applyToAllImages: 'Appliquer à toutes les images',
    applyToAll: 'Appliquer à toutes'
  },

  resizeModes: {
    exact: 'Dimensions exactes',
    maxDimensions: 'Dimensions maximales',
    percentage: 'Redimensionnement en pourcentage',
    fit: 'Ajuster à l\'intérieur',
    cover: 'Couvrir',
    crop: 'Recadrer'
  },

  formats: {
    original: 'Identique à la source',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },

  namingOptions: {
    original: 'Nom original',
    dimensions: 'Original + dimensions',
    format: 'Original + format',
    custom: 'Modèle personnalisé',
    random: 'Chaîne aléatoire'
  },

  output: {
    title: 'Images ajustées',
    downloadAll: 'Tout télécharger',
    downloadAsZip: 'Télécharger en ZIP',
    processingStatus: 'Traitement : {processed}/{total}',
    originalSize: 'Taille originale',
    newSize: 'Nouvelle taille',
    reduction: 'Réduction',
    individualDownload: 'Télécharger'
  },

  batch: {
    title: 'Traitement par lot',
    process: 'Traiter toutes les images',
    cancel: 'Annuler le traitement',
    selectPreset: 'Sélectionner un préréglage',
    savePreset: 'Sauvegarder les paramètres actuels',
    progress: 'Progression du traitement'
  },

  watermark: {
    title: 'Filigrane',
    enable: 'Ajouter un filigrane',
    text: 'Texte du filigrane',
    image: 'Image du filigrane',
    position: 'Position',
    opacity: 'Opacité',
    rotation: 'Rotation',
    size: 'Taille',
    padding: 'Marge intérieure'
  },

  positions: {
    topLeft: 'Haut gauche',
    topCenter: 'Haut centre',
    topRight: 'Haut droit',
    middleLeft: 'Milieu gauche',
    middleCenter: 'Centré',
    middleRight: 'Milieu droit',
    bottomLeft: 'Bas gauche',
    bottomCenter: 'Bas centre',
    bottomRight: 'Bas droit'
  },

  actions: {
    resize: 'Redimensionner',
    preview: 'Aperçu',
    processing: 'Traitement en cours...',
    reset: 'Réinitialiser',
    applySettings: 'Appliquer les paramètres',
    resetSettings: 'Réinitialiser les paramètres',
    cancel: 'Annuler'
  },

  messages: {
    resizeSuccess: 'Redimensionnement réussi',
    resizeFailed: 'Échec du redimensionnement : {error}',
    invalidDimensions: 'Veuillez entrer des dimensions valides',
    invalidWidthHeight: 'Veuillez entrer une largeur et hauteur valides',
    noImages: 'Veuillez ajouter des images à redimensionner',
    noImagesToDownload: 'Aucune image à télécharger',
    processing: 'Traitement des images...',
    processingComplete: 'Traitement terminé',
    processingError: 'Erreur lors du traitement',
    waitingForProcess: 'En attente de traitement',
    downloadStarted: 'Téléchargement démarré',
    allDownloaded: 'Toutes les images téléchargées',
    presetSaved: 'Préréglage sauvegardé',
    presetLoaded: 'Préréglage chargé',
    zipCreated: 'Archive ZIP créée avec {count} images',
    zipError: 'Erreur lors de la création du ZIP'
  },

  preview: {
    title: 'Aperçu des images ({count})',
    selectImage: 'Sélectionnez une image',
    batchSupport: 'Supporte le traitement par lot de plusieurs images',
    download: 'Télécharger',
    delete: 'Supprimer'
  },

  qualityOptions: {
    fast: 'Traitement rapide',
    medium: 'Qualité moyenne',
    high: 'Haute qualité (recommandé)',
    best: 'Meilleure qualité (plus lent)'
  }
};