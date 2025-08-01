export default {
    name: 'Analizzatore di Foto Profilo AI - Strumento di Analisi Ritratti Professionali',
    description: 'Strumento online gratuito per analizzare le tue foto profilo e ritratti. Ottieni feedback basati su AI sulla posizione della testa, sorriso, contatto visivo e qualità dell\'illuminazione per migliorare le tue foto professionali.',
    inputTitle: 'Carica Foto',
    outputTitle: 'Risultati dell\'Analisi',
    dragTip: 'Trascina e rilascia le foto qui o clicca per caricare',
    supported: 'Formati supportati: PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Analizza Foto',
    downloadBtn: 'Scarica',
    noOutput: 'Ancora nessuna foto analizzata',
    loadSample: 'Carica Foto di Esempio',
    preview: 'Anteprima Foto',
    clearAll: 'Cancella Tutto',
    originalImage: 'Foto Originale',
    deleteImage: 'Elimina Foto',
    batchDownload: 'Download in Batch (ZIP)',
    exportFormat: 'Formato di Esportazione',
    imageQuality: 'Qualità Immagine',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Riduci',
    resetView: 'Reimposta Vista',
    fullscreen: 'Anteprima a Schermo Intero',
    analysisResults: 'Risultati dell\'Analisi',
    overallScore: 'Punteggio Complessivo',
    headPosition: 'Posizione della Testa',
    smileDetection: 'Rilevamento Sorriso',
    eyeContact: 'Contatto Visivo',
    lightingQuality: 'Qualità dell\'Illuminazione',
    recommendations: 'Raccomandazioni',
    noFaceDetected: 'Nessun volto rilevato in questa immagine. Carica una foto chiara con un volto visibile.',
    disclaimer: 'Disclaimer',
    disclaimerText: 'Questo strumento utilizza l\'AI per analizzare le foto profilo. I risultati sono solo a scopo di riferimento e possono variare in base alla qualità dell\'immagine e alle condizioni di illuminazione. Tutta l\'elaborazione viene eseguita nel tuo browser e le tue foto non vengono caricate su alcun server.',
    modelInfo: 'Alimentato da face-api.js, un\'API JavaScript open-source per il rilevamento e il riconoscimento facciale nel browser.',
    
    positions: {
        straight: 'Dritta',
        slightlyTilted: 'Leggermente Inclinata',
        tilted: 'Inclinata',
        unknown: 'Sconosciuta'
    },
    
    tips: {
        headStraight: 'Ottimo! La tua testa è posizionata dritta, il che è ideale per foto professionali.',
        headSlightlyTilted: 'La tua testa è leggermente inclinata. Una posizione più dritta potrebbe sembrare più professionale.',
        headTilted: 'La tua testa è visibilmente inclinata. Cerca di mantenere la testa dritta per foto professionali.',
        
        smileLow: 'Prova a sorridere più naturalmente per apparire accessibile e sicuro di te.',
        smileMedium: 'Il tuo sorriso potrebbe essere più coinvolgente. Prova un sorriso naturale e rilassato.',
        smileGood: 'Buon sorriso! Appari accessibile e professionale.',
        smileExcellent: 'Eccellente sorriso! Appari molto accessibile e sicuro di te.',
        
        eyeContactLow: 'Prova a guardare direttamente la fotocamera per un migliore contatto visivo.',
        eyeContactMedium: 'Il tuo contatto visivo potrebbe essere migliorato. Guarda direttamente l\'obiettivo della fotocamera.',
        eyeContactGood: 'Buon contatto visivo. Appari coinvolto e attento.',
        eyeContactExcellent: 'Eccellente contatto visivo. Appari sicuro di te e coinvolto.',
        
        lightingLow: 'L\'illuminazione è troppo scura o irregolare. Prova a scattare foto in condizioni di illuminazione migliori.',
        lightingMedium: 'L\'illuminazione potrebbe essere migliorata. La luce naturale e diffusa funziona meglio.',
        lightingGood: 'Buona illuminazione. Il tuo viso è ben illuminato e chiaramente visibile.',
        lightingExcellent: 'Eccellente illuminazione. Il tuo viso è perfettamente illuminato.'
    },
    
    recommendations: {
        title: 'Suggerimenti per Miglioramenti',
        improveHeadPosition: 'Mantieni la testa dritta e a livello con la fotocamera per un aspetto più professionale.',
        improveSmile: 'Prova un sorriso naturale che mostri sicurezza e accessibilità.',
        naturalSmile: 'Il tuo sorriso appare molto ampio - un sorriso leggermente più sottile potrebbe sembrare più professionale in alcuni contesti.',
        improveEyeContact: 'Guarda direttamente l\'obiettivo della fotocamera per stabilire un migliore contatto visivo.',
        improveLighting: 'Scatta foto in condizioni di illuminazione migliori - la luce naturale e diffusa frontale funziona meglio.',
        goodPhoto: 'Ottima foto! Soddisfa gli standard professionali per una foto profilo.'
    }
};