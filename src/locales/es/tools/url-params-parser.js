export default {
  name: 'Analizador de Parámetros de URL',
  description: 'Analiza, interpreta y manipula parámetros de URL y cadenas de consulta',
  input: {
    title: 'Entrada de URL',
    url: 'URL',
    urlPlaceholder: 'https://ejemplo.com/ruta?param1=valor1&param2=valor2 o param1=valor1&param2=valor2',
    parse: 'Usar URL Actual de la Página',
    clear: 'Limpiar',
    examples: 'Cargar Ejemplo',
    parseFromClipboard: 'Pegar desde el Portapapeles',
    history: 'Historial'
  },
  params: {
    title: 'Lista de Parámetros',
    name: 'Nombre del Parámetro',
    value: 'Valor del Parámetro',
    decoded: 'Valor Decodificado',
    type: 'Tipo',
    actions: 'Acciones',
    add: 'Agregar Parámetro',
    remove: 'Eliminar',
    edit: 'Editar',
    copy: 'Copiar como Texto',
    sort: 'Método de Ordenamiento',
    encode: 'Codificar',
    decode: 'Decodificar',
    noParams: 'No se detectaron parámetros en la URL',
    noMatchingParams: 'No se encontraron parámetros coincidentes',
    modified: 'Modificado',
    original: 'Original',
    search: 'Buscar parámetros...'
  },
  results: {
    title: 'Partes de la URL',
    parsed: 'Partes Analizadas',
    protocol: 'Protocolo',
    domain: 'Nombre de Dominio',
    port: 'Puerto',
    path: 'Ruta',
    queryString: 'Cadena de Consulta',
    fragment: 'Fragmento (Hash)',
    constructed: 'URL Construida',
    copyUrl: 'Copiar URL',
    openUrl: 'Abrir URL',
    shareUrl: 'Compartir URL',
    shortenUrl: 'Acortar URL',
    encoded: 'URL Codificada',
    decoded: 'URL Decodificada'
  },
  tools: {
    title: 'Herramientas',
    buildQuery: 'Construir Consulta',
    compareUrls: 'Comparar URLs',
    validateUrl: 'Validar URL',
    trackingRemoval: 'Eliminar Parámetros de Seguimiento',
    convertToCode: 'Convertir a Código',
    diffTool: 'Diferencia de Parámetros',
    baseConversion: 'Conversión Numérica',
    jsonToQuery: 'JSON a Cadena de Consulta',
    queryToJson: 'Cadena de Consulta a JSON'
  },
  visualization: {
    title: 'Visualización',
    tree: 'Vista de Árbol',
    table: 'Tabla de Parámetros',
    json: 'Formato JSON',
    raw: 'Vista Bruta',
    hierarchical: 'Vista Jerárquica',
    nested: 'Parámetros Anidados',
    auto: 'Detectar Automáticamente',
    fullUrl: 'URL Completa',
    queryOnly: 'Solo Cadena de Consulta',
    hideJson: 'Ocultar JSON',
    viewAsJson: 'Ver como JSON'
  },
  types: {
    string: 'Cadena',
    number: 'Número',
    boolean: 'Booleano',
    array: 'Arreglo',
    object: 'Objeto',
    date: 'Fecha',
    email: 'Correo Electrónico',
    ip: 'Dirección IP',
    color: 'Color',
    unknown: 'Desconocido'
  },
  settings: {
    title: 'Configuración',
    detectTypes: 'Modo de Detección',
    decodeAutomatically: 'Decodificación Automática',
    decodeAuto: 'Decodificar Automáticamente',
    decodeOnce: 'Decodificar Una Vez',
    decodeTwice: 'Decodificar Dos Veces',
    noDecode: 'Sin Decodificación',
    encodeAutomatically: 'Codificar caracteres especiales',
    preserveCase: 'Preservar mayúsculas/minúsculas',
    sortAlphabetically: 'Ordenar parámetros alfabéticamente',
    sortDefault: 'Orden Original',
    sortNameAsc: 'Nombre del Parámetro Ascendente',
    sortNameDesc: 'Nombre del Parámetro Descendente',
    sortValueAsc: 'Valor del Parámetro Ascendente',
    sortValueDesc: 'Valor del Parámetro Descendente',
    arrayFormat: 'Formato de Arreglo',
    objectFormat: 'Formato de Objeto',
    emptyValues: 'Valores vacíos',
    defaultProtocol: 'Protocolo por defecto'
  },
  codes: {
    title: 'Opciones de Exportación',
    javascript: 'JavaScript (URLSearchParams)',
    python: 'Python',
    php: 'PHP',
    ruby: 'Ruby',
    java: 'Java',
    csharp: 'C#',
    go: 'Go',
    copyCode: 'Copiar Código',
    copyJson: 'Copiar JSON',
    jsComment1: 'Crear objeto URLSearchParams',
    jsComment2: 'Obtener cadena de consulta',
    jsComment3: 'Agregar a una URL',
    phpComment1: 'Matriz de parámetros',
    phpComment2: 'Generar cadena de consulta',
    phpComment3: 'URL completa',
    pythonComment1: 'Usando urllib.parse',
    pythonComment2: 'Diccionario de parámetros',
    pythonComment3: 'Generar cadena de consulta',
    pythonComment4: 'URL completa'
  },
  messages: {
    parsed: 'URL analizada correctamente',
    noUrl: 'Por favor ingrese una URL',
    invalidUrl: 'Formato de URL o cadena de consulta inválido',
    copied: '¡Copiado al portapapeles!',
    paramAdded: 'Parámetro agregado',
    paramRemoved: 'Parámetro eliminado',
    trackingRemoved: 'Parámetros de seguimiento eliminados',
    urlOpened: 'URL abierta en nueva pestaña',
    urlShortened: 'URL acortada',
    error: 'Error: {message}',
    importSuccess: 'URL importada correctamente',
    exportSuccess: 'Datos exportados correctamente',
    clipboardError: 'No se pudo leer el portapapeles. Asegúrese de haber otorgado permisos, o pegue manualmente.',
    copyFailed: 'Fallo al copiar, por favor hágalo manualmente'
  },
  article: {
    title: "Analizador de Parámetros de URL: Guía Completa para el Análisis de Cadenas de Consulta",
    features: {
      title: "Entendiendo los Parámetros de URL y las Cadenas de Consulta",
      description: "El <strong>Analizador de Parámetros de URL</strong> es una herramienta completa diseñada para decodificar, analizar y manipular cadenas de consulta y parámetros dentro de las URLs. Las cadenas de consulta son las partes de las URLs que siguen al signo de interrogación (?) y contienen datos en forma de pares nombre-valor, generalmente utilizados para pasar información entre páginas web o en solicitudes API.<br><br>Nuestro <strong>analizador de cadenas de consulta</strong> desglosa URLs complejas en sus componentes, detectando automáticamente los parámetros y ofreciendo múltiples formatos de visualización. Soporta tanto el análisis estándar de URL como consultas especializadas, con funciones para extracción de parámetros, inspección de valores y generación de código para lenguajes populares.",
      useCases: {
        title: "Aplicaciones Prácticas del Análisis de Parámetros de URL",
        items: [
          "<strong>Análisis Web y Seguimiento UTM</strong>: Los mercadólogos digitales trabajan frecuentemente con URLs que contienen múltiples parámetros UTM (como utm_source, utm_medium, utm_campaign). Nuestro <strong>decodificador de URL</strong> facilita el análisis de estos parámetros de seguimiento, verificar su configuración correcta y solucionar problemas en campañas de marketing.",
          "<strong>Depuración y Desarrollo de APIs</strong>: Al trabajar con APIs REST que usan parámetros de consulta, los desarrolladores pueden usar esta herramienta para examinar URLs de solicitud, verificar el formato de los parámetros y asegurar la codificación adecuada de caracteres especiales. El <strong>extractor de parámetros de URL</strong> ayuda a aislar valores específicos que podrían estar causando errores o comportamientos inesperados.",
          "<strong>Análisis SEO y Optimización de Estructura de URL</strong>: Los profesionales de optimización para motores de búsqueda pueden examinar estructuras de URL para garantizar que sigan buenas prácticas. Al analizar cadenas de consulta, pueden identificar posibles problemas con duplicación de parámetros, exceso de parámetros o valores que puedan evitar un buen índice en buscadores.",
          "<strong>Análisis de Filtros y Búsquedas en Comercio Electrónico</strong>: Los sitios online suelen usar cadenas de consulta complejas para representar filtros de productos, opciones de ordenamiento y criterios de búsqueda. El <strong>analizador de parámetros de consulta</strong> ayuda a desarrolladores y analistas a entender cómo interactúan estos parámetros y afectan las listas de productos.",
          "<strong>Pruebas de Aplicaciones Web</strong>: Los ingenieros de calidad pueden usar esta herramienta para extraer parámetros de escenarios de prueba, modificar valores para crear casos extremos y generar nuevas URLs para pruebas sistemáticas de aplicaciones web que dependen de parámetros de consulta.",
          "<strong>Propósitos Educativos</strong>: Estudiantes y desarrolladores que aprenden sobre estructuras de URL y comunicaciones HTTP pueden utilizar las visualizaciones y ejemplos de código para comprender mejor cómo se formatean, codifican y utilizan los parámetros en diferentes contextos de programación."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre Parámetros de URL",
      items: [
        {
          question: "¿Cuál es la diferencia entre parámetros de URL y cadenas de consulta?",
          answer: "Aunque comúnmente se usan indistintamente, estos términos tienen diferencias sutiles:<br><br><strong>Cadena de Consulta</strong>: Es toda la parte de la URL después del signo de interrogación (?), que contiene todos los parámetros. Por ejemplo, en <code>https://ejemplo.com/buscar?q=café&page=2</code>, la cadena de consulta es <code>q=café&page=2</code>.<br><br><strong>Parámetros de URL</strong>: Son los pares individuales nombre-valor dentro de la cadena de consulta. En el ejemplo anterior, hay dos parámetros: <code>q=café</code> y <code>page=2</code>.<br><br>Nuestro <strong>analizador de parámetros de URL</strong> analiza tanto la cadena de consulta completa como cada parámetro individual, mostrándote tanto la visión general como los detalles más granulares."
        },
        {
          question: "¿Por qué algunos parámetros aparecen codificados con %20 o símbolos +?",
          answer: "La codificación URL (también llamada codificación porcentual) es necesaria porque las URLs solo pueden contener ciertos caracteres ASCII. Caracteres especiales, espacios y caracteres no ASCII deben ser codificados para incluirse de manera segura en las URLs.<br><br>Ejemplos comunes de codificación URL:<br>• Los espacios se convierten en <code>%20</code> o <code>+</code><br>• Los signos de interrogación se convierten en <code>%3F</code><br>• Los ampersands se convierten en <code>%26</code><br>• Los signos de igualdad se convierten en <code>%3D</code><br><br>Nuestro <strong>decodificador de URL</strong> maneja automáticamente esta codificación, mostrando tanto los valores brutos como los decodificados para que puedas entender el contenido real transmitido. Cuando los parámetros contienen caracteres especiales, emojis o caracteres internacionales, la codificación evita que rompan la estructura de la URL."
        },
        {
          question: "¿Puedo analizar parámetros anidados complejos o JSON en las cadenas de consulta?",
          answer: "Sí, nuestro <strong>analizador de consulta URL</strong> maneja formatos avanzados de parámetros:<br><br>1. <strong>Parámetros estilo arreglo</strong> como <code>colores[]=rojo&colores[]=azul</code> o <code>colores=rojo,azul</code><br><br>2. <strong>Notación de objetos anidados</strong> como <code>filtro[precio][min]=10&filtro[precio][max]=50</code><br><br>3. <strong>Valores JSON codificados</strong> en parámetros como <code>data=&#123;&quot;nombre&quot;:&quot;Juan&quot;,&quot;edad&quot;:30&#125;</code><br><br>La herramienta detecta automáticamente estas estructuras complejas y proporciona vistas especializadas. Para valores JSON, ofrece una opción de vista formateada que hace más legible los datos anidados. Esto es especialmente útil para puntos finales API que aceptan opciones complejas de filtrado, ordenamiento o configuración mediante la URL."
        },
        {
          question: "¿Cómo puedo usar los fragmentos de código generados en mis aplicaciones?",
          answer: "La función de generación de código provee fragmentos listos para usar al trabajar con parámetros de URL analizados en distintos lenguajes:<br><br>1. <strong>Para desarrollo frontend</strong>: Usa el código JavaScript (URLSearchParams) para extraer o manipular parámetros en aplicaciones basadas en navegador.<br><br>2. <strong>Para procesamiento backend</strong>: Usa fragmentos en Python, PHP u otros lenguajes del lado del servidor para analizar URLs entrantes o construir nuevas URLs con la misma estructura de parámetros.<br><br>3. <strong>Para integración API</strong>: Usa el fragmento correspondiente como punto inicial al construir solicitudes a APIs que requieran la misma estructura de parámetros.<br><br>Cada fragmento muestra la forma correcta de construir, modificar y extraer parámetros URL usando bibliotecas estándar de cada lenguaje, siguiendo mejores prácticas para manejo y codificación de URLs."
        },
        {
          question: "¿Existen limitaciones en los tipos de URLs que puedo analizar?",
          answer: "Aunque nuestro <strong>analizador de parámetros de URL</strong> está diseñado para manejar la mayoría de URLs y cadenas de consulta estándar, existen algunas limitaciones que debes conocer:<br><br>1. <strong>Longitud de URL</strong>: URLs extremadamente largas (más de 100,000 caracteres) podrían causar problemas de rendimiento, aunque la mayoría de URLs prácticas están muy por debajo de este límite.<br><br>2. <strong>Formatos No Estándar</strong>: Algunas aplicaciones usan formatos personalizados de parámetros que no siguen convenciones estándar. La herramienta intentará analizarlos, pero podría no visualizar óptimamente su estructura.<br><br>3. <strong>Parámetros Basados en Hash</strong>: Los parámetros en la parte fragmento/hash de la URL (después de #) se analizan por separado de los parámetros regulares.<br><br>4. <strong>Codificaciones Múltiples</strong>: Ocasionalmente, los parámetros pueden estar codificados varias veces. La herramienta ofrece la opción \"Decodificar Dos Veces\", pero codificaciones extremadamente complejas podrían requerir manejo especializado.<br><br>Para la mayoría de propósitos de desarrollo web, marketing digital y pruebas API, estas limitaciones rara vez se presentan, y la herramienta maneja cómodamente los formatos de URL comunes en la web actual."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Analizador de Parámetros de URL",
      step1: "<strong>Ingresar una URL o cadena de consulta</strong>: En el campo de entrada de URL, pegue una URL completa (por ejemplo https://ejemplo.com/pagina?param=valor) o solo la parte de consulta (param=valor). También puede hacer clic en \"Usar URL Actual\" para analizar la dirección de la página donde esté, o \"Pegar desde el Portapapeles\" para insertar rápidamente contenido copiado previamente.",
      step2: "<strong>Seleccionar opciones de análisis</strong>: Elija el modo de análisis apropiado según su entrada. \"Detectar Automáticamente\" funciona bien para la mayoría de los casos, determinando si ingresó una URL completa o solo una cadena de consulta. Para decodificación, puede seleccionar opciones como \"Decodificar Automáticamente\" para URLs normales, \"Decodificar Una Vez\" o \"Decodificar Dos Veces\" para parámetros doblemente codificados.",
      step3: "<strong>Revisar los parámetros extraídos</strong>: Tras el análisis, la herramienta muestra todos los parámetros detectados en la tabla. Puede ver el nombre y valor de cada parámetro, realizar acciones como copiar individualmente y buscar parámetros específicos con el filtro de búsqueda.",
      step4: "<strong>Explorar diferentes opciones de visualización</strong>: Cambie entre diferentes vistas usando las pestañas bajo la sección de resultados. La \"Tabla de Parámetros\" muestra todos los parámetros en una lista estructurada, \"Formato JSON\" presenta los parámetros como objeto JSON y \"Partes de la URL\" desglosa la URL completa incluyendo protocolo, dominio, ruta y cadena de consulta.",
      step5: "<strong>Analizar valores de parámetros complejos</strong>: Para parámetros que contienen JSON o datos estructurados, haga clic en \"Ver como JSON\" para ver una representación formateada. Esto facilita entender estructuras de datos anidadas que pueden estar codificadas dentro de un único valor de parámetro.",
      step6: "<strong>Ordenar y filtrar parámetros</strong>: Use las opciones de ordenamiento para organizar los parámetros por nombre o valor ascendente/descendente. Esto es especialmente útil cuando trabaja con URLs que contienen muchos parámetros, permitiéndole organizarlos lógicamente.",
      step7: "<strong>Exportar y usar los resultados</strong>: En la pestaña \"Opciones de Exportación\", puede ver y copiar fragmentos de código en JavaScript, Python, PHP y otros lenguajes. Estos fragmentos muestran cómo trabajar con los mismos parámetros mediante programación, ahorrando tiempo de desarrollo al implementar funcionalidad similar en sus aplicaciones."
    },
    conclusion:
      "El Analizador de Parámetros de URL simplifica la tarea a menudo compleja de trabajar con cadenas de consulta y parámetros de URL, proporcionando a desarrolladores, mercadólogos y analistas una poderosa herramienta para entender y manipular direcciones web. Al descomponer URLs en sus partes componentes y ofrecer múltiples opciones de visualización, conecta la brecha entre direcciones web crudas y datos estructurados. Ya sea depurando una llamada API compleja, analizando parámetros de campaña publicitaria o aprendiendo sobre desarrollo web, esta herramienta ofrece valiosas perspectivas sobre cómo se transmite la información a través de URLs en el ecosistema web moderno."
  }
};