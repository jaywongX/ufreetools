export default {
    name: 'Testeur WebSocket',
    description: 'Se connecter à un serveur WebSocket, envoyer des messages et voir les réponses',
    connection: {
      url: 'URL WebSocket',
      urlPlaceholder: 'Exemple : ws://echo.websocket.org',
      protocol: 'Sous-protocole (optionnel)',
      protocolPlaceholder: 'Séparés par des virgules',
      connect: 'Connexion',
      disconnect: 'Déconnexion',
      status: 'Statut de connexion',
      connected: 'Connecté',
      disconnected: 'Déconnecté',
      waiting: 'En attente de connexion',
      autoReconnect: 'Reconnexion automatique',
      reconnectMessage: 'Tentative de reconnexion dans {0} secondes...'
    },
    options: {
      title: 'Options',
      autoScroll: 'Défilement automatique des logs'
    },
    messages: {
      send: 'Envoyer un message',
      logs: 'Journal des messages',
      emptyLogs: 'Les messages apparaîtront ici après connexion',
      placeholder: 'Saisissez votre message...',
      sendButton: 'Envoyer',
      clearButton: 'Effacer',
      copyButton: 'Copier',
      clearLogs: 'Effacer le journal',
      copyLogs: 'Copier le journal',
      format: {
        title: 'Format',
        text: 'Texte brut',
        json: 'JSON',
        binary: 'Binaire'
      },
      templates: {
        json: 'JSON',
        text: 'Texte'
      },
      types: {
        sent: 'Envoyé →',
        received: 'Reçu ←',
        error: 'Erreur !',
        info: 'Information'
      }
    },
    savedConnections: {
      title: 'Connexions sauvegardées',
      empty: 'Aucune connexion sauvegardée',
      save: 'Sauvegarder cette connexion',
      saveConnection: 'Enregistrer la connexion',
      connectionName: 'Nom de la connexion',
      load: 'Charger',
      delete: 'Supprimer',
      cancel: 'Annuler'
    },
    testServers: {
      title: 'Serveurs de test',
      description: 'Voici quelques serveurs WebSocket publics pour vos tests :',
      useServer: 'Utiliser ce serveur',
      servers: {
        echo: {
          name: 'Test Echo',
          description: 'Serveur echo sécurisé avec support WSS'
        },
        postman: {
          name: 'WebSocket.org',
          description: 'Service Echo de Postman avec support WSS'
        }
      }
    },
    logs: {
      connectingTo: 'Connexion à {0}...',
      connectionSuccess: 'Connexion réussie',
      connectionError: 'Erreur WebSocket',
      connectionClosed: 'Connexion fermée (code : {0}{1})',
      invalidJson: 'JSON invalide : {0}',
      sendFailed: 'Échec d\'envoi : {0}',
      emptyMessage: 'Le message ne peut pas être vide',
      notConnected: 'Non connecté au WebSocket',
      copied: 'Journal copié dans le presse-papiers',
      copyFailed: 'Échec de copie : {0}',
      serverSelected: 'Serveur sélectionné : {0}',
      binaryData: '[Données binaires]'
    },
    article: {
      title: "Testeur WebSocket : Outil de test de communication en temps réel",
      features: {
        title: "Comprendre la technologie WebSocket et ses applications",
        description: "Le <strong>Testeur WebSocket</strong> est un outil complet spécialement conçu pour tester, déboguer et explorer les communications en temps réel entre clients et serveurs utilisant le protocole WebSocket. Contrairement aux connexions HTTP traditionnelles qui nécessitent une nouvelle requête pour chaque interaction, WebSocket fournit un canal de communication bidirectionnel persistant qui reste ouvert jusqu'à ce qu'une partie le ferme explicitement.<br><br>Ce <strong>client WebSocket</strong> permet aux développeurs d'établir des connexions avec des serveurs WebSocket, d'envoyer des messages personnalisés dans différents formats (texte, JSON ou binaire) et de voir les réponses en temps réel. Avec des fonctionnalités comme la gestion des connexions, l'enregistrement des messages et la validation des formats, ce <strong>testeur de communication temps réel</strong> fournit tout ce dont vous avez besoin pour développer et déboguer des implémentations WebSocket sur différentes plateformes et environnements.",
        useCases: {
          title: "Cas d'utilisation pratiques du test WebSocket",
          items: [
            "<strong>Développement et débogage d'API</strong> : Lors du développement d'API basées sur WebSocket, le <strong>testeur WebSocket</strong> vous permet de vous connecter à des points de terminaison de développement, d'envoyer des messages de test et de vérifier que le serveur répond correctement à différents formats de requêtes et cas particuliers. Cette approche de test interactive aide à identifier les problèmes tôt dans le cycle de développement, bien avant que les clients tentent de se connecter à votre service.",
            
            "<strong>Test d'applications temps réel</strong> : Pour les applications qui dépendent de <strong>flux de données en temps réel</strong> comme les systèmes de chat, tableaux de bord ou plateformes collaboratives, ce testeur vous permet de simuler des connexions client et de vérifier que la messagerie, la diffusion d'événements et la synchronisation d'état fonctionnent comme prévu. Vous pouvez tester la latence des messages, les notifications push du serveur et les mécanismes d'abonnement client.",
            
            "<strong>Communication avec appareils IoT</strong> : Les appareils IoT utilisent souvent WebSocket pour établir des <strong>connexions persistantes légères</strong> avec un serveur central ou une plateforme cloud. Le testeur WebSocket peut simuler des modèles de communication IoT, vous aidant à tester l'enregistrement des appareils, la transmission de commandes, les rapports de télémétrie et d'autres flux de communication IoT essentiels, sans déployer de matériel physique.",
            
            "<strong>Interaction avec serveurs de jeu</strong> : Les jeux multijoueurs en ligne s'appuient souvent sur WebSocket pour les <strong>interactions joueur en temps réel</strong> et les mises à jour d'état de jeu. Les développeurs peuvent utiliser cet outil pour tester les réponses du serveur aux actions des joueurs, vérifier la synchronisation de l'état du jeu et mesurer les caractéristiques de performance comme le débit des messages et la latence dans différentes conditions.",
            
            "<strong>Flux de données financières</strong> : Les plateformes de trading et services financiers utilisent WebSocket pour fournir des <strong>données de marché en temps réel</strong> et traiter les transactions. Le testeur WebSocket permet aux développeurs d'applications financières de vérifier les abonnements aux flux de données, tester le traitement des événements de marché et s'assurer que les informations financières sensibles au facteur temps sont traitées de manière fiable.",
            
            "<strong>Dépannage en production</strong> : Lors de problèmes de connexion ou de messagerie en production, les ingénieurs support peuvent utiliser le <strong>testeur de connexion WebSocket</strong> pour reproduire les scénarios utilisateurs, vérifier la disponibilité du serveur et diagnostiquer les problèmes de format de message ou de protocole sans modifier le code de l'application en production."
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur les tests WebSocket",
        items: [
          {
            question: "Quelle est la différence entre WebSocket et HTTP ?",
            answer: "WebSocket et HTTP répondent à des besoins de communication différents dans les applications web. HTTP est un protocole requête-réponse où chaque interaction nécessite une nouvelle connexion initiée par le client. Le client envoie une requête, le serveur répond, puis la connexion se ferme. Ce modèle convient à la navigation web traditionnelle mais génère une surcharge importante pour les applications temps réel.<br><br>WebSocket, quant à lui, établit une <strong>connexion persistante</strong> entre client et serveur qui reste ouverte jusqu'à fermeture explicite. Après une poignée de main initiale (via HTTP), la connexion est mise à niveau vers le protocole WebSocket, permettant au client et au serveur d'envoyer des messages à tout moment sans surcharge de connexion supplémentaire. Cette <strong>communication full-duplex</strong> permet de véritables applications temps réel avec une latence et une utilisation de bande passante bien inférieures aux méthodes HTTP basées sur le polling. Notre outil de test WebSocket vous aide à explorer ces différences en vous permettant d'établir des connexions WebSocket et d'expérimenter l'échange de messages bidirectionnel."
          },
          {
            question: "Pourquoi ma connexion WebSocket se déconnecte-t-elle après une période d'inactivité ?",
            answer: "Les connexions WebSocket peuvent se fermer pendant les périodes d'inactivité en raison de plusieurs facteurs dans le chemin réseau entre client et serveur. Les causes les plus courantes incluent :<br><br>• <strong>Timeouts des proxies</strong> : Les proxies d'entreprise, répartiteurs de charge ou passerelles réseau ont souvent des timeouts pour les connexions inactives afin d'économiser des ressources.<br>• <strong>Paramètres de pare-feu</strong> : Les pare-feux réseau peuvent avoir des politiques de timeout de session qui ferment les connexions longue durée sans activité récente.<br>• <strong>Timeouts côté serveur</strong> : De nombreuses implémentations de serveurs WebSocket ont leurs propres timeouts d'inactivité pour gérer les ressources.<br>• <strong>Changements réseau client</strong> : Les appareils mobiles qui changent de réseau ou passent en mode veille peuvent interrompre la connexion.<br><br>Pour maintenir une connexion WebSocket persistante, implémentez un <strong>mécanisme de heartbeat</strong>, échangeant régulièrement (généralement toutes les 30-45 secondes) de petits messages ping/pong. Cela maintient la connexion active et empêche les composants réseau intermédiaires de la fermer. Notre outil de test WebSocket inclut une fonction de reconnexion automatique pour vous aider à tester la résilience des connexions et les stratégies de récupération."
          },
          {
            question: "Puis-je utiliser le testeur WebSocket pour des connexions sécurisées (WSS) ?",
            answer: "Oui, le <strong>testeur WebSocket</strong> prend entièrement en charge les connexions WebSocket sécurisées (WSS) qui fonctionnent via TLS/SSL, similairement à comment HTTPS est utilisé pour le trafic web classique. Lors de la connexion à un point de terminaison WSS (URL commençant par \"wss://\"), notre outil gère automatiquement le handshake TLS et le processus de validation de certificat.<br><br>Les WebSocket sécurisés sont essentiels pour :<br><br>• Protéger les données sensibles transmises entre client et serveur<br>• Respecter les exigences de conformité pour les communications sécurisées<br>• Se connecter à des services hébergés sur des domaines HTTPS (en raison des restrictions des navigateurs modernes sur le contenu mixte)<br>• Prévenir les attaques de l'homme du milieu et la falsification de messages<br><br>L'outil fonctionne de manière transparente avec les points de terminaison sécurisés (WSS) et non sécurisés (WS), vous permettant de tester des serveurs de développement en localhost ou des services sécurisés de niveau production. Lors des tests avec des certificats auto-signés pendant le développement, notez que bien que notre outil basé sur le navigateur doive respecter les politiques de sécurité du navigateur, vous pouvez toujours établir des connexions avec des serveurs WebSocket sécurisés correctement configurés."
          },
          {
            question: "Comment formater correctement des messages JSON pour la communication WebSocket ?",
            answer: "Le formatage correct des messages JSON pour la communication WebSocket est crucial pour une interaction réussie avec la plupart des API WebSocket modernes. Voici les meilleures pratiques clés à suivre :<br><br>1. <strong>Syntaxe JSON valide</strong> : Assurez-vous que vos messages suivent le format JSON correct, avec des clés entre guillemets, un usage approprié des types de données et des accolades équilibrées. L'option de format JSON de notre testeur WebSocket valide automatiquement votre JSON avant envoi.<br><br>2. <strong>Structure des messages</strong> : La plupart des API WebSocket attendent une structure de message spécifique, incluant généralement :<br>• Un champ de type ou d'action (ex : \"type\": \"subscribe\")<br>• Une charge utile de données avec les informations réelles<br>• Des métadonnées optionnelles comme un ID de message ou un horodatage<br><br>Exemple de message bien structuré :<br><pre>&#123;<br>  \"type\": \"subscribe\",<br>  \"channel\": \"market_data\",<br>  \"symbols\": [\"BTC/USD\", \"ETH/USD\"],<br>  \"requestId\": \"12345\"<br>&#125;</pre><br><br>3. <strong>Échappement des caractères spéciaux</strong> : Lors de l'inclusion de guillemets ou de barres obliques inverses dans les valeurs de chaîne JSON, assurez-vous qu'ils sont correctement échappés.<br><br>4. <strong>Utilisation des types de données appropriés</strong> : Envoyez les nombres comme nombres (sans guillemets), les booléens comme true/false, les tableaux entre crochets.<br><br>Notre testeur WebSocket fournit des modèles JSON pour vous aider à démarrer avec des messages correctement formatés."
          },
          {
            question: "Comment sauvegarder et réutiliser des connexions WebSocket pour des tests répétés ?",
            answer: "Le <strong>testeur WebSocket</strong> offre plusieurs fonctionnalités pour sauvegarder et réutiliser des configurations de connexion, permettant des tests répétés efficaces :<br><br>1. <strong>Gestion des connexions</strong> : L'outil vous permet de sauvegarder des connexions WebSocket avec un nom personnalisé pour une identification facile. Chaque configuration sauvegardée stocke l'URL WebSocket et les sous-protocoles optionnels.<br><br>2. <strong>Reconnexion en un clic</strong> : Les connexions sauvegardées peuvent être chargées et connectées en un clic, évitant de ressaisir les détails de connexion pendant les sessions de test.<br><br>3. <strong>Stockage persistant</strong> : Vos connexions sauvegardées sont stockées dans le stockage local du navigateur, restant ainsi disponibles entre les sessions et redémarrages du navigateur.<br><br>4. <strong>Modèles de messages de test</strong> : En plus des connexions sauvegardées, vous pouvez utiliser les modèles JSON et texte fournis pour tester efficacement les modèles de messages courants.<br><br>5. <strong>Raccourcis vers serveurs de test</strong> : Si vous n'avez pas votre propre serveur pour des tests rapides, l'outil inclut des raccourcis vers des serveurs echo WebSocket publics fiables.<br><br>Ce <strong>système complet de gestion des connexions</strong> est particulièrement précieux pour les développeurs travaillant avec plusieurs points de terminaison WebSocket dans différents environnements (développement, staging, production) ou ceux devant tester régulièrement diverses opérations d'API nécessitant des paramètres de connexion différents."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour utiliser le testeur WebSocket",
        steps: [
          "<strong>Saisir l'URL WebSocket</strong> : Commencez par entrer l'adresse du serveur WebSocket dans le champ URL. Les URL WebSocket commencent par 'ws://' pour les connexions standard ou 'wss://' pour les connexions sécurisées (similaires à http:// et https://). Si vous n'avez pas de serveur WebSocket à tester, vous pouvez en sélectionner un parmi ceux proposés dans la section \"Serveurs de test\" en bas de l'outil.",
          "<strong>Configurer les options de connexion</strong> : Si votre serveur WebSocket nécessite des sous-protocoles spécifiques, entrez-les dans le champ \"Sous-protocole\" sous forme de liste séparée par des virgules. Vous pouvez également activer \"Reconnexion automatique\" si vous souhaitez que l'outil tente automatiquement de se reconnecter en cas de déconnexion inattendue. L'option \"Défilement automatique des logs\" maintient le journal des messages synchronisé avec les derniers messages.",
          "<strong>Établir la connexion</strong> : Cliquez sur le bouton \"Connexion\" pour initier la connexion WebSocket. L'indicateur de statut affichera \"En attente de connexion\" pendant le handshake, puis \"Connecté\" en cas de succès ou \"Déconnecté\" en cas d'échec. Tout événement de connexion ou erreur sera affiché dans la zone de journal des messages.",
          "<strong>Préparer votre message</strong> : Une fois connecté, vous pouvez saisir votre message dans la zone de texte \"Envoyer un message\". Utilisez le menu déroulant de format pour sélectionner le format approprié pour votre message : \"Texte brut\" pour les messages texte simples, \"JSON\" pour envoyer des données structurées (l'outil validera le format JSON), ou \"Binaire\" pour envoyer des données binaires.",
          "<strong>Envoyer et surveiller les messages</strong> : Cliquez sur \"Envoyer\" pour transmettre votre message au serveur WebSocket. Les messages envoyés apparaîtront dans la zone \"Journal des messages\" avec un horodatage et l'étiquette \"Envoyé\". Lorsque le serveur répond, les messages entrants seront affichés avec l'étiquette \"Reçu\". Vous pouvez effacer le champ de saisie de message ou le journal à tout moment avec leurs boutons respectifs.",
          "<strong>Sauvegarder la connexion pour un usage futur</strong> : Si vous testez fréquemment ce point de terminaison WebSocket, cliquez sur \"Sauvegarder cette connexion\" pour enregistrer les détails de la connexion. Vous serez invité à fournir un nom pour cette connexion. Les connexions sauvegardées apparaissent dans le panneau \"Connexions sauvegardées\" pour un accès rapide lors de futures sessions de test.",
          "<strong>Analyser les modèles de communication</strong> : Utilisez le journal chronologique des messages pour analyser l'ordre et le timing des messages entre client et serveur. Cela aide à identifier les problèmes dans le traitement des messages, les temps de réponse ou le protocole de communication. À des fins de débogage, vous pouvez copier l'intégralité du journal pour le partager avec votre équipe ou le documenter dans des rapports de bugs."
        ]
      },
      conclusion: "Le testeur WebSocket est un outil essentiel pour les développeurs d'applications temps réel, permettant de tester et déboguer efficacement les connexions WebSocket sans implémentation client personnalisée. En fournissant une interface visuelle pour établir des connexions, envoyer des messages dans différents formats et surveiller la communication bidirectionnelle, il accélère considérablement les workflows de développement d'applications basées sur WebSocket. Que vous construisiez un système de chat, un tableau de bord temps réel, une plateforme IoT ou un jeu multijoueur, ce testeur fournit les fonctionnalités nécessaires pour garantir que votre implémentation WebSocket offre une communication temps réel fiable. Alors que les applications web évoluent vers des expériences plus interactives et temps réel, disposer d'un outil dédié pour tester cette couche de communication critique devient de plus en plus précieux pour maintenir une expérience utilisateur de haute qualité dans diverses conditions réseau et sur différentes plateformes clientes."
    }
  }