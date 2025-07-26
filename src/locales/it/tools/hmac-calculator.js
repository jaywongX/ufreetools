export default {
  name: 'Calcolatore HMAC',
  description: 'Calcola l\'HMAC (Hash-based Message Authentication Code) dei dati',
  title: 'Strumento per il calcolo del codice di autenticazione del messaggio HMAC',
  intro: 'Genera codici di autenticazione del messaggio utilizzando una chiave segreta, supporta diversi algoritmi di hash e formati di output',

  input: {
    title: 'Input',
    message: 'Messaggio',
    messagePlaceholder: 'Inserisci il messaggio da autenticare',
    key: 'Chiave',
    keyLabel: 'Chiave (Secret Key)',
    keyPlaceholder: 'Inserisci la chiave HMAC',
    messageLabel: 'Messaggio (Message)',
    messageLongPlaceholder: 'Inserisci il messaggio per cui calcolare l\'HMAC',
    file: 'File',
    text: 'Testo',
    fileSelect: 'Seleziona file',
    fileDrop: 'o trascina il file qui',
    fileSelected: 'File selezionato: {name}',
    clearFile: 'Elimina file',
    encoding: 'Codifica input',
    keyEncoding: 'Codifica chiave',
    outputFormat: 'Formato output',
    inputType: 'Tipo di input',
    utf8: 'UTF-8',
    ascii: 'ASCII',
    base64: 'Base64',
    hex: 'Esadecimale',
    binary: 'Binario',
    calculate: 'Calcola HMAC',
    calculating: 'Calcolo in corso...',
    clear: 'Pulisci tutto'
  },

  algorithms: {
    title: 'Algoritmi',
    label: 'Algoritmo di hash',
    hmacMd5: 'HMAC-MD5',
    hmacSha1: 'HMAC-SHA1',
    hmacSha224: 'HMAC-SHA224',
    hmacSha256: 'HMAC-SHA256',
    hmacSha384: 'HMAC-SHA384',
    hmacSha512: 'HMAC-SHA512',
    hmacRipemd160: 'HMAC-RIPEMD160',
    hmacSm3: 'HMAC-SM3'
  },

  result: {
    title: 'Risultato HMAC',
    digest: 'Digest HMAC',
    outputLabel: 'Risultato HMAC',
    copy: 'Copia',
    copied: 'Copiato!',
    noResult: 'Inserisci messaggio e chiave per calcolare l\'HMAC',
    calculating: 'Calcolo in corso...',
    placeholder: 'Il risultato HMAC apparirà qui',
    useExample: 'Usa esempio',
    jsExample: 'Esempio JavaScript:',
  },

  validation: {
    title: 'Validazione HMAC',
    hmacToVerify: 'HMAC da verificare',
    verifyPlaceholder: 'Inserisci l\'HMAC da verificare',
    verify: 'Verifica HMAC',
    valid: 'HMAC valido',
    invalid: 'HMAC non valido',
    verifying: 'Verifica in corso...'
  },

  options: {
    title: 'Opzioni',
    uppercase: 'Output in maiuscolo',
    showDetails: 'Mostra dettagli tecnici',
    autoUpdate: 'Aggiornamento automatico',
    truncate: 'Tronca output',
    truncateLength: 'Lunghezza troncamento'
  },

  details: {
    title: 'Dettagli tecnici',
    algorithm: 'Algoritmo',
    keyLength: 'Lunghezza chiave',
    blockSize: 'Dimensione blocco',
    outputLength: 'Lunghezza output',
    execution: 'Tempo esecuzione',
    ms: 'millisecondi'
  },

  messages: {
    noMessage: 'Inserisci un messaggio',
    noKey: 'Inserisci una chiave',
    invalidEncoding: 'Formato di codifica non valido',
    processingError: 'Errore di elaborazione: {error}',
    success: 'Calcolo HMAC completato',
    invalidKey: 'Formato chiave non valido per la codifica selezionata',
    fileTooBig: 'File troppo grande. Dimensione massima 5MB',
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    invalidHex: 'La chiave non è in formato esadecimale valido',
    invalidBase64: 'La chiave non è in formato Base64 valido',
  },

  security: {
    title: 'Note di sicurezza',
    keyStorage: 'Non condividere mai la tua chiave',
    keyStrength: 'Usa chiavi forti e univoche per ogni applicazione',
    recommendation: 'Per applicazioni critiche, usa almeno HMAC-SHA256',
    warning: 'HMAC-MD5 e HMAC-SHA1 potrebbero non essere adatti per applicazioni ad alta sicurezza'
  }
};