export default {
    name: 'KI-Gesichts-Heatmap-Visualisierer',
    description: 'Nutzen Sie künstliche Intelligenz zur Analyse von Gesichtsmerkmalen, Generierung von Heatmaps und Bereitstellung von Vorschlägen zur Fotoverbesserung. Basierend auf Gesichtserkennungstechnologie zur Optimierung von Beleuchtung und Bildkomposition.',
    inputTitle: 'Eingabebild',
    outputTitle: 'Heatmap-Analyse',
    dragTip: 'Bilder hierher ziehen oder klicken zum Hochladen',
    supported: 'Unterstützte Formate: PNG, JPEG, BMP, WEBP',
    processBtn: 'Heatmap generieren',
    downloadBtn: 'Herunterladen',
    noOutput: 'Noch keine Ausgabebilder',
    loadSample: 'Beispielbild laden',
    preview: 'Bildvorschau',
    clearAll: 'Alles löschen',
    originalImage: 'Originalbild',
    deleteImage: 'Bild löschen',
    batchDownload: 'Batch-Download (ZIP)',
    exportFormat: 'Exportformat',
    imageQuality: 'Bildqualität',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetView: 'Ansicht zurücksetzen',
    fullscreen: 'Vollbildvorschau',
    closePreview: 'Vorschau schließen',
    analysisTitle: 'Analyseergebnisse',
    noFaceDetected: 'Kein Gesicht erkannt, versuchen Sie ein klareres Frontalbild zu verwenden',
    loadingModels: 'Lade Gesichtserkennungsmodelle',
    loadingModelsTip: 'Die erste Nutzung erfordert das Herunterladen von Modelldateien, bitte warten...',
    disclaimer: 'Dieses Tool dient nur zur Bildanalyse und für Bildungszwecke und speichert Ihre Bilder nicht dauerhaft',
    modelInfo: 'Verwendet Gesichtserkennungstechnologie von face-api.js',
    
    // Parametereinstellungen
    paramSettings: 'Parametereinstellungen',
    heatmapIntensity: 'Heatmap-Intensität',
    heatmapRadius: 'Heatpoint-Größe',
    colorScheme: 'Farbschema',
    showLandmarks: 'Landmarken anzeigen',
    
    expressions: {
        neutral: 'Neutral',
        happy: 'Glücklich',
        sad: 'Traurig',
        angry: 'Wütend',
        fearful: 'Ängstlich',
        disgusted: 'Angewidert',
        surprised: 'Überrascht'
    },
    
    expressionDetected: 'Erkannter Ausdruck: {expression}',
    
    lightingTips: {
        leftDark: 'Unzureichende Beleuchtung auf der linken Seite, versuchen Sie eine Lichtquelle links hinzuzufügen',
        rightDark: 'Unzureichende Beleuchtung auf der rechten Seite, versuchen Sie eine Lichtquelle rechts hinzuzufügen',
        tooLow: 'Allgemeine Beleuchtung ist unzureichend, erwägen Sie Umgebungslicht oder Blitz hinzuzufügen',
        tooHigh: 'Licht ist zu stark, kann Überbelichtung verursachen, erwägen Sie die Lichtquelle zu reduzieren oder weiches Licht zu verwenden',
        good: 'Gute Beleuchtung, gleichmäßige Gesichtsausleuchtung'
    },
    
    positionTips: {
        tooLeft: 'Gesichtsposition zu weit links, Bewegung nach rechts wird empfohlen',
        tooRight: 'Gesichtsposition zu weit rechts, Bewegung nach links wird empfohlen',
        tooHigh: 'Gesichtsposition zu hoch, Bewegung nach unten wird empfohlen',
        tooLow: 'Gesichtsposition zu niedrig, Bewegung nach oben wird empfohlen',
        tooSmall: 'Gesichtsproportion im Rahmen zu klein, näher herangehen wird empfohlen',
        tooBig: 'Gesichtsproportion im Rahmen zu groß, Aufnahmeabstand erhöhen wird empfohlen'
    }
};