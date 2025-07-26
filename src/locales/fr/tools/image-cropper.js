export default {
  name: 'Recadreur d\'image',
  description: 'Recadrage, redimensionnement et rotation précis des images',

  upload: {
    title: 'Télécharger une image',
    dropzone: 'Glissez-déposez une image ici ou cliquez pour parcourir',
    maxSize: 'Taille maximale du fichier : 10 Mo',
    supportedFormats: 'Formats pris en charge : JPG, PNG, WEBP, GIF',
    select: 'Sélectionnez une image pour commencer le recadrage et l\'édition'
  },

  editor: {
    title: 'Éditeur d\'image',
    zoom: 'Zoom',
    rotate: 'Rotation',
    flipHorizontal: 'Retournement horizontal',
    flipVertical: 'Retournement vertical',
    reset: 'Réinitialiser l\'image',
    undo: 'Annuler',
    redo: 'Rétablir',
    dragMode: 'Mode glisser',
    scaleMode: 'Mode échelle'
  },

  crop: {
    title: 'Paramètres de recadrage',
    aspectRatio: 'Ratio d\'aspect',
    freeform: 'Forme libre',
    square: 'Carré (1:1)',
    portrait: 'Portrait (3:4)',
    landscape: 'Paysage (4:3)',
    widescreen: 'Large écran (16:9)',
    panorama: 'Panoramique (2:1)',
    custom: 'Personnalisé',
    width: 'Largeur',
    height: 'Hauteur',
    unit: 'Unité',
    pixels: 'Pixels',
    percent: 'Pourcentage',
    lockAspectRatio: 'Verrouiller le ratio d\'aspect'
  },

  presets: {
    title: 'Présélections de taille',
    original: 'Taille originale',
    social: 'Réseaux sociaux',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Tailles d\'impression',
    fourBySix: '4×6 pouces',
    fiveBySeven: '5×7 pouces',
    eightByTen: '8×10 pouces'
  },

  output: {
    title: 'Sortie',
    preview: 'Aperçu',
    dimensions: 'Dimensions de sortie',
    quality: 'Qualité',
    format: 'Format',
    fileName: 'Nom du fichier',
    download: 'Télécharger',
    saveAs: 'Enregistrer sous',
    copy: 'Copier dans le presse-papiers'
  },

  actions: {
    crop: 'Recadrer l\'image',
    apply: 'Appliquer',
    cancel: 'Annuler',
    save: 'Enregistrer l\'image',
    download: 'Télécharger',
    newImage: 'Nouvelle image'
  },

  messages: {
    cropSuccess: 'Image recadrée avec succès',
    downloadReady: 'Votre image recadrée est prête à être téléchargée',
    processing: 'Traitement de l\'image en cours...',
    copied: 'Image copiée dans le presse-papiers',
    invalidFile: 'Fichier invalide. Veuillez télécharger une image valide.',
    fileTooLarge: 'Fichier trop volumineux. La taille maximale est de 10 Mo.'
  }
};