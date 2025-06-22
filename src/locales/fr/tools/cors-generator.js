export default {
    name: 'Générateur de configuration CORS',
    description: 'Crée rapidement des configurations CORS pour divers environnements serveur',
    options: {
      title: 'Options CORS',
      allowedOrigins: {
        title: 'Origines autorisées (Access-Control-Allow-Origin)',
        allowAll: 'Toutes origines (*) <span class="text-yellow-500 text-xs ml-1">(non sécurisé, sans credentials)</span>',
        specific: 'Origines spécifiques (recommandé)',
        addOrigin: 'Ajouter origine',
        placeholder: 'Ex: https://exemple.com',
        wildcard: 'Sous-domaines (wildcard)',
        null: 'Autoriser null',
        remove: 'Supprimer'
      },
      allowedMethods: {
        title: 'Méthodes HTTP autorisées (Access-Control-Allow-Methods)',
        selectMethods: 'Sélectionner méthodes',
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE',
        patch: 'PATCH',
        head: 'HEAD',
        options: 'OPTIONS'
      },
      allowedHeaders: {
        title: 'En-têtes autorisés (Access-Control-Allow-Headers)',
        all: 'Tous en-têtes (*)',
        specific: 'En-têtes spécifiques',
        addHeader: 'Ajouter en-tête',
        headerPlaceholder: 'Nom de l\'en-tête',
        common: 'En-têtes courants',
        custom: 'Personnalisés',
        contentType: 'Content-Type',
        accept: 'Accept',
        authorization: 'Authorization',
        origin: 'Origin',
        xRequestedWith: 'X-Requested-With',
        contentDisposition: 'Content-Disposition',
        remove: 'Supprimer'
      },
      exposedHeaders: {
        title: 'En-têtes exposés (Access-Control-Expose-Headers)',
        description: 'En-têtes de réponse accessibles au navigateur',
        addHeader: 'Ajouter en-tête',
        headerPlaceholder: 'Nom de l\'en-tête'
      },
      credentials: {
        title: 'Credentials (Access-Control-Allow-Credentials)',
        description: 'Autoriser cookies et en-têtes d\'authentification',
        allow: 'Autoriser credentials',
        warning: 'Nécessite des origines spécifiques, incompatible avec *'
      },
      maxAge: {
        title: 'Cache pré-vol (Access-Control-Max-Age)',
        description: 'Durée de cache des résultats pré-vol (secondes)',
        seconds: 'secondes',
        default: 'Défaut :',
        recommended: 'Recommandé : 3600 (1h)'
      },
      serverType: {
        title: 'Type de serveur',
        apache: 'Apache (.htaccess)',
        nginx: 'Nginx',
        express: 'Express.js',
        springBoot: 'Spring Boot',
        php: 'PHP',
        flask: 'Flask (Python)',
        django: 'Django',
        rails: 'Ruby on Rails',
        aws: 'AWS S3/CloudFront',
        azure: 'Azure',
        iis: 'IIS (web.config)',
        jetty: 'Jetty',
        headers: 'En-têtes HTTP'
      }
    },
    output: {
      title: 'En-têtes générés',
      instructions: 'Ajouter ces en-têtes aux réponses serveur :',
      copy: 'Copier en-têtes',
      test: 'Tester en-têtes',
      downloadConfig: 'Télécharger configuration'
    },
    configs: {
      title: 'Exemples de configuration',
      nginx: 'Nginx',
      apache: 'Apache (.htaccess)',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS Web.config'
    },
    testing: {
      title: 'Test CORS',
      description: 'Vérifier le bon fonctionnement de votre configuration',
      originUrl: 'URL origine',
      targetUrl: 'URL cible',
      method: 'Méthode HTTP',
      credentials: 'Inclure credentials',
      headers: 'En-têtes personnalisés',
      addHeader: 'Ajouter en-tête',
      testButton: 'Tester CORS',
      results: 'Résultats',
      success: 'Test CORS réussi ✓',
      failure: 'Test CORS échoué ✗✗',
      details: 'Détails réponse',
      response: 'Réponse',
      logs: 'Logs CORS',
      errorDetails: 'Détails erreur'
    },
    presets: {
      title: 'Préréglages',
      api: 'Serveur API',
      assets: 'Ressources statiques (CDN)',
      auth: 'Service d\'authentification',
      publicAccess: 'Accès public',
      restrictive: 'Restrictif',
      load: 'Charger préréglage',
      save: 'Sauvegarder préréglage'
    },
    tips: {
      title: 'Conseils CORS',
      tip1: 'CORS est un mécanisme basé sur les en-têtes HTTP permettant le partage de ressources entre origines différentes.',
      tip2: 'CORS est une fonctionnalité de sécurité des navigateurs modernes contre les attaques CSRF.',
      usage: {
        title: 'Cas d\'usage CORS :',
        tip1: 'Accès à des APIs depuis différents domaines',
        tip2: 'Requêtes Ajax/Fetch cross-origin',
        tip3: 'Accès à des polices/CSS cross-origin',
        tip4: 'Communication entre microservices',
      },
      safe: 'Conseil sécurité : Éviter le wildcard (*) et spécifier des domaines de confiance.'
    },
    messages: {
      copied: 'En-têtes copiés',
      configDownloaded: 'Configuration téléchargée',
      testStarted: 'Test démarré',
      testSucceeded: 'Requête CORS réussie',
      testFailed: 'Échec requête CORS : {error}',
      presetSaved: 'Préréglage sauvegardé',
      presetLoaded: 'Préréglage chargé'
    },
    config: {
      title: 'Configuration',
      empty: 'Configurer les options pour générer',
      copied: 'Configuration copiée !',
      copy: 'Copier'
    },
    comments: {
      expressMiddleware: "// Middleware Express",
      applyGlobalCors: "// Appliquer middleware CORS",
      applySpecificRoute: "// Ou appliquer à une route spécifique",
      applyRequest: "// Traiter requête",
      apacheAllowedOrigins: "# Origines autorisées",
      apacheAllowedMethods: "# Méthodes autorisées",
      apacheAllowedHeaders: "# En-têtes autorisés",
      apacheAllowedCredentials: "# Credentials autorisés",
      preflightCacheDuration: "# Durée cache pré-vol",
      apacheExposeHeaders: '# En-têtes exposés',
      handlePreflightRequest: "# Gestion requête pré-vol",
      nginxConfiguration: "# Configuration CORS\n# Ajouter au bloc server/location",
      nginxAllowedOrigins: "# Origines autorisées",
      nginxAllowedMethods: "# Méthodes autorisées",
      nginxAllowedHeaders: "# En-têtes autorisés",
      nginxAllowedCredentials: "# Credentials autorisés",
      nginxPreflightCacheDuration: "# Durée cache pré-vol",
      nginxExposeHeaders: '# En-têtes exposés',
      nginxHandlePreflight: "# Gestion requête pré-vol",
      httpHeadersConfiguration: "# Configuration en-têtes HTTP",
      httpAllowedOrigins: "# Origines autorisées",
      httpAllowedMethods: "# Méthodes autorisées",
      httpAllowedHeaders: "# En-têtes autorisés",
      httpAllowedCredentials: "# Credentials autorisés",
      httpPreflightCacheDuration: "# Durée cache pré-vol",
      httpExposeHeaders: '# En-têtes exposés',
    },
    article: {
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
  }