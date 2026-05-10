export default {
    name: 'Générateur d\'adresses Vietnam - Générez des adresses vietnamiennes réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses vietnamiennes en ligne gratuit qui crée des adresses vietnamiennes au format réel, des numéros d\'identité, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par province, l\'exportation aux formats JSON/CSV et s\'exécute entièrement dans le navigateur pour protéger la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer des données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectProvince: 'Sélectionner une province/ville',
    selectDistrict: 'Sélectionner un district',
    allProvinces: 'Toutes les provinces/villes',
    allDistricts: 'Tous les districts',
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
    industry: 'Industrie',
    employmentStatus: 'Statut d\'emploi',
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité vietnamienne',
    idCardNumber: 'Numéro de carte d\'identité',
    cmndNumber: 'Numéro CMND',
    cccdNumber: 'Numéro CCCD',
    serialNumber: 'Numéro de série',
    
    // Empreinte numérique
    fingerprintTitle: 'Empreinte numérique',
    os: 'Système d\'exploitation',
    osVersion: 'Version du système',
    browser: 'Navigateur',
    userAgent: 'User Agent',
    screenResolution: 'Résolution d\'écran',
    timezone: 'Fuseau horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique de cookies',
    
    // Options d\'exportation
    exportTitle: 'Format d\'exportation',
    exportJson: 'Exporter JSON',
    exportCsv: 'Exporter CSV',
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
    buildingLabel: 'Bâtiment',
    floorLabel: 'Étage',
    unitLabel: 'Unité',
    wardLabel: 'Quartier',
    districtLabel: 'District',
    provinceLabel: 'Province/Ville',
    postalCode: 'Code postal',
    
    // Format d\'adresse
    addressNumber: 'N°',
    addressFloor: 'É',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    vietnam: 'Vietnam',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Résidence universitaire',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Unité',
    apartment: 'Appartement',
    
    // Messages d\'alerte
    idCardImageAlert: 'La génération d\'images de cartes d\'identité nécessite une implémentation canvas',
    businessCardAlert: 'La génération de cartes de visite nécessite une implémentation canvas',
    
    // Noms des provinces (provinces vietnamiennes)
    provinces: {
        HN: 'Hanoï',
        HCM: 'Hô Chi Minh-Ville',
        HP: 'Haïphong',
        DN: 'Da Nang',
        CT: 'Cần Thơ',
        BH: 'Bà Rịa-Vũng Tàu',
        BD: 'Bình Dương',
        QN: 'Quảng Ninh',
        QG: 'Quảng Nam',
        KG: 'Cà Mau',
        DT: 'Đồng Nai',
        HB: 'Hà Nam',
        TH: 'Thái Bình',
        NB: 'Nam Định',
        VL: 'Vĩnh Long',
        TG: 'Sóc Trăng',
        NT: 'Ninh Thuận',
        PY: 'Phú Yên',
        TV: 'Tây Ninh',
        BD: 'Bình Định',
        HT: 'Hòa Bình',
        TB: 'Tuyên Quang',
        TN: 'Thái Nguyên',
        LC: 'Lai Châu',
        YB: 'Yên Bái',
        DB: 'Điện Biên',
        LA: 'Lào Cai',
        CB: 'Cao Bằng',
        LD: 'Lâm Đồng',
        DC: 'Đắk Lắk',
        QN: 'Quảng Bình',
        QT: 'Quảng Trị',
        HT: 'Hà Tĩnh',
        NA: 'Nghệ An',
        TT: 'Thanh Hóa',
        NB: 'Ninh Bình',
        ST: 'An Giang',
        CT: 'Trà Vinh',
        BP: 'Bến Tre',
        BL: 'Bạc Liêu',
        KG: 'Cà Mau',
        CM: 'Cà Mau'
    },
    
    // Données des districts (exemples pour Hanoï et Hô Chi Minh-Ville)
    districtsData: {
        HN: {
            hoanKiem: 'Hoàn Kiếm',
            baDinh: 'Ba Đình',
            dongDa: 'Đống Đa',
            haiBaTrung: 'Hai Bà Trưng',
            thanhXuan: 'Thanh Xuân',
            cauGiay: 'Cầu Giấy',
            hoangMai: 'Hoàng Mai',
            longBien: 'Long Biên',
            tayHo: 'Tây Hồ',
            bacTuLiem: 'Bắc Từ Liêm',
            namTuLiem: 'Nam Từ Liêm',
            haDong: 'Hà Đông'
        },
        HCM: {
            quan1: 'Quận 1',
            quan3: 'Quận 3',
            quan4: 'Quận 4',
            quan5: 'Quận 5',
            quan6: 'Quận 6',
            quan7: 'Quận 7',
            quan10: 'Quận 10',
            quan11: 'Quận 11',
            binhThanh: 'Bình Thạnh',
            phuNhuan: 'Phú Nhuận',
            tanBinh: 'Tân Bình',
            goVap: 'Gò Vấp',
            binhChanh: 'Bình Chánh',
            thuDuc: 'Thủ Đức'
        },
        DN: {
            haiChau: 'Hải Châu',
            thanhKhe: 'Thanh Khê',
            sonTra: 'Sơn Trà',
            NguHanhSon: 'Ngũ Hành Sơn',
            LienChieu: 'Liên Chiểu',
            CamLe: 'Cẩm Lệ'
        },
        HP: {
            HongBang: 'Hồng Bàng',
            LeChan: 'Lê Chân',
            NgoQuyen: 'Ngô Quyền',
            HaiAn: 'Hải An',
            KiAn: 'Kiến An'
        }
    },
    
    // Noms des universités
    universities: {
        HUST: 'Université des sciences et technologies de Hanoï',
        VNU: 'Université nationale du Vietnam',
        HANU: 'Université nationale de Hanoï',
        HCMUS: 'Université nationale d\'Hô Chi Minh-Ville',
        RMIT: 'Université RMIT Vietnam',
        FTU: 'Université du commerce extérieur',
        NEU: 'Université nationale d\'économie',
        HPU: 'Université de pharmacie de Hanoï',
        PTIT: 'Institut des postes et télécommunications',
        FPT: 'Université FPT'
    },
    
    // Noms des colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Bâtiment',
        floor: 'Étage',
        unit: 'Unité',
        ward: 'Quartier',
        district: 'District',
        province: 'Province/Ville',
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