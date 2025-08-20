export default {
  name: 'Visualizzatore di Nuvole di Punti LIDAR - Strumento online di visualizzazione 3D',
  description:
    'Visualizzatore LIDAR online gratuito che supporta i formati LAS, XYZ, PLY e PCD. Fornisce visualizzazione 3D, più modalità di colorazione, navigazione interattiva e funzioni di analisi dei dati',
  inputTitle: 'File di nuvola di punti in ingresso',
  outputTitle: 'Vista 3D della nuvola di punti',
  dragTip: 'Trascina qui un file di nuvola di punti oppure fai clic per caricarlo',
  supported: 'Formati supportati: LAS, XYZ, PLY, PCD, TXT',
  loadFromUrl: 'Carica da URL',
  load: 'Carica',
  loadSample: 'Carica dati di esempio',
  coloringMode: 'Modalità di colorazione',
  elevation: 'Colorazione per elevazione',
  intensity: 'Colorazione per intensità',
  classification: 'Colorazione per classificazione',
  rgb: 'Colorazione RGB',
  pointSize: 'Dimensione dei punti',
  pointDensity: 'Densità dei punti',
  enableAnimation: 'Abilita animazione',
  showTrajectory: 'Mostra traiettoria',
  showSensorData: 'Mostra dati del sensore',
  fileInfo: 'Informazioni file',
  fileName: 'Nome file',
  pointCount: 'Numero di punti',
  fileSize: 'Dimensione file',
  bounds: 'Limiti',
  resetView: 'Reimposta vista',
  exportImage: 'Esporta immagine',
  loading: 'Caricamento...',
  noData: 'Carica un file di nuvola di punti o dati di esempio',
  controls: {
    rotate: 'Trascinamento del mouse: ruota la vista',
    zoom: 'Rotella: zoom',
    pan: 'Shift+trascina: trascina la vista'
  },
  stats: {
    visible: 'Punti visibili',
    total: 'Punti totali',
    points: 'punti'
  },
  metadata: {
    title: 'Metadati LAS',
    systemId: 'Identificatore di sistema',
    software: 'Software di generazione',
    version: 'Versione LAS',
    creationDate: 'Data di creazione',
    pointFormat: 'Formato dei dati dei punti',
    vlrCount: 'Conteggio VLR',
    returnStats: 'Statistiche dei ritorni',
    extent: 'Estensione spaziale'
  },
  error: {
    loadFailed: 'Impossibile caricare il file di nuvola di punti. Verifica che il formato sia corretto',
    urlLoadFailed: "Impossibile caricare il file dall'URL. Verifica l'indirizzo"
  },
  disclaimer: {
    title: 'Note tecniche',
    content:
      'Questo strumento utilizza WebGL per realizzare la visualizzazione 3D delle nuvole di punti nel browser. Tutto il processamento dei dati avviene in locale per garantire la sicurezza dei dati.',
    formats:
      'Formati supportati: LAS (formato standard LIDAR), XYZ (nuvola di punti ASCII), PLY (Polygon File Format), PCD (Point Cloud Data)',
    performance:
      'Suggerimento prestazioni: i file di grandi dimensioni possono richiedere tempi di caricamento maggiori. Si consiglia un browser moderno per le migliori prestazioni.'
  }
};