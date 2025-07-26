export default {
  name: 'Trasformazione Gaussiana Diretta e Inversa',
  title: 'Trasformazione Gaussiana Diretta e Inversa',
  description: 'Strumento per la conversione tra coordinate di proiezione Gaussiana e coordinate geografiche (latitudine/longitudine)',
  calculationType: 'Tipo di calcolo',
  forward: 'Diretta (lat/long → coordinate Gauss)',
  inverse: 'Inversa (coordinate Gauss → lat/long)',
  ellipsoidParameters: 'Parametri ellissoide',
  ellipsoidType: 'Tipo di ellissoide',
  centralMeridian: 'Meridiano centrale (gradi)',
  a: 'Semiasse maggiore',
  f: 'Schiacciamento',
  projectionParameters: 'Parametri zona proiezione',
  projectionType: 'Tipo di zona proiezione',
  '3degree': 'Zona 3 gradi',
  '6degree': 'Zona 6 gradi',
  zoneNumber: 'Numero zona',
  forwardInput: 'Inserisci latitudine/longitudine',
  latitude: 'Latitudine',
  longitude: 'Longitudine',
  inverseInput: 'Inserisci coordinate Gauss',
  x: 'Coordinata X (nord)',
  y: 'Coordinata Y (est)',
  calculate: 'Calcola',
  results: 'Risultati calcolo',
  dms: 'Formato gradi/minuti/secondi',
  batchProcessing: 'Elaborazione batch',
  inputFormat: 'Formato input',
  batchForwardFormat: 'Ogni riga una coppia lat/long, formato: latitudine,longitudine',
  batchInverseFormat: 'Ogni riga una coppia coord., formato: X,Y',
  processBatch: 'Calcolo batch',
  batchResults: 'Risultati batch',
  copyAll: 'Copia tutto',
  downloadCSV: 'Scarica CSV',
  copySuccess: 'Copia riuscita',
  copyFailed: 'Copia fallita',
  clear: 'Pulisci',
  formula: 'Spiegazione formule',
  mapView: 'Vista mappa',
  dmsInput: 'Input gradi/minuti/secondi',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: 'Analizza',
  dmsParseError: 'Errore analisi formato gradi/minuti/secondi',
  invalidLatitude: 'Latitudine non valida',
  invalidLongitude: 'Longitudine non valida',
  invalidX: 'Coordinata X non valida',
  invalidY: 'Coordinata Y non valida',
  copyToClipboard: 'Copia negli appunti',
  autoCalculate: 'Calcolo automatico',
  formulaExplanation: 'Spiegazione formule proiezione Gaussiana',
  uploadCSV: 'Carica CSV',
  exportResults: 'Esporta risultati',
  exportAsGeoJSON: 'Esporta come GeoJSON',
  exportAsKML: 'Esporta come KML',
  exportAsTXT: 'Esporta come TXT',
  mapLayers: 'Livelli mappa',
  standard: 'Standard',
  satellite: 'Satellite',
  terrain: 'Terreno',
  pointsOnMap: 'Punti sulla mappa',
  clearPoints: 'Cancella tutti i punti',
  unitSystem: 'Sistema di unità',
  metric: 'Metri (m)',
  imperial: 'Piedi (ft)',
  customEllipsoid: 'Ellissoide personalizzato',
  saveCustomEllipsoid: 'Salva ellissoide personalizzato',

  formulaContent: `
    <p>La proiezione Gaussiana utilizza le seguenti formule principali:</p>
    <h4>Trasformazione diretta (lat/long → coord. Gauss)</h4>
    <p>Converte coordinate geografiche in coordinate cartesiane piane:</p>
    <ul>
      <li>X = m + termini correttivi</li>
      <li>Y = ν·cos(B)·l + termini correttivi</li>
    </ul>
    <h4>Trasformazione inversa (coord. Gauss → lat/long)</h4>
    <p>Converte coordinate cartesiane piane in coordinate geografiche:</p>
    <ul>
      <li>B = μ + termini correttivi</li>
      <li>L = L₀₀ + termini correttivi</li>
    </ul>
    <p>Dove:</p>
    <ul>
      <li>B: latitudine</li>
      <li>L: longitudine</li>
      <li>L₀₀: meridiano centrale</li>
      <li>m: lunghezza arco meridiano</li>
      <li>ν: raggio di curvatura primo verticale</li>
    </ul>
  `,

  close: 'Chiudi',

  ellipsoids: {
    WGS84: 'Ellissoide WGS84',
    Krasovsky: 'Ellissoide Krasovsky',
    CGCS2000: 'Ellissoide CGCS2000',
    GRS80: 'Ellissoide GRS80',
    Beijing54: 'Ellissoide Pechino54',
    Xian80: 'Ellissoide Xi\'an80',
    Custom: 'Ellissoide personalizzato'
  },

  about: {
    title: 'Informazioni sulla proiezione Gaussiana',
    description: 'La proiezione Gaussiana (o proiezione di Gauss-Krüger) è una proiezione conforme cilindrica trasversa, ampiamente utilizzata in geodesia e cartografia. Proietta punti dalla superficie ellissoidale terrestre su un piano ed è comunemente usata per mappe topografiche a media e grande scala.',
    forwardTitle: 'Trasformazione diretta (lat/long → coord. Gauss)',
    forwardDescription: 'La trasformazione diretta converte coordinate geografiche (longitudine, latitudine) in coordinate cartesiane piane (X, Y). L\'asse X punta a nord, l\'asse Y a est, con origine all\'intersezione tra meridiano centrale ed equatore.',
    inverseTitle: 'Trasformazione inversa (coord. Gauss → lat/long)',
    inverseDescription: 'La trasformazione inversa converte coordinate cartesiane piane (X, Y) in coordinate geografiche (longitudine, latitudine), ed è l\'operazione inversa della trasformazione diretta.',
    parametersTitle: 'Spiegazione parametri',
    ellipsoidParam: 'Parametri ellissoide',
    ellipsoidDescription: 'Modello matematico che descrive la forma della Terra, diversi sistemi geodetici usano diversi parametri ellissoidali. I più comuni sono WGS84, Pechino54, Xi\'an80, CGCS2000 ecc.',
    projectionParam: 'Parametri zona proiezione',
    projectionDescription: 'La proiezione Gaussiana è tipicamente divisa in zone di 3° e 6°. Le zone di 3° sono usate per mappe topografiche a grande scala, quelle di 6° per mappe a media scala. Il numero di zona determina la posizione del meridiano centrale.'
  },

  loadExample: 'Carica esempio',
  customEllipsoidSaved: 'Ellissoide personalizzato salvato con successo',

  guide: {
    title: 'Guida operativa',
    forwardTitle: 'Trasformazione diretta (lat/long → coord. Gauss)',
    step1: 'Seleziona "Diretta" come tipo di calcolo nella parte superiore',
    step2: 'Scegli i parametri appropriati per ellissoide e zona proiezione',
    step3: 'Inserisci latitudine e longitudine in formato decimale (es. 39.9042, 116.4074) o usa l\'input gradi/minuti/secondi',
    step4: 'I risultati si aggiornano automaticamente, oppure clicca "Calcola" per eseguire il calcolo',
    
    inverseTitle: 'Trasformazione inversa (coord. Gauss → lat/long)',
    step5: 'Seleziona "Inversa" come tipo di calcolo nella parte superiore',
    step6: 'Inserisci le coordinate X e Y (in metri)',
    step7: 'Visualizza i risultati in formato decimale e gradi/minuti/secondi',
    
    batchTitle: 'Elaborazione batch',
    step8: 'Nella sezione batch inserisci più coppie di coordinate (una per riga)',
    step9: 'Clicca "Calcolo batch" per convertire tutte le coordinate in una volta',
    step10: 'Esporta i risultati in CSV o copiali negli appunti',
    
    mapTitle: 'Interazione con la mappa',
    step11: 'Clicca sulla mappa per aggiungere punti e popolare automaticamente i valori di input',
    step12: 'Usa il menu a tendina per cambiare i livelli della mappa',
    step13: 'Esporta i punti in formato GeoJSON, KML o TXT per usarli in altre applicazioni'
  },

  gaussianProjectionPoints: 'Punti proiezione Gaussiana',
  point: 'Punto',
  gaussianProjection: 'Proiezione Gaussiana',
  supportedFormats: 'Supportati: CSV, TXT, Excel',
  excelExportNotice: 'Esportazione Excel pronta, puoi aprire questo file direttamente in Excel.',
  excelProcessNotice: 'Elaborazione Excel non completamente supportata, si consiglia formato CSV per i migliori risultati.',
  exportAsCSV: 'Esporta come CSV',
  exportAsExcel: 'Esporta come Excel',
  excelExportSuccess: 'File Excel esportato con successo',
  excelExportFailed: 'Esportazione Excel fallita, è stato usato il formato CSV',
  excelImportSuccess: 'File Excel importato con successo',
  excelImportFailed: 'Importazione Excel fallita, prova con formato CSV',

  units: {
    metric: 'Metri (m)',
    km: 'Chilometri (km)',
    imperial: 'Piedi (ft)',
    miles: 'Miglia (mi)'
  },

  resetView: 'Ripristina vista mappa',
  pointsTotal: 'punti',
  currentPoint: 'Risultato corrente'
};