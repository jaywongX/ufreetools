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
  },
  article: {
    title: 'Analizzatore Certificati X.509: analisi e verifica di certificati SSL/TLS',
    introduction: {
      title: 'Cos\'è un Analizzatore Certificati X.509?',
      p1: '<strong>L\'Analizzatore Certificati X.509</strong> è un potente strumento che aiuta professionisti della sicurezza, sviluppatori web e amministratori IT ad analizzare i certificati digitali utilizzati nei protocolli SSL/TLS. Il nostro strumento online gratuito fornisce un\'analisi completa dei componenti del certificato, dello stato di validità e delle caratteristiche di sicurezza, senza necessità di installare software.',
      p2: 'I certificati digitali sono essenziali per comunicazioni web sicure, stabilendo connessioni affidabili tra browser e server. Tuttavia, risolvere problemi relativi ai certificati richiede la comprensione della loro complessa struttura e dei dati codificati. L\'Analizzatore Certificati X.509 semplifica questo processo decodificando i dati grezzi del certificato in informazioni leggibili, permettendo di identificare rapidamente problemi e verificare l\'autenticità dei certificati.'
    },
    useCases: {
      title: 'Casi d\'uso comuni per l\'analisi dei certificati',
      case1: '<strong>Verifica certificati SSL/TLS</strong>: convalida autenticità e integrità dei certificati web prima del deployment.',
      case2: '<strong>Monitoraggio scadenze</strong>: controlla date di validità per prevenire interruzioni improvvise del servizio.',
      case3: '<strong>Verifica catena di certificazione</strong>: esamina la catena di certificati per assicurare corrette relazioni di fiducia.',
      case4: '<strong>Risoluzione problemi configurazione</strong>: identifica errori nei certificati che causano avvisi del browser o problemi di connessione.',
      case5: '<strong>Verifica firme digitali</strong>: controlla algoritmi di firma e parametri delle chiavi pubbliche per valutazioni di sicurezza.'
    },
    faq: {
      title: 'Domande frequenti sui certificati X.509',
      q1: 'Quali informazioni posso estrarre da un certificato X.509?',
      a1: 'Con il nostro <strong>Analizzatore Certificati X.509</strong>, puoi estrarre informazioni complete tra cui dettagli sull\'emittente, informazioni sul soggetto, periodo di validità, parametri della chiave pubblica, estensioni (come i nomi alternativi del soggetto), algoritmi di firma digitale e impronte digitali del certificato. Lo strumento fornisce anche indicatori visivi sullo stato di salute e sulla scadenza del certificato, rendendo facile identificare quelli che necessitano aggiornamento.',
      q2: 'Come faccio a sapere se il mio certificato è considerato attendibile dai browser?',
      a2: 'I browser generalmente considerano attendibili i certificati emessi da autorità di certificazione (CA) riconosciute e che formano una catena di fiducia valida. Il nostro strumento di analisi aiuta a visualizzare la catena di certificati e verificare la validità di ciascuno. Gli indicatori chiave includono l\'emittente (che dovrebbe essere una CA attendibile), le date di validità (non scadute), i vincoli base corretti (per i certificati intermedi) e le estensioni di utilizzo della chiave appropriate. L\'attendibilità da parte dei browser dipende anche dal fatto che il certificato non sia stato revocato, cosa verificabile tramite le informazioni OCSP o CRL nel certificato.',
      q3: 'Qual è la differenza tra formati PEM e DER per i certificati?',
      a3: 'PEM (Privacy Enhanced Mail) e DER (Distinguished Encoding Rules) sono due formati comuni per i certificati X.509. Il <strong>formato PEM</strong> è codificato in Base64, inizia con "-----BEGIN CERTIFICATE-----" ed è leggibile dall\'uomo. Viene comunemente usato su server web e nelle email. Il <strong>formato DER</strong> è una codifica binaria, non leggibile dall\'uomo ma più compatta. Il nostro strumento di analisi supporta automaticamente entrambi i formati, rilevando e decodificando il formato appropriato senza necessità di selezione manuale.',
      q4: 'Come posso verificare se il mio certificato supporta specifiche funzionalità TLS?',
      a4: 'Per verificare il supporto a funzionalità TLS nel certificato, usa il nostro analizzatore per controllare le estensioni <strong>Utilizzo Esteso Chiave</strong> e <strong>Utilizzo Chiave</strong>. Per l\'autenticazione server (server web), cerca il valore "Autenticazione Server" (1.3.6.1.5.5.7.3.1) nell\'utilizzo esteso chiave. L\'estensione Utilizzo Chiave indica le operazioni permesse, come firma digitale o cifratura chiave. Inoltre, controlla l\'algoritmo di firma per assicurarti che utilizzi algoritmi moderni e sicuri (come SHA-256 con RSA o ECDSA) anziché algoritmi obsoleti (come SHA-1 o MD5).',
      q5: 'Cosa devo fare se il mio certificato sta per scadere?',
      a5: 'Se il nostro <strong>Analizzatore Certificati</strong> mostra che il tuo certificato sta per scadere (tipicamente entro 30 giorni), dovresti rinnovarlo immediatamente tramite il tuo provider di certificati o autorità di certificazione. Il processo di rinnovo solitamente include: 1) generare una nuova richiesta di firma certificato (CSR), 2) inviarla alla tua CA, 3) completare i requisiti di verifica, e 4) installare il nuovo certificato sul server. Raccomandiamo di iniziare questo processo almeno 2-4 settimane prima della scadenza per evitare interruzioni del servizio o avvisi di sicurezza per gli utenti.'
    },
    tutorial: {
      title: 'Come usare l\'Analizzatore Certificati X.509',
      step1: {
        title: 'Carica o incolla il tuo certificato',
        content: 'Inizia caricando il file del certificato (.crt, .cer, .pem o .der) tramite il caricatore di file, oppure incolla direttamente il testo del certificato in formato PEM nell\'area di input. Il nostro strumento supporta il drag-and-drop per un caricamento semplificato dei file. Se non hai un certificato da analizzare, puoi cliccare il pulsante "Carica Esempio" per vedere come lo strumento elabora un certificato dimostrativo.'
      },
      step2: {
        title: 'Analizza il certificato',
        content: 'Dopo aver caricato il certificato, clicca il pulsante "Analizza Certificato". Il nostro strumento rileverà automaticamente il formato (PEM o DER) e analizzerà i dati del certificato. L\'elaborazione avviene completamente nel tuo browser, garantendo che i dati del certificato non lascino il tuo dispositivo - rendendolo una scelta sicura per analizzare certificati sensibili.'
      },
      step3: {
        title: 'Esamina i dettagli del certificato',
        content: 'Dopo l\'analisi, lo strumento mostrerà informazioni complete sul certificato in schede facilmente navigabili. La scheda "Informazioni Base" mostra dettagli fondamentali come periodo di validità, numero seriale e algoritmo di firma. Indicatori visivi mostrano chiaramente se il certificato è valido, in scadenza o scaduto. Puoi esplorare informazioni più dettagliate nelle schede dedicate, tra cui soggetto ed emittente, estensioni, chiave pubblica e altro.'
      },
      step4: {
        title: 'Esporta e scarica report',
        content: 'Per salvare o condividere la tua analisi, usa le funzioni di esportazione nella sezione dei risultati. Puoi scaricare report completi in diversi formati (PDF, TXT, HTML o JSON), oppure copiare sezioni specifiche negli appunti. Questi report sono utili per documentazione, conformità o condivisione con membri del team durante la risoluzione di problemi.'
      }
    },
    resources: {
      title: 'Risorse Aggiuntive',
      intro: 'Espandi la tua conoscenza sui certificati X.509 e argomenti correlati con queste risorse utili:',
      relatedTools: 'Strumenti correlati per la sicurezza',
      tool1: 'Generatore Hash - Crea hash crittografici per la verifica dei dati',
      tool2: 'Codificatore/Decodificatore Base64 - Converti tra formati binari e Base64',
      tool3: 'Decodificatore JWT - Analizza JSON Web Token usati per l\'autenticazione',
      externalLinks: 'Riferimenti Esterni',
      external1: 'IETF RFC 5280 - Certificati per infrastrutture a chiave pubblica X.509',
      external2: 'Wikipedia - Panoramica sullo standard X.509',
      external3: 'SSL.com - Cos\'è un certificato X.509?'
    },
    conclusion: {
      title: 'Conclusione',
      content: '<strong>L\'Analizzatore Certificati X.509</strong> è uno strumento essenziale per chiunque lavori con certificati digitali e comunicazioni sicure. Fornendo informazioni chiare e dettagliate sulla struttura e validità dei certificati, il nostro strumento ti aiuta a garantire che le implementazioni SSL/TLS siano sicure e prive di errori. Che tu sia un professionista della sicurezza che conduce audit, uno sviluppatore web che risolve problemi HTTPS, o un amministratore IT che gestisce deployment di certificati, questo analizzatore semplifica l\'analisi dei certificati e migliora le tue pratiche di sicurezza.'
    }
  },
}