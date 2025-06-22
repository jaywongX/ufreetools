export default {
    name: 'Gestionnaire de budget personnel',
    description: 'Suivez vos revenus et dépenses avec cet outil financier personnel simple et facile à utiliser',
    tags: ['Finances', 'Comptabilité', 'Budget', 'Argent', 'Suivi des dépenses', 'Finances personnelles'],
    category: 'outils-pratiques',
    
    // Éléments d'interface
    ui: {
      addTransaction: 'Ajouter une transaction',
      editTransaction: 'Modifier la transaction',
      deleteTransaction: 'Supprimer la transaction',
      income: 'Revenu',
      expense: 'Dépense',
      transfer: 'Transfert',
      date: 'Date',
      amount: 'Montant',
      category: 'Catégorie',
      account: 'Compte',
      description: 'Description',
      tags: 'Tags',
      save: 'Enregistrer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      filter: 'Filtrer',
      search: 'Rechercher',
      clear: 'Effacer',
      overview: 'Vue d\'ensemble',
      transactions: 'Historique des transactions',
      statistics: 'Analyse statistique',
      budget: 'Budget',
      settings: 'Paramètres',
      exportData: 'Exporter les données',
      importData: 'Importer des données',
      backup: 'Sauvegarde',
      restore: 'Restaurer',
      currency: 'Devise',
      language: 'Langue',
      theme: 'Thème',
      darkMode: 'Mode sombre',
      lightMode: 'Mode clair',
      resetData: 'Réinitialiser les données',
      resetConfirmation: 'Êtes-vous sûr de vouloir réinitialiser toutes les données ? Cette action est irréversible.',
      from: 'De',
      to: 'À',
      filterByDate: 'Filtrer par date',
      noTransactions: 'Aucune transaction à afficher',
      allCategories: 'Toutes les catégories',
      addCategory: 'Ajouter une catégorie',
      editCategory: 'Modifier la catégorie',
      deleteCategory: 'Supprimer la catégorie',
      categoryName: 'Nom de la catégorie',
      categoryIcon: 'Icône de catégorie',
      categoryColor: 'Couleur de la catégorie',
      addAccount: 'Ajouter un compte',
      editAccount: 'Modifier un compte',
      deleteAccount: 'Supprimer un compte',
      accountName: 'Nom du compte',
      accountType: 'Type de compte',
      accountBalance: 'Solde du compte',
      totalIncome: 'Revenu total',
      totalExpense: 'Dépenses totales',
      balance: 'Solde',
      netWorth: 'Valeur nette',
      daily: 'Quotidien',
      weekly: 'Hebdomadaire',
      monthly: 'Mensuel',
      yearly: 'Annuel',
      today: 'Aujourd\'hui',
      thisWeek: 'Cette semaine',
      thisMonth: 'Ce mois',
      thisYear: 'Cette année',
      lastWeek: 'Semaine dernière',
      lastMonth: 'Mois dernier',
      lastYear: 'Année dernière',
      custom: 'Personnalisé',
      setBudget: 'Définir un budget',
      budgetLimit: 'Limite du budget',
      budgetPeriod: 'Période du budget',
      budgetCategory: 'Catégorie du budget',
      budgetAlert: 'Alerte budget',
      budgetUsage: 'Utilisation du budget',
      remaining: 'Restant',
      spent: 'Dépensé',
      over: 'Dépassé',
      exportFormat: 'Format d\'export',
      importFormat: 'Format d\'import',
      csv: 'CSV',
      json: 'JSON',
      selectFile: 'Sélectionner un fichier',
      successfullyImported: 'Données importées avec succès',
      errorImporting: 'Erreur lors de l\'importation',
      successfullyExported: 'Données exportées avec succès',
      errorExporting: 'Erreur lors de l\'exportation',
      confirmDelete: 'Êtes-vous sûr de vouloir supprimer cet élément ?',
      recurringTransaction: 'Transaction récurrente',
      frequency: 'Fréquence',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      never: 'Jamais',
      daily: 'Quotidiennement',
      weekly: 'Hebdomadairement',
      monthly: 'Mensuellement',
      yearly: 'Annuellement',
      note: 'Note',
      attachment: 'Pièce jointe',
      dataSecurity: 'Sécurité des données',
      type: 'Type',
      clearTransactions: 'Effacer l\'historique',
      confirmClearTransactions: 'Êtes-vous sûr de vouloir effacer toutes les transactions ? Cette action est irréversible.',
      transactionsCleared: 'Toutes les transactions ont été effacées',
      enterValidAmount: 'Veuillez entrer un montant valide',
      selectDate: 'Veuillez sélectionner une date',
      selectCategory: 'Veuillez sélectionner une catégorie'
    },
    
    // Catégories prédéfinies
    categories: {
      income: {
        salary: 'Salaire',
        freelance: 'Freelance',
        investments: 'Revenus d\'investissement',
        gifts: 'Cadeaux',
        refunds: 'Remboursements',
        other: 'Autres revenus'
      },
      expense: {
        food: 'Restauration',
        groceries: 'Courses',
        rent: 'Loyer/Hypothèque',
        utilities: 'Services publics',
        transportation: 'Transport',
        entertainment: 'Loisirs',
        shopping: 'Shopping',
        health: 'Santé',
        education: 'Éducation',
        personal: 'Soins personnels',
        travel: 'Voyage',
        insurance: 'Assurance',
        taxes: 'Impôts',
        debt: 'Remboursement de dette',
        subscription: 'Abonnements',
        charity: 'Dons et charité',
        business: 'Dépenses professionnelles',
        other: 'Autres dépenses'
      },
      transfer: {
        bank_transfer: 'Virement bancaire',
        savings: 'Épargne',
        investment: 'Investissement',
        debt_payment: 'Paiement de dette',
        other: 'Autres transferts'
      }
    },
    
    // Types de comptes
    accountTypes: {
      cash: 'Espèces',
      checking: 'Compte courant',
      savings: 'Compte épargne',
      creditCard: 'Carte de crédit',
      investment: 'Compte d\'investissement',
      loan: 'Prêt',
      asset: 'Actif',
      other: 'Autre'
    },
    
    // Libellés des graphiques
    charts: {
      incomeVsExpense: 'Revenus vs Dépenses',
      expenseByCategory: 'Détails des dépenses par catégorie',
      monthlyTrend: 'Tendance mensuelle',
      savingsRate: 'Taux d\'épargne',
      netWorthTrend: 'Évolution de la valeur nette',
      budgetPerformance: 'Performance du budget',
      topExpenseCategories: 'Principales catégories de dépenses',
      cashFlow: 'Flux de trésorerie'
    },
    
    // Documentation de l'outil
    documentation: {
      title: 'À propos du gestionnaire de budget',
      introduction: 'Le gestionnaire de budget est conçu pour la gestion financière personnelle. Toutes les données sont stockées dans votre navigateur, garantissant la confidentialité de vos informations financières.',
      whyUse: {
        title: 'Pourquoi utiliser ce gestionnaire ?',
        points1: 'Confidentialité totale - Toutes les données stockées localement',
        points2: 'Interface simple - Conception intuitive pour enregistrer facilement les transactions',
        points3: 'Visualisation des données - Comprenez vos habitudes de dépenses via des graphiques',
        points4: 'Catégories personnalisables - Créez des catégories adaptées à vos besoins',
        points5: 'Export des données - Exportez au format CSV pour sauvegarde ou analyse'
      },
      tips: {
        title: 'Conseils d\'utilisation',
        points1: 'Enregistrez régulièrement vos transactions',
        points2: 'Utilisez les tags pour un classement plus précis',
        points3: 'Définissez des budgets mensuels pour contrôler vos dépenses',
        points4: 'Exportez régulièrement vos données comme sauvegarde',
        points5: 'Utilisez les statistiques pour identifier vos habitudes de consommation'
      },
      dataStorage: {
        title: 'Stockage des données',
        content: 'Toutes vos données financières sont stockées localement dans votre navigateur. Cela signifie que vos données ne quittent jamais votre appareil. Cependant, effacer les données du navigateur supprimera également vos données financières, pensez donc à exporter régulièrement.'
      }
    },
    
    // Section article
    article: {
      title: "Gestionnaire de budget : Maîtrisez votre santé financière",
      features: {
        title: "Comprendre la gestion financière personnelle",
        description: "Ce gestionnaire de budget est un outil complet conçu pour vous aider à prendre le contrôle de vos finances. Ce puissant outil de suivi des dépenses offre une plateforme sécurisée et privée pour enregistrer revenus et dépenses, surveiller vos flux financiers et analyser vos habitudes, sans partager vos données avec des serveurs externes.<br><br>Notre outil propose diverses fonctionnalités : catégorisation des transactions, planification budgétaire, visualisations statistiques et export de données. L'interface intuitive simplifie le suivi quotidien, tandis que les outils de reporting avancés offrent des insights approfondis sur vos habitudes de consommation et d'épargne. Que vous souhaitiez réduire vos dettes, épargner pour un achat important ou simplement mieux comprendre vos dépenses, cet outil de budget vous fournit tous les outils nécessaires pour une gestion financière efficace.",
        useCases: {
          title: "Cas d'utilisation pratiques du budget personnel",
          items: [
            "Les étudiants suivent leurs dépenses mensuelles et allocations pour éviter les dépenses excessives sur des articles non essentiels",
            "Les freelances surveillent leurs revenus par projet et dépenses régulières pour maintenir une trésorerie stable",
            "Les jeunes professionnels créent des plans d'épargne pour des objectifs comme un acompte immobilier, analysant leurs habitudes pour identifier des économies potentielles",
            "Les familles gèrent le budget ménager, suivent les dépenses communes et planifient les futures dépenses comme l'éducation ou des rénovations",
            "Les petits entrepreneurs séparent leurs dépenses personnelles et professionnelles tout en gardant une vue d'ensemble de leur situation financière",
            "Les retraités surveillent leurs revenus fixes et dépenses mensuelles pour s'assurer que leur épargne dure pendant leur retraite"
          ]
        }
      },
      faq: {
        title: "FAQ sur la gestion financière personnelle",
        items: [
          {
            question: "Mes données financières sont-elles sécurisées avec ce gestionnaire ?",
            answer: "Absolument. La sécurité de vos données financières est notre priorité. Ce gestionnaire stocke toutes les informations localement dans votre navigateur, ce qui signifie que vos données sensibles ne quittent jamais votre appareil et ne sont pas transmises à des serveurs externes. Aucun compte ou connexion n'est nécessaire, renforçant encore la confidentialité. Cependant, cette approche signifie que vous devriez exporter régulièrement vos données comme sauvegarde, car effacer le cache du navigateur supprimera vos enregistrements. Cet équilibre entre confidentialité totale et responsabilité locale vous donne un contrôle complet sur vos informations financières personnelles."
          },
          {
            question: "Comment le suivi budgétaire peut-il m'aider à économiser ?",
            answer: "La fonctionnalité de suivi budgétaire de notre gestionnaire est un outil puissant pour augmenter votre épargne en créant une conscience financière et une responsabilisation. Vous pouvez définir des limites budgétaires spécifiques pour différentes catégories de dépenses (épicerie, loisirs, services publics, etc.) et surveiller en temps réel vos dépenses par rapport à ces objectifs. Lorsque vous approchez ou dépassez ces seuils, le système fournit des indicateurs visuels pour prévenir les dépenses excessives. Les rapports mensuels et par catégorie révèlent vos tendances de dépenses, mettant en lumière les domaines où des réductions sont possibles. Ce suivi budgétaire complet crée une boucle de rétroaction qui encourage naturellement des décisions de dépenses plus conscientes et de meilleures habitudes financières."
          },
          {
            question: "Puis-je suivre plusieurs comptes ou devises avec cet outil ?",
            answer: "Oui, notre outil prend entièrement en charge la gestion de multiples comptes financiers et devises. Vous pouvez créer et surveiller divers types de comptes - comptes courants, épargne, cartes de crédit et comptes d'investissement - tous dans un seul tableau de bord. Pour les utilisateurs gérant plusieurs devises, l'outil permet de définir différents types de devises et d'effectuer des conversions. La fonction de transfert vous permet d'enregistrer les mouvements de fonds entre comptes tout en maintenant des soldes précis à travers votre portefeuille financier. Cette fonctionnalité multi-comptes offre une vue complète de votre situation financière globale plutôt qu'une vision fragmentée sur différentes plateformes."
          },
          {
            question: "Quel niveau de détail offrent les rapports et visualisations ?",
            answer: "Les rapports financiers et visualisations de ce gestionnaire offrent une profondeur remarquable tout en restant conviviaux. Le tableau de bord analytique propose plusieurs types de visualisations : comparaison revenus/dépenses, répartition des dépenses par catégorie, analyse des tendances mensuelles et suivi du taux d'épargne. Les rapports peuvent être filtrés par plage de dates, catégories, tags ou comptes pour examiner des aspects spécifiques de votre comportement financier. Les graphiques interactifs permettent d'explorer les détails des transactions directement depuis les visualisations. Ces analyses complètes transforment les données financières brutes en insights actionnables, vous aidant à identifier des modèles de dépenses, suivre la performance budgétaire et prendre des décisions éclairées pour votre gestion financière personnelle."
          },
          {
            question: "En quoi ce gestionnaire diffère-t-il des applications bancaires ?",
            answer: "Contrairement aux applications bancaires qui se concentrent principalement sur les soldes et transactions de comptes spécifiques à une institution, notre gestionnaire offre une supervision financière complète sur tous vos comptes avec une confidentialité totale. Les applications bancaires montrent ce qui s'est déjà passé, tandis que notre outil met l'accent sur la planification, le budget et l'analyse, avec des catégories personnalisables adaptées à votre situation financière spécifique. Les applications bancaires manquent souvent d'analyses détaillées ou n'offrent que des classements basiques, alors que notre gestionnaire fournit des rapports approfondis et des visualisations sur vos modèles financiers. Plus important encore, notre solution stocke les données localement sur votre appareil, vous donnant un contrôle total et protégeant la confidentialité de vos informations financières, contrairement aux applications bancaires qui stockent vos données sur leurs serveurs."
          }
        ]
      },
      guide: {
        title: "Guide étape par étape pour gérer vos finances",
        steps: [
          "Commencez par consulter le tableau de bord de vue d'ensemble pour avoir une image complète de votre situation financière, incluant le total des revenus, dépenses et soldes actuels sur tous vos comptes",
          "Configurez vos comptes en cliquant sur 'Ajouter un compte' et en entrant les détails comme le nom, type (compte courant, épargne, carte de crédit etc.) et solde actuel",
          "Cliquez sur 'Ajouter une transaction' pour enregistrer vos opérations financières, en sélectionnant le type (revenu, dépense ou transfert) et en renseignant la date, montant, catégorie et compte",
          "Établissez des limites budgétaires en naviguant vers la section Budget et en créant des plafonds mensuels pour différentes catégories de dépenses, aidant à contrôler vos dépenses",
          "Utilisez la section Statistiques pour analyser vos habitudes de dépenses via des graphiques visuels, vous permettant d'identifier les domaines de dépenses excessives",
          "Passez régulièrement en revue votre historique de transactions pour vous assurer que toutes les entrées sont exactes et correctement classées, effectuant des corrections si nécessaire pour maintenir l'intégrité des données",
          "Utilisez la fonction 'Exporter les données' pour sauvegarder régulièrement vos données financières au format CSV ou JSON, protégeant vos enregistrements contre une perte accidentelle due à l'effacement des données du navigateur"
        ]
      },
      conclusion: "Ce gestionnaire de budget transforme la tâche souvent intimidante de la gestion financière en un processus simple, voire engageant. En fournissant un environnement sécurisé pour suivre les dépenses, surveiller les revenus et visualiser les habitudes de consommation, cet outil vous donne une clarté sans précédent sur vos comportements financiers. En continuant à enregistrer des transactions et examiner les insights générés, vous développerez une compréhension plus profonde de votre relation avec l'argent et identifierez des opportunités concrètes d'optimisation. Que votre objectif soit de réduire les dettes, accumuler de l'épargne ou simplement gagner en conscience financière, l'utilisation régulière de ce gestionnaire vous conduira vers une meilleure santé financière et une plus grande tranquillité d'esprit concernant votre avenir économique."
    }
  }