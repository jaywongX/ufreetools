export default {
  name: 'Tester WebSocket',
  description: 'Connettiti a server WebSocket, invia messaggi e visualizza le risposte',
  connection: {
    url: 'URL WebSocket',
    urlPlaceholder: 'Esempio: ws://echo.websocket.org',
    protocol: 'Sottoprotocollo (opzionale)',
    protocolPlaceholder: 'Separati da virgola',
    connect: 'Connetti',
    disconnect: 'Disconnetti',
    status: 'Stato connessione',
    connected: 'Connesso',
    disconnected: 'Disconnesso',
    waiting: 'In attesa di connessione',
    autoReconnect: 'Riconnessione automatica',
    reconnectMessage: 'Tentativo di riconnessione tra {0} secondi...'
  },
  options: {
    title: 'Opzioni',
    autoScroll: 'Scorrimento automatico log'
  },
  messages: {
    send: 'Invia messaggio',
    logs: 'Log messaggi',
    emptyLogs: 'I messaggi appariranno qui dopo la connessione',
    placeholder: 'Inserisci il messaggio da inviare...',
    sendButton: 'Invia',
    clearButton: 'Pulisci',
    copyButton: 'Copia',
    clearLogs: 'Pulisci log',
    copyLogs: 'Copia log',
    format: {
      title: 'Formato',
      text: 'Testo semplice',
      json: 'JSON',
      binary: 'Binario'
    },
    templates: {
      json: 'JSON',
      text: 'Testo'
    },
    types: {
      sent: 'Inviato →',
      received: 'Ricevuto ←',
      error: 'Errore !',
      info: 'Informazione'
    }
  },
  savedConnections: {
    title: 'Connessioni salvate',
    empty: 'Nessuna connessione salvata',
    save: 'Salva connessione corrente',
    saveConnection: 'Salva connessione',
    connectionName: 'Nome connessione',
    load: 'Carica',
    delete: 'Elimina',
    cancel: 'Annulla'
  },
  testServers: {
    title: 'Server di test',
    description: 'Ecco alcuni server WebSocket pubblici per i test:',
    useServer: 'Usa questo server',
    servers: {
      echo: {
        name: 'Test Echo',
        description: 'Server echo sicuro con supporto WSS'
      },
      postman: {
        name: 'WebSocket.org',
        description: 'Servizio echo fornito da Postman con supporto WSS'
      }
    }
  },
  logs: {
    connectingTo: 'Connessione a {0} in corso...',
    connectionSuccess: 'Connessione riuscita',
    connectionError: 'Errore WebSocket',
    connectionClosed: 'Connessione chiusa (codice: {0}{1})',
    invalidJson: 'JSON non valido: {0}',
    sendFailed: 'Invio fallito: {0}',
    emptyMessage: 'Il messaggio non può essere vuoto',
    notConnected: 'WebSocket non connesso',
    copied: 'Log copiato negli appunti',
    copyFailed: 'Copia fallita: {0}',
    serverSelected: 'Server selezionato: {0}',
    binaryData: '[Dati binari]'
  },
  article: {
    title: "Tester WebSocket: strumento per testare comunicazioni in tempo reale",
    features: {
      title: "Comprendere la tecnologia WebSocket e le sue applicazioni",
      description: "Il <strong>Tester WebSocket</strong> è uno strumento completo progettato per testare, debug ed esplorare le comunicazioni in tempo reale tra client e server utilizzando il protocollo WebSocket. A differenza delle connessioni HTTP tradizionali che richiedono una nuova richiesta per ogni interazione, WebSocket fornisce un canale di comunicazione bidirezionale persistente che rimane aperto fino a quando non viene chiuso esplicitamente da una delle parti.<br><br>Questo <strong>strumento client WebSocket</strong> consente agli sviluppatori di stabilire connessioni con server WebSocket, inviare messaggi personalizzati in vari formati (testo, JSON o binario) e visualizzare le risposte in tempo reale. Con funzionalità come gestione delle connessioni, registrazione dei messaggi e validazione dei formati, questo <strong>tester per comunicazioni in tempo reale</strong> fornisce tutto il necessario per sviluppare e debug implementazioni WebSocket su diverse piattaforme e ambienti.",
      useCases: {
        title: "Casi d'uso pratici per il test WebSocket",
        items: [
          "<strong>Sviluppo e debug API</strong>: Durante lo sviluppo di API basate su WebSocket, il <strong>strumento di debug WebSocket</strong> consente di connettersi a endpoint di sviluppo, inviare messaggi di test e verificare che il server risponda correttamente a diversi formati di richiesta e casi limite. Questo approccio di test interattivo aiuta a identificare problemi nelle prime fasi del ciclo di sviluppo, molto prima che i client tentino di connettersi al servizio.",
          "<strong>Test applicazioni in tempo reale</strong>: Per applicazioni che dipendono da <strong>flussi di dati in tempo reale</strong>, come sistemi di chat, dashboard live o piattaforme collaborative, questo tester consente di simulare connessioni client e verificare che lo scambio di messaggi, la trasmissione di eventi e la sincronizzazione dello stato funzionino come previsto. È possibile testare la latenza dei messaggi, le notifiche push del server e i meccanismi di sottoscrizione dei client.",
          "<strong>Comunicazione dispositivi IoT</strong>: I dispositivi IoT spesso utilizzano WebSocket per stabilire <strong>connessioni persistenti leggere</strong> con server centrali o piattaforme cloud. Il tester WebSocket può simulare modelli di comunicazione IoT, aiutando a testare la registrazione dei dispositivi, la trasmissione di comandi, la segnalazione di telemetria e altri flussi di comunicazione IoT fondamentali senza dover distribuire hardware fisico.",
          "<strong>Interazione con server di gioco</strong>: I giochi online multiplayer spesso si affidano a WebSocket per <strong>interazioni tra giocatori in tempo reale</strong> e aggiornamenti dello stato di gioco. Gli sviluppatori di giochi possono utilizzare questo strumento per testare le risposte del server alle azioni dei giocatori, verificare la sincronizzazione dello stato di gioco e misurare caratteristiche di prestazioni come la velocità di trasmissione dei messaggi e la latenza in diverse condizioni.",
          "<strong>Flussi di dati finanziari</strong>: Le piattaforme di trading e i servizi finanziari utilizzano WebSocket per fornire <strong>dati di mercato in tempo reale</strong> ed elaborare transazioni. Il tester WebSocket consente agli sviluppatori di applicazioni finanziarie di convalidare le sottoscrizioni ai flussi di dati, testare l'elaborazione degli eventi di mercato e garantire che le informazioni finanziarie sensibili al tempo vengano elaborate in modo affidabile.",
          "<strong>Risoluzione problemi in produzione</strong>: Quando si verificano problemi di connessione o trasmissione di messaggi in ambienti di produzione, gli ingegneri di supporto possono utilizzare il <strong>tester di connessione WebSocket</strong> per replicare scenari utente, verificare la disponibilità del server e diagnosticare problemi di formato dei messaggi o del protocollo senza modificare il codice dell'applicazione in produzione."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sul test WebSocket",
      items: [
        {
          question: "Qual è la differenza tra WebSocket e HTTP?",
          answer: "WebSocket e HTTP soddisfano diverse esigenze di comunicazione nelle applicazioni web. HTTP è un protocollo request-response in cui ogni interazione richiede una nuova connessione avviata dal client. Il client invia una richiesta, il server risponde e poi la connessione si chiude. Questo modello è adatto per la navigazione web tradizionale, ma crea molto overhead per applicazioni in tempo reale.<br><br>WebSocket, d'altra parte, stabilisce una <strong>connessione persistente</strong> tra client e server che rimane aperta fino a quando non viene chiusa esplicitamente. Dopo un handshake iniziale (effettuato via HTTP), la connessione viene aggiornata al protocollo WebSocket, permettendo a client e server di inviare messaggi in qualsiasi momento senza overhead di connessione aggiuntivo. Questa <strong>comunicazione full-duplex</strong> abilita vere applicazioni in tempo reale con latenza e utilizzo della larghezza di banda inferiori rispetto ai metodi HTTP basati su polling. Il nostro strumento di test WebSocket ti aiuta a esplorare queste differenze permettendoti di stabilire connessioni WebSocket e sperimentare la funzionalità di scambio bidirezionale di messaggi."
        },
        {
          question: "Perché la mia connessione WebSocket si interrompe dopo un periodo di inattività?",
          answer: "Le connessioni WebSocket possono interrompersi durante periodi di inattività a causa di diversi fattori nel percorso di rete tra client e server. Le cause più comuni includono:<br><br>• <strong>Timeout proxy</strong>: Proxy aziendali, bilanciatori di carico o gateway di rete spesso hanno timeout per connessioni inattive che chiudono le connessioni per risparmiare risorse.<br>• <strong>Impostazioni firewall</strong>: I firewall di rete possono avere politiche di timeout di sessione che terminano connessioni di lunga durata senza attività recente.<br>• <strong>Timeout lato server</strong>: Molte implementazioni di server WebSocket hanno i propri timeout di inattività per gestire le risorse.<br>• <strong>Cambiamenti rete client</strong>: Dispositivi mobili che passano tra reti o entrano in modalità sleep possono interrompere la connessione.<br><br>Per mantenere connessioni WebSocket persistenti, implementa un <strong>meccanismo heartbeat</strong> che scambia periodicamente (tipicamente ogni 30-45 secondi) piccoli messaggi ping/pong. Questo mantiene la connessione attiva e previene che componenti di rete intermedi la chiudano. Il nostro strumento di test WebSocket include funzionalità di riconnessione automatica per aiutarti a testare la resilienza della connessione e le strategie di ripristino."
        },
        {
          question: "Posso usare il tester WebSocket per connettermi a connessioni sicure (WSS)?",
          answer: "Sì, il <strong>tester WebSocket</strong> supporta completamente connessioni WebSocket sicure (WSS) che funzionano su TLS/SSL, simile a come HTTPS viene utilizzato per il normale traffico web. Quando ci si connette a endpoint WSS (URL che iniziano con \"wss://\"), il nostro strumento gestisce automaticamente il processo di handshake TLS e verifica dei certificati.<br><br>WebSocket sicuri sono essenziali per:<br><br>• Proteggere dati sensibili trasmessi tra client e server<br>• Soddisfare requisiti di conformità per comunicazioni sicure<br>• Connettersi a servizi ospitati su domini HTTPS (a causa di restrizioni dei browser moderni su contenuti misti)<br>• Prevenire attacchi man-in-the-middle e manipolazione dei messaggi<br><br>Lo strumento funziona perfettamente sia con endpoint sicuri (WSS) che non sicuri (WS), permettendoti di testare server di sviluppo su localhost o servizi sicuri di livello production. Quando si testa con certificati autofirmati durante lo sviluppo, tieni presente che, sebbene il nostro strumento basato su browser debba rispettare le politiche di sicurezza del browser, puoi comunque stabilire connessioni con server WebSocket sicuri configurati correttamente."
        },
        {
          question: "Come formattare correttamente messaggi JSON per comunicazioni WebSocket?",
          answer: "Formattare correttamente messaggi JSON per comunicazioni WebSocket è cruciale per interagire con successo con la maggior parte delle moderne API WebSocket. Ecco alcune pratiche chiave da seguire:<br><br>1. <strong>Sintassi JSON valida</strong>: Assicurati che i tuoi messaggi seguano il formato JSON corretto, includendo chiavi tra virgolette, uso appropriato dei tipi di dati e parentesi graffe bilanciate. L'opzione formato JSON del nostro tester WebSocket convalida automaticamente il tuo JSON prima dell'invio.<br><br>2. <strong>Struttura del messaggio</strong>: La maggior parte delle API WebSocket si aspetta strutture di messaggio specifiche, tipicamente includendo:<br>• Un campo tipo o azione (es. \"type\": \"subscribe\")<br>• Un payload dati contenente le informazioni effettive<br>• Metadati opzionali come ID messaggio o timestamp<br><br>Esempio di messaggio ben strutturato:<br><pre>&#123;<br>  \"type\": \"subscribe\",<br>  \"channel\": \"market_data\",<br>  \"symbols\": [\"BTC/USD\", \"ETH/USD\"],<br>  \"requestId\": \"12345\"<br>&#125;</pre><br><br>3. <strong>Escape caratteri speciali</strong>: Quando includi virgolette o backslash in valori stringa JSON, assicurati che siano correttamente escapati.<br><br>4. <strong>Usa tipi di dati appropriati</strong>: Invia numeri come numeri (senza virgolette), booleani come true/false, array tra parentesi quadre.<br><br>Il nostro tester WebSocket fornisce opzioni di template JSON per aiutarti a iniziare con messaggi correttamente formattati."
        },
        {
          question: "Come salvare e riutilizzare connessioni WebSocket per test ripetuti?",
          answer: "Il <strong>tester WebSocket</strong> offre diverse funzionalità per aiutarti a salvare e riutilizzare configurazioni di connessione per test efficienti e ripetuti:<br><br>1. <strong>Gestione connessioni</strong>: Lo strumento ti permette di salvare connessioni WebSocket con nomi personalizzati per facile identificazione. Ogni configurazione salvata memorizza l'URL WebSocket e eventuali sottoprotocolli opzionali.<br><br>2. <strong>Riconnessione con un clic</strong>: Le connessioni salvate possono essere caricate e connesse con un clic, eliminando la necessità di reinserire i dettagli di connessione durante sessioni di test ripetute.<br><br>3. <strong>Archiviazione persistente</strong>: Le tue connessioni salvate vengono memorizzate nello storage locale del browser, il che significa che rimarranno disponibili tra sessioni e riavvii del browser.<br><br>4. <strong>Template messaggi di test</strong>: Oltre a salvare connessioni, puoi utilizzare i template JSON e di testo forniti per testare efficientemente pattern di messaggi comuni.<br><br>5. <strong>Scorciatoie server di test</strong>: Se non hai un tuo server per test rapidi, lo strumento include scorciatoie a server echo WebSocket pubblici affidabili.<br><br>Questo completo <strong>sistema di gestione connessioni</strong> è particolarmente prezioso per sviluppatori che lavorano con più endpoint WebSocket in ambienti diversi (sviluppo, staging, produzione) o per chiunque abbia bisogno di testare regolarmente varie operazioni API che richiedono parametri di connessione diversi."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso del tester WebSocket",
      steps: [
        "<strong>Inserisci l'URL WebSocket</strong>: Per iniziare, inserisci l'indirizzo del server WebSocket nel campo URL. Gli URL WebSocket iniziano con 'ws://' per connessioni standard o 'wss://' per connessioni sicure (simile a http:// e https://). Se non hai un server WebSocket da testare, puoi selezionare uno dei server di test forniti nella sezione \"Server di test\" in fondo allo strumento.",
        "<strong>Configura opzioni di connessione</strong>: Se il tuo server WebSocket richiede specifici sottoprotocolli, inseriscili nel campo \"Sottoprotocollo\" come lista separata da virgole. Se vuoi che lo strumento tenti automaticamente di riconnettersi quando la connessione cade inaspettatamente, puoi anche abilitare \"Riconnessione automatica\". L'opzione \"Scorrimento automatico log\" mantiene il log dei messaggi sempre aggiornato con gli ultimi messaggi.",
        "<strong>Stabilisci la connessione</strong>: Clicca il pulsante \"Connetti\" per avviare la connessione WebSocket. L'indicatore di stato mostrerà \"In attesa di connessione\" durante l'handshake, poi diventerà \"Connesso\" in caso di successo o \"Disconnesso\" se il tentativo di connessione fallisce. Qualsiasi evento di connessione o errore verrà mostrato nell'area del log messaggi.",
        "<strong>Prepara il tuo messaggio</strong>: Una volta connesso con successo, puoi inserire il messaggio da inviare nell'area di testo \"Invia messaggio\". Usa il menu a discesa formato per selezionare il formato appropriato per il tuo messaggio: \"Testo semplice\" per semplici stringhe, \"JSON\" per inviare dati strutturati (lo strumento validerà il formato JSON), o \"Binario\" per dati binari.",
        "<strong>Invia e monitora messaggi</strong>: Clicca il pulsante \"Invia\" per trasmettere il tuo messaggio al server WebSocket. I messaggi inviati appariranno nell'area \"Log messaggi\" con timestamp ed etichetta \"Inviato\". Quando il server risponde, i messaggi in arrivo verranno mostrati con etichetta \"Ricevuto\". Puoi usare i rispettivi pulsanti per pulire il campo di input dei messaggi o il log quando necessario.",
        "<strong>Salva la connessione per uso futuro</strong>: Se testerai frequentemente questo endpoint WebSocket, clicca \"Salva connessione corrente\" per memorizzare i dettagli della connessione. Ti verrà chiesto di fornire un nome per questa connessione. Le connessioni salvate appariranno nel pannello \"Connessioni salvate\" per un accesso rapido in future sessioni di test.",
        "<strong>Analizza pattern di comunicazione</strong>: Usa il log cronologico dei messaggi per analizzare la sequenza e il timing dei messaggi tra client e server. Questo aiuta a identificare problemi nell'elaborazione dei messaggi, tempi di risposta o nel protocollo di comunicazione. Per scopi di debug, puoi copiare l'intero log per condividerlo con membri del team o documentarlo in report di errore."
      ]
    },
    conclusion: "Il tester WebSocket si afferma come uno strumento essenziale per sviluppatori che lavorano su applicazioni in tempo reale, permettendo di testare e debug connessioni WebSocket in modo efficiente senza bisogno di implementazioni client personalizzate. Fornendo un'interfaccia visiva per stabilire connessioni, inviare messaggi in vari formati e monitorare comunicazioni bidirezionali, accelera significativamente il flusso di lavoro di sviluppo per applicazioni basate su WebSocket. Che tu stia costruendo sistemi di chat, dashboard in tempo reale, piattaforme IoT o giochi multiplayer, questo tester fornisce le funzionalità necessarie per assicurare che la tua implementazione WebSocket offra comunicazioni affidabili e in tempo reale. Man mano che le applicazioni web continuano a evolversi verso esperienze più interattive e in tempo reale, avere uno strumento dedicato a testare questo strato critico di comunicazione diventa sempre più prezioso per mantenere un'esperienza utente di alta qualità attraverso varie condizioni di rete e piattaforme client."
  }
}