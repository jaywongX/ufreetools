export default {
  name: 'Ricerca Codici di Stato HTTP',
  description: 'Cerca e comprendi i codici di stato e i messaggi di risposta HTTP',
  search: {
    title: 'Cerca codice di stato',
    placeholder: 'Inserisci codice di stato o cerca per descrizione',
    button: 'Cerca',
    recent: 'Ricerche recenti',
    common: 'Codici di stato comuni',
    filter: {
      all: 'Tutte le categorie',
      informational: '1xx - Risposte informative',
      success: '2xx - Risposte di successo',
      redirection: '3xx - Reindirizzamenti',
      clientError: '4xx - Errori client',
      serverError: '5xx - Errori server'
    }
  },
  results: {
    title: 'Informazioni codice di stato',
    code: 'Codice di stato',
    type: 'Tipo',
    message: 'Messaggio standard',
    description: 'Descrizione',
    spec: 'Specifica',
    references: 'Riferimenti',
    examples: 'Esempi',
    noResults: 'Nessun risultato trovato',
    searchError: 'Errore nella ricerca del codice di stato',
    tryAgain: 'Prova un\'altra ricerca',
    example: 'Esempio',
    notes: 'Note importanti'
  },
  categories: {
    title: 'Categorie',
    information: 'Risposte informative (1xx)',
    success: 'Risposte di successo (2xx)',
    redirection: 'Messaggi di reindirizzamento (3xx)',
    clientError: 'Risposte di errore client (4xx)',
    serverError: 'Risposte di errore server (5xx)',
    unofficial: 'Codici non ufficiali',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },
  statusInfo: {
    '100': {
      message: 'Continua',
      description: 'Il server ha ricevuto gli header della richiesta e il client dovrebbe continuare a inviare il corpo della richiesta.',
      shortDescription: 'Continua a inviare la richiesta',
      fullDescription: 'Il server ha ricevuto la parte iniziale della richiesta e il client dovrebbe continuare a inviare il resto.',
      notes: 'Tipicamente usato quando il client vuole verificare se il server accetterà la richiesta prima di inviare un corpo di grandi dimensioni.'
    },
    '101': {
      message: 'Cambio protocollo',
      description: 'Il richiedente ha chiesto al server di cambiare protocollo e il server ha accettato.',
      shortDescription: 'Cambio protocollo',
      fullDescription: 'Il server ha compreso la richiesta del client e notificherà attraverso l\'header Upgrade quale protocollo usare per completare la richiesta.',
      notes: 'Comunemente usato durante la creazione di connessioni WebSocket.'
    },
    '200': {
      message: 'OK',
      description: 'La richiesta è stata completata con successo. Il significato del successo dipende dal metodo HTTP usato.'
    },
    '201': {
      message: 'Creato',
      description: 'La richiesta è stata completata con successo e ha creato una nuova risorsa.'
    },
    '204': {
      message: 'Nessun contenuto',
      description: 'Il server ha elaborato con successo la richiesta ma non deve restituire alcun contenuto.'
    },
    '301': {
      message: 'Spostato permanentemente',
      description: 'L\'URL della risorsa richiesta è stato cambiato in modo permanente. Il nuovo URL è fornito nella risposta.'
    },
    '302': {
      message: 'Trovato',
      description: 'L\'URL della risorsa richiesta è stato cambiato temporaneamente. Il nuovo URL è fornito nella risposta.'
    },
    '304': {
      message: 'Non modificato',
      description: 'Non è necessario ritrasmettere la risorsa perché il client ha già una copia scaricata in precedenza.'
    },
    '400': {
      message: 'Richiesta non valida',
      description: 'Il server non può comprendere la richiesta a causa di una sintassi non valida.'
    },
    '401': {
      message: 'Non autorizzato',
      description: 'Il client deve autenticarsi per ottenere la risposta richiesta.'
    },
    '403': {
      message: 'Vietato',
      description: 'Il client non ha i permessi necessari per accedere al contenuto.'
    },
    '404': {
      message: 'Non trovato',
      description: 'Il server non può trovare la risorsa richiesta.'
    },
    '500': {
      message: 'Errore interno del server',
      description: 'Il server ha incontrato una situazione che non sa come gestire.'
    },
    '502': {
      message: 'Bad Gateway',
      description: 'Il server, agendo come gateway o proxy, ha ricevuto una risposta non valida dal server upstream.'
    },
    '503': {
      message: 'Servizio non disponibile',
      description: 'Il server non è pronto a gestire la richiesta. Cause comuni includono manutenzione o sovraccarico del server.'
    }
  },
  tools: {
    title: 'Strumenti',
    checkUrl: 'Controlla stato URL',
    statusCodeFlow: 'Diagramma flusso codici di stato',
    apiTest: 'Tester API',
    debugger: 'Debugger risposte',
    statusInspector: 'Controllore stato URL'
  },
  features: {
    title: 'Funzionalità',
    overview: 'Panoramica codici di stato',
    comparison: 'Confronto codici di stato',
    troubleshooting: 'Guida alla risoluzione problemi',
    bestPractices: 'Migliori pratiche',
    codeExamples: 'Esempi di codice'
  },
  details: {
    title: 'Dettagli',
    history: 'Storia',
    browser: 'Comportamento browser',
    seo: 'Impatto SEO',
    security: 'Impatto sicurezza',
    bestPractices: 'Migliori pratiche',
    alternatives: 'Codici alternativi',
    commonErrors: 'Errori comuni'
  },
  codeExamples: {
    title: 'Esempi di codice',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: 'Copia codice',
    response: 'Esempio risposta',
    request: 'Esempio richiesta'
  },
  category: {
    intro: 'I codici di stato HTTP sono la risposta del server alle richieste del browser, divisi in 5 categorie:',
    informational: '1xx (Codici informativi) - La richiesta è stata ricevuta e sta venendo elaborata',
    success: '2xx (Codici di successo) - La richiesta è stata elaborata correttamente',
    redirection: '3xx (Codici di reindirizzamento) - Sono necessarie azioni aggiuntive per completare la richiesta',
    clientError: '4xx (Codici di errore client) - Il server non può elaborare la richiesta',
    serverError: '5xx (Codici di errore server) - Il server ha avuto un errore elaborando la richiesta'
  },
  codes: {
    '100': {
      shortDescription: 'Continua la richiesta',
      description: 'Il server ha ricevuto la parte iniziale della richiesta e il client dovrebbe continuare a inviare il resto.',
      notes: 'Tipicamente usato quando il client vuole verificare se il server accetterà la richiesta prima di inviare un corpo di grandi dimensioni.'
    },
    '101': {
      shortDescription: 'Cambio protocollo',
      description: 'Il server ha compreso la richiesta del client e notificherà attraverso l\'header Upgrade quale protocollo usare per completare la richiesta.',
      notes: 'Comunemente usato durante la creazione di connessioni WebSocket.'
    },
    '200': {
      shortDescription: 'Richiesta riuscita',
      description: 'La richiesta è stata completata con successo e il server ha restituito il contenuto richiesto. Questo è il codice di stato più comune.',
      notes: 'Tutte le richieste GET riuscite dovrebbero restituire questo codice.'
    },
    '201': {
      shortDescription: 'Creato',
      description: 'La richiesta è stata completata con successo e il server ha creato una nuova risorsa. Tipicamente restituito dopo una richiesta POST.',
      notes: 'Dovrebbe restituire la posizione (URI) della nuova risorsa creata.'
    },
    '204': {
      shortDescription: 'Nessun contenuto',
      description: 'Il server ha elaborato con successo la richiesta ma non deve restituire alcun contenuto.',
      notes: 'Comunemente usato per richieste DELETE riuscite o quando serve solo resettare la vista client.'
    },
    '301': {
      shortDescription: 'Reindirizzamento permanente',
      description: 'La risorsa richiesta è stata spostata permanentemente in una nuova posizione. Ogni riferimento futuro a questa risorsa dovrebbe usare il nuovo URL.',
      notes: 'I motori di ricerca aggiorneranno l\'URL della risorsa e i browser tipicamente memorizzeranno questo reindirizzamento nella cache.'
    },
    '302': {
      shortDescription: 'Reindirizzamento temporaneo',
      description: 'La risorsa richiesta è temporaneamente disponibile a un URL diverso, ma il richiedente dovrebbe continuare a usare l\'URL originale.',
      notes: 'Diversamente dal 301, i motori di ricerca non aggiorneranno il link alla risorsa e i browser potrebbero non memorizzare questo reindirizzamento nella cache.'
    },
    '304': {
      shortDescription: 'Non modificato',
      description: 'La risorsa non è stata modificata e può essere usata la versione memorizzata nella cache del client. Tipicamente usato per richieste GET condizionali.',
      notes: 'Il server non dovrebbe restituire un corpo di risposta, aiutando a migliorare prestazioni e ridurre l\'uso di banda.'
    },
    '400': {
      shortDescription: 'Richiesta non valida',
      description: 'Il server non può comprendere la richiesta a causa di un formato non valido. Il client non dovrebbe ripetere la richiesta senza modifiche.',
      notes: 'Tipicamente causato da parametri con formato errato, parametri mancanti o valori di parametro non validi.'
    },
    '401': {
      shortDescription: 'Non autorizzato',
      description: 'La richiesta richiede autenticazione dell\'utente, che non è stata fornita o è non valida.',
      notes: 'Il client dovrebbe fornire o riprovare a fornire credenziali corrette.'
    },
    '403': {
      shortDescription: 'Accesso negato',
      description: 'Il server ha compreso la richiesta ma rifiuta di eseguirla. Diversamente dal 401, l\'autenticazione non aiuterà.',
      notes: 'Tipicamente causato da permessi insufficienti, come cercare di accedere a contenuti riservati agli amministratori.'
    },
    '404': {
      shortDescription: 'Non trovato',
      description: 'Il server non può trovare la risorsa richiesta, probabilmente a causa di un URL errato o di una risorsa rimossa.',
      notes: 'Uno dei codici di errore più comuni. Dovrebbe comunicare chiaramente all\'utente che la risorsa non esiste.'
    },
    '405': {
      shortDescription: 'Metodo non consentito',
      description: 'Il metodo di richiesta specificato nella riga di richiesta non può essere usato per la risorsa richiesta.',
      notes: 'La risposta deve includere un header Allow che indica i metodi validi per quella risorsa.'
    },
    '409': {
      shortDescription: 'Conflitto',
      description: 'La richiesta è in conflitto con lo stato corrente del server, tipicamente in richieste PUT.',
      notes: 'Comunemente visto quando si cerca di creare una risorsa già esistente o durante modifiche concorrenti alla stessa risorsa.'
    },
    '429': {
      shortDescription: 'Troppe richieste',
      description: 'L\'utente ha inviato troppe richieste in un dato periodo di tempo ("rate limiting").',
      notes: 'Dovrebbe includere un header Retry-After che indica al client quando può riprovare.'
    },
    '500': {
      shortDescription: 'Errore interno del server',
      description: 'Il server ha incontrato una situazione che non sa come gestire, tipicamente un errore di codice o un problema temporaneo.',
      notes: 'Uno dei codici di errore server più comuni. Dovrebbe fornire informazioni dettagliate e log per il debug.'
    },
    '502': {
      shortDescription: 'Bad Gateway',
      description: 'Il server, agendo come gateway o proxy, ha ricevuto una risposta non valida dal server upstream.',
      notes: 'Tipicamente visto quando si usano reverse proxy o load balancer e il servizio upstream non è disponibile o risponde in modo anomalo.'
    },
    '503': {
      shortDescription: 'Servizio non disponibile',
      description: 'Il server non è temporaneamente disponibile, tipicamente per sovraccarico o manutenzione.',
      notes: 'Dovrebbe includere un header Retry-After che indica al client quando riprovare, aiutando a ridurre il carico sul server.'
    },
    '504': {
      shortDescription: 'Gateway Timeout',
      description: 'Il server, agendo come gateway o proxy, non ha ricevuto una risposta tempestiva dal server upstream.',
      notes: 'Comunemente visto quando i servizi dietro un proxy richiedono troppo tempo per rispondere o ci sono problemi di connessione di rete.'
    }
  },
  article: {
    title: "Guida di riferimento ai codici di stato HTTP - Comprendere i codici di risposta di rete",
    intro: {
      title: "Cosa sono i codici di stato HTTP e perché sono importanti?",
      p1: "<b>I codici di stato HTTP</b> sono codici di risposta standard emessi dai server web per indicare l'esito di una richiesta client. Questi codici a tre cifre sono divisi in cinque categorie, ciascuna con uno scopo specifico nella comunicazione web. Il nostro strumento di ricerca codici di stato HTTP fornisce accesso immediato a informazioni dettagliate su questi codici, aiutando sviluppatori, amministratori di siti e professionisti IT a risolvere problemi legati al web in modo efficiente.",
      p2: "Comprendere <b>i codici di risposta HTTP</b> è essenziale per chiunque lavori con siti web o applicazioni web. Questi codici comunicano se una richiesta HTTP è stata completata con successo, richiede azioni aggiuntive o ha incontrato un errore. Identificando rapidamente il significato dietro codici come 404 Non trovato o 500 Errore interno del server, puoi diagnosticare problemi più velocemente e implementare soluzioni efficaci per migliorare l'esperienza utente e la funzionalità del sito.",
      p3: "Il nostro strumento completo di <b>riferimento codici di stato</b> non fornisce solo definizioni di base, ma spiegazioni dettagliate per ogni codice, cause comuni e azioni raccomandate. Che tu stia debugando un sito, ottimizzando le prestazioni SEO o sviluppando API, questo strumento è il tuo alleato per interpretare le risposte del server e mantenere il web funzionante senza intoppi."
    },
    useCases: {
      title: "Applicazioni pratiche della conoscenza dei codici di stato HTTP",
      case1: "<b>Risoluzione problemi siti web</b>: Quando gli utenti segnalano problemi ad accedere a certe pagine, i codici di stato HTTP possono rapidamente determinare se il problema è una risorsa mancante (404), un errore server (5xx) o un problema di permessi (403). Il nostro strumento ti aiuta a comprendere questi errori e implementare le correzioni appropriate.",
      case2: "<b>Ottimizzazione SEO</b>: I motori di ricerca usano i codici di stato per valutare la salute del tuo sito. Gestire correttamente reindirizzamenti (301 vs 302) e pagine di errore ha un impatto significativo sul ranking di ricerca. Usa il nostro strumento per assicurarti che il tuo sito implementi correttamente i codici di stato per ottenere le migliori prestazioni SEO.",
      case3: "<b>Sviluppo e test API</b>: Le API REST si affidano pesantemente ai codici di stato HTTP per comunicare lo stato delle risposte. Gli sviluppatori possono usare il nostro riferimento per implementare i codici di stato più appropriati per i loro endpoint API, assicurando una comunicazione chiara tra servizi.",
      case4: "<b>Configurazione server</b>: Gli amministratori di sistema usano i codici di stato per diagnosticare problemi di configurazione di server web, load balancer e proxy. Le nostre spiegazioni dettagliate aiutano a determinare se gli errori derivano da impostazioni del server, problemi di rete o codice applicativo.",
      case5: "<b>Sicurezza applicazioni web</b>: I professionisti della sicurezza analizzano pattern anomali di codici di stato per rilevare potenziali attacchi o vulnerabilità. Comprendere l'impatto sulla sicurezza dei diversi codici di stato aiuta a implementare controlli di accesso appropriati e meccanismi di protezione."
    },
    tutorial: {
      title: "Come usare lo strumento di ricerca codici di stato HTTP",
      intro: "Il nostro strumento di riferimento per codici di stato HTTP è progettato per essere intuitivo ed efficiente. Segui questi semplici passaggi per trovare rapidamente informazioni su qualsiasi codice di stato HTTP:",
      step1: {
        title: "Passo 1: Inserisci i criteri di ricerca",
        description: "Inizia inserendo un codice di stato specifico (come 404 o 500) o una parola chiave descrittiva (come \"non trovato\" o \"errore server\") nella barra di ricerca in alto. La funzione di ricerca è progettata per corrispondere sia ai numeri del codice che alle descrizioni, dandoti flessibilità nel modo in cui cerchi."
      },
      step2: {
        title: "Passo 2: Filtra per categoria (opzionale)",
        description: "Se vuoi esplorare codici all'interno di una categoria specifica, usa il menu a discesa per filtrare i risultati. Puoi scegliere tra risposte informative (1xx), risposte di successo (2xx), reindirizzamenti (3xx), errori client (4xx) o errori server (5xx). Questa opzione di filtro è particolarmente utile quando vuoi esplorare codici di stato correlati."
      },
      step3: {
        title: "Passo 3: Visualizza la lista dei codici di stato",
        description: "Dopo la ricerca o il filtraggio, esamina la lista dei codici di stato corrispondenti. Ogni voce mostra il numero del codice, il nome e una breve descrizione. Il codice colore ti aiuta a identificare rapidamente la categoria di ogni codice: blu per informativo, verde per successo, giallo per reindirizzamento, rosso per errori client e viola per errori server."
      },
      step4: {
        title: "Passo 4: Espandi per vedere i dettagli",
        description: "Clicca su qualsiasi voce del codice di stato per espanderla e vedere informazioni complete. La vista espansa fornisce una descrizione dettagliata dello scopo del codice, esempi di risposte HTTP e note pratiche su quando questo codice appare e come gestirlo. Questi dettagli ti aiutano a comprendere appieno cosa significa ogni codice di stato in scenari reali."
      }
    },
    common: {
      title: "Analisi dei codici di stato HTTP più importanti",
      intro: "Sebbene siano stati definiti decine di codici di stato HTTP in varie specifiche, solo una manciata è comunemente incontrata durante lo sviluppo web e la risoluzione dei problemi. Ecco un'analisi approfondita dei codici più importanti che dovresti conoscere:",
      code1: {
        title: "200 OK - La base delle risposte di successo",
        description: "<b>Il codice di stato 200 OK</b> indica che il server ha elaborato con successo la richiesta. Questa è la risposta standard per richieste HTTP riuscite, specialmente per richieste GET che recuperano dati. Un sito web funzionante correttamente dovrebbe generare risposte 200 per la maggior parte delle interazioni utente. Tuttavia, se una pagina restituisce 200 ma appare comunque scorretta, il problema potrebbe essere nel contenuto o nel codice client, non nella comunicazione con il server."
      },
      code2: {
        title: "404 Not Found - Gestire risorse mancanti",
        description: "<b>Il codice di stato 404 Not Found</b> appare quando la risorsa richiesta non esiste sul server. Questo accade tipicamente con link interrotti, URL digitati erroneamente o contenuti rimossi. Da una prospettiva SEO, troppi errori 404 possono influire negativamente sul ranking del tuo sito. Le migliori pratiche includono implementare pagine 404 personalizzate con opzioni di navigazione utili, controllare regolarmente i link interrotti e impostare reindirizzamenti 301 appropriati per contenuti spostati permanentemente."
      },
      code3: {
        title: "500 Internal Server Error - Gestire problemi lato server",
        description: "<b>Il codice di stato 500 Internal Server Error</b> indica che il server ha incontrato una condizione imprevista che gli impedisce di soddisfare la richiesta. Questo è un errore generico lato server che può essere causato da errori di configurazione, errori negli script o limiti delle risorse. Quando risolvi errori 500, controlla i log del server per messaggi di errore specifici, rivedi le recenti modifiche al codice e verifica la disponibilità delle risorse del server. Per gli sviluppatori, implementare log degli errori dettagliati e monitoraggio è cruciale per risolvere rapidamente questi problemi lato server."
      },
      code4: {
        title: "301 vs 302 Reindirizzamenti - Considerazioni SEO strategiche",
        description: "La differenza tra i codici di stato <b>301 (Reindirizzamento permanente)</b> e <b>302 (Reindirizzamento temporaneo)</b> è cruciale per le strategie SEO. Un reindirizzamento 301 dice ai motori di ricerca che il contenuto è stato spostato permanentemente, trasferendo la maggior parte del valore di ranking dall'URL originale al nuovo. Al contrario, un reindirizzamento 302 indica uno spostamento temporaneo e non trasferisce lo stesso valore SEO. Usare il tipo sbagliato di reindirizzamento può influenzare significativamente la tua visibilità nei motori di ricerca, quindi è importante scegliere quello appropriato in base alla natura dello spostamento del contenuto."
      }
    },
    faq: {
      title: "Domande frequenti sui codici di stato HTTP",
      q1: "Qual è la differenza tra codici di stato 4xx e 5xx?",
      a1: "La differenza principale tra <b>codici di stato 4xx e 5xx</b> è l'origine dell'errore. I codici 4xx indicano errori client, cioè il problema è nella richiesta stessa. Esempi includono cercare di accedere a una risorsa inesistente (404), fornire credenziali non valide (401) o mancanza di permessi appropriati (403). Il client deve modificare la richiesta per risolvere questi problemi.<br><br>Al contrario, i codici 5xx indicano errori server, cioè il server non è riuscito a soddisfare una richiesta valida. Questi possono essere causati da errori di configurazione del server, errori nell'applicazione o limiti delle risorse. Esempi includono errore interno del server (500), bad gateway (502) o servizio non disponibile (503). Tipicamente richiedono un intervento lato server per essere risolti e il client non può risolverli modificando la richiesta.",
      
      q2: "Come influiscono i codici di stato HTTP sul SEO e sul ranking nei motori di ricerca?",
      a2: "<b>I codici di stato HTTP influenzano significativamente le prestazioni SEO</b> e come i motori di ricerca indicizzano il tuo sito. I crawler dei motori di ricerca usano questi codici per determinare come gestire le pagine che scoprono:<br><br>• 200 (OK) indica contenuto disponibile per l'indicizzazione<br>• 301 (Reindirizzamento permanente) trasferisce il segnale di ranking al nuovo URL<br>• 302 (Reindirizzamento temporaneo) segue il reindirizzamento mantenendo il ranking dell'URL originale<br>• 404 (Non trovato) può influire negativamente sul ranking se presente in grandi quantità<br>• 410 (Eliminato) dice ai motori di ricerca di rimuovere il contenuto dall'indice<br>• Errori 500 possono impedire l'indicizzazione e, se persistenti, danneggiare il ranking<br>• 503 (Servizio non disponibile) con header Retry-After dice ai motori di ricerca di riprovare più tardi<br><br>Implementare correttamente i codici di stato assicura che i motori di ricerca comprendano correttamente la struttura del tuo sito, influenzando direttamente la tua visibilità nei risultati di ricerca.",
      
      q3: "Quale codice di stato HTTP dovrei usare per pagine temporaneamente non disponibili?",
      a3: "Per <b>pagine temporaneamente non disponibili</b>, il codice di stato più appropriato è <b>503 Service Unavailable</b>. Questo codice specifica che il server è temporaneamente non disponibile a causa di manutenzione, sovraccarico o altre condizioni temporanee. Ciò che rende il 503 particolarmente utile per interruzioni temporanee è la possibilità di includere un header Retry-After che indica a client e motori di ricerca quando riprovare ad accedere alla risorsa.<br><br>Usare 503 durante manutenzioni programmate o interruzioni temporanee offre diversi vantaggi rispetto ad altri codici di errore:<br><br>• I motori di ricerca non rimuoveranno il tuo contenuto dall'indice, come potrebbe accadere con errori 404 o 500 persistenti<br>• Comunica chiaramente agli user agent che il problema è temporaneo<br>• Aiuta a mantenere il tuo valore SEO durante finestre di manutenzione<br>• L'header Retry-After aiuta a gestire il traffico dei crawler durante i periodi di inattività<br><br>Per massimizzare l'efficacia, abbina la risposta 503 a una pagina di manutenzione user-friendly che spieghi la situazione e il tempo previsto per la risoluzione.",
      
      q4: "Come gestire reindirizzamenti per migrazioni di siti web SEO-friendly?",
      a4: "Per <b>migrazioni di siti web SEO-friendly</b>, implementare correttamente i reindirizzamenti è essenziale per preservare ranking di ricerca e esperienza utente. Il metodo raccomandato include questi passaggi chiave:<br><br>1. <b>Usa reindirizzamenti 301 permanenti</b> per tutto il contenuto spostato, trasferendo circa il 90-99% del valore di ranking al nuovo URL<br>2. Implementa <b>reindirizzamenti uno-a-uno</b> da ogni vecchio URL al suo corrispondente diretto nuovo URL, invece di reindirizzare tutto alla homepage<br>3. Crea una <b>mappatura completa dei reindirizzamenti</b> che documenti tutti i vecchi URL e i loro nuovi target<br>4. Configura <b>reindirizzamenti lato server</b> (tramite .htaccess, web.config o configurazione server), non affidarti a JavaScript o meta refresh<br>5. <b>Mantieni la struttura degli URL</b> quando possibile per minimizzare la necessità di reindirizzamenti<br>6. <b>Testa tutti i reindirizzamenti</b> prima del lancio per assicurarti che funzionino correttamente e non creino catene o loop di reindirizzamento<br><br>Inoltre, mantieni questi reindirizzamenti per almeno un anno dopo la migrazione, assicurando che motori di ricerca e link salvati continuino a trovare correttamente i tuoi contenuti.",
      
      q5: "Cosa significa il codice di stato 304 Not Modified?",
      a5: "Il <b>codice di stato 304 Not Modified</b> indica che la risorsa non è stata modificata rispetto alla versione memorizzata nella cache del client, basata sugli header condizionali inviati dal client. Questo è in effetti un codice di stato positivo che aiuta a ottimizzare le prestazioni web attraverso una cache efficiente.<br><br>Quando un browser ha già una versione in cache di una risorsa, può inviare una richiesta con header condizionali come If-Modified-Since o If-None-Match (con ETags). Se il server determina che la risorsa non è cambiata, risponderà con codice 304 invece di inviare nuovamente l'intera risorsa. Questo processo:<br><br>• Riduce l'uso di banda sia per client che server<br>• Migliora i tempi di caricamento delle pagine usando risorse dalla cache<br>• Riduce il carico sul server evitando trasferimenti di dati non necessari<br>• Migliora l'esperienza utente con caricamenti più rapidi delle pagine successive<br><br>Tipicamente vedrai risposte 304 per asset statici come immagini, CSS, file JavaScript e occasionalmente per contenuti HTML non modificati. Questo codice di stato è un componente chiave di strategie efficaci di caching web.",
      
      q6: "Come debuggo codici di stato HTTP insoliti o personalizzati?",
      a6: "Debugging di <b>codici di stato HTTP insoliti o personalizzati</b> richiede un approccio sistematico e strumenti specializzati. Inizia con questi metodi per raccogliere informazioni dettagliate:<br><br>1. <b>Usa gli strumenti per sviluppatori del browser</b>: Controlla la scheda Network per vedere il codice di stato esatto e gli header di risposta<br>2. <b>Usa strumenti di ispezione HTTP</b> come Postman, cURL o debugger HTTP specializzati, che forniscono analisi dettagliate di richieste e risposte<br>3. <b>Controlla i log del server</b> per contesto aggiuntivo su come è stato generato il codice di stato insolito<br>4. <b>Rivedi il codice applicativo</b> che gestisce le risposte, specialmente se usi framework che potrebbero implementare codici di stato personalizzati<br>5. <b>Consulta la documentazione API</b> se il codice di stato proviene da un servizio di terze parti<br><br>Per codici di stato non standard, ricorda che:<br>• Codici nell'intervallo 9xx sono completamente non standard e specifici di certe applicazioni<br>• Codici nell'intervallo standard (1xx-5xx) ma non nel registro ufficiale potrebbero provenire da specifiche più recenti o estensioni di vendor<br>• Alcuni servizi usano codici standard in modi non standard, richiedendo documentazione specifica del servizio<br><br>Il nostro strumento di ricerca codici di stato HTTP può aiutare con i codici standard, ma per codici veramente personalizzati dovrai consultare la documentazione specifica dell'applicazione o servizio con cui stai interagendo."
    },
    relatedTools: {
      title: "Esplora altri strumenti per sviluppo web",
      description: "Migliora il tuo flusso di lavoro di sviluppo web con questi strumenti complementari:",
      tool1: {
        name: "Controllore sicurezza header HTTP",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analizza e valuta la sicurezza degli header di risposta HTTP."
      },
      tool2: {
        name: "Rilevatore proxy HTTP",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "Rileva se la tua connessione usa proxy HTTP e analizza gli header relativi ai proxy per verificarne la sicurezza."
      },
      tool3: {
        name: "Parser parametri URL",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Analizza, interpreta e manipola parametri e stringhe di query negli URL."
      },
      tool4: {
        name: "Formattatore e validatore JSON",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Formatta, convalida e abbellisce dati JSON, utile per sviluppo e debug di API."
      }
    },
    resources: {
      title: "Risorse autorevoli sui codici di stato HTTP",
      resource1: {
        name: "Riferimento codici di stato HTTP di Mozilla Developer Network (MDN)",
        url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status",
        description: "Il riferimento più completo e aggiornato sui codici di stato HTTP, con spiegazioni dettagliate e informazioni sulla conformità agli standard web."
      },
      resource2: {
        name: "Registro ufficiale codici di stato HTTP di IANA",
        url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
        description: "Il registro ufficiale dell'Internet Assigned Numbers Authority (IANA) per i codici di stato HTTP standardizzati, la fonte autorevole per codici standard."
      },
      resource3: {
        name: "RFC 7231 - HTTP/1.1 Semantics: Codici di stato",
        url: "https://tools.ietf.org/html/rfc7231#section-6",
        description: "La specifica ufficiale HTTP/1.1 che definisce semantica e utilizzo dei codici di stato HTTP standard."
      }
    }
  }
}