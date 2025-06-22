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
    },
    article: {
      title: "Outil de comparaison de code : Comprendre efficacement les modifications",
      features: {
        title: "Comprendre la comparaison de code",
        description: "Cet <strong>outil de comparaison de code</strong> est conçu pour les développeurs et programmeurs comme un <strong>outil de comparaison avancé</strong> permettant d'identifier les différences entre deux codes. Ce puissant <strong>détecteur de différences</strong> met en évidence les ajouts, suppressions et modifications entre fichiers texte, apportant une valeur inestimable aux revues de code, contrôles de version et processus de débogage.<br><br>Notre <strong>outil de comparaison</strong> propose plusieurs modes (caractères, mots, lignes, phrases et analyse JSON dédiée) avec deux options d'affichage (vue séparée ou intégrée) pour s'adapter à différents besoins. Que vous travailliez sur du code source, des fichiers de configuration ou tout contenu textuel, cet <strong>outil de comparaison</strong> fournit une analyse précise des changements entre versions.",
        useCases: {
          title: "Cas d'utilisation réels",
          items: [
            "Développeurs suivant les <strong>modifications</strong> entre versions d'une application pour identifier des bugs",
            "Chefs d'équipe effectuant des <strong>revues de code</strong> avant d'approuver des modifications",
            "Ingénieurs DevOps comparant des <strong>fichiers de configuration</strong> entre environnements",
            "Rédacteurs techniques comparant des <strong>brouillons de documentation</strong>",
            "Analystes de données examinant des <strong>structures JSON</strong> ou exports",
            "Étudiants comparant leurs <strong>solutions de code</strong> avec des implémentations de référence"
          ]
        }
      },
      faq: {
        title: "FAQ sur l'analyse des différences",
        items: [
          {
            question: "Quelle différence entre comparaison par caractère et par ligne ?",
            answer: "La comparaison par caractère identifie les changements au niveau individuel, idéal pour détecter des modifications subtiles. La comparaison par ligne traite chaque ligne comme une unité, plus efficace pour les gros fichiers et fournissant un meilleur aperçu des modifications majeures - c'est le mode par défaut de nombreux systèmes de contrôle de version."
          },
          {
            question: "L'outil peut-il gérer des fichiers volumineux ?",
            answer: "Oui, l'outil est optimisé pour les gros fichiers. Pour les très grandes bases de code, nous recommandons le mode par ligne. Des techniques intelligentes maintiennent la réactivité, même si pour les fichiers de plusieurs Mo, il peut être préférable de se concentrer sur des sections spécifiques."
          },
          {
            question: "Comment fonctionne le mode JSON ?",
            answer: "Le mode JSON analyse d'abord les entrées comme objets JSON, normalisant leur structure (espaces, indentations, ordre des propriétés) avant d'identifier les différences réelles. Deux objets JSON avec les mêmes données mais des formats différents seront considérés identiques. Ce mode est particulièrement utile pour comparer des réponses API, configurations ou analyses de données où le contenu sémantique prime sur la représentation textuelle exacte."
          },
          {
            question: "Peut-on comparer des langages différents ?",
            answer: "Absolument. L'outil fonctionne avec tout format texte, indépendamment du langage. Il prend en charge JavaScript, Python, Java, C++, HTML, CSS, etc. La coloration syntaxique pour les langages populaires améliore la lisibilité, rendant l'outil aussi utile pour les développeurs full-stack que pour les spécialistes."
          },
          {
            question: "Comment partager ou sauvegarder les résultats ?",
            answer: "Plusieurs options existent : copier les différences formatées dans le presse-papiers, télécharger le résultat complet au format HTML (conservant les surbrillances), ou générer un lien permanent vers une comparaison spécifique. Ces fonctionnalités facilitent l'intégration des résultats dans votre documentation, processus de revue ou discussions de dépannage."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape",
        steps: [
          "Choisissez le <strong>mode de comparaison</strong> adapté - par ligne pour la plupart des cas, par mot/caractère pour plus de finesse",
          "Sélectionnez <strong>vue séparée</strong> (côte à côte) ou <strong>intégrée</strong> selon vos préférences",
          "Collez ou saisissez votre <strong>code original</strong> à gauche",
          "Ajoutez votre <strong>code modifié</strong> à droite - le bouton d'inversion change le sens de comparaison",
          "Cliquez sur <strong>Comparer</strong> pour générer les différences visuelles",
          "Consultez les résultats : <strong>ajouts</strong> en vert, <strong>suppressions</strong> en rouge, parties inchangées neutres",
          "Utilisez les <strong>statistiques</strong> pour évaluer l'étendue des modifications",
          "Pour les fichiers complexes, utilisez la fonction de recherche pour localiser des sections spécifiques"
        ]
      },
      conclusion: "L'outil de comparaison de code simplifie la tâche complexe d'identification et de compréhension des modifications. En fournissant une représentation visuelle claire des différences, il fait gagner un temps précieux aux développeurs et professionnels techniques dans leurs processus de débogage, revue de code et gestion de versions. Qu'il s'agisse de suivre des changements dans une grande base de code, d'examiner le travail d'un collègue ou d'identifier l'origine d'un bug, cet outil offre la précision et la flexibilité nécessaires pour comprendre l'évolution du code. Une utilisation régulière améliore les workflows de développement, augmente la qualité du code grâce à de meilleures revues, et aide à maintenir la cohérence entre les versions de projet."
    }
  }