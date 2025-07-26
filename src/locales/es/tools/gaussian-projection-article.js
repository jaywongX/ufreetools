export default {
  title: "Calculadora de Proyección Gauss: Herramienta de conversión bidireccional entre coordenadas geográficas y planas",
  introTitle: "¿Qué es la proyección Gauss y por qué necesita esta herramienta?",
  introPara1: "<strong>La calculadora de proyección Gauss</strong> (también conocida como proyección transversal de Mercator) es una herramienta esencial para ingenieros topógrafos, expertos en cartografía, profesionales de SIG y cualquier persona que trabaje con sistemas de información geográfica. Esta poderosa herramienta de conversión de coordenadas le permite pasar sin problemas entre coordenadas geográficas (latitud y longitud) y coordenadas cartesianas planas (X e Y) utilizando el método de proyección Gauss.",
  introPara2: "Nuestra<strong>herramienta de conversión de proyección Gauss</strong> realiza cálculos precisos tanto en sentido directo (coordenadas geográficas a coordenadas planas) como inverso (coordenadas planas a coordenadas geográficas). Admite múltiples modelos de elipsoide, incluyendo WGS84, CGCS2000, Krassovsky (Pekín 1954), entre otros. La herramienta aplica automáticamente las fórmulas matemáticas y términos correctivos apropiados para garantizar conversiones precisas de coordenadas para sus proyectos de medición y cartografía.",

  scenariosTitle: "Aplicaciones prácticas de los cálculos de proyección Gauss",
  scenario1: "<strong>Topografía y gestión territorial:</strong> Los topógrafos utilizan la conversión de proyección Gauss para transformar coordenadas GPS a sistemas de coordenadas planas locales, para mediciones precisas de tierras, determinación de límites de propiedad y planificación de construcción.",
  scenario2: "<strong>Dibujo de mapas topográficos:</strong> Cartógrafos y profesionales de mapas confían en la proyección Gauss para crear mapas topográficos precisos, manteniendo relaciones angulares y minimizando deformaciones en áreas específicas.",
  scenario3: "<strong>Integración de datos SIG:</strong> Analistas SIG utilizan cálculos de proyección Gauss para integrar datos provenientes de diferentes fuentes con distintos sistemas de coordenadas en un marco de referencia común para análisis espacial.",
  scenario4: "<strong>Proyectos de ingeniería:</strong> Ingenieros civiles y equipos de construcción emplean la proyección Gauss para diseños de infraestructura, asegurando posicionamiento preciso de carreteras, puentes, túneles y servicios públicos respecto a características existentes.",
  scenario5: "<strong>Militar y defensa:</strong> Operaciones militares utilizan coordenadas de proyección Gauss para planificación táctica, navegación y localización de objetivos, cumpliendo requisitos de posicionamiento preciso.",
  scenariosConclusion: "La <strong>versatilidad del cálculo de proyección Gauss</strong> hace que sea indispensable en numerosos campos profesionales donde se requiere posicionamiento espacial preciso. Nuestra herramienta simplifica este complejo proceso matemático en una interfaz simple e intuitiva, adecuada tanto para profesionales como para principiantes.",

  faqTitle: "Preguntas frecuentes sobre la proyección Gauss",
  faq1q: "¿Cuál es la diferencia entre la proyección Gauss y UTM?",
  faq1a: "La proyección Gauss es la base matemática sobre la que se construye el sistema Universal Transverso de Mercator (UTM). Las diferencias principales incluyen:<ul><li>UTM utiliza un sistema estandarizado de zonas, con bandas de 6° y parámetros específicos a nivel global</li><li>La proyección Gauss es más flexible, permitiendo meridianos centrales personalizados y anchos de banda variables (bandas de 3° o 6°)</li><li>UTM incluye un desplazamiento este de 500.000 metros y un factor de escala de 0.9996</li><li>Nuestra<strong>calculadora de proyección Gauss</strong> permite opciones de personalización adicionales de parámetros del elipsoide comparado con calculadoras UTM típicas</li></ul>",

  faq2q: "¿Qué modelo de elipsoide debería elegir para mis cálculos de proyección Gauss?",
  faq2a: "La elección del elipsoide depende de su ubicación geográfica y del estándar del sistema de coordenadas que utilice:<ul><li><strong>WGS84:</strong> Sistema global utilizado por el GPS y cartografía internacional</li><li><strong>CGCS2000:</strong> Sistema oficial de coordenadas de China desde el año 2000</li><li><strong>Krassovsky/Pekín 1954:</strong> Utilizado históricamente en China y partes de Europa del Este</li><li><strong>Xi’an 1980:</strong> Estándar nacional chino anterior a CGCS2000</li></ul>Para la mayoría de aplicaciones modernas, se recomienda utilizar WGS84 o CGCS2000, salvo que esté trabajando específicamente con datos heredados que requieran otro elipsoide. Nuestra<strong>herramienta de conversión de proyección Gauss</strong> soporta todos estos modelos y muchos más.",

  faq3q: "¿Qué precisión ofrecen los cálculos de proyección Gauss en esta herramienta?",
  faq3a: "Nuestra<strong>calculadora de proyección Gauss</strong> implementa el modelo matemático completo e incluye los términos correctivos apropiados para garantizar alta precisión. Para la mayoría de aplicaciones prácticas, la herramienta alcanza una precisión submilimétrica, superando los requisitos típicos de proyectos de medición y cartografía. La precisión depende de la correcta introducción de parámetros del elipsoide y de la especificación correcta de la zona. Para trabajos geodésicos de alta precisión (requisitos submilimétricos), podría requerirse software especializado con términos correctivos adicionales.",

  faq4q: "¿Puedo usar esta herramienta de proyección Gauss para procesar múltiples coordenadas a la vez?",
  faq4a: "Sí, nuestra<strong>herramienta de conversión de proyección Gauss</strong> incluye funciones completas de procesamiento por lotes. Puede:<ul><li>Introducir múltiples pares de coordenadas (latitud/longitud o X/Y)</li><li>Subir archivos CSV, TXT o Excel que contengan datos de coordenadas</li><li>Procesar simultáneamente cientos o miles de puntos</li><li>Exportar resultados en diversos formatos, incluyendo CSV, Excel, GeoJSON, KML y TXT</li></ul>Esto hace que la herramienta sea ideal para proyectos que involucren conjuntos de datos grandes, que serían muy laboriosos de procesar individualmente.",

  faq5q: "¿Qué significan las zonas de 3° y 6° en la proyección Gauss?",
  faq5a: "La proyección Gauss divide la Tierra en zonas de longitud para minimizar deformaciones:<ul><li><strong>Zona de 3°:</strong> Divisiones más estrechas que proporcionan mayor precisión y menos deformación, generalmente usadas para mapas detallados a gran escala y mediciones precisas. Los números de zona van de 1 a 120.</li><li><strong>Zona de 6°:</strong> Divisiones más anchas que cubren áreas mayores, con algo más de deformación en los bordes, comúnmente usadas para mapas regionales y coordenadas UTM. Los números de zona van de 1 a 60.</li></ul>Nuestra<strong>herramienta de cálculo de proyección Gauss</strong> soporta ambos sistemas de zonas y calcula automáticamente el meridiano central según su selección de zona.",

  tutorialTitle: "Guía paso a paso para usar la calculadora de proyección Gauss",
  forwardCalcTitle: "Cálculo directo (Coordenadas geográficas a coordenadas Gauss)",
  step1: "<strong>Seleccionar tipo de cálculo:</strong> Elija \"Directo\" en la opción de tipo de cálculo en la parte superior de la herramienta.",
  step2: "<strong>Seleccionar parámetros del elipsoide:</strong> Seleccione el tipo de elipsoide adecuado (WGS84, CGCS2000, Pekín 1954, etc.) desde el menú desplegable según sus requisitos del sistema de coordenadas.",
  step3: "<strong>Configurar parámetros de proyección:</strong> Seleccione una banda de 3° o 6° e introduzca el número de zona. El meridiano central se calculará automáticamente, o puede introducirlo manualmente si lo requiere.",
  step4: "<strong>Introducir coordenadas geográficas:</strong> Introduzca valores de latitud y longitud en formato decimal. También puede usar el campo de entrada GMS (grados-minutos-segundos) para introducir notación tradicional.",

  inverseCalcTitle: "Cálculo inverso (Coordenadas Gauss a coordenadas geográficas)",
  step5: "<strong>Seleccionar tipo de cálculo:</strong> Elija \"Inverso\" como tipo de cálculo.",
  step6: "<strong>Configurar elipsoide y proyección:</strong> Seleccione los mismos parámetros del elipsoide y configuración de proyección que el sistema de coordenadas original.",
  step7: "<strong>Introducir coordenadas planas:</strong> Introduzca valores de X (norte) e Y (este) en metros.",
  step8: "<strong>Ver resultados:</strong> Las latitudes y longitudes calculadas se mostrarán en formato decimal y GMS para facilitar su consulta.",

  batchTitle: "Procesamiento por lotes de múltiples coordenadas",
  step9: "<strong>Preparar datos:</strong> Formatee pares de coordenadas, uno por línea (latitud,longitud para cálculo directo; X,Y para cálculo inverso). También puede usar el botón \"Subir CSV\" para importar datos desde un archivo.",
  step10: "<strong>Procesar datos por lotes:</strong> Haga clic en \"Calcular por lotes\" para convertir todas las coordenadas simultáneamente.",
  step11: "<strong>Exportar resultados:</strong> Use el botón \"Copiar todo\" o \"Descargar CSV\" para guardar los resultados convertidos y usarlos en otras aplicaciones.",

  tutorialConclusion: "Con esta<strong>calculadora de proyección Gauss</strong>, puede convertir rápidamente coordenadas entre sistemas geográficos y planos sin necesidad de realizar cálculos manuales complejos. La interfaz intuitiva de la herramienta hace que la conversión profesional de coordenadas sea accesible para usuarios de todos los niveles.",

  relatedToolsTitle: "Herramientas relacionadas de coordenadas",
  relatedTool1: "Convertidor de coordenadas",
  relatedTool1Desc: "Convierte coordenadas entre diferentes sistemas, incluyendo UTM, MGRS y diversas cuadrículas nacionales.",
  relatedTool2: "Reproducción de trayectorias GPS",
  relatedTool2Desc: "Visualiza y analiza trayectorias GPS con datos de coordenadas en mapas interactivos.",

  referencesTitle: "Recursos técnicos y referencias",
  reference1: "Sistema Geodésico Mundial 1984 (WGS84) - Agencia Nacional de Inteligencia Geoespacial",
  reference2: "Proyección transversal de Mercator - Wikipedia",
  reference3: "Sistema de coordenadas planas de 1983 - Instituto Nacional de Geodesia"
}
