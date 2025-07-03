export default {
  name: 'Generatore di formule LaTeX',
  description: 'Genera ed esporta formule matematiche LaTeX in tempo reale',
  
  // Testi UI
  input: 'Inserisci codice LaTeX',
  output: 'Anteprima risultato',
  renderButton: 'Renderizza formula',
  exportButton: 'Esporta come immagine',
  copyButton: 'Copia codice LaTeX',
  
  // Impostazioni
  settings: {
    title: 'Impostazioni',
    fontSize: 'Dimensione carattere',
    textColor: 'Colore testo',
    backgroundColor: 'Colore sfondo',
    displayMode: 'Modalità visualizzazione',
    displayModeInline: 'Modalità inline',
    displayModeBlock: 'Modalità blocco'
  },
  
  // Esempi
  examples: {
    title: 'Esempi',
    basic: 'Formule base',
    fraction: 'Frazioni',
    superscript: 'Apici/pedici',
    integral: 'Integrali',
    matrix: 'Matrici',
    more: 'Altri esempi'
  },
  
  // Messaggi
  copied: 'Copiato negli appunti',
  errorTitle: 'Errore rendering',
  errorMessage: 'Controlla la sintassi LaTeX',
  
  article: {
    title: "Guida completa al generatore di formule LaTeX - Crea equazioni matematiche perfette",
    intro: {
      title: "Scopri la potenza della generazione di formule LaTeX",
      p1: "<b>Il generatore di formule LaTeX</b> è uno strumento essenziale per creare equazioni matematiche professionali in articoli accademici, materiali didattici e documenti tecnici. A differenza degli editor di testo standard, il nostro generatore LaTeX rappresenta con precisione espressioni matematiche complesse, con simboli allineati, spaziatura e formattazione che seguono gli standard tipografici consolidati nelle pubblicazioni scientifiche. Questo strumento online elimina la necessità di installare software specializzati o imparare complessa programmazione LaTeX, permettendoti di creare formule di qualità editoriale attraverso un'interfaccia semplice e intuitiva che converte immediatamente il codice LaTeX in equazioni perfettamente renderizzate.",
      p2: "<b>La notazione matematica LaTeX</b>, sviluppata da Donald Knuth negli anni '70, è rimasta lo standard aureo per la preparazione di documenti scientifici e matematici. Il generatore di formule LaTeX rende questo potente sistema di tipografia accessibile a tutti, indipendentemente dal background tecnico, permettendo a studenti, insegnanti, ricercatori e professionisti di generare equazioni visivamente impeccabili per tesi, rapporti di ricerca, dispense o presentazioni. Lo strumento gestisce tutto, dalle espressioni algebriche di base al calcolo avanzato, matrici e formule statistiche, mantenendo uno stile coerente e un aspetto professionale in tutti i contenuti matematici.",
      p3: "<b>Il rendering in tempo reale delle formule</b> è uno dei vantaggi chiave del nostro generatore LaTeX, permettendoti di visualizzare immediatamente le tue equazioni mentre le digiti. Questo feedback istantaneo facilita l'apprendimento della sintassi LaTeX e accelera il processo di creazione delle equazioni. Inoltre, la capacità di esportare formule come immagini ad alta risoluzione ne semplifica l'integrazione in qualsiasi documento, presentazione o pagina web, senza problemi di compatibilità. Con opzioni di visualizzazione personalizzabili come dimensione del carattere, schema di colori e modalità di visualizzazione, il generatore di formule LaTeX si adatta alle tue esigenze specifiche mantenendo la precisione e l'eleganza che hanno reso LaTeX la scelta preferita per la documentazione matematica."
    },
    useCases: {
      title: "Applicazioni pratiche del generatore di formule LaTeX",
      case1: "<h3>Ricerca accademica e pubblicazioni scientifiche</h3><p><b>La generazione di formule LaTeX</b> è indispensabile per i ricercatori che preparano articoli per riviste scientifiche e conferenze. Discipline accademiche come fisica, matematica, ingegneria e informatica richiedono la rappresentazione precisa di equazioni complesse che solo LaTeX può fornire. Il nostro generatore aiuta i ricercatori a creare facilmente equazioni per la meccanica quantistica, modelli statistici, analisi della complessità degli algoritmi e dimostrazioni teoriche, senza dover affrontare la ripida curva di apprendimento di LaTeX. Generando notazioni matematiche di alta qualità che soddisfano gli standard editoriali, i ricercatori possono concentrarsi sui contenuti anziché sulle sfide di formattazione. Ad esempio, un dottorando in fisica teorica può generare rapidamente l'equazione di Schrödinger, il calcolo tensoriale o formule di relatività senza memorizzare numerosi comandi LaTeX, assicurando che i suoi articoli mantengano sempre una qualità professionale.</p>",
      case2: "<h3>Materiali didattici e corsi online</h3><p><b>Educatori e creatori di corsi online</b> si affidano al generatore di formule LaTeX per sviluppare materiali didattici chiari e coerenti. Gli insegnanti che preparano piani di lezione, fogli di lavoro, valutazioni o risorse di apprendimento digitale hanno bisogno di un modo affidabile per presentare concetti matematici con la notazione appropriata. Il nostro strumento permette agli educatori di creare problemi algebrici professionali, dimostrazioni geometriche, esempi di calcolo e statistiche che vengono visualizzati correttamente su diversi dispositivi e piattaforme. Questo è particolarmente prezioso per lo sviluppo di corsi online, dove i contenuti matematici devono essere visualizzati correttamente nei sistemi di gestione dell'apprendimento. Ad esempio, un insegnante di calcolo può generare formule integrali, equazioni differenziali ed espressioni di limite che appaiono esattamente come sulla lavagna della classe, migliorando la comprensione degli studenti attraverso chiarezza visiva e precisione matematica.</p>",
      case3: "<h3>Documentazione tecnica e specifiche ingegneristiche</h3><p><b>Ingegneri e redattori tecnici</b> utilizzano la generazione LaTeX per creare documenti precisi che includono espressioni matematiche, costanti fisiche e simboli scientifici. Settori come aerospaziale, elettronica, telecomunicazioni e sviluppo software richiedono documentazione contenente formule complesse che devono essere rappresentate accuratamente per specifiche, manuali utente e rapporti tecnici. Il nostro generatore LaTeX semplifica questo processo permettendo agli ingegneri di creare equazioni per algoritmi di elaborazione del segnale, sistemi di controllo, calcoli di campi elettromagnetici o algoritmi software senza necessitare di un'ampia conoscenza di LaTeX. Ad esempio, un ingegnere delle telecomunicazioni può generare efficientemente le equazioni di Maxwell o le trasformate di Fourier per documenti di specifiche tecniche, assicurando che i concetti matematici siano comunicati chiaramente e accuratamente ai team di produzione o agli enti regolatori.</p>",
      case4: "<h3>Scienza dei dati e rapporti di analisi statistica</h3><p><b>Data scientist e statistici</b> si affidano al generatore di formule LaTeX quando preparano rapporti che richiedono una rappresentazione complessa di metodi statistici, algoritmi di machine learning e modelli probabilistici. Presentazioni professionali di analisi dati spesso includono formule complesse per modelli di regressione, test di ipotesi, distribuzioni di probabilità e complessità algoritmica. Il nostro strumento aiuta i professionisti dei dati a creare equazioni visivamente coerenti per intervalli di confidenza, test di significatività, inferenza bayesiana o architetture di reti neurali, migliorando la credibilità e la leggibilità delle loro scoperte. Ad esempio, un analista di ricerca di mercato può usare il nostro generatore LaTeX per formattare correttamente complesse formule statistiche nei rapporti per i clienti, rendendo metodologie complesse più comprensibili per stakeholder non tecnici mantenendo la precisione matematica.</p>",
      case5: "<h3>Materiali didattici interattivi e tecnologia educativa</h3><p><b>Sviluppatori di edtech</b> integrano il generatore di formule LaTeX in applicazioni di apprendimento interattivo per visualizzare dinamicamente contenuti matematici. Siti web educativi focalizzati sulla matematica, app per dispositivi mobili e libri di testo interattivi richiedono che le equazioni siano visualizzate correttamente su diversi tipi di dispositivi e dimensioni dello schermo. Le formule generate dal nostro strumento LaTeX possono essere esportate come immagini o renderizzate direttamente nelle applicazioni web, garantendo un aspetto coerente indipendentemente dal dispositivo o browser dell'utente. Ad esempio, gli sviluppatori di un'app per l'apprendimento dell'algebra possono usare il nostro strumento per generare formule che vengono visualizzate correttamente su smartphone e tablet, creando esercizi interattivi di problem solving con notazioni matematiche formattate correttamente che migliorano l'esperienza di apprendimento attraverso chiarezza visiva e precisione matematica.</p>"
    },
    tutorial: {
      title: "Come creare perfette formule matematiche con il generatore LaTeX",
      intro: "Segui questi passaggi per generare formule matematiche professionali con il nostro generatore di formule LaTeX:",
      step1: {
        title: "Passo 1: Inserisci il tuo codice LaTeX",
        description: "Inizia inserendo la tua espressione matematica LaTeX nella casella di input sul lato sinistro dello schermo. Se non hai familiarità con la sintassi LaTeX, puoi iniziare con i nostri esempi facendo clic sui pulsanti sotto l'area di anteprima. Per operazioni matematiche di base, usa operatori standard come <code>+</code>, <code>-</code>, <code>*</code> e <code>/</code>. Per le frazioni, usa la struttura <code>\\frac{num}{den}</code>. Gli apici si creano con il simbolo di circonflesso <code>^</code>, i pedici con il trattino basso <code>_</code>. Ad esempio, per creare la formula dell'equazione quadratica, dovresti inserire: <code>\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}</code>. Lo strumento renderizza la tua formula in tempo reale mentre digiti, dandoti un feedback visivo immediato."
      },
      step2: {
        title: "Passo 2: Personalizza l'aspetto della formula",
        description: "Dopo aver inserito il codice LaTeX, puoi personalizzare la visualizzazione della formula usando il pannello delle impostazioni. Regola il cursore della dimensione del carattere per ingrandire o rimpicciolire la formula secondo le tue esigenze. Usa il selettore colore per cambiare il colore del testo e dello sfondo della formula. Questo è particolarmente utile quando devi far corrispondere l'aspetto della formula allo stile di un documento esistente o al tema di una presentazione. Successivamente, seleziona la modalità di visualizzazione preferita. La modalità inline (predefinita) è adatta per formule che appaiono all'interno del testo, mentre la modalità blocco crea equazioni indipendenti e centrate con maggiore spaziatura, ideali per formule importanti che necessitano di enfasi."
      },
      step3: {
        title: "Passo 3: Anteprima e perfeziona la tua formula",
        description: "Controlla la tua formula nell'area di anteprima sul lato destro dello schermo. Cerca eventuali errori o problemi di formattazione da risolvere. Se noti problemi, torna alla casella di input per perfezionare il tuo codice LaTeX. Problemi comuni includono parentesi graffe mancanti, delimitatori non corrispondenti o sintassi dei comandi errata. Se vedi un messaggio di errore sotto la formula, di solito fornisce informazioni utili sul motivo del problema. Usa il rendering in tempo reale per apportare miglioramenti iterativi fino a quando la formula non appare esattamente come desideri. Per formule complesse, considera di costruirle gradualmente, aggiungendo ogni nuovo elemento e controllando l'anteprima dopo ogni aggiunta per identificare e correggere più facilmente eventuali problemi."
      },
      step4: {
        title: "Passo 4: Esporta o copia la tua formula",
        description: "Quando sei soddisfatto della formula, puoi esportarla come immagine o copiare il codice LaTeX per usarlo altrove. Fai clic sul pulsante \"Esporta come immagine\" per salvare la formula come file PNG con sfondo trasparente, facile da inserire in documenti, presentazioni, siti web o materiali didattici. L'immagine conserva le impostazioni personalizzate applicate, inclusa dimensione del carattere e colori. In alternativa, fai clic sul pulsante \"Copia codice LaTeX\" per copiare il codice LaTeX della formula negli appunti, da usare in documenti LaTeX o altri sistemi compatibili con LaTeX. Questo è particolarmente utile quando hai bisogno di ulteriori modifiche alla formula in un ambiente LaTeX completo o quando vuoi includerla in articoli accademici o documenti tecnici."
      }
    },
    syntaxReference: {
      title: "Guida di riferimento alla sintassi matematica LaTeX di base",
      intro: "Per aiutarti a creare formule in modo più efficiente, ecco una guida di riferimento per la sintassi dei simboli matematici LaTeX più comuni:",
      basic: {
        title: "Simboli e operatori di base",
        description: "<p>La sintassi matematica LaTeX utilizza comandi speciali che iniziano con una barra rovesciata (\\) per creare vari simboli e strutture. Ecco i simboli di base più comunemente usati:</p><ul><li><b>Frazioni:</b> <code>\\frac{num}{den}</code> crea una frazione.</li><li><b>Esponenti/apici:</b> <code>x^2</code> produce x².</li><li><b>Pedici:</b> <code>x_i</code> produce x con pedice i.</li><li><b>Radice quadrata:</b> <code>\\sqrt{x}</code> crea √x.</li><li><b>Radice n-esima:</b> <code>\\sqrt[n]{x}</code> crea la radice n-esima di x.</li><li><b>Lettere greche:</b> <code>\\alpha</code>, <code>\\beta</code>, <code>\\gamma</code>, <code>\\pi</code>, ecc.</li><li><b>Simbolo infinito:</b> <code>\\infty</code></li><li><b>Sommatoria:</b> <code>\\sum_{i=1}^{n}</code> crea una sommatoria con limite inferiore i=1 e superiore n.</li><li><b>Produttoria:</b> <code>\\prod_{i=1}^{n}</code> crea il simbolo di produttoria.</li><li><b>Limite:</b> <code>\\lim_{x \\to 0}</code> crea il limite per x che tende a 0.</li><li><b>Integrale:</b> <code>\\int_{a}^{b}</code> crea un integrale con limiti a e b.</li></ul>"
      },
      advanced: {
        title: "Strutture matematiche avanzate",
        description: "<p>Per espressioni matematiche più complesse, LaTeX offre un potente sistema di notazione:</p><ul><li><b>Matrici:</b> Usa <code>\\begin{matrix}...\\end{matrix}</code>, separando le colonne con e commerciale (&) e le righe con doppia barra rovesciata (\\\\). Per matrici con parentesi, usa <code>pmatrix</code>, <code>bmatrix</code>, <code>vmatrix</code> o <code>Vmatrix</code>.</li><li><b>Funzioni definite a tratti:</b> <code>\\begin{cases}...\\end{cases}</code>, separando espressioni e condizioni con &.</li><li><b>Allineamento equazioni:</b> <code>\\begin{align}...\\end{align}</code> per più equazioni con punti di allineamento.</li><li><b>Simboli derivata:</b> <code>\\frac{d}{dx}</code> per la derivata, o <code>\\frac{\\partial f}{\\partial x}</code> per la derivata parziale.</li><li><b>Notazione vettoriale:</b> <code>\\vec{v}</code> o <code>\\overrightarrow{AB}</code></li><li><b>Accenti/cappelli:</b> <code>\\hat{x}</code> per variabili stimate, o <code>\\bar{x}</code> per la media.</li><li><b>Simboli insiemistici:</b> <code>\\{x \\in \\mathbb{R} : x > 0\\}</code>, usando <code>\\mathbb{}</code> per gli insiemi numerici.</li><li><b>Simboli logici:</b> <code>\\forall</code> (per ogni), <code>\\exists</code> (esiste), <code>\\implies</code> (implica), <code>\\iff</code> (se e solo se).</li></ul>"
      }
    },
    faq: {
      title: "Domande frequenti sul generatore di formule LaTeX",
      q1: "Quali vantaggi offre il generatore di formule LaTeX rispetto agli editor di equazioni standard?",
      a1: "<b>Il generatore di formule LaTeX offre diversi vantaggi evidenti</b> rispetto agli editor di equazioni base inclusi nei programmi di videoscrittura. Innanzitutto, segue precisi standard tipografici consolidati nelle pubblicazioni scientifiche, garantendo un appropriato spazio tra simboli, allineamento e ridimensionamento, rispettando le convenzioni matematiche. A differenza degli editor di equazioni base che spesso producono spaziature incoerenti o allineamenti scorretti nelle frazioni, LaTeX mantiene la qualità professionale attesa nelle pubblicazioni accademiche. In secondo luogo, il nostro generatore fornisce un feedback visivo immediato attraverso il rendering in tempo reale, permettendoti di vedere l'aspetto esatto della formula mentre la digiti, accelerando così il processo di apprendimento della sintassi LaTeX. Terzo, la capacità di esportare immagini ad alta risoluzione con sfondo trasparente ne semplifica l'integrazione in qualsiasi tipo di documento, indipendentemente dal software utilizzato. Infine, LaTeX offre una libreria di simboli più completa e capacità strutturali, gestendo costruzioni matematiche complesse che gli editor di equazioni base non possono ospitare, come diagrammi commutativi, funzioni definite a tratti e array di equazioni multilinea.",
      
      q2: "Devo conoscere la programmazione LaTeX per usare questo generatore di formule?",
      a2: "<b>Non è necessaria alcuna conoscenza pregressa di LaTeX</b> per usare efficacemente il nostro generatore di formule, sebbene una certa familiarità con la notazione matematica sia certamente utile. Lo strumento è progettato per essere accessibile, con un'interfaccia semplice e un'anteprima in tempo reale che rende intuitivo l'apprendimento della sintassi LaTeX attraverso il feedback visivo immediato. Abbiamo incluso vari esempi di formule che puoi caricare direttamente nell'editor con un clic, permettendoti di studiarne la struttura e modificarle in base alle tue esigenze. Questo offre un'ottima opportunità per comprendere la sintassi LaTeX attraverso esempi pratici. Le strutture matematiche più comuni, come frazioni, esponenti, radicali e integrali, richiedono solo pochi semplici comandi che memorizzerai rapidamente con l'uso frequente. Per equazioni più complesse, puoi costruirle gradualmente, verificando l'anteprima dopo ogni aggiunta per assicurarti che la formattazione sia corretta. Con queste caratteristiche, anche i principianti assoluti possono iniziare a creare formule matematiche professionali in pochi minuti, espandendo gradualmente la loro conoscenza di LaTeX attraverso l'esperienza pratica.",
      
      q3: "Come posso inserire le formule generate nei miei documenti e presentazioni?",
      a3: "<b>Inserire formule in vari tipi di documenti</b> è semplice grazie alle nostre opzioni di esportazione. Il metodo più versatile è usare il pulsante \"Esporta come immagine\" per salvare la formula come file PNG ad alta risoluzione con sfondo trasparente. Questa immagine può essere inserita in qualsiasi tipo di documento: documenti Microsoft Word, presentazioni PowerPoint, documenti Google, siti web o sistemi di gestione dell'apprendimento. Quando posizioni l'immagine esportata, dovresti ridimensionarla in modo appropriato per adattarla alla dimensione del testo del documento, mantenendo la coerenza visiva. Per documenti LaTeX, articoli accademici o manoscritti scientifici, puoi usare il pulsante \"Copia codice LaTeX\" per ottenere il codice LaTeX originale e incollarlo direttamente nel tuo documento LaTeX. Questo è particolarmente utile per pubblicazioni accademiche che richiedono la sottomissione in LaTeX. Per gli sviluppatori web, le immagini esportate possono essere incluse nei contenuti HTML con testo alternativo appropriato per migliorare l'accessibilità. La maggior parte dei moderni editor di documenti supporta anche il drag-and-drop, permettendoti di trascinare l'immagine esportata direttamente dalla cartella dei download al documento per un inserimento rapido.",
      
      q4: "Le formule generate possono essere usate in piattaforme di apprendimento online e tecnologie educative?",
      a4: "<b>Sì, le formule create con il nostro generatore sono perfettamente adatte</b> per le principali piattaforme di tecnologia educativa. I file PNG esportati con sfondo trasparente si integrano perfettamente in sistemi di gestione dell'apprendimento come Canvas, Blackboard, Moodle e Google Classroom. Per i sistemi di valutazione online, puoi includere immagini di formule nei prompt delle domande, risposte a scelta multipla o spiegazioni delle soluzioni. Quando crei contenuti per corsi o video didattici, queste immagini di formule ad alta qualità migliorano la chiarezza visiva e mantengono un aspetto professionale su diversi dispositivi e dimensioni dello schermo. Le applicazioni educative basate sul web possono incorporare direttamente queste immagini di formule nei contenuti HTML, fornendo testo alternativo appropriato per migliorare l'accessibilità. Per materiali didattici interattivi, puoi generare formule per vari stati o passaggi in un processo di risoluzione dei problemi, creando spiegazioni visive passo-passo. Questa versatilità rende il nostro generatore LaTeX particolarmente prezioso per gli educatori che passano tra modalità di insegnamento in presenza e online, poiché lo stesso contenuto matematico di alta qualità può essere utilizzato in modo coerente in tutti i formati didattici. I creatori di contenuti educativi apprezzano particolarmente come questo mantenga la coerenza visiva nei loro materiali, migliorando la qualità professionale del loro design didattico.",
      
      q5: "Quali sono le migliori pratiche per creare espressioni matematiche complesse in LaTeX?",
      a5: "<b>Creare espressioni matematiche complesse in LaTeX diventa gestibile</b> seguendo queste migliori pratiche. Innanzitutto, costruisci formule complesse in modo incrementale - inizia con la struttura di base e aggiungi un componente alla volta, verificando l'anteprima dopo ogni aggiunta per individuare errori precocemente. Per espressioni multilivello come frazioni annidate o integrali complessi, lavora dall'interno verso l'esterno, assicurandoti che ogni elemento interno sia corretto prima di aggiungere strutture esterne. Quando lavori con matrici o equazioni allineate, abbozza prima la struttura su carta per visualizzare gli ambienti LaTeX appropriati e i punti di allineamento necessari. Usa strategicamente le parentesi graffe per raggruppare e controllare l'ambito delle operazioni, specialmente per esponenti, pedici e frazioni. Per espressioni lunghe, considera di suddividerle in parti semanticamente significative usando appropriati comandi di spaziatura come \\quad o ambienti di allineamento. Durante il debug degli errori nelle formule, controlla attentamente i delimitatori bilanciati (parentesi tonde, quadre e graffe) e la sintassi corretta dei comandi - caratteri mancanti o posizionati male sono tra le fonti più comuni di errori. Infine, mantieni simboli coerenti tra formule correlate, specialmente per variabili che rappresentano la stessa quantità, per migliorare la leggibilità e l'aspetto professionale in contesti scientifici ed educativi."
    },
    relatedTools: {
      title: "Esplora strumenti matematici e per documenti correlati",
      description: "Migliora il tuo flusso di lavoro di creazione di documenti tecnici con questi strumenti complementari:",
      tool1: {
        name: "Editor Markdown",
        url: "https://www.ufreetools.com/tool/markdown-editor",
        description: "Crea documenti di testo formattati con equazioni LaTeX incorporate."
      },
      tool2: {
        name: "Convertitore da immagine a ASCII",
        url: "https://www.ufreetools.com/tool/image-to-ascii",
        description: "Converti immagini in arte ASCII con opzioni personalizzabili."
      },
      tool3: {
        name: "Selettore e convertitore di colori",
        url: "https://www.ufreetools.com/tool/color-picker",
        description: "Scegli i colori perfetti per formule LaTeX personalizzate e per abbinare i temi dei documenti."
      },
      tool4: {
        name: "Compressore immagini",
        url: "https://www.ufreetools.com/tool/image-compressor",
        description: "Ottimizza le immagini delle formule esportate per il web mantenendo chiarezza e qualità."
      }
    },
    resources: {
      title: "Risorse autorevoli su LaTeX e tipografia matematica",
      resource1: {
        name: "Lista completa dei simboli LaTeX",
        url: "https://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf",
        description: "Documento di riferimento completo che elenca tutti i simboli disponibili in LaTeX e i relativi comandi."
      },
      resource2: {
        name: "Documentazione LaTeX di Overleaf",
        url: "https://www.overleaf.com/learn",
        description: "Tutorial e guide completi per imparare la notazione matematica LaTeX e la preparazione di documenti."
      },
      resource3: {
        name: "American Mathematical Society - Risorse per la pubblicazione matematica",
        url: "https://www.ams.org/publications/authors/tex/tex",
        description: "Guide e risorse professionali per la tipografia matematica nelle pubblicazioni accademiche."
      }
    }
  }
};