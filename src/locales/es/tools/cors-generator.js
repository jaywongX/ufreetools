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
  },
  article: {
    title: "Guía Completa sobre el Generador de Configuración CORS - Configuración Segura de Compartición de Recursos Entre Orígenes",
    intro: {
      title: "Entendiendo la Configuración CORS y su Rol Crítico en la Seguridad Web",
      p1: "<b>Cross-Origin Resource Sharing (CORS)</b> es un mecanismo de seguridad fundamental implementado en todos los navegadores modernos que controla cómo las páginas web en un dominio pueden solicitar e interactuar con recursos alojados en otro dominio. Nuestra herramienta Generador de Configuración CORS simplifica el proceso complejo de crear encabezados y configuraciones CORS adecuadas, asegurando que sus aplicaciones web puedan comunicarse de forma segura entre diferentes dominios mientras mantienen límites de seguridad apropiados. Al generar configuraciones precisamente adaptadas, esta herramienta ayuda a los desarrolladores a implementar controles de acceso correctos que protegen datos sensibles mientras habilitan funcionalidad cruzada legítima.",
      p2: "<b>Una configuración CORS adecuada es esencial</b> para aplicaciones web modernas que aprovechan arquitecturas distribuidas, API de terceros y microservicios. Sin una configuración CORS correcta, los navegadores bloquearán solicitudes cruzadas por defecto como medida de seguridad, impidiendo que muchas arquitecturas comunes de aplicaciones web funcionen correctamente. Nuestro generador crea configuraciones estandarizadas para varios entornos de servidor, incluyendo Node.js/Express, Apache, Nginx y encabezados HTTP brutos, permitiendo a los desarrolladores implementar políticas CORS consistentes independientemente de su conjunto tecnológico backend. Esto agiliza flujos de trabajo de desarrollo y reduce el potencial de errores de configuración de seguridad que podrían exponer aplicaciones a vulnerabilidades de falsificación de solicitud entre sitios (CSRF) y robo de datos.",
      p3: "<b>La generación de políticas CORS requiere consideración cuidadosa</b> de varios parámetros de seguridad incluyendo orígenes permitidos, métodos HTTP, cabeceras y manejo de credenciales. La configuración manual es propensa a errores y puede llevar a políticas demasiado restrictivas que rompan la funcionalidad o configuraciones peligrosamente permisivas que comprometan la seguridad. Nuestra herramienta guía a los usuarios a través de cada opción de configuración con explicaciones claras y valores predeterminados seguros, ayudando a los desarrolladores a tomar decisiones informadas sobre su implementación de CORS. Las configuraciones resultantes equilibran requisitos de seguridad con necesidades de funcionalidad cruzada, proporcionando valor inmediato para desarrolladores frontend, arquitectos de API y ingenieros de seguridad trabajando en aplicaciones web modernas."
    },
    useCases: {
      title: "Aplicaciones Prácticas del Generador de Configuración CORS",
      case1: "<b>API Gateway y Arquitectura de Microservicios</b>: Las organizaciones que desarrollan sistemas distribuidos utilizando gateways de API y microservicios frecuentemente requieren configuraciones CORS precisas para garantizar una comunicación segura entre aplicaciones front-end y servicios back-end. Los arquitectos de API utilizan nuestro generador de CORS para desarrollar configuraciones de encabezados estandarizadas que se puedan implementar consistentemente en múltiples puntos finales de servicio. Este enfoque permite que los microservicios permanezcan adecuadamente aislados mientras aún permiten solicitudes cruzadas legítimas desde aplicaciones cliente autorizadas. Por ejemplo, una empresa de tecnología financiera podría configurar su API de procesamiento de pagos para aceptar solicitudes solo desde dominios específicos de frontend, bloqueando todas las demás solicitudes cruzadas. Nuestro generador crea configuraciones que mantienen estos límites de seguridad sin requerir que los desarrolladores creen manualmente reglas complejas de encabezados para cada servicio.",
      case2: "<b>Integración de API de Terceros y Aplicaciones SaaS</b>: Las empresas que ofrecen servicios de API y plataformas SaaS necesitan permitir integraciones de terceros mientras mantienen límites de seguridad mediante configuraciones CORS adecuadas. Los ingenieros de plataforma utilizan nuestro generador para crear configuraciones que permitan selectivamente el acceso cruzado basado en dominios de socios y estado de suscripción. Por ejemplo, una plataforma de análisis de marketing podría configurar su API de datos para aceptar solicitudes desde los dominios de sus clientes mientras previene el acceso no autorizado. El generador ayuda a crear políticas CORS específicas que se puedan ajustar dinámicamente a medida que evolucionan las relaciones con los clientes, asegurando que el acceso a la API permanezca tanto seguro como alineado con los negocios. Esta capacidad es especialmente valiosa en escenarios de ecosistemas de socios donde los proveedores de API deben equilibrar la apertura para integraciones con los requisitos de seguridad.",
      case3: "<b>Redes de Entrega de Contenido (CDN) y Alojamiento de Activos</b>: Las organizaciones que alojan activos estáticos como fuentes, hojas de estilo, imágenes y archivos JavaScript en CDNs dedicados requieren configuraciones CORS adecuadas para hacer estos recursos accesibles a sus aplicaciones web. Los ingenieros de DevOps utilizan nuestro generador para crear configuraciones que permitan a aplicaciones específicas acceder a activos alojados en CDN mientras previenen el uso no autorizado por otros dominios. Por ejemplo, una empresa de publicación que aloja fuentes premium configuraría encabezados CORS para permitir solo sus propias webs para usar estos activos. El generador crea configuraciones específicas para entornos de CDN y servidores de borde, optimizando para seguridad y rendimiento estableciendo directivas de caché adecuadas junto con controles de acceso. Esto asegura que los recursos estáticos permanezcan protegidos mientras aún se entreguen eficientemente a aplicaciones autorizadas.",
      case4: "<b>Entornos de Desarrollo y Pruebas</b>: Los equipos de desarrollo de software que trabajan con múltiples entornos (desarrollo, staging, producción) necesitan configuraciones CORS flexibles que se adapten a diferentes requisitos de seguridad a lo largo del ciclo de vida del desarrollo. Los desarrolladores frontend utilizan nuestro generador para crear configuraciones específicas del entorno que permitan el acceso cruzado durante el desarrollo y pruebas mientras implementen controles más estrictos en producción. Por ejemplo, un entorno de desarrollo podría permitir orígenes de localhost para pruebas locales, mientras que los entornos de producción restringirían el acceso solo a dominios verificados. El generador ayuda a crear estas políticas de seguridad graduadas sin requerir reconfiguración extensa, acelerando el flujo de trabajo de desarrollo mientras mantiene los límites de seguridad adecuados en cada etapa. Este enfoque previene que atajos de seguridad durante el desarrollo persistan en entornos de producción.",
      case5: "<b>Aplicaciones Web Multiregiónales e Internacionales</b>: Las organizaciones globales que operan aplicaciones en múltiples regiones geográficas a menudo despliegan servicios en dominios y subdominios específicos de región que deben comunicarse de forma segura entre sí. Los arquitectos de sistemas utilizan nuestro generador para crear configuraciones CORS que permitan solicitudes cruzadas entre los diversos dominios de una organización mientras bloquean solicitudes externas. Por ejemplo, una corporación multinacional podría necesitar permitir que api.us.example.com reciba solicitudes de app.eu.example.com. El generador crea especificaciones de origen precisas que tengan en cuenta estas relaciones de dominio complejas mientras mantienen límites de seguridad contra dominios externos. Estas configuraciones aseguran que los componentes distribuidos de la misma aplicación puedan funcionar de manera cohesiva mientras mantienen protección contra amenazas de origen cruzado de fuentes no autorizadas."
    },
    tutorial: {
      title: "Cómo Generar Configuraciones CORS Seguras",
      intro: "Siga este tutorial paso a paso para crear configuraciones CORS adecuadamente seguras adaptadas a sus requisitos específicos:",
      step1: {
        title: "Paso 1: Configurar Orígenes Permitidos",
        description: "Comience especificando qué dominios están permitidos para acceder a sus recursos a través de la sección <b>Orígenes Permitidos</b>. Para máxima seguridad, evite usar la opción comodín (*) que permite cualquier dominio para acceder a sus recursos. En su lugar, seleccione la opción \"Especificar orígenes permitidos\" y agregue cada dominio confiable individualmente. Por ejemplo, ingrese \"https://suaplicaciónconfiable.com\" para permitir solo ese dominio específico. Recuerde incluir el protocolo (https://) y tenga en cuenta que los subdominios se consideran orígenes separados (app.example.com y api.example.com son orígenes diferentes). Si necesita soportar entornos de desarrollo, puede agregar dominios de desarrollo como \"http://localhost:3000\" junto con dominios de producción. Después de agregar todos los dominios confiables, revise cuidadosamente para detectar errores de escritura ya que incluso errores menores causarán que solicitudes legítimas sean bloqueadas por los navegadores."
      },
      step2: {
        title: "Paso 2: Especificar Métodos HTTP Permitidos",
        description: "A continuación, seleccione los métodos HTTP que su API o recursos deben aceptar de solicitudes cruzadas en la sección <b>Métodos HTTP Permitidos</b>. Siguiendo el principio de privilegio mínimo, habilite solo los métodos que su aplicación realmente necesita. Para recursos de solo lectura, considere limitarlos a GET y OPTIONS (OPTIONS es necesario para solicitudes de preflight). Para recursos que aceptan actualizaciones, habilite selectivamente POST, PUT, PATCH o DELETE según los requisitos reales de su API. Sea particularmente cauteloso al habilitar métodos que modifican datos (POST, PUT, PATCH, DELETE) ya que estos requieren consideraciones adicionales de seguridad. El método OPTIONS generalmente debe permanecer habilitado ya que los navegadores lo usan para solicitudes de preflight para verificar permiso antes de hacer solicitudes cruzadas reales con otros métodos. Su selección aquí impacta directamente en qué operaciones pueden realizar clientes cruzados en sus recursos."
      },
      step3: {
        title: "Paso 3: Configurar Encabezados y Credenciales",
        description: "En la sección <b>Encabezados Permitidos</b>, especifique qué encabezados de solicitud HTTP deben ser permitidos en solicitudes cruzadas. Habilite los encabezados comunes necesarios por su aplicación como 'Content-Type' para especificar formatos de solicitud, 'Authorization' para tokens de autenticación y cualquier encabezado personalizado que su aplicación requiera. Para autenticación basada en credenciales (cookies, autenticación HTTP o certificados del cliente), configure la opción <b>Permitir Credenciales</b> apropiadamente. Importante: Cuando se permiten credenciales, no se puede usar el comodín (*) para orígenes permitidos – debe especificar orígenes explícitos. A continuación, establezca una duración de caché de preflight apropiada para reducir el número de solicitudes de preflight. El valor recomendado de 3600 segundos (una hora) equilibra el rendimiento con la flexibilidad para actualizar las políticas CORS cuando sea necesario. Finalmente, si su API devuelve encabezados personalizados que las aplicaciones cliente necesitan acceder, agréguelos a la sección <b>Encabezados Expuestos</b>."
      },
      step4: {
        title: "Paso 4: Generar e Implementar la Configuración del Servidor",
        description: "Después de configurar todos los parámetros CORS, seleccione su entorno de servidor objetivo desde las opciones de formato (Node.js/Express, Apache, Nginx, o Encabezados HTTP). Revise la configuración generada para asegurarse de que coincida con sus requisitos. Copie la configuración usando el botón 'Copiar' e impleméntela en su entorno de servidor de acuerdo con la documentación de su plataforma. Para aplicaciones Node.js, instale el paquete 'cors' y aplique la configuración a su aplicación Express. Para servidores Apache, agregue las directivas generadas a su archivo .htaccess o configuración del servidor. Para Nginx, incluya las directivas en su bloque server o location. Después de la implementación, pruebe exhaustivamente su configuración CORS usando solicitudes cruzadas para verificar que las solicitudes legítimas sean permitidas mientras los orígenes no autorizados permanezcan bloqueados. Considere usar las herramientas de desarrollador del navegador para inspeccionar los encabezados CORS devueltos por su servidor y depurar cualquier problema."
      }
    },
    corsDetails: {
      title: "Detalles Técnicos de la Implementación de CORS",
      intro: "Entender los mecanismos subyacentes de CORS ayuda a crear configuraciones más efectivas y seguras:",
      preflight: {
        title: "Solicitudes de Preflight y su Rol",
        description: "<b>Las solicitudes de preflight son un mecanismo de seguridad crítico</b> en el protocolo CORS que los navegadores usan para verificar si tienen permiso para realizar ciertas solicitudes cruzadas antes de enviarlas realmente. Cuando una solicitud podría modificar datos del servidor (como solicitudes POST o PUT) o usar encabezados no simples, los navegadores envían automáticamente una solicitud OPTIONS al servidor primero. Esta solicitud de preflight incluye encabezados indicando el método HTTP y los encabezados que la solicitud real intención de usar. El servidor debe responder con los encabezados Access-Control-Allow-* apropiados indicando si la solicitud intencionada es permitida. Este mecanismo de preflight proporciona un punto de verificación de seguridad importante que previene solicitudes cruzadas potencialmente peligrosas que se envíen a servidores que no han optado expresamente por recibirlas. Nuestro Generador de Configuración CORS crea automáticamente las directivas necesarias para manejar estas solicitudes de preflight en todos los servidores compatibles, asegurando que su servidor responda correctamente a estas verificaciones de seguridad del navegador con los permisos que ha especificado."
      },
      security: {
        title: "Implicaciones de Seguridad de las Configuraciones CORS",
        description: "<b>Las configuraciones CORS impactan directamente la postura de seguridad</b> de sus aplicaciones web al controlar qué dominios externos pueden interactuar con sus puntos finales de API y recursos. Configuraciones CORS muy permisivas —especialmente usando el origen comodín (*)— pueden exponer su aplicación a ataques de falsificación de solicitud entre sitios donde sitios maliciosos hagan solicitudes no autorizadas a su API usando la sesión autenticada del usuario. Cuando se usa el encabezado Access-Control-Allow-Credentials: true, es especialmente crítico especificar orígenes exactos en lugar de comodines, ya que permitir credenciales con orígenes comodín crearía vulnerabilidades de seguridad graves. El principio de privilegio mínimo debe guiar su configuración CORS: solo permita los orígenes, métodos y encabezados que su aplicación realmente requiere para su funcionalidad. Nuestro generador fomenta buenas prácticas de seguridad proporcionando advertencias claras sobre configuraciones posiblemente inseguras y ofreciendo valores predeterminados seguros que protejan sus recursos mientras habilitan la funcionalidad cruzada necesaria. Este enfoque ayuda a prevenir configuraciones de seguridad comunes que podrían llevar a exposición de datos o acciones no autorizadas."
      },
      headers: {
        title: "Encabezados CORS Esenciales Explicados",
        description: "<b>Cada encabezado CORS sirve una función de seguridad específica</b> en el control del acceso cruzado a sus recursos. Access-Control-Allow-Origin especifica qué dominios pueden acceder a sus recursos y es el encabezado CORS más fundamental—los navegadores aplican estrictamente este emparejamiento de orígenes. Access-Control-Allow-Methods declara qué métodos HTTP pueden usarse cuando los dominios externos solicitan sus recursos, permitiéndole restringir las solicitudes cruzadas a operaciones de solo lectura si así lo desea. Access-Control-Allow-Headers controla qué encabezados HTTP pueden incluirse en solicitudes cruzadas, permitiéndole permitir encabezados específicos como Authorization mientras bloquea otros. Access-Control-Allow-Credentials determina si los navegadores pueden enviar cookies o información de autenticación con solicitudes cruzadas, lo cual es esencial para mantener sesiones autenticadas entre orígenes. Access-Control-Max-Age especifica cuánto tiempo los navegadores deben cachear la respuesta de preflight, optimizando el rendimiento al reducir las solicitudes de preflight. Access-Control-Expose-Headers permite hacer visibles a los clientes cruzados ciertos encabezados de respuesta, lo cual es necesario cuando los clientes necesitan acceder a encabezados personalizados en las respuestas de su API. Nuestro generador crea combinaciones adecuadas de estos encabezados según sus requisitos específicos, asegurando una configuración CORS completa y coherente."
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Configuración CORS",
      q1: "¿Cuál es la diferencia entre CORS y la política de mismo origen?",
      a1: "<b>La Política de Mismo Origen (SOP) y Cross-Origin Resource Sharing (CORS)</b> trabajan juntos para crear un entorno de navegación web seguro, aunque sirven propósitos diferentes. La Política de Mismo Origen es el mecanismo de seguridad predeterminado en navegadores que restringe cómo documentos o scripts de un origen pueden interactuar con recursos de otro origen. Esta es una restricción base que bloquea solicitudes cruzadas por defecto. CORS, por otro lado, es una relajación controlada de esta política—it proporciona un modo estructurado para que los servidores declaren qué orígenes deberían ser permitidos para acceder a sus recursos a pesar de las restricciones de SOP. Mientras SOP es un restrictivo controlado por el navegador, CORS se implementa a través de encabezados HTTP que los servidores envían para decirle a los navegadores qué solicitudes cruzadas deberían ser permitidas como excepciones a SOP. Nuestro generador de CORS crea las configuraciones del lado del servidor que permiten estas excepciones controladas a la Política de Mismo Origen. Sin encabezados CORS adecuados, los navegadores aplicarán SOP y bloquearán solicitudes cruzadas incluso si su servidor es técnicamente capaz de manejarlas. Esto es por qué la configuración CORS es esencial para aplicaciones web modernas que necesitan compartir recursos entre diferentes dominios."
      ,
      q2: "¿Por qué no puedo usar orígenes * cuando se habilitan credenciales?",
      a2: "<b>Los navegadores prohíben estrictamente usar orígenes comodín con credenciales</b> como medida de seguridad crítica para prevenir graves vulnerabilidades. Si los navegadores permitieran la combinación de Access-Control-Allow-Origin: * con Access-Control-Allow-Credentials: true, crearía una situación peligrosa donde cualquier sitio web podría hacer solicitudes autenticadas a su API usando las credenciales del usuario (cookies, autenticación HTTP o certificados del cliente). Esto anularía efectivamente la protección que SOP proporciona contra ataques de falsificación de solicitud entre sitios (CSRF). Por ejemplo, si esta combinación fuera permitida, un sitio malicioso podría hacer solicitudes a su API de banca con las cookies de autenticación del usuario, posiblemente transferir fondos o acceder a información sensible. Para prevenir esta vulnerabilidad, todos los navegadores principales imponen una regla estricta: cuando Access-Control-Allow-Credentials se establece en true, el encabezado Access-Control-Allow-Origin debe especificar un origen exacto en lugar de un comodín. Nuestro generador de CORS aplica esta restricción de seguridad al deshabilitar la opción de credenciales cuando se seleccionan orígenes comodín, y viceversa, deshabilitando orígenes comodín cuando se habilitan credenciales. Esto asegura que sus configuraciones generadas siempre cumplan con este requisito de seguridad crítico de los navegadores."
      ,
      q3: "¿Cómo afectan las solicitudes de preflight de CORS al rendimiento de la API?",
      a3: "<b>Las solicitudes de preflight de CORS pueden afectar significativamente el rendimiento de la API</b> porque añaden una solicitud HTTP adicional (OPTIONS) antes de la solicitud real para muchos escenarios de solicitud cruzada. Cada solicitud de preflight crea latencia ya que los navegadores deben esperar la respuesta OPTIONS antes de proceder con la solicitud real para solicitudes cruzadas no simples. Esto duplica el número de solicitudes HTTP y rondas de servidor para estos tipos de solicitudes. Este impacto en el rendimiento es particularmente notorio en aplicaciones con llamadas de API frecuentes o conexiones de alta latencia. Para mitigar este costo de rendimiento, el encabezado Access-Control-Max-Age es crucial—indica a los navegadores que cacheen los resultados de preflight durante un período especificado (en segundos), evitando solicitudes de preflight adicionales para el mismo recurso dentro de ese periodo. Nuestro generador recomienda establecer este valor en 3600 segundos (una hora) como un valor predeterminado razonable que equilibra la optimización del rendimiento con la flexibilidad para actualizar las políticas CORS cuando sea necesario. Para aplicaciones de alto tráfico, podría considerar aumentar este valor aún más (hasta 86400 segundos/24 horas, aunque los navegadores pueden imponer sus propios límites superiores). Además, para un máximo rendimiento en entornos de producción, asegúrese de que su servidor responda rápidamente a las solicitudes OPTIONS y considere implementar rutas específicas de optimización para manejar solicitudes de preflight con sobrecarga mínima de procesamiento.",
      q4: "¿Cómo debo probar correctamente si mi configuración CORS funciona correctamente?",
      a4: "<b>Probar configuraciones CORS requiere un enfoque metódico</b> ya que configuraciones incorrectas a menudo se manifiestan como mensajes de error vagos que pueden ser difíciles de diagnosticar. La estrategia de prueba más efectiva implica crear un cliente de prueba cruzado simple alojado en un dominio diferente al de su API. Esto podría ser una página HTML básica con JavaScript que hace diversas solicitudes a sus puntos finales de API. Usando las herramientas de desarrollador de Chrome o Firefox (pestaña Network), observe tanto las solicitudes OPTIONS de preflight como las solicitudes posteriores reales. Verifique que las solicitudes OPTIONS reciban respuestas 200 o 204 con los encabezados Access-Control-Allow-* correctos. Pruebe diversos escenarios incluyendo diferentes métodos HTTP, encabezados personalizados y solicitudes con credenciales para asegurarse de que su configuración maneje todos los requisitos de su aplicación. Problemas comunes de prueba incluyen olvidar que localhost:3000 y localhost:8080 se consideran orígenes diferentes por los navegadores, o faltar a diferencias de protocolo (http vs https). Si ve errores de CORS, verifique que sus orígenes permitidos coincidan exactamente con el origen de la página que solicita (incluyendo protocolo, dominio y puerto), asegúrese de que su servidor esté enviando realmente los encabezados CORS en sus respuestas (no solo en la configuración), y asegúrese de que las solicitudes de preflight se manejen correctamente. Nuestro generador produce configuraciones para entornos de servidor comunes, pero es posible que deba adaptarlas para su configuración específica del servidor."
      ,
      q5: "¿Cuáles son los riesgos de seguridad de políticas CORS muy permisivas?",
      a5: "<b>Políticas CORS muy permisivas pueden introducir vulnerabilidades de seguridad graves</b> al debilitar la protección que proporciona la política de mismo origen contra ataques cruzados. El riesgo más significativo proviene de configurar Access-Control-Allow-Origin: * combinado con Access-Control-Allow-Credentials: true (aunque los navegadores prohíben esta combinación específica, las configuraciones mal hechas de proxies podrían no). Incluso sin credenciales, políticas CORS demasiado abiertas pueden exponer APIs y datos sensibles a sitios no autorizados. Por ejemplo, si una API de administración interna permite cualquier origen, sitios maliciosos podrían hacer solicitudes a ella y posiblemente acceder a datos sensibles o operaciones. Otro riesgo común es la validación de origen inadecuada—como coincidencia de cadena simple que aprueba cualquier origen que contenga un dominio confiable (permitiendo attacker.com/evil.yourcompany.com en lugar de solo yourcompany.com). Además, configuraciones mal configuradas de CORS pueden permitir ataques de falsificación de solicitud entre sitios si la política permite orígenes no confiables para hacer solicitudes que cambien el estado. Para mitigar estos riesgos, siga el principio de privilegio mínimo permitiendo solo los orígenes, métodos y encabezados que su aplicación realmente necesita. Para APIs internas, nunca use orígenes comodín. Audite periódicamente sus configuraciones CORS como parte de revisiones de seguridad, y considere implementar mecanismos de autenticación adicionales más allá de CORS para operaciones sensibles. Nuestro generador crea configuraciones que fomentan estas buenas prácticas de seguridad mientras aún permiten la funcionalidad cruzada necesaria."
    },
    relatedTools: {
      title: "Explore Herramientas Complementarias para el Desarrollo Web",
      description: "Mejore su flujo de trabajo de desarrollo web con estas herramientas complementarias:",
      tool1: {
        name: "Formateador y Validador JSON",
        url: "https://www.ufreetools.com/tool/json-formatter",
        description: "Formatee, valide y embellezca datos JSON para sus respuestas y solicitudes de API."
      },
      tool2: {
        name: "Referencia de Códigos de Estado HTTP",
        url: "https://www.ufreetools.com/tool/http-status-code-lookup",
        description: "Guía completa sobre códigos de estado HTTP para un manejo adecuado de respuestas de API."
      },
      tool3: {
        name: "Depurador JWT",
        url: "https://www.ufreetools.com/tool/jwt-debugger",
        description: "Analice, verifique y depure tokens JWT en línea."
      },
      tool4: {
        name: "Codificador/Decodificador de URL",
        url: "https://www.ufreetools.com/tool/url-encode-decode",
        description: "Codifique o decodifique componentes de URL para"
      }
    },
    resources: {
      title: "Recursos Autoritativos sobre CORS y Seguridad Web",
      resource1: {
        name: "MDN Web Docs: Cross-Origin Resource Sharing (CORS)",
        url: "https://developer.mozilla.org/es/docs/Web/HTTP/CORS",
        description: "Guía completa de Mozilla sobre entender e implementar CORS con explicaciones detalladas de todos los encabezados y comportamientos de los navegadores."
      },
      resource2: {
        name: "Especificación CORS de W3C",
        url: "https://www.w3.org/TR/cors/",
        description: "La especificación oficial de W3C que define el estándar de Cross-Origin Resource Sharing implementado por los navegadores."
      },
      resource3: {
        name: "Confusión de CORS | Cheatsheet de Seguridad de Aplicaciones",
        url: "https://0xn3va.gitbook.io/cheat-sheets/web-application/cors-misconfiguration",
        description: "El compartimiento de recursos entre orígenes (CORS) es un mecanismo del navegador que permite un acceso controlado a recursos ubicados fuera de un dominio dado. Extiende y agrega flexibilidad a la política de mismo origen (SOP)."
      }
    }
  }
}