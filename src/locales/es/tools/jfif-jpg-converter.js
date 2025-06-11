export default {
  name: 'Convertidor de JFIF a JPG',
  description: 'Convierte imágenes JFIF al formato JPG en línea con alta calidad y múltiples opciones',
  tags: ['imagen', 'convertir', 'jpg', 'jfif', 'jpeg', 'formato', 'utilidad'],
  meta: {
    title: 'Convertidor de JFIF a JPG - Herramienta Gratuita de Conversión de Imágenes en Línea',
    description: 'Convierte JFIF a JPG en línea y gratis. Convertidor rápido, seguro basado en navegador con procesamiento por lotes, comparación previa y configuraciones avanzadas de calidad. Sin marcas de agua, sin registro.'
  },
  upload: {
    title: 'Convertidor de JFIF a JPG',
    subtitle: 'Convierte imágenes JFIF al formato JPG con calidad perfecta',
    dropzone: 'Arrastra tus archivos JFIF aquí',
    dropzoneActive: 'Suelta los archivos para iniciar la conversión',
    maxSize: 'Tamaño máximo del archivo: 50MB',
    supportedFormats: 'Formatos compatibles: JFIF, JPEG, JPG'
  },
  settings: {
    title: 'Configuración de Conversión',
    advanced: 'Configuración Avanzada',
    quality: {
      label: 'Calidad de la Imagen',
      description: 'Una mayor calidad da como resultado archivos más grandes',
      auto: 'Auto-optimizar (recomendado)'
    },
    qualityLabels: {
      maximum: 'Calidad Máxima',
      high: 'Alta Calidad',
      good: 'Buena Calidad',
      medium: 'Calidad Media',
      low: 'Baja Calidad',
      veryLow: 'Calidad Muy Baja'
    },
    metadata: {
      label: 'Metadatos de la Imagen',
      preserve: 'Conservar todos los metadatos (EXIF, GPS, etc.)',
      strip: 'Eliminar todos los metadatos (archivos más pequeños)',
      keepBasic: 'Conservar solo metadatos básicos'
    },
    filenameOption: 'Nombre del Archivo de Salida',
    filenameOriginal: 'Original',
    filenameConverted: 'Agregar Prefijo',
    filenameCustom: 'Personalizado',
    filenameTemplatePlaceholder: 'Ejemplo: convertido-{name}',
    filenameTemplateHelp: 'Usa {name} para insertar el nombre original del archivo'
  },
  preview: {
    title: 'Vista Previa de la Imagen',
    before: 'JFIF Original',
    after: 'Vista Previa en JPG',
    noPreview: 'No hay vista previa disponible',
    togglePreview: 'Mostrar/Ocultar Vista Previa',
    imageDetails: 'Detalles de la Imagen'
  },
  fileTable: {
    fileName: 'Nombre del Archivo',
    type: 'Tipo',
    size: 'Tamaño',
    status: 'Estado',
    preview: 'Vista Previa',
    pending: 'Pendiente',
    converting: 'Convirtiendo...',
    done: 'Completado',
    error: 'Error',
    progress: 'Progreso'
  },
  results: {
    title: 'Archivos Convertidos',
    summary: '{count} archivos convertidos, {saved} espacio total ahorrado',
    originalName: 'Nombre Original',
    convertedName: 'Nombre Convertido',
    originalSize: 'Tamaño Original',
    convertedSize: 'Nuevo Tamaño',
    compressionRate: 'Compresión',
    actions: 'Acciones',
    noResults: 'Aún no hay conversiones'
  },
  actions: {
    selectFile: 'Seleccionar Archivos',
    addMore: 'Agregar Más',
    clear: 'Limpiar Archivos',
    convertAll: 'Convertir Todos los Archivos',
    converting: 'Convirtiendo...',
    download: 'Descargar',
    downloadAll: 'Descargar Todos',
    clearResults: 'Limpiar Resultados',
    viewDetails: 'Ver Detalles',
    compare: 'Comparar',
    retry: 'Reintentar los Fallidos',
    cancelAll: 'Cancelar',
    optimizeAll: 'Auto Optimizar'
  },
  messages: {
    noValidFiles: 'Por favor selecciona archivos JFIF o JPEG válidos.',
    conversionError: 'Error al convertir el archivo. Por favor intenta nuevamente.',
    conversionSuccess: '¡Todos los archivos se convirtieron correctamente!',
    partialSuccess: '{success} de {total} archivos se convirtieron correctamente.',
    downloadStarted: 'La descarga ha comenzado...',
    processingFiles: 'Procesando tus archivos...',
    dragActive: 'Arrastra los archivos aquí para subirlos',
    fileSizeExceeded: 'El tamaño del archivo excede el límite de 50MB',
    unsupportedFormat: 'Formato no compatible'
  },
  history: {
    title: 'Conversiones Recientes',
    empty: 'No hay conversiones recientes',
    clear: 'Limpiar Historial',
    restore: 'Restaurar Archivos'
  },
  info: {
    title: 'Acerca de la Conversión de JFIF a JPG',
    description: 'Nuestro convertidor de JFIF a JPG te permite rápidamente y fácilmente convertir tus archivos de imagen JFIF al formato JPG más ampliamente compatible, todo ello procesado de forma segura en tu navegador.',
    whatIs: {
      title: '¿Qué es JFIF?',
      content: 'JFIF (JPEG File Interchange Format) es un estándar de formato de archivo para archivos JPEG. Proporciona información adicional como resolución, proporción de aspecto y otros metadatos que ayudan a garantizar que las imágenes JPEG se muestren correctamente en diferentes dispositivos y plataformas. Aunque JFIF y JPG son técnicamente formatos relacionados, algunos programas y dispositivos pueden tener mejor compatibilidad con uno que con otro.'
    },
    whyConvert: {
      title: '¿Por qué Convertir JFIF a JPG?',
      reason1: 'Mejor compatibilidad con varias aplicaciones y dispositivos',
      reason2: 'Más fácil de subir a sitios web que puedan rechazar el formato JFIF',
      reason3: 'Estandarizar tu colección de imágenes con extensiones consistentes',
      reason4: 'Solucionar problemas donde ciertos programas no pueden abrir o mostrar correctamente archivos JFIF'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      content: 'Nuestro convertidor procesa tus archivos JFIF completamente en tu navegador. Tus imágenes nunca se cargan a ningún servidor, asegurando completa privacidad y seguridad. La herramienta lee los datos de la imagen JFIF, la renderiza y luego la guarda en formato JPG estándar con la configuración de calidad elegida.'
    },
    tips: {
      title: 'Consejos para Obtener los Mejores Resultados',
      tip1: 'Usa el control deslizante de calidad para equilibrar entre el tamaño del archivo y la calidad de la imagen',
      tip2: 'Para imágenes con texto o detalles nítidos, usa una configuración de calidad más alta',
      tip3: 'Convierte varios archivos a la vez y descárgalos como un archivo ZIP',
      tip4: 'Usa "Auto Optimizar" para obtener el mejor equilibrio entre calidad y tamaño de archivo',
      tip5: 'Elimina los metadatos para reducir el tamaño del archivo cuando sea importante la privacidad'
    },
    privacy: {
      title: 'Privacidad y Seguridad',
      content: 'Nos tomamos en serio tu privacidad. Todo el procesamiento ocurre directamente en tu navegador: tus archivos nunca se cargan a ningún servidor. Esto garantiza completa seguridad y privacidad para tus imágenes.'
    }
  },
  article: {
    title: "Guía Definitiva del Convertidor de JFIF a JPG: Convierte Archivos JFIF en Línea",
    introduction: {
      title: "Entendiendo la Conversión de JFIF a JPG",
      content: "Nuestro <strong>convertidor de JFIF a JPG</strong> es una poderosa herramienta en línea diseñada para transformar sin problemas archivos de imagen JFIF al formato más ampliamente compatible JPG. Si alguna vez has tenido dificultades para abrir o compartir archivos JFIF, este convertidor ofrece la solución perfecta, procesando tus imágenes directamente en tu navegador sin necesidad de cargar nada, asegurando completa privacidad y seguridad."
    },
    whatIsJfif: {
      title: "¿Qué es JFIF y por qué convertirlo a JPG?",
      content: "JFIF (JPEG File Interchange Format) es una especificación de formato de archivo que define cómo se empaqueta los datos de imagen JPEG. Aunque técnicamente similar a JPG, muchos sistemas y aplicaciones los manejan de manera diferente. <strong>Convertir JFIF a JPG</strong> asegura máxima compatibilidad en todos los dispositivos, aplicaciones y plataformas, eliminando la frustración de errores de 'tipo de archivo no compatible' cuando intentas ver o cargar tus imágenes."
    },
    whyConvert: {
      title: "Beneficios de Convertir JFIF a JPG",
      content: "La principal razón para <strong>convertir JFIF a JPG en Windows 10</strong> o cualquier otro sistema operativo es la compatibilidad. Los archivos JPG están universalmente soportados, mientras que los archivos JFIF pueden causar problemas con ciertas aplicaciones o sitios web. Al usar nuestro <strong>convertidor en línea de JFIF a JPG</strong>, asegurarás que tus imágenes sean accesibles en todas partes, desde plataformas de redes sociales hasta software de edición de imágenes, adjuntos de correo electrónico y documentos."
    },
    useCases: {
      title: "Casos Comunes de Uso para la Conversión de JFIF a JPG",
      list: [
        "Subidas a redes sociales: Asegúrate de que tus imágenes sean aceptadas en plataformas que puedan rechazar archivos JFIF",
        "Desarrollo web: Usa JPG para mejor compatibilidad con todos los navegadores y dispositivos",
        "Publicación digital: Convierte imágenes JFIF para incluirlas en publicaciones digitales y documentos",
        "Edición de fotos: Transforma archivos JFIF a JPG antes de editar en software con soporte limitado de formatos",
        "Adjuntos de correo electrónico: Convierte a JPG para compatibilidad universal al compartir imágenes por correo",
        "Servicios de impresión fotográfica: Muchos servicios de impresión requieren específicamente el formato JPG",
        "Crear archivos fotográficos: Estandariza colecciones de imágenes con extensiones de archivo consistentes"
      ]
    },
    platforms: {
      title: "Convertir JFIF a JPG en Diferentes Plataformas",
      content: "Aunque nuestra herramienta funciona en cualquier dispositivo con navegador web, los usuarios suelen buscar soluciones específicas por plataforma. Aquí mostramos cómo nuestra herramienta aborda las necesidades en varias plataformas:",
      list: [
        {
          title: "JFIF a JPG en Windows 10/11",
          description: "No necesitas instalar ningún software para <strong>convertir JFIF a JPG en Windows 10</strong> o Windows 11. Nuestra herramienta en línea funciona perfectamente en cualquier navegador en tu PC, ofreciendo una alternativa más simple a las herramientas integradas."
        },
        {
          title: "JFIF a JPG en Mac",
          description: "Los usuarios de Mac que se preguntan <strong>cómo convertir JFIF a JPG en Mac</strong> pueden usar nuestra herramienta sin requerir software adicional, preservando espacio valioso en disco y evitando descargas innecesarias."
        },
        {
          title: "JFIF a JPG en Dispositivos Móviles",
          description: "Nuestro diseño receptivo garantiza que puedes <strong>convertir archivos JFIF a JPG</strong> directamente desde tu smartphone o tableta, con una interfaz optimizada para pantallas táctiles."
        },
        {
          title: "JFIF a JPG Usando Extensiones de Navegador",
          description: "Aunque existen extensiones de navegador, a menudo requieren permisos para acceder a tus datos. Nuestra solución basada en web no requiere instalación y protege tu privacidad."
        }
      ]
    },
    tutorial: {
      title: "Cómo Convertir JFIF a JPG: Guía Paso a Paso",
      introduction: "Convertir tus imágenes JFIF a JPG es sencillo con nuestra intuitiva herramienta. Sigue estos simples pasos para transformar tus archivos:",
      steps: [
        {
          title: "Selecciona o Arrastra y Suelta Tus Archivos",
          description: "Haz clic en el botón 'Seleccionar Archivos' o simplemente arrastra y suelta tus imágenes JFIF en el área designada. Puedes seleccionar múltiples archivos a la vez para conversión por lotes."
        },
        {
          title: "Ajusta la Configuración de Calidad (Opcional)",
          description: "Para usuarios avanzados, puedes personalizar la <strong>configuración de JFIF a JPG</strong> como la calidad de salida. Una calidad más alta significa archivos más grandes, mientras que una calidad menor resulta en archivos más pequeños."
        },
        {
          title: "Elige Opciones de Nombre de Archivo",
          description: "Decide si mantener los nombres originales de los archivos o personalizarlos. Puedes agregar un prefijo o usar una plantilla de nomenclatura flexible con nuestras opciones."
        },
        {
          title: "Configura las Opciones de Metadatos",
          description: "Elige si deseas conservar, eliminar o mantener solo los metadatos básicos de tus archivos originales, dependiendo de tus preferencias de privacidad y requisitos de tamaño de archivo."
        },
        {
          title: "Haz Clic en 'Convertir Todos los Archivos'",
          description: "Una vez configuradas tus opciones, haz clic en el botón 'Convertir Todos los Archivos' para iniciar el proceso de conversión. Un indicador de progreso mostrará el estado de cada archivo."
        },
        {
          title: "Descarga Tus Archivos JPG Convertidos",
          description: "Cuando la conversión esté completa, descarga tus archivos JPG individualmente o como un archivo ZIP que contenga todas las imágenes convertidas."
        }
      ],
      tips: {
        title: "Consejos Profesionales para la Conversión de JFIF a JPG",
        list: [
          "Para fotos con muchos detalles, usa una configuración de calidad más alta (85-100%) para preservar la claridad de la imagen",
          "Para gráficos web o capturas de pantalla, una configuración de calidad media (70-85%) suele ofrecer el mejor equilibrio entre calidad y tamaño de archivo",
          "Usa la opción 'Auto Optimizar' si no estás seguro sobre la configuración óptima para tus imágenes",
          "Para preocupaciones de privacidad, considera usar la opción 'Eliminar metadatos' para eliminar información potencialmente sensible de tus fotos",
          "Al convertir múltiples archivos, usar la opción de descarga ZIP ahorra tiempo en comparación con descargar cada archivo individualmente"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes Sobre la Conversión de JFIF a JPG",
      questions: [
        {
          question: "¿Cómo convierto JFIF a JPG en Windows 10?",
          answer: "Aunque Windows 10 tiene opciones integradas como renombrar la extensión del archivo o usar Paint, nuestro convertidor en línea suele ser más fácil. Simplemente abre nuestro sitio web en cualquier navegador, carga tus archivos JFIF y conviértelos a JPG sin instalar ningún software. Este método funciona no solo para Windows 10 sino también para <strong>Windows 11, Mac y dispositivos móviles</strong>."
        },
        {
          question: "¿Puedo convertir JFIF a JPG sin perder calidad?",
          answer: "Sí, puedes <strong>convertir JFIF a JPG sin pérdida de calidad</strong> usando nuestra herramienta con la configuración de calidad más alta (100%). Dado que ambos formatos usan compresión JPEG, convertir entre ellos con configuraciones de calidad máxima preserva casi todos los detalles de la imagen. Para resultados absolutamente mejores, usa nuestra configuración 'Calidad Máxima'."
        },
        {
          question: "¿Cómo cambio la extensión de un archivo JFIF a JPG?",
          answer: "Aunque técnicamente podrías renombrar la extensión del archivo de .jfif a .jpg, esto no siempre es confiable. Nuestro <strong>convertidor de JFIF a JPG</strong> vuelve a codificar adecuadamente la imagen para asegurar compatibilidad total, en lugar de simplemente cambiar la extensión. Esto asegura que el archivo funcione correctamente en todos los sistemas y aplicaciones."
        },
        {
          question: "¿Hay algún software gratuito de convertidor de JFIF a JPG que pueda descargar?",
          answer: "Sí, hay aplicaciones descargables, pero nuestro <strong>convertidor gratuito en línea de JFIF a JPG</strong> elimina la necesidad de descargar cualquier software. Es accesible desde cualquier dispositivo, procesa archivos localmente en tu navegador (no en nuestros servidores) y no requiere instalación ni registro."
        },
        {
          question: "¿Afectará la conversión de JFIF a JPG los metadatos de la imagen?",
          answer: "Por defecto, nuestro convertidor preserva metadatos tales como información EXIF (ajustes de la cámara, fecha tomada, etc.). Sin embargo, puedes elegir eliminar todos los metadatos durante la conversión por razones de privacidad o para reducir el tamaño del archivo. También ofrecemos una opción para conservar solo metadatos básicos, no sensibles, si prefieres."
        },
        {
          question: "¿Cuál es la diferencia entre archivos JFIF y JPG?",
          answer: "La diferencia es principalmente técnica. JFIF (JPEG File Interchange Format) es un formato de archivo específico que implementa el estándar JPEG, mientras que JPG generalmente se usa como la extensión de archivo para imágenes comprimidas con JPEG. En términos prácticos, la mayoría de los archivos JPG siguen realmente la especificación JFIF, pero algunos programas tratan diferentemente según la extensión del archivo."
        },
        {
          question: "¿Puedo convertir múltiples archivos JFIF a JPG simultáneamente?",
          answer: "¡Absolutamente! Nuestra herramienta admite procesamiento por lotes, permitiéndote <strong>convertir múltiples archivos JFIF a JPG</strong> simultáneamente. Simplemente selecciona o arrastra varios archivos a la vez, y nuestro convertidor los procesará todos. Luego puedes descargarlos individualmente o como un archivo ZIP combinado."
        }
      ]
    },
    relatedTools: {
      title: "Herramientas Relacionadas de Conversión de Imágenes",
      introduction: "Además de nuestro convertidor de JFIF a JPG, quizás encuentres útiles estas otras herramientas de imagen:",
      list: [
        {
          name: "Compresor de Imágenes",
          url: "http://www.ufreetools.com/tool/image-compressor",
          description: "Reduce el tamaño del archivo manteniendo la calidad visual"
        },
        {
          name: "Redimensionador por Lotes de Imágenes",
          url: "http://www.ufreetools.com/tool/image-batch-resizer",
          description: "Ajusta, convierte y optimiza múltiples imágenes a la vez"
        },
        {
          name: "Extractor de Fotogramas GIF",
          url: "http://www.ufreetools.com/tool/gif-frame-extractor",
          description: "Extrae fotogramas individuales de animaciones GIF"
        }
      ]
    },
    resources: {
      title: "Recursos Adicionales",
      list: [
        {
          name: "Documentación del Estándar JPEG",
          url: "https://docs.fileformat.com/image/jpeg/",
          description: "Obtén más información sobre las especificaciones técnicas detrás de los formatos JPEG"
        },
        {
          name: "Formato de Intercambio de Archivo JPEG (JFIF)",
          url: "https://docs.fileformat.com/image/jfif/",
          description: "Obtén más información sobre las especificaciones técnicas detrás de los formatos JFIF"
        },
        {
          name: "Formato de Intercambio de Archivo JPEG",
          url: "https://wikipedia.org/wiki/JPEG_File_Interchange_Format",
          description: "La compresión JPEG se utiliza en muchos formatos de archivo de imagen"
        }
      ]
    },
    conclusion: {
      title: "¿Por Qué Elegir Nuestro Convertidor de JFIF a JPG?",
      content: "Nuestro <strong>convertidor en línea de JFIF a JPG</strong> combina simplicidad con características poderosas, ofreciendo la solución perfecta para cualquiera que necesite convertir archivos JFIF al formato JPG más universalmente compatible. Ya sea que estés en Windows, Mac o móvil, nuestra herramienta basada en navegador funciona sin problemas sin requerir descargas o instalaciones. Con capacidades de procesamiento por lotes, configuraciones personalizables y protección completa de privacidad, convertir JFIF a JPG nunca ha sido tan fácil o seguro. ¡Prueba nuestro convertidor hoy y experimenta la diferencia en compatibilidad e conveniencia de compartir imágenes!"
    }
  }
}