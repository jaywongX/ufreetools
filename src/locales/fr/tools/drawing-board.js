export default {
  name: 'Tableau de dessin simple',
  description: 'Outil de dessin en ligne prenant en charge le dessin libre, le changement de couleur et la taille du pinceau',

  // Barre d'outils
  tools: {
    brush: 'Pinceau',
    eraser: 'Gomme',
    clear: 'Effacer le canevas',
    save: 'Enregistrer l\'image',
    undo: 'Annuler',
    redo: 'Rétablir',
    apply: 'Appliquer'
  },

  // Paramètres
  settings: {
    brushSize: 'Taille du pinceau',
    color: 'Couleur',
    opacity: 'Opacité',
    backgroundColor: 'Couleur de fond'
  },

  // Sélecteur de couleur
  colors: {
    black: 'Noir',
    white: 'Blanc',
    red: 'Rouge',
    green: 'Vert',
    blue: 'Bleu',
    yellow: 'Jaune',
    orange: 'Orange',
    purple: 'Violet',
    pink: 'Rose',
    brown: 'Marron',
    gray: 'Gris',
    custom: 'Couleur personnalisée'
  },

  // Paramètres du canevas
  canvas: {
    width: 'Largeur',
    height: 'Hauteur',
    resize: 'Redimensionner le canevas',
    orientation: 'Orientation',
    portrait: 'Portrait',
    landscape: 'Paysage',
    square: 'Carré'
  },

  // Conseils et messages
  messages: {
    saveSuccess: 'Image enregistrée avec succès',
    confirmClear: 'Voulez-vous vraiment effacer le canevas ? Tout contenu non enregistré sera perdu.',
    unsupportedBrowser: 'Votre navigateur ne prend pas en charge Canvas, veuillez utiliser un navigateur moderne.',
    fileNamePrompt: 'Veuillez saisir un nom de fichier',
    defaultFileName: 'Mon dessin'
  },

  // À propos
  aboutTitle: 'À propos du Tableau de dessin simple',

  aboutDescription: 'Le Tableau de dessin simple est un outil de dessin en ligne intuitif et facile à utiliser qui vous permet de libérer votre créativité pour peindre et créer. Que ce soit pour des gribouillages, des illustrations simples ou pour noter des idées, cet outil répond à tous vos besoins.',
  featuresTitle: 'Fonctionnalités principales',
  feature1: 'Dessin libre avec plusieurs couleurs et tailles de pinceau',
  feature2: 'Fonction gomme pour modifier facilement le dessin',
  feature3: 'Fonctions annuler et rétablir pour corriger les erreurs',
  feature4: 'Réglage de l\'opacité du pinceau pour des effets variés',
  feature5: 'Effacement du canevas en un clic pour recommencer',
  feature6: 'Enregistrement des œuvres au format image',
  howToUseTitle: 'Comment utiliser',
  howToUseStep1: '1. Sélectionnez l\'outil pinceau et une couleur pour commencer à dessiner',
  howToUseStep2: '2. Utilisez le curseur pour ajuster la taille du pinceau et l\'opacité',
  howToUseStep3: '3. Utilisez l\'outil gomme pour effacer des éléments si nécessaire',
  howToUseStep4: '4. Vous pouvez annuler ou rétablir des actions à tout moment',
  howToUseStep5: '5. Une fois terminé, cliquez sur le bouton d\'enregistrement pour télécharger votre œuvre',
  tipsTitle: 'Conseils d\'utilisation',
  tip1: 'Utilisez un pinceau fin pour des détails précis et un pinceau large pour remplir de grandes surfaces',
  tip2: 'Réduire l\'opacité permet de créer des effets d\'aquarelle ou de transparence',
  tip3: 'Utilisez la fonction d\'annulation sans crainte de faire des erreurs',
  tip4: 'Commencez par dessiner les contours avant de remplir les détails',
  tip5: 'Essayez différentes combinaisons de couleurs pour créer des œuvres variées'
};