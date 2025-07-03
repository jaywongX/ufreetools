export default {
  name: 'Ottimizzatore SVG',
  description: 'Ottimizza e pulisce file SVG per migliorare le prestazioni e ridurre le dimensioni',
  upload: {
    title: 'Carica SVG',
    dropzone: 'Trascina file SVG qui o clicca per caricare',
    or: 'oppure',
    pasteCode: 'Incolla codice SVG',
    maxSize: 'Dimensione massima file: 5MB',
    onlySvg: 'Sono supportati solo file in formato SVG',
    selected: 'Selezionato',
    changeFile: 'Cambia file'
  },
  input: {
    title: 'Input SVG',
    pasteHere: 'Incolla qui il codice SVG...',
    loadExample: 'Carica esempio',
    clear: 'Pulisci',
    validate: 'Valida SVG'
  },
  output: {
    title: 'Risultato ottimizzazione',
    copyToClipboard: 'Copia negli appunti',
    download: 'Scarica SVG',
    beforeSize: 'Dimensione originale',
    afterSize: 'Dimensione ottimizzata',
    reduction: 'Riduzione',
    reductionBy: 'Ridotto del',
    svgCode: 'Codice SVG'
  },
  options: {
    title: 'Opzioni ottimizzazione',
    preset: 'Preimpostazione',
    presets: {
      default: 'Predefinito',
      light: 'Leggera',
      aggressive: 'Aggressiva',
      custom: 'Personalizzata'
    },
    removeComments: 'Rimuovi commenti',
    removeCommentsDesc: 'Rimuove sezioni di commenti e cdata',
    removeHiddenElements: 'Rimuovi elementi nascosti',
    removeEmptyContainers: 'Rimuovi contenitori vuoti',
    removeUnusedDefs: 'Rimuovi definizioni non utilizzate',
    removeViewBox: 'Rimuovi viewBox',
    keepViewBox: 'Mantieni viewBox',
    keepViewBoxDesc: 'Conserva l\'attributo viewBox per garantire scalabilità SVG',
    cleanupIDs: 'Pulisci ID',
    cleanupIDsDesc: 'Rimuovi o abbrevia ID non referenziati',
    convertColors: 'Converti colori in esadecimale',
    removeMetadata: 'Rimuovi metadati',
    removeMetadataDesc: 'Elimina elementi &lt;metadata&gt;',
    removeDoctype: 'Rimuovi doctype',
    removeXMLProcInst: 'Rimuovi istruzioni XML',
    removeEditorsNS: 'Rimuovi namespace editor',
    collapseGroups: 'Comprimi gruppi',
    collapseGroupsDesc: 'Unisci elementi gruppo senza attributi speciali',
    convertPathData: 'Ottimizza dati percorso',
    convertPathDataDesc: 'Converti dati percorso in coordinate relative, riduci decimali etc.',
    convertTransforms: 'Ottimizza trasformazioni',
    convertShapeToPath: 'Converti forme in percorsi',
    convertShapeToPathDesc: 'Converte forme base in elementi &lt;path&gt;',
    removeUselessStrokeAndFill: 'Rimuovi tratti e riempimenti inutili',
    moveElemsAttrsToGroup: 'Sposta attributi elementi a gruppo',
    mergePaths: 'Unisci percorsi',
    minifyStyles: 'Minifica stili',
    inlineStyles: 'Stili inline',
    inlineStylesDesc: 'Converte stili da elementi &lt;style&gt; ad attributi inline',
    cleanupNumericValues: 'Arrotonda valori numerici',
    precision: 'Precisione numerica',
    decimalPlaces: 'decimali',
    lowPrecision: 'Bassa precisione (dimensione minore)',
    highPrecision: 'Alta precisione (qualità migliore)',
    removeDimensions: 'Rimuovi attributi dimensioni',
    removeDimensionsDesc: 'Elimina attributi width/height, usa viewBox per controllare dimensioni',
    sortAttrs: 'Ordina attributi',
    sortAttrsDesc: 'Disponi attributi elementi in ordine alfabetico'
  },
  view: {
    title: 'Anteprima',
    original: 'Originale',
    optimized: 'Ottimizzato',
    showBorder: 'Mostra bordo',
    backgroundColor: 'Colore sfondo',
    grid: 'Mostra griglia',
    zoom: 'Zoom',
    toggleAnimation: 'Attiva/disattiva animazione'
  },
  actions: {
    optimize: 'Avvia ottimizzazione',
    optimizing: 'Ottimizzazione in corso...',
    resetOptions: 'Reimposta opzioni',
    download: 'Scarica SVG ottimizzato',
    copy: 'Copia codice',
    copyCode: 'Copia codice',
    viewCode: 'Visualizza codice',
    viewPreview: 'Visualizza anteprima'
  },
  messages: {
    optimizationSuccess: 'Ottimizzazione SVG completata',
    optimizationFailed: 'Ottimizzazione SVG fallita: {error}',
    invalidSvg: 'File o codice SVG non valido',
    copied: 'Copiato negli appunti',
    copyFailed: 'Copia fallita, copia manualmente',
    downloaded: 'SVG ottimizzato scaricato',
    emptyInput: 'Fornisci codice SVG o file da ottimizzare',
    onlySvgAllowed: 'Carica solo file in formato SVG!',
    failedToLoadLibrary: 'Impossibile caricare libreria SVGO'
  },
  article: {
    title: "Ottimizzatore SVG: Migliora prestazioni e riduci dimensioni dei grafici vettoriali",
    features: {
      title: "Scopri l'ottimizzazione SVG e i suoi vantaggi",
      description: "<strong>Ottimizzatore SVG</strong> è uno strumento progettato per semplificare e migliorare i file di grafica vettoriale scalabile (SVG). Gli SVG sono formati di immagini vettoriali basati su XML che mantengono una nitidezza perfetta a qualsiasi livello di zoom, rendendoli ideali per web design responsive, loghi, icone e illustrazioni. Tuttavia, i file SVG spesso contengono dati non necessari che aumentano le dimensioni senza aggiungere valore visivo.<br><br>Il nostro <strong>strumento di ottimizzazione SVG</strong> analizza intelligentemente e rimuove le informazioni ridondanti dai file SVG preservandone l'aspetto visivo. Eliminando metadati, commenti, gruppi vuoti, definizioni inutilizzate e ottimizzando i dati dei percorsi, lo strumento riduce significativamente le dimensioni del file - tipicamente del 30-70%. Il risultato è un <strong>grafico vettoriale</strong> più pulito ed efficiente che si carica più velocemente, usa meno banda e migliora direttamente le metriche di prestazioni del sito e l'esperienza utente.",
      useCases: {
        title: "Applicazioni pratiche dell'ottimizzazione SVG",
        items: [
          "<strong>Miglioramento prestazioni sito web</strong>: Sviluppatori e designer web possono usare l'<strong>ottimizzatore di file SVG</strong> per ridurre le dimensioni dei grafici vettoriali usati in un sito. File SVG più piccoli significano tempi di caricamento più veloci, minore consumo di banda e migliori punteggi nei Core Web Metrics, influenzando positivamente il ranking nei motori di ricerca.",
          
          "<strong>Sviluppo app mobile</strong>: Gli sviluppatori di app mobile beneficiano di SVG ottimizzati che si caricano rapidamente su dispositivi con risorse limitate e usano meno memoria. Il nostro <strong>ottimizzatore di grafici vettoriali</strong> assicura che gli elementi UI renderizzati come SVG contribuiscano a un'esperienza utente fluida e reattiva senza overhead non necessario.",
          
          "<strong>Manutenzione librerie icone</strong>: Amministratori di sistemi di design e UI/UX designer responsabili di librerie di icone possono elaborare in batch icone SVG per garantire consistenza e prestazioni ottimali. Lo <strong>strumento di pulizia SVG</strong> aiuta a stabilire un approccio standardizzato per asset vettoriali tra prodotti e piattaforme.",
          
          "<strong>Grafiche prodotti e-commerce</strong>: I proprietari di negozi online possono ottimizzare grafiche vettoriali di prodotti per migliorare velocità di pagina e tassi di conversione. Immagini prodotto che si caricano più velocemente create con il nostro <strong>strumento di compressione SVG</strong> aiutano a ridurre il bounce rate e migliorare l'esperienza di acquisto, specialmente su dispositivi mobili.",
          
          "<strong>Campagne email marketing</strong>: I marketer possono usare SVG ottimizzati nelle campagne email per creare newsletter visivamente accattivanti che si caricano rapidamente nei client email. Il nostro strumento aiuta a creare <strong>illustrazioni vettoriali</strong> leggere che si visualizzano correttamente su varie piattaforme email senza aumentare la dimensione del messaggio.",
          
          "<strong>Consegna asset di design</strong>: I graphic designer possono ottimizzare file SVG prima di consegnarli a clienti o membri del team, assicurando che gli asset finali siano pronti per la produzione. Lo <strong>strumento di pulizia file SVG</strong> aiuta a mantenere standard professionali generando codice efficiente e pulito che gli sviluppatori possono implementare facilmente."
        ]
      }
    },
    faq: {
      title: "Domande frequenti sull'ottimizzazione SVG",
      items: [
        {
          question: "Cosa fa esattamente l'ottimizzazione SVG ai miei file?",
          answer: "L'ottimizzazione SVG è un processo che riduce le dimensioni del file mantenendo la qualità visiva, attraverso diverse tecniche:<br><br>• <strong>Rimozione metadati</strong>: Elimina informazioni non necessarie come dati editor, commenti ed elementi nascosti<br>• <strong>Pulizia dati percorso</strong>: Semplifica comandi percorso e coordinate, riducendo la precisione decimale che non influisce sull'aspetto<br>• <strong>Unione gruppi</strong>: Rimuove nidificazioni di gruppi e contenitori non necessari<br>• <strong>Minimizzazione attributi</strong>: Combina e semplifica attributi elementi<br>• <strong>Ottimizzazione trasformazioni</strong>: Razionalizza matrici di trasformazione<br>• <strong>Rimozione definizioni inutilizzate</strong>: Elimina elementi non referenziati dalla sezione &lt;defs&gt;<br><br>Il nostro <strong>strumento di ottimizzazione SVG</strong> applica queste tecniche intelligentemente, assicurando che l'output visivo rimanga identico mentre le dimensioni del file si riducono significativamente."
        },
        {
          question: "L'ottimizzazione SVG influisce sulla qualità della mia grafica?",
          answer: "Se configurata correttamente, l'ottimizzazione SVG non dovrebbe influire visibilmente sulla qualità della grafica. Il nostro <strong>ottimizzatore di grafici vettoriali</strong> è progettato per preservare l'aspetto visivo rimuovendo dati non necessari.<br><br>Le impostazioni di precisione nello strumento ti permettono di controllare il compromesso tra dimensione file e precisione. Con impostazioni di precisione più alte (5-8 decimali), anche le illustrazioni più complesse manterranno il loro aspetto preciso. Con impostazioni più basse (1-3 decimali), otterrai una maggiore riduzione delle dimensioni con differenze visive minime - spesso impercettibili all'occhio umano.<br><br>Per la maggior parte delle grafiche web, una precisione di 2-3 decimali offre un ottimo equilibrio tra ottimizzazione e qualità. Puoi sempre confrontare in anteprima l'<strong>immagine SVG</strong> ottimizzata con l'originale prima del download per assicurarti che il risultato soddisfi i tuoi requisiti."
        },
        {
          question: "Posso ottimizzare SVG con animazioni o interattività?",
          answer: "Sì, puoi ottimizzare SVG contenenti elementi animati o interattivi, ma richiede particolare attenzione. Il nostro <strong>ottimizzatore di file SVG</strong> pulisce dati non necessari preservando elementi strutturali importanti.<br><br>Per SVG con animazioni CSS, SMIL o interattività JavaScript, raccomandiamo:<br><br>1. Conservare ID referenziati in animazioni o script<br>2. Conservare nomi classe usati per stili o gestione eventi<br>3. Usare preset di ottimizzazione più conservativi<br>4. Testare accuratamente il <strong>grafico vettoriale</strong> ottimizzato per assicurarne la funzionalità<br><br>Se stai ottimizzando SVG interattivi complessi, considera l'uso di opzioni personalizzate per disabilitare ottimizzazioni specifiche che potrebbero influenzare animazioni o interattività. Ad esempio, se il tuo JavaScript fa riferimento a ID specifici nell'SVG, potresti voler disabilitare la pulizia degli ID."
        },
        {
          question: "Come migliorano le prestazioni del sito gli SVG ottimizzati?",
          answer: "Gli SVG ottimizzati migliorano le prestazioni del sito in diversi modi importanti:<br><br>• <strong>Tempi di caricamento più veloci</strong>: File più piccoli significano download più rapidi, specialmente per utenti mobile con piani dati limitati<br>• <strong>Riduzione uso banda</strong>: I <strong>grafici vettoriali</strong> ottimizzati consumano meno dati, riducendo costi di hosting e impatto ambientale<br>• <strong>Velocità rendering migliorata</strong>: Strutture SVG più semplici richiedono meno elaborazione al browser<br>• <strong>Miglioramento Core Web Metrics</strong>: Contribuisce a migliorare metriche come Largest Contentful Paint (LCP) e First Input Delay (FID)<br>• <strong>Riduzione uso memoria</strong>: SVG più puliti usano meno memoria del browser, importante specialmente su dispositivi mobile<br><br>Strumenti come PageSpeed Insights di Google rifletteranno questi miglioramenti, potenzialmente aiutando a ottenere migliori posizionamenti nei motori di ricerca. Una pagina che usa <strong>immagini SVG</strong> efficientemente ottimizzate può ottenere punteggi significativamente migliori in metriche di prestazioni rispetto a una che usa grafiche non ottimizzate e gonfie."
        },
        {
          question: "Qual è la differenza tra ottimizzazione SVG e compressione immagini raster?",
          answer: "L'ottimizzazione SVG e la compressione immagini raster (come JPEG o PNG) differiscono fondamentalmente nell'approccio alla riduzione delle dimensioni:<br><br><strong>Ottimizzazione SVG:</strong><br>• Si applica a grafiche vettoriali basate su percorsi e forme matematiche<br>• Mantiene scalabilità perfetta a qualsiasi risoluzione<br>• Riduce dimensioni pulendo codice e ottimizzando espressioni matematiche<br>• Non comporta perdita di qualità se eseguita correttamente<br>• Ideale per loghi, icone, illustrazioni ed elementi UI<br>• L'output rimane modificabile e ulteriormente adattabile<br><br><strong>Compressione raster:</strong><br>• Si applica a immagini basate su pixel<br>• Risoluzione fissa; lo zoom riduce la qualità<br>• Riduce dimensioni scartando dati pixel o usando algoritmi matematici<br>• Tipicamente comporta qualche perdita di qualità (compressione lossy)<br>• Più adatta a foto e immagini complesse con molti colori<br>• I file compressi sono generalmente non modificabili<br><br>Il nostro <strong>strumento di ottimizzazione SVG</strong> è specificamente progettato per la struttura unica delle grafiche vettoriali, riducendo le dimensioni mantenendo i vantaggi del formato vettoriale - scalabilità perfetta, modificabilità e aspetto nitido a qualsiasi dimensione."
        }
      ]
    },
    guide: {
      title: "Come usare l'ottimizzatore SVG: guida passo-passo",
      step1: "<strong>Carica il tuo file SVG</strong>: Trascina il file SVG nell'area di caricamento o clicca per selezionarlo. In alternativa, se hai il codice invece di un file, puoi incollare direttamente il codice SVG nel campo di input. Il nostro <strong>strumento di ottimizzazione SVG</strong> accetta file fino a 5MB.",
      step2: "<strong>Configura le opzioni di ottimizzazione</strong>: Esamina le impostazioni di ottimizzazione predefinite, adatte alla maggior parte degli SVG. Per esigenze specifiche, puoi personalizzare opzioni come:<ul class='ml-5 list-disc'><li>Livello di precisione (numero di decimali mantenuti)</li><li>Rimozione di metadati, commenti ed elementi vuoti</li><li>Impostazioni ottimizzazione dati percorso</li><li>Gestione ID e attributi</li></ul>Le impostazioni predefinite offrono un buon equilibrio tra riduzione dimensioni e fedeltà visiva per la maggior parte dei <strong>grafici vettoriali</strong>.",
      step3: "<strong>Clicca il pulsante \"Avvia ottimizzazione\"</strong>: Avvia il processo di ottimizzazione cliccando il pulsante. Lo strumento elaborerà il tuo SVG con le opzioni selezionate, applicando varie tecniche per ridurre le dimensioni preservando l'aspetto visivo. Per file grandi o complessi, potrebbe richiedere alcuni secondi.",
      step4: "<strong>Esamina i risultati dell'ottimizzazione</strong>: Dopo l'elaborazione, vedrai statistiche che mostrano le dimensioni originali, quelle ottimizzate e la percentuale di riduzione ottenuta. Più importante, puoi confrontare visivamente l'<strong>immagine SVG</strong> originale e quella ottimizzata per verificare che l'aspetto sia preservato.",
      step5: "<strong>Regola le impostazioni se necessario</strong>: Se non sei soddisfatto del risultato - sia che la riduzione dimensioni sia insufficiente, sia che ci siano differenze visive indesiderate - puoi regolare le impostazioni e riprovare. Aumentare la precisione manterrà più dettagli visivi ma risulterà in file più grandi, mentre ridurla produrrà file più piccoli con possibili lievi differenze visive.",
      step6: "<strong>Esamina il codice SVG ottimizzato</strong>: Controlla il codice SVG ripulito per vedere quali modifiche sono state apportate. Lo strumento rimuove elementi non necessari, ottimizza i dati percorso e generalmente rende il codice più efficiente. Questo è sia educativo che utile per comprendere la struttura dei <strong>grafici vettoriali</strong>.",
      step7: "<strong>Scarica o copia l'SVG ottimizzato</strong>: Quando sei soddisfatto dell'ottimizzazione, puoi scaricare il file SVG ottimizzato o copiare il codice negli appunti. Il file ottimizzato può essere usato nei tuoi progetti web, sistemi di design o qualsiasi altra applicazione che richieda <strong>grafici vettoriali</strong> efficienti."
    },
    conclusion: "Lo strumento Ottimizzatore SVG rende semplice ridurre le dimensioni dei file di grafica vettoriale senza comprometterne la qualità visiva. Eliminando informazioni ridondanti e ottimizzando la struttura dei file SVG, lo strumento aiuta a migliorare le prestazioni dei siti web, ridurre l'uso di banda e migliorare l'esperienza utente su vari dispositivi. Che tu sia uno sviluppatore web che cerca tempi di caricamento più veloci, un designer che mantiene un sistema di icone coerente o un marketer che crea campagne email responsive, l'ottimizzazione degli SVG dovrebbe essere parte standard del tuo flusso di lavoro di produzione. I minuti spesi a ottimizzare gli asset vettoriali possono tradursi in significativi miglioramenti delle prestazioni e un'esperienza utente più fluida, specialmente su dispositivi mobili o connessioni lente. Con gli standard web che evolvono favorendo prestazioni e user experience, strumenti come il nostro Ottimizzatore SVG stanno diventando componenti essenziali del toolkit moderno di sviluppo web."
  }
}