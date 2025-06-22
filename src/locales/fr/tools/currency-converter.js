export default {
    name: 'Convertisseur de devises',
    description: 'Conversion et consultation rapides et précises entre différentes monnaies',
    
    // Textes de l'interface principale
    amount: 'Montant',
    from: 'De',
    to: 'À',
    convert: 'Convertir',
    result: 'Résultat',
    swap: 'Échanger les devises',
    rate: 'Taux actuel',
    lastUpdated: 'Dernière mise à jour',
    addCurrency: 'Ajouter une devise',
    
    // Historique
    history: 'Historique',
    clearHistory: 'Effacer l\'historique',
    noHistory: 'Aucun historique',
    
    // Devises
    currencies: {
      USD: 'Dollar américain',
      EUR: 'Euro',
      JPY: 'Yen japonais',
      GBP: 'Livre sterling',
      AUD: 'Dollar australien',
      CAD: 'Dollar canadien',
      CHF: 'Franc suisse',
      CNY: 'Yuan chinois',
      HKD: 'Dollar de Hong Kong',
      NZD: 'Dollar néo-zélandais',
      SEK: 'Couronne suédoise',
      KRW: 'Won sud-coréen',
      SGD: 'Dollar de Singapour',
      NOK: 'Couronne norvégienne',
      MXN: 'Peso mexicain',
      INR: 'Roupie indienne',
      RUB: 'Rouble russe',
      ZAR: 'Rand sud-africain',
      TRY: 'Livre turque',
      BRL: 'Real brésilien',
      TWD: 'Nouveau dollar taïwanais',
      DKK: 'Couronne danoise',
      PLN: 'Zloty polonais',
      THB: 'Baht thaïlandais',
      IDR: 'Roupie indonésienne',
      MYR: 'Ringgit malaisien',
      PHP: 'Peso philippin'
    },
    
    // Messages d'erreur
    errors: {
      invalidAmount: 'Veuillez entrer un montant valide',
      apiError: 'Erreur lors de la récupération des taux de change',
      samecurrencies: 'Veuillez sélectionner des devises différentes'
    },
    
    // Conseils et informations
    tips: {
      offline: 'Mode hors ligne : affichage des derniers taux en cache',
      refreshing: 'Mise à jour des taux de change...'
    },
    
    // Historique des taux
    historicalRates: 'Historique des taux',
    dateRange: 'Période',
    from7days: '7 derniers jours',
    from30days: '30 derniers jours',
    from90days: '90 derniers jours',
    customRange: 'Période personnalisée',
    startDate: 'Date de début',
    endDate: 'Date de fin',
    viewChart: 'Voir le graphique',
    
    // Paramètres
    settings: 'Paramètres',
    decimalPlaces: 'Décimales',
    autoUpdate: 'Mise à jour automatique',
    defaultCurrency: 'Devise par défaut',
    
    // Description de l'outil
    aboutTitle: 'À propos du convertisseur',
    aboutDescription: 'Le convertisseur de devises est une application simple et efficace pour convertir rapidement et précisément entre différentes monnaies. Que ce soit pour un voyage, du commerce international ou des recherches d\'investissement, cet outil répond à vos besoins.',
    
    featuresTitle: 'Fonctionnalités principales',
    feature1: 'Supporte plus de 30 devises principales',
    feature2: 'Taux de change en temps réel',
    feature3: 'Calcul de conversion rapide et intuitif',
    feature4: 'Historique des taux et graphiques',
    feature5: 'Sauvegarde de l\'historique des conversions',
    feature6: 'Personnalisation des paramètres',
    
    howToUseTitle: 'Mode d\'emploi',
    howToUseStep1: '1. Entrez le montant à convertir',
    howToUseStep2: '2. Sélectionnez la devise source',
    howToUseStep3: '3. Sélectionnez la devise cible',
    howToUseStep4: '4. Cliquez sur "Convertir"',
    howToUseStep5: '5. Utilisez "Échanger" pour inverser les devises',
    
    tipsTitle: 'Conseils d\'utilisation',
    tip1: 'Les taux sont mis à jour toutes les heures',
    tip2: 'Ajoutez vos devises favorites pour un accès rapide',
    tip3: 'Utilisez les graphiques pour analyser les tendances',
    tip4: 'Les résultats sont sauvegardés automatiquement',
    tip5: 'En mode hors ligne, les derniers taux en cache sont utilisés'
  };