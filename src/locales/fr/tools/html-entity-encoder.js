export default {
  name: 'Encodeur d\'entités HTML',
  description: 'Convertir entre du texte HTML et des entités encodées',
  title: 'Encodeur/Décodeur d\'entités HTML',
  intro: 'L\'encodage d\'entités HTML permet de convertir des caractères spéciaux en un format sécurisé pour le HTML, souvent utilisé pour prévenir les attaques XSS ou afficher le code source HTML.',

  operation: {
    title: 'Type d\'opération',
    encode: 'Encodage d\'entités HTML',
    decode: 'Décodage d\'entités HTML'
  },

  mode: {
    title: 'Mode d\'encodage',
    named: 'Entités nommées (&amp;lt;)',
    decimal: 'Entités décimales (&amp;#60;)',
    hex: 'Entités hexadécimales (&amp;#x3C;)',
    full: 'Encodage complet (tous les caractères)'
  },

  input: {
    encodeTitle: 'Texte à encoder',
    decodeTitle: 'Texte à décoder',
    encodePlaceholder: 'Entrez le HTML ou texte à encoder...',
    decodePlaceholder: 'Entrez le texte avec entités HTML à décoder...',
    clear: 'Effacer'
  },

  output: {
    encodeTitle: 'Résultat encodé',
    decodeTitle: 'Résultat décodé',
    copy: 'Copier le résultat',
    copied: '(Copié',
    preview: 'Aperçu',
    showSource: 'Afficher le code source'
  },

  reference: {
    title: 'Référence d\'entités',
    commonReferenceTables: 'Tableaux de référence des entités HTML courantes',
    show: 'Afficher le tableau',
    hide: 'Masquer le tableau',
    description: {
      named: 'Utilise le format nommé comme &amp;lt; pour &lt; (uniquement pour les entités HTML courantes)',
      decimal: 'Utilise le format décimal comme &amp;#60; pour &lt;',
      hex: 'Utilise le format hexadécimal comme &amp;#x3C; pour &lt;',
      full: 'Encode tous les caractères non alphanumériques, y compris les espaces, sauts de ligne, etc.'
    },
    table: {
      char: 'Caractère',
      named: 'Entité nommée',
      decimal: 'Entité décimale',
      description: 'Description'
    },
    entities: {
      lt: 'Signe inférieur à',
      gt: 'Signe supérieur à',
      amp: 'Et commercial',
      quot: 'Guillemet double',
      apos: 'Guillemet simple',
      copy: 'Symbole copyright',
      reg: 'Marque déposée',
      trade: 'Symbole marque commerciale',
      nbsp: 'Espace insécable',
      cent: 'Symbole cent',
      pound: 'Symbole livre sterling',
      euro: 'Symbole euro',
      yen: 'Symbole yen/yuan',
      sect: 'Symbole section',
      minus: 'Signe moins',
      times: 'Signe multiplication',
      divide: 'Signe division',
      deg: 'Symbole degré',
      plusmn: 'Signe plus-moins',
      frac14: 'Un quart'
    }
  },

  messages: {
    copySuccess: 'Copié dans le presse-papiers',
    copyError: 'Échec de la copie, veuillez copier manuellement',
    encodeSuccess: 'Encodage terminé',
    decodeSuccess: 'Décodage terminé',
    invalidInput: 'Texte d\'entrée invalide'
  }
};