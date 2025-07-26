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
  }
};