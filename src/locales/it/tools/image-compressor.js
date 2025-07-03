export default {
  name: 'Compressore di Immagini',
  description: 'Comprimi e ottimizza le immagini mantenendo la qualità',
  input: {
    dragDrop: 'Trascina e rilascia le immagini qui o clicca per caricare',
    supportedFormats: 'Formati supportati: JPG, PNG, GIF, WEBP',
    selected: '{count} file selezionati',
    changeFiles: 'Cambia file',
    width: 'Larghezza',
    height: 'Altezza',
    keepOriginal: 'Imposta a 0 per mantenere le dimensioni originali',
  },
  results: {
    originalImage: 'Immagine originale',
    compressedImage: 'Compressa',
    filename: 'Nome file:',
    dimensions: 'Dimensioni:',
    fileSize: 'Dimensione file:',
    compressionRatio: 'Rapporto di compressione:',
    viewOriginal: 'Visualizza originale',
  },
  about: {
    title: 'Informazioni sulla compressione immagini',
    description: 'Questo strumento utilizza le API Canvas del browser per comprimere le immagini. Tutte le elaborazioni avvengono sul tuo dispositivo e le immagini non vengono caricate su server esterni.',
    principlesTitle: 'Principi di compressione:',
    principles: {
      resize: 'Ridimensionamento: dimensioni più piccole significano meno dati di pixel',
      quality: 'Riduzione qualità: diminuisce il parametro di qualità dell\'immagine',
      format: 'Conversione formato: diversi formati hanno caratteristiche di compressione diverse'
    },
    useCasesTitle: 'Casi d\'uso:',
    useCases: {
      web: 'Ottimizzazione immagini per siti web',
      email: 'Riduzione dimensioni allegati email',
      social: 'Compressione per social media',
      storage: 'Ottimizzazione spazio di archiviazione'
    }
  },
  options: {
    quality: 'Qualità',
    qualityValue: 'Qualità ({value}%)',
    lowQuality: 'Bassa qualità/file piccolo',
    highQuality: 'Alta qualità/file grande',
    format: 'Formato output',
    maxSize: 'Dimensioni massime ({width} × {height} px)',
    keepExif: 'Mantieni dati EXIF',
    resizeImage: 'Ridimensiona immagine',
    maxWidth: 'Larghezza massima',
    maxHeight: 'Altezza massima',
    compressionLevel: 'Livello compressione',
    maxFileSize: 'Dimensione file obiettivo',
    optimizationLevel: 'Livello ottimizzazione',
    convertTo: 'Converti in'
  },
  presets: {
    web: 'Ottimizzazione web',
    highQuality: 'Alta qualità',
    balanced: 'Bilanciato',
    smallSize: 'Dimensione ridotta',
    custom: 'Personalizzato'
  },
  formats: {
    original: 'Formato originale',
    jpeg: 'JPEG',
    jpegDesc: 'JPEG ideale per foto, non supporta trasparenza',
    png: 'PNG',
    pngDesc: 'PNG supporta trasparenza, ideale per icone e illustrazioni',
    webp: 'WebP',
    webpDesc: 'WebP offre alta compressione, ideale per il web',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },
  resizeOptions: {
    noResize: 'Non ridimensionare',
    maxDimension: 'Dimensione massima',
    exactDimensions: 'Dimensioni esatte',
    percentage: 'Ridimensionamento percentuale'
  },
  actions: {
    upload: 'Carica immagini',
    compress: 'Comprimi',
    processing: 'Elaborazione in corso...',
    download: 'Scarica',
    downloadAll: 'Scarica tutto',
    batchDownload: 'Scarica in batch',
    clear: 'Pulisci',
    addMore: 'Aggiungi altre immagini',
    removeAll: 'Rimuovi tutto',
    preview: 'Anteprima',
    delete: 'Elimina'
  },
  table: {
    filename: 'Nome file',
    originalSize: 'Dimensione originale',
    original: 'Dimensione originale',
    compressedSize: 'Dimensione compressa',
    compressed: 'Dimensione compressa',
    savings: 'Risparmio',
    ratio: 'Rapporto compressione',
    quality: 'Qualità',
    dimensions: 'Dimensioni',
    originalDimensions: 'Dimensioni originali',
    newDimensions: 'Nuove dimensioni',
    status: 'Stato'
  },
  messages: {
    dropped: '{count} immagini caricate',
    uploading: 'Caricamento immagini...',
    compressing: 'Compressione immagini...',
    compressed: 'Compressione completata',
    downloadPreparing: 'Preparazione download...',
    downloadReady: 'Download pronto',
    cleared: 'Tutte le immagini rimosse',
    tooManyFiles: 'Troppi file. Massimo consentito: {max}',
    fileTooLarge: 'File troppo grande. Massimo consentito: {max}MB',
    unsupportedFormat: 'Formato non supportato: {format}',
    imageError: 'Errore elaborazione immagine: {error}',
    batchDownloadNotSupported: 'Il download in batch richiede la libreria JSZip. Scarica singolarmente o aggiungi supporto zip.',
    batchDownloadError: 'Errore download batch: {error}',
    invalidImage: 'Seleziona un file immagine valido'
  },
  article: {
    title: 'Compressore di Immagini: guida completa all\'ottimizzazione online',
    
    introduction: {
      title: 'Cos\'è un compressore di immagini?',
      p1: 'Il nostro <strong>compressore di immagini</strong> è uno strumento avanzato progettato per ridurre le dimensioni dei file mantenendo una qualità visiva accettabile. Che tu abbia bisogno di <strong>comprimere immagini a 50kb</strong>, <strong>comprimere immagini a 20kb</strong> o <strong>comprimere immagini a 100kb</strong>, la nostra soluzione versatile può gestire qualsiasi obiettivo di dimensione.',
      p2: 'Nel mondo digitale, le dimensioni delle immagini sono cruciali. Immagini grandi rallentano i siti web, occupano spazio di archiviazione e creano problemi nella condivisione. Il nostro <strong>compressore online</strong> analizza intelligentemente le tue immagini applicando algoritmi avanzati che eliminano dati non necessari preservando i dettagli visivi importanti.',
      p3: 'A differenza dei semplici strumenti che riducono uniformemente la qualità, il nostro <strong>compressore</strong> utilizza tecniche intelligenti che analizzano il contenuto per determinare dove applicare la compressione in modo più efficace.'
    },
    
    applications: {
      title: 'Applicazioni pratiche',
      scenario1: {
        title: 'Ottimizzazione siti web',
        content: 'La velocità del sito influisce sull\'esperienza utente e sul posizionamento SEO. Con il nostro <strong>compressore online</strong>, gli sviluppatori possono ridurre le dimensioni delle immagini per tempi di caricamento più rapidi. Ad esempio, comprimere miniature di blog a circa <strong>30kb</strong> mantiene l\'attrattiva visiva migliorando le prestazioni.'
      },
      scenario2: {
        title: 'Allegati email',
        content: 'I server email hanno limiti di dimensione rigidi. Il nostro <strong>compressore</strong> può ridurre i file a dimensioni accettabili, come <strong>500kb</strong>, mantenendo sufficienti dettagli per foto di progetti, immobili o altri contenuti visuali.'
      },
      scenario3: {
        title: 'Pubblicazione sui social media',
        content: 'Ogni piattaforma sociale ha requisiti diversi per le immagini. Il nostro strumento aiuta a ottimizzare le foto per Instagram, Facebook e altre piattaforme, ad esempio con impostazioni come <strong>comprimere a 200kb</strong> per il giusto equilibrio qualità-dimensione.'
      },
      scenario4: {
        title: 'Documenti e applicazioni',
        content: 'Molti sistemi online hanno limiti di dimensione rigidi. Usa il nostro <strong>compressore JPG</strong> per ridurre foto per documenti, applicazioni o materiali di supporto. Ad esempio, i candidati spesso usano l\'opzione <strong>comprimere a 50kb</strong> per foto per applicazioni lavorative.'
      },
      scenario5: {
        title: 'Sviluppo app mobile e ottimizzazione storage',
        content: 'Gli sviluppatori usano il nostro <strong>compressore</strong> per ridurre le risorse delle app, diminuendo le dimensioni di installazione. Gli utenti comuni lo usano come <strong>convertitore JPEG</strong> per ottimizzare le raccolte fotografiche personali e liberare spazio su dispositivo.'
      }
    },
    
    guide: {
      title: 'Come usare il compressore',
      step1: {
        title: 'Passo 1: Carica le tue immagini',
        content: 'Clicca sul pulsante di caricamento o trascina le immagini nell\'area designata. Supportiamo vari formati tra cui JPG, PNG e WebP. Per la <strong>compressione batch</strong>, puoi caricare più immagini contemporaneamente.'
      },
      step2: {
        title: 'Passo 2: Scegli il livello di compressione',
        content: 'Seleziona il livello di compressione desiderato o specifica una dimensione obiettivo. Se hai bisogno di <strong>comprimere a 20kb</strong> o <strong>comprimere a 50kb</strong>, inserisci semplicemente la dimensione target.'
      },
      step3: {
        title: 'Passo 3: Anteprima e confronto',
        content: 'Prima di applicare la compressione, puoi visualizzare un\'anteprima e confrontare con l\'originale. Questo passaggio assicura che il nostro <strong>compressore online</strong> trovi il giusto equilibrio tra riduzione dimensionale e qualità visiva.'
      },
      step4: {
        title: 'Passo 4: Applica la compressione',
        content: 'Soddisfatto dell\'anteprima, clicca "Comprimi" per applicare le impostazioni. Il nostro <strong>compressore</strong> elaborerà l\'immagine con algoritmi avanzati. Per elaborazioni batch, viene mostrato un indicatore di progresso.'
      },
      step5: {
        title: 'Passo 5: Scarica le immagini compresse',
        content: 'Al termine della compressione, scarica singolarmente le immagini ottimizzate o, per elaborazioni batch, come file zip. Il nostro strumento mostra esattamente quanto sono state ridotte le dimensioni.'
      }
    },
    
    faq: {
      title: 'Domande frequenti',
      q1: 'Come fa il compressore a ridurre le dimensioni mantenendo la qualità?',
      a1: 'Il nostro <strong>compressore</strong> usa algoritmi avanzati che analizzano il contenuto e riducono i dati dove meno visibile. A differenza degli strumenti base, usa tecniche di compressione percettiva che considerano come funziona la visione umana.'
      ,
      q2: 'Posso comprimere a dimensioni specifiche come 50kb o 20kb?',
      a2: 'Sì, il nostro strumento può funzionare come <strong>compressore a 50kb</strong>, <strong>compressore a 20kb</strong>, <strong>compressore a 100kb</strong> o qualsiasi altra dimensione target. Basta inserire la dimensione desiderata nel campo appropriato.'
      ,
      q3: 'Qual è la differenza tra compressione lossy e lossless?',
      a3: 'Il nostro <strong>compressore</strong> offre entrambe le opzioni:<br><br><strong>Lossless</strong>: Riduce le dimensioni senza perdere dati, mantenendo il 100% della qualità originale.<br><br><strong>Lossy</strong>: Riduce maggiormente le dimensioni eliminando alcuni dati, ma il nostro algoritmo minimizza l\'impatto sulla qualità percepita.'
      ,
      q4: 'Quali formati sono più compatibili con la compressione?',
      a4: 'Diversi formati rispondono diversamente:<br><br><strong>JPG/JPEG</strong>: Ideale per foto e immagini complesse.<br><br><strong>PNG</strong>: Perfetto per testo, grafica e immagini con trasparenza.<br><br><strong>WebP</strong>: Formato moderno che offre ottima compressione.'
      ,
      q5: 'Le immagini compresse appariranno pixelate o sfocate?',
      a5: 'Se usato correttamente, il nostro <strong>compressore</strong> mantiene la qualità visiva. L\'entità della perdita di qualità dipende da:<br><br>1. <strong>Livello di compressione</strong><br>2. <strong>Contenuto dell\'immagine</strong><br>3. <strong>Qualità originale</strong><br><br>La funzione di anteprima ti permette di verificare i risultati prima del download.'
    },
    
    relatedTools: {
      title: 'Strumenti correlati',
      tool1: '<a href="https://imagecompressor.com/" target="_blank" rel="noopener noreferrer">Online Image Compressor</a>',
      tool2: '<a href="https://imageresizer.com/image-compressor" target="_blank" rel="noopener noreferrer">Image Compressor - Compress Images Online</a>',
      tool3: '<a href="https://www.freeconvert.com/image-compressor" target="_blank" rel="noopener noreferrer">Image Compressor - FreeConvert.com</a>'
    },
    
    resources: {
      title: 'Risorse esterne',
      resource1: '<a href="https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types" target="_blank" rel="noopener noreferrer">MDN Web Docs: Guida ai formati immagine</a>',
      resource2: '<a href="https://web.dev/fast/#optimize-your-images" target="_blank" rel="noopener noreferrer">Google Web.dev: Ottimizzazione immagini</a>',
      resource3: '<a href="https://www.w3.org/Graphics/JPEG/" target="_blank" rel="noopener noreferrer">W3C: Specifiche formato JPEG</a>'
    },
    
    conclusion: {
      title: 'Conclusione',
      content: 'Nell\'ambiente digitale odierno, un efficiente <strong>compressore di immagini</strong> è essenziale per chiunque lavori con contenuti visuali online. Che tu abbia bisogno di <strong>comprimere a 100kb</strong> per l\'ottimizzazione web, <strong>comprimere a 20kb</strong> per documenti o un <strong>compressore batch</strong> per grandi collezioni, il nostro strumento offre versatilità e prestazioni.<br><br>Comprimendo intelligentemente le tue immagini, puoi migliorare i tempi di caricamento, ridurre i costi di archiviazione e migliorare l\'esperienza utente. Il nostro <strong>compressore online</strong> offre compressione di livello professionale accessibile a tutti.'
    }
  }
}