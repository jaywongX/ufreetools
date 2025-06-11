export default {
  name: 'Compresor de Imágenes',
  description: 'Comprimir y optimizar imágenes manteniendo su calidad',
  input: {
    dragDrop: 'Arrastre las imágenes aquí o haga clic para subirlas',
    supportedFormats: 'Admite formatos JPG, PNG, GIF, WEBP',
    selected: '{count} archivos seleccionados',
    changeFiles: 'Cambiar archivos',
    width: 'Ancho',
    height: 'Alto',
    keepOriginal: 'Establezca en 0 para mantener las dimensiones originales'
  },
  results: {
    originalImage: 'Imagen Original',
    compressedImage: 'Después de la Compresión',
    filename: 'Nombre del Archivo:',
    dimensions: 'Dimensiones:',
    fileSize: 'Tamaño del Archivo:',
    compressionRatio: 'Relación de Compresión:',
    viewOriginal: 'Ver Original'
  },
  about: {
    title: 'Acerca de la Compresión de Imágenes',
    description: 'Esta herramienta comprime imágenes utilizando la API Canvas del navegador. Todo el procesamiento ocurre en su dispositivo y ninguna imagen se carga al servidor.',
    principlesTitle: 'Principios de Compresión:',
    principles: {
      resize: 'Redimensionar Imágenes: Menores dimensiones significan menos datos de píxeles',
      quality: 'Reducir Calidad: Disminuir el parámetro de calidad reduce el tamaño del archivo',
      format: 'Convertir Formato: Diferentes formatos de imagen tienen distintas características de compresión'
    },
    useCasesTitle: 'Casos de Uso:',
    useCases: {
      web: 'Optimizar imágenes de sitios web para mejorar la velocidad de carga',
      email: 'Reducir tamaños de adjuntos de correo electrónico',
      social: 'Comprimir imágenes antes de subirlas a redes sociales',
      storage: 'Optimizar espacio de almacenamiento'
    }
  },
  options: {
    quality: 'Calidad',
    qualityValue: 'Calidad ({value}%)',
    lowQuality: 'Baja Calidad/Archivo Pequeño',
    highQuality: 'Alta Calidad/Archivo Grande',
    format: 'Formato de Salida',
    maxSize: 'Dimensiones Máximas ({width} × {height} px)',
    keepExif: 'Conservar Datos EXIF',
    resizeImage: 'Redimensionar Imagen',
    maxWidth: 'Ancho Máximo',
    maxHeight: 'Alto Máximo',
    compressionLevel: 'Nivel de Compresión',
    maxFileSize: 'Tamaño Objetivo del Archivo',
    optimizationLevel: 'Nivel de Optimización',
    convertTo: 'Convertir A'
  },
  presets: {
    web: 'Optimización Web',
    highQuality: 'Alta Calidad',
    balanced: 'Equilibrado',
    smallSize: 'Tamaño Pequeño',
    custom: 'Personalizado'
  },
  formats: {
    original: 'Formato Original',
    jpeg: 'JPEG',
    jpegDesc: 'El formato JPEG es adecuado para fotografías y no admite fondos transparentes',
    png: 'PNG',
    pngDesc: 'El formato PNG admite fondos transparentes y es ideal para iconos e ilustraciones',
    webp: 'WebP',
    webpDesc: 'El formato WebP ofrece altas tasas de compresión y es adecuado para uso web',
    avif: 'AVIF',
    gif: 'GIF',
    bmp: 'BMP'
  },
  resizeOptions: {
    noResize: 'Sin Redimensionamiento',
    maxDimension: 'Dimensiones Máximas',
    exactDimensions: 'Dimensiones Exactas',
    percentage: 'Escala Porcentual'
  },
  actions: {
    upload: 'Subir Imágenes',
    compress: 'Comprimir',
    processing: 'Procesando...',
    download: 'Descargar',
    downloadAll: 'Descargar Todas',
    batchDownload: 'Descarga por Lotes',
    clear: 'Limpiar',
    addMore: 'Agregar Más Imágenes',
    removeAll: 'Eliminar Todos',
    preview: 'Vista Previa',
    delete: 'Eliminar'
  },
  table: {
    filename: 'Nombre del Archivo',
    originalSize: 'Tamaño Original',
    original: 'Tamaño Original del Archivo',
    compressedSize: 'Tamaño Comprimido',
    compressed: 'Tamaño del Archivo Comprimido',
    savings: 'Ahorro',
    ratio: 'Relación de Compresión',
    quality: 'Calidad',
    dimensions: 'Dimensiones',
    originalDimensions: 'Dimensiones Originales',
    newDimensions: 'Nuevas Dimensiones',
    status: 'Estado'
  },
  messages: {
    dropped: '{count} imágenes cargadas',
    uploading: 'Subiendo imágenes...',
    compressing: 'Comprimiendo imágenes...',
    compressed: 'Imágenes comprimidas exitosamente',
    downloadPreparing: 'Preparando descarga...',
    downloadReady: 'Descarga lista',
    cleared: 'Todas las imágenes han sido eliminadas',
    tooManyFiles: 'Demasiados archivos. Máximo permitido: {max}',
    fileTooLarge: 'Archivo demasiado grande. Máximo permitido: {max}MB',
    unsupportedFormat: 'Formato no soportado: {format}',
    imageError: 'Ocurrió un error al procesar la imagen: {error}',
    batchDownloadNotSupported: 'La función de descarga por lotes requiere la biblioteca JSZip. Descargue las imágenes individualmente o agregue soporte a la biblioteca zip.',
    batchDownloadError: 'Ocurrió un error durante la descarga por lotes: {error}',
    invalidImage: 'Por favor seleccione un archivo de imagen válido'
  },
  article: {
    title: 'Compresor de Imágenes: Guía Definitiva para Optimizar y Reducir Tamaño de Imágenes Online',
    introduction: {
      title: '¿Qué es un Compresor de Imágenes?',
      p1: 'Nuestro <strong>compresor de imágenes</strong> es una herramienta poderosa diseñada para reducir el tamaño del archivo de sus imágenes manteniendo una calidad visual aceptable. Ya sea que necesite un <strong>compresor de imágenes a 50kb</strong>, <strong>compresor de imágenes a 20kb</strong>, o incluso un <strong>compresor de imágenes a 100kb</strong>, nuestra solución versátil puede manejar varios tamaños objetivo para satisfacer sus necesidades específicas.',
      p2: 'En el mundo digital, el tamaño de las imágenes importa significativamente. Las imágenes grandes ralentizan los sitios web, consumen mucho espacio de almacenamiento y generan fricción al compartirse. Nuestra herramienta <strong>compresor de imágenes online</strong> analiza inteligentemente sus imágenes y aplica algoritmos avanzados de compresión para eliminar datos innecesarios mientras preserva los detalles visuales más importantes. El resultado es un archivo significativamente más pequeño que se carga más rápido y utiliza menos ancho de banda.',
      p3: 'A diferencia de muchos <strong>compresores de archivos de imagen</strong> básicos que simplemente degradan la calidad de manera uniforme, nuestra herramienta emplea técnicas inteligentes de compresión que analizan el contenido de la imagen para determinar dónde se puede aplicar la compresión de forma más efectiva. Este enfoque asegura que los elementos visuales importantes conserven su claridad mientras que las áreas de fondo y las menos notables pueden comprimirse de manera más agresiva.'
    },
    applications: {
      title: 'Aplicaciones Prácticas',
      scenario1: {
        title: 'Optimización Web',
        content: 'La velocidad del sitio web impacta significativamente en la experiencia del usuario y en el posicionamiento en motores de búsqueda. Usando nuestro <strong>compresor de imágenes online</strong>, desarrolladores web pueden reducir el tamaño de las imágenes del sitio web, resultando en tiempos de carga más rápidos y mayor satisfacción del usuario. Por ejemplo, miniaturas de blogs comprimidas a aproximadamente 30KB usando nuestra opción <strong>compresor de imágenes a 30kb</strong> aún mantienen su atractivo visual mientras mejoran dramáticamente la velocidad de carga de la página. Los sitios de comercio electrónico se benefician particularmente de las capacidades de nuestro <strong>compresor de imágenes por lotes</strong>, lo cual permite optimizar eficientemente catálogos completos de productos.'
      },
      scenario2: {
        title: 'Adjuntos de Correo Electrónico',
        content: 'Los servidores de correo electrónico suelen tener límites estrictos en el tamaño de los archivos. Cuando necesita enviar imágenes por correo electrónico pero enfrenta restricciones de tamaño, nuestro <strong>compresor de imágenes</strong> puede reducir sus archivos a tamaños aceptables. Use la configuración <strong>compresor de imágenes a 500kb</strong> para asegurar que sus fotos siguen siendo detalladas suficientemente mientras caben dentro de los límites típicos de correo. Esto es especialmente útil para profesionales que comparten fotos de proyectos, agentes inmobiliarios que envían imágenes de propiedades o cualquier persona que necesite compartir contenido visual por correo sin encontrar errores de limitación de tamaño.'
      },
      scenario3: {
        title: 'Publicaciones en Redes Sociales',
        content: 'Diferentes plataformas sociales tienen diversos requisitos de tamaño de imagen. Nuestro <strong>compresor de tamaño de imagen</strong> ayuda a optimizar sus fotos específicamente para compartir en redes sociales. Al preparar imágenes para Instagram, use nuestra herramienta como <strong>compresor de imágenes a 200kb</strong> para lograr el equilibrio ideal entre calidad y tamaño. Muchos usuarios que necesitan soluciones consistentes encuentran nuestra herramienta comparable a soluciones especializadas como <strong>11zon compresor de imágenes</strong>, pero valoran la flexibilidad adicional de ajustar con precisión el tamaño objetivo.'
      },
      scenario4: {
        title: 'Envío de Documentos y Aplicaciones',
        content: 'Muchas aplicaciones en línea, portales gubernamentales y sistemas de presentación documental tienen límites estrictos en el tamaño de los archivos. Use nuestras funciones de <strong>compresor de imágenes JPG</strong> o <strong>compresor de imágenes JPEG</strong> para reducir documentos de identificación, imágenes escaneadas o materiales complementarios para cumplir con estos requisitos. Por ejemplo, solicitantes de empleo frecuentemente usan nuestra configuración <strong>compresor de imágenes a 50kb</strong> para preparar fotos de perfil para sistemas de aplicación, y estudiantes utilizan nuestro <strong>compresor de imágenes online a 20kb</strong> para diversas presentaciones en plataformas educativas.'
      },
      scenario5: {
        title: 'Desarrollo de Aplicaciones Móviles y Optimización de Almacenamiento',
        content: 'Los desarrolladores de aplicaciones móviles usan nuestro <strong>compresor de imágenes</strong> para reducir el tamaño de los activos de las aplicaciones, resultando en paquetes de instalación más pequeños y menores requisitos de almacenamiento. Del mismo modo, los usuarios comunes usan nuestra herramienta como <strong>compresor de imagen a JPEG</strong> para optimizar colecciones personales de fotos, liberando valioso espacio de almacenamiento en dispositivos. Las personas que administran grandes librerías de imágenes aprecian especialmente nuestras capacidades de <strong>compresor de imágenes por lotes</strong>, lo cual les permite procesar múltiples archivos simultáneamente con configuraciones de compresión consistentes.'
      }
    },
    guide: {
      title: 'Cómo Usar el Compresor de Imágenes',
      step1: {
        title: 'Paso 1: Subir Sus Imágenes',
        content: 'Empiece haciendo clic en el botón de carga o arrastrando y soltando sus imágenes en el área designada. Nuestro <strong>compresor de imágenes</strong> admite varios formatos incluyendo JPG, PNG y WebP. Puede cargar múltiples imágenes a la vez si necesita funcionalidad de <strong>compresor de imágenes por lotes</strong>.'
      },
      step2: {
        title: 'Paso 2: Seleccione el Nivel de Compresión o el Tamaño Objetivo',
        content: 'Tras cargarlas, elija su nivel deseado de compresión o especifique un tamaño objetivo. Si necesita un <strong>compresor de imágenes a 20kb</strong> o <strong>compresor de imágenes a 50kb</strong>, simplemente ingrese su tamaño objetivo. Alternativamente, puede usar el control deslizante de calidad para ajustar manualmente el nivel de compresión. Para usuarios avanzados familiarizados con otras herramientas como <strong>Caesium compresor de imágenes</strong>, nuestras opciones avanzadas ofrecen una precisión similar en la configuración de compresión.'
      },
      step3: {
        title: 'Paso 3: Vista Previa y Comparación',
        content: 'Antes de finalizar la compresión, puede previsualizar cómo se verán sus imágenes comprimidas y compararlas con las originales. Este paso asegura que nuestra herramienta <strong>compresor de imágenes online</strong> logre el equilibrio correcto entre reducción de tamaño y calidad visual. Preste especial atención a los detalles importantes en sus imágenes para asegurarse de que permanezcan claros tras la compresión.'
      },
      step4: {
        title: 'Paso 4: Aplicar Compresión',
        content: 'Una vez satisfecho con la vista previa, haga clic en el botón "Comprimir" para aplicar los ajustes de compresión. Nuestra herramienta <strong>compresor de archivos de imagen</strong> procesará sus imágenes usando algoritmos avanzados para reducir el tamaño preservando la calidad. Para procesamiento por lotes, la herramienta mostrará un indicador de progreso mostrando cuántas imágenes han sido comprimidas.'
      },
      step5: {
        title: 'Paso 5: Descargar Imágenes Comprimidas',
        content: 'Cuando termine la compresión, descargue sus imágenes optimizadas individualmente o como un archivo ZIP si ha usado la característica de <strong>compresor de imágenes por lotes</strong>. Nuestro <strong>compresor de imágenes en KB</strong> le muestra exactamente cuánto más pequeños son sus archivos, permitiéndole verificar que cumplan con sus requisitos de tamaño, ya sea que haya usado un <strong>compresor de imágenes a 100kb</strong>, <strong>compresor de imágenes a 500kb</strong>, u otro objetivo específico.'
      }
    },
    faq: {
      title: 'Preguntas Frecuentes',
      q1: '¿Cómo reduce el compresor de imágenes el tamaño del archivo manteniendo la calidad?',
      a1: 'Nuestro <strong>compresor de imágenes</strong> usa algoritmos avanzados de compresión que analizan el contenido de la imagen y reducen selectivamente los datos donde sean menos perceptibles. A diferencia de herramientas básicas, nuestro <strong>compresor de imágenes online</strong> emplea técnicas de compresión perceptual que consideran cómo funciona la visión humana. Las áreas con menos detalle perceptible se comprimen más agresivamente, mientras que los elementos visuales importantes retienen una calidad superior. También optimizamos paletas de color, metadatos y codificación eficiente para lograr resultados similares a herramientas especializadas como <strong>PI7 compresor de imágenes</strong> o <strong>Caesium compresor de imágenes</strong>.',
      q2: '¿Cuál es el límite de tamaño de archivo que puede manejar el compresor de imágenes?',
      a2: 'Nuestro <strong>compresor de imágenes</strong> puede manejar archivos de hasta 20MB en tamaño. Si necesita comprimir archivos más grandes, puede usar nuestra herramienta como <strong>compresor de imágenes por lotes</strong> para procesar múltiples archivos simultáneamente.',
      q3: '¿Qué formatos de imagen soporta el compresor de imágenes?',
      a3: 'Nuestro <strong>compresor de imágenes</strong> soporta varios formatos de imagen incluyendo JPG, PNG, GIF, WEBP y BMP. Puede usar nuestra herramienta como <strong>compresor de imágenes por lotes</strong> para procesar múltiples archivos simultáneamente.',
      q4: '¿Qué es la compresión perceptual?',
      a4: 'La compresión perceptual es una técnica de compresión que considera cómo funciona la visión humana. Las áreas con menos detalle perceptible se comprimen más agresivamente, mientras que los elementos visuales importantes retienen una calidad superior. También optimizamos paletas de color, metadatos y codificación eficiente para lograr resultados similares a herramientas especializadas como <strong>PI7 compresor de imágenes</strong> o <strong>Caesium compresor de imágenes</strong>.',
      q5: '¿Qué es la compresión de imágenes?',
      a5: 'La compresión de imágenes es una técnica que reduce el tamaño de los archivos de imagen sin perder la calidad visual. Esto es especialmente útil para optimizar imágenes para sitios web, correo electrónico y aplicaciones móviles, donde el tamaño del archivo es un factor importante.'
    },
    relatedTools: {
      title: 'Herramientas Relacionadas',
      tool1: '<a href="https://imagecompressor.com/" target="_blank" rel="noopener noreferrer">Compresor de Imágenes Online</a>',
      tool2: '<a href="https://imageresizer.com/image-compressor" target="_blank" rel="noopener noreferrer">Compresor de Imágenes - Comprimir Imágenes Online</a>',
      tool3: '<a href="https://www.freeconvert.com/image-compressor" target="_blank" rel="noopener noreferrer">Compresor de Imágenes - FreeConvert.com</a>'
    },
    resources: {
      title: 'Recursos Externos',
      resource1: '<a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types" target="_blank" rel="noopener noreferrer">MDN Web Docs: Guía de tipos y formatos de imagen</a> - Referencia completa sobre formatos de imagen y sus características',
      resource2: '<a href="https://web.dev/fast/#optimize-your-images" target="_blank" rel="noopener noreferrer">Google Web.dev: Carga rápida - Optimizar sus imágenes</a> - Buenas prácticas para optimización de imágenes desde Google',
      resource3: '<a href="https://www.w3.org/Graphics/JPEG/" target="_blank" rel="noopener noreferrer">W3C: Especificación del formato de imagen JPEG</a> - Entienda detalladamente la compresión y técnicas de optimización de JPEG'
    },
    conclusion: {
      title: 'Conclusión',
      content: 'En el entorno digital actual, herramientas eficientes de <strong>compresor de imágenes</strong> son esenciales para cualquiera que trabaje con contenido visual en línea. Ya sea que necesite un <strong>compresor de imágenes a 100kb</strong> para optimización web, un <strong>compresor de imágenes a 20kb</strong> para envío de documentos, o un <strong>compresor de imágenes por lotes</strong> para gestionar grandes colecciones, nuestra herramienta ofrece versatilidad y rendimiento para satisfacer estas diversas necesidades.<br><br>Al comprimir sus imágenes inteligentemente, mejora los tiempos de carga, reduce costos de almacenamiento y mejora la experiencia general del usuario en todas las plataformas. Nuestra herramienta <strong>compresor de imágenes online</strong> brinda compresión profesional accesible para todos, desde creadores individuales hasta desarrolladores web a nivel empresarial.<br><br>¡Empiece hoy a optimizar sus imágenes y experimente los beneficios de rendimiento que vienen con un contenido visual correctamente comprimido! Ya sea trabajando con necesidades de <strong>compresor de imágenes JPG</strong> o requiriendo funcionalidad más especializada de <strong>compresor de tamaño de imagen</strong>, nuestra herramienta está diseñada para entregar resultados excepcionales mientras mantiene su facilidad de uso.'
    }
  }
}