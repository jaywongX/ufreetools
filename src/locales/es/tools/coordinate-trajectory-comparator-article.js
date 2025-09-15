export default {
    title: 'Guía de Uso del Comparador de Trayectorias de Coordenadas - Herramienta de Análisis de Diferencias de Trayectorias en Línea',
    functionTitle: '¿Qué es el Comparador de Trayectorias de Coordenadas y para qué sirve?',
    intro: 'Nuestro <strong>Comparador de Trayectorias de Coordenadas</strong> es una herramienta en línea potente que permite cargar dos conjuntos de datos de trayectorias y realizar análisis comparativo visual en un mapa. La herramienta admite traslación, rotación y cálculo de desviación de trayectorias, calculando automáticamente indicadores clave como el error cuadrático medio (RMSE) y el desplazamiento entre dos conjuntos de trayectorias. Al mostrar dos trayectorias en diferentes colores con un efecto de comparación "parpadeante" dinámico, las partes diferentes se resaltan automáticamente. Usando nuestra <strong>herramienta de análisis de diferencias de trayectorias</strong>, puedes exportar informes de comparación detallados que contienen capturas de pantalla del mapa y gráficos de estadísticas de error, con copia de resultados al portapapeles con un solo clic, satisfaciendo necesidades profesionales en topografía, navegación y análisis de trayectorias.',

    useCasesTitle: 'Escenarios comunes de aplicación del Comparador de Trayectorias de Coordenadas',
    useCases: [
        'Evaluación de precisión de trayectorias GPS, comparando trayectorias medidas con trayectorias de referencia',
        'Optimización de algoritmos de navegación, analizando diferencias de trayectorias entre diferentes algoritmos de planificación de rutas',
        'Pruebas de conducción autónoma, comparando trayectorias de conducción reales del vehículo con trayectorias esperadas',
        'Análisis de trayectorias deportivas, comparando el rendimiento de trayectorias de diferentes atletas o fases de entrenamiento',
        'Optimización de entrega logística, analizando desviaciones entre rutas de entrega y rutas óptimas',
        'Validación de datos de investigación geográfica, evaluando la precisión y consistencia de los datos de trayectorias'
    ],

    tipTitle: 'Consejos Profesionales:',
    tipContent: 'Al realizar análisis de comparación de trayectorias, se recomienda primero usar datos de muestra para familiarizarse con las funciones de la herramienta y comprender el significado de los diferentes indicadores de error. A través del efecto de comparación "parpadeante" dinámico, puedes observar más intuitivamente las diferencias entre dos trayectorias. El informe de comparación exportado contiene estadísticas de error detalladas y gráficos visuales, facilitando el análisis posterior y el archivo.',

    conclusion: 'El <strong>Comparador de Trayectorias de Coordenadas</strong> es muy útil para ingenieros topográficos, desarrolladores de algoritmos de navegación, investigadores de conducción autónoma y cualquier persona que necesite realizar análisis de datos de trayectorias. Al usar nuestra herramienta de análisis de diferencias de trayectorias, puedes evaluar rápidamente y con precisión la calidad de los datos de trayectorias, identificar desviaciones de trayectorias y optimizar el rendimiento del algoritmo. Nuestra herramienta hace que el proceso de análisis de comparación de trayectorias sea simple y eficiente, sin necesidad de instalar ningún software profesional.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de archivo admite el Comparador de Trayectorias de Coordenadas?',
            answer: 'Nuestra <strong>herramienta de comparación de trayectorias en línea</strong> admite múltiples formatos de archivo de trayectorias comunes, incluyendo GeoJSON, JSON y KML. Estos formatos se utilizan ampliamente en software GIS y dispositivos GPS, asegurando que puedas importar fácilmente datos de trayectorias de varias fuentes. Después de cargar los archivos, la herramienta analiza automáticamente los puntos de trayectoria y realiza análisis comparativo.'
        },
        {
            question: '¿Cómo interpretar el RMSE y otros indicadores de error?',
            answer: 'Nuestra <strong>herramienta de análisis de diferencias de trayectorias</strong> proporciona múltiples indicadores de error para ayudarte a evaluar integralmente las diferencias de trayectorias. El error cuadrático medio (RMSE) es un indicador comúnmente utilizado para medir la desviación general de la trayectoria, con valores más pequeños indicando trayectorias más cercanas; el error medio representa el promedio aritmético de todos los errores de puntos; el error máximo muestra el punto con la mayor desviación en la trayectoria; la desviación estándar refleja la dispersión de la distribución de errores. Estos indicadores utilizados juntos pueden evaluar integralmente la calidad de la trayectoria.'
        },
        {
            question: '¿Cómo se logra el efecto de visualización de comparación de trayectorias?',
            answer: 'Nuestro <strong>Comparador de Trayectorias de Coordenadas</strong> muestra dos trayectorias en diferentes colores, una en azul y la otra en rojo. A través de un efecto "parpadeante" dinámico, puedes observar más intuitivamente las diferencias de trayectorias. Los puntos con diferencias más grandes se resaltan automáticamente, facilitando la identificación rápida de áreas problemáticas. La interfaz del mapa admite operaciones de zoom y desplazamiento, permitiéndote ver detalles de comparación de trayectorias en áreas específicas.'
        },
        {
            question: '¿Qué contenido incluye el informe de comparación?',
            answer: 'El informe generado por nuestra <strong>herramienta de comparación de trayectorias</strong> contiene información rica: 1) Información básica: nombres de archivos de trayectoria, número de puntos, etc.; 2) Estadísticas de error: indicadores clave como RMSE, error medio, error máximo y desviación estándar; 3) Análisis de diferencias: cantidad y distribución de puntos de diferencia; 4) Capturas de pantalla del mapa: resultados visuales de comparación de trayectorias; 5) Gráficos de estadísticas de error: visualización intuitiva de la distribución de errores. Los informes se pueden exportar en formato de texto para archivar y compartir.'
        },
        {
            question: '¿Cómo mejorar la precisión de la comparación de trayectorias?',
            answer: 'Para obtener resultados de comparación de trayectorias más precisos, se recomienda: 1) Asegurar la sincronización temporal de dos trayectorias o realizar procesamiento de alineación temporal; 2) Preprocesar trayectorias, como filtrado y eliminación de ruido, conversión de sistemas de coordenadas, etc.; 3) Seleccionar métodos de cálculo de error y configuraciones de parámetros apropiados; 4) Para trayectorias de diferentes longitudes, usar interpolación o muestreo de trayectorias para hacer que el número de puntos sea consistente. Nuestra herramienta proporciona funciones de comparación básicas, y para aplicaciones profesionales complejas, puede ser necesario combinar conocimientos del dominio para análisis en profundidad.'
        }
    ],

    tutorialTitle: 'Cómo usar el Comparador de Trayectorias de Coordenadas',
    steps: [
        {
            title: 'Cargar Archivos de Trayectoria',
            description: 'En el área de entrada izquierda, carga dos archivos de trayectoria que necesitan ser comparados. Haz clic en las áreas de carga para Trayectoria 1 y Trayectoria 2, selecciona archivos de trayectoria locales en formatos GeoJSON, JSON o KML, o arrastra directamente los archivos al área de carga. La herramienta analizará automáticamente los archivos y mostrará el número de puntos de trayectoria.',
            note: 'Los formatos de archivo compatibles incluyen GeoJSON, JSON y KML, asegurando que los archivos contengan datos de coordenadas de trayectoria válidos.'
        },
        {
            title: 'Cargar Datos de Ejemplo',
            description: 'Si estás usando la herramienta por primera vez, puedes hacer clic en el botón "Cargar Ejemplo" para cargar datos de trayectoria preestablecidos. Esto te ayudará a comprender rápidamente las funciones y resultados de salida de la herramienta, y familiarizarte con todo el proceso de comparación de trayectorias.',
            note: 'Los datos de ejemplo contienen dos trayectorias preestablecidas con ciertas diferencias, lo que facilita demostrar varias funciones de la herramienta.'
        },
        {
            title: 'Realizar Comparación de Trayectorias',
            description: 'Después de cargar dos trayectorias, haz clic en el botón "Comparar Trayectorias" para comenzar el análisis. La herramienta calculará automáticamente las diferencias de trayectorias, incluyendo indicadores como RMSE, error medio, error máximo y desviación estándar, y mostrará visualmente dos trayectorias en el mapa.',
            note: 'El proceso de comparación puede tomar unos segundos, dependiendo del tamaño y complejidad de los datos de trayectoria.'
        },
        {
            title: 'Ver Resultados de Comparación',
            description: 'Una vez completada la comparación, el área derecha mostrará estadísticas de error detalladas y resultados de análisis de diferencias. Puedes ver la comparación visual de dos trayectorias en el mapa, con puntos de diferencias más grandes resaltados. A través del efecto "parpadeante" dinámico, puedes observar más intuitivamente las diferencias de trayectorias.',
            note: 'El mapa admite operaciones de zoom y desplazamiento, facilitando la visualización de detalles de comparación de trayectorias en áreas específicas.'
        },
        {
            title: 'Exportar o Copiar Resultados',
            description: 'Puedes hacer clic en el botón "Exportar Informe" para generar un informe de comparación detallado que contenga estadísticas de error, análisis de diferencias y capturas de pantalla del mapa. Si solo necesitas indicadores clave, puedes usar el botón "Copiar Resultados" para copiar datos principales como RMSE al portapapeles.',
            note: 'El informe exportado está en formato de texto, facilitando el archivo y compartir. La función de copia solo copia indicadores de error clave.'
        }
    ],

    successTitle: '¡Felicidades!',
    successContent: 'Has aprendido con éxito cómo usar nuestro Comparador de Trayectorias de Coordenadas. Ahora puedes cargar y comparar fácilmente dos trayectorias, analizar diferencias de trayectorias a través de estadísticas de error detalladas y efectos de visualización, y exportar informes de comparación profesionales.',

    relatedToolsTitle: 'Herramientas relacionadas que podrían interesarte',
    relatedTools: [
        {
            name: 'Calculadora de Área y Perímetro',
            description: 'Admite dibujar polígonos para calcular automáticamente el área y perímetro, proporcionando cambio de múltiples unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculadora de Área y Perímetro',
            description: 'Admite dibujar polígonos para calcular automáticamente el área y perímetro, proporcionando cambio de múltiples unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Buscador de Zona de Proyección',
            description: 'Ingresa la longitud para calcular automáticamente los números de zona UTM de 3° y 6°, compatible con procesamiento por lotes.',
            url: 'https://www.ufreetools.com/tool/projection-zone-finder'
        },
        {
            name: 'Convertidor de Formato de Coordenadas',
            description: 'Admite conversión entre formatos de grados decimales, grados-minutos-segundos y grados-minutos, proporcionando funciones de conversión por lotes.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Análisis de Datos de Trayectoria',
            description: 'Recursos académicos sobre procesamiento y análisis de datos de trayectoria GPS',
            url: 'https://es.wikipedia.org/wiki/Miner%C3%ADa_de_datos_de_trayectoria'
        },
        {
            name: 'Error Cuadrático Medio',
            description: 'Introducción detallada a RMSE en Wikipedia',
            url: 'https://es.wikipedia.org/wiki/Error_cuadr%C3%A1tico_medio'
        },
        {
            name: 'Especificación de Formato GeoJSON',
            description: 'Documento de especificación oficial para el formato de datos geográficos GeoJSON',
            url: 'https://tools.ietf.org/html/rfc7946'
        }
    ]
}