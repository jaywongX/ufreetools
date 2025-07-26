export default {
  name: 'Conversion Portrait en Paysage',
  description: 'Transformez des images portrait verticales en format paysage horizontal avec plusieurs options de conversion',

  upload: {
    title: 'Télécharger une image',
    dropzone: 'Glissez-déposez une image ici',
    maxSize: 'Taille maximale : 10 Mo',
    supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Paramètres de conversion',
    presets: 'Préréglages rapides',
    conversionMode: 'Mode de conversion',
    modes: {
      rotate: 'Rotation',
      fill: 'Remplissage arrière-plan',
      blur: 'Flou arrière-plan',
      stretch: 'Étirement des bords',
      dualColor: 'Arrière-plan bicolore'
    },
    rotationAngle: 'Angle de rotation',
    fillColor: 'Couleur de fond',
    blurRadius: 'Intensité du flou',
    stretchEdges: 'Degré d\'étirement',
    leftColor: 'Couleur gauche',
    rightColor: 'Couleur droite',
    sizeOption: 'Paramètres de taille',
    sizeModes: {
      auto: 'Taille automatique',
      preset: 'Tailles prédéfinies',
      custom: 'Taille personnalisée'
    },
    sizePresets: 'Préréglages de taille',
    outputSize: 'Taille de sortie',
    width: 'Largeur',
    height: 'Hauteur',
    dimensionsHint: 'Entrez les dimensions en pixels',
    autoSize: 'Calcul automatique de la taille',
    outputFormat: 'Format de sortie',
    quality: 'Qualité de l\'image',
    advancedOptions: 'Options avancées',
    preserveRatio: 'Conserver le ratio',
    sharpen: 'Netteté',
    addWatermark: 'Ajouter un filigrane',
    watermarkPlaceholder: 'Texte du filigrane',
    watermarkColor: 'Couleur du filigrane'
  },

  output: {
    preview: 'Aperçu du résultat',
    dimensions: 'Dimensions',
    before: 'Avant',
    after: 'Après'
  },

  actions: {
    selectImage: 'Sélectionner une image',
    convert: 'Convertir l\'image',
    download: 'Télécharger l\'image',
    reset: 'Supprimer',
    showSideBySide: 'Afficher la comparaison',
    hideComparison: 'Masquer la comparaison',
    hideSideBySide: 'Fermer'
  },

  messages: {
    processing: 'Traitement de l\'image...',
    convertPrompt: 'Le résultat apparaîtra ici après conversion',
    error: 'Une erreur est survenue lors du traitement',
    success: 'Conversion réussie !'
  },

  examples: {
    title: 'Conseils d\'utilisation',
    social: 'Idéal pour les publications sur réseaux sociaux où les images horizontales performent mieux',
    socialTip: 'Utilisez le mode flou pour un meilleur effet sur les réseaux',
    website: 'Créez des bannières pour sites web et blogs',
    websiteTip: 'Le mode bicolore est parfait pour les en-têtes de site'
  },

  help: {
    title: 'Comment utiliser cet outil',
    description: 'Cet outil vous permet de convertir des images verticales (portrait) en format horizontal (paysage) en utilisant diverses méthodes tout en préservant la qualité visuelle.',
    example1: {
      title: 'Publications sur réseaux sociaux',
      description: 'Convertissez des photos portrait en format horizontal adapté aux réseaux avec arrière-plan flou'
    },
    example2: {
      title: 'Bannières de site web',
      description: 'Créez des en-têtes et bannières pour sites web à partir d\'images verticales avec remplissage coloré'
    }
  }
};