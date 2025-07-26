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
  }
};