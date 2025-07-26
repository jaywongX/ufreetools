export default {
  name: 'Générateur de sceaux',
  description: 'Créez en ligne divers types de sceaux numériques : cachets d\'entreprise, signatures personnelles, etc.',

  // Interface principale
  text: 'Texte du sceau',

  textPlaceholder: 'Entrez le texte circulaire',
  centerText: 'Texte central',
  centerTextPlaceholder: 'Entrez le texte ou symbole central',
  font: 'Police d\'écriture',
  shape: 'Forme du sceau',
  size: 'Taille du sceau',
  color: 'Couleur du sceau',
  generate: 'Générer le sceau',
  download: 'Télécharger l\'image',
  reset: 'Réinitialiser',
  preview: 'Aperçu du sceau',
  previewPlaceholder: 'Cliquez sur "Générer le sceau" pour voir l\'aperçu',
  bottomText: 'Texte inférieur',
  bottomTextPlaceholder: 'Entrez le texte inférieur',
  centerSymbol: 'Symbole central',
  centerImage: 'Télécharger un motif central',
  template: 'Modèles de sceaux',
  centerSymbolSize: 'Taille du symbole central',
  exportFormat: 'Format d\'exportation',
  lineWidth: 'Épaisseur des traits',
  defaultSealText: 'Société à responsabilité limitée XXX',
  defaultBottomText: 'Cachet spécial pour contrats',
  width: 'Largeur',
  height: 'Hauteur',
  agingEffect: 'Effet vieilli',
  colorHex: 'Valeur hexadécimale de la couleur',
  customColor: 'Couleur personnalisée',

  // Options de police
  fonts: {
    simsun: 'Song Ti',
    kaiti: 'Kai Ti',
    simhei: 'Hei Ti',
    yahei: 'Microsoft YaHei',
    stxingkai: 'STXingkai',
    stzhongsong: 'STZhongsong',
    stfangsong: 'STFangsong',
    arial: 'Arial',
    times: 'Times New Roman',
    georgia: 'Georgia'
  },

  // Options de forme
  shapes: {
    circle: 'Circulaire',
    ellipse: 'Ovale',
    square: 'Carré'
  },

  // Options de couleur
  colors: {
    red: 'Rouge',
    darkRed: 'Rouge foncé',
    blue: 'Bleu',
    navy: 'Bleu marine',
    green: 'Vert',
    darkGreen: 'Vert foncé',
    purple: 'Violet',
    magenta: 'Magenta',
    brown: 'Marron',
    black: 'Noir',
    custom: 'Couleur personnalisée'
  },

  // Guide d'utilisation
  howToUse: 'Mode d\'emploi',

  instructions: {
    step1: 'Saisissez le texte que vous souhaitez afficher autour du sceau, comme un nom d\'entreprise ou un nom personnel',
    step2: 'Sélectionnez le texte ou motif central, comme une étoile, un logo ou d\'autres symboles',
    step3: 'Ajustez la forme, la taille et la couleur du sceau, puis visualisez le résultat',
    step4: 'Une fois satisfait, cliquez sur "Télécharger l\'image" pour enregistrer votre sceau personnalisé'
  },

  templates: {
    custom: 'Personnalisé',
    company: 'Cachet d\'entreprise',
    contract: 'Cachet pour contrats',
    finance: 'Cachet financier',
    legal: 'Cachet légal',
    personal: 'Signature personnelle'
  }
};