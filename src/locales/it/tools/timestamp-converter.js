export default {
  name: 'Convertitore Timestamp',
  description: 'Converti tra timestamp e date leggibili, supporta diversi formati e fusi orari',
  options: {
    inputType: 'Tipo input',
    outputFormat: 'Formato output',
    timezone: 'Fuso orario',
    includeTime: 'Includi orario',
    format: 'Stringa formato'
  },
  inputTypes: {
    timestamp: 'Timestamp Unix',
    milliseconds: 'Millisecondi Unix',
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    date: 'Stringa data'
  },
  formats: {
    iso8601: 'ISO 8601',
    rfc2822: 'RFC 2822',
    locale: 'Formato localizzato',
    relative: 'Tempo relativo',
    custom: 'Formato personalizzato'
  },
  actions: {
    convert: 'Converti',
    nowTimestamp: 'Timestamp attuale',
    nowDate: 'Data attuale',
    copy: 'Copia',
    clear: 'Pulisci',
    refresh: 'Aggiorna',
    switch: 'Inverti'
  },
  messages: {
    copied: 'Copiato negli appunti!',
    convertSuccess: 'Conversione riuscita',
    convertError: 'Errore conversione timestamp',
    invalidInput: 'Formato input non valido',
    invalidFormat: 'Stringa formato non valida'
  },
  timeUnits: {
    milliseconds: 'Millisecondi',
    seconds: 'Secondi',
    minutes: 'Minuti',
    hours: 'Ore',
    days: 'Giorni'
  },
  labels: {
    unixTimestamp: 'Timestamp Unix (secondi)',
    dateTime: 'Data/Ora',
    inputValue: 'Valore input',
    unitConversion: 'Conversione unità temporali',
    timeUnitLabel: 'Unità temporale'
  },
  placeholders: {
    enterTimestamp: 'Inserisci timestamp Unix',
    enterValue: 'Inserisci valore'
  },
  info: {
    aboutTimestamp: 'Informazioni timestamp Unix',
    timestampDescription: 'Il timestamp Unix rappresenta i secondi trascorsi dal 1° gennaio 1970 00:00:00 UTC. È un formato di rappresentazione temporale ampiamente utilizzato in sistemi informatici e applicazioni.',
    commonUsage: 'Usi comuni:',
    usages: {
      database: 'Registrazione tempi database',
      api: 'Rappresentazione temporale in API',
      logging: 'Registrazione log',
      filesystem: 'Timestamp filesystem'
    }
  },
  article: {
    title: "Convertitore Timestamp Unix: Trasforma tra tempo epoch e date leggibili",
    overview: {
      title: "Cos'è un convertitore timestamp?",
      content: "Il <strong>convertitore timestamp</strong> è uno strumento specializzato per trasformare valori Unix timestamp (tempo epoch) in formati data leggibili e viceversa. I timestamp Unix rappresentano i secondi (o millisecondi) trascorsi dal 1° gennaio 1970 00:00:00 UTC (noto come Unix epoch).<br><br>Il nostro convertitore timestamp è uno strumento completo per la conversione temporale, capace di gestire vari formati temporali incontrati nello sviluppo software, amministrazione di sistema, analisi log e data science. Supporta conversioni precise tra formati Unix timestamp (secondi e millisecondi) e rappresentazioni standard data/ora in diversi fusi orari.<br><br>Che tu stia debugando log applicativi, analizzando dati temporali, sviluppando API con parametri timestamp o lavorando con timestamp di database, il nostro convertitore elimina errori di conversione manuale e semplifica i task che coinvolgono diverse rappresentazioni temporali."
    },
    useCases: {
      title: "Casi d'uso pratici per la conversione timestamp",
      items: [
        {
          title: "Analisi e debug log",
          description: "Converti timestamp nei log applicativi, server e di sistema in date leggibili per tracciare sequenze di eventi, risolvere problemi e correlare eventi tra diverse fonti. Aiuta a identificare pattern, tracciare problemi di prestazioni e stabilire timeline precise durante investigazioni."
        },
        {
          title: "Sviluppo e integrazione API",
          description: "Gestisci parametri timestamp in API REST, payload webhook e integrazioni con terze parti dove il tempo epoch è comunemente usato per scambi dati precisi. La conversione tra date leggibili e timestamp facilita test API, documentazione e garantisce coerenza nell'elaborazione temporale tra diversi sistemi."
        },
        {
          title: "Operazioni database",
          description: "Converti tra campi timestamp del database e visualizzazioni data nell'interfaccia utente, esegui query basate su timestamp e verifica dati temporali nelle operazioni di database. Assicura la corretta persistenza, recupero e manipolazione di dati quando si lavora con informazioni sensibili al tempo."
        },
        {
          title: "Gestione task pianificati",
          description: "Calcola tempi di esecuzione precisi per cron job, task schedulati e processi automatizzati convertendo tra tempi pianificati leggibili e timestamp richiesti dai sistemi di scheduling. Aiuta a garantire che operazioni critiche vengano eseguite agli intervalli corretti."
        },
        {
          title: "Analisi e visualizzazione dati",
          description: "Elabora dati timestamp in workflow di data science, analisi di serie temporali e progetti di visualizzazione che richiedono conversione tra date leggibili e timestamp numerici per interpretazione corretta, raggruppamento e analisi di trend."
        },
        {
          title: "Controllo versione e tracciamento modifiche",
          description: "Interpreta timestamp di commit in sistemi di controllo versione, tempi di modifica file e log di audit per comprendere quando sono avvenuti i cambiamenti e stabilire timeline accurate di sviluppo. Cruciale per code review, report di compliance e tracciamento avanzamenti di progetto."
        },
        {
          title: "Gestione record elettronici",
          description: "Gestisci timestamp in documenti elettronici, firme digitali e record certificati dove rappresentazioni temporali precise hanno rilevanza legale. La conversione tra formati assicura accuratezza nei processi di timestamping e procedure di verifica."
        },
        {
          title: "Coordinamento tra fusi orari",
          description: "Facilita comunicazione e scheduling tra diversi fusi orari fornendo timestamp Unix come punto di riferimento universale convertibile in rappresentazioni locali. Minimizza confusioni e garantisce coordinamento preciso per team globali e sistemi distribuiti."
        }
      ]
    },
    guide: {
      title: "Come usare lo strumento di conversione timestamp",
      intro: "Convertire tra timestamp e date leggibili con il nostro strumento intuitivo è semplice. Segui questi passaggi per trasformare accuratamente valori tra tempo epoch Unix e formati data standard:",
      steps: [
        {
          title: "Seleziona direzione conversione",
          description: "Decidi se convertire da timestamp Unix a data leggibile (timestamp → data) o da data a timestamp Unix (data → timestamp). Usa il pulsante di inversione per alternare tra queste modalità in base alle tue esigenze."
        },
        {
          title: "Inserisci il tuo valore",
          description: "Per conversione timestamp → data, inserisci il valore in secondi del timestamp Unix (es. 1609459200). Per data → timestamp, usa il selettore data/ora per scegliere la data da convertire."
        },
        {
          title: "Ottieni risultati immediati",
          description: "La conversione avviene automaticamente mostrando la data equivalente al timestamp o viceversa. I risultati appaiono immediatamente sotto il tuo input, formattati secondo le impostazioni locali del sistema."
        },
        {
          title: "Copia i risultati",
          description: "Clicca il pulsante copia accanto al risultato per trasferire il valore convertito negli appunti, utile per applicazioni, documentazione o ulteriori analisi."
        },
        {
          title: "Usa le unità temporali",
          description: "Utilizza la sezione conversione unità per trasformare tra millisecondi, secondi, minuti, ore e giorni. Inserisci un valore in un'unità per vederne l'equivalente in tutte le altre."
        },
        {
          title: "Aggiorna con l'ora corrente",
          description: "Clicca aggiorna per inserire automaticamente il timestamp corrente o la data attuale in base alla modalità selezionata."
        },
        {
          title: "Consulta informazioni aggiuntive",
          description: "Scorri al pannello informativo per approfondire la definizione, usi comuni e significato tecnico dei timestamp Unix."
        }
      ]
    },
    principles: {
      title: "Comprendere i principi dei timestamp Unix",
      content: "I timestamp Unix si basano su un concetto semplice ma potente: rappresentare il tempo come singolo numero che conta i secondi da un punto fisso. Questo approccio offre vantaggi tecnici significativi:<br><br><strong>Unix epoch</strong> - 1° gennaio 1970 00:00:00 UTC - funge da origine (timestamp 0). La scelta di questa data specifica è legata allo sviluppo del sistema operativo Unix.<br><br><strong>Interi positivi</strong> rappresentano tempo dopo l'epoch, mentre <strong>interi negativi</strong> indicano date precedenti al 1970. Ciò permette ai timestamp Unix di rappresentare passato e futuro con un sistema coerente.<br><br><strong>Il conteggio in secondi</strong> offre sufficiente precisione per molte applicazioni, mentre i <strong>timestamp in millisecondi</strong> (millisecondi dall'epoch) forniscono granularità maggiore per applicazioni che richiedono alta precisione.<br><br>Il sistema timestamp Unix gestisce elegantemente le differenze di fuso orario essendo sempre basato su UTC (Tempo Coordinato Universale). Applicando offset appropriati si ottengono rappresentazioni locali.<br><br>Questo metodo standardizzato di rappresentare il tempo è diventato fondamentale in informatica, permettendo a filesystem, database e protocolli di rete di gestire dati temporali in modo coerente."
    },
    faq: {
      title: "Domande frequenti sulla conversione timestamp",
      items: [
        {
          question: "Cos'è un timestamp Unix?",
          answer: "Un timestamp Unix (o tempo epoch o POSIX time) è un numero che rappresenta i secondi trascorsi dal 1° gennaio 1970 00:00:00 UTC, esclusi i secondi intercalari. È ampiamente usato nei sistemi informatici come modo standardizzato di tracciare e rappresentare punti temporali. Ad esempio, il timestamp 1609459200 rappresenta il 31 dicembre 2020 12:00:00 UTC. Questa rappresentazione universale elimina complessità legate a diversi formati data, fusi orari e sistemi di calendario."
        },
        {
          question: "Perché i sistemi informatici usano timestamp invece di formati data normali?",
          answer: "I sistemi usano timestamp perché offrono vantaggi tecnici: sono singoli valori numerici facili da memorizzare, confrontare e calcolare. Permettono calcoli precisi di intervalli (sottraendo due timestamp), archiviazione efficiente (un numero invece di campi separati), ordinamento coerente e indipendenza da formati culturali e calendari. Questa rappresentazione universale semplifica la logica di programmazione per operazioni basate sul tempo e garantisce coerenza tra diversi sistemi."
        },
        {
          question: "Qual è la differenza tra timestamp Unix in secondi e millisecondi?",
          answer: "I timestamp in secondi contano i secondi interi dall'epoch, mentre quelli in millisecondi contano i millisecondi, risultando in valori 1000 volte maggiori per lo stesso istante. Ad esempio, il 14 marzo 2023 12:00:00 UTC è circa 1678795200 in secondi e 1678795200000 in millisecondi. I timestamp in secondi sono la tradizionale rappresentazione Unix, sufficiente per molti usi, mentre quelli in millisecondi offrono maggiore granularità per applicazioni che richiedono alta precisione."
        },
        {
          question: "Come gestire i fusi orari con i timestamp?",
          answer: "I timestamp Unix sono sempre basati su UTC (Tempo Coordinato Universale), rendendoli indipendenti dai fusi orari. Per gestire diversi fusi orari: 1) Quando converti da ora locale a timestamp, prima trasforma l'ora locale in UTC poi calcola il timestamp. 2) Quando converti da timestamp a ora locale, prima trasforma il timestamp in data/ora UTC poi applica l'offset del fuso orario. La maggior parte dei linguaggi di programmazione e strumenti di conversione (incluso questo) gestiscono automaticamente queste conversioni quando specifichi il fuso orario desiderato."
        },
        {
          question: "Cos'è il problema dell'anno 2038 per i timestamp Unix?",
          answer: "Il problema dell'anno 2038 riguarda i sistemi che memorizzano timestamp Unix come interi a 32 bit con segno. Questi sistemi possono rappresentare timestamp solo fino a 2.147.483.647 (2^31-1), che corrisponde al 19 gennaio 2038 03:14:07 UTC. Dopodiché, il contatore potrebbe andare in overflow generando numeri negativi, causando errori nei calcoli di data. La soluzione implica la transizione a timestamp a 64 bit, che possono rappresentare date ben oltre le necessità pratiche. La maggior parte dei sistemi moderni ha già implementato questa soluzione."
        },
        {
          question: "I timestamp possono rappresentare date precedenti al 1970?",
          answer: "Sì, i timestamp possono usare valori negativi per rappresentare date precedenti al 1970. Ad esempio, il timestamp -31536000 rappresenta il 1° gennaio 1969 00:00:00 UTC, esattamente un anno prima dell'Unix epoch. Tuttavia, ci sono due limitazioni importanti: 1) Alcuni sistemi e linguaggi non gestiscono correttamente timestamp negativi. 2) Nei sistemi a 32 bit, la data più antica rappresentabile è il 13 dicembre 1901 (timestamp -2.147.483.648)."
        },
        {
          question: "Quanto sono accurati i timestamp Unix per misurazioni temporali precise?",
          answer: "I timestamp Unix standard offrono precisione al secondo, sufficiente per molte esigenze. Per maggiore precisione, i timestamp in millisecondi offrono risoluzione al millisecondo, con alcune estensioni che arrivano a microsecondi o nanosecondi. Tuttavia, i timestamp Unix non considerano i secondi intercalari (secondi occasionalmente aggiunti all'UTC per compensare l'irregolare rotazione terrestre), il che potrebbe essere rilevante per applicazioni estremamente sensibili al tempo."
        }
      ]
    },
    bestPractices: {
      title: "Migliori pratiche per l'uso dei timestamp",
      items: [
        "Memorizza sempre timestamp in UTC per evitare confusione tra fusi orari, convertendoli all'ora locale solo per la visualizzazione",
        "Usa timestamp in millisecondi per applicazioni moderne, specialmente quelle che coinvolgono JavaScript dove Date.now() restituisce millisecondi",
        "Includi esplicitamente l'unità dei timestamp (secondi vs millisecondi) nella documentazione API e nei nomi delle variabili per prevenire errori di conversione",
        "Per date molto recenti o future, verifica i calcoli dei timestamp riconvertendoli in formato leggibile per assicurarne l'accuratezza",
        "Durante il debug di problemi legati al tempo, converti tutti i timestamp in date leggibili per rendere l'analisi dei log più intuitiva",
        "Ricorda che i timestamp non considerano i secondi intercalari, fattore importante per applicazioni scientifiche o ad alta precisione",
        "Usa interi a 64 bit per memorizzare timestamp, evitando così problemi con sistemi che saranno in funzione dopo il 2038",
        "Quando comunichi date derivate da timestamp, includi sempre informazioni sul fuso orario per prevenire incomprensioni tra regioni diverse",
        "Per dati storici precedenti al 1970, testa accuratamente i timestamp negativi per assicurarti che il tuo sistema li gestisca correttamente",
        "Quando confronti timestamp da fonti diverse, verifica che usino lo stesso riferimento epoch e unità di misura",
        "Nei sistemi distribuiti, considera l'uso di generatori di timestamp sincronizzati per garantire coerenza tra server diversi",
        "Nelle interfacce utente, mostra sempre i timestamp convertiti nel fuso orario locale dell'utente per migliorare usabilità e comprensione"
      ]
    }
  }
}