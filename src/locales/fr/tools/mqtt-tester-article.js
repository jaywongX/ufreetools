export default {
  title: "Outil de test MQTT - Guide complet pour tester le protocole de messagerie IoT",
  intro: {
    title: "Qu'est-ce qu'un outil de test MQTT et pourquoi en avez-vous besoin",
    p1: "<b>MQTT (Message Queuing Telemetry Transport)</b> est un protocole de messagerie léger conçu pour les appareils contraints et les réseaux à faible bande passante/hautes latences, idéal pour les applications IoT. Notre outil de test MQTT fournit un environnement complet pour tester, déboguer et optimiser les connexions MQTT, permettant aux développeurs de valider efficacement leur infrastructure de communication IoT.",
    p2: "<b>L'outil de test de protocole MQTT</b> est un pont crucial entre le développement d'appareils IoT et leur déploiement, vous permettant de simuler simultanément des publishers et subscribers. En implémentant la publication de messages en temps réel, l'abonnement à des topics et le diagnostic de connexion, notre outil aide à identifier les problèmes potentiels avant qu'ils n'affectent la production. Cette approche proactive réduit significativement le temps de débogage et améliore la fiabilité des applications IoT.",
    p3: "Avec notre <b>client MQTT en ligne</b>, vous pouvez vous connecter à n'importe quel broker MQTT, tester différents niveaux de qualité de service (QoS), implémenter des messages testament (LWT) et valider les messages conservés. Que vous développiez un système domotique, une solution de surveillance industrielle ou toute application IoT, notre outil fournit les fonctionnalités nécessaires pour garantir que votre infrastructure de messagerie fonctionne correctement dans divers scénarios."
  },
  useCases: {
    title: "Applications pratiques des tests MQTT",
    case1: "<b>Développement et débogage d'appareils IoT</b> : Les ingénieurs matériel et développeurs firmware utilisent l'outil pour valider la communication des appareils avant finalisation. La capacité à vérifier les modèles de publication, formats de payload et réponses d'abonnement aide à identifier et corriger les problèmes tôt dans le cycle de développement.",
    case2: "<b>Intégration domotique</b> : Les développeurs de systèmes domotiques utilisent les tests MQTT pour assurer une communication fiable entre thermostats, éclairages et capteurs de sécurité. Notre outil simule des déclencheurs et analyse les réponses pour valider les règles d'automatisation.",
    case3: "<b>Systèmes de surveillance industrielle</b> : Dans les environnements IoT industriels, les tests MQTT vérifient que les données des capteurs sont correctement transmises, traitées et répondre. Les intégrateurs simulent des lectures de capteurs, testent des seuils d'alerte et valident les réponses du système.",
    case4: "<b>Configuration et optimisation de brokers MQTT</b> : Les administrateurs utilisent l'outil pour benchmarker les performances des brokers sous charge, tester les mécanismes d'authentification et optimiser les paramètres QoS. L'outil permet de simuler plusieurs clients simultanément pour identifier les goulots d'étranglement.",
    case5: "<b>Développement d'applications multiplateformes</b> : Les développeurs d'applications IoT multiplateformes utilisent l'outil comme référence pour vérifier que tous les clients interprètent les messages de manière cohérente."
  },
  tutorial: {
    title: "Comment utiliser notre outil de test MQTT",
    intro: "Notre outil est conçu pour être intuitif mais puissant. Suivez ces étapes simples pour tester efficacement votre implémentation MQTT :",
    step1: {
      title: "Étape 1 : Configurer les paramètres de connexion",
      description: "Commencez par entrer les <b>détails de votre broker MQTT</b> dans la section Connexion. Entrez l'URL du broker (ex : mqtt://broker.example.com:1883 ou ws://broker.example.com:8083 pour WebSocket). Vous pouvez spécifier un ID client ou laisser vide pour un ID aléatoire. Si votre broker requiert une authentification, entrez nom d'utilisateur et mot de passe. Pour une connexion sécurisée, activez SSL/TLS. Une fois configuré, cliquez sur \"Se connecter\"."
    },
    step2: {
      title: "Étape 2 : S'abonner à des topics",
      description: "Après connexion, naviguez vers la <b>section Abonnement</b> pour écouter des messages. Entrez le topic auquel vous souhaitez vous abonner. MQTT supporte les wildcards - utilisez # pour correspondre à plusieurs niveaux, + pour un seul niveau (ex : home/+/temperature pour les relevés de température de n'importe quelle pièce). Sélectionnez le niveau QoS désiré et cliquez \"S'abonner\"."
    },
    step3: {
      title: "Étape 3 : Publier des messages",
      description: "Pour envoyer des messages, utilisez la <b>section Publication</b>. Entrez le topic cible et composez votre payload. Vous pouvez formater le payload en texte brut, JSON (avec validation), hexadécimal ou binaire. Définissez le niveau QoS approprié et décidez si le flag \"Conserver\" doit être activé (pour que le broker stocke le message pour les futurs abonnés). Cliquez \"Publier\" pour envoyer votre message."
    },
    step4: {
      title: "Étape 4 : Surveiller et analyser les messages",
      description: "La <b>section Messages</b> affiche toutes les communications reçues et envoyées. Chaque message montre le topic, payload, niveau QoS, statut de conservation et horodatage. Filtrez par topic ou contenu pour vous concentrer sur des flux spécifiques. Cliquez sur un message pour voir son contenu complet. Utilisez \"Copier la charge utile\" pour extraire des données ou \"Dupliquer pour publication\" pour répondre rapidement."
    }
  },
  mqttBasics: {
    title: "Comprendre les bases du protocole MQTT",
    intro: "Pour utiliser efficacement l'outil, ces concepts clés de MQTT sont utiles :",
    pubsub: {
      title: "Modèle Pub/Sub",
      description: "<b>MQTT utilise une architecture publish-subscribe</b>, découplant les émetteurs (publishers) des récepteurs (subscribers). Contrairement au modèle client-serveur traditionnel, MQTT introduit un broker qui gère la distribution des messages. Les publishers envoient des messages à des topics sans savoir qui les recevra, tandis que les subscribers expriment leur intérêt pour des topics sans savoir qui publie. Ce découplage offre évolutivité et flexibilité."
    },
    qos: {
      title: "Niveaux de Qualité de Service (QoS)",
      description: "<b>MQTT propose trois niveaux QoS</b> équilibrant fiabilité et efficacité : QoS 0 (au plus une fois) sans garantie de livraison mais avec un overhead minimal, idéal pour des données non critiques comme des relevés de température. QoS 1 (au moins une fois) garantit la livraison mais peut dupliquer des messages, adapté aux messages importants tolérant des doublons. QoS 2 (exactement une fois) garantit une livraison unique via un handshake en quatre étapes, parfait pour les commandes critiques ou transactions financières."
    },
    retain: {
      title: "Messages conservés",
      description: "<b>Les messages conservés</b> sont des messages spéciaux que le broker stocke pour les futurs abonnés. Quand un message est publié avec le flag retain activé, le broker le sauvegarde comme dernière valeur connue pour ce topic. Tout nouvel abonné recevra immédiatement ce message, même longtemps après sa publication. Utile pour les états d'appareils, valeurs de configuration ou données que les nouveaux abonnés devraient recevoir à la connexion."
    },
    lastwill: {
      title: "Message testament (LWT)",
      description: "<b>La fonctionnalité testament</b> permet à un client d'enregistrer un message \"testament\" auprès du broker pendant la connexion. Si le client se déconnecte anormalement (sans envoyer de message DISCONNECT), le broker publie automatiquement ce message testament sur le topic spécifié. Ce système de notification permet aux autres parties du système IoT d'être alertées des déconnexions inattendues."
    }
  },
  faq: {
    title: "FAQ sur les tests MQTT",
    q1: "Quelles différences entre MQTT et HTTP pour les applications IoT ?",
    a1: "<b>MQTT et HTTP représentent des approches différentes</b> de la communication IoT, chacune ayant ses avantages. MQTT est conçu pour les environnements contraints, avec un modèle pub/sub, une taille de paquet minimale (jusqu'à 2 octets) et des connexions persistantes réduisant l'overhead. Il excelle dans les environnements à bande passante limitée ou avec des appareils sur batterie.<br><br>HTTP suit un modèle requête-réponse, nécessitant que le client initie toutes les communications. Avec des connexions à établir pour chaque transaction et des messages généralement plus gros, son overhead est plus important. Mais HTTP bénéficie d'un support universel et s'intègre directement aux applications web.<br><br>Pour les applications temps réel nécessitant une communication bidirectionnelle, MQTT offre généralement de meilleures performances avec ses niveaux QoS, messages conservés et testament. Notre outil permet de vérifier ces fonctionnalités.",
    
    q2: "Comment sécuriser les communications MQTT ?",
    a2: "<b>Sécuriser MQTT</b> implique plusieurs couches de protection, toutes testables avec notre outil :<br><br>1. <b>Sécurité transport</b> : Activez le chiffrement TLS/SSL en vous connectant à des endpoints sécurisés (mqtts:// ou wss://). Notre outil supporte les connexions chiffrées et non chiffrées.<br><br>2. <b>Authentification</b> : Implémentez une authentification par nom d'utilisateur/mot de passe ou par certificats clients. Testez ces credentials avec les paramètres de connexion de l'outil.<br><br>3. <b>Autorisation</b> : Configurez des permissions par topic pour contrôler qui peut publier ou s'abonner. Vérifiez que les tentatives non autorisées sont bien rejetées.<br><br>4. <b>Chiffrement du payload</b> : Pour une sécurité supplémentaire, chiffrez les messages avant publication. Testez le chiffrement de bout en bout avec l'outil.<br><br>La sécurité doit être implémentée en profondeur, combinant plusieurs méthodes.",
    
    q3: "Bonnes pratiques pour concevoir des topics MQTT ?",
    a3: "<b>Une conception efficace des topics</b> est cruciale pour des systèmes IoT évolutifs :<br><br>1. <b>Utilisez une hiérarchie</b> avec des slashs comme séparateurs (ex : bâtiment/étage/pièce/appareil/mesure). Cette organisation permet un filtrage efficace avec des wildcards.<br><br>2. <b>Évitez les topics commençant par un slash</b>, créant un niveau vide pouvant causer des incohérences entre implémentations de brokers.<br><br>3. <b>Incluez un identifiant d'appareil</b> dans les topics pour garantir l'unicité et simplifier le routage.<br><br>4. <b>Standardisez les namespaces</b> pour les fonctionnalités communes comme les états (status/appareilID), commandes (commands/appareilID) et configuration (config/appareilID).<br><br>5. <b>Considérez la longueur des topics</b> - bien que MQTT permette des topics longs, la concision améliore l'efficacité.<br><br>Notre outil aide à valider votre conception de topics en testant les patterns de wildcards.",
    
    q4: "Comment diagnostiquer des problèmes de connexion MQTT ?",
    a4: "Pour <b>résoudre les problèmes de connexion MQTT</b>, suivez cette approche systématique :<br><br>1. <b>Vérifiez la connectivité réseau</b> : Assurez-vous que l'appareil peut atteindre l'IP et le port du broker. Utilisez l'indicateur de statut de connexion de l'outil.<br><br>2. <b>Vérifiez l'URL et le port du broker</b> : Confirmez que vous utilisez la bonne URL, le bon port et le bon protocole (mqtt:// pour TCP, ws:// pour WebSocket). Les ports courants sont 1883 (MQTT), 8883 (MQTT over TLS), 8083 (WebSockets) et 8084 (WebSockets sécurisés).<br><br>3. <b>Validez les credentials</b> : Si l'authentification est activée, assurez-vous que le nom d'utilisateur et le mot de passe sont corrects. Les erreurs de connexion viennent souvent de l'authentification.<br><br>4. <b>Vérifiez la configuration SSL/TLS</b> : Pour les connexions sécurisées, validez les certificats, y compris les certificats CA, les certificats clients et les versions TLS supportées.<br><br>5. <b>Vérifiez les conflits d'ID client</b> : Les brokers MQTT n'autorisent généralement pas plusieurs connexions avec le même ID client. Notre outil peut aider à identifier si votre connexion est rejetée à cause d'un conflit d'ID.<br><br>6. <b>Consultez les logs du broker</b> : La plupart des brokers fournissent des logs détaillés révélant la cause exacte des échecs de connexion.<br><br>Notre outil fournit un statut de connexion en temps réel et des messages d'erreur détaillés pour diagnostiquer précisément les problèmes.",
    
    q5: "Comment gérer au mieux les déconnexions et reconnexions MQTT ?",
    a5: "Implémenter une gestion robuste des <b>déconnexions MQTT</b> est crucial pour des applications IoT fiables :<br><br>1. <b>Activez la reconnexion automatique</b> : Configurez votre client MQTT pour réessayer de se connecter après une déconnexion. Notre outil intègre cette fonctionnalité pour tester le comportement de votre application.<br><br>2. <b>Implémentez un backoff exponentiel</b> : Utilisez des délais de plus en plus longs entre les tentatives de reconnexion pour éviter de surcharger le broker pendant les interruptions.<br><br>3. <b>Configurez un message testament</b> : Définissez un LWT pour notifier les autres parties du système en cas de déconnexion inattendue. Testez cette fonctionnalité dans les paramètres avancés de notre outil.<br><br>4. <b>Maintenez une file d'attente de messages</b> : Pour les données critiques, implémentez une file d'attente côté client pendant les déconnexions, puis envoyez les messages lors de la reconnexion.<br><br>5. <b>Utilisez des sessions persistantes</b> : Activez le flag \"clean session\" quand approprié pour maintenir les abonnements et messages en file d'attente entre les connexions.<br><br>6. <b>Surveillez l'état de connexion</b> : Dans les environnements de production, implémentez une surveillance de l'état de connexion avec alertes pour les longues déconnexions.<br><br>Notre outil peut simuler divers scénarios de déconnexion pour valider que votre application les gère correctement."
  },
  relatedTools: {
    title: "Découvrez des outils IoT et réseau connexes",
    description: "Améliorez votre workflow de développement IoT avec ces outils complémentaires :",
    tool1: {
      name: "Outil de test WebSocket",
      url: "https://www.ufreetools.com/tool/websocket-tester",
      description: "Testez les connexions WebSocket avec envoi et réception de messages en temps réel."
    },
    tool2: {
      name: "Formateur et validateur JSON",
      url: "https://www.ufreetools.com/tool/json-formatter",
      description: "Formatez, validez et embellissez les données JSON couramment utilisées dans les payloads MQTT."
    },
    tool3: {
      name: "Détecteur de proxy HTTP",
      url: "https://www.ufreetools.com/tool/http-proxy-detector",
      description: "Détectez si votre connexion utilise un proxy HTTP et analysez les en-têtes liés au proxy pour la validation de sécurité."
    },
    tool4: {
      name: "Encodeur/Décodeur Base64",
      url: "https://www.ufreetools.com/tool/base64-encoder-decoder",
      description: "Encodez et décodez les données binaires en Base64 couramment utilisées dans les messages MQTT."
    }
  },
  resources: {
    title: "Ressources officielles sur le protocole MQTT",
    resource1: {
      name: "MQTT.org - Documentation officielle",
      url: "https://mqtt.org/",
      description: "Documentation, spécifications et bonnes pratiques officielles du protocole MQTT, maintenues par OASIS."
    },
    resource2: {
      name: "HiveMQ - Guide des fondamentaux MQTT",
      url: "https://www.hivemq.com/mqtt-essentials/",
      description: "Une série complète d'articles couvrant tous les aspects de base du protocole MQTT de manière pratique."
    },
    resource3: {
      name: "Eclipse Mosquitto - Broker MQTT open source",
      url: "https://mosquitto.org/",
      description: "Documentation du broker MQTT open source populaire, incluant les options de configuration et bonnes pratiques de sécurité."
    }
  }
}
