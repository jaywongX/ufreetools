export default {
  name: 'Mélangeur de Texte',
  description: 'Réorganise aléatoirement les mots, phrases ou lignes d\'un texte tout en préservant sa mise en forme',
  inputLabel: 'Texte d\'entrée',
  inputPlaceholder: 'Saisissez ou collez votre texte à mélanger ici...',
  outputLabel: 'Résultat mélangé',
  shuffleMode: 'Mode de mélange',

  modes: {
    word: 'Mots',
    sentence: 'Phrases',
    line: 'Lignes'
  },

  preserveOptions: 'Options de préservation',
  preserveCapitalization: 'Conserver la casse',
  preservePunctuation: 'Conserver la ponctuation',
  shuffleButton: 'Mélanger',
  copyButton: 'Copier le résultat',
  clearButton: 'Tout effacer',
  copiedMessage: 'Copié dans le presse-papiers !',
  tagline: 'L\'outil de randomisation de texte le plus avancé au monde',
  wordCount: 'mots',
  importButton: 'Importer un fichier',
  clearInputButton: 'Vider l\'entrée',
  clearOutputButton: 'Vider la sortie',
  downloadButton: 'Télécharger',
  useExampleButton: 'Utiliser un exemple',
  advancedOptions: 'Options avancées',
  delimiterOptions: 'Options de séparateurs',
  wordDelimiters: 'Séparateurs de mots',
  wordDelimitersHint: 'Caractères utilisés pour séparer les mots',
  sentenceDelimiters: 'Séparateurs de phrases',
  sentenceDelimitersHint: 'Caractères marquant la fin des phrases',
  additionalOptions: 'Options supplémentaires',
  repeatCount: 'Nombre de répétitions',
  repeatCountHint: 'Générer plusieurs versions mélangées',
  shuffleGroup: 'Taille des groupes de mélange',
  shuffleGroupHint: 'Mélanger les mots par groupes de taille spécifiée',
  removeRepeatedWords: 'Supprimer les mots répétés',
  preserveSpacing: 'Conserver les espaces',
  examplesTitle: 'Exemples',
  useThisExample: 'Utiliser cet exemple',
  helpTitle: 'Aide et informations',
  whatIsTitle: 'Qu\'est-ce qu\'un Mélangeur de Texte ?',
  whatIsDescription: 'Un Mélangeur de Texte est un outil capable de randomiser l\'ordre des mots, phrases, lignes, caractères ou paragraphes dans un texte. Il utilise des algorithmes complexes pour garantir des résultats véritablement aléatoires tout en préservant les options de formatage que vous choisissez, comme la casse et la ponctuation.',
  howToUseTitle: 'Comment utiliser cet outil',
  tipsTitle: 'Conseils pour une utilisation optimale',

  modes: {
    word: 'Mots',
    sentence: 'Phrases',
    line: 'Lignes',
    character: 'Caractères',
    paragraph: 'Paragraphes'
  },

  howToUseSteps: [
    'Saisissez ou collez votre texte dans la zone d\'entrée à gauche.',
    'Sélectionnez le mode de mélange et les options nécessaires ci-dessous.',
    'Cliquez sur le bouton "Mélanger" pour générer du texte aléatoire.',
    'Le résultat s\'affichera dans la zone de sortie à droite.',
    'Utilisez les boutons de copie ou de téléchargement pour sauvegarder vos résultats.'
  ],

  tips: [
    'Pour des exercices d\'écriture créative, essayez le mode mots avec conservation de la casse mais suppression de la ponctuation.',
    'Pour tester des mises en page, utilisez le mode phrases avec toutes les options de conservation activées pour maintenir un texte lisible mais aléatoire.',
    'Le mode caractères permet de créer des mots de passe ou codes sécurisés basés sur une entrée textuelle.',
    'La fonction de mélange par groupes vous permet de garder des mots associés ensemble tout en randomisant le texte global.',
    'Besoin de plusieurs variantes ? Définissez un nombre de répétitions pour générer plusieurs versions mélangées en une fois.'
  ],

  examples: {
    basic: {
      title: 'Mélange de mots basique',
      description: 'Randomisation simple des mots en conservant la ponctuation et la casse',
      input: 'Le rapide renard brun saute par-dessus le chien paresseux. Tous les cinq boxeurs magiciens sautent rapidement.',
      output: 'Brun le rapide renard paresseux chien par-dessus saute. Magiciens rapidement sautent cinq boxeurs les tous.'
    },
    sentence: {
      title: 'Mélange de phrases',
      description: 'Randomisation de l\'ordre des phrases complètes',
      input: 'Voici la première phrase. Ceci est la deuxième phrase. Voici la troisième phrase. Enfin, nous avons la quatrième phrase.',
      output: 'Voici la troisième phrase. Voici la première phrase. Enfin, nous avons la quatrième phrase. Ceci est la deuxième phrase.'
    },
    creative: {
      title: 'Réorganisation créative',
      description: 'Génération de nouveaux textes créatifs en mélangeant des mots sans contraintes de format',
      input: 'La poésie est une création rythmique de la beauté des mots. C\'est la révélation de ce qu\'un poète ressent comme intérieur et personnel, mais que le lecteur reconnaît comme sien.',
      output: 'Beauté rythmique est des mots poète révélation mais lecteur personnel intérieur reconnaît comme création sienne la de ce qu\'un ressent là et est une de la les mots.'
    }
  },

  stepLabel: 'Étape',
  emptyInputMessage: 'Veuillez saisir un texte à mélanger',
  errorMessage: 'Erreur lors du mélange, essayez un autre mode ou d\'autres options',
  downloadFileName: 'texte_melange.txt',

  errorMessages: {
    shuffleError: 'Erreur de mélange :',
    sentenceError: 'Erreur de mélange de phrases :',
    copyError: 'Erreur de copie du texte :'
  }
};