export default {
  name: 'Convertitore cURL',
  description: 'Converte comandi cURL in frammenti di codice per diversi linguaggi di programmazione',
  title: 'Da cURL a codice',
  subtitle: 'Trasforma comandi cURL in codice per vari linguaggi, per integrare rapidamente richieste HTTP nei tuoi progetti',
  input: {
    title: 'Comando cURL',
    placeholder: 'Inserisci qui il comando cURL',
    parse: 'Analizza cURL',
    clear: 'Pulisci',
    examples: 'Comandi di esempio:',
    options: 'Opzioni analizzatore',
    validateCommand: 'Valida comando',
    formatCurl: 'Formatta cURL'
  },
  options: {
    detectAuth: 'Rileva automaticamente autenticazione',
    resolveVariables: 'Risolvi variabili d\'ambiente',
    processContinuations: 'Elabora continuazioni di riga (\\)',
    followRedirects: 'Segui reindirizzamenti',
    preserveHeaders: 'Mantieni tutti gli header',
    ignoreErrors: 'Ignora errori di analisi',
    noDuplicateHeaders: 'Nessun header duplicato (usa l\'ultimo)'
  },
  output: {
    title: 'Output codice',
    language: 'Linguaggio di destinazione',
    copy: 'Copia',
    copyTooltip: 'Copia negli appunti',
    download: 'Scarica',
    beautify: 'Formatta',
    codeTitle: 'Codice {language}',
    errorTitle: 'Errore conversione',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Browser (fetch)',
      curl: 'cURL (formattato)',
      json: 'JSON (oggetto richiesta)',
      har: 'HAR (archivio HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },
  request: {
    title: 'Dettagli richiesta',
    method: 'Metodo',
    url: 'URL',
    headers: 'Header',
    body: 'Corpo',
    auth: 'Autenticazione',
    options: 'Opzioni',
    cookie: 'Cookie',
    queryParams: 'Parametri query',
    formData: 'Dati form',
    visualize: 'Visualizza'
  },
  visualization: {
    title: 'Visualizzazione richiesta',
    request: 'Richiesta',
    response: 'Risposta',
    headers: 'Header',
    body: 'Corpo',
    timing: 'Tempistica',
    raw: 'Grezzo'
  },
  analysis: {
    title: 'Analisi comando',
    insecureWarning: 'Attenzione: questo comando usa --insecure/-k (verifica SSL disabilitata)',
    verboseIgnored: 'Nota: la modalità verbose (-v) è stata ignorata nella conversione',
    unsupportedOptions: 'Opzioni non supportate',
    warnings: 'Avvisi',
    info: 'Informazioni'
  },
  messages: {
    parsing: 'Analisi comando cURL in corso...',
    parseFailed: 'Analisi comando cURL fallita: {error}',
    parseSuccess: 'Comando cURL analizzato con successo',
    copied: 'Codice copiato negli appunti',
    downloaded: 'Codice scaricato',
    invalidCurl: 'Comando cURL non valido',
    emptyCurl: 'Inserisci un comando cURL',
    validCurl: 'Comando cURL valido',
    unknownOption: 'Opzione sconosciuta: {option}',
    unsupportedMethod: 'Attenzione: non tutti i linguaggi supportano il metodo HTTP {method}',
    curlRequired: 'Il comando deve iniziare con "curl "',
    copyFailed: 'Copia fallita, copia manualmente'
  },
  examples: {
    title: 'Comandi cURL di esempio',
    basic: 'Richiesta GET base',
    headers: 'Header personalizzati',
    post: 'POST con JSON',
    formData: 'Invio dati form',
    auth: 'Autenticazione base',
    complex: 'Esempio complesso',
    exampleCommands: {
      getRequest: 'Richiesta GET',
      postJson: 'POST JSON',
      postForm: 'POST form',
      withAuth: 'Con autenticazione',
      uploadFile: 'Carica file'
    }
  },
  actions: {
    convert: 'Converti',
    converting: 'Conversione in corso...'
  },
  article: {
    title: "Convertitore cURL: trasforma richieste da riga di comando in codice",
    features: {
      title: "Scopri la conversione cURL e le sue applicazioni",
      description: "<strong>Convertitore cURL</strong> è uno strumento potente che trasforma comandi cURL in frammenti di codice eseguibili per vari linguaggi di programmazione. Questo strumento colma il divario tra documentazione API, test da terminale e implementazione effettiva, permettendo agli sviluppatori di integrare rapidamente richieste HTTP nei loro progetti senza dover convertire manualmente la sintassi.<br><br>La funzionalità principale di questo <strong>convertitore da cURL a codice</strong> è analizzare la sintassi da riga di comando di cURL (inclusi header, metodi di richiesta, autenticazione, payload dati e altre opzioni) e generare codice equivalente nel linguaggio di programmazione scelto che esegua la stessa richiesta HTTP. Lo strumento supporta linguaggi popolari come Python, JavaScript, PHP, Java, Ruby, Go e C#, permettendo agli sviluppatori di passare senza soluzione di continuità dal testare API nel terminale all'implementarle nel codice di produzione. Che tu stia lavorando con servizi RESTful, endpoint GraphQL o tradizionali API SOAP, questo <strong>generatore di richieste HTTP</strong> si occupa del lavoro di conversione sintattica, riducendo significativamente i tempi di sviluppo ed eliminando errori di sintassi.",
      useCases: {
        title: "Applicazioni pratiche della conversione cURL",
        items: [
          "<strong>Accelerazione integrazione API</strong>: quando integrano API di terze parti, gli sviluppatori spesso iniziano testando gli endpoint con comandi cURL forniti nella documentazione. Il <strong>parser di comandi cURL</strong> permette di convertire direttamente queste richieste di esempio nel linguaggio del tuo progetto, accelerando l'integrazione e garantendo che il formato della richiesta sia copiato accuratamente dalla documentazione. Questo elimina potenziali errori nella conversione manuale delle specifiche delle chiamate API e riduce il tempo di integrazione di API complesse da ore a minuti.",
          "<strong>Sviluppo cross-linguaggio</strong>: team di sviluppo che lavorano su più stack tecnologici possono usare il <strong>generatore di codice per richieste HTTP</strong> per condividere pattern di interazione API. Gli sviluppatori backend possono validare gli endpoint API con cURL, poi fornire agli sviluppatori frontend codice JavaScript pronto all'uso che esegua le stesse richieste, garantendo coerenza tra i componenti del sistema seguendo al contempo le migliori pratiche specifiche del linguaggio.",
          "<strong>Creazione documentazione API</strong>: autori tecnici e sviluppatori API possono generare esempi di codice coerenti in più linguaggi partendo da un singolo comando cURL verificato. Questo garantisce che tutti gli esempi di codice nella documentazione eseguano la stessa richiesta, mantenendo la coerenza mentre forniscono implementazioni specifiche per linguaggio che seguono pattern idiomatici e migliori pratiche per ogni linguaggio supportato.",
          "<strong>Modernizzazione sistemi legacy</strong>: quando aggiornano applicazioni legacy, gli sviluppatori spesso devono replicare le interazioni HTTP esistenti in codice moderno. Catturando le richieste API attuali con gli strumenti per sviluppatori del browser (che possono essere esportati come cURL) e poi convertendole in linguaggi di programmazione moderni, il <strong>convertitore cURL</strong> aiuta a migrare le funzionalità mantenendo modelli precisi di comunicazione API.",
          "<strong>Debug e risoluzione problemi</strong>: quando una richiesta API nell'applicazione fallisce, gli sviluppatori possono estrarre la richiesta problematica come comando cURL (tipicamente ottenuto dai log del server o strumenti di monitoraggio), testarla e modificarla direttamente nel terminale finché non funziona correttamente, poi usare il convertitore per generare il codice che risolve il problema nel codebase dell'applicazione.",
          "<strong>Strumento didattico</strong>: istruttori e studenti di programmazione possono usare il <strong>generatore di codice per richieste</strong> per imparare come sono strutturate le richieste HTTP in diversi linguaggi di programmazione. Confrontando il codice generato per la stessa richiesta in più linguaggi, gli sviluppatori possono comprendere meglio le implementazioni dei client HTTP specifiche del linguaggio, aiutandoli a imparare nuovi linguaggi attraverso esempi pratici."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sulla conversione cURL",
      items: [
        {
          question: "Cos'è cURL e perché dovrei convertirlo in codice?",
          answer: "cURL (Client URL) è uno strumento da riga di comando e libreria per trasferire dati usando vari protocolli tramite URL. Gli sviluppatori usano spesso comandi cURL per testare endpoint API, eseguire debug di richieste HTTP e documentare interazioni API, grazie alla sua ubiquità e semplicità. Tuttavia, quando si implementano queste richieste di test in applicazioni reali, la sintassi cURL deve essere convertita nel linguaggio di programmazione in uso. Il <strong>strumento di conversione cURL</strong> automatizza questo processo di conversione, eliminando errori di sintassi manuali e risparmiando tempo di sviluppo. Invece di capire come convertire opzioni specifiche di cURL (come -H per gli header o -d per i dati) in costrutti specifici del linguaggio, il convertitore gestisce automaticamente queste conversioni, garantendo che il codice generato esegua la stessa richiesta HTTP seguendo al contempo convenzioni e migliori pratiche specifiche del linguaggio."
        },
        {
          question: "Quanto è accurato il codice convertito rispetto al comando cURL originale?",
          answer: "Il <strong>convertitore da cURL a codice</strong> produce risultati di conversione altamente accurati che replicano funzionalmente il comando cURL originale, rispettando al contempo le idiomaticità specifiche del linguaggio. Il convertitore mantiene tutti i componenti essenziali della richiesta, inclusi URL, metodo HTTP, header, parametri query, corpo della richiesta (in vari formati), credenziali di autenticazione e opzioni comuni come il tracciamento dei reindirizzamenti e la verifica SSL. Per i linguaggi supportati, la conversione mantiene l'equivalenza semantica, il che significa che il codice generato effettuerà esattamente la stessa richiesta HTTP eseguita dal comando cURL originale.<br><br>Detto questo, alcune funzionalità avanzate o oscure di cURL potrebbero non avere equivalenti diretti in tutti i linguaggi di programmazione. In questi casi limite, il convertitore implementa la funzionalità più vicina o fornisce commenti nel codice generato che spiegano eventuali differenze. Per implementazioni critiche in produzione, si consiglia di verificare il codice generato attraverso test effettivi, specialmente quando si usano opzioni cURL specializzate come certificati SSL personalizzati, configurazioni di rete specifiche o meccanismi di autenticazione insoliti."
        },
        {
          question: "Quali linguaggi di programmazione supporta il convertitore?",
          answer: "Il <strong>generatore di codice per richieste HTTP</strong> supporta la conversione in molti linguaggi e librerie principali comunemente usati per le interazioni API. Attualmente i target supportati includono:<br><br>• <strong>Python</strong>: la popolare libreria requests e lo standard http.client<br>• <strong>JavaScript/Node.js</strong>: multiple varianti, inclusa Fetch API (browser e Node.js), Axios e la libreria Request<br>• <strong>PHP</strong>: funzioni cURL native e client HTTP Guzzle<br>• <strong>Java</strong>: HttpClient Java 11+ e libreria OkHttp<br>• <strong>Go</strong>: client HTTP della libreria standard<br>• <strong>Ruby</strong>: Net::HTTP nativo<br>• <strong>C#</strong>: implementazione HttpClient<br>• <strong>PowerShell</strong>: Invoke-WebRequest<br>• <strong>Rust</strong>: client reqwest<br><br>Ogni conversione linguaggio è ottimizzata per produrre codice che segue le migliori pratiche e convenzioni del linguaggio e della libreria target, non semplicemente una traduzione letterale della sintassi. Questo approccio garantisce che il codice generato non sia solo funzionale, ma anche manutenibile e scritto nel modo in cui sviluppatori esperti in ogni ecosistema linguaggio scriverebbero naturalmente codice client HTTP."
        },
        {
          question: "Il convertitore può gestire comandi cURL complessi con molte opzioni?",
          answer: "Sì, il <strong>parser di comandi cURL</strong> è in grado di gestire comandi con molte opzioni e strutture di richiesta complesse. Il convertitore supporta:<br><br>• <strong>Metodi di autenticazione</strong>: inclusi autenticazione base, token Bearer, chiavi API e implementazioni OAuth<br>• <strong>Header personalizzati</strong>: multipli header con qualsiasi valore, inclusa specifica del content type<br>• <strong>Corpo richiesta</strong>: JSON, dati form, form multiparte, dati binari e payload testuali<br>• <strong>Metodi HTTP</strong>: tutti i metodi standard (GET, POST, PUT, DELETE, PATCH ecc.)<br>• <strong>Parametri URL</strong>: nell'URL e come parametri separati<br>• <strong>Upload file</strong>: converte la sintassi per l'upload di file nei linguaggi supportati<br>• <strong>Opzioni SSL/TLS</strong>: impostazioni verifica certificati<br>• <strong>Configurazione proxy</strong>: quando supportata dal linguaggio target<br>• <strong>Cookie</strong>: invio e memorizzazione cookie<br><br>Lo strumento può gestire comandi con continuazioni di riga (backslash), variazioni di virgolette e strutture complesse annidate come payload JSON o campi form annidati. Anche comandi estratti direttamente da strumenti per sviluppatori del browser o strumenti come Postman, che spesso generano comandi cURL molto dettagliati con molte opzioni, possono essere convertiti con successo in codice conciso ed efficiente nel linguaggio target."
        },
        {
          question: "Come si assicura che il codice generato segua le migliori pratiche del mio linguaggio?",
          answer: "Il <strong>generatore di codice per richieste</strong> è progettato per generare codice non solo funzionale ma anche conforme alle idiomaticità e migliori pratiche specifiche del linguaggio. Per ogni linguaggio supportato, il convertitore implementa diverse ottimizzazioni:<br><br>• <strong>Scelta libreria</strong>: usa le librerie client HTTP più appropriate e ampiamente adottate per ogni linguaggio (ad esempio requests per Python, Axios per Node.js)<br>• <strong>Gestione errori</strong>: include pattern appropriati di controllo errori e gestione eccezioni<br>• <strong>Gestione risorse</strong>: chiude correttamente connessioni e pulisce risorse dove applicabile<br>• <strong>Sintassi moderna</strong>: sfrutta caratteristiche moderne del linguaggio quando appropriato (async/await in JavaScript, try-with-resources in Java)<br>• <strong>Leggibilità</strong>: formatta il codice con indentazione appropriata e nomi di variabili significativi<br>• <strong>Manutenibilità</strong>: struttura il codice generato per essere facile da comprendere e modificare<br><br>Sebbene il codice generato segua le migliori pratiche generali, potresti dover apportare piccoli adattamenti per conformarti agli standard di codifica specifici del tuo progetto o per integrarlo con la struttura del codice esistente. Il convertitore fornisce una solida base che implementa correttamente le richieste HTTP seguendo le convenzioni del linguaggio, permettendoti di concentrarti sull'integrazione della funzionalità nell'applicazione invece che sulla lotta con la sintassi del client HTTP."
        }
      ]
    },
    guide: {
      title: "Guida passo passo all'uso del convertitore cURL",
      steps: [
        "<strong>Inserisci il tuo comando cURL</strong>: per prima cosa incolla o digita il tuo comando cURL nel campo di input. Puoi usare comandi da documentazione API, strumenti per sviluppatori del browser, esportazioni da Postman o qualsiasi comando cURL valido che hai creato. Se non hai familiarità con cURL, puoi cliccare su uno dei comandi di esempio sotto il campo di input per vedere il formato per diversi tipi di richieste.",
        "<strong>Seleziona il linguaggio target</strong>: dal pannello di selezione linguaggio, scegli il linguaggio di programmazione in cui vuoi convertire il comando cURL. Lo strumento supporta vari linguaggi e librerie comunemente usati per interazioni API, come Python, JavaScript, PHP, Java ecc. Scegli il linguaggio che corrisponde al tuo stack tecnologico.",
        "<strong>Clicca il pulsante Converti</strong>: dopo aver inserito il comando e selezionato il linguaggio target, clicca il pulsante \"Converti\" per elaborare il comando cURL. Lo strumento analizzerà il comando, identificherà tutti i suoi componenti (metodo, URL, header, dati, opzioni) e genererà il codice equivalente nel linguaggio scelto.",
        "<strong>Esamina il codice generato</strong>: controlla l'output nell'area di visualizzazione del codice. Il codice convertito includerà tutti gli import/riferimenti necessari, l'inizializzazione appropriata del client HTTP, la configurazione della richiesta con header e formato del corpo corretti, e un'elaborazione base della risposta. Il codice è formattato per essere leggibile, con indentazione appropriata e nomi di variabili significativi.",
        "<strong>Copia il codice nel tuo progetto</strong>: quando sei soddisfatto del codice generato, clicca il pulsante \"Copia\" per copiarlo negli appunti. Puoi poi incollarlo direttamente nel tuo ambiente di sviluppo o editor di codice. A seconda delle esigenze specifiche del tuo progetto, il codice può essere usato direttamente o richiedere modifiche minime.",
        "<strong>Modifica per le esigenze dell'applicazione</strong>: sebbene il codice generato sia funzionalmente completo, potresti volerlo integrare con il sistema di gestione errori, logging o elaborazione dati dell'applicazione. Sentiti libero di modificare i nomi delle variabili, aggiungere commenti o incapsulare il codice in funzioni/metodi appropriati all'architettura dell'applicazione.",
        "<strong>Testa la richiesta implementata</strong>: dopo aver integrato il codice nel progetto, testa la richiesta HTTP per assicurarti che funzioni come previsto. Il codice convertito dovrebbe produrre la stessa richiesta e ricevere la stessa risposta del comando cURL originale, ma è sempre buona pratica verificare, specialmente per interazioni API critiche per il business."
      ]
    },
    conclusion: "Il convertitore cURL funge da ponte cruciale tra l'esplorazione API e l'implementazione, semplificando significativamente il processo di sviluppo di applicazioni che interagiscono con servizi web. Automatizzando la conversione di richieste HTTP da riga di comando in codice conciso e idiomatico per vari linguaggi, elimina una fonte significativa di errori e frustrazioni nel lavoro di integrazione API. Questo strumento non solo fa risparmiare tempo di sviluppo prezioso, ma garantisce anche coerenza tra chiamate API testate e la loro implementazione nel codice di produzione. Che tu sia uno sviluppatore esperto che lavora su architetture di microservizi complesse o un principiante che impara a interagire con la sua prima API REST, il convertitore cURL fornisce una scorciatoia affidabile che trasforma la conversione manuale della sintassi in un'operazione a un clic, permettendoti di concentrarti sulla costruzione della logica dell'applicazione invece che sulla lotta con la sintassi del client HTTP."
  }
}