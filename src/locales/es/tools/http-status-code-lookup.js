export default {
  name: 'Buscador de Códigos de Estado HTTP',
  description: 'Buscar y comprender códigos y mensajes de estado de respuesta HTTP',
  search: {
    title: 'Buscar Códigos de Estado',
    placeholder: 'Ingrese un código de estado o busque por descripción',
    button: 'Buscar',
    recent: 'Búsquedas Recientes',
    common: 'Códigos Comunes',
    filter: {
      all: 'Todas las Categorías',
      informational: '1xx - Respuestas Informativas',
      success: '2xx - Respuestas Exitosas',
      redirection: '3xx - Redirecciones',
      clientError: '4xx - Errores del Cliente',
      serverError: '5xx - Errores del Servidor'
    }
  },
  results: {
    title: 'Información del Código de Estado',
    code: 'Código de Estado',
    type: 'Tipo',
    message: 'Mensaje Estándar',
    description: 'Descripción',
    spec: 'Especificación',
    references: 'Referencias',
    examples: 'Ejemplos',
    noResults: 'No se encontraron resultados',
    searchError: 'Ocurrió un error al buscar el código de estado',
    tryAgain: 'Intente otra búsqueda',
    example: 'Ejemplo',
    notes: 'Notas'
  },
  categories: {
    title: 'Categorías',
    information: 'Respuestas Informativas (1xx)',
    success: 'Respuestas Exitosas (2xx)',
    redirection: 'Mensajes de Redirección (3xx)',
    clientError: 'Respuestas de Error del Cliente (4xx)',
    serverError: 'Respuestas de Error del Servidor (5xx)',
    unofficial: 'Códigos No Oficiales',
    internet: 'Internet Information Services',
    nginx: 'Nginx',
    cloudflare: 'Cloudflare',
    aws: 'AWS'
  },
  statusInfo: {
    '100': {
      message: 'Continue',
      description: 'El servidor ha recibido los encabezados de la solicitud y el cliente debe continuar enviando el cuerpo de la solicitud.',
      shortDescription: 'Continuar enviando la solicitud',
      fullDescription: 'El servidor ha recibido la parte inicial de la solicitud, y el cliente debe continuar enviando el resto de la solicitud.',
      notes: 'Generalmente se usa cuando el cliente quiere verificar si el servidor aceptará la solicitud antes de enviar un cuerpo de solicitud grande.'
    },
    '101': {
      message: 'Switching Protocols',
      description: 'El solicitante le ha pedido al servidor cambiar de protocolo, y el servidor ha accedido a hacerlo.',
      shortDescription: 'Cambiando de Protocolos',
      fullDescription: 'El servidor comprende la solicitud del cliente y notificará al cliente mediante el encabezado Upgrade para usar un protocolo diferente para completar esta solicitud.',
      notes: 'Usualmente se utiliza en el proceso de establecimiento de conexión WebSocket.'
    },
    '200': {
      message: 'OK',
      description: 'La solicitud ha tenido éxito. El significado depende del método HTTP utilizado.'
    },
    '201': {
      message: 'Created',
      description: 'La solicitud ha tenido éxito, y como resultado, se ha creado un nuevo recurso.'
    },
    '204': {
      message: 'No Content',
      description: 'El servidor procesó correctamente la solicitud pero no está devolviendo ningún contenido.'
    },
    '301': {
      message: 'Moved Permanently',
      description: 'La URL del recurso solicitado ha sido cambiada permanentemente. La nueva URL se proporciona en la respuesta.'
    },
    '302': {
      message: 'Found',
      description: 'La URL del recurso solicitado ha sido temporalmente cambiada. La nueva URL se proporciona en la respuesta.'
    },
    '304': {
      message: 'Not Modified',
      description: 'No hay necesidad de retransmitir el recurso ya que el cliente todavía tiene una copia descargada previamente.'
    },
    '400': {
      message: 'Bad Request',
      description: 'El servidor no pudo entender la solicitud debido a una sintaxis inválida.'
    },
    '401': {
      message: 'Unauthorized',
      description: 'El cliente debe autenticarse para obtener la respuesta solicitada.'
    },
    '403': {
      message: 'Forbidden',
      description: 'El cliente no tiene derechos de acceso al contenido.'
    },
    '404': {
      message: 'Not Found',
      description: 'El servidor no puede encontrar el recurso solicitado.'
    },
    '500': {
      message: 'Internal Server Error',
      description: 'El servidor encontró una situación que no sabe cómo manejar.'
    },
    '502': {
      message: 'Bad Gateway',
      description: 'El servidor, actuando como puerta de enlace o proxy, recibió una respuesta inválida de un servidor upstream.'
    },
    '503': {
      message: 'Service Unavailable',
      description: 'El servidor no está listo para manejar la solicitud. Las razones comunes son mantenimiento del servidor o sobrecarga.'
    }
  },
  tools: {
    title: 'Herramientas',
    checkUrl: 'Verificar Estado de URL',
    statusCodeFlow: 'Diagrama de Flujo de Códigos de Estado',
    apiTest: 'Probador de API',
    debugger: 'Depurador de Respuesta',
    statusInspector: 'Verificador de Estado de URL'
  },
  features: {
    title: 'Características',
    overview: 'Visión General de Códigos de Estado',
    comparison: 'Comparación de Códigos de Estado',
    troubleshooting: 'Guía de Solución de Problemas',
    bestPractices: 'Mejores Prácticas',
    codeExamples: 'Ejemplos de Código'
  },
  details: {
    title: 'Detalles',
    history: 'Historial',
    browser: 'Comportamiento del Navegador',
    seo: 'Impacto SEO',
    security: 'Impacto en Seguridad',
    bestPractices: 'Mejores Prácticas',
    alternatives: 'Códigos de Estado Alternativos',
    commonErrors: 'Errores Comunes'
  },
  codeExamples: {
    title: 'Ejemplos de Código',
    nodejs: 'Node.js',
    python: 'Python',
    php: 'PHP',
    java: 'Java',
    go: 'Go',
    copyCode: 'Copiar Código',
    response: 'Ejemplo de Respuesta',
    request: 'Ejemplo de Solicitud'
  },
  category: {
    intro: 'Los códigos de estado HTTP son respuestas del servidor a la solicitud del navegador, divididos en cinco categorías:',
    informational: '1xx (Informativo) - La solicitud está siendo procesada.',
    success: '2xx (Éxito) - La solicitud fue procesada con éxito.',
    redirection: '3xx (Redirección) - Se requiere una acción adicional para completar la solicitud.',
    clientError: '4xx (Error del Cliente) - El servidor no puede procesar la solicitud.',
    serverError: '5xx (Error del Servidor) - El servidor no logró procesar la solicitud.'
  },
  codes: {
    '100': {
      shortDescription: 'Continuar enviando la solicitud',
      description: 'El servidor ha recibido la parte inicial de la solicitud, y el cliente debe continuar enviando el resto de la solicitud.',
      notes: 'Generalmente se usa cuando el cliente quiere verificar si el servidor aceptará la solicitud antes de enviar un cuerpo de solicitud grande.'
    },
    '101': {
      shortDescription: 'Cambiando de Protocolos',
      description: 'El servidor comprende la solicitud del cliente y notificará al cliente mediante el encabezado Upgrade para usar un protocolo diferente para completar esta solicitud.',
      notes: 'Usualmente se utiliza en el proceso de establecimiento de conexión WebSocket.'
    },
    '200': {
      shortDescription: 'Solicitud exitosa',
      description: 'La solicitud fue exitosa, y el servidor ha devuelto el contenido solicitado. Este es el código más común.',
      notes: 'Todas las solicitudes GET exitosas deben devolver este código de estado.'
    },
    '201': {
      shortDescription: 'Creado',
      description: 'La solicitud fue exitosa, y el servidor ha creado un nuevo recurso. Normalmente devuelto después de una solicitud POST.',
      notes: 'Debe devolver la ubicación (URI) del recurso recién creado.'
    },
    '204': {
      shortDescription: 'Sin Contenido',
      description: 'El servidor procesó correctamente la solicitud pero no necesita devolver ningún contenido.',
      notes: 'Usualmente se usa después de solicitudes DELETE exitosas o cuando solo se requiere un restablecimiento de vista del lado del cliente.'
    },
    '301': {
      shortDescription: 'Movido Permanentemente',
      description: 'El recurso solicitado ha sido movido permanentemente a una nueva ubicación, y las referencias futuras deben usar la nueva URL.',
      notes: 'Los motores de búsqueda actualizan la URL del recurso, y los navegadores generalmente cachéan esta redirección.'
    },
    '302': {
      shortDescription: 'Redirección Temporal',
      description: 'El recurso solicitado está respondiendo temporalmente desde una URL diferente, pero el solicitante debe seguir usando la URL original.',
      notes: 'A diferencia de 301, los motores de búsqueda no actualizan el enlace del recurso, y los navegadores pueden no cachear esta redirección.'
    },
    '304': {
      shortDescription: 'No Modificado',
      description: 'El recurso no ha sido modificado; el cliente puede usar su versión en caché. A menudo se usa en solicitudes GET condicionales.',
      notes: 'El servidor no debe devolver un cuerpo de respuesta, lo cual ayuda a mejorar el rendimiento y reducir el consumo de ancho de banda.'
    },
    '400': {
      shortDescription: 'Solicitud Incorrecta',
      description: 'El servidor no puede entender el formato de la solicitud, y el cliente no debería reenviarla sin modificarla.',
      notes: 'Generalmente causado por formato incorrecto de parámetros de solicitud, parámetros necesarios faltantes o valores de parámetro inválidos.'
    },
    '401': {
      shortDescription: 'No Autorizado',
      description: 'La solicitud requiere autenticación del usuario, como cuando las credenciales no están proporcionadas o son inválidas.',
      notes: 'El cliente debe proporcionar o reintroducir información de autenticación correcta.'
    },
    '403': {
      shortDescription: 'Prohibido',
      description: 'El servidor entiende la solicitud pero se niega a ejecutarla. A diferencia de 401, la autenticación no ayudará.',
      notes: 'Generalmente debido a permisos insuficientes, como intentar acceder a contenido restringido a administradores.'
    },
    '404': {
      shortDescription: 'No Encontrado',
      description: 'El servidor no puede encontrar el recurso solicitado, posiblemente debido a una URL mal escrita o eliminación del recurso.',
      notes: 'Uno de los códigos de error más comunes; los usuarios deben ser claramente informados de que el recurso no existe.'
    },
    '405': {
      shortDescription: 'Método No Permitido',
      description: 'El método de solicitud especificado en la línea de solicitud no está permitido para el recurso solicitado.',
      notes: 'La respuesta debe incluir un encabezado Allow que indique los métodos de solicitud válidos para el recurso.'
    },
    '409': {
      shortDescription: 'Conflicto',
      description: 'La solicitud entra en conflicto con el estado actual del servidor, a menudo ocurre en solicitudes PUT.',
      notes: 'Común cuando se intenta crear un recurso ya existente o editar concurrentemente el mismo recurso.'
    },
    '429': {
      shortDescription: 'Demasiadas Solicitudes',
      description: 'El usuario ha enviado demasiadas solicitudes dentro de un período dado ("limitación de velocidad").',
      notes: 'Debe incluir un encabezado Retry-After para informar al cliente cuándo puede volver a intentar la solicitud.'
    },
    '500': {
      shortDescription: 'Error Interno del Servidor',
      description: 'El servidor encontró una situación que no sabe cómo manejar, usualmente debido a errores de código o problemas temporales.',
      notes: 'El código de error del servidor más común; se debe proporcionar información detallada y registros para depurar.'
    },
    '502': {
      shortDescription: 'Puerta de Enlace Incorrecta',
      description: 'El servidor, actuando como puerta de enlace o proxy, recibió una respuesta inválida de un servidor upstream.',
      notes: 'Común cuando se usan proxies inversos o balanceadores de carga, y el servicio upstream no está disponible o responde de forma anormal.'
    },
    '503': {
      shortDescription: 'Servicio No Disponible',
      description: 'El servidor está temporalmente no disponible, usualmente debido a sobrecarga o mantenimiento del sistema.',
      notes: 'Debe incluir un encabezado Retry-After para indicar cuándo el cliente debe volver a intentarlo, ayudando a reducir la carga del servidor.'
    },
    '504': {
      shortDescription: 'Tiempo de Espera de Puerta de Enlace',
      description: 'El servidor, actuando como puerta de enlace o proxy, no recibió una respuesta a tiempo de un servidor upstream.',
      notes: 'Común cuando el servicio proxy tarda demasiado en procesar o hay problemas de conectividad de red.'
    }
  },
  article: {
    title: "Guía de Referencia de Códigos de Estado HTTP - Comprender los Códigos de Respuesta Web",
    intro: {
      title: "¿Qué son los Códigos de Estado HTTP y Por Qué Son Importantes?",
      p1: "<b>Los códigos de estado HTTP</b> son códigos numéricos estandarizados emitidos por servidores web para indicar el resultado de una solicitud del cliente. Estos códigos numéricos de tres dígitos están agrupados en cinco clases, cada una sirviendo para un propósito específico en la comunicación web. Nuestra herramienta de búsqueda de códigos de estado HTTP proporciona acceso instantáneo a información detallada sobre estos códigos, ayudando a desarrolladores, webmasters y profesionales de TI a resolver problemas relacionados con la web de manera eficiente.",
      p2: "Comprender <b>los códigos de respuesta HTTP</b> es crucial para cualquier persona que trabaje con sitios web o aplicaciones web. Estos códigos comunican si una solicitud HTTP se ha completado con éxito, requiere acción adicional o ha encontrado un error. Al identificar rápidamente el significado detrás de códigos como 404 Not Found o 500 Internal Server Error, puede diagnosticar problemas más rápido e implementar soluciones efectivas para mejorar la experiencia del usuario y el funcionamiento del sitio web.",
      p3: "Nuestra completa <b>herramienta de referencia de códigos de estado</b> va más allá de las definiciones básicas al proporcionar explicaciones detalladas, causas comunes y acciones recomendadas para cada código. Ya sea que esté depurando un sitio web, optimizando el rendimiento SEO o desarrollando APIs, esta herramienta sirve como su recurso principal para interpretar respuestas del servidor y mantener operaciones web fluidas."
    },
    useCases: {
      title: "Aplicaciones Prácticas del Conocimiento de los Códigos de Estado HTTP",
      case1: "<b>Solución de Problemas de Sitios Web</b>: Cuando los usuarios reportan problemas al acceder a ciertas páginas, los códigos de estado HTTP pueden localizar rápidamente si el problema es un recurso inexistente (404), un error del servidor (5xx) o un problema de permisos (403). Nuestra herramienta lo ayuda a entender estos errores e implementar la solución adecuada.",
      case2: "<b>Optimización SEO</b>: Los motores de búsqueda utilizan códigos de estado para comprender la salud de su sitio web. Una gestión adecuada de las redirecciones (301 vs 302) y las páginas de error impacta significativamente sus clasificaciones en los resultados de búsqueda. Use nuestra herramienta para asegurarse de que su sitio implementa correctamente los códigos de estado para un rendimiento SEO óptimo.",
      case3: "<b>Desarrollo y Pruebas de API</b>: Las APIs REST dependen en gran medida de los códigos de estado HTTP para comunicar estados de respuesta. Los desarrolladores pueden usar nuestra referencia para implementar los códigos de estado más apropiados para sus puntos finales de API, garantizando una comunicación clara entre servicios.",
      case4: "<b>Configuración de Servidores</b>: Los administradores del sistema usan códigos de estado para diagnosticar problemas de configuración con servidores web, balanceadores de carga y proxies. Nuestras explicaciones detalladas ayudan a identificar si los errores provienen de la configuración del servidor, problemas de red o código de aplicación.",
      case5: "<b>Seguridad de Aplicaciones Web</b>: Los profesionales de seguridad analizan patrones inusuales de códigos de estado para detectar posibles ataques o vulnerabilidades. Comprender las implicaciones de seguridad de diferentes códigos de estado ayuda a implementar controles de acceso adecuados y mecanismos de protección."
    },
    tutorial: {
      title: "Cómo Usar la Herramienta de Búsqueda de Códigos de Estado HTTP",
      intro: "Nuestra herramienta de referencia de códigos de estado HTTP está diseñada para ser intuitiva y eficiente. Siga estos pasos simples para encontrar rápidamente la información que necesita sobre cualquier código de estado HTTP:",
      step1: {
        title: "Paso 1: Ingrese Términos de Búsqueda",
        description: "Comience ingresando ya sea un número de código de estado específico (como 404 o 500) o palabras clave descriptivas (como 'no encontrado' o 'error del servidor') en el cuadro de búsqueda en la parte superior de la herramienta. La búsqueda está diseñada para coincidir tanto números de código como descripciones, brindándole flexibilidad en cómo realiza la búsqueda."
      },
      step2: {
        title: "Paso 2: Filtrar por Categoría (Opcional)",
        description: "Si desea explorar códigos dentro de una categoría específica, utilice el menú desplegable para filtrar los resultados. Puede elegir entre respuestas informativas (1xx), respuestas exitosas (2xx), redirecciones (3xx), errores del cliente (4xx) o errores del servidor (5xx). Esta opción de filtrado es especialmente útil cuando desea explorar códigos de estado relacionados."
      },
      step3: {
        title: "Paso 3: Revise la Lista de Códigos de Estado",
        description: "Después de buscar o filtrar, revise la lista de códigos de estado coincidentes. Cada entrada muestra el número del código, su nombre y una breve descripción. La codificación por colores ayuda a identificar rápidamente la categoría de cada código de estado: azul para informativos, verde para éxitos, amarillo para redirecciones, rojo para errores del cliente y morado para errores del servidor."
      },
      step4: {
        title: "Paso 4: Expanda para Ver Información Detallada",
        description: "Haga clic en cualquier entrada de código de estado para expandirla y ver información completa. La vista expandida proporciona una descripción detallada del propósito del código, ejemplos de respuestas HTTP y notas prácticas sobre cuándo aparece este código y cómo manejarlo. Esta información detallada lo ayuda a comprender completamente las implicaciones de cada código de estado en escenarios reales."
      }
    },
    common: {
      title: "Explicación de los Códigos de Estado HTTP Más Importantes",
      intro: "Aunque hay docenas de códigos de estado HTTP definidos en varias especificaciones, hay un puñado de códigos que se encuentran con mayor frecuencia durante el desarrollo web y la solución de problemas. Aquí hay una mirada más profunda a los códigos más significativos que debe comprender:",
      code1: {
        title: "200 OK - La Base de las Respuestas Exitosas",
        description: "El <b>código de estado 200 OK</b> indica que una solicitud ha sido procesada con éxito por el servidor. Este es el código de respuesta estándar para solicitudes HTTP exitosas, particularmente solicitudes GET que recuperan datos. Un sitio web correctamente funcional debe generar respuestas 200 para la mayoría de las interacciones del usuario. Sin embargo, si una página devuelve 200 pero aún se muestra incorrectamente, el problema probablemente reside en el contenido o en el código del lado del cliente en lugar de en la comunicación con el servidor."
      },
      code2: {
        title: "404 Not Found - Manejo de Recursos Faltantes",
        description: "El <b>código de estado 404 Not Found</b> ocurre cuando el recurso solicitado no existe en el servidor. Esto suele suceder con enlaces rotos, URLs mal escritas o contenido que ha sido eliminado. Desde una perspectiva SEO, demasiados errores 404 pueden afectar negativamente el posicionamiento de su sitio. Las mejores prácticas incluyen implementar páginas personalizadas 404 con opciones de navegación útiles, revisar regularmente los enlaces rotos y configurar redirecciones 301 adecuadas para contenido movido permanentemente."
      },
      code3: {
        title: "500 Internal Server Error - Manejo de Problemas del Lado del Servidor",
        description: "Un <b>código de estado 500 Internal Server Error</b> indica que el servidor encontró una condición inesperada que le impidió cumplir con la solicitud. Este es un error genérico del lado del servidor que puede ser causado por mala configuración, errores de script o limitaciones de recursos. Al solucionar errores 500, revise los registros del servidor para encontrar mensajes de error específicos, revise los cambios recientes en el código y verifique la disponibilidad de recursos del servidor. Para desarrolladores, implementar un registro detallado de errores y monitoreo es esencial para resolver rápidamente estos problemas del lado del servidor."
      },
      code4: {
        title: "301 vs 302 Redirecciones - Consideraciones Estratégicas de SEO",
        description: "La diferencia entre los códigos de estado <b>301 (Redirección Permanente)</b> y <b>302 (Redirección Temporal)</b> es crucial para la estrategia SEO. Una redirección 301 señala a los motores de búsqueda que el contenido se ha movido permanentemente, transfiriendo la mayor parte del poder de clasificación de la página original a la nueva URL. En contraste, una redirección 302 indica un movimiento temporal, que no transfiere el mismo valor SEO. Usar el tipo de redirección incorrecto puede afectar significativamente su visibilidad en los motores de búsqueda, por lo que es importante elegir la redirección adecuada según si la reubicación del contenido es permanente o temporal."
      }
    },
    faq: {
      title: "Preguntas Frecuentes Sobre Códigos de Estado HTTP",
      q1: "¿Cuál es la diferencia entre los códigos 4xx y 5xx?",
      a1: "La principal diferencia entre <b>los códigos 4xx y 5xx</b> radica en el origen del error. Los códigos 4xx indican errores del lado del cliente, lo que significa que el problema está con la solicitud misma. Ejemplos incluyen intentar acceder a recursos inexistentes (404), proporcionar una autenticación inválida (401) o carecer de permisos adecuados (403). El cliente necesita modificar la solicitud para resolver estos problemas.<br><br>En contraste, los códigos 5xx indican errores del lado del servidor, lo que significa que el servidor no logró cumplir con una solicitud válida. Estos podrían deberse a errores de configuración del servidor, errores de aplicación o limitaciones de recursos. Ejemplos incluyen errores internos del servidor (500), puerta de enlace incorrecta (502) o servicio no disponible (503). Generalmente se requiere intervención del servidor para corregir estos problemas, y el cliente normalmente no puede resolverlos modificando su solicitud.",
      q2: "¿Cómo afectan los códigos de estado HTTP al SEO y a los rankings en buscadores?",
      a2: "<b>Los códigos de estado HTTP influyen significativamente en el rendimiento SEO</b> y en cómo los motores de búsqueda indexan su sitio web. Los rastreadores de motores de búsqueda utilizan estos códigos para determinar cómo manejar las páginas que descubren:<br><br>• 200 (OK) señala que el contenido está disponible para indexación<br>• 301 (Redirección Permanente) transfiere señales de clasificación a la nueva URL<br>• 302 (Redirección Temporal) mantiene la clasificación con la URL original mientras sigue la redirección<br>• 404 (Not Found) puede afectar negativamente los rankings si hay muchos<br>• 410 (Gone) le dice a los motores de búsqueda que eliminen el contenido de los índices<br>• Los errores de nivel 500 pueden impedir la indexación y perjudicar los rankings si persisten<br>• 503 (Service Unavailable) con un encabezado Retry-After le dice a los motores de búsqueda que regresen más tarde<br><br>Implementar correctamente los códigos de estado asegura que los motores de búsqueda comprendan correctamente la estructura de su sitio, lo que directamente impacta su visibilidad en los buscadores y su potencial de clasificación.",
      q3: "¿Qué código de estado HTTP debo usar para una página temporalmente no disponible?",
      a3: "Para <b>páginas temporalmente no disponibles</b>, el código de estado más apropiado es <b>503 Service Unavailable</b>. Este código específicamente indica que el servidor temporalmente no puede manejar la solicitud debido a mantenimiento, sobrecarga u otras condiciones temporales. Lo que hace valioso al 503 durante apagones temporales es la capacidad de incluir un encabezado Retry-After, que le dice a los clientes y motores de búsqueda cuándo intentar acceder al recurso nuevamente.<br><br>Usar 503 durante períodos de mantenimiento planificado o apagones temporales tiene varias ventajas sobre otros códigos de error:<br><br>• Los motores de búsqueda no eliminarán su contenido de los índices, a diferencia de los errores persistentes 404 o 500<br>• Los agentes de usuario son explícitamente informados de que el problema es temporal<br>• Ayuda a mantener su equidad SEO durante ventanas de mantenimiento<br>• El encabezado Retry-After ayuda a gestionar el tráfico de rastreo durante el tiempo de inactividad<br><br>Para máxima efectividad, combine la respuesta 503 con una página de mantenimiento amigable para el usuario que explique la situación y el tiempo estimado de resolución.",
      q4: "¿Cómo debo manejar redirecciones para migraciones de sitios web amigables para SEO?",
      a4: "Para <b>migraciones de sitios web amigables para SEO</b>, la implementación correcta de redirecciones es crucial para preservar los rankings de búsqueda y la experiencia del usuario. El enfoque recomendado implica estos pasos clave:<br><br>1. <b>Use redirecciones 301 permanentes</b> para todo el contenido movido, ya que esto transfiere aproximadamente del 90 al 99% del poder de clasificación a las nuevas URLs<br>2. Implemente <b>redirecciones uno a uno</b> desde las URLs antiguas hasta sus equivalentes directos en las nuevas URLs, en lugar de redirigir todo a su página de inicio<br>3. Cree un <b>mapa de redirecciones completo</b> documentando todas las URLs antiguas y sus destinos correspondientes<br>4. Configure <b>redirecciones del lado del servidor</b> (a través de .htaccess, web.config o configuraciones del servidor) en lugar de depender de JavaScript o meta refreshes<br>5. <b>Preserve las estructuras de URL</b> siempre que sea posible para minimizar la necesidad de redirecciones<br>6. <b>Pruebe todas las redirecciones</b> antes de lanzarlas para asegurarse de que funcionen correctamente y no creen cadenas o bucles de redirección<br><br>Además, mantenga estas redirecciones en funcionamiento durante al menos un año después de la migración para asegurar que los motores de búsqueda y los enlaces guardados continúen encontrando su contenido correctamente.",
      q5: "¿Qué significa un código de estado 304 Not Modified?",
      a5: "Un <b>código de estado 304 Not Modified</b> indica que el recurso no ha sido modificado desde la última vez que fue solicitado, basándose en los encabezados condicionales enviados por el cliente. Este es en realidad un código positivo que ayuda a optimizar el rendimiento web a través de un almacenamiento en caché eficiente.<br><br>Cuando un navegador ya tiene una versión en caché de un recurso, puede enviar solicitudes condicionales con encabezados como If-Modified-Since o If-None-Match (con ETags). Si el servidor determina que el recurso no ha cambiado, responde con un código 304 en lugar de enviar todo el recurso nuevamente. Este proceso:<br><br>• Reduce el uso del ancho de banda para cliente y servidor<br>• Mejora los tiempos de carga de página utilizando recursos en caché<br>• Disminuye la carga del servidor evitando transferencias innecesarias de datos<br>• Mejora la experiencia del usuario con visitas posteriores más rápidas<br><br>Normalmente verá respuestas 304 para activos estáticos como imágenes, archivos CSS, JavaScript y ocasionalmente para contenido HTML que no ha cambiado. Este código de estado es un componente clave de una estrategia efectiva de almacenamiento en caché web.",
      q6: "¿Cómo puedo depurar códigos de estado HTTP poco comunes o personalizados?",
      a6: "Depurar <b>códigos de estado HTTP poco comunes o personalizados</b> requiere un enfoque sistemático y herramientas especializadas. Comience utilizando estos métodos para recopilar información detallada:<br><br>1. <b>Use herramientas de desarrollo del navegador</b>: Examine la pestaña Network para ver el código de estado exacto y los encabezados de respuesta<br>2. <b>Implemente herramientas de inspección HTTP</b> como Postman, cURL u otros depuradores HTTP especializados que proporcionen análisis detallado de solicitudes y respuestas<br>3. <b>Revise los registros del servidor</b> para obtener más contexto sobre por qué se generó el código de estado poco común<br>4. <b>Revise el código de aplicación</b> que maneja las respuestas, especialmente si usa frameworks que podrían implementar códigos de estado personalizados<br>5. <b>Consulte la documentación de la API</b> si el código de estado proviene de un servicio de terceros<br><br>Para códigos personalizados, recuerde que:<br>• Los códigos personalizados en el rango 9xx son completamente no estándar y específicos de ciertas aplicaciones<br>• Los códigos en rangos estándar (1xx-5xx) pero no en el registro oficial pueden provenir de especificaciones más recientes o extensiones de proveedores<br>• Algunos servicios usan códigos estándar pero de formas no estándar, requiriendo documentación específica del servicio<br><br>Nuestra herramienta de búsqueda de códigos de estado HTTP puede ayudar con códigos estándar, pero para códigos verdaderamente personalizados, deberá consultar la documentación específica de la aplicación o servicio con el que está interactuando."
    },
    relatedTools: {
      title: "Explore Más Herramientas de Desarrollo Web",
      description: "Mejore su flujo de trabajo de desarrollo web con estas herramientas complementarias:",
      tool1: {
        name: "Verificador de Seguridad de Encabezados HTTP",
        url: "https://www.ufreetools.com/tool/http-header-security-checker",
        description: "Analiza y evalúa la seguridad de los encabezados de respuesta HTTP."
      },
      tool2: {
        name: "Detector de Proxy HTTP",
        url: "https://www.ufreetools.com/tool/http-proxy-detector",
        description: "Detecta si su conexión está utilizando proxies HTTP y analiza encabezados relacionados con proxies para verificación de seguridad."
      },
      tool3: {
        name: "Analizador de Parámetros de URL",
        url: "https://www.ufreetools.com/tool/url-params-parser",
        description: "Analiza, manipula y comprende parámetros y cadenas de consulta de URL."
      },
      tool4: {
        name: "Formateador y Validador JSON",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Formatea, valida y mejora la apariencia de datos JSON para desarrollo y depuración de API."
      }
    },
    resources: {
      title: 'Recursos',
      resource1: {
        name: "MDN Web Docs - Códigos de Estado HTTP",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
        description: "La referencia más completa y actualizada para códigos de estado HTTP, con explicaciones detalladas e información sobre cumplimiento con estándares web."
      },
      resource2: {
        name: "Registro de Códigos de Estado HTTP IANA",
        url: "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml",
        description: "El registro oficial de la Autoridad de Números Asignados de Internet (IANA) de códigos de estado HTTP, que sirve como fuente definitiva para códigos estandarizados."
      },
      resource3: {
        name: "RFC 7231 - Semántica HTTP/1.1: Códigos de Estado",
        url: "https://tools.ietf.org/html/rfc7231#section-6",
        description: "La especificación oficial de HTTP/1.1 que define la semántica y uso de los códigos de estado HTTP estándar."
      }
    }
  }
}