export default {
  name: 'Analizzatore Certificati X.509',
  description: 'Strumento online gratuito per analizzare certificati X.509. Decodifica e analizza certificati SSL/TLS, visualizza dettagli, verifica validità, estrae chiavi pubbliche ed esporta report.',

  instructions: {
    title: 'Analizzatore Certificati',
    description: 'Carica un file certificato o incolla un certificato in formato PEM per visualizzarne i dettagli.'
  },

  dropzone: {
    title: 'Trascina qui il file del certificato',
    formats: 'Supporta file .crt, .cer, .pem, .der, .p12 e .pfx'
  },

  buttons: {
    browse: 'Sfoglia file',
    decode: 'Analizza Certificato',
    loadSample: 'Carica Esempio',
    downloadPdf: 'Scarica Report PDF',
    downloadTxt: 'Scarica Report Testo',
    downloadHtml: 'Scarica Report HTML',
    downloadJson: 'Scarica Report JSON',
    copyBasic: 'Copia Info Base',
    copySubject: 'Copia Soggetto/Emittente',
    copyAll: 'Copia Tutte le Info',
    copyValue: 'Copia Valore',
    downloadKey: 'Scarica Chiave',
    exportPem: 'Esporta PEM',
    downloadCert: 'Scarica Certificato',
  },

  input: {
    paste: 'Oppure incolla i dati del certificato:',
    placeholder: 'Incolla il tuo certificato in formato PEM (-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----)'
  },

  loading: 'Analisi certificato in corso...',

  error: {
    title: 'Errore durante l\'analisi del certificato',
    invalidFormat: 'Formato certificato non valido',
    invalidBase64: 'Certificato non codificato correttamente in base64',
    invalidStructure: 'Struttura dati certificato non valida',
    invalidDer: 'Formato DER non valido',
    invalidAsn1: 'Certificato non valido: impossibile analizzare dati ASN.1',
    unsupportedType: 'Tipo di certificato non supportato',
    failedParse: 'Impossibile analizzare i dati del certificato',
    invalidP12: 'Formato file PKCS#12 non valido',
    invalidP12Password: 'Password PKCS#12 non valida',
    noCertificatesInP12: 'Nessun certificato trovato nel file PKCS#12',
    unableToProcessP12: 'Impossibile elaborare il file PKCS#12'
  },

  guide: {
    title: 'Come usare questo strumento',
    step1: 'Carica il tuo file certificato X.509 (.crt, .cer, .pem, .der, .p12 o .pfx) oppure incolla i dati del certificato nell\'area di testo sottostante.',
    step2: 'Lo strumento rileverà automaticamente il formato (PEM, DER o PKCS#12) e procederà alla decodifica.',
    step3: 'Visualizza le informazioni dettagliate del certificato, inclusi soggetto, emittente, periodo di validità, estensioni e dati della chiave pubblica.',
    step4: 'Puoi utilizzare i pulsanti in fondo per scaricare report in diversi formati o copiare le informazioni negli appunti.'
  },

  tabs: {
    basic: 'Informazioni Base',
    subject: 'Soggetto ed Emittente',
    extensions: 'Estensioni',
    publicKey: 'Chiave Pubblica',
    fingerprints: 'Impronte Digitali',
    raw: 'Certificato Originale'
  },

  results: {
    title: 'Dettagli Certificato',
    serialNumber: 'Numero Seriale',
    version: 'Versione',
    sigAlg: 'Algoritmo Firma',
    validFrom: 'Valido Da',
    validTo: 'Valido Fino A',
    subject: 'Soggetto',
    issuer: 'Emittente',
    extensions: 'Estensioni',
    publicKey: 'Chiave Pubblica',
    algorithm: 'Algoritmo',
    keySize: 'Dimensione Chiave',
    keyValue: 'Valore Chiave',
    fingerprints: 'Impronte Digitali',
    rawCertificate: 'Certificato Originale',
    field: 'Campo',
    value: 'Valore',
    critical: 'Critico',
    noExtensions: 'Nessuna estensione trovata in questo certificato.',
    validity: 'Validità Certificato',
    expiresIn: 'Scade tra {days} giorni',
    visualization: 'Visualizzazione Certificato',
    daysRemaining: 'Giorni Rimasti',
    valid: 'Valido',
    expired: 'Scaduto',
    expiringSoon: 'In Scadenza',
    fieldDescriptions: 'Descrizioni Campi',
    certificateUsage: 'Utilizzo Certificato',
    certificateChain: 'Catena di Certificazione',
    signatureValue: 'Valore Firma',
    notAvailable: 'Non Disponibile',
    noSpecificUsage: 'Nessun utilizzo specifico indicato',
    signatureError: 'Errore nell\'analisi del valore della firma',
    keyDetails: 'Dettagli Chiave',
    enhancedView: 'Visualizzazione Avanzata',
    endEntity: 'Entità Finale',
    intermediate: 'Certificato Intermedio',
    rootCA: 'Autorità di Certificazione Radice',
    endEntityCert: 'Certificato Entità Finale',
    intermediateCert: 'Certificato Intermedio',
    rootCert: 'Autorità di Certificazione Radice',
    issuedBy: 'Emesso Da',
    unknownIssuer: 'Emittente Sconosciuto',
    notYetValid: 'Non Ancora Valido'
  },

  report: {
    title: 'Report Certificato X.509',
    generatedOn: 'Generato il'
  },

  extensions: {
    subjectKeyIdentifier: 'Identificatore Chiave Soggetto',
    keyUsage: 'Utilizzo Chiave',
    subjectAltName: 'Nome Alternativo Soggetto',
    basicConstraints: 'Vincoli Base',
    crlDistributionPoints: 'Punti di Distribuzione CRL',
    certificatePolicies: 'Politiche Certificato',
    authorityKeyIdentifier: 'Identificatore Chiave Autorità',
    extKeyUsage: 'Utilizzo Esteso Chiave',
    authorityInfoAccess: 'Accesso Informazioni Autorità',
    ctPrecertificateScts: 'SCT Pre-certificati CT'
  },

  usage: {
    serverAuth: 'Autenticazione Server',
    clientAuth: 'Autenticazione Client',
    codeSigning: 'Firma Codice',
    emailProtection: 'Protezione Email',
    timeStamping: 'Marcatura Temporale',
    ocspSigning: 'Firma OCSP'
  },

  customOID: {
    title: 'Ricerca OID Personalizzato',
    placeholder: 'Inserisci OID, es. 2.5.29.15',
    lookup: 'Cerca',
    result: 'Risultato',
    value: 'Valore',
    notFound: 'Nessuna informazione trovata per questo OID',
    foundButComplex: 'OID trovato ma valore complesso',
    unknownName: 'OID con nome sconosciuto',
    complexValue: 'Valore complesso, non visualizzabile direttamente'
  },

  descriptions: {
    serialNumber: 'Numero seriale univoco del certificato, assegnato dall\'autorità di certificazione',
    version: 'Numero di versione del formato certificato, tipicamente V3',
    sigAlg: 'Algoritmo utilizzato per generare la firma del certificato',
    validFrom: 'Data e ora di inizio validità del certificato',
    validTo: 'Data e ora di fine validità del certificato',
    subject: 'Informazioni di identità del titolare del certificato',
    issuer: 'Informazioni di identità dell\'autorità di certificazione che ha emesso il certificato',
    publicKey: 'Informazioni sulla chiave pubblica del titolare del certificato',
    extensions: 'Campi di estensione contenenti informazioni aggiuntive sull\'utilizzo del certificato'
  },

  messages: {
    copiedToClipboard: 'Copiato negli appunti',
    copyError: 'Errore durante la copia negli appunti'
  },

  pkcs12: {
    passwordPrompt: 'Inserisci la password per il file PKCS#12',
    noPassword: 'Nessuna password'
  },

  keyUsages: {
    digitalSignature: 'Firma Digitale',
    nonRepudiation: 'Non Ripudio',
    keyEncipherment: 'Cifratura Chiave',
    dataEncipherment: 'Cifratura Dati',
    keyAgreement: 'Accordo Chiave',
    keyCertSign: 'Firma Certificati',
    crlSign: 'Firma CRL',
    encipherOnly: 'Solo Cifratura',
    decipherOnly: 'Solo Decifratura'
  }
};