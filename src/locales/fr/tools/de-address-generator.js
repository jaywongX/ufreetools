export default {
    name: 'Générateur d\'Adresses d\'Allemagne - Générer des Adresses Allemandes Réelles et Informations d\'Identité en Ligne',
    description: 'Générateur gratuit d\'adresses d\'Allemagne en ligne, génère des adresses allemandes au format réel, numéros d\'identification, numéros de téléphone, numéros de carte de crédit et profils d\'identité complets. Prend en charge le filtrage par état, l\'export JSON/CSV, s\'exécute entièrement dans le frontend pour protéger la confidentialité.',
    inputTitle: 'Configuration de Génération',
    outputTitle: 'Résultats de Génération',
    generateBtn: 'Générer les Données',
    loadSampleBtn: 'Charger l\'Exemple et Générer',
    clearAll: 'Tout Effacer',
    noOutput: 'Aucun résultat de génération',
    preview: 'Aperçu des Données',
    
    // Filtrage géographique
    locationTitle: 'Filtre de Localisation Géographique',
    selectState: 'Sélectionner l\'État',
    selectCity: 'Sélectionner la Ville',
    allStates: 'Tous les États',
    allCities: 'Toutes les Villes',
    
    // Types d\'adresse
    addressTypeTitle: 'Type d\'Adresse',
    addressTypeResidential: 'Adresse Résidentielle',
    addressTypeCommercial: 'Adresse Commerciale',
    addressTypePoBox: 'Boîte Postale',
    addressTypeCampus: 'Campus Universitaire',
    
    // Informations d\'identité
    identityTitle: 'Informations d\'Identité',
    fullName: 'Nom Complet',
    firstName: 'Prénom',
    lastName: 'Nom',
    gender: 'Genre',
    genderMale: 'Masculin',
    genderFemale: 'Féminin',
    age: 'Âge',
    birthDate: 'Date de Naissance',
    height: 'Taille',
    weight: 'Poids',
    
    // Informations de contact
    contactTitle: 'Informations de Contact',
    phoneNumber: 'Numéro de Téléphone',
    phoneType: 'Type de Téléphone',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Fixe',
    areaCode: 'Indicatif Régional',
    email: 'Adresse Email',
    tempEmail: 'Email Temporaire',
    
    // Carte de crédit
    creditCardTitle: 'Informations de Carte de Crédit',
    cardType: 'Type de Carte',
    cardNumber: 'Numéro de Carte',
    expiryDate: 'Date d\'Expiration',
    cvv: 'CVV',
    bankBin: 'Code BIN Bancaire',
    
    // Carrière
    careerTitle: 'Profil de Carrière',
    jobTitle: 'Titre du Poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'Entreprise',
    companySize: 'Taille de l\'Entreprise',
    industry: 'Industrie',
    employmentStatus: 'Statut d\'Emploi',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'Identité Allemande (Personalausweis)',
    idCardNumber: 'Numéro d\'Identification',
    
    // Empreinte digitale
    fingerprintTitle: 'Empreinte Digitale',
    os: 'Système d\'Exploitation',
    osVersion: 'Version du SE',
    browser: 'Navigateur',
    userAgent: 'User Agent',
    screenResolution: 'Résolution d\'Écran',
    timezone: 'Fuseau Horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique de Cookies',
    
    // Options d\'exportation
    exportTitle: 'Format d\'Exportation',
    exportJson: 'Exporter JSON',
    exportCsv: 'Exporter CSV',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les Détails',
    
    // Génération par lots
    batchTitle: 'Génération par Lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrer la quantité (1-100)',
    
    // Messages
    generating: 'Génération en cours...',
    generated: 'Génération Terminée',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    invalidQuantity: 'Veuillez entrer un nombre entre 1-100',
    
    // Affichage des résultats
    resultCount: '{count} enregistrements générés',
    resultSummary: 'Résumé des Résultats',
    showAll: 'Tout Afficher',
    collapse: 'Réduire',
    
    // Options de génération
    generateOptionsTitle: 'Options de Génération',
    
    // Affichage des enregistrements
    recordLabel: 'Enregistrement #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Rue',
    houseNumberLabel: 'Numéro',
    postalCodeLabel: 'Code Postal',
    cityLabel: 'Ville',
    stateLabel: 'État',
    
    // Format d\'adresse
    commercialArea: 'Zone Commerciale',
    studentDormitory: 'Résidence Étudiante',
    library: 'Bibliothèque',
    
    // 16 États d\'Allemagne
    states: {
        BW: 'Bade-Wurtemberg',
        BY: 'Bavière',
        BE: 'Berlin',
        BB: 'Brandebourg',
        HB: 'Brême',
        HH: 'Hambourg',
        HE: 'Hesse',
        MV: 'Mecklembourg-Poméranie-Occidentale',
        NI: 'Basse-Saxe',
        NW: 'Rhénanie-du-Nord-Westphalie',
        RP: 'Rhénanie-Palatinat',
        SL: 'Sarre',
        SN: 'Saxe',
        ST: 'Saxe-Anhalt',
        SH: 'Schleswig-Holstein',
        TH: 'Thuringe'
    },
    
    // Noms d\'universités
    universities: {
        TUM: 'Université Technique de Munich',
        LMU: 'Université Louis-et-Maximilien de Munich',
        HU: 'Université Humboldt de Berlin',
        TU: 'Université Technique de Berlin',
        UniHeidelberg: 'Université de Heidelberg'
    },
    
    // Noms de colonnes CSV
    csv: {
        fullAddress: 'Adresse Complète',
        street: 'Rue',
        houseNumber: 'Numéro',
        postalCode: 'Code Postal',
        city: 'Ville',
        state: 'État',
        fullName: 'Nom',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de Naissance',
        phone: 'Téléphone',
        email: 'Email',
        cardType: 'Type de Carte',
        cardNumber: 'Numéro de Carte',
        idCardNumber: 'Numéro d\'Identification'
    }
};
