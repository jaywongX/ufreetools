export default {
    name: 'Générateur d\'adresses malaisien - Générez des adresses malaisiennes réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses malaisiennes gratuit en ligne qui crée des adresses malaisiennes au format réel, des numéros MyKad, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par États, les formats d\'exportation JSON/CSV et s\'exécute entièrement dans le navigateur pour la protection de la vie privée.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer les données',
    loadSampleBtn: 'Charger l\'exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectRegion: 'Sélectionner l\'État',
    allRegions: 'Tous les États',
    postalCodeLabel: 'Code postal',
    validatePostalCode: 'Valider le code postal',
    
    // Types d\'adresse
    addressTypeTitle: 'Type d\'adresse',
    addressTypeResidential: 'Adresse résidentielle',
    addressTypeCommercial: 'Adresse commerciale',
    addressTypeVirtual: 'Boîte aux lettres virtuelle',
    addressTypeCampus: 'Campus universitaire',
    
    // Informations d\'identité
    identityTitle: 'Informations d\'identité',
    fullName: 'Nom complet',
    gender: 'Genre',
    genderMale: 'Masculin',
    genderFemale: 'Féminin',
    age: 'Âge',
    birthDate: 'Date de naissance',
    zodiac: 'Signe zodiacal',
    height: 'Taille',
    weight: 'Poids',
    
    // Informations de contact
    contactTitle: 'Informations de contact',
    phoneNumber: 'Numéro de téléphone',
    phoneType: 'Type de téléphone',
    phoneTypeMobile: 'Portable',
    phoneTypeLandline: 'Fixe',
    areaCode: 'Code régional',
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
    careerTitle: 'Profil professionnel',
    jobTitle: 'Titre du poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'entreprise',
    companySize: 'Taille de l\'entreprise',
    industry: 'Secteur',
    employmentStatus: 'Statut d\'emploi',
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité malaisienne',
    idCardNumber: 'Numéro de carte d\'identité',
    mykadNumber: 'Numéro MyKad',
    
    // Empreinte numérique
    fingerprintTitle: 'Empreinte numérique',
    os: 'Système d\'exploitation',
    osVersion: 'Version de l\'OS',
    browser: 'Navigateur',
    userAgent: 'User Agent',
    screenResolution: 'Résolution d\'écran',
    timezone: 'Fuseau horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique des cookies',
    
    // Options d\'exportation
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
    regionLabel: 'État',
    postalCode: 'Code postal',
    
    // Format d\'adresse
    addressNumber: 'N°',
    addressFloor: 'É',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    malaysia: 'Malaisie',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Résidence étudiante',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Bloc',
    apartment: 'Appartement',
    
    // Noms des États (13 États + 3 territoires fédéraux)
    regions: {
        'Johor': 'Johor',
        'Kedah': 'Kedah',
        'Kelantan': 'Kelantan',
        'Malacca': 'Malacca',
        'Negeri Sembilan': 'Negeri Sembilan',
        'Pahang': 'Pahang',
        'Penang': 'Penang',
        'Perak': 'Perak',
        'Perlis': 'Perlis',
        'Sabah': 'Sabah',
        'Sarawak': 'Sarawak',
        'Selangor': 'Selangor',
        'Terengganu': 'Terengganu',
        'Kuala Lumpur': 'Kuala Lumpur',
        'Putrajaya': 'Putrajaya',
        'Labuan': 'Labuan'
    },
    
    // Noms des universités
    universities: {
        'UM': 'Université de Malaya',
        'UKM': 'Universiti Kebangsaan Malaysia',
        'UPM': 'Universiti Putra Malaysia',
        'USM': 'Universiti Sains Malaysia',
        'UTM': 'Universiti Teknologi Malaysia',
        'UUM': 'Universiti Utara Malaysia',
        'UMS': 'Universiti Malaysia Sabah',
        'UMK': 'Universiti Malaysia Kelantan',
        'UPSI': 'Universiti Pendidikan Sultan Idris'
    },
    
    // Noms des colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Bâtiment',
        floor: 'Étage',
        unit: 'Unité',
        region: 'État',
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