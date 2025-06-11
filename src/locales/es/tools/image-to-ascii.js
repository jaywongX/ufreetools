export default {
  name: 'Imagen a ASCII',
  description: 'Convierte imágenes en arte ASCII personalizable',
  upload: {
    title: 'Subir Imagen',
    dropzone: 'Arrastra y suelta tu imagen aquí o haz clic para navegar',
    maxSize: 'Tamaño máximo del archivo: 5MB',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF',
    pasteImage: 'O pega una imagen desde el portapapeles'
  },
  options: {
    title: 'Opciones de Conversión',
    width: 'Ancho de Salida',
    height: 'Alto de Salida',
    preserveAspect: 'Mantener Relación de Aspecto',
    colored: 'Salida con Color',
    charSet: 'Conjunto de Caracteres',
    charSets: {
      standard: 'Estándar',
      simple: 'Simple',
      complex: 'Complejo',
      blocks: 'Caracteres de Bloque',
      custom: 'Personalizado'
    },
    customChars: 'Caracteres Personalizados',
    invert: 'Invertir Colores',
    threshold: 'Umbral de Brillo',
    brightness: 'Brillo',
    contrast: 'Contraste',
    fontFamily: 'Familia de Fuentes',
    fontSize: 'Tamaño de Fuente',
    lineHeight: 'Altura de Línea',
    backgroundColor: 'Color de Fondo',
    textColor: 'Color de Texto'
  },
  output: {
    title: 'Salida ASCII',
    preview: 'Vista Previa',
    raw: 'ASCII Crudo',
    html: 'HTML',
    copyToClipboard: 'Copiar al Portapapeles',
    downloadTxt: 'Descargar como TXT',
    downloadHtml: 'Descargar como HTML',
    downloadImage: 'Descargar como Imagen',
    stats: {
      title: 'Estadísticas',
      characters: 'Número de Caracteres',
      lines: 'Número de Líneas',
      colors: 'Número de Colores',
      size: 'Tamaño del Texto'
    }
  },
  presets: {
    title: 'Preestablecidos',
    save: 'Guardar Configuración Actual',
    load: 'Cargar Preestablecido',
    delete: 'Eliminar Preestablecido',
    presetName: 'Nombre del Preestablecido',
    default: 'Por Defecto',
    detailed: 'Detallado',
    minimalist: 'Minimalista',
    blocky: 'Estilo Bloque',
    small: 'Pequeño',
    inverted: 'Invertido'
  },
  adjustment: {
    title: 'Ajuste de Imagen',
    grayscale: 'Escala de Grises',
    negative: 'Negativo',
    resize: 'Redimensionar Antes de la Conversión',
    crop: 'Recortar Imagen',
    rotate: 'Rotar',
    flipH: 'Voltear Horizontalmente',
    flipV: 'Voltear Verticalmente'
  },
  animation: {
    title: 'Animación',
    animated: 'Procesar como Animación',
    frameDelay: 'Retraso entre Cuadros',
    loop: 'Repetición de Animación',
    loopCount: 'Número de Repeticiones',
    extractFrame: 'Extraer Cuadro Actual'
  },
  actions: {
    convert: 'Convertir a ASCII',
    resetOptions: 'Restablecer Opciones',
    refreshPreview: 'Refrescar Vista Previa',
    loadImage: 'Cargar Nueva Imagen',
    applyChanges: 'Aplicar Cambios',
    selectImage: 'Seleccionar Imagen',
    reset: 'Restablecer',
    processing: 'Procesando...',
    generate: 'Generar ASCII',
    copy: 'Copiar',
    download: 'Descargar'
  },
  messages: {
    converting: 'Convirtiendo imagen a ASCII...',
    conversionComplete: 'Conversión completada',
    conversionFailed: 'Fallo en la conversión: {error}',
    copied: 'ASCII copiado al portapapeles',
    downloadStarted: 'La descarga ha comenzado',
    downloadComplete: 'ASCII descargado',
    downloadFailed: 'Fallo en la descarga',
    copyFailed: 'Fallo al copiar',
    resetComplete: 'Los ajustes han sido restablecidos',
    asciiGenerated: 'Arte ASCII generado',
    generationFailed: 'Fallo al generar el ASCII',
    presetSaved: 'Preestablecido guardado exitosamente',
    presetLoaded: 'Preestablecido cargado',
    presetDeleted: 'Preestablecido eliminado',
    invalidImage: 'Formato de imagen inválido o archivo corrupto',
    imageTooBig: 'Las dimensiones de la imagen son demasiado grandes para la conversión',
    selectOrLoad: 'Por favor selecciona una imagen o cárgala desde una URL',
    asciiWillDisplay: 'El arte ASCII se mostrará aquí',
    customCharsPlaceholder: 'Introduce los caracteres del más oscuro al más claro...',
    tip: 'Haz clic en el botón "Generar ASCII" después de ajustar la configuración para ver el efecto',
    drapPlaceHolder: 'Selecciona o arrastra una imagen aquí',
    noImage: 'Por favor selecciona una imagen primero',
    generateAscii: 'Haz clic en el botón "Generar ASCII" para convertir la imagen',
    tip2: 'Consejo: Usa el botón de copiar para transferir el arte ASCII al portapapeles, o usa el botón de descarga para guardarlo como archivo de texto.'
  },
  charSets: {
    standard: 'Estándar',
    simple: 'Simple',
    blocks: 'Bloques',
    custom: 'Personalizado'
  },
  settings: {
    title: 'Configuración ASCII',
    customCharsetLabel: 'Conjunto de Caracteres Personalizado (del más oscuro al más claro)',
    asciiWidth: 'Ancho ASCII',
    invert: 'Invertir Colores',
    colored: 'Salida con Color',
    fontSize: 'Tamaño de Fuente'
  },
  preview: {
    originalImage: 'Imagen Original',
    generatedAscii: 'ASCII Generado'
  },
  article: {
    title: "Conversor de Imagen a Arte ASCII: Transforma Imágenes en Arte de Texto",
    features: {
      title: "Entendiendo la Conversión de Imagen a ASCII",
      description: "El <strong>conversor de imagen a ASCII</strong> es un generador especializado de <strong>arte en texto</strong> que transforma imágenes comunes en composiciones artísticas usando varios caracteres ASCII. Este <strong>generador de arte ASCII</strong> funciona analizando los valores de brillo de cada píxel en tu imagen y mapeándolos a caracteres ASCII correspondientes según su densidad visual.<br><br>A diferencia de los simples <strong>creadores de arte en texto</strong>, nuestra herramienta ofrece opciones completas de personalización incluyendo ancho ajustable, múltiples conjuntos de caracteres, preservación de color e inversiones controladas. El <strong>convertidor de imágenes a ASCII</strong> soporta varios formatos de imagen como JPG, PNG y GIF, asegurando compatibilidad con la mayoría de las fuentes de imágenes. Para artistas digitales, programadores y creadores de contenido creativo, este <strong>convertidor de imágenes a texto</strong> proporciona una forma única de representar contenido visual en formatos basados en texto que pueden compartirse fácilmente, insertarse en documentos o usarse en entornos donde no se pueden mostrar imágenes.",
      useCases: {
        title: "Aplicaciones Prácticas del Arte ASCII",
        items: [
          "<strong>Mensajería Creativa</strong>: Mejora firmas de correo electrónico, publicaciones en redes sociales o mensajes de aplicaciones con <strong>imágenes ASCII</strong> distintivas que sobresalen del texto o imágenes convencionales",
          "<strong>Proyectos de Programación</strong>: Integra arte ASCII en interfaces de línea de comandos, aplicaciones terminales o juegos basados en texto para añadir elementos visuales sin necesidad de renderizar imágenes reales",
          "<strong>Materiales Educativos</strong>: Crea representaciones visuales accesibles para contenido educativo, especialmente útil para enseñar conceptos en entornos donde las imágenes estándar podrían no ser compatibles",
          "<strong>Proyectos Artísticos Digitales</strong>: Desarrolla expresiones artísticas únicas transformando fotografías en <strong>obras basadas en texto</strong>, explorando la intersección entre arte visual y tipografía",
          "<strong>Contenido para Sistemas Antiguos</strong>: Genera contenido visual para sistemas informáticos antiguos, pantallas solo de texto o entornos con capacidades gráficas limitadas donde no se pueden renderizar imágenes estándar",
          "<strong>Creación de Animaciones ASCII</strong>: Convierte fotogramas de video o secuencias de imágenes en cuadros ASCII para crear animaciones basadas en texto para proyectos creativos, sitios web o aplicaciones terminales"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Conversión a Arte ASCII",
      items: [
        {
          question: "¿Qué tipo de imagen es mejor para convertir a arte ASCII?",
          answer: "Las imágenes con alto contraste, sujetos claros y composiciones relativamente simples tienden a producir los mejores resultados en arte ASCII. Fotografías de retratos con buena iluminación, siluetas y objetos con contornos definidos generalmente ofrecen buenos resultados cuando se procesan mediante nuestro generador de arte ASCII. Aunque la herramienta puede manejar cualquier formato de imagen (JPG, PNG, GIF, WebP), las características del contenido importan más que el formato del archivo. Evita imágenes con fondos muy ocupados, bajo contraste o detalles finos que podrían perderse durante el proceso de conversión. Para obtener una conversión óptima de arte en texto, considera preprocesar tus imágenes para mejorar el contraste y simplificar áreas complejas antes de cargarlas al convertidor ASCII."
        },
        {
          question: "¿Cómo puedo controlar el nivel de detalle en mi arte ASCII?",
          answer: "El nivel de detalle en tu arte ASCII de texto se puede ajustar mediante varias configuraciones en nuestro convertidor de imagen a ASCII. El parámetro de ancho es el más importante: valores altos (hasta 200 caracteres) crean imágenes ASCII más detalladas con mayor precisión, mientras que valores bajos producen representaciones más amplias y menos detalladas. La selección del conjunto de caracteres también afecta el nivel de detalle: los conjuntos 'estándar' y 'bloques' ofrecen más graduación y potencialmente mejor detalle que el conjunto 'simple'. Para mayor control, usa la opción de conjunto de caracteres personalizado para definir tu propia secuencia de caracteres basada en su densidad visual. Además, la opción de inversión a veces mejora el detalle para ciertos tipos de imágenes invirtiendo el mapeo de brillo, mientras que el ajuste del tamaño de fuente afecta cómo se muestra finalmente la imagen ASCII en pantalla."
        },
        {
          question: "¿Por qué mi arte ASCII parece distorsionado o estirado?",
          answer: "El arte ASCII puede parecer estirado porque los caracteres de texto estándar son más altos que anchos, creando un desequilibrio de relación de aspecto cuando se convierte desde píxeles cuadrados. Nuestro convertidor ASCII aplica automáticamente un factor correctivo para compensar esta diferencia de relación de aspecto de los caracteres, pero puede haber algo de distorsión dependiendo de la fuente utilizada para mostrar el resultado. Si tu imagen ASCII parece demasiado comprimida verticalmente o estirada horizontalmente, intenta ajustar la configuración de ancho o ve el resultado usando una fuente monoespaciada (como Courier New, Consolas o Monaco) donde los caracteres tienen dimensiones más consistentes. Usar el conjunto de caracteres 'bloques' también puede ayudar a crear salidas más proporcionales ya que estos caracteres Unicode preservan mejor las relaciones espaciales que los caracteres ASCII estándar."
        },
        {
          question: "¿Puedo crear arte ASCII a color con esta herramienta?",
          answer: "Sí, nuestro convertidor de imagen a ASCII ofrece una opción de salida a color que preserva los colores originales de tu imagen. Cuando activas la opción 'Salida con Color', el generador de texto ASCII analiza tanto el brillo como la información de color de cada píxel, mapeándolos a caracteres ASCII mientras retiene los valores de color correspondientes. Esto crea una imagen ASCII vibrante y coloreada en lugar de arte monocromático. La salida a color se genera como HTML con estilo en línea para preservar la información de color, lo cual significa que puedes copiarla y usarla en documentos HTML, pero para aplicaciones de texto plano, querrás usar la salida estándar sin color. Ten en cuenta que la preservación de color funciona mejor con imágenes que tienen áreas de color definidas en lugar de gradientes sutiles."
        },
        {
          question: "¿Cómo puedo compartir o usar mi arte ASCII generado?",
          answer: "Después de generar arte ASCII con nuestro generador de arte en texto, tienes varias opciones para compartirlo o usarlo. Para arte ASCII de texto plano, simplemente usa el botón Copiar para copiar toda la salida a tu portapapeles, luego pégalo en correos electrónicos, documentos, publicaciones en redes sociales o cualquier campo de texto. Para arte ASCII a color, necesitarás usar la opción Descargar para guardar el resultado como archivo HTML que puede verse en cualquier navegador web o incrustarse en sitios web. También puedes tomar una captura de pantalla del resultado generado para compartirla como imagen. Para proyectos de programación, copia la salida de texto plano e intégrala como constantes de cadena en tu código. Recuerda que las fuentes monoespaciadas mostrarán correctamente tu imagen ASCII, mientras que las fuentes proporcionales pueden distorsionar el alineamiento de los caracteres y arruinar el efecto visual."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Crear Arte ASCII desde Imágenes",
      steps: [
        "<strong>Selecciona una Imagen</strong>: Haz clic en el botón 'Seleccionar Imagen' en la parte superior de la interfaz del <strong>generador de arte ASCII</strong>. Elige una foto o gráfico desde tu dispositivo que desees convertir. Para mejores resultados, selecciona una imagen con buen contraste y un sujeto claro.",
        "<strong>Ajusta la Configuración de Ancho</strong>: Usa el deslizador en el panel de configuración para establecer el ancho ASCII deseado. Recuerda que los valores más altos (hacia 200) crearán resultados más detallados pero más grandes, mientras que los valores más bajos producirán resultados más simples y compactos.",
        "<strong>Elige un Conjunto de Caracteres</strong>: Selecciona entre las opciones disponibles de conjunto de caracteres (Estándar, Simple, Bloques o Personalizado). Cada conjunto produce un estilo diferente de <strong>imagen ASCII</strong>. Si seleccionas 'Personalizado', puedes introducir tus propios caracteres ordenados del más oscuro al más claro.",
        "<strong>Configura Opciones Adicionales</strong>: Decide si deseas invertir los colores (lo cual a veces mejora la legibilidad en fondos blancos), habilitar la salida a color (para preservar los colores originales de la imagen) y ajustar el tamaño de fuente para fines de visualización.",
        "<strong>Genera el Arte ASCII</strong>: Haz clic en el botón 'Generar ASCII' para procesar tu imagen mediante el <strong>convertidor de arte en texto</strong>. El algoritmo analizará tu imagen y creará una representación ASCII correspondiente según tus ajustes.",
        "<strong>Vista Previa y Refinamiento</strong>: Revisa el <strong>arte ASCII</strong> generado en el panel de resultados. Si no estás satisfecho con el resultado, ajusta tus configuraciones y vuelve a generar. Prueba diferentes conjuntos de caracteres o valores de ancho para lograr el nivel de detalle deseado.",
        "<strong>Guarda o Comparte Tu Creación</strong>: Una vez satisfecho con tu <strong>imagen ASCII</strong>, usa el botón Copiar para transferirla al portapapeles o el botón Descargar para guardarla como archivo de texto. Para arte ASCII a color, descárgalo como archivo HTML para preservar la información de color."
      ]
    },
    conclusion: "El convertidor de imagen a ASCII transforma imágenes ordinarias en arte ASCII extraordinario, cerrando la brecha entre medios visuales y texto. Esta poderosa herramienta de arte ASCII ofrece no solo una vía creativa, sino aplicaciones prácticas a través de la comunicación digital, programación, educación y arte. Al convertir imágenes estándar en formato ASCII, los usuarios pueden expresar conceptos visuales en entornos donde no se admiten imágenes tradicionales o crear interpretaciones artísticas únicas de contenido fotográfico. Ya sea que busques agregar carácter a tus comunicaciones digitales, resolver problemas de compatibilidad o explorar las posibilidades artísticas de imágenes basadas en texto, este generador de imágenes ASCII proporciona las herramientas de personalización y opciones de salida que necesitas. A medida que la comunicación digital sigue evolucionando, la capacidad de convertir imágenes en arte de texto sigue siendo una habilidad valiosa tanto para resolver problemas prácticos como para la expresión creativa."
  }
}