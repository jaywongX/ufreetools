export default {
  name: 'Redimensionador de Imágenes Masivo',
  description: 'Ajustar, convertir y optimizar múltiples imágenes a la vez',
  input: {
    title: 'Imágenes de Entrada',
    dropzone: 'Arrastre las imágenes aquí o haga clic para navegar',
    addMore: 'Agregar más imágenes',
    selectImages: 'Seleccionar Imágenes',
    clearAll: 'Limpiar Todo',
    maxFiles: 'Hasta {count} imágenes',
    maxSize: 'Tamaño máximo por imagen: {size}MB',
    supportedFormats: 'Formatos admitidos: {formats}'
  },
  options: {
    title: 'Opciones de Redimensión',
    settingsTitle: 'Ajustes de Redimensión',
    resizeMode: 'Modo de Redimensión',
    resizeMethod: 'Método de Redimensión',
    pixelMode: 'Píxel',
    percentageMode: 'Porcentaje',
    maxDimensionMode: 'Dimensiones Máximas',
    outputFormat: 'Formato de Salida',
    quality: 'Calidad',
    width: 'Ancho',
    height: 'Alto',
    maintainAspectRatio: 'Mantener Relación de Aspecto',
    maxWidth: 'Ancho Máximo',
    maxHeight: 'Alto Máximo',
    percentage: 'Porcentaje',
    backgroundColor: 'Color de Fondo',
    naming: 'Nombre de Salida',
    filenamePrefix: 'Prefijo del Nombre de Archivo',
    filenameSuffix: 'Sufijo del Nombre de Archivo',
    applyToAllImages: 'Aplicar a todas las imágenes',
    applyToAll: 'Aplicar a todas'
  },
  resizeModes: {
    exact: 'Dimensiones Exactas',
    maxDimensions: 'Dimensiones Máximas',
    percentage: 'Escala Porcentual',
    fit: 'Ajustar Dentro',
    cover: 'Cubrir',
    crop: 'Recortar'
  },
  formats: {
    original: 'Igual que el Origen',
    jpg: 'JPG/JPEG',
    png: 'PNG',
    webp: 'WebP',
    gif: 'GIF',
    bmp: 'BMP',
    tiff: 'TIFF',
    svg: 'SVG',
    ico: 'ICO'
  },
  namingOptions: {
    original: 'Nombre Original',
    dimensions: 'Original + Dimensiones',
    format: 'Original + Formato',
    custom: 'Patrón Personalizado',
    random: 'Cadena Aleatoria'
  },
  output: {
    title: 'Imágenes Redimensionadas',
    downloadAll: 'Descargar Todas',
    downloadAsZip: 'Descargar como ZIP',
    processingStatus: 'Procesando: {processed}/{total}',
    originalSize: 'Tamaño Original',
    newSize: 'Nuevo Tamaño',
    reduction: 'Reducción',
    individualDownload: 'Descargar'
  },
  batch: {
    title: 'Procesamiento por Lotes',
    process: 'Procesar Todas las Imágenes',
    cancel: 'Cancelar Procesamiento',
    selectPreset: 'Seleccionar Preajuste',
    savePreset: 'Guardar Configuración Actual',
    progress: 'Progreso del Procesamiento'
  },
  watermark: {
    title: 'Marca de Agua',
    enable: 'Agregar Marca de Agua',
    text: 'Texto de la Marca de Agua',
    image: 'Imagen de la Marca de Agua',
    position: 'Posición',
    opacity: 'Opacidad',
    rotation: 'Rotación',
    size: 'Tamaño',
    padding: 'Espaciado'
  },
  positions: {
    topLeft: 'Arriba Izquierda',
    topCenter: 'Arriba Centro',
    topRight: 'Arriba Derecha',
    middleLeft: 'Centro Izquierda',
    middleCenter: 'Centro',
    middleRight: 'Centro Derecha',
    bottomLeft: 'Abajo Izquierda',
    bottomCenter: 'Abajo Centro',
    bottomRight: 'Abajo Derecha'
  },
  actions: {
    resize: 'Redimensionar',
    preview: 'Vista Previa',
    processing: 'Procesando...',
    reset: 'Restablecer',
    applySettings: 'Aplicar Ajustes',
    resetSettings: 'Restablecer Ajustes',
    cancel: 'Cancelar'
  },
  messages: {
    resizeSuccess: 'Redimensión exitosa',
    resizeFailed: 'Fallo en redimensión: {error}',
    invalidDimensions: 'Por favor ingrese dimensiones válidas',
    invalidWidthHeight: 'Por favor ingrese ancho y alto válidos',
    noImages: 'Por favor agregue imágenes para redimensionar',
    noImagesToDownload: 'No hay imágenes disponibles para descargar',
    processing: 'Procesando imágenes...',
    processingComplete: 'Procesamiento completado',
    processingError: 'Ocurrió un error durante el procesamiento',
    waitingForProcess: 'Esperando procesamiento',
    downloadStarted: 'Descarga iniciada',
    allDownloaded: 'Todas las imágenes han sido descargadas',
    presetSaved: 'Preajuste guardado',
    presetLoaded: 'Preajuste cargado',
    zipCreated: 'Un archivo ZIP con {count} imágenes ha sido creado',
    zipError: 'Ocurrió un error al crear el archivo ZIP'
  },
  preview: {
    title: 'Vista Previa de Imagen ({count} imágenes)',
    selectImage: 'Seleccione una imagen',
    batchSupport: 'Soporta selección masiva de múltiples imágenes para procesamiento único',
    download: 'Descargar',
    delete: 'Eliminar'
  },
  qualityOptions: {
    fast: 'Procesamiento Rápido',
    medium: 'Calidad Media',
    high: 'Alta Calidad (Recomendado)',
    best: 'Mejor Calidad (Más lento)'
  },
  article: {
    title: "Redimensionador de Imágenes Masivo: Procese Múltiples Imágenes de Forma Eficiente",
    features: {
      title: "Entender el Procesamiento por Lotes de Imágenes y Sus Beneficios",
      description: "El <strong>Redimensionador de Imágenes Masivo</strong> es una poderosa herramienta en línea diseñada para simplificar el proceso de redimensionar, convertir y optimizar múltiples imágenes simultáneamente. En lugar de procesar imágenes una por una en software tradicional, este <strong>procesador de imágenes por lotes</strong> le permite aplicar los mismos ajustes a docenas o incluso cientos de imágenes con solo unos pocos clics.<br><br>Nuestra herramienta ofrece opciones completas para <strong>ajustar dimensiones de imágenes</strong>, conversión de formato y optimización de calidad, manteniendo siempre la integridad visual de sus imágenes. Ya sea que necesite reducir el tamaño de archivo para uso web, preparar imágenes para plataformas específicas o mantener dimensiones consistentes en una colección de imágenes, el <strong>redimensionador por lotes</strong> realiza estas tareas eficientemente desde su navegador sin requerir instalaciones de software ni conocimientos técnicos.",
      useCases: {
        title: "Aplicaciones Prácticas para Redimensionar Imágenes Masivamente",
        items: [
          "<strong>Optimización Web</strong>: Los desarrolladores web y gestores de contenido pueden usar el <strong>redimensionador masivo de imágenes</strong> para preparar rápidamente activos gráficos para sitios web. Al reducir dimensiones y tamaños de archivo, puede mejorar significativamente la velocidad de carga de páginas, crucial para experiencia de usuario y posicionamiento SEO. La capacidad de la herramienta para convertir imágenes a formatos optimizados como WebP mejora aún más el rendimiento del sitio web.",
          "<strong>Fotografía de Productos para E-commerce</strong>: Vendedores online que manejan grandes catálogos de productos pueden ahorrar horas de trabajo usando nuestro <strong>redimensionador de fotos por lotes</strong> para estandarizar todas las imágenes de producto a dimensiones específicas requeridas por mercados como Amazon, eBay o Shopify. Esto asegura una apariencia consistente y profesional en todas las listas cumpliendo requisitos de plataforma.",
          "<strong>Creación de Contenido para Redes Sociales</strong>: Gestores de redes sociales que manejan contenido en múltiples plataformas pueden redimensionar imágenes por lotes para cumplir con requisitos específicos de cada red. Ya sean publicaciones de Instagram, portadas de Facebook, tarjetas de Twitter o pines de Pinterest, nuestro <strong>procesador de imágenes por lotes</strong> ayuda a mantener calidad visual óptima en todas las plataformas.",
          "<strong>Preparación de Portafolio Fotográfico</strong>: Fotógrafos profesionales pueden preparar rápidamente imágenes para sitios web de portafolio, entrega a clientes o servicios de impresión. El <strong>redimensionador de múltiples imágenes</strong> permite mantener proporciones mientras se ajustan a dimensiones específicas, asegurando consistencia en toda la colección fotográfica sin ediciones individuales laboriosas.",
          "<strong>Desarrollo de Material Educativo</strong>: Profesores y creadores de contenido educativo pueden redimensionar conjuntos de diagramas, gráficos o fotografías a dimensiones uniformes para incluirlos en materiales didácticos, presentaciones o cursos online. La capacidad de procesamiento por lotes hace práctico mantener coherencia visual en recursos educativos extensos.",
          "<strong>Preparación de Activos para Aplicaciones</strong>: Desarrolladores de apps móviles pueden usar la herramienta para generar múltiples versiones de las mismas imágenes en distintas resoluciones (como 1x, 2x, 3x) para diferentes pantallas de dispositivos. El <strong>conversor de imágenes por lotes</strong> agiliza este proceso asegurando que los activos luzcan nítidos en todos los tipos de dispositivo manteniendo tamaños de archivo manejables."
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes Sobre Redimensionar Imágenes Masivamente",
      items: [
        {
          question: "¿Se degradará la calidad de las imágenes al usar el Redimensionador Masivo?",
          answer: "La calidad de las imágenes se preserva cuidadosamente con nuestro <strong>procesador de imágenes por lotes</strong>, aunque existen algunas consideraciones:<br><br>• Nuestra herramienta usa algoritmos avanzados diseñados específicamente para mantener fidelidad visual durante el redimensionamiento<br>• Usted tiene control sobre los ajustes de calidad, especialmente al convertir a formatos como JPEG o WebP<br>• Reducir tamaño (hacer imágenes más pequeñas) generalmente preserva mejor la calidad que agrandarlas<br>• Cuanto mayor sea la configuración de calidad seleccionada, mejores resultados obtendrá, aunque los archivos serán más grandes<br>• Al procesar por lotes, una configuración de calidad de 80-90% ofrece un excelente equilibrio para la mayoría de los casos<br><br>Para trabajo profesional que requiera máxima calidad, recomendamos usar la opción 'Alta Calidad' o 'Mejor Calidad' en las opciones del procesador. Las <strong>vistas previas del redimensionador masivo de fotos</strong> le permiten examinar los resultados antes de descargarlos, asegurando que cumplan con sus estándares de calidad."
        },
        {
          question: "¿Qué formatos de imagen soporta el Redimensionador Masivo?",
          answer: "Nuestro <strong>conversor de imágenes por lotes</strong> soporta un amplio rango de formatos de imagen:<br><br><strong>Formatos de entrada:</strong><br>• JPEG/JPG - Formato común para fotografías<br>• PNG - Ideal para gráficos con transparencia<br>• WebP - Formato moderno con excelente compresión<br>• GIF - Adecuado para animaciones simples<br>• BMP - Formato bitmap sin comprimir<br>• TIFF - Formato de alta calidad usado frecuentemente en fotografía<br><br><strong>Formatos de salida:</strong><br>• JPEG/JPG - Mejor para fotografías y uso web general<br>• PNG - Preserva transparencia y es sin pérdida<br>• WebP - Proporciona compresión superior manteniendo calidad<br><br>El <strong>redimensionador de múltiples imágenes</strong> puede convertir entre estos formatos durante el proceso por lotes, permitiéndole estandarizar su colección de imágenes en un solo formato o elegir el formato más adecuado para cada situación."
        },
        {
          question: "¿Cuántas imágenes puedo procesar a la vez con el Redimensionador Masivo?",
          answer: "El <strong>redimensionador masivo de imágenes</strong> está diseñado para manejar grandes volúmenes de forma eficiente:<br><br>• Puede procesar decenas de imágenes en un solo lote (el límite típico es alrededor de 100 imágenes por lote)<br>• El tamaño individual de archivo está limitado a 5MB por imagen para un rendimiento óptimo<br>• El tiempo total de procesamiento depende de varios factores, incluyendo:<br>  - La cantidad y tamaño de las imágenes de entrada<br>  - La complejidad de las operaciones de redimensionamiento<br>  - La potencia de procesamiento de su dispositivo<br>  - La velocidad de conexión a internet<br><br>El <strong>procesador de imágenes por lotes</strong> usa procesamiento en el cliente, lo cual significa que las imágenes nunca abandonan su computadora, mejorando tanto la velocidad como la privacidad. Para colecciones muy grandes (cientos o miles de imágenes), recomendamos procesarlas en lotes más pequeños de 20-50 imágenes para obtener la mejor experiencia."
        },
        {
          question: "¿Puedo mantener la proporción de imagen al redimensionar imágenes por lotes?",
          answer: "Sí, preservar la proporción es una característica clave de nuestro <strong>redimensionador masivo de imágenes</strong>:<br><br>• La opción 'Mantener Relación de Aspecto' asegura que las imágenes no se estiren o distorsionen<br>• Cuando está activada, solo necesita especificar el ancho o el alto, y la otra dimensión se calculará automáticamente<br>• Para dimensiones exactas (como requisitos de redes sociales), puede desactivar esta opción<br>• El método 'Dimensiones Máximas' es especialmente útil para mantener proporciones asegurando que ninguna imagen exceda dimensiones especificadas<br>• 'Escala Porcentual' redimensiona uniformemente todas las imágenes manteniendo perfectamente sus proporciones originales<br><br>El <strong>redimensionador masivo de fotos</strong> proporciona una vista previa de cada imagen, permitiéndole confirmar que las proporciones se preservan correctamente antes de descargar las imágenes procesadas."
        },
        {
          question: "¿Cómo descargo todas las imágenes procesadas después de redimensionar por lotes?",
          answer: "El <strong>redimensionador de múltiples imágenes</strong> ofrece opciones convenientes para recuperar sus imágenes procesadas:<br><br>1. <strong>Descarga por Lotes como ZIP</strong>: Después del procesamiento, haga clic en el botón 'Descargar Todas' para obtener todas las imágenes redimensionadas en un único archivo ZIP<br><br>2. <strong>Descargas Individuales</strong>: Cada imagen procesada tiene su propio botón de descarga si solo necesita ciertas imágenes<br><br>3. <strong>Nombres de Archivo Automáticos</strong>: Las imágenes procesadas mantienen sus nombres originales con adiciones que indican que han sido redimensionadas<br><br>4. <strong>Preservación de Formatos</strong>: Si seleccionó 'Igual que el Origen' en el formato de salida, cada imagen mantiene su formato original; de otro modo, todas las imágenes se convierten al formato seleccionado<br><br>El <strong>conversor de imágenes por lotes</strong> almacena temporalmente todas las imágenes procesadas en su navegador, así que recomendamos descargar sus resultados antes de cerrar la pestaña del navegador."
        }
      ]
    },
    guide: {
      title: "Cómo Usar el Redimensionador Masivo de Imágenes: Guía Paso a Paso",
      step1: "<strong>Suba sus imágenes</strong>: Haga clic en el botón 'Seleccionar Imágenes' o arrastre y suelte sus archivos en el área de carga. El <strong>procesador de imágenes por lotes</strong> acepta formatos comunes de imagen incluyendo JPEG, PNG, WebP, GIF y otros. Puede agregar múltiples imágenes a la vez o añadir más imágenes después de la selección inicial.",
      step2: "<strong>Elija su método de redimensión</strong>: Seleccione entre tres métodos de redimensión avanzados: <ul class='ml-5 list-disc'><li>Modo 'Píxel' le permite especificar dimensiones exactas en píxeles</li><li>Modo 'Porcentaje' redimensiona imágenes relativas a sus dimensiones originales</li><li>Modo 'Dimensión Máxima' asegura que ninguna imagen exceda un tamaño específico manteniendo proporciones</li></ul> Esta flexibilidad hace que nuestro <strong>redimensionador masivo de fotos</strong> sea adecuado para prácticamente cualquier necesidad de procesamiento de imágenes.",
      step3: "<strong>Establezca sus dimensiones</strong>: Ingrese los valores de ancho y/o alto deseados basándose en el método de redimensión seleccionado. Si ha activado 'Mantener Relación de Aspecto' (recomendado para la mayoría de los casos), solo necesita especificar una dimensión y el <strong>redimensionador masivo de imágenes</strong> calculará la otra automáticamente para evitar deformaciones.",
      step4: "<strong>Configure opciones de salida</strong>: Elija su formato de salida preferido (JPEG, PNG o WebP) y ajuste los parámetros de calidad según sus necesidades. El <strong>conversor de imágenes por lotes</strong> le permite balancear entre calidad de imagen y tamaño de archivo. Para formatos JPEG y WebP, puede ajustar el porcentaje de calidad, con valores más altos produciendo imágenes de mejor aspecto pero con tamaños mayores.",
      step5: "<strong>Procese sus imágenes</strong>: Haga clic en el botón 'Aplicar a todas las imágenes' para iniciar el procesamiento por lotes. El <strong>redimensionador de múltiples imágenes</strong> mostrará un indicador de progreso mientras trabaja con sus archivos. Cada imagen se procesa usando algoritmos de alta calidad que preservan la fidelidad visual logrando las dimensiones especificadas.",
      step6: "<strong>Revise los resultados</strong>: Tras finalizar el procesamiento, examine la vista previa de cada imagen para asegurar que los resultados cumplan sus expectativas. El <strong>redimensionador masivo de imágenes</strong> muestra información útil incluyendo las dimensiones originales y nuevas, permitiéndole confirmar que el redimensionamiento se realizó correctamente.",
      step7: "<strong>Descargue sus imágenes procesadas</strong>: Haga clic en 'Descargar Todas' para recibir un archivo ZIP conteniendo todas sus imágenes redimensionadas, o descargue imágenes individuales según necesite. El <strong>procesador de imágenes por lotes</strong> preserva sus archivos originales y provee las versiones procesadas con nombres apropiados para distinguirlas de las originales."
    },
    conclusion: "El Redimensionador Masivo de Imágenes ofrece una solución práctica a un problema común enfrentado por desarrolladores web, fotógrafos, mercadólogos y creadores de contenido: procesar múltiples imágenes eficientemente manteniendo calidad y consistencia. Eliminando la necesidad de software costoso o edición individual laboriosa, esta herramienta agiliza flujos de trabajo y ayuda a mantener estándares visuales en activos digitales. Ya sea que esté preparando fotos de productos para una plataforma e-commerce, optimizando imágenes para un sitio web receptivo o estandarizando contenido visual para redes sociales, las capacidades de procesamiento por lotes ahorran tiempo valioso y aseguran resultados consistentes. A medida que el contenido digital continúa enfatizando elementos visuales, herramientas que ayuden a gestionar y optimizar imágenes a gran escala se vuelven recursos esenciales para profesionales de diversas industrias."
  }
}