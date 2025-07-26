export default {
  name: 'Analizzatore di Complessità del Codice',
  description: 'Analizza metriche di complessità del codice come complessità ciclomatica e manutenibilità',
  title: 'Analisi della Complessità del Codice',
  subtitle: 'Analizza varie metriche di complessità del codice JavaScript, inclusa la complessità ciclomatica, le metriche Halstead e l\'indice di manutenibilità',

  input: {
    title: 'Inserisci il codice JavaScript',
    placeholder: 'Incolla qui il codice JavaScript...',
    loadExample: 'Carica esempio',
    clear: 'Svuota'
  },

  options: {
    title: 'Opzioni di analisi',
    cyclomaticComplexity: 'Calcola la complessità ciclomatica (complessità McCabe)',
    halsteadMetrics: 'Calcola le metriche Halstead (lunghezza programma, vocabolario, volume, ecc.)',
    maintainabilityIndex: 'Calcola l\'indice di manutenibilità (metrica di manutenibilità del codice)',
    functionDetails: 'Mostra risultati di analisi a livello di funzione'
  },

  languages: {
    title: 'Lingue',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    csharp: 'C#',
    php: 'PHP',
    go: 'Go',
    ruby: 'Ruby'
  },

  metrics: {
    title: 'Metriche',
    cyclomaticComplexity: 'Complessità ciclomatica',
    maintainabilityIndex: 'Indice di manutenibilità',
    halsteadVolume: 'Volume Halstead',
    halsteadDifficulty: 'Difficoltà Halstead',
    halsteadEffort: 'Sforzo Halstead',
    halsteadTime: 'Tempo Halstead',
    halsteadBugs: 'Bachi Halstead',
    linesOfCode: 'Numero di righe di codice',
    logicalLoc: 'Righe di codice logiche',
    commentLines: 'Numero di righe di commento',
    commentRatio: 'Rapporto commenti',
    operatorCount: 'Numero di operatori',
    operandCount: 'Numero di operandi',
    functionCount: 'Numero di funzioni',
    maxNestingDepth: 'Profondità massima di annidamento',
    averageDepth: 'Profondità media',
    halstead: {
      title: 'Metriche Halstead',
      length: 'Lunghezza programma',
      vocabulary: 'Vocabolario',
      volume: 'Volume programma',
      difficulty: 'Difficoltà'
    }
  },

  results: {
    title: 'Risultati dell\'analisi',
    file: 'File',
    method: 'Metodo',
    score: 'Punteggio',
    complexity: 'Complessità',
    rating: 'Valutazione',
    loc: 'Righe',
    issues: 'Problemi',
    summary: 'Riepilogo generale del codice',
    details: 'Dettagli',
    noResults: 'Nessun risultato di analisi. Inserisci il codice e clicca "Analizza codice" per vedere le metriche.',
    avgCyclomaticComplexity: 'Complessità ciclomatica media',
    maintainabilityIndex: 'Indice di manutenibilità',
    linesOfCode: 'Numero di righe di codice',
    functionDetails: 'Analisi a livello di funzione',
    functionName: 'Nome funzione',
    parameters: 'Numero di parametri',
    anonymousFunction: '(funzione anonima)'
  },

  ratings: {
    excellent: 'Eccellente',
    good: 'Buono',
    moderate: 'Moderato',
    poor: 'Scarso',
    veryPoor: 'Molto scarso'
  },

  complexity: {
    title: 'Spiegazione delle metriche di complessità:',
    low: 'Bassa complessità - Codice semplice e chiaro, facile da capire e mantenere',
    medium: 'Complessità media - Codice leggermente complesso ma ancora accettabile',
    high: 'Alta complessità - Codice troppo complesso, dovrebbe essere considerata una refactoring'
  },

  actions: {
    analyze: 'Analizza codice',
    analyzing: 'Analisi in corso...',
    clearCode: 'Pulisci codice',
    uploadFile: 'Carica file',
    copy: 'Copia risultati',
    download: 'Scarica report',
    export: 'Esporta report (JSON)'
  },

  messages: {
    analyzing: 'Analisi del codice in corso...',
    analysisComplete: 'Analisi completata',
    analysisError: 'Errore nell\'analisi del codice',
    analysisFailure: 'Impossibile analizzare il codice: {error}',
    copied: 'Copiato negli appunti!',
    emptyCode: 'Per favore inserisci il codice da analizzare',
    fileTooBig: 'File troppo grande (massimo 1MB)',
    invalidFile: 'Tipo di file non valido o non supportato',
    errorTitle: 'Errore di analisi'
  },

  tips: {
    title: 'Suggerimenti per l\'uso',
    cyclomaticComplexity: 'La complessità ciclomatica misura il numero di percorsi indipendenti nel codice sorgente.',
    maintainability: 'L\'indice di manutenibilità indica quanto è mantenibile il codice, valori più alti sono migliori.',
    recommendations: 'Per una migliore qualità del codice, cerca di mantenere bassa la complessità e alto il punteggio di manutenibilità.',
    refactoring: 'Considera di rifattorizzare le funzioni con punteggio di complessità superiore a 10.'
  }
};