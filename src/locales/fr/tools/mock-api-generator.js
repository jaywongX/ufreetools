export default {
    name: 'Générateur de Mock API',
    description: 'Génère automatiquement des Mock API à partir de spécifications OpenAPI',
    options: {
      version: 'Version OpenAPI',
      format: 'Format de sortie',
      includeExamples: 'Inclure exemples de réponse',
      responseDynamism: 'Dynamisme des réponses',
      responseType: 'Type de réponse',
      arrayLength: 'Longueur des tableaux',
      responseFormat: 'Format de réponse'
    },
    formats: {
      json: 'JSON Server',
      express: 'Express.js',
      mockjs: 'Mock.js',
      msw: 'Mock Service Worker'
    },
    actions: {
      generate: 'Générer Mock',
      preview: 'Prévisualiser API',
      clear: 'Effacer',
      copy: 'Copier code',
      download: 'Télécharger',
      uploadSpec: 'Importer spécification OpenAPI',
      uploadJava: 'Importer fichier classe Java',
      generateJson: 'Générer JSON',
      generateBuilder: 'Générer Builder',
      format: 'Formatter'
    },
    messages: {
      copied: 'Copié dans le presse-papiers !',
      generationSuccess: 'Mock API généré avec succès',
      generationError: 'Erreur lors de la génération du Mock API',
      specRequired: 'Veuillez fournir une spécification OpenAPI',
      fileUploaded: 'Importé',
      parseError: 'Échec de l\'analyse de la classe Java, vérifiez le format du fichier'
    },
    help: {
      uploadHint: 'Supporte l\'import de fichiers .java, analyse automatique de la structure de classe pour générer la configuration Mock. Les propriétés d\'objets imbriqués multiples ne sont pas encore supportées'
    },
    fields: {
      title: 'Définition des champs',
      addField: 'Ajouter champ',
      addChildField: 'Ajouter sous-champ',
      fieldName: 'Nom du champ'
    },
    fieldTypes: {
      string: 'Chaîne',
      number: 'Nombre',
      boolean: 'Booléen',
      date: 'Date',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse',
      id: 'ID',
      image: 'URL image',
      array: 'Tableau',
      object: 'Objet'
    },
    array: {
      itemType: 'Type d\'élément',
      arrayFields: 'Champs du tableau'
    },
    object: {
      childFields: 'Sous-champs'
    },
    responseTypes: {
      object: 'Objet unique',
      array: 'Tableau d\'objets',
      custom: 'Structure personnalisée'
    },
    responseFormats: {
      dataOnly: 'Données uniquement',
      standard: 'Réponse REST standard (code, data, message)'
    },
    placeholder: {
      output: '// Les données Mock générées apparaîtront ici'
    },
    article: {
      title: "Comprendre l'utilisation du générateur de Mock API dans le développement frontend",
      overview: {
        title: "Qu'est-ce qu'un générateur de Mock API ?",
        content: "Le <strong>générateur de Mock API</strong> est un outil spécialisé qui crée des endpoints API simulés et des réponses basés sur des spécifications OpenAPI ou des définitions de champs personnalisées. Cet outil puissant aide les développeurs frontend à travailler indépendamment des équipes backend en fournissant des structures de données réalistes imitant le comportement des vraies API.<br><br>Le générateur crée des endpoints fonctionnels qui renvoient des données structurées et cohérentes selon vos spécifications. Cela permet le développement frontend sans attendre l'implémentation backend réelle, accélérant significativement le processus et permettant des workflows parallèles."
      },
      useCases: {
        title: "Cas d'utilisation courants des Mock API",
        items: [
          {
            title: "Développement frontend avant finalisation backend",
            description: "Quand l'API backend est encore en développement ou non implémentée, les Mock API permettent aux développeurs frontend de commencer à construire des composants UI avec des structures de données réalistes, évitant les goulots d'étranglement."
          },
          {
            title: "Prototypage et tests UI",
            description: "Créez rapidement des prototypes ou testez des composants UI avec des jeux de données contrôlés, permettant aux designers et développeurs de valider des interfaces sans se connecter à de vrais services backend."
          },
          {
            title: "Développement hors ligne",
            description: "Permet aux développeurs de travailler hors ligne ou sans accès aux API de production ou staging en fournissant un serveur Mock API local simulant les réponses des vraies API."
          },
          {
            title: "Tests de cas limites",
            description: "Générez des réponses API spécifiques reproduisant des cas limites ou conditions d'erreur difficiles à déclencher dans des environnements backend réels, permettant des tests approfondis de gestion d'erreurs."
          },
          {
            title: "Tests de performance",
            description: "Créez des Mock API simulant différents temps de réponse ou charges pour tester comment les composants frontend gèrent divers scénarios de performance."
          },
          {
            title: "Environnements de démo",
            description: "Construisez des environnements de démonstration entièrement fonctionnels sans connexion à de vrais services backend, idéaux pour présentations commerciales, formations ou expositions."
          }
        ]
      },
      guide: {
        title: "Comment utiliser le générateur de Mock API",
        intro: "Suivez ces étapes pour créer et utiliser efficacement des Mock API dans votre workflow de développement :",
        steps: [
          {
            title: "Choisissez la méthode d'entrée",
            description: "Commencez par choisir comment définir la structure de l'API. Vous pouvez importer une spécification OpenAPI (recommandé pour la cohérence avec les vraies API), importer un fichier classe Java pour extraire automatiquement la structure de données, ou définir manuellement les champs et types via l'interface."
          },
          {
            title: "Définissez la structure de données",
            description: "Sans spécification OpenAPI, définissez la structure des données simulées en ajoutant des champs et en configurant leurs types (chaîne, nombre, booléen, date etc.). Pour les structures complexes, créez des objets imbriqués ou des tableaux d'objets pour correspondre au modèle de données de la vraie API."
          },
          {
            title: "Configurez les options de sortie",
            description: "Sélectionnez votre format de sortie préféré (JSON Server, Express.js, Mock.js ou Mock Service Worker) selon les besoins du projet. Ajustez d'autres paramètres comme le dynamisme des réponses (à quel point les données générées doivent être aléatoires), la longueur des tableaux et le format de réponse."
          },
          {
            title: "Générez le code Mock API",
            description: "Cliquez sur \"Générer Mock\" pour créer le code des API simulées selon vos spécifications. L'outil traitera vos entrées et générera le code des endpoints et réponses API simulés dans le format choisi."
          },
          {
            title: "Vérifiez et copiez le code généré",
            description: "Examinez le code Mock API généré pour vous assurer qu'il répond à vos besoins. Vous pouvez copier le code dans le presse-papiers ou le télécharger comme fichier pour l'intégrer à votre projet."
          },
          {
            title: "Intégrez à l'environnement de développement",
            description: "Selon le format choisi, intégrez le Mock API généré à votre environnement. Cela peut impliquer de configurer JSON Server, ajouter des routes Express.js, configurer Mock.js ou implémenter Mock Service Worker dans l'application."
          },
          {
            title: "Connectez l'application frontend",
            description: "Modifiez votre application frontend pour qu'elle se connecte aux endpoints Mock API plutôt qu'aux vrais services backend. Cela implique généralement de changer l'URL de base des requêtes API pour pointer vers le serveur mock local ou un intercepteur."
          }
        ]
      },
      bestPractices: {
        title: "Bonnes pratiques pour les Mock API",
        intro: "Suivez ces recommandations pour créer des Mock API efficaces et maintenables :",
        items: [
          "Utilisez des spécifications OpenAPI autant que possible pour que vos Mock API reflètent fidèlement la structure des vraies API",
          "Reproduisez exactement les structures de réponse des vraies API, y compris les formats de pagination, réponses d'erreur et métadonnées",
          "Incluez des cas limites réalistes dans les données simulées comme des tableaux vides, valeurs nulles et divers états d'erreur",
          "Pour les données dynamiques comme dates ou IDs, utilisez des fonctions plutôt que des valeurs statiques pour simuler un comportement réaliste",
          "Versionnez les Mock API avec le code frontend pour maintenir la compatibilité historique pendant le développement",
          "Utilisez des variables d'environnement pour basculer entre Mock et vraies API selon le contexte de développement",
          "Documentez toute divergence entre Mock et vraies API pour éviter des confusions lors de l'intégration",
          "Implémentez des délais cohérents pour tester comment votre UI gère les états de chargement",
          "Automatisez la génération des services mock dans les pipelines de build pour qu'ils restent synchronisés avec les changements d'API",
          "Incluez une logique de validation dans les Mock API pour simuler les mêmes contraintes que les vraies API appliqueraient"
        ]
      },
      faq: {
        title: "Questions fréquentes sur la génération de Mock API",
        items: [
          {
            question: "Quelles sont les différences entre les formats de sortie disponibles ?",
            answer: "JSON Server fournit une API REST simple basée sur des fichiers JSON, adaptée aux besoins basiques. Express.js offre plus de personnalisation et contrôle des routes pour des scénarios complexes. Mock.js s'intègre directement avec JavaScript pour intercepter des requêtes AJAX dans le navigateur. Mock Service Worker (MSW) utilise des Service Workers pour intercepter des requêtes au niveau réseau, permettant de basculer entre Mock et vraies API sans changer le code."
          },
          {
            question: "Puis-je créer des réponses dynamiques qui varient à chaque requête ?",
            answer: "Oui, l'option 'Dynamisme des réponses' contrôle à quel point vos données simulées varient. Un dynamisme faible signifie des réponses cohérentes à chaque requête, tandis qu'un dynamisme élevé génère des valeurs différentes dans les types de données définis. Vous pouvez aussi implémenter une logique personnalisée dans les formats Express.js ou MSW pour des comportements dynamiques plus avancés."
          },
          {
            question: "Comment gérer l'authentification dans les Mock API ?",
            answer: "Pour JSON Server, utilisez le plugin json-server-auth. Avec Express.js, implémentez des middlewares pour vérifier les tokens d'authentification. Pour Mock.js et MSW, vous pouvez intercepter les requêtes d'authentification et renvoyer des tokens ou erreurs appropriés selon les identifiants fournis, simulant un vrai flux d'authentification."
          },
          {
            question: "Puis-je simuler des erreurs réseau ou des réponses lentes ?",
            answer: "Oui. Avec Express.js, utilisez des middlewares pour introduire aléatoirement des délais ou erreurs. Avec MSW, utilisez la fonction ctx.delay() pour ajouter des délais ou renvoyer des réponses d'erreur. Pour JSON Server, utilisez le flag --delay pour ajouter un délai fixe à toutes les réponses."
          },
          {
            question: "Comment basculer entre Mock et vraies API en production ?",
            answer: "Pour MSW, utilisez des variables d'environnement pour démarrer conditionnellement les workers. Pour d'autres méthodes, utilisez des valeurs de configuration pour changer l'URL de base de l'API ou implémentez un proxy routant les requêtes. Cela vous permet de basculer facilement entre endpoints simulés et réels pendant le développement et les tests."
          },
          {
            question: "Puis-je générer des données réalistes plutôt que du lorem ipsum ?",
            answer: "Oui, le générateur inclut des types de champs spécialisés comme 'Nom', 'Email', 'Téléphone', 'Adresse' et 'URL image' pour générer des données réalistes pour ces champs courants. Pour des scénarios plus avancés, envisagez d'utiliser des librairies comme Faker.js avec les formats de sortie Express.js ou MSW."
          },
          {
            question: "Comment gérer les uploads de fichiers dans les Mock API ?",
            answer: "Pour la sortie Express.js, implémentez des routes acceptant des requêtes multipart/form-data et renvoyant des réponses appropriées. Avec MSW, interceptez les requêtes d'upload et simulez le traitement avant de renvoyer une réponse de succès. Cela permet de tester les composants UI d'upload sans réel traitement de fichiers."
          }
        ]
      },
      advancedTips: {
        title: "Techniques avancées d'intégration de Mock API",
        intro: "Utilisez ces techniques avancées pour élever votre implémentation de Mock API :",
        items: [
          "Implémentez un comportement avec état pour simuler la persistance entre requêtes, comme renvoyer des éléments nouvellement créés dans des requêtes GET ultérieures",
          "Combinez la validation OpenAPI avec des serveurs mock pour s'assurer que les requêtes frontend satisfont les exigences des spécifications d'API",
          "Créez des gestionnaires de scénarios permettant de basculer entre différents jeux de données prédéfinis pour tester divers cas métiers",
          "Implémentez une pagination réaliste avec métadonnées et liens appropriés pour tester efficacement les contrôles de pagination UI",
          "Utilisez Mock Service Worker avec GraphQL pour simuler des réponses à des requêtes complexes tout en maintenant la sécurité des types",
          "Créez des approches hybrides qui proxyfient certaines requêtes vers de vrais services backend tout en simulant d'autres services non encore disponibles",
          "Implémentez des mocks websocket pour tester des fonctionnalités temps réel sans implémentation backend",
          "Configurez des tests d'intégration continue utilisant les Mock API pour valider automatiquement le comportement frontend",
          "Créez un service d'annuaire de Mock API permettant aux développeurs de parcourir et sélectionner les endpoints mock disponibles dans l'organisation",
          "Implémentez des templates de réponse modifiant dynamiquement les réponses mock selon les paramètres ou headers des requêtes"
        ]
      }
    }
  }