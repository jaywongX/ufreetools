export default {
    name: 'Obfuscateur JavaScript',
    description: 'Protégez votre code JavaScript grâce à diverses techniques d\'obfuscation',
    input: {
      title: 'JavaScript en entrée',
      placeholder: 'Saisissez ou collez votre code JavaScript ici',
      loadSample: 'Charger un exemple',
      clearInput: 'Effacer la saisie',
      uploadFile: 'Téléverser un fichier JS'
    },
    output: {
      title: 'Code obfusqué',
      copied: 'Code copié dans le presse-papiers',
      download: 'Télécharger le code obfusqué',
      copyOutput: 'Copier le code',
      clearOutput: 'Effacer la sortie'
    },
    options: {
      title: 'Options d\'obfuscation',
      compact: 'Compresser le code',
      selfDefending: 'Auto-défense',
      controlFlowFlattening: 'Aplatissement du flux de contrôle',
      controlFlowFlatteningThreshold: 'Seuil d\'aplatissement du flux de contrôle',
      deadCodeInjection: 'Injection de code mort',
      deadCodeInjectionThreshold: 'Seuil d\'injection de code mort',
      debugProtection: 'Protection contre le débogage',
      debugProtectionInterval: 'Intervalle de protection contre le débogage',
      disableConsoleOutput: 'Désactiver la sortie console',
      domainLock: 'Verrouillage de domaine',
      domainLockRedirectUrl: 'URL de redirection pour verrouillage de domaine',
      identifierNamesGenerator: 'Générateur de noms d\'identifiants',
      identifiersPrefix: 'Préfixe des identifiants',
      renameGlobals: 'Renommer les variables globales',
      reservedNames: 'Noms réservés',
      reservedStrings: 'Chaînes réservées',
      rotateStringArray: 'Rotation du tableau de chaînes',
      seed: 'Graine aléatoire',
      shuffleStringArray: 'Mélanger le tableau de chaînes',
      sourceMap: 'Source map',
      sourceMapBaseUrl: 'URL de base de la source map',
      sourceMapFileName: 'Nom du fichier de source map',
      splitStrings: 'Fractionner les chaînes',
      splitStringsChunkLength: 'Longueur des fragments de chaînes',
      stringArray: 'Tableau de chaînes',
      stringArrayEncoding: 'Encodage du tableau de chaînes',
      stringArrayThreshold: 'Seuil du tableau de chaînes',
      target: 'Cible',
      transformObjectKeys: 'Transformer les clés d\'objet',
      unicodeEscapeSequence: 'Séquence d\'échappement Unicode'
    },
    presets: {
      title: 'Préréglages',
      low: 'Obfuscation faible',
      medium: 'Obfuscation moyenne',
      high: 'Obfuscation élevée',
      custom: 'Personnalisé'
    },
    actions: {
      obfuscate: 'Obfusquer',
      reset: 'Réinitialiser les options',
      savePreset: 'Enregistrer le préréglage',
      loadPreset: 'Charger un préréglage'
    },
    messages: {
      obfuscationSuccess: 'Code obfusqué avec succès',
      obfuscationFailed: 'Échec de l\'obfuscation : {error}',
      emptyCode: 'Veuillez saisir du code JavaScript à obfusquer',
      uploadSuccess: 'Fichier téléversé avec succès',
      presetSaved: 'Préréglage enregistré',
      presetLoaded: 'Préréglage chargé'
    },
    help: {
      title: 'Aide sur les options',
      stringArrayDesc: 'Déplace les littéraux de chaîne dans un tableau spécial et les remplace par des appels de tableau',
      controlFlowDesc: 'Active l\'aplatissement du flux de contrôle pour rendre la logique plus difficile à comprendre',
      deadCodeDesc: 'Injecte du code mort aléatoire pour tromper les attaquants',
      selfDefendingDesc: 'Rend le code résistant aux modifications de formatage'
    }
  }