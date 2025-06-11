export default {
  name: 'Visor de EXIF de Imágenes',
  description: 'Ver y analizar metadatos EXIF en fotos',
  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastre la imagen aquí o haga clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 15MB',
    supportedFormats: 'Formatos admitidos: JPG, TIFF, HEIC, PNG',
    anyImageFile: 'Cualquier archivo de imagen que contenga datos EXIF'
  },
  display: {
    title: 'Información de la Imagen',
    noExif: 'No se encontraron datos EXIF en esta imagen',
    basicInfo: 'Información Básica',
    camera: 'Información de la Cámara',
    exposure: 'Información de Exposición',
    location: 'Información de Ubicación',
    dates: 'Información de Fechas',
    advanced: 'Datos EXIF Avanzados',
    thumbnail: 'Miniatura EXIF'
  },
  exif: {
    fileName: 'Nombre del Archivo',
    fileSize: 'Tamaño del Archivo',
    fileType: 'Tipo de Archivo',
    dimensions: 'Dimensiones',
    make: 'Marca de la Cámara',
    model: 'Modelo de la Cámara',
    lens: 'Lente',
    focalLength: 'Longitud Focal',
    focalLength35: 'Longitud Focal (35mm)',
    aperture: 'Apertura',
    fNumber: 'Valor F',
    exposureTime: 'Tiempo de Exposición',
    shutterSpeed: 'Velocidad de Obturación',
    iso: 'ISO',
    exposureMode: 'Modo de Exposición',
    exposureProgram: 'Programa de Exposición',
    meteringMode: 'Modo de Medición',
    flash: 'Flash',
    flashMode: 'Modo Flash',
    whiteBalance: 'Balance de Blancos',
    exposureBias: 'Compensación de Exposición',
    latitude: 'Latitud',
    longitude: 'Longitud',
    altitude: 'Altitud',
    locationName: 'Nombre de la Ubicación',
    dateOriginal: 'Fecha de Toma',
    dateDigitized: 'Fecha de Digitalización',
    dateModified: 'Fecha de Modificación',
    software: 'Software',
    artist: 'Artista',
    copyright: 'Derechos de Autor',
    resolution: 'Resolución',
    colorSpace: 'Espacio de Color',
    orientation: 'Orientación',
    compression: 'Compresión',
    bitsPerSample: 'Bits por Muestra',
    maxAperture: 'Apertura Máxima',
    contrast: 'Contraste',
    saturation: 'Saturación',
    sharpness: 'Nitidez',
    brightness: 'Brillo',
    sceneCaptureType: 'Tipo de Captura de Escena',
    gainControl: 'Control de Ganancia',
    serialNumber: 'Número de Serie',
    width: 'Ancho',
    height: 'Alto'
  },
  map: {
    title: 'Ubicación de la Foto',
    show: 'Mostrar en el Mapa',
    noLocation: 'No hay datos de ubicación disponibles',
    directions: 'Obtener Direcciones',
    copy: 'Copiar Coordenadas',
    warning: 'Advertencia: Esta imagen contiene datos de ubicación. Tenga cuidado al compartir.'
  },
  actions: {
    showAll: 'Mostrar Todos los Metadatos',
    hideAll: 'Ocultar Todos los Metadatos',
    copyAll: 'Copiar Todos los Metadatos',
    save: 'Guardar Metadatos como JSON',
    removeMeta: 'Eliminar Metadatos',
    download: 'Descargar Imagen Sin Metadatos',
    viewFullSize: 'Ver Tamaño Original',
    refresh: 'Recargar Datos'
  },
  settings: {
    title: 'Ajustes de Visualización',
    showGroups: 'Agrupar Metadatos',
    showRaw: 'Mostrar Valores Crudos',
    showTechnical: 'Mostrar Datos Técnicos',
    showFiltered: 'Ocultar Campos Vacíos',
    darkMode: 'Modo Oscuro',
    mapProvider: 'Proveedor de Mapas'
  },
  tips: {
    privacy: 'Consejo de Privacidad: Las fotos pueden contener datos personales como ubicación e información del dispositivo.',
    noExif: '¿No ves los datos EXIF? Algunas plataformas sociales y herramientas de edición de imágenes eliminan los metadatos.',
    rawView: 'Cambie a "Vista Cruda" para ver todos los metadatos disponibles.'
  },
  messages: {
    copied: 'Metadatos copiados al portapapeles',
    saved: 'Metadatos guardados como archivo JSON',
    noExif: 'No se encontraron datos EXIF en esta imagen',
    metadataRemoved: 'Eliminación de metadatos exitosa',
    imageLoaded: 'Imagen cargada exitosamente',
    notUse: 'No Usado',
    use: 'Usado',
    auto: 'Automático',
    manual: 'Manual',
    reset: 'Restablecido Exitosamente',
    exifExtracted: 'Datos EXIF extraídos correctamente'
  },
  error: {
    copyFailed: 'Fallo al copiar',
    exportFailed: 'Exportación fallida',
    exifExtractionFailed: 'Fallo al extraer los datos EXIF',
    imageLoadFailed: 'Fallo al cargar la imagen'
  },
  orientation: {
    normal: 'Normal',
    horizontalFlip: 'Volteo Horizontal',
    rotate180: 'Rotar 180°',
    verticalFlip: 'Volteo Vertical',
    rotate90VerticalFlip: 'Rotar 90° y Volteo Vertical',
    rotate90: 'Rotar 90° a la Derecha',
    rotate90HorizontalFlip: 'Rotar 90° a la Derecha y Volteo Horizontal',
    rotate270: 'Rotar 90° a la Izquierda'
  },
  article: {
    title: "Guía Completa sobre Visor de Datos EXIF - Extraiga Metadatos Ocultos de Fotos",
    intro: {
      title: "¿Qué es el dato EXIF y por qué necesita un visor EXIF?",
      p1: "<b>EXIF (Exchangeable Image File Format)</b> representa la información oculta incrustada dentro de las fotos digitales que revela detalles extensos sobre cómo, cuándo y dónde se tomaron las imágenes. Nuestro Visor de EXIF proporciona una solución completa para extraer y analizar estos metadatos, ofreciendo a fotógrafos, especialistas en forense digital y usuarios conscientes de la privacidad una herramienta poderosa para descubrir información que permanece invisible al ojo humano.",
      p2: "En el mundo digital actual, <b>la extracción de metadatos de fotos</b> se ha vuelto cada vez más valiosa tanto para fines profesionales como personales. Ya sea que sea un fotógrafo que busca verificar configuraciones técnicas para mejorar su trabajo, un investigador digital examinando la autenticidad de una imagen o simplemente alguien curioso por saber qué información podrían revelar sus fotos compartidas, nuestra herramienta EXIF le brinda acceso instantáneo a estos metadatos críticos sin necesidad de instalar software especializado.",
      p3: "El <b>analizador en línea de datos EXIF</b> que hemos desarrollado permite a los usuarios revelar inmediatamente modelos de cámara, ajustes de exposición, coordenadas GPS, fechas de creación y docenas de otros campos de metadatos asociados con las imágenes digitales. Esta solución basada en navegador funciona en todas las plataformas y dispositivos, respetando su privacidad al procesar las imágenes localmente sin subirlas a servidores externos, asegurando que la información sensible de sus fotos permanezca bajo su control completo."
    },
    useCases: {
      title: "Aplicaciones Prácticas del Análisis de EXIF",
      case1: "<b>Desarrollo de Habilidades Fotográficas</b>: Fotógrafos profesionales y aficionados usan los datos EXIF para estudiar imágenes exitosas y replicar condiciones técnicas. Al examinar la apertura exacta, velocidad de obturación, ISO y ajustes del lente de fotos destacadas, los fotógrafos pueden entender las decisiones técnicas detrás de ciertos efectos visuales y aplicar estas ideas para mejorar su propio trabajo.",
      case2: "<b>Forense Digital y Autenticación</b>: Investigadores y profesionales de ciberseguridad analizan los datos EXIF para verificar la autenticidad y origen de las imágenes. Los sellos temporales integrados, detalles del dispositivo y software utilizado ayudan a determinar si una imagen ha sido manipulada, estableciendo evidencia crucial para procedimientos legales o verificando la legitimidad de contenido digital en una era de desinformación.",
      case3: "<b>Organización de Fotos Basada en Ubicación</b>: Fotógrafos de viajes documentan sus colecciones geográficamente mediante las coordenadas GPS contenidas en los datos EXIF. Estos datos de ubicación permiten el mapeo automático de rutas fotográficas, creación de álbumes basados en ubicación y búsqueda sencilla de imágenes de destinos específicos incluso años después de haber sido tomadas.",
      case4: "<b>Auditoría de Privacidad y Seguridad</b>: Usuarios preocupados por la seguridad revisan los datos EXIF antes de compartir imágenes en línea para evitar revelar información sensible. Al revisar y opcionalmente eliminar datos de ubicación, identificadores de dispositivos y marcas temporales, las personas pueden protegerse contra riesgos de privacidad, acoso potencial o revelar patrones que puedan comprometer su seguridad física o digital.",
      case5: "<b>Solución de Problemas Técnicos</b>: Técnicos y profesionales de soporte revisan los datos EXIF para diagnosticar problemas del equipo y verificar su funcionamiento correcto. La información técnica completa almacenada en EXIF ayuda a identificar posibles problemas con los ajustes de la cámara, comunicación del lente o procesamiento de software que pueda afectar la calidad de la imagen o el rendimiento de la cámara."
    },
    tutorial: {
      title: "Cómo Usar Nuestra Herramienta Visor de EXIF",
      intro: "Nuestra herramienta extractor de datos EXIF está diseñada para ser intuitiva y poderosa, permitiéndole analizar rápidamente los metadatos ocultos de cualquier imagen digital. Siga estos pasos simples para comenzar:",
      step1: {
        title: "Paso 1: Suba su Imagen",
        description: "Comience haciendo clic en el botón <b>\"Subir Imagen\"</b> en la parte superior de la interfaz de la herramienta. Puede seleccionar cualquier archivo de imagen desde su dispositivo que contenga datos EXIF (generalmente archivos JPG, TIFF, HEIC o RAW). Alternativamente, puede arrastrar y soltar directamente la imagen en el área designada. La herramienta procesa su imagen localmente en su navegador, por lo tanto, ningún dato se carga en nuestros servidores, manteniendo su privacidad y seguridad."
      },
      step2: {
        title: "Paso 2: Ver Información EXIF Básica",
        description: "Una vez cargada la imagen, la herramienta mostrará inmediatamente la información EXIF básica organizada por categorías. Verá <b>información de la cámara</b> (marca, modelo, lente), <b>detalles de exposición</b> (abertura, velocidad de obturación, ISO), <b>propiedades de la imagen</b> (dimensiones, resolución) y fechas de creación. Esta descripción general proporciona los metadatos más comúnmente necesarios de un vistazo, ayudándole a evaluar rápidamente los aspectos técnicos de su imagen."
      },
      step3: {
        title: "Paso 3: Explorar Datos de Ubicación y GPS",
        description: "Si su imagen contiene información geolocalizada, la herramienta mostrará las coordenadas y ofrecerá un enlace para ver la ubicación exacta en un mapa. Esta función resulta especialmente útil para <b>fotos con geotags</b> cuando necesita recordar donde fue tomada una imagen específica. Sea consciente de las implicaciones de privacidad al compartir imágenes con datos de GPS intactos, ya que esto revela la ubicación precisa donde se tomó la foto, lo cual podría incluir información sensible como su dirección personal."
      },
      step4: {
        title: "Paso 4: Exportar o Eliminar Datos EXIF",
        description: "Tras revisar los metadatos, tiene la opción de <b>exportar todos los datos EXIF</b> como un archivo JSON para documentación o análisis posterior. Esta exportación crea un registro completo de todos los campos de metadatos disponibles. Si se preocupa por la privacidad, puede usar la función \"Copiar Todos los Metadatos\" para analizarlos más detalladamente o preparar su eliminación selectiva. Para fotógrafos que comparten su trabajo en línea, revisar y potencialmente eliminar datos EXIF sensibles antes de publicar ayuda a mantener límites adecuados de privacidad."
      }
    },
    exifDetails: {
      title: "Entendiendo las Principales Categorías de Datos EXIF",
      intro: "Los metadatos EXIF contienen gran cantidad de información organizada en varias categorías importantes. Entender estas categorías puede ayudarle a obtener el máximo valor de su análisis de imágenes:",
      camera: {
        title: "Información de la Cámara y Lentes",
        description: "<b>Los metadatos de la cámara</b> incluyen el fabricante del dispositivo, el modelo, la versión del firmware y en algunos casos el número de serie único. Los datos del lente especifican el lente exacto usado, distancia focal (incluyendo equivalente en 35mm para sensores recortados), apertura máxima y si estaba activa la estabilización de imagen. Esta información técnica es invaluable para fotógrafos que comparan el desempeño de equipos o que buscan resolver problemas de calidad entre distintos cuerpos y lentes de cámaras."
      },
      exposure: {
        title: "Parámetros de Exposición y Toma",
        description: "<b>Los metadatos de exposición</b> proporcionan un registro completo de los ajustes utilizados para capturar la imagen, incluyendo el valor de abertura (f-stop), velocidad de obturación, sensibilidad ISO, modo de exposición (manual, prioridad a abertura, etc.), modo de medición y compensación de exposición. La información adicional sobre disparo puede incluir ajustes de balance de blancos, uso del flash, modo de enfoque y parámetros de profundidad de campo. Estos detalles técnicos ayudan a los fotógrafos a recrear condiciones óptimas de disparo o analizar por qué ciertas imágenes destacan mientras otras no alcanzan el mismo resultado."
      },
      location: {
        title: "Coordenadas de Geolocalización",
        description: "<b>Los metadatos GPS</b> registran la ubicación precisa donde se capturó una imagen, incluyendo latitud, longitud y a veces altitud. Cámaras modernas y teléfonos inteligentes con GPS o servicios de localización incorporados registran automáticamente esta información a menos que dicha función haya sido desactivada. Los datos de ubicación habilitan capacidades organizativas poderosas como trazado automático en mapas y búsqueda basada en ubicación, pero también presentan consideraciones de privacidad al compartir imágenes que contengan ubicaciones identificables como casas o instalaciones sensibles."
      },
      time: {
        title: "Información Temporal",
        description: "<b>Los metadatos temporales</b> registran con precisión cuando se creó, digitalizó o modificó una imagen. La mayoría de las cámaras almacenan la fecha y hora originales de captura, mientras que el software de edición añade marcas adicionales cuando los archivos son procesados o exportados. Estos marcadores cronológicos son esenciales para organizar colecciones de fotos, crear cronologías precisas de eventos y establecer el origen de las imágenes para propósitos documentales o probatorios. A menudo, los investigadores usan estos datos para verificar la autenticidad de una imagen o identificar inconsistencias."
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre los Datos EXIF",
      q1: "¿Por qué no puedo ver ningún dato EXIF en mi imagen?",
      a1: "No todas las imágenes contienen datos EXIF por varias razones posibles. Primero, <b>formatos de archivo como PNG, GIF y algunas versiones de WebP típicamente no soportan metadatos EXIF</b>, así que si su imagen usa estos formatos, no contendrá información EXIF. Segundo, muchas plataformas de redes sociales y aplicaciones de mensajería eliminan automáticamente los datos EXIF durante la carga para proteger la privacidad y reducir tamaños de archivo. Si ha descargado una imagen desde redes sociales o recibido por aplicaciones de mensajería, probablemente los metadatos originales hayan sido eliminados. Tercero, algunas herramientas de edición de imágenes o software de optimización pueden deliberadamente quitar EXIF como parte de su procesamiento. Finalmente, si intenta analizar una captura de pantalla, estas generalmente no contienen datos EXIF tradicionales, ya que no son tomadas con una cámara. Para un análisis EXIF confiable, siempre utilice archivos de imagen originales y sin modificar provenientes directamente de su cámara o teléfono inteligente.",
      
      q2: "¿Son los datos EXIF lo mismo que los metadatos en todos los archivos de imagen?",
      a2: "<b>Los datos EXIF son un tipo específico de metadatos principalmente encontrados en formatos JPG y TIFF</b>, pero no es el único estándar de metadatos usado en imágenes digitales. Otros formatos comunes incluyen XMP (Extensible Metadata Platform), utilizado por productos Adobe y compatible con más tipos de archivos incluyendo PNG y PDF; IPTC (International Press Telecommunications Council), enfocado en descripciones, derechos de autor y permisos de uso; e ICC para perfiles de gestión de color. Aunque nuestra herramienta principal se enfoca en extraer datos EXIF, también puede detectar y mostrar algo de información XMP e IPTC cuando están presentes. Cada estándar de metadatos cumple funciones diferentes, siendo EXIF especialista en información técnica de la cámara, XMP gestor del historial de edición y ajustes creativos, e IPTC encargado de derechos de autor y descripciones de contenido. Para flujos de trabajo fotográficos profesionales, entender las diferencias entre estos tipos de metadatos ayuda a una mejor gestión y preservación de información importante.",
      
      q3: "¿Cómo elimino datos de ubicación sensible antes de compartir mis fotos?",
      a3: "<b>Eliminar coordenadas GPS de las imágenes</b> antes de compartirlas en línea es una práctica de privacidad importante, especialmente para fotos tomadas en lugares sensibles como su hogar o escuelas. Nuestra herramienta le permite identificar si existe datos de ubicación en sus imágenes, que es el primer paso crucial antes de eliminarlos. Para realizar esta eliminación, tiene varias opciones: 1) Use herramientas dedicadas de eliminación EXIF o editores que soporten limpieza de metadatos; 2) Muchas aplicaciones de edición fotográfica, incluyendo Adobe Lightroom y Photoshop, tienen opciones para eliminar selectivamente los metadatos durante la exportación; 3) En smartphones, puede deshabilitar la etiquetación de ubicación en la configuración de su aplicación de cámara para evitar registrar este tipo de datos desde el principio; 4) Algunas plataformas sociales eliminan automáticamente EXIF durante la carga, pero no debe depender de esto como método principal de protección. Como buena práctica, cree un flujo de trabajo consistente para revisar y limpiar metadatos sensibles antes de compartir cualquier foto, especialmente aquellas que pudieran revelar sus ubicaciones habituales o información privada.",
      
      q4: "¿Qué tan preciso es el sello temporal en los datos EXIF?",
      a4: "<b>La precisión del sello temporal en EXIF</b> depende completamente de si el reloj interno de la cámara estaba correctamente configurado cuando se tomó la foto. Cuando el reloj de la cámara está bien configurado, los datos temporales pueden ser precisos hasta el segundo y útiles para organización cronológica o verificación. No obstante, varios factores pueden afectar esta precisión: 1) Las cámaras no ajustan automáticamente cambios horarios como el horario de verano; 2) Al viajar entre zonas horarias, muchos olvidan actualizar la configuración de la cámara; 3) Los relojes de las cámaras pueden variar con el tiempo como cualquier reloj electrónico; 4) Quitar la batería o agotarla puede reiniciar el reloj a valores predeterminados de fábrica. Para verificaciones temporales cruciales, lo mejor es sincronizar periódicamente el reloj de su cámara con una fuente de tiempo precisa. Algunas cámaras avanzadas ahora soportan sincronización automática de tiempo mediante GPS o conexión con smartphones, lo cual mejora significativamente la confiabilidad del sello temporal.",
      
      q5: "¿Pueden los datos EXIF usarse para determinar si una foto ha sido editada?",
      a5: "<b>Los datos EXIF pueden ofrecer pistas sobre ediciones realizadas</b>, aunque no son un método infalible para detectar todo tipo de manipulación. El indicador más claro es la presencia de etiquetas que indiquen edición en aplicaciones como Photoshop o Lightroom. Algunos programas de edición también registran fechas de modificación distintas a la fecha original de captura. Sin embargo, EXIF tiene limitaciones como herramienta de autenticación: 1) Los metadatos mismos pueden alterarse con software especializado; 2) Ediciones básicas pueden no dejar rastro claro en los metadatos; 3) Muchas herramientas de edición preservan los datos EXIF originales de la cámara mientras añaden su propia información de procesamiento; 4) Es posible eliminar completamente los metadatos y reemplazarlos con otra información usando el software apropiado. Para necesidades de autenticación serias, como análisis forenses o verificación de imágenes periodísticas, se requieren técnicas adicionales aparte del EXIF, incluyendo análisis de artefactos de compresión, patrones de ruido y otros métodos forenses digitales. La verificación profesional frecuentemente requiere herramientas especializadas más allá de visores EXIF de nivel consumidor."
    },
    relatedTools: {
      title: "Explore Otras Herramientas Relacionadas con Fotografía e Imágenes",
      description: "Mejore su flujo de trabajo digital con estas herramientas complementarias:",
      tool1: {
        name: "Herramienta de Compresión de Imágenes",
        url: "https://www.ufreetools.com/tool/image-compressor",
        description: "Reduzca los tamaños de archivo de sus imágenes manteniendo la calidad para cargas más rápidas y fácil compartir."
      },
      tool2: {
        name: "Redimensionador Masivo de Imágenes",
        url: "https://www.ufreetools.com/tool/image-batch-resizer",
        description: "Redimensionar múltiples imágenes simultáneamente ahorrando tiempo y manteniendo dimensiones consistentes."
      },
      tool3: {
        name: "Agregar Marca de Agua a Imágenes",
        url: "https://www.ufreetools.com/tool/image-watermark",
        description: "Agregue marcas de agua de texto o imagen a sus fotos con configuraciones personalizables."
      },
      tool4: {
        name: "Pixelador de Imágenes",
        url: "https://www.ufreetools.com/tool/image-pixelator",
        description: "Crear arte pixelado o difuminar partes sensibles de imágenes para privacidad o efectos creativos."
      }
    },
    resources: {
      title: "Recursos Oficiales sobre EXIF",
      resource1: {
        name: "Wikipedia EXIF",
        url: "https://en.wikipedia.org/wiki/Exif",
        description: "Especificaciones técnicas oficiales y documentación estándar del formato EXIF."
      },
      resource2: {
        name: "Asociación de Productos de Cámara e Imagen (CIPA)",
        url: "https://www.cipa.jp/c/index.html",
        description: "Organismo responsable del desarrollo y mantenimiento del estándar EXIF."
      },
      resource3: {
        name: "Digital Photography Review - Comprender Metadatos",
        url: "https://www.dpreview.com/forums/thread/4175094",
        description: "Guías completas y discusiones sobre metadatos y sus implicaciones para fotógrafos."
      }
    }
  }
}