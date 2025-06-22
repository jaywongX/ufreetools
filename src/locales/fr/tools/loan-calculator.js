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
    tip4: 'Comparez différents scénarios pour choisir l\'option adaptée à votre situation',
    
    article: {
      title: "Guide complet du calculateur de prêt : comprendre vos options pour les crédits immobiliers, automobiles et personnels",
      intro: {
        title: "Comprendre les outils modernes de calcul de prêt",
        p1: "<b>Les calculateurs de prêt</b> sont devenus indispensables dans le paysage financier actuel. Notre outil simplifie l'analyse des coûts réels d'emprunt, que ce soit pour un achat immobilier, un véhicule ou un projet personnel. Avec des échéanciers détaillés et une analyse complète des coûts, il permet des décisions financières éclairées avant de s'engager.",
        p2: "<b>La transparence financière</b> est cruciale lors de l'évaluation des options de prêt. Notre calculateur montre non seulement vos mensualités mais aussi le plan complet de remboursement, le coût total des intérêts et leur proportion. Ce niveau de détail révèle comment durée, taux et méthode de remboursement impactent votre engagement financier à long terme.",
        p3: "<b>Les prêts immobiliers, automobiles et personnels</b> ont chacun leurs spécificités. Notre calculateur polyvalent s'adapte à ces trois types, permettant des ajustements personnalisés tout en visualisant l'impact à long terme de vos choix d'emprunt."
      },
      useCases: {
        title: "Applications pratiques du calculateur de prêt",
        case1: "<h3>Planification et comparaison de prêts immobiliers</h3><p><b>L'analyse des prêts immobiliers</b> est l'application la plus critique, un achat immobilier étant souvent le plus important de la vie. Le calculateur permet de comparer différents apports, durées (15 vs 30 ans), et d'évaluer l'opportunité d'un refinancement ou de remboursements anticipés.</p>",
        case2: "<h3>Optimisation du financement automobile</h3><p><b>Le calcul de prêt auto</b> apporte de la transparence dans un domaine souvent obscur. L'outil montre comment allonger la durée augmente le coût total malgré des mensualités plus basses, et aide à comparer les offres spéciales des concessionnaires.</p>",
        case3: "<h3>Gestion des prêts personnels</h3><p><b>La planification de prêts personnels</b> nécessite une analyse minutieuse de l'impact sur le budget. Le calculateur aide à déterminer un montant raisonnable en fonction de sa capacité de remboursement plutôt que de ce que les organismes proposent.</p>",
        case4: "<h3>Éducation financière</h3><p><b>L'apprentissage des mécanismes de prêt</b> est une composante clé de la culture financière. Notre outil montre concrètement comment fonctionnent les intérêts composés et l'impact des différents paramètres d'un prêt.</p>",
        case5: "<h3>Analyse financière pour entreprises</h3><p><b>L'évaluation de prêts professionnels</b> aide les entrepreneurs à analyser le financement d'équipements ou d'expansion. L'outil permet de comparer coûts d'emprunt et retours sur investissement potentiels.</p>"
      },
      loanMethods: {
        title: "Comprendre les différentes méthodes de remboursement",
        method1: {
          title: "Méthode d'amortissement constant",
          description: "<p><b>L'amortissement constant</b> structure les remboursements avec des mensualités identiques sur toute la durée. La proportion capital/intérêts évolue : plus d'intérêts au début, plus de capital en fin de prêt.</p><p>La formule de calcul est :</p><p class='text-center my-3'><code>Mensualité = Capital × [r(1+r)ⁿ] ÷ [(1+r)ⁿ-1]</code></p><p>où r est le taux mensuel (taux annuel ÷ 12) et n le nombre total de mensualités.</p>"
        },
        method2: {
          title: "Méthode d'amortissement dégressif",
          description: "<p><b>L'amortissement dégressif</b> répartit le capital de manière égale sur toutes les échéances. Les intérêts diminuent progressivement, ce qui réduit le montant total des intérêts payés mais entraîne des mensualités initiales plus élevées.</p><p>Calcul :</p><p class='text-center my-3'><code>Capital mensuel = Capital total ÷ Nombre de mensualités</code><br><code>Intérêts mensuels = Capital restant × Taux mensuel</code><br><code>Mensualité totale = Capital mensuel + Intérêts mensuels</code></p>"
        }
      },
      tutorial: {
        title: "Guide étape par étape pour utiliser notre calculateur de prêt",
        intro: "Suivez ces instructions pour tirer le meilleur parti de notre calculateur :",
        step1: {
          title: "Étape 1 : Sélectionnez le type de prêt et la devise",
          description: "Choisissez d'abord le type de prêt : immobilier, automobile ou personnel. Sélectionnez ensuite votre devise parmi les options proposées (yuan, dollar, euro, yen, livre sterling)."
        },
        step2: {
          title: "Étape 2 : Saisissez les détails du prêt",
          description: "Entrez le montant du prêt, la durée (en années ou mois) et le taux d'intérêt annuel. Pour les prêts immobiliers, les durées vont généralement de 15 à 30 ans, contre 3-7 ans pour les prêts auto et 1-5 ans pour les prêts personnels."
        },
        step3: {
          title: "Étape 3 : Choisissez la méthode de remboursement",
          description: "Sélectionnez entre amortissement constant (mensualités fixes mais plus d'intérêts au total) ou dégressif (mensualités décroissantes mais économie sur les intérêts)."
        },
        step4: {
          title: "Étape 4 : Analysez les résultats et l'échéancier",
          description: "Après calcul, consultez les résultats complets : mensualités, coût total, répartition capital/intérêts. L'échéancier détaillé montre l'évolution paiement par paiement, avec possibilité d'export Excel."
        }
      },
      faq: {
        title: "Questions fréquentes sur les calculs de prêt",
        q1: "Comment la durée affecte-t-elle le coût total des intérêts ?",
        a1: "<b>Allonger la durée réduit la mensualité mais augmente considérablement les intérêts totaux</b>. Par exemple, un prêt de 300 000€ à 4% sur 30 ans coûtera environ 215 609€ d'intérêts, contre 99 431€ sur 15 ans (économie de 116 000€).",
        
        q2: "Quelle méthode de remboursement est la plus économique ?",
        a2: "<b>L'amortissement dégressif coûte généralement moins cher en intérêts</b> que l'amortissement constant. Pour un prêt de 200 000€ à 4,5% sur 20 ans, l'économie peut atteindre 9 000-15 000€. Mais cette méthode implique des mensualités initiales plus élevées.",
        
        q3: "Quelles économies avec des remboursements anticipés ?",
        a3: "<b>Les remboursements anticipés réduisent significativement le coût total</b>, surtout en début de prêt. Par exemple, 200€ supplémentaires par mois sur un prêt de 300 000€ à 4% sur 30 ans peuvent économiser 62 000€ d'intérêts et raccourcir la durée de 8 ans.",
        
        q4: "Comment interpréter l'échéancier de remboursement ?",
        a4: "<b>L'échéancier montre la décomposition détaillée de chaque paiement</b> : capital, intérêts, montant total et solde restant. Il permet de voir l'évolution de la répartition capital/intérêts et d'évaluer l'impact de remboursements anticipés.",
        
        q5: "Quels critères pour comparer des offres de prêt ?",
        a5: "<b>Comparez non seulement les taux</b> mais aussi la durée, les frais (dossier, assurance), les pénalités de remboursement anticipé, et le type de taux (fixe ou variable). Notre calculateur vous aide à standardiser ces variables pour une comparaison équitable."
      },
      relatedTools: {
        title: "Découvrez nos autres outils financiers",
        description: "Complétez votre planification financière avec ces calculatrices :",
        tool1: {
          name: "Calculateur d'intérêts composés",
          url: "https://www.ufreetools.com/tool/compound-interest-calculator",
          description: "Calculez la croissance de vos investissements grâce aux intérêts composés."
        },
        tool2: {
          name: "Convertisseur de devises",
          url: "https://www.ufreetools.com/tool/currency-converter",
          description: "Conversion entre devises avec les taux actuels."
        },
        tool3: {
          name: "Calculateur de pourcentages",
          url: "https://www.ufreetools.com/tool/percentage-calculator",
          description: "Calculs de pourcentages, augmentations et différences."
        },
        tool4: {
          name: "Calculateur de retraite",
          url: "https://www.ufreetools.com/tool/retirement-calculator",
          description: "Planifiez votre épargne retraite."
        }
      },
      resources: {
        title: "Ressources officielles sur les prêts",
        resource1: {
          name: "Commission de régulation bancaire chinoise",
          url: "http://www.cbirc.gov.cn/cn/view/pages/index/index.html",
          description: "Ressources officielles sur les politiques de prêt et la protection des consommateurs."
        },
        resource2: {
          name: "Banque populaire de Chine - Protection des consommateurs",
          url: "http://www.pbc.gov.cn/goutongjiaoliu/113456/113469/index.html",
          description: "Guides sur les options de prêt et droits des emprunteurs."
        },
        resource3: {
          name: "Association bancaire chinoise",
          url: "https://www.china-cba.net/",
          description: "Ressources éducatives sur les calculs de prêt et planification financière."
        }
      }
    }
  };