export default {
  name: 'Generatore di Password',
  description: 'Genera password sicure e casuali con opzioni personalizzabili',

  options: {
    length: 'Lunghezza password',
    quantity: 'Quantità password',
    includeLowercase: 'Lettere minuscole (a-z)',
    includeUppercase: 'Lettere maiuscole (A-Z)',
    includeNumbers: 'Numeri (0-9)',
    includeSymbols: 'Simboli (!@#$%)',
    excludeSimilar: 'Escludi caratteri simili (i, l, 1, L, o, 0, O)',
    excludeAmbiguous: 'Escludi simboli ambigui ({}<>[]()\'"`\\)',
    requireAll: 'Richiedi tutti i tipi di caratteri',
    noConsecutive: 'Nessun carattere consecutivo simile',
    advancedOptions: 'Opzioni avanzate',
    characterTypes: 'Tipi di caratteri'
  },

  presets: {
    standard: 'Standard',
    strong: 'Forte',
    memorable: 'Memorabile',
    pin: 'PIN',
    pronounceable: 'Pronunciabile',
    custom: 'Personalizzato',
    easyToRemember: 'Facile da ricordare',
    balanced: 'Bilanciato',
    secure: 'Sicuro'
  },

  strength: {
    title: 'Forza della password',
    veryWeak: 'Molto debole',
    weak: 'Debole', 
    medium: 'Medio',
    strong: 'Forte',
    veryStrong: 'Molto forte',
    unknown: 'Sconosciuto'
  },

  actions: {
    generate: 'Genera password',
    regenerate: 'Rigenera',
    copy: 'Copia',
    copyAll: 'Copia tutto',
    clear: 'Pulisci',
    expand: 'Espandi',
    collapse: 'Riduci'
  },

  messages: {
    copied: 'Copiato negli appunti!',
    allCopied: 'Tutte le password copiate negli appunti!',
    generated: 'Password generate con successo',
    invalidOptions: 'Seleziona almeno un tipo di carattere',
    tooManyPasswords: 'Il numero massimo di password è 100',
    clickToGenerate: 'Clicca il pulsante sopra per generare password'
  },

  errors: {
    copyFailed: 'Impossibile copiare la password: ',
    copyFailedManual: 'Copia fallita, copia manualmente'
  },

  results: {
    title: 'Password generate'
  },

  units: {
    passwords: 'password'
  },

  tips: {
    title: 'Suggerimenti per la sicurezza',
    useLength: 'Usa password abbastanza lunghe (almeno 12 caratteri) per maggiore sicurezza',
    useDifferent: 'Usa password diverse per ogni sito o servizio',
    changeRegularly: 'Cambia regolarmente le password per account importanti',
    useManager: 'Considera l\'uso di un gestore di password per memorizzare password complesse',
    use2FA: 'Abilita l\'autenticazione a due fattori per una protezione aggiuntiva'
  }
};