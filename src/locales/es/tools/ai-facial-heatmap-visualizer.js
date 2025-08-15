export default {
    name: 'Visualizador de Mapa de Calor Facial con IA',
    description: 'Utiliza inteligencia artificial para analizar características faciales, generar mapas de calor y proporcionar sugerencias para mejorar fotografías. Basado en tecnología de reconocimiento facial para ayudar a optimizar la iluminación y composición de fotos.',
    inputTitle: 'Imagen de Entrada',
    outputTitle: 'Análisis de Mapa de Calor',
    dragTip: 'Arrastra y suelta imágenes aquí o haz clic para subir',
    supported: 'Formatos soportados: PNG, JPEG, BMP, WEBP',
    processBtn: 'Generar Mapa de Calor',
    downloadBtn: 'Descargar',
    noOutput: 'Aún no hay imágenes de salida',
    loadSample: 'Cargar Imagen de Ejemplo',
    preview: 'Vista Previa de Imágenes',
    clearAll: 'Borrar Todo',
    originalImage: 'Imagen Original',
    deleteImage: 'Eliminar Imagen',
    batchDownload: 'Descarga por Lotes (ZIP)',
    exportFormat: 'Formato de Exportación',
    imageQuality: 'Calidad de Imagen',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetView: 'Restablecer Vista',
    fullscreen: 'Vista Previa en Pantalla Completa',
    closePreview: 'Cerrar Vista Previa',
    analysisTitle: 'Resultados del Análisis',
    noFaceDetected: 'No se detectó ningún rostro, intenta usar una foto frontal más clara',
    loadingModels: 'Cargando modelos de reconocimiento facial',
    loadingModelsTip: 'El primer uso requiere descargar archivos de modelo, por favor espera...',
    disclaimer: 'Esta herramienta es solo para análisis de imágenes y fines educativos y no almacena permanentemente tus imágenes',
    modelInfo: 'Utilizando tecnología de reconocimiento facial proporcionada por face-api.js',
    
    // Configuración de parámetros
    paramSettings: 'Configuración de Parámetros',
    heatmapIntensity: 'Intensidad del Mapa de Calor',
    heatmapRadius: 'Tamaño de Punto de Calor',
    colorScheme: 'Esquema de Color',
    showLandmarks: 'Mostrar Puntos de Referencia',
    
    expressions: {
        neutral: 'Neutral',
        happy: 'Feliz',
        sad: 'Triste',
        angry: 'Enojado',
        fearful: 'Temeroso',
        disgusted: 'Disgustado',
        surprised: 'Sorprendido'
    },
    
    expressionDetected: 'Expresión detectada: {expression}',
    
    lightingTips: {
        leftDark: 'Luz insuficiente en el lado izquierdo, intenta añadir una fuente de luz a la izquierda',
        rightDark: 'Luz insuficiente en el lado derecho, intenta añadir una fuente de luz a la derecha',
        tooLow: 'La iluminación general es insuficiente, considera añadir luz ambiental o flash',
        tooHigh: 'La luz es demasiado fuerte, puede causar sobreexposición, considera reducir la fuente de luz o usar luz suave',
        good: 'Buena iluminación, la iluminación facial es uniforme'
    },
    
    positionTips: {
        tooLeft: 'La posición del rostro está demasiado a la izquierda, sugiere mover hacia la derecha',
        tooRight: 'La posición del rostro está demasiado a la derecha, sugiere mover hacia la izquierda',
        tooHigh: 'La posición del rostro está demasiado alta, sugiere mover hacia abajo',
        tooLow: 'La posición del rostro está demasiado baja, sugiere mover hacia arriba',
        tooSmall: 'La proporción del rostro en el marco es demasiado pequeña, sugiere acercarse',
        tooBig: 'La proporción del rostro en el marco es demasiado grande, sugiere aumentar la distancia de disparo'
    }
};