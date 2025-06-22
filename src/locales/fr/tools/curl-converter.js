export default {
    name: 'Convertisseur cURL',
    description: 'Convertir des commandes cURL en extraits de code pour différents langages de programmation',
    title: 'cURL vers code',
    subtitle: 'Transformez des commandes cURL en code pour plusieurs langages, facilitant l\'intégration de requêtes HTTP dans vos projets',
    input: {
      title: 'Commande cURL',
      placeholder: 'Entrez une commande cURL ici',
      parse: 'Analyser cURL',
      clear: 'Effacer',
      examples: 'Exemples :',
      options: 'Options d\'analyse',
      validateCommand: 'Valider la commande',
      formatCurl: 'Formatter cURL'
    },
    options: {
      detectAuth: 'Détection automatique d\'authentification',
      resolveVariables: 'Résoudre les variables d\'environnement',
      processContinuations: 'Traiter les continuations de ligne (\\)',
      followRedirects: 'Suivre les redirections',
      preserveHeaders: 'Conserver tous les en-têtes',
      ignoreErrors: 'Ignorer les erreurs d\'analyse',
      noDuplicateHeaders: 'Pas d\'en-têtes dupliqués (garder le dernier)'
    },
    output: {
      title: 'Code généré',
      language: 'Langage cible',
      copy: 'Copier',
      copyTooltip: 'Copier dans le presse-papiers',
      download: 'Télécharger',
      beautify: 'Beautifier',
      codeTitle: 'Code {language}',
      errorTitle: 'Erreur de conversion',
      languages: {
        python: 'Python (requests)',
        pythonHttp: 'Python (http.client)',
        node: 'Node.js (axios)',
        nodeRequest: 'Node.js (request)',
        nodeFetch: 'Node.js (fetch)',
        java: 'Java (HttpClient)',
        javaOkHttp: 'Java (OkHttp)',
        php: 'PHP (cURL)',
        phpGuzzle: 'PHP (Guzzle)',
        go: 'Go',
        rust: 'Rust',
        swift: 'Swift',
        csharp: 'C# (HttpClient)',
        ruby: 'Ruby',
        dart: 'Dart',
        powershell: 'PowerShell',
        browser: 'Navigateur (fetch)',
        curl: 'cURL (formaté)',
        json: 'JSON (objet requête)',
        har: 'HAR (archive HTTP)',
        javascript: 'JavaScript (Fetch)'
      }
    },
    request: {
      title: 'Détails de la requête',
      method: 'Méthode',
      url: 'URL',
      headers: 'En-têtes',
      body: 'Corps',
      auth: 'Authentification',
      options: 'Options',
      cookie: 'Cookie',
      queryParams: 'Paramètres',
      formData: 'Données de formulaire',
      visualize: 'Visualiser'
    },
    visualization: {
      title: 'Visualisation',
      request: 'Requête',
      response: 'Réponse',
      headers: 'En-têtes',
      body: 'Corps',
      timing: 'Chronologie',
      raw: 'Brut'
    },
    analysis: {
      title: 'Analyse',
      insecureWarning: 'Attention : cette commande utilise --insecure/-k (vérification SSL désactivée)',
      verboseIgnored: 'Note : le mode verbeux (-v) est ignoré',
      unsupportedOptions: 'Options non supportées',
      warnings: 'Avertissements',
      info: 'Informations'
    },
    messages: {
      parsing: 'Analyse de la commande cURL...',
      parseFailed: 'Échec de l\'analyse : {error}',
      parseSuccess: 'Commande analysée avec succès',
      copied: 'Code copié dans le presse-papiers',
      downloaded: 'Code téléchargé',
      invalidCurl: 'Commande cURL invalide',
      emptyCurl: 'Veuillez entrer une commande cURL',
      validCurl: 'Commande cURL valide',
      unknownOption: 'Option inconnue : {option}',
      unsupportedMethod: 'Attention : la méthode HTTP {method} n\'est pas supportée dans tous les langages',
      curlRequired: 'La commande doit commencer par "curl "',
      copyFailed: 'Échec de la copie, veuillez copier manuellement'
    },
    examples: {
      title: 'Exemples de commandes cURL',
      basic: 'Requête GET simple',
      headers: 'En-têtes personnalisés',
      post: 'POST avec JSON',
      formData: 'Soumission de formulaire',
      auth: 'Authentification basique',
      complex: 'Exemple complexe',
      exampleCommands: {
        getRequest: 'Requête GET',
        postJson: 'POST JSON',
        postForm: 'POST formulaire',
        withAuth: 'Avec authentification',
        uploadFile: 'Téléversement de fichier'
      }
    },
    actions: {
      convert: 'Convertir',
      converting: 'Conversion en cours...'
    },
    article: {
      title: "Convertisseur cURL : transformer des requêtes en ligne de commande en code",
      features: {
        title: "Comprendre la conversion cURL et ses applications",
        description: "Le <strong>convertisseur cURL</strong> est un outil puissant qui transforme des commandes cURL en extraits de code exécutables pour plusieurs langages de programmation. Cet outil comble le fossé entre la documentation d'API, les tests en ligne de commande et l'implémentation réelle, permettant aux développeurs d'intégrer rapidement des requêtes HTTP dans leurs projets sans conversion manuelle de syntaxe.<br><br>La fonctionnalité principale de ce <strong>convertisseur cURL vers code</strong> est d'analyser la syntaxe des commandes cURL (incluant les en-têtes, méthodes, authentification, données et autres options) et de générer le code équivalent dans votre langage préféré. L'outil supporte les langages populaires comme Python, JavaScript, PHP, Java, Ruby, Go et C#, permettant une transition fluide entre les tests en terminal et l'implémentation en production. Que vous utilisiez des services REST, GraphQL ou des API SOAP, ce <strong>générateur de requêtes HTTP</strong> gère le travail de conversion syntaxique, réduisant significativement le temps de développement et éliminant les erreurs de syntaxe.",
        useCases: {
          title: "Cas d'utilisation du convertisseur cURL",
          items: [
            "<strong>Accélération de l'intégration d'API</strong> : Lors de l'intégration d'API tierces, les développeurs testent souvent les endpoints avec des commandes cURL fournies dans la documentation. Le <strong>parseur de commandes cURL</strong> permet de convertir ces requêtes directement dans le langage de votre projet, accélérant l'intégration et garantissant la reproduction exacte du format de requête documenté.",
            "<strong>Développement multi-langages</strong> : Les équipes travaillant avec plusieurs technologies peuvent utiliser le <strong>générateur de code HTTP</strong> pour partager des modèles d'interaction API. Les développeurs backend peuvent valider des endpoints avec cURL, puis fournir aux développeurs frontend du code JavaScript prêt à l'emploi exécutant la même requête.",
            "<strong>Création de documentation API</strong> : Les auteurs techniques et développeurs d'API peuvent générer des exemples de code cohérents dans plusieurs langages à partir d'une seule commande cURL validée.",
            "<strong>Modernisation de systèmes legacy</strong> : Lors de la mise à jour d'applications legacy, les développeurs doivent souvent reproduire des interactions HTTP existantes dans du code moderne.",
            "<strong>Débogage et dépannage</strong> : Lorsqu'une requête API échoue dans une application, les développeurs peuvent extraire la requête problématique sous forme de commande cURL, la tester et la modifier directement dans le terminal, puis utiliser le convertisseur pour générer le code corrigé.",
            "<strong>Outil éducatif</strong> : Les enseignants et étudiants peuvent utiliser le <strong>générateur de code</strong> pour comprendre la structure des requêtes HTTP dans différents langages."
          ]
        }
      },
      faq: {
        title: "FAQ sur la conversion cURL",
        items: [
          {
            question: "Qu'est-ce que cURL et pourquoi le convertir en code ?",
            answer: "cURL (Client URL) est un outil en ligne de commande pour transférer des données via URL en utilisant divers protocoles. Les développeurs utilisent souvent cURL pour tester des endpoints API, déboguer des requêtes HTTP et documenter des interactions API. Cependant, lors de l'implémentation de ces requêtes dans des applications réelles, la syntaxe cURL doit être convertie dans le langage utilisé. Le <strong>convertisseur cURL</strong> automatise ce processus, éliminant les erreurs de syntaxe manuelles et économisant un temps considérable."
          },
          {
            question: "À quel point le code généré est-il précis par rapport à la commande cURL originale ?",
            answer: "Le <strong>convertisseur cURL vers code</strong> produit des résultats hautement précis, reproduisant fonctionnellement la commande originale tout en respectant les idiomes du langage cible. Le convertisseur conserve tous les composants essentiels de la requête : URL, méthode HTTP, en-têtes, paramètres, corps de requête, credentials d'authentification et options communes comme le suivi des redirections et la vérification SSL."
          },
          {
            question: "Quels langages sont supportés par le convertisseur ?",
            answer: "Le <strong>générateur de code HTTP</strong> supporte plusieurs langages majeurs utilisés pour les interactions API :<br><br>• <strong>Python</strong> : bibliothèque requests et http.client standard<br>• <strong>JavaScript/Node.js</strong> : plusieurs variantes dont Fetch API, Axios et Request<br>• <strong>PHP</strong> : fonctions cURL natives et client HTTP Guzzle<br>• <strong>Java</strong> : HttpClient (Java 11+) et OkHttp<br>• <strong>Go</strong> : client HTTP standard<br>• <strong>Ruby</strong> : Net::HTTP natif<br>• <strong>C#</strong> : implémentation HttpClient<br>• <strong>PowerShell</strong> : Invoke-WebRequest<br>• <strong>Rust</strong> : client reqwest"
          },
          {
            question: "Le convertisseur peut-il gérer des commandes cURL complexes avec plusieurs options ?",
            answer: "Oui, le <strong>parseur de commandes cURL</strong> peut traiter des commandes avec de nombreuses options et des structures de requête complexes. Le convertisseur supporte :<br><br>• <strong>Méthodes d'authentification</strong> : basique, Bearer token, clés API, OAuth<br>• <strong>En-têtes personnalisés</strong> : avec toutes valeurs<br>• <strong>Corps de requête</strong> : JSON, données de formulaire, données binaires<br>• <strong>Méthodes HTTP</strong> : standards (GET, POST, PUT, DELETE, PATCH etc.)<br>• <strong>Paramètres URL</strong><br>• <strong>Téléversement de fichiers</strong><br>• <strong>Options SSL/TLS</strong><br>• <strong>Configuration de proxy</strong><br>• <strong>Cookies</strong>"
          },
          {
            question: "Comment garantir que le code généré suit les bonnes pratiques du langage ?",
            answer: "Le <strong>générateur de code</strong> est conçu pour produire du code non seulement fonctionnel mais aussi conforme aux idiomes et bonnes pratiques de chaque langage. Pour chaque langage supporté, le convertisseur implémente plusieurs optimisations :<br><br>• <strong>Choix de bibliothèque</strong> : utilise les clients HTTP les plus appropriés (ex: requests pour Python, Axios pour Node.js)<br>• <strong>Gestion des erreurs</strong> : inclut des modèles appropriés de vérification et gestion d'exceptions<br>• <strong>Gestion des ressources</strong> : fermeture correcte des connexions quand applicable<br>• <strong>Syntaxe moderne</strong> : utilise les fonctionnalités modernes (async/await en JavaScript, try-with-resources en Java)<br>• <strong>Lisibilité</strong> : code formaté avec indentation et noms de variables significatifs"
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser le convertisseur cURL",
        steps: [
          "<strong>Entrez votre commande cURL</strong> : Collez ou entrez votre commande cURL dans le champ d'entrée. Vous pouvez utiliser des commandes provenant de documentation API, d'outils de développement navigateur, d'export Postman ou toute commande cURL valide que vous avez créée.",
          "<strong>Sélectionnez le langage cible</strong> : Choisissez le langage de programmation vers lequel vous voulez convertir votre commande cURL. L'outil supporte plusieurs langages couramment utilisés pour les interactions API.",
          "<strong>Cliquez sur Convertir</strong> : Après avoir entré la commande et sélectionné le langage, cliquez sur le bouton \"Convertir\" pour traiter la commande cURL.",
          "<strong>Vérifiez le code généré</strong> : Examinez le code produit dans la zone d'affichage. Le code converti inclura tous les imports nécessaires, l'initialisation appropriée du client HTTP, la configuration de la requête avec les bons en-têtes et format de corps, ainsi qu'un traitement de base de la réponse.",
          "<strong>Copiez le code dans votre projet</strong> : Satisfait du code généré, cliquez sur \"Copier\" pour le placer dans le presse-papiers. Vous pouvez ensuite le coller directement dans votre environnement de développement.",
          "<strong>Adaptez selon vos besoins</strong> : Bien que le code généré soit fonctionnellement complet, vous pourriez vouloir l'intégrer avec votre système de gestion d'erreurs, journalisation ou traitement de données.",
          "<strong>Testez la requête implémentée</strong> : Après intégration dans votre projet, testez la requête HTTP pour vérifier qu'elle se comporte comme attendu."
        ]
      },
      conclusion: "Le convertisseur cURL sert de pont crucial entre l'exploration d'API et leur implémentation, simplifiant significativement le processus de développement d'applications interagissant avec des services web. En automatisant la conversion de requêtes HTTP en ligne de commande vers du code concis et idiomatique dans plusieurs langages, il élimine une source importante d'erreurs et de frustrations dans l'intégration d'API. Cet outil économise non seulement un temps précieux de développement, mais garantit aussi la cohérence entre les appels API testés et leur implémentation en production."
    }
  }