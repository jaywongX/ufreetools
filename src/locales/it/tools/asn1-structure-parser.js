export default {
    name: "Analizzatore Strutturale ASN.1",
    description: "Uno strumento completo per decodificare, visualizzare e analizzare strutture dati codificate ASN.1 utilizzate in crittografia, telecomunicazioni e protocolli di rete. Supporta formati PEM, HEX, Base64 e DER, con visualizzazione ad albero interattiva e multiple opzioni di esportazione.",
    input: "Dati di input",
    output: "Struttura analizzata",
    inputFormat: "Formato input",
    inputPlaceholder: "Inserisci dati ASN.1 nel formato selezionato...",
    loadExample: "Carica esempio",
    clickToUpload: "Clicca per caricare file",
    orDragDrop: "o trascina e rilascia",
    supportedFormats: "Supporta file PEM, DER, HEX, Base64",
    showHexDump: "Mostra hex dump",
    trimLargeData: "Tronca valori grandi",
    useDefinitionFile: "Usa file di definizione ASN.1 per l'analisi",
    error: "Errore",
    noData: "Nessun dato ASN.1 da visualizzare. Inserisci dati nell'area di input o carica un file.",
    treeStructure: "Struttura ad albero ASN.1",
    hexDump: "Hex dump",
    parseError: "Analisi dati ASN.1 fallita. Verifica il formato e i dati inseriti.",
    invalidPEM: "Formato PEM non valido. Assicurati di includere i marcatori BEGIN/END corretti.",
    invalidHex: "Dati esadecimali non validi. Sono ammessi solo caratteri 0-9, A-F.",
    invalidBase64: "Dati Base64 non validi.",
    derTextNotSupported: "Il formato DER non può essere inserito come testo. Carica un file DER.",
    unsupportedFormat: "Formato di input non supportato selezionato.",
    unexpectedEOF: "Fine dati inaspettata durante l'analisi della struttura ASN.1.",
    lengthTooLong: "Campo lunghezza ASN.1 troppo grande per essere elaborato.",
    fileReadError: "Errore durante la lettura del file caricato.",
    fileTooLarge: "File troppo grande. Dimensione massima: 10MB.",

    // Descrizioni funzionalità
    featureHeading: "Funzionalità principali",
    feature1: "Supporto multipli formati: analizza dati ASN.1 in formati PEM, HEX, Base64 o DER",
    feature2: "Visualizzazione ad albero interattiva: esplora la struttura ASN.1 con nodi espandibili",
    feature3: "Visualizzazione hex dump: vedi i byte grezzi con evidenziazione al passaggio del mouse",
    feature4: "Analisi OID: gli identificatori di oggetto comuni mostrano il loro nome",
    feature5: "Gestione dati grandi: opzione per troncare valori grandi e migliorare la leggibilità",

    // Applicazioni comuni ASN.1
    applicationsHeading: "Applicazioni comuni",
    application1: "Certificati X.509: visualizza e analizza la struttura di certificati SSL/TLS",
    application2: "File PKCS: esamina formati di chiavi private, richieste certificati e archivi",
    application3: "CMS/PKCS#7: analizza strutture dati firmate e crittografate",
    application4: "SNMP MIB: decodifica dati del protocollo SNMP",

    // Istruzioni
    instructionsHeading: "Come usare",
    step1: "Seleziona il formato dei dati di input (PEM, HEX, Base64, DER)",
    step2: "Inserisci i dati nell'area testo o carica un file",
    step3: "L'analizzatore elaborerà automaticamente i dati e mostrerà la struttura",
    step4: "Esplora l'albero ASN.1 espandendo/collassando i nodi",
    step5: "Passa il mouse sui nodi per evidenziare i byte corrispondenti nell'hex dump",

    // Esportazione
    exportAsJson: "Esporta come JSON",
    exportFormat: "Formato esportazione",
    exportSuccess: "Struttura esportata con successo",
    exportFailed: "Esportazione struttura fallita",
    noDataToExport: "Nessun dato da esportare",
    copiedToClipboard: "Copiato negli appunti",
    copyFailed: "Copia fallita",
    hexSeparator: "Separatore esadecimale",
    none: "Nessuno",
    space: "Spazio",
    colon: "Due punti",
    dash: "Trattino",
    dot: "Punto",
    colorHighlight: "Colorazione per tipo",
    settings: "Impostazioni",
    displayOptions: "Opzioni visualizzazione",
    advancedOptions: "Opzioni avanzate",
    expandAllNodes: "Espandi tutti i nodi",
    hexDumpDisabled: "Visualizzazione hex dump disabilitata. Abilitala nelle impostazioni per vedere i byte grezzi.",
    copyValue: "Copia valore",
    expandAll: "Espandi tutto",
    collapseAll: "Collassa tutto",
    autoScroll: "Scorrimento automatico",
    article: {
        title: "Analizzatore Strutturale ASN.1 - Decodifica e visualizza dati codificati ASN.1",

        // Sezione introduzione
        introTitle: "Cos'è un analizzatore strutturale ASN.1?",
        introPara1: "L'analizzatore strutturale ASN.1 è uno strumento avanzato per decodificare e visualizzare strutture dati codificate in Abstract Syntax Notation One (ASN.1). ASN.1 è un linguaggio standard per descrivere strutture dati che possono essere serializzate e deserializzate tra diverse piattaforme, ampiamente usato in telecomunicazioni e reti, specialmente nei protocolli crittografici.",
        introPara2: "Il nostro analizzatore offre un metodo interattivo per esaminare complesse strutture ASN.1, supportando formati di input come PEM, HEX, Base64 e DER. La visualizzazione ad albero permette di esplorare facilmente elementi ASN.1 annidati, risultando prezioso per sviluppatori, ricercatori di sicurezza e ingegneri di rete.",

        applicationTitle: "Applicazioni comuni dell'analizzatore ASN.1",
        application1: "<strong>Analisi certificati X.509</strong>: esamina struttura e contenuto di certificati SSL/TLS per audit di sicurezza e troubleshooting.",
        application2: "<strong>Ispezione file PKCS</strong>: analisi dettagliata di chiavi private, richieste di certificazione e formati di archiviazione.",
        application3: "<strong>Cryptographic Message Syntax (CMS)</strong>: esamina strutture dati firmate e crittografate usate nei protocolli di messaggistica sicura.",
        application4: "<strong>Analisi protocolli di rete</strong>: decodifica dati ASN.1 usati in protocolli come SNMP, LDAP e H.323.",
        introPara3: "L'analisi strutturale ASN.1 è essenziale per comprendere i complessi formati dati usati nei moderni sistemi di sicurezza. Il nostro analizzatore rende questo processo intuitivo con visualizzazione a colori, alberi espandibili e hex dump dei dati codificati.",

        // Sezione FAQ
        faqTitle: "Domande frequenti sull'analizzatore strutturale ASN.1",

        faq1Question: "Quali formati accetta l'analizzatore ASN.1?",
        faq1Answer: "Il nostro strumento supporta vari formati di input tra cui PEM (Privacy Enhanced Mail), HEX (esadecimale), Base64 e file binari DER (Distinguished Encoding Rules). Questa flessibilità ti permette di lavorare con dati ASN.1 da diverse fonti senza bisogno di strumenti di conversione.",

        faq2Question: "Come analizzare un certificato X.509 con l'analizzatore ASN.1?",
        faq2Answer: "Per analizzare un certificato X.509, seleziona 'PEM' come formato input e incolla il tuo certificato (includendo i marcatori BEGIN/END CERTIFICATE) nell'area di input. L'analizzatore decodificherà automaticamente la struttura mostrandola come albero interattivo, permettendoti di espandere nodi ed esaminare campi specifici come soggetto, emittente, validità ed estensioni.",

        faq3Question: "Posso esportare la struttura ASN.1 analizzata per documentazione?",
        faq3Answer: "Sì, puoi esportare la struttura ASN.1 analizzata come JSON cliccando il pulsante \"Esporta come JSON\" nel pannello impostazioni. Questa funzione è utile per documentare strutture, condividerle con colleghi o elaborare ulteriormente i dati strutturati nelle tue applicazioni.",

        faq4Question: "Qual è la differenza tra ASN.1, DER e BER?",
        faq4Answer: "ASN.1 (Abstract Syntax Notation One) è il linguaggio per definire strutture dati, mentre DER (Distinguished Encoding Rules) e BER (Basic Encoding Rules) sono regole specifiche per convertire strutture ASN.1 in formato binario. DER è un sottoinsieme di BER che garantisce un'unica codifica per ogni valore ASN.1, preferito nelle applicazioni crittografiche. Il nostro analizzatore gestisce principalmente strutture ASN.1 codificate DER, le più comuni in ambito sicurezza.",

        faq5Question: "Come gestisce l'analizzatore gli Object Identifier (OID)?",
        faq5Answer: "L'analizzatore riconosce automaticamente gli Object Identifier (OID) comuni, mostrando il loro nome descrittivo accanto al valore numerico. Ad esempio, '1.2.840.113549.1.1.11' verrà visualizzato come 'sha256WithRSAEncryption'. Questa funzionalità facilita la comprensione degli elementi in strutture complesse come certificati X.509 e messaggi crittografati.",

        // Sezione tutorial
        tutorialTitle: "Come usare l'analizzatore strutturale ASN.1",

        step1Title: "Passo 1: Seleziona il formato input",
        step1Content: "Inizia selezionando il formato appropriato per i tuoi dati ASN.1. Usa i pulsanti radio nel pannello input per scegliere tra PEM, HEX, Base64 o DER. Il formato scelto determina come l'analizzatore interpreterà i dati inseriti.",

        step2Title: "Passo 2: Inserisci o carica dati ASN.1",
        step2Content: "Inserisci i tuoi dati codificati ASN.1 nell'area testo, oppure carica un file cliccando nell'area di upload. Per il formato PEM, assicurati di includere i marcatori BEGIN/END corretti. Per input esadecimali, puoi usare vari separatori (spazi, due punti, ecc.) configurabili nel pannello impostazioni.",
        step2Example: "-----BEGIN CERTIFICATE-----\nMIIDazCCAlOgAwIBAgIUXF3AmOAMqvdXdFLJV8C5c9K6cI8wDQYJKoZIhvcNAQEL\n...\n-----END CERTIFICATE-----",

        step3Title: "Passo 3: Esplora la struttura ad albero ASN.1",
        step3Content: "Una volta analizzati i dati, la struttura ad albero ASN.1 apparirà nel pannello in basso a sinistra. Puoi espandere e collassare nodi cliccando sui triangoli. Ogni nodo mostra il tipo (es. SEQUENCE, INTEGER, OBJECT IDENTIFIER) e il valore corrispondente. La codifica a colori aiuta a distinguere i diversi tipi ASN.1.",

        step4Title: "Passo 4: Esamina la rappresentazione esadecimale",
        step4Content: "Se l'opzione \"Mostra hex dump\" è abilitata, il pannello destro mostrerà i byte grezzi dei dati ASN.1. Passando il mouse sugli elementi dell'albero, verranno evidenziati i byte corrispondenti nell'hex dump, aiutandoti a comprendere la struttura binaria codificata.",
        step4Example: "00000000 30 82 03 6a 30 82 02 52 a0 03 02 01 02 02 14 5c 0..j0..R........\\",

        step5Title: "Passo 5: Configura le opzioni di visualizzazione",
        step5Content: "Usa il pannello impostazioni per personalizzare la visualizzazione in base alle tue esigenze. Le opzioni includono mostrare/nascondere l'hex dump, troncare valori grandi per migliorare la leggibilità, selezionare separatori esadecimali e abilitare la colorazione per tipo. Puoi anche espandere tutti i nodi contemporaneamente per una visione completa della struttura.",

        // Sezione risorse
        resourcesTitle: "Risorse aggiuntive",

        relatedToolsTitle: "Strumenti correlati",
        relatedTool1: "Convertitore Base64 - Codifica e decodifica dati Base64",
        relatedTool2: "Convertitore Base64/Hex - Conversione facile tra formati Base64 ed esadecimale con supporto per separatori personalizzati e maiuscole/minuscole",
        relatedTool3: "Decodificatore certificati - Analisi dettagliata di certificati X.509",

        externalResourcesTitle: "Risorse esterne",
        externalResource1: "Introduzione ITU-T ASN.1 - Documentazione ufficiale dello standard ASN.1",
        externalResource2: "RFC 5280 - Profilo certificati e CRL per infrastrutture a chiave pubblica X.509"
    },
};