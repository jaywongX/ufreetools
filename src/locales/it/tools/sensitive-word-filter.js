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
  },
  article: {
    title: 'Filtro di parole sensibili: strumento completo per filtrare contenuti testuali',
    functionality: {
      title: 'Funzionalità e caratteristiche',
      description: '<strong>Il filtro di parole sensibili</strong> è un potente strumento di elaborazione testi progettato per identificare e filtrare contenuti sensibili, inappropriati o offensivi. Utilizza algoritmi avanzati di pattern matching per rilevare potenziali parole e frasi problematiche, sostituendole o rimuovendole automaticamente in base alle tue preferenze. Questo strumento supporta dizionari personalizzati, multiple modalità di filtraggio e fornisce statistiche dettagliate sui contenuti sensibili rilevati.'
    },
    useCases: {
      title: 'Applicazioni pratiche e scenari d\'uso',
      list: [
        '<strong>Moderazione di contenuti web</strong>: filtra automaticamente contenuti generati dagli utenti come commenti, post e recensioni per mantenere un ambiente online sicuro e rispettoso.',
        '<strong>Revisione di materiali educativi</strong>: assicura che materiali didattici e compiti degli studenti non contengano linguaggio inappropriato, adatto per classi o piattaforme educative.',
        '<strong>Filtraggio di contenuti per il servizio clienti</strong>: filtra le comunicazioni esterne verificando che rispettino standard professionali ed evitino linguaggio potenzialmente offensivo.',
        '<strong>Gestione di social media</strong>: verifica e ripulisce contenuti prima della pubblicazione su piattaforme social per prevenire violazioni delle policy.',
        '<strong>Preparazione di dati testuali</strong>: ripulisce dataset testuali per machine learning e analisi rimuovendo linguaggio offensivo o discriminatorio.',
        '<strong>Conformità delle comunicazioni aziendali</strong>: verifica che comunicazioni interne ed esterne rispettino le policy linguistiche aziendali e standard professionali.'
      ]
    },
    faq: {
      title: 'Domande frequenti sul filtraggio di parole sensibili',
      items: [
        {
          question: 'Quanto è accurato il rilevamento di parole sensibili?',
          answer: 'Il sistema di <strong>rilevamento parole sensibili</strong> utilizza algoritmi di pattern matching precisi ed è molto accurato. Tuttavia, il filtraggio contestuale (che comprende il significato dietro le parole) rimane una sfida. Lo strumento ti permette di rivedere le parole rilevate e personalizzare il dizionario per migliorare l\'accuratezza per esigenze specifiche.'
        },
        {
          question: 'Posso creare e salvare il mio dizionario personalizzato?',
          answer: 'Sì, la funzione <strong>dizionario personalizzato</strong> ti permette di aggiungere parole sensibili specifiche per le tue esigenze. Puoi facilmente aggiungere parole al filtro che verranno applicate durante il processo di filtraggio.'
        },
        {
          question: 'Quali modalità di filtraggio sono disponibili?',
          answer: 'Lo strumento offre diverse <strong>modalità di filtraggio testo</strong>: sostituire parole sensibili con asterischi (*), usare caratteri di sostituzione personalizzati o rimuovere completamente le parole sensibili dal testo. Puoi scegliere la modalità più adatta alle tue esigenze.'
        },
        {
          question: 'Questo strumento supporta diverse lingue?',
          answer: 'Sì, il <strong>filtro di parole sensibili multilingue</strong> funziona con varie lingue, anche se l\'efficacia può variare. Lo strumento si concentra principalmente sul pattern matching di caratteri, adattandosi a diversi sistemi di scrittura.'
        },
        {
          question: 'Come gestisce grandi quantità di testo?',
          answer: 'Per il <strong>filtraggio di testo in blocco</strong>, basta incollare il contenuto nell\'area di input. Lo strumento è ottimizzato per elaborare grandi quantità di testo in modo efficiente, anche se testi molto grandi potrebbero richiedere più tempo. Per documenti particolarmente estesi, considera di elaborarli in sezioni.'
        }
      ]
    },
    tutorial: {
      title: 'Guida passo-passo per usare il filtro di parole sensibili',
      steps: [
        '<strong>Inserisci testo</strong>: prima inserisci o incolla il testo che vuoi filtrare nell\'area di input.',
        '<strong>Configura opzioni di filtraggio</strong>: seleziona la modalità di filtraggio preferita (sostituisci con asterischi, carattere personalizzato o rimozione parole).',
        '<strong>Personalizza dizionario</strong> (opzionale): aggiungi parole specifiche che vuoi rilevare e filtrare cliccando il pulsante "Aggiungi parola".',
        '<strong>Avvia filtraggio</strong>: clicca il pulsante "Filtra" per elaborare il testo e rilevare contenuti sensibili.',
        '<strong>Visualizza risultati</strong>: controlla il testo filtrato nella scheda "Risultato filtrato" e le statistiche nella scheda "Report di rilevamento".',
        '<strong>Copia o salva risultati</strong>: copia il testo filtrato negli appunti per usarlo nelle tue applicazioni o documenti.'
      ]
    }
  }
}