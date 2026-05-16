export default {
    name: 'Mexiko-Adressgenerator - Erstellen Sie echte mexikanische Adressen, Identitätsinformationen und Kontaktdaten online',
    description: 'Kostenloser Online-Mexiko-Adressgenerator, der echte mexikanische Adressen, RFC/CURP-Ausweisnummern, Telefonnummern, Kreditkartennummern und vollständige Identitätsprofile erstellt. Unterstützt Bundesstaatenfilterung, JSON/CSV-Exportformate und läuft vollständig im Browser zum Schutz der Privatsphäre.',
    inputTitle: 'Generierungseinstellungen',
    outputTitle: 'Generierte Ergebnisse',
    generateBtn: 'Daten generieren',
    loadSampleBtn: 'Beispiel laden und generieren',
    clearAll: 'Alles löschen',
    noOutput: 'Noch keine Ergebnisse generiert',
    preview: 'Datenvorschau',
    
    // Geografische Filterung
    locationTitle: 'Geografische Filterung',
    selectState: 'Bundesstaat auswählen',
    selectCity: 'Stadt auswählen',
    allStates: 'Alle Bundesstaaten',
    allCities: 'Alle Städte',
    
    // Adresstypen
    addressTypeTitle: 'Adresstyp',
    addressTypeResidential: 'Wohnadresse',
    addressTypeCommercial: 'Geschäftsadresse',
    addressTypeVirtual: 'Virtueller Briefkasten',
    addressTypeCampus: 'Uni-Campus',
    
    // Identitätsinformationen
    identityTitle: 'Identitätsinformationen',
    fullName: 'Vollständiger Name',
    gender: 'Geschlecht',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    age: 'Alter',
    birthDate: 'Geburtsdatum',
    zodiac: 'Sternzeichen',
    height: 'Größe',
    weight: 'Gewicht',
    
    // Kontaktinformationen
    contactTitle: 'Kontaktinformationen',
    phoneNumber: 'Telefonnummer',
    phoneType: 'Telefontyp',
    phoneTypeMobile: 'Mobil',
    phoneTypeLandline: 'Festnetz',
    areaCode: 'Vorwahl',
    email: 'E-Mail-Adresse',
    tempEmail: 'Temporäre E-Mail',
    
    // Kreditkarte
    creditCardTitle: 'Kreditkarteninformationen',
    cardType: 'Kartentyp',
    cardNumber: 'Kartennummer',
    expiryDate: 'Ablaufdatum',
    cvv: 'CVV',
    bankBin: 'Bank-BIN',
    
    // Karriere
    careerTitle: 'Berufsprofil',
    jobTitle: 'Berufsbezeichnung',
    salary: 'Gehalt',
    companyName: 'Firmenname',
    companySize: 'Unternehmensgröße',
    industry: 'Branche',
    employmentStatus: 'Beschäftigungsstatus',
    employmentFullTime: 'Vollzeit',
    employmentPartTime: 'Teilzeit',
    
    // Ausweis
    idCardTitle: 'Mexikanischer Ausweis',
    rfcLabel: 'RFC (Föderales Steuerregister)',
    curpLabel: 'CURP (Eindeutiger Bevölkerungsregistrierungscode)',
    
    // Digitaler Abdruck
    fingerprintTitle: 'Digitaler Abdruck',
    os: 'Betriebssystem',
    osVersion: 'Systemversion',
    browser: 'Browser',
    userAgent: 'User Agent',
    screenResolution: 'Bildschirmauflösung',
    timezone: 'Zeitzone',
    guid: 'GUID',
    ipAddress: 'IP-Adresse',
    macAddress: 'MAC-Adresse',
    cookiePolicy: 'Cookie-Richtlinie',
    
    // Exportoptionen
    exportTitle: 'Exportformat',
    exportJson: 'JSON exportieren',
    exportCsv: 'CSV exportieren',
    downloadBtn: 'Herunterladen',
    copyBtn: 'Kopieren',
    viewDetails: 'Details anzeigen',
    
    // Stapelgenerierung
    batchTitle: 'Stapelgenerierung',
    quantityLabel: 'Menge',
    quantityPlaceholder: 'Menge eingeben (1-100)',
    
    // Benachrichtigungsmeldungen
    generating: 'Generierung...',
    generated: 'Generierung abgeschlossen',
    copySuccess: 'In die Zwischenablage kopiert',
    downloadSuccess: 'Download erfolgreich',
    invalidQuantity: 'Bitte geben Sie eine Zahl zwischen 1 und 100 ein',
    
    // Ergebnisanzeige
    resultCount: '{count} Datensätze generiert',
    resultSummary: 'Ergebnisübersicht',
    showAll: 'Alle anzeigen',
    collapse: 'Einklappen',
    
    // Generierungsoptionen
    generateOptionsTitle: 'Generierungsoptionen',
    
    // Datensatzanzeige
    recordLabel: 'Datensatz #{num}',
    addressLabel: 'Adresse',
    streetLabel: 'Straße',
    houseNumberLabel: 'Hausnummer',
    neighborhoodLabel: 'Viertel',
    postalCodeLabel: 'Postleitzahl',
    cityLabel: 'Stadt',
    stateLabel: 'Bundesstaat',
    
    // Adressformat
    commercialAddress: '(Geschäftsadresse)',
    postOfficeBox: 'Postfach',
    studentDormitory: 'Studentenwohnheim',
    teachingBuilding: 'Lehrgebäude',
    library: 'Bibliothek',
    
    // Bundesstaaten Mexikos (32 Bundesstaaten)
    states: {
        AGS: 'Aguascalientes',
        BCN: 'Niederkalifornien',
        BCS: 'Südniederkalifornien',
        CAMP: 'Campeche',
        COAH: 'Coahuila',
        COL: 'Colima',
        CHIS: 'Chiapas',
        CHIH: 'Chihuahua',
        CDMX: 'Mexiko-Stadt',
        DUR: 'Durango',
        GTO: 'Guanajuato',
        GRO: 'Guerrero',
        HGO: 'Hidalgo',
        JAL: 'Jalisco',
        MEX: 'Bundesstaat Mexiko',
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
    
    // Universitätsnamen
    universities: {
        UNAM: 'Nationale Autonome Universität von Mexiko',
        IPN: 'Nationales Polytechnisches Institut',
        UdeG: 'Universität Guadalajara',
        UANL: 'Autonome Universität Nuevo León'
    },
    
    // CSV-Spaltennamen
    csv: {
        fullAddress: 'Vollständige Adresse',
        street: 'Straße',
        houseNumber: 'Hausnummer',
        neighborhood: 'Viertel',
        postalCode: 'Postleitzahl',
        city: 'Stadt',
        state: 'Bundesstaat',
        fullName: 'Vollständiger Name',
        gender: 'Geschlecht',
        age: 'Alter',
        birthDate: 'Geburtsdatum',
        phone: 'Telefon',
        email: 'E-Mail',
        cardType: 'Kartentyp',
        cardNumber: 'Kartennummer',
        rfc: 'RFC',
        curp: 'CURP'
    }
};