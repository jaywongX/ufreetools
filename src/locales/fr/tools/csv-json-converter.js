export default {
    name: 'Outil de conversion CSV en JSON',
    description: 'Convertir des données CSV au format JSON avec des options personnalisables',
    
    options: {
      delimiter: 'Séparateur',
      quote: 'Caractère de citation',
      header: 'Première ligne comme en-tête',
      dynamicTyping: 'Typage dynamique',
      dynamicTypingDescription: 'Convertir les chaînes numériques en nombres, "vrai/faux" en booléens, etc.',
      skipEmptyLines: 'Ignorer les lignes vides',
      comments: 'Caractère de commentaire',
      outputFormat: 'Format de sortie',
      indentation: 'Indentation',
      encoding: 'Encodage',
      newline: 'Saut de ligne',
      title: 'Options de conversion'
    },
    
    delimiters: {
      comma: 'Virgule (,)',
      semicolon: 'Point-virgule (;)',
      tab: 'Tabulation (\\t)',
      pipe: 'Barre verticale (|)',
      custom: 'Personnalisé'
    },
    
    formats: {
      array: 'Tableau d\'objets',
      arrayOfArrays: 'Tableau de tableaux',
      keyed: 'Objet clé-valeur',
      nested: 'Objet imbriqué'
    },
    
    preview: {
      input: 'Entrée...',
      output: 'Sortie...',
      rawCsv: 'CSV brut',
      parsedCsv: 'CSV analysé',
      jsonOutput: 'Sortie JSON',
      firstRows: 'Premières {count} lignes',
      showAll: 'Afficher tout'
    },
    
    actions: {
      convert: 'Convertir',
      copy: 'Copier JSON',
      download: 'Télécharger JSON',
      clear: 'Effacer',
      uploadCsv: 'Importer CSV',
      swap: 'Échanger entrée/sortie',
      loadExample: 'Charger un exemple',
      clearInput: 'Effacer l\'entrée',
      formatOutput: 'Formatter la sortie',
      copyResult: 'Copier le résultat',
      downloadResult: 'Télécharger le résultat',
      paste: 'Coller',
      showOptions: 'Afficher options',
      hideOptions: 'Masquer options',
      uploadJson: 'Importer JSON'
    },
    
    results: {
      rowsProcessed: '{count} lignes traitées',
      conversionComplete: 'Conversion terminée',
      copied: 'Copié dans le presse-papier',
      downloaded: 'Téléchargé',
      error: 'Erreur'
    },
    
    errors: {
      noData: 'Aucune donnée CSV à convertir',
      invalidCsv: 'Format CSV invalide',
      parsingFailed: 'Échec de l\'analyse : {error}',
      missingHeader: 'Ligne d\'en-tête manquante',
      invalidJson: 'Format JSON invalide',
      formatFailed: 'Échec du formatage : {error}',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      downloadFailed: 'Échec du téléchargement',
      pasteError: 'Impossible de coller depuis le presse-papier',
      conversionFailed: 'Échec de la conversion'
    },
    
    conversion: {
      title: 'Direction de conversion',
      csvToJson: {
        title: 'CSV vers JSON',
        delimiterLabel: 'Séparateur',
        headerLabel: 'Première ligne comme en-tête',
        dynamicTypingLabel: 'Inférence automatique des types',
        skipEmptyLinesLabel: 'Ignorer les lignes vides',
        convertButton: 'Convertir CSV en JSON'
      },
      jsonToCsv: {
        title: 'JSON vers CSV',
        delimiterLabel: 'Séparateur',
        headerLabel: 'Inclure la ligne d\'en-tête',
        quotesLabel: 'Ajouter des guillemets à tous les champs',
        nestedModeLabel: 'Mode de traitement des objets imbriqués',
        flat: 'Aplatir',
        stringify: 'Convertir en chaîne',
        ignore: 'Ignorer',
        convertButton: 'Convertir JSON en CSV'
      }
    },
    
    stats: {
      processed: 'Lignes de données traitées',
      fields: 'Nombre de champs/colonnes',
      inputSize: 'Taille avant conversion',
      outputSize: 'Taille après conversion',
      title: 'Statistiques'
    },
    
    messages: {
      copied: 'Copié dans le presse-papier',
      download: 'Téléchargé',
      error: 'Erreur'
    },
    
    formatBytes: {
      bytes: 'octets',
      kb: 'Ko',
      mb: 'Mo',
      gb: 'Go',
      tb: 'To'
    },
    
    article: {
      title: "Outil CSV vers JSON : Simplifier la conversion de formats de données",
      features: {
        title: "Présentation de l'outil de conversion CSV et JSON",
        description: "Le <strong>convertisseur CSV vers JSON</strong> est un outil puissant conçu pour convertir des données entre le format <strong>CSV</strong> (valeurs séparées par des virgules) et le format <strong>JSON</strong> (notation d'objets JavaScript). Ce <strong>convertisseur de données</strong> bidirectionnel permet une conversion transparente entre des données tabulaires et des objets JSON structurés, et vice versa.<br><br>Notre <strong>outil CSV JSON</strong> offre des options personnalisables pour gérer divers <strong>formats de données</strong>, incluant différents séparateurs (virgule, point-virgule, tabulation, barre verticale), la gestion des lignes d'en-tête et une <strong>détection intelligente des types de données</strong>. Pour les structures JSON complexes, l'outil propose des options pour aplatir les objets imbriqués ou les convertir en chaînes, en faisant une solution polyvalente pour différentes applications et flux de travail impliquant des tâches de <strong>conversion de données</strong>.",
        useCases: {
          title: "Cas d'utilisation courants pour la conversion CSV JSON",
          items: [
            "Les analystes de données convertissent des exports de tableurs en JSON pour des outils de visualisation ou des API",
            "Les développeurs préparent des données pour des applications web nécessitant des structures JSON",
            "Les administrateurs de bases de données migrent des données entre systèmes avec des exigences de format différentes",
            "Les développeurs d'API convertissent des exports CSV en JSON pour des API RESTful",
            "Les data scientists convertissent des résultats expérimentaux entre formats de tableurs et structures JSON compatibles avec le code",
            "Les analystes métier préparent des rapports CSV depuis des systèmes comptables ou CRM pour des tableaux de bord web utilisant JSON"
          ]
        }
      },
      faq: {
        title: "FAQ sur la conversion CSV vers JSON",
        items: [
          {
            question: "Quelle est la différence entre les formats CSV et JSON ?",
            answer: "Le CSV (valeurs séparées par des virgules) est un format tabulaire simple où les données sont organisées en lignes et colonnes séparées par un délimiteur (généralement une virgule). Il est plat et léger, souvent utilisé dans les tableurs. Le JSON (notation d'objets JavaScript) est un format de données structuré hiérarchique qui supporte les objets et tableaux imbriqués. Le JSON peut représenter des relations de données plus complexes et est un format standard pour les API web et applications JavaScript."
          },
          {
            question: "Comment l'outil gère-t-il les JSON imbriqués lors de la conversion en CSV ?",
            answer: "Notre convertisseur CSV JSON propose trois options pour traiter les objets JSON imbriqués : 'Aplatir' convertit les attributs imbriqués en noms de colonnes avec notation par points (ex: 'user.name'), 'Convertir en chaîne' transforme l'objet imbriqué entier en représentation textuelle, et 'Ignorer' exclut les objets imbriqués de la conversion. Ces options offrent une flexibilité selon vos besoins spécifiques de conversion de données."
          },
          {
            question: "Le convertisseur CSV vers JSON peut-il gérer différents séparateurs dans les fichiers CSV ?",
            answer: "Oui, notre convertisseur de données supporte plusieurs options de séparateurs, incluant la virgule, le point-virgule, la tabulation et la barre verticale. Cette flexibilité vous permet de traiter diverses variantes de formats CSV provenant de différents systèmes ou régions. Il suffit de sélectionner le séparateur approprié dans le panneau d'options avant la conversion."
          },
          {
            question: "Comment fonctionne le typage dynamique dans la conversion CSV vers JSON ?",
            answer: "Le typage dynamique détecte et convertit automatiquement les types de données dans le CSV. Lorsqu'activé, les valeurs de chaîne ressemblant à des nombres (ex: '42') sont converties en véritables types numériques, les chaînes 'vrai/faux' deviennent des booléens, et les champs vides peuvent être convertis en valeurs null. Cela crée des données JSON plus utilisables avec des types corrects, plutôt que de tout traiter comme des chaînes."
          },
          {
            question: "Quelle taille de fichier CSV ou JSON cet outil peut-il traiter ?",
            answer: "Le convertisseur CSV JSON traite les données directement dans votre navigateur, donc la limite de taille dépend de la mémoire de votre appareil. Pour des performances optimales, nous recommandons d'utiliser des fichiers de moins de 5 Mo, bien que les navigateurs modernes puissent gérer des fichiers plus volumineux. Pour des jeux de données très importants, envisagez de diviser le fichier en morceaux plus petits ou d'utiliser un outil de conversion basé sur serveur."
          }
        ]
      },
      guide: {
        title: "Comment utiliser l'outil CSV vers JSON",
        steps: [
          "Sélectionnez la direction de conversion : choisissez 'CSV vers JSON' ou 'JSON vers CSV' selon votre format de données source",
          "Cliquez sur 'Afficher options' pour configurer les paramètres de conversion comme le séparateur, la ligne d'en-tête et les règles de traitement spéciales",
          "Pour CSV vers JSON, sélectionnez le séparateur approprié (virgule, point-virgule, tabulation, etc.) et cochez 'Première ligne comme en-tête' si votre CSV contient des en-têtes de colonnes",
          "Pour JSON vers CSV, configurez comment traiter les objets imbriqués (aplatir, convertir en chaîne ou ignorer) et si vous voulez ajouter des guillemets à toutes les valeurs de champs",
          "Saisissez vos données en les collant dans le champ d'entrée ou cliquez sur 'Charger un exemple' pour voir comment le convertisseur traite des données d'exemple",
          "Cliquez sur le bouton 'Convertir' pour exécuter la conversion entre formats CSV et JSON",
          "Consultez les statistiques de conversion et le résultat, puis utilisez les boutons 'Copier résultat' ou 'Télécharger résultat' pour sauvegarder vos données converties"
        ]
      },
      conclusion: "Le convertisseur CSV vers JSON est un outil indispensable pour les professionnels des données qui manipulent fréquemment différents formats de données. En simplifiant le processus de conversion entre données tabulaires CSV et objets JSON structurés, cet outil fait gagner du temps et réduit les erreurs dans les flux de travail de traitement de données. Que vous prépariez des données pour une intégration d'API, convertissiez des exports d'applications tableurs ou fassiez des conversions entre les exigences de format de différents systèmes, ce convertisseur offre une solution flexible basée sur navigateur pour vos besoins de conversion de données."
    }
  }