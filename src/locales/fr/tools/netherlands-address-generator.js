export default {
    name: 'Générateur d\'adresses Pays-Bas - Générez des adresses néerlandaises réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses néerlandaises en ligne gratuit qui crée des adresses néerlandaises au format réel, des numéros d\'identité, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par province, l\'exportation aux formats JSON/CSV et s\'exécute entièrement dans le navigateur pour protéger la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer des données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectRegion: 'Sélectionner une province',
    allRegions: 'Toutes les provinces',
    postalCodeLabel: 'Code postal',
    validatePostalCode: 'Valider le code postal',
    
    // Types d\'adresses
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
    creditCardTitle: 'Informations sur la carte de crédit',
    cardType: 'Type de carte',
    cardNumber: 'Numéro de carte',
    expiryDate: 'Date d\'expiration',
    cvv: 'CVV',
    bankBin: 'BIN bancaire',
    
    // Carrière
    careerTitle: 'Profil professionnel',
    jobTitle: 'Intitulé du poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'entreprise',
    companySize: 'Taille de l\'entreprise',
    industry: 'Industrie',
    employmentStatus: 'Statut d\'emploi',
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité néerlandaise',
    idCardNumber: 'Numéro de carte d\'identité',
    bsnNumber: 'Numéro BSN',
    
    // Empreinte numérique
    fingerprintTitle: 'Empreinte numérique',
    os: 'Système d\'exploitation',
    osVersion: 'Version du système d\'exploitation',
    browser: 'Navigateur',
    userAgent: 'Agent utilisateur',
    screenResolution: 'Résolution d\'écran',
    timezone: 'Fuseau horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique de cookies',
    
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
    buildingLabel: 'Immeuble',
    floorLabel: 'Étage',
    unitLabel: 'Unité',
    regionLabel: 'Province',
    postalCode: 'Code postal',
    
    // Format d\'adresse
    addressNumber: 'N°',
    addressFloor: 'Étage',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    netherlands: 'Pays-Bas',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Dortoir étudiant',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Unité',
    apartment: 'Appartement',
    
    // Noms de provinces (provinces néerlandaises)
    regions: {
        'Noord-Holland': 'Hollande-Septentrionale',
        'Zuid-Holland': 'Hollande-Méridionale',
        'Utrecht': 'Utrecht',
        'Gelderland': 'Gueldre',
        'Overijssel': 'Overijssel',
        'Flevoland': 'Flevoland',
        'Friesland': 'Frise',
        'Drenthе': 'Drenthe',
        'Groningen': 'Groningue',
        'Limburg': 'Limbourg',
        'Noord-Brabant': 'Brabant-Septentrional',
        'Zeeland': 'Zélande'
    },
    
    // Noms d\'universités
    universities: {
        'UvA': 'Université d\'Amsterdam',
        'VU': 'Vrije Universiteit Amsterdam',
        'TU': 'Université de technologie de Delft',
        'UU': 'Université d\'Utrecht',
        'EUR': 'Université Erasmus de Rotterdam',
        'RUG': 'Université de Groningue',
        'WUR': 'Université de Wageningen',
        'UL': 'Université de Leyde',
        'RU': 'Université Radboud',
        'UM': 'Université de Maastricht'
    },
    
    // Noms de colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Immeuble',
        floor: 'Étage',
        unit: 'Unité',
        region: 'Province',
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