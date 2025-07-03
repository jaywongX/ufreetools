export default {
  name: 'Tavolozza Semplice',
  description: 'Strumento di disegno online con supporto per disegno libero, cambio colore e dimensione del pennello',
  
  // Barra degli strumenti
  tools: {
    brush: 'Pennello',
    eraser: 'Gomma',
    clear: 'Pulisci tavola',
    save: 'Salva immagine',
    undo: 'Annulla',
    redo: 'Ripristina',
    apply: 'Applica'
  },

  // Impostazioni
  settings: {
    brushSize: 'Dimensione pennello',
    color: 'Colore',
    opacity: 'Opacità',
    backgroundColor: 'Colore sfondo'
  },

  // Selettore colori
  colors: {
    black: 'Nero',
    white: 'Bianco',
    red: 'Rosso',
    green: 'Verde',
    blue: 'Blu',
    yellow: 'Giallo',
    orange: 'Arancione',
    purple: 'Viola',
    pink: 'Rosa',
    brown: 'Marrone',
    gray: 'Grigio',
    custom: 'Colore personalizzato'
  },

  // Impostazioni tavola
  canvas: {
    width: 'Larghezza',
    height: 'Altezza',
    resize: 'Ridimensiona tavola',
    orientation: 'Orientamento',
    portrait: 'Verticale',
    landscape: 'Orizzontale',
    square: 'Quadrato'
  },

  // Messaggi e avvisi
  messages: {
    saveSuccess: 'Immagine salvata',
    confirmClear: 'Sei sicuro di voler pulire la tavola? Tutto il contenuto non salvato andrà perso.',
    unsupportedBrowser: 'Il tuo browser non supporta Canvas, usa un browser moderno.',
    fileNamePrompt: 'Inserisci nome file',
    defaultFileName: 'Il mio disegno'
  },

  // Informazioni sullo strumento
  aboutTitle: 'Informazioni su Tavolozza Semplice',
  aboutDescription: 'Tavolozza Semplice è uno strumento di disegno online intuitivo e facile da usare che ti permette di esprimere liberamente la tua creatività attraverso il disegno. Che si tratti di schizzi, illustrazioni semplici o annotazioni visive, questo strumento soddisfa tutte le tue esigenze.',

  featuresTitle: 'Funzionalità principali',
  feature1: 'Disegno libero con supporto per diversi colori e dimensioni del pennello',
  feature2: 'Strumento gomma per modificare facilmente i disegni',
  feature3: 'Funzioni annulla e ripristina per correggere errori',
  feature4: 'Regolazione dell\'opacità del pennello per effetti artistici',
  feature5: 'Pulizia della tavola con un clic per ricominciare',
  feature6: 'Salvataggio delle opere in formato immagine',

  howToUseTitle: 'Come usare',
  howToUseStep1: '1. Seleziona lo strumento pennello e il colore per iniziare a disegnare',
  howToUseStep2: '2. Usa i cursori per regolare dimensione e opacità del pennello',
  howToUseStep3: '3. Per modificare, usa lo strumento gomma per cancellare',
  howToUseStep4: '4. Puoi annullare o ripristinare le azioni in qualsiasi momento',
  howToUseStep5: '5. Al termine, clicca salva per scaricare la tua opera',

  tipsTitle: 'Consigli utili',
  tip1: 'Usa pennelli fini per dettagli precisi e più spessi per riempimenti ampi',
  tip2: 'Riduci l\'opacità per effetti acquerello o trasparenze',
  tip3: 'Sfrutta la funzione annulla senza paura di sbagliare',
  tip4: 'Disegna prima i contorni generali, poi aggiungi i dettagli',
  tip5: 'Sperimenta combinazioni di colori per opere più vivaci',

  // Contenuto articolo
  article: {
    title: "Tavolozza Semplice: crea arte digitale con una tela online semplice",
    features: {
      title: "Cos'è la Tavolozza Semplice online?",
      description: "Questa <strong>Tavolozza Semplice online</strong> è una <strong>tela digitale</strong> versatile progettata per creare illustrazioni, schizzi e idee visive direttamente nel browser. Questo <strong>strumento di disegno web</strong> combina funzionalità intuitive e caratteristiche di disegno di base, rendendolo accessibile a utenti di tutti i livelli.<br><br>La nostra <strong>app di disegno gratuita</strong> include dimensioni del pennello regolabili, controllo di colore e trasparenza, strumento gomma e possibilità di salvare le creazioni come immagini. Questa <strong>tavola per schizzi digitale</strong> supporta input da mouse e touch, permettendo di disegnare in modo naturale su computer, tablet o smartphone. Lo strumento include anche funzioni annulla/ripristina per sperimentare senza paura di sbagliare.",
      useCases: {
        title: "Applicazioni pratiche del disegno digitale",
        items: [
          "<strong>Illustrazioni educative</strong>: gli insegnanti possono creare diagrammi e spiegazioni visive per integrare le lezioni, aiutando gli studenti a comprendere concetti complessi con <strong>strumenti di apprendimento visivo</strong>",
          "<strong>Collaborazione remota</strong>: i team possono disegnare idee, creare diagrammi di flusso o annotare concetti durante riunioni online, come <strong>alternativa digitale alla lavagna</strong>",
          "<strong>Storyboard digitali</strong>: creatori di contenuti e filmmaker possono abbozzare sequenze visive prima di passare a produzioni più dettagliate",
          "<strong>Visualizzazione concettuale</strong>: i designer possono trasformare rapidamente idee in schizzi prima di usare software professionali, usando questo strumento come <strong>piattaforma per bozze rapide</strong>",
          "<strong>Rilassamento creativo</strong>: chi cerca un'espressione creativa può usare scarabocchi digitali come <strong>terapia artistica antistress</strong>",
          "<strong>Arte digitale per bambini</strong>: i bambini possono esplorare la creatività senza pasticci, sviluppando abilità motorie con uno <strong>strumento di disegno per principianti</strong>"
        ]
      }
    },
    faq: {
      title: "Domande frequenti su Tavolozza Semplice",
      items: [
        {
          question: "Posso usare Tavolozza Semplice su tablet o smartphone?",
          answer: "Sì, la nostra Tavolozza Semplice è completamente compatibile con dispositivi touch. Questo strumento di disegno online è ottimizzato per input da mouse e touch, permettendo di disegnare in modo naturale su tablet e smartphone. Il design responsive si adatta a diverse dimensioni di schermo, anche se schermi più grandi offrono maggiore spazio. Per la migliore esperienza su mobile, usa la modalità orizzontale per massimizzare l'area di disegno."
        },
        {
          question: "Come posso salvare i miei disegni?",
          answer: "Salvare le tue opere con questo strumento è semplice. Clicca il pulsante 'Salva immagine' e inserisci un nome per il file. Il disegno verrà salvato come PNG con sfondo trasparente (a meno che non sia impostato un colore di sfondo). Questo formato mantiene la qualità dell'opera e può essere aperto con qualsiasi visualizzatore o editor di immagini."
        },
        {
          question: "Qual è la differenza tra opacità e dimensione del pennello?",
          answer: "La dimensione controlla lo spessore del tratto (in pixel), mentre l'opacità ne regola la trasparenza (in percentuale). Con opacità al 100% i tratti sono completamente coprenti, mentre valori più bassi creano effetti trasparenti simili all'acquerello, permettendo tecniche di stratificazione."
        },
        {
          question: "Posso annullare errori sulla Tavolozza Semplice?",
          answer: "Sì, lo strumento include funzioni annulla/ripristina che ricordano fino a 50 azioni precedenti, permettendoti di sperimentare liberamente e correggere eventuali errori, particolarmente utile per principianti."
        },
        {
          question: "Ci sono limiti alle dimensioni della tela?",
          answer: "Lo strumento offre tre dimensioni predefinite: orizzontale (800×600px), verticale (600×800px) e quadrata (700×700px), ottimizzate per prestazioni su diversi dispositivi. Al momento non sono supportate dimensioni personalizzate oltre queste impostazioni."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso di Tavolozza Semplice",
      steps: [
        "Seleziona lo <strong>strumento di disegno</strong> dalla barra laterale - pennello per creare o gomma per cancellare",
        "Regola la <strong>dimensione del pennello</strong> (da 1 a 50 pixel) con l'apposito cursore",
        "Modifica il livello di <strong>trasparenza</strong> (100% per tratti coprenti, meno per effetti semitrasparenti)",
        "Scegli un <strong>colore</strong> dalla tavolozza o selezionane uno personalizzato",
        "Imposta eventualmente un <strong>colore di sfondo</strong> diverso dal bianco",
        "Clicca e trascina sulla tela per <strong>creare la tua opera</strong>, sperimentando con diverse combinazioni",
        "Usa i pulsanti <strong>annulla/ripristina</strong> per correggere errori o ripristinare modifiche"
      ]
    },
    conclusion: "Tavolozza Semplice offre un modo accessibile per creare arte digitale senza la complessità di software professionali. La sua interfaccia intuitiva lo rende adatto a tutti, dallo schizzo casuale alla creazione di spiegazioni visive per l'insegnamento. Pur non sostituendo strumenti professionali, questa tela web eccelle nella comunicazione visiva rapida, negli schizzi creativi e nell'esplorazione artistica, fornendo gli strumenti base per esprimere idee visive e condividerle facilmente."
  }
};