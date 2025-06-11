export default {
  name: 'Generador de Código QR',
  description: 'Genere códigos QR personalizables para URLs, texto y más',
  options: {
    content: 'Contenido del Código QR',
    contentType: 'Tipo de Contenido',
    errorCorrectionLevel: 'Nivel de Corrección de Errores',
    size: 'Tamaño',
    margin: 'Margen',
    foregroundColor: 'Color Principal',
    backgroundColor: 'Color de Fondo',
    logo: 'Agregar Logo',
    logoSize: 'Tamaño del Logo',
    cornerRadius: 'Radio de las Esquinas'
  },
  contentTypes: {
    url: 'URL',
    text: 'Texto Plano',
    email: 'Correo Electrónico',
    phone: 'Número de Teléfono',
    sms: 'SMS',
    wifi: 'Red WiFi',
    vcard: 'vCard',
    mecard: 'MeCard'
  },
  errorLevels: {
    L: 'Bajo (7%)',
    M: 'Medio (15%)',
    Q: 'Cuartil (25%)',
    H: 'Alto (30%)'
  },
  actions: {
    generate: 'Generar Código QR',
    download: 'Descargar',
    downloadSVG: 'Descargar SVG',
    downloadPNG: 'Descargar PNG',
    copy: 'Copiar Imagen',
    clear: 'Limpiar',
    uploadLogo: 'Subir Logo'
  },
  templates: {
    title: 'Plantillas Rápidas',
    confirmReplace: '¿Está seguro que desea reemplazar el contenido actual?',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    url: {
      name: 'URL de Sitio Web'
    },
    email: {
      name: 'Dirección de Correo'
    },
    phone: {
      name: 'Número de Teléfono'
    },
    sms: {
      name: 'SMS'
    },
    wifi: {
      name: 'Configuración Wi-Fi',
      example: {
        ssid: 'nombre-red',
        password: 'contraseña'
      }
    },
    geo: {
      name: 'Geolocalización'
    }
  },
  appearance: {
    title: 'Ajustes de Apariencia'
  },
  preview: {
    title: 'Vista Previa',
    generating: 'Generando...',
    clickGenerateButton: 'Haga clic en "Generar Código QR"',
    clickToDownload: 'Haga clic para descargar el código QR'
  },
  tips: {
    title: 'Consejos',
    saveToPrint: 'El código QR generado puede guardarse como imagen para imprimir o compartir.',
    errorCorrection: 'El nivel de corrección de errores indica la capacidad de lectura cuando el código QR está parcialmente dañado. El nivel L tiene la menor tolerancia, mientras que el nivel H tiene la mayor tolerancia pero hace que el código QR sea más complejo.'
  },
  wifi: {
    ssid: 'Nombre de la Red (SSID)',
    password: 'Contraseña',
    encryption: 'Encriptación',
    hidden: 'Red Oculta'
  },
  placeholders: {
    content: 'Ingrese texto, enlace u otro contenido...'
  },
  characters: 'caracteres',
  maxChars: 'Se recomienda no exceder los 300 caracteres',
  messages: {
    copied: '¡Copiado al portapapeles!',
    generated: 'Código QR generado exitosamente',
    contentRequired: 'Por favor ingrese contenido para el código QR',
    downloaded: 'Código QR descargado',
    confirmReplace: 'Haga clic en confirmar para reemplazar el contenido actual',
    contentUpdated: 'Contenido actualizado',
    changesCancelled: 'Cambios cancelados',
    invalidUrl: 'Por favor ingrese una URL válida',
    invalidEmail: 'Por favor ingrese un correo electrónico válido',
    invalidPhone: 'Por favor ingrese un número de teléfono válido',
    logoTooBig: 'El logo es demasiado grande, el tamaño máximo del archivo es 1MB'
  },
  errors: {
    canvasNotReady: 'El elemento Canvas no está listo',
    generationError: 'Error generando el código QR',
    generationErrorWithMessage: 'Error generando el código QR: {message}',
    downloadError: 'Error descargando el código QR: {message}'
  },
  article: {
    title: "Generador de Código QR: Cree y Personalice Códigos de Respuesta Rápida",
    features: {
      title: "Entendiendo los Códigos QR y Sus Aplicaciones",
      description: "Nuestro <strong>generador de código QR</strong> es una herramienta versátil en línea que crea códigos Quick Response (QR) personalizables para varios tipos de información. A diferencia de los códigos de barras tradicionales, los <strong>códigos QR</strong> pueden almacenar grandes cantidades de datos en un formato compacto y legible por máquina que se puede escanear rápidamente usando teléfonos inteligentes y escáneres dedicados.<br><br>Este avanzado <strong>generador de código QR</strong> admite múltiples tipos de contenido incluyendo URLs, texto plano, información de contacto, credenciales WiFi y coordenadas geográficas. Cada código generado es completamente personalizable con opciones para tamaño, colores, niveles de corrección de errores e incluso la posibilidad de añadir logotipos o modificar su apariencia manteniendo la capacidad de ser escaneado.<br><br>El <strong>creador de código QR</strong> produce códigos de alta resolución que se pueden descargar en formatos PNG o SVG, lo que los hace adecuados tanto para uso digital como para impresión física en materiales promocionales, empaques de productos o señales informativas.",
      useCases: {
        title: "Aplicaciones Prácticas para Códigos QR",
        items: [
          "<strong>Marketing Empresarial</strong>: Cree <strong>códigos QR personalizados</strong> para tarjetas de presentación, folletos y material promocional para conectar clientes potenciales con su sitio web, ofertas especiales o información de contacto. Las empresas pueden usar códigos QR estilizados que incorporen los colores corporativos y logotipos para fortalecer el reconocimiento de marca mientras proporcionan una forma conveniente para que los clientes accedan a contenido digital.",
          "<strong>Pagos Sin Contacto</strong>: Genere <strong>códigos QR para pagos</strong> que enlacen directamente a plataformas de pago o contengan información de billeteras criptográficas, permitiendo transacciones rápidas sin necesidad de terminales de venta costosas. Esto ha sido especialmente importante para pequeños negocios y vendedores ambulantes que desean aceptar pagos digitales fácilmente.",
          "<strong>MENÚS DE RESTAURANTES</strong>: Cree <strong>códigos QR escaneables</strong> para acceso a menús digitales sin tocar, permitiendo a los comensales ver ofertas en sus teléfonos sin tocar menús físicos. Los restaurantes pueden actualizar instantáneamente sus menús digitales sin tener que reimprimir, e incluso incluir fotos, descripciones detalladas o información nutricional que no cabría en un menú tradicional.",
          "<strong>Gestión de Eventos</strong>: Cree <strong>boletos con código QR</strong> y gafetes de registro para conferencias, conciertos o exposiciones que puedan escanearse rápidamente para verificar asistencia. Organizadores pueden seguir presencias en tiempo real, reducir falsificaciones y agilizar el proceso de registro minimizando contacto físico.",
          "<strong>Empaquetado de Productos</strong>: Incorpore <strong>etiquetas con código QR</strong> en productos que conduzcan a manuales de usuario, instrucciones de configuración, registros de garantía o verificación de autenticidad. Fabricantes pueden proveer información extensa sobre productos, videos tutoriales y recursos de soporte sin aumentar el tamaño del empaque ni los costos de impresión.",
          "<strong>Recursos Educativos</strong>: Cree <strong>códigos QR para educación</strong> que conecten a estudiantes con materiales complementarios, cuestionarios interactivos o demostraciones en video. Profesores pueden colocar estos códigos en hojas informativas o presentaciones, creando puentes entre entornos educativos físicos y digitales mientras rastrean el compromiso con recursos específicos."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes Sobre Códigos QR",
      items: [
        {
          question: "¿Cuál es la diferencia entre los distintos niveles de corrección de errores en los códigos QR?",
          answer: "Los niveles de corrección de errores en <strong>códigos QR</strong> determinan cuánto daño puede soportar el código y seguir siendo escaneable:<br><br>• <strong>Nivel L (Bajo)</strong>: Recupera hasta el 7% de daño, creando códigos más compactos ideales para entornos controlados<br>• <strong>Nivel M (Medio)</strong>: Soporta hasta el 15% de daño, ofreciendo buen equilibrio para aplicaciones estándar<br>• <strong>Nivel Q (Cuartil)</strong>: Resiste hasta el 25% de daño, recomendado para usos industriales o visualización exterior<br>• <strong>Nivel H (Alto)</strong>: Tolerancia hasta el 30% de daño, ideal para entornos difíciles o personalización con logotipos<br><br>Los niveles más altos crean patrones <strong>más complejos en el código QR</strong> con redundancia adicional, lo que lo hace ligeramente más grande pero significativamente más confiable en condiciones desfavorables o personalización con colores o logos."
        },
        {
          question: "¿Puedo agregar un logo a mi código QR sin afectar su funcionalidad?",
          answer: "Sí, puede agregar logotipos a sus <strong>códigos QR</strong> manteniendo su capacidad de escaneo siguiendo estas pautas:<br><br>1. Use un nivel de corrección de errores alto (preferiblemente H) cuando cree <strong>códigos QR personalizados con logotipos</strong><br>2. Mantenga el logo relativamente pequeño, idealmente cubriendo no más del 30% del área central<br>3. Asegure suficiente contraste entre el logo y los colores del código QR<br>4. Evite colocar el logo sobre los tres patrones de detección de posición (los cuadrados en las esquinas)<br><br>Nuestro <strong>generador de código QR</strong> ajusta automáticamente la densidad de datos del código cuando agrega un logo, asegurando que permanezca totalmente funcional. Después de agregar un logo, pruebe siempre su código QR con múltiples dispositivos para verificar que se escanea correctamente bajo varias condiciones."
        },
        {
          question: "¿Qué información puedo codificar en un código QR?",
          answer: "Los códigos QR pueden codificar varios tipos de información, haciéndolos extremadamente versátiles:<br><br>• <strong>URLs de sitios web</strong>: Dirigir escaneos a páginas específicas, landing pages o recursos online<br>• <strong>Texto plano</strong>: Almacenar mensajes, identificadores o cualquier información alfanumérica (hasta aproximadamente 4,000 caracteres)<br>• <strong>Información de contacto (vCard/meCard)</strong>: Compartir detalles completos de contacto que pueden guardarse directamente en contactos telefónicos<br>• <strong>Credenciales de red WiFi</strong>: Permitir conexión instantánea a redes WiFi sin escribir contraseñas<br>• <strong>Números de teléfono</strong>: Iniciar llamadas al escanear<br>• <strong>Mensajes SMS</strong>: Abrir mensajes predefinidos de texto<br>• <strong>Direcciones de correo electrónico</strong>: Iniciar nuevos correos electrónicos al destinatario especificado<br>• <strong>Ubicaciones geográficas</strong>: Abrir aplicaciones de mapas en coordenadas específicas<br><br>Nuestro <strong>generador de código QR</strong> ofrece plantillas especializadas para cada uno de estos tipos de contenido, formateando automáticamente los datos apropiadamente para asegurar compatibilidad con la mayoría de aplicaciones de escaneo."
        },
        {
          question: "¿De qué tamaño debería imprimir mis códigos QR para un escaneo óptimo?",
          answer: "El tamaño óptimo para imprimir <strong>códigos QR</strong> depende de la distancia de escaneo:<br><br>• <strong>Tamaño mínimo</strong>: 2 × 2 cm (0.8 × 0.8 pulgadas) para escaneo cercano<br>• <strong>Recomendación estándar</strong>: 3 × 3 cm (1.2 × 1.2 pulgadas) para casos de uso típicos<br>• <strong>Escaneo desde 1-2 metros</strong>: 10 × 10 cm (4 × 4 pulgadas) o más grande<br>• <strong>Billboards o escaneo a distancia</strong>: Al menos 30 × 30 cm (12 × 12 pulgadas)<br><br>Una regla general es que el <strong>código QR impreso</strong> debe medir al menos 1/10 de la distancia de escaneo. Además, incluya siempre una zona tranquila (margen vacío) alrededor del código midiendo al menos cuatro veces el ancho de un solo módulo (el cuadrado más pequeño en el código).<br><br>Nuestro <strong>generador de código QR</strong> produce archivos SVG de alta resolución que pueden escalarse a cualquier tamaño sin perder calidad, asegurando que sus códigos permanezcan claros y escaneables independientemente de las dimensiones impresas."
        },
        {
          question: "¿Cómo puedo rastrear los escaneos de mi código QR?",
          answer: "Para rastrear escaneos de sus <strong>códigos QR</strong> y recopilar análisis, puede:<br><br>1. Usar un <strong>acortador de URL con seguimiento</strong> (como Bit.ly, TinyURL o Rebrandly) como destino del código QR, lo cual proporciona métricas de escaneo<br>2. Dirigir el código QR a una página específica en su sitio web que monitoree tráfico mediante Google Analytics u otras herramientas<br>3. Emplear servicios especializados de <strong>códigos QR dinámicos</strong> que ofrezcan análisis integrados y permitan cambiar la URL de destino sin crear un nuevo código<br>4. Crear parámetros UTM únicos para cada código QR para diferenciar fuentes de tráfico en sus análisis<br><br>Aunque nuestro <strong>generador de código QR</strong> crea códigos estáticos, puede implementar fácilmente estas estrategias de seguimiento incluyendo las URLs correspondientes con seguimiento. Para aplicaciones empresariales que requieran análisis exhaustivos incluyendo datos de ubicación, información del dispositivo y horarios de escaneo, considere plataformas especializadas de marketing con código QR."
        }
      ]
    },
    guide: {
      title: "Cómo Crear un Código QR: Guía Paso a Paso",
      step1: "<strong>Elija su tipo de contenido</strong>: Empiece decidiendo qué información quiere codificar en su código QR. Seleccione opciones como dirección URL, texto plano, información de contacto o credenciales WiFi. Para mayor conveniencia, puede usar una de las plantillas proporcionadas por nuestro <strong>generador de código QR</strong>, que automáticamente formateará sus datos correctamente según el tipo de contenido.",
      step2: "<strong>Ingrese su información</strong>: Complete los campos necesarios en el campo de contenido. Para URLs, asegúrese de incluir la dirección completa comenzando con 'http://' o 'https://'. Para redes WiFi, proporcione el nombre de la red (SSID), contraseña y tipo de encriptación. Nuestro <strong>generador de código QR</strong> validará automáticamente su entrada para asegurar que pueda codificarse y escanearse posteriormente.",
      step3: "<strong>Personalice la apariencia</strong>: Personalice su código QR ajustando parámetros como tamaño, colores y nivel de corrección de errores. Puede elegir diferentes colores principales y de fondo que coincidan con su identidad corporativa, ajustar el radio de las esquinas para una apariencia más suave o incluso agregar un logo al centro del código. Nuestro <strong>creador de código QR</strong> automáticamente asegura que las personalizaciones mantengan la capacidad de escaneo ajustando el nivel de corrección de errores según sea necesario.",
      step4: "<strong>Genere y pruebe su código QR</strong>: Haga clic en el botón 'Generar Código QR' para crearlo basándose en la información proporcionada y las opciones de diseño seleccionadas. Una vez generado, pruebe su código QR escaneándolo con la cámara de su smartphone o una aplicación dedicada para verificar que muestra o realiza correctamente la acción deseada. Esta prueba es especialmente importante si ha personalizado la apariencia o agregado un logo.",
      step5: "<strong>Descargue e implemente su código QR</strong>: Tras verificar que su código QR funciona correctamente, descárguelo en su formato preferido (PNG para uso digital o SVG para impresión escalable). Luego puede incorporar la <strong>imagen del código QR</strong> en materiales promocionales, su sitio web, empaquetado de productos o donde necesite proporcionar acceso rápido a su información. Recuerde que el formato SVG es preferible para materiales impresos ya que mantiene la calidad a cualquier tamaño."
    },
    conclusion: "Los códigos QR han transformado cómo conectamos los mundos físico y digital, ofreciendo una forma sencilla de compartir información y generar engagement. Con su creciente adopción en múltiples industrias, crear códigos QR efectivos y escaneables se ha convertido en una habilidad esencial para mercadólogos, empresas, educadores e individuos. Nuestro generador de código QR simplifica este proceso, proporcionando herramientas para crear códigos personalizados que mantienen su funcionalidad mientras reflejan su identidad de marca. Ya sea que esté vinculando a contenido web avanzado, simplificando procesos de pago o mejorando materiales educativos, los códigos QR ofrecen una solución versátil que combina comodidad con eficiencia tecnológica. A medida que evoluciona la tecnología móvil, la importancia y aplicaciones de estos códigos bidimensionales solo aumentará, convirtiéndose en un activo cada vez más valioso en nuestro mundo interconectado."
  }
}