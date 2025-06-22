export default {
    name: 'Calculateur d\'impôt sur le revenu',
    description: 'Calcule l\'impôt sur le revenu salarial et le salaire net après impôt',
    
    // Textes principaux de l'interface
    taxSystem: 'Système fiscal',
    china: 'Chine',
    usa: 'États-Unis',
    uk: 'Royaume-Uni',
    
    monthlyIncome: 'Revenu mensuel',
    annualIncome: 'Revenu annuel',
    socialSecurity: 'Sécurité sociale',
    socialSecurityAmount: 'Montant sécurité sociale',
    socialSecurityPercent: 'Pourcentage sécurité sociale',
    socialSecurityBase: 'Base sécurité sociale',
    
    deductions: 'Déductions spéciales',
    childrenEducation: 'Éducation des enfants',
    continuingEducation: 'Formation continue',
    housingLoanInterest: 'Intérêts prêt immobilier',
    housingRent: 'Loyer',
    elderlySupport: 'Soutien aux personnes âgées',
    medicalTreatment: 'Traitement médical majeur',
    otherDeductions: 'Autres déductions',
    
    calculate: 'Calculer',
    reset: 'Réinitialiser',
    
    // Zone des résultats
    results: 'Résultats du calcul',
    taxableIncome: 'Revenu imposable',
    taxRate: 'Taux d\'imposition applicable',
    quickDeduction: 'Déduction rapide',
    taxPayable: 'Impôt à payer',
    afterTaxIncome: 'Revenu après impôt',
    effectiveTaxRate: 'Taux d\'imposition effectif',
    monthlyBreakdown: 'Détail mensuel',
    
    // Zone des graphiques
    taxAnalysis: 'Analyse fiscale',
    incomeDistribution: 'Répartition des revenus',
    income: 'Revenu',
    tax: 'Impôt',
    takeHome: 'Net',
    
    // Tableau des tranches
    taxBrackets: 'Tranches d\'imposition',
    bracketRange: 'Plage de tranche',
    rate: 'Taux',
    
    // Détail mensuel
    month: 'Mois',
    cumulativeIncome: 'Revenu cumulé',
    cumulativeDeduction: 'Déduction cumulée',
    cumulativeTaxable: 'Revenu imposable cumulé',
    cumulativeTax: 'Impôt cumulé',
    previousTax: 'Impôt payé le mois précédent',
    currentMonthTax: 'Impôt dû ce mois',
    
    // Sélection de ville
    city: 'Ville',
    firstTier: 'Ville de première catégorie',
    secondTier: 'Ville de deuxième catégorie',
    otherCity: 'Autre ville',
    
    // Présentation de l'outil
    aboutTitle: 'À propos de l\'impôt sur le revenu',
    aboutDescription: 'L\'impôt sur le revenu est un impôt prélevé sur les revenus des particuliers. Dans la plupart des pays, c\'est l\'un des principaux impôts. En Chine, l\'impôt sur le revenu utilise un barème progressif avec des taux allant de 3% à 45%.',
    
    howToUseTitle: 'Comment utiliser ce calculateur',
    howToUseStep1: '1. Sélectionnez le système fiscal (actuellement seul le système chinois est supporté)',
    howToUseStep2: '2. Entrez votre revenu mensuel ou annuel (les deux sont automatiquement convertis)',
    howToUseStep3: '3. Entrez le montant des cotisations sociales ou sélectionnez un pourcentage',
    howToUseStep4: '4. Remplissez les différentes déductions spéciales',
    howToUseStep5: '5. Cliquez sur "Calculer" pour obtenir les résultats',
    
    chinaTaxRulesTitle: 'Règles de calcul de l\'impôt chinois',
    chinaTaxRule1: 'Seuil d\'imposition : 5 000 yuans/mois',
    chinaTaxRule2: 'Revenu imposable = Revenu - Cotisations sociales - Déductions spéciales - Seuil',
    chinaTaxRule3: 'Impôt = Revenu imposable × Taux - Déduction rapide',
    
    deductionExplainTitle: 'Explications sur les déductions spéciales',
    childrenEducationExplain: 'Éducation des enfants : 1 000 yuans/mois par enfant',
    continuingEducationExplain: 'Formation continue : 400 yuans/mois pour les études ou 3 600 yuans/an pour les qualifications',
    housingLoanExplain: 'Intérêts prêt immobilier : 1 000 yuans/mois',
    housingRentExplain: 'Loyer : 1 500 yuans/mois (villes 1ère cat.), 1 100 yuans/mois (villes 2ème cat.), 800 yuans/mois (autres)',
    elderlyExplain: 'Soutien aux personnes âgées : 2 000 yuans/mois pour enfant unique ou répartis entre enfants',
    medicalExplain: 'Traitement médical majeur : Dépenses médicales annuelles dépassant 15 000 yuans, plafonnées à 60 000 yuans/an',
    
    taxTipsTitle: 'Conseils fiscaux',
    taxTip1: 'Utilisez judicieusement les déductions spéciales pour réduire votre impôt',
    taxTip2: 'Les primes annuelles peuvent être imposées séparément ou avec le revenu global',
    taxTip3: 'Si vous avez plusieurs sources de revenus, elles doivent être combinées pour le calcul',
    taxTip4: 'Les pensions d\'entreprise et assurances santé peuvent aussi être déduites dans certaines limites',
    taxTip5: 'Déclarez précisément vos déductions pour éviter les risques fiscaux',
    
    // Contenu de l'article
    article: {
      title: "Calculateur d'impôt sur le revenu : Un outil complet de planification fiscale",
      features: {
        title: "Découvrez les avantages du calculateur d'impôt",
        description: "Le <strong>calculateur d'impôt sur le revenu</strong> est un outil puissant de planification financière qui aide à estimer précisément ses <strong>obligations fiscales</strong> et son salaire net. Utilisant les derniers <strong>taux d'imposition</strong> et règles de déduction, il fournit un détail précis de votre charge fiscale.<br><br>Notre calculateur supporte actuellement le <strong>système progressif chinois</strong> (7 tranches de 3% à 45%) et montre clairement comment est calculé le <strong>revenu imposable</strong>, dans quelle <strong>tranche</strong> vous vous situez, avec un détail mensuel.",
        useCases: {
          title: "Cas d'utilisation pratiques",
          items: [
            "<strong>Négociation salariale</strong> : Estimez votre salaire net avant une négociation",
            "<strong>Planification financière</strong> : Intégrez une estimation précise dans votre budget annuel",
            "<strong>Optimisation fiscale</strong> : Testez différents scénarios de déductions",
            "<strong>Gestion des revenus indépendants</strong> : Estimez l'impact fiscal des revenus complémentaires",
            "<strong>Planification retraite</strong> : Prévoyez vos impôts futurs",
            "<strong>Déménagement</strong> : Comparez l'impact fiscal entre différentes villes"
          ]
        }
      },
      faq: {
        title: "Questions fréquentes sur le calcul fiscal",
        items: [
          {
            question: "Comment est calculé l'impôt sur le revenu en Chine ?",
            answer: "L'<strong>impôt sur le revenu</strong> chinois utilise un barème progressif à 7 tranches. Le <strong>revenu imposable</strong> est calculé en déduisant du revenu brut le seuil (5 000 yuans/mois), les cotisations sociales et les déductions spéciales. La formule est : Impôt = (Revenu - Cotisations - Déductions - 5 000 yuans) × Taux - Déduction rapide."
          },
          {
            question: "Quelles sont les déductions spéciales en Chine ?",
            answer: "Les <strong>déductions spéciales</strong> incluent : 1) <strong>Éducation des enfants</strong> : 1 000 yuans/mois/enfant 2) <strong>Formation continue</strong> : 400 yuans/mois ou 3 600 yuans/an 3) <strong>Intérêts immobiliers</strong> : 1 000 yuans/mois 4) <strong>Loyer</strong> : 1 500/1 100/800 yuans selon la ville 5) <strong>Personnes âgées</strong> : 2 000 yuans/mois 6) <strong>Frais médicaux</strong> : Dépenses >15 000 yuans/an (plafond 80 000 yuans)."
          },
          {
            question: "Pourquoi mon impôt mensuel varie-t-il dans l'année ?",
            answer: "Les <strong>prélèvements mensuels</strong> varient à cause de la méthode de calcul cumulative chinoise. En début d'année, vous êtes dans une tranche basse, mais l'impôt augmente avec le revenu cumulé. Notre calculateur montre cette progression mensuelle."
          },
          {
            question: "Comment optimiser légalement ma situation fiscale ?",
            answer: "Pour réduire votre <strong>charge fiscale</strong> : 1) Utilisez toutes les <strong>déductions spéciales</strong> applicables 2) Maximisez vos cotisations au <strong>fonds de logement</strong> 3) Participez aux <strong>plans retraite</strong> et assurances santé proposés par l'employeur 4) Optimisez le timing des primes 5) Conservez les justificatifs."
          },
          {
            question: "Quelle est la précision de ce calculateur ?",
            answer: "Notre <strong>calculateur d'impôt</strong> est très précis pour les règles fiscales chinoises actuelles (réforme 2019). Il couvre les 7 tranches, déductions rapides et méthode cumulative. Pour des situations complexes (multiples revenus, revenus étrangers), consultez un professionnel."
          }
        ]
      },
      guide: {
        title: "Guide d'utilisation du calculateur d'impôt",
        steps: [
          "<strong>Sélectionnez votre système fiscal</strong> : Actuellement seul le système chinois est disponible",
          "<strong>Entrez vos revenus</strong> : Saisissez votre revenu mensuel ou annuel (conversion automatique)",
          "<strong>Configurez les cotisations sociales</strong> : Entrez un montant ou un pourcentage",
          "<strong>Sélectionnez votre ville</strong> : Cela affecte la déduction pour loyer",
          "<strong>Remplissez les déductions spéciales</strong> : Éducation, logement, personnes âgées, etc.",
          "<strong>Cliquez sur 'Calculer'</strong> : Le système déterminera votre revenu imposable, taux applicable et impôt",
          "<strong>Consultez vos résultats</strong> : Détail de l'impôt, salaire net et répartition mensuelle"
        ]
      },
      conclusion: "Le calculateur d'impôt sur le revenu est un outil puissant pour gérer votre planification fiscale personnelle. Il fournit des informations claires sur vos obligations fiscales et votre salaire net, vous aidant à prendre de meilleures décisions financières. Utilisez-le régulièrement pour maintenir une vision précise de votre situation fiscale."
    }
  };