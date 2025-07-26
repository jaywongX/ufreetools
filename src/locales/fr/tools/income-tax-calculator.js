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
  taxTip5: 'Déclarez précisément vos déductions pour éviter les risques fiscaux'
};