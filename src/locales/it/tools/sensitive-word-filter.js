export default {
  name: 'Filtro di parole sensibili',
  description: 'Rileva e filtra parole sensibili nel testo, supporta dizionari personalizzati e regole di filtraggio',

  input: {
    title: 'Testo di input',
    placeholder: 'Inserisci il testo da analizzare...',
    loadSample: 'Carica esempio',
    clearInput: 'Pulisci input',
    uploadFile: 'Carica file di testo'
  },

  output: {
    title: 'Testo filtrato',
    original: 'Testo originale',
    filtered: 'Testo filtrato',
    statistics: 'Statistiche',
    copyOutput: 'Copia testo filtrato',
    clearOutput: 'Pulisci output',
    download: 'Scarica testo filtrato'
  },

  options: {
    title: 'Opzioni di filtraggio',
    filterMode: 'Modalità di filtraggio',
    caseSensitive: 'Distingui maiuscole/minuscole',
    wholeWordOnly: 'Solo parole intere',
    customReplacement: 'Sostituzione personalizzata',
    replacementChar: 'Carattere di sostituzione',
    highlightWords: 'Evidenzia parole sensibili',
    customDictionary: 'Dizionario personalizzato',
    importDictionary: 'Importa dizionario',
    exportDictionary: 'Esporta dizionario'
  },

  filterModes: {
    replace: 'Sostituisci parole sensibili',
    highlight: 'Evidenzia parole sensibili',
    remove: 'Rimuovi parole sensibili',
    detect: 'Solo rilevamento'
  },

  dictionary: {
    title: 'Dizionario',
    add: 'Aggiungi parola',
    remove: 'Rimuovi',
    clear: 'Svuota dizionario',
    wordInput: 'Inserisci parola da aggiungere',
    categories: 'Categorie',
    severity: 'Gravità',
    bulkAdd: 'Aggiungi in blocco',
    search: 'Cerca nel dizionario'
  },

  categories: {
    profanity: 'Volgarità',
    slurs: 'Ingiurie',
    adult: 'Contenuto per adulti',
    offensive: 'Contenuto offensivo',
    violence: 'Violenza',
    discrimination: 'Discriminazione',
    personal: 'Informazioni personali',
    custom: 'Personalizzato'
  },

  severityLevels: {
    low: 'Basso',
    medium: 'Medio',
    high: 'Alto',
    critical: 'Critico'
  },

  statistics: {
    totalWords: 'Parole totali',
    sensitiveWords: 'Parole sensibili',
    uniqueSensitiveWords: 'Parole sensibili uniche',
    severityBreakdown: 'Distribuzione per gravità',
    categoryBreakdown: 'Distribuzione per categoria',
    cleanlinessScore: 'Punteggio di pulizia'
  },

  filterOptions: {
    title: 'Modalità di filtraggio',
    modes: {
      asterisk: 'Sostituisci con *',
      custom: 'Carattere di sostituzione personalizzato',
      remove: 'Elimina parole sensibili'
    },
    replaceChar: {
      title: 'Carattere di sostituzione',
      placeholder: 'Inserisci carattere di sostituzione'
    }
  },

  customWords: {
    title: 'Dizionario personalizzato',
    addWord: 'Aggiungi parola',
    addPrompt: 'Inserisci la parola sensibile da aggiungere:',
    removeWord: 'Rimuovi'
  },

  actions: {
    filter: 'Filtra',
    reset: 'Reimposta',
    processing: 'Elaborazione in corso...',
    clearAll: 'Pulisci tutto',
    copyFiltered: 'Copia testo filtrato',
    downloadReport: 'Scarica report',
    resetSettings: 'Reimposta impostazioni'
  },

  results: {
    title: 'Risultati del filtraggio',
    tabs: {
      filteredResult: 'Risultato filtrato',
      detectionReport: 'Report di rilevamento'
    },
    filteredText: {
      title: 'Testo filtrato',
      copy: 'Copia risultato',
      empty: 'Nessun risultato da mostrare'
    },
    statistics: {
      detectedCount: 'Numero di parole sensibili rilevate',
      retentionRate: 'Percentuale di testo conservato',
      totalWords: 'Numero totale di parole'
    },
    detectedWords: {
      title: 'Parole sensibili rilevate',
      empty: 'Nessuna parola sensibile rilevata'
    }
  },

  messages: {
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    noInput: 'Inserisci il testo da filtrare',
    inputTooLong: 'Testo di input troppo lungo',
    wordAdded: 'Parola aggiunta al dizionario',
    wordExists: 'Questa parola è già presente nel dizionario',
    wordRemoved: 'Parola rimossa dal dizionario',
    filterSuccess: 'Filtraggio completato con successo',
    noSensitiveWords: 'Nessuna parola sensibile trovata',
    dictionaryCleared: 'Dizionario svuotato',
    dictionaryImported: 'Dizionario importato',
    dictionaryExported: 'Dizionario esportato',
    emptyText: 'Inserisci il testo da filtrare'
  }
};