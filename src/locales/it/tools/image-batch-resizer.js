export default {
  name: 'Ridimensionatore Batch di Immagini',
  description: 'Ridimensiona, converti e ottimizza più immagini contemporaneamente',
  input: {
    title: 'Immagini di input',
    dropzone: 'Trascina e rilascia le immagini qui o fai clic per sfogliare',
    addMore: 'Aggiungi altre immagini',
    selectImages: 'Seleziona immagini',
    clearAll: 'Cancella tutto',
    maxFiles: 'Massimo {count} immagini',
    maxSize: 'Dimensione massima per immagine: {size}MB',
    supportedFormats: 'Formati supportati: {formats}'
  },
  options: {
    title: 'Opzioni di ridimensionamento',
    settingsTitle: 'Impostazioni di ridimensionamento',
    resizeMode: 'Modalità ridimensionamento',
    resizeMethod: 'Metodo di ridimensionamento',
    pixelMode: 'Pixel',
    percentageMode: 'Percentuale',
    maxDimensionMode: 'Dimensione massima',
    outputFormat: 'Formato di output',
    quality: 'Qualità',
    width: 'Larghezza',
    height: 'Altezza',
    maintainAspectRatio: 'Mantieni proporzioni',
    maxWidth: 'Larghezza massima',
    maxHeight: 'Altezza massima',
    percentage: 'Percentuale',
    backgroundColor: 'Colore di sfondo',
    naming: 'Denominazione output',
    filenamePrefix: 'Prefisso nome file',
    filenameSuffix: 'Suffisso nome file',
    applyToAllImages: 'Applica a tutte le immagini',
    applyToAll: 'Applica a tutte'
  },
  resizeModes: {
    exact: 'Dimensioni esatte',
    maxDimensions: 'Dimensioni massime',
    percentage: 'Ridimensionamento percentuale',
    fit: 'Adatta all\'interno',
    cover: 'Copri',
    crop: 'Ritaglia'
  },
  formats: {
    original: 'Come originale',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },
  namingOptions: {
    original: 'Nome file originale',
    dimensions: 'Originale + dimensioni',
    format: 'Originale + formato',
    custom: 'Modalità personalizzata',
    random: 'Stringa casuale'
  },
  output: {
    title: 'Immagini ridimensionate',
    downloadAll: 'Scarica tutto',
    downloadAsZip: 'Scarica come ZIP',
    processingStatus: 'Elaborazione: {processed}/{total}',
    originalSize: 'Dimensione originale',
    newSize: 'Nuova dimensione',
    reduction: 'Riduzione',
    individualDownload: 'Scarica'
  },
  batch: {
    title: 'Elaborazione batch',
    process: 'Elabora tutte le immagini',
    cancel: 'Annulla elaborazione',
    selectPreset: 'Seleziona preset',
    savePreset: 'Salva impostazioni correnti',
    progress: 'Avanzamento elaborazione'
  },
  watermark: {
    title: 'Filigrana',
    enable: 'Aggiungi filigrana',
    text: 'Testo filigrana',
    image: 'Immagine filigrana',
    position: 'Posizione',
    opacity: 'Opacità',
    rotation: 'Rotazione',
    size: 'Dimensione',
    padding: 'Spaziatura'
  },
  positions: {
    topLeft: 'In alto a sinistra',
    topCenter: 'In alto al centro',
    topRight: 'In alto a destra',
    middleLeft: 'Al centro a sinistra',
    middleCenter: 'Centrato',
    middleRight: 'Al centro a destra',
    bottomLeft: 'In basso a sinistra',
    bottomCenter: 'In basso al centro',
    bottomRight: 'In basso a destra'
  },
  actions: {
    resize: 'Ridimensiona',
    preview: 'Anteprima',
    processing: 'Elaborazione in corso...',
    reset: 'Ripristina',
    applySettings: 'Applica impostazioni',
    resetSettings: 'Ripristina impostazioni',
    cancel: 'Annulla'
  },
  messages: {
    resizeSuccess: 'Ridimensionamento immagini riuscito',
    resizeFailed: 'Ridimensionamento fallito: {error}',
    invalidDimensions: 'Inserisci dimensioni valide',
    invalidWidthHeight: 'Inserisci larghezza e altezza valide',
    noImages: 'Aggiungi immagini da ridimensionare',
    noImagesToDownload: 'Nessuna immagine da scaricare',
    processing: 'Elaborazione immagini in corso...',
    processingComplete: 'Elaborazione completata',
    processingError: 'Errore durante l\'elaborazione',
    waitingForProcess: 'In attesa di elaborazione',
    downloadStarted: 'Download iniziato',
    allDownloaded: 'Tutte le immagini sono state scaricate',
    presetSaved: 'Preset salvato',
    presetLoaded: 'Preset caricato',
    zipCreated: 'Creato archivio ZIP con {count} immagini',
    zipError: 'Errore durante la creazione dell\'archivio ZIP'
  },
  preview: {
    title: 'Anteprima immagini ({count})',
    selectImage: 'Seleziona un\'immagine',
    batchSupport: 'Supporta la selezione multipla per l\'elaborazione batch',
    download: 'Scarica',
    delete: 'Elimina'
  },
  qualityOptions: {
    fast: 'Elaborazione veloce',
    medium: 'Qualità media',
    high: 'Alta qualità (consigliato)',
    best: 'Qualità migliore (più lento)'
  },
  article: {
    title: "Ridimensionatore Batch di Immagini: elabora più immagini contemporaneamente",
    features: {
      title: "Scopri l'elaborazione batch di immagini e i suoi vantaggi",
      description: "<strong>Ridimensionatore Batch di Immagini</strong> è un potente strumento online progettato per semplificare il processo di ridimensionamento, conversione e ottimizzazione simultanea di più immagini. A differenza del tradizionale software di editing che richiede di elaborare le immagini una per una, questo <strong>elaboratore batch di immagini</strong> ti consente di applicare gli stessi aggiustamenti a decine o centinaia di immagini con pochi clic.<br><br>Il nostro strumento offre opzioni complete per il <strong>ridimensionamento immagini</strong>, la conversione di formato e l'ottimizzazione della qualità, mantenendo l'integrità visiva delle foto. Che tu debba ridurre le dimensioni dei file per il web, preparare immagini per piattaforme specifiche o mantenere dimensioni uniformi in una raccolta di immagini, il <strong>ridimensionatore batch</strong> elabora queste attività in modo efficiente direttamente nel tuo browser, senza richiedere l'installazione di software o competenze tecniche.",
      useCases: {
        title: "Applicazioni pratiche del ridimensionamento batch",
        items: [
          "<strong>Ottimizzazione siti web</strong>: sviluppatori e gestori di contenuti possono usare il <strong>ridimensionatore batch</strong> per preparare rapidamente le risorse immagine di un sito. Riducendo dimensioni e peso dei file, puoi migliorare significativamente i tempi di caricamento delle pagine, cruciali per l'esperienza utente e il posizionamento SEO. La capacità di convertire batch di immagini in formati ottimizzati come WebP migliora ulteriormente le prestazioni.",
          
          "<strong>Fotografia prodotti e-commerce</strong>: venditori online che gestiscono grandi cataloghi possono usare il nostro <strong>ridimensionatore foto batch</strong> per standardizzare tutte le immagini dei prodotti secondo le dimensioni richieste da marketplace come Amazon, eBay o Shopify, risparmiando ore di lavoro. Ciò garantisce un aspetto professionale e uniforme a tutti i listing, rispettando i requisiti delle piattaforme.",
          
          "<strong>Creazione contenuti social media</strong>: social media manager che gestiscono contenuti su più piattaforme possono ridimensionare batch di immagini per adattarle alle specifiche dimensioni richieste dalle diverse reti. Che si tratti di post per Instagram, copertine Facebook, card Twitter o pin Pinterest, il nostro <strong>elaboratore batch immagini</strong> aiuta a mantenere la massima qualità visiva su tutte le piattaforme.",
          
          "<strong>Preparazione portfolio fotografici</strong>: fotografi professionisti possono preparare rapidamente immagini per siti portfolio, consegne clienti o servizi di stampa. Il <strong>ridimensionatore multi-immagine</strong> consente di mantenere le proporzioni durante il ridimensionamento a dimensioni specifiche, garantendo uniformità in tutta la raccolta fotografica senza richiedere modifiche individuali dispendiose in termini di tempo.",
          
          "<strong>Sviluppo materiali educativi</strong>: insegnanti e creatori di contenuti educativi possono ridimensionare gruppi di diagrammi, grafici o foto a dimensioni uniformi per includerli in materiali didattici, presentazioni o corsi online. Le funzioni batch rendono pratico mantenere la coerenza visiva in ampie risorse educative.",
          
          "<strong>Preparazione risorse per app</strong>: sviluppatori di app mobile possono usare lo strumento per generare più versioni della stessa immagine a diverse risoluzioni (es. 1x, 2x, 3x) per adattarsi a vari display di dispositivi. Il <strong>convertitore batch immagini</strong> semplifica questo processo, assicurando che le risorse dell'app siano nitide su tutti i tipi di dispositivo mantenendo dimensioni di file gestibili."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sul ridimensionamento batch di immagini",
      items: [
        {
          question: "L'uso del ridimensionatore batch riduce la qualità delle immagini?",
          answer: "Il nostro <strong>elaboratore batch immagini</strong> mantiene con cura la qualità, ma considera questi fattori:<br><br>• Usiamo algoritmi di alta qualità appositamente progettati per preservare la fedeltà dell'immagine durante il ridimensionamento<br>• Puoi controllare le impostazioni di qualità, specialmente quando converti in formati come JPEG o WebP<br>• Ridurre le immagini (renderle più piccole) generalmente preserva meglio la qualità rispetto all'ingrandimento<br>• Impostazioni di qualità più alte producono risultati migliori ma con file più grandi<br>• Per l'elaborazione batch, impostazioni di qualità dell'80-90% offrono un ottimo equilibrio per la maggior parte degli usi<br><br>Per lavori professionali che richiedono la massima qualità, consigliamo di usare le impostazioni \"alta qualità\" o \"qualità migliore\". La funzione di anteprima del <strong>ridimensionatore foto batch</strong> ti permette di verificare i risultati prima del download, assicurando che soddisfino i tuoi standard qualitativi."
        },
        {
          question: "Quali formati immagine supporta il ridimensionatore batch?",
          answer: "Il nostro <strong>convertitore batch immagini</strong> supporta un'ampia gamma di formati:<br><br><strong>Formati input:</strong><br>• JPEG/JPG - formato comune per foto<br>• PNG - ideale per grafica con trasparenza<br>• WebP - formato moderno con eccellente compressione<br>• GIF - per semplici animazioni<br>• BMP - formato bitmap non compresso<br>• TIFF - formato ad alta qualità usato in fotografia<br><br><strong>Formati output:</strong><br>• JPEG/JPG - ottimo per foto e uso web generico<br>• PNG - preserva la trasparenza senza perdita di qualità<br>• WebP - offre migliore compressione mantenendo la qualità<br><br>Il <strong>ridimensionatore multi-immagine</strong> può convertire tra questi formati durante l'elaborazione batch, permettendoti di standardizzare raccolte di immagini in un unico formato o scegliere il formato più adatto per ogni scenario d'uso."
        },
        {
          question: "Quante immagini può elaborare contemporaneamente il ridimensionatore batch?",
          answer: "Il <strong>ridimensionatore batch immagini</strong> è progettato per gestire efficientemente grandi volumi:<br><br>• Puoi elaborare decine di immagini in un singolo batch (solitamente con un limite di circa 100 immagini per batch)<br>• La dimensione massima per singolo file è di 5MB per ottenere prestazioni ottimali<br>• Il tempo totale di elaborazione dipende da diversi fattori:<br>  - Numero e dimensione delle immagini di input<br>  - Complessità delle operazioni di ridimensionamento<br>  - Potenza di elaborazione del tuo dispositivo<br>  - Velocità della tua connessione internet<br><br>Il <strong>elaboratore batch immagini</strong> usa l'elaborazione lato client, quindi le immagini non lasciano mai il tuo computer, garantendo velocità e privacy. Per raccolte molto grandi (centinaia o migliaia di immagini), consigliamo di suddividerle in batch più piccoli (20-50 immagini) per un'esperienza ottimale."
        },
        {
          question: "È possibile mantenere le proporzioni durante il ridimensionamento batch?",
          answer: "Sì, mantenere le proporzioni è una funzionalità chiave del nostro <strong>ridimensionatore batch immagini</strong>:<br><br>• L'opzione \"Mantieni proporzioni\" assicura che le immagini non vengano stirate o distorte<br>• Con questa opzione attiva, basta specificare larghezza o altezza e l'altra dimensione viene calcolata automaticamente<br>• Per dimensioni precise (come quelle richieste dai social media) puoi disabilitare questa opzione<br>• Il metodo \"Dimensioni massime\" è particolarmente utile per mantenere le proporzioni assicurando che nessuna immagine superi le dimensioni specificate<br>• Il \"ridimensionamento percentuale\" ridimensiona uniformemente tutte le immagini mantenendo perfettamente le proporzioni originali<br><br>Il <strong>ridimensionatore foto batch</strong> offre un'anteprima per ogni immagine, permettendoti di verificare che le proporzioni siano mantenute correttamente prima di scaricare le immagini elaborate."
        },
        {
          question: "Come scaricare tutte le immagini dopo il ridimensionamento batch?",
          answer: "Il <strong>ridimensionatore multi-immagine</strong> offre opzioni convenienti per ottenere le immagini elaborate:<br><br>1. <strong>Download batch come ZIP</strong>: al termine dell'elaborazione, clicca \"Scarica tutto\" per ottenere tutte le immagini ridimensionate in un unico archivio ZIP<br><br>2. <strong>Download individuali</strong>: se hai bisogno solo di immagini specifiche, ogni immagine elaborata ha il proprio pulsante di download<br><br>3. <strong>Denominazione automatica</strong>: le immagini elaborate mantengono il nome file originale con l'aggiunta di un identificatore che indica il ridimensionamento<br><br>4. <strong>Preservazione formato</strong>: se hai selezionato \"Come originale\" nel formato di output, ogni immagine mantiene il suo formato originale; altrimenti, tutte le immagini vengono convertite nel formato da te scelto<br><br>Il <strong>convertitore batch immagini</strong> memorizza temporaneamente tutte le immagini elaborate nel tuo browser, quindi ti consigliamo di scaricare i risultati prima di chiudere la scheda del browser."
        }
      ]
    },
    guide: {
      title: "Come usare il ridimensionatore batch: guida passo passo",
      step1: "<strong>Carica le tue immagini</strong>: clicca il pulsante \"Seleziona immagini\" o trascina e rilascia i file nell'area di upload. Il <strong>elaboratore batch immagini</strong> accetta formati comuni come JPEG, PNG, WebP, GIF e altri. Puoi aggiungere più immagini contemporaneamente o aggiungerne altre dopo la selezione iniziale.",
      step2: "<strong>Scegli il metodo di ridimensionamento</strong>: seleziona tra tre potenti metodi:<ul class='ml-5 list-disc'><li>La modalità \"Pixel\" ti permette di specificare dimensioni esatte in pixel</li><li>La modalità \"Percentuale\" ridimensiona le immagini proporzionalmente rispetto alle dimensioni originali</li><li>La modalità \"Dimensione massima\" assicura che nessuna immagine superi la dimensione specificata mantenendo le proporzioni</li></ul>Questa flessibilità rende il nostro <strong>ridimensionatore foto batch</strong> adatto a quasi tutte le esigenze di elaborazione immagini.",
      step3: "<strong>Imposta le dimensioni</strong>: inserisci i valori di larghezza e/o altezza desiderati in base al metodo scelto. Se hai abilitato \"Mantieni proporzioni\" (consigliato nella maggior parte dei casi), basta specificare una dimensione e il <strong>ridimensionatore batch immagini</strong> calcolerà automaticamente l'altra per prevenire distorsioni.",
      step4: "<strong>Configura le opzioni di output</strong>: scegli il formato di output preferito (JPEG, PNG o WebP) e regola le impostazioni di qualità secondo necessità. Il <strong>convertitore batch immagini</strong> ti permette di bilanciare qualità e dimensione del file. Per i formati JPEG e WebP, puoi regolare la percentuale di qualità - valori più alti producono immagini migliori ma con file più grandi.",
      step5: "<strong>Elabora le tue immagini</strong>: clicca il pulsante \"Applica a tutte le immagini\" per avviare l'elaborazione batch. Il <strong>ridimensionatore multi-immagine</strong> mostrerà un indicatore di avanzamento mentre elabora i tuoi file. Ogni immagine viene processata con algoritmi di alta qualità che mantengono la fedeltà visiva raggiungendo le dimensioni specificate.",
      step6: "<strong>Verifica i risultati</strong>: al termine dell'elaborazione, controlla l'anteprima di ogni immagine per assicurarti che i risultati corrispondano alle tue aspettative. Il <strong>ridimensionatore batch immagini</strong> mostra informazioni utili tra cui dimensioni originali e nuove, permettendoti di confermare che il ridimensionamento sia stato eseguito correttamente.",
      step7: "<strong>Scarica le immagini elaborate</strong>: clicca \"Scarica tutto\" per ottenere un file ZIP con tutte le immagini ridimensionate, oppure scarica singole immagini secondo necessità. Il <strong>elaboratore batch immagini</strong> conserva i tuoi file originali e fornisce versioni elaborate con nomi appropriati per distinguerle dagli originali."
    },
    conclusion: "Il ridimensionatore batch di immagini offre una soluzione pratica alle sfide comuni affrontate da sviluppatori web, fotografi, marketer e creatori di contenuti: elaborare efficientemente più immagini mantenendo qualità e coerenza. Eliminando la necessità di costosi software desktop o di modifiche individuali dispendiose in termini di tempo, questo strumento semplifica i flussi di lavoro e aiuta a mantenere standard visivi per le risorse digitali. Che tu stia preparando foto prodotto per piattaforme e-commerce, ottimizzando immagini per siti web responsive o standardizzando contenuti visivi per i social media, le funzioni batch fanno risparmiare tempo prezioso e garantiscono risultati coerenti. Con il crescente ruolo degli elementi visivi nei contenuti digitali, strumenti che aiutano a gestire e ottimizzare immagini su larga scala diventano risorse essenziali per professionisti in tutti i settori."
  }
}