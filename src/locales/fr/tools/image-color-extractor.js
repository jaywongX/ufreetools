export default {
  name: 'Extracteur de couleurs d\'image',
  description: 'Extrait une palette de couleurs et les couleurs dominantes d\'une image',

  input: {
    title: 'Téléverser une image',
    dropzone: 'Glissez-déposez une image ici ou cliquez pour téléverser',
    formats: 'Formats supportés : JPG, PNG, GIF, WebP, SVG',
    browse: 'Parcourir les fichiers',
    selectImage: 'Sélectionner une image',
    orText: 'ou',
    pasteUrl: 'Coller une URL d\'image :',
    loadUrl: 'Charger depuis une URL',
    urlPlaceholder: 'https://exemple.com/image.jpg',
    unnamed: 'Image sans nom'
  },

  options: {
    title: 'Options d\'extraction',
    extractSettings: 'Paramètres d\'extraction',
    colorCount: 'Nombre de couleurs',
    paletteSize: 'Taille de la palette',
    paletteMin: 'Minimum (3)',
    paletteMax: 'Maximum (20)',
    colorSimilarity: 'Similarité des couleurs',
    similiarityToggle: 'Autoriser les couleurs similaires',
    quality: 'Qualité d\'extraction',
    colorModel: 'Modèle de couleur',
    colorSpace: 'Espace colorimétrique',
    colorFormat: 'Format de couleur',
    sortBy: 'Trier les couleurs par',
    sortByPopularity: 'Par fréquence d\'apparition',
    sortByLuminance: 'Par luminance',
    sortByHue: 'Par teinte',
    sortBySaturation: 'Par saturation',
    ignoreWhite: 'Ignorer le blanc',
    ignoreBlack: 'Ignorer le noir',
    threshold: 'Seuil de similarité'
  },

  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },

  colorFormats: {
    hex: 'Hexadécimal (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA avec transparence',
    hsl: 'HSL',
    hsla: 'HSLA avec transparence',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },

  sortOptions: {
    prevalence: 'Prévalence',
    luminance: 'Luminance',
    hue: 'Teinte',
    saturation: 'Saturation',
    original: 'Ordre original'
  },

  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },

  results: {
    title: 'Couleurs extraites',
    colorsFound: '{count} couleurs extraites',
    dominantColor: 'Couleur dominante',
    mainColor: 'Couleur principale',
    complementary: 'Couleur complémentaire',
    palette: 'Palette de couleurs',
    colorPalette: 'Palette de couleurs',
    palettePreview: 'Aperçu de la palette',
    usage: 'Utilisation des couleurs (%)',
    percentage: 'Proportion : {value}%',
    copyAll: 'Copier toutes les couleurs',
    clickToCopy: 'Cliquer pour copier : {color}',
    downloading: 'Téléchargement de la palette...'
  },

  display: {
    originalImage: 'Image originale',
    colorPalette: 'Palette de couleurs',
    uploadFirst: 'Veuillez d\'abord téléverser une image',
    clickExtract: 'Cliquez sur "Extraire les couleurs" pour obtenir la palette',
  },

  actions: {
    extract: 'Extraire les couleurs',
    extracting: 'Traitement en cours...',
    download: 'Télécharger la palette',
    copy: 'Copier',
    copyValue: 'Copier la valeur',
    reset: 'Réinitialiser',
    copyPalette: 'Copier la palette',
    exportJson: 'Exporter en JSON',
    exportCss: 'Exporter en variables CSS',
    exportSass: 'Exporter en variables SASS',
    exportSwatch: 'Exporter en nuancier ASE'
  },

  palette: {
    title: 'Palette nommée',
    vibrant: 'Vibrant',
    muted: 'Sourdes',
    dark: 'Sombres',
    light: 'Claires',
    custom: 'Personnalisée'
  },

  messages: {
    imageLoaded: 'Image chargée avec succès',
    processingImage: 'Traitement de l\'image...',
    extractionComplete: 'Extraction des couleurs terminée',
    extractionFailed: 'Échec de l\'extraction : {error}',
    copied: 'Copié dans le presse-papiers',
    copiedColor: 'Copié : {color}',
    copiedAll: 'Toutes les couleurs copiées',
    copyFailed: 'Échec de la copie',
    resetDone: 'Réinitialisation effectuée',
    invalidImage: 'Fichier image invalide',
    noImageSelected: 'Aucune image sélectionnée'
  }
};