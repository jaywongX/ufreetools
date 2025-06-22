export default {
    name: 'Débogueur gRPC',
    description: 'Tester et déboguer les services gRPC et les messages protobuf',
    title: 'Débogueur gRPC en ligne',
    intro: 'Déboguez directement les services gRPC depuis votre navigateur, avec prise en charge de l\'analyse des fichiers proto et de la construction dynamique de formulaires',
    connection: {
      title: 'Connexion',
      server: 'Adresse du serveur',
      serverPlaceholder: 'Entrez l\'adresse du serveur gRPC (ex : localhost:50051)',
      useTLS: 'Utiliser TLS/SSL',
      tlsOptions: 'Options TLS',
      caCert: 'Certificat CA',
      clientCert: 'Certificat client',
      clientKey: 'Clé client',
      insecure: 'Ignorer la vérification TLS (non sécurisé)',
      timeout: 'Délai d\'expiration (secondes)',
      serverUrl: 'URL du service gRPC',
      serverUrlPlaceholder: 'https://votre-serveur-grpc.com',
      timeoutMs: 'Délai d\'expiration de la requête (ms)',
      timeoutPlaceholder: '30000',
      defaultTimeout: 'Par défaut : 30000ms (30 secondes)',
      corsNote: 'Note : Le serveur doit prendre en charge le protocole gRPC-Web et CORS',
      keepalive: 'Activer Keepalive',
      connect: 'Se connecter',
      disconnect: 'Se déconnecter'
    },
    service: {
      title: 'Service',
      definition: 'Définition du service',
      load: 'Charger un fichier Proto',
      paste: 'Coller une définition Proto',
      protoPath: 'Chemin du fichier Proto',
      importPath: 'Chemin d\'importation',
      services: 'Services',
      methods: 'Méthodes',
      selectService: 'Sélectionner un service',
      selectMethod: 'Sélectionner une méthode',
      methodType: 'Type de méthode',
      unary: 'Unaire',
      serverStreaming: 'Streaming serveur',
      clientStreaming: 'Streaming client',
      bidirectional: 'Bidirectionnel',
      protoDefinition: 'Définition du fichier Proto',
      switchToText: 'Passer à la saisie texte',
      switchToFile: 'Passer au téléchargement de fichier',
      dragDrop: 'Glissez-déposez un fichier .proto ici, ou',
      clickUpload: 'cliquez pour télécharger',
      onlyProto: 'Seuls les fichiers .proto sont pris en charge',
      loadExample: 'Charger un exemple Proto',
      formatProto: 'Formatter',
      clear: 'Effacer',
      parse: 'Analyser la définition Proto',
      parsing: 'Analyse en cours...'
    },
    request: {
      title: 'Requête',
      metadata: 'Métadonnées',
      addMetadata: 'Ajouter des métadonnées',
      key: 'Clé',
      value: 'Valeur',
      message: 'Message',
      jsonEditor: 'Éditeur JSON',
      protoEditor: 'Éditeur Proto',
      formEditor: 'Éditeur de formulaire',
      send: 'Envoyer la requête',
      cancel: 'Annuler',
      stream: 'Message en streaming',
      endStream: 'Terminer le streaming',
      exampleMessage: 'Exemple de message',
      validJson: 'JSON valide',
      invalidJson: 'JSON invalide',
      history: 'Historique des requêtes',
      body: 'Corps de la requête',
      bodyPlaceholder: 'Entrez le corps de la requête au format JSON ici...',
      runQuery: 'Exécuter la requête',
      requestSent: 'Envoyée',
      param: 'Paramètres de requête',
      edit: 'Modifier',
      sending: 'Envoi en cours...',
      time: 'Heure de la requête',
    },
    response: {
      title: 'Réponse',
      status: 'Statut',
      metadata: 'Métadonnées',
      message: 'Message',
      stream: 'Stream',
      noResponse: 'Aucune réponse reçue',
      receivedAt: 'Reçu à',
      duration: 'Durée',
      copy: 'Copier la réponse',
      download: 'Télécharger',
      clear: 'Effacer',
      streamClosed: 'Stream terminé',
      streamMessage: 'Message de stream #{number}',
      stats: 'Statistiques',
      messagesReceived: 'Messages reçus',
      startTime: 'Heure de début',
      endTime: 'Heure de fin',
      time: 'Heure de réponse'
    },
    settings: {
      title: 'Paramètres',
      theme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      language: 'Langue',
      maxResponseSize: 'Taille maximale de réponse',
      timeoutMs: 'Délai d\'expiration par défaut (ms)',
      prettyPrint: 'Affichage JSON joli',
      saveDir: 'Répertoire de sauvegarde',
      clearHistory: 'Effacer l\'historique',
      protoFormat: 'Format Proto',
      protobuf: 'Protobuf.js',
      grpcTools: 'Outils gRPC',
      reflection: 'Utiliser la réflexion serveur'
    },
    messages: {
      connecting: 'Connexion à {server}...',
      connected: 'Connecté à {server}',
      disconnected: 'Déconnecté du serveur',
      connectionError: 'Erreur de connexion : {error}',
      requestSent: 'Requête envoyée',
      responseReceived: 'Réponse reçue',
      streamingStarted: 'Streaming démarré',
      streamingEnded: 'Streaming terminé',
      protoLoaded: 'Fichier Proto chargé avec succès',
      protoError: 'Erreur de chargement du fichier Proto : {error}',
      metadataAdded: 'Métadonnées ajoutées',
      metadataError: 'Métadonnées invalides',
      savedToFile: 'Réponse sauvegardée dans un fichier',
      parsingError: 'Erreur d\'analyse du message : {error}',
      reflectionError: 'Erreur de réflexion serveur : {error}',
      invalidProto: 'Définition Proto invalide',
      emptyUrl: 'Veuillez entrer une URL de service',
      selectServiceMethod: 'Veuillez sélectionner un service et une méthode',
      invalidJson: 'Le corps de la requête n\'est pas un JSON valide : {error}',
      copy: 'Copier',
      copied: 'Réponse copiée dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement'
    },
    errors: {
      invalidArgument: 'ARGUMENT_INVALIDE - Paramètre invalide',
      notFound: 'NON_TROUVÉ - Ressource introuvable',
      alreadyExists: 'EXISTE_DEJA - Ressource déjà existante',
      permissionDenied: 'PERMISSION_REFUSEE - Permission refusée',
      internal: 'INTERNE - Erreur interne',
      requestFailed: 'Échec de la requête : {error}'
    },
    
    article: {
      title: "Débogueur gRPC : Outil interactif de test d'appels de procédure distants",
      features: {
        title: "Comprendre le débogage gRPC et les tests d'API",
        description: "<strong>Le débogueur gRPC</strong> est un outil Web complet conçu pour tester, déboguer et explorer les services gRPC directement depuis votre navigateur. Contrairement aux clients API REST traditionnels, cet <strong>outil de test de tampons de protocole</strong> offre des fonctionnalités spécialement adaptées au protocole binaire gRPC et au format de messages Protocol Buffers (protobuf), permettant aux développeurs d'interagir avec les services gRPC sans avoir à écrire de code client personnalisé.<br><br>Notre <strong>testeur client gRPC</strong> prend en charge les fonctionnalités essentielles telles que l'analyse des fichiers proto, la découverte de services, la construction de requêtes via des formulaires dynamiques, la gestion des métadonnées et la visualisation complète des réponses. Cela en fait un outil indispensable pour les développeurs d'API travaillant avec des architectures de microservices modernes qui utilisent gRPC pour une communication efficace, fortement typée et haute performance entre les services.",
        useCases: {
          title: "Cas d'utilisation pratiques des tests gRPC",
          items: [
            "<strong>Développement d'API microservices</strong> : Lors de la construction de systèmes distribués basés sur une architecture microservices, <strong>l'outil de test gRPC</strong> permet aux développeurs de valider les points de terminaison de service, vérifier les formats de messages et s'assurer que le contrat de service défini dans les fichiers proto est correctement implémenté. Cette validation interactive aide à identifier les problèmes tôt dans le processus d'intégration des services.",
            "<strong>Tests d'intégration d'API</strong> : Pour les applications utilisant des services gRPC tiers ou internes, notre débogueur fournit un moyen d'explorer les méthodes disponibles, tester différents paramètres d'entrée et comprendre les formats de réponse sans avoir à écrire de client de test. Les ingénieurs peuvent rapidement prototyper du code d'intégration en comprenant d'abord le comportement attendu via des tests manuels.",
            "<strong>Résolution de problèmes en production</strong> : Lorsqu'un comportement inattendu est rencontré dans un système de production utilisant gRPC, le débogueur permet aux ingénieurs de support et aux développeurs de reproduire des requêtes spécifiques, manipuler les paramètres et observer les réponses dans un environnement contrôlé. Cet isolement aide à déterminer si le problème provient de l'implémentation client, de la logique du service ou de la configuration réseau.",
            "<strong>Développement d'architecture Protocol Buffer</strong> : Pendant la phase de conception d'API, la fonctionnalité <strong>d'inspecteur protobuf</strong> aide à valider les définitions d'architecture en visualisant comment les définitions de messages abstraites se traduisent en structures de requêtes et réponses concrètes. Cette boucle de rétroaction améliore la conception des fichiers proto avant leur implémentation généralisée.",
            "<strong>Analyse de performance</strong> : Le débogueur fournit des informations temporelles sur les requêtes, permettant aux développeurs d'évaluer les performances des services gRPC dans différentes conditions. En testant diverses tailles et complexités de charges utiles, les équipes peuvent identifier les goulots d'étranglement potentiels dans leurs implémentations de service.",
            "<strong>Documentation et partage de connaissances</strong> : L'interface visuelle du <strong>navigateur de services gRPC</strong> facilite la démonstration des fonctionnalités d'API aux parties prenantes non techniques, nouveaux membres de l'équipe ou partenaires. Cet outil sert d'alternative interactive à la documentation API statique, aidant les autres à comprendre les fonctionnalités du service à travers des exemples concrets."
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur le débogage gRPC",
        items: [
          {
            question: "Quelle est la différence entre gRPC et les API REST ?",
            answer: "gRPC et REST représentent différentes approches de conception d'API avec des caractéristiques distinctes influençant quand chaque méthode devrait être utilisée.<br><br><strong>gRPC</strong> est un framework RPC (Remote Procedure Call) haute performance utilisant Protocol Buffers pour la sérialisation des messages et fonctionnant sur HTTP/2. Ses principaux avantages incluent :<br><br>• Une <strong>approche contrat d'abord</strong>, définissant des interfaces fortement typées dans les fichiers .proto<br>• Une <strong>sérialisation binaire efficace</strong>, produisant des messages plus petits<br>• Une <strong>prise en charge native du streaming</strong> (unaire, streaming serveur, streaming client et bidirectionnel)<br>• Des <strong>connexions multiplexées</strong> via HTTP/2 réduisant la latence<br>• Une <strong>génération de code</strong> multiplateforme assurant la sécurité des types<br><br><strong>REST</strong> (Representational State Transfer) est un style architectural utilisant généralement JSON sur HTTP/1.1, offrant :<br><br>• Une <strong>simplicité et familiarité</strong> grâce à une adoption large<br>• Des <strong>formats lisibles par l'homme</strong> comme JSON ou XML<br>• Une <strong>prise en charge native par les navigateurs</strong> sans bibliothèques supplémentaires<br>• Un <strong>couplage lâche</strong> entre client et serveur<br>• Un <strong>large écosystème d'outils</strong> pour les tests et la documentation<br><br>Le <strong>débogueur gRPC</strong> comble le manque d'outils pour gRPC, offrant des fonctionnalités d'exploration similaires à REST pour des services gRPC qui traditionnellement nécessitaient du code client personnalisé pour être testés."
          },
          {
            question: "Comment créer un fichier .proto pour les tests ?",
            answer: "La création d'un <strong>fichier de définition Protocol Buffer</strong> (.proto) est une étape fondamentale du développement gRPC. Voici un guide pour créer des fichiers de test avec notre débogueur :<br><br>1. <strong>Définir la version de syntaxe</strong> : Commencez le fichier avec `syntax = \"proto3\";` pour utiliser la dernière version de syntaxe proto.<br><br>2. <strong>Organiser avec des packages</strong> : Utilisez le mot-clé `package` pour grouper les services et messages associés, aidant à éviter les conflits de noms (ex : `package ecommerce;`).<br><br>3. <strong>Définir les messages</strong> : Créez des types de message représentant vos structures de données :<br><pre>message Produit &#123;\n  string id = 1;\n  string nom = 2;\n  double prix = 3;\n  repeated string categories = 4;\n&#125;</pre><br>4. <strong>Définir les services</strong> : Spécifiez les interfaces de service et leurs méthodes :<br><pre>service ServiceProduit &#123;\n  rpc GetProduit(GetProduitRequest) returns (Produit);\n  rpc RechercherProduits(RequeteRecherche) returns (stream Produit);\n  rpc MettreAJourProduit(Produit) returns (ReponseMiseAJour);\n&#125;</pre><br>5. <strong>Importer d'autres proto</strong> : Utilisez `import \"chemin/vers/autre.proto\";` pour référencer des définitions d'autres fichiers.<br><br>6. <strong>Ajouter des options de champ</strong> : Utilisez des options comme `[deprecated=true]` ou des options personnalisées pour améliorer les champs avec des comportements spécifiques.<br><br>Lors de l'utilisation de notre <strong>débogueur gRPC</strong>, vous pouvez directement télécharger ce fichier ou coller son contenu dans la zone de saisie texte. Le débogueur analysera le fichier et générera une interface de formulaire appropriée pour construire des requêtes à votre service."
          },
          {
            question: "Cet outil peut-il se connecter à des services gRPC sécurisés (SSL/TLS) ?",
            answer: "Oui, le <strong>débogueur gRPC</strong> prend en charge la connexion à des services gRPC sécurisés avec SSL/TLS. Voici comment il gère les connexions sécurisées :<br><br>1. <strong>Limitations basées sur le navigateur</strong> : Comme il s'agit d'un outil Web fonctionnant dans un navigateur, il opère dans les contraintes de sécurité des navigateurs. Il peut se connecter à :<br><br>• Des services supportant le <strong>protocole gRPC-Web</strong> (légèrement différent du gRPC standard)<br>• Des services avec des en-têtes <strong>CORS (Cross-Origin Resource Sharing)</strong> correctement configurés<br>• Des services avec un certificat SSL valide (pas auto-signé dans la plupart des cas)<br><br>2. <strong>Utilisation de TLS</strong> : Lors de la connexion à un service sécurisé, assurez-vous que :<br><br>• Vous utilisez le préfixe <strong>\"https://\"</strong> ou activez explicitement l'option <strong>\"Utiliser TLS/SSL\"</strong><br>• Le service possède un certificat valide approuvé par le navigateur<br>• Vérifiez si une authentification par certificat client est requise (TLS mutuel)<br><br>3. <strong>Options d'authentification</strong> : Pour les services nécessitant une authentification, vous pouvez ajouter :<br><br>• Des <strong>clés API</strong> ou <strong>jetons d'accès</strong> via les métadonnées<br>• Un en-tête <strong>d'authentification basique</strong><br>• Un <strong>jeton OAuth</strong> dans l'en-tête d'autorisation<br><br>4. <strong>Considérations sur les proxies</strong> : Dans certains environnements d'entreprise, un proxy gRPC-Web (comme Envoy) peut être nécessaire entre le navigateur et le service gRPC réel.<br><br>Si vos services internes ne satisfont pas ces exigences, envisagez d'utiliser un client gRPC de bureau ou de configurer un proxy local pour gérer les exigences de sécurité et exposer des points de terminaison compatibles pour le débogueur."
          },
          {
            question: "Pourquoi faut-il analyser le fichier proto avant d'envoyer une requête ?",
            answer: "L'analyse du fichier proto est une étape cruciale lors de l'utilisation du <strong>débogueur gRPC</strong>, pour les raisons suivantes :<br><br>1. <strong>Découverte et validation des types</strong> : gRPC est un système fortement typé où client et serveur doivent s'accorder sur le format exact des messages. Le fichier proto sert de contrat définissant :<br><br>• Quels <strong>services et méthodes</strong> sont disponibles<br>• Les <strong>types de paramètres</strong> attendus par chaque méthode<br>• Les <strong>types de réponse</strong> retournés par chaque méthode<br>• Toute <strong>structure de message imbriquée</strong> ou <strong>énumération</strong> utilisée dans l'API<br><br>2. <strong>Génération dynamique d'interface</strong> : Après analyse, le débogueur peut :<br><br>• Afficher la liste des services et méthodes disponibles<br>• Construire des formulaires de requête appropriés avec les bons champs<br>• Fournir des contrôles de saisie spécifiques aux types (champs texte, entrées numériques, boutons bascule pour les booléens, etc.)<br>• Définir des valeurs par défaut appropriées selon le type de champ<br><br>3. <strong>Sérialisation binaire</strong> : gRPC utilise Protocol Buffers comme format de transport binaire. La définition proto permet au débogueur de :<br><br>• <strong>Sérialiser</strong> votre entrée JSON au format binaire protobuf correct<br>• <strong>Désérialiser</strong> les réponses binaires en JSON lisible<br>• S'assurer que les <strong>numéros et types de champs</strong> correspondent exactement à ce qu'attend le serveur<br><br>4. <strong>Prévention d'erreurs</strong> : Sans analyse appropriée, vous pourriez envoyer des requêtes mal formatées qui échoueraient au niveau de la sérialisation avant même d'atteindre la logique du service.<br><br>Considérez le fichier proto comme une combinaison de documentation d'API et de schéma de sérialisation. Le <strong>protocole gRPC</strong> a fondamentalement besoin de ces informations pour fonctionner correctement, contrairement aux API REST où vous pourriez explorer des points de terminaison avec peu de connaissance préalable."
          },
          {
            question: "Quels types de méthodes gRPC puis-je tester avec ce débogueur ?",
            answer: "Ce <strong>débogueur gRPC</strong> prend en charge les quatre modes de communication définis dans la spécification gRPC, chacun convenant à différents cas d'usage :<br><br>1. <strong>RPC unaire</strong> : Mode requête-réponse standard où le client envoie une seule requête et reçoit une seule réponse. C'est le plus similaire aux appels d'API REST traditionnels, adapté pour :<br><br>• Des opérations simples de récupération de données<br>• Des opérations de création, mise à jour ou suppression<br>• Des requêtes d'authentification et validation<br><br>Exemple : `rpc GetUtilisateur(GetUtilisateurRequest) returns (Utilisateur);`<br><br>2. <strong>RPC de streaming serveur</strong> : Le client envoie une seule requête et reçoit une série de messages de réponse. Ce mode convient pour :<br><br>• Des sources de données en temps réel<br>• Des mises à jour de progression pour des opérations longues<br>• La récupération de grands ensembles de données avec chargement progressif<br><br>Exemple : `rpc ListerProduits(RequeteListe) returns (stream Produit);`<br><br>3. <strong>RPC de streaming client</strong> : Le client envoie une série de messages et reçoit une seule réponse. Cette approche est utile pour :<br><br>• Le téléchargement de grands ensembles de données<br>• La transmission continue de données de capteurs<br>• Des opérations par lots produisant un résultat unique<br><br>Exemple : `rpc UploaderDonnees(stream MorceauDonnees) returns (ResumeUpload);`<br><br>4. <strong>RPC bidirectionnel</strong> : Client et serveur peuvent envoyer et recevoir plusieurs messages dans n'importe quel ordre. Ce mode entièrement asynchrone permet :<br><br>• Des applications de chat<br>• Des jeux ou collaborations en temps réel<br>• Des workflows complexes impliquant des échanges bidirectionnels<br><br>Exemple : `rpc Chat(stream MessageChat) returns (stream MessageChat);`<br><br>Notre débogueur fournit des éléments d'interface appropriés pour chaque type, vous permettant de tester tous les modes de communication, avec un retour visuel pour les réponses en streaming et des contrôles appropriés pour envoyer des messages en streaming depuis le client."
          }
        ]
      },
      guide: {
        title: "Comment utiliser le débogueur gRPC : guide étape par étape",
        step1: "<strong>Définir l'URL du service gRPC</strong> : Entrez l'adresse de votre service gRPC dans le champ URL. Pour des tests depuis le navigateur, ce doit être un service prenant en charge le protocole gRPC-Web avec des en-têtes CORS appropriés. Si vous testez un service sécurisé, assurez-vous d'utiliser le protocole HTTPS (ex : https://votre-service-grpc.com).",
        step2: "<strong>Configurer le délai d'expiration et les options de connexion</strong> : Configurez le délai d'expiration des requêtes (en millisecondes) selon le temps de réponse attendu par votre service. La valeur par défaut de 30000ms (30 secondes) convient à la plupart des services, mais peut nécessiter des ajustements pour des opérations longues ou des tests sur des réseaux lents.",
        step3: "<strong>Fournir la définition Protocol Buffer</strong> : Vous pouvez télécharger des fichiers .proto en les glissant-déposant dans la zone de téléchargement ou en cliquant pour les sélectionner, ou utiliser le commutateur pour passer en mode saisie texte et coller directement votre définition Proto. Pour les débutants, l'option \"Charger un exemple Proto\" fournit un modèle de départ pour comprendre le format.",
        step4: "<strong>Analyser la définition Proto</strong> : Cliquez sur \"Analyser la définition Proto\" pour traiter votre fichier .proto. Cela analysera l'interface de service, les types de messages et les définitions de champs, permettant au débogueur de générer des formulaires de requête appropriés et de sérialiser/désérialiser correctement les messages. Si votre fichier proto contient des erreurs de syntaxe, vous recevrez un message d'erreur pour identifier le problème.",
        step5: "<strong>Sélectionner le service et la méthode</strong> : Après analyse réussie, sélectionnez un service spécifique (si votre fichier proto en définit plusieurs) dans la liste déroulante. Puis choisissez la méthode à tester dans la liste des méthodes disponibles. Le type de méthode (unaire, streaming serveur, streaming client ou bidirectionnel) sera indiqué pour vous aider à comprendre le mode de communication attendu.",
        step6: "<strong>Construire et personnaliser votre requête</strong> : Le débogueur génère un modèle JSON pour le type de requête de la méthode sélectionnée. Modifiez la structure JSON fournie pour inclure vos valeurs de test. L'éditeur formate et valide automatiquement votre contenu JSON, s'assurant qu'il correspond à la structure de message attendue. Si nécessaire, utilisez le bouton de formatage pour nettoyer votre JSON.",
        step7: "<strong> envoyer la demande et analyser la réponse </strong> : cliquez sur le bouton \" envoyer la demande \" pour transférer votre appel gRPC au service. Pour les appels unaires, vous verrez les données de réponse affichées dans la section réponses, ainsi que les informations de synchronisation. Pour les appels en continu, vous verrez le message de réponse affiché à l’arrivée. Si une erreur se produit, le débogueur affiche les détails de l’erreur pour aider à résoudre le problème."
      },
      conclusion: "Le débogueur gRPC fournit une interface intuitive basée sur un navigateur pour interagir avec le monde puissant mais complexe des services gRPC. En faisant le pont entre les opérateurs humains et le protocole binaire gRPC, cet outil simplifie considérablement le processus de développement, de test et de dépannage des problèmes de services API modernes. Que vous conceviez de nouvelles architectures de microservices, intégriez des services gRPC existants ou diagnostiquez des problèmes dans votre système de production, l’approche visuelle fournie par ce débogueur réduit la courbe d’apprentissage et accélère les flux de développement. Alors que de plus en plus d’organisations adoptent le gRPC pour ses performances et ses avantages de type fort, disposer d’outils de test accessibles devient de plus en plus précieux pour assurer la qualité et la fiabilité des API."
    }
  } 

       