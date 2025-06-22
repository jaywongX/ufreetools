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
    },
    article: {
      title: "Vérificateur de robustesse : Évaluez et améliorez votre sécurité en ligne",
      features: {
        title: "Comprendre l'évaluation de sécurité",
        description: "Ce <strong>vérificateur de robustesse</strong> est un <strong>outil d'évaluation complet</strong> conçu pour analyser l'efficacité de votre mot de passe contre les menaces potentielles. Ce <strong>analyseur de mot de passe</strong> examine plusieurs facteurs déterminant la sécurité, incluant longueur, diversité des caractères, modèles potentiels et similarité avec des mots de passe courants.<br><br>Notre <strong>testeur de sécurité</strong> fournit un retour détaillé sur les forces et faiblesses, avec une analyse complète des éléments le rendant sécurisé ou vulnérable. L'outil génère un score de sécurité et un code couleur, avec des suggestions d'amélioration spécifiques. En tant que <strong>détecteur de vulnérabilités</strong>, il identifie les problèmes potentiels sans jamais stocker ou transmettre votre mot de passe, garantissant une confidentialité totale.",
        useCases: {
          title: "Cas d'utilisation pratiques",
          items: [
            "<strong>Création de compte</strong> : Utilisez le <strong>vérificateur</strong> lors de la création de nouveaux comptes pour garantir des identifiants conformes aux standards modernes",
            "<strong>Audit de sécurité</strong> : Testez régulièrement vos mots de passe existants pour identifier ceux nécessitant un renforcement",
            "<strong>Politique de mots de passe</strong> : Les organisations peuvent utiliser l'outil pour former les employés aux bonnes pratiques",
            "<strong>Démonstration éducative</strong> : Montrez visuellement la différence entre mots de passe faibles et forts",
            "<strong>Vérification post-fuite</strong> : Après une fuite de données, vérifiez si vos mots de passe actuels nécessitent une mise à jour",
            "<strong>Transition vers gestionnaire</strong> : Évaluez vos mots de passe existants lors du passage à un gestionnaire de mots de passe"
          ]
        }
      },
      faq: {
        title: "FAQ sur la sécurité des mots de passe",
        items: [
          {
            question: "Mon mot de passe est-il sécurisé avec cet outil ?",
            answer: "Oui, votre mot de passe est traité localement dans votre navigateur - il n'est jamais transmis sur Internet. L'outil utilise des algorithmes JavaScript locaux pour évaluer la complexité sans traitement externe."
          },
          {
            question: "Qu'est-ce qui rend un mot de passe vraiment fort ?",
            answer: "Un mot de passe fort combine : longueur suffisante (12-14 caractères minimum), complexité via diversité des caractères, imprévisibilité (éviter mots/motifs courants), unicité (non réutilisé) et résistance aux attaques automatisées. La longueur contribue plus à la robustesse que la complexité seule."
          },
          {
            question: "Pourquoi mon mot de passe apparemment complexe est-il marqué comme faible ?",
            answer: "L'outil peut détecter des vulnérabilités subtiles : motifs prévisibles (séquences clavier, répétitions), variantes de mots de passe connus, informations personnelles devinables, ou substitutions courantes (comme '0' pour 'o'). L'analyse moderne va au-delà des types de caractères pour évaluer l'entropie et les motifs reconnaissables par les outils de piratage."
          },
          {
            question: "À quelle fréquence dois-je vérifier/mettre à jour mes mots de passe ?",
            answer: "Vérifiez vos mots de passe critiques tous les 3-6 mois. Mettez-les à jour immédiatement après : une fuite de données affectant vos services, un partage de mot de passe, une connexion sur un appareil public, un soupçon d'accès non autorisé, ou un changement majeur (nouveau travail, déménagement)."
          },
          {
            question: "Quoi de mieux : mot de passe court complexe ou long simple ?",
            answer: "Un mot de passe long simple est généralement plus sécurisé qu'un court complexe. Par exemple, un mot de passe de 16 caractères en minuscules seulement est mathématiquement plus difficile à pirater par force brute qu'un mot de passe de 8 caractères mélangeant différents types. La solution idéale combine longueur significative (16+ caractères) et complexité modérée (divers types de caractères)."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape",
        steps: [
          "Saisissez votre mot de passe dans le champ sécurisé. La conception respectueuse de la vie privée garantit qu'il n'est ni transmis ni stocké.",
          "Consultez le <strong>score global</strong> sur l'indicateur coloré (très faible/rouge à très fort/vert).",
          "Examinez la section <strong>analyse détaillée</strong> pour comprendre les aspects spécifiques affectant votre score.",
          "Notez les <strong>problèmes détectés</strong> mettant en évidence des vulnérabilités spécifiques.",
          "Lisez les <strong>suggestions d'amélioration</strong> personnalisées pour renforcer votre mot de passe.",
          "Appliquez les modifications recommandées et <strong>retestez</strong> jusqu'à obtenir une évaluation satisfaisante."
        ]
      },
      conclusion: "Ce vérificateur est un outil essentiel dans un environnement numérique où les fuites de données et attaques sont en hausse. En fournissant une analyse détaillée et des suggestions concrètes, il permet aux utilisateurs de reprendre le contrôle de leur sécurité en ligne. Rappelez-vous qu'un mot de passe fort est votre première ligne de défense - il doit être unique pour chaque compte important, suffisamment complexe, et régulièrement mis à jour. Pour une sécurité maximale, combinez cet outil avec un gestionnaire de mots de passe réputé."
    }
  }