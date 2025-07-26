export default {
  name: 'Générateur de dégradés de couleurs',
  description: 'Créez et personnalisez de magnifiques dégradés CSS, prévisualisez en temps réel et copiez le code dans votre projet',

  gradientTypes: {
    title: 'Types de dégradé',
    linear: 'Dégradé linéaire',
    radial: 'Dégradé radial',
    conic: 'Dégradé conique'
  },

  controls: {
    title: 'Contrôles de couleur',
    addColor: 'Ajouter une couleur',
    color: 'Couleur',
    position: 'Position (%)',
    delete: 'Supprimer couleur',
    angle: 'Angle',
    degrees: 'degrés',
    shape: 'Forme',
    circle: 'Cercle',
    ellipse: 'Ellipse',
    positionX: 'Position X (%)',
    positionY: 'Position Y (%)',
    size: 'Taille',
    closestSide: 'Côté le plus proche',
    closestCorner: 'Coin le plus proche',
    farthestSide: 'Côté le plus éloigné',
    farthestCorner: 'Coin le plus éloigné',
    fromAngle: 'Angle de départ'
  },

  output: {
    title: 'Code CSS',
    copyCode: 'Copier le code',
    preview: 'Zone de prévisualisation',
    copied: 'Le code CSS a été copié dans le presse-papier !',
    download: 'Télécharger PNG'
  },

  presets: {
    title: 'Préréglages de dégradés',
    apply: 'Appliquer préréglage',
    sunnyMorning: 'Matin ensoleillé',
    winterNeva: 'Neva hivernale',
    rareWind: 'Vent rare',
    deepBlue: 'Bleu profond',
    perfect: 'Blanc parfait',
    cloudyKnoxville: 'Knoxville nuageux',
    greenBeach: 'Plage verte',
    plumBath: 'Bain de prune',
    everlasting: 'Ciel éternel'
  },

  accessibility: {
    colorPicker: 'Sélecteur de couleur',
    deleteSwatch: 'Supprimer le point d\'arrêt de couleur',
    dragToReposition: 'Glisser pour repositionner le point d\'arrêt de couleur'
  },

  actions: {
    reset: 'Réinitialiser',
    generateCSS: 'Générer CSS',
    clickToCopy: 'Cliquer pour copier le code',
    completeEdit: 'Terminer l\'édition'
  },

  messages: {
    copied: 'Le code CSS a été copié dans le presse-papier !',
    noColors: 'Ajoutez au moins deux couleurs pour créer un dégradé',
    maxColors: 'Nombre maximum de points d\'arrêt de couleur atteint (10)',
    useKeyboard: 'Utilisez la touche Suppr pour supprimer le point d\'arrêt sélectionné',
    invalidHex: 'Veuillez entrer un code couleur hexadécimal valide',
    downloadError: 'Échec du téléchargement PNG, veuillez réessayer plus tard',
    preview: 'Aperçu'
  },

  anglePresets: {
    top: 'Haut',
    topRight: 'Haut droite',
    right: 'Droite',
    bottomRight: 'Bas droite',
    bottom: 'Bas',
    bottomLeft: 'Bas gauche',
    left: 'Gauche',
    topLeft: 'Haut gauche'
  },

  radialShapes: {
    circle: 'Cercle',
    ellipse: 'Ellipse'
  },

  radialSizes: {
    farthestCorner: 'Coin le plus éloigné',
    closestCorner: 'Coin le plus proche',
    farthestSide: 'Côté le plus éloigné',
    closestSide: 'Côté le plus proche',
  }
};