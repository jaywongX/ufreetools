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
  }
};