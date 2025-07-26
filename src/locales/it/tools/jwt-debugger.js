export default {
  name: 'Strumento di debug JWT',
  description: 'Strumento online per analizzare, validare e debug token JWT',

  sections: {
    encoded: 'JWT codificato',
    decoded: 'JWT decodificato',
    header: 'Header',
    payload: 'Payload',
    signature: 'Firma',
    verification: 'Verifica'
  },

  actions: {
    decode: 'Decodifica',
    verify: 'Verifica firma',
    copy: 'Copia',
    share: 'Condividi token',
    generateToken: 'Genera Token',
    generateRandomToken: 'Token casuale',
    clear: 'Pulisci',
    generateRandomPayload: 'Genera payload casuale',
    generateRandomKey: 'Genera chiave casuale',
    generateKeyPair: 'Genera coppia di chiavi'
  },

  messages: {
    invalidToken: 'Formato JWT non valido',
    copied: 'Copiato negli appunti!',
    copyFailed: 'Copia fallita, copia manualmente',
    verificationSuccess: 'Verifica firma riuscita',
    verificationFailed: 'Verifica firma fallita',
    keyGenerated: 'Coppia di chiavi generata con successo',
    keyGenerationFailed: 'Generazione coppia di chiavi fallita',
    tokenGenerated: 'Token generato con successo',
    tokenGenerationFailed: 'Generazione token fallita',
    randomTokenGenerated: 'Token casuale generato e analizzato con successo',
    certUploadSuccess: 'Certificato caricato con successo',
    certFormatInvalid: 'Formato certificato non valido',
    certReadFailed: 'Lettura certificato fallita',
    tokenFormatError: 'Formato token non valido: il JWT deve contenere tre parti separate da punti',
    tokenHeaderMissingAlg: 'Header del token manca il campo algoritmo (alg)',
    tokenHeaderInvalid: 'Formato header token non valido',
    tokenVerificationFailed: 'Verifica formato token fallita',
    tokenExpired: 'Token scaduto. Scadenza: {time}',
    tokenNotEffective: 'Token non ancora valido. Valido da: {time}',
    tokenIssuedInFuture: 'Data di emissione anomala: nel futuro. Emissione: {time}',
    algorithmNotSupported: 'Algoritmo non supportato',
    randomSecretGenerated: 'Chiave segreta casuale generata con successo',
    randomSecretGenerationFailed: 'Generazione chiave segreta casuale fallita',
    randomPayloadGenerated: 'Payload casuale generato',
    randomPayloadGenerationFailed: 'Generazione payload casuale fallita',
    contentCleared: 'Tutti i contenuti sono stati cancellati',
    tokenDecodeSuccess: 'Token decodificato con successo',
    tokenDecodeFailed: 'Decodifica token fallita',
    pleaseInputKey: 'Inserisci la chiave segreta',
    pleaseGenerateKeyPair: 'Genera prima la coppia di chiavi {type}',
    pleaseInputVerificationKey: 'Inserisci la chiave di verifica',
    pleaseInputPublicKey: 'Inserisci la chiave pubblica di verifica',
    pleaseInputToken: 'Inserisci il token da verificare',
    payloadFormatError: 'Errore formato payload: controlla il formato JSON',
    invalidTimestamp: 'Timestamp non valido'
  },

  placeholders: {
    secretKey: 'Inserisci la chiave segreta',
    privateKey: 'Inserisci o genera una chiave privata',
    publicKey: 'Inserisci o genera una chiave pubblica',
    payload: 'Inserisci il payload in formato JSON',
    token: 'Inserisci o genera un token JWT',
    verificationSecretKey: 'Inserisci la chiave segreta di verifica',
    verificationPublicKey: 'Inserisci la chiave pubblica di verifica'
  },

  labels: {
    algorithm: 'Algoritmo',
    secretKey: 'Chiave segreta',
    privateKey: 'Chiave privata',
    publicKey: 'Chiave pubblica',
    certificate: 'Certificato digitale (opzionale)',
    payload: 'Payload',
    token: 'Token',
    verificationPublicKey: 'Chiave pubblica di verifica',
    tokenResult: 'Risultato analisi token',
    verifyToken: 'Verifica token',
    tokenDecoded: 'Token firmato con algoritmo {alg}',
    timestamp: 'Analisi timestamp',
    issuedAt: 'Data emissione (iat)',
    expiration: 'Data scadenza (exp)',
    notBefore: 'Valido da (nbf)',
    tokenFormat: 'Nessun contenuto',
    tokenFormatDesc: 'Inserisci o genera un token JWT per visualizzare i risultati',
    uploadCert: 'Trascina il certificato o clicca per selezionare',
    certName: 'Nome certificato',
    sm3Fingerprint: 'Impronta SM3 (x5t#sm3)',
    certUploadNote: 'Dopo il caricamento, il campo "x5t#sm3" verrà aggiunto all\'header JWT',
    secondsTimestamp: 'Timestamp in secondi',
    millisecondsTimestamp: 'Timestamp in millisecondi'
  },

  buttons: {
    cancel: 'Annulla',
    verify: 'Verifica',
    clearCert: 'Elimina',
    generateToken: 'Genera Token',
    decodeToken: 'Analizza Token',
    verifyToken: 'Verifica Token',
    close: 'Chiudi'
  },

  verification: {
    success: 'Verifica riuscita',
    failure: 'Verifica fallita',
    validMessage: 'Firma token verificata con successo.',
    invalidMessage: 'Verifica firma token fallita.'
  },

  errors: {
    noToken: 'Inserisci il token da verificare',
    invalidToken: 'Formato token non valido',
    noSecretKey: 'Fornisci la chiave di verifica',
    noPublicKey: 'Fornisci la chiave pubblica di verifica',
    invalidSignature: 'Firma non valida',
    verificationFailed: 'Verifica token fallita'
  }
};