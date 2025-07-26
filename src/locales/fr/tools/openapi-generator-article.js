export default {
  title: "OpenAPI vers TypeScript : Génération automatisée de clients API",
  overview: {
    title: "Comprendre le générateur OpenAPI vers TypeScript",
    content: "<strong>Le générateur OpenAPI vers TypeScript</strong> est un outil spécialisé qui convertit automatiquement les spécifications OpenAPI (anciennement Swagger) en interfaces TypeScript et en code client API complet. Cette conversion simplifie le développement frontend en garantissant la sécurité des types et en éliminant le besoin de coder manuellement l'intégration API.<br><br>La spécification OpenAPI sert de contrat standardisé entre les services frontend et backend, décrivant les points de terminaison disponibles, les paramètres de requête, les structures de réponse et les modèles de données. En utilisant ce générateur, les développeurs peuvent se concentrer sur la construction de fonctionnalités plutôt que sur la maintenance du code d'intégration API, tout en bénéficiant du système de types puissant de TypeScript qui détecte les erreurs potentielles à la compilation plutôt qu'à l'exécution."
  },
  useCases: {
    title: "Cas d'utilisation courants de la génération OpenAPI vers TypeScript",
    items: [
      {
        title: "Développement frontend pour API complexes",
        description: "Lorsqu'on travaille avec des API backend volumineuses ou complexes, le codage manuel des interfaces client devient chronophage et sujet aux erreurs. Ce générateur crée des interfaces TypeScript précises et du code client qui correspondent parfaitement à la spécification API, garantissant la cohérence entre le frontend et le backend."
      },
      {
        title: "Architecture microservices",
        description: "Dans un environnement microservices avec plusieurs services API, le générateur facilite l'intégration rapide avec chaque service. À mesure que les services évoluent, il suffit de régénérer le client TypeScript à partir des spécifications OpenAPI mises à jour pour rester synchronisé."
      },
      {
        title: "Migration de versions d'API",
        description: "Lors de la mise à niveau vers une nouvelle version d'API, générez des clients TypeScript pour les deux versions afin d'identifier les changements cassants et d'implémenter des stratégies de migration fluides dans le code frontend."
      },
      {
        title: "Intégration des développeurs",
        description: "Les nouveaux membres de l'équipe peuvent rapidement comprendre les fonctionnalités de l'API en examinant les interfaces TypeScript générées, qui servent de documentation complète avec des informations de type complètes."
      },
      {
        title: "Prototypage",
        description: "Pendant le prototypage rapide, générez un client TypeScript à partir d'une ébauche de spécification OpenAPI pour commencer immédiatement à construire des composants UI avec des structures de données réelles, même avant que l'implémentation backend ne soit terminée."
      }
    ]
  },
  guide: {
    title: "Guide étape par étape pour utiliser le générateur OpenAPI vers TypeScript",
    intro: "Suivez ces étapes pour convertir efficacement une spécification OpenAPI en interfaces TypeScript et code client :",
    steps: [
      {
        title: "Préparez votre spécification OpenAPI",
        description: "Assurez-vous d'avoir une spécification OpenAPI valide au format JSON ou YAML. La spécification doit définir vos points de terminaison API, paramètres de requête, structures de réponse et modèles de données. Vous pouvez télécharger un fichier ou coller directement le contenu dans la zone de texte."
      },
      {
        title: "Sélectionnez les options de génération",
        description: "Configurez les options de génération selon vos besoins : 'Exporter toutes les définitions de modèles' crée des interfaces TypeScript pour tous les modèles de données, 'Générer le code client API' génère des méthodes client API, 'Ajouter des commentaires et documentation' inclut la documentation dans le code généré, et 'Utiliser des énumérations TypeScript' crée des énumérations TypeScript pour les unions de littéraux de chaîne."
      },
      {
        title: "Générez le code TypeScript",
        description: "Cliquez sur le bouton 'Générer le code TypeScript' pour traiter votre spécification OpenAPI. L'outil analysera la spécification et générera les interfaces TypeScript et le code client en fonction des options sélectionnées."
      },
      {
        title: "Vérifiez le code généré",
        description: "Examinez le résultat pour vous assurer qu'il correspond à vos attentes. Le code généré inclut des interfaces pour les types de requête/réponse ainsi qu'une classe client avec des méthodes pour chaque point de terminaison API."
      },
      {
        title: "Copiez ou téléchargez les résultats",
        description: "Utilisez le bouton 'Copier le code' pour copier le TypeScript généré dans le presse-papiers, ou 'Télécharger le code' pour l'enregistrer dans un fichier .ts. Vous pouvez ensuite intégrer ce code dans votre projet TypeScript."
      },
      {
        title: "Intégrez avec votre projet",
        description: "Importez le client généré dans votre code d'application. Initialisez le client avec votre URL de base API et tous les en-têtes requis, puis utilisez les méthodes fortement typées pour effectuer des appels API."
      },
      {
        title: "Mettez à jour lors des changements d'API",
        description: "Chaque fois que votre spécification API change, régénérez le code TypeScript et mettez à jour votre base de code pour vous assurer que votre frontend reste synchronisé avec l'API backend."
      }
    ]
  },
  bestPractices: {
    title: "Bonnes pratiques pour les spécifications OpenAPI",
    intro: "Suivez ces bonnes pratiques pour créer des spécifications OpenAPI de haute qualité qui génèrent un code TypeScript optimal :",
    items: [
      "Utilisez des ID d'opération descriptifs pour chaque point de terminaison afin de créer des noms de méthodes significatifs dans le client généré",
      "Fournissez des descriptions détaillées pour les schémas, propriétés, paramètres et réponses afin de générer des commentaires TypeScript utiles",
      "Utilisez des conventions de nommage cohérentes pour les schémas et propriétés afin de créer des interfaces TypeScript prévisibles",
      "Définissez des composants réutilisables dans la section 'components' pour éviter les répétitions et favoriser la réutilisation du code",
      "Spécifiez des types de données précis pour toutes les propriétés afin de générer des types TypeScript exacts",
      "Incluez des exemples dans la spécification OpenAPI pour aider les développeurs à comprendre les structures de données attendues",
      "Utilisez des valeurs d'énumération pour les propriétés avec des ensembles fixes de valeurs possibles afin de créer des énumérations ou types union TypeScript",
      "Organisez logiquement les points de terminaison en utilisant des tags appropriés pour regrouper les opérations connexes",
      "Versionnez votre API et indiquez clairement les changements cassants pour faciliter les stratégies de migration frontend",
      "Validez votre spécification OpenAPI avec un linter ou un validateur avant de générer le code TypeScript"
    ]
  },
  faq: {
    title: "Questions fréquentes sur la génération OpenAPI vers TypeScript",
    items: [
      {
        question: "Quelle est la différence entre OpenAPI et Swagger ?",
        answer: "OpenAPI est le nom actuel de la norme de spécification, tandis que Swagger était son nom original. OpenAPI 3.0+ est l'évolution moderne de ce qui était autrefois appelé Swagger 2.0. Ce générateur prend en charge les spécifications OpenAPI 3.x et Swagger 2.0, bien qu'OpenAPI 3.x soit recommandé pour ses fonctionnalités améliorées et une meilleure génération de code TypeScript."
      },
      {
        question: "Puis-je personnaliser le code TypeScript généré ?",
        answer: "Oui, le générateur offre plusieurs options de personnalisation : vous pouvez choisir d'exporter uniquement les définitions de modèles, générer le code client, ajouter des commentaires de documentation, et utiliser des énumérations TypeScript au lieu d'unions de chaînes. Pour des personnalisations plus poussées, vous pouvez modifier manuellement le code généré, mais notez que la régénération écrasera ces modifications."
      },
      {
        question: "Comment gérer l'authentification dans le client généré ?",
        answer: "Le client généré accepte des en-têtes personnalisés dans son constructeur, où vous pouvez fournir des jetons d'authentification. Pour des flux d'authentification plus complexes (comme OAuth), vous devrez peut-être étendre le client généré avec une logique supplémentaire, ou créer un wrapper qui gère le rafraîchissement des jetons et autres problèmes d'authentification."
      },
      {
        question: "Puis-je l'utiliser avec React, Vue, Angular ou d'autres frameworks ?",
        answer: "Oui, le client TypeScript généré est indépendant du framework et peut être utilisé avec n'importe quel framework JavaScript ou TypeScript. Dans React, vous pourriez encapsuler le client dans un hook personnalisé ; dans Vue, vous pourriez créer des fonctions composables ; dans Angular, vous pourriez étendre le client en tant que service injectable."
      },
      {
        question: "Comment utiliser le client généré pour les téléchargements de fichiers ?",
        answer: "Pour les téléchargements de fichiers définis dans la spécification OpenAPI (utilisant le type de contenu 'multipart/form-data'), le générateur crée des signatures de méthode appropriées. Lorsque vous appelez ces méthodes, vous devez construire un objet FormData pour le corps de la requête. Assurez-vous que votre spécification OpenAPI définit correctement les opérations de téléchargement de fichiers."
      },
      {
        question: "Que se passe-t-il si ma spécification OpenAPI contient des erreurs ?",
        answer: "Le générateur tentera d'identifier les problèmes courants dans la spécification et fournira des messages d'erreur appropriés. Il est recommandé de valider votre document OpenAPI avec un validateur dédié avant la génération. Des erreurs dans la spécification peuvent entraîner un code TypeScript incorrect ou incomplet."
      },
      {
        question: "Comment maintenir le client TypeScript synchronisé avec les changements d'API ?",
        answer: "Chaque fois que votre API change et que la spécification OpenAPI est mise à jour, régénérez le client TypeScript et mettez-le à jour dans votre projet. Envisagez d'automatiser ce processus dans votre flux de construction pour vous assurer que votre frontend utilise toujours le dernier code client API."
      }
    ]
  },
  integrationTips: {
    title: "Conseils pour intégrer le client TypeScript généré",
    intro: "Une fois que vous avez généré le client TypeScript, envisagez ces suggestions pour une intégration fluide avec votre projet :",
    items: [
      "Créez un module client API dédié dans votre projet qui réexporte le client généré avec toute configuration personnalisée",
      "Utilisez le modèle d'injection de dépendance pour fournir le client API dans toute l'application, le rendant plus facile à simuler pour les tests",
      "Envisagez d'implémenter des intercepteurs de requête/réponse pour les problèmes courants comme la gestion des erreurs, la journalisation et l'authentification",
      "Encapsulez les méthodes du client généré dans des fonctions personnalisées qui gèrent des cas d'erreur spécifiques ou transforment les données pour les besoins de l'application",
      "Configurez la génération automatique du client TypeScript comme partie de votre pipeline CI/CD pour maintenir la synchronisation entre frontend et backend",
      "Utilisez des variables d'environnement ou des fichiers de configuration pour spécifier les URL de base API pour différents environnements (développement, staging, production)",
      "Ajoutez une logique de réessai pour les pannes temporaires en encapsulant les méthodes du client généré avec des fonctionnalités de réessai",
      "Implémentez un cache de requêtes pour les données fréquemment consultées afin d'améliorer les performances et réduire les appels API",
      "Combinez les types générés avec des bibliothèques de gestion d'état comme Redux, MobX ou Vuex pour un état d'application sécurisé par les types",
      "Si vous effectuez de nombreuses petites requêtes, envisagez d'implémenter le batching de requêtes ou GraphQL pour optimiser les appels API"
    ]
  }
}
