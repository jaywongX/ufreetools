export default {
  name: 'Cálculo directo e inverso de la proyección Gauss',
  title: 'Cálculo directo e inverso de la proyección Gauss',
  description: 'Herramienta para convertir coordenadas entre coordenadas geográficas (latitud y longitud) y coordenadas de proyección Gauss',
  calculationType: 'Tipo de cálculo',
  forward: 'Directo (Lat/Long → Coordenadas Gauss)',
  inverse: 'Inverso (Coordenadas Gauss → Lat/Long)',
  ellipsoidParameters: 'Parámetros del elipsoide',
  ellipsoidType: 'Tipo de elipsoide',
  centralMeridian: 'Meridiano central (grados)',
  a: 'Semieje mayor',
  f: 'Aplanamiento',
  projectionParameters: 'Parámetros de proyección',
  projectionType: 'Tipo de zona de proyección',
  '3degree': 'Zona de 3°',
  '6degree': 'Zona de 6°',
  zoneNumber: 'Número de zona',
  forwardInput: 'Introducir latitud y longitud',
  latitude: 'Latitud',
  longitude: 'Longitud',
  inverseInput: 'Introducir coordenadas Gauss',
  x: 'Coordenada X (norte)',
  y: 'Coordenada Y (este)',
  calculate: 'Calcular',
  results: 'Resultados',
  dms: 'Formato grados-minutos-segundos',
  batchProcessing: 'Procesamiento por lotes',
  inputFormat: 'Formato de entrada',
  batchForwardFormat: 'Una pareja de coordenadas por línea, formato: latitud,longitud',
  batchInverseFormat: 'Una pareja de coordenadas por línea, formato: coordenadaX,coordenadaY',
  processBatch: 'Calcular por lotes',
  batchResults: 'Resultados por lotes',
  copyAll: 'Copiar todo',
  downloadCSV: 'Descargar CSV',
  copySuccess: 'Copia exitosa',
  copyFailed: 'Fallo en la copia',
  clear: 'Limpiar',
  formula: 'Explicación de fórmulas',
  mapView: 'Vista de mapa',
  dmsInput: 'Entrada en formato GMS',
  dmsInputPlaceholder: '40°26\'46"N 79°58\'56"W',
  parse: 'Analizar',
  dmsParseError: 'Error al analizar el formato GMS',
  invalidLatitude: 'Latitud no válida',
  invalidLongitude: 'Longitud no válida',
  invalidX: 'Coordenada X no válida',
  invalidY: 'Coordenada Y no válida',
  copyToClipboard: 'Copiar al portapapeles',
  autoCalculate: 'Cálculo automático',
  formulaExplanation: 'Explicación de las fórmulas de proyección Gauss',
  uploadCSV: 'Subir CSV',
  exportResults: 'Exportar resultados',
  exportAsGeoJSON: 'Exportar como GeoJSON',
  exportAsKML: 'Exportar como KML',
  exportAsTXT: 'Exportar como TXT',
  mapLayers: 'Capas de mapa',
  standard: 'Estándar',
  satellite: 'Satélite',
  terrain: 'Terreno',
  pointsOnMap: 'Puntos en el mapa',
  clearPoints: 'Eliminar todos los puntos',
  unitSystem: 'Sistema de unidades',
  metric: 'Metros (m)',
  imperial: 'Pies (ft)',
  customEllipsoid: 'Elipsoide personalizado',
  saveCustomEllipsoid: 'Guardar elipsoide personalizado',
  formulaContent: `
    <p>La proyección Gauss utiliza las siguientes fórmulas principales:</p>
    <h4>Directo (Lat/Long → Coordenadas Gauss)</h4>
    <p>Convierte coordenadas geográficas a coordenadas cartesianas planas:</p>
    <ul>
      <li>X = m + términos de corrección</li>
      <li>Y = ν·cos(B)·l + términos de corrección</li>
    </ul>
    <h4>Inverso (Coordenadas Gauss → Lat/Long)</h4>
    <p>Convierte coordenadas cartesianas planas a coordenadas geográficas:</p>
    <ul>
      <li>B = μ + términos de corrección</li>
      <li>L = L₀ + términos de corrección</li>
    </ul>
    <p>Donde:</p>
    <ul>
      <li>B: Latitud</li>
      <li>L: Longitud</li>
      <li>L₀: Meridiano central</li>
      <li>m: Longitud del arco meridiano</li>
      <li>ν: Radio de curvatura en el primer vertical</li>
    </ul>
  `,
  close: 'Cerrar',

  ellipsoids: {
    WGS84: 'Elipsoide WGS84',
    Krasovsky: 'Elipsoide Krassovsky',
    CGCS2000: 'Elipsoide CGCS2000',
    GRS80: 'Elipsoide GRS80',
    Beijing54: 'Elipsoide de Pekín 1954',
    Xian80: 'Elipsoide Xi’an 1980',
    Custom: 'Elipsoide personalizado'
  },

  about: {
    title: 'Sobre la proyección Gauss',
    description: 'La proyección Gauss (proyección Gauss-Kruger) es una proyección cilíndrica transversal conforme que se utiliza ampliamente en topografía y cartografía. Transforma los puntos de la superficie elipsoidal terrestre a un plano, siendo el método habitual para mapas topográficos a escala mediana y grande.',
    forwardTitle: 'Cálculo directo (Lat/Long → Coordenadas Gauss)',
    forwardDescription: 'El cálculo directo convierte coordenadas geográficas (longitud y latitud) en coordenadas cartesianas planas (X, Y). El eje X apunta al norte, el eje Y al este, y el origen está en la intersección del meridiano central y el ecuador.',
    inverseTitle: 'Cálculo inverso (Coordenadas Gauss → Lat/Long)',
    inverseDescription: 'El cálculo inverso transforma coordenadas cartesianas planas (X, Y) de nuevo en coordenadas geográficas (longitud y latitud), siendo la operación inversa del cálculo directo.',
    parametersTitle: 'Descripción de parámetros',
    ellipsoidParam: 'Parámetros del elipsoide',
    ellipsoidDescription: 'Modelo matemático que describe la forma de la Tierra. Diferentes sistemas geodésicos utilizan distintos parámetros de elipsoide. Los más comunes son WGS84, Pekín 1954, Xi’an 1980, CGCS2000, etc.',
    projectionParam: 'Parámetros de zonificación',
    projectionDescription: 'La proyección Gauss normalmente se divide en bandas de 3° y 6°. Las bandas de 3° se usan para mapas topográficos a gran escala, mientras que las de 6° se emplean para escalas medianas y pequeñas. El número de banda determina la posición del meridiano central.'
  },

  loadExample: 'Cargar ejemplo',
  customEllipsoidSaved: 'Elipsoide personalizado guardado correctamente',

  guide: {
    title: 'Guía de uso',
    forwardTitle: 'Cálculo directo (Lat/Long → Coordenadas Gauss)',
    step1: 'Seleccione "Directo" como tipo de cálculo en la parte superior',
    step2: 'Elija los parámetros del elipsoide y la zona de proyección adecuados',
    step3: 'Introduzca valores de latitud y longitud en formato decimal (por ejemplo 39.9042, 116.4074) o use la entrada en formato GMS',
    step4: 'Los resultados se actualizarán automáticamente o haga clic en "Calcular" para ejecutar el cálculo',

    inverseTitle: 'Cálculo inverso (Coordenadas Gauss → Lat/Long)',
    step5: 'Seleccione "Inverso" como tipo de cálculo en la parte superior',
    step6: 'Introduzca las coordenadas X e Y (unidad: metros)',
    step7: 'Consulte los resultados de latitud y longitud en formato decimal y GMS',

    batchTitle: 'Procesamiento por lotes',
    step8: 'Introduzca múltiples grupos de coordenadas en la sección de procesamiento por lotes (una por línea)',
    step9: 'Haga clic en "Calcular por lotes" para calcular todas las coordenadas simultáneamente',
    step10: 'Exporte los resultados como CSV o cópielos al portapapeles',

    mapTitle: 'Interacción con el mapa',
    step11: 'Haga clic en el mapa para añadir puntos y rellenar automáticamente los valores de entrada',
    step12: 'Use el menú desplegable para cambiar entre diferentes capas de mapa',
    step13: 'Exporte los puntos como GeoJSON, KML o TXT para usarlos en otras aplicaciones'
  },
  gaussianProjectionPoints: 'Puntos de proyección Gauss',
  point: 'Punto',
  gaussianProjection: 'Proyección Gauss',
  supportedFormats: 'Soporta: CSV, TXT, Excel',
  excelExportNotice: 'Se ha preparado la exportación a Excel, puede abrir directamente este archivo en Excel.',
  excelProcessNotice: 'No se soporta completamente el procesamiento de Excel, se recomienda usar el formato CSV para obtener mejores resultados.',
  exportAsCSV: 'Exportar como CSV',
  exportAsExcel: 'Exportar como Excel',
  excelExportSuccess: 'Exportación a Excel exitosa',
  excelExportFailed: 'Fallo en la exportación a Excel, se ha revertido al formato CSV',
  excelImportSuccess: 'Importación de Excel exitosa',
  excelImportFailed: 'Fallo en la importación de Excel, pruebe con el formato CSV',
  units: {
    metric: 'Metros (m)',
    km: 'Kilómetros (km)',
    imperial: 'Pies (ft)',
    miles: 'Millas (mi)'
  },
  resetView: 'Restablecer vista del mapa',
  pointsTotal: ' puntos',
  currentPoint: 'Resultado actual',
  article: {
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
  },
}