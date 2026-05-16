export default {
    name: 'Générateur d\'adresses Kazakhstan - Générez de vraies adresses kazakhes, informations d\'identité et coordonnées en ligne',
    description: 'Générateur d\'adresses kazakh en ligne gratuit qui crée des adresses kazakhes au format réel, des numéros d\'identification (ИИН), des numéros de téléphone, des numéros de cartes de crédit et des profils d\'identité complets. Prend en charge le filtrage par région, les formats d\'exportation JSON/CSV et fonctionne entièrement dans le navigateur pour la protection de la vie privée.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer les données',
    loadSampleBtn: 'Charger l\'exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectRegion: 'Sélectionner la région/la ville',
    selectCity: 'Sélectionner la ville',
    allRegions: 'Toutes les régions/villes',
    allCities: 'Toutes les villes',
    postalCodeLabel: 'Code postal',
    
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
    genderMale: 'Homme',
    genderFemale: 'Femme',
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
    phoneTypeLandline: 'Fixe',
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
    careerTitle: 'Profil professionnel',
    jobTitle: 'Poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'entreprise',
    companySize: 'Taille de l\'entreprise',
    industry: 'Secteur',
    employmentStatus: 'Statut d\'emploi',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité kazakhe (ИИН)',
    idCardNumber: 'Numéro de carte d\'identité (ИИН)',
    
    // Empreinte numérique
    fingerprintTitle: 'Empreinte numérique',
    os: 'Système d\'exploitation',
    osVersion: 'Version du système',
    browser: 'Navigateur',
    userAgent: 'Agent utilisateur',
    screenResolution: 'Résolution de l\'écran',
    timezone: 'Fuseau horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique des cookies',
    
    // Options d\'exportation
    exportTitle: 'Format d\'exportation',
    exportJson: 'Exporter JSON',
    exportCsv: 'Exporter CSV',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les détails',
    
    // Génération par lots
    batchTitle: 'Génération par lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrez la quantité (1-100)',
    
    // Messages de notification
    generating: 'Génération...',
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
    regionLabel: 'Région/Ville',
    
    // Format d\'adresse
    addressFloor: 'Étage',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Résidence étudiante',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Bâtiment',
    
    // Noms des régions (régions du Kazakhstan)
    regions: {
        NUR: 'Nour-Soultan (Astana)',
        ALA: 'Almaty',
        SHY: 'Chymkent',
        AKM: 'Région d\'Akmola',
        AKT: 'Région d\'Aktobe',
        ATY: 'Région d\'Atyraou',
        MAN: 'Région de Mangystau',
        PAV: 'Région de Pavlodar',
        SKZ: 'Région du Kazakhstan du Sud',
        KUS: 'Région de Kostanaï',
        KAR: 'Région de Karaganda',
        ZAP: 'Région du Kazakhstan Occidental',
        MNG: 'Région de Jambyl',
        TUR: 'Région d\'Almaty',
        YUZ: 'Région de Kyzylorda',
        VOS: 'Région du Kazakhstan Oriental',
        ZHE: 'Région de Jezkazgan'
    },
    
    // Données des villes
    cities: {
        NUR: {
            nursultan: 'Nour-Soultan'
        },
        ALA: {
            almaty: 'Almaty'
        },
        SHY: {
            shymkent: 'Chymkent'
        },
        AKM: {
            akmola: 'Akmola',
            kokshetau: 'Kokchetaou'
        },
        AKT: {
            aktobe: 'Aktobe'
        },
        ATY: {
            atyrau: 'Atyraou'
        },
        MAN: {
            aktau: 'Aktaou'
        },
        PAV: {
            pavlodar: 'Pavlodar'
        },
        SKZ: {
            turkestan: 'Turkestan'
        },
        KUS: {
            kostanay: 'Kostanaï'
        },
        KAR: {
            karaganda: 'Karaganda'
        },
        ZAP: {
            uralsk: 'Ouralsk'
        },
        MNG: {
            taraz: 'Taraz'
        },
        TUR: {
            taldykorgan: 'Taldykourgan'
        },
        YUZ: {
            kyzylorda: 'Kyzylorda'
        },
        VOS: {
            'ust-kamenogorsk': 'Oust-Kamenogorsk'
        },
        ZHE: {
            temirtau: 'Temirtaou'
        }
    },
    
    // Noms des colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Bâtiment',
        floor: 'Étage',
        unit: 'Unité',
        region: 'Région/Ville',
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