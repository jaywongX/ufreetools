export default {
  name: 'Controllore della Forza delle Password',
  description: 'Analizza e valuta la sicurezza delle password con indicatori dettagliati',

  input: {
    title: 'Inserisci la password da analizzare',
    placeholder: 'Inserisci qui la password...',
    showPassword: 'Mostra password',
    hidePassword: 'Nascondi password',
    clear: 'Cancella',
    generate: 'Genera password',
    check: 'Controlla sicurezza',
    empty: 'Inserisci una password per vedere la valutazione',
    disclaimer: 'Inserisci qualsiasi password per valutarne la sicurezza. La tua password non verrà memorizzata o inviata a nessun server.'
  },

  results: {
    title: 'Valutazione della Password',
    strength: 'Sicurezza',
    score: 'Punteggio',
    entropy: 'Entropia',
    crackTime: 'Tempo stimato per violarla',
    very_weak: 'Molto debole',
    weak: 'Debole',
    fair: 'Discreta',
    good: 'Buona',
    strong: 'Forte',
    very_strong: 'Molto forte',
    feedback: 'Feedback',
    suggestions: 'Suggerimenti per migliorare',
    warnings: 'Problemi rilevati',
    noWarnings: 'Nessun problema rilevato',
    noSuggestions: 'Nessun suggerimento disponibile'
  },

  details: {
    title: 'Analisi Dettagliata',
    length: 'Lunghezza password',
    charset: 'Varietà di caratteri',
    patterns: 'Pattern utilizzati',
    uniqueChars: 'Caratteri unici',
    uppercase: 'Lettere maiuscole',
    lowercase: 'Lettere minuscole',
    numbers: 'Numeri',
    symbols: 'Simboli speciali',
    repetitions: 'Ripetizioni',
    sequences: 'Sequenze',
    dictionary: 'Parole da dizionario',
    leaked: 'Già compromessa',
    reused: 'Pattern riutilizzati'
  },

  patterns: {
    dictionary: 'Parola da dizionario',
    sequence: 'Caratteri sequenziali',
    repeat: 'Caratteri ripetuti',
    spatial: 'Pattern spaziali (tastiera)',
    date: 'Pattern di date',
    year: 'Pattern di anni',
    common: 'Password comuni',
    name: 'Pattern di nomi',
    reversal: 'Parole al contrario',
    leet: 'Sostituzioni leet',
    predictable: 'Pattern prevedibili'
  },

  crackTimes: {
    instantly: 'Immediatamente',
    seconds: 'In pochi secondi',
    minutes: 'In pochi minuti',
    hours: 'In poche ore',
    days: 'In pochi giorni',
    months: 'In pochi mesi',
    years: 'In pochi anni',
    centuries: 'In secoli',
    forever: 'Praticamente mai'
  },

  suggestions: {
    addWords: 'Aggiungi più parole o caratteri',
    addSymbols: 'Includi simboli',
    addNumbers: 'Includi numeri',
    upperLower: 'Mischia maiuscole e minuscole',
    avoidPatterns: 'Evita sequenze di tasti o caratteri ripetuti',
    avoidCommon: 'Evita password basate su dizionario o comuni, anche con sostituzioni (es. "e" con "3")',
    avoidPersonal: 'Evita informazioni personali',
    avoidDictionary: 'Evita parole da dizionario',
    usePassphrase: 'Considera combinazioni di parole non correlate o acronimi per password più sicure e memorabili',
    increaseLonger: 'Aumenta la lunghezza della password',
    avoidSequence: 'Evita sequenze',
    avoidRepeated: 'Evita caratteri ripetuti',
    avoidDates: 'Evita date e anni',
    addMoreChars: 'Aumenta la password ad almeno 12 caratteri - ogni carattere aggiuntivo aumenta esponenzialmente la difficoltà di violazione',
    addTypes: 'Aggiungi {types} per aumentare la complessità',
    useManager: 'Usa un gestore di password per generare e gestire password complesse, diverse per ogni sito'
  },

  generator: {
    title: 'Generatore di Password',
    length: 'Lunghezza',
    options: 'Opzioni',
    uppercase: 'Includi maiuscole',
    lowercase: 'Includi minuscole',
    numbers: 'Includi numeri',
    symbols: 'Includi simboli',
    excludeSimilar: 'Escludi caratteri simili',
    excludeAmbiguous: 'Escludi caratteri ambigui',
    generate: 'Genera password',
    passphrase: 'Genera passphrase',
    wordCount: 'Numero di parole',
    separator: 'Separatore tra parole',
    capitalize: 'Maiuscola iniziale',
    includeNumber: 'Includi numero',
    includeSymbol: 'Includi simbolo'
  },

  common: {
    copy: 'Copia negli appunti',
    save: 'Salva nella cronologia',
    clear: 'Cancella',
    refresh: 'Aggiorna',
    copied: 'Copiato negli appunti',
    saved: 'Salvato nella cronologia',
    history: 'Cronologia',
    noHistory: 'Nessuna cronologia disponibile',
    common: 'Comuni'
  },

  breach: {
    title: 'Controllo Violazioni Dati',
    description: 'Verifica se la tua password è comparsa in violazioni dati note',
    disclaimer: 'La tua password non viene mai inviata in rete. Viene controllato solo un hash parziale.',
    checkButton: 'Controlla violazioni',
    safe: 'Non trovata in violazioni note',
    found: 'Trovata in {count} violazioni dati!',
    warning: 'Questa password è stata esposta in violazioni dati e non dovrebbe più essere usata.',
    checking: 'Controllo violazioni in corso...'
  },

  settings: {
    title: 'Impostazioni',
    algorithm: 'Algoritmo di sicurezza',
    history: 'Salva cronologia',
    clearHistory: 'Cancella cronologia',
    breachCheck: 'Controllo violazioni',
    timeout: 'Cancella dopo timeout',
    timeoutDuration: 'Durata timeout (secondi)',
    clipboard: 'Cancella dagli appunti dopo copia',
    language: 'Lingua'
  },

  score: {
    none: 'Nessun punteggio'
  },

  descriptions: {
    none: 'Impossibile valutare la password',
    veryWeak: 'Questa password è molto facile da indovinare o violare, estremamente insicura',
    weak: 'Questa password ha bassa sicurezza e potrebbe essere violata facilmente',
    fair: 'Questa password ha una discreta sicurezza ma può essere migliorata',
    good: 'Questa password è abbastanza sicura e difficile da violare',
    veryStrong: 'Questa password è molto sicura e praticamente impossibile da violare'
  },

  length: {
    none: 'Nessuna',
    tooShort: 'Troppo corta',
    acceptable: 'Accettabile',
    good: 'Buona',
    excellent: 'Eccellente'
  },

  lengthMessage: {
    none: 'Nessuna password inserita',
    needMore: 'Sono necessari almeno {min} caratteri',
    better: '{min} o più caratteri sarebbero più sicuri',
    good: 'Ottimo! Le password lunghe sono più difficili da violare',
    excellent: 'Lunghezza eccellente!'
  },

  complexity: {
    none: 'Nessuna',
    veryLow: 'Molto bassa',
    fair: 'Discreta',
    good: 'Buona',
    excellent: 'Eccellente'
  },

  issues: {
    tooShort: 'Password troppo corta (meno di 8 caratteri)',
    noUppercase: 'Nessuna lettera maiuscola',
    noLowercase: 'Nessuna lettera minuscola',
    noNumbers: 'Nessun numero',
    noSymbols: 'Nessun simbolo speciale',
    hasSequence: 'Contiene sequenze comuni da tastiera (es. "qwerty" o "123456")',
    hasRepeated: 'Contiene caratteri ripetuti (es. "aaa" o "111")',
    commonPassword: 'Usa una password comune o facilmente indovinabile'
  },

  characters: 'caratteri',

  tips: {
    title: 'Consigli per password sicure',
    length: 'Usa password di almeno 12 caratteri',
    mix: 'Mischia maiuscole, minuscole, numeri e simboli',
    avoid: 'Evita parole comuni, frasi o informazioni personali',
    unique: 'Non usare la stessa password su più siti',
    manager: 'Considera l\'uso di un gestore password per generare e memorizzare password complesse'
  }
};