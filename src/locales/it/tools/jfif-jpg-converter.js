export default {
  name: 'Convertitore JFIF a JPG',
  description: 'Converti online immagini JFIF in formato JPG, alta qualità, multiple opzioni',
  tags: ['immagini', 'conversione', 'jpg', 'jfif', 'jpeg', 'formato', 'strumento'],

  meta: {
    title: 'Convertitore JFIF a JPG - Strumento online gratuito per conversione immagini',
    description: 'Converti gratuitamente JFIF in JPG online. Conversione rapida e sicura direttamente nel browser, supporta elaborazione batch, anteprima comparativa e impostazioni qualità avanzate. Senza filigrana, nessuna registrazione richiesta.'
  },

  upload: {
    title: 'Convertitore JFIF a JPG',
    subtitle: 'Converti immagini JFIF in formato JPG con qualità perfetta',
    dropzone: 'Trascina qui i tuoi file JFIF',
    dropzoneActive: 'Rilascia i file per iniziare la conversione',
    maxSize: 'Dimensione massima file: 50MB',
    supportedFormats: 'Formati supportati: JFIF, JPEG, JPG'
  },

  settings: {
    title: 'Impostazioni conversione',
    advanced: 'Impostazioni avanzate',
    quality: {
      label: 'Qualità immagine',
      description: 'Qualità più alta produce file più grandi',
      auto: 'Ottimizzazione automatica (consigliato)'
    },
    qualityLabels: {
      maximum: 'Qualità massima',
      high: 'Qualità alta',
      good: 'Qualità buona',
      medium: 'Qualità media',
      low: 'Qualità bassa',
      veryLow: 'Qualità molto bassa'
    },
    metadata: {
      label: 'Metadati immagine',
      preserve: 'Mantieni tutti i metadati (EXIF, GPS ecc.)',
      strip: 'Rimuovi tutti i metadati (file più piccoli)',
      keepBasic: 'Mantieni solo metadati base'
    },
    filenameOption: 'Nome file output',
    filenameOriginal: 'Originale',
    filenameConverted: 'Aggiungi prefisso',
    filenameCustom: 'Personalizzato',
    filenameTemplatePlaceholder: 'Esempio: converted-{name}',
    filenameTemplateHelp: 'Usa {name} per inserire il nome file originale',
    preserveMetadata: 'Mantieni metadati immagine'
  },

  preview: {
    title: 'Anteprima immagine',
    before: 'Originale JFIF',
    after: 'Anteprima JPG',
    noPreview: 'Nessuna anteprima disponibile',
    togglePreview: 'Mostra/nascondi anteprima',
    imageDetails: 'Dettagli immagine'
  },

  fileTable: {
    fileName: 'Nome file',
    type: 'Tipo',
    size: 'Dimensione',
    status: 'Stato',
    preview: 'Anteprima',
    pending: 'In attesa',
    converting: 'Conversione in corso...',
    done: 'Completato',
    error: 'Errore',
    progress: 'Progresso'
  },

  results: {
    title: 'File convertiti',
    summary: '{count} file convertiti, risparmiati {saved} di spazio',
    originalName: 'Nome originale',
    convertedName: 'Nome convertito',
    originalSize: 'Dimensione originale',
    convertedSize: 'Nuova dimensione',
    compressionRate: 'Tasso di compressione',
    actions: 'Azioni',
    noResults: 'Nessun risultato di conversione'
  },

  actions: {
    selectFile: 'Seleziona file',
    addMore: 'Aggiungi altri',
    clear: 'Pulisci file',
    convertAll: 'Converti tutti i file',
    converting: 'Conversione in corso...',
    download: 'Scarica',
    downloadAll: 'Scarica tutto',
    clearResults: 'Pulisci risultati',
    viewDetails: 'Visualizza dettagli',
    compare: 'Confronta',
    retry: 'Riprova falliti',
    cancelAll: 'Annulla',
    optimizeAll: 'Ottimizzazione automatica'
  },

  messages: {
    noValidFiles: 'Seleziona file JFIF o JPEG validi.',
    conversionError: 'Errore durante la conversione del file. Riprova.',
    conversionSuccess: 'Tutti i file convertiti con successo!',
    partialSuccess: '{success} di {total} file convertiti con successo.',
    downloadStarted: 'Download iniziato...',
    processingFiles: 'Elaborazione dei tuoi file in corso...',
    dragActive: 'Trascina e rilascia i file qui per caricarli',
    fileSizeExceeded: 'Dimensione file supera il limite di 50MB',
    unsupportedFormat: 'Formato file non supportato'
  },

  history: {
    title: 'Conversioni recenti',
    empty: 'Nessuna conversione recente',
    clear: 'Pulisci cronologia',
    restore: 'Ripristina file'
  },

  info: {
    title: 'Informazioni su conversione JFIF a JPG',
    description: 'Il nostro convertitore JFIF a JPG ti permette di convertire rapidamente e facilmente file immagine JFIF nel più compatibile formato JPG, con tutta l\'elaborazione svolta in modo sicuro direttamente nel tuo browser.',
    
    whatIs: {
      title: 'Cos\'è JFIF?',
      content: 'JFIF (JPEG File Interchange Format) è uno standard di formato file per file JPEG. Fornisce informazioni aggiuntive come risoluzione, proporzioni e altri metadati che aiutano a garantire che le immagini JPEG vengano visualizzate correttamente su diversi dispositivi e piattaforme. Sebbene JFIF e JPG siano tecnicamente formati correlati, alcuni software e dispositivi potrebbero avere una migliore compatibilità con uno rispetto all\'altro.'
    },
    
    whyConvert: {
      title: 'Perché convertire JFIF in JPG?',
      reason1: 'Migliore compatibilità con varie applicazioni e dispositivi',
      reason2: 'Più facile da caricare su siti web che potrebbero rifiutare il formato JFIF',
      reason3: 'Standardizzare la tua collezione di immagini con estensioni di file coerenti',
      reason4: 'Risolvere problemi con alcuni programmi che non riescono ad aprire o visualizzare correttamente file JFIF'
    },
    
    howItWorks: {
      title: 'Come funziona',
      content: 'Il nostro convertitore elabora i file JFIF interamente nel tuo browser. Le tue immagini non vengono mai caricate su alcun server, garantendo completa privacy e sicurezza. Lo strumento legge i dati dell\'immagine JFIF, la elabora e poi la salva in formato JPG standard con le impostazioni di qualità da te scelte.'
    },
    
    tips: {
      title: 'Suggerimenti per ottenere i migliori risultati',
      tip1: 'Usa il cursore qualità per bilanciare dimensione file e qualità dell\'immagine',
      tip2: 'Per immagini con testo o dettagli nitidi, usa impostazioni di qualità più alta',
      tip3: 'Converti più file in batch e scaricali come file ZIP',
      tip4: 'Usa "Ottimizzazione automatica" per il miglior bilanciamento tra qualità e dimensione file',
      tip5: 'Quando la privacy è importante, rimuovi i metadati per ottenere file più piccoli'
    },
    
    privacy: {
      title: 'Privacy e sicurezza',
      content: 'Prendiamo sul serio la tua privacy. Tutta l\'elaborazione avviene direttamente nel tuo browser - i tuoi file non vengono mai caricati su alcun server. Questo garantisce la massima sicurezza e privacy per le tue immagini.'
    }
  }
};