export default {
    name: 'Générateur d\'Adresses du Japon - Générez des Adresses Japonaises Réelles, Informations d\'Identité et Contacts en Ligne',
    description: 'Générateur d\'adresses du Japon en ligne gratuit. Crée des adresses japonaises au format authentique, numéro d\'identification personnelle (My Number), numéros de téléphone, cartes de crédit et profils d\'identité complets. Filtre par préfecture, export JSON/CSV, fonctionne entièrement dans le navigateur pour protéger la vie privée.',
    inputTitle: 'Paramètres de Génération',
    outputTitle: 'Résultats Générés',
    generateBtn: 'Générer les Données',
    loadSampleBtn: 'Charger l\'Exemple et Générer',
    clearAll: 'Tout Effacer',
    noOutput: 'Aucun résultat généré',
    preview: 'Aperçu des Données',
    
    // Filtre géographique
    locationTitle: 'Filtre de Localisation Géographique',
    selectPrefecture: 'Sélectionner la Préfecture',
    selectCity: 'Sélectionner la Ville/Quartier',
    allPrefectures: 'Toutes les Préfectures',
    allCities: 'Toutes les Villes/Quartiers',
    postalCodeLabel: 'Code Postal',
    validatePostalCode: 'Valider le Code Postal',
    
    // Types d'adresse
    addressTypeTitle: 'Type d\'Adresse',
    addressTypeResidential: 'Adresse Résidentielle',
    addressTypeCommercial: 'Adresse Commerciale',
    addressTypeVirtual: 'Boîte Postale Virtuelle',
    addressTypeCampus: 'Campus Universitaire',
    
    // Informations d'identité
    identityTitle: 'Informations d\'Identité',
    fullName: 'Nom Complet',
    fullNameKana: 'Nom en Katakana',
    gender: 'Genre',
    genderMale: 'Masculin',
    genderFemale: 'Féminin',
    age: 'Âge',
    birthDate: 'Date de Naissance',
    zodiac: 'Signe Zodiacal',
    bloodType: 'Groupe Sanguin',
    height: 'Taille',
    weight: 'Poids',
    
    // Informations de contact
    contactTitle: 'Informations de Contact',
    phoneNumber: 'Numéro de Téléphone',
    phoneType: 'Type de Téléphone',
    phoneTypeMobile: 'Mobile',
    phoneTypeLandline: 'Fixe',
    areaCode: 'Code Régional',
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
    careerTitle: 'Profil Professionnel',
    jobTitle: 'Titre du Poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'Entreprise',
    companySize: 'Taille de l\'Entreprise',
    industry: 'Industrie',
    employmentStatus: 'Statut d\'Emploi',
    employmentFullTime: 'Employé à Temps Plein',
    employmentPartTime: 'Employé sous Contrat',
    
    // My Number (Numéro d'Identification Personnelle)
    idCardTitle: 'My Number (Numéro d\'Identification Personnelle)',
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
    
    // Options d'exportation
    exportTitle: 'Format d\'Exportation',
    exportJson: 'Exporter en JSON',
    exportCsv: 'Exporter en CSV',
    exportIdCard: 'Générer une Image de Carte de Résident',
    exportBusinessCard: 'Générer une Carte de Visite',
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les Détails',
    
    // Génération par lots
    batchTitle: 'Génération par Lots',
    quantityLabel: 'Quantité',
    quantityPlaceholder: 'Entrer la quantité (1-100)',
    
    // Messages de statut
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
    postalCodeLabelDisplay: 'Code Postal',
    prefectureLabel: 'Préfecture',
    cityLabel: 'Ville/Quartier',
    townLabel: 'Ville',
    chomeLabel: 'Chome',
    banLabel: 'Ban',
    goLabel: 'Go',
    buildingLabel: 'Nom du Bâtiment',
    floorLabel: 'Étage',
    roomLabel: 'Pièce',
    
    // Format d'adresse
    addressNumber: '-',
    addressFloor: 'É',
    addressRoom: '',
    commercialUnit: ' (Commercial)',
    japan: 'Japon',
    postOfficeBox: 'Boîte Postale',
    studentDormitory: 'Dortoir Étudiant',
    teachingBuilding: 'Bâtiment Académique',
    library: 'Bibliothèque',
    buildingUnit: 'Bâtiment',
    
    // Messages d'alerte
    idCardImageAlert: 'La génération d\'image de carte de résident nécessite une implémentation canvas',
    businessCardAlert: 'La génération de carte de visite nécessite une implémentation canvas',
    
    // Préfectures
    prefectures: {
        '01': 'Hokkaido',
        '02': 'Aomori',
        '03': 'Iwate',
        '04': 'Miyagi',
        '05': 'Akita',
        '06': 'Yamagata',
        '07': 'Fukushima',
        '08': 'Ibaraki',
        '09': 'Tochigi',
        '10': 'Gunma',
        '11': 'Saitama',
        '12': 'Chiba',
        '13': 'Tokyo',
        '14': 'Kanagawa',
        '15': 'Niigata',
        '16': 'Toyama',
        '17': 'Ishikawa',
        '18': 'Fukui',
        '19': 'Yamanashi',
        '20': 'Nagano',
        '21': 'Gifu',
        '22': 'Shizuoka',
        '23': 'Aichi',
        '24': 'Mie',
        '25': 'Shiga',
        '26': 'Kyoto',
        '27': 'Osaka',
        '28': 'Hyogo',
        '29': 'Nara',
        '30': 'Wakayama',
        '31': 'Tottori',
        '32': 'Shimane',
        '33': 'Okayama',
        '34': 'Hiroshima',
        '35': 'Yamaguchi',
        '36': 'Tokushima',
        '37': 'Kagawa',
        '38': 'Ehime',
        '39': 'Kochi',
        '40': 'Fukuoka',
        '41': 'Saga',
        '42': 'Nagasaki',
        '43': 'Kumamoto',
        '44': 'Oita',
        '45': 'Miyazaki',
        '46': 'Kagoshima',
        '47': 'Okinawa'
    },
    
    // Villes
    cities: {
        '01': {
            sapporo: 'Sapporo',
            asahikawa: 'Asahikawa',
            hakodate: 'Hakodate',
            obihiro: 'Obihiro'
        },
        '04': {
            sendai: 'Sendai',
            shiogama: 'Shiogama',
            ishinomaki: 'Ishinomaki'
        },
        '13': {
            chiyoda: 'Arrondissement de Chiyoda',
            chuo: 'Arrondissement de Chuo',
            minato: 'Arrondissement de Minato',
            shinjuku: 'Arrondissement de Shinjuku',
            shibuya: 'Arrondissement de Shibuya',
            shinagawa: 'Arrondissement de Shinagawa',
            meguro: 'Arrondissement de Meguro',
            setagaya: 'Arrondissement de Setagaya',
            ota: 'Arrondissement d\'Ota',
            nerima: 'Arrondissement de Nerima'
        },
        '14': {
            yokohama: 'Yokohama',
            kawasaki: 'Kawasaki',
            sagamihara: 'Sagamihara',
            fujisawa: 'Fujisawa'
        },
        '23': {
            nagoya: 'Nagoya',
            toyohashi: 'Toyohashi',
            okazaki: 'Okazaki'
        },
        '26': {
            kyoto: 'Kyoto',
            utsunomiya: 'Uji'
        },
        '27': {
            osaka: 'Osaka',
            sakai: 'Sakai',
            hirakata: 'Hirakata',
            toyonaka: 'Toyonaka'
        },
        '28': {
            kobe: 'Kobe',
            himeji: 'Himeji',
            amagasaki: 'Amagasaki'
        },
        '40': {
            fukuoka: 'Fukuoka',
            kitakyushu: 'Kitakyushu',
            kurume: 'Kurume'
        },
        '47': {
            naha: 'Naha',
            okinawa: 'Okinawa'
        }
    },
    
    // Universités
    universities: {
        UTokyo: 'Université de Tokyo',
        KyotoU: 'Université de Kyoto',
        OsakaU: 'Université d\'Osaka',
        TohokuU: 'Université de Tohoku',
        NagoyaU: 'Université de Nagoya',
        KyushuU: 'Université de Kyushu',
        HokkaidoU: 'Université de Hokkaido',
        Keio: 'Université Keio',
        Waseda: 'Université Waseda'
    },
    
    // Groupes sanguins
    bloodTypes: {
        A: 'Groupe A',
        B: 'Groupe B',
        O: 'Groupe O',
        AB: 'Groupe AB'
    },
    
    // Noms de colonnes CSV
    csv: {
        fullAddress: 'Adresse Complète',
        postalCode: 'Code Postal',
        prefecture: 'Préfecture',
        city: 'Ville/Quartier',
        town: 'Ville',
        building: 'Bâtiment',
        fullName: 'Nom Complet',
        fullNameKana: 'Nom en Katakana',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de Naissance',
        phone: 'Téléphone',
        email: 'Email',
        cardType: 'Type de Carte',
        cardNumber: 'Numéro de Carte',
        idCardNumber: 'My Number'
    }
};
