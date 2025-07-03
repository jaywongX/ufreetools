export default {
  name: 'Generatore Client TypeScript da OpenAPI',
  description: 'Genera automaticamente interfacce TypeScript e codice client basato su specifiche OpenAPI, migliorando la collaborazione frontend-backend',
  options: {
    exportSchemas: 'Esporta tutte le definizioni dei modelli',
    generateClient: 'Genera codice client API',
    addComments: 'Aggiungi commenti e documentazione',
    useEnums: 'Usa enum TypeScript (invece di union di stringhe)',
    indentSize: 'Dimensione indentazione',
    operationType: 'Tipo di operazione',
    displayOptions: 'Opzioni di visualizzazione'
  },
  inputMode: {
    toggleToFile: 'Passa a caricamento file',
    toggleToText: 'Passa a input testuale',
    loadExample: 'Carica esempio'
  },
  fileUpload: {
    dragAndDrop: 'Trascina file OpenAPI qui o clicca per caricare',
    supportedFormats: 'Supporta formati .json, .yaml e .yml',
    fileSelected: 'Selezionato: {0} ({1})'
  },
  textInput: {
    placeholder: 'Incolla la specifica OpenAPI (JSON o YAML) qui...'
  },
  actions: {
    generate: 'Genera codice TypeScript',
    processing: 'Elaborazione in corso...',
    clear: 'Pulisci',
    copy: 'Copia codice',
    download: 'Scarica codice'
  },
  results: {
    generatedCode: 'Codice TypeScript generato',
    copied: 'Copiato negli appunti',
    error: 'Errore',
    characterCount: 'Conteggio caratteri: {0}'
  },
  errors: {
    parseError: 'Impossibile analizzare la specifica OpenAPI. Assicurati di fornire un formato JSON o YAML valido.',
    invalidSpec: 'Specifica OpenAPI non valida. Identificatore di versione openapi o swagger non trovato.',
    processingError: 'Errore durante l\'elaborazione della specifica OpenAPI: {0}'
  },
  article: {
    title: "Da OpenAPI a TypeScript: generazione automatizzata di client API",
    overview: {
      title: "Introduzione al generatore OpenAPI-to-TypeScript",
      content: "<strong>Il generatore client TypeScript da OpenAPI</strong> è uno strumento specializzato che converte automaticamente specifiche OpenAPI (precedentemente note come Swagger) in interfacce TypeScript e codice client API completamente funzionale. Questa trasformazione semplifica lo sviluppo frontend garantendo type safety ed eliminando la necessità di scrivere manualmente codice di integrazione API.<br><br>Le specifiche OpenAPI servono come contratto standardizzato tra frontend e servizi backend, descrivendo endpoint disponibili, parametri di richiesta, strutture di risposta e modelli dati. Utilizzando questo generatore, gli sviluppatori possono concentrarsi sulla costruzione di funzionalità anziché sulla manutenzione del codice di integrazione API, beneficiando allo stesso tempo del potente sistema di tipi di TypeScript che cattura potenziali errori in fase di compilazione anziché a runtime."
    },
    useCases: {
      title: "Casi d'uso comuni per la generazione OpenAPI-to-TypeScript",
      items: [
        {
          title: "Sviluppo frontend con API complesse",
          description: "Quando si lavora con API backend grandi o complesse, codificare manualmente le interfacce client diventa dispendioso e soggetto a errori. Questo generatore crea interfacce TypeScript accurate e codice client che corrispondono perfettamente alla specifica API, garantendo coerenza tra frontend e backend."
        },
        {
          title: "Architetture a microservizi",
          description: "In ambienti con più servizi API in stile microservizi, il generatore facilita l'integrazione rapida con ciascun servizio. Man mano che i servizi evolvono, basta rigenerare i client TypeScript dalle specifiche OpenAPI aggiornate per rimanere sincronizzati."
        },
        {
          title: "Migrazione tra versioni API",
          description: "Quando si effettua l'upgrade a una nuova versione API, genera client TypeScript per entrambe le versioni per identificare breaking changes e implementare strategie di migrazione graduali nel codice frontend."
        },
        {
          title: "Onboarding di nuovi sviluppatori",
          description: "I nuovi membri del team possono comprendere rapidamente le funzionalità API esaminando le interfacce TypeScript generate, che fungono da documentazione completa con informazioni sui tipi."
        },
        {
          title: "Sviluppo di prototipi",
          description: "Durante lo sviluppo rapido di prototipi, genera client TypeScript da specifiche OpenAPI preliminari per iniziare immediatamente a costruire componenti UI con strutture dati reali, anche prima del completamento dell'implementazione backend."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso del generatore OpenAPI-to-TypeScript",
      intro: "Segui questi passaggi per convertire efficacemente specifiche OpenAPI in interfacce TypeScript e codice client:",
      steps: [
        {
          title: "Prepara la tua specifica OpenAPI",
          description: "Assicurati di avere una specifica OpenAPI valida in formato JSON o YAML. La specifica dovrebbe definire gli endpoint API, i parametri di richiesta, le strutture di risposta e i modelli dati. Puoi caricare un file o incollare direttamente il contenuto nell'area di testo."
        },
        {
          title: "Seleziona le opzioni di generazione",
          description: "Configura le opzioni di generazione in base alle tue esigenze: 'Esporta tutte le definizioni dei modelli' crea interfacce TypeScript per tutti i modelli dati, 'Genera codice client API' produce metodi client API, 'Aggiungi commenti e documentazione' include la documentazione nel codice generato e 'Usa enum TypeScript' crea enum TypeScript per valori letterali stringa."
        },
        {
          title: "Genera il codice TypeScript",
          description: "Clicca il pulsante 'Genera codice TypeScript' per elaborare la tua specifica OpenAPI. Lo strumento analizzerà la specifica e genererà interfacce TypeScript e codice client in base alle opzioni selezionate."
        },
        {
          title: "Esamina il codice generato",
          description: "Controlla l'output per assicurarti che soddisfi le tue aspettative. Il codice generato include interfacce per i tipi di richiesta/risposta e una classe client con metodi per ogni endpoint API."
        },
        {
          title: "Copia o scarica i risultati",
          description: "Usa il pulsante 'Copia codice' per copiare il TypeScript generato negli appunti o 'Scarica codice' per salvarlo come file .ts. Potrai quindi integrare questo codice nel tuo progetto TypeScript."
        },
        {
          title: "Integra con il tuo progetto",
          description: "Importa il client generato nel tuo codice applicativo. Inizializza il client con l'URL base della tua API e eventuali header richiesti, poi usa i metodi fortemente tipati per effettuare chiamate API."
        },
        {
          title: "Aggiorna con i cambiamenti API",
          description: "Ogni volta che la tua specifica API cambia, rigenera il codice TypeScript e aggiorna la tua codebase per garantire che il tuo frontend rimanga sincronizzato con le API backend."
        }
      ]
    },
    bestPractices: {
      title: "Best practice per specifiche OpenAPI",
      intro: "Segui queste best practice per creare specifiche OpenAPI di alta qualità che generano codice TypeScript ottimale:",
      items: [
        "Usa operationId descrittivi per ogni endpoint per creare nomi di metodi significativi nel client generato",
        "Fornisci descrizioni dettagliate per schemi, proprietà, parametri e risposte per generare commenti TypeScript utili",
        "Usa convenzioni di naming consistenti per schemi e proprietà per creare interfacce TypeScript prevedibili",
        "Definisci componenti riutilizzabili nella sezione 'components' per evitare duplicazioni e promuovere il riuso del codice",
        "Specifica tipi di dati accurati per tutte le proprietà per generare tipi TypeScript precisi",
        "Includi esempi nella specifica OpenAPI per aiutare gli sviluppatori a comprendere le strutture dati attese",
        "Usa valori enum per proprietà con un insieme fisso di valori possibili per creare enum o union type TypeScript",
        "Organizza gli endpoint logicamente usando tag appropriati per raggruppare operazioni correlate",
        "Versiona l'API e indica chiaramente breaking changes per facilitare le strategie di migrazione frontend",
        "Convalida la tua specifica OpenAPI con linter o validator prima di generare codice TypeScript"
      ]
    },
    faq: {
      title: "Domande frequenti sulla generazione OpenAPI-to-TypeScript",
      items: [
        {
          question: "Qual è la differenza tra OpenAPI e Swagger?",
          answer: "OpenAPI è il nome attuale dello standard di specifica, mentre Swagger era il nome originale. OpenAPI 3.0+ è l'evoluzione moderna di quello che era Swagger 2.0. Questo generatore supporta sia specifiche OpenAPI 3.x che Swagger 2.0, sebbene si raccomandi OpenAPI 3.x per le funzionalità avanzate e una migliore generazione di codice TypeScript."
        },
        {
          question: "Posso personalizzare il codice TypeScript generato?",
          answer: "Sì, il generatore offre diverse opzioni di personalizzazione: puoi scegliere di esportare solo le definizioni dei modelli, generare codice client, aggiungere commenti di documentazione e usare enum TypeScript invece di union di stringhe. Per personalizzazioni più estese, puoi modificare manualmente il codice generato, ma tieni presente che la rigenerazione sovrascriverà queste modifiche."
        },
        {
          question: "Come gestire l'autenticazione nel client generato?",
          answer: "Il client generato accetta header personalizzati nel suo costruttore, dove puoi fornire token di autenticazione. Per flussi di autenticazione più complessi (come OAuth), potresti dover estendere il client generato con logica aggiuntiva o creare un wrapper che gestisca il refresh dei token e altri aspetti dell'autenticazione."
        },
        {
          question: "Posso usarlo con React, Vue, Angular o altri framework?",
          answer: "Sì, il client TypeScript generato è framework-agnostic e può essere usato con qualsiasi framework JavaScript o TypeScript. In React, potresti incapsulare il client in un custom hook; in Vue, potresti creare composable functions; in Angular, potresti estendere il client come servizio iniettabile."
        },
        {
          question: "Come gestire l'upload di file con il client generato?",
          answer: "Per operazioni di upload file definite nella specifica OpenAPI (usando content type 'multipart/form-data'), il generatore crea firme di metodo appropriate. Quando chiami questi metodi, dovrai costruire oggetti FormData per il corpo della richiesta. Assicurati che la tua specifica OpenAPI definisca correttamente le operazioni di upload file."
        },
        {
          question: "Cosa succede se la mia specifica OpenAPI contiene errori?",
          answer: "Il generatore cercherà di identificare problemi comuni nella specifica e fornire messaggi di errore appropriati. Si raccomanda di convalidare il documento OpenAPI con validator dedicati prima della generazione. Errori nella specifica possono portare a codice TypeScript incorretto o incompleto."
        },
        {
          question: "Come mantenere sincronizzato il client TypeScript con i cambiamenti API?",
          answer: "Ogni volta che la tua API cambia e la specifica OpenAPI viene aggiornata, rigenera il client TypeScript e aggiornalo nel tuo progetto. Considera l'automazione di questo processo nella tua pipeline di build per assicurarti che il tuo frontend usi sempre l'ultima versione del codice client API."
        }
      ]
    },
    integrationTips: {
      title: "Suggerimenti per integrare il client TypeScript generato",
      intro: "Una volta generato il client TypeScript, considera questi consigli per un'integrazione fluida nel tuo progetto:",
      items: [
        "Crea un modulo API client dedicato nel tuo progetto che riesporta il client generato con eventuali configurazioni personalizzate",
        "Usa il pattern dependency injection per fornire il client API attraverso l'applicazione, rendendolo più facile da mockare per i test",
        "Considera l'implementazione di intercettori request/response per gestire problematiche comuni come error handling, logging e autenticazione",
        "Incapsula i metodi del client generato in funzioni personalizzate che gestiscano casi d'errore specifici o trasformino dati per le esigenze dell'applicazione",
        "Configura la generazione automatica del client TypeScript come parte della tua pipeline CI/CD per mantenere frontend e backend sincronizzati",
        "Usa variabili d'ambiente o file di configurazione per specificare URL base API per ambienti diversi (sviluppo, staging, produzione)",
        "Aggiungi logica di retry per fallimenti temporanei incapsulando i metodi del client generato con funzionalità di ripetizione",
        "Implementa cache per le richieste per dati frequentemente accessibili per migliorare le prestazioni e ridurre le chiamate API",
        "Combina i tipi generati con librerie di state management (come Redux, MobX o Vuex) per ottenere uno state dell'applicazione type-safe",
        "Se effettui molte piccole richieste, considera l'implementazione di request batching o GraphQL per ottimizzare le chiamate API"
      ]
    }
  }
}