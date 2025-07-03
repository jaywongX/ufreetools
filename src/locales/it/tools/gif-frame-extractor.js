export default {
  name: 'Estrattore Frame GIF',
  description: 'Estrazione di singoli frame da animazioni GIF',
  uploadBtn: 'Seleziona GIF',
  resetBtn: 'Ripristina',
  extractBtn: 'Estrai frame',
  extractingBtn: 'Estrazione in corso...',
  downloadAllBtn: 'Scarica tutti i frame',
  upload: {
    title: 'Carica GIF',
    dropzone: 'Trascina GIF qui o fai clic per selezionare',
    maxSize: 'Dimensione massima: 20MB',
    onlyGif: 'Solo file GIF supportati',
    selectGif: 'Seleziona un file GIF'
  },
  analysis: {
    title: 'Informazioni GIF',
    dimensions: 'Dimensioni',
    frameCount: 'Numero frame',
    duration: 'Durata',
    fps: 'FPS (frame al secondo)',
    fileSize: 'Dimensione file',
    loopCount: 'Numero cicli',
    infinite: 'Infinito',
    fileName: 'Nome file',
    size: 'Dimensioni',
    totalFrames: 'Frame totali',
    notExtracted: 'Non estratto'
  },
  extraction: {
    title: 'Estrazione frame',
    selectFrames: 'Seleziona frame',
    allFrames: 'Tutti i frame',
    rangeOfFrames: 'Intervallo frame',
    from: 'Da',
    to: 'A',
    specificFrames: 'Frame specifici',
    frameNumbers: 'Numeri frame (separati da virgola)',
    everyNth: 'Ogni N frame',
    nth: 'Ogni',
    frames: 'frame',
    selectFirst: 'Primo frame',
    selectLast: 'Ultimo frame',
    selectMiddle: 'Frame centrale',
    selectKeyFrames: 'Rileva frame chiave automaticamente'
  },
  output: {
    title: 'Impostazioni esportazione',
    format: 'Formato output',
    png: 'PNG',
    jpeg: 'JPEG',
    webp: 'WebP',
    scaling: 'Ridimensionamento',
    originalSize: 'Dimensione originale',
    customSize: 'Dimensione personalizzata',
    width: 'Larghezza',
    height: 'Altezza',
    quality: 'Qualità',
    qualityValue: 'Qualità: {value}%',
    lowQuality: 'Bassa (file piccoli)',
    highQuality: 'Alta (file grandi)',
    naming: 'Nome file',
    pattern: 'Pattern',
    filename: 'Nome file originale',
    framenumber: 'Numero frame',
    timestamp: 'Timestamp',
    preview: 'Anteprima',
    downloadOptions: 'Opzioni download',
    separateFiles: 'File separati',
    zipArchive: 'Archivio ZIP',
    spritesheet: 'Spritesheet',
    gridSize: 'Dimensione griglia',
    columns: 'Colonne',
    animation: 'Nuova animazione'
  },
  frames: {
    title: 'Frame estratti',
    frameInfo: 'Frame {number} di {total}',
    frame: 'Frame',
    delay: 'Ritardo: {delay}ms',
    downloadFrame: 'Scarica',
    copyFrame: 'Copia',
    selectAll: 'Seleziona tutto',
    unselectAll: 'Deseleziona tutto',
    invertSelection: 'Inverti selezione',
    noFrames: 'Nessun frame estratto',
    extractFirst: 'Estrai prima i frame'
  },
  actions: {
    extract: 'Estrai frame',
    preview: 'Anteprima',
    downloadSelected: 'Scarica selezionati',
    downloadAll: 'Scarica tutto',
    createSpritesheet: 'Crea spritesheet',
    createNewGif: 'Crea nuova GIF',
    cancel: 'Annulla',
    processing: 'Elaborazione...'
  },
  messages: {
    extractionComplete: 'Estrazione completata',
    extracting: 'Estrazione frame in corso...',
    noFramesSelected: 'Nessun frame selezionato',
    processingGif: 'Elaborazione GIF...',
    invalidGif: 'File GIF non valido',
    framesCopied: 'Frame copiati negli appunti',
    downloadStarted: 'Download avviato',
    spritesheetCreated: 'Spritesheet creato',
    frameDownloaded: 'Frame scaricato',
    preparingFrames: 'Preparazione frame in corso...',
    allFramesDownloaded: 'Tutti i frame scaricati',
    downloadError: 'Errore download frame',
    resetComplete: 'Ripristino completato',
    fileEmpty: 'File vuoto',
  },
  article: {
    title: "Estrattore Frame GIF: analisi ed estrazione di frame da animazioni",
    features: {
      title: "Funzionalità di estrazione frame GIF",
      description: "L'<strong>Estrattore Frame GIF</strong> è uno strumento professionale progettato per scomporre animazioni GIF in singoli frame. Questo potente <strong>analizzatore di animazioni</strong> offre un approccio completo per analizzare ed estrarre ogni immagine statica che compone la GIF, permettendoti di isolare momenti specifici da qualsiasi <strong>sequenza animata</strong>.<br><br>Il nostro <strong>separatore GIF</strong> offre diverse opzioni di output (PNG, JPEG, WebP), impostazioni di compressione e una navigazione intuitiva tra i frame. Lo strumento rileva automaticamente e mostra i <strong>metadati GIF</strong> essenziali, inclusi dimensioni, numero di frame, dimensione file e tempi di ritardo di ogni frame. Al termine dell'estrazione, puoi visualizzare in anteprima ogni <strong>frame immagine</strong>, scaricare singoli frame o esportare tutti i frame insieme in un archivio ZIP per ulteriori modifiche o analisi.",
      useCases: {
        title: "Scenari applicativi per l'estrazione frame GIF",
        items: [
          "Grafici che estraggono frame specifici da GIF animate per modificarli e integrarli in nuovi progetti",
          "Sviluppatori web che separano frame da animazioni per creare spinner di caricamento personalizzati o spritesheet",
          "Artisti digitali che analizzano tecniche di animazione frame-by-frame per migliorare le proprie capacità",
          "Creatori di contenuti che estraggono frame chiave da reazioni animate o meme per usarli come immagini statiche",
          "Educatori che catturano fasi specifiche di tutorial animati per materiali didattici",
          "Analisti che studiano sequenze di movimento in visualizzazioni scientifiche"
        ]
      }
    },
    faq: {
      title: "Domande frequenti sull'estrazione frame GIF",
      items: [
        {
          question: "Qual è la dimensione massima di GIF che questo strumento può gestire?",
          answer: "Il nostro estrattore è progettato per elaborare GIF fino a 20MB, adatto alla maggior parte delle animazioni online. Per file più grandi, consigliamo software di editing video professionali. La velocità dipende da dimensione e numero di frame."
        },
        {
          question: "Quale formato di output scegliere per i frame estratti?",
          answer: "PNG mantiene qualità e trasparenza, ideale per editing successivo. JPEG offre file più piccoli senza trasparenza. WebP bilancia qualità e compressione, ottimo per web moderno."
        },
        {
          question: "Come creare nuove animazioni dai frame estratti?",
          answer: "Dopo l'estrazione: 1) Usa software come Adobe Animate o GIMP per importare i frame e esportare nuove GIF. 2) Strumenti online come EZGIF possono convertire sequenze in animazioni. 3) Sviluppatori possono usare CSS o librerie JavaScript per animazioni web."
        },
        {
          question: "Perché alcuni frame estratti appaiono diversi dall'animazione originale?",
          answer: "Le differenze possono derivare da: 1) Ottimizzazioni GIF come aree trasparenti. 2) Frame con durata brevissima nell'animazione. 3) Tecniche di interpolazione nei visualizzatori. 4) Tabelle colore variabili tra frame. Il nostro strumento mostra i dati pixel esatti di ogni frame."
        },
        {
          question: "Cosa rivelano i tempi di ritardo tra frame?",
          answer: "I ritardi (in millisecondi) mostrano: 1) Velocità complessiva - ritardi brevi creano animazioni più veloci. 2) Enfasi temporale su frame specifici. 3) Tecniche come easing. 4) Opportunità di ottimizzazione per frame con ritardi simili."
        }
      ]
    },
    guide: {
      title: "Guida passo-passo all'uso dell'estrattore frame GIF",
      steps: [
        "Clicca <strong>Seleziona GIF</strong> per scegliere il file da elaborare (fino a 20MB).",
        "Verifica le informazioni nella sezione <strong>Informazioni GIF</strong> dopo il caricamento.",
        "Clicca <strong>Estrai frame</strong> per avviare il processo di estrazione.",
        "Scegli il <strong>formato output</strong> (PNG/JPEG/WebP) e regola la qualità se necessario.",
        "Esplora i frame estratti nella griglia, con dettagli su numero e ritardo.",
        "Scarica singoli frame passando il mouse sulle miniature.",
        "Usa <strong>Scarica tutto</strong> per ottenere tutti i frame in un archivio ZIP."
      ]
    },
    conclusion: "L'Estrattore Frame GIF offre una soluzione completa per scomporre animazioni in singoli frame. Che tu sia un designer alla ricerca di immagini specifiche, uno sviluppatore che crea elementi web o un educatore che analizza sequenze, questo strumento fornisce un'estrazione precisa con opzioni di output flessibili. La capacità di lavorare con singoli frame rimane un'abilità essenziale nell'era dei contenuti digitali animati."
  }
}