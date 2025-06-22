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
    },
    article: {
      title: "Guide du générateur : Créez des mots de passe forts et sécurisés",
      features: {
        title: "Fonctionnalités du générateur",
        description: "Notre <strong>générateur</strong> crée des combinaisons aléatoires hautement sécurisées résistant aux attaques par force brute et par dictionnaire. Il permet de personnaliser longueur, types de caractères et niveau de complexité pour répondre aux exigences spécifiques des différentes plateformes.",
        useCases: {
          title: "Cas d'utilisation typiques",
          items: [
            "Création de mots de passe pour nouveaux comptes en ligne",
            "Génération de mots de passe sécurisés pour réseaux Wi-Fi",
            "Développement de mots de passe complexes pour systèmes d'entreprise",
            "Création de mots de passe pour fichiers/chiffrés",
            "Génération de mots de passe uniques pour éviter la réutilisation",
            "Création de mots de passe principaux pour gestionnaires",
            "Génération de clés API sécurisées pour développeurs"
          ]
        }
      },
      faq: {
        title: "FAQ sur le générateur",
        items: [
          {
            question: "Quel est le niveau de sécurité des mots de passe générés ?",
            answer: "Avec les paramètres recommandés, les mots de passe générés sont extrêmement sécurisés. Un mot de passe fort (16+ caractères mélangés) nécessiterait des millions d'années pour être piraté avec les technologies actuelles. Notre générateur utilise une randomisation cryptographique pour garantir l'imprévisibilité."
          },
          {
            question: "Qu'est-ce qui rend un mot de passe fort ?",
            answer: "Un mot de passe fort possède : longueur suffisante (12-16 caractères minimum), complexité (mélange de types de caractères), caractère aléatoire (pas de motifs prévisibles) et unicité (non réutilisé). Notre outil crée des mots de passe répondant à tous ces critères."
          },
          {
            question: "À quelle fréquence dois-je changer mes mots de passe ?",
            answer: "Les experts recommandent désormais de ne changer les mots de passe qu'en cas de suspicion de compromission. Pour les comptes critiques (banque, email), un changement tous les 3-6 mois reste recommandé, en utilisant à chaque fois le générateur."
          },
          {
            question: "Puis-je générer plusieurs mots de passe à la fois ?",
            answer: "Oui, notre outil permet de créer simultanément plusieurs mots de passe sécurisés, utile pour configurer plusieurs nouveaux comptes ou mettre à jour des mots de passe existants lors d'un audit de sécurité."
          },
          {
            question: "Comment mémoriser des mots de passe complexes ?",
            answer: "La meilleure méthode est d'utiliser un gestionnaire de mots de passe. Pour les mots de passe critiques à mémoriser, utilisez le préréglage 'mémorable' qui crée des mots de passe équilibrant sécurité et facilité de mémorisation."
          }
        ]
      },
      guide: {
        title: "Mode d'emploi du générateur",
        steps: [
          "Sélectionnez la longueur souhaitée (16+ caractères recommandés)",
          "Choisissez un préréglage (mémorable/standard/fort) ou 'personnalisé'",
          "Pour les paramètres personnalisés, sélectionnez les types de caractères à inclure",
          "Optionnellement, activez les options avancées pour exclure certains caractères",
          "Sélectionnez le nombre de mots de passe à générer (1 à 50)",
          "Cliquez sur 'Générer' pour créer vos mots de passe sécurisés",
          "Consultez l'indicateur de robustesse pour chaque mot de passe généré",
          "Copiez individuellement ou utilisez 'Tout copier' pour tous les mots de passe",
          "Stockez les mots de passe générés dans un gestionnaire ou emplacement sécurisé"
        ]
      },
      conclusion: "L'utilisation régulière de cet outil améliore significativement votre sécurité en ligne. En créant des mots de passe uniques et robustes pour chaque compte, vous prenez une mesure essentielle contre les cybermenaces. N'oubliez pas que même les mots de passe les plus forts devraient être combinés avec une authentification à deux facteurs lorsque possible."
    }
  }