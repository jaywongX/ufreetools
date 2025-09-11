export default {
    title: 'Guía de uso de la Calculadora de Línea Base - Herramienta en línea para el cálculo de longitud y acimut de líneas base de coordenadas',
    functionTitle: '¿Qué es una Calculadora de Línea Base y cuál es su propósito?',
    intro: 'Nuestra <strong>Calculadora de Línea Base</strong> es una herramienta profesional en línea que calcula rápida y precisamente la longitud y el acimut de la línea base entre dos puntos. Esta herramienta admite la entrada de varianza de coordenadas, puede calcular resultados de propagación de errores y generar visualizaciones de elipses de error. Es adecuada para ingeniería topográfica, aplicaciones SIG, ingeniería civil e investigación geográfica. Utilizando nuestra <strong>herramienta de cálculo de línea base de coordenadas</strong>, puede procesar fácilmente grandes cantidades de datos de coordenadas y mostrar los resultados de manera visual e intuitiva.',

    useCasesTitle: 'Escenarios de aplicación comunes para la Calculadora de Línea Base',
    useCases: [
        'Medición de poligonales y ajuste de redes de control en ingeniería topográfica',
        'Análisis de datos espaciales y cálculo de distancias en proyectos SIG',
        'Replanteo y medición en ingeniería civil',
        'Análisis de relaciones espaciales en investigación geográfica',
        'Solución de línea base en sistemas de posicionamiento y navegación',
        'Análisis de relaciones entre puntos en exploración geológica'
    ],

    tipTitle: 'Consejo profesional:',
    tipContent: 'Al realizar mediciones de alta precisión, se recomienda introducir datos de varianza de coordenadas para obtener resultados de análisis de errores más precisos. La función de visualización de elipse de error puede ayudarle a comprender intuitivamente la distribución de los errores de posición de los puntos.',

    conclusion: 'La <strong>Calculadora de Línea Base</strong> es extremadamente útil para ingenieros topógrafos, profesionales SIG, ingenieros civiles y cualquier persona que necesite procesar datos de coordenadas. Al utilizar nuestra herramienta, puede ahorrar una cantidad significativa de tiempo de cálculo manual, evitar errores de cálculo y comprender mejor los datos a través de funciones de visualización. Nuestra herramienta hace que el proceso de cálculo de línea base sea simple y eficiente, sin necesidad de instalar ningún software profesional.',

    faqTitle: 'Preguntas frecuentes',
    faqs: [
        {
            question: '¿Qué son la longitud de línea base y el acimut?',
            answer: 'La <strong>longitud de línea base</strong> se refiere a la distancia en línea recta entre dos puntos, y el <strong>acimut</strong> es el ángulo en sentido horario desde el norte hasta la línea base. En topografía, una línea base es un componente básico de una red de control, y su longitud y acimut son parámetros importantes que describen la relación espacial entre dos puntos. Al calcular con precisión la longitud y el acimut de la línea base, se pueden proporcionar datos fundamentales confiables para trabajos topográficos posteriores.'
        },
        {
            question: '¿Cómo introducir datos de varianza de coordenadas?',
            answer: 'Al utilizar nuestra <strong>Calculadora de Línea Base</strong>, puede introducir directamente las varianzas de coordenadas X e Y de los puntos inicial y final en el modo de entrada de punto único, o añadir información de varianza después de cada línea de datos en el modo de entrada por lotes. El formato de datos de varianza es: punto inicial X, punto inicial Y, punto final X, punto final Y, varianza punto inicial X, varianza punto inicial Y, varianza punto final X, varianza punto final Y. Después de introducir los datos de varianza, la herramienta calculará automáticamente los resultados de propagación de errores y generará elipses de error.'
        },
        {
            question: '¿Qué representa la elipse de error?',
            answer: 'La <strong>elipse de error</strong> es una herramienta gráfica que representa la distribución de errores de posición de puntos. Los semiejes mayor y menor de la elipse representan las direcciones de error máximo y mínimo, respectivamente, y el ángulo de orientación representa la dirección del semieje mayor. A través de la visualización de la elipse de error, puede comprender intuitivamente la magnitud y la distribución direccional de los errores de posición de puntos, lo cual es muy importante para evaluar la precisión de la medición y realizar control de calidad.'
        },
        {
            question: '¿Cómo procesar múltiples cálculos de línea base por lotes?',
            answer: 'Utilizando nuestra <strong>función de cálculo de línea base por lotes</strong>, puede introducir múltiples datos de línea base línea por línea en el cuadro de entrada por lotes. El formato de cada línea de datos es: punto inicial X, punto inicial Y, punto final X, punto final Y [, varianza punto inicial X, varianza punto inicial Y, varianza punto final X, varianza punto final Y]. Después de completar la entrada, haga clic en el botón "Calcular línea base", y el sistema calculará automáticamente la longitud, el acimut y la información de error relacionada para todas las líneas base.'
        },
        {
            question: '¿Cuál es el propósito de la función de visualización de mapa?',
            answer: 'La función de visualización de mapa puede mostrar intuitivamente todas las líneas base y puntos calculados en un sistema de coordenadas bidimensional. Los puntos iniciales se representan con puntos verdes, los puntos finales con puntos rojos, y las líneas base se conectan con líneas azules. Si se introducen datos de varianza, también se mostrarán elipses de error rojas. Esta función es particularmente adecuada para verificar la razonabilidad de los datos, identificar valores atípicos y realizar análisis de relaciones espaciales.'
        }
    ],

    tutorialTitle: 'Cómo usar la Calculadora de Línea Base',
    steps: [
        {
            title: 'Seleccionar el modo de entrada',
            description: 'Elija el modo de entrada apropiado en la parte superior del área de entrada izquierda: entrada de punto único o entrada por lotes. La entrada de punto único es adecuada para calcular pocas líneas base, mientras que la entrada por lotes es adecuada para procesar grandes cantidades de datos.',
            note: 'El modo de entrada por lotes admite cálculos con datos de varianza y ofrece un formato más flexible.'
        },
        {
            title: 'Introducir datos de coordenadas',
            description: 'Introduzca los datos de coordenadas según el modo de entrada seleccionado. En el modo de entrada de punto único, introduzca las coordenadas X e Y de los puntos inicial y final por separado; en el modo de entrada por lotes, introduzca múltiples datos de línea base línea por línea, con cada línea en el formato: punto inicial X, punto inicial Y, punto final X, punto final Y.',
            note: 'Si se necesita análisis de errores, también deben introducirse los datos de varianza de coordenadas correspondientes.'
        },
        {
            title: 'Ejecutar el cálculo',
            description: 'Haga clic en el botón <strong>"Calcular línea base"</strong> para iniciar el cálculo. El sistema calculará automáticamente la longitud y el acimut de cada línea base basándose en los datos de coordenadas introducidos, y calculará los resultados de propagación de errores y generará parámetros de elipse de error cuando se introduzcan datos de varianza.',
            note: 'El proceso de cálculo generalmente se completa en segundos, incluso para grandes cantidades de datos.'
        },
        {
            title: 'Ver y analizar resultados',
            description: 'Después de completar el cálculo, los resultados se mostrarán en el área de salida a la derecha. Puede ver información detallada para cada línea base, incluyendo longitud de línea base, acimut, resultados de propagación de errores y parámetros de elipse de error. El área de visualización de mapa mostrará la distribución de todas las líneas base y puntos.',
            note: 'Haga clic en el botón "Copiar" para cualquier elemento de resultado para copiar rápidamente los resultados de cálculo de ese registro.'
        },
        {
            title: 'Exportar informe',
            description: 'Si necesita guardar los resultados, puede hacer clic en el botón <strong>"Exportar CSV"</strong> o <strong>"Exportar TXT"</strong> en la parte superior del área de salida. El sistema generará un informe que contiene todos los resultados de cálculo, conveniente para imprimir y compartir.',
            note: 'El informe exportado contiene información de cálculo completa, adecuada para documentación y reportes de proyectos.'
        }
    ],

    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido con éxito cómo usar nuestra Calculadora de Línea Base. Ahora puede calcular fácilmente la longitud y el acimut de la línea base entre cualquier par de puntos, realizar análisis de errores y comprender mejor los datos a través de funciones de visualización.',

    relatedToolsTitle: 'Herramientas relacionadas que pueden interesarle',
    relatedTools: [
        {
            name: 'Conversor de Coordenadas',
            description: 'Convierte coordenadas de latitud y longitud entre diferentes sistemas de coordenadas, compatible con múltiples sistemas de proyección.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Calculadora de Hojas de Mapa',
            description: 'Calcula números de hojas de mapa basados en coordenadas de latitud y longitud, compatible con múltiples escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Conversor de Tiempo GNSS',
            description: 'Convierte entre tiempo UTC y segundos de semana GPS, tiempo BeiDou.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Calculadora de Proyección Gauss',
            description: 'Realiza cálculos directos e inversos de proyección Gauss-Krüger, compatible con zonas de 3 grados y 6 grados.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        }
    ],

    referencesTitle: 'Recursos de referencia',
    references: [
        {
            name: 'NOAA - Servicio Geodésico Nacional',
            description: 'Referencias de medición, sistemas de coordenadas y herramientas de medición proporcionadas por el Servicio Geodésico Nacional de EE. UU.',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        },
        {
            name: 'Federación Internacional de Agrimensores (FIG)',
            description: 'Estándares de topografía, mejores prácticas y recursos de investigación proporcionados por la Federación Internacional de Agrimensores',
            url: 'https://www.fig.net/resources/publications/'
        },
        {
            name: 'Revista de Ingeniería Topográfica - Biblioteca ASCE',
            description: 'Revista académica de ingeniería topográfica publicada por la Sociedad Americana de Ingenieros Civiles, que contiene las últimas investigaciones y métodos',
            url: 'https://ascelibrary.org/journal/jsued2'
        }
    ]
}