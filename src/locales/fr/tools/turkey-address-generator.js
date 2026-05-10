export default {
    name: 'Générateur d\'adresses de Turquie - Générez des adresses turques réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses de Turquie gratuit en ligne qui crée des adresses turques au format réel, des numéros d\'identité, des numéros de téléphone, des numéros de cartes de crédit et des profils d\'identité complets. Prend en charge le filtrage par province, les formats d\'export JSON/CSV et s\'exécute entièrement dans le navigateur pour la protection de la vie privée.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer les données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectProvince: 'Sélectionner la province',
    selectDistrict: 'Sélectionner le district',
    allProvinces: 'Toutes les provinces',
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
    phoneTypeLandline: 'Téléphone fixe',
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
    industry: 'Industrie',
    employmentStatus: 'Statut d\'emploi',
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité turque',
    idCardNumber: 'Numéro de carte d\'identité',
    nationalId: 'Numéro d\'identification nationale',
    serialNumber: 'Numéro de série',
    checkDigit: 'Chiffre de contrôle',
    
    // Empreinte numérique
    fingerprintTitle: 'Empreinte numérique',
    os: 'Système d\'exploitation',
    osVersion: 'Version de l\'OS',
    browser: 'Navigateur',
    userAgent: 'Agent utilisateur',
    screenResolution: 'Résolution d\'écran',
    timezone: 'Fuseau horaire',
    guid: 'GUID',
    ipAddress: 'Adresse IP',
    macAddress: 'Adresse MAC',
    cookiePolicy: 'Politique des cookies',
    
    // Options d\'export
    exportTitle: 'Format d\'export',
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
    districtLabel: 'District',
    provinceLabel: 'Province',
    postalCode: 'Code postal',
    
    // Format d\'adresse
    addressNumber: 'N°',
    addressFloor: 'Ét.',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    turkey: 'Turquie',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Résidence étudiante',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Bâtiment',
    apartment: 'Appartement',
    
    // Messages d\'alerte
    idCardImageAlert: 'La génération d\'image de carte d\'identité nécessite l\'implémentation de canvas',
    businessCardAlert: 'La génération de carte de visite nécessite l\'implémentation de canvas',
    
    // Noms des provinces (principales provinces turques)
    provinces: {
        IST: 'Istanbul',
        ANK: 'Ankara',
        IZM: 'Izmir',
        BUR: 'Bursa',
        ANT: 'Antalya',
        ADN: 'Adana',
        GAZ: 'Gaziantep',
        KON: 'Konya',
        MRA: 'Mersin',
        KAY: 'Kayseri',
        ESK: 'Eskisehir',
        TRA: 'Trabzon',
        SAM: 'Samsun',
        MAL: 'Malatya',
        DIA: 'Diyarbakir',
        ERZ: 'Erzurum',
        VAN: 'Van',
        SIV: 'Sivas',
        TOK: 'Tokat',
        COR: 'Corum'
    },
    
    // Noms des districts (exemple d\'Istanbul)
    districtsData: {
        IST: {
            beyoglu: 'Beyoglu',
            fatih: 'Fatih',
            kadikoy: 'Kadikoy',
            besiktas: 'Besiktas',
            sisli: 'Sisli',
            uskudar: 'Uskudar',
            bakirkoy: 'Bakirkoy',
            zeytinburnu: 'Zeytinburnu',
            beylikduzu: 'Beylikduzu',
            pendik: 'Pendik',
            maltepe: 'Maltepe',
            kartal: 'Kartal',
            tuzla: 'Tuzla',
            catalca: 'Catalca'
        },
        ANK: {
            cankaya: 'Cankaya',
            yenimahalle: 'Yenimahalle',
            altindag: 'Altindag',
            pursaklar: 'Pursaklar',
            eryaman: 'Eryaman',
            etimesgut: 'Etimesgut',
            sincan: 'Sincan'
        },
        IZM: {
            konak: 'Konak',
            karsiyaka: 'Karsiyaka',
            bornova: 'Bornova',
            cigli: 'Cigli',
            bayrakli: 'Bayrakli',
            balcova: 'Balcova',
            guzelbahce: 'Guzelbahce'
        },
        BUR: {
            nilufer: 'Nilufer',
            osmangazi: 'Osmangazi',
            yildirim: 'Yildirim',
            mudanya: 'Mudanya',
            gemlik: 'Gemlik'
        },
        ANT: {
            muratpasa: 'Muratpasa',
            kepez: 'Kepez',
            konyaalti: 'Konyaalti',
            aksu: 'Aksu',
            dosenmeadi: 'Dosenmeadi'
        }
    },
    
    // Noms des universités
    universities: {
        ITU: 'Université technique d\'Istanbul',
        ITU: 'Université d\'Istanbul',
        BOUN: 'Université du Bosphore',
        METU: 'Université technique du Moyen-Orient',
        HU: 'Université Hacettepe',
        ANU: 'Université d\'Ankara',
        DEU: 'Université Dokuz Eylul'
    },
    
    // Noms des colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Bâtiment',
        floor: 'Étage',
        unit: 'Unité',
        district: 'District',
        province: 'Province',
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