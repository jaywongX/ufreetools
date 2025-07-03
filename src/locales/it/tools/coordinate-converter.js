export default {
  name: 'Convertitore di Sistemi di Coordinate',
  description: 'Converti coordinate geografiche tra diversi sistemi di riferimento, tra cui WGS-84, GCJ-02, BD-09, Web Mercator e UTM',
  title: 'Convertitore di Sistemi di Coordinate - Conversione tra WGS84, GCJ02, BD09 e altri sistemi',
  metaDescription: 'Convertitore online gratuito per trasformare coordinate tra i sistemi WGS-84, GCJ-02 (coordinate Marte), BD-09 (coordinate Baidu), Web Mercator e UTM. Nessuna installazione richiesta.',
  
  seo: {
    title: 'Strumento di Conversione Sistemi di Coordinate | Convertitore di Coordinate Geografiche',
    description: 'Strumento online gratuito per convertire coordinate tra diversi sistemi geografici come WGS-84, GCJ-02 (Cina), BD-09, Web Mercator e proiezione UTM.'
  },
  
  labels: {
    sourceSystem: 'Sistema di coordinate sorgente',
    targetSystem: 'Sistema di coordinate target',
    latitude: 'Latitudine',
    longitude: 'Longitudine',
    x: 'Coordinata X (Est)',
    y: 'Coordinata Y (Nord)',
    results: 'Risultati conversione',
    formatted: 'Coordinate formattate',
    mapPreview: 'Anteprima mappa',
    batchConversion: 'Conversione batch',
    batchInput: 'Inserisci coordinate (una coppia per riga)',
    inputFormat: 'Formato input',
    batchResults: 'Risultati conversione'
  },
  
  placeholders: {
    latitude: 'Inserisci latitudine (es: 39.909187)',
    longitude: 'Inserisci longitudine (es: 116.397451)',
    x: 'Inserisci coordinata X (es: 12959167.71)',
    y: 'Inserisci coordinata Y (es: 4825908.23)',
    batchInput: 'Inserisci coordinate, una coppia per riga\nEsempio:\n39.909187, 116.397451\n31.230416, 121.473701'
  },
  
  buttons: {
    convert: 'Converti coordinate',
    converting: 'Conversione in corso...',
    swap: 'Scambia sistemi',
    reset: 'Resetta',
    batchConvert: 'Conversione batch',
    batchConverting: 'Conversione batch in corso...',
    copyResults: 'Copia risultati',
    exportCsv: 'Esporta come CSV',
    loadExample: 'Carica esempio',
    loadBatchExample: 'Carica esempio batch'
  },
  
  formats: {
    latlon: 'Latitudine Longitudine (spazio separato)',
    lonlat: 'Longitudine Latitudine (spazio separato)',
    latlon_comma: 'Latitudine, Longitudine (virgola separata)',
    lonlat_comma: 'Longitudine, Latitudine (virgola separata)',
    latLng: '{lat}, {lng}',
    xy: '{x}, {y}'
  },
  
  messages: {
    copied: 'Copiato negli appunti',
    noCoordinates: 'Inserisci le coordinate da convertire',
    batchSuccess: 'Tutte le coordinate convertite con successo'
  },
  
  errors: {
    invalidCoordinates: 'Valori delle coordinate non validi',
    conversionFailed: 'Conversione fallita',
    copyFailed: 'Copia negli appunti fallita',
    invalidFormat: 'Formato coordinate non valido',
    batchFailed: 'Alcune conversioni batch sono fallite'
  },
  
  sections: {
    tips: {
      title: 'Suggerimenti conversione',
      item1: 'WGS-84 è lo standard globale usato da GPS e Google Maps fuori dalla Cina',
      item2: 'GCJ-02 è il sistema di coordinate richiesto per legge per le mappe in Cina continentale',
      item3: 'BD-09 è usato specificamente per i servizi Baidu Maps',
      item4: 'Web Mercator è utilizzato dalla maggior parte delle applicazioni web di mappe'
    },
    about: {
      title: 'Informazioni sui sistemi di coordinate',
      wgs84: 'WGS-84 (World Geodetic System 1984) è il sistema di riferimento usato dal GPS, standard internazionale per mappe e posizionamento.',
      gcj02: 'GCJ-02 è il sistema di coordinate ufficiale richiesto per legge in Cina continentale. Applica un algoritmo di offuscamento alle coordinate WGS-84 per ragioni di sicurezza.',
      bd09: 'BD-09 è il sistema usato da Baidu Maps e servizi correlati, applicando un\'ulteriore trasformazione alle coordinate GCJ-02.',
      webmercator: 'Web Mercator (EPSG:3857) è una proiezione cilindrica usata da molti servizi web di mappe. Rappresenta la Terra come piano con coordinate in metri, ideale per visualizzazione web.',
      utm: 'UTM (Universal Transverse Mercator) divide la Terra in 60 zone. Le coordinate sono espresse in metri come distanza est e nord rispetto all\'origine di ciascuna zona.',
      dms: 'Gradi, minuti e secondi (DMS) è il modo tradizionale di rappresentare coordinate geografiche, suddividendo in gradi (°), minuti (′) e secondi (″).',
      epsg3857: 'EPSG:3857 è l\'identificatore ufficiale della proiezione Web Mercator, usata dalle principali applicazioni web di mappe.',
      amap: 'Il sistema AMAP è identico a GCJ-02, richiesto dal governo cinese per le mappe in Cina continentale.',
      cgcs2000: 'CGCS2000 è il sistema geodetico nazionale cinese stabilito nel 2000, molto simile a WGS-84 con piccole differenze.',
      lambert: 'La proiezione conforme di Lambert preserva angoli e forme in piccole aree, usata per mappe di medie latitudini.',
      miller: 'La proiezione cilindrica di Miller è una variante di Mercator che riduce la distorsione ad alte latitudini.',
      polar: 'Le coordinate polari rappresentano posizioni come distanza da un polo e angolo da una direzione di riferimento.',
      dkk: 'La proiezione DKK (Delin-Kashi-Kunming) è una proiezione conica specifica per la Cina, usata in alcune mappe nazionali.'
    },
  },
  
  export: {
    filename: 'Conversione_Coordinate',
    originalLat: 'Latitudine originale',
    originalLng: 'Longitudine originale',
    convertedLat: 'Latitudine convertita',
    convertedLng: 'Longitudine convertita'
  },
  
  systems: {
    wgs84: {
      name: 'WGS-84 (Coordinate GPS)',
      description: 'Sistema geodetico mondiale 1984, usato da GPS e la maggior parte delle applicazioni internazionali'
    },
    gcj02: {
      name: 'GCJ-02 (Coordinate Marte)',
      description: 'Sistema richiesto in Cina. Applica un algoritmo di offuscamento alle coordinate WGS-84 per ragioni di sicurezza.'
    },
    bd09: {
      name: 'BD-09 (Coordinate Baidu)',
      description: 'Sistema usato da Baidu Maps, applica un\'ulteriore trasformazione alle coordinate GCJ-02.'
    },
    webmercator: {
      name: 'Web Mercator (EPSG:3857)',
      description: 'Proiezione cilindrica usata da molti servizi web di mappe. Coordinate in metri per visualizzazione web.'
    },
    utm: {
      name: 'UTM (Universal Transverse Mercator)',
      description: 'Divide la Terra in 60 zone. Coordinate in metri rispetto all\'origine di ciascuna zona.'
    },
    dms: {
      name: 'Gradi Minuti Secondi (DMS)',
    },
    epsg3857: {
      name: 'EPSG:3857',
    },
    amap: {
      name: 'Sistema AMAP',
    },
    cgcs2000: {
      name: 'Sistema Geodetico CGCS2000',
    },
    lambert: {
      name: 'Proiezione Lambert',
    },
    miller: {
      name: 'Proiezione Miller',
    },
    polar: {
      name: 'Coordinate Polari',
    },
    dkk: {
      name: 'Proiezione DKK',
    }
  },
  
  article: {
    title: "Strumento di Conversione Coordinate: Trasformazione precisa tra sistemi",
    introduction: "Il convertitore di sistemi di coordinate è uno strumento online avanzato progettato per trasformare coordinate geografiche tra diversi sistemi di riferimento. Che tu sia un professionista GIS, sviluppatore o analista di dati geografici, questo strumento semplifica la complessa conversione tra WGS-84 (standard GPS), GCJ-02 (standard cinese), BD-09 (Baidu Maps), Web Mercator e sistemi UTM.",
    
    whyNeeded: {
      title: "Perché è necessaria la conversione tra sistemi?",
      p1: "Quando si lavora con dati geospaziali da diverse fonti o regioni, la conversione tra sistemi di coordinate è essenziale. Diversi paesi e servizi cartografici usano sistemi diversi per ragioni legali, storiche o di sicurezza. Ad esempio, le mappe in Cina continentale richiedono per legge l'uso del sistema GCJ-02 invece dello standard globale WGS-84, mentre Baidu Maps usa il proprio sistema BD-09.",
      p2: "Senza un'appropriata conversione, mappe e dati di posizione potrebbero mostrare errori significativi - fino a centinaia di metri. Queste discrepanze possono causare seri problemi in applicazioni come navigazione, pianificazione urbana e servizi di emergenza. Il nostro strumento risolve questa criticità, garantendo accuratezza e consistenza dei dati tra diversi sistemi cartografici."
    },
    
    systems: {
      title: "Comprendere i diversi sistemi",
      
      wgs84: {
        title: "WGS-84 (Sistema Geodetico Mondiale)",
        description: "WGS-84 è il sistema di riferimento usato dai satelliti GPS e standard internazionale per mappe e posizionamento. È utilizzato da Google Maps al di fuori della Cina, OpenStreetMap e la maggior parte delle applicazioni internazionali. Le coordinate sono tipicamente espresse in gradi decimali di latitudine e longitudine. Come base del GPS, WGS-84 è fondamentale per lo scambio internazionale di dati geografici."
      },
      
      gcj02: {
        title: "GCJ-02 (Sistema ufficiale cinese)",
        description: "GCJ-02, noto come 'sistema Marte', è il sistema obbligatorio per legge in Cina continentale. Applica un algoritmo proprietario che introduce uno spostamento nelle coordinate WGS-84. È usato da AMap, Google Maps Cina, Apple Maps Cina e molte app cinesi. Per motivi di sicurezza nazionale, tutti i servizi cartografici in Cina devono usare legalmente questo sistema."
      },
      
      bd09: {
        title: "BD-09 (Sistema Baidu)",
        description: "BD-09 è il sistema proprietario di Baidu, usato specificamente per Baidu Maps e servizi correlati. Applica un'ulteriore trasformazione alle coordinate GCJ-02. Qualsiasi applicazione che interagisce con Baidu Maps deve usare questo sistema per un posizionamento accurato. Essendo uno dei principali servizi cartografici cinesi, è fondamentale comprendere e convertire correttamente le coordinate BD-09."
      },
      
      webmercator: {
        title: "Web Mercator (EPSG:3857)",
        description: "Web Mercator è una proiezione cartografica cilindrica usata da servizi come Google Maps e OpenStreetMap. Rappresenta la Terra come piano con coordinate in metri anziché gradi. Ottimizzata per visualizzazione web, introduce distorsioni a latitudini elevate. Per sviluppatori che creano applicazioni web con mappe, è essenziale comprendere questa proiezione e le relative conversioni."
      },
      
      utm: {
        title: "UTM (Universal Transverse Mercator)",
        description: "UTM divide il mondo in 60 zone di 6° di longitudine ciascuna. Le coordinate sono espresse in metri come distanza est e nord rispetto all'origine di ciascuna zona. Usato in topografia, applicazioni militari e sistemi GIS che preferiscono misurazioni metriche. In Cina, UTM è importante per rilevamenti professionali e progetti ingegneristici che richiedono calcoli precisi di distanza."
      }
    },
    
    useCases: {
      title: "Applicazioni pratiche della conversione",
      
      case1: {
        title: "Sviluppo applicazioni mobile",
        description: "Quando si sviluppano app basate sulla posizione per diversi paesi, gli sviluppatori devono considerare i requisiti locali dei sistemi di coordinate. Ad esempio, un'app di navigazione usata sia in Cina che internazionalmente deve convertire tra WGS-84 e GCJ-02 per mostrare posizioni accurate su mappe diverse. Questo è cruciale per e-commerce transfrontaliero, app di viaggio internazionali e piattaforme logistiche globali."
      },
      
      case2: {
        title: "Integrazione dati GIS",
        description: "I progetti GIS spesso combinano dati da fonti che usano sistemi diversi. Ad esempio, integrare immagini satellitari (tipicamente WGS-84) con dati di pianificazione urbana cinesi (GCJ-02) richiede conversione per un corretto allineamento spaziale. Nella costruzione di città intelligenti, monitoraggio ambientale e pianificazione regionale in Cina, questa conversione è un passaggio chiave."
      },
      
      case3: {
        title: "Navigazione transfrontaliera",
        description: "Le compagnie di trasporto che operano in aree di confine (specialmente intorno alla Cina) devono convertire coordinate quando attraversano regioni con standard cartografici diversi. Questo garantisce tracciamento accurato indipendentemente dalla posizione. Con l'iniziativa \"Belt and Road\", la necessità di conversione senza soluzione di continuità è in crescita."
      },
      
      case4: {
        title: "Visualizzazione dati cartografici",
        description: "Ricercatori che lavorano con dataset globali spesso devono convertire coordinate per visualizzazioni accurate su diverse piattaforme. Ad esempio, visualizzare dati su Baidu Maps richiede conversione da WGS-84 a BD-09, mentre su Google Maps serve WGS-84 originale. Questa capacità è particolarmente importante per progetti di ricerca internazionali in Cina."
      }
    },
    
    howToUse: {
      title: "Come usare lo strumento di conversione",
      introduction: "Il nostro strumento rende semplice la conversione tra sistemi. Ecco una guida passo-passo per un uso efficace:",
      
      step1: {
        title: "Seleziona i sistemi di coordinate",
        description: "Prima scegli il sistema sorgente (quello delle tue coordinate attuali) e il sistema target (quello desiderato) dai menu a discesa. Scelte comuni includono la conversione da WGS-84 di dispositivi GPS a GCJ-02 per mappe cinesi, o da GCJ-02 di AMap a BD-09 di Baidu Maps."
      },
      
      step2: {
        title: "Inserisci le coordinate",
        description: "Inserisci le coordinate nei campi appropriati. Per sistemi latitudine/longitudine (WGS-84, GCJ-02, BD-09), inserisci gradi decimali. Per sistemi proiettati (Web Mercator, UTM), inserisci valori in metri. Assicurati di seguire il formato corretto come suggerito dagli esempi: per la Città Proibita a Pechino in WGS-84: 39.916345, 116.397155."
      },
      
      step3: {
        title: "Converti le coordinate",
        description: "Clicca \"Converti coordinate\" per eseguire la conversione. I risultati mostreranno valori separati e stringhe formattate, copiabili con un clic. La precisione arriva a 6 decimali, sufficiente per la maggior parte delle applicazioni."
      },
      
      step4: {
        title: "Conversione batch (opzionale)",
        description: "Per più coppie di coordinate, usa la sezione conversione batch. Inserisci le coordinate (una coppia per riga), seleziona il formato e clicca \"Conversione batch\" per elaborarle tutte. Puoi poi esportare i risultati come file CSV per ulteriori analisi."
      },
      
      example: {
        title: "Esempio di conversione",
        description: "Conversione coordinate della Città Proibita:\n\n• WGS-84: 39.916345, 116.397155\n• A GCJ-02: 39.91748, 116.40382\n• A BD-09: 39.92373, 116.41029\n\nNota lo spostamento di centinaia di metri tra sistemi, che evidenzia l'importanza di usare il sistema corretto per applicazioni specifiche. In software di navigazione, questa differenza causerebbe errori evidenti."
      }
    },
    
    tips: {
      title: "Migliori pratiche per la conversione",
      tip1: "Verifica sempre il sistema sorgente prima della conversione per garantire accuratezza, specialmente con dati di terze parti.",
      tip2: "Per applicazioni in Cina continentale, ricorda che usare direttamente coordinate WGS-84 su mappe può causare errori di 100-500m, critici in navigazione e posizionamento preciso.",
      tip3: "Con dati vicini a confini (es. Hong Kong/Cina continentale), presta particolare attenzione al sistema usato. Queste aree sono spesso di transizione tra sistemi.",
      tip4: "Per applicazioni ad alta precisione, considera librerie di conversione più avanzate che tengono conto di parametri geodetici locali. In topografia e ingegneria può essere necessaria precisione al centimetro."
    },
    
    faq: {
      title: "Domande frequenti",
      q1: "Perché le mie coordinate GPS non corrispondono alle mappe cinesi?",
      a1: "I dispositivi GPS forniscono coordinate WGS-84, mentre le mappe cinesi usano per legge il sistema GCJ-02 con spostamenti intenzionali. Questo causa differenze tipiche di 100-500m. Il nostro strumento aiuta ad allineare i dati GPS con le mappe cinesi. Molti utenti incontrano questo problema usando dispositivi GPS internazionali in Cina.",
      
      q2: "Questa conversione è reversibile e senza perdita?",
      a2: "A causa della natura degli algoritmi di offuscamento, la conversione tra WGS-84 e GCJ-02/BD-09 non è perfettamente reversibile. Tuttavia, il nostro strumento implementa gli algoritmi più accurati disponibili, limitando l'errore a 1-2m in operazioni inverse. Per la maggior parte delle applicazioni commerciali, questa precisione è sufficiente.",
      
      q3: "Quale sistema dovrebbe usare la mia applicazione?",
      a3: "Dipende dal provider di mappe e regione: per applicazioni globali e servizi come Google Maps fuori dalla Cina, usa WGS-84; per AMap e Google Maps Cina, GCJ-02; per Baidu Maps, BD-09; per librerie web come Leaflet/OpenLayers, Web Mercator; per applicazioni che richiedono misurazioni metriche in aree specifiche, UTM. Questo è particolarmente importante sviluppando servizi basati sulla posizione per il mercato cinese.",
      
      q4: "Quanto sono accurate queste conversioni?",
      a4: "Le conversioni implementate sono basate sui migliori algoritmi pubblici disponibili, con accuratezza tipicamente entro 1-2m. Tuttavia, gli algoritmi originali di GCJ-02 e BD-09 sono proprietari, quindi potrebbero esserci piccole differenze rispetto alle conversioni ufficiali. Per applicazioni professionali che richiedono precisione al centimetro, potrebbero essere necessarie soluzioni GIS commerciali."
    },
    
    conclusion: {
      title: "Semplifica il tuo lavoro geospaziale con il nostro strumento",
      text: "La conversione tra sistemi di coordinate è un aspetto critico ma spesso trascurato del lavoro con dati geospaziali. Il nostro strumento online gratuito elimina la complessità di questo processo, permettendoti di convertire rapidamente e accuratamente tra WGS-84, GCJ-02, BD-09, Web Mercator e UTM. Che tu stia sviluppando applicazioni cartografiche, analizzando dati geografici o semplicemente tracciando punti precisi su mappe diverse, questo strumento offre una soluzione diretta ed efficace alle sfide dei sistemi di coordinate. Il convertitore ti permette di lavorare senza soluzione di continuità nel variegato panorama globale dei sistemi di informazione geografica."
    },
    
    relatedTools: {
      title: "Strumenti geospaziali correlati",
      tools: [
        {
          name: "Visualizzatore GeoJSON",
          description: "Visualizza e modifica file GeoJSON con il nostro strumento interattivo.",
          url: "https://www.ufreetools.com/tools/geojson-viewer"
        },
        {
          name: "Ricerca geolocalizzazione IP",
          description: "Trova la posizione geografica di indirizzi IP con il nostro strumento.",
          url: "https://www.ufreetools.com/tools/ip-lookup"
        }
      ]
    },
    
    externalLinks: {
      intro: "Approfondisci i sistemi di coordinate da queste fonti autorevoli:",
      wikipedia: "Wikipedia: Sistemi di coordinate geografiche",
      epsg: "Database EPSG di sistemi di coordinate"
    }
  }
};