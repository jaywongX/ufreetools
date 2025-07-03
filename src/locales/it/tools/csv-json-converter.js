export default {
  name: 'Strumento CSV a JSON',
  description: 'Converti dati CSV in formato JSON con opzioni personalizzabili',
  
  options: {
    delimiter: 'Separatore',
    quote: 'Carattere di citazione',
    header: 'Prima riga come intestazione',
    dynamicTyping: 'Tipizzazione dinamica',
    dynamicTypingDescription: 'Converte stringhe numeriche in numeri, "vero/falso" in booleani, ecc.',
    skipEmptyLines: 'Salta righe vuote',
    comments: 'Carattere per i commenti',
    outputFormat: 'Formato di output',
    indentation: 'Indentazione',
    encoding: 'Codifica',
    newline: 'Carattere di nuova riga',
    title: 'Opzioni di conversione'
  },
  
  delimiters: {
    comma: 'Virgola (,)',
    semicolon: 'Punto e virgola (;)',
    tab: 'Tabulazione (\\t)',
    pipe: 'Barra verticale (|)',
    custom: 'Personalizzato'
  },
  
  formats: {
    array: 'Array di oggetti',
    arrayOfArrays: 'Array di array',
    keyed: 'Oggetto con chiavi',
    nested: 'Oggetto annidato'
  },
  
  preview: {
    input: 'Input...',
    output: 'Output...',
    rawCsv: 'CSV grezzo',
    parsedCsv: 'CSV analizzato',
    jsonOutput: 'Output JSON',
    firstRows: 'Prime {count} righe',
    showAll: 'Mostra tutto'
  },
  
  actions: {
    convert: 'Converti',
    copy: 'Copia JSON',
    download: 'Scarica JSON',
    clear: 'Pulisci',
    uploadCsv: 'Carica CSV',
    swap: 'Scambia input/output',
    loadExample: 'Carica esempio',
    clearInput: 'Pulisci input',
    formatOutput: 'Formatta output',
    copyResult: 'Copia risultato',
    downloadResult: 'Scarica risultato',
    paste: 'Incolla',
    showOptions: 'Mostra opzioni',
    hideOptions: 'Nascondi opzioni',
    uploadJson: 'Carica JSON'
  },
  
  results: {
    rowsProcessed: '{count} righe processate',
    conversionComplete: 'Conversione completata',
    copied: 'Copiato negli appunti',
    downloaded: 'Scaricato',
    error: 'Errore'
  },
  
  errors: {
    noData: 'Nessun dato CSV da convertire',
    invalidCsv: 'Formato CSV non valido',
    parsingFailed: 'Analisi fallita: {error}',
    missingHeader: 'Manca riga di intestazione',
    invalidJson: 'Formato JSON non valido',
    formatFailed: 'Formattazione fallita: {error}',
    copyFailed: 'Copia fallita, copia manualmente',
    downloadFailed: 'Download fallito',
    pasteError: 'Impossibile incollare dagli appunti',
    conversionFailed: 'Conversione fallita'
  },
  
  conversion: {
    title: 'Direzione conversione',
    csvToJson: {
      title: 'CSV a JSON',
      delimiterLabel: 'Separatore',
      headerLabel: 'Prima riga come intestazione',
      dynamicTypingLabel: 'Inferisci tipi di dati',
      skipEmptyLinesLabel: 'Salta righe vuote',
      convertButton: 'Converti CSV in JSON'
    },
    jsonToCsv: {
      title: 'JSON a CSV',
      delimiterLabel: 'Separatore',
      headerLabel: 'Includi riga di intestazione',
      quotesLabel: 'Aggiungi virgolette a tutti i campi',
      nestedModeLabel: 'Modalità di gestione dati annidati',
      flat: 'Appiattisci',
      stringify: 'Converti in stringa',
      ignore: 'Ignora',
      convertButton: 'Converti JSON in CSV'
    }
  },
  
  stats: {
    processed: 'Righe di dati processate',
    fields: 'Numero di campi/colonne',
    inputSize: 'Dimensione input',
    outputSize: 'Dimensione output',
    title: 'Statistiche'
  },
  
  messages: {
    copied: 'Copiato negli appunti',
    download: 'Scaricato',
    error: 'Errore'
  },
  
  formatBytes: {
    bytes: 'byte',
    kb: 'KB',
    mb: 'MB',
    gb: 'GB',
    tb: 'TB'
  },
  
  article: {
    title: "Strumento CSV a JSON: Semplifica la conversione dei formati di dati",
    features: {
      title: "Introduzione allo strumento di conversione CSV e JSON",
      description: "<strong>Il convertitore da CSV a JSON</strong> è uno strumento potente progettato per trasformare dati tra il formato <strong>CSV</strong> (valori separati da virgola) e il formato <strong>JSON</strong> (JavaScript Object Notation). Questo <strong>convertitore bidirezionale</strong> può convertire senza problemi dati tabellari in oggetti JSON strutturati e viceversa.<br><br>Il nostro <strong>strumento CSV JSON</strong> offre opzioni personalizzabili per gestire vari <strong>formati di dati</strong>, inclusi diversi separatori (virgola, punto e virgola, tabulazione, barra verticale), gestione delle intestazioni e rilevamento intelligente dei <strong>tipi di dati</strong>. Per strutture JSON complesse, lo strumento offre opzioni per appiattire oggetti annidati o convertirli in stringhe, rendendolo una soluzione versatile per <strong>conversione di dati</strong> in diverse applicazioni e flussi di lavoro.",
      useCases: {
        title: "Scenari comuni per la conversione CSV JSON",
        items: [
          "Analisti di dati che convertono esportazioni da fogli di calcolo in JSON per strumenti di visualizzazione o API",
          "Sviluppatori che preparano dati per applicazioni web che richiedono strutture JSON",
          "Amministratori di database che migrano dati tra sistemi con diversi requisiti di formato",
          "Sviluppatori API che convertono esportazioni CSV in formato JSON per API RESTful",
          "Data scientist che convertono risultati sperimentali tra formati da fogli di calcolo e strutture JSON adatte al codice",
          "Analisti aziendali che preparano report CSV da sistemi contabili o CRM per dashboard web che usano JSON"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla conversione CSV JSON",
      items: [
        {
          question: "Qual è la differenza tra i formati CSV e JSON?",
          answer: "CSV (valori separati da virgola) è un formato tabellare semplice dove i dati sono organizzati in righe e colonne separate da un delimitatore (tipicamente una virgola). È piatto, leggero e comunemente usato nei fogli di calcolo. JSON (JavaScript Object Notation) è un formato strutturato gerarchico che supporta oggetti annidati e array. JSON può rappresentare relazioni di dati più complesse ed è lo standard per API web e applicazioni JavaScript."
        },
        {
          question: "Come gestisce lo strumento gli oggetti JSON annidati quando si converte in CSV?",
          answer: "Il nostro convertitore CSV JSON offre tre opzioni per gestire oggetti JSON annidati: 'Appiattisci' converte proprietà annidate in nomi di colonna con notazione puntata (es. 'utente.nome'), 'Converti in stringa' trasforma l'intero oggetto annidato in una rappresentazione stringa, 'Ignora' esclude gli oggetti annidati dalla conversione. Queste opzioni offrono flessibilità in base alle tue specifiche esigenze di conversione dati."
        },
        {
          question: "Il convertitore CSV a JSON può gestire diversi delimitatori nei file CSV?",
          answer: "Sì, il nostro strumento di conversione supporta varie opzioni di delimitatori, inclusi virgola, punto e virgola, tabulazione e caratteri di barra verticale. Questa flessibilità ti permette di gestire diverse varianti di formato CSV provenienti da vari sistemi o regioni. Basta selezionare il delimitatore appropriato nel pannello delle opzioni prima della conversione."
        },
        {
          question: "Come funziona la tipizzazione dinamica nella conversione da CSV a JSON?",
          answer: "La tipizzazione dinamica rileva e converte automaticamente i tipi di dati nel CSV. Quando abilitata, valori stringa che sembrano numeri (es. '42') vengono convertiti in effettivi tipi numerici, stringhe 'vero'/'falso' diventano valori booleani, e campi vuoti possono essere convertiti in null. Questo crea dati JSON più utilizzabili con i tipi di dati corretti, invece di trattare tutto come stringhe."
        },
        {
          question: "Quanto grandi possono essere i file CSV o JSON che questo convertitore può gestire?",
          answer: "Il convertitore CSV JSON elabora i dati direttamente nel tuo browser, quindi i limiti di dimensione del file dipendono dalla memoria del tuo dispositivo. Per prestazioni ottimali, raccomandiamo file inferiori a 5MB, anche se i browser moderni possono gestire file più grandi. Per dataset molto grandi, considera di dividere il file in blocchi più piccoli o usare strumenti di conversione basati su server."
        }
      ]
    },
    guide: {
      title: "Come usare lo strumento CSV a JSON",
      steps: [
        "Seleziona la direzione di conversione: scegli 'CSV a JSON' o 'JSON a CSV' in base al formato dei tuoi dati sorgente",
        "Clicca 'Mostra opzioni' per configurare le impostazioni di conversione come delimitatore, riga di intestazione e regole di gestione speciali",
        "Per CSV a JSON, seleziona il delimitatore appropriato (virgola, punto e virgola, tabulazione, ecc.) e se il tuo CSV contiene intestazioni di colonna, seleziona 'Prima riga come intestazione'",
        "Per JSON a CSV, configura come gestire oggetti annidati (appiattisci, converti in stringa o ignora) e se aggiungere virgolette a tutti i valori dei campi",
        "Inserisci i tuoi dati incollandoli nel campo di input o cliccando 'Carica esempio' per vedere come lo strumento elabora dati di esempio",
        "Clicca il pulsante 'Converti' per eseguire la conversione tra formati CSV e JSON",
        "Rivedi le statistiche di conversione e l'output risultante, poi usa i pulsanti 'Copia risultato' o 'Scarica risultato' per salvare i dati convertiti"
      ]
    },
    conclusion: "Il convertitore CSV a JSON è uno strumento essenziale per professionisti dei dati che lavorano frequentemente con diversi formati di dati. Semplificando il processo di conversione tra dati tabellari CSV e oggetti JSON strutturati, questo strumento fa risparmiare tempo e riduce errori nei flussi di lavoro di elaborazione dati. Che tu stia preparando dati per integrazioni API, convertendo esportazioni da applicazioni per fogli di calcolo, o facendo conversione tra requisiti di formato di diversi sistemi, questo convertitore offre una soluzione flessibile basata su browser per le tue esigenze di conversione dati."
  }
}