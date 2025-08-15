export default {
    name: 'Visualizzatore di Mappe Termiche Facciali IA',
    description: 'Utilizza l\'intelligenza artificiale per analizzare le caratteristiche facciali, generare mappe termiche e fornire suggerimenti per migliorare le foto. Basato sulla tecnologia di riconoscimento facciale per aiutare a ottimizzare l\'illuminazione e la composizione delle foto.',
    inputTitle: 'Immagine di input',
    outputTitle: 'Analisi della mappa termica',
    dragTip: 'Trascina e rilascia le immagini qui o clicca per caricare',
    supported: 'Formati supportati: PNG, JPEG, BMP, WEBP',
    processBtn: 'Genera mappa termica',
    downloadBtn: 'Scarica',
    noOutput: 'Nessuna immagine di output ancora',
    loadSample: 'Carica immagine di esempio',
    preview: 'Anteprima immagini',
    clearAll: 'Cancella tutto',
    originalImage: 'Immagine originale',
    deleteImage: 'Elimina immagine',
    batchDownload: 'Download in batch (ZIP)',
    exportFormat: 'Formato di esportazione',
    imageQuality: 'Qualità immagine',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    resetView: 'Reimposta vista',
    fullscreen: 'Anteprima a schermo intero',
    closePreview: 'Chiudi anteprima',
    analysisTitle: 'Risultati dell\'analisi',
    noFaceDetected: 'Nessun volto rilevato, prova a utilizzare una foto frontale più chiara',
    loadingModels: 'Caricamento dei modelli di riconoscimento facciale',
    loadingModelsTip: 'Il primo utilizzo richiede il download dei file del modello, attendere prego...',
    disclaimer: 'Questo strumento è solo per l\'analisi delle immagini e scopi educativi e non memorizza permanentemente le tue immagini',
    modelInfo: 'Utilizza la tecnologia di riconoscimento facciale fornita da face-api.js',
    
    // Impostazioni dei parametri
    paramSettings: 'Impostazioni parametri',
    heatmapIntensity: 'Intensità mappa termica',
    heatmapRadius: 'Dimensione punto caldo',
    colorScheme: 'Schema colori',
    showLandmarks: 'Mostra punti di riferimento',
    
    expressions: {
        neutral: 'Neutro',
        happy: 'Felice',
        sad: 'Triste',
        angry: 'Arrabbiato',
        fearful: 'Impaurito',
        disgusted: 'Disgustato',
        surprised: 'Sorpreso'
    },
    
    expressionDetected: 'Espressione rilevata: {expression}',
    
    lightingTips: {
        leftDark: 'Illuminazione insufficiente sul lato sinistro, prova ad aggiungere una fonte di luce a sinistra',
        rightDark: 'Illuminazione insufficiente sul lato destro, prova ad aggiungere una fonte di luce a destra',
        tooLow: 'Illuminazione generale insufficiente, considera di aggiungere luce ambientale o flash',
        tooHigh: 'Luce troppo forte, può causare sovraesposizione, considera di ridurre la fonte di luce o utilizzare luce morbida',
        good: 'Buona illuminazione, illuminazione facciale uniforme'
    },
    
    positionTips: {
        tooLeft: 'Posizione del viso troppo a sinistra, si suggerisce di spostarsi a destra',
        tooRight: 'Posizione del viso troppo a destra, si suggerisce di spostarsi a sinistra',
        tooHigh: 'Posizione del viso troppo alta, si suggerisce di spostarsi verso il basso',
        tooLow: 'Posizione del viso troppo bassa, si suggerisce di spostarsi verso l\'alto',
        tooSmall: 'Proporzione del viso nel frame troppo piccola, si suggerisce di avvicinarsi',
        tooBig: 'Proporzione del viso nel frame troppo grande, si suggerisce di aumentare la distanza di scatto'
    }
};