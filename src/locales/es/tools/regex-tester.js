export default {
  name: 'Probador de Expresiones Regulares',
  description: 'Pruebe y depure expresiones regulares con resaltado en tiempo real y explicaciones',
  actions: {
    test: 'Probar',
    clear: 'Limpiar',
    showExamples: 'Mostrar Ejemplos',
    hideExamples: 'Ocultar Ejemplos',
    copy: 'Copiar'
  },
  sections: {
    examples: 'Ejemplos Comunes de Expresiones Regulares',
    pattern: 'Patrón de Expresión Regular',
    input: 'Texto de Prueba',
    results: 'Resultados de Coincidencia',
    flags: 'Marcadores'
  },
  flags: {
    g: 'Coincidencia global (g)',
    i: 'Ignorar mayúsculas/minúsculas (i)',
    m: 'Multilínea (m)',
    s: 'Punto incluye saltos de línea (s)',
    u: 'Unicode (u)',
    y: 'Anclado (y)'
  },
  errors: {
    emptyRegex: 'Por favor ingrese una expresión regular',
    emptyTestString: 'Por favor ingrese un texto para probar',
    invalidRegex: 'Expresión regular inválida'
  },
  messages: {
    matchesFound: '{count} coincidencias encontradas',
    noMatches: 'No se encontraron coincidencias',
    copied: '¡Copiado al portapapeles!'
  },
  placeholders: {
    pattern: 'Ingrese el patrón de expresión regular',
    testString: 'Ingrese el texto para probar contra el patrón'
  },
  tips: {
    title: 'Consejos de Uso',
    pattern: 'Ingrese su patrón de expresión regular sin las barras que lo rodean.',
    flags: 'Use los marcadores para modificar el comportamiento del patrón (g: global, i: ignorar mayúsculas/minúsculas, m: multilínea).',
    examples: 'Haga clic en "Mostrar Ejemplos" para ver y usar patrones comunes de regex.',
    testing: 'Después de ingresar su patrón y texto de prueba, haga clic en "Probar" para ver las coincidencias.'
  },
  article: {
    title: "Probador de Expresiones Regulares: Herramienta Interactiva para Coincidencia de Patrones",
    features: {
      title: "Entendiendo las Expresiones Regulares y la Coincidencia de Patrones",
      description: "El <strong>Probador de Expresiones Regulares</strong> es una poderosa herramienta interactiva diseñada para ayudar a desarrolladores, analistas de datos y profesionales de procesamiento de texto a crear, probar y depurar expresiones regulares (regex). Las expresiones regulares son secuencias especializadas de caracteres que definen patrones de búsqueda, permitiendo operaciones complejas de coincidencia, extracción y manipulación de texto.<br><br>Nuestra <strong>herramienta de pruebas de regex</strong> proporciona retroalimentación visual en tiempo real mientras construye sus patrones, resaltando instantáneamente las coincidencias en su texto de prueba y mostrando información detallada sobre grupos de captura y posiciones de coincidencia. Este bucle de retroalimentación inmediata hace significativamente más fácil entender cómo interactúan sus patrones de expresiones regulares con diferentes entradas de texto, ayudándole a identificar y corregir rápidamente problemas en sus expresiones.",
      useCases: {
        title: "Aplicaciones Prácticas para las Expresiones Regulares",
        items: [
          "<strong>Validación de Formularios</strong>: Los desarrolladores web pueden utilizar este <strong>probador de patrones regex</strong> para ajustar expresiones utilizadas para validar direcciones de correo electrónico, números telefónicos, contraseñas y otros campos de entrada. Al probar con varios ejemplos válidos e inválidos, puede asegurarse de que su lógica de validación detecte formatos incorrectos mientras acepta todas las entradas válidas.",
          "<strong>Extracción de Datos</strong>: Al trabajar con datos de texto no estructurados, las expresiones regulares ofrecen una forma poderosa de extraer información específica. Nuestra <strong>herramienta de coincidencia de patrones</strong> ayuda a analistas de datos a desarrollar expresiones para extraer fechas, precios, códigos de productos o cualquier otro dato estructurado de documentos de texto, registros o resultados de raspado web.",
          "<strong>Procesamiento y Manipulación de Texto</strong>: Editores de contenido y desarrolladores pueden usar patrones regex para encontrar y reemplazar patrones específicos en múltiples documentos. El <strong>validador de regex</strong> facilita verificar que sus patrones de búsqueda coincidan exactamente lo que desea cambiar sin afectar otro contenido.",
          "<strong>Análisis de Archivos Log</strong>: Administradores de sistemas e ingenieros DevOps frecuentemente usan expresiones regulares para analizar y procesar archivos log. Esta <strong>herramienta de prueba de expresiones</strong> ayuda a construir patrones que identifiquen con precisión mensajes de error, advertencias o eventos específicos dentro de grandes volúmenes de datos log.",
          "<strong>Desarrollo de Consultas de Búsqueda</strong>: Al construir funcionalidad avanzada de búsqueda, las expresiones regulares pueden potenciar coincidencias de texto sofisticadas. Nuestra herramienta ayuda a desarrolladores a probar y refinar patrones regex usados en motores de búsqueda, editores de código o consultas de base de datos para asegurar resultados precisos.",
          "<strong>Propósitos Educativos</strong>: Estudiantes y profesionales que aprenden expresiones regulares pueden usar esta <strong>herramienta interactiva de regex</strong> para experimentar con distintos patrones y ver inmediatamente los resultados, acelerando el proceso de aprendizaje y ayudando a construir intuición sobre cómo funcionan los diferentes componentes de regex."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes Sobre Expresiones Regulares",
      items: [
        {
          question: "¿Qué son las expresiones regulares y por qué son útiles?",
          answer: "Las expresiones regulares (regex o regexp) son cadenas de texto especiales que definen patrones de búsqueda. Son esencialmente un pequeño lenguaje de programación altamente especializado incrustado dentro de muchos lenguajes de programación y herramientas.<br><br>Las expresiones regulares son extremadamente útiles porque le permiten:<br><br>• <strong>Buscar patrones específicos</strong> en texto en lugar de coincidencias exactas de cadenas<br>• <strong>Validar formatos de texto</strong> como direcciones de correo electrónico, números telefónicos o fechas<br>• <strong>Extraer porciones específicas</strong> de texto desde documentos más grandes<br>• <strong>Reemplazar o modificar texto</strong> basado en coincidencias<br>• <strong>Dividir texto</strong> en límites específicos de patrones<br><br>Su poder proviene de combinar bloques simples de construcción de patrones en expresiones complejas que pueden identificar estructuras de texto muy específicas. Nuestro <strong>probador de patrones regex</strong> le ayuda a aprovechar este poder evitando la frustración de depurar expresiones complejas."
        },
        {
          question: "¿Qué significan las diferentes banderas (g, i, m, s, u, y) en regex?",
          answer: "Las banderas modifican cómo funciona la coincidencia de patrones:<br><br>• <strong>g (global)</strong>: Encuentra todas las coincidencias en lugar de detenerse después de la primera coincidencia. Sin esta bandera, regex devolverá solo la primera ocurrencia.<br><br>• <strong>i (insensible a mayúsculas/minúsculas)</strong>: Hace que el patrón coincida tanto con letras mayúsculas como minúsculas. Por ejemplo, /hola/i coincidirá con 'hola', 'Hola', 'HOLA', etc.<br><br>• <strong>m (multilínea)</strong>: Cambia el comportamiento de ^ y $ para que coincidan con el inicio/fin de cada línea en lugar de solo el inicio/fin de toda la cadena.<br><br>• <strong>s (punto todo)</strong>: Hace que el punto (.) coincida también con caracteres de nueva línea (\
). Normalmente, el punto coincide con cualquier carácter excepto nuevas líneas.<br><br>• <strong>u (unicode)</strong>: Trata el patrón como una secuencia de puntos de código Unicode. Permite la coincidencia adecuada de caracteres y propiedades Unicode.<br><br>• <strong>y (pegajoso)</strong>: Solo realiza coincidencias desde la posición indicada por la propiedad lastIndex del objeto regex (uso avanzado).<br><br>En nuestra <strong>herramienta de prueba de regex</strong>, puede activar estas banderas para ver cómo afectan el comportamiento de coincidencia de su patrón."
        },
        {
          question: "¿Cómo funcionan los grupos de captura en expresiones regulares?",
          answer: "Los grupos de captura le permiten extraer partes específicas del texto coincidente y se definen mediante paréntesis () en su patrón.<br><br>Por ejemplo, en el patrón <code>([A-Z]\\w+) (\\d{4})</code>:<br><br>• El primer grupo <code>([A-Z]\\w+)</code> captura una palabra que comienza con letra mayúscula<br>• El segundo grupo <code>(\\d{4})</code> captura un número de 4 dígitos<br><br>Cuando se encuentra una coincidencia, está disponible la coincidencia completa junto con cada grupo capturado por separado. En nuestro <strong>validador de regex</strong>, los grupos de captura aparecen en la sección de detalles de coincidencia, mostrando exactamente qué texto fue capturado por cada grupo.<br><br>Los grupos de captura también se pueden referenciar dentro del propio patrón usando referencias inversas (\\1, \\2, etc.) y son extremadamente útiles para operaciones complejas de búsqueda y reemplazo o cuando necesita extraer información específica de un texto más grande."
        },
        {
          question: "¿Por qué mi expresión regular no coincide como esperaba?",
          answer: "La depuración de expresiones regulares puede ser desafiante. Aquí están las preguntas y soluciones comunes: <br><br>1. <strong> caracteres especiales </strong> : para hacer una comparación literal de estos caracteres, evítalos usando una barra inversa (\\). <br><br>2. <strong> greed </strong> : por defecto, los cuantificadores numéricos como <code>*</code> y <code>+</code> son greed y coinciden con tantos caracteres como sea posible. Añadir <code> después de ellos? </ código > (< código >*? </ código > o < código >+? </code>) para que no sea codicioso. <br><br>3. <strong> falta de flag </strong> : compruebe si se necesita una flag global (g) para encontrar todas las coincidencias, o una flag insensible a mayúsculas y minúsculas (i) para coincidencias independientes de mayúsculas y minúsculas. <br><br>4. <strong> espacios en blanco y caracteres invisibles </strong> : tenga cuidado con los espacios, tabulaciones, saltos de línea y otros caracteres invisibles en las cadenas de prueba. <br><br>5. <strong> punto de anclaje mal uso </strong> : <code>^</code> y <code>$</code> patrón de anclaje para que coincimiento con el principio o el final del texto (o el principio/final de un texto de varias líneas con la bandera 'm'). <br><br> our <strong> patent match tool </strong> ayuda a identificar estos problemas proporcionando retroalimentación visual en tiempo real, destacando las coincidencias y mostrando información detallada de las coincidencias."
        }
      ]
    },
    guide: {
      title: "Cómo Usar el Probador de Expresiones Regulares: Guía Paso a Paso",
      step1: "<strong>Ingrese su patrón de expresión regular</strong>: Escriba su patrón de expresión regular en el campo de entrada etiquetado como 'Expresión Regular'. No necesita incluir las barras que lo rodean - estas se agregan automáticamente en la interfaz.",
      step2: "<strong>Seleccione los marcadores apropiados</strong>: Elija los marcadores que modifiquen cómo funciona su patrón. Las opciones comunes incluyen 'g' (global) para encontrar todas las coincidencias en lugar de solo la primera, 'i' (ignorar mayúsculas/minúsculas) para ignorar diferencias de caso y 'm' (multilínea) si está trabajando con texto que abarca varias líneas.",
      step3: "<strong>Ingrese texto de prueba</strong>: En el área 'Texto de Prueba', ingrese el texto contra el cual quiere probar su expresión regular. Esto podría ser datos de muestra, texto de ejemplo que contiene patrones que quiere hacer coincidir, o texto problemático que no está coincidiendo como esperaba.",
      step4: "<strong>Haga clic en el botón 'Probar'</strong>: Después de configurar su patrón y texto de prueba, haga clic en el botón 'Probar' para ver los resultados. La herramienta procesará su patrón de expresión regular contra el texto de prueba y mostrará todas las coincidencias que encuentre.",
      step5: "<strong>Analice los resultados de coincidencia</strong>: La sección de resultados resaltará todas las coincidencias encontradas en su texto de prueba, haciéndolo fácil confirmar visualmente que su patrón está haciendo coincidir lo que espera. Para cada coincidencia, verá detalles incluyendo el texto exacto coincidido, la posición en la cadena donde se encontró y cualquier grupo capturado.",
      step6: "<strong>Ajuste su patrón</strong>: Basado en los resultados, podría necesitar ajustar su patrón. Si está haciendo coincidir demasiado o muy poco texto, o no encuentra coincidencias donde debería, modifique su patrón de expresión regular y pruebe nuevamente. Este proceso iterativo lo ayuda a afinar su patrón hasta encontrar exactamente lo que necesita.",
      step7: "<strong>Explore patrones de ejemplo</strong>: Si se atasca o necesita inspiración, haga clic en el botón 'Mostrar Ejemplos' para ver patrones comunes de regex para correos electrónicos, números telefónicos, fechas y más. Puede hacer clic en cualquier ejemplo para cargarlo en el probador y luego modificarlo para que se ajuste a sus requisitos específicas."
    },
    conclusion: "El Probador de Expresiones Regulares simplifica el proceso a menudo complejo de crear y depurar patrones regex al proporcionar retroalimentación visual inmediata sobre sus expresiones. Resaltando coincidencias en tiempo real y desglosando los componentes de cada coincidencia, cierra la brecha entre sintaxis abstracta de patrones y aplicaciones prácticas de procesamiento de texto. Ya sea que esté validando entrada de usuario, extrayendo datos de documentos o aprendiendo regex por primera vez, esta herramienta interactiva le ayuda a construir confianza y competencia con expresiones regulares. A medida que el procesamiento de texto sigue siendo una tarea fundamental en desarrollo, análisis de datos y gestión de contenido, dominar regex con la ayuda de herramientas visuales se convierte en una habilidad técnicamente valiosa."
  },
  options: {
    flags: 'Marcadores',
    global: 'Coincidencia global (g)',
    caseInsensitive: 'Ignorar mayúsculas/minúsculas (i)',
    multiline: 'Multilínea (m)',
    dotAll: 'Punto incluye saltos de línea (s)',
    unicode: 'Unicode (u)',
    sticky: 'Anclado (y)'
  },
  labels: {
    pattern: 'Expresión Regular',
    testString: 'Texto de Prueba',
    matches: 'Coincidencias',
    groups: 'Grupos',
    noMatches: 'No se encontraron coincidencias'
  },
  match: 'Coincidencia',
  position: 'Posición',
  group: 'Grupo',
  resultsWillAppearHere: 'Los resultados de coincidencia de expresiones regulares aparecerán aquí...',
  regexError: 'Error de expresión regular: {message}',
  emailAddress: 'Correo Electrónico',
  phoneNumber: 'Número de Teléfono (China)',
  ipAddress: 'Dirección IP',
  dateFormat: 'Fecha (yyyy-mm-dd)',
  chineseCharacters: 'Caracteres Chinos',
  phoneNumberExample: 'Contacto: 13912345678\nWeChat: 18887654321\nFijo: 010-12345678',
  urlExample: 'Visita https://example.com\nO http://www.domain.org/path?query=value',
  ipAddressExample: 'Dirección del servidor: 192.168.1.1\nDNS: 8.8.8.8, 114.114.114.114',
  dateFormatExample: 'Fecha de inicio: 2023-01-15\nFecha de fin: 2023-02-28\nFecha inválida: 2023-13-45',
  chineseCharactersExample: 'Hello世界！你好，World!'
}