export default {
  name: 'Recortador de Imágenes',
  description: 'Recortar, redimensionar y rotar imágenes con precisión',
  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastre y suelte la imagen aquí o haga clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 10MB',
    supportedFormats: 'Formatos admitidos: JPG, PNG, WEBP, GIF',
    select: 'Por favor seleccione una imagen para comenzar a recortar y editar'
  },
  editor: {
    title: 'Editor de Imagen',
    zoom: 'Zoom',
    rotate: 'Rotar',
    flipHorizontal: 'Voltear Horizontalmente',
    flipVertical: 'Voltear Verticalmente',
    reset: 'Restablecer Imagen',
    undo: 'Deshacer',
    redo: 'Rehacer',
    dragMode: 'Modo Arrastrar',
    scaleMode: 'Modo Escalar'
  },
  crop: {
    title: 'Ajustes de Recorte',
    aspectRatio: 'Relación de Aspecto',
    freeform: 'Forma Libre',
    square: 'Cuadrado (1:1)',
    portrait: 'Vertical (3:4)',
    landscape: 'Horizontal (4:3)',
    widescreen: 'Pantalla Ancha (16:9)',
    panorama: 'Panorámica (2:1)',
    custom: 'Personalizado',
    width: 'Ancho',
    height: 'Alto',
    unit: 'Unidad',
    pixels: 'Píxeles',
    percent: 'Porcentaje',
    lockAspectRatio: 'Bloquear Relación de Aspecto'
  },
  presets: {
    title: 'Preselecciones de Tamaño',
    original: 'Tamaño Original',
    social: 'Redes Sociales',
    facebook: 'Facebook',
    instagram: 'Instagram',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    print: 'Tamaños de Impresión',
    fourBySix: '4×6 pulgadas',
    fiveBySeven: '5×7 pulgadas',
    eightByTen: '8×10 pulgadas'
  },
  output: {
    title: 'Salida',
    preview: 'Vista Previa',
    dimensions: 'Dimensiones de Salida',
    quality: 'Calidad',
    format: 'Formato',
    fileName: 'Nombre del Archivo',
    download: 'Descargar',
    saveAs: 'Guardar Como',
    copy: 'Copiar al Portapapeles'
  },
  actions: {
    crop: 'Recortar Imagen',
    apply: 'Aplicar',
    cancel: 'Cancelar',
    save: 'Guardar Imagen',
    download: 'Descargar',
    newImage: 'Nueva Imagen'
  },
  messages: {
    cropSuccess: 'Imagen recortada exitosamente',
    downloadReady: 'Su imagen recortada está lista para descargar',
    processing: 'Procesando la imagen...',
    copied: 'La imagen ha sido copiada al portapapeles',
    invalidFile: 'Archivo inválido. Por favor cargue una imagen válida.',
    fileTooLarge: 'El archivo es demasiado grande. El tamaño máximo es de 10MB.'
  },
  article: {
    title: "Recortador de Imágenes: La Herramienta Definitiva para Edición Precisa",
    introduction: {
      title: "¿Qué es un Recortador de Imágenes?",
      p1: "Un <strong>recortador de imágenes</strong> es una herramienta especializada diseñada para ayudar a los usuarios a seleccionar y extraer porciones de una imagen con precisión. A diferencia de editores fotográficos básicos, nuestro <strong>recortador y redimensionador de imágenes online</strong> ofrece funcionalidades avanzadas que lo hacen ideal tanto para usuarios casuales como para profesionales que buscan perfeccionar su contenido visual.",
      p2: "Ya sea que necesite un <strong>recortador de imágenes circular</strong> para fotos de perfil, un <strong>recortador cuadrado</strong> para publicaciones en redes sociales, o un <strong>recortador libre</strong> para selecciones personalizadas, nuestra herramienta ofrece opciones versátiles para satisfacer sus necesidades exactas. La tecnología detrás de nuestro <strong>recortador de imágenes</strong> asegura precisión hasta el píxel, permitiendo <strong>recortar imágenes por píxel</strong> con excepcional exactitud.",
      p3: "Los marcos modernos de desarrollo web como <strong>React</strong>, <strong>Angular</strong> y <strong>Flutter</strong> han integrado funcionalidad de <strong>recortadores de imágenes</strong> mediante bibliotecas como <strong>react image cropper</strong>, <strong>ngx image cropper</strong> y componentes como <strong>image cropper flutter</strong>. Nuestra herramienta online entrega la misma calidad profesional sin requerir conocimiento de programación."
    },
    applications: {
      title: "Aplicaciones y Casos de Uso",
      item1: "<strong>Optimización para Redes Sociales</strong>: Cree imágenes perfectamente dimensionadas para diferentes plataformas usando nuestro <strong>recortador de tamaño de imágenes</strong> con dimensiones predefinidas.",
      item2: "<strong>Creación de Fotos de Perfil</strong>: Use nuestro <strong>recortador circular</strong> o <strong>redondo</strong> para crear avatares circulares perfectos.",
      item3: "<strong>Fotografía de Productos para E-commerce</strong>: Mejore la presentación consistente de productos con nuestro <strong>recortador de forma de imagen</strong>.",
      item4: "<strong>Procesamiento de Documentos</strong>: Extraiga imágenes desde PDFs con nuestras capacidades de <strong>recortador de imágenes PDF online</strong>.",
      item5: "<strong>Procesamiento por Lotes</strong>: Maneje múltiples imágenes simultáneamente con nuestra característica de <strong>recortador de imágenes masivo</strong> para flujos de trabajo eficientes."
    },
    tutorial: {
      title: "Cómo Usar Nuestro Recortador de Imágenes",
      step1: {
        title: "Paso 1: Sube tu Imagen",
        content: "Haga clic en el botón \"Nueva Imagen\" para seleccionar y subir la foto que desea recortar. Nuestra herramienta admite formatos comunes de imagen incluyendo JPG, PNG y WEBP. Para usuarios avanzados, nuestra función <strong>recortador automático de imágenes</strong> puede detectar y sugerir áreas óptimas de recorte."
      },
      step2: {
        title: "Paso 2: Seleccione el Tipo y Relación de Corte",
        content: "Elija el tipo de corte deseado desde el menú desplegable. Las opciones incluyen forma libre (para funcionalidad de <strong>recortador manual de imágenes</strong>), cuadrado (1:1), horizontal (4:3), vertical (3:4) y pantalla ancha (16:9). Para precisión dimensional, nuestra herramienta funciona como un <strong>recortador de imágenes en cm</strong> cuando se requiere."
      },
      step3: {
        title: "Paso 3: Ajuste y Refine",
        content: "Use las manijas de recorte para redimensionar su selección. Aproveche las funciones de rotación y volteo para alinear perfectamente su imagen. Para control preciso, nuestra funcionalidad <strong>recortador de imágenes por píxel</strong> le permite realizar ajustes incluso a nivel individual de píxeles."
      },
      step4: {
        title: "Paso 4: Recorte y Descargue",
        content: "Una vez satisfecho con su selección, haga clic en el botón \"Recortar Imagen\" para generar su imagen recortada. Revise el resultado en la vista previa y haga clic en \"Descargar\" para guardarlo en su dispositivo. Nuestro <strong>recortador y redimensionador de imágenes</strong> mantiene la mayor calidad posible durante todo este proceso."
      }
    },
    faq: {
      title: "Preguntas Frecuentes",
      q1: "¿Qué formatos de imagen admite el recortador?",
      a1: "Nuestro recortador de imágenes admite todos los formatos comunes incluyendo JPG, PNG, WEBP y GIF. Simplemente cargue su imagen utilizando el botón \"Nueva Imagen\" para comenzar.",
      
      q2: "¿Cómo creo un recorte cuadrado perfecto para redes sociales?",
      a2: "Seleccione la opción 'Cuadrado (1:1)' desde el menú desplegable de relación de aspecto. Esto restringirá su selección de recorte a un cuadrado perfecto, ideal para fotos de perfil y muchas publicaciones en redes sociales donde se requieran dimensiones uniformes.",
      
      q3: "¿Puedo rotar o voltear mi imagen antes de recortarla?",
      a3: "Sí, nuestra herramienta proporciona capacidades de rotación y volteo. Use los botones de rotación para girar su imagen 90 grados en cualquier dirección, o use los botones de volteo horizontal y vertical para reflejar su imagen antes de hacer su selección de recorte.",
      
      q4: "¿Cómo guardo mi imagen recortada?",
      a4: "Después de hacer su selección de recorte, haga clic en el botón \"Recortar Imagen\" para generar su imagen recortada. El resultado aparecerá en el panel de vista previa a la derecha. Luego haga clic en el botón \"Descargar\" para guardar la imagen recortada en su dispositivo.",
      
      q5: "¿Cuál es la diferencia entre las distintas relaciones de aspecto?",
      a5: "Las distintas relaciones de aspecto tienen diferentes propósitos: 'Cuadrado (1:1)' es perfecto para fotos de perfil, 'Horizontal (4:3)' funciona bien para fotos estándar, 'Vertical (3:4)' es ideal para pantallas verticales, 'Pantalla Ancha (16:9)' coincide con las dimensiones de video, y 'Libre' le permite recortar sin restricciones."
    },
    relatedTools: {
      title: "Herramientas Relacionadas",
      description: "Mejore su flujo de trabajo de edición de imágenes con estas herramientas complementarias:",
      tool1: {
        name: "Redimensionador Masivo de Imágenes",
        description: "Redimensionar múltiples imágenes al mismo tiempo.",
        url: "https://www.ufreetools.com/tool/image-batch-resizer"
      },
      tool2: {
        name: "Compresor de Imágenes",
        description: "Comprimir y optimizar imágenes manteniendo su calidad.",
        url: "https://www.ufreetools.com/tool/image-compressor"
      },
      tool3: {
        name: "Añadir Marca de Agua a Imágenes",
        description: "Agregue marcas de agua de texto o imagen a sus fotos con configuraciones personalizables.",
        url: "https://www.ufreetools.com/tool/image-watermark"
      },
      common: {
        tryNow: "Pruebe Ahora"
      }
    },
    references: {
      title: "Referencias y Recursos",
      ref1: {
        name: "Cropper.js",
        description: "Una poderosa y simple herramienta de recorte de imágenes que soporta configuración flexible, adecuada para dispositivos móviles y navegadores modernos. La documentación oficial proporciona métodos detallados de uso y descripciones de API.",
        url: "https://github.com/fengyuanchen/cropperjs"
      },
      ref2: {
        name: "ImageCut",
        description: "Una herramienta simple y práctica para recortar imágenes que soporta recorte inteligente, establecimiento del tamaño de imagen, rango de píxeles y procesamiento por lotes.",
        url: "https://soft.3dmgame.com/down/206119.html"
      },
      ref3: {
        name: "Vue-Cropper",
        description: "Un componente de recorte de imágenes para Vue.js que utiliza la biblioteca Cropper.js, admite vista previa de recorte, control de zoom, rotación de imagen y puede integrarse fácilmente en proyectos Vue.js.",
        url: "https://hu-snail.github.io/vue3-resource/platform/mobile/img.html"
      }
    }
  }
}