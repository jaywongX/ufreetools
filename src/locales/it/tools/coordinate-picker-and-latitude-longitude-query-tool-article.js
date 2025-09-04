export default {
  title: 'Selettore di Coordinate e Strumento di Query Latitudine-Longitudine: Guida Online per Query Latitudine-Longitudine e Conversione Coordinate di Proiezione EPSG',
  functionTitle: 'Cos\'è il Selettore di Coordinate e Strumento di Query Latitudine-Longitudine? Quali sono le sue funzioni principali?',
  intro: 'Il <strong>Selettore di Coordinate e Strumento di Query Latitudine-Longitudine</strong> integra selezione punti cliccando sulla mappa, <strong>query latitudine-longitudine</strong>, <strong>conversione coordinate di proiezione EPSG</strong> e ricerca toponimi per completare rapidamente e accuratamente la selezione delle coordinate e l\'esportazione di formati coordinate. Attraverso questo strumento online, puoi convertire toponimi in coordinate nel browser e convertire WGS84 in varie coordinate di proiezione EPSG, migliorando significativamente l\'efficienza di annotazione topografica, analisi di posizione e cartografia.',
  useCasesTitle: 'Scenari di Applicazione Comuni: Problemi Risolti dal Selettore di Coordinate e Strumento di Query Latitudine-Longitudine',
  useCases: [
    'Selezione posizione e creazione punti check-in per nuovi media: selezione rapida latitudine-longitudine, esportazione per visualizzazione mappa',
    'Cartografia GIS e raccolta sul campo: selezione punti clic, esportazione CSV/GeoJSON, applicabile per importazione ArcGIS/QGIS',
    'Selezione posizione governativa e immobiliare: ricerca toponimi ← coordinate, raccolta one-click posizioni candidate',
    'Determinazione posizione logistica e servizi: registrazione coordinate multiple strutture/ordini di lavoro, esportazione batch',
    'Educazione e ricerca: dimostrazione differenze e conversioni tra WGS84 e coordinate di proiezione EPSG',
    'Turismo e navigazione outdoor: salvataggio latitudine-longitudine e coordinate di proiezione di attrazioni turistiche e campeggi',
    'Sviluppo e test: campioni precisi latitudine-longitudine necessari per integrazione frontend/backend',
    'Annotazione contenuti multi-regionali: file coordinate formato unificato, utile per integrazione dati inter-regionali'
  ],
  tipTitle: 'Suggerimento Esperto:',
  tipContent: 'Si raccomanda di includere i campi name, lat, lon, epsg, x, y, time nell\'esportazione CSV, adatto per elaborazione batch e tracciamento in QGIS/Excel.',
  conclusion: 'Questo <strong>Selettore di Coordinate e Strumento di Query Latitudine-Longitudine</strong> è progettato per vari scenari come topografia, visualizzazione, sviluppo e servizi, supportando <strong>conversione coordinate di proiezione EPSG</strong>, ricerca toponimi ed esportazione batch. Completando query latitudine-longitudine online e conversione coordinate, può ridurre significativamente i costi di installazione software e migliorare l\'efficienza di collaborazione.',
  faqTitle: 'Domande Frequenti (FAQ)',
  faqs: [
    {
      question: 'Quali conversioni coordinate di proiezione EPSG supporta il Selettore di Coordinate e Strumento di Query Latitudine-Longitudine?',
      answer: 'Questo strumento fornisce conversioni unificate per WGS84 (EPSG:4326), Web Mercator (EPSG:3857), CGCS2000 (EPSG:4490) e supporta anche l\'input di definizioni PROJ4 personalizzate. Cliccando sulla mappa, vengono visualizzate simultaneamente la latitudine-longitudine selezionata e le coordinate di proiezione EPSG.'
    },
    {
      question: 'Come convertire rapidamente toponimi in coordinate latitudine-longitudine e visualizzarli sulla mappa?',
      answer: 'Inserisci il toponimo nella casella di ricerca, quindi usa la funzione ricerca toponimi ← coordinate per ottenere risultati Nominatim, seleziona candidati per posizionamento e aggiunta marker, poi esporta in CSV o GeoJSON.'
    },
    {
      question: 'Come copiare risultati query latitudine-longitudine o esportare file coordinate in batch?',
      answer: 'L\'area risultati a destra supporta la copia one-click del testo coordinate completo e può esportare file in formato CSV o GeoJSON, compatibili con la maggior parte delle piattaforme GIS/visualizzazione.'
    },
    {
      question: 'Il selettore di coordinate supporta dispositivi mobili e tablet?',
      answer: 'Sì, l\'interfaccia utilizza griglia responsiva e le operazioni di <strong>query latitudine-longitudine</strong>, marcatura ed esportazione funzionano senza problemi su telefoni e tablet.'
    },
    {
      question: 'Quali precauzioni prendere quando si usa la conversione coordinate di proiezione EPSG?',
      answer: 'Diversi sistemi EPSG hanno differenze in datum e proiezioni. Se il sistema di coordinate target non è unificato, fornire la definizione PROJ4 corretta e verificare le unità prima della conversione (latitudine-longitudine in gradi, proiezioni generalmente in metri).'
    }
  ],
  tutorialTitle: 'Come Usare il Selettore di Coordinate e Strumento di Query Latitudine-Longitudine: Passaggi Operativi Dettagliati',
  steps: [
    {
      title: 'Aprire lo Strumento e Caricare la Mappa',
      description: 'Entrando nella pagina dello strumento, la mappa si caricherà automaticamente. Se la rete è limitata, verificare l\'accesso alla rete esterna o cambiare ambiente di rete per garantire la disponibilità della mappa base e della ricerca toponimi.',
      note: 'Il sistema di coordinate predefinito della mappa è WGS84, con unità latitudine-longitudine in gradi.'
    },
    {
      title: 'Ricerca Toponimi e Posizionamento',
      description: 'Inserisci il toponimo nella casella di ricerca (supporto multilingue), clicca "Cerca", poi seleziona la posizione target dai candidati per centrarla sulla mappa.',
      note: 'I candidati sono forniti da OpenStreetMap Nominatim.'
    },
    {
      title: 'Selezione Latitudine-Longitudine Cliccando sulla Mappa',
      description: 'Clicca ovunque sulla mappa per registrare automaticamente la latitudine-longitudine selezionata e le coordinate di proiezione EPSG, visualizzate nell\'elenco risultati coordinate a destra.',
      note: 'Supporta clic multipli per marcare più punti.'
    },
    {
      title: 'Cambiare o Regolare Proiezione EPSG',
      description: 'Seleziona sistemi di coordinate comuni (4326/3857/4490) a sinistra o inserisci definizioni PROJ4 personalizzate, lo strumento convertirà immediatamente le coordinate di proiezione per applicarle alla prossima selezione punti.',
      note: 'Il cambio sistema di coordinate non modifica la latitudine-longitudine dei punti esistenti, influenza solo il campo coordinate di proiezione.'
    },
    {
      title: 'Copiare o Esportare Coordinate',
      description: 'Seleziona il formato di esportazione (CSV o GeoJSON) e clicca "Copia Tutto" o "Esporta File" per usare le coordinate in lavori GIS/visualizzazione/sviluppo.',
      note: 'CSV è adatto per elaborazione batch in Excel/QGIS, GeoJSON è adatto per mappe web e uso API.'
    },
    {
      title: 'Eliminare o Continuare Marcatura',
      description: 'Se devi ricominciare, clicca "Elimina Marker". Poi continua ricerca o selezione punti per completare gradualmente l\'elenco coordinate.',
      note: 'Non dimenticare di cambiare il sistema di coordinate EPSG tempestivamente secondo diverse esigenze di progetto.'
    }
  ],
  successTitle: 'Congratulazioni!',
  successContent: 'Hai imparato come usare il Selettore di Coordinate e Strumento di Query Latitudine-Longitudine per completare raccolta coordinate e conversione coordinate di proiezione EPSG, generando efficientemente file dati standard per GIS e visualizzazione.',
  relatedToolsTitle: 'Strumenti Correlati che Potrebbero Interessarti',
  relatedTools: [
    {
      name: 'Convertitore Sistema di Coordinate',
      description: 'Conversione coordinate geografiche tra vari sistemi di coordinate inclusi WGS-84, GCJ-02, BD-09, Web Mercator, UTM',
      url: 'https://www.ufreetools.com/tool/coordinate-converter'
    },
    {
      name: 'Riproduzione Traccia GPS',
      description: 'Visualizzazione e riproduzione tracce GPS di vari formati file (GPX, KML, GeoJSON, CSV)',
      url: 'https://www.ufreetools.com/tool/gps-track-replay'
    },
    {
      name: 'Trasformazione Diretta e Inversa Proiezione Gauss',
      description: 'Strumento di conversione reciproca tra coordinate di proiezione Gauss e coordinate geografiche (latitudine-longitudine)',
      url: 'https://www.ufreetools.com/tool/gaussian-projection'
    },
    {
      name: 'Visualizzatore Nuvola Punti LIDAR',
      description: 'Visualizzatore gratuito online nuvola punti LIDAR, supporta formati LAS, XYZ, PLY, PCD. Fornisce visualizzazione 3D, modalità colori multipli, navigazione interattiva e funzioni analisi dati',
      url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
    }
  ],
  referencesTitle: 'Riferimenti',
  references: [
    {
      name: 'OpenStreetMap Nominatim',
      description: 'Servizio ricerca toponimi e geocodifica',
      url: 'https://nominatim.org/'
    },
    {
      name: 'EPSG.io',
      description: 'Ricerca sistema di riferimento coordinate EPSG e definizioni PROJ4',
      url: 'https://epsg.io/'
    },
    {
      name: 'Documentazione Leaflet',
      description: 'Libreria mappa web leggera',
      url: 'https://leafletjs.com/'
    },
    {
      name: 'Documentazione Proj4',
      description: 'Documentazione libreria conversione coordinate',
      url: 'https://proj.org/apps/proj.html'
    }
  ]
}