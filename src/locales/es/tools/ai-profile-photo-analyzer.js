export default {
    name: 'Analizador de Fotos de Perfil con IA - Herramienta de Análisis de Retratos Profesionales',
    description: 'Herramienta gratuita en línea para analizar tus fotos de perfil y retratos. Obtén comentarios impulsados por IA sobre la posición de la cabeza, sonrisa, contacto visual y calidad de iluminación para mejorar tus fotos profesionales.',
    inputTitle: 'Subir Foto',
    outputTitle: 'Resultados del Análisis',
    dragTip: 'Arrastra y suelta fotos aquí o haz clic para subir',
    supported: 'Formatos soportados: PNG, JPEG, BMP, WEBP',
    analyzeBtn: 'Analizar Foto',
    downloadBtn: 'Descargar',
    noOutput: 'Aún no hay fotos analizadas',
    loadSample: 'Cargar Foto de Ejemplo',
    preview: 'Vista Previa de Fotos',
    clearAll: 'Borrar Todo',
    originalImage: 'Foto Original',
    deleteImage: 'Eliminar Foto',
    batchDownload: 'Descarga por Lotes (ZIP)',
    exportFormat: 'Formato de Exportación',
    imageQuality: 'Calidad de Imagen',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetView: 'Restablecer Vista',
    fullscreen: 'Vista Previa a Pantalla Completa',
    analysisResults: 'Resultados del Análisis',
    overallScore: 'Puntuación General',
    headPosition: 'Posición de la Cabeza',
    smileDetection: 'Detección de Sonrisa',
    eyeContact: 'Contacto Visual',
    lightingQuality: 'Calidad de Iluminación',
    recommendations: 'Recomendaciones',
    noFaceDetected: 'No se detectó ningún rostro en esta imagen. Por favor, sube una foto clara con un rostro visible.',
    disclaimer: 'Aviso Legal',
    disclaimerText: 'Esta herramienta utiliza IA para analizar fotos de perfil. Los resultados son solo para referencia y pueden variar según la calidad de la imagen y las condiciones de iluminación. Todo el procesamiento se realiza en tu navegador, y tus fotos no se suben a ningún servidor.',
    modelInfo: 'Impulsado por face-api.js, una API de JavaScript de código abierto para la detección y reconocimiento facial en el navegador.',
    
    positions: {
        straight: 'Recta',
        slightlyTilted: 'Ligeramente Inclinada',
        tilted: 'Inclinada',
        unknown: 'Desconocida'
    },
    
    tips: {
        headStraight: '¡Excelente! Tu cabeza está posicionada recta, lo cual es ideal para fotos profesionales.',
        headSlightlyTilted: 'Tu cabeza está ligeramente inclinada. Una posición más recta puede verse más profesional.',
        headTilted: 'Tu cabeza está notablemente inclinada. Intenta mantener tu cabeza recta para fotos profesionales.',
        
        smileLow: 'Intenta sonreír más naturalmente para parecer accesible y seguro.',
        smileMedium: 'Tu sonrisa podría ser más atractiva. Prueba una sonrisa natural y relajada.',
        smileGood: '¡Buena sonrisa! Pareces accesible y profesional.',
        smileExcellent: '¡Excelente sonrisa! Pareces muy accesible y seguro.',
        
        eyeContactLow: 'Intenta mirar directamente a la cámara para un mejor contacto visual.',
        eyeContactMedium: 'Tu contacto visual podría mejorar. Mira directamente al objetivo de la cámara.',
        eyeContactGood: 'Buen contacto visual. Pareces comprometido y atento.',
        eyeContactExcellent: 'Excelente contacto visual. Pareces seguro y comprometido.',
        
        lightingLow: 'La iluminación es demasiado oscura o desigual. Intenta tomar fotos en mejores condiciones de iluminación.',
        lightingMedium: 'La iluminación podría mejorar. La luz natural y difusa funciona mejor.',
        lightingGood: 'Buena iluminación. Tu rostro está bien iluminado y claramente visible.',
        lightingExcellent: 'Excelente iluminación. Tu rostro está perfectamente iluminado.'
    },
    
    recommendations: {
        title: 'Sugerencias de Mejora',
        improveHeadPosition: 'Mantén tu cabeza recta y nivelada con la cámara para un aspecto más profesional.',
        improveSmile: 'Prueba una sonrisa natural que muestre confianza y accesibilidad.',
        naturalSmile: 'Tu sonrisa parece muy amplia - una sonrisa ligeramente más sutil podría verse más profesional en algunos contextos.',
        improveEyeContact: 'Mira directamente al objetivo de la cámara para establecer un mejor contacto visual.',
        improveLighting: 'Toma fotos en mejores condiciones de iluminación - la luz natural y difusa desde el frente funciona mejor.',
        goodPhoto: '¡Gran foto! Cumple con los estándares profesionales para una foto de perfil.'
    }
};