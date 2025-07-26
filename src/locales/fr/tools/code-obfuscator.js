export default {
  name: 'Obfuscateur de code',
  description: 'Obfusquez du code JavaScript et CSS pour améliorer la sécurité et protéger la propriété intellectuelle',

  languages: {
    title: 'Sélectionnez le langage',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Options d\'obfuscation',
    javascript: {
      compact: 'Sortie compacte (supprime les espaces)',
      controlFlowFlattening: 'Aplatissement du flux de contrôle',
      deadCodeInjection: 'Injection de code inutile',
      debugProtection: 'Protection contre le débogage',
      selfDefending: 'Auto-défense (prévention du formatage)',
      stringArray: 'Conversion des chaînes en tableau',
      renameGlobals: 'Renommage des variables globales',
      renameProperties: 'Renommage des propriétés',
      mangle: 'Obfuscation des noms de variables',
      stringArrayEncoding: 'Encodage du tableau de chaînes',
      stringArrayThreshold: 'Seuil du tableau de chaînes',
      unicodeEscapeSequence: 'Séquence d\'échappement Unicode'
    },
    css: {
      compact: 'Sortie compacte',
      renameSelectors: 'Renommage des sélecteurs',
      preserveImportant: 'Conserver !important',
      restructure: 'Restructuration des règles',
      keepVendorPrefixes: 'Conserver les préfixes navigateurs',
      removeComments: 'Supprimer les commentaires'
    }
  },

  input: {
    title: 'Code source',
    placeholder: 'Entrez le code à obfusquer ici...',
    clear: 'Effacer',
    paste: 'Coller',
    upload: 'Téléverser un fichier',
    inputObfuscatorCode: 'Veuillez entrer le code à obfusquer',
  },

  output: {
    title: 'Résultat de l\'obfuscation',
    placeholder: 'Le code obfusqué apparaîtra ici...',
    copy: 'Copier',
    download: 'Télécharger',
    stats: {
      original: 'Taille originale',
      obfuscated: 'Taille après obfuscation',
      ratio: 'Taux de compression'
    },
    increase: 'Augmentation',
    decrease: 'Diminution',
  },

  actions: {
    obfuscate: 'Obfusquer',
    clear: 'Effacer'
  },

  messages: {
    copied: 'Copié dans le presse-papiers',
    copyFailed: 'Échec de la copie, veuillez copier manuellement',
    processing: 'Traitement en cours...',
    error: 'Erreur lors de l\'obfuscation',
    invalidInput: 'Code source invalide',
    uploadError: 'Échec du téléversement du fichier',
    fileTooLarge: 'Fichier trop volumineux (max 2MB)'
  },

  tips: {
    title: 'Conseils d\'utilisation',
    tip1: 'L\'obfuscation peut augmenter la difficulté de rétro-ingénierie mais ne peut pas empêcher complètement le décodage',
    tip2: 'Activer plus d\'options d\'obfuscation augmentera la taille du code et son surcoût d\'exécution',
    tip3: 'Certaines options d\'obfuscation peuvent affecter la capacité à déboguer le code',
    tip4: 'Il est recommandé de sauvegarder le code original avant obfuscation',
    tip5: 'Pour les grands projets, il est recommandé d\'utiliser des outils d\'obfuscation professionnels'
  },

  demo: {
    title: 'Exemples',
    function: 'Exemple de fonction',
    class: 'Exemple de classe',
    simple: 'Style simple',
    animation: 'Effet d\'animation',
  }
};
           