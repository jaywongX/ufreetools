export default {
    name: 'Générateur d\'adresses France - Générez des adresses françaises réelles, des informations d\'identité et des coordonnées en ligne',
    description: 'Générateur d\'adresses françaises en ligne gratuit qui crée des adresses françaises au format réel, des numéros d\'identité, des numéros de téléphone, des numéros de carte de crédit et des profils d\'identité complets. Prend en charge le filtrage par département, l\'exportation aux formats JSON/CSV et s\'exécute entièrement dans le navigateur pour protéger la confidentialité.',
    inputTitle: 'Paramètres de génération',
    outputTitle: 'Résultats générés',
    generateBtn: 'Générer des données',
    loadSampleBtn: 'Charger un exemple et générer',
    clearAll: 'Tout effacer',
    noOutput: 'Aucun résultat généré pour le moment',
    preview: 'Aperçu des données',
    
    // Filtrage géographique
    locationTitle: 'Filtrage géographique',
    selectRegion: 'Sélectionner une région',
    selectDepartment: 'Sélectionner un département',
    allRegions: 'Toutes les régions',
    allDepartments: 'Tous les départements',
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
    idCardTitle: 'Carte d\'identité française',
    idCardNumber: 'Numéro de carte d\'identité',
    nirNumber: 'Numéro NIR',
    serialNumber: 'Numéro de série',
    checkKey: 'Clé de contrôle',
    
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
    departmentLabel: 'Département',
    regionLabel: 'Région',
    postalCode: 'Code postal',
    
    // Format d\'adresse
    addressNumber: 'N°',
    addressFloor: 'Étage',
    addressUnit: 'Unité',
    commercialUnit: '(Unité commerciale)',
    france: 'France',
    postOfficeBox: 'Boîte postale',
    studentDormitory: 'Dortoir étudiant',
    teachingBuilding: 'Bâtiment d\'enseignement',
    library: 'Bibliothèque',
    buildingUnit: 'Unité',
    apartment: 'Appartement',
    
    // Messages d\'alerte
    idCardImageAlert: 'La génération d\'image de carte d\'identité nécessite une implémentation canvas',
    businessCardAlert: 'La génération de carte de visite nécessite une implémentation canvas',
    
    // Noms de régions (régions françaises)
    regions: {
        IDF: 'Île-de-France',
        ARA: 'Auvergne-Rhône-Alpes',
        OCC: 'Occitanie',
        NAQ: 'Nouvelle-Aquitaine',
        PAC: 'Provence-Alpes-Côte d\'Azur',
        HDF: 'Hauts-de-France',
        BFC: 'Bourgogne-Franche-Comté',
        NAC: 'Pays de la Loire',
        PDL: 'Pays de la Loire',
        BRE: 'Bretagne',
        NOR: 'Normandie',
        GUA: 'Guadeloupe',
        MQ: 'Martinique',
        GUY: 'Guyane française',
        REU: 'La Réunion',
        COR: 'Corse',
        ALO: 'Alsace-Lorraine',
        MP: 'Metz-Poméranie'
    },
    
    // Données des départements (exemple de la région Île-de-France)
    departmentsData: {
        IDF: {
            paris: 'Paris',
            hautsDeSeine: 'Hauts-de-Seine',
            seineSaintDenis: 'Seine-Saint-Denis',
            valDeMarne: 'Val-de-Marne',
            yvelines: 'Yvelines',
            essonne: 'Essonne',
            valDOise: 'Val-d\'Oise',
            seineEtMarne: 'Seine-et-Marne'
        },
        ARA: {
            rhone: 'Rhône',
            loire: 'Loire',
            isere: 'Isère',
            ain: 'Ain',
            savoie: 'Savoie',
            hauteSavoie: 'Haute-Savoie',
            allier: 'Allier',
            puyDeDome: 'Puy-de-Dôme'
        },
        OCC: {
            herault: 'Hérault',
            gard: 'Gard',
            aude: 'Aude',
            pyreneesOrientales: 'Pyrénées-Orientales',
            tarn: 'Tarn',
            hauteGaronne: 'Haute-Garonne',
            gers: 'Gers',
            lotEtGaronne: 'Lot-et-Garonne'
        },
        NAQ: {
            gironde: 'Gironde',
            charenteMaritime: 'Charente-Maritime',
            dordogne: 'Dordogne',
            landes: 'Landes',
            vienne: 'Vienne',
            hauteVienne: 'Haute-Vienne',
            charente: 'Charente',
            correze: 'Corrèze'
        },
        PAC: {
            bouchesDuRhone: 'Bouches-du-Rhône',
            alpesMaritimes: 'Alpes-Maritimes',
            var: 'Var',
            vaucluse: 'Vaucluse',
            alpesDeHauteProvence: 'Alpes-de-Haute-Provence',
            hautesAlpes: 'Hautes-Alpes'
        },
        HDF: {
            nord: 'Nord',
            pasDeCalais: 'Pas-de-Calais',
            somme: 'Somme',
            aisne: 'Aisne',
            oise: 'Oise',
            aisne: 'Aisne'
        }
    },
    
    // Noms d\'universités
    universities: {
        UP1: 'Université Paris 1 Panthéon-Sorbonne',
        UP2: 'Université Paris 2 Panthéon-Assas',
        UP3: 'Université Paris 3 Sorbonne Nouvelle',
        UP4: 'Université Paris 1 Panthéon-Sorbonne',
        UP5: 'Université Paris Descartes',
        UP6: 'Université Pierre et Marie Curie',
        UP7: 'Université Paris Diderot',
        UP8: 'Université Paris 8 Vincennes-Saint-Denis',
        UP9: 'Université Paris Dauphine',
        UP10: 'Université Paris Nanterre',
        UP11: 'Université Paris-Saclay',
        UP12: 'Université Paris-Est Créteil',
        UP13: 'Université Sorbonne Paris Nord',
        ENS: 'École normale supérieure',
        X: 'École polytechnique'
    },
    
    // Noms de colonnes CSV
    csv: {
        fullAddress: 'Adresse complète',
        street: 'Rue',
        houseNumber: 'Numéro de maison',
        building: 'Immeuble',
        floor: 'Étage',
        unit: 'Unité',
        department: 'Département',
        region: 'Région',
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