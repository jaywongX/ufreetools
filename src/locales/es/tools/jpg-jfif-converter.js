export default {
  name: 'Convertidor de JPG a JFIF',
  description: 'Convierte imágenes JPG al formato JFIF en línea con alta calidad y múltiples opciones',
  tags: ['imagen', 'convertir', 'jpg', 'jfif', 'jpeg', 'formato', 'utilidad'],

  meta: {
    title: 'Convertidor de JPG a JFIF - Herramienta Gratuita de Conversión de Imágenes en Línea',
    description: 'Convierte JPG a JFIF en línea y gratis. Convertidor rápido, seguro basado en navegador con procesamiento por lotes, comparación previa y configuraciones avanzadas de calidad. Sin marcas de agua, sin registro.'
  },

  upload: {
    title: 'Convertidor de JPG a JFIF',
    subtitle: 'Convierte imágenes JPG al formato JFIF con calidad perfecta',
    dropzone: 'Arrastra tus archivos JPG aquí',
    dropzoneActive: 'Suelta los archivos para iniciar la conversión',
    maxSize: 'Tamaño máximo del archivo: 50MB',
    supportedFormats: 'Formatos compatibles: JPG, JPEG'
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
    filenameTemplateHelp: 'Usa {name} para insertar el nombre original del archivo',
    preserveMetadata: 'Conservar metadatos de la imagen'
  },

  preview: {
    title: 'Vista Previa de la Imagen',
    before: 'JPG Original',
    after: 'Vista Previa en JFIF',
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
    noValidFiles: 'Por favor selecciona archivos JPG o JPEG válidos.',
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
    title: 'Acerca de la Conversión de JPG a JFIF',
    description: 'Nuestro convertidor de JPG a JFIF te permite rápidamente y fácilmente convertir tus archivos de imagen JPG al formato JFIF, todo ello procesado de forma segura en tu navegador.',
    whatIs: {
      title: '¿Qué es JFIF?',
      content: 'JFIF (JPEG File Interchange Format) es un estándar de formato de archivo para archivos JPEG. Proporciona información adicional como resolución, proporción de aspecto y otros metadatos que ayudan a garantizar que las imágenes JPEG se muestren correctamente en diferentes dispositivos y plataformas. Aunque JFIF y JPG son técnicamente formatos relacionados, algunos programas y dispositivos pueden tener mejor compatibilidad con uno que con otro.'
    },
    whyConvert: {
      title: '¿Por qué Convertir JPG a JFIF?',
      reason1: 'Algunos sistemas antiguos específicamente requieren el formato JFIF',
      reason2: 'Algunas aplicaciones especializadas pueden tener mejor compatibilidad con JFIF',
      reason3: 'Estandarizar tu colección de imágenes con extensiones consistentes',
      reason4: 'Garantizar el manejo adecuado de metadatos en flujos de trabajo específicos'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      content: 'Nuestro convertidor procesa tus archivos JPG completamente en tu navegador. Tus imágenes nunca se cargan a ningún servidor, asegurando completa privacidad y seguridad. La herramienta lee los datos de la imagen JPG, la renderiza y luego la guarda en formato estándar JFIF con las configuraciones de calidad elegidas.'
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
  }
};