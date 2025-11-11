export default {
    name: 'Générateur d\'adresses HK - Générez des adresses Hong Kong réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses HK en ligne gratuit qui crée des adresses Hong Kong au format réel, des numéros d\'identité, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par district, l\'exportation aux formats JSON/CSV et s\'exécute entièrement dans le navigateur pour protéger la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer des données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectDistrict: 'Sélectionner un district',
    selectArea: 'Sélectionner une zone',
    allDistricts: 'Tous les districts',
    allAreas: 'Toutes les zones',
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
    idCardTitle: 'Carte d\'identité de Hong Kong',
    idCardNumber: 'Numéro de carte d\'identité',
    prefixLetter: 'Lettre de préfixe',
    serialNumber: 'Numéro de série',
    checkDigit: 'Chiffre de contrôle',
    
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
    exportIdCard: 'Générer une image de carte d\'identité',
    exportBusinessCard: 'Générer une carte de visite',
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
    districtLabel: 'District',
    
    // Format d\'adresse
    addressNumber: 'N°',
    addressFloor: 'Étage',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    hongKong: 'Hong Kong',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Dortoir étudiant',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Unité',
    
    // Messages d\'alerte
    idCardImageAlert: 'La génération d\'image de carte d\'identité nécessite une implémentation canvas',
    businessCardAlert: 'La génération de carte de visite nécessite une implémentation canvas',
    
    // Noms de districts
    districts: {
        CW: 'Centre et Occidental',
        WAN: 'Wan Chai',
        E: 'Est',
        S: 'Sud',
        YTM: 'Yau Tsim Mong',
        SSP: 'Sham Shui Po',
        KC: 'Kowloon City',
        WTS: 'Wong Tai Sin',
        KT: 'Kwun Tong',
        TM: 'Tuen Mun',
        YL: 'Yuen Long',
        N: 'Nord',
        TP: 'Tai Po',
        ST: 'Sha Tin',
        SK: 'Sai Kung',
        TW: 'Tsuen Wan',
        KW: 'Kwai Tsing',
        IS: 'Îles'
    },
    
    // Noms de zones
    areas: {
        CW: {
            central: 'Central',
            sheungWan: 'Sheung Wan',
            saiWan: 'Sai Wan',
            midLevels: 'Mid-Levels'
        },
        WAN: {
            wanChai: 'Wan Chai',
            causewayBay: 'Causeway Bay',
            happyValley: 'Happy Valley',
            taiHang: 'Tai Hang'
        },
        E: {
            northPoint: 'North Point',
            quarryBay: 'Quarry Bay',
            taiKooShing: 'Tai Koo Shing',
            shauKeiWan: 'Shau Kei Wan',
            chaiWan: 'Chai Wan'
        },
        S: {
            repulseBay: 'Repulse Bay',
            deepWaterBay: 'Deep Water Bay',
            stanley: 'Stanley',
            aberdeen: 'Aberdeen',
            apLeiChau: 'Ap Lei Chau'
        },
        YTM: {
            tsimShaTsui: 'Tsim Sha Tsui',
            yauMaTei: 'Yau Ma Tei',
            mongKok: 'Mong Kok',
            jordan: 'Jordan'
        },
        SSP: {
            shamShuiPo: 'Sham Shui Po',
            cheungShaWan: 'Cheung Sha Wan',
            laiChiKok: 'Lai Chi Kok',
            shekKipMei: 'Shek Kip Mei'
        },
        KC: {
            kowloonCity: 'Kowloon City',
            toKwaWan: 'To Kwa Wan',
            hungHom: 'Hung Hom',
            hoManTin: 'Ho Man Tin'
        },
        WTS: {
            wongTaiSin: 'Wong Tai Sin',
            diamondHill: 'Diamond Hill',
            sanPoKong: 'San Po Kong',
            lokFu: 'Lok Fu'
        },
        KT: {
            kwunTong: 'Kwun Tong',
            lamTin: 'Lam Tin',
            ngauTauKok: 'Ngau Tau Kok',
            kowloonBay: 'Kowloon Bay'
        },
        TM: {
            tuenMun: 'Tuen Mun',
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            tsingShan: 'Tsing Shan'
        },
        YL: {
            yuenLong: 'Yuen Long',
            tinShuiWai: 'Tin Shui Wai',
            kamTin: 'Kam Tin',
            pingShan: 'Ping Shan'
        },
        N: {
            sheungShui: 'Sheung Shui',
            fanLing: 'Fan Ling',
            shaTauKok: 'Sha Tau Kok',
            taKuLing: 'Ta Ku Ling'
        },
        TP: {
            taiPo: 'Tai Po',
            taiPoMarket: 'Tai Po Market',
            taiWo: 'Tai Wo',
            lamTsuen: 'Lam Tsuen'
        },
        ST: {
            shaTin: 'Sha Tin',
            taiWai: 'Tai Wai',
            maOnShan: 'Ma On Shan',
            foTan: 'Fo Tan'
        },
        SK: {
            saiKung: 'Sai Kung',
            tseungKwanO: 'Tseung Kwan O',
            hangHau: 'Hang Hau',
            clearWaterBay: 'Clear Water Bay'
        },
        TW: {
            tsuenWan: 'Tsuen Wan',
            kwaiChung: 'Kwai Chung',
            tsingYi: 'Tsing Yi',
            shamTseng: 'Sham Tseng'
        }
    },
    
    // Noms d'universités
    universities: {
        HKU: 'Université de Hong Kong',
        CUHK: 'Université chinoise de Hong Kong',
        HKUST: 'Université de science et technologie de Hong Kong',
        PolyU: 'Université polytechnique de Hong Kong',
        CityU: 'Université de la cité de Hong Kong'
    },
    
    // Noms de colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Immeuble',
        floor: 'Étage',
        unit: 'Unité',
        district: 'District',
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