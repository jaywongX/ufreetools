export default {
    title: 'Calculadora de Medición Geodésica en Línea: Cálculo Preciso de Distancia y Área en la Superficie Terrestre',
    functionTitle: '¿Qué es una Calculadora de Medición Geodésica y sus Usos?',
    intro: 'Nuestra <strong>Calculadora de Medición Geodésica en Línea</strong> es una herramienta de cálculo geoespacial de nivel profesional que calcula con precisión distancias, azimuts y áreas en la superficie terrestre basándose en modelos elipsoidales. A diferencia de los cálculos planos simples, las mediciones geodésicas consideran la curvatura de la Tierra y su forma elipsoidal, proporcionando resultados de medición geoespacial de alta precisión para topografía, navegación, planificación territorial e investigación científica. Esta <strong>herramienta de medición geodésica</strong> admite múltiples parámetros de elipsoide estándar internacional (como WGS84, CGCS2000, etc.) y proporciona visualización de mapas intuitiva, permitiéndole ver claramente sus resultados de medición.',

    useCasesTitle: 'Aplicaciones Comunes de la Calculadora de Medición Geodésica',
    useCases: [
        'Profesionales de topografía y Sistemas de Información Geográfica (SIG) que realizan análisis geoespacial preciso',
        'Agrimensores que calculan áreas de parcelas y longitudes de límites',
        'Planificación de navegación marítima y aérea, calculando distancias de rutas de círculo máximo y azimuts',
        'Investigadores geográficos que realizan análisis de datos geoespaciales',
        'Ingenieros que planifican infraestructuras que abarcan grandes distancias (como tuberías, cables, carreteras)',
        'Sectores militares y de defensa para posicionamiento preciso y cálculos de distancia',
        'Profesionales de gestión ambiental y de recursos que evalúan tamaños de áreas protegidas',
        'Educadores que demuestran el efecto de la curvatura terrestre en los cálculos de distancia'
    ],

    tipTitle: 'Consejo Profesional:',
    tipContent: 'Para cálculos de larga distancia que abarcan escalas continentales, recomendamos utilizar la opción de algoritmo de alta precisión, que emplea un modelo elipsoidal completo. Aunque computacionalmente más lento, proporciona resultados más precisos, especialmente en regiones polares.',

    conclusion: 'La <strong>medición geodésica</strong> juega un papel crucial en la tecnología geoespacial moderna. Al utilizar nuestra calculadora, puede evitar errores introducidos por cálculos planos y obtener resultados precisos que tienen en cuenta la curvatura de la Tierra. Ya sea un topógrafo profesional, investigador académico o entusiasta interesado en cálculos geoespaciales, esta herramienta satisface sus requisitos de precisión mientras proporciona visualización intuitiva y demostraciones detalladas del proceso de cálculo.',

    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Cuál es la diferencia entre cálculos geodésicos y cálculos de distancia plana?',
            answer: 'Los cálculos geodésicos consideran la curvatura de la Tierra y su forma elipsoidal, mientras que los cálculos de distancia plana tratan la superficie terrestre como plana. Para distancias cortas (unos pocos kilómetros), la diferencia es mínima, pero a medida que aumenta la distancia, la diferencia se vuelve significativa. Por ejemplo, en una distancia de 1000 km, los cálculos planos pueden resultar en errores de decenas de kilómetros. Nuestra <strong>calculadora de medición geodésica</strong> utiliza modelos elipsoidales (como WGS84) para cálculos, proporcionando distancias más precisas de la superficie terrestre.'
        },
        {
            question: '¿Cómo elijo los parámetros de elipsoide apropiados?',
            answer: 'La selección de parámetros de elipsoide debe basarse en su ubicación geográfica y necesidades de aplicación. WGS84 es el estándar utilizado por el Sistema de Posicionamiento Global (GPS) y es adecuado para la mayoría de las aplicaciones globales; CGCS2000 es el estándar nacional de China, adecuado para mediciones en China; otras regiones pueden tener sus propios estándares. Para casos donde está trabajando con mapas o conjuntos de datos específicos, elija los mismos parámetros de elipsoide utilizados por ese conjunto de datos para garantizar la consistencia en los resultados de cálculo.'
        },
        {
            question: '¿Cuál es la diferencia entre la distancia del círculo máximo y la distancia geodésica?',
            answer: 'La distancia del círculo máximo es la distancia más corta entre dos puntos a lo largo de un círculo máximo (el círculo más grande en una esfera), mientras que la distancia geodésica es la distancia más corta en una superficie elipsoidal. Nuestra <strong>herramienta de medición geodésica de alta precisión</strong> calcula la distancia geodésica, considerando la forma elipsoidal de la Tierra. En aplicaciones prácticas, para distancias cortas a medias, la diferencia es pequeña, pero para distancias largas o aplicaciones que requieren alta precisión, el cálculo de distancia geodésica es más preciso.'
        },
        {
            question: '¿Cómo calculo el área de un polígono?',
            answer: 'Para calcular el área de un polígono, primero agregue al menos tres puntos en el área de entrada de coordenadas (en orden para formar un polígono), luego seleccione el modo "Cálculo de Área". Nuestra herramienta utiliza métodos de cálculo de área de polígono esférico, considerando la curvatura de la Tierra, lo que es más preciso que los cálculos planos. Para necesidades de alta precisión, seleccione la opción "Algoritmo de Alta Precisión", que utiliza un modelo elipsoidal completo para cálculos. Los resultados mostrarán el área y el perímetro del polígono, con representación visual en el mapa.'
        },
        {
            question: '¿Qué tan precisos son los resultados del cálculo?',
            answer: 'Nuestra <strong>calculadora de medición geoespacial</strong> ofrece dos opciones de precisión: algoritmo rápido y algoritmo de alta precisión. El algoritmo rápido es adecuado para propósitos generales, típicamente preciso dentro del 0.1%; el algoritmo de alta precisión utiliza un modelo elipsoidal completo con cálculos iterativos, logrando una precisión de hasta 0.001% (nivel de centímetros), adecuado para topografía profesional e investigación científica. La precisión real también depende de la exactitud de las coordenadas de entrada y de qué tan bien coinciden los parámetros de elipsoide seleccionados con la región real.'
        }
    ],

    tutorialTitle: 'Cómo Usar la Calculadora de Medición Geodésica en Línea',
    steps: [
        {
            title: 'Ingresar Puntos de Coordenadas',
            description: 'En el área de entrada de coordenadas, ingrese la latitud y longitud de los puntos que necesita calcular. Puede hacer clic en el botón <strong>"Añadir Punto"</strong> para agregar más puntos. Para cálculos de distancia, se necesitan al menos dos puntos; para cálculos de área, se requieren al menos tres puntos.',
            note: 'Las coordenadas están en formato de grados decimales (por ejemplo, 39.9042, 116.4074), con valores positivos que representan latitud Norte/longitud Este y valores negativos que representan latitud Sur/longitud Oeste.'
        },
        {
            title: 'Seleccionar Parámetros de Elipsoide',
            description: 'Elija los parámetros de elipsoide que se adapten a sus necesidades del menú desplegable. WGS84 es el estándar utilizado por los sistemas GPS globales y es adecuado para la mayoría de las aplicaciones; CGCS2000 es el estándar nacional de China; otras opciones son aplicables para regiones específicas o datos históricos.',
            note: 'Seleccionar los mismos parámetros de elipsoide utilizados por sus datos de mapa o dispositivo GPS garantiza la consistencia en los resultados de cálculo.'
        },
        {
            title: 'Establecer Modo de Cálculo y Precisión',
            description: 'Seleccione el modo <strong>"Distancia y Azimut"</strong> para calcular la distancia y el azimut entre dos puntos, o seleccione el modo <strong>"Cálculo de Área"</strong> para calcular el área del polígono. Luego elija su nivel de precisión deseado: algoritmo rápido o algoritmo de alta precisión.',
            note: 'Para distancias cortas o propósitos generales, el algoritmo rápido es suficientemente preciso; para distancias largas o aplicaciones profesionales, se recomienda el algoritmo de alta precisión.'
        },
        {
            title: 'Configurar Opciones de Visualización',
            description: 'Marque las opciones <strong>"Mostrar Fórmulas de Cálculo"</strong> y <strong>"Mostrar Demostración Dinámica"</strong> según sea necesario. La primera muestra las fórmulas matemáticas y los pasos utilizados en el proceso de cálculo, mientras que la segunda demuestra dinámicamente el camino del círculo máximo o el proceso de construcción del polígono en el mapa.',
            note: 'Mostrar fórmulas de cálculo es particularmente útil para fines educativos o para verificar el proceso de cálculo; la demostración dinámica ayuda a entender intuitivamente los principios de medición de la superficie terrestre.'
        },
        {
            title: 'Ejecutar Cálculo y Ver Resultados',
            description: 'Haga clic en el botón <strong>"Calcular"</strong> para realizar el cálculo. El área de resultados mostrará los datos calculados de distancia, azimut o área, mientras que el mapa mostrará visualmente los resultados de la medición. Puede ajustar las unidades (como kilómetros, metros, millas, etc.) para ver resultados en diferentes unidades.',
            note: 'La visualización del mapa se amplía automáticamente para adaptarse a todos los puntos de entrada; puede usar los controles del mapa para hacer zoom, desplazarse o cambiar tipos de mapa.'
        },
        {
            title: 'Exportar o Compartir Resultados',
            description: 'Después del cálculo, puede usar los botones <strong>"Exportar como PDF"</strong> o <strong>"Exportar como Excel"</strong> para guardar los resultados. El archivo exportado incluye todos los parámetros de entrada, resultados de cálculo y gráficos de visualización, conveniente para compartir o análisis adicional.',
            note: 'Todos los cálculos se realizan en su navegador y no se cargan a ningún servidor, garantizando la seguridad y privacidad de sus datos geográficos.'
        }
    ],

    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido con éxito cómo usar nuestra Calculadora de Medición Geodésica en Línea. Ahora puede realizar cálculos precisos de distancia y área de la superficie terrestre para diversos fines profesionales y educativos.',

    relatedToolsTitle: 'Herramientas Relacionadas Que Pueden Interesarle',
    relatedTools: [
        {
            name: 'Conversor de Sistema de Coordenadas',
            description: 'Convierte coordenadas geográficas entre diferentes sistemas de coordenadas, incluyendo WGS-84, GCJ-02, BD-09, Web Mercator y UTM',
            url: 'https://www.ufreetools.com/tool/coordinate-converter'
        },
        {
            name: 'Reproducción de Trayectos GPS',
            description: 'Visualiza y reproduce trayectos GPS desde varios formatos de archivo (GPX, KML, GeoJSON, CSV).',
            url: 'https://www.ufreetools.com/tool/gps-track-replay'
        },
        {
            name: 'Calculadora de Proyección Gauss',
            description: 'Herramienta para convertir entre coordenadas de proyección Gauss y coordenadas geográficas (latitud y longitud)',
            url: 'https://www.ufreetools.com/tool/gaussian-projection'
        },
        {
            name: 'Visor de Nube de Puntos LIDAR',
            description: 'Visor gratuito en línea de nubes de puntos LIDAR que admite formatos LAS, XYZ, PLY, PCD. Proporciona visualización 3D, múltiples modos de coloración, navegación interactiva y funciones de análisis de datos',
            url: 'https://www.ufreetools.com/tool/lidar-point-cloud-viewer'
        }
    ],

    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Fundamentos de Geodesia',
            description: 'Recursos académicos sobre parámetros de elipsoide y métodos de cálculo geodésico',
            url: 'https://es.wikipedia.org/wiki/Geodesia'
        },
        {
            name: 'Servicio Internacional de Rotación de la Tierra y Sistemas de Referencia',
            description: 'Organización autorizada que proporciona marcos de referencia terrestre internacional y parámetros de elipsoide',
            url: 'https://www.iers.org/IERS/EN/Home/home_node.html'
        },
        {
            name: 'Herramientas de Cálculo del Servicio Geodésico Nacional de EE. UU.',
            description: 'Materiales de referencia para varios métodos y algoritmos de cálculo geodésico',
            url: 'https://www.ngs.noaa.gov/TOOLS/'
        }
    ]
}