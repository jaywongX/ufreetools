export default {
  name: 'Algoritmi di Crittografia Simmetrica',
  description: 'Implementa la crittografia e decrittografia sicura di testo e file, supporta vari algoritmi simmetrici tra cui AES, DES e lo standard cinese SM4',
  encryption: {
    title: 'Crittografia/Decrittografia',
    plaintext: 'Testo in chiaro',
    plaintextPlaceholder: 'Inserisci il testo da cifrare',
    ciphertext: 'Testo cifrato',
    ciphertextPlaceholder: 'I dati crittografati appariranno qui',
    encrypt: 'Cifra',
    decrypt: 'Decifra',
    decrypted: 'Testo decifrato',
    decryptedPlaceholder: 'I dati decifrati appariranno qui',
    encryptSuccess: 'Crittografia riuscita',
    decryptSuccess: 'Decrittografia riuscita',
    encryptError: 'Crittografia fallita: {error}',
    decryptError: 'Decrittografia fallita: {error}'
  },
  algorithm: {
    title: 'Seleziona algoritmo',
    aes: 'AES',
    des: 'DES',
    tripledes: '3DES (Triplo DES)',
    sm4: 'SM4 (Standard cinese)',
    "3des": '3DES (Triplo DES)'
  },
  mode: {
    title: 'Modalità operativa',
    ecb: 'ECB - Electronic Codebook',
    cbc: 'CBC - Cipher Block Chaining',
    cfb: 'CFB - Cipher Feedback',
    ofb: 'OFB - Output Feedback',
    ctr: 'CTR - Counter'
  },
  padding: {
    title: 'Metodo di riempimento',
    pkcs7: 'PKCS7',
    zeroPadding: 'Zero padding',
    zeropadding: 'Zero padding'
  },
  operation: {
    title: 'Tipo operazione',
    encrypt: 'Crittografia',
    decrypt: 'Decrittografia'
  },
  key: {
    title: 'Chiave',
    label: 'Chiave',
    placeholder: 'Inserisci chiave {keySize}',
    placeholderString: 'Inserisci chiave stringa {keySize} (riempimento automatico)',
    placeholderHex: 'Inserisci chiave esadecimale {keySize} (riempimento automatico)',
    placeholderBase64: 'Inserisci chiave Base64 {keySize} (riempimento automatico)',
    generateRandom: 'Genera casuale',
    sizeHint: '{keySize}',
    autoFillHint: 'Le chiavi più corte verranno riempite con zeri, quelle più lunghe verranno troncate'
  },
  iv: {
    title: 'Vettore iniziale (IV)',
    label: 'Vettore iniziale (IV)',
    placeholder: 'Inserisci IV {blockSize}',
    placeholderString: 'Inserisci IV stringa {blockSize} (riempimento automatico)',
    placeholderHex: 'Inserisci IV esadecimale {blockSize} (riempimento automatico)',
    placeholderBase64: 'Inserisci IV Base64 {blockSize} (riempimento automatico)',
    generateRandom: 'Genera casuale',
    sizeHint: '{blockSize}',
    autoFillHint: 'IV più corti verranno riempite con zeri, quelli più lunghi verranno troncati'
  },
  input: {
    title: 'Contenuto da cifrare',
    titleDecrypt: 'Contenuto da decifrare',
    clear: 'Pulisci',
    placeholder: 'Inserisci testo da cifrare',
    placeholderDecrypt: 'Inserisci testo cifrato in formato {format}'
  },
  inputFormat: {
    title: 'Formato input',
    string: 'Stringa',
    hex: 'HEX',
    base64: 'Base64'
  },
  output: {
    title: 'Risultato crittografia',
    titleDecrypt: 'Risultato decrittografia',
    copyResult: 'Copia risultato',
    copied: 'Copiato'
  },
  outputFormat: {
    title: 'Formato output',
    string: 'Stringa',
    hex: 'HEX',
    base64: 'Base64'
  },
  error: {
    title: 'Errore',
    invalidHex: 'La chiave deve essere in formato HEX',
    invalidIvHex: 'L\'IV deve essere in formato HEX',
    invalidHexInput: 'Input HEX non valido',
    invalidBase64: 'Input Base64 non valido',
    unsupportedAlgorithm: 'Algoritmo non supportato',
    decryptionFailed: 'Decrittografia fallita: {message}',
    copyFailed: 'Copia fallita, copia manualmente',
    unknownError: 'Errore durante l\'elaborazione',
    invalidHexFormat: 'Formato HEX non valido',
    invalidBase64Format: 'Formato Base64 non valido',
    emptyBase64: 'Codifica Base64 non valida',
    decryptFailed: 'Decrittografia fallita:'
  },
  info: {
    title: 'Informazioni sugli algoritmi',
    algorithms: {
      aes: 'AES: Advanced Encryption Standard, supporta chiavi a 128, 192 o 256 bit',
      des: 'DES: Data Encryption Standard, chiave a 56 bit, sicurezza limitata',
      tripledes: '3DES: Triplo DES, usa tre chiavi DES a 56 bit per maggiore sicurezza',
      sm4: 'SM4: Standard cinese, cifrario a blocchi con chiave a 128 bit',
      "3des": '3DES: Triplo DES, usa tre chiavi DES a 56 bit per maggiore sicurezza'
    },
    modes: {
      title: 'Spiegazione modalità operative',
      ecb: 'ECB: Modalità base, ogni blocco cifrato indipendentemente (sconsigliato per dati sensibili)',
      cbc: 'CBC: Ogni blocco dipende dal precedente (più sicuro)',
      cfb: 'CFB: Trasforma il cifrario a blocchi in stream cipher',
      ofb: 'OFB: Modalità stream cipher, operazioni identiche per cifratura/decifratura',
      ctr: 'CTR: Ogni blocco cifrato con contatore incrementale (elaborazione parallela possibile)'
    }
  },
  buttons: {
    process: 'Cifra',
    processDecrypt: 'Decifra'
  },
  file: {
    title: 'Crittografia file',
    select: 'Seleziona file',
    drop: 'Oppure trascina qui',
    encrypt: 'Cifra file',
    decrypt: 'Decifra file',
    download: 'Scarica risultato',
    selected: 'Selezionato: {name}',
    size: 'Dimensione: {size}',
    maxSize: 'Dimensione massima: 100MB',
    encryptingFile: 'Crittografia file in corso...',
    decryptingFile: 'Decrittografia file in corso...',
    downloadReady: 'Pronto per il download',
    fileTooBig: 'File troppo grande. Dimensione massima consentita: 100MB.'
  },
  options: {
    title: 'Opzioni',
    autoDecrypt: 'Decifra automaticamente dopo la cifratura',
    includeMeta: 'Includi metadati algoritmo nell\'output',
    kdf: 'Funzione di derivazione chiave',
    pbkdf2: 'PBKDF2',
    scrypt: 'scrypt',
    argon2: 'Argon2id',
    salt: 'Sale (per derivazione chiave)',
    saltPlaceholder: 'Inserisci sale in HEX o lascia vuoto per generazione casuale',
    autoClear: 'Cancella automaticamente dati sensibili',
    saveSettings: 'Salva impostazioni'
  },
  security: {
    title: 'Informazioni sicurezza',
    description: 'Sulla sicurezza della crittografia',
    warning: 'Avviso',
    ecbInsecure: 'La modalità ECB non è raccomandata per applicazioni sicure.',
    useModern: 'Per dati sensibili, usa AES-256 con modalità GCM o CBC.',
    keyWarning: 'Proteggi le tue chiavi crittografiche. Se perse, i dati saranno irrecuperabili.',
    browserWarning: 'La crittografia via browser è comoda ma può non essere adatta per dati molto sensibili.',
    learnMore: 'Scopri di più sulla crittografia'
  },
  messages: {
    noAlgorithm: 'Seleziona un algoritmo di crittografia',
    noKey: 'Inserisci una chiave o password',
    invalidKeyLength: 'Lunghezza chiave non valida per l\'algoritmo selezionato',
    invalidIv: 'Lunghezza IV non valida per l\'algoritmo/modalità selezionati',
    noData: 'Inserisci dati da cifrare/decifrare',
    padError: 'Errore padding - chiave o dati potrebbero essere errati',
    fileSuccess: 'Elaborazione file completata',
    fileError: 'Errore elaborazione file: {error}',
    clipboardError: 'Errore copia negli appunti: {error}',
    invalidFormat: 'Formato input non valido'
  },
  article: {
    title: "Algoritmi di Crittografia Simmetrica: Strumento Completo per la Sicurezza dei Dati",
    features: {
      title: "Funzionalità della Crittografia Simmetrica",
      description: "Il <strong>tool di crittografia simmetrica</strong> è un potente <strong>strumento crittografico</strong> che protegge dati sensibili utilizzando vari algoritmi standard del settore. A differenza della crittografia asimmetrica che utilizza coppie di chiavi, la crittografia simmetrica usa una singola <strong>chiave</strong> sia per cifrare che per decifrare. Il nostro tool supporta diversi algoritmi tra cui <strong>AES (Advanced Encryption Standard)</strong>, <strong>DES (Data Encryption Standard)</strong>, <strong>3DES (Triple DES)</strong> e <strong>SM4 (standard cinese)</strong>.<br><br>Le funzionalità principali includono la crittografia di testo e file, con opzioni configurabili come <strong>modalità di cifratura</strong> (CBC, ECB, CFB, OFB, CTR), <strong>metodi di padding</strong> e formati di input/output flessibili. Questo <strong>strumento di crittografia dati</strong> offre un'interfaccia user-friendly che permette di implementare forti misure di sicurezza senza richiedere approfondite conoscenze crittografiche, rendendo la crittografia avanzata accessibile a tutti mantenendo alti standard di sicurezza.",
      useCases: {
        title: "Casi d'Uso della Crittografia Simmetrica",
        items: [
          "<strong>Condivisione sicura di file</strong>: Cifra documenti, fogli di calcolo o file multimediali sensibili prima di condividerli su canali potenzialmente insicuri. I destinatari con la chiave corretta possono facilmente decifrarli e accedere ai contenuti originali.",
          "<strong>Gestione password</strong>: Crea un archivio cifrato per le tue credenziali. Cifrando queste informazioni sensibili con una password principale, puoi mantenere una collezione sicura di dati di accesso.",
          "<strong>Autenticazione API</strong>: Genera e verifica token cifrati per sistemi di autenticazione API. La crittografia simmetrica offre un buon equilibrio tra sicurezza e prestazioni.",
          "<strong>Crittografia campi database</strong>: Proteggi campi sensibili nei database senza dover riprogettare l'intero sistema. I <strong>cifrari simmetrici</strong> permettono di cifrare selettivamente informazioni critiche.",
          "<strong>Sicurezza configurazioni</strong>: Cifra file di configurazione contenenti credenziali sensibili come password di database o chiavi API.",
          "<strong>Canali di comunicazione sicuri</strong>: Implementa comunicazioni end-to-end generando chiavi simmetriche per ogni sessione."
        ]
      }
    },
    faq: {
      title: "Domande Frequenti sulla Crittografia Simmetrica",
      items: [
        {
          question: "Quali sono le differenze tra AES, DES, 3DES e SM4?",
          answer: "Questi sono diversi <strong>algoritmi di crittografia simmetrica</strong> con diversi livelli di sicurezza. <strong>AES</strong> è lo standard globale attuale, <strong>DES</strong> è un algoritmo più vecchio considerato insicuro, <strong>3DES</strong> migliora DES applicandolo tre volte, mentre <strong>SM4</strong> è lo standard cinese con sicurezza comparabile ad AES."
        },
        {
          question: "Quale modalità di cifratura devo scegliere?",
          answer: "La scelta della <strong>modalità di cifratura</strong> dipende dalle tue esigenze. <strong>ECB</strong> è la più semplice ma meno sicura. <strong>CBC</strong> è più sicuro richiedendo un vettore di inizializzazione (IV). <strong>CFB</strong>, <strong>OFB</strong> e <strong>CTR</strong> trasformano il cifrario a blocchi in uno stream cipher. Per dati sensibili, CBC con IV casuale offre un buon equilibrio."
        },
        {
          question: "Questo tool online è sicuro per dati sensibili?",
          answer: "Questo <strong>tool di crittografia basato su browser</strong> elabora tutto localmente senza inviare dati a server esterni, fornendo un livello base di confidenzialità. Per dati estremamente sensibili, considera software dedicati con migliori garanzie di sicurezza."
        },
        {
          question: "Come gestire e condividere le chiavi in modo sicuro?",
          answer: "La <strong>gestione sicura delle chiavi</strong> è cruciale. Non condividere mai chiavi attraverso lo stesso canale dei dati cifrati. Usa canali separati, considera lo splitting delle chiavi o protocolli di scambio chiavi asimmetrici per maggiore sicurezza."
        },
        {
          question: "Come verificare l'integrità dei dati cifrati?",
          answer: "La <strong>crittografia simmetrica</strong> standard garantisce confidenzialità ma non integrità. Per verificare che i dati non siano stati modificati, usa modalità di cifratura autenticate o calcola separatamente hash crittografici dei dati prima e dopo la cifratura."
        }
      ]
    },
    guide: {
      title: "Guida all'Uso dello Strumento di Crittografia",
      steps: [
        "<strong>Seleziona algoritmo</strong>: Scegli tra AES (raccomandato), DES, 3DES o SM4 in base a requisiti di sicurezza e compatibilità.",
        "<strong>Scegli modalità operativa</strong>: Seleziona tra ECB, CBC, CFB, OFB o CTR. Per uso generico, CBC con IV casuale è una buona scelta.",
        "<strong>Configura padding</strong>: Se necessario, scegli tra PKCS7 o zero padding per gestire dati la cui lunghezza non è multipla della dimensione del blocco.",
        "<strong>Inserisci/genera chiave</strong>: Inserisci una chiave personalizzata o genera una chiave crittografica sicura. Per AES, la lunghezza può essere 16, 24 o 32 byte.",
        "<strong>Fornisci IV se necessario</strong>: Per modalità diverse da ECB, fornisci un vettore di inizializzazione. Generane uno casuale o inseriscilo manualmente.",
        "<strong>Inserisci dati</strong>: Inserisci il testo da cifrare nel campo di input, specificando il formato appropriato (stringa, HEX o Base64).",
        "<strong>Elabora e usa i risultati</strong>: Clicca 'Cifra' o 'Decifra' per elaborare i dati. I risultati verranno mostrati nel formato di output specificato."
      ]
    },
    conclusion: "Lo strumento di crittografia simmetrica offre un modo potente e semplice per proteggere informazioni sensibili utilizzando algoritmi standard del settore. Seguendo appropriate pratiche di sicurezza e comprendendo le opzioni disponibili, puoi implementare efficacemente una forte crittografia per varie applicazioni. Mentre questo tool basato su browser offre convenienza e flessibilità per molte esigenze crittografiche, ricorda che applicazioni critiche per la sicurezza potrebbero richiedere soluzioni dedicate con infrastrutture di gestione chiavi appropriate."
  }
}