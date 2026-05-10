export default {
   name: 'Generatore di indirizzi India - Genera indirizzi indiani reali, informazioni di identità e dettagli di contatto online',
   description: 'Generatore di indirizzi indiani gratuito online che crea indirizzi indiani in formato reale, numeri di identificazione, numeri di telefono, numeri di carta di credito e profili di identità completi. Supporta il filtro per stato, i formati di esportazione JSON/CSV e viene eseguito completamente nel browser per la protezione della privacy.',
   inputTitle: 'Impostazioni di generazione',
   outputTitle: 'Risultati generati',
   generateBtn: 'Genera dati',
   loadSampleBtn: 'Carica esempio e genera',
   clearAll: 'Cancella tutto',
   noOutput: 'Nessun risultato generato ancora',
   preview: 'Anteprima dati',
   
   // Filtro geografico
   locationTitle: 'Filtro geografico',
   selectRegion: 'Seleziona stato',
   allRegions: 'Tutti gli stati',
   postalCodeLabel: 'Codice postale',
   validatePostalCode: 'Valida codice postale',
   
   // Tipi di indirizzo
   addressTypeTitle: 'Tipo di indirizzo',
   addressTypeResidential: 'Indirizzo residenziale',
   addressTypeCommercial: 'Indirizzo commerciale',
   addressTypeVirtual: 'Casella postale virtuale',
   addressTypeCampus: 'Campus universitario',
   
   // Informazioni di identità
   identityTitle: 'Informazioni di identità',
   fullName: 'Nome completo',
   gender: 'Genere',
   genderMale: 'Maschile',
   genderFemale: 'Femminile',
   age: 'Età',
   birthDate: 'Data di nascita',
   zodiac: 'Segno zodiacale',
   height: 'Altezza',
   weight: 'Peso',
   
   // Informazioni di contatto
   contactTitle: 'Informazioni di contatto',
   phoneNumber: 'Numero di telefono',
   phoneType: 'Tipo di telefono',
   phoneTypeMobile: 'Cellulare',
   phoneTypeLandline: 'Fisso',
   areaCode: 'Prefisso',
   email: 'Indirizzo email',
   tempEmail: 'Email temporanea',
   
   // Carta di credito
   creditCardTitle: 'Informazioni carta di credito',
   cardType: 'Tipo di carta',
   cardNumber: 'Numero carta',
   expiryDate: 'Data di scadenza',
   cvv: 'CVV',
   bankBin: 'BIN bancario',
   
   // Carriera
   careerTitle: 'Profilo professionale',
   jobTitle: 'Posizione',
   salary: 'Stipendio',
   companyName: 'Nome azienda',
   companySize: 'Dimensione azienda',
   industry: 'Settore',
   employmentStatus: 'Stato occupazionale',
   employmentFullTime: 'Tempo pieno',
   employmentPartTime: 'Part-time',
   
   // Carta d'identità
   idCardTitle: 'Carta d\'identità indiana',
   idCardNumber: 'Numero carta d\'identità',
   aadhaarNumber: 'Numero Aadhaar',
   
   // Impronta digitale
   fingerprintTitle: 'Impronta digitale',
   os: 'Sistema operativo',
   osVersion: 'Versione sistema',
   browser: 'Browser',
   userAgent: 'User Agent',
   screenResolution: 'Risoluzione schermo',
   timezone: 'Fuso orario',
   guid: 'GUID',
   ipAddress: 'Indirizzo IP',
   macAddress: 'Indirizzo MAC',
   cookiePolicy: 'Politica cookie',
   
   // Opzioni di esportazione
   exportTitle: 'Formato di esportazione',
   exportJson: 'Esporta JSON',
   exportCsv: 'Esporta CSV',
   downloadBtn: 'Scarica',
   copyBtn: 'Copia',
   viewDetails: 'Visualizza dettagli',
   
   // Generazione in batch
   batchTitle: 'Generazione in batch',
   quantityLabel: 'Quantità',
   quantityPlaceholder: 'Inserisci quantità (1-100)',
   
   // Messaggi di notifica
   generating: 'Generazione in corso...',
   generated: 'Generazione completata',
   copySuccess: 'Copiato negli appunti',
   downloadSuccess: 'Download riuscito',
   invalidQuantity: 'Inserisci un numero tra 1 e 100',
   
   // Visualizzazione risultati
   resultCount: '{count} record generati',
   resultSummary: 'Riepilogo risultati',
   showAll: 'Mostra tutti',
   collapse: 'Comprimi',
   
   // Opzioni di generazione
   generateOptionsTitle: 'Opzioni di generazione',
   
   // Visualizzazione record
   recordLabel: 'Record #{num}',
   addressLabel: 'Indirizzo',
   streetLabel: 'Via',
   houseNumberLabel: 'Numero civico',
   buildingLabel: 'Edificio',
   floorLabel: 'Piano',
   unitLabel: 'Unità',
   regionLabel: 'Stato',
   postalCode: 'Codice postale',
   
   // Formato indirizzo
   addressNumber: 'N°',
   addressFloor: 'Piano',
   addressUnit: 'Unità',
   commercialUnit: '(Unità commerciale)',
   india: 'India',
   postOfficeBox: 'Casella postale',
   studentDormitory: 'Residenza studenti',
   teachingBuilding: 'Edificio didattico',
   library: 'Biblioteca',
   buildingUnit: 'Blocco',
   apartment: 'Appartamento',
   
   // Nomi regioni (Stati indiani)
   regions: {
       'Maharashtra': 'Maharashtra',
       'Karnataka': 'Karnataka',
       'Tamil Nadu': 'Tamil Nadu',
       'Delhi': 'Delhi',
       'Gujarat': 'Gujarat',
       'Rajasthan': 'Rajasthan',
       'Uttar Pradesh': 'Uttar Pradesh',
       'West Bengal': 'Bengala Occidentale',
       'Kerala': 'Kerala',
       'Andhra Pradesh': 'Andhra Pradesh',
       'Telangana': 'Telangana',
       'Madhya Pradesh': 'Madhya Pradesh',
       'Bihar': 'Bihar',
       'Punjab': 'Punjab',
       'Haryana': 'Haryana',
       'Odisha': 'Odisha',
       'Chhattisgarh': 'Chhattisgarh',
       'Jharkhand': 'Jharkhand',
       'Assam': 'Assam',
       'Jammu and Kashmir': 'Jammu e Kashmir'
   },
   
   // Nomi università
   universities: {
       'IIT': 'Istituto Indiano di Tecnologia',
       'IISc': 'Istituto Indiano di Scienze',
       'IIM': 'Istituto Indiano di Gestione',
       'AIIMS': 'All India Institute of Medical Sciences',
       'JNU': 'Università Jawaharlal Nehru',
       'DU': 'Università di Delhi',
       'BHU': 'Università Hindu di Banaras',
       'Jadavpur': 'Università di Jadavpur',
       'Anna': 'Università Anna',
       'Osmania': 'Università Osmania'
   },
   
   // Nomi colonne CSV
   csv: {
       fullAddress: 'Indirizzo completo',
       street: 'Via',
       houseNumber: 'Numero civico',
       building: 'Edificio',
       floor: 'Piano',
       unit: 'Unità',
       region: 'Stato',
       postalCode: 'Codice postale',
       fullName: 'Nome completo',
       gender: 'Genere',
       age: 'Età',
       birthDate: 'Data di nascita',
       phone: 'Telefono',
       email: 'Email',
       cardType: 'Tipo carta',
       cardNumber: 'Numero carta',
       idCardNumber: 'Numero carta d\'identità'
   }
};