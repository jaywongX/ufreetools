export default {
  name: 'Encodeur/Décodeur URL',
  description: 'L\'encodage URL convertit les caractères spéciaux en un format acceptable pour les URL, utilisé pour traiter les paramètres d\'URL et les soumissions de formulaires.',

  options: {
    operationType: 'Type d\'opération',
    encodeMode: 'Mode d\'encodage'
  },

  encodeOptions: {
    standard: 'Encodage standard (encodeURI)',
    component: 'Encodage composant (encodeURIComponent)',
    full: 'Encodage complet (tous caractères)',
    standardDescription: 'Encode une URL entière en préservant les caractères de structure',
    componentDescription: 'Adapté aux paramètres d\'URL, encode tous les caractères spéciaux',
    fullDescription: 'Encode tous les caractères non alphanumériques, y compris les espaces (convertis en %20 plutôt que +)'
  },

  actions: {
    encode: 'Encoder URL',
    decode: 'Décoder URL',
    clear: 'Effacer',
    copyResult: 'Copier le résultat'
  },

  input: {
    textToEncode: 'Texte à encoder',
    textToDecode: 'Texte à décoder',
    encodePlaceholder: 'Entrez une URL ou du texte à encoder...',
    decodePlaceholder: 'Entrez une URL ou du texte à décoder...'
  },

  output: {
    encodeResult: 'Résultat encodé',
    decodeResult: 'Résultat décodé'
  },

  messages: {
    copied: '(Copié ',
    error: 'Erreur : {message}',
    decodeError: 'Impossible de décoder : "{text}"',
    copyFailed: 'Échec de la copie, veuillez copier manuellement'
  },

  referenceTable: {
    title: 'Table de référence des encodages URL courants',
    showTable: 'Afficher la table',
    hideTable: 'Masquer la table',
    character: 'Caractère',
    encoded: 'Encodage URL',
    description: 'Description',
    descriptions: {
      space: 'Espace',
      exclamation: 'Point d\'exclamation',
      doubleQuote: 'Guillemet double',
      hash: 'Dièse',
      dollar: 'Symbole dollar',
      percent: 'Pourcentage',
      ampersand: 'Esperluette',
      singleQuote: 'Guillemet simple',
      leftParenthesis: 'Parenthèse gauche',
      rightParenthesis: 'Parenthèse droite',
      asterisk: 'Astérisque',
      plus: 'Plus',
      comma: 'Virgule',
      slash: 'Barre oblique',
      colon: 'Deux-points',
      semicolon: 'Point-virgule',
      lessThan: 'Inférieur à',
      equals: 'Égal',
      greaterThan: 'Supérieur à',
      questionMark: 'Point d\'interrogation',
      at: 'Arobase',
      leftBracket: 'Crochet gauche',
      backslash: 'Barre oblique inverse',
      rightBracket: 'Crochet droit',
      caret: 'Accent circonflexe',
      backtick: 'Accent grave',
      leftBrace: 'Accolade gauche',
      pipe: 'Barre verticale',
      rightBrace: 'Accolade droite',
      tilde: 'Tilde',
      chinese: 'Caractères chinois en UTF-8'
    }
  }
};