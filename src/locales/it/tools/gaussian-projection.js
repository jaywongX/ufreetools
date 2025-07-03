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
  currentPoint: 'Risultato corrente',
  article: {
    title: "Calcolatore proiezione Gaussiana: strumento per conversione coordinate geografiche/piane",
    introTitle: "Cos'è la proiezione Gaussiana e perché serve questo strumento",
    introPara1: "Il <strong>calcolatore proiezione Gaussiana</strong> (nota anche come proiezione trasversa di Mercatore) è uno strumento essenziale per ingegneri topografi, cartografi, professionisti GIS e chiunque lavori con sistemi informativi geografici. Questo potente strumento di conversione coordinate permette di convertire agevolmente tra coordinate geografiche (latitudine/longitudine) e coordinate cartesiane piane (X e Y) usando il metodo di proiezione Gaussiana.",
    introPara2: "Il nostro <strong>strumento conversione proiezione Gaussiana</strong> gestisce con alta precisione sia le trasformazioni dirette (geografiche→piane) che inverse (piane→geografiche). Supporta vari modelli ellissoidali tra cui WGS84, CGCS2000, Krasovsky (Pechino54) e altri. Lo strumento applica automaticamente le appropriate formule matematiche e termini correttivi, garantendo conversioni coordinate accurate per i vostri progetti di misurazione e cartografia.",
    
    scenariosTitle: "Scenari pratici per calcoli proiezione Gaussiana",
    scenario1: "<strong>Topografia e gestione territoriale:</strong> I topografi usano la conversione Gaussiana per trasformare coordinate GPS in sistemi di coordinate locali piane, per misurazioni territoriali accurate, delimitazione confini proprietà e pianificazione edilizia.",
    scenario2: "<strong>Cartografia topografica:</strong> Cartografi e professionisti cartografici si affidano alla proiezione Gaussiana per creare mappe topografiche precise, mantenendo relazioni angolari e minimizzando deformazioni in aree specifiche.",
    scenario3: "<strong>Integrazione dati GIS:</strong> Analisti GIS usano calcoli Gaussiani per integrare dati da diverse fonti con sistemi di coordinate differenti in un quadro di riferimento unificato per analisi spaziali.",
    scenario4: "<strong>Progetti ingegneristici:</strong> Ingegneri civili e team edili adottano la proiezione Gaussiana per progettare infrastrutture, garantendo il posizionamento preciso di strade, ponti, gallerie e servizi rispetto a caratteristiche esistenti.",
    scenario5: "<strong>Applicazioni militari:</strong> Operazioni militari utilizzano coordinate Gaussiane per pianificazione tattica, navigazione e puntamento, dove è richiesta precisione assoluta.",
    scenariosConclusion: "La versatilità dei <strong>calcoli proiezione Gaussiana</strong> li rende indispensabili in molti campi professionali che richiedono posizionamento spaziale preciso. Il nostro strumento semplifica questo complesso processo matematico in un'interfaccia intuitiva, adatta sia a professionisti che a principianti.",
    
    faqTitle: "Domande frequenti sulla proiezione Gaussiana",
    faq1q: "Qual è la differenza tra proiezione Gaussiana e UTM?",
    faq1a: "La proiezione Gaussiana è la base matematica del sistema UTM (Universal Transverse Mercator). Le principali differenze sono:<ul><li>UTM usa un sistema standardizzato di zone, con zone di 6° e parametri specifici globali</li><li>La proiezione Gaussiana è più flessibile, permettendo meridiani centrali e ampiezze di zona personalizzate (3° o 6°)</li><li>UTM include uno spostamento fittizio standard di 500.000m a est e un fattore di scala 0.9996</li><li>Il nostro <strong>calcolatore proiezione Gaussiana</strong> offre più opzioni di personalizzazione dei parametri ellissoidali rispetto ai tipici calcolatori UTM</li></ul>",
    
    faq2q: "Quale modello ellissoidale devo scegliere per i calcoli Gaussiani?",
    faq2a: "La scelta dell'ellissoide dipende dalla vostra area geografica e dallo standard di sistema di coordinate usato:<ul><li><strong>WGS84:</strong> Standard globale usato con sistemi GPS e cartografia internazionale</li><li><strong>CGCS2000:</strong> Sistema ufficiale cinese dal 2000</li><li><strong>Krasovsky/Pechino54:</strong> Storicamente usato in Cina e parti dell'Europa orientale</li><li><strong>Xi'an80:</strong> Standard nazionale cinese precedente al CGCS2000</li></ul>Per la maggior parte delle applicazioni moderne, si raccomanda WGS84 o CGCS2000, a meno che non si lavori specificamente con dati legacy che richiedono un ellissoide diverso. Il nostro <strong>strumento conversione Gaussiana</strong> supporta tutti questi modelli e altri.",
    
    faq3q: "Qual è la precisione dei calcoli Gaussiani offerti da questo strumento?",
    faq3a: "Il nostro <strong>calcolatore proiezione Gaussiana</strong> implementa il modello matematico completo includendo i necessari termini correttivi, garantendo alta precisione. Per la maggior parte delle applicazioni pratiche, lo strumento raggiunge precisione sub-millimetrica, superando i requisiti tipici di progetti cartografici e topografici. La precisione dipende dalla corretta immissione dei parametri ellissoidali e dalla corretta specificazione della zona. Per lavori geodetici ad altissima precisione (requisiti sub-millimetrici), potrebbe essere necessario software specializzato con termini correttivi aggiuntivi.",
    
    faq4q: "Posso usare questo strumento Gaussiano per elaborazioni batch di coordinate?",
    faq4a: "Sì, il nostro <strong>convertitore proiezione Gaussiana</strong> include funzionalità complete di elaborazione batch. Potete:<ul><li>Inserire multiple coppie di coordinate (latitudine/longitudine o X/Y)</li><li>Caricare file CSV, TXT o Excel contenenti dati di coordinate</li><li>Elaborare centinaia o migliaia di punti simultaneamente</li><li>Esportare risultati in vari formati tra cui CSV, Excel, GeoJSON, KML e TXT</li></ul>Questo rende lo strumento ideale per progetti che coinvolgono grandi dataset, che sarebbero molto dispendiosi in termini di tempo se elaborati singolarmente.",
    
    faq5q: "Cosa sono le zone di 3° e 6° nella proiezione Gaussiana?",
    faq5a: "La proiezione Gaussiana divide la Terra in zone di longitudine per minimizzare deformazioni:<ul><li><strong>Zone 3°:</strong> Zone più strette offrono maggiore precisione e minori deformazioni, tipicamente usate per cartografia a grande scala e rilevamenti dettagliati. Numerazione zone da 1 a 120.</li><li><strong>Zone 6°:</strong> Zone più ampie coprono aree maggiori con lievemente più deformazione ai bordi, comunemente usate per cartografia regionale e coordinate UTM. Numerazione zone da 1 a 60.</li></ul>Il nostro <strong>strumento calcolo Gaussiano</strong> supporta entrambi i sistemi di zona e calcola automaticamente il meridiano centrale in base alla vostra scelta di zona.",
    
    tutorialTitle: "Guida passo-passo all'uso del calcolatore proiezione Gaussiana",
    forwardCalcTitle: "Trasformazione diretta (geografiche → piane)",
    step1: "<strong>Seleziona tipo calcolo:</strong> Scegli \"Diretta\" nelle opzioni tipo calcolo in cima allo strumento.",
    step2: "<strong>Seleziona parametri ellissoide:</strong> Dal menu a discesa, scegli il tipo di ellissoide appropriato (WGS84, CGCS2000, Pechino54 ecc.) in base ai requisiti del vostro sistema di coordinate.",
    step3: "<strong>Configura parametri proiezione:</strong> Scegli zona di 3° o 6° e inserisci il numero di zona. Il meridiano centrale sarà calcolato automaticamente, oppure puoi inserirlo manualmente se necessario.",
    step4: "<strong>Inserisci coordinate geografiche:</strong> Inserisci latitudine e longitudine in formato decimale. Puoi anche usare il campo di input gradi/minuti/secondi per inserire la notazione tradizionale.",
    
    inverseCalcTitle: "Trasformazione inversa (piane → geografiche)",
    step5: "<strong>Seleziona tipo calcolo:</strong> Scegli \"Inversa\" come tipo di calcolo.",
    step6: "<strong>Configura ellissoide e proiezione:</strong> Seleziona gli stessi parametri ellissoidali e di proiezione usati dal sistema di coordinate originale.",
    step7: "<strong>Inserisci coordinate piane:</strong> Inserisci i valori X (nord) e Y (est) in metri.",
    step8: "<strong>Visualizza risultati:</strong> Le latitudini e longitudini calcolate saranno mostrate sia in formato decimale che gradi/minuti/secondi per riferimento.",
    
    batchTitle: "Elaborazione batch di multiple coordinate",
    step9: "<strong>Prepara dati:</strong> Formatta le coppie di coordinate, una per riga (per diretta: latitudine,longitudine; per inversa: X,Y). Puoi anche usare il pulsante \"Carica CSV\" per importare dati da file.",
    step10: "<strong>Elabora dati batch:</strong> Clicca \"Calcolo batch\" per convertire tutte le coordinate in una volta.",
    step11: "<strong>Esporta risultati:</strong> Usa i pulsanti \"Copia tutto\" o \"Scarica CSV\" per salvare i risultati convertiti e usarli in altre applicazioni.",
    
    tutorialConclusion: "Usando questo <strong>calcolatore proiezione Gaussiana</strong>, potete convertire rapidamente coordinate tra sistemi geografici e piani senza complessi calcoli manuali. L'interfaccia intuitiva dello strumento rende la conversione di coordinate a livello professionale accessibile a utenti di tutti i livelli.",
    
    relatedToolsTitle: "Strumenti correlati per coordinate",
    relatedTool1: "Convertitore di coordinate",
    relatedTool1Desc: "Converti tra diversi sistemi di coordinate, inclusi UTM, MGRS e varie griglie nazionali.",
    relatedTool2: "Riproduzione tracce GPS",
    relatedTool2Desc: "Visualizza e analizza tracce GPS con dati di coordinate su mappa interattiva.",
    
    referencesTitle: "Riferimenti tecnici e risorse",
    reference1: "World Geodetic System 1984 (WGS84) - National Geospatial-Intelligence Agency",
    reference2: "Transverse Mercator projection - Wikipedia",
    reference3: "State Plane Coordinate System of 1983 - National Geodetic Survey"
  },
}