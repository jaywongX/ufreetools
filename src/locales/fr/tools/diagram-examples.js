export default {
    name: 'Exemples de diagrammes',
    description: 'Parcourez et utilisez divers exemples de diagrammes pour répondre à différents besoins de modélisation',
    title: 'Exemples avancés de diagrammes de flux',
    categories: {
      title: 'Catégories',
      flowcharts: 'Diagrammes de flux',
      uml: 'Diagrammes UML',
      network: 'Diagrammes réseau',
      architecture: 'Diagrammes d\'architecture',
      entity: 'Diagrammes entité-relation',
      sequence: 'Diagrammes de séquence',
      mindmaps: 'Cartes mentales',
      gantt: 'Diagrammes de Gantt',
      other: 'Autres diagrammes'
    },
    actions: {
      search: 'Rechercher des exemples',
      filter: 'Filtrer par catégorie',
      sortBy: 'Trier par',
      useExample: 'Utiliser cet exemple',
      viewFull: 'Voir en taille réelle',
      copyCode: 'Copier le code',
      addToFavorites: 'Ajouter aux favoris',
      removeFavorite: 'Retirer des favoris'
    },
    sortOptions: {
      popularity: 'Popularité',
      newest: 'Plus récents d\'abord',
      alphabetical: 'Ordre alphabétique',
      complexity: 'Complexité'
    },
    exampleDetail: {
      title: 'Détails de l\'exemple',
      description: 'Description',
      syntax: 'Syntaxe',
      codeView: 'Vue code',
      diagramView: 'Vue diagramme',
      complexity: 'Complexité',
      tags: 'Tags',
      relatedExamples: 'Exemples similaires'
    },
    complexityLevels: {
      beginner: 'Débutant',
      intermediate: 'Intermédiaire',
      advanced: 'Avancé'
    },
    messages: {
      copied: 'Code copié dans le presse-papiers',
      copyFailed: 'Échec de la copie, veuillez copier manuellement',
      added: 'Ajouté aux favoris',
      removed: 'Retiré des favoris',
      noResults: 'Aucun exemple ne correspond à votre recherche',
      loading: 'Chargement des exemples...'
    },
    filters: {
      all: 'Toutes les catégories',
      favorites: 'Favoris uniquement',
      recently: 'Consultés récemment'
    },
    examples: {
      softwareDevelopment: 'Diagramme de flux de développement logiciel',
      projectManagement: 'Diagramme de Gantt de gestion de projet',
      userRegistration: 'Processus d\'inscription utilisateur'
    },
    exampleCodes: {
      softwareDevelopment: `graph TD
      A[Analyse des besoins] --> B[Conception système]
      B --> C[Implémentation du code]
      C --> D[Tests unitaires]
      D --> E(Tests réussis ?)
      E -- Non --> C
      E -- Oui --> F[Intégration système]
      F --> G[Tests système]
      G --> H(Tests réussis ?)
      H -- Non --> F
      H -- Oui --> I[Déploiement]
      I --> J[Mise à jour maintenance]
      
      style A fill:#f9d5e5,stroke:#333,stroke-width:2px
      style E fill:#e3f0f7,stroke:#333,stroke-width:2px
      style H fill:#e3f0f7,stroke:#333,stroke-width:2px
      style I fill:#d5f5e3,stroke:#333,stroke-width:2px
      style J fill:#d5f5e3,stroke:#333,stroke-width:2px`,
      
      projectManagement: `gantt
      title Plan de projet de développement produit
      dateFormat  YYYY-MM-DD
      axisFormat  %m-%d
      
      section Planification
      Étude de marché       :a1, 2023-01-01, 15d
      Analyse des besoins    :a2, after a1, 10d
      Planification produit  :a3, after a2, 5d
      
      section Conception
      Conception prototype   :b1, after a3, 15d
      Conception UI          :b2, after b1, 10d
      Tests utilisateurs     :b3, after b2, 5d
      
      section Développement
      Architecture back-end  :c1, after b1, 20d
      Développement front-end :c2, after b2, 15d
      Intégration API        :c3, after c1, 10d
      
      section Tests
      Tests unitaires        :d1, after c2, 8d
      Tests d'intégration    :d2, after c3, 7d
      Tests de performance   :d3, after d2, 5d
      
      section Publication
      Revue interne          :e1, after d3, 5d
      Préparation déploiement :e2, after e1, 2d
      Publication officielle :milestone, after e2, 0d`,
      
      userRegistration: `sequenceDiagram
      participant Utilisateur
      participant Frontend
      participant Backend
      participant Base de données
      participant Service email
      
      Utilisateur->>Frontend: Remplit formulaire d'inscription
      Frontend->>Frontend: Validation du formulaire
      Frontend->>Backend: Soumet les informations d'inscription
      Backend->>Backend: Valide les données utilisateur
      Backend->>Base de données: Vérifie si l'utilisateur existe
      Base de données-->>Backend: Retourne le résultat
      
      alt Utilisateur existe déjà
          Backend-->>Frontend: Retourne erreur utilisateur existant
          Frontend-->>Utilisateur: Affiche message d'erreur
      else Utilisateur n'existe pas
          Backend->>Base de données: Crée un nouvel utilisateur
          Backend->>Service email: Envoie email de vérification
          Service email-->>Utilisateur: Envoie email avec lien de vérification
          Backend-->>Frontend: Retourne succès de l'inscription
          Frontend-->>Utilisateur: Affiche message de succès
      end
      
      Utilisateur->>Service email: Clique sur le lien de vérification
      Service email->>Backend: Demande de vérification
      Backend->>Base de données: Met à jour le statut de l'utilisateur
      Backend-->>Utilisateur: Redirige vers la page de connexion`
    },
    article: {
      title: "Exemples de diagrammes : Visualisez des systèmes et processus complexes avec des diagrammes professionnels",
      overview: {
        title: "Que sont les exemples de diagrammes ?",
        content: "L'outil <strong>Exemples de diagrammes</strong> fournit divers modèles de diagrammes prêts à l'emploi pour vous aider à visualiser des systèmes, processus et relations complexes avec des diagrammes de qualité professionnelle. Plutôt que de partir de zéro, vous pouvez utiliser ces exemples pour créer rapidement des diagrammes répondant à vos besoins spécifiques.<br><br>Nos exemples de diagrammes utilisent une syntaxe standardisée pouvant être rendue par divers outils et frameworks de diagrammes. Chaque exemple montre les meilleures pratiques en matière de structure, organisation et clarté visuelle des diagrammes, garantissant que vos diagrammes communiquent efficacement des informations complexes à votre public.<br><br>Que vous créiez une documentation d'architecture logicielle, planifiiez des workflows de projet ou conceviez des relations de base de données, nos exemples de diagrammes vous fournissent des modèles professionnels suivant les standards industriels et les meilleures pratiques de visualisation pour vous permettre de démarrer rapidement."
      },
      useCases: {
        title: "Cas d'utilisation pratiques des exemples de diagrammes",
        items: [
          {
            title: "Documentation de développement logiciel",
            description: "Utilisez des exemples de diagrammes de flux et UML pour documenter l'architecture logicielle, les relations entre classes et les processus, rendant les systèmes complexes plus compréhensibles pour les développeurs, parties prenantes et nouveaux membres de l'équipe."
          },
          {
            title: "Planification et gestion de projet",
            description: "Implémentez des exemples de diagrammes de Gantt pour créer des chronologies de projet détaillées, suivre les dépendances entre tâches, visualiser l'allocation des ressources et communiquer l'avancement du projet aux parties prenantes."
          },
          {
            title: "Conception d'architecture système",
            description: "Utilisez des exemples de diagrammes d'architecture pour planifier les composants système, leurs relations, flux de données et points d'intégration, aidant les équipes à planifier l'implémentation et identifier précocement les problèmes potentiels."
          },
          {
            title: "Conception de schémas de base de données",
            description: "Adaptez des exemples de diagrammes entité-relation pour modéliser la structure de base de données, définir les relations entre tables et visualiser l'architecture des données, rendant les conceptions de bases de données complexes plus compréhensibles."
          },
          {
            title: "Analyse des parcours utilisateur",
            description: "Modifiez des exemples de diagrammes de séquence pour cartographier le parcours des utilisateurs dans une application, identifier des problèmes d'utilisabilité potentiels et optimiser l'expérience utilisateur en visualisant chaque étape des interactions."
          },
          {
            title: "Modélisation de processus métier",
            description: "Personnalisez des exemples de diagrammes de flux pour documenter des processus métier, identifier des goulots d'étranglement, planifier des améliorations de processus et communiquer des workflows opérationnels aux membres de l'équipe."
          },
          {
            title: "Planification d'infrastructure réseau",
            description: "Utilisez des exemples de diagrammes réseau pour concevoir des infrastructures IT, planifier des déploiements réseau, documenter des systèmes existants et communiquer l'architecture technique aux parties prenantes techniques et non techniques."
          },
          {
            title: "Organisation des connaissances et apprentissage",
            description: "Adaptez des exemples de cartes mentales pour organiser des résultats de recherche, structurer du matériel d'apprentissage, brainstormer de nouvelles idées et créer des guides d'apprentissage visuels améliorant la mémorisation d'informations."
          }
        ]
      },
      guide: {
        title: "Comment utiliser les exemples de diagrammes",
        intro: "Créer des diagrammes professionnels avec notre approche basée sur des exemples est simple et direct. Suivez ces étapes pour générer rapidement des visualisations efficaces :",
        steps: [
          {
            title: "Parcourir les catégories de diagrammes",
            description: "Explorez notre collection d'exemples de diagrammes organisés par type (diagrammes de flux, UML, réseau, etc.). Consultez plusieurs exemples pour trouver celui correspondant le mieux à vos besoins de visualisation, en notant sa structure et complexité."
          },
          {
            title: "Copier le code de l'exemple",
            description: "Une fois un exemple approprié identifié, cliquez sur \"Copier le code\" pour sauvegarder la syntaxe du diagramme dans votre presse-papiers. Ce code utilise une notation standardisée pouvant être interprétée par divers outils et plateformes de diagrammes."
          },
          {
            title: "Coller dans votre outil de diagramme préféré",
            description: "Ouvrez votre plateforme de diagrammes préférée (comme Mermaid, PlantUML, Draw.io ou des outils professionnels) et collez le code copié. La plupart des outils modernes supportent l'import depuis une syntaxe de diagramme textuelle, vous permettant de personnaliser tout en conservant la structure."
          },
          {
            title: "Personnaliser le contenu du diagramme",
            description: "Modifiez l'exemple pour l'adapter à vos besoins spécifiques en remplaçant le texte des espaces réservés, en ajoutant ou supprimant des éléments et en ajustant les relations. Ces exemples sont conçus pour être facilement édités tout en maintenant clarté visuelle et apparence professionnelle."
          },
          {
            title: "Ajuster le style visuel",
            description: "Affinez l'apparence du diagramme selon vos préférences ou les directives de marque de votre organisation en modifiant couleurs, formes, styles de lignes et paramètres de disposition. La plupart des syntaxes de diagramme incluent des commandes de style dans le code."
          },
          {
            title: "Vérifier et perfectionner",
            description: "Évaluez la clarté, complétude et exactitude de votre diagramme. Assurez-vous qu'il communique efficacement les informations voulues sans complexité inutile. Recueillez les retours des collègues ou parties prenantes et ajustez si nécessaire."
          },
          {
            title: "Exporter et partager",
            description: "Une fois satisfait du diagramme, exportez-le dans votre format préféré (PNG, SVG, PDF etc.) pour l'inclure dans documents, présentations ou rapports. De nombreux outils offrent aussi des fonctions collaboratives d'édition en équipe et de mises à jour en temps réel."
          }
        ]
      },
      diagramTypes: {
        title: "Comprendre les différents types de diagrammes",
        intro: "Chaque type de diagramme est conçu pour visualiser des types spécifiques d'informations et relations. Voici les usages des différents types de diagrammes dans notre collection :",
        items: [
          {
            name: "Diagrammes de flux",
            description: "Visualisent des flux séquentiels, points de décision et chemins de workflow. Idéaux pour documenter algorithmes, processus métiers et procédures décisionnelles. Utilisent des symboles standardisés (rectangles pour les processus, losanges pour les décisions etc.) reliés par des flèches montrant le flux."
          },
          {
            name: "Diagrammes UML",
            description: "Modélisent des systèmes logiciels avec le langage de modélisation unifié, incluant diagrammes de classes (montrant les relations entre objets), diagrammes de séquence (montrant les interactions temporelles entre objets), diagrammes d'activité (décrivant les workflows) etc. UML fournit un langage visuel standardisé pour le développement logiciel."
          },
          {
            name: "Diagrammes entité-relation (ERD)",
            description: "Représentent des modèles de données en montrant les entités (tables), attributs (champs) et leurs relations. Essentiels pour la conception de bases de données, les ERD aident à visualiser l'organisation et structure des données avant implémentation, assurant un stockage efficace et logique."
          },
          {
            name: "Diagrammes réseau",
            description: "Dépeignent des réseaux informatiques, montrant appareils, connexions, protocoles et architecture réseau. Aident les équipes IT à planifier, documenter et dépanner l'infrastructure réseau en fournissant une représentation visuelle claire des relations entre composants."
          },
          {
            name: "Diagrammes de séquence",
            description: "Montrent les interactions chronologiques entre systèmes, composants ou acteurs, et les messages échangés dans l'ordre temporel. Particulièrement utiles pour modéliser les interactions d'API, parcours utilisateurs et protocoles de communication entre composants système."
          },
          {
            name: "Cartes mentales",
            description: "Organisent l'information hiérarchiquement autour d'un concept central, avec des branches représentant des idées connexes. Idéales pour brainstorming, prise de notes, planification et visualisation d'informations complexes en montrant relations et associations."
          },
          {
            name: "Diagrammes de Gantt",
            description: "Montrent l'avancement de projet avec des barres horizontales indiquant durée des tâches, dépendances et progression dans le temps. Essentiels en gestion de projet, ils aident les équipes à visualiser échéances, délais et chemin critique des activités projet."
          }
        ]
      },
      faq: {
        title: "Questions fréquentes sur les exemples de diagrammes",
        items: [
          {
            question: "Quelle syntaxe de diagramme utilisent ces exemples ?",
            answer: "Nos exemples utilisent des syntaxes largement supportées comme Mermaid, PlantUML et GraphViz DOT. Ces langages de diagrammes basés sur texte peuvent être rendus par de nombreux outils et plateformes, vous offrant flexibilité dans leur utilisation et personnalisation. Chaque exemple indique clairement la syntaxe utilisée, la plupart des outils modernes supportant plusieurs options syntaxiques."
          },
          {
            question: "Puis-je utiliser ces exemples dans des projets commerciaux ?",
            answer: "Oui, tous nos exemples sont libres d'utilisation dans des projets personnels et commerciaux. Vous pouvez librement les adapter, modifier et les incorporer à votre travail sans exigence d'attribution. Ces exemples sont fournis comme points de départ pour accélérer votre processus de création de diagrammes tout en permettant une personnalisation complète selon vos besoins spécifiques."
          },
          {
            question: "Comment modifier un exemple pour mes besoins spécifiques ?",
            answer: "Chaque exemple utilise une syntaxe basée sur texte où éléments et relations sont définis dans un format structuré. Pour personnaliser, éditez simplement la définition textuelle pour correspondre à votre cas d'usage - renommez éléments, ajoutez/supprimez composants, modifiez relations ou changez le flux. La syntaxe est conçue pour être lisible et intuitive, les modifications se reflétant immédiatement dans le diagramme rendu."
          },
          {
            question: "Quels outils puis-je utiliser pour rendre ces exemples ?",
            answer: "Ces exemples sont compatibles avec de nombreux outils comme les plateformes en ligne Mermaid Live Editor, PlantUML Web Server, et extensions VS Code comme Markdown Preview Enhanced. Les applications desktop comme Draw.io, Lucidchart, et plateformes documentaires comme Confluence, GitHub et GitLab supportent aussi le rendu direct depuis ces syntaxes textuelles."
          },
          {
            question: "Comment ajouter couleurs et styles aux diagrammes ?",
            answer: "La plupart des syntaxes supportent le style via commandes ou attributs spécifiques. Par exemple, dans Mermaid utilisez 'style' suivi d'un identifiant d'élément et propriétés CSS-like. Dans PlantUML, utilisez skinparam pour définir couleurs, polices etc. Nos exemples incluent des styles de base que vous pouvez facilement étendre avec d'autres personnalisations."
          },
          {
            question: "Puis-je combiner plusieurs exemples pour des visualisations plus complexes ?",
            answer: "Absolument ! Combinez des éléments de différents exemples pour créer des visualisations complètes capturant des systèmes ou processus complexes. En combinant, maintenez une convention de nommage cohérente, assurez des connexions logiques entre composants fusionnés, et envisagez d'utiliser des sous-graphiques pour organiser les éléments liés. Cela vous permet de tirer parti des meilleurs aspects de plusieurs modèles tout en créant un diagramme final cohérent."
          },
          {
            question: "Comment maintenir mes diagrammes à jour avec l'évolution du système ?",
            answer: "Pour des diagrammes maintenables, stockez leur code source (syntaxe textuelle) avec le code ou documentation du projet dans un système de contrôle de version. Cela permet aux diagrammes d'évoluer avec votre système via les mêmes processus de revue et mise à jour. Adoptez une approche modulaire pour décomposer les diagrammes complexes en parties logiques, utilisez des conventions de nommage cohérentes, et incluez des commentaires dans le code pour expliquer éléments ou relations complexes."
          }
        ]
      },
      bestPractices: {
        title: "Bonnes pratiques pour des diagrammes efficaces",
        intro: "Créez des diagrammes plus efficaces et professionnels en suivant ces bonnes pratiques du secteur :",
        items: [
          "Maintenez le diagramme centré sur un seul concept ou information clé, sans tenter de tout visualiser en une fois",
          "Utilisez formes, couleurs et styles cohérents pour assurer clarté visuelle et établir du sens (ex: codage couleur cohérent pour différents types de composants)",
          "Incluez une légende expliquant symboles, couleurs ou notations que votre public pourrait ne pas comprendre immédiatement",
          "Limitez le nombre d'éléments dans un seul diagramme pour éviter la surcharge visuelle ; envisagez de décomposer les systèmes complexes en plusieurs diagrammes liés",
          "Organisez les éléments en groupes logiques, plaçant les items reliés à proximité pour montrer clairement les relations",
          "Utilisez des indicateurs de direction (flèches) de manière cohérente pour montrer flux, mouvement de données ou direction des relations",
          "Ajoutez des libellés et annotations concis pour clarifier le but, expliquer des interactions complexes ou souligner des aspects importants",
          "Maintenez un espacement approprié entre éléments pour améliorer lisibilité et clarté visuelle",
          "Aligner les éléments sur une grille quand approprié pour une apparence plus organisée et professionnelle",
          "Considérez le public et l'objectif du diagramme pour déterminer le niveau de détail technique à inclure",
          "Utilisez la hiérarchie pour montrer les relations parent-enfant et organiser l'information du général au spécifique",
          "Revoyez le diagramme du point de vue de quelqu'un ne connaissant pas le système, pour assurer clarté et compréhensibilité"
        ]
      }
    }
  }