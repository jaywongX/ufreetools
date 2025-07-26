export default {
  name: 'Conversion horizontale vers verticale',
  description: 'Convertir des images horizontales en format vertical pour les stories, fonds d\'écran mobiles et publications sur réseaux sociaux',
  tags: ['image', 'conversion', 'mobile', 'social', 'story', 'vertical', 'portrait'],

  upload: {
    title: 'Convertisseur horizontal vers vertical',
    dropzone: 'Glissez-déposez une image ici',
    maxSize: 'Taille maximale : 10 Mo',
    supportedFormats: 'Formats supportés : JPG, PNG, WEBP, GIF'
  },

  settings: {
    title: 'Paramètres de conversion',
    presets: 'Préréglages',
    conversionMode: 'Mode de conversion',
    modes: {
      crop: 'Recadrage',
      fill: 'Remplissage couleur',
      blur: 'Flou d\'arrière-plan',
      stretch: 'Étirement des bords',
      dualColor: 'Arrière-plan bicolore'
    },
    cropPosition: 'Position de recadrage',
    positions: {
      left: 'Gauche',
      center: 'Centre',
      right: 'Droite'
    },
    fillColor: 'Couleur de remplissage',
    blurRadius: 'Rayon de flou',
    stretchFactor: 'Facteur d\'étirement',
    topColor: 'Couleur du haut',
    bottomColor: 'Couleur du bas',
    sizeOption: 'Dimensions de sortie',
    sizeModes: {
      auto: 'Automatique',
      preset: 'Préréglage',
      custom: 'Personnalisé'
    },
    sizePresets: 'Préréglages de taille',
    outputSize: 'Taille personnalisée',
    width: 'Largeur',
    height: 'Hauteur',
    dimensionsHint: 'Entrez les dimensions en pixels',
    outputFormat: 'Format de sortie',
    quality: 'Qualité d\'image',
    advancedOptions: 'Options avancées',
    preserveRatio: 'Conserver les proportions',
    sharpen: 'Accentuation',
    addWatermark: 'Ajouter un filigrane',
    watermarkPlaceholder: 'Entrez le texte du filigrane',
    watermarkColor: 'Couleur du filigrane'
  },

  output: {
    preview: 'Aperçu du résultat',
    before: 'Avant conversion',
    after: 'Après conversion',
    dimensions: 'Dimensions'
  },

  actions: {
    selectImage: 'Sélectionner une image',
    convert: 'Convertir en vertical',
    download: 'Télécharger l\'image',
    showSideBySide: 'Afficher la comparaison',
    hideSideBySide: 'Masquer la comparaison',
    hideComparison: 'Masquer la comparaison'
  },

  messages: {
    convertPrompt: 'Téléchargez une image horizontale à convertir en format vertical',
    processing: 'Traitement de votre image...',
    imageOnly: 'Veuillez sélectionner un fichier image'
  },

  examples: {
    title: 'Exemples d\'application',
    social: 'Créer des stories verticales pour Instagram, TikTok etc.',
    socialTip: 'Conversion parfaite de photos horizontales en contenu vertical attrayant',
    mobile: 'Créer des fonds d\'écran mobiles à partir d\'images horizontales',
    mobileTip: 'Optimisation des images pour les smartphones avec différents ratios d\'écran'
  }
};