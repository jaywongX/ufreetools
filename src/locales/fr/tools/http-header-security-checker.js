export default {
    name: 'Vérificateur de sécurité des en-têtes HTTP',
    description: 'Analyse et évalue la sécurité des en-têtes de réponse HTTP',
    title: 'Outil de vérification des en-têtes de sécurité',
    intro: 'Analyse les en-têtes de réponse HTTP d\'un site web, vérifie les configurations de sécurité comme CSP, HSTS et fournit des recommandations d\'amélioration',
    input: {
      title: 'Entrez une URL ou des en-têtes',
      url: 'URL',
      urlPlaceholder: 'Entrez l\'URL à vérifier (ex : https://exemple.com)',
      headers: 'Ou collez directement les en-têtes HTTP',
      headersPlaceholder: 'Collez ici les en-têtes HTTP bruts...',
      options: 'Options de scan',
      followRedirects: 'Suivre les redirections',
      includeSubresources: 'Vérifier les sous-ressources (CSS, JS, etc.)',
      timeout: 'Délai d\'attente (secondes)',
      checkButton: 'Vérifier les en-têtes',
      analyzing: 'Analyse en cours...'
    },
    results: {
      title: 'Analyse des en-têtes de sécurité',
      overview: 'Vue d\'ensemble',
      score: 'Score de sécurité',
      totalScore: 'Total sur 100',
      scanned: 'URL scannée',
      date: 'Date du scan',
      headers: {
        title: 'En-têtes détectés',
        name: 'En-tête',
        value: 'Valeur',
        status: 'Statut'
      },
      allHeaders: {
        title: 'Tous les en-têtes de réponse',
        name: 'Nom',
        value: 'Valeur',
        noData: 'Aucune donnée d\'en-tête'
      },
      missing: {
        title: 'En-têtes de sécurité manquants',
        description: 'Ces en-têtes de sécurité recommandés sont absents :'
      },
      issues: {
        title: 'Problèmes de sécurité',
        critical: 'Critique',
        high: 'Élevé',
        medium: 'Moyen',
        low: 'Faible',
        info: 'Information'
      },
      recommendations: {
        title: 'Recommandations',
        description: 'Envisagez d\'ajouter ces en-têtes pour améliorer la sécurité :',
        example: 'Exemple de configuration'
      },
      rating: {
        unknown: 'Inconnu',
        excellent: 'Excellent',
        good: 'Bon',
        fair: 'Moyen',
        poor: 'Faible',
        high_risk: 'Risque élevé',
        descriptions: {
          unknown: 'Impossible d\'obtenir les informations sur les en-têtes de sécurité du site',
          excellent: 'Le site implémente tous les principaux en-têtes de sécurité',
          good: 'Le site implémente la plupart des en-têtes de sécurité importants',
          fair: 'Le site manque certains en-têtes de sécurité importants',
          poor: 'Le site manque plusieurs en-têtes de sécurité critiques',
          high_risk: 'Le site n\'a presque aucune mesure de protection par en-têtes de sécurité'
        }
      }
    },
    headers: {
      strictTransportSecurity: {
        name: 'Strict-Transport-Security',
        description: 'Force l\'utilisation de connexions HTTPS au lieu de HTTP',
        recommendation: 'Ajoutez "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"',
        status: {
          good: 'Correctement configuré',
          bad: 'Non configuré',
          warning: 'Configuration améliorable'
        },
        recommendationConfigured: 'Configuration existante implémentée, assurez-vous d\'inclure un max-age suffisant et includeSubDomains',
        recommendationMissing: 'Recommandé d\'activer HSTS pour garantir que toutes les communications passent par HTTPS'
      },
      xContentTypeOptions: {
        name: 'X-Content-Type-Options',
        description: 'Empêche le détournement de type MIME',
        recommendation: 'Ajoutez "X-Content-Type-Options: nosniff"',
        status: {
          good: 'Correctement configuré',
          bad: 'Non configuré ou mal configuré'
        },
        recommendationConfigured: 'Configuration correcte, conservez les paramètres actuels',
        recommendationMissing: 'Recommandé de définir cet en-tête à la valeur "nosniff"'
      },
      xFrameOptions: {
        name: 'X-Frame-Options',
        description: 'Empêche l\'intégration du site dans des iframes, prévenant ainsi les attaques de clickjacking',
        recommendation: 'Ajoutez "X-Frame-Options: DENY" ou "SAMEORIGIN"',
        status: {
          good: 'Configuré',
          bad: 'Non configuré'
        },
        recommendationConfigured: 'Configuration existante implémentée, recommandé d\'utiliser DENY ou SAMEORIGIN',
        recommendationMissing: 'Recommandé de configurer cet en-tête à DENY ou SAMEORIGIN pour prévenir le clickjacking'
      },
      contentSecurityPolicy: {
        name: 'Content-Security-Policy',
        description: 'Contrôle les ressources que l\'agent utilisateur est autorisé à charger',
        recommendation: 'Ajoutez un en-tête Content-Security-Policy avec les directives appropriées',
        status: {
          good: 'Correctement configuré',
          bad: 'Non configuré',
          warning: 'Configuration améliorable'
        },
        recommendationConfigured: 'Configuration existante implémentée, assurez-vous de revoir et mettre à jour régulièrement la politique',
        recommendationMissing: 'Recommandé de configurer CSP pour limiter les origines des ressources chargeables, améliorant ainsi la défense contre les attaques XSS'
      },
      xXssProtection: {
        name: 'X-XSS-Protection',
        description: 'Cet en-tête active le filtrage XSS dans les anciens navigateurs. Dans les navigateurs modernes, il est recommandé d\'utiliser CSP à la place.',
        recommendation: 'Bien que cet en-tête soit remplacé par CSP dans les navigateurs modernes, il est toujours recommandé de le définir à "1; mode=block" pour la compatibilité avec les anciens navigateurs',
        status: {
          enabled: 'Activé',
          disabled: 'Désactivé',
          notConfigured: 'Non configuré (recommandé d\'utiliser CSP pour les navigateurs modernes)'
        }
      },
      referrerPolicy: {
        name: 'Referrer-Policy',
        description: 'Contrôle les informations incluses dans l\'en-tête Referer',
        recommendation: 'Ajoutez "Referrer-Policy: no-referrer-when-downgrade" ou une politique plus stricte',
        status: {
          good: 'Configuré',
          bad: 'Non configuré'
        },
        recommendationConfigured: 'Configuration existante implémentée, recommandé d\'utiliser strict-origin ou strict-origin-when-cross-origin',
        recommendationMissing: 'Recommandé de configurer cet en-tête pour contrôler la transmission des informations de référence'
      },
      permissionsPolicy: {
        name: 'Permissions-Policy',
        description: 'Contrôle quelles fonctionnalités et API du navigateur peuvent être utilisées',
        recommendation: 'Ajoutez un en-tête Permissions-Policy avec des restrictions appropriées',
        status: {
          good: 'Configuré',
          bad: 'Non configuré'
        },
        recommendationConfigured: 'Configuration existante implémentée, assurez-vous de restreindre les fonctionnalités inutiles',
        recommendationMissing: 'Recommandé de configurer cet en-tête pour limiter les fonctionnalités du navigateur que le site peut utiliser'
      }
    },
    status: {
      good: 'Bon',
      warning: 'Avertissement',
      bad: 'Mauvais',
      info: 'Information',
      notApplicable: 'Non applicable'
    },
    actions: {
      export: 'Exporter le rapport',
      copyHeaders: 'Copier les en-têtes',
      copyRecommendations: 'Copier les recommandations',
      scan: 'Nouveau scan',
      share: 'Partager les résultats',
      analyze: 'Analyser les en-têtes'
    },
    emptyState: {
      line1: 'Entrez l\'URL d\'un site web pour analyser la configuration de sécurité de ses en-têtes HTTP',
      line2: 'Obtenez une évaluation détaillée et des recommandations sur les en-têtes de sécurité comme CSP, HSTS, etc.'
    },
    messages: {
      scanning: 'Scan de {url} en cours...',
      completed: 'Scan terminé',
      error: 'Erreur : {message}',
      timeout: 'Requête expirée',
      invalidUrl: 'URL invalide',
      invalidUrlFormat: 'Veuillez entrer une URL valide commençant par http:// ou https://',
      copied: 'Copié dans le presse-papiers',
      exportComplete: 'Rapport exporté avec succès',
      httpWarning: 'Avertissement : l\'utilisation de HTTP peut être non sécurisée',
      noHeaders: 'Aucun en-tête trouvé',
      fetchError: 'Impossible de récupérer les en-têtes : {error}'
    },
    article: {
      title: "Vérificateur de sécurité des en-têtes HTTP : Améliorez l'état de sécurité de votre site",
      features: {
        title: "Comprendre la sécurité des en-têtes HTTP",
        description: "<strong>Le vérificateur de sécurité des en-têtes HTTP</strong> est un outil spécialement conçu pour analyser et évaluer les <strong>en-têtes de sécurité</strong> de n'importe quel site web. Les <strong>en-têtes de sécurité</strong> sont des en-têtes de réponse HTTP spéciaux que le serveur peut définir, fournissant une couche supplémentaire de <strong>sécurité</strong> en aidant à se défendre contre les vulnérabilités web courantes comme les attaques XSS (cross-site scripting), le clickjacking et d'autres attaques par injection de code.<br><br>Notre outil scanne les principaux <strong>en-têtes de sécurité</strong>, y compris Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, X-Frame-Options, etc. Il évalue les <strong>configurations d'en-têtes</strong> existantes, identifie les <strong>en-têtes de sécurité</strong> manquants et fournit un <strong>score de sécurité</strong> complet avec des recommandations actionnables pour améliorer l'<strong>état de sécurité</strong> de votre site.",
        useCases: {
          title: "Cas d'utilisation courants du vérificateur d'en-têtes HTTP",
          items: [
            "Audit de sécurité par les développeurs web avant le déploiement de nouveaux sites",
            "Tests de pénétration et évaluations de vulnérabilité par des professionnels de la sécurité",
            "Validation des configurations de sécurité des serveurs sur plusieurs domaines par les administrateurs système",
            "Surveillance continue de la sécurité dans les pipelines CI/CD par les équipes DevOps",
            "Vérification par les propriétaires de sites de leur état de sécurité après l'implémentation des en-têtes recommandés",
            "Démonstration par des consultants en sécurité de la nécessité d'améliorer les mesures de sécurité pour leurs clients",
            "Conformité aux normes et réglementations de sécurité du secteur par les responsables conformité"
          ]
        }
      },
      faq: {
        title: "FAQ sur la sécurité des en-têtes HTTP",
        items: [
          {
            question: "Que sont les en-têtes de sécurité HTTP et pourquoi sont-ils importants ?",
            answer: "Les en-têtes de sécurité HTTP sont des instructions spéciales envoyées du serveur au navigateur pour contrôler comment celui-ci doit se comporter lors du traitement du contenu de votre site. Ils sont très importants car ils fournissent une couche supplémentaire de sécurité qui peut se défendre contre des vulnérabilités web courantes comme XSS, CSRF, le clickjacking et les attaques par injection de code. Des en-têtes de sécurité correctement configurés peuvent considérablement améliorer l'état de sécurité de votre site avec un effort minimal."
          },
          {
            question: "Quels en-têtes de sécurité chaque site devrait-il implémenter ?",
            answer: "Au minimum, chaque site moderne devrait implémenter : Content-Security-Policy (CSP) pour prévenir les attaques XSS, Strict-Transport-Security (HSTS) pour forcer l'utilisation de HTTPS, X-Content-Type-Options pour empêcher le détournement de type MIME, X-Frame-Options pour prévenir le clickjacking, et Referrer-Policy pour contrôler les informations dans l'en-tête Referer. Notre vérificateur d'en-têtes de sécurité évalue automatiquement ces en-têtes essentiels et plus encore."
          },
          {
            question: "Comment le score de sécurité est-il calculé ?",
            answer: "Le score de sécurité est calculé en fonction de la présence et de la configuration correcte des principaux en-têtes de sécurité. Les en-têtes de sécurité majeurs comme Content-Security-Policy et HSTS contribuent chacun jusqu'à 20 points, tandis que d'autres en-têtes comme X-Content-Type-Options et X-Frame-Options contribuent 10-15 points chacun. Nous évaluons également la qualité de l'implémentation, pas seulement la présence des en-têtes, pour un score maximum de 100 points."
          },
          {
            question: "Puis-je utiliser cet outil pour vérifier des sites que je ne possède pas ?",
            answer: "Oui, vous pouvez utiliser le vérificateur de sécurité des en-têtes HTTP pour analyser n'importe quel site accessible publiquement. L'outil ne vérifie que les en-têtes de réponse HTTP, qui sont des informations disponibles publiquement envoyées par le serveur web. Cependant, nous recommandons de l'utiliser principalement sur des sites que vous possédez ou pour lesquels vous avez l'autorisation de tester."
          },
          {
            question: "Comment implémenter les en-têtes de sécurité recommandés par cet outil ?",
            answer: "L'implémentation dépend de votre serveur web ou plateforme. Pour Apache, vous pouvez ajouter les en-têtes dans le fichier .htaccess. Pour Nginx, vous pouvez les ajouter dans la configuration du serveur. De nombreux systèmes de gestion de contenu ont des plugins pour les en-têtes de sécurité. Le vérificateur de sécurité des en-têtes HTTP fournit des exemples de configuration que vous pouvez adapter à votre environnement spécifique."
          }
        ]
      },
      guide: {
        title: "Comment utiliser le vérificateur de sécurité des en-têtes HTTP",
        steps: [
          "Entrez l'URL complète du site que vous souhaitez vérifier dans le champ de saisie d'URL (doit inclure http:// ou https://)",
          "Pour une vérification avancée, envisagez d'activer des options comme 'Suivre les redirections' si le site utilise des redirections",
          "Cliquez sur le bouton 'Vérifier les en-têtes' pour commencer l'analyse de sécurité",
          "Consultez le score de sécurité et l'évaluation globale en haut de la section des résultats",
          "Examinez l'analyse détaillée des en-têtes de sécurité détectés, chacun marqué d'un indicateur de statut (bon, avertissement ou mauvais)",
          "Cliquez sur n'importe quel en-tête de sécurité pour le développer et voir les détails, y compris sa valeur actuelle, son but et des recommandations spécifiques",
          "Consultez la section 'Tous les en-têtes de réponse' pour voir la liste complète des en-têtes HTTP renvoyés par le serveur",
          "Implémentez les en-têtes de sécurité recommandés sur votre serveur web en fonction des suggestions fournies, puis relancez le vérificateur pour valider les améliorations"
        ]
      },
      conclusion: "Vérifier et mettre à jour régulièrement les en-têtes de sécurité de votre site est une pratique fondamentale dans la maintenance de la sécurité web. Avec le vérificateur de sécurité des en-têtes HTTP, vous pouvez facilement identifier les faiblesses dans votre configuration actuelle et implémenter les améliorations nécessaires pour renforcer la défense contre les attaques web courantes. N'oubliez pas que les en-têtes de sécurité ne sont qu'un aspect d'une stratégie de sécurité complète, mais ils offrent une protection significative avec un effort d'implémentation relativement faible."
    }
  }