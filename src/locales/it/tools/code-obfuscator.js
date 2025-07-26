export default {
  name: 'Obfuscatore di Codice',
  description: 'Offusca codice JavaScript e CSS per migliorare la sicurezza e proteggere la proprietà intellettuale',

  languages: {
    title: 'Seleziona Linguaggio',
    javascript: 'JavaScript',
    css: 'CSS'
  },

  options: {
    title: 'Opzioni di Obfuscazione',
    javascript: {
      compact: 'Output compatto (rimuove spazi)',
      controlFlowFlattening: 'Appiattimento del flusso di controllo',
      deadCodeInjection: 'Iniezione codice inutile',
      debugProtection: 'Protezione da debug',
      selfDefending: 'Auto-difesa (previene formattazione)',
      stringArray: 'Array di stringhe',
      renameGlobals: 'Rinomina variabili globali',
      renameProperties: 'Rinomina proprietà',
      mangle: 'Obfuscazione nomi variabili',
      stringArrayEncoding: 'Codifica array di stringhe',
      stringArrayThreshold: 'Soglia array di stringhe',
      unicodeEscapeSequence: 'Sequenza di escape Unicode'
    },
    css: {
      compact: 'Output compatto',
      renameSelectors: 'Rinomina selettori',
      preserveImportant: 'Mantieni !important',
      restructure: 'Ristruttura regole',
      keepVendorPrefixes: 'Mantieni prefissi browser',
      removeComments: 'Rimuovi commenti'
    }
  },

  input: {
    title: 'Input Codice',
    placeholder: 'Inserisci qui il codice da offuscare...',
    clear: 'Svuota',
    paste: 'Incolla',
    upload: 'Carica file',
    inputObfuscatorCode: 'Inserisci il codice da offuscare',
  },

  output: {
    title: 'Risultato Obfuscazione',
    placeholder: 'Il codice offuscato apparirà qui...',
    copy: 'Copia',
    download: 'Scarica',
    stats: {
      original: 'Dimensione originale',
      obfuscated: 'Dimensione offuscata',
      ratio: 'Tasso di compressione'
    },
    increase: 'Aumento',
    decrease: 'Diminuzione',
  },

  actions: {
    obfuscate: 'Offusca',
    clear: 'Pulisci'
  },

  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    processing: 'Elaborazione in corso...',
    error: 'Errore durante l\'offuscamento',
    invalidInput: 'Codice di input non valido',
    uploadError: 'Errore nel caricamento del file',
    fileTooLarge: 'File troppo grande (massimo 2MB)'
  },

  tips: {
    title: 'Suggerimenti',
    tip1: 'L\'offuscamento aumenta la difficoltà di reverse engineering ma non previene completamente la decodifica',
    tip2: 'Abilitare più opzioni aumenta le dimensioni del codice e l\'overhead di esecuzione',
    tip3: 'Alcune opzioni possono influire sulla debugabilità del codice',
    tip4: 'Si raccomanda di fare backup del codice originale prima dell\'offuscamento',
    tip5: 'Per progetti grandi, usare strumenti professionali di offuscamento'
  },

  demo: {
    title: 'Esempi',
    function: 'Esempio funzione',
    class: 'Esempio classe',
    simple: 'Stile semplice',
    animation: 'Effetto animazione',
  }
};