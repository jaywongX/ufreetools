export default {
    name: 'Planificateur de budget de voyage',
    description: 'Planifiez et calculez votre budget de voyage, gérez facilement vos dépenses',
    
    // Éléments principaux de l'interface
    planYourTrip: 'Planifiez votre voyage',
    destination: 'Destination',
    startDate: 'Date de début',
    endDate: 'Date de fin',
    travelers: 'Nombre de voyageurs',
    currency: 'Devise d\'affichage',
    tripDuration: 'Durée du voyage (jours)',
    totalBudget: 'Budget total',
    perPersonBudget: 'Budget par personne',
    perDayBudget: 'Budget quotidien',
    
    // Boutons et actions
    calculate: 'Calculer le budget',
    reset: 'Réinitialiser',
    addExpense: 'Ajouter une dépense',
    removeExpense: 'Supprimer',
    saveAsPDF: 'Enregistrer en PDF',
    
    // Catégories
    categories: {
      transport: 'Transport',
      accommodation: 'Hébergement',
      food: 'Nourriture',
      activities: 'Activités et attractions',
      shopping: 'Shopping',
      misc: 'Autres dépenses',
      emergency: 'Fonds d\'urgence'
    },
    
    // Options de transport
    transport: {
      title: 'Frais de transport',
      flight: 'Billet d\'avion',
      train: 'Train',
      bus: 'Bus',
      car: 'Location de voiture/Carburant',
      taxi: 'Taxi/VTC',
      publicTransport: 'Transport public',
      other: 'Autre transport'
    },
    
    // Options d'hébergement
    accommodation: {
      title: 'Frais d\'hébergement',
      hotel: 'Hôtel',
      hostel: 'Auberge de jeunesse',
      apartment: 'Location/Appartement',
      camping: 'Camping',
      other: 'Autre hébergement'
    },
    
    // Options de nourriture
    food: {
      title: 'Frais de nourriture',
      restaurants: 'Repas au restaurant',
      streetFood: 'Nourriture de rue',
      groceries: 'Courses alimentaires',
      drinks: 'Boissons/Alcool',
      other: 'Autre nourriture'
    },
    
    // Options d'activités
    activities: {
      title: 'Activités et attractions',
      attractions: 'Billets d\'attraction',
      tours: 'Visites guidées/Activités de groupe',
      entertainment: 'Activités de divertissement',
      other: 'Autres activités'
    },
    
    // Autres dépenses
    misc: {
      title: 'Autres dépenses',
      insurance: 'Assurance voyage',
      visa: 'Frais de visa',
      souvenirs: 'Souvenirs',
      internet: 'Frais d\'internet',
      tips: 'Pourboires',
      other: 'Autres frais divers'
    },
    
    // En-têtes de tableau
    table: {
      category: 'Catégorie',
      description: 'Description',
      amount: 'Montant',
      actions: 'Actions'
    },
    
    // Statistiques et analyse
    analysis: {
      title: 'Analyse du budget',
      summary: 'Résumé du budget',
      breakdown: 'Répartition des dépenses',
      distribution: 'Distribution du budget',
      dailyAverage: 'Moyenne quotidienne',
      suggestions: 'Suggestions budgétaires'
    },
    
    // Devises
    currencies: {
      CNY: 'Yuan chinois (¥)',
      USD: 'Dollar américain ($)',
      EUR: 'Euro (€)',
      JPY: 'Yen japonais (¥)',
      GBP: 'Livre sterling (£)',
      KRW: 'Won coréen (₩)',
      AUD: 'Dollar australien ($)',
      CAD: 'Dollar canadien ($)',
      THB: 'Baht thaïlandais (฿)',
      SGD: 'Dollar de Singapour ($)'
    },
    
    // Destinations courantes
    destinations: {
      domestic: 'Destinations nationales',
      international: 'Destinations internationales',
      popularCities: 'Villes populaires',
      beijing: 'Pékin',
      shanghai: 'Shanghai',
      guangzhou: 'Guangzhou',
      shenzhen: 'Shenzhen',
      hangzhou: 'Hangzhou',
      chengdu: 'Chengdu',
      xian: 'Xi\'an',
      sanya: 'Sanya',
      tokyo: 'Tokyo',
      osaka: 'Osaka',
      seoul: 'Séoul',
      bangkok: 'Bangkok',
      singapore: 'Singapour',
      paris: 'Paris',
      london: 'Londres',
      newyork: 'New York',
      sydney: 'Sydney',
      custom: 'Destination personnalisée'
    },
    
    // Conseils et suggestions
    tips: {
      general: 'Conseils généraux',
      saveMoney: 'Conseils pour économiser',
      localCurrency: 'Conseils sur la devise locale',
      emergencyFund: 'Il est recommandé de prévoir 10-15% du budget total comme fonds d\'urgence',
      transport: 'Réserver les billets d\'avion à l\'avance permet généralement d\'économiser',
      accommodation: 'Choisir un hébergement avec cuisine peut réduire les dépenses alimentaires',
      food: 'Essayer la cuisine locale est plus économique que les chaînes internationales',
      planning: 'Un itinéraire quotidien détaillé aide à contrôler le budget',
      extraCosts: 'N\'oubliez pas les petits frais comme les pourboires, internet et les cartes de transport'
    },
    
    // Messages d'information
    messages: {
      success: 'Budget calculé avec succès',
      error: 'Veuillez remplir tous les champs obligatoires',
      dateError: 'La date de fin doit être postérieure à la date de début',
      saved: 'Plan budgétaire enregistré',
      deleted: 'Plan budgétaire supprimé',
      highBudget: 'Votre budget semble supérieur à la moyenne pour cette destination',
      lowBudget: 'Votre budget semble faible, assurez-vous de couvrir toutes les dépenses nécessaires'
    },
    
    // Informations de pied de page
    about: {
      title: 'À propos du planificateur de budget de voyage',
      description: 'Le planificateur de budget de voyage est un outil pour gérer vos dépenses de voyage, rendant votre voyage à la fois agréable et économique. En planifiant chaque dépense, évitez les problèmes financiers et profitez pleinement de votre expérience.',
      
      featuresTitle: 'Fonctionnalités principales',
      feature1: 'Établir un budget raisonnable selon la destination, durée et nombre de voyageurs',
      feature2: 'Détail des dépenses par catégorie (transport, hébergement, nourriture, etc.)',
      feature3: 'Analyse et visualisation du budget',
      feature4: 'Prise en charge de multiples devises',
      feature5: 'Conseils pratiques pour économiser',
      feature6: 'Exportation et sauvegarde des plans budgétaires',
      
      benefitsTitle: 'Avantages',
      benefit1: 'Éviter les dépassements de budget',
      benefit2: 'Répartition équilibrée des fonds',
      benefit3: 'Réduire le stress financier',
      benefit4: 'Améliorer l\'efficacité de la planification',
      benefit5: 'Adapté à différents styles de voyage et budgets',
      
      tipsTitle: 'Conseils de planification',
      tip1: 'Ajustez le budget selon le coût de la destination',
      tip2: 'Prévoyez 10-15% pour les imprévus',
      tip3: 'Voyager hors saison réduit les coûts',
      tip4: 'Attention aux frais bancaires à l\'étranger',
      tip5: 'Pensez à une assurance voyage pour les urgences'
    }
  };