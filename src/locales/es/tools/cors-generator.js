export default {
  name: 'Generador de Configuración CORS',
  description: 'Cree rápidamente configuraciones de Cross-Origin Resource Sharing (CORS) que admiten múltiples entornos de servidor',

  options: {
    title: 'Opciones de CORS',
    allowedOrigins: {
      title: 'Orígenes permitidos (Access-Control-Allow-Origin)',
      allowAll: 'Permitir todos los orígenes (*) <span class="text-yellow-500 text-xs ml-1">(Inseguro, no admite credenciales)</span>',
      specific: 'Especificar orígenes permitidos (Recomendado)',
      addOrigin: 'Añadir Origen',
      placeholder: 'Ingrese el origen (por ejemplo, https://ejemplo.com)',
      wildcard: 'Permitir subdominios (wildcard)',
      null: 'Permitir origen nulo',
      remove: 'Eliminar dominio'
    },
    allowedMethods: {
      title: 'Métodos HTTP permitidos (Access-Control-Allow-Methods)',
      selectMethods: 'Seleccionar métodos HTTP',
      get: 'GET',
      post: 'POST',
      put: 'PUT',
      delete: 'DELETE',
      patch: 'PATCH',
      head: 'HEAD',
      options: 'OPTIONS'
    },
    allowedHeaders: {
      title: 'Encabezados de solicitud permitidos (Access-Control-Allow-Headers)',
      all: 'Permitir todos los encabezados (*)',
      specific: 'Solo encabezados específicos',
      addHeader: 'Agregar Encabezado',
      headerPlaceholder: 'Ingrese el nombre del encabezado',
      common: 'Encabezados comunes de solicitud',
      custom: 'Encabezados personalizados',
      contentType: 'Content-Type',
      accept: 'Accept',
      authorization: 'Authorization',
      origin: 'Origin',
      xRequestedWith: 'X-Requested-With',
      contentDisposition: 'Content-Disposition',
      remove: 'Eliminar encabezado'
    },
    exposedHeaders: {
      title: 'Encabezados de respuesta expuestos (Access-Control-Expose-Headers)',
      description: 'Permitir que el navegador acceda a estos encabezados de respuesta',
      addHeader: 'Agregar encabezado expuesto',
      headerPlaceholder: 'Ingrese el nombre del encabezado'
    },
    credentials: {
      title: 'Permitir credenciales (Access-Control-Allow-Credentials)',
      description: 'Permitir cookies y encabezados de autenticación',
      allow: 'Permitir credenciales',
      warning: 'Solo se puede usar con orígenes específicos, no se puede usar con el comodín (*)'
    },
    maxAge: {
      title: 'Duración del caché de preflight (Access-Control-Max-Age)',
      description: 'Duración para cachear los resultados de la solicitud de preflight (segundos)',
      seconds: 'Segundos',
      default: 'Predeterminado:',
      recommended: 'Recomendado: 3600 (1 hora)'
    },
    serverType: {
      title: 'Tipo de Servidor',
      apache: 'Apache (.htaccess)',
      nginx: 'Nginx',
      express: 'Express.js',
      springBoot: 'Spring Boot',
      php: 'PHP',
      flask: 'Flask (Python)',
      django: 'Django',
      rails: 'Ruby on Rails',
      aws: 'AWS S3/CloudFront',
      azure: 'Azure',
      iis: 'IIS (web.config)',
      jetty: 'Jetty',
      headers: 'Encabezados HTTP'
    }
  },

  output: {
    title: 'Encabezados Generados',
    instructions: 'Agregue estos encabezados a las respuestas de su servidor:',
    copy: 'Copiar Encabezados',
    test: 'Probar Encabezados',
    downloadConfig: 'Descargar Configuración'
  },

  configs: {
    title: 'Ejemplos de Configuración',
    nginx: 'Nginx',
    apache: 'Apache (.htaccess)',
    express: 'Express.js',
    springBoot: 'Spring Boot',
    php: 'PHP',
    flask: 'Flask (Python)',
    django: 'Django',
    rails: 'Ruby on Rails',
    aws: 'AWS S3/CloudFront',
    azure: 'Azure',
    iis: 'IIS Web.config'
  },

  testing: {
    title: 'Pruebas de CORS',
    description: 'Pruebe si su configuración de CORS funciona correctamente',
    originUrl: 'URL de Origen',
    targetUrl: 'URL de destino',
    method: 'Método de solicitud',
    credentials: 'Incluir Credenciales',
    headers: 'Encabezados personalizados',
    addHeader: 'Añadir Encabezado',
    testButton: 'Probar CORS',
    results: 'Resultados de la prueba',
    success: 'Prueba de CORS exitosa ✓',
    failure: 'Prueba de CORS fallida ✗',
    details: 'Detalles de la respuesta',
    response: 'Respuesta',
    logs: 'Registros de CORS',
    errorDetails: 'Detalles del error'
  },

  presets: {
    title: 'Preestablecidos',
    api: 'Servidor de API',
    assets: 'Recursos estáticos (CDN)',
    auth: 'Servicio de autenticación',
    publicAccess: 'Acceso público',
    restrictive: 'Restrictivo',
    load: 'Cargar Preestablecido',
    save: 'Guardar Configuración Actual como Preestablecido'
  },

  tips: {
    title: 'Consejos de CORS',
    tip1: 'Cross-Origin Resource Sharing (CORS) es un mecanismo basado en encabezados HTTP que permite a un servidor indicar qué otros orígenes (dominio, protocolo o puerto) pueden cargar recursos.',
    tip2: 'La protección CORS es una característica de seguridad en navegadores modernos que bloquea páginas web de hacer solicitudes a diferentes dominios que sirven la página web, protegiendo a los usuarios de ataques de falsificación de solicitud entre sitios.',
    usage: {
      title: 'Escenarios de uso de CORS:',
      tip1: 'Permitir que JavaScript frontend acceda a APIs desde dominios diferentes',
      tip2: 'Soportar solicitudes Ajax o Fetch cruzadas',
      tip3: 'Permitir el acceso cruzado a fuentes, CSS u otros recursos',
      tip4: 'Configurar comunicación entre servicios en una arquitectura de microservicios'
    },
    safe: 'Consejo de seguridad: Generalmente se recomienda evitar usar el comodín "*" como origen permitido y en su lugar especificar explícitamente los dominios que confía para reducir los riesgos de seguridad.'
  },

  messages: {
    copied: 'Encabezados copiados al portapapeles',
    configDownloaded: 'Configuración descargada',
    testStarted: 'Inicio de prueba CORS',
    testSucceeded: 'La solicitud CORS tuvo éxito',
    testFailed: 'La solicitud CORS falló: {error}',
    presetSaved: 'Preestablecido guardado',
    presetLoaded: 'Preestablecido cargado'
  },

  config: {
    title: 'Configuración',
    empty: 'Configure opciones para generar configuraciones CORS',
    copied: 'Configuración copiada al portapapeles!',
    copy: 'Copiar'
  },

  comments: {
    expressMiddleware: "// Usar middleware de aplicación Express",
    applyGlobalCors: "// Aplicar middleware CORS globalmente",
    applySpecificRoute: "// O aplicar a rutas específicas",
    applyRequest: "// Aplicar solicitud",
    apacheAllowedOrigins: "# Orígenes permitidos",
    apacheAllowedMethods: "# Métodos HTTP permitidos",
    apacheAllowedHeaders: "# Encabezados HTTP permitidos",
    apacheAllowedCredentials: "# Credenciales permitidas",
    preflightCacheDuration: "# Duración del caché de preflight",
    handlePreflightRequest: "# Manejo de solicitudes de preflight",
    apacheExposeHeaders: "# Exponer encabezados",
    nginxConfiguration: "# Configuración CORS\n# Agregue esta configuración a su bloque server o location",
    nginxAllowedOrigins: "# Orígenes permitidos",
    nginxAllowedMethods: "# Métodos HTTP permitidos",
    nginxAllowedHeaders: "# Encabezados HTTP permitidos",
    nginxAllowedCredentials: "# Credenciales permitidas",
    nginxPreflightCacheDuration: "# Duración del caché de preflight",
    nginxExposeHeaders: '# Exponer encabezados',
    nginxHandlePreflight: "# Manejo de solicitudes de preflight",
    httpHeadersConfiguration: "# Configuración de encabezados HTTP CORS",
    httpAllowedOrigins: "# Orígenes permitidos",
    httpAllowedMethods: "# Métodos HTTP permitidos",
    httpAllowedHeaders: "# Encabezados HTTP permitidos",
    httpAllowedCredentials: "# Credenciales permitidas",
    httpPreflightCacheDuration: "# Duración del caché de preflight",
    httpExposeHeaders: '# Exponer encabezados',
  }
};