export default {
    name: 'Singapur-Adressgenerator - Online-Generierung realistischer Singapur-Adressen',
    description: 'Kostenloser Online-Singapur-Adressgenerator, der realistische Singapur-Adressen, NRIC-Nummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Filterung nach Region, JSON/CSV-Export, läuft lokal für Datenschutz.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierungsergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse',
    preview: 'Datenvorschau',
    
    locationTitle: 'Geografische Filterung',
    selectRegion: 'Region auswählen',
    selectArea: 'Bereich auswählen',
    allRegions: 'Alle Regionen',
    allAreas: 'Alle Bereiche',
    postalCodeLabel: 'Postleitzahl',
    
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeHDB: 'HDB-Wohnung',
    addressTypeCondo: 'Private Eigentumswohnung',
    
    identityTitle: 'Identitätsinformationen',
    fullName: 'Vollständiger Name',
    gender: 'Geschlecht',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    age: 'Alter',
    birthDate: 'Geburtsdatum',
    race: 'Ethnie',
    raceChinese: 'Chinesisch',
    raceMalay: 'Malaiisch',
    raceIndian: 'Indisch',
    raceOthers: 'Andere',
    
    contactTitle: 'Kontaktinformationen',
    phoneNumber: 'Telefonnummer',
    areaCode: 'Vorwahl',
    email: 'E-Mail-Adresse',
    tempEmail: 'Temporäre E-Mail',
    
    creditCardTitle: 'Kreditkarteninformationen',
    cardType: 'Kartentyp',
    cardNumber: 'Kartennummer',
    expiryDate: 'Ablaufdatum',
    cvv: 'CVV',
    bankBin: 'Bank-BIN',
    
    careerTitle: 'Berufsprofil',
    jobTitle: 'Position',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    idCardTitle: 'NRIC-Ausweis',
    idCardNumber: 'NRIC-Nummer',
    prefixLetter: 'Präfixbuchstabe',
    serialNumber: 'Seriennummer',
    checkLetter: 'Prüfbuchstabe',
    
    exportTitle: 'Exportformat',
    exportJson: 'JSON exportieren',
    exportCsv: 'CSV exportieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details anzeigen',
    
    batchTitle: 'Stapelverarbeitung',
    quantityLabel: 'Anzahl',
    quantityPlaceholder: 'Zahl eingeben (1-100)',
    
    generating: 'Generierung läuft...',
    generated: 'Generierung abgeschlossen',
    copySuccess: 'In die Zwischenablage kopiert',
    downloadSuccess: 'Download abgeschlossen',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1 und 100 ein',
    
    resultCount: '{count} Datensätze generiert',
    resultSummary: 'Ergebniszusammenfassung',
    showAll: 'Alle anzeigen',
    collapse: 'Einklappen',
    
    generateOptionsTitle: 'Generierungsoptionen',
    
    recordLabel: 'Datensatz #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Straße',
    houseNumberLabel: 'Hausnummer',
    buildingLabel: 'Gebäude',
    unitLabel: 'Einheit',
    postalCodeLabel: 'Postleitzahl',
    regionLabel: 'Region',
    
    regions: {
        CR: 'Zentralregion',
        ER: 'Ostregion',
        NR: 'Nordregion',
        NER: 'Nordostregion',
        WR: 'Westregion'
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
            jurongEast: 'Jurong Ost',
            jurongWest: 'Jurong West',
            bukitBatok: 'Bukit Batok',
            choaChuKang: 'Choa Chu Kang',
            woodlands: 'Woodlands',
            sembawang: 'Sembawang',
            yishun: 'Yishun'
        }
    },
    
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        building: 'Gebäude',
        postalCode: 'Postleitzahl',
        fullName: 'Name',
        gender: 'Geschlecht',
        age: 'Alter',
        birthDate: 'Geburtsdatum',
        phone: 'Telefon',
        email: 'E-Mail',
        cardType: 'Kartentyp',
        cardNumber: 'Kartennummer',
        idCardNumber: 'NRIC-Nummer'
    }
};
