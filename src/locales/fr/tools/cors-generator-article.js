export default {
  title: "Guide complet du générateur CORS - Configuration sécurisée",
  intro: {
    title: "Comprendre CORS et son rôle crucial en sécurité web",
    p1: "<b>CORS</b> est un mécanisme de sécurité des navigateurs contrôlant l'accès cross-origin aux ressources.",
    p2: "<b>Une configuration correcte est essentielle</b> pour les applications web modernes utilisant des APIs distribuées.",
    p3: "<b>Notre générateur</b> guide chaque option avec des explications claires et des valeurs sécurisées par défaut."
  },
  useCases: {
    title: "Cas pratiques",
    case1: "<b>Architectures microservices</b> : Standardisation des configurations CORS entre services.",
    case2: "<b>Intégrations API tierces</b> : Accès sécurisé pour les partenaires commerciaux.",
    case3: "<b>CDN sécurisés</b> : Protection des ressources statiques contre un usage non autorisé.",
    case4: "<b>Environnements de dev/test</b> : Configurations différenciées par environnement.",
    case5: "<b>Applications internationales</b> : Gestion des domaines multi-régionaux."
  },
  tutorial: {
    title: "Créer une configuration CORS sécurisée",
    intro: "Guide étape par étape :",
    step1: {
      title: "Étape 1 : Origines autorisées",
      description: "Spécifier précisément les domaines de confiance (éviter *)."
    },
    step2: {
      title: "Étape 2 : Méthodes HTTP",
      description: "Limiter aux méthodes réellement nécessaires (GET/POST etc)."
    },
    step3: {
      title: "Étape 3 : En-têtes et credentials",
      description: "Configurer les en-têtes nécessaires et gérer les credentials."
    },
    step4: {
      title: "Étape 4 : Génération et implémentation",
      description: "Générer la configuration pour votre serveur et la tester."
    }
  },
  corsDetails: {
    title: "Détails techniques CORS",
    intro: "Comprendre les mécanismes sous-jacents :",
    preflight: {
      title: "Requêtes pré-vol",
      description: "Mécanisme de sécurité via requêtes OPTIONS préalables."
    },
    security: {
      title: "Impacts sécurité",
      description: "Les mauvaises configurations CORS créent des vulnérabilités."
    },
    headers: {
      title: "En-têtes CORS",
      description: "Fonction de chaque en-tête dans le contrôle d'accès."
    }
  },
  faq: {
    title: "FAQ CORS",
    q1: "Différence entre CORS et Same-Origin Policy ?",
    a1: "SOP est restrictif par défaut, CORS permet des exceptions contrôlées.",
    
    q2: "Pourquoi * est incompatible avec credentials ?",
    a2: "Mesure de sécurité contre les attaques CSRF.",
    
    q3: "Impact sur les performances ?",
    a3: "Les requêtes pré-vol doublent les allers-retours - configurer cache.",
    
    q4: "Comment tester CORS ?",
    a4: "Créer un client test cross-origin et vérifier les en-têtes.",
    
    q5: "Risques des configurations trop permissives ?",
    a5: "Exposition aux attaques CSRF et accès non autorisés aux données."
  },
  relatedTools: {
    title: "Outils complémentaires",
    description: "Améliorez votre flux de travail de développement Web avec ces outils complémentaires:",
    tool1: {
      name: "Formateur JSON",
      url: "https://www.ufreetools.com/tool/json-formatter",
      description: "Formatter et valider des données JSON."
    },
    tool2: {
      name: "Référence codes HTTP",
      url: "https://www.ufreetools.com/tool/http-status-code-lookup",
      description: "Guide des codes de statut HTTP."
    },
    tool3: {
      name: "Débogueur JWT",
      url: "https://www.ufreetools.com/tool/jwt-debugger",
      description: "Parser et valider des tokens JWT."
    },
    tool4: {
      name: "Encodeur URL",
      url: "https://www.ufreetools.com/tool/url-encode-decode",
      description: "Encoder/décoder des composants URL."
    }
  },
  resources: {
    title: "Ressources officielles",
    resource1: {
      name: "MDN : CORS",
      url: "https://developer.mozilla.org/fr/docs/Web/HTTP/CORS",
      description: "Guide complet Mozilla sur CORS."
    },
    resource2: {
      name: "Spécification W3C CORS",
      url: "https://www.w3.org/TR/cors/",
      description: "Norme officielle des implémentations CORS."
    },
    resource3: {
      name: "Cheat Sheet sécurité CORS",
      url: "https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration",
      description: "Guide des mauvaises configurations CORS."
    }
  }
}
