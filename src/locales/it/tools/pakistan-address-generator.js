export default {
   name: 'Generatore di Indirizzi Pakistan - Genera Indirizzi Pakistanistani Reali, Informazioni d\'Identità e Dettagli di Contatto Online',
   description: 'Generatore di indirizzi pakistanistani gratuito online che crea indirizzi pakistanistani con formato reale, numeri d\'identità, numeri di telefono, numeri di carta di credito e profili d\'identità completi. Supporta il filtraggio per provincia, formati di esportazione JSON/CSV e viene eseguito completamente nel browser per la protezione della privacy.',
   inputTitle: 'Impostazioni di Generazione',
   outputTitle: 'Risultati Generati',
   generateBtn: 'Genera Dati',
   loadSampleBtn: 'Carica Esempio e Genera',
   clearAll: 'Cancella Tutto',
   noOutput: 'Nessun risultato generato ancora',
   preview: 'Anteprima Dati',
   
   // Filtraggio Geografico
   locationTitle: 'Filtraggio Geografico',
   selectRegion: 'Seleziona Provincia/Regione',
   allRegions: 'Tutte le Province/Regioni',
   postalCodeLabel: 'Codice Postale',
   validatePostalCode: 'Valida Codice Postale',
   
   // Tipi di Indirizzo
   addressTypeTitle: 'Tipo di Indirizzo',
   addressTypeResidential: 'Indirizzo Residenziale',
   addressTypeCommercial: 'Indirizzo Commerciale',
   addressTypeVirtual: 'Casella Virtuale',
   addressTypeCampus: 'Campus Universitario',
   
   // Informazioni d\'Identità
   identityTitle: 'Informazioni d\'Identità',
   fullName: 'Nome Completo',
   gender: 'Genere',
   genderMale: 'Maschile',
   genderFemale: 'Femminile',
   age: 'Età',
   birthDate: 'Data di Nascita',
   zodiac: 'Segno Zodiacale',
   height: 'Altezza',
   weight: 'Peso',
   
   // Informazioni di Contatto
   contactTitle: 'Informazioni di Contatto',
   phoneNumber: 'Numero di Telefono',
   phoneType: 'Tipo di Telefono',
   phoneTypeMobile: 'Cellulare',
   phoneTypeLandline: 'Fisso',
   areaCode: 'Prefisso',
   email: 'Indirizzo Email',
   tempEmail: 'Email Temporanea',
   
   // Carta di Credito
   creditCardTitle: 'Informazioni Carta di Credito',
   cardType: 'Tipo Carta',
   cardNumber: 'Numero Carta',
   expiryDate: 'Data di Scadenza',
   cvv: 'CVV',
   bankBin: 'BIN Bancario',
   
   // Carriera
   careerTitle: 'Profilo Professionale',
   jobTitle: 'Posizione',
   salary: 'Stipendio',
   companyName: 'Nome Azienda',
   companySize: 'Dimensione Azienda',
   industry: 'Industria',
   employmentStatus: 'Stato Occupazionale',
   employmentFullTime: 'Tempo Pieno',
   employmentPartTime: 'Part-time',
   
   // Carta d\'Identità
   idCardTitle: 'Carta d\'Identità Pakistanistana',
   idCardNumber: 'Numero Carta d\'Identità',
   
   // Impronta Digitale
   fingerprintTitle: 'Impronta Digitale',
   os: 'Sistema Operativo',
   osVersion: 'Versione OS',
   browser: 'Browser',
   userAgent: 'User Agent',
   screenResolution: 'Risoluzione Schermo',
   timezone: 'Fuso Orario',
   guid: 'GUID',
   ipAddress: 'Indirizzo IP',
   macAddress: 'Indirizzo MAC',
   cookiePolicy: 'Politica Cookie',
   
   // Opzioni di Esportazione
   exportTitle: 'Formato di Esportazione',
   exportJson: 'Esporta JSON',
   exportCsv: 'Esporta CSV',
   downloadBtn: 'Scarica',
   copyBtn: 'Copia',
   viewDetails: 'Vedi Dettagli',
   
   // Generazione in Blocco
   batchTitle: 'Generazione in Blocco',
   quantityLabel: 'Quantità',
   quantityPlaceholder: 'Inserisci quantità (1-100)',
   
   // Messaggi di Notifica
   generating: 'Generazione...',
   generated: 'Generazione Completata',
   copySuccess: 'Copiato negli appunti',
   downloadSuccess: 'Download riuscito',
   invalidQuantity: 'Inserisci un numero tra 1 e 100',
   
   // Visualizzazione Risultati
   resultCount: '{count} record generati',
   resultSummary: 'Riepilogo Risultati',
   showAll: 'Mostra Tutto',
   collapse: 'Comprimi',
   
   // Opzioni di Generazione
   generateOptionsTitle: 'Opzioni di Generazione',
   
   // Visualizzazione Record
   recordLabel: 'Record #{num}',
   addressLabel: 'Indirizzo',
   streetLabel: 'Via',
   houseNumberLabel: 'Numero Civico',
   buildingLabel: 'Edificio',
   floorLabel: 'Piano',
   unitLabel: 'Unità',
   regionLabel: 'Provincia/Regione',
   postalCode: 'Codice Postale',
   
   // Formato Indirizzo
   addressNumber: 'N°',
   addressFloor: 'Piano',
   addressUnit: 'Unità',
   commercialUnit: '(Unità Commerciale)',
   pakistan: 'Pakistan',
   postOfficeBox: 'Casella Postale',
   studentDormitory: 'Residenza Studenti',
   teachingBuilding: 'Edificio Didattico',
   library: 'Biblioteca',
   buildingUnit: 'Edificio',
   apartment: 'Appartamento',
   
   // Nomi Province/Regioni (4 province + territorio del Pakistan)
   regions: {
       'Punjab': 'Punjab',
       'Sindh': 'Sindh',
       'Khyber Pakhtunkhwa': 'Khyber Pakhtunkhwa',
       'Balochistan': 'Belucistan',
       'Islamabad Capital Territory': 'Territorio della Capitale Islamabad'
   },
   
   // Nomi Università
   universities: {
       'LUMS': 'Università delle Scienze di Gestione di Lahore',
       'PU': 'Università del Punjab',
       'KU': 'Università di Karachi',
       'QAU': 'Università Quaid-i-Azam',
       'COMSATS': 'Università COMSATS Islamabad',
       'NUST': 'Università Nazionale di Scienza e Tecnologia',
       'IBA': 'Istituto di Amministrazione Aziendale',
       'PIDE': 'Istituto Pakistanese di Economia dello Sviluppo',
       'NCA': 'Collegio Nazionale delle Arti'
   },
   
   // Nomi Colonne CSV
   csv: {
       fullAddress: 'Indirizzo Completo',
       street: 'Via',
       houseNumber: 'Numero Civico',
       building: 'Edificio',
       floor: 'Piano',
       unit: 'Unità',
       region: 'Provincia/Regione',
       postalCode: 'Codice Postale',
       fullName: 'Nome Completo',
       gender: 'Genere',
       age: 'Età',
       birthDate: 'Data di Nascita',
       phone: 'Telefono',
       email: 'Email',
       cardType: 'Tipo Carta',
       cardNumber: 'Numero Carta',
       idCardNumber: 'Numero Carta d\'Identità'
   }
};