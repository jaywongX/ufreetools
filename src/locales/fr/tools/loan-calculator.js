export default {
  name: 'Calculateur de prêt',
  description: 'Calcule les mensualités, intérêts totaux et échéanciers pour les prêts immobiliers, automobiles et personnels',

  // Textes de l'interface principale
  loanType: 'Type de prêt',

  housingLoan: 'Prêt immobilier',
  carLoan: 'Prêt automobile',
  personalLoan: 'Prêt personnel',
  loanAmount: 'Montant du prêt',
  loanTerm: 'Durée du prêt',
  interestRate: 'Taux d\'intérêt annuel',
  paymentMethod: 'Méthode de remboursement',
  equalPrincipalAndInterest: 'Amortissement constant',
  equalPrincipal: 'Amortissement dégressif',
  calculate: 'Calculer',
  reset: 'Réinitialiser',
  tip: 'Veuillez d\'abord calculer le plan de remboursement',
  years: 'ans',
  months: 'mois',
  amount: 'montant',
  currency: 'devise',
  CNY: 'Yuan chinois (¥)',
  USD: 'Dollar américain ($)',
  EUR: 'Euro (€)',
  JPY: 'Yen japonais (¥)',
  GBP: 'Livre sterling (£)',

  // Zone des résultats
  results: 'Résultats du calcul',

  monthlyPayment: 'Mensualité',
  firstMonthPayment: 'Premier paiement',
  lastMonthPayment: 'Dernier paiement',
  totalInterest: 'Intérêts totaux',
  totalPayment: 'Montant total remboursé',
  interestRatio: 'Part des intérêts',

  // Échéancier de remboursement
  paymentSchedule: 'Échéancier de remboursement',

  downloadExcel: 'Exporter en Excel',
  paymentNo: 'N° échéance',
  paymentDate: 'Date de paiement',
  principal: 'Capital',
  interest: 'Intérêt',
  payment: 'Paiement',
  remainingPrincipal: 'Capital restant',

  // Graphiques
  paymentChart: 'Analyse des paiements',

  principalAndInterest: 'Répartition capital/intérêts',
  monthlyPaymentTrend: 'Évolution des mensualités',

  // Section de présentation de l'outil
  aboutTitle: 'À propos du calculateur de prêt',

  aboutDescription: 'Le calculateur de prêt est un outil qui vous aide à analyser divers types de crédits (immobilier, automobile, personnel) pour une compréhension claire des coûts d\'emprunt.',
  featuresTitle: 'Fonctionnalités principales',
  feature1: 'Supporte deux méthodes de remboursement : amortissement constant et dégressif',
  feature2: 'Calcule mensualités, intérêts totaux et montant global remboursé',
  feature3: 'Génère un échéancier de remboursement détaillé',
  feature4: 'Visualisation graphique de la répartition capital/intérêts',
  feature5: 'Supporte plusieurs devises',
  usageTitle: 'Mode d\'emploi',
  usageStep1: 'Sélectionnez le type de prêt (immobilier, automobile ou personnel)',
  usageStep2: 'Entrez montant, durée et taux d\'intérêt annuel',
  usageStep3: 'Choisissez la méthode de remboursement',
  usageStep4: 'Cliquez sur "Calculer" pour obtenir les détails',
  usageStep5: 'Consultez l\'échéancier et les graphiques d\'analyse',
  explanationTitle: 'Explication des méthodes de remboursement',
  explanationEqualPayment: 'Amortissement constant : mensualités identiques mais répartition capital/intérêts évolutive (plus d\'intérêts au début).',
  explanationEqualPrincipal: 'Amortissement dégressif : capital constant avec intérêts décroissants, donc mensualités qui diminuent progressivement.',
  tipsTitle: 'Conseils pratiques',
  tip1: 'Allonger la durée réduit la mensualité mais augmente les intérêts totaux',
  tip2: 'L\'amortissement dégressif coûte moins cher en intérêts mais a des mensualités initiales plus élevées',
  tip3: 'Les remboursements anticipés réduisent les intérêts, surtout en début de prêt',
  tip4: 'Comparez différents scénarios pour choisir l\'option adaptée à votre situation'
};