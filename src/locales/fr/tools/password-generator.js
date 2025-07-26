export default {
  name: 'Générateur de mots de passe',
  description: 'Génère des mots de passe sécurisés et aléatoires avec options personnalisables',

  options: {
    length: 'Longueur du mot de passe',
    quantity: 'Nombre de mots de passe',
    includeLowercase: 'Minuscules (a-z)',
    includeUppercase: 'Majuscules (A-Z)',
    includeNumbers: 'Chiffres (0-9)',
    includeSymbols: 'Symboles (!@#$%)',
    excludeSimilar: 'Exclure caractères similaires (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Exclure symboles ambigus ({}<>[]()\'"`\\)',
    requireAll: 'Exiger tous les types de caractères',
    noConsecutive: 'Pas de caractères similaires consécutifs',
    advancedOptions: 'Options avancées',
    characterTypes: 'Types de caractères'
  },

  presets: {
    standard: 'Standard',
    strong: 'Fort',
    memorable: 'Mémorable',
    pin: 'Code PIN',
    pronounceable: 'Prononçable',
    custom: 'Personnalisé',
    easyToRemember: 'Facile à retenir',
    balanced: 'Équilibré',
    secure: 'Sécurisé'
  },

  strength: {
    title: 'Robustesse du mot de passe',
    veryWeak: 'Très faible',
    weak: 'Faible',
    medium: 'Moyen',
    strong: 'Fort',
    veryStrong: 'Très fort',
    unknown: 'Inconnu'
  },

  actions: {
    generate: 'Générer mot de passe',
    regenerate: 'Regénérer',
    copy: 'Copier',
    copyAll: 'Tout copier',
    clear: 'Effacer',
    expand: 'Développer',
    collapse: 'Réduire'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    allCopied: 'Tous les mots de passe copiés !',
    generated: 'Mots de passe générés avec succès',
    invalidOptions: 'Veuillez sélectionner au moins un type de caractère',
    tooManyPasswords: 'Nombre maximum de mots de passe : 100',
    clickToGenerate: 'Cliquez sur le bouton ci-dessus pour générer'
  },

  errors: {
    copyFailed: 'Échec de la copie : ',
    copyFailedManual: 'Échec - veuillez copier manuellement'
  },

  results: {
    title: 'Mots de passe générés'
  },

  units: {
    passwords: 'mots de passe'
  },

  tips: {
    title: 'Conseils de sécurité',
    useLength: 'Utilisez des mots de passe suffisamment longs (12+ caractères)',
    useDifferent: 'Utilisez des mots de passe différents pour chaque site/service',
    changeRegularly: 'Changez régulièrement les mots de passe des comptes importants',
    useManager: 'Utilisez un gestionnaire de mots de passe pour stocker vos mots de passe',
    use2FA: 'Activez l\'authentification à deux facteurs pour une protection supplémentaire'
  }
};