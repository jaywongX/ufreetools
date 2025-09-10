export default {
    title: 'Guía del Conversor de Tiempo GNSS - Herramienta en línea para convertir entre semanas/segundos GPS y tiempo UTC',
    functionTitle: '¿Qué es el Conversor de Tiempo GNSS y cuál es su propósito?',
    intro: 'Nuestro <strong>Conversor de Tiempo GNSS</strong> es una herramienta profesional en línea que permite la conversión mutua entre tiempo UTC, semanas/segundos GPS y tiempo BeiDou. Esta herramienta admite cálculo de fecha juliana, procesamiento por lotes y funciones de visualización de línea de tiempo, adecuada para posicionamiento por navegación satelital, ingeniería topográfica, investigación científica y otros campos. Usando nuestra <strong>herramienta de conversión de semanas/segundos GPS</strong>, puede completar rápida y precisamente varias necesidades de conversión de sistemas de tiempo GNSS.',

    useCasesTitle: 'Escenarios de aplicación comunes para el Conversor de Tiempo GNSS',
    useCases: [
        'Sincronización de tiempo en el procesamiento de datos de posicionamiento por navegación satelital',
        'Análisis y post-procesamiento de datos de receptores GNSS',
        'Conversión precisa de tiempo en ingeniería topográfica',
        'Unificación de referencias de tiempo en campos aeroespaciales',
        'Fusión de datos de tiempo de múltiples sistemas en proyectos de investigación científica',
        'Análisis comparativo de datos entre sistemas de navegación BeiDou y GPS'
    ],

    tipTitle: 'Consejo Profesional:',
    tipContent: 'Al realizar conversiones de tiempo de alta precisión, tenga en cuenta las diferencias de segundos bisiestos entre diferentes sistemas GNSS. El tiempo GPS tiene una diferencia fija de segundos bisiestos con el tiempo UTC, y el tiempo BeiDou también tiene diferentes diferencias de segundos bisiestos con el tiempo UTC. Estas diferencias cambian con el tiempo.',

    conclusion: 'El <strong>Conversor de Tiempo GNSS</strong> es muy útil para ingenieros de navegación satelital, profesionales de topografía, investigadores científicos y cualquier persona que necesite procesar datos de tiempo GNSS. Al usar nuestra herramienta, puede ahorrar mucho tiempo de cálculo manual, evitar errores de conversión y mejorar la eficiencia del trabajo. Nuestra herramienta hace que el proceso de conversión de tiempo GNSS sea simple y eficiente, sin necesidad de instalar ningún software profesional.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué son la semana GPS y el tiempo de la semana?',
            answer: 'La semana GPS es el conteo continuo de semanas a partir del 6 de enero de 1980 a las 00:00:00, y el tiempo de la semana (TOW) es el número de segundos dentro de una semana a partir del domingo a las 00:00. El sistema de tiempo GPS utiliza segundos de tiempo atómico como referencia temporal, no agrega segundos bisiestos después de su inicio y mantiene la continuidad del tiempo. Este método de representación se utiliza ampliamente en navegación satelital porque puede evitar la complejidad causada por los ajustes de segundos bisiestos.'
        },
        {
            question: '¿Cuál es la diferencia entre el tiempo UTC y el tiempo GPS?',
            answer: 'UTC (Tiempo Universal Coordinado) es el estándar internacional de tiempo, que periódicamente agrega segundos bisiestos para adaptarse a los cambios en la velocidad de rotación de la Tierra. El tiempo GPS se basa en el tiempo atómico, alineado con el tiempo UTC desde el 6 de enero de 1980, pero no se ajusta por segundos bisiestos. Por lo tanto, existe una diferencia de segundos enteros entre el tiempo GPS y el tiempo UTC, y esta diferencia aumenta a medida que se agregan segundos bisiestos. Hasta ahora, el tiempo GPS está aproximadamente 18 segundos adelantado respecto al tiempo UTC.'
        },
        {
            question: '¿Cómo convertir por lotes múltiples datos de tiempo?',
            answer: 'Usando nuestra <strong>función de conversión de tiempo por lotes</strong>, puede ingresar múltiples datos de tiempo línea por línea en el cuadro de entrada por lotes. Según el modo de entrada seleccionado (fecha y hora, tiempo GPS o tiempo BeiDou), ingrese los datos en el formato correspondiente, un registro por línea. Por ejemplo, el formato de tiempo GPS es "semana,segundos", como "2234,172800". Después de completar la entrada, haga clic en el botón "Convertir tiempo", y el sistema convertirá automáticamente todos los datos.'
        },
        {
            question: '¿Qué es la fecha juliana? ¿Por qué necesitamos calcularla?',
            answer: 'La fecha juliana es un método continuo de conteo de días, contando días desde el 1 de enero del 4713 a.C. a las 12:00, ampliamente utilizado en astronomía y campos aeroespaciales. La fecha juliana proporciona un método unificado de representación del tiempo, facilitando la conversión de tiempo entre sistemas y cálculos de largos períodos de tiempo. En aplicaciones GNSS, la fecha juliana se utiliza comúnmente para cálculos de órbita y escenarios de sincronización de tiempo.'
        },
        {
            question: '¿Cuál es el propósito de la función de visualización de línea de tiempo?',
            answer: 'La función de visualización de línea de tiempo puede mostrar intuitivamente las relaciones de posición relativa de todos los puntos de tiempo convertidos en una interfaz gráfica. Al ver la línea de tiempo, puede comprender rápidamente los intervalos y la distribución entre diferentes puntos de tiempo, ayudando a descubrir anomalías o patrones en los datos. Esta función es particularmente adecuada para analizar datos GNSS de series temporales largas.'
        }
    ],

    tutorialTitle: 'Cómo Usar el Conversor de Tiempo GNSS',
    steps: [
        {
            title: 'Seleccionar Modo de Entrada',
            description: 'Seleccione el modo de entrada apropiado en la parte superior del área de entrada izquierda: fecha y hora, tiempo GPS o tiempo BeiDou. Elija el modo correspondiente según su tipo de datos para analizar correctamente los datos de entrada.',
            note: 'El modo de fecha y hora admite el formato ISO estándar, como 2023-01-01T00:00:00.'
        },
        {
            title: 'Ingresar Datos de Tiempo',
            description: 'Ingrese los datos de tiempo en el cuadro de entrada correspondiente. Puede ingresar un solo punto de tiempo o múltiples puntos de tiempo en el cuadro de entrada por lotes, un registro por línea. El sistema admite varios formatos de entrada para adaptarse a diferentes necesidades.',
            note: 'Al ingresar por lotes, asegúrese de que cada línea de datos tenga un formato consistente para evitar errores de conversión.'
        },
        {
            title: 'Establecer Formato de Salida',
            description: 'Seleccione el formato de tiempo de salida en el área de configuración de parámetros. Puede elegir el formato estándar ISO (YYYY-MM-DD HH:mm:ss) o un formato personalizado. Elija el formato apropiado según los requisitos de uso posteriores.',
            note: 'El formato ISO es conveniente para el procesamiento de programas, mientras que el formato personalizado es conveniente para la lectura humana.'
        },
        {
            title: 'Ejecutar Conversión',
            description: 'Haga clic en el botón <strong>"Convertir tiempo"</strong> para iniciar la conversión. El sistema calculará y mostrará automáticamente el tiempo UTC, tiempo GPS, tiempo BeiDou, fecha juliana y otra información basada en su modo de entrada seleccionado y datos ingresados.',
            note: 'El proceso de conversión generalmente se completa en segundos, incluso para grandes cantidades de datos.'
        },
        {
            title: 'Ver y Exportar Resultados',
            description: 'Después de completar la conversión, los resultados se mostrarán en el área de salida derecha. Puede ver información detallada de conversión para cada punto de tiempo, usar la función de visualización de línea de tiempo para ver la distribución temporal, o hacer clic en el botón "Exportar CSV" para guardar los resultados como un archivo.',
            note: 'Haga clic en el botón "Copiar" para cada elemento de resultado para copiar rápidamente el resultado de conversión de ese registro.'
        }
    ],

    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido con éxito cómo usar nuestro Conversor de Tiempo GNSS. Ahora puede completar fácilmente conversiones mutuas entre tiempo UTC, tiempo GPS y tiempo BeiDou para navegación satelital, ingeniería topográfica, investigación científica y varios otros escenarios de aplicación.',

    relatedToolsTitle: 'Herramientas Relacionadas Que Pueden Interesarle',
    relatedTools: [
        {
            name: 'Conversor de Coordenadas',
            description: 'Convierte coordenadas de latitud y longitud entre diferentes sistemas de coordenadas, compatible con varios sistemas de proyección.',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Reproducción de Trayectorias GPS',
            description: 'Carga y visualiza datos de trayectorias GPS, compatible con varios formatos de archivo.',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculadora de Proyección Gaussiana',
            description: 'Realiza cálculos directos e inversos de proyección Gauss-Krüger, compatible con zonas de 3 y 6 grados.',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Calculadora de Hojas de Mapa',
            description: 'Calcula números de hojas de mapa basados en coordenadas de latitud y longitud, compatible con varias escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Fundamentos de Tiempo en Sistemas Globales de Navegación por Satélite',
            description: 'Introducción detallada a los sistemas de tiempo GNSS',
            url: 'https://www.ngs.noaa.gov/CORS/GNSS-Time.shtml'
        },
        {
            name: 'Sistema de Tiempo GPS Explicado',
            description: 'Introducción detallada al sistema de tiempo GPS',
            url: 'https://en.wikipedia.org/wiki/GPS_time'
        },
        {
            name: 'Sistema de Tiempo BeiDou',
            description: 'Explicación de la referencia de tiempo del sistema de navegación BeiDou',
            url: 'https://en.wikipedia.org/wiki/BeiDou'
        }
    ]
}