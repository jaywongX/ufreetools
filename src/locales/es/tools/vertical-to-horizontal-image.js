export default {
  name: 'Imagen Vertical a Horizontal',
  description: 'Convertir imágenes verticales (retrato) a formato horizontal (paisaje) con múltiples opciones de transformación',
  
  upload: {
    title: 'Cargar Imagen',
    dropzone: 'Arrastra y suelta tu imagen aquí',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },
  
  settings: {
    title: 'Configuración de Conversión',
    presets: 'Preajustes Rápidos',
    conversionMode: 'Modo de Conversión',
    modes: {
      rotate: 'Rotar',
      fill: 'Rellenar Fondo',
      blur: 'Fondo Desenfocado',
      stretch: 'Estirar Bordes',
      dualColor: 'Fondo de Doble Color'
    },
    rotationAngle: 'Ángulo de Rotación',
    fillColor: 'Color de Fondo',
    blurRadius: 'Intensidad del Desenfoque',
    stretchEdges: 'Cantidad de Estiramiento',
    leftColor: 'Color Izquierdo',
    rightColor: 'Color Derecho',
    sizeOption: 'Opción de Tamaño',
    sizeModes: {
      auto: 'Tamaño Automático',
      preset: 'Tamaños Comunes',
      custom: 'Tamaño Personalizado'
    },
    sizePresets: 'Preajustes de Tamaño',
    outputSize: 'Tamaño de Salida',
    width: 'Ancho',
    height: 'Alto',
    dimensionsHint: 'Introduce las dimensiones en píxeles',
    autoSize: 'Calcular tamaño automáticamente',
    outputFormat: 'Formato de Salida',
    quality: 'Calidad de la Imagen',
    advancedOptions: 'Opciones Avanzadas',
    preserveRatio: 'Mantener proporción original',
    sharpen: 'Enfocar',
    addWatermark: 'Agregar marca de agua',
    watermarkPlaceholder: 'Ingresa el texto de la marca de agua',
    watermarkColor: 'Color de la marca de agua'
  },
  
  output: {
    preview: 'Vista Previa del Resultado',
    dimensions: 'Dimensiones',
    before: 'Antes',
    after: 'Después'
  },
  
  actions: {
    selectImage: 'Seleccionar Imagen',
    convert: 'Convertir Imagen',
    download: 'Descargar Imagen',
    reset: 'Eliminar',
    showSideBySide: 'Mostrar Comparación',
    hideComparison: 'Ocultar Comparación',
    hideSideBySide: 'Cerrar'
  },
  
  messages: {
    processing: 'Procesando imagen...',
    convertPrompt: 'Convierte tu imagen para ver la vista previa aquí',
    error: 'Ocurrió un error al procesar la imagen',
    success: '¡La conversión se completó exitosamente!'
  },

  examples: {
    title: 'Consejos de Uso',
    social: 'Perfecto para publicaciones en redes sociales donde las imágenes horizontales tienen mejor rendimiento',
    socialTip: 'Usa el modo desenfoque para obtener los mejores resultados en redes sociales',
    website: 'Crea imágenes de banner para sitios web y blogs',
    websiteTip: 'El modo de doble color funciona muy bien para banners web'
  },

  help: {
    title: 'Cómo Usar Esta Herramienta',
    description: 'Esta herramienta te permite convertir imágenes verticales (retrato) a formato horizontal (paisaje) utilizando varios métodos que mantienen la calidad visual e impacto estético.',
    example1: {
      title: 'Publicaciones en Redes Sociales',
      description: 'Convierte fotos retrato a formato paisaje ideal para redes sociales con fondo desenfocado'
    },
    example2: {
      title: 'Banners Web',
      description: 'Crea encabezados y banners desde imágenes verticales usando relleno de color como fondo'
    }
  },

  article: {
    title: "Convertir Imágenes Verticales a Horizontales: Guía Completa",
    
    intro: {
      title: "Características y Casos de Uso de la Herramienta",
      content: `
        <p>Nuestro <strong>Conversor de Imágenes Verticales a Horizontales</strong> transforma imágenes en formato retrato (vertical) a paisaje (horizontal) manteniendo la calidad visual. Esta poderosa herramienta ofrece múltiples métodos de conversión incluyendo fondos desenfocados, rellenos sólidos, gradientes de doble color, estiramiento de bordes y ajustes de rotación.</p>
        
        <p>Características principales:</p>
        <ul>
          <li><strong>Múltiples modos de conversión</strong> para diferentes estilos visuales y propósitos</li>
          <li><strong>Optimización para redes sociales</strong> con dimensiones preestablecidas para varias plataformas</li>
          <li><strong>Personalización profesional</strong> con configuraciones avanzadas como enfoque y marca de agua</li>
          <li><strong>Salida de alta calidad</strong> en diversos formatos (JPEG, PNG, WebP)</li>
        </ul>
        
        <h4>Casos de Uso Comunes:</h4>
        
        <p><strong>Contenido para Redes Sociales</strong>: Transforma fotos verticales tomadas con smartphone en publicaciones horizontales ideales para Facebook, Twitter, LinkedIn y YouTube donde los formatos horizontales tienen mejor rendimiento.</p>
        
        <p><strong>Banners Web</strong>: Crea imágenes anchas para cabeceras y banners a partir de fotos de productos o retratos verticales destinados a tiendas online, blogs y materiales de marketing.</p>
        
        <p><strong>Marketing Digital</strong>: Adapta imágenes verticales de productos para formatos horizontales de anuncios en diversas plataformas publicitarias y campañas de email marketing.</p>
        
        <p><strong>Miniaturas de Vídeo</strong>: Convierte capturas verticales de vídeos en miniaturas horizontales para YouTube, Vimeo y otras plataformas de vídeo.</p>
        
        <p><strong>Diapositivas de Presentaciones</strong>: Transforma imágenes verticales en formatos horizontales adecuados para PowerPoint, Google Slides y otro software de presentaciones.</p>
      `
    },
    
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Por qué debería convertir imágenes verticales a formato horizontal?",
      a1: "Las imágenes horizontales son preferidas por muchas plataformas incluyendo feeds de redes sociales, sitios web, presentaciones y materiales de marketing. Generalmente reciben mayor engagement y se visualizan mejor en distintos dispositivos.",
      q2: "¿Mi imagen vertical perderá calidad al convertirla a horizontal?",
      a2: "No, nuestra herramienta mantiene la calidad de la imagen durante la conversión. Utilizamos técnicas avanzadas como el desenfoque, rellenos de color y estiramiento de bordes en lugar de recortes simples para preservar el contenido de tu imagen original.",
      q3: "¿Qué modo de conversión debo elegir para redes sociales?",
      a3: "Para redes sociales, generalmente el modo de fondo desenfocado funciona mejor ya que mantiene el sujeto centrado mientras extiende la imagen horizontalmente con una versión desenfocada y estéticamente agradable de la imagen original.",
      q4: "¿Cuáles son las dimensiones óptimas para imágenes horizontales?",
      a4: "Las relaciones horizontales comunes incluyen 16:9 (formato panorámico), 3:2 (paisaje estándar) y ratios específicos por plataforma como 1200×630 píxeles para Facebook o 1280×720 para YouTube. Nuestras opciones preestablecidas manejan estos cálculos por ti.",
      q5: "¿Puedo añadir marcas de agua para proteger mis imágenes convertidas?",
      a5: "Sí, nuestra herramienta incluye una función de marca de agua en las opciones avanzadas. Puedes agregar texto personalizado y ajustar su color para ayudar a proteger tus derechos de autor.",
      q6: "¿Funciona esta herramienta en dispositivos móviles?",
      a6: "¡Absolutamente! Nuestro conversor de imágenes verticales a horizontales es completamente responsivo y funciona en smartphones, tablets y computadoras de escritorio con cualquier navegador moderno."
    },
    
    tutorial: {
      title: "Guía Paso a Paso",
      step1: "Sube tu imagen vertical arrastrándola y soltándola en el área de carga o haciendo clic en el botón 'Seleccionar Imagen'.",
      step2: "Elige un modo de conversión: desenfoque, rellenar, doble color, estirar o rotar según tus necesidades.",
      step3: "Ajusta la configuración específica del modo seleccionado (intensidad del desenfoque, color de fondo, etc.) para personalizar la apariencia.",
      step4: "Selecciona una opción de tamaño: automático (recomendado), dimensiones preestablecidas para plataformas específicas, o dimensiones personalizadas.",
      step5: "Para necesidades avanzadas, abre la sección de Opciones Avanzadas para acceder al enfoque, controles de proporción y marca de agua.",
      step6: "Haz clic en 'Convertir Imagen' para procesar tu imagen vertical a formato horizontal.",
      step7: "Visualiza el resultado y utiliza la vista comparativa para ver los cambios antes/después.",
      step8: "Si es necesario, ajusta tus configuraciones y convierte nuevamente hasta que estés satisfecho con el resultado.",
      step9: "Descarga tu imagen horizontal en el formato deseado (JPEG, PNG o WebP)."
    }
  }
}