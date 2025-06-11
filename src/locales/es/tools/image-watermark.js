export default {
  name: 'Marca de Agua en Imagen',
  description: 'Agrega marcas de agua de texto o imagen a tus fotos con configuraciones personalizables',
  upload: {
    title: 'Subir Imágenes',
    dropzone: 'Arrastra y suelta las imágenes aquí o haz clic para navegar',
    addMore: 'Agregar Más Imágenes',
    clearAll: 'Limpiar Todo',
    maxFiles: 'Máximo {count} imágenes',
    maxSize: 'Tamaño máximo: {size}MB por imagen',
    supportedFormats: 'Formatos compatibles: JPG, PNG, WEBP, GIF'
  },
  watermarkType: {
    title: 'Tipo de Marca de Agua',
    text: 'Marca de Agua de Texto',
    image: 'Marca de Agua de Imagen',
    both: 'Texto & Imagen'
  },
  textWatermark: {
    title: 'Marca de Agua de Texto',
    text: 'Texto de la Marca de Agua',
    font: 'Fuente',
    size: 'Tamaño',
    color: 'Color',
    opacity: 'Opacidad',
    rotation: 'Rotación',
    shadow: 'Sombra del Texto',
    background: 'Fondo del Texto',
    padding: 'Relleno',
    border: 'Borde',
    spacing: 'Espaciado entre Letras'
  },
  imageWatermark: {
    title: 'Marca de Agua de Imagen',
    upload: 'Subir Imagen de Marca de Agua',
    selectLogo: 'Seleccionar Logotipo',
    presetLogos: 'Logotipos Preestablecidos',
    size: 'Tamaño',
    opacity: 'Opacidad',
    rotation: 'Rotación',
    offset: 'Desplazamiento'
  },
  positioning: {
    title: 'Posicionamiento',
    position: 'Posición',
    custom: 'Posición Personalizada',
    xPosition: 'Posición X',
    yPosition: 'Posición Y',
    tiled: 'Patrón Repetido',
    margin: 'Margen',
    scale: 'Escalar con la Imagen'
  },
  positions: {
    title: 'Posiciones',
    topLeft: 'Arriba a la Izquierda',
    topCenter: 'Centro Arriba',
    topRight: 'Arriba a la Derecha',
    middleLeft: 'Centrado a la Izquierda',
    middleCenter: 'Centro',
    middleRight: 'Centrado a la Derecha',
    bottomLeft: 'Abajo a la Izquierda',
    bottomCenter: 'Centro Abajo',
    bottomRight: 'Abajo a la Derecha',
    custom: 'Posición Personalizada'
  },
  output: {
    title: 'Salida',
    quality: 'Calidad de Salida',
    format: 'Formato de Salida',
    original: 'Igual que el Original',
    jpg: 'JPG',
    png: 'PNG',
    webp: 'WebP',
    preview: 'Vista Previa',
    downloadIndividual: 'Descargar',
    downloadAll: 'Descargar Todas',
    downloadAsZip: 'Descargar como ZIP'
  },
  presets: {
    title: 'Preestablecidos',
    save: 'Guardar Configuración Actual',
    load: 'Cargar Preestablecido',
    delete: 'Eliminar Preestablecido',
    presetName: 'Nombre del Preestablecido'
  },
  actions: {
    apply: 'Aplicar Marca de Agua',
    applyToAll: 'Aplicar a Todas',
    reset: 'Restablecer',
    preview: 'Vista Previa',
    undo: 'Deshacer',
    cancel: 'Cancelar Procesamiento'
  },
  messages: {
    processing: 'Procesando...',
    success: 'Marca de agua aplicada exitosamente',
    error: 'Error: {error}',
    noImages: 'Por favor agrega imágenes primero',
    noWatermark: 'Por favor agrega una marca de agua de texto o imagen',
    presetSaved: 'Preestablecido guardado exitosamente',
    presetLoaded: 'Preestablecido cargado exitosamente',
    presetDeleted: 'Preestablecido eliminado',
    watermarkApplied: 'Marca de agua aplicada',
    watermarkImageLoadError: 'No se pudo cargar la imagen de marca de agua',
    imageLoadError: 'No se pudo cargar la imagen',
    resetSuccess: 'Restablecimiento exitoso',
    downloadStarted: 'La descarga ha comenzado',
    downloadError: 'Fallo al descargar la imagen',
    imageLoaded: 'Imagen cargada exitosamente',
    canvasInitError: 'No se pudo inicializar el lienzo',
    tiledWatermarkError: 'No se pudo crear la marca de agua repetida'
  },
  article: {
    title: "Herramienta de Marca de Agua en Imagen: Protege y Marca Tu Contenido Visual",
    features: {
      title: "Entendiendo la Aplicación de Marcas de Agua en Imágenes",
      description: "La <strong>herramienta de marca de agua en imagen</strong> es una solución poderosa para añadir marcas visibles de propiedad a tus <strong>imágenes digitales</strong>. Esta <strong>herramienta de marca de agua en línea</strong> te permite aplicar tanto <strong>marcas de agua de texto</strong> como <strong>marcas de agua de imagen</strong> para proteger tu propiedad intelectual y fortalecer tu presencia de marca.<br><br>Nuestra herramienta de <strong>marca de agua en foto</strong> ofrece opciones extensas de personalización incluyendo control de opacidad, posicionamiento, rotación y ajuste de escala para crear el efecto perfecto de <strong>marca de agua</strong>. Ya sea que necesites una marca de agua sutil de <strong>copyright</strong> o una <strong>marca de logotipo</strong> prominente, esta herramienta proporciona la flexibilidad para lograr resultados profesionales sin necesidad de software complejo de <strong>edición de imagen</strong>.",
      useCases: {
        title: "Aplicaciones Comunes para Marcas de Agua en Imágenes",
        items: [
          "Fotógrafos agregando información de copyright para evitar el uso no autorizado de sus imágenes de portafolio",
          "Empresas y mercadotecnia incrustando logotipos en fotos de productos para reforzar la identidad de marca",
          "Profesionales inmobiliarios añadiendo marcas de agua a imágenes de propiedades para evitar listados no autorizados",
          "Diseñadores gráficos protegiendo diseños preliminares compartidos con clientes durante el proceso de aprobación",
          "Creadores de redes sociales marcando su contenido visual para aumentar el reconocimiento cuando las imágenes se comparten",
          "Vendedores de comercio electrónico agregando marcas de agua a fotos de productos para disuadir a competidores de usar sus imágenes"
        ]
      }
    },
    faq: {
      title: "Preguntas Frecuentes sobre la Aplicación de Marcas de Agua en Imágenes",
      items: [
        {
          question: "¿Cuál es la diferencia entre marcas de agua de texto e imagen?",
          answer: "Las marcas de agua de texto utilizan texto personalizado como notificaciones de derechos de autor o URLs de sitios web y pueden personalizarse con diferentes fuentes, colores y efectos. Son ideales para mostrar información de propiedad. Las marcas de agua de imagen usan gráficos como logotipos o firmas superpuestas en tus fotos, lo cual ayuda a mejorar el reconocimiento de marca. Nuestra herramienta admite ambos tipos, permitiéndote elegir la opción más adecuada para tus necesidades específicas o combinarlos para obtener máxima protección y branding."
        },
        {
          question: "¿Cómo creo una marca de agua visible pero que no distraiga mi imagen?",
          answer: "Para crear una marca de agua eficaz pero poco intrusiva, ajusta la opacidad alrededor del 30-50% para hacerla semitransparente. Coloca la marca de agua en una esquina o borde en lugar de sobre el sujeto principal. Para marcas de agua de texto, elige un color que contraste con tu imagen, y considera activar el patrón repetido con mayor espaciado para un efecto sutil. Estas técnicas aseguran que tu marca de agua sea visible para protección mientras mantiene el impacto visual de tu imagen original."
        },
        {
          question: "¿Se pueden eliminar completamente las marcas de agua de las imágenes?",
          answer: "Aunque ninguna marca de agua es 100% a prueba de eliminación, una marca bien diseñada desalienta significativamente el uso no autorizado. Las marcas de agua profesionales creadas con nuestra herramienta — especialmente aquellas con colocación estratégica, opacidad adecuada y patrones repetidos — son difíciles de eliminar sin degradar la calidad de la imagen o requerir habilidades técnicas avanzadas. Para máxima protección, considera usar una combinación de marcas de agua de texto e imagen y colocarlas sobre áreas importantes de tus fotos donde cualquier intento de eliminación sería más evidente."
        },
        {
          question: "¿Qué formatos de imagen funcionan con la herramienta de marca de agua?",
          answer: "Nuestra herramienta de marca de agua en imagen admite todos los principales formatos de imagen, incluyendo archivos JPG, PNG, WEBP y GIF. La salida con marca de agua puede descargarse en el formato deseado, siendo PNG recomendado cuando necesitas preservar transparencia o máxima calidad, y JPG ideal para la mayoría de los casos generales con menor tamaño de archivo. La herramienta preserva las dimensiones originales de la imagen mientras añade tu marca de agua personalizada, asegurando resultados consistentes en todo tu contenido visual."
        },
        {
          question: "¿Puedo crear un lote de imágenes con marca de agua al mismo tiempo?",
          answer: "Actualmente, nuestra herramienta procesa una imagen a la vez para garantizar una colocación precisa y personalización detallada. Este enfoque permite previsualizar y ajustar la marca de agua individualmente para cada imagen, asegurando resultados óptimos para diferentes composiciones y paletas de color. Gracias a la interfaz intuitiva, puedes crear imágenes profesionalmente marcadas con solo unos pocos clics."
        }
      ]
    },
    guide: {
      title: "Guía Paso a Paso para Usar la Herramienta de Marca de Agua en Imagen",
      steps: [
        "Haz clic en el botón 'Subir Imagen' en la parte superior de la herramienta y selecciona la foto que deseas marcar desde tu dispositivo",
        "Elige el tipo de marca de agua: selecciona 'Marca de Agua de Texto' para agregar texto personalizado o 'Marca de Agua de Imagen' para usar un logotipo u otra gráfica",
        "Para marcas de agua de texto, introduce el texto deseado, selecciona estilo de fuente, ajusta tamaño, color y nivel de opacidad en el panel izquierdo",
        "Para marcas de agua de imagen, carga tu logotipo o gráfica usando el botón de carga, luego ajusta escala y opacidad según sea necesario",
        "Selecciona la posición de la marca de agua usando la cuadrícula de posicionamiento (9 posiciones disponibles) o activa la opción 'Patrón Repetido' para crear una marca de agua repetida en toda la imagen",
        "Ajusta el ángulo de rotación usando el deslizador para crear un efecto diagonal si así lo deseas",
        "Previsualiza tus cambios en tiempo real en el panel derecho y continúa realizando ajustes hasta quedar satisfecho con el resultado",
        "Haz clic en el botón 'Descargar' para guardar tu imagen con marca de agua en tu dispositivo en el formato deseado"
      ]
    },
    conclusion: "Agregar marcas de agua profesionales a tus imágenes es una práctica esencial para proteger tu contenido visual y reforzar tu identidad de marca en el entorno digital actual. La herramienta de marca de agua en imagen hace este proceso simple y accesible, permitiéndote crear marcas personalizadas sin necesidad de habilidades avanzadas de diseño ni software costoso. Tanto si eres un fotógrafo, dueño de negocio o creador de contenido, incorporar marcas de agua en tu flujo de trabajo ayuda a proteger tu propiedad intelectual mientras mejora el reconocimiento de tu trabajo cuando circula en línea."
  }
}