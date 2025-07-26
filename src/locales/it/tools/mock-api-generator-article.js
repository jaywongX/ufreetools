export default {
  title: "Scopri le applicazioni del Generatore Mock API nello sviluppo frontend",
  overview: {
    title: "Cos'è un Generatore Mock API?",
    content: "<strong>Il Generatore Mock API</strong> è uno strumento specializzato che crea endpoint API mock e risposte basate su specifiche OpenAPI o definizioni di campi personalizzati. Questo potente <strong>strumento di sviluppo</strong> aiuta gli sviluppatori frontend a lavorare indipendentemente dai team backend fornendo strutture dati realistiche che imitano il comportamento delle API reali.<br><br>Il generatore crea endpoint completamente funzionali che restituiscono dati strutturati e coerenti con le tue specifiche. Ciò consente lo sviluppo frontend senza attendere l'implementazione backend effettiva, accelerando significativamente il processo e abilitando flussi di lavoro paralleli."
  },
  useCases: {
    title: "Scenari comuni per la generazione di Mock API",
    items: [
      {
        title: "Sviluppo frontend prima del completamento backend",
        description: "Quando le API backend sono ancora in sviluppo o non ancora implementate, le API mock consentono agli sviluppatori frontend di iniziare a costruire componenti UI con strutture dati reali, evitando colli di bottiglia nello sviluppo."
      },
      {
        title: "Prototipazione e test UI",
        description: "Crea prototipi rapidi o testa componenti UI con dataset controllati, permettendo a designer e sviluppatori di validare interfacce con dati realistici senza connettersi a servizi backend reali."
      },
      {
        title: "Sviluppo offline",
        description: "Fornisce un server API mock locale che simula risposte API reali, permettendo agli sviluppatori di lavorare in ambienti offline o senza accesso ad API di produzione/staging."
      },
      {
        title: "Test di casi limite",
        description: "Genera risposte API specifiche che replicano casi limite o condizioni di errore difficili da attivare in ambienti backend reali, consentendo test approfonditi di gestione errori e condizioni limite."
      },
      {
        title: "Test prestazionali",
        description: "Crea API mock che simulano diversi tempi di risposta o carichi per testare come i componenti frontend gestiscono vari scenari prestazionali, da condizioni ottimali a degradate."
      },
      {
        title: "Ambienti demo",
        description: "Costruisci ambienti demo completamente funzionali senza connessione a servizi backend reali, ideali per dimostrazioni commerciali, formazione o scopi espositivi."
      }
    ]
  },
  guide: {
    title: "Come utilizzare il Generatore Mock API",
    intro: "Segui questi passaggi per creare e utilizzare efficacemente API mock a supporto del tuo flusso di sviluppo:",
    steps: [
      {
        title: "Seleziona metodo di input",
        description: "Scegli come definire la struttura API. Puoi caricare una specifica OpenAPI (consigliata per coerenza con API reali), caricare file di classe Java per estrarre automaticamente strutture dati, o definire manualmente campi e tipi tramite l'interfaccia."
      },
      {
        title: "Definisci struttura dati",
        description: "Se non usi OpenAPI, definisci la struttura dei dati mock aggiungendo campi e impostandone il tipo (stringa, numero, booleano, data ecc.). Per strutture complesse, crea oggetti annidati o array di oggetti per corrispondere al modello dati dell'API reale."
      },
      {
        title: "Configura opzioni output",
        description: "Scegli il formato di output preferito (JSON Server, Express.js, Mock.js o Mock Service Worker) in base alle esigenze del progetto. Regola altre impostazioni come dinamismo risposta (quanto devono essere casuali i dati generati), lunghezza array e formato risposta."
      },
      {
        title: "Genera codice Mock API",
        description: "Clicca \"Genera Mock\" per creare codice API mock basato sulle tue specifiche. Lo strumento elaborerà il tuo input e genererà codice per endpoint API mock e risposte nel formato selezionato."
      },
      {
        title: "Rivedi e copia codice generato",
        description: "Esamina il codice API mock generato per assicurarti che soddisfi i tuoi requisiti. Puoi copiarlo negli appunti o scaricarlo come file per l'integrazione nel tuo progetto."
      },
      {
        title: "Integra con ambiente di sviluppo",
        description: "In base al formato scelto, integra l'API mock generata nel tuo ambiente di sviluppo. Potrebbe comportare la configurazione di JSON Server, l'aggiunta di route Express.js, la configurazione di Mock.js o l'implementazione di Mock Service Worker nell'applicazione."
      },
      {
        title: "Connetti applicazione frontend",
        description: "Aggiorna la tua app frontend per connettersi agli endpoint API mock invece che ai servizi backend reali. Solitamente richiede di modificare l'URL base delle richieste API per puntare al server mock locale o a un interceptor."
      }
    ]
  },
  bestPractices: {
    title: "Migliori pratiche per lo sviluppo di Mock API",
    intro: "Segui queste raccomandazioni per creare API mock efficaci e mantenibili:",
    items: [
      "Usa specifiche OpenAPI quando possibile per garantire che le tue API mock riflettano accuratamente la struttura delle API reali",
      "Rispecchia l'esatta struttura di risposta che userà l'API reale, inclusi formati di paginazione, risposte di errore e metadati",
      "Includi casi limite realistici nei dati mock, come array vuoti, valori null e vari stati di errore",
      "Per dati dinamici come date o ID, usa funzioni invece di valori statici per simulare comportamenti reali",
      "Versiona le API mock insieme al codice frontend per mantenere la compatibilità storica durante lo sviluppo",
      "Considera l'uso di variabili d'ambiente per alternare tra API mock e reali in base al contesto di sviluppo",
      "Documenta eventuali discrepanze tra API mock e reali per prevenire confusione durante l'integrazione",
      "Implementa ritardi consistenti per testare come la tua UI gestisce stati di caricamento",
      "Automatizza la generazione di servizi mock nelle pipeline di build per mantenerli sincronizzati con i cambiamenti API",
      "Includi logica di validazione nelle API mock per simulare gli stessi vincoli applicati dalle API reali"
    ]
  },
  faq: {
    title: "Domande frequenti sulla generazione di Mock API",
    items: [
      {
        question: "Quali sono le differenze tra i formati di output disponibili?",
        answer: "JSON Server fornisce una semplice API REST basata su file JSON, adatta per esigenze basiche. Express.js offre maggiore personalizzazione e controllo sulle route per scenari complessi. Mock.js si integra direttamente con JavaScript intercettando richieste AJAX nel browser. Mock Service Worker (MSW) usa Service Worker per intercettare richieste a livello di rete, permettendo transizioni seamless tra API mock e reali senza modifiche al codice."
      },
      {
        question: "Posso creare risposte mock che variano ad ogni chiamata?",
        answer: "Sì, l'opzione 'Dinamismo risposta' controlla quanto variano i tuoi dati mock. Basso dinamismo produce risposte consistenti, mentre alto dinamismo genera valori diversi entro i tipi dati definiti. Puoi anche implementare logica personalizzata nei formati Express.js o MSW per comportamenti dinamici più complessi."
      },
      {
        question: "Come gestire l'autenticazione nelle API mock?",
        answer: "Per JSON Server, puoi usare il plugin json-server-auth. Con Express.js, implementa middleware per verificare token di autenticazione. Per Mock.js e MSW, puoi intercettare richieste di autenticazione e restituire token appropriati o errori basati sulle credenziali fornite, simulando flussi di autenticazione reali."
      },
      {
        question: "Posso simulare errori di rete o risposte lente?",
        answer: "Sì. In Express.js, puoi usare middleware per introdurre ritardi o errori casuali. Con MSW, usa la funzione ctx.delay() per aggiungere ritardi o restituire risposte di errore. Per JSON Server, usa il flag --delay per aggiungere un ritardo fisso a tutte le risposte."
      },
      {
        question: "Come alternare tra API mock e reali in produzione?",
        answer: "Per MSW, usa variabili d'ambiente per avviare condizionalmente i Service Worker. Per altri metodi, usa valori di configurazione per cambiare l'URL base API o implementare proxy che instradino le richieste. Questo permette di alternare facilmente tra endpoint mock e reali durante sviluppo e testing."
      },
      {
        question: "Posso generare dati realistici invece di testo lorem ipsum?",
        answer: "Sì, il Generatore Mock API include tipi di campo specializzati come 'Nome', 'Email', 'Telefono', 'Indirizzo' e 'URL immagine' che generano dati realistici per questi campi comuni. Per scenari più avanzati, considera l'uso di librerie come Faker.js con formati di output Express.js o MSW."
      },
      {
        question: "Come gestire upload di file nelle API mock?",
        answer: "Per output Express.js, puoi implementare route che accettano richieste multipart/form-data e restituiscono risposte appropriate. Con MSW, puoi intercettare richieste di upload file e simulare l'elaborazione prima di restituire una risposta di successo. Questo permette di testare componenti UI per l'upload file senza effettiva elaborazione."
      }
    ]
  },
  advancedTips: {
    title: "Tecniche avanzate di integrazione Mock API",
    intro: "Porta la tua implementazione di API mock al livello successivo con queste tecniche avanzate:",
    items: [
      "Implementa comportamenti stateful nelle API mock per simulare persistenza tra richieste, come restituire elementi appena creati in successive richieste GET",
      "Combina validazione OpenAPI con server mock per assicurarsi che le richieste frontend soddisfino i requisiti delle specifiche API",
      "Crea gestori di scenario che permettono di alternare tra diversi dataset predefiniti per testare vari scenari aziendali",
      "Implementa paginazione realistica con metadati appropriati e link per testare efficacemente i controlli di paginazione UI",
      "Usa Service Worker mock con GraphQL per simulare risposte a query complesse mantenendo la type safety",
      "Crea approcci ibridi che inoltrano alcune richieste a servizi backend reali mentre simulano altri servizi non ancora disponibili",
      "Implementa mock websocket per testare funzionalità realtime senza backend",
      "Configura test di integrazione continua che usano API mock per validare automaticamente comportamenti frontend",
      "Crea servizi di catalogo per API mock che permettono agli sviluppatori di esplorare e selezionare endpoint mock disponibili nell'organizzazione",
      "Implementa template di risposta che modificano dinamicamente le risposte mock basate su parametri di richiesta o header"
    ]
  }
}
