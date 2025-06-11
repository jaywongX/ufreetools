export default {
  name: 'Convertidor de cURL',
  description: 'Convierte comandos cURL en fragmentos de código en varios lenguajes de programación',
  title: 'cURL a Código',
  subtitle: 'Convierte comandos cURL en códigos de múltiples lenguajes para integrar rápidamente solicitudes HTTP en sus proyectos',
  input: {
    title: 'Comando cURL',
    placeholder: 'Ingrese un comando cURL aquí',
    parse: 'Analizar cURL',
    clear: 'Limpiar',
    examples: 'Comandos de ejemplo:',
    options: 'Opciones del Analizador',
    validateCommand: 'Validar Comando',
    formatCurl: 'Formatear cURL'
  },
  options: {
    detectAuth: 'Detección automática de autenticación',
    resolveVariables: 'Resolver variables de entorno',
    processContinuations: 'Manejar continuidad de línea (\\)',
    followRedirects: 'Seguir redirecciones',
    preserveHeaders: 'Preservar todos los encabezados',
    ignoreErrors: 'Ignorar errores de análisis',
    noDuplicateHeaders: 'Sin encabezados duplicados (usar el último)'
  },
  output: {
    title: 'Salida de Código',
    language: 'Lenguaje objetivo',
    copy: 'Copiar',
    copyTooltip: 'Copiar al Portapapeles',
    download: 'Descargar',
    beautify: 'Formatear',
    codeTitle: '{language} Código',
    errorTitle: 'Error de Conversión',
    languages: {
      python: 'Python (requests)',
      pythonHttp: 'Python (http.client)',
      node: 'Node.js (axios)',
      nodeRequest: 'Node.js (request)',
      nodeFetch: 'Node.js (fetch)',
      java: 'Java (HttpClient)',
      javaOkHttp: 'Java (OkHttp)',
      php: 'PHP (cURL)',
      phpGuzzle: 'PHP (Guzzle)',
      go: 'Go',
      rust: 'Rust',
      swift: 'Swift',
      csharp: 'C# (HttpClient)',
      ruby: 'Ruby',
      dart: 'Dart',
      powershell: 'PowerShell',
      browser: 'Navegador (fetch)',
      curl: 'cURL (Formateado)',
      json: 'JSON (Objeto de solicitud)',
      har: 'HAR (Archivo de HTTP)',
      javascript: 'JavaScript (Fetch)'
    }
  },
  request: {
    title: 'Detalles de la Solicitud',
    method: 'Método',
    url: 'URL',
    headers: 'Encabezados',
    body: 'Cuerpo',
    auth: 'Autenticación',
    options: 'Opciones',
    cookie: 'Cookies',
    queryParams: 'Parámetros de consulta',
    formData: 'Datos de formulario',
    visualize: 'Visualizar'
  },
  visualization: {
    title: 'Visualización de la Solicitud',
    request: 'Solicitud',
    response: 'Respuesta',
    headers: 'Encabezados',
    body: 'Cuerpo',
    timing: 'Tiempo',
    raw: 'Bruto'
  },
  analysis: {
    title: 'Análisis del Comando',
    insecureWarning: 'Advertencia: Este comando utiliza --insecure/-k (se desactiva la verificación SSL)',
    verboseIgnored: 'Nota: El modo detallado (-v) fue ignorado durante la conversión',
    unsupportedOptions: 'Opciones no compatibles',
    warnings: 'Advertencias',
    info: 'Información'
  },
  messages: {
    parsing: 'Analizando el comando cURL...',
    parseFailed: 'Fallo al analizar el comando cURL: {error}',
    parseSuccess: 'Comando cURL analizado correctamente',
    copied: 'Código copiado al portapapeles',
    downloaded: 'Código descargado',
    invalidCurl: 'Comando cURL inválido',
    emptyCurl: 'Por favor ingrese un comando cURL',
    validCurl: 'Comando cURL válido',
    unknownOption: 'Opción desconocida: {option}',
    unsupportedMethod: 'Advertencia: No todos los lenguajes admiten el método HTTP {method}',
    curlRequired: 'El comando debe comenzar con "curl "',
    copyFailed: 'Fallo al copiar, por favor cópielo manualmente'
  },
  examples: {
    title: 'Comandos cURL de Ejemplo',
    basic: 'Solicitud GET Básica',
    headers: 'Encabezados personalizados',
    post: 'POST con JSON',
    formData: 'Envío de datos de formulario',
    auth: 'Autenticación Básica',
    complex: 'Ejemplo Complejo',
    exampleCommands: {
      getRequest: 'Solicitud GET',
      postJson: 'POST JSON',
      postForm: 'POST Formulario',
      withAuth: 'Con Autenticación',
      uploadFile: 'Subida de Archivo'
    }
  },
  actions: {
    convert: 'Convertir',
    converting: 'Convirtiendo...'
  },
  article: {
    title: "Convertidor de cURL: Transformar Solicitudes de Línea de Comandos en Código",
    features: {
      title: "Entendiendo la Conversión de cURL y sus Aplicaciones",
      description: "El <strong>Convertidor de cURL</strong> es una herramienta poderosa que transforma comandos cURL en fragmentos de código ejecutables para múltiples lenguajes de programación. Esta herramienta conecta el espacio entre la documentación de API, las pruebas en la terminal y la implementación real, permitiendo a los desarrolladores integrar rápidamente solicitudes HTTP en sus proyectos sin traducir manualmente la sintaxis.<br><br>En su núcleo, el <strong>convertidor de cURL a código</strong> analiza la sintaxis de línea de comandos de cURL (incluyendo encabezados, métodos de solicitud, autenticación, cargas útiles de datos y otras opciones) y genera código equivalente que realiza la misma solicitud HTTP en su lenguaje de programación preferido. La herramienta admite lenguajes populares incluyendo Python, JavaScript, PHP, Java, Ruby, Go y C#, permitiendo a los desarrolladores moverse fácilmente desde probar APIs en la terminal hasta implementarlos en código de producción. Ya sea que esté trabajando con servicios RESTful, puntos finales GraphQL o APIs SOAP heredadas, este <strong>generador de solicitudes HTTP</strong> maneja el trabajo de traducción sintáctica, reduciendo significativamente el tiempo de desarrollo y eliminando errores de sintaxis.",
      useCases: {
        title: "Aplicaciones Prácticas para la Conversión de cURL",
        items: [
          "<strong>Aceleración de Integración de API</strong>: Cuando se integran APIs de terceros, los desarrolladores suelen comenzar probando puntos finales con comandos cURL proporcionados en la documentación. El <strong>analizador de comandos cURL</strong> permite convertir estos ejemplos de solicitudes directamente en su lenguaje de programación, acelerando la integración y asegurando una replicación exacta del formato especificado en la documentación. Esto elimina posibles errores al traducir manualmente las especificaciones de llamada a API y reduce el tiempo de integración de horas a minutos para APIs complejas.",
          "<strong>Desarrollo Multi-Lenguaje</strong>: Los equipos de desarrollo que trabajan en múltiples pilas tecnológicas pueden usar el <strong>generador de código de solicitud</strong> para compartir patrones de interacción con APIs. Un desarrollador backend puede verificar un punto final de API con un comando cURL, luego usar el convertidor para proporcionar a desarrolladores frontend código listo para usar que realice la misma solicitud, asegurando consistencia entre componentes del sistema mientras respeta mejores prácticas específicas del lenguaje.",
          "<strong>Creación de Documentación de API</strong>: Escritores técnicos y desarrolladores de API pueden generar ejemplos de código consistentes en múltiples lenguajes a partir de un solo comando cURL validado. Esto garantiza que todos los ejemplos de código en la documentación realicen solicitudes idénticas, manteniendo coherencia mientras proporciona implementaciones específicas del lenguaje que siguen patrones idiomáticos y buenas prácticas para cada lenguaje soportado.",
          "<strong>Modernización de Sistemas Heredados</strong>: Al actualizar aplicaciones heredadas, los desarrolladores a menudo necesitan replicar interacciones HTTP existentes en bases de código modernas. Capturando solicitudes actuales usando herramientas de desarrollador del navegador (que pueden exportar como cURL), luego convirtiéndolas en lenguajes modernos, el <strong>traductor de cURL</strong> facilita la migración de funcionalidad mientras mantiene patrones de comunicación de API exactos.",
          "<strong>Depuración y Resolución de Problemas</strong>: Cuando las solicitudes de API fallan dentro de aplicaciones, los desarrolladores pueden extraer la solicitud problemática como un comando cURL (a menudo disponible en registros del servidor o mediante herramientas de monitoreo), probarla y modificarla directamente en la terminal hasta que funcione correctamente, luego usar el convertidor para generar código corregido que resuelva el problema en la base de código de la aplicación.",
          "<strong>Herramienta Educativa y de Aprendizaje</strong>: Instructores de programación y estudiantes pueden usar el <strong>generador de código de solicitud</strong> para entender cómo se estructuran las solicitudes HTTP en diferentes lenguajes de programación. Al comparar el código generado para la misma solicitud en múltiples lenguajes, los desarrolladores pueden comprender mejor las implementaciones de clientes HTTP en lenguajes específicos, ayudándolos a aprender nuevos lenguajes de programación a través de ejemplos prácticos."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Conversión de cURL",
      items: [
        {
          question: "¿Qué es exactamente cURL y por qué necesitaría convertirlo en código?",
          answer: "cURL (Cliente URL) es una herramienta de línea de comandos y biblioteca para transferir datos con URLs utilizando diversos protocolos. Los desarrolladores utilizan comúnmente comandos cURL para probar puntos finales de API, depurar solicitudes HTTP y documentar interacciones de API debido a su popularidad y simplicidad. Sin embargo, cuando se implementan estas solicitudes probadas en aplicaciones reales, la sintaxis de cURL debe traducirse a lenguajes de programación. La <strong>herramienta de conversión de cURL</strong> automatiza este proceso de traducción, eliminando errores de sintaxis manuales y ahorrando tiempo de desarrollo significativo. En lugar de descifrar cómo traducir las opciones específicas de cURL (como -H para encabezados o -d para datos) en construcciones específicas del lenguaje, el convertidor maneja estas traducciones automáticamente, asegurando que el código generado realice una solicitud HTTP idéntica a lo que realizaría el comando cURL original, siguiendo convenciones y buenas prácticas del lenguaje."
        },
        {
          question: "¿Qué tan precisa es el código convertido en comparación con el comando cURL original?",
          answer: "El <strong>conversor de cURL a código</strong> produce resultados de conversión altamente precisos que funcionan de manera funcional similar al comando cURL original, respetando idiomas específicos del lenguaje. El convertidor preserva todos los componentes esenciales de la solicitud, incluyendo URL, método HTTP, encabezados, parámetros de consulta, cuerpo de solicitud (en varios formatos), credenciales de autenticación y opciones comunes como seguimiento de redirecciones y verificación SSL. Para lenguajes compatibles, la conversión mantiene la equivalencia semántica, lo que significa que el código generado realizará una solicitud HTTP idéntica a la que realizaría el comando cURL original.<br><br>Que dicho esto, ciertas características avanzadas o poco comunes de cURL podrían no tener equivalentes directos en todos los lenguajes de programación. En estos casos extremos, el convertidor implementa la funcionalidad más cercana posible o proporciona comentarios en el código generado notando cualquier diferencia. Para implementaciones críticas en producción, siempre se recomienda validar el código generado con pruebas reales, especialmente cuando se usan opciones especializadas de cURL como certificados SSL personalizados, configuraciones de red específicas o mecanismos de autenticación inusuales."
        },
        {
          question: "¿Qué lenguajes de programación están respaldados por el convertidor?",
          answer: "El <strong>generador de código de solicitud</strong> admite la conversión a múltiples lenguajes de programación principales y bibliotecas comúnmente usadas para interacciones de API. Actualmente, los lenguajes soportados incluyen:<br><br>• <strong>Python</strong>: Ambos, la biblioteca requests popular y el cliente http.client estándar<br>• <strong>JavaScript/Node.js</strong>: Variantes múltiples incluyendo Fetch API (navegador y Node.js), Axios y la biblioteca Request<br>• <strong>PHP</strong>: Funciones nativas de cURL y el cliente Guzzle HTTP<br>• <strong>Java</strong>: HttpClient de Java 11+ y la biblioteca OkHttp<br>• <strong>Go</strong>: Cliente HTTP de la biblioteca estándar<br>• <strong>Ruby</strong>: Net::HTTP nativo<br>• <strong>C#</strong>: Implementaciones de HttpClient<br>• <strong>PowerShell</strong>: Invoke-WebRequest<br>• <strong>Rust</strong>: Cliente reqwest<br><br>Cada conversión de lenguaje se optimiza para producir código idiomático siguiendo buenas prácticas y convenciones del lenguaje objetivo, en lugar de simplemente traducir la sintaxis literalmente. Este enfoque asegura que el código generado no solo sea funcional, sino también mantenible y alineado con cómo los desarrolladores experimentados en cada ecosistema de lenguaje escribirían código de cliente HTTP."
        },
        {
          question: "¿Puede manejar comandos cURL complejos con múltiples opciones?",
          answer: "Sí, el <strong>analizador de comandos cURL</strong> maneja comandos complejos con múltiples opciones y estructuras de solicitud sofisticadas. El convertidor admite:<br><br>• <strong>Métodos de autenticación</strong>: Incluyendo Autenticación Básica, tokens Bearer, claves de API y mecanismos OAuth<br>• <strong>Encabezados personalizados</strong>: Múltiples encabezados con cualquier valor, incluyendo especificaciones de tipo de contenido<br>• <strong>Cuerpos de solicitud</strong>: JSON, datos de formulario, formularios multipartes, datos binarios y cargas de texto<br>• <strong>Métodos HTTP</strong>: Todos los métodos estándar (GET, POST, PUT, DELETE, PATCH, etc.)<br>• <strong>Parámetros de URL</strong>: Tanto en la URL como como argumentos separados<br>• <strong>Subidas de archivos</strong>: Traduciendo la sintaxis de subida de archivos para lenguajes compatibles<br>• <strong>Opciones SSL/TLS</strong>: Configuraciones de verificación de certificados<br>• <strong>Configuraciones de proxy</strong>: Cuando sean compatibles con lenguajes objetivos<br>• <strong>Cookies</strong>: Tanto para enviar como almacenar cookies<br><br>La herramienta puede procesar comandos con continuaciones de línea (backslashes), variaciones de comillas y estructuras anidadas complejas como cargas JSON o campos de formulario anidados. Incluso comandos extraídos directamente de herramientas de desarrollador del navegador o herramientas como Postman, que a menudo generan comandos cURL muy extensos con numerosas opciones, pueden ser convertidos exitosamente en código limpio y eficiente en su lenguaje objetivo."
        },
        {
          question: "¿Cómo puedo asegurarme de que el código generado siga buenas prácticas para mi lenguaje?",
          answer: "El <strong>generador de código de solicitud</strong> está diseñado para producir no solo código funcional, sino también código que sigue idiomas y buenas prácticas del lenguaje. Para cada lenguaje soportado, el convertidor implementa varias optimizaciones:<br><br>• <strong>Selección de biblioteca</strong>: Usa las bibliotecas de cliente HTTP más adecuadas y ampliamente adoptadas para cada lenguaje (por ejemplo, requests para Python, Axios para Node.js)<br>• <strong>Manejo de errores</strong>: Incluye patrones de verificación de errores y manejo de excepciones apropiados para el lenguaje<br>• <strong>Gestión de recursos</strong>: Maneja correctamente el cierre de conexiones y limpieza de recursos cuando sea aplicable<br>• <strong>Sintaxis moderna</strong>: Utiliza funciones modernas del lenguaje donde sea apropiado (async/await en JavaScript, try-with-resources en Java)<br>• <strong>Lectura</strong>: Formatea el código con indentación adecuada y nombres de variables significativos<br>• <strong>Mantenibilidad</strong>: Estructura el código generado para que sea fácil de entender y modificar<br><br>Aunque el código generado sigue buenas prácticas generales, podría necesitar ajustes menores para alinearlo con los estándares de codificación de su proyecto específico o para integrarlo con estructuras de código existentes. El convertidor proporciona una base sólida que implementa correctamente la solicitud HTTP, permitiéndole enfocarse en integrar la funcionalidad en su aplicación en lugar de luchar con la sintaxis de clientes HTTP."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar el Convertidor de cURL",
      steps: [
        "<strong>Ingresar su comando cURL</strong>: Comience pegando o ingresando su comando cURL en el campo de entrada. Puede usar comandos de documentación de API, comandos de herramientas de desarrollador del navegador, exportaciones de Postman, o cualquier comando cURL válido que haya creado. Si es nuevo en cURL, puede hacer clic en uno de los comandos de ejemplo debajo del área de entrada para ver cómo se formatean tipos diferentes de solicitudes.",
        "<strong>Seleccionar su lenguaje objetivo</strong>: Elija el lenguaje de programación que desea convertir el comando cURL en desde el panel de selección de lenguaje. La herramienta admite múltiples lenguajes y bibliotecas comúnmente usadas para interacciones de API, tales como Python, JavaScript, PHP, Java y más. Seleccione aquel que coincida con su pila tecnológica de proyecto.",
        "<strong>Haga clic en el botón 'Convertir'</strong>: Después de ingresar su comando y seleccionar su lenguaje objetivo, haga clic en el botón 'Convertir' para procesar el comando cURL. La herramienta analizará el comando, identificará todos sus componentes (método, URL, encabezados, datos, opciones), y generará código equivalente en su lenguaje elegido.",
        "<strong>Revisar el código generado</strong>: Examine la salida en el área de visualización de código. El código convertido incluirá todas las importaciones/requisitos necesarios, inicialización adecuada del cliente HTTP, configuración de solicitud con formato de encabezados y cuerpo adecuado, y manejo básico de respuesta. El código está formateado para lectura con indentación adecuada y nombres de variables significativos.",
        "<strong>Copie el código a su proyecto</strong>: Una vez satisfecho con el código generado, haga clic en el botón 'Copiar' para copiarlo a su portapapeles. Luego puede pegarlo directamente en su entorno de desarrollo o editor de código. El código está listo para usar con mínimos o ningún ajuste, dependiendo de sus requisitos específicos de proyecto.",
        "<strong>Modifique según sea necesario para su aplicación</strong>: Aunque el código generado es funcionalmente completo, es posible que desee integrarlo con su sistema de manejo de errores, registro o procesamiento de datos de su aplicación. Siéntase libre de modificar nombres de variables, agregar comentarios o envolver el código en funciones/métodos que se adapten a la arquitectura de su aplicación.",
        "<strong>Pruebe la solicitud implementada</strong>: Después de integrar el código en su proyecto, pruebe la solicitud HTTP para asegurarse de que funcione como se espera. El código convertido debería producir la misma solicitud y recibir la misma respuesta que el comando cURL original, pero siempre es buena práctica verificar, especialmente para interacciones críticas de negocio."
      ]
    },
    conclusion: "El Convertidor de cURL representa un puente indispensable entre la exploración de API y la implementación, simplificando drásticamente el proceso de desarrollo para aplicaciones que interactúan con servicios web. Al automatizar la traducción de comandos de línea de comandos HTTP en código limpio y idiomático en múltiples lenguajes de programación, elimina una fuente significativa de errores y frustración en el trabajo de integración de API. Esta herramienta no solo ahorra tiempo valioso de desarrollo, sino que también asegura la consistencia entre las llamadas de API probadas y su implementación en código de producción. Ya sea que sea un desarrollador experimentado trabajando con arquitecturas de microservicios complejos o un principiante aprendiendo a interactuar con su primera API REST, el Convertidor de cURL proporciona un atajo confiable que transforma la traducción manual de sintaxis en una operación de un solo clic, permitiéndole enfocarse en construir lógica de aplicación en lugar de luchar con la sintaxis de clientes HTTP."
  }
}