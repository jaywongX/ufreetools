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
  }
};