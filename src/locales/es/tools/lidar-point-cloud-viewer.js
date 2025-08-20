export default {
    name: 'Visor de Nubes de Puntos LIDAR - Herramienta de Visualización 3D en Línea',
    description: 'Visor de nubes de puntos LIDAR en línea y gratuito, compatible con formatos LAS, XYZ, PLY, PCD. Ofrece visualización 3D, múltiples modos de coloración, navegación interactiva y funciones de análisis de datos',
    inputTitle: 'Archivo de Nube de Puntos (Entrada)',
    outputTitle: 'Vista 3D de Nube de Puntos',
    dragTip: 'Arrastra y suelta el archivo de nube de puntos aquí o haz clic para subir',
    supported: 'Formatos soportados: LAS, XYZ, PLY, PCD, TXT',
    loadFromUrl: 'Cargar desde URL',
    load: 'Cargar',
    loadSample: 'Cargar Datos de Muestra',
    coloringMode: 'Modo de Coloración',
    elevation: 'Coloración por Elevación',
    intensity: 'Coloración por Intensidad',
    classification: 'Coloración por Clasificación',
    rgb: 'Coloración RGB',
    pointSize: 'Tamaño de Punto',
    pointDensity: 'Densidad de Puntos',
    enableAnimation: 'Habilitar Animación',
    showTrajectory: 'Mostrar Trayectoria',
    showSensorData: 'Mostrar Datos del Sensor',
    fileInfo: 'Información del Archivo',
    fileName: 'Nombre del Archivo',
    pointCount: 'Cantidad de Puntos',
    fileSize: 'Tamaño del Archivo',
    bounds: 'Límites',
    resetView: 'Restablecer Vista',
    exportImage: 'Exportar Imagen',
    loading: 'Cargando...',
    noData: 'Sube un archivo de nube de puntos o carga datos de muestra',
    controls: {
        rotate: 'Arrastra con el ratón: Rotar vista',
        zoom: 'Rueda del ratón: Zoom',
        pan: 'Shift+arrastrar: Desplazar vista'
    },
    stats: {
        visible: 'Puntos Visibles',
        total: 'Puntos Totales',
        points: 'puntos'
    },
    metadata: {
        title: 'Metadatos LAS',
        systemId: 'Identificador del Sistema',
        software: 'Software Generador',
        version: 'Versión LAS',
        creationDate: 'Fecha de Creación',
        pointFormat: 'Formato de Datos de Puntos',
        vlrCount: 'Cantidad de VLR',
        returnStats: 'Estadísticas de Retorno',
        extent: 'Extensión Espacial'
    },
    error: {
        loadFailed: 'Error al cargar el archivo de nube de puntos, comprueba si el formato es correcto',
        urlLoadFailed: 'Error al cargar desde URL, comprueba si la dirección es correcta'
    },
    disclaimer: {
        title: 'Notas Técnicas',
        content: 'Esta herramienta utiliza WebGL para la visualización 3D en el navegador. Todo el procesamiento de datos se realiza localmente para garantizar la seguridad de los datos.',
        formats: 'Formatos soportados: LAS (estándar LIDAR), XYZ (nube de puntos ASCII), PLY (Polygon File Format), PCD (Point Cloud Data)',
        performance: 'Consejo de rendimiento: los archivos grandes pueden requerir más tiempo de carga. Se recomienda usar un navegador moderno para un mejor rendimiento.'
    }
};