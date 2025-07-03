export default {
  name: 'Rimescolatore di Testo',
  description: 'Mescola casualmente parole, frasi o righe nel testo mantenendo la formattazione',
  
  inputLabel: 'Inserisci testo',
  inputPlaceholder: 'Inserisci o incolla qui il testo da rimescolare...',
  outputLabel: 'Risultato rimescolato',
  
  shuffleMode: 'Modalità di rimescolamento',
  modes: {
    word: 'Parole',
    sentence: 'Frasi',
    line: 'Righe'
  },
  
  preserveOptions: 'Opzioni di conservazione',
  preserveCapitalization: 'Mantieni maiuscole',
  preservePunctuation: 'Mantieni punteggiatura',
  
  shuffleButton: 'Rimescola',
  copyButton: 'Copia risultato',
  clearButton: 'Pulisci tutto',
  copiedMessage: 'Copiato negli appunti!',
  
  article: {
    title: "Rimescolatore di Testo: crea testi casuali con struttura preservata",
    features: {
      title: "Scopri il rimescolamento del testo e la randomizzazione",
      description: "<strong>Rimescolatore di Testo</strong> è uno strumento versatile di <strong>elaborazione testuale</strong> che permette di riorganizzare casualmente parole, frasi o righe mantenendo elementi importanti di formattazione. Questo <strong>randomizzatore testuale</strong> offre diverse modalità per soddisfare varie esigenze, che tu voglia creare contenuti casuali per test, generare spunti per scrittura creativa o produrre testi con parole riordinate mantenendo la leggibilità.<br><br>Il nostro <strong>rimescolatore di parole</strong> offre un controllo preciso con opzioni per mantenere maiuscole e punteggiatura, assicurando che il testo rimescolato conservi un formato appropriato. Che tu lavori con semplici paragrafi o documenti complessi, questo strumento fornisce un metodo efficiente per generare arrangiamenti casuali che preservano elementi strutturali chiave."
    },
    primaryFeatures: [
      {
        title: "Multiple modalità di rimescolamento",
        description: "Scegli tra rimescolamento di parole, frasi, righe, caratteri o interi paragrafi per ottenere il livello specifico di randomizzazione desiderato."
      },
      {
        title: "Conservazione formattazione",
        description: "Mantieni maiuscole e punteggiatura anche dopo il rimescolamento, rendendo il testo naturale e correttamente formattato."
      },
      {
        title: "Delimitatori personalizzabili",
        description: "Definisci i tuoi separatori per parole e frasi per controllare con precisione come il testo viene suddiviso prima del rimescolamento."
      },
      {
        title: "Rimescolamento a gruppi",
        description: "Rimescola parole in gruppi, mantenendo alcune relazioni semantiche mentre randomizzi il contenuto."
      }
    ],
    howToUse: {
      title: "Come usare lo strumento di rimescolamento",
      steps: [
        "Inserisci o incolla il tuo testo nella casella di input a sinistra dello strumento.",
        "Seleziona la modalità di rimescolamento preferita (parole, frasi, righe, caratteri o paragrafi).",
        "Configura le opzioni avanzate come le impostazioni di conservazione e i delimitatori, se necessario.",
        "Clicca il pulsante \"Rimescola\" per generare contenuto casuale.",
        "Visualizza il risultato nella casella di output e usa i pulsanti di copia o download per salvare il tuo testo.",
        "Per generare più varianti, modifica le impostazioni di conteggio ripetizioni e rimescola nuovamente."
      ]
    },
    useCases: {
      title: "Applicazioni pratiche del rimescolamento testuale",
      examples: [
        {
          title: "Esercizi di scrittura",
          description: "Genera spunti per scrittura o esercizi rimescolando testi esistenti, creando nuovi arrangiamenti per corsi di scrittura creativa, workshop di poesia o progetti personali."
        },
        {
          title: "Test interfacce",
          description: "Crea contenuti testuali casuali per testare interfacce utente, assicurandosi che possano gestire contenuti variabili. Ideale per sviluppatori web che verificano layout responsive e adattabilità dei contenuti."
        },
        {
          title: "Attività educative",
          description: "Sviluppa attività per l'apprendimento linguistico dove gli studenti devono riordinare testi rimescolati, migliorando comprensione e abilità grammaticali attraverso esercizi interattivi."
        },
        {
          title: "Ispirazione creativa",
          description: "Scopri nuove prospettive o idee rimescolando contenuti esistenti e identificando combinazioni interessanti, aiutando scrittori a superare blocchi e trovare nuovi approcci."
        },
        {
          title: "Anonimizzazione dati",
          description: "Rimescola parole in testi sensibili per creare contenuti realistici ma anonimi per presentazioni, discorsi o ambienti di test dove non si possono usare dati reali."
        },
        {
          title: "Pratica discorsi e presentazioni",
          description: "Crea varianti di contenuti per discorsi, esercitandoti con diversi arrangiamenti di parole per migliorare adattabilità e ridurre dipendenza da sequenze memorizzate."
        }
      ]
    },
    faqs: {
      title: "Domande frequenti sul Rimescolatore di Testo",
      questions: [
        {
          question: "Il rimescolamento influisce sulla formattazione del mio testo?",
          answer: "Con le opzioni di conservazione attivate, il Rimescolatore di Testo mantiene maiuscole e punteggiatura nel testo, assicurando che i risultati conservino una formattazione appropriata. Significa che lettere maiuscole all'inizio di frasi e punteggiatura finale rimarranno invariate, anche se le parole stesse vengono riordinate."
        },
        {
          question: "Posso rimescolare solo parti del mio testo?",
          answer: "Lo strumento opera sull'intero testo in input, ma puoi elaborare separatamente porzioni più piccole e poi combinarle con contenuto non rimescolato per ottenere un rimescolamento parziale. Per un controllo più preciso, prova la modalità paragrafo per rimescolare solo sezioni specifiche."
        },
        {
          question: "Il rimescolamento è veramente casuale?",
          answer: "Sì, lo strumento usa algoritmi standard di randomizzazione (rimescolamento Fisher-Yates) per garantire un vero riarrangiamento casuale degli elementi testuali ad ogni rimescolamento. Ogni clic sul pulsante di rimescolamento produrrà un diverso arrangiamento del testo."
        },
        {
          question: "Qual è la differenza tra le varie modalità di rimescolamento?",
          answer: "La modalità parole rimescola singole parole mantenendo la punteggiatura invariata (se selezionato). La modalità frasi mantiene intatte le singole frasi ma ne randomizza l'ordine. La modalità righe preserva ogni riga ma ne mischia l'ordine nel documento. La modalità caratteri randomizza singoli caratteri per uno scombussolamento completo. La modalità paragrafo mantiene i paragrafi intatti ma li riordina."
        },
        {
          question: "Posso personalizzare quali caratteri sono considerati separatori di parole o frasi?",
          answer: "Sì, il pannello delle opzioni avanzate ti permette di definire delimitatori personalizzati per parole e frasi. Questo ti dà un controllo preciso su come il testo viene segmentato prima del rimescolamento, particolarmente utile per contenuti specializzati o lingue con punteggiatura unica."
        },
        {
          question: "Come posso rimuovere parole duplicate dal testo rimescolato?",
          answer: "Attiva l'opzione \"Rimuovi parole duplicate\" nel pannello delle impostazioni avanzate. Questo assicurerà che ogni parola appaia solo una volta nell'output, utile per creare glossari o eliminare ridondanze nel testo rimescolato."
        },
        {
          question: "C'è un limite alla quantità di testo che posso rimescolare?",
          answer: "Lo strumento può gestire grandi quantità di testo, ma documenti molto estesi (oltre 100.000 caratteri) potrebbero riscontrare qualche calo di prestazioni. Per testi molto grandi, considera di dividerli in sezioni più piccole da elaborare separatamente."
        }
      ]
    },
    advancedTips: {
      title: "Suggerimenti avanzati per padroneggiare il rimescolamento",
      description: "Sfrutta al massimo lo strumento di rimescolamento con questi consigli da esperti e approfondimenti, aiutandoti a creare il tipo esatto di testo casuale di cui hai bisogno per scopi specifici.",
      tips: [
        "Usa l'impostazione \"Dimensione gruppo di rimescolamento\" per mantenere insieme piccole frasi mentre ne randomizzi l'ordine - perfetto per preservare coppie aggettivo-sostantivo.",
        "Per generare scrittura surrealista o sperimentale, passa il testo attraverso lo strumento due volte con modalità diverse, combinando rimescolamento di caratteri e parole.",
        "Crea modelli di arrangiamento più variati regolando i separatori di parole per includere o escludere certi segni di punteggiatura.",
        "Quando lavori con poesie o versi, usa la modalità righe per preservare singole righe mentre esplori diversi arrangiamenti di strofe.",
        "A scopo di test, usa la funzionalità di conteggio ripetizioni per generare più varianti in una volta invece di cliccare ripetutamente rimescola.",
        "Mantieni le maiuscole ma non la punteggiatura per creare testi in stile flusso di coscienza fluidi preservando nomi propri e inizi di frase.",
        "Usa la modalità caratteri su frasi per creare codici o password unici basati su testo significativo.",
        "Importa testo da più fonti, rimescolali separatamente, poi combina i risultati per interessanti fusioni di idee e stili."
      ]
    }
  },
  tagline: 'Lo strumento di randomizzazione testuale più avanzato al mondo',
  wordCount: 'parole',
  importButton: 'Importa file',
  clearInputButton: 'Svuota input',
  clearOutputButton: 'Svuota output',
  downloadButton: 'Scarica',
  useExampleButton: 'Usa esempio',
  advancedOptions: 'Opzioni avanzate',
  delimiterOptions: 'Opzioni delimitatori',
  wordDelimiters: 'Delimitatori parole',
  wordDelimitersHint: 'Caratteri usati per separare le parole',
  sentenceDelimiters: 'Delimitatori frasi',
  sentenceDelimitersHint: 'Caratteri usati per terminare le frasi',
  additionalOptions: 'Opzioni aggiuntive',
  repeatCount: 'Conteggio ripetizioni',
  repeatCountHint: 'Genera più versioni rimescolate',
  shuffleGroup: 'Dimensione gruppo rimescolamento',
  shuffleGroupHint: 'Rimescola parole in gruppi di dimensione specificata',
  removeRepeatedWords: 'Rimuovi parole ripetute',
  preserveSpacing: 'Mantieni spaziatura',
  examplesTitle: 'Esempi',
  useThisExample: 'Usa questo esempio',
  helpTitle: 'Aiuto e informazioni',
  whatIsTitle: 'Cos\'è il Rimescolatore di Testo?',
  whatIsDescription: 'Il Rimescolatore di Testo è uno strumento che può randomizzare l\'ordine di parole, frasi, righe, caratteri o paragrafi in un testo. Usa algoritmi complessi per garantire risultati veramente casuali mentre preserva le opzioni di formattazione che scegli, come maiuscole e punteggiatura.',
  howToUseTitle: 'Come usare questo strumento',
  tipsTitle: 'Suggerimenti per un uso ottimale',
  modes: {
    word: 'Parole',
    sentence: 'Frasi',
    line: 'Righe',
    character: 'Caratteri',
    paragraph: 'Paragrafi'
  },
  howToUseSteps: [
    'Inserisci o incolla il tuo testo nella casella di input a sinistra.',
    'Seleziona la modalità di rimescolamento e le opzioni desiderate in basso.',
    'Clicca il pulsante "Rimescola" per generare testo casuale.',
    'Il risultato apparirà nella casella di output a destra.',
    'Usa i pulsanti copia o scarica per salvare i tuoi risultati.'
  ],
  tips: [
    'Per esercizi di scrittura creativa, prova la modalità parole mantenendo le maiuscole ma rimuovendo la punteggiatura.',
    'Per testare layout, usa la modalità frasi attivando tutte le opzioni di conservazione per mantenere testo leggibile ma casuale.',
    'Usa la modalità caratteri per creare password o codici sicuri basati su input testuali.',
    'La funzionalità di rimescolamento a gruppi ti permette di mantenere insieme parole correlate mentre randomizzi il testo complessivo.',
    'Hai bisogno di più varianti? Imposta il conteggio ripetizioni per generare più versioni rimescolate in una volta.'
  ],
  examples: {
    basic: {
      title: 'Rimescolamento base di parole',
      description: 'Semplice randomizzazione di parole mantenendo punteggiatura e maiuscole',
      input: 'La veloce volpe marrone salta sopra il cane pigro. Tutti e cinque i maghi pugili saltano velocemente.',
      output: 'Marrone la veloce volpe pigro cane salta sopra. Veloci saltano maghi pugili e cinque tutti i.'
    },
    sentence: {
      title: 'Rimescolamento frasi',
      description: 'Randomizzazione dell\'ordine di frasi complete',
      input: 'Prima frase qui. Questa è la seconda frase. Ecco la terza frase. Infine, abbiamo la quarta frase.',
      output: 'Ecco la terza frase. Prima frase qui. Infine, abbiamo la quarta frase. Questa è la seconda frase.'
    },
    creative: {
      title: 'Ricombinazione creativa',
      description: 'Genera nuovo testo creativo rimescolando parole senza vincoli di formattazione',
      input: 'La poesia è creazione ritmica della bellezza con le parole. È la rivelazione di sentimenti che il poeta crede personali e interiori, ma che il lettore riconosce come propri.',
      output: 'Bellezza con creazione ritmica è parole poeta rivelazione ma lettore personale interiore riconosce come propria la di sentimenti che il crede e, che.'
    }
  },
  stepLabel: 'Passo',
  emptyInputMessage: 'Inserisci del testo da rimescolare',
  errorMessage: 'Errore durante il rimescolamento, prova una modalità o opzioni diverse',
  downloadFileName: 'testo_rimescolato.txt',
  errorMessages: {
    shuffleError: 'Errore di rimescolamento:',
    sentenceError: 'Errore rimescolamento frasi:',
    copyError: 'Errore copia testo:'
  }
}