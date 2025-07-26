export default {
  name: 'Comparaison de code',
  description: 'Compare deux codes et met en évidence les différences',

  options: {
    title: 'Options',
    ignoreCase: 'Ignorer la casse',
    ignoreWhitespace: 'Ignorer les espaces',
    trimWhitespace: 'Supprimer les espaces',
    diffMode: 'Mode de comparaison',
    diffModes: {
      chars: 'Caractères',
      words: 'Mots',
      lines: 'Lignes',
      sentences: 'Phrases',
      json: 'JSON'
    },
    diffStyle: 'Style d\'affichage',
    diffStyles: {
      split: 'Vue séparée',
      inline: 'Vue intégrée'
    },
    context: 'Nombre de lignes de contexte',
    wrap: 'Retour à la ligne automatique',
    languages: {
      plaintext: 'Texte brut',
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      json: 'JSON'
    }
  },

  inputs: {
    original: 'Code original',
    modified: 'Code modifié',
    placeholderOriginal: 'Saisissez le code original ici...',
    placeholderModified: 'Saisissez le code modifié ici...'
  },

  actions: {
    compare: 'Comparer',
    clear: 'Effacer',
    swap: 'Inverser',
    copy: 'Copier les différences',
    download: 'Télécharger les différences',
    upload: 'Téléverser un fichier'
  },

  results: {
    title: 'Résultats de comparaison',
    changes: 'Modifications',
    additions: 'Ajouts',
    deletions: 'Suppressions',
    unchanged: 'Non modifié',
    noChanges: 'Aucune différence trouvée - les textes sont identiques',
    loading: 'Génération des différences...'
  },

  upload: {
    originalFile: 'Fichier original',
    modifiedFile: 'Fichier modifié',
    dropOriginal: 'Glissez-déposez le fichier original ou cliquez pour parcourir',
    dropModified: 'Glissez-déposez le fichier modifié ou cliquez pour parcourir'
  },

  messages: {
    copied: 'Copié dans le presse-papiers !',
    inputRequired: 'Veuillez saisir du texte dans les deux champs',
    diffGenerated: 'Différences générées avec succès',
    error: 'Erreur lors de la génération des différences',
    fileError: 'Erreur lors de la lecture du fichier'
  },

  tips: {
    title: 'Conseils d\'utilisation',
    compareOptions: 'Ajustez les options pour répondre à vos besoins - ignorer les espaces est utile pour les comparaisons de code.',
    diffModes: 'Les différents modes offrent différents niveaux de détail.',
    largeFiles: 'Pour les gros fichiers, la comparaison par ligne est plus efficace.',
    jsonMode: 'Utilisez le mode JSON pour les données structurées - il normalise et compare les structures d\'objets.'
  }
};