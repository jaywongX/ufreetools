export default {
  name: 'Sélecteur de couleurs',
  description: 'Utilisez un outil de couleur avancé pour sélectionner, convertir et générer des schémas de couleurs',

  options: {
    colorSpace: 'Espace colorimétrique',
    paletteType: 'Type de palette',
    includeAlpha: 'Inclure la transparence',
    colorNaming: 'Nommage des couleurs'
  },

  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Couleurs nommées'
  },

  palettes: {
    monochromatic: 'Monochromatique',
    complementary: 'Complémentaire',
    analogous: 'Analogique',
    triadic: 'Triade',
    tetradic: 'Tétrade',
    split: 'Complémentaire divisée'
  },

  actions: {
    pickColor: 'Sélectionner une couleur',
    randomColor: 'Couleur aléatoire',
    generatePalette: 'Générer une palette',
    convert: 'Convertir',
    copyColor: 'Copier la couleur actuelle',
    copyAll: 'Tout copier',
    save: 'Enregistrer la couleur',
    reset: 'Réinitialiser',
    clear: 'Effacer'
  },

  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },

  colorSchemes: {
    title: 'Schémas de couleurs',
    complementary: 'Complémentaire',
    triadic: 'Triade',
    analogous: 'Analogique',
    monochromatic: 'Monochromatique',
    split: 'Complémentaire divisée',
    double: 'Double complémentaire',
    square: 'Carré',
    compound: 'Composé'
  },

  colorAdjust: {
    title: 'Ajustement des couleurs',
    hue: 'Teinte',
    saturation: 'Saturation',
    lightness: 'Luminosité',
    alpha: 'Transparence'
  },

  colorInfo: {
    title: 'Informations sur la couleur',
    name: 'Nom de la couleur',
    format: 'Format',
    contrast: 'Contraste',
    accessibility: {
      title: 'Accessibilité',
      pass: 'Conforme aux normes WCAG',
      fail: 'Non conforme aux normes WCAG',
      normal: 'Texte normal',
      large: 'Texte large'
    }
  },

  messages: {
    copied: 'Couleur copiée dans le presse-papiers',
    copyFailed: 'Échec de la copie de la couleur',
    invalidColor: 'Format de couleur invalide',
    contrastWarning: 'Contraste faible',
    saved: 'Couleur enregistrée',
    contrast: 'Contraste : {ratio}',
    accessibility: {
      AAA: 'Contraste excellent (AAA)',
      AA: 'Bon contraste (AA)',
      fail: 'Contraste insuffisant - Non conforme aux normes d\'accessibilité'
    },
    preview: 'Aperçu',
    colorValue: 'Valeur de couleur',
  },

  history: {
    title: 'Historique des couleurs',
    empty: 'Aucun historique de couleurs',
    clear: 'Effacer l\'historique'
  },

  colorPalette: {
    title: 'Palette de couleurs',
    addToPalette: 'Ajouter à la palette',
    removeFromPalette: 'Retirer de la palette',
    exportPalette: 'Exporter la palette',
    importPalette: 'Importer une palette',
    clearPalette: 'Vider la palette'
  }
};