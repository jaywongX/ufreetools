export default {
    name: 'Générateur d\'Adresses Canadiennes - Générer des Adresses Canadiennes Réelles et Informations d\'Identité en Ligne',
    description: 'Générateur gratuit d\'adresses canadiennes en ligne. Générez des adresses canadiennes au format réel, codes postaux, numéros de téléphone, cartes de crédit et profils d\'identité complets. Filtrez par province, exportez en JSON/CSV, fonctionne localement pour la confidentialité.',
    inputTitle: 'Paramètres de Génération',
    outputTitle: 'Résultats Générés',
    generateBtn: 'Générer les Données',
    loadSampleBtn: 'Charger l\'Exemple et Générer',
    clearAll: 'Tout Effacer',
    noOutput: 'Pas encore de résultats',
    preview: 'Aperçu',
    
    locationTitle: 'Filtre de Localisation',
    selectProvince: 'Sélectionner la Province',
    selectCity: 'Sélectionner la Ville',
    allProvinces: 'Toutes les Provinces',
    allCities: 'Toutes les Villes',
    postalCodeLabel: 'Code Postal',
    validatePostalCode: 'Valider le Code Postal',
    
    addressTypeTitle: 'Type d\'Adresse',
    addressTypeResidential: 'Résidentielle',
    addressTypeCommercial: 'Commerciale',
    addressTypeVirtual: 'Boîte Postale',
    addressTypeCampus: 'Campus Universitaire',
    
    identityTitle: 'Informations d\'Identité',
    fullName: 'Nom Complet',
    gender: 'Genre',
    genderMale: 'Masculin',
    genderFemale: 'Féminin',
    age: 'Âge',
    birthDate: 'Date de Naissance',
    zodiac: 'Signe Zodiacal',
    height: 'Taille',
    weight: 'Poids',
    
    contactTitle: 'Informations de Contact',
    phoneNumber: 'Numéro de Téléphone',
    phoneType: 'Type de Téléphone',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Fixe',
    areaCode: 'Indicatif Régional',
    email: 'Adresse Email',
    tempEmail: 'Email Temporaire',
    
    creditCardTitle: 'Informations de Carte de Crédit',
    cardType: 'Type de Carte',
    cardNumber: 'Numéro de Carte',
    expiryDate: 'Date d\'Expiration',
    cvv: 'CVV',
    bankBin: 'BIN Bancaire',
    
    careerTitle: 'Profil Professionnel',
    jobTitle: 'Titre du Poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'Entreprise',
    companySize: 'Taille de l\'Entreprise',
    industry: 'Industrie',
    employmentStatus: 'Statut d\'Emploi',
    employmentFullTime: 'Temps Plein',
    employmentPartTime: 'Temps Partiel',
    
    sinTitle: 'Numéro d\'Assurance Sociale (NAS)',
    sinNumber: 'Numéro NAS',
    
    fingerprintTitle: 'Empreinte Numérique',
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
    
    exportTitle: 'Format d\'Exportation',
    exportJson: 'Exporter en JSON',
    exportCsv: 'Exporter en CSV',
    exportIdCard: 'Générer Carte d\'ID',
    exportBusinessCard: 'Générer Carte de Visite',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les Détails',
    
    batchTitle: 'Génération par Lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrez la quantité (1-100)',
    
    generating: 'Génération en cours...',
    generated: 'Généré',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    invalidQuantity: 'Veuillez entrer un nombre entre 1 et 100',
    
    resultCount: '{count} enregistrements générés',
    resultSummary: 'Résumé des Résultats',
    showAll: 'Tout Afficher',
    collapse: 'Réduire',
    
    generateOptionsTitle: 'Options de Génération',
    
    recordLabel: 'Enregistrement #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Rue',
    houseNumberLabel: 'Numéro de Maison',
    buildingLabel: 'Bâtiment',
    unitLabel: 'Unité',
    cityLabel: 'Ville',
    provinceLabel: 'Province',
    postalCodeDisplay: 'Code Postal',
    
    addressUnit: 'Unité',
    aptNumber: 'Apt',
    suiteNumber: 'Suite',
    pobox: 'Boîte Postale',
    
    idCardImageAlert: 'La génération de carte d\'ID nécessite canvas',
    businessCardAlert: 'La génération de carte de visite nécessite canvas',
    
    provinces: {
        ON: 'Ontario',
        QC: 'Québec',
        BC: 'Colombie-Britannique',
        AB: 'Alberta',
        MB: 'Manitoba',
        SK: 'Saskatchewan',
        NS: 'Nouvelle-Écosse',
        NB: 'Nouveau-Brunswick',
        NL: 'Terre-Neuve-et-Labrador',
        PE: 'Île-du-Prince-Édouard',
        NT: 'Territoires du Nord-Ouest',
        YT: 'Yukon',
        NU: 'Nunavut'
    },
    
    cities: {
        ON: {
            toronto: 'Toronto',
            ottawa: 'Ottawa',
            mississauga: 'Mississauga',
            hamilton: 'Hamilton',
            london: 'London',
            markham: 'Markham',
            vaughan: 'Vaughan',
            kitchener: 'Kitchener',
            waterloo: 'Waterloo',
            brampton: 'Brampton'
        },
        QC: {
            montreal: 'Montréal',
            quebec: 'Québec',
            laval: 'Laval',
            gatineau: 'Gatineau',
            sherbrooke: 'Sherbrooke'
        },
        BC: {
            vancouver: 'Vancouver',
            victoria: 'Victoria',
            burnaby: 'Burnaby',
            richmond: 'Richmond',
            surrey: 'Surrey',
            kelowna: 'Kelowna'
        },
        AB: {
            calgary: 'Calgary',
            edmonton: 'Edmonton',
            redDeer: 'Red Deer',
            lethbridge: 'Lethbridge'
        },
        MB: {
            winnipeg: 'Winnipeg',
            brandon: 'Brandon'
        },
        SK: {
            saskatoon: 'Saskatoon',
            regina: 'Regina'
        },
        NS: {
            halifax: 'Halifax'
        },
        NB: {
            fredericton: 'Fredericton',
            moncton: 'Moncton',
            saintJohn: 'Saint John'
        },
        NL: {
            stJohns: "St. John's"
        },
        PE: {
            charlottetown: 'Charlottetown'
        },
        NT: {
            yellowknife: 'Yellowknife'
        },
        YT: {
            whitehorse: 'Whitehorse'
        },
        NU: {
            iqaluit: 'Iqaluit'
        }
    },
    
    universities: {
        UofT: 'Université de Toronto',
        UBC: 'Université de Colombie-Britannique',
        McGill: 'Université McGill',
        McMaster: 'Université McMaster',
        Waterloo: 'Université de Waterloo',
        Alberta: 'Université de l\'Alberta',
        Ottawa: 'Université d\'Ottawa',
        Montreal: 'Université de Montréal'
    },
    
    csv: {
        fullAddress: 'Adresse Complète',
        street: 'Rue',
        houseNumber: 'Numéro de Maison',
        building: 'Bâtiment',
        unit: 'Unité',
        city: 'Ville',
        province: 'Province',
        postalCode: 'Code Postal',
        fullName: 'Nom Complet',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de Naissance',
        phone: 'Téléphone',
        email: 'Email',
        cardType: 'Type de Carte',
        cardNumber: 'Numéro de Carte',
        sinNumber: 'Numéro NAS'
    }
};
