export default {
    name: 'Filtre de mots sensibles',
    description: 'Détecte et filtre les mots sensibles dans les textes, avec support de dictionnaire personnalisé et règles de filtrage',
    input: {
      title: 'Texte d\'entrée',
      placeholder: 'Entrez le texte à analyser...',
      loadSample: 'Charger un exemple',
      clearInput: 'Effacer l\'entrée',
      uploadFile: 'Importer un fichier texte'
    },
    output: {
      title: 'Texte filtré',
      original: 'Texte original',
      filtered: 'Texte filtré',
      statistics: 'Statistiques',
      copyOutput: 'Copier le texte filtré',
      clearOutput: 'Effacer la sortie',
      download: 'Télécharger le texte filtré'
    },
    options: {
      title: 'Options de filtrage',
      filterMode: 'Mode de filtrage',
      caseSensitive: 'Sensible à la casse',
      wholeWordOnly: 'Mots complets uniquement',
      customReplacement: 'Remplacement personnalisé',
      replacementChar: 'Caractère de remplacement',
      highlightWords: 'Mots sensibles en surbrillance',
      customDictionary: 'Dictionnaire personnalisé',
      importDictionary: 'Importer un dictionnaire',
      exportDictionary: 'Exporter un dictionnaire'
    },
    filterModes: {
      replace: 'Remplacer les mots sensibles',
      highlight: 'Mettre en évidence les mots sensibles',
      remove: 'Supprimer les mots sensibles',
      detect: 'Détection seule'
    },
    dictionary: {
      title: 'Dictionnaire',
      add: 'Ajouter un mot',
      remove: 'Supprimer',
      clear: 'Vider le dictionnaire',
      wordInput: 'Entrez un mot à ajouter',
      categories: 'Catégories',
      severity: 'Gravité',
      bulkAdd: 'Ajout en masse',
      search: 'Rechercher dans le dictionnaire'
    },
    categories: {
      profanity: 'Grossièretés',
      slurs: 'Injures',
      adult: 'Contenu adulte',
      offensive: 'Contenu offensant',
      violence: 'Violence',
      discrimination: 'Discrimination',
      personal: 'Informations personnelles',
      custom: 'Personnalisé'
    },
    severityLevels: {
      low: 'Faible',
      medium: 'Moyen',
      high: 'Élevé',
      critical: 'Critique'
    },
    statistics: {
      totalWords: 'Nombre total de mots',
      sensitiveWords: 'Mots sensibles détectés',
      uniqueSensitiveWords: 'Mots sensibles uniques',
      severityBreakdown: 'Répartition par gravité',
      categoryBreakdown: 'Répartition par catégorie',
      cleanlinessScore: 'Score de propreté'
    },
    filterOptions: {
      title: 'Mode de filtrage',
      modes: {
        asterisk: 'Remplacer par *',
        custom: 'Caractère de remplacement personnalisé',
        remove: 'Supprimer les mots sensibles'
      },
      replaceChar: {
        title: 'Caractère de remplacement',
        placeholder: 'Entrez un caractère de remplacement'
      }
    },
    customWords: {
      title: 'Dictionnaire personnalisé',
      addWord: 'Ajouter un mot',
      addPrompt: 'Entrez un mot sensible à ajouter :',
      removeWord: 'Supprimer'
    },
    actions: {
      filter: 'Filtrer',
      reset: 'Réinitialiser',
      processing: 'Traitement en cours...',
      clearAll: 'Tout effacer',
      copyFiltered: 'Copier le texte filtré',
      downloadReport: 'Télécharger le rapport',
      resetSettings: 'Réinitialiser les paramètres'
    },
    results: {
      title: 'Résultats du filtrage',
      tabs: {
        filteredResult: 'Résultat filtré',
        detectionReport: 'Rapport de détection'
      },
      filteredText: {
        title: 'Texte filtré',
        copy: 'Copier le résultat',
        empty: 'Aucun résultat à afficher'
      },
      statistics: {
        detectedCount: 'Nombre de mots sensibles détectés',
        retentionRate: 'Taux de rétention du texte',
        totalWords: 'Nombre total de mots'
      },
      detectedWords: {
        title: 'Mots sensibles détectés',
        empty: 'Aucun mot sensible détecté'
      }
    },
    messages: {
      copied: 'Copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      noInput: 'Veuillez entrer un texte à filtrer',
      inputTooLong: 'Texte d\'entrée trop long',
      wordAdded: 'Mot ajouté au dictionnaire',
      wordExists: 'Ce mot existe déjà dans le dictionnaire',
      wordRemoved: 'Mot supprimé du dictionnaire',
      filterSuccess: 'Filtrage réussi',
      noSensitiveWords: 'Aucun mot sensible trouvé',
      dictionaryCleared: 'Dictionnaire vidé',
      dictionaryImported: 'Dictionnaire importé',
      dictionaryExported: 'Dictionnaire exporté',
      emptyText: 'Veuillez entrer un texte à filtrer'
    },
    article: {
      title: 'Filtre de mots sensibles : Outil complet de filtrage de contenu',
      functionality: {
        title: 'Fonctionnalités',
        description: '<strong>Filtre de mots sensibles</strong> est un outil puissant conçu pour identifier et filtrer les contenus inappropriés. Il utilise des algorithmes avancés pour détecter les mots problématiques et les filtrer selon vos préférences, avec support de dictionnaire personnalisé et statistiques détaillées.'
      },
      useCases: {
        title: 'Cas d\'utilisation',
        list: [
          '<strong>Modération de contenu web</strong> : Filtrage automatique des commentaires et publications utilisateur.',
          '<strong>Revue de matériel éducatif</strong> : Vérification des documents pédagogiques.',
          '<strong>Filtrage des communications clients</strong> : Maintenir un langage professionnel.',
          '<strong>Gestion des réseaux sociaux</strong> : Conformité aux politiques des plateformes.',
          '<strong>Préparation de données textuelles</strong> : Nettoyage des ensembles de données.',
          '<strong>Conformité des communications d\'entreprise</strong> : Respect des politiques linguistiques.'
        ]
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            question: 'Quelle est la précision de la détection ?',
            answer: '<strong>La détection</strong> utilise des algorithmes précis, mais l\'analyse contextuelle reste complexe. Le dictionnaire personnalisable améliore la précision.'
          },
          {
            question: 'Puis-je créer mon propre dictionnaire ?',
            answer: 'Oui, le <strong>dictionnaire personnalisé</strong> permet d\'ajouter des mots spécifiques à vos besoins.'
          },
          {
            question: 'Quels modes de filtrage sont disponibles ?',
            answer: 'Plusieurs <strong>modes de filtrage</strong> : remplacement par *, caractère personnalisé ou suppression complète.'
          },
          {
            question: 'Support multilingue ?',
            answer: 'Oui, le <strong>filtre multilingue</strong> fonctionne avec différents systèmes d\'écriture.'
          },
          {
            question: 'Gestion des textes volumineux ?',
            answer: 'Pour le <strong>filtrage en masse</strong>, collez simplement le texte. Les très grands documents peuvent nécessiter un traitement par segments.'
          }
        ]
      },
      tutorial: {
        title: 'Guide étape par étape',
        steps: [
          '<strong>Entrée du texte</strong> : Collez le texte à filtrer.',
          '<strong>Configuration</strong> : Choisissez le mode de filtrage.',
          '<strong>Dictionnaire</strong> (optionnel) : Ajoutez des mots spécifiques.',
          '<strong>Filtrage</strong> : Lancez l\'analyse.',
          '<strong>Résultats</strong> : Consultez le texte filtré et les statistiques.',
          '<strong>Export</strong> : Copiez ou enregistrez les résultats.'
        ]
      }
    }
  }