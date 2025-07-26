export default {
  name: 'Compresseur d\'images',
  description: 'Compresse et optimise les images tout en préservant la qualité',

  input: {
    dragDrop: 'Glissez-déposez des images ici ou cliquez pour téléverser',
    supportedFormats: 'Formats supportés : JPG, PNG, GIF, WEBP',
    selected: '{count} fichier(s) sélectionné(s)',
    changeFiles: 'Changer les fichiers',
    width: 'Largeur',
    height: 'Hauteur',
    keepOriginal: 'Mettre 0 pour conserver les dimensions originales',
  },

  results: {
    originalImage: 'Image originale',
    compressedImage: 'Image compressée',
    filename: 'Nom du fichier :',
    dimensions: 'Dimensions :',
    fileSize: 'Taille :',
    compressionRatio: 'Taux de compression :',
    viewOriginal: 'Voir l\'original',
  },

  about: {
    title: 'À propos de la compression d\'images',
    description: 'Cet outil utilise l\'API Canvas du navigateur pour compresser les images. Tout le traitement se fait localement sur votre appareil, les images ne sont pas envoyées à un serveur.',
    principlesTitle: 'Principes de compression :',
    principles: {
      resize: 'Redimensionnement : des dimensions plus petites signifient moins de données pixels',
      quality: 'Réduction de qualité : diminution du paramètre de qualité pour réduire la taille',
      format: 'Conversion de format : différents formats ont différentes caractéristiques de compression'
    },
    useCasesTitle: 'Cas d\'utilisation :',
    useCases: {
      web: 'Optimisation d\'images pour le web et amélioration des temps de chargement',
      email: 'Réduction de la taille des pièces jointes',
      social: 'Compression avant publication sur les réseaux sociaux',
      storage: 'Optimisation de l\'espace de stockage'
    }
  },

  options: {
    quality: 'Qualité',
    qualityValue: 'Qualité ({value}%)',
    lowQuality: 'Basse qualité / Petit fichier',
    highQuality: 'Haute qualité / Gros fichier',
    format: 'Format de sortie',
    maxSize: 'Taille maximale ({width} × {height} px)',
    keepExif: 'Conserver les données EXIF',
    resizeImage: 'Redimensionner l\'image',
    maxWidth: 'Largeur maximale',
    maxHeight: 'Hauteur maximale',
    compressionLevel: 'Niveau de compression',
    maxFileSize: 'Taille de fichier cible',
    optimizationLevel: 'Niveau d\'optimisation',
    convertTo: 'Convertir en'
  },

  presets: {
    web: 'Optimisation web',
    highQuality: 'Haute qualité',
    balanced: 'Équilibré',
    smallSize: 'Taille réduite',
    custom: 'Personnalisé'
  },

  formats: {
    original: 'Format original',
    jpeg: 'JPEG',
    jpegDesc: 'Le JPEG est idéal pour les photos, ne supporte pas la transparence',
    png: 'PNG',
    pngDesc: 'Le PNG supporte la transparence, idéal pour les icônes et illustrations',
    webp: 'WebP',
    webpDesc: 'WebP offre un taux de compression élevé, idéal pour le web',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },

  resizeOptions: {
    noResize: 'Ne pas redimensionner',
    maxDimension: 'Dimension maximale',
    exactDimensions: 'Dimensions exactes',
    percentage: 'Redimensionnement en pourcentage'
  },

  actions: {
    upload: 'Téléverser des images',
    compress: 'Compresser',
    processing: 'Traitement en cours...',
    download: 'Télécharger',
    downloadAll: 'Tout télécharger',
    batchDownload: 'Téléchargement par lot',
    clear: 'Effacer',
    addMore: 'Ajouter plus d\'images',
    removeAll: 'Tout supprimer',
    preview: 'Aperçu',
    delete: 'Supprimer'
  },

  table: {
    filename: 'Nom du fichier',
    originalSize: 'Taille originale',
    original: 'Taille originale',
    compressedSize: 'Taille compressée',
    compressed: 'Taille compressée',
    savings: 'Économie',
    ratio: 'Taux',
    quality: 'Qualité',
    dimensions: 'Dimensions',
    originalDimensions: 'Dimensions originales',
    newDimensions: 'Nouvelles dimensions',
    status: 'Statut'
  },

  messages: {
    dropped: '{count} image(s) déposée(s)',
    uploading: 'Téléversement des images...',
    compressing: 'Compression des images...',
    compressed: 'Images compressées avec succès',
    downloadPreparing: 'Préparation du téléchargement...',
    downloadReady: 'Téléchargement prêt',
    cleared: 'Toutes les images ont été effacées',
    tooManyFiles: 'Trop de fichiers. Maximum autorisé : {max}',
    fileTooLarge: 'Fichier trop volumineux. Maximum autorisé : {max}MB',
    unsupportedFormat: 'Format non supporté : {format}',
    imageError: 'Erreur de traitement d\'image : {error}',
    batchDownloadNotSupported: 'Le téléchargement par lot nécessite la bibliothèque JSZip. Veuillez télécharger les images individuellement ou ajouter le support zip.',
    batchDownloadError: 'Erreur lors du téléchargement par lot : {error}',
    invalidImage: 'Veuillez sélectionner une image valide'
  }
};