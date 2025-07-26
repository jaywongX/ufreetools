export default {
  name: 'HTTP Proxy Detector',
  description: 'Detectar y analizar proxies HTTP y dispositivos intermedios en su conexión',
  title: 'Detector de Proxy Frontend',
  intro: 'Detecte si su conexión de red está utilizando un proxy, analizando encabezados HTTP relacionados con proxies como X-Forwarded-For',

  detection: {
    title: 'Detección de Proxies',
    start: 'Iniciar Detección',
    detecting: 'Detectando...',
    stop: 'Detener Detección',
    completed: 'Detección Completada',
    noProxies: 'No se detectaron proxies',
    proxiesFound: 'Proxies detectados: {count}'
  },

  options: {
    title: 'Opciones de Detección',
    testUrl: 'URL de Prueba',
    urlPlaceholder: 'Ingrese la URL a probar (predeterminado: automático)',
    testMethod: 'Método HTTP',
    get: 'GET',
    head: 'HEAD',
    options: 'OPTIONS',
    timeout: 'Tiempo de Espera (segundos)',
    parallel: 'Pruebas Paralelas',
    techniques: 'Técnicas de Detección',
    headerAnalysis: 'Análisis de Encabezados',
    traceMethod: 'Método TRACE',
    viaHeader: 'Verificación del Encabezado Via',
    maxForwards: 'Prueba Max-Forwards',
    fingerprinting: 'Huella Digital de Proxy',
    timing: 'Análisis de Tiempos',
    advanced: 'Opciones Avanzadas',
    apiSelection: 'Seleccionar API'
  },

  apis: {
    ipify: 'API ipify',
    ipapi: 'IP-API',
    httpbin: 'httpbin'
  },

  results: {
    title: 'Resultados de Detección',
    summary: 'Resumen del Proxy',
    headers: 'Encabezados de Solicitud Completos',
    info: 'Explicación de Información del Proxy',
    detected: 'Proxy Detectado',
    notDetected: 'No Se Detectó Proxy',
    detectedDescription: 'Su solicitud puede haber pasado por uno o más servidores proxy',
    notDetectedDescription: 'Su solicitud parece haber llegado directamente al servidor objetivo sin pasar por un proxy',
    clientInfo: 'Información IP del Cliente',
    remoteIp: 'Dirección IP Remota',
    location: 'Ubicación',
    isp: 'Proveedor ISP',
    proxyHeaders: 'Información de Encabezados Relacionados con Proxy',
    details: 'Resultados Detallados',
    proxy: 'Proxy',
    type: 'Tipo',
    ip: 'Dirección IP',
    software: 'Software',
    confidence: 'Confianza',
    latency: 'Latencia',
    headers: 'Encabezados Modificados',
    fingerprint: 'Huella Digital',
    export: 'Exportar Resultados',
    clear: 'Limpiar Resultados',
    noData: 'No hay datos disponibles',
    originalRequest: 'Solicitud Original',
    modifiedRequest: 'Solicitud Modificada',
    proxyChain: 'Cadena de Proxies',
    server: 'Servidor',
    notSet: 'No Establecido'
  },

  types: {
    forward: 'Proxy Directo',
    reverse: 'Proxy Inverso',
    transparent: 'Proxy Transparente',
    anonymous: 'Proxy Anónimo',
    elite: 'Proxy de Alta Anonimidad',
    caching: 'Proxy de Caché',
    gateway: 'Puerta de Enlace',
    loadBalancer: 'Balanceador de Carga',
    cdn: 'CDN',
    corporate: 'Proxy Corporativo',
    unknown: 'Tipo Desconocido'
  },

  headers: {
    title: 'Análisis de Encabezados',
    original: 'Encabezados Originales',
    modified: 'Encabezados Modificados',
    added: 'Encabezados Agregados',
    removed: 'Encabezados Eliminados',
    changed: 'Encabezados Cambiados',
    suspicious: 'Encabezados Sospechosos',
    select: 'Seleccione los encabezados para analizar',
    name: 'Nombre del Encabezado',
    value: 'Valor',
    all: 'Todos los Encabezados de Solicitud HTTP',
    notFound: 'Esta información de encabezado no fue encontrada'
  },

  details: {
    title: 'Detalles del Proxy',
    software: 'Software',
    version: 'Versión',
    features: 'Características',
    modifications: 'Modificaciones',
    behavior: 'Comportamiento',
    security: 'Impacto en Seguridad',
    recommendations: 'Recomendaciones'
  },

  map: {
    title: 'Mapa de Conexión',
    client: 'Su Cliente',
    target: 'Servidor Objetivo',
    hop: 'Salto {n}',
    direct: 'Conexión Directa',
    proxied: 'Conexión Proxificada',
    unknown: 'Ruta Desconocida'
  },

  actions: {
    copyHeaders: 'Copiar Encabezados de Solicitud',
    copyToClipboard: 'Copiar al Portapapeles'
  },

  messages: {
    startDetection: 'Iniciando detección de proxy...',
    detectionComplete: 'Detección de proxy completada',
    error: 'La detección falló: {message}',
    timeout: 'Tiempo de espera agotado',
    exportComplete: 'Resultados exportados exitosamente',
    noConnection: 'No se pudo establecer una conexión',
    limitedResults: 'Los resultados son limitados debido a restricciones',
    privateNetwork: 'Red privada detectada',
    publicNetwork: 'Red pública detectada',
    warning: 'Advertencia: {message}',
    proxyRemoved: 'Un proxy podría estar eliminando encabezados de detección',
    copied: 'Encabezados de solicitud copiados al portapapeles',
    copyFailed: 'Fallo al copiar, por favor copie manualmente',
    unknown: 'Error desconocido'
  },

  info: {
    description: 'Un proxy HTTP es un servidor intermediario ubicado entre el cliente y el servidor, que procesa solicitudes HTTP para varios propósitos. Los proxies pueden ser configurados por proveedores de red, organizaciones, empresas o individuos.'
  },

  xff: {
    title: '¿Qué es X-Forwarded-For?',
    description: 'X-Forwarded-For (XFF) es un campo de encabezado HTTP que identifica la dirección IP de origen de un cliente que se conecta a un servidor web a través de un proxy HTTP o balanceador de carga. Cuando una solicitud pasa a través de un proxy, el servidor generalmente solo ve la dirección IP del proxy, mientras que el encabezado XFF proporciona una forma de rastrear hasta la dirección IP original del cliente.',
    notFound: 'El encabezado X-Forwarded-For no fue encontrado, lo que indica que la solicitud puede no haber pasado a través de un proxy o que el proxy no agregó este encabezado.',
    format: {
      title: 'Formato del Encabezado XFF',
      description: 'El formato estándar del encabezado XFF es una lista separada por comas de direcciones IP, donde la dirección IP más a la izquierda corresponde al cliente original, y las direcciones posteriores representan los proxies atravesados:'
    },
    related: {
      title: 'Otros Encabezados Relacionados con Proxies',
      forwardedProto: 'Identifica el protocolo utilizado por el cliente para conectarse al proxy (HTTP o HTTPS)',
      forwardedHost: 'Identifica el nombre de host original solicitado por el cliente',
      via: 'Indica los servidores proxy por los que pasaron la solicitud y la respuesta',
      forwarded: 'Un encabezado estándar más reciente que incluye tanto información del cliente como de todos los proxies'
    },
    importance: {
      title: '¿Por Qué Es Importante La Información del Proxy?',
      security: 'Seguridad y control de acceso - Identificar con precisión la dirección IP del cliente es importante para prevenir abusos e implementar controles de acceso basados en IP',
      logging: 'Registro - Para auditorías y resolución de problemas, registrar la dirección IP real del cliente es más útil que la IP del proxy',
      geolocation: 'Servicios de geolocalización - Los servicios de geolocalización basados en IP requieren la dirección IP real del cliente para proporcionar resultados precisos',
      content: 'Personalización de contenido - Algunos servicios ofrecen contenido localizado según la geolocalización del usuario'
    },
    security: {
      title: 'Consideraciones de Seguridad',
      description: 'Es importante tener en cuenta que el encabezado X-Forwarded-For puede ser falsificado por clientes. En entornos de alta seguridad, solo debe confiarse en la información XFF agregada por servidores proxy conocidos, o utilizar otros métodos para verificar la dirección IP del cliente.'
    }
  },

  privacy: {
    title: 'Aviso de Privacidad',
    description: 'Durante el proceso de detección, su dirección IP e información de encabezados HTTP serán enviadas a servicios API de terceros para análisis. Estos servicios pueden recolectar y almacenar esta información para proporcionar sus servicios.',
    suggestion: 'Si tiene preocupaciones sobre su privacidad, seleccione otro proveedor de API o considere utilizar un servicio VPN.'
  }
};