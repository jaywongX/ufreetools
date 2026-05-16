export default {
    name: 'Générateur d\'adresses Mexique - Générez de vraies adresses mexicaines, informations d\'identité et coordonnées en ligne',
    description: 'Générateur d\'adresses mexicaines en ligne gratuit qui crée des adresses mexicaines au format réel, des numéros d\'identification RFC/CURP, des numéros de téléphone, des numéros de cartes de crédit et des profils d\'identité complets. Prend en charge le filtrage par état, les formats d\'exportation JSON/CSV et fonctionne entièrement dans le navigateur pour la protection de la vie privée.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer les données',
    loadSampleBtn: 'Charger l\'exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectState: 'Sélectionner l\'état',
    selectCity: 'Sélectionner la ville',
    allStates: 'Tous les états',
    allCities: 'Toutes les villes',
    
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
    employmentFullTime: 'Temps plein',
    employmentPartTime: 'Temps partiel',
    
    // Carte d\'identité
    idCardTitle: 'Carte d\'identité mexicaine',
    rfcLabel: 'RFC (Registre fédéral des contribuables)',
    curpLabel: 'CURP (Clé unique d\'enregistrement de la population)',
    
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
    neighborhoodLabel: 'Quartier',
    postalCodeLabel: 'Code postal',
    cityLabel: 'Ville',
    stateLabel: 'État',
    
    // Format d\'adresse
    commercialAddress: '(Adresse commerciale)',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Résidence étudiante',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    
    // États du Mexique (32 états)
    states: {
        AGS: 'Aguascalientes',
        BCN: 'Basse-Californie',
        BCS: 'Basse-Californie du Sud',
        CAMP: 'Campeche',
        COAH: 'Coahuila',
        COL: 'Colima',
        CHIS: 'Chiapas',
        CHIH: 'Chihuahua',
        CDMX: 'Mexico',
        DUR: 'Durango',
        GTO: 'Guanajuato',
        GRO: 'Guerrero',
        HGO: 'Hidalgo',
        JAL: 'Jalisco',
        MEX: 'État de Mexico',
        MIC: 'Michoacán',
        MOR: 'Morelos',
        NAY: 'Nayarit',
        NLE: 'Nuevo León',
        OAX: 'Oaxaca',
        PUE: 'Puebla',
        QRO: 'Querétaro',
        QROO: 'Quintana Roo',
        SLP: 'San Luis Potosí',
        SIN: 'Sinaloa',
        SON: 'Sonora',
        TAB: 'Tabasco',
        TAM: 'Tamaulipas',
        TLAX: 'Tlaxcala',
        VER: 'Veracruz',
        YUC: 'Yucatán',
        ZAC: 'Zacatecas'
    },
    
    // Noms des universités
    universities: {
        UNAM: 'Université nationale autonome du Mexique',
        IPN: 'Institut polytechnique national',
        UdeG: 'Université de Guadalajara',
        UANL: 'Université autonome de Nuevo León'
    },
    
    // Noms des colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        neighborhood: 'Quartier',
        postalCode: 'Code postal',
        city: 'Ville',
        state: 'État',
        fullName: 'Nom complet',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de naissance',
        phone: 'Téléphone',
        email: 'E-mail',
        cardType: 'Type de carte',
        cardNumber: 'Numéro de carte',
        rfc: 'RFC',
        curp: 'CURP'
    }
};