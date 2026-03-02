export default {
    name: 'Générateur d\'adresses de Singapour - Génération en ligne d\'adresses singapouriennes réalistes',
    description: 'Générateur gratuit d\'adresses de Singapour en ligne, créant des adresses singapouriennes réalistes, numéros NRIC, numéros de téléphone, numéros de carte bancaire et profils d\'identité complets. Filtrage par région, export JSON/CSV, fonctionne localement pour la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats de génération',
    generateBtn: 'Générer les données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat pour l\'instant',
    preview: 'Aperçu des données',
    
    locationTitle: 'Filtrage géographique',
    selectRegion: 'Sélectionner une région',
    selectArea: 'Sélectionner une zone',
    allRegions: 'Toutes les régions',
    allAreas: 'Toutes les zones',
    postalCodeLabel: 'Code postal',
    
    addressTypeTitle: 'Type d\'adresse',
    addressTypeResidential: 'Adresse résidentielle',
    addressTypeCommercial: 'Adresse commerciale',
    addressTypeHDB: 'Appartement HDB',
    addressTypeCondo: 'Copropriété privée',
    
    identityTitle: 'Informations d\'identité',
    fullName: 'Nom complet',
    gender: 'Genre',
    genderMale: 'Homme',
    genderFemale: 'Femme',
    age: 'Âge',
    birthDate: 'Date de naissance',
    race: 'Origine ethnique',
    raceChinese: 'Chinois',
    raceMalay: 'Malais',
    raceIndian: 'Indien',
    raceOthers: 'Autres',
    
    contactTitle: 'Informations de contact',
    phoneNumber: 'Numéro de téléphone',
    areaCode: 'Indicatif régional',
    email: 'Adresse e-mail',
    tempEmail: 'Email temporaire',
    
    creditCardTitle: 'Informations de carte bancaire',
    cardType: 'Type de carte',
    cardNumber: 'Numéro de carte',
    expiryDate: 'Date d\'expiration',
    cvv: 'CVV',
    bankBin: 'BIN bancaire',
    
    careerTitle: 'Profil professionnel',
    jobTitle: 'Poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'entreprise',
    companySize: 'Taille de l\'entreprise',
    industry: 'Secteur',
    employmentStatus: 'Statut d\'emploi',
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    idCardTitle: 'Carte NRIC',
    idCardNumber: 'Numéro NRIC',
    prefixLetter: 'Lettre préfixe',
    serialNumber: 'Numéro de série',
    checkLetter: 'Lettre de contrôle',
    
    exportTitle: 'Format d\'export',
    exportJson: 'Exporter en JSON',
    exportCsv: 'Exporter en CSV',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les détails',
    
    batchTitle: 'Génération par lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrez un nombre (1-100)',
    
    generating: 'Génération en cours...',
    generated: 'Génération terminée',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    invalidQuantity: 'Veuillez entrer un nombre entre 1 et 100',
    
    resultCount: '{count} enregistrements générés',
    resultSummary: 'Résumé des résultats',
    showAll: 'Tout afficher',
    collapse: 'Réduire',
    
    generateOptionsTitle: 'Options de génération',
    
    recordLabel: 'Enregistrement #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Rue',
    houseNumberLabel: 'Numéro',
    buildingLabel: 'Bâtiment',
    unitLabel: 'Unité',
    postalCodeLabel: 'Code postal',
    regionLabel: 'Région',
    
    regions: {
        CR: 'Région centrale',
        ER: 'Région est',
        NR: 'Région nord',
        NER: 'Région nord-est',
        WR: 'Région ouest'
    },
    
    areas: {
        CR: {
            orchard: 'Orchard',
            riverValley: 'River Valley',
            newton: 'Newton',
            tanglin: 'Tanglin',
            bukitTimah: 'Bukit Timah',
            clementi: 'Clementi',
            queenstown: 'Queenstown'
        },
        ER: {
            bedok: 'Bedok',
            changi: 'Changi',
            pasirRis: 'Pasir Ris',
            tampines: 'Tampines',
            payaLebar: 'Paya Lebar'
        },
        NR: {
            angMoKio: 'Ang Mo Kio',
            bishan: 'Bishan',
            serangoon: 'Serangoon',
            hougang: 'Hougang',
            sengkang: 'Sengkang',
            punggol: 'Punggol'
        },
        NER: {
            hougang: 'Hougang',
            punggol: 'Punggol',
            seletar: 'Seletar',
            sengkang: 'Sengkang',
            serangoon: 'Serangoon'
        },
        WR: {
            jurongEast: 'Jurong Est',
            jurongWest: 'Jurong Ouest',
            bukitBatok: 'Bukit Batok',
            choaChuKang: 'Choa Chu Kang',
            woodlands: 'Woodlands',
            sembawang: 'Sembawang',
            yishun: 'Yishun'
        }
    },
    
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro',
        building: 'Bâtiment',
        postalCode: 'Code postal',
        fullName: 'Nom',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de naissance',
        phone: 'Téléphone',
        email: 'Email',
        cardType: 'Type de carte',
        cardNumber: 'Numéro de carte',
        idCardNumber: 'Numéro NRIC'
    }
};
