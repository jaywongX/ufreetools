export default {
  name: 'Calcolatore di Hash Online | Supporta SHA-256, MD5, SHA-3, BLAKE3, SM3 e altri algoritmi',
  description: 'Calcolatore di hash online gratuito che supporta algoritmi di crittografia e verifica come SHA-256, MD5, SHA-3, BLAKE3, SM3, utile per verifiche di integrità file ed elaborazione dati sicura.',

  input: {
    title: 'Input',
    text: 'Input testo',
    file: 'Input file',
    textPlaceholder: 'Inserisci qui il testo da cui calcolare l\'hash...',
    fileSelect: 'Seleziona file',
    fileDrop: 'Trascina qui un file o clicca per caricare',
    fileSelected: 'File selezionato: {name}',
    fileSize: '{size}',
    removeFile: 'Rimuovi file',
    localProcessing: 'Il file verrà elaborato localmente, non caricato sul server',
    encoding: 'Codifica',
    selectAlgorithm: 'Seleziona algoritmo hash',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    latin1: 'Latin1',
    calculate: 'Calcola hash',
    calculating: 'Calcolo in corso...',
    clear: 'Pulisci input',
    hashValue: 'Valore hash'
  },

  algorithms: {
    title: 'Algoritmi',
    selectAll: 'Seleziona tutto',
    deselectAll: 'Deseleziona tutto',
    md5: 'MD5',
    sha1: 'SHA-1',
    sha224: 'SHA-224',
    sha256: 'SHA-256',
    sha384: 'SHA-384',
    sha512: 'SHA-512',
    sha3_224: 'SHA3-224',
    sha3_256: 'SHA3-256',
    sha3_384: 'SHA3-384',
    sha3_512: 'SHA3-512',
    ripemd160: 'RIPEMD-160',
    blake2b: 'BLAKE2b',
    blake2s: 'BLAKE2s',
    blake3: 'BLAKE3',
    keccak224: 'Keccak-224',
    keccak256: 'Keccak-256',
    keccak384: 'Keccak-384',
    keccak512: 'Keccak-512',
    whirlpool: 'Whirlpool',
    crc32: 'CRC32',
    hmac: 'Opzioni HMAC',
    key: 'Chiave HMAC',
    keyPlaceholder: 'Inserisci chiave HMAC'
  },

  results: {
    title: 'Risultati hash',
    algorithm: 'Algoritmo',
    digest: 'Digest',
    noInput: 'Inserisci testo o seleziona un file per calcolare l\'hash',
    calculating: 'Calcolo in corso...',
    copy: 'Copia',
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    copyAll: 'Copia tutto',
    download: 'Scarica risultati',
    fileInfo: 'Informazioni file',
    fileName: 'Nome',
    fileSize: 'Dimensione',
    fileType: 'Tipo',
    lastModified: 'Ultima modifica',
    hexFormat: 'Formato esadecimale',
    base64Format: 'Formato Base64',
    upperHexFormat: 'Formato esadecimale maiuscolo',
    hashValue: 'Valore hash',
    allHashesTitle: 'Risultati per tutti gli algoritmi',
    export: 'Esporta CSV',
    copyToClipboard: 'Copia negli appunti',
  },

  verification: {
    title: 'Verifica hash',
    inputVerifyHash: 'Inserisci hash da verificare',
    placeholder: 'Inserisci hash per confronto...',
    paste: 'Incolla hash per verifica',
    matches: 'Hash corrispondente!',
    doesNotMatch: 'Hash non corrispondente',
    notFound: 'Algoritmo non trovato',
    verify: 'Verifica',
    autoDetect: 'Rilevamento automatico algoritmo',
    result: 'Risultato verifica'
  },

  options: {
    title: 'Opzioni',
    uppercase: 'Output maiuscolo',
    showTiming: 'Mostra tempi di calcolo',
    autoCalculate: 'Calcolo automatico',
    formatOutput: 'Formatta output lungo',
    binaryOutput: 'Vista binaria (per file non testuali)',
    compareHashes: 'Confronta hash',
    hmacMode: 'Abilita modalità HMAC',
    showAllHashes: 'Mostra hash per tutti gli algoritmi'
  },

  tools: {
    title: 'Strumenti',
    batchProcessing: 'Elaborazione batch',
    fileHashTool: 'Strumento hash per file',
    hashIdentifier: 'Identificatore tipo hash',
    hmacGenerator: 'Generatore HMAC',
    checksumVerifier: 'Verificatore checksum',
    passwordHasher: 'Generatore hash password'
  },

  batchTool: {
    title: 'Elaborazione batch',
    addFiles: 'Aggiungi file',
    processFiles: 'Elabora file',
    clearAll: 'Pulisci tutto',
    fileName: 'Nome file',
    algorithm: 'Algoritmo',
    status: 'Stato',
    actions: 'Azioni',
    waiting: 'In attesa',
    processing: 'In elaborazione',
    complete: 'Completato',
    failed: 'Fallito',
    remove: 'Rimuovi',
    filesSelected: '{count} file selezionati',
    exportResults: 'Esporta risultati',
    selectAlgorithm: 'Seleziona algoritmo per tutti i file'
  },

  messages: {
    fileTooBig: 'File troppo grande. Dimensione massima consentita: 100MB.',
    hashCalculated: 'Hash calcolato con successo',
    invalidInput: 'Input non valido',
    readError: 'Impossibile leggere il file',
    processingError: 'Errore durante l\'elaborazione del file: {error}',
    algorithmNotAvailable: 'Algoritmo non disponibile. Installa le librerie necessarie.',
    algorithmFallback: '{algorithm} non disponibile, utilizzo {fallback} come alternativa',
    moduleNotReady: 'Modulo {name} non pronto',
    algorithmError: 'Errore {algorithm}: {error}'
  },

  security: {
    warning: 'Utilizzare strumenti hash su connessioni HTTP non sicure comporta rischi per la sicurezza'
  },

  algorithmDetails: {
    title: 'Informazioni sugli algoritmi hash',
    usage: 'Utilizzi comuni',
    safe: 'Sicurezza',
    md2: {
      name: 'MD2 (128 bit)',
      description: 'MD2 è una funzione hash ampiamente utilizzata che produce un valore hash di 128 bit (16 byte), tipicamente rappresentato come 32 caratteri esadecimali.',
      usage: 'Verifica integrità file, memorizzazione password (non sicuro)',
      security: 'Dimostrato vulnerabile a collisioni; non utilizzare in contesti sensibili.'
    },
    md4: {
      name: 'MD4 (128 bit)',
      description: 'MD4 è una funzione hash ampiamente utilizzata che produce un valore hash di 128 bit (16 byte), tipicamente rappresentato come 32 caratteri esadecimali.',
      usage: 'Verifica integrità file, memorizzazione password (non sicuro)',
      security: 'Dimostrato vulnerabile a collisioni; non utilizzare in contesti sensibili.'
    },
    md5: {
      name: 'MD5 (128 bit)',
      description: 'MD5 è una funzione hash ampiamente utilizzata che produce un valore hash di 128 bit (16 byte), tipicamente rappresentato come 32 caratteri esadecimali.',
      usage: 'Verifica integrità file, memorizzazione password (non sicuro)',
      security: 'Dimostrato vulnerabile a collisioni; non utilizzare in contesti sensibili.'
    },
    sha1: {
      name: 'SHA-1 (160 bit)',
      description: 'SHA-1 è una funzione hash crittografica che produce un valore hash di 160 bit (20 byte), tipicamente rappresentato come 40 caratteri esadecimali.',
      usage: 'Sistemi di controllo versione (es. Git), verifica integrità file',
      security: 'Dimostrato vulnerabile ad attacchi collisione; sconsigliato per applicazioni critiche.'
    },
    sha224: {
      name: 'SHA-224 (224 bit)',
      description: 'SHA-224 fa parte della famiglia SHA-2 e genera un hash di 224 bit (28 byte).',
      usage: 'Adatto a contesti con limitazioni di spazio ma che richiedono buona sicurezza',
      security: 'Offre buona sicurezza, è una versione troncata di SHA-256'
    },
    sha256: {
      name: 'SHA-256 (256 bit)',
      description: 'SHA-256 appartiene alla famiglia SHA-2 e produce un valore hash di 256 bit (32 byte), tipicamente rappresentato come 64 caratteri esadecimali.',
      usage: 'Firme digitali, certificati digitali, memorizzazione password, blockchain',
      security: 'Attualmente considerato sicuro, ampiamente utilizzato in contesti ad alta sicurezza.'
    },
    dsha256: {
      name: 'Double SHA-256',
      description: 'Double SHA-256 è una funzione hash crittografica che applica SHA-256 due volte consecutivamente, cioè SHA-256(SHA-256(x)).',
      usage: 'Utilizzato in Bitcoin e altre criptovalute per hash di blocchi, ID transazioni e generazione indirizzi',
      security: 'Offre le stesse garanzie di sicurezza di SHA-256 standard, ma con un ulteriore livello di protezione che rende più difficile risalire all\'input originale tramite collisioni.'
    },
    sha384: {
      name: 'SHA-384 (384 bit)',
      description: 'SHA-384 è una versione troncata di SHA-512 che produce un hash di 384 bit (48 byte).',
      usage: 'Contesti che richiedono maggiore sicurezza di SHA-256',
      security: 'Offre maggiore sicurezza di SHA-256, nessun attacco noto.'
    },
    sha512: {
      name: 'SHA-512 (512 bit)',
      description: 'SHA-512 è l\'algoritmo più lungo della famiglia SHA-2 e produce un hash di 512 bit (64 byte).',
      usage: 'Applicazioni che richiedono massima sicurezza',
      security: 'Offre il massimo livello di sicurezza, nessun attacco efficace noto.'
    },
    sha512_224: {
      name: 'SHA-512/224 (224 bit)',
      description: 'SHA-512/224 è una variante di SHA-512 con output troncato a 224 bit.',
      usage: 'Fornisce hash della stessa lunghezza di SHA-224 ma basato sulla struttura interna di SHA-512',
      security: 'Migliori prestazioni su dati lunghi mantenendo alta sicurezza'
    },
    sha512_256: {
      name: 'SHA-512/256 (256 bit)',
      description: 'SHA-512/256 è una variante di SHA-512 con output troncato a 256 bit.',
      usage: 'Offre migliori prestazioni di SHA-256 su sistemi a 64 bit',
      security: 'Sicurezza equivalente a SHA-256 ma più efficiente su alcuni hardware'
    },
    sha3_224: {
      name: 'SHA3-224 (224 bit)',
      description: 'SHA3-224 fa parte dello standard SHA-3 e fornisce un output di 224 bit.',
      usage: 'Adatto a contesti che richiedono sicurezza media resistente a computer quantistici',
      security: 'Algoritmo sicuro certificato NIST, offre buone garanzie di sicurezza'
    },
    sha3_256: {
      name: 'SHA3-256 (256 bit)',
      description: 'SHA3-256 fa parte dello standard SHA-3 e ha una struttura interna completamente diversa dalla famiglia SHA-2.',
      usage: 'Applicazioni che richiedono sicurezza a lungo termine resistente a minacce quantistiche',
      security: 'Progettato per resistere a potenziali attacchi futuri, inclusi quelli quantistici.'
    },
    sha3_384: {
      name: 'SHA3-384 (384 bit)',
      description: 'SHA3-384 fa parte dello standard SHA-3 e fornisce un output di 384 bit.',
      usage: 'Contesti che richiedono alta sicurezza e resistenza a computer quantistici',
      security: 'Offre maggiore sicurezza di SHA3-256, adatto a dati sensibili'
    },
    sha3_512: {
      name: 'SHA3-512 (512 bit)',
      description: 'SHA3-512 è l\'algoritmo più sicuro della famiglia SHA-3.',
      usage: 'Contesti che richiedono massima sicurezza e resistenza a computer quantistici',
      security: 'Offre il massimo livello di garanzie di sicurezza, è l\'algoritmo più sicuro della famiglia SHA-3.'
    },
    sm3: {
      name: 'SM3 (256 bit)',
      description: 'SM3 è uno standard di algoritmo hash crittografico rilasciato dall\'Amministrazione cinese per la crittografia, che produce un output di 256 bit.',
      usage: 'Applicazioni crittografiche commerciali cinesi, certificati digitali e sistemi di e-government',
      security: 'Progettato simile a SHA-2 ma con ottimizzazioni per resistere ad attacchi, ampiamente utilizzato in Cina'
    },
    ripemd160: {
      name: 'RIPEMD-160 (160 bit)',
      description: 'RIPEMD-160 è una funzione hash sviluppata dal progetto europeo RIPE che produce un hash di 160 bit.',
      usage: 'Generazione indirizzi Bitcoin, applicazioni blockchain',
      security: 'Più sicuro di SHA-1 a parità di lunghezza, ma meno utilizzato.'
    },
    crc32: {
      name: 'CRC32 (32 bit)',
      description: 'CRC32 è una funzione di controllo ridondanza ciclica, comunemente usata per il rilevamento di errori.',
      usage: 'Verifica integrità dati, comunicazioni di rete, verifica trasmissione dati',
      security: 'Non adatto a contesti crittografici sicuri, principalmente per rilevamento errori'
    },
    murmur3_x86_32: {
      name: 'MurmurHash3 x86 (32 bit)',
      description: 'MurmurHash3 è una funzione hash non crittografica nota per alte prestazioni e basso tasso di collisioni, la versione a 32 bit è adatta per applicazioni che richiedono velocità ed efficienza spaziale.',
      usage: 'Tabelle hash, filtri Bloom, sistemi di cache, partizionamento dati',
      security: 'Algoritmo non crittografico, non adatto a applicazioni di sicurezza ma eccellente per contesti che richiedono prestazioni'
    },
    murmur3_x86_128: {
      name: 'MurmurHash3 x86 (128 bit)',
      description: 'Variante a 128 bit di MurmurHash3, offre uno spazio hash più ampio e minore probabilità di collisioni, adatto a grandi dataset.',
      usage: 'Tabelle hash di grandi dimensioni, deduplicazione dati, hashing consistente in sistemi distribuiti, storage a indirizzamento contenuto',
      security: 'Come la versione a 32 bit è non crittografica, ma con minore probabilità di collisioni, adatta a contesti che richiedono alta unicità'
    },
    murmur3_x64_128: {
      name: 'MurmurHash3 x64 (128 bit)',
      description: 'Variante a 128 bit di MurmurHash3, offre uno spazio hash più ampio e minore probabilità di collisioni, adatto a grandi dataset.',
      usage: 'Tabelle hash di grandi dimensioni, deduplicazione dati, hashing consistente in sistemi distribuiti, storage a indirizzamento contenuto',
      security: 'Come la versione a 32 bit è non crittografica, ma con minore probabilità di collisioni, adatta a contesti che richiedono alta unicità'
    },
    blake2b: {
      name: 'BLAKE2b (512 bit)',
      description: 'BLAKE2b è una funzione hash veloce e sicura ottimizzata per architetture CPU moderne.',
      usage: 'Elaborazione dati su larga scala, tabelle hash, confronto stringhe',
      security: 'Progettato per velocità e buona distribuzione hash, ma non garantisce sicurezza crittografica'
    },
    blake2s: {
      name: 'BLAKE2s (256 bit)',
      description: 'BLAKE2s è una funzione hash veloce e sicura ottimizzata per architetture CPU moderne.',
      usage: 'Elaborazione dati su larga scala, tabelle hash, confronto stringhe',
      security: 'Progettato per velocità e buona distribuzione hash, ma non garantisce sicurezza crittografica'
    },
    blake3: {
      name: 'BLAKE3 (256 bit)',
      description: 'BLAKE3 è una funzione hash veloce e sicura ottimizzata per architetture CPU moderne.',
      usage: 'Elaborazione dati su larga scala, tabelle hash, confronto stringhe',
      security: 'Progettato per velocità e buona distribuzione hash, ma non garantisce sicurezza crittografica'
    },
    keccak224: {
      name: 'Keccak-224 (224 bit)',
      description: 'Keccak-224 è l\'algoritmo originale SHA-3 che produce un hash di 224 bit.',
      usage: 'Applicazioni blockchain come Ethereum, sistemi crittografici',
      security: 'Offre forte sicurezza, nelle tecnologie blockchain è più comune delle varianti SHA-3 standardizzate'
    },
    keccak256: {
      name: 'Keccak-256 (256 bit)',
      description: 'Keccak-256 è la variante più utilizzata della famiglia Keccak e produce un hash di 256 bit.',
      usage: 'Smart contract Ethereum, transazioni blockchain, firme digitali',
      security: 'Ampiamente considerato affidabile nelle applicazioni blockchain, leggermente diverso da SHA3-256 standardizzato'
    },
    keccak384: {
      name: 'Keccak-384 (384 bit)',
      description: 'Keccak-384 è una variante della famiglia Keccak che produce un hash di 384 bit.',
      usage: 'Applicazioni che richiedono maggiore sicurezza di Keccak-256',
      security: 'Offre ottime garanzie di sicurezza, ma meno utilizzato di Keccak-256'
    },
    keccak512: {
      name: 'Keccak-512 (512 bit)',
      description: 'Keccak-512 è l\'algoritmo più lungo della famiglia Keccak e produce un hash di 512 bit.',
      usage: 'Applicazioni ad alta sicurezza che richiedono massima resistenza a collisioni',
      security: 'Nella famiglia Keccak offre il massimo livello di sicurezza, adatto a dati molto sensibili'
    },
    shake128: {
      name: 'SHAKE128 (128 bit)',
      description: 'SHAKE128 fa parte della famiglia SHA-3 e può produrre output di lunghezza variabile, generando per default un hash di 256 bit.',
      usage: 'Applicazioni crittografiche che richiedono output a lunghezza variabile, funzioni di derivazione chiave',
      security: 'Offre buona sicurezza, è un algoritmo hash sicuro riconosciuto dal NIST'
    },
    shake256: {
      name: 'SHAKE256 (256 bit)',
      description: 'SHAKE256 fa parte della famiglia SHA-3 e può produrre output di lunghezza variabile, generando per default un hash di 512 bit.',
      usage: 'Applicazioni ad alta sicurezza che richiedono hash lunghi',
      security: 'Offre maggiori garanzie di sicurezza rispetto a SHAKE128, adatto a dati sensibili'
    },
    cshake128: {
      name: 'cSHAKE128 (output variabile personalizzabile)',
      description: 'cSHAKE128 è una versione personalizzabile di SHAKE128 che supporta stringhe e nomi funzione personalizzati, producendo output a lunghezza variabile.',
      usage: 'Contesti che richiedono parametri hash personalizzati, funzioni di derivazione chiave standard NIST, protocolli crittografici',
      security: 'Offre sicurezza equivalente a SHAKE128 con supporto per personalizzazione a livello applicativo'
    },
    cshake256: {
      name: 'cSHAKE256 (output variabile personalizzabile)',
      description: 'cSHAKE256 è una versione personalizzabile di SHAKE256 che supporta stringhe e nomi funzione personalizzati, producendo output a lunghezza variabile.',
      usage: 'Contesti ad alta sicurezza che richiedono hash personalizzati, funzioni di derivazione certificate NIST, protocolli crittografici',
      security: 'Offre garanzie di sicurezza equivalenti a SHAKE256 con possibilità di parametrizzazione a livello applicativo'
    },
  },

  listGroups: {
    common: 'Algoritmi comuni',
    sha2: 'Famiglia SHA-2',
    sha3: 'Famiglia SHA-3',
    other: 'Altri algoritmi'
  },

  metaTitle: 'Calcolatore Hash Online - Genera e verifica hash crittografici',
  metaDescription: 'Strumento online gratuito per generare e verificare hash crittografici per testo o file. Supporta vari algoritmi tra cui {algorithms}.'
};