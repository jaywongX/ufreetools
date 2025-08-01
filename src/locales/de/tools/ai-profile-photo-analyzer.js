export default {
    name: 'KI-Profilbild-Analysator - Professionelles Porträtanalyse-Tool',
    description: 'Kostenloses Online-Tool zur Analyse Ihrer Profilbilder und Porträts. Erhalten Sie KI-gestütztes Feedback zu Kopfposition, Lächeln, Blickkontakt und Beleuchtungsqualität, um Ihre professionellen Fotos zu verbessern.',
    inputTitle: 'Foto hochladen',
    outputTitle: 'Analyseergebnisse',
    dragTip: 'Fotos hierher ziehen oder klicken zum Hochladen',
    supported: 'Unterstützte Formate: PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Foto analysieren',
    downloadBtn: 'Herunterladen',
    noOutput: 'Noch keine analysierten Fotos',
    loadSample: 'Beispielfoto laden',
    preview: 'Fotos Vorschau',
    clearAll: 'Alles löschen',
    originalImage: 'Originalfoto',
    deleteImage: 'Foto löschen',
    batchDownload: 'Stapel-Download (ZIP)',
    exportFormat: 'Exportformat',
    imageQuality: 'Bildqualität',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetView: 'Ansicht zurücksetzen',
    fullscreen: 'Vollbild-Vorschau',
    analysisResults: 'Analyseergebnisse',
    overallScore: 'Gesamtbewertung',
    headPosition: 'Kopfposition',
    smileDetection: 'Lächeln-Erkennung',
    eyeContact: 'Blickkontakt',
    lightingQuality: 'Beleuchtungsqualität',
    recommendations: 'Empfehlungen',
    noFaceDetected: 'Kein Gesicht in diesem Bild erkannt. Bitte laden Sie ein klares Foto mit einem sichtbaren Gesicht hoch.',
    disclaimer: 'Haftungsausschluss',
    disclaimerText: 'Dieses Tool verwendet KI zur Analyse von Profilfotos. Die Ergebnisse dienen nur als Referenz und können je nach Bildqualität und Lichtverhältnissen variieren. Die gesamte Verarbeitung erfolgt in Ihrem Browser, und Ihre Fotos werden nicht auf einen Server hochgeladen.',
    modelInfo: 'Unterstützt durch face-api.js, eine Open-Source-JavaScript-API für Gesichtserkennung und -erkennung im Browser.',
    
    positions: {
        straight: 'Gerade',
        slightlyTilted: 'Leicht geneigt',
        tilted: 'Geneigt',
        unknown: 'Unbekannt'
    },
    
    tips: {
        headStraight: 'Großartig! Ihr Kopf ist gerade positioniert, was ideal für professionelle Fotos ist.',
        headSlightlyTilted: 'Ihr Kopf ist leicht geneigt. Eine geradere Position könnte professioneller aussehen.',
        headTilted: 'Ihr Kopf ist merklich geneigt. Versuchen Sie, Ihren Kopf für professionelle Fotos gerade zu halten.',
        
        smileLow: 'Versuchen Sie, natürlicher zu lächeln, um zugänglich und selbstbewusst zu wirken.',
        smileMedium: 'Ihr Lächeln könnte ansprechender sein. Versuchen Sie ein natürliches, entspanntes Lächeln.',
        smileGood: 'Gutes Lächeln! Sie wirken zugänglich und professionell.',
        smileExcellent: 'Ausgezeichnetes Lächeln! Sie wirken sehr zugänglich und selbstbewusst.',
        
        eyeContactLow: 'Versuchen Sie, direkt in die Kamera zu schauen, für besseren Blickkontakt.',
        eyeContactMedium: 'Ihr Blickkontakt könnte verbessert werden. Schauen Sie direkt in das Kameraobjektiv.',
        eyeContactGood: 'Guter Blickkontakt. Sie wirken engagiert und aufmerksam.',
        eyeContactExcellent: 'Ausgezeichneter Blickkontakt. Sie wirken selbstbewusst und engagiert.',
        
        lightingLow: 'Die Beleuchtung ist zu dunkel oder ungleichmäßig. Versuchen Sie, Fotos unter besseren Lichtverhältnissen aufzunehmen.',
        lightingMedium: 'Die Beleuchtung könnte verbessert werden. Natürliches, diffuses Licht funktioniert am besten.',
        lightingGood: 'Gute Beleuchtung. Ihr Gesicht ist gut ausgeleuchtet und deutlich sichtbar.',
        lightingExcellent: 'Ausgezeichnete Beleuchtung. Ihr Gesicht ist perfekt ausgeleuchtet.'
    },
    
    recommendations: {
        title: 'Verbesserungsvorschläge',
        improveHeadPosition: 'Halten Sie Ihren Kopf gerade und auf gleicher Höhe mit der Kamera für einen professionelleren Look.',
        improveSmile: 'Versuchen Sie ein natürliches Lächeln, das Selbstvertrauen und Zugänglichkeit zeigt.',
        naturalSmile: 'Ihr Lächeln erscheint sehr breit - ein etwas subtileres Lächeln könnte in manchen Kontexten professioneller wirken.',
        improveEyeContact: 'Schauen Sie direkt in das Kameraobjektiv, um besseren Blickkontakt herzustellen.',
        improveLighting: 'Nehmen Sie Fotos unter besseren Lichtverhältnissen auf - natürliches, diffuses Licht von vorne funktioniert am besten.',
        goodPhoto: 'Großartiges Foto! Es erfüllt die professionellen Standards für ein Profilbild.'
    }
};