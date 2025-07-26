export default {
  name: 'Testeur d\'expressions régulières',
  description: 'Testez et déboguez des expressions régulières avec surbrillance et explications en temps réel',

  actions: {
    test: 'Tester',
    clear: 'Effacer',
    showExamples: 'Afficher les exemples',
    hideExamples: 'Masquer les exemples',
    copy: 'Copier'
  },

  sections: {
    examples: 'Exemples courants d\'expressions régulières',
    pattern: 'Modèle d\'expression régulière',
    input: 'Chaîne de test',
    results: 'Résultats de correspondance',
    flags: 'Drapeaux'
  },

  flags: {
    g: 'Correspondance globale (g)',
    i: 'Insensible à la casse (i)',
    m: 'Mode multiligne (m)',
    s: 'Point correspond à tout (s)',
    u: 'Mode Unicode (u)',
    y: 'Correspondance adhésive (y)'
  },

  errors: {
    emptyRegex: 'Veuillez saisir une expression régulière',
    emptyTestString: 'Veuillez saisir du texte à tester',
    invalidRegex: 'Expression régulière invalide'
  },

  messages: {
    matchesFound: '{count} correspondances trouvées',
    noMatches: 'Aucune correspondance trouvée',
    copied: 'Copié dans le presse-papiers !'
  },

  placeholders: {
    pattern: 'Saisissez un modèle d\'expression régulière',
    testString: 'Saisissez du texte à tester'
  },

  options: {
    flags: 'Drapeaux',
    global: 'Correspondance globale (g)',
    caseInsensitive: 'Insensible à la casse (i)',
    multiline: 'Mode multiligne (m)',
    dotAll: 'Point correspond à tout (s)',
    unicode: 'Mode Unicode (u)',
    sticky: 'Correspondance adhésive (y)'
  },

  labels: {
    pattern: 'Expression régulière',
    testString: 'Chaîne de test',
    matches: 'Résultats',
    groups: 'Groupes',
    noMatches: 'Aucune correspondance'
  },

  tips: {
    title: 'Conseils d\'utilisation',
    pattern: 'Ne pas inclure les barres obliques entourant le modèle d\'expression régulière.',
    flags: 'Utilisez les drapeaux pour modifier le comportement de correspondance (g : global, i : insensible à la casse, m : multiligne).',
    examples: 'Cliquez sur "Afficher les exemples" pour voir des modèles d\'expressions régulières courants.',
    testing: 'Après avoir saisi un modèle et une chaîne de test, cliquez sur "Tester" pour voir les correspondances.'
  },

  match: 'Correspondance',
  position: 'Position',
  group: 'Groupe',
  resultsWillAppearHere: 'Les résultats de correspondance apparaîtront ici...',
  regexError: 'Erreur d\'expression régulière : {message}',
  emailAddress: 'Adresse email',
  phoneNumber: 'Numéro de téléphone (Chine)',
  ipAddress: 'Adresse IP',
  dateFormat: 'Date (aaaa-mm-jj)',
  chineseCharacters: 'Caractères chinois',
  phoneNumberExample: 'Contact : 13912345678\nMême numéro WeChat : 18887654321\nTéléphone fixe : 010-12345678',
  urlExample: 'Visitez https://example.com\nou http://www.domain.org/path?query=value',
  ipAddressExample: 'Adresse serveur : 192.168.1.1\nDNS : 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Date de début : 2023-01-15\nDate de fin : 2023-02-28\nDate invalide : 2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
};