export default {
  title: "Detector de Proxy HTTP - Identifique y Analice Proxies de Red",
  intro: {
    title: "¿Qué es la Detección de Proxy HTTP?",
    p1: "<b>La detección de proxy HTTP</b> es el proceso de identificar si su conexión a internet pasa por uno o más servidores intermediarios conocidos como proxies. Nuestra herramienta de detección de proxy HTTP analiza sus solicitudes de red para identificar firmas de proxy examinando encabezados HTTP como X-Forwarded-For, Via y otros indicadores que revelan la presencia de proxies en su ruta de conexión.",
    p2: "Los proxies son servidores intermediarios que se sitúan entre su dispositivo y los sitios web que visita. Pueden utilizarse para diversos fines legítimos tales como mejorar el rendimiento mediante caché, implementar controles de acceso o proporcionar anonimato. Sin embargo, los proxies también pueden suponer riesgos de seguridad cuando se utilizan sin su conocimiento o consentimiento. Nuestra <b>herramienta de detección de proxy</b> le ayuda a identificar proxies ocultos en su red, permitiéndole tener mayor conciencia sobre seguridad y facilitar la solución de problemas.",
    p3: "Cuando se conecta a través de un <b>servidor proxy HTTP</b>, cierta información sobre su actividad de navegación puede ser visible para el operador del proxy. Esta herramienta online de detección de proxy le brinda el conocimiento de si su conexión es directa o pasa por uno o más niveles de proxy, dándole mayor control sobre su privacidad y seguridad en línea."
  },
  useCases: {
    title: "Aplicaciones Prácticas de la Detección de Proxy",
    case1: "<b>Solución de Problemas de Red</b>: Al experimentar problemas de conectividad, detectar proxies puede ayudar a identificar si un servidor intermediario está causando problemas. Los profesionales de TI suelen necesitar verificar configuraciones de proxy para diagnosticar problemas de red.",
    case2: "<b>Verificación de Seguridad</b>: Asegúrese de que su navegación privada no esté pasando a través de servidores proxy no autorizados que podrían estar monitoreando o modificando su tráfico. Las organizaciones pueden utilizar la detección de proxy para verificar que las políticas de seguridad corporativas se implementen correctamente.",
    case3: "<b>Desarrolladores Web</b>: Los desarrolladores web necesitan entender cómo se entrega su contenido a los usuarios, especialmente cuando utilizan redes de entrega de contenido (CDNs) o balanceadores de carga que funcionan como proxies. Probar el manejo adecuado de encabezados es esencial para la seguridad y el análisis estadístico.",
    case4: "<b>Verificación de Restricciones Geográficas</b>: Verifique si su servicio de VPN o proxy está enmascarando correctamente su ubicación para acceder a contenido restringido por región. Nuestra herramienta ayuda a verificar si las medidas de bypass geográfico están funcionando correctamente.",
    case5: "<b>Verificaciones en Entornos Corporativos</b>: Para empleados que trabajan en entornos corporativos, verifique la presencia y configuración de proxies empresariales que puedan afectar su acceso a internet o funcionalidad de aplicaciones. Esto es particularmente importante al solucionar problemas de conectividad de aplicaciones."
  },
  tutorial: {
    title: "Cómo Detectar Proxies HTTP en Su Conexión",
    intro: "Siga esta guía paso a paso para usar eficazmente nuestra herramienta de detección de proxy HTTP y comprender su configuración de red:",
    step1: {
      title: "Paso 1: Inicie el Proceso de Detección",
      description: "Comience haciendo clic en el botón <b>\"Iniciar Detección\"</b> en la interfaz de la herramienta. El detector comenzará inmediatamente a analizar su conexión realizando solicitudes a puntos finales API especializados. Por defecto, la herramienta selecciona automáticamente el método de detección más confiable, pero puede elegir entre diferentes APIs usando el selector desplegable para pruebas más exhaustivas."
    },
    step2: {
      title: "Paso 2: Revise los Resultados Resumidos",
      description: "Una vez completada la detección, la pestaña <b>\"Resumen del Proxy\"</b> mostrará si se detectaron proxies en su conexión. Busque la marca de verificación verde que indica una conexión directa o el icono de advertencia amarillo que muestra que se encontraron proxies. El resumen también mostrará su dirección IP detectada y la información de ubicación, lo cual puede ayudar a verificar si su ubicación real está siendo enmascarada."
    },
    step3: {
      title: "Paso 3: Examine los Encabezados del Proxy en Detalle",
      description: "Haga clic en la pestaña <b>\"Encabezados de Solicitud Completos\"</b> para ver todos los encabezados HTTP de su solicitud. Preste especial atención a encabezados como X-Forwarded-For, Via y Forwarded, que indican el uso de proxy. El encabezado X-Forwarded-For es particularmente importante ya que contiene una cadena de direcciones IP que muestra la ruta que siguió su solicitud a través de varios proxies. Puede copiar todos los encabezados al portapapeles utilizando el botón en la parte inferior de esta sección para análisis posterior."
    },
    step4: {
      title: "Paso 4: Comprenda la Información del Proxy",
      description: "Para una comprensión más profunda de lo que significan los encabezados detectados, visite la pestaña <b>\"Explicación de Información del Proxy\"</b>. Esta sección explica el propósito de diferentes encabezados relacionados con proxy y cómo afectan la seguridad de su conexión. Utilice este conocimiento para determinar si los proxies detectados son esperados (como su proxy de red corporativa) o posiblemente intermediarios no deseados."
    }
  },
  techniques: {
    title: "Comprensión de Técnicas de Detección de Proxy HTTP",
    intro: "Nuestra herramienta emplea múltiples métodos para detectar con precisión proxies en su conexión de red. Aquí hay una descripción general de las técnicas clave utilizadas:",
    method1: {
      title: "Análisis de Encabezados",
      description: "El método de detección más común examina encabezados HTTP como X-Forwarded-For, Via y Forwarded que típicamente agregan los servidores proxy. Estos encabezados a menudo contienen información sobre la dirección IP original del cliente y la cadena de proxy."
    },
    method2: {
      title: "Comparación de IPs",
      description: "Nuestra herramienta compara la dirección IP vista por el servidor con la dirección IP esperada del cliente. Discrepancias entre estas direcciones IP suelen indicar la presencia de un proxy. Este método es particularmente efectivo para detectar proxies transparentes."
    },
    method3: {
      title: "Análisis de Tiempos",
      description: "Al analizar los tiempos de respuesta, a veces podemos detectar proxies ya que típicamente añaden latencia a las solicitudes de red. Los proxies de caché pueden mostrar patrones de tiempo inconsistentes dependiendo de si el contenido está en caché."
    },
    method4: {
      title: "Detección del Lado del Servidor",
      description: "Nuestras APIs realizan verificaciones del lado del servidor que pueden identificar ciertos tipos de proxies basándose en escaneo de puertos, bases de datos de IPs de proxy conocidas y patrones de comportamiento en la solicitud HTTP."
    }
  },
  faq: {
    title: "Preguntas Frecuentes sobre Detección de Proxy HTTP",
    q1: "¿Por qué debería verificar si mi conexión utiliza un proxy?",
    a1: "Verificar proxies es importante por varias razones: <b>conciencia de seguridad</b> (saber si su tráfico está siendo monitoreado), <b>preocupaciones de privacidad</b> (entender quién podría tener acceso a sus datos de navegación), <b>solución de problemas de red</b> (identificar si proxies están causando problemas de conexión) y <b>verificación de funcionamiento de VPN</b> (asegurarse de que sus herramientas de privacidad funcionan correctamente). La detección regular de proxies ayuda a mantener la conciencia sobre el estado de seguridad de su red.",
    q2: "¿Puede la herramienta de detección de proxy HTTP identificar todos los tipos de proxies?",
    a2: "Aunque nuestra herramienta de detección de proxy HTTP es muy eficaz al identificar proxies convencionales mediante análisis de encabezados, algunos tipos avanzados de proxy pueden ser difíciles de detectar. <b>Los proxies transparentes</b> que no modifican encabezados a veces pueden identificarse a través de discrepancias de IP. <b>Los proxies anónimos</b> diseñados para ocultar su presencia pueden detectarse mediante análisis de tiempo o técnicas del lado del servidor. Sin embargo, <b>los proxies de alta anonimidad</b> específicamente diseñados para evitar la detección podrían no ser identificados por herramientas del lado del cliente. Para una detección más exhaustiva, recomendamos utilizar múltiples opciones de API en nuestra herramienta.",
    q3: "¿Es ilegal o perjudicial para mi computadora utilizar un proxy?",
    a3: "Utilizar proxies generalmente es legal en la mayoría de los países y no es perjudicial para su computadora. Los proxies sirven muchos propósitos legítimos, incluyendo <b>mejorar el rendimiento de internet</b> mediante caché, <b>mejorar la privacidad</b> al enmascarar su dirección IP, <b>acceder a contenido restringido geográficamente</b> y <b>implementar políticas de seguridad</b> en entornos corporativos. Sin embargo, la legalidad depende de cómo se utilice el proxy—actividades como burlar restricciones de derechos de autor o violar términos de servicio mediante proxies pueden ser problemáticas. Siempre asegúrese de utilizar proxies cumpliendo con las leyes locales y términos de servicio.",
    q4: "¿Cuál es la diferencia entre un proxy y una VPN?",
    a4: "Aunque ambos, proxies y VPNs, enrutan su tráfico a través de servidores intermedios, difieren significativamente en varios aspectos: <b>Las VPNs cifran todo el tráfico</b> entre su dispositivo y el servidor VPN, mientras que la mayoría de los proxies no ofrecen cifrado. Las VPNs típicamente enrutan <b>todo el tráfico de internet</b> desde su dispositivo a través de sus servidores, mientras que los proxies a menudo solo manejan tráfico desde aplicaciones o protocolos específicos. Las VPNs generalmente proporcionan <b>mejores características de protección de privacidad</b> comparadas con proxies estándar. Nuestra herramienta de detección puede identificar su conexión VPN como un proxy, ya que ambas tecnologías modifican su ruta de conexión.",
    q5: "¿Por qué mi empresa utiliza un servidor proxy y debería preocuparme?",
    a5: "Las empresas implementan servidores proxy por varias razones legítimas: <b>filtro de contenido</b> (restringir acceso a ciertos sitios web), <b>optimización de ancho de banda</b> (almacenar en caché contenido frecuentemente accedido), <b>mejora de seguridad</b> (escanear malware o vulnerabilidades), <b>monitoreo de actividad de empleados</b> (asegurar cumplimiento con políticas de uso aceptable) y <b>proporcionar acceso remoto</b> a recursos internos. Aunque los proxies corporativos generalmente no son una preocupación de privacidad, es importante recordar que sus actividades en línea en redes corporativas pueden estar siendo monitoreadas. Si nuestra herramienta de detección identifica un proxy corporativo, esto es típicamente normal para entornos empresariales.",
    q6: "¿Cómo se relacionan las Redes de Distribución de Contenido (CDNs) con los proxies?",
    a6: "Las Redes de Distribución de Contenido (CDNs) funcionan de manera similar a <b>proxies inversos</b> y pueden ser detectadas por nuestra herramienta. Las CDNs distribuyen contenido de sitios web a través de redes globales de servidores para mejorar velocidades de carga y fiabilidad. Cuando accede a un sitio web que utiliza una CDN, su solicitud típicamente se enruta hacia el servidor CDN más cercano en lugar del servidor original. Esto aparece como un proxy en su conexión porque el servidor CDN actúa como intermediario. A diferencia de proxies tradicionales que podrían ser preocupantes desde una perspectiva de privacidad, las CDNs son implementadas por dueños de sitios web para mejorar experiencia del usuario y son una parte normal de infraestructura web moderna."
  },
  relatedTools: {
    title: "Herramientas Relacionadas de Análisis de Red",
    description: "Explore estas herramientas adicionales para obtener aún más información sobre su configuración y seguridad de red:",
    tool1: {
      name: "Verificador de Seguridad de Encabezados HTTP",
      url: "https://www.ufreetools.com/tool/http-header-security-checker",
      description: "Analiza los encabezados de respuesta HTTP de un sitio web, detecta CSP, HSTS y proporciona sugerencias de mejora"
    },
    tool2: {
      name: "Editor de Encabezados de Solicitud",
      url: "https://www.ufreetools.com/tool/request-header-editor",
      description: "Crear, editar y probar encabezados de solicitud HTTP"
    },
    tool3: {
      name: "Búsqueda de Códigos de Estado HTTP",
      url: "https://www.ufreetools.com/tool/http-status-code-lookup",
      description: "Buscar y comprender códigos y mensajes de estado de respuesta HTTP"
    },
    tool4: {
      name: "Analizador de Parámetros de URL",
      url: "https://www.ufreetools.com/tool/url-params-parser",
      description: "Analizar, manipular y comprender parámetros y cadenas de consulta de URL"
    }
  },
  resources: {
    title: "Obtenga Más Información Sobre Proxies y Seguridad de Red",
    resource1: {
      name: "Guía de Pruebas OWASP",
      url: "https://owasp.org/www-project-web-security-testing-guide/assets/archive/OWASP_Testing_Guide_v4.pdf",
      description: "El Open Web Application Security Project (OWASP) es una comunidad mundial gratuita y abierta enfocada en mejorar la seguridad del software de aplicaciones."
    },
    resource2: {
      name: "Encabezados HTTP - Documentación Web MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
      description: "Documentación detallada de Mozilla Developer Network sobre encabezados HTTP, incluyendo aquellos relacionados con proxies y reenvío."
    },
    resource3: {
      name: "Internet Engineering Task Force (IETF) - Encabezado Forwarded HTTP",
      url: "https://tools.ietf.org/html/rfc7239",
      description: "El documento RFC 7239 oficial que define el encabezado HTTP Forwarded, que estandariza la información agregada por proxies."
    }
  }
}
