export default {
    name: 'Détecteur de proxy HTTP',
    description: 'Détecte et analyse les proxies HTTP et équipements intermédiaires dans les connexions',
    title: 'Détecteur de proxy côté client',
    intro: 'Détecte si votre connexion réseau utilise un proxy, analyse les en-têtes HTTP comme X-Forwarded-For et autres informations liées aux proxies',
    detection: {
      title: 'Détection de proxy',
      start: 'Commencer la détection',
      detecting: 'Détection en cours...',
      stop: 'Arrêter la détection',
      completed: 'Détection terminée',
      noProxies: 'Aucun proxy détecté',
      proxiesFound: 'Proxies détectés : {count}'
    },
    options: {
      title: 'Options de détection',
      testUrl: 'URL de test',
      urlPlaceholder: 'Entrez une URL à tester (par défaut : automatique)',
      testMethod: 'Méthode HTTP',
      get: 'GET',
      head: 'HEAD',
      options: 'OPTIONS',
      timeout: 'Délai (secondes)',
      parallel: 'Tests parallèles',
      techniques: 'Techniques de détection',
      headerAnalysis: 'Analyse des en-têtes',
      traceMethod: 'Méthode TRACE',
      viaHeader: 'Vérification Via',
      maxForwards: 'Test Max-Forwards',
      fingerprinting: 'Empreinte de proxy',
      timing: 'Analyse temporelle',
      advanced: 'Options avancées',
      apiSelection: 'Sélection API'
    },
    apis: {
      ipify: 'API ipify',
      ipapi: 'IP-API',
      httpbin: 'httpbin'
    },
    results: {
      title: 'Résultats de détection',
      summary: 'Résumé proxy',
      headers: 'En-têtes complets',
      info: 'Explication des infos proxy',
      detected: 'Proxy détecté',
      notDetected: 'Aucun proxy détecté',
      detectedDescription: 'Votre requête a probablement traversé un ou plusieurs serveurs proxy',
      notDetectedDescription: 'Votre requête semble être arrivée directement au serveur cible sans proxy',
      clientInfo: 'Infos IP client',
      remoteIp: 'Adresse IP distante',
      location: 'Localisation',
      isp: 'Fournisseur ISP',
      proxyHeaders: 'En-têtes liés aux proxies',
      details: 'Détails des résultats',
      proxy: 'Proxy',
      type: 'Type',
      ip: 'Adresse IP',
      software: 'Logiciel',
      confidence: 'Confiance',
      latency: 'Latence',
      headers: 'En-têtes modifiés',
      fingerprint: 'Empreinte',
      export: 'Exporter résultats',
      clear: 'Effacer résultats',
      noData: 'Aucune donnée disponible',
      originalRequest: 'Requête originale',
      modifiedRequest: 'Requête modifiée',
      proxyChain: 'Chaîne de proxy',
      server: 'Serveur',
      notSet: 'Non défini'
    },
    types: {
      forward: 'Proxy direct',
      reverse: 'Proxy inverse',
      transparent: 'Proxy transparent',
      anonymous: 'Proxy anonyme',
      elite: 'Proxy hautement anonyme',
      caching: 'Proxy de cache',
      gateway: 'Passerelle',
      loadBalancer: 'Répartiteur de charge',
      cdn: 'CDN',
      corporate: 'Proxy d\'entreprise',
      unknown: 'Type inconnu'
    },
    headers: {
      title: 'Analyse des en-têtes',
      original: 'En-têtes originaux',
      modified: 'En-têtes modifiés',
      added: 'En-têtes ajoutés',
      removed: 'En-têtes supprimés',
      changed: 'En-têtes changés',
      suspicious: 'En-têtes suspects',
      select: 'Sélectionner en-têtes à analyser',
      name: 'Nom en-tête',
      value: 'Valeur',
      all: 'Tous les en-têtes HTTP',
      notFound: 'Cet en-tête n\'a pas été trouvé'
    },
    details: {
      title: 'Détails du proxy',
      software: 'Logiciel',
      version: 'Version',
      features: 'Fonctionnalités',
      modifications: 'Modifications',
      behavior: 'Comportement',
      security: 'Impact sécurité',
      recommendations: 'Recommandations'
    },
    map: {
      title: 'Carte de connexion',
      client: 'Votre client',
      target: 'Serveur cible',
      hop: 'Saut {n}',
      direct: 'Connexion directe',
      proxied: 'Connexion proxy',
      unknown: 'Chemin inconnu'
    },
    actions: {
      copyHeaders: 'Copier en-têtes',
      copyToClipboard: 'Copier dans presse-papiers'
    },
    messages: {
      startDetection: 'Début de détection proxy...',
      detectionComplete: 'Détection proxy terminée',
      error: 'Échec détection : {message}',
      timeout: 'Délai dépassé',
      exportComplete: 'Export réussi',
      noConnection: 'Connexion impossible',
      limitedResults: 'Résultats limités à cause de restrictions',
      privateNetwork: 'Réseau privé détecté',
      publicNetwork: 'Réseau public détecté',
      warning: 'Avertissement : {message}',
      proxyRemoved: 'Un proxy pourrait supprimer les en-têtes de détection',
      copied: 'En-têtes copiés dans presse-papiers',
      copyFailed: 'Échec copie, copiez manuellement',
      unknown: 'Erreur inconnue'
    },
    info: {
      description: 'Un proxy HTTP est un serveur intermédiaire situé entre un client et un serveur, qui peut traiter les requêtes HTTP à diverses fins. Les proxies peuvent être configurés par des fournisseurs internet, organisations, entreprises ou particuliers.'
    },
    xff: {
      title: 'Qu\'est-ce que X-Forwarded-For ?',
      description: 'X-Forwarded-For (XFF) est un champ d\'en-tête HTTP utilisé pour identifier l\'adresse IP originale d\'un client se connectant à un serveur web via un proxy ou un répartiteur de charge. Quand une requête passe par un proxy, le serveur ne voit généralement que l\'IP du proxy, et l\'en-tête XFF permet de retrouver l\'IP originale du client.',
      notFound: 'Aucun en-tête X-Forwarded-For trouvé, ce qui suggère que la requête n\'a pas traversé de proxy ou que le proxy n\'a pas ajouté cet en-tête.',
      format: {
        title: 'Format de l\'en-tête XFF',
        description: 'Le format standard de l\'en-tête XFF est une liste d\'adresses IP séparées par des virgules, où l\'IP la plus à gauche est le client original et les suivantes sont les proxies traversés :'
      },
      related: {
        title: 'Autres en-têtes proxy liés',
        forwardedProto: 'Identifie le protocole (HTTP/HTTPS) utilisé par le client pour se connecter au proxy',
        forwardedHost: 'Identifie le nom d\'hôte original demandé par le client',
        via: 'Indique les serveurs proxy traversés par la requête et la réponse',
        forwarded: 'En-tête standard plus récent contenant les infos client et tous les proxies'
      },
      importance: {
        title: 'Pourquoi les infos proxy sont importantes',
        security: 'Sécurité et contrôle d\'accès - Identifier correctement l\'IP client est crucial pour prévenir les abus et appliquer des contrôles d\'accès par IP',
        logging: 'Journalisation - Pour l\'audit et le dépannage, enregistrer l\'IP réelle du client est plus utile que l\'IP du proxy',
        geolocation: 'Services de géolocalisation - Les services basés sur IP ont besoin de l\'IP réelle pour fournir des résultats précis',
        content: 'Personnalisation de contenu - Certains services adaptent leur contenu selon la localisation de l\'utilisateur'
      },
      security: {
        title: 'Considérations de sécurité',
        description: 'Notez que l\'en-tête X-Forwarded-For peut être falsifié par le client. Dans les environnements à haute sécurité, ne faites confiance qu\'aux infos XFF ajoutées par des proxies connus, ou utilisez d\'autres méthodes pour valider l\'IP client.'
      }
    },
    privacy: {
      title: 'Note de confidentialité',
      description: 'Pendant la détection, votre adresse IP et en-têtes HTTP seront envoyés à des services API tiers pour analyse. Ces services peuvent collecter et stocker ces informations pour fournir leur service.',
      suggestion: 'Si la confidentialité vous préoccupe, choisissez un autre fournisseur API ou envisagez d\'utiliser un VPN.'
    },
    article: {
      title: "Détecteur de proxy HTTP - Identifier et analyser les proxies réseau",
      intro: {
        title: "Qu'est-ce que la détection de proxy HTTP ?",
        p1: "La <b>détection de proxy HTTP</b> est le processus permettant de déterminer si votre connexion internet passe par un ou plusieurs serveurs intermédiaires appelés proxies. Notre outil de détection analyse les en-têtes HTTP (comme X-Forwarded-For, Via) pour identifier la présence de proxies dans votre chemin de connexion.",
        p2: "Les proxies sont des serveurs intermédiaires entre votre appareil et les sites que vous visitez. Ils peuvent servir à divers usages légitimes comme améliorer les performances via le cache, appliquer des contrôles d'accès ou fournir de l'anonymat. Cependant, des proxies utilisés à votre insu peuvent poser des risques de sécurité. Notre <b>outil de détection</b> vous aide à identifier les proxies cachés pour mieux sécuriser votre réseau.",
        p3: "Quand vous passez par un <b>proxy HTTP</b>, certaines informations sur votre navigation peuvent être visibles par l'opérateur du proxy. Ce détecteur en ligne vous indique si votre connexion est directe ou passe par des couches proxy, vous donnant plus de contrôle sur votre vie privée en ligne."
      },
      useCases: {
        title: "Cas pratiques de détection de proxy",
        case1: "<b>Dépannage réseau</b> : Identifier les proxies aide à diagnostiquer les problèmes de connexion. Les professionnels IT vérifient souvent les configurations proxy pour résoudre les problèmes réseau.",
        case2: "<b>Vérification de sécurité</b> : S'assurer que votre navigation privée ne passe pas par des proxies non autorisés qui pourraient surveiller ou modifier votre trafic. Les entreprises utilisent la détection pour valider leurs politiques de sécurité.",
        case3: "<b>Développeurs web</b> : Les développeurs doivent comprendre comment leur contenu est distribué, surtout avec les CDN ou répartiteurs de charge agissant comme proxies. Tester le traitement des en-têtes est crucial pour la sécurité et l'analyse.",
        case4: "<b>Vérification des restrictions géo</b> : Vérifiez si votre VPN ou proxy masque correctement votre position pour accéder à du contenu régional. Notre outil aide à valider ces mesures.",
        case5: "<b>Vérification en entreprise</b> : Pour les employés en environnement d'entreprise, vérifiez la présence et configuration des proxies qui pourraient affecter votre accès internet ou les fonctionnalités des applications."
      },
      tutorial: {
        title: "Comment détecter les proxies HTTP dans votre connexion",
        intro: "Suivez ce guide étape par étape pour utiliser efficacement notre détecteur de proxy et comprendre votre configuration réseau :",
        step1: {
          title: "Étape 1 : Lancez la détection",
          description: "Cliquez sur <b>\"Commencer la détection\"</b> pour démarrer l'analyse. L'outil enverra des requêtes à des points d'API spécialisés. Par défaut, il choisit la méthode la plus fiable, mais vous pouvez sélectionner une autre API pour des tests plus complets."
        },
        step2: {
          title: "Étape 2 : Consultez les résultats",
          description: "Une fois terminé, l'onglet <b>\"Résumé proxy\"</b> indiquera si des proxies ont été détectés. Un icône vert signifie une connexion directe, un icône jaune signale des proxies. Le résumé montre aussi votre IP et localisation pour vérifier si votre position réelle est masquée."
        },
        step3: {
          title: "Étape 3 : Examinez les en-têtes",
          description: "Cliquez sur <b>\"En-têtes complets\"</b> pour voir tous les en-têtes HTTP. Portez une attention particulière à X-Forwarded-For, Via et Forwarded qui indiquent l'usage de proxies. X-Forwarded-For est particulièrement important car il montre le chemin de votre requête à travers les proxies. Vous pouvez copier ces en-têtes pour une analyse plus poussée."
        },
        step4: {
          title: "Étape 4 : Comprenez les informations",
          description: "L'onglet <b>\"Explication des infos proxy\"</b> détaille la signification des en-têtes détectés et leur impact sur la sécurité. Utilisez ces informations pour déterminer si les proxies détectés sont attendus (comme un proxy d'entreprise) ou potentiellement indésirables."
        }
      },
      techniques: {
        title: "Techniques de détection de proxy HTTP",
        intro: "Notre outil utilise plusieurs méthodes pour détecter avec précision les proxies dans votre connexion réseau. Voici un aperçu des principales techniques utilisées :",
        method1: {
          title: "Analyse des en-têtes",
          description: "La méthode la plus courante consiste à vérifier les en-têtes HTTP généralement ajoutés par les proxies, comme X-Forwarded-For, Via et Forwarded. Ces en-têtes contiennent souvent des informations sur l'IP d'origine du client et la chaîne de proxies."
        },
        method2: {
          title: "Comparaison d'IP",
          description: "L'outil compare l'IP vue par le serveur avec l'IP client attendue. Une différence entre ces IP indique souvent un proxy. Cette méthode est particulièrement utile pour détecter les proxies transparents."
        },
        method3: {
          title: "Analyse des temps de réponse",
          description: "En analysant les temps de réponse, nous pouvons parfois détecter des proxies car ils ajoutent généralement de la latence aux requêtes réseau. Les proxies de cache peuvent montrer des modèles de temps variables selon que le contenu est en cache ou non."
        },
        method4: {
          title: "Détection côté serveur",
          description: "Notre API effectue des vérifications côté serveur pouvant identifier certains types de proxies via des scans de ports, bases de données d'IP proxy connues et modèles de comportement dans les requêtes HTTP."
        }
      },
      faq: {
        title: "FAQ sur la détection de proxy HTTP",
        q1: "Pourquoi devrais-je vérifier si ma connexion utilise un proxy ?",
        a1: "Vérifier les proxies est important pour : <b>la sécurité</b> (savoir si votre trafic est surveillé), <b>la confidentialité</b> (savoir qui peut accéder à vos données de navigation), <b>le dépannage réseau</b> (identifier si un proxy cause des problèmes) et <b>vérifier les VPN</b> (s'assurer que vos outils de confidentialité fonctionnent). Une détection régulière aide à maintenir une conscience de votre sécurité réseau.",
        
        q2: "Cet outil peut-il détecter tous les types de proxies ?",
        a2: "Notre détecteur identifie bien les proxies standards via l'analyse d'en-têtes, mais certains proxies avancés sont plus difficiles à détecter. Les <b>proxies transparents</b> ne modifient pas les en-têtes et peuvent être identifiés par des différences d'IP. Les <b>proxies anonymes</b> conçus pour se cacher peuvent être détectés via l'analyse temporelle ou des techniques serveur. Cependant, les <b>proxies hautement anonymes</b> spécialement conçus pour éviter la détection peuvent échapper aux outils clients. Pour une détection plus complète, nous recommandons d'utiliser plusieurs options d'API dans notre outil.",
        
        q3: "Utiliser un proxy est-il illégal ou dangereux pour mon ordinateur ?",
        a3: "Dans la plupart des pays, utiliser un proxy est généralement légal et sans danger pour votre ordinateur. Les proxies ont de nombreux usages légitimes comme <b>améliorer les performances internet</b> via le cache, <b>renforcer la confidentialité</b> en masquant votre IP, <b>accéder à du contenu géo-restreint</b>, et <b>appliquer des politiques de sécurité</b> en entreprise. Cependant, la légalité dépend de l'usage - contourner des restrictions de copyright ou violer des conditions d'utilisation via un proxy peut poser problème. Assurez-vous de respecter les lois locales et conditions de service.",
        
        q4: "Quelle est la différence entre un proxy et un VPN ?",
        a4: "Bien que proxies et VPN routent votre trafic via un serveur intermédiaire, ils diffèrent sur plusieurs points : <b>Les VPN chiffrent tout le trafic</b> (entre votre appareil et le serveur VPN), alors que la plupart des proxies ne fournissent pas de chiffrement. Les VPN routent généralement <b>tout votre trafic internet</b>, alors que les proxies ne gèrent souvent que le trafic d'applications ou protocoles spécifiques. Les VPN offrent généralement une <b>meilleure confidentialité</b> et des fonctionnalités de sécurité que les proxies standards. Comme les deux technologies modifient votre chemin de connexion, notre détecteur peut identifier votre connexion VPN comme un proxy.",
        
        q5: "Pourquoi mon entreprise utilise-t-elle un proxy et devrais-je m'inquiéter ?",
        a5: "Les entreprises implémentent des proxies pour plusieurs raisons légitimes : <b>filtrage de contenu</b> (limiter l'accès à certains sites), <b>optimisation de bande passante</b> (mise en cache), <b>renforcement de la sécurité</b> (scan de malware), <b>surveillance de l'activité des employés</b> (respect des politiques d'usage), et <b>accès distant</b> aux ressources internes. Bien que les proxies d'entreprise ne soient généralement pas un problème de confidentialité, souvenez-vous que votre activité en ligne sur le réseau d'entreprise peut être surveillée. Si notre outil détecte un proxy d'entreprise, c'est généralement normal dans ce contexte.",
        
        q6: "Quel est le rapport entre les CDN et les proxies ?",
        a6: "Les réseaux de diffusion de contenu (CDN) fonctionnent comme des <b>proxies inverses</b> et peuvent être détectés par notre outil. Les CDN distribuent le contenu des sites via un réseau global de serveurs pour améliorer la vitesse et la fiabilité. Quand vous accédez à un site via un CDN, votre requête est routée vers le serveur CDN le plus proche plutôt que vers le serveur d'origine. Cela apparaît comme un proxy dans votre connexion car le serveur CDN agit comme intermédiaire. Contrairement aux proxies traditionnels qui peuvent poser des problèmes de confidentialité, les CDN sont implémentés par les propriétaires de sites pour améliorer l'expérience utilisateur et font partie normale de l'infrastructure web moderne."
      },
      relatedTools: {
        title: "Outils d'analyse réseau connexes",
        description: "Explorez ces outils supplémentaires pour plus d'informations sur votre configuration réseau et sécurité :",
        tool1: {
          name: "Vérificateur de sécurité des en-têtes HTTP",
          url: "https://www.ufreetools.com/tool/http-header-security-checker",
          description: "Analyse les en-têtes de réponse HTTP des sites, détecte les configurations de sécurité comme CSP, HSTS et fournit des recommandations d'amélioration"
        },
        tool2: {
          name: "Éditeur d'en-têtes de requête",
          url: "https://www.ufreetools.com/tool/request-header-editor",
          description: "Crée, édite et teste des en-têtes de requête HTTP"
        },
        tool3: {
          name: "Référence des codes d'état HTTP",
          url: "https://www.ufreetools.com/tool/http-status-code-lookup",
          description: "Recherche et comprend les codes d'état et messages de réponse HTTP"
        },
        tool4: {
          name: "Analyseur de paramètres URL",
          url: "https://www.ufreetools.com/tool/url-params-parser",
          description: "Analyse, manipule et interprète les paramètres et chaînes de requête URL"
        }
      },
      resources: {
        title: "En savoir plus sur les proxies et la sécurité réseau",
        resource1: {
          name: "Guide de test OWASP",
          url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
          description: "OWASP est une communauté mondiale gratuite et ouverte axée sur l'amélioration de la sécurité des logiciels."
        },
        resource2: {
          name: "En-têtes HTTP - Documentation MDN",
          url: "https://developer.mozilla.org/fr/docs/Web/HTTP/Headers",
          description: "Documentation détaillée de Mozilla sur les en-têtes HTTP, y compris le contenu lié aux proxies et au forwarding."
        },
        resource3: {
          name: "IETF - En-tête HTTP Forwarded",
          url: "https://tools.ietf.org/html/rfc7239",
          description: "Document RFC 7239 officiel définissant l'en-tête Forwarded qui standardise les informations ajoutées par les proxies."
        }
      }
    }
  }