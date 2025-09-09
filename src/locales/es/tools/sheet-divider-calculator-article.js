export default {
    title: 'Guía de la Calculadora de Hojas de Mapa - Herramienta de Consulta de Numeración de Hojas de Mapa en Línea',
    functionTitle: '¿Qué es una Calculadora de Hojas de Mapa y cuál es su propósito?',
    intro: 'Nuestra <strong>Calculadora de Hojas de Mapa</strong> es una potente herramienta en línea que calcula rápida y precisamente los números de hojas de mapa basándose en coordenadas de latitud y longitud. La herramienta es compatible con múltiples escalas (incluyendo 1:500, 1:1000, 1:50000, etc.) y proporciona funciones de cálculo por lotes y visualización de cuadrícula de hojas. Usando nuestra <strong>herramienta de consulta de numeración de hojas de mapa</strong>, puede procesar fácilmente grandes cantidades de datos de coordenadas y exportar los resultados en formato Excel o PDF.',

    useCasesTitle: 'Aplicaciones comunes de la Calculadora de Hojas de Mapa',
    useCases: [
        'Gestión y numeración de hojas de mapa en proyectos de topografía y cartografía',
        'Organización de datos espaciales en proyectos de Sistemas de Información Geográfica (SIG)',
        'División de hojas en planificación territorial y diseño urbano',
        'División de áreas de trabajo en exploración geológica y estudios de recursos',
        'Producción de mapas militares y división de áreas de combate',
        'Procesamiento por bloques de datos geográficos a gran escala en proyectos de investigación'
    ],

    tipTitle: 'Consejo Profesional:',
    tipContent: 'Al dividir mapas para áreas grandes, se recomienda usar zonas de 3 grados para mayor precisión, mientras que para áreas pequeñas se pueden usar zonas de 6 grados para simplificar los cálculos.',

    conclusion: 'La <strong>Calculadora de Hojas de Mapa</strong> es extremadamente útil para ingenieros topógrafos, profesionales de SIG, urbanistas y cualquier persona que necesite procesar datos geoespaciales. Al usar nuestra herramienta, puede ahorrar tiempo significativo en cálculos manuales, evitar errores de numeración y mejorar la eficiencia del trabajo. Nuestra herramienta hace que el proceso de división de hojas de mapa sea simple y eficiente, sin requerir la instalación de ningún software profesional.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué escalas soporta la Calculadora de Hojas de Mapa?',
            answer: 'Nuestra <strong>Calculadora de Hojas de Mapa en línea</strong> soporta múltiples escalas comunes desde 1:500 hasta 1:1000000, incluyendo 1:500, 1:1000, 1:2000, 1:5000, 1:10000, 1:25000, 1:50000, 1:100000, 1:250000, 1:500000 y 1:1000000. Puede elegir la escala apropiada según sus necesidades específicas.'
        },
        {
            question: '¿Qué son las zonas de 3 grados y las zonas de 6 grados?',
            answer: 'Las zonas de 3 grados y las zonas de 6 grados son dos métodos de zonificación en la proyección de Gauss-Krüger. Las zonas de 6 grados comienzan desde 0° de longitud Este, con cada zona abarcando 6°, dividiendo el globo en 60 zonas. Las zonas de 3 grados comienzan desde 1.5° de longitud Este, con cada zona abarcando 3°, dividiendo el globo en 120 zonas. Las zonas de 3 grados proporcionan mayor precisión y son adecuadas para cartografía a gran escala; las zonas de 6 grados cubren áreas más amplias y son adecuadas para cartografía a pequeña escala.'
        },
        {
            question: '¿Cómo calculo números de hojas de mapa para múltiples puntos de coordenadas por lotes?',
            answer: 'Usando nuestra <strong>función de cálculo de hojas por lotes</strong>, puede introducir múltiples puntos de coordenadas en el cuadro de entrada por lotes, con cada línea en el formato "latitud,longitud,descripción(opcional)". Por ejemplo: "39.9042,116.4074,Centro de Beijing". Después de la entrada, haga clic en el botón "Calcular Hoja", y el sistema calculará automáticamente los números de hojas de mapa para todos los puntos de coordenadas.'
        },
        {
            question: '¿En qué formatos se pueden exportar los resultados del cálculo?',
            answer: 'Nuestra herramienta permite exportar los resultados del cálculo tanto en formato Excel como PDF. El formato Excel es conveniente para un procesamiento y análisis posterior de los datos, mientras que el formato PDF es adecuado para imprimir y compartir. Puede completar la exportación haciendo clic en el botón "Exportar Excel" o "Exportar PDF" en la parte superior del área de salida.'
        },
        {
            question: '¿Cuál es el propósito de la función de visualización de cuadrícula de hojas?',
            answer: 'La función de visualización de cuadrícula de hojas muestra intuitivamente las posiciones y distribución de todos los puntos calculados en un mapa. Al hacer clic en los puntos de la cuadrícula, puede ver información detallada sobre ese punto. La hoja seleccionada se resaltará, ayudándole a entender mejor las características de distribución espacial de los datos. Esta función es particularmente útil para verificar los resultados del cálculo y realizar análisis espaciales.'
        }
    ],

    tutorialTitle: 'Cómo Usar la Calculadora de Hojas de Mapa',
    steps: [
        {
            title: 'Introducir Datos de Coordenadas',
            description: 'Introduzca los datos de coordenadas que desea calcular en el área de entrada a la izquierda. Puede introducir un solo punto de coordenadas (introduzca latitud y longitud en sus respectivas cajas de entrada) o introducir por lotes múltiples puntos de coordenadas (introduzca en la caja de entrada por lotes, con cada línea en el formato "latitud,longitud,descripción(opcional)").',
            note: 'El formato de coordenadas debe estar en grados decimales, como latitud 39.9042, longitud 116.4074.'
        },
        {
            title: 'Establecer Parámetros de Cálculo',
            description: 'En el área de configuración de parámetros, seleccione la escala apropiada y el método de zona de proyección. Las escalas comunes incluyen 1:500, 1:1000, 1:50000, etc., y los métodos de zona incluyen zonas de 3 grados o zonas de 6 grados.',
            note: 'Para escalas grandes (como 1:500, 1:1000) se recomienda usar zonas de 3 grados para mayor precisión.'
        },
        {
            title: 'Ejecutar Cálculo',
            description: 'Haga clic en el botón <strong>"Calcular Hoja"</strong> para iniciar el cálculo. El sistema calculará automáticamente el número de hoja de mapa e información relacionada para cada punto basándose en las coordenadas y parámetros que ha establecido.',
            note: 'El proceso de cálculo normalmente se completa en segundos, incluso para grandes cantidades de datos.'
        },
        {
            title: 'Ver y Analizar Resultados',
            description: 'Después de completar el cálculo, los resultados se mostrarán en el área de salida a la derecha. Puede ver información detallada como el número de hoja de mapa, coordenadas y escala para cada punto. El área de visualización de cuadrícula de hojas mostrará la distribución de todos los puntos en el mapa.',
            note: 'Haga clic en cualquier elemento de resultado o punto en la cuadrícula para ver información detallada y resaltarlo.'
        },
        {
            title: 'Exportar Resultados',
            description: 'Si necesita guardar los resultados, puede hacer clic en el botón <strong>"Exportar Excel"</strong> o <strong>"Exportar PDF"</strong> en la parte superior del área de salida. El formato Excel es conveniente para el procesamiento de datos, mientras que el formato PDF es adecuado para imprimir y compartir.',
            note: 'El archivo exportado contendrá información completa para todos los resultados del cálculo.'
        },
        {
            title: 'Usar Funciones Avanzadas',
            description: 'Puede usar el botón "Cargar Datos de Ejemplo" para experimentar rápidamente la funcionalidad de la herramienta, o usar el botón "Borrar Todo" para restablecer todas las entradas y resultados. Al hacer clic en diferentes elementos de resultado, puede ver sus posiciones en la cuadrícula de hojas.',
            note: 'La herramienta se ejecuta completamente en el navegador, y sus datos no se cargarán a ningún servidor, garantizando privacidad y seguridad.'
        }
    ],

    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido con éxito cómo usar nuestra Calculadora de Hojas de Mapa. Ahora puede calcular fácilmente números de hojas de mapa para cualquier punto de coordenadas, para uso en topografía, SIG, planificación urbana y varios otros escenarios de aplicación.',

    relatedToolsTitle: 'Herramientas Relacionadas Que Pueden Interesarle',
    relatedTools: [
        {
            name: 'Conversor de Coordenadas',
            description: 'Convierte coordenadas de latitud y longitud entre diferentes sistemas de coordenadas, compatible con múltiples sistemas de proyección.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Reproducción de Trazas GPS',
            description: 'Carga y visualiza datos de trazas GPS, compatible con múltiples formatos de archivo.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculadora de Proyección Gaussiana',
            description: 'Realiza cálculos directos e inversos de proyección Gauss-Krüger, compatible con zonas de 3 grados y 6 grados.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Generador de Curvas de Nivel',
            description: 'Genera mapas de curvas de nivel basados en datos de elevación, compatible con múltiples formatos de salida.',
            url: 'https://www.ufreetools.com/tool/elevation-contour-generator'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Sistemas Internacionales de Cuadrícula de Mapas',
            description: 'Estándares internacionales para cuadrículas de mapas y sistemas de numeración de hojas',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-grids'
        },
        {
            name: 'Proyección Transversa de Mercator',
            description: 'Explicación detallada de los principios matemáticos detrás de las proyecciones UTM/Gauss-Krüger',
            url: 'https://en.wikipedia.org/wiki/Transverse_Mercator_projection'
        },
        {
            name: 'Proyecciones de Mapas',
            description: 'Guía detallada de proyecciones de mapas y sistemas de coordenadas proporcionada por agencias gubernamentales australianas',
            url: 'https://www.icsm.gov.au/education/fundamentals-mapping/map-projections'
        }
    ]
}