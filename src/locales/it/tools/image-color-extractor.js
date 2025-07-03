export default {
  name: 'Estrattore di Colori da Immagini',
  description: 'Estrai palette di colori e colori dominanti da qualsiasi immagine',
  input: {
    title: 'Carica immagine',
    dropzone: 'Trascina e rilascia un\'immagine qui oppure clicca per caricare',
    formats: 'Formati supportati: JPG, PNG, GIF, WebP, SVG',
    browse: 'Sfoglia file',
    selectImage: 'Seleziona immagine',
    orText: 'oppure',
    pasteUrl: 'Incolla URL immagine:',
    loadUrl: 'Carica da URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    unnamed: 'Immagine senza nome'
  },
  options: {
    title: 'Opzioni di estrazione',
    extractSettings: 'Impostazioni estrazione',
    colorCount: 'Numero di colori',
    paletteSize: 'Dimensione palette',
    paletteMin: 'Minimo (3)',
    paletteMax: 'Massimo (20)',
    colorSimilarity: 'Similarità colore',
    similiarityToggle: 'Consenti colori simili',
    quality: 'Qualità estrazione',
    colorModel: 'Modello colore',
    colorSpace: 'Spazio colore',
    colorFormat: 'Formato colore',
    sortBy: 'Ordina colori per',
    sortByPopularity: 'Frequenza di apparizione',
    sortByLuminance: 'Luminosità',
    sortByHue: 'Tonalità',
    sortBySaturation: 'Saturazione',
    ignoreWhite: 'Ignora bianco',
    ignoreBlack: 'Ignora nero',
    threshold: 'Soglia similarità'
  },
  colorModels: {
    rgb: 'RGB',
    hsl: 'HSL',
    hsv: 'HSV',
    cmyk: 'CMYK',
    lab: 'LAB'
  },
  colorFormats: {
    hex: 'Esadecimale (#RRGGBB)',
    rgb: 'RGB (0-255)',
    rgba: 'RGBA con trasparenza',
    hsl: 'HSL',
    hsla: 'HSLA con trasparenza',
    cssRgb: 'CSS RGB',
    cssHsl: 'CSS HSL'
  },
  sortOptions: {
    prevalence: 'Frequenza',
    luminance: 'Luminosità',
    hue: 'Tonalità',
    saturation: 'Saturazione',
    original: 'Ordine originale'
  },
  colorSpaces: {
    srgb: 'sRGB',
    p3: 'Display P3',
    rec2020: 'Rec. 2020',
    prophoto: 'ProPhoto RGB'
  },
  results: {
    title: 'Colori estratti',
    colorsFound: '{count} colori estratti',
    dominantColor: 'Colore dominante',
    mainColor: 'Colore principale',
    complementary: 'Colore complementare',
    palette: 'Palette colori',
    colorPalette: 'Palette colori',
    palettePreview: 'Anteprima palette',
    usage: 'Utilizzo colore (%)',
    percentage: 'Percentuale: {value}%',
    copyAll: 'Copia tutti i colori',
    clickToCopy: 'Clicca per copiare: {color}',
    downloading: 'Download palette in corso...'
  },
  display: {
    originalImage: 'Immagine originale',
    colorPalette: 'Palette colori',
    uploadFirst: 'Carica prima un\'immagine',
    clickExtract: 'Clicca "Estrai colori" per ottenere la palette dell\'immagine',
  },
  actions: {
    extract: 'Estrai colori',
    extracting: 'Elaborazione in corso...',
    download: 'Scarica palette',
    copy: 'Copia',
    copyValue: 'Copia valore',
    reset: 'Ripristina',
    copyPalette: 'Copia palette',
    exportJson: 'Esporta come JSON',
    exportCss: 'Esporta come variabili CSS',
    exportSass: 'Esporta come variabili SASS',
    exportSwatch: 'Esporta come campioni ASE'
  },
  palette: {
    title: 'Palette denominate',
    vibrant: 'Vivace',
    muted: 'Sobrio',
    dark: 'Scuro',
    light: 'Chiaro',
    custom: 'Personalizzato'
  },
  messages: {
    imageLoaded: 'Immagine caricata con successo',
    processingImage: 'Elaborazione immagine in corso...',
    extractionComplete: 'Estrazione colori completata',
    extractionFailed: 'Estrazione fallita: {error}',
    copied: 'Copiato negli appunti',
    copiedColor: 'Copiato: {color}',
    copiedAll: 'Tutti i colori copiati',
    copyFailed: 'Copia fallita',
    resetDone: 'Ripristino effettuato',
    invalidImage: 'File immagine non valido',
    noImageSelected: 'Nessuna immagine selezionata'
  },
  article: {
    title: "Estrattore di Colori da Immagini: identifica ed estrai colori da qualsiasi immagine",
    features: {
      title: "Scopri l'estrazione di colori da immagini e le sue applicazioni",
      description: "<strong>L'Estrattore di Colori da Immagini</strong> è un potente strumento online progettato per analizzare immagini e identificarne i colori chiave. Questo pratico strumento utilizza avanzati <strong>algoritmi di rilevamento colore</strong> per scansionare l'immagine caricata, individuando sia i colori principali che definiscono la palette complessiva, sia i colori di accento che aggiungono interesse visivo.<br><br>A differenza dei semplici contagocce, il nostro <strong>generatore di palette</strong> raggruppa intelligentemente i colori simili, fornendovi una raccolta coerente e pratica di colori invece di campionare singoli pixel. Lo strumento supporta vari formati immagine tra cui JPEG, PNG, GIF e WebP, rendendolo adatto a diversi scenari d'uso.<br><br>I <strong>combinazioni di colori</strong> estratte sono immediatamente disponibili in più formati tra cui HEX, RGB e HSL, permettendovi di integrarli facilmente nei vostri progetti di design, codice o documentazione senza necessità di conversione manuale.",
      useCases: {
        title: "Applicazioni pratiche dell'estrazione colore da immagini",
        items: [
          "<strong>Web design e sviluppo</strong>: Estrai <strong>palette</strong> coerenti da loghi clienti o immagini di riferimento per garantire coerenza di branding nel sito web. I colori estratti possono essere utilizzati direttamente nei fogli di stile CSS, permettendo ai designer di abbinare colori esatti da immagini di ispirazione o costruire sistemi di design coerenti basati su asset visivi esistenti.",
          
          "<strong>Marketing digitale</strong>: Crea campagne social media visivamente armoniose estraendo e utilizzando <strong>combinazioni di colori</strong> coerenti da foto di prodotti o immagini di brand. I professionisti del marketing possono garantire che tutti i materiali promozionali mantengano un'armonia cromatica basandosi su dati colore estratti da immagini chiave del brand.",
          
          "<strong>Sviluppo identità visiva</strong>: Analizza i <strong>colori di brand</strong> dei competitor o esplora opzioni cromatiche estraendo palette da immagini di ispirazione. Gli esperti di branding possono utilizzare questo strumento per comprendere le tendenze cromatiche del settore, affinare linee guida di brand o stabilire un'identità visiva unica che si distingua dai competitor.",
          
          "<strong>Design UI/UX</strong>: Estrai precisi <strong>valori colore</strong> da mockup o immagini di ispirazione per implementarli nei design delle interfacce utente. I designer UI possono garantire una corrispondenza perfetta dei colori quando si passa dall'arte concettuale alle interfacce funzionali, mantenendo l'esperienza visiva desiderata in tutte le interfacce dell'applicazione.",
          
          "<strong>Design per la stampa</strong>: Identifica precisi <strong>codici colore</strong> da riferimenti digitali per garantirne una riproduzione accurata nei materiali stampati. I graphic designer che lavorano a progetti di stampa possono estrarre colori precisi per una conversione CMYK accurata, assicurando che i materiali fisici corrispondano ai design digitali.",
          
          "<strong>Arte e illustrazione</strong>: Costruisci <strong>palette digitali</strong> personalizzate basate su opere d'arte o foto che ti ispirano. Gli artisti digitali possono analizzare le relazioni cromatiche in capolavori o foto di riferimento, quindi applicare armonie cromatiche simili ai propri lavori per un maggiore impatto visivo."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sull'estrazione colore da immagini",
      items: [
        {
          question: "Quanto è accurato l'Estrattore di Colori nell'identificare i colori?",
          answer: "L'<strong>Estrattore di Colori da Immagini</strong> offre un'identificazione cromatica ad alta precisione grazie a complessi algoritmi che analizzano i dati dei pixel e raggruppano colori simili. I fattori chiave che influenzano l'accuratezza includono:<br><br>• Qualità e risoluzione dell'immagine - immagini ad alta qualità forniscono un'estrazione colore più accurata<br>• Complessità dello spazio colore - immagini con gradienti sottili possono mostrare lievi variazioni nell'identificazione colore<br>• Numero di colori estratti - l'algoritmo dà priorità ai colori più importanti e dominanti<br><br>Per lavori di design professionali che richiedono corrispondenze cromatiche precise, lo strumento fornisce esatti <strong>valori HEX, RGB e HSL</strong> che possono essere applicati direttamente a software di design o codice. Nella maggior parte dei casi, gli utenti riferiscono che le <strong>palette</strong> estratte rappresentano accuratamente i colori fondamentali dell'immagine analizzata."
        },
        {
          question: "Quali formati immagine supporta l'estrattore di colori?",
          answer: "Il nostro <strong>Estrattore di Colori da Immagini</strong> supporta tutti i principali formati immagine utilizzati nel web e nell'industria del design:<br><br>• JPEG/JPG - ideale per fotografie e immagini complesse<br>• PNG - perfetto per grafica con trasparenza<br>• GIF - supporta semplici animazioni e grafica<br>• WebP - formato moderno con eccellente compressione<br>• SVG - formato vettoriale (estrae colori dalla vista renderizzata)<br><br>La dimensione massima per ogni singolo file immagine è limitata a 5MB per garantire prestazioni ottimali. Per ottenere i migliori risultati nell'estrazione di <strong>combinazioni di colori</strong>, raccomandiamo di usare immagini chiare e di alta qualità con aree cromatiche ben definite. Il <strong>rilevamento colore</strong> funziona meglio su immagini senza eccessivo rumore o artefatti da compressione."
        },
        {
          question: "Quanti colori estrarrà lo strumento dalla mia immagine?",
          answer: "L'<strong>Estrattore di Colori da Immagini</strong> offre opzioni flessibili per l'estrazione colore:<br><br>• Di default, lo strumento estrae 5-10 colori principali che meglio rappresentano la <strong>palette</strong> dell'immagine<br>• Puoi personalizzare l'estrazione per ottenere da 1-2 colori chiave fino a oltre 20 colori<br>• L'algoritmo bilancia intelligentemente colori dominanti (che coprono ampie aree) e colori di accento (visivamente importanti ma meno diffusi)<br><br>Per scopi di design, usare 5-7 colori estratti fornisce tipicamente la migliore <strong>combinazione di colori</strong>, catturando l'essenza dell'immagine mentre rimane facile da applicare nei progetti di design. Quando si estraggono colori per analisi dettagliate o design complessi, puoi aumentare il numero di colori per ottenere una palette più completa."
        },
        {
          question: "Posso salvare o esportare le palette estratte?",
          answer: "Sì, l'<strong>Estrattore di Colori da Immagini</strong> offre diverse opzioni per salvare ed esportare le <strong>palette</strong> estratte:<br><br>• <strong>Copia singoli codici colore</strong> con un clic nei formati HEX, RGB o HSL<br>• <strong>Esporta intere palette</strong> in vari formati compatibili con software di design<br>• <strong>Salva</strong> palette nella memoria locale del browser per riferimenti futuri<br>• <strong>Genera variabili CSS</strong> per un uso immediato nello sviluppo web<br><br>Per team di design che lavorano su più progetti, la capacità di esportare <strong>combinazioni di colori</strong> assicura coerenza ed efficienza. Molti professionisti integrano queste palette estratte nei loro sistemi di design o linee guida di stile per mantenere coerenza visiva in tutti i punti di contatto del brand."
        },
        {
          question: "Come posso usare i colori estratti nel mio software di design?",
          answer: "I <strong>valori colore</strong> estratti dal nostro strumento possono essere facilmente trasferiti in qualsiasi software di design attraverso diversi metodi:<br><br>1. <strong>Copia e incolla direttamente</strong> i codici HEX (es. #FF5733) nei campi di inserimento colore di Adobe Photoshop, Illustrator, Figma, Sketch e altri software di design<br>2. I <strong>valori RGB</strong> (es. rgb(255, 87, 51)) possono essere inseriti nel selettore colore RGB delle applicazioni di design<br>3. Il formato <strong>HSL</strong> è particolarmente utile per regolare luminosità o saturazione mantenendo la stessa tonalità<br>4. Alcuni software di design permettono di <strong>importare palette nei formati che il nostro strumento può esportare</strong><br><br>Per web designer e sviluppatori, le <strong>combinazioni di colori</strong> estratte possono essere implementate direttamente in CSS, sia come singole proprietà colore che come un set completo di proprietà personalizzate CSS (variabili) per gestire il colore in modo più sistematico."
        }
      ]
    },
    guide: {
      title: "Come usare l'Estrattore di Colori: guida passo passo",
      step1: "<strong>Carica la tua immagine</strong>: Clicca il pulsante \"Seleziona immagine\" o trascina e rilascia un file nell'area di upload. L'<strong>Estrattore di Colori</strong> accetta formati immagine comuni tra cui JPEG, PNG, WebP e GIF. Per i migliori risultati, scegli un'immagine con colori chiari e definiti e una risoluzione sufficiente.",
      step2: "<strong>Regola le impostazioni di estrazione</strong>: Prima dell'elaborazione, puoi personalizzare i parametri di estrazione colore. Imposta il numero di colori che desideri estrarre (tipicamente 5-10 forniscono una <strong>palette</strong> bilanciata) e scegli se privilegiare i colori principali o includere anche colori di accento. Queste impostazioni aiutano a personalizzare i risultati in base alle tue esigenze specifiche.",
      step3: "<strong>Elabora l'immagine</strong>: Clicca il pulsante \"Estrai colori\" per avviare l'analisi. L'<strong>algoritmo di rilevamento colore</strong> scannerizzerà la tua immagine, identificherà i colori chiave e raggrupperà tonalità simili. Questo processo richiede generalmente pochi secondi, a seconda delle dimensioni e complessità dell'immagine.",
      step4: "<strong>Visualizza i colori estratti</strong>: Dopo l'elaborazione, lo strumento mostrerà la <strong>combinazione di colori</strong> estratta nel formato da te preferito (HEX, RGB o HSL) con i corrispondenti codici colore. Ogni colore è presentato come un campione accompagnato dal relativo codice per un facile riferimento. I colori sono ordinati dal più dominante ai colori di accento, fornendoti una chiara gerarchia visiva.",
      step5: "<strong>Salva ed esporta la tua palette</strong>: Copia singoli <strong>codici colore</strong> cliccandoci sopra, o usa le opzioni di esportazione per esportare l'intera palette. Puoi salvare la palette nel tuo browser per riferimenti futuri, scaricarla in vari formati compatibili con software di design, o generare variabili CSS per un uso immediato nei progetti web."
    },
    conclusion: "L'Estrattore di Colori da Immagini è uno strumento prezioso per designer, marketer, sviluppatori e artisti che hanno bisogno di identificare, catturare e implementare colori specifici da riferimenti visivi. Colmando il divario tra ispirazione visiva e applicazione pratica, questo strumento semplifica il processo di selezione colore e garantisce coerenza nei progetti digitali e di stampa. Che tu stia sviluppando linee guida di brand, progettando un sito web o creando opere d'arte digitali, la capacità di estrarre palette precise dalle immagini elimina le congetture e migliora la qualità dell'output creativo. Con il design che continua a enfatizzare sistemi cromatici coerenti, strumenti in grado di identificare e implementare accuratamente combinazioni di colori diventano risorse essenziali per professionisti in tutti i campi creativi e tecnici."
  }
}