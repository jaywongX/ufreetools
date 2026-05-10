export default {
    name: 'Générateur d\'adresses Italie - Générez des adresses italiennes réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses italiennes en ligne gratuit qui crée des adresses italiennes au format réel, des numéros de Code Fiscale, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par région, l\'exportation aux formats JSON/CSV et s\'exécute entièrement dans le navigateur pour protéger la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer des données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectRegion: 'Sélectionner une région',
    allRegions: 'Toutes les régions',
    postalCodeLabel: 'Code postal',
    validatePostalCode: 'Valider le code postal',
    
    // Types d'adresses
    addressTypeTitle: 'Type d\'adresse',
    addressTypeResidential: 'Adresse résidentielle',
    addressTypeCommercial: 'Adresse commerciale',
    addressTypeVirtual: 'Boîte aux lettres virtuelle',
    addressTypeCampus: 'Campus universitaire',
    
    // Informations d'identité
    identityTitle: 'Informations d\'identité',
    fullName: 'Nom complet',
    gender: 'Genre',
    genderMale: 'Masculin',
    genderFemale: 'Féminin',
    age: 'Âge',
    birthDate: 'Date de naissance',
    zodiac: 'Signe du zodiaque',
    height: 'Taille',
    weight: 'Poids',
    
    // Informations de contact
    contactTitle: 'Informations de contact',
    phoneNumber: 'Numéro de téléphone',
    phoneType: 'Type de téléphone',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Ligne fixe',
    areaCode: 'Indicatif régional',
    email: 'Adresse e-mail',
    tempEmail: 'E-mail temporaire',
    
    // Carte de crédit
    creditCardTitle: 'Informations de carte de crédit',
    cardType: 'Type de carte',
    cardNumber: 'Numéro de carte',
    expiryDate: 'Date d\'expiration',
    cvv: 'CVV',
    bankBin: 'BIN bancaire',
    
    // Carrière
    careerTitle: 'Profil de carrière',
    jobTitle: 'Titre du poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'entreprise',
    companySize: 'Taille de l\'entreprise',
    industry: 'Secteur d\'activité',
    employmentStatus: 'Statut d\'emploi',
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    // Carte d'identité
    idCardTitle: 'Carte d\'identité italienne',
    idCardNumber: 'Numéro de carte d\'identité',
    codiceFiscale: 'Code Fiscale',
    
    // Empreinte numérique
    fingerprintTitle: 'Empreinte numérique',
    os: 'Système d\'exploitation',
    osVersion: 'Version du système',
    browser: 'Navigateur',
    userAgent: 'User Agent',
    screenResolution: 'Résolution de l\'écran',
    timezone: 'Fuseau horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique de cookies',
    
    // Options d'exportation
    exportTitle: 'Format d\'exportation',
    exportJson: 'Exporter en JSON',
    exportCsv: 'Exporter en CSV',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les détails',
    
    // Génération par lots
    batchTitle: 'Génération par lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrez la quantité (1-100)',
    
    // Messages de notification
    generating: 'Génération en cours...',
    generated: 'Génération terminée',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    invalidQuantity: 'Veuillez entrer un nombre entre 1 et 100',
    
    // Affichage des résultats
    resultCount: '{count} enregistrements générés',
    resultSummary: 'Résumé des résultats',
    showAll: 'Tout afficher',
    collapse: 'Réduire',
    
    // Options de génération
    generateOptionsTitle: 'Options de génération',
    
    // Affichage des enregistrements
    recordLabel: 'Enregistrement #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Rue',
    houseNumberLabel: 'Numéro de maison',
    buildingLabel: 'Bâtiment',
    floorLabel: 'Étage',
    unitLabel: 'Unité',
    regionLabel: 'Région',
    postalCode: 'Code postal',
    
    // Format d'adresse
    addressNumber: 'N°',
    addressFloor: 'Ét.',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    italy: 'Italie',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Résidence étudiante',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Bâtiment',
    apartment: 'Appartement',
    
    // Noms de régions (régions italiennes)
    regions: {
        'Lombardia': 'Lombardie',
        'Lazio': 'Latium',
        'Campania': 'Campanie',
        'Sicilia': 'Sicile',
        'Veneto': 'Vénétie',
        'Emilia-Romagna': 'Émilie-Romagne',
        'Piemonte': 'Piémont',
        'Toscana': 'Toscane',
        'Puglia': 'Pouilles',
        'Calabria': 'Calabre',
        'Sardegna': 'Sardaigne',
        'Friuli Venezia Giulia': 'Frioul-Vénétie Julienne',
        'Liguria': 'Ligurie',
        'Marche': 'Marches',
        'Abruzzo': 'Abruzzes',
        'Molise': 'Molise',
        'Basilicata': 'Basilicate',
        'Umbria': 'Ombrie',
        "Valle d'Aosta": "Vallée d'Aoste",
        'Trentino-Alto Adige': 'Trentin-Haut-Adige'
    },
    
    // Noms d'universités
    universities: {
        'Politecnico di Milano': 'Polytechnique de Milan',
        'Sapienza': 'Université de Rome La Sapienza',
        'Bocconi': 'Université Bocconi',
        'Politecnico di Torino': 'Polytechnique de Turin',
        'UniMI': 'Université de Milan',
        'UniFI': 'Université de Florence',
        'UniBO': 'Université de Bologne',
        'UniPd': 'Université de Padoue',
        'UniNa': 'Université de Naples Frédéric II',
        'UniTo': 'Université de Turin'
    },
    
    // Noms de colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Bâtiment',
        floor: 'Étage',
        unit: 'Unité',
        region: 'Région',
        postalCode: 'Code postal',
        fullName: 'Nom complet',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de naissance',
        phone: 'Téléphone',
        email: 'E-mail',
        cardType: 'Type de carte',
        cardNumber: 'Numéro de carte',
        idCardNumber: 'Numéro de carte d\'identité'
    }
};