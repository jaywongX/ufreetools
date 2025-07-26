export default {
  name: 'Vérificateur de robustesse de mot de passe',
  description: 'Vérifie et analyse la robustesse des mots de passe avec des indicateurs de sécurité détaillés',

  input: {
    title: 'Entrez un mot de passe à vérifier',
    placeholder: 'Saisissez votre mot de passe ici...',
    showPassword: 'Afficher le mot de passe',
    hidePassword: 'Masquer le mot de passe',
    clear: 'Effacer',
    generate: 'Générer un mot de passe',
    check: 'Vérifier la robustesse',
    empty: 'Veuillez saisir un mot de passe pour voir les résultats',
    disclaimer: 'Saisissez n\'importe quel mot de passe pour évaluer sa sécurité. Votre mot de passe ne sera ni stocké ni envoyé à aucun serveur.'
  },

  results: {
    title: 'Évaluation de la robustesse',
    strength: 'Robustesse',
    score: 'Score',
    entropy: 'Valeur d\'entropie',
    crackTime: 'Temps estimé de piratage',
    very_weak: 'Très faible',
    weak: 'Faible',
    fair: 'Moyen',
    good: 'Bon',
    strong: 'Fort',
    very_strong: 'Très fort',
    feedback: 'Retour',
    suggestions: 'Suggestions d\'amélioration',
    warnings: 'Problèmes détectés',
    noWarnings: 'Aucun problème détecté',
    noSuggestions: 'Aucune suggestion disponible'
  },

  details: {
    title: 'Analyse détaillée',
    length: 'Longueur du mot de passe',
    charset: 'Diversité des caractères',
    patterns: 'Modèles utilisés',
    uniqueChars: 'Caractères uniques',
    uppercase: 'Lettres majuscules',
    lowercase: 'Lettres minuscules',
    numbers: 'Chiffres',
    symbols: 'Symboles spéciaux',
    repetitions: 'Répétitions',
    sequences: 'Séquences',
    dictionary: 'Mots du dictionnaire',
    leaked: 'Déjà divulgué',
    reused: 'Modèles réutilisés'
  },

  patterns: {
    dictionary: 'Mot du dictionnaire',
    sequence: 'Caractères consécutifs',
    repeat: 'Caractères répétés',
    spatial: 'Modèle spatial (clavier)',
    date: 'Modèle de date',
    year: 'Modèle d\'année',
    common: 'Mot de passe courant',
    name: 'Modèle de nom',
    reversal: 'Mot inversé',
    leet: 'Substitution Leet',
    predictable: 'Modèle prévisible'
  },

  crackTimes: {
    instantly: 'Instantanément',
    seconds: 'En quelques secondes',
    minutes: 'En quelques minutes',
    hours: 'En quelques heures',
    days: 'En quelques jours',
    months: 'En quelques mois',
    years: 'En quelques années',
    centuries: 'En quelques siècles',
    forever: 'Pratiquement jamais'
  },

  suggestions: {
    addWords: 'Ajoutez plus de mots ou caractères',
    addSymbols: 'Incluez des symboles',
    addNumbers: 'Incluez des chiffres',
    upperLower: 'Mélangez majuscules et minuscules',
    avoidPatterns: 'Évitez les caractères consécutifs ou répétés sur le clavier',
    avoidCommon: 'Évitez les mots de passe basés sur le dictionnaire ou courants, même avec des substitutions (comme remplacer "e" par "3")',
    avoidPersonal: 'Évitez les informations personnelles',
    avoidDictionary: 'Évitez les mots du dictionnaire',
    usePassphrase: 'Utilisez des combinaisons de mots non liés ou des acronymes pour créer des mots de passe forts et mémorables',
    increaseLonger: 'Augmentez la longueur du mot de passe',
    avoidSequence: 'Évitez les séquences',
    avoidRepeated: 'Évitez les caractères répétés',
    avoidDates: 'Évitez les dates et années',
    addMoreChars: 'Augmentez la longueur à au moins 12 caractères - chaque caractère supplémentaire multiplie la difficulté de piratage',
    addTypes: 'Ajoutez {types} pour augmenter la complexité',
    useManager: 'Utilisez un gestionnaire de mots de passe pour générer et gérer des mots de passe forts uniques pour chaque site'
  },

  generator: {
    title: 'Générateur de mots de passe',
    length: 'Longueur',
    options: 'Options',
    uppercase: 'Inclure majuscules',
    lowercase: 'Inclure minuscules',
    numbers: 'Inclure chiffres',
    symbols: 'Inclure symboles',
    excludeSimilar: 'Exclure caractères similaires',
    excludeAmbiguous: 'Exclure caractères ambigus',
    generate: 'Générer mot de passe',
    passphrase: 'Générer phrase secrète',
    wordCount: 'Nombre de mots',
    separator: 'Séparateur de mots',
    capitalize: 'Majuscule initiale',
    includeNumber: 'Inclure chiffre',
    includeSymbol: 'Inclure symbole'
  },

  common: {
    copy: 'Copier dans presse-papiers',
    save: 'Sauvegarder historique',
    clear: 'Effacer',
    refresh: 'Actualiser',
    copied: 'Copié dans presse-papiers',
    saved: 'Sauvegardé dans historique',
    history: 'Historique',
    noHistory: 'Aucun historique disponible',
    common: 'Commun'
  },

  breach: {
    title: 'Vérification de fuite de données',
    description: 'Vérifiez si votre mot de passe apparaît dans des fuites de données connues',
    disclaimer: 'Votre mot de passe ne sera jamais envoyé sur le réseau. Seul un hachage partiel est vérifié.',
    checkButton: 'Vérifier les fuites',
    safe: 'Aucune fuite connue détectée',
    found: 'Détecté dans {count} fuites de données !',
    warning: 'Ce mot de passe a été exposé dans une fuite et ne devrait plus être utilisé.',
    checking: 'Vérification des fuites...'
  },

  settings: {
    title: 'Paramètres',
    algorithm: 'Algorithme de robustesse',
    history: 'Historique des sauvegardes',
    clearHistory: 'Effacer l\'historique',
    breachCheck: 'Vérification des fuites',
    timeout: 'Effacement après délai',
    timeoutDuration: 'Durée du délai (secondes)',
    clipboard: 'Effacer presse-papiers après copie',
    language: 'Langue'
  },

  score: {
    none: 'Aucun score'
  },

  descriptions: {
    none: 'Impossible d\'évaluer la robustesse',
    veryWeak: 'Ce mot de passe est très facile à deviner ou pirater, extrêmement peu sécurisé',
    weak: 'Ce mot de passe est peu sécurisé et pourrait être facilement piraté',
    fair: 'Ce mot de passe offre une sécurité modérée mais peut être amélioré',
    good: 'Ce mot de passe est sécurisé et difficile à pirater',
    veryStrong: 'Ce mot de passe est très sécurisé et quasi impossible à pirater'
  },

  length: {
    none: 'Aucun',
    tooShort: 'Trop court',
    acceptable: 'Acceptable',
    good: 'Bon',
    excellent: 'Excellent'
  },

  lengthMessage: {
    none: 'Aucun mot de passe saisi',
    needMore: 'Au moins {min} caractères requis',
    better: '{min} caractères ou plus seraient plus sécurisés',
    good: 'Bien ! Les mots de passe longs sont plus difficiles à pirater',
    excellent: 'Longueur excellente !'
  },

  complexity: {
    none: 'Aucun',
    veryLow: 'Très faible',
    fair: 'Moyen',
    good: 'Bon',
    excellent: 'Excellent'
  },

  issues: {
    tooShort: 'Mot de passe trop court (moins de 8 caractères)',
    noUppercase: 'Aucune majuscule',
    noLowercase: 'Aucune minuscule',
    noNumbers: 'Aucun chiffre',
    noSymbols: 'Aucun symbole spécial',
    hasSequence: 'Contient des séquences courantes (comme "qwerty" ou "123456")',
    hasRepeated: 'Contient des caractères répétés (comme "aaa" ou "111")',
    commonPassword: 'Mot de passe courant ou facile à deviner'
  },

  characters: 'caractères',

  tips: {
    title: 'Conseils de sécurité',
    length: 'Utilisez des mots de passe d\'au moins 12 caractères',
    mix: 'Mélangez majuscules, minuscules, chiffres et symboles',
    avoid: 'Évitez mots courants, phrases ou informations personnelles',
    unique: 'N\'utilisez pas le même mot de passe sur plusieurs sites',
    manager: 'Envisagez un gestionnaire de mots de passe pour générer/stocker des mots de passe complexes'
  }
};