export default {
  title: 'Visualizzatore LIDAR Online - Strumento gratuito di visualizzazione 3D delle nuvole di punti',
  functionTitle: 'Funzionalità dello strumento e casi d’uso',
  intro:
    'Il nostro <strong>visualizzatore di nuvole di punti LIDAR online</strong> è uno strumento professionale di visualizzazione 3D che supporta la consultazione e l’analisi di più formati direttamente nel browser. Questo <strong>visualizzatore gratuito</strong> è basato su WebGL, non richiede installazione e offre rendering 3D di alta qualità. Che tu sia un ingegnere topografo, un architetto o uno specialista GIS, questo <strong>visualizzatore di dati LIDAR</strong> soddisfa le tue esigenze professionali.',
  useCasesTitle: 'Principali casi d’uso',
  useCases: [
    'Topografia e mappatura: visualizzazione e analisi dei dati LiDAR per rilievi del terreno e degli edifici',
    'Progettazione architettonica: visualizzare nuvole di punti degli edifici a supporto dei flussi di lavoro BIM',
    'Pianificazione urbana: analizzare modelli 3D della città per supportare smart city e decisioni operative',
    'Selvicoltura: elaborare nuvole di punti forestali per valutare copertura vegetale e biomassa',
    'Archeologia: consultare scansioni 3D di siti archeologici per conservazione e ricerca',
    'Esplorazione geologica: analizzare nuvole di punti di strutture geologiche per prospezione e valutazione dei rischi',
    'Guida autonoma: visualizzare dati LiDAR di bordo per pianificazione del percorso e rilevamento ostacoli',
    'Ispezione industriale: analizzare scansioni 3D di impianti per controllo qualità e individuazione difetti'
  ],
  tipTitle: 'Suggerimento professionale',
  tipContent:
    'Il visualizzatore supporta i formati più diffusi (LAS, XYZ, PLY, PCD) e offre più modalità di colorazione e controlli interattivi, così puoi analizzare i dati da prospettive diverse.',
  conclusion:
    'Con il nostro <strong>strumento online di visualizzazione delle nuvole di punti</strong> puoi eseguire rapidamente anteprima e analisi di dataset LIDAR, aumentando la produttività. Questo <strong>visualizzatore 3D</strong> è completamente gratuito e tutela la privacy: tutta l’elaborazione avviene in locale nel tuo browser.',
  faqTitle: 'Domande frequenti (FAQ)',
  faqs: [
    {
      question: 'Quali formati di file supporta questo visualizzatore LIDAR?',
      answer:
        'Il nostro <strong>visualizzatore di nuvole di punti</strong> supporta formati principali come LAS (standard LIDAR), XYZ (nuvola di punti ASCII), PLY (Polygon File Format), PCD (Point Cloud Data) e TXT. Questi coprono la maggior parte degli scenari di <strong>elaborazione dati LIDAR</strong> e scansione 3D.'
    },
    {
      question: 'Esiste un limite di dimensione per i file di nuvole di punti?',
      answer:
        'Per garantire buone prestazioni, consigliamo <strong>file di nuvole di punti</strong> inferiori a 100 MB. Per dataset molto grandi valuta il downsampling o la suddivisione a tasselli. Il nostro <strong>visualizzatore online</strong> ottimizza automaticamente il rendering per una visualizzazione 3D fluida.'
    },
    {
      question: 'Come posso regolare la visualizzazione della nuvola di punti?',
      answer:
        'Lo <strong>strumento di visualizzazione 3D</strong> consente di regolare la dimensione dei punti, scegliere la modalità di colorazione (elevazione, intensità, classificazione, RGB), controllare la densità dei punti e abilitare l’animazione. Queste opzioni aiutano ad analizzare meglio i <strong>dati di scansione LiDAR</strong>.'
    },
    {
      question: 'I miei dati sono al sicuro?',
      answer:
        'Sì. Il <strong>visualizzatore LIDAR online</strong> elabora tutto in locale: i tuoi <strong>dati della nuvola di punti</strong> non vengono inviati a server. Parsing, rendering e analisi avvengono nel browser, garantendo privacy e sicurezza, fondamentali per progetti sensibili e commerciali.'
    },
    {
      question: 'Posso esportare immagini del risultato?',
      answer:
        'Sì. Lo <strong>strumento di visualizzazione</strong> permette di esportare la vista corrente come immagine PNG di alta qualità. Puoi salvare catture da angolazioni e modalità di colorazione differenti per report, presentazioni o ulteriori <strong>analisi dei dati</strong>.'
    }
  ],
  tutorialTitle: 'Guida operativa',
  steps: [
    {
      title: 'Scegli il file della nuvola di punti',
      description:
        'Fai clic su “Seleziona file” o trascina il tuo <strong>file di nuvola di punti LIDAR</strong> nell’area di upload. Formati <strong>3D</strong> supportati: LAS, XYZ, PLY, PCD, TXT.',
      note: 'Per prestazioni ottimali si consigliano file inferiori a 100 MB'
    },
    {
      title: 'Attendi il parsing',
      description:
        'Il sistema analizzerà il tuo <strong>file di nuvola di punti</strong>, mostrando avanzamento e informazioni sul file. Al termine, i dati verranno caricati automaticamente nel visualizzatore 3D.',
      note: 'I tempi dipendono da dimensione e complessità del file'
    },
    {
      title: 'Controlli di navigazione 3D',
      description:
        'Usa il mouse per la navigazione 3D: <strong>trascina con il tasto sinistro</strong> per ruotare, <strong>tasto destro</strong> per spostare, <strong>rotella</strong> per zoom. Questi controlli intuitivi permettono di osservare i <strong>dati</strong> da ogni angolazione.',
      note: 'Su dispositivi mobili sono supportate le gesture touch'
    },
    {
      title: 'Regola le impostazioni di visualizzazione',
      description:
        'Dal pannello di destra imposta: modalità di colorazione (elevazione, intensità, classificazione, RGB), dimensione e densità dei punti e animazione. Queste impostazioni aiutano ad analizzare in modo efficiente i <strong>dati LIDAR</strong>.',
      note: 'Modalità di colorazione diverse si adattano a differenti esigenze di analisi'
    },
    {
      title: 'Consulta le statistiche',
      description:
        'Nel pannello informazioni trovi le <strong>statistiche della nuvola di punti</strong>: numero totale di punti, intervallo di coordinate e formato del file. Dati utili per la <strong>valutazione della qualità</strong>.',
      note: 'Le statistiche si aggiornano in tempo reale'
    },
    {
      title: 'Esporta i risultati',
      description:
        'Quando sei soddisfatto, fai clic su “Esporta immagine” per salvare la <strong>visualizzazione 3D</strong> in PNG per report o analisi successive.',
      note: 'L’immagine esportata mantiene vista e impostazioni correnti'
    }
  ],
  successTitle: 'Tutto pronto!',
  successContent:
    'Ottimo! Ora sai utilizzare il Visualizzatore LIDAR per una visualizzazione e un’analisi 3D efficienti.',
  relatedToolsTitle: 'Strumenti correlati',
  relatedTools: [
    {
      name: 'Convertitore di coordinate',
      description:
        'Converti coordinate geografiche tra WGS-84, GCJ-02, BD-09, Web Mercator e UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Riproduzione tracce GPS',
      description:
        'Visualizza e riproduci tracce GPS da vari formati (GPX, KML, GeoJSON, CSV).',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Proiezione di Gauss',
      description:
        'Conversione tra coordinate di proiezione di Gauss e coordinate geografiche (latitudine/longitudine)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    }
  ],
  referencesTitle: 'Riferimenti',
  references: [
    {
      name: 'Specifiche del formato ASPRS LAS',
      description: 'Standard ufficiale LAS della American Society for Photogrammetry and Remote Sensing',
      url: 'https://www.asprs.org/divisions-committees/lidar-division/laser-las-file-format-exchange-activities'
    },
    {
      name: 'Documentazione ufficiale WebGL',
      description: 'Documentazione e best practice della Web Graphics Library',
      url: 'https://www.khronos.org/webgl/'
    },
    {
      name: 'Point Cloud Library (PCL)',
      description: 'Documentazione e tutorial ufficiali della libreria open source per l’elaborazione di nuvole di punti',
      url: 'https://pointclouds.org/'
    }
  ]
};