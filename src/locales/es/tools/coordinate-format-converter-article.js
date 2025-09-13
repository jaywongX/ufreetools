export default {
    title: 'Guía de Usuario del Convertidor de Formato de Coordenadas - Herramienta de Conversión de Latitud y Longitud en Línea',
    functionTitle: '¿Qué es el Convertidor de Formato de Coordenadas y para qué sirve?',
    intro: 'Nuestro <strong>Convertidor de Formato de Coordenadas</strong> es una herramienta en línea potente que permite la conversión precisa entre grados decimales, grados minutos segundos y formato de grados minutos. La herramienta admite conversión de coordenadas individuales y por lotes, proporciona configuración personalizada de decimales y permite el ajuste de precisión en tiempo real mediante un control deslizante. Los resultados de conversión cuentan con efectos de animación resaltada, soportan copia con un clic al portapapeles y funcionalidad de exportación por lotes. Usando nuestro <strong>convertidor de latitud y longitud</strong>, puede manejar fácilmente varios formatos de coordenadas geográficas para satisfacer necesidades profesionales en topografía, navegación, SIG y más.',

    useCasesTitle: 'Escenarios Comunes de Aplicación del Convertidor de Formato de Coordenadas',
    useCases: [
        'Procesamiento de datos GIS, estandarizando datos de coordenadas de diferentes formatos',
        'Conversión de coordenadas de dispositivos de navegación GPS, adaptándose a los requisitos de coordenadas de diferentes servicios de mapas',
        'Organización de datos de coordenadas en proyectos de topografía, mejorando la eficiencia del procesamiento de datos',
        'Estandarización de datos de investigación geográfica, asegurando la consistencia del formato de datos',
        'Exploración al aire libre y navegación marítima, convirtiendo rápidamente formatos de coordenadas para diferentes dispositivos',
        'Creación de mapas y análisis espacial, procesando datos de coordenadas de varias fuentes'
    ],

    tipTitle: 'Consejos Profesionales:',
    tipContent: 'Al realizar conversión de coordenadas por lotes, se recomienda primero probar los resultados de conversión con datos de muestra para asegurar la configuración correcta del formato. Al ajustar el control deslizante de decimales, puede ver en tiempo real el impacto de los cambios de precisión en los resultados y seleccionar la configuración de precisión más adecuada para sus necesidades de aplicación.',

    conclusion: 'El <strong>Convertidor de Formato de Coordenadas</strong> es muy útil para ingenieros topográficos, profesionales de SIG, entusiastas de la navegación y cualquier persona que trabaje con datos de coordenadas geográficas. Al usar nuestra herramienta de conversión de latitud y longitud, puede ahorrar mucho tiempo de cálculo manual, evitar errores de conversión de formato y mejorar significativamente la eficiencia laboral mediante capacidades de procesamiento por lotes. Nuestra herramienta hace que el proceso de conversión de coordenadas sea simple y eficiente sin necesidad de instalar ningún software profesional.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué modos de conversión admite el Convertidor de Formato de Coordenadas?',
            answer: 'Nuestro <strong>convertidor de coordenadas en línea</strong> admite tres modos de conversión principales: Grados Decimales (DD), Grados Minutos Segundos (DMS) y Grados Minutos (DM). Formato de Grados Decimales como 40.7128, formato de Grados Minutos Segundos como 40°42\'46.08"N, formato de Grados Minutos como 40°42.768\'N. Puede convertirse libremente entre estos tres formatos para satisfacer los requisitos de diversos escenarios de aplicación.'
        },
        {
            question: '¿Cómo realizar conversión de coordenadas por lotes?',
            answer: 'Usando nuestra <strong>herramienta de conversión por lotes de latitud y longitud</strong>, simplemente ingrese múltiples pares de coordenadas línea por línea en el área de entrada por lotes, separando latitud y longitud con comas. Por ejemplo: 39.9042,116.4074. Después de hacer clic en el botón de conversión, el sistema procesará automáticamente todas las coordenadas y mostrará los resultados de conversión. La función de exportación por lotes puede guardar todos los resultados como un archivo de texto.'
        },
        {
            question: '¿Cómo afecta la configuración de decimales a los resultados de conversión?',
            answer: 'La configuración de decimales controla la visualización de precisión de los resultados de conversión. Al ajustar el control deslizante de decimales, puede ver en tiempo real el impacto de los cambios de precisión en los resultados. Más decimales significan mayor precisión pero también pueden aumentar la redundancia de datos. Recomendamos seleccionar la precisión adecuada según las necesidades reales de aplicación, con 6 decimales típicamente suficientes para la mayoría de las aplicaciones geográficas.'
        },
        {
            question: '¿Cuál es el propósito de la animación resaltada en los resultados de conversión?',
            answer: 'Nuestra <strong>herramienta de conversión de coordenadas</strong> muestra efectos de animación resaltada después de completar operaciones de conversión o copia, ayudando a los usuarios a localizar rápidamente los resultados en los que acabaron de operar. Este mecanismo de retroalimentación visual mejora la experiencia del usuario, especialmente al procesar múltiples coordenadas, permitiéndole ver claramente qué resultado ha sido seleccionado o copiado.'
        },
        {
            question: '¿Cómo garantizar la precisión de la conversión de coordenadas?',
            answer: 'Nuestra herramienta valida automáticamente los rangos de coordenadas (latitud -90° a 90°, longitud -180° a 180°) durante la conversión y realiza cálculos matemáticos precisos. Para garantizar la precisión, se recomienda cargar datos de muestra antes del uso para verificar los resultados de conversión y confirmar que cumplan con las expectativas antes de procesar datos reales. La herramienta también admite copia con un clic de todos los resultados de conversión de formatos para validación cruzada.'
        }
    ],

    tutorialTitle: 'Cómo Usar el Convertidor de Formato de Coordenadas',
    steps: [
        {
            title: 'Seleccionar Modo de Conversión',
            description: 'En la parte superior del área de entrada izquierda, seleccione el modo de conversión que necesita: Grados Decimales (DD), Grados Minutos Segundos (DMS) o Grados Minutos (DM). Diferentes modos corresponden a diferentes formatos de entrada y diseños de interfaz.',
            note: 'El modo de conversión determina el tipo y número de campos de entrada, por favor seleccione el modo apropiado según su formato de datos.'
        },
        {
            title: 'Ingresar Datos de Coordenadas',
            description: 'Basado en el modo de conversión seleccionado, ingrese datos de coordenadas en los campos de entrada correspondientes. Puede ingresar coordenadas individuales o múltiples líneas de datos de coordenadas en el área de entrada por lotes, con latitud y longitud separadas por comas por línea.',
            note: 'Los modos DMS y DM requieren entrada separada de grados, minutos, segundos (o grados, minutos) y dirección (N/S/E/O).'
        },
        {
            title: 'Ajustar Configuración de Precisión',
            description: 'Use el control deslizante de decimales para ajustar la precisión de los resultados de conversión. El rango del control deslizante es de 0-8 decimales, y los resultados se actualizan en tiempo real durante el ajuste, facilitando la selección de la precisión más adecuada.',
            note: 'El ajuste de precisión afecta a todos los resultados de conversión, incluyendo los resultados mostrados actualmente y los resultados de conversión por lotes.'
        },
        {
            title: 'Realizar Operación de Conversión',
            description: 'Haga clic en el botón "Convertir Coordenadas" para realizar la operación de conversión. La herramienta calculará automáticamente y mostrará resultados de conversión en los tres formatos basados en sus datos de entrada y modo seleccionado.',
            note: 'Después de completar la conversión, el primer resultado mostrará una animación resaltada para ayudarle a localizarlo rápidamente.'
        },
        {
            title: 'Exportar o Copiar Resultados',
            description: 'Haga clic en el botón de copia junto a cada resultado para copiar todos los formatos de ese resultado al portapapeles. Si hay múltiples resultados, puede usar el botón "Exportar por Lotes" en la parte superior para guardar todos los resultados como un archivo de texto.',
            note: 'Las operaciones de copia también activan animaciones resaltadas, permitiéndole saber claramente qué resultado ha sido copiado.'
        }
    ],

    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido con éxito cómo usar nuestro convertidor de formato de coordenadas. Ahora puede convertir fácilmente entre formatos de Grados Decimales, Grados Minutos Segundos y Grados Minutos, mejorando la eficiencia laboral a través de funciones de procesamiento por lotes y ajuste de precisión.',

    relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarle',
    relatedTools: [
        {
            name: 'Calculadora de División de Hojas Cartográficas',
            description: 'Calcula números de hojas cartográficas basados en coordenadas de latitud y longitud, soportando múltiples escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Convertidor de Tiempo GNSS',
            description: 'Herramienta para conversión mutua entre tiempo GPS, tiempo BeiDou y tiempo UTC.',
            url: 'https://www.ufreetools.com/tool/gnss-time-converter'
        },
        {
            name: 'Calculadora de Área y Perímetro',
            description: 'Soporta dibujar polígonos para calcular automáticamente área y perímetro, proporcionando cambio de múltiples unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculadora de Línea Base',
            description: 'Ingrese coordenadas de inicio y fin para calcular longitud y acimut de línea base, soportando análisis de propagación de errores.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Sistema de Coordenadas Geográficas',
            description: 'Introducción detallada a sistemas de coordenadas geográficas en Wikipedia',
            url: 'https://es.wikipedia.org/wiki/Sistema_de_coordenadas_geográficas'
        },
        {
            name: 'Geodesia',
            description: 'Recursos académicos sobre sistemas de coordenadas y conversión',
            url: 'https://es.wikipedia.org/wiki/Geodesia'
        },
        {
            name: 'Biblioteca de Conversión DMS',
            description: 'Biblioteca JavaScript de código abierto para conversión de coordenadas en GitHub',
            url: 'https://github.com/gmaclennan/parse-dms'
        }
    ]
}