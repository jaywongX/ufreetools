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
  }
};