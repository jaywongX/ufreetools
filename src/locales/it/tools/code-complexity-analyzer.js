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
  },
  article: {
    title: "Comprendere a fondo l'analisi della complessità del codice per migliorare la qualità dello sviluppo software",
    overview: {
      title: "Cos'è l'analisi della complessità del codice?",
      content: "<strong>L'analisi della complessità del codice</strong> è uno strumento professionale che esamina il codice sorgente e misura la sua complessità strutturale, manutenibilità e fattori di rischio potenziali. Questo potente strumento di sviluppo aiuta gli sviluppatori a identificare sezioni di codice troppo complesse, che potrebbero essere soggette a bug, difficili da mantenere o da estendere.<br><br>Utilizzando metriche software consolidate come la complessità ciclomatica, le metriche Halstead e l'indice di manutenibilità per quantificare la complessità, questo strumento fornisce dati oggettivi sulla qualità del codice, permettendo ai team di sviluppo di prendere decisioni informate su dove concentrare il lavoro di refactoring. L'analisi della complessità del codice è una pratica fondamentale nello sviluppo software moderno, che supporta la gestione del debito tecnico e i piani di miglioramento della qualità del codice."
    },
    useCases: {
      title: "Casi d'uso comuni dell'analisi della complessità del codice",
      items: [
        {
          title: "Gestione del debito tecnico",
          description: "Identifica aree di codice complesso che contribuiscono al debito tecnico, permettendo ai team di dare priorità alla riduzione del debito concentrandosi sulle parti di codice ad alto rischio e alta complessità."
        },
        {
          title: "Miglioramento delle revisioni del codice",
          description: "Aumenta le revisioni manuali del codice con metriche oggettive di complessità, aiutando i revisori a identificare aree potenzialmente problematiche che richiedono un controllo aggiuntivo durante il processo di revisione."
        },
        {
          title: "Determinazione delle priorità di refactoring",
          description: "Utilizza le metriche di complessità per decidere oggettivamente quali sezioni di codice dovrebbero essere rifattorizzate per prime, assicurando che il lavoro di manutenzione sia indirizzato alle aree più problematiche."
        },
        {
          title: "Applicazione dei controlli di qualità",
          description: "Stabilisci soglie di complessità nelle pipeline di integrazione continua per prevenire che codice troppo complesso venga unito al codice principale, mantenendo standard di alta qualità."
        },
        {
          title: "Assegnazione delle risorse di test",
          description: "Assegna più risorse di test alle sezioni di codice ad alta complessità che statisticamente hanno maggiori probabilità di contenere errori, ottimizzando il lavoro di garanzia della qualità."
        },
        {
          title: "Onboarding di nuovi sviluppatori",
          description: "Aiuta i nuovi membri del team a identificare parti semplici del codice con cui iniziare, passando gradualmente a sezioni più complesse man mano che acquisiscono familiarità."
        },
        {
          title: "Valutazione del codice legacy",
          description: "Valuta la complessità dei sistemi legacy per stimare i costi di manutenzione, lo sforzo di refactoring o il rischio associato alla modifica del codice vecchio."
        }
      ]
    },
    guide: {
      title: "Come utilizzare l'analizzatore di complessità del codice",
      intro: "Segui questi passaggi per analizzare efficacemente la complessità del codice e interpretare i risultati:",
      steps: [
        {
          title: "Prepara il campione di codice",
          description: "Per prima cosa identifica il codice JavaScript che vuoi analizzare. Puoi usare un file completo o concentrarti su specifiche funzioni o moduli di interesse. Codice pulito e ben formattato fornisce i risultati di analisi più accurati."
        },
        {
          title: "Inserisci il tuo codice",
          description: "Incolla il tuo codice JavaScript nell'area di testo di input. Per comodità, se sei nuovo all'analisi della complessità, puoi usare il pulsante \"Carica esempio\" per vedere come l'analizzatore gestisce il codice di esempio."
        },
        {
          title: "Seleziona le opzioni di analisi",
          description: "Scegli quali metriche di complessità calcolare selezionando le opzioni corrispondenti: la complessità ciclomatica misura la complessità dei percorsi del codice, le metriche Halstead valutano volume e difficoltà del codice, l'indice di manutenibilità fornisce un punteggio complessivo di manutenibilità, e i dettagli delle funzioni mostrano metriche per singole funzioni."
        },
        {
          title: "Analizza il tuo codice",
          description: "Clicca il pulsante \"Analizza codice\" per elaborare il tuo input. Lo strumento analizzerà il codice JavaScript, calcolerà le metriche di complessità selezionate e genererà un report completo."
        },
        {
          title: "Visualizza il riepilogo generale",
          description: "Esamina la sezione di riepilogo, che fornisce una panoramica ad alto livello della complessità del codice. Concentrati sulla complessità ciclomatica media, sull'indice di manutenibilità e sulle metriche delle righe di codice per capire lo stato generale del codice."
        },
        {
          title: "Controlla i dettagli a livello di funzione",
          description: "Se hai selezionato \"Mostra analisi a livello di funzione\", esamina la tabella che mostra le metriche per ogni funzione. Cerca funzioni con punteggi di complessità alti (evidenziati in giallo o rosso), che sono i principali candidati per il refactoring."
        },
        {
          title: "Esporta i risultati se necessario",
          description: "Usa il pulsante \"Esporta report\" per scaricare i risultati dell'analisi in formato JSON per ulteriori elaborazioni, documentazione o condivisione con il team. Questo è particolarmente utile per tracciare le metriche di complessità nel tempo."
        }
      ]
    },
    metrics: {
      title: "Comprendere le metriche di complessità del codice",
      intro: "L'analisi della complessità del codice utilizza diverse metriche consolidate per valutare diversi aspetti della qualità e della manutenibilità del codice:",
      items: [
        {
          name: "Complessità ciclomatica",
          description: "Misura il numero di percorsi indipendenti nel codice sorgente, quantificando essenzialmente la complessità decisionale del codice. Valori più alti indicano codice con più ramificazioni, condizioni e potenziali percorsi di esecuzione. Codice con alta complessità ciclomatica è tipicamente più difficile da capire, testare e mantenere. La maggior parte delle funzioni dovrebbe avere un valore obiettivo inferiore a 10."
        },
        {
          name: "Metriche Halstead",
          description: "Una serie di metriche che misurano la dimensione e lo sforzo del programma basandosi sul numero di operatori e operandi nel codice. Questo include la lunghezza del programma, il vocabolario, il volume, la difficoltà, lo sforzo e gli errori stimati. Le metriche Halstead forniscono informazioni sul carico cognitivo necessario per comprendere il codice. Valori più bassi di difficoltà e volume indicano generalmente codice più mantenibile."
        },
        {
          name: "Indice di manutenibilità",
          description: "Una metrica composita che combina complessità ciclomatica, volume Halstead e righe di codice per dare un'indicazione complessiva della manutenibilità del codice. Il punteggio va da 0 a 100, con valori più alti che indicano codice più mantenibile. Un punteggio sopra 70 è considerato buono, mentre sotto 20 indica codice potenzialmente molto difficile da mantenere."
        },
        {
          name: "Righe di codice (LOC)",
          description: "Una metrica semplice ma efficace della dimensione del codice. Sebbene non sia direttamente una metrica di complessità, le LOC sono spesso correlate a complessità e sforzo di manutenzione. Funzioni con troppe righe (tipicamente oltre 100) potrebbero beneficiare della suddivisione in funzioni più piccole e focalizzate."
        },
        {
          name: "Conteggio parametri",
          description: "Il numero di parametri accettati da una funzione. Funzioni con molti parametri (tipicamente oltre 4) possono essere difficili da capire e usare correttamente, spesso indicando un design che potrebbe essere migliorato con refactoring o usando oggetti parametro."
        }
      ]
    },
    faq: {
      title: "Domande frequenti sull'analisi della complessità del codice",
      items: [
        {
          question: "Perché l'analisi della complessità del codice è importante?",
          answer: "L'analisi della complessità del codice aiuta a identificare codice problematico prima che causi bug, problemi di manutenzione o colli di bottiglia nello sviluppo. Ricerche mostrano che codice complesso è significativamente più soggetto a errori e più costoso da mantenere. Identificando e riducendo la complessità, i team possono migliorare la qualità del software, ridurre i costi di manutenzione, accelerare lo sviluppo e aumentare la produttività e soddisfazione degli sviluppatori."
        },
        {
          question: "Qual è un buon punteggio di complessità ciclomatica?",
          answer: "Generalmente, funzioni con complessità ciclomatica inferiore a 5 sono considerate semplici e facili da mantenere. Punteggi tra 6-10 sono di moderata complessità ma ancora accettabili. Qualsiasi valore sopra 10 è considerato complesso e potrebbe aver bisogno di refactoring, mentre sopra 15 indica codice altamente complesso che dovrebbe essere prioritario per la semplificazione. Diverse organizzazioni possono impostare le proprie soglie in base ai loro standard di qualità."
        },
        {
          question: "Questo strumento funziona con linguaggi diversi da JavaScript?",
          answer: "L'implementazione attuale analizza specificamente codice JavaScript. Tuttavia, le metriche di complessità sottostanti e i principi si applicano alla maggior parte dei linguaggi di programmazione. Per analizzare codice in altri linguaggi, avresti bisogno di strumenti specifici per quei linguaggi, poiché l'analisi sintattica è dipendente dal linguaggio."
        },
        {
          question: "Quanto sono accurate queste metriche di complessità?",
          answer: "Queste metriche forniscono misurazioni oggettive basate su principi consolidati di ingegneria del software, ma non sono perfette. Sono ottime per quantificare la complessità strutturale e identificare potenziali aree problematiche, ma non catturano tutti gli aspetti della qualità del codice, come il design architetturale, l'adeguatezza al dominio o fattori di leggibilità come le convenzioni di denominazione. Per una valutazione completa della qualità, combina le metriche di complessità con altre pratiche come revisioni del codice e analisi statica."
        },
        {
          question: "Posso integrare questo analizzatore nella mia pipeline CI/CD?",
          answer: "Sebbene questo strumento web sia progettato per uso interattivo, le stesse metriche di complessità possono essere implementate in pipeline CI/CD usando librerie come 'complexity-report', 'eslint-plugin-complexity' o 'SonarQube' per progetti JavaScript. Questi strumenti possono far rispettare soglie di complessità, prevenendo che codice troppo complesso venga unito e assicurando un monitoraggio continuo della qualità del codice."
        },
        {
          question: "Cosa devo fare se il mio codice ha un punteggio di complessità alto?",
          answer: "Punteggi di complessità alti indicano che il codice potrebbe aver bisogno di refactoring. Considera queste tecniche: suddividi grandi funzioni in funzioni più piccole, riduci i livelli di annidamento, usa clausole di guardia o tabelle di lookup per semplificare la logica condizionale, estrai calcoli complessi in funzioni helper dedicate, applica design pattern per semplificare la struttura, e quando appropriato sostituisci codice complesso con funzioni di libreria. Concentrati prima sulle funzioni più frequentemente modificate con la massima complessità."
        },
        {
          question: "Un punteggio di complessità più basso significa sempre codice migliore?",
          answer: "Non necessariamente. Sebbene una complessità più bassa sia generalmente associata a codice più mantenibile, potrebbero esserci eccezioni. A volte soluzioni leggermente più complesse potrebbero essere più efficienti, più adatte al dominio o effettivamente più leggibili per esperti del dominio. Le metriche di complessità dovrebbero informare le tue decisioni, non determinarle. Bilancia considerazioni di complessità con altri fattori come prestazioni, adeguatezza al dominio e familiarità del team."
        }
      ]
    },
    optimization: {
      title: "Strategie di ottimizzazione del codice basate sull'analisi della complessità",
      intro: "Quando la tua analisi della complessità rivela problemi, considera queste tecniche efficaci per ridurre la complessità e migliorare la qualità del codice:",
      tips: [
        "Suddividi grandi funzioni in funzioni più piccole e focalizzate, ognuna delle quali esegue una singola operazione logica",
        "Riduci i livelli di annidamento usando ritorni anticipati, clausole di guardia o estraendo codice profondamente annidato in funzioni separate",
        "Semplifica condizioni booleane complesse scomponendole in variabili denominate o funzioni che ne spieghino lo scopo",
        "Sostituisci complessi switch statement e catene if-else con pattern strategy o tabelle di lookup",
        "Usa tecniche di programmazione funzionale come map, filter e reduce invece di loop complessi con molte condizioni",
        "Estrai pattern di codice ripetuti in funzioni o metodi riutilizzabili",
        "Applica il principio di singola responsabilità per assicurarti che classi e funzioni abbiano un solo motivo per cambiare",
        "Quando appropriato, sostituisci algoritmi personalizzati complessi con funzioni di libreria ben testate",
        "Semplifica la complessità dell'interfaccia usando oggetti parametro invece di lunghe liste di parametri",
        "Documenta accuratamente il codice necessario ma complesso, spiegando perché deve essere complesso",
        "Aggiungi test completi per sezioni di codice complesse per assicurarti che funzionino come previsto e facilitare futuri refactoring",
        "Stabilisci soglie di complessità per il tuo team e revisiona il codice che supera queste soglie prima del merge"
      ]
    }
  }
}