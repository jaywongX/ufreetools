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
  }
};