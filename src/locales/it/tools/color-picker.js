export default {
  name: 'Selettore di Colori',
  description: 'Utilizza strumenti avanzati per selezionare, convertire e generare schemi di colore',
  options: {
    colorSpace: 'Spazio colore',
    paletteType: 'Tipo di tavolozza',
    includeAlpha: 'Includi trasparenza',
    colorNaming: 'Nomenclatura colori'
  },
  colorSpaces: {
    rgb: 'RGB',
    hex: 'HEX',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB',
    named: 'Colori denominati'
  },
  palettes: {
    monochromatic: 'Monocromatico',
    complementary: 'Complementari',
    analogous: 'Analoghi',
    triadic: 'Triade',
    tetradic: 'Tetrade',
    split: 'Complementari divisi'
  },
  actions: {
    pickColor: 'Seleziona colore',
    randomColor: 'Colore casuale',
    generatePalette: 'Genera tavolozza',
    convert: 'Converti',
    copyColor: 'Copia colore corrente',
    copyAll: 'Copia tutto',
    save: 'Salva colore',
    reset: 'Ripristina',
    clear: 'Pulisci'
  },
  formats: {
    hex: 'HEX',
    rgb: 'RGB',
    hsl: 'HSL'
  },
  colorSchemes: {
    title: 'Schemi colore',
    complementary: 'Complementari',
    triadic: 'Triade',
    analogous: 'Analoghi',
    monochromatic: 'Monocromatico',
    split: 'Complementari divisi',
    double: 'Doppi complementari',
    square: 'Quadrato',
    compound: 'Composto'
  },
  colorAdjust: {
    title: 'Regolazione colore',
    hue: 'Tonalità',
    saturation: 'Saturazione',
    lightness: 'Luminosità',
    alpha: 'Trasparenza'
  },
  colorInfo: {
    title: 'Informazioni colore',
    name: 'Nome colore',
    format: 'Formato',
    contrast: 'Contrasto',
    accessibility: {
      title: 'Accessibilità',
      pass: 'Conforme WCAG',
      fail: 'Non conforme WCAG',
      normal: 'Testo normale',
      large: 'Testo grande'
    }
  },
  messages: {
    copied: 'Colore copiato negli appunti',
    copyFailed: 'Copia colore fallita',
    invalidColor: 'Formato colore non valido',
    contrastWarning: 'Contrasto basso',
    saved: 'Colore salvato',
    contrast: 'Contrasto: {ratio}',
    accessibility: {
      AAA: 'Contrasto eccellente (AAA)',
      AA: 'Buon contrasto (AA)',
      fail: 'Contrasto insufficiente - non accessibile'
    },
    preview: 'Anteprima',
    colorValue: 'Valore colore',
  },
  history: {
    title: 'Cronologia colori',
    empty: 'Nessun colore recente',
    clear: 'Svuota cronologia'
  },
  colorPalette: {
    title: 'Tavolozza',
    addToPalette: 'Aggiungi a tavolozza',
    removeFromPalette: 'Rimuovi da tavolozza',
    exportPalette: 'Esporta tavolozza',
    importPalette: 'Importa tavolozza',
    clearPalette: 'Svuota tavolozza'
  },
  article: {
    title: "Selettore di Colori Avanzato: Seleziona, Converti e Crea Schemi di Colore Perfetti",
    features: {
      title: "Scopri lo strumento Selettore di Colori e le sue funzionalità",
      description: "Il nostro <strong>selettore di colori avanzato</strong> è uno strumento online completo progettato per la selezione e manipolazione precisa dei colori. A differenza dei selettori di colore base, questo <strong>strumento professionale</strong> ti dà il controllo completo su tonalità, saturazione, luminosità e opacità, permettendo un lavoro di design preciso al pixel.<br><br>Lo strumento opera su diversi <strong>spazi colore</strong> inclusi RGB, HEX, HSL, HSV e CMYK, convertendo automaticamente tra formati mantenendo valori di colore precisi. Questo elimina la necessità di conversioni manuali o l'uso di più strumenti. Inoltre, la funzione <strong>generatore di schemi colore</strong> utilizza algoritmi di teoria del colore per creare combinazioni armoniose che seguono principi di design consolidati.<br><br>Per professionisti del design e sviluppatori, la possibilità di salvare colori, creare tavolozze ed esportare in vari formati semplifica il flusso di lavoro, garantendo coerenza cromatica tra progetti, rendendo questo <strong>selettore colore web</strong> una risorsa essenziale per creativi digitali.",
      useCases: {
        title: "Applicazioni pratiche dello strumento Selettore di Colori",
        items: [
          "<strong>Web design e sviluppo</strong>: Seleziona precisi <strong>codici colore HEX</strong> e valori RGB per fogli di stile CSS ed elementi di design. Gli sviluppatori frontend possono garantire coerenza cromatica tra framework come React, Vue o Angular usando gli stessi valori colore esatti nell'intero codice, eliminando discrepanze da approssimazioni visive.",
          
          "<strong>Graphic design</strong>: Crea tavolozze colore coerenti per loghi, materiali di marketing e sistemi di identità aziendale. I designer professionisti possono sperimentare variazioni cromatiche, verificare relazioni tra colori e perfezionare tonalità specifiche fino a ottenere l'aspetto visivo perfetto per i loro concetti di design.",
          
          "<strong>Pittura digitale e illustrazione</strong>: Seleziona e salva <strong>campioni colore</strong> personalizzati per opere d'arte digitali, garantendo coerenza tra progetti. Gli artisti possono creare tavolozze personalizzate che riflettono il loro stile personale o requisiti artistici specifici, poi esportarle per l'uso in software come Photoshop, Illustrator o Procreate.",
          
          "<strong>UI/UX design</strong>: Sviluppa schemi colore accessibili che soddisfano i requisiti di contrasto WCAG, migliorando l'usabilità. I designer di interfacce possono testare in tempo reale diverse combinazioni per conformità agli standard di accessibilità, assicurando che i loro design siano esteticamente gradevoli ma anche utilizzabili da persone con disabilità visive.",
          
          "<strong>Design per la stampa</strong>: Converti tra valori RGB e <strong>CMYK</strong> per garantire accuratezza cromatica nei materiali stampati. Gli specialisti di stampa possono prevedere come i colori digitali si tradurranno su supporto fisico, evitando il comune problema di colori che appaiono diversi su carta rispetto allo schermo.",
          
          "<strong>Sviluppo identità aziendale</strong>: Stabilisci e mantieni <strong>colori di marca</strong> coerenti su tutti i punti di contatto digitali e fisici. I professionisti del marketing possono documentare specifiche cromatiche esatte per le linee guida del brand, assicurando che tutti gli utilizzatori del marchio adoperino gli stessi identici colori su tutti i materiali."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sul Selettore di Colori",
      items: [
        {
          question: "Qual è la differenza tra formati RGB, HEX, HSL e altri?",
          answer: "Diversi <strong>formati colore</strong> usano sistemi numerici e approcci diversi per rappresentare lo stesso colore:<br><br>• I <strong>codici HEX</strong> (es. #FF5733) sono valori esadecimali a sei cifre, ampiamente usati nel web design per rappresentare i canali rosso, verde e blu in un formato compatto<br><br>• I <strong>valori RGB</strong> (es. rgb(255, 87, 51)) specificano quantità esatte (0-255) di luce rossa, verde e blu, rendendoli intuitivi per il design digitale<br><br>• <strong>HSL</strong> (tonalità, saturazione, luminosità) si allinea meglio a come gli umani percepiscono il colore, facilitando la previsione di relazioni cromatiche e regolazioni<br><br>• <strong>CMYK</strong> usa percentuali di ciano, magenta, giallo e nero, progettato per la produzione stampata<br><br>Il nostro <strong>selettore colore</strong> gestisce automaticamente le conversioni tra questi formati, permettendoti di lavorare nel sistema più adatto al tuo progetto."
        },
        {
          question: "Come posso creare schemi di colore armoniosi per i miei progetti?",
          answer: "Con il nostro strumento, creare <strong>combinazioni di colori</strong> armoniose è semplificato da diversi approcci:<br><br>1. Usa la funzione <strong>generatore di schemi colore</strong> per creare automaticamente tavolozze complementari, analoghe, triadiche o monocromatiche basate sul tuo colore principale<br><br>2. Applica principi consolidati di teoria del colore tramite opzioni predefinite, come colori complementari (opposti sulla ruota cromatica) o analoghi (adiacenti sulla ruota)<br><br>3. Perfeziona lo schema regolando saturazione e luminosità mantenendo la stessa tonalità, creando tavolozze variegate ma coerenti<br><br>4. Testa in tempo reale l'<strong>armonia cromatica</strong> per capire come diversi colori interagiscono prima di finalizzare le scelte<br><br>L'anteprima visiva dello strumento rende facile valutare come i colori lavorano insieme, permettendo anche a chi non ha formazione design di creare <strong>schemi colore</strong> dall'aspetto professionale."
        },
        {
          question: "Posso salvare i miei colori e tavolozze per uso futuro?",
          answer: "Sì, il nostro <strong>selettore di colori</strong> offre diverse opzioni per salvare il tuo lavoro cromatico:<br><br>• La <strong>cronologia colori</strong> tiene traccia automaticamente dei colori usati di recente per un accesso rapido<br>• Crea e <strong>salva tavolozze personalizzate</strong> per diversi progetti o clienti, con nomi descrittivi<br>• <strong>Esporta schemi colore</strong> in vari formati compatibili con software di design (Adobe ASE, GIMP ecc.)<br>• Genera <strong>variabili CSS</strong> pronte per essere copiate nei fogli di stile<br>• Condividi link a tavolozze con membri del team per lavoro di design collaborativo<br><br>Queste funzioni di salvataggio e condivisione rendono il nostro <strong>strumento colore</strong> prezioso per mantenere coerenza in progetti complessi e tra team, assicurando che tutti usino gli stessi identici <strong>codici colore</strong> durante l'intero processo di design e sviluppo."
        },
        {
          question: "Come assicurarmi che i colori scelti siano accessibili a tutti gli utenti?",
          answer: "Il nostro <strong>selettore di colori</strong> include funzionalità di accessibilità per aiutarti a creare design inclusivi:<br><br>• Il <strong>calcolatore di contrasto</strong> valuta automaticamente combinazioni testo/sfondo secondo le linee guida WCAG<br>• Indicatori visivi mostrano se le combinazioni superano gli standard AA o AAA per l'accessibilità<br>• Suggerimenti per migliorare il <strong>contrasto cromatico</strong> mantenendo l'estetica del design<br>• Simulazione di diversi tipi di deficit visivo (protanopia, deuteranopia ecc.)<br><br>Usando queste funzioni, puoi assicurarti che i tuoi <strong>schemi colore</strong> non siano solo visivamente accattivanti, ma offrano sufficiente contrasto per utenti con disabilità visive. Lo strumento ti aiuta a bilanciare preferenze estetiche e requisiti di accessibilità, creando design adatti a tutti gli utenti."
        },
        {
          question: "Qual è il modo migliore per usare i risultati del selettore colori nel mio software di design?",
          answer: "Il nostro <strong>strumento colore</strong> si integra perfettamente con i principali software di design in diversi modi:<br><br>1. Copia con un clic <strong>codici colore</strong> nel formato preferito (HEX, RGB, HSL)<br>2. Esporta <strong>tavolozze</strong> in formato Adobe Swatch Exchange (.ase) per l'importazione diretta in app Creative Cloud<br>3. Genera variabili CSS o mixin SCSS/LESS per framework di sviluppo web<br>4. Cattura screenshot di interi <strong>schemi colore</strong> con tutti i valori annotati<br><br>Per un flusso di lavoro ottimale, consigliamo di creare prima la tavolozza completa nel nostro strumento, poi esportarla nel formato più adatto al tuo software di design o ambiente di codifica. Questo approccio garantisce coerenza di <strong>valori colore</strong> nell'intero progetto minimizzando errori di inserimento manuale."
        }
      ]
    },
    guide: {
      title: "Come usare il Selettore di Colori Avanzato: Guida Passo-Passo",
      step1: "<strong>Seleziona un colore base</strong>: Inizia scegliendo un colore in uno di questi modi. Puoi cliccare e trascinare nell'ampia area colore per regolare saturazione e luminosità, usare il selettore di tonalità per cambiare il colore base, inserire un <strong>codice colore</strong> specifico nel formato preferito (HEX, RGB, HSL), o selezionare un colore recente dalla cronologia. Questa flessibilità ti permette di partire da specifiche cromatiche precise o esplorare visivamente.",
      step2: "<strong>Perfeziona la tua selezione</strong>: Dopo aver scelto un colore base, usa i controlli precisi per aggiustamenti. I selettori del <strong>selettore colore</strong> ti permettono di modificare singoli componenti come tonalità (0-360°), saturazione (0-100%), luminosità (0-100%) e opacità (0-100%). Questi controlli granulari assicurano che tu possa ottenere la tonalità esatta, facendo regolazioni sottili che potrebbero essere difficili con altri strumenti. Osserva in tempo reale gli aggiornamenti nell'area di anteprima mentre apporti queste modifiche.",
      step3: "<strong>Genera uno schema colore</strong>: Clicca la sezione schemi colore per creare automaticamente <strong>combinazioni</strong> armoniose basate sul colore selezionato. Scegli tra diversi tipi di schema, inclusi complementari (colori opposti sulla ruota cromatica), analoghi (colori adiacenti), triade (tre colori equidistanti) o monocromatici (variazioni della stessa tonalità). Questi schemi generati algoritmicamente seguono principi di teoria del colore, garantendo risultati visivamente piacevoli.",
      step4: "<strong>Converti tra formati</strong>: Usa i pulsanti formato per passare tra diversi <strong>formati colore</strong>. Il tuo colore sarà convertito automaticamente tra HEX (#FF5733), RGB (rgb(255, 87, 51)), HSL (hsl(14, 100%, 60%)) ecc., mantenendo esattamente lo stesso colore visivo. Questo ti permette di ottenere facilmente il codice necessario per la tua applicazione specifica, che tu stia facendo web design, arte digitale o materiali stampati.",
      step5: "<strong>Salva ed esporta i tuoi colori</strong>: Una volta perfezionato un colore o una tavolozza, salvalo per uso futuro. Clicca i pulsanti copia per riprodurre l'attuale <strong>codice colore</strong> negli appunti, aggiungerlo a una tavolozza salvata, o esportare l'intero schema in vari formati. Per gli sviluppatori web, puoi generare variabili CSS o set di colori pronti per l'implementazione nei fogli di stile, garantendo coerenza di <strong>valori colore</strong> nell'intero progetto."
    },
    conclusion: "Il Selettore di Colori Avanzato è uno strumento essenziale nel toolkit di designer e sviluppatori moderni, colmando il divario tra selezione cromatica artistica e implementazione tecnica. Offrendo controllo preciso sui valori colore, conversione automatica tra formati e generazione intelligente di schemi, elimina gran parte delle congetture e dei calcoli manuali precedentemente necessari nel lavoro con i colori digitali. Che tu stia creando un sistema di identità aziendale, progettando un'interfaccia web o sviluppando opere d'arte digitali, la capacità di selezionare, manipolare e organizzare colori con precisione scientifica seguendo al contempo principi estetici ti dà un vantaggio significativo. Con il design che continua a enfatizzare attrattiva visiva e coerenza tecnica, strumenti che aiutano a tradurre visioni creative in specifiche esatte diventano sempre più preziosi in tutte le discipline creative e tecniche."
  }
}