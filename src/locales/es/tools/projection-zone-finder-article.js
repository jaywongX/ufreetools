export default {
    title: 'Guía de Usuario del Buscador de Zona de Proyección - Calculadora de Zona de Proyección UTM en Línea',
    functionTitle: '¿Qué es el Buscador de Zona de Proyección y para qué sirve?',
    intro: 'Nuestro <strong>Buscador de Zona de Proyección</strong> es una herramienta en línea potente que calcula automáticamente números de zona UTM de 3° y 6° basados en coordenadas de latitud y longitud ingresadas. La herramienta admite entrada de coordenadas individuales y por lotes, proporciona funcionalidad de visualización de cuadrícula de zonas del mapa, y muestra información de zona de proyección en tiempo real al mover el ratón sobre el mapa. A través del resaltado dinámico de áreas de zonas, puede entender intuitivamente la relación entre coordenadas y zonas de proyección. Usando nuestra <strong>Calculadora de Zona de Proyección UTM</strong>, puede obtener fácilmente los números de zona de proyección correspondientes a puntos de coordenadas, con funciones de copia con un clic y exportación por lotes para satisfacer necesidades profesionales de topografía y SIG.',

    useCasesTitle: 'Escenarios de Aplicación Comunes para el Buscador de Zona de Proyección',
    useCases: [
        'Procesamiento de datos SIG, determinando números de zona de proyección UTM para puntos de coordenadas',
        'Procesamiento de imágenes de teledetección, seleccionando parámetros de proyección correctos para imágenes satelitales',
        'Configuración de parámetros de proyección en proyectos de topografía, asegurando la consistencia del sistema de coordenadas de los datos',
        'Creación de mapas y análisis espacial, seleccionando sistemas de coordenadas de proyección apropiados',
        'Estandarización de datos de investigación geográfica, unificando números de zona de proyección para integración de datos',
        'Aplicaciones de navegación y posicionamiento, configurando parámetros de proyección UTM correctos para dispositivos GPS'
    ],

    tipTitle: 'Consejos Profesionales:',
    tipContent: 'Al procesar coordenadas por lotes, se recomienda primero probar los resultados de cálculo de zona de proyección con datos de muestra para asegurar que el tipo de proyección seleccionado (zona de 3° o zona de 6°) cumpla con los requisitos de su proyecto. Al mover el ratón sobre el mapa, puede ver intuitivamente la distribución de zonas de proyección en diferentes áreas, ayudándole a entender mejor el principio de zonificación de proyección UTM.',

    conclusion: 'El <strong>Buscador de Zona de Proyección</strong> es muy útil para ingenieros topógrafos, profesionales de SIG, procesadores de datos de teledetección, y cualquier persona que necesite usar coordenadas de proyección UTM. Al usar nuestra Calculadora de Zona de Proyección UTM, puede ahorrar mucho tiempo de cálculo manual, evitar errores de selección de zona de proyección, y entender mejor la relación entre coordenadas y zonas de proyección a través de funciones de visualización. Nuestra herramienta hace que el proceso de configuración de parámetros de proyección sea simple y eficiente sin necesidad de instalar ningún software profesional.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué tipos de proyección admite el Buscador de Zona de Proyección?',
            answer: 'Nuestro <strong>Buscador de Zona de Proyección en línea</strong> admite dos tipos principales de proyección UTM: zonas de 6° y zonas de 3°. La zona de 6° es el método estándar de división de zonas para la proyección UTM, con 60 zonas de proyección globalmente, cada una de 6° de longitud; la zona de 3° es un método de división más refinado, con 120 zonas de proyección globalmente, cada una de 3° de longitud. Puede elegir el tipo de proyección apropiado para el cálculo según los requisitos de su proyecto.'
        },
        {
            question: '¿Cómo realizar consultas de zona de proyección por coordenadas por lotes?',
            answer: 'Usando nuestra <strong>Calculadora de Zona de Proyección UTM</strong>, simplemente ingrese múltiples pares de coordenadas línea por línea en el área de entrada por lotes, separando longitud y latitud con comas. Por ejemplo: 116.3975,39.9085. Después de hacer clic en el botón de calcular, el sistema calculará automáticamente los números de zona de proyección correspondientes para todos los puntos de coordenadas, mostrando información de número de zona, hemisferio y meridiano central. La función de exportación por lotes puede guardar todos los resultados como un archivo de texto.'
        },
        {
            question: '¿Cómo se muestra la cuadrícula de zonas en el mapa?',
            answer: 'Nuestra <strong>herramienta Buscador de Zona de Proyección</strong> muestra la cuadrícula de zonas de proyección UTM en el área del mapa de la derecha. Cuando mueve el ratón sobre el mapa, mostrará en tiempo real el número de zona de proyección de la posición actual. Esta función de visualización le ayuda a entender intuitivamente el patrón de distribución de zonas de proyección UTM y a dominar mejor la relación entre coordenadas y zonas de proyección.'
        },
        {
            question: '¿Cómo se garantiza la precisión del cálculo de zona de proyección?',
            answer: 'Nuestra herramienta utiliza fórmulas estándar de cálculo de zona de proyección UTM para asegurar la precisión de los resultados de cálculo. Para zonas de 6°, la fórmula de cálculo del número de zona es: Math.floor((longitud + 180) / 6) + 1; para zonas de 3°, la fórmula de cálculo del número de zona es: Math.floor((longitud + 180) / 3) + 1. La herramienta también valida la validez de las coordenadas ingresadas (longitud -180° a 180°, latitud -90° a 90°) para asegurar la confiabilidad de los resultados de cálculo.'
        },
        {
            question: '¿Cómo usar los resultados de consulta?',
            answer: 'Los números de zona de proyección calculados pueden usarse para configuraciones de parámetros en varios softwares SIG y equipos de topografía. Puede copiar resultados individuales con un clic, o usar la función de exportación por lotes para guardar todos los resultados como un archivo de texto. Los resultados incluyen información de longitud, latitud, número de zona, hemisferio y meridiano central, proporcionando una referencia completa para la configuración de su sistema de coordenadas de proyección.'
        }
    ],

    tutorialTitle: 'Cómo Usar el Buscador de Zona de Proyección',
    steps: [
        {
            title: 'Seleccionar Tipo de Proyección',
            description: 'En la parte superior del área de entrada izquierda, seleccione el tipo de proyección que necesita: zona UTM de 6° o zona UTM de 3°. La zona de 6° es adecuada para la mayoría de las necesidades estándar de proyección de mapas, mientras que la zona de 3° es adecuada para proyectos de topografía que requieren mayor precisión.',
            note: 'El tipo de proyección determina la densidad de zonas y el método de cálculo. Por favor, elija el tipo apropiado según los requisitos de su proyecto.'
        },
        {
            title: 'Ingresar Datos de Coordenadas',
            description: 'Al ingresar una coordenada individual, ingrese valores en los cuadros de entrada de longitud y latitud respectivamente; para entrada por lotes, ingrese múltiples pares de coordenadas línea por línea en el área de texto, separando longitud y latitud con comas por línea. Por ejemplo: 116.3975,39.9085.',
            note: 'El rango de longitud es de -180° a 180°, el rango de latitud es de -90° a 90°. Las coordenadas fuera de estos rangos serán ignoradas.'
        },
        {
            title: 'Realizar Operación de Cálculo',
            description: 'Haga clic en el botón "Calcular Zona" para realizar la operación de cálculo. La herramienta calculará automáticamente y mostrará el número de zona de proyección correspondiente, hemisferio y meridiano central para cada punto de coordenada basado en sus coordenadas ingresadas y el tipo de proyección seleccionado.',
            note: 'Después de completar el cálculo, el primer resultado mostrará un efecto de resaltado para ayudarle a localizarlo rápidamente.'
        },
        {
            title: 'Ver Zonas del Mapa',
            description: 'En el área del mapa de la derecha, puede ver números de zona de proyección en diferentes ubicaciones moviendo el ratón. El mapa mostrará información del número de zona de la posición del ratón en tiempo real, ayudándole a entender intuitivamente la distribución de zonas de proyección UTM.',
            note: 'La cuadrícula de zonas en el mapa se mostrará dinámicamente según su tipo de proyección seleccionado (zona de 3° o zona de 6°).'
        },
        {
            title: 'Exportar o Copiar Resultados',
            description: 'Haga clic en el botón de copiar junto a cada resultado para copiar ese resultado al portapapeles. Si hay múltiples resultados, puede usar el botón "Exportación por Lotes" en la parte superior para guardar todos los resultados como un archivo de texto.',
            note: 'Las operaciones de copia también activan animaciones de resaltado, permitiéndole saber claramente qué resultado ha sido copiado.'
        }
    ],

    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido con éxito cómo usar nuestro Buscador de Zona de Proyección. Ahora puede calcular fácilmente números de zona de proyección UTM para cualquier punto de coordenada, mejorando la eficiencia laboral a través de funciones de procesamiento por lotes y visualización.',

    relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarle',
    relatedTools: [
        {
            name: 'Convertidor de Formato de Coordenadas',
            description: 'Admite conversión entre formatos de grados decimales, grados minutos segundos y grados minutos, proporcionando funciones de conversión y exportación por lotes.',
            url: 'https://www.ufreetools.com/tool/coordinate-format-converter'
        },
        {
            name: 'Calculadora de División de Hojas de Mapa',
            description: 'Calcula números de hojas de mapa basados en coordenadas de latitud y longitud, admitiendo múltiples escalas.',
            url: 'https://www.ufreetools.com/tool/sheet-divider-calculator'
        },
        {
            name: 'Calculadora de Área y Perímetro',
            description: 'Admite dibujar polígonos para calcular automáticamente área y perímetro, proporcionando cambio de múltiples unidades.',
            url: 'https://www.ufreetools.com/tool/area-perimeter-calculator'
        },
        {
            name: 'Calculadora de Línea Base',
            description: 'Ingrese coordenadas de inicio y fin para calcular longitud y acimut de línea base, admitiendo análisis de propagación de error.',
            url: 'https://www.ufreetools.com/tool/baseline-calculator'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Sistema de Coordenadas Universal Transversal de Mercator',
            description: 'Introducción detallada a la proyección Universal Transversal de Mercator en Wikipedia',
            url: 'https://es.wikipedia.org/wiki/Sistema_de_coordenadas_Universal_Transversal_de_Mercator'
        },
        {
            name: 'Proyección Cartográfica',
            description: 'Recursos académicos sobre métodos y aplicaciones de proyección cartográfica',
            url: 'https://es.wikipedia.org/wiki/Proyección_cartográfica'
        },
        {
            name: 'Sistema de Coordenadas Gauss-Krüger',
            description: 'Introducción a métodos de proyección cartográfica comúnmente usados en China',
            url: 'https://es.wikipedia.org/wiki/Proyección_de_Mercator_transversal'
        }
    ]
}