export default {
    name: 'Générateur d\'Adresses Royaume-Uni - Générer des adresses réelles du Royaume-Uni, informations d\'identité et contacts en ligne',
    description: 'Générateur gratuit d\'adresses du Royaume-Uni en ligne. Génère des adresses britanniques au format réel, numéros d\'assurance nationale (NINO), téléphones, numéros de carte de crédit et profils d\'identité complets. Filtrer par comté, exporter en JSON/CSV, traitement frontal pur pour la confidentialité.',
    inputTitle: 'Configuration de Génération',
    outputTitle: 'Résultats',
    generateBtn: 'Générer les Données',
    loadSampleBtn: 'Charger l\'Exemple et Générer',
    clearAll: 'Tout Effacer',
    noOutput: 'Aucun résultat',
    preview: 'Aperçu',
    
    locationTitle: 'Filtre Géographique',
    selectCounty: 'Sélectionner le Comté',
    selectCity: 'Sélectionner la Ville',
    allCounties: 'Tous les Comtés',
    allCities: 'Toutes les Villes',
    postcodeLabel: 'Code Postal',
    validatePostcode: 'Valider le Code Postal',
    
    addressTypeTitle: 'Type d\'Adresse',
    addressTypeResidential: 'Adresse Résidentielle',
    addressTypeCommercial: 'Adresse Commerciale',
    addressTypePoBox: 'Boîte Postale',
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
    areaCode: 'Code Régional',
    email: 'Adresse Email',
    tempEmail: 'Email Temporaire',
    
    creditCardTitle: 'Informations de Carte de Crédit',
    cardType: 'Type de Carte',
    cardNumber: 'Numéro de Carte',
    expiryDate: 'Date d\'Expiration',
    cvv: 'CVV',
    bankBin: 'Code BIN Bancaire',
    
    careerTitle: 'Profil Professionnel',
    jobTitle: 'Titre du Poste',
    salary: 'Salaire',
    companyName: 'Nom de l\'Entreprise',
    companySize: 'Taille de l\'Entreprise',
    industry: 'Industrie',
    employmentStatus: 'Statut d\'Emploi',
    employmentFullTime: 'Temps Plein',
    employmentPartTime: 'Temps Partiel',
    
    idCardTitle: 'Numéro d\'Assurance Nationale (NINO)',
    idCardNumber: 'Numéro d\'Assurance Nationale',
    prefixLetter: 'Lettre Préfixe',
    serialNumber: 'Numéro de Série',
    suffixLetter: 'Lettre Suffixe',
    
    fingerprintTitle: 'Empreinte Numérique',
    os: 'Système d\'Exploitation',
    osVersion: 'Version du Système',
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
    downloadBtn: 'Télécharger',
    copyBtn: 'Copier',
    viewDetails: 'Voir les Détails',
    
    batchTitle: 'Génération par Lots',
    quantityLabel: 'Quantité à Générer',
    quantityPlaceholder: 'Entrer la quantité (1-100)',
    
    generating: 'Génération en cours...',
    generated: 'Génération Terminée',
    copySuccess: 'Copié dans le presse-papiers',
    downloadSuccess: 'Téléchargement réussi',
    invalidQuantity: 'Entrer un nombre entre 1-100',
    
    resultCount: 'Total de {count} enregistrements générés',
    resultSummary: 'Résumé des Résultats',
    showAll: 'Tout Afficher',
    collapse: 'Réduire',
    
    generateOptionsTitle: 'Options de Génération',
    
    recordLabel: 'Enregistrement #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Rue',
    houseNumberLabel: 'Numéro',
    buildingLabel: 'Bâtiment',
    cityLabel: 'Ville',
    countyLabel: 'Comté',
    
    counties: {
        LND: 'Grand Londres',
        GRM: 'Grand Manchester',
        MAN: 'Manchester',
        BIR: 'Midlands de l\'Ouest',
        LEE: 'Yorkshire de l\'Ouest',
        SHE: 'Yorkshire du Sud',
        LIV: 'Merseyside',
        BRS: 'Bristol',
        NEW: 'Tyne et Wear',
        NOT: 'Nottinghamshire',
        EDB: 'Édimbourg',
        GLA: 'Glasgow',
        CDF: 'Cardiff',
        BEL: 'Belfast',
        SOU: 'Southampton',
        POR: 'Plymouth',
        BRI: 'Brighton',
        CAM: 'Cambridgeshire'
    },
    
    cities: {
        LND: {
            westminster: 'Westminster',
            kensington: 'Kensington',
            chelsea: 'Chelsea',
            camden: 'Camden',
            islington: 'Islington',
            hackney: 'Hackney',
            towerHamlets: 'Tower Hamlets',
            greenwich: 'Greenwich'
        },
        GRM: {
            manchester: 'Manchester',
            salford: 'Salford',
            bolton: 'Bolton',
            bury: 'Bury',
            oldham: 'Oldham',
            rochdale: 'Rochdale',
            stockport: 'Stockport',
            wigan: 'Wigan'
        },
        MAN: {
            manchesterCity: 'Ville de Manchester',
            trafford: 'Trafford',
            tameside: 'Tameside',
            sale: 'Sale'
        },
        BIR: {
            birmingham: 'Birmingham',
            coventry: 'Coventry',
            wolverhampton: 'Wolverhampton',
            dudley: 'Dudley',
            walsall: 'Walsall',
            sandwell: 'Sandwell',
            solihull: 'Solihull'
        },
        LEE: {
            leeds: 'Leeds',
            bradford: 'Bradford',
            wakefield: 'Wakefield',
            kirklees: 'Kirklees',
            calderdale: 'Calderdale'
        },
        SHE: {
            sheffield: 'Sheffield',
            rotherham: 'Rotherham',
            doncaster: 'Doncaster',
            barnsley: 'Barnsley'
        },
        LIV: {
            liverpool: 'Liverpool',
            knowsley: 'Knowsley',
            sefton: 'Sefton',
            wirral: 'Wirral',
            stHelens: 'St Helens'
        },
        BRS: {
            bristol: 'Bristol',
            southGloucestershire: 'Gloucestershire du Sud',
            bath: 'Bath'
        },
        NEW: {
            newcastle: 'Newcastle',
            gateshead: 'Gateshead',
            sunderland: 'Sunderland',
            durham: 'Durham',
            northTyneside: 'Tyneside Nord',
            southTyneside: 'Tyneside Sud'
        },
        NOT: {
            nottingham: 'Nottingham',
            derby: 'Derby',
            leicester: 'Leicester',
            lincoln: 'Lincoln'
        },
        EDB: {
            edinburgh: 'Édimbourg',
            glasgow: 'Glasgow',
            aberdeen: 'Aberdeen',
            dundee: 'Dundee',
            inverness: 'Inverness'
        },
        GLA: {
            glasgowCity: 'Ville de Glasgow',
            paisley: 'Paisley',
            motherwell: 'Motherwell',
            hamilton: 'Hamilton',
            eastKilbride: 'East Kilbride'
        },
        CDF: {
            cardiff: 'Cardiff',
            swansea: 'Swansea',
            newport: 'Newport',
            wrexham: 'Wrexham',
            barry: 'Barry'
        },
        BEL: {
            belfast: 'Belfast',
            derry: 'Derry',
            lisburn: 'Lisburn',
            newry: 'Newry',
            bangor: 'Bangor'
        },
        SOU: {
            southampton: 'Southampton',
            portsmouth: 'Portsmouth',
            bournemouth: 'Bournemouth',
            poole: 'Poole',
            winchester: 'Winchester'
        },
        POR: {
            plymouth: 'Plymouth',
            exeter: 'Exeter',
            truro: 'Truro',
            bath: 'Bath',
            taunton: 'Taunton'
        },
        BRI: {
            brighton: 'Brighton',
            hove: 'Hove',
            worthing: 'Worthing',
            eastbourne: 'Eastbourne',
            hastings: 'Hastings'
        },
        CAM: {
            cambridge: 'Cambridge',
            oxford: 'Oxford',
            peterborough: 'Peterborough',
            luton: 'Luton',
            miltonKeynes: 'Milton Keynes'
        }
    },
    
    universities: {
        OXF: 'Université d\'Oxford',
        CAM: 'Université de Cambridge',
        IMP: 'Imperial College London',
        UCL: 'University College London',
        EDB: 'Université d\'Édimbourg'
    },
    
    studentHall: 'Résidence Étudiante',
    academicBuilding: 'Bâtiment Académique',
    library: 'Bibliothèque',
    
    csv: {
        fullAddress: 'Adresse Complète',
        street: 'Rue',
        houseNumber: 'Numéro',
        building: 'Bâtiment',
        postcode: 'Code Postal',
        city: 'Ville',
        county: 'Comté',
        fullName: 'Nom',
        gender: 'Genre',
        age: 'Âge',
        birthDate: 'Date de Naissance',
        phone: 'Téléphone',
        email: 'Email',
        cardType: 'Type de Carte',
        cardNumber: 'Numéro de Carte',
        idCardNumber: 'Numéro d\'Assurance Nationale'
    }
};
