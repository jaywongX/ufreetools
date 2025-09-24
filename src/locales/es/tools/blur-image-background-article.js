export default {
  title: 'Herramienta de Desenfoque de Fondo: Desenfoque de Imagen de Fondo en Línea para Efectos Profesionales de Profundidad de Campo',
  functionTitle: '¿Qué es una Herramienta de Desenfoque de Fondo y para qué Sirve?',
  intro: 'Esta herramienta es una <strong>herramienta de desenfoque de fondo en línea</strong> de front-end puro (Desenfoque de Imagen de Fondo). Combina filtros WebGL con algoritmos de segmentación humana para lograr desenfoque gaussiano, profundidad de campo de lente, desenfoque de movimiento, desenfoque radial y <b>desenfoque de fondo de nivel profesional de cámara</b>. Soporta procesamiento por lotes y exportación multi-formato, permitiéndole obtener rápidamente fotos con fondos limpios y sujetos prominentes en su navegador, adecuado para imágenes principales de comercio electrónico, fotos de identificación, portadas de redes sociales y otros escenarios.',
  useCasesTitle: 'Escenarios Comunes de Aplicación para el Desenfoque de Fondo',
  useCases: [
    'Imágenes principales de comercio electrónico eliminando fondos distractores para resaltar productos',
    'Fotos de retrato con desenfoque de fondo para efectos profesionales de profundidad de campo',
    'Fotos de identificación o retratos profesionales, reemplazados con fondos de color sólido o degradado',
    'Embellecimiento rápido de portadas de redes sociales y portadas de videos cortos',
    'Procesamiento unificado de fondos para presentaciones y diseños de pósteres',
    'Desenfoque de fondo de fotos turísticas para proteger la privacidad y mejorar la estética',
    'Desenfoque de fondo de fotos de grupo para exportación por lotes',
    'Generación rápida de efectos de enfoque suave y enfoque radial para contenido UGC'
  ],
  tipTitle: 'Consejo Profesional:',
  tipContent: 'Cuando se utiliza para sujetos de retrato, habilite "Habilitar Segmentación de Primer Plano" y aumente apropiadamente "Difuminado de Bordes" para reducir significativamente los dientes de sierra en los bordes del cabello. Para imágenes con requisitos de alta calidad, priorice la exportación en formatos PNG o WebP.',
  conclusion: 'La <strong>herramienta de desenfoque de fondo</strong> resuelve efectivamente los puntos problemáticos de "fondos desordenados" y "sujetos no prominentes" a través de segmentación inteligente y múltiples algoritmos de desenfoque. Ya sea fotografía de productos, retratos o creación de contenido social, completar el desenfoque de fondo en línea puede mejorar significativamente el enfoque visual y el profesionalismo.',
  faqTitle: 'Preguntas Frecuentes',
  faqs: [
    {
      question: '¿Cómo logra la herramienta de desenfoque de fondo en línea efectos profesionales de profundidad de campo de cámara?',
      answer: 'Esta herramienta de desenfoque de fondo en línea combina la segmentación de primer plano de MediaPipe con filtros WebGL, aplicando desenfoque gaussiano/lente/radial/movimiento a las áreas de fondo para lograr transiciones de profundidad de campo y efectos de enfoque suave similares a las cámaras profesionales.'
    },
    {
      question: '¿Qué métodos de reemplazo de fondo se admiten (color sólido/degradado/imagen)?',
      answer: 'La herramienta admite tres modos: fondo de color sólido, fondo de degradado lineal y fondo de imagen, con transparencia de fondo y modos de mezcla ajustables para satisfacer los requisitos de imágenes principales de comercio electrónico, fotos de identificación y estilos consistentes con la marca.'
    },
    {
      question: '¿Cómo garantizar la calidad de exportación y controlar el tamaño del archivo?',
      answer: 'Puede elegir formatos PNG/JPG/WebP y controlar el tamaño de exportación a través de controles deslizantes de calidad y ajustes preestablecidos de dimensiones. PNG y WebP son más adecuados para escenarios de desenfoque de fondo con requisitos de alta calidad.'
    },
    {
      question: '¿Cómo usar el procesamiento por lotes y la clasificación de páginas?',
      answer: 'Se pueden importar múltiples imágenes a la vez, con selección de rango y controles de casilla para procesar "páginas" específicas, soportando clasificación de mover arriba/abajo, y filtrado automático de imágenes inválidas con "Saltar Páginas en Blanco".'
    },
    {
      question: '¿Es necesario subir las imágenes al servidor, cómo se protege la privacidad?',
      answer: 'Todo el procesamiento de desenfoque de fondo se completa localmente en el navegador y no se sube a ningún servidor, asegurando la privacidad y seguridad de las imágenes.'
    }
  ],
  tutorialTitle: 'Cómo Usar la Herramienta de Desenfoque de Fondo',
  steps: [
    {
      title: 'Subir o Importar Imágenes',
      description: 'Arrastre y suelte o haga clic para subir imágenes locales, o pegue imágenes del portapapeles, habilite la captura de cámara, o importe imágenes de red a través de URL. Compatible con formatos PNG, JPG, WEBP, BMP.',
      note: 'Se pueden importar múltiples imágenes a la vez para desenfoque de fondo por lotes.'
    },
    {
      title: 'Seleccionar Tipo de Desenfoque y Parámetros',
      description: 'Elija desenfoque gaussiano, de lente, de movimiento o radial en "Tipo de Desenfoque", y ajuste finamente los efectos a través de controles deslizantes para radio, ángulo, punto central y ancho de banda de enfoque.',
      note: 'Marcar "Mostrar Comparación Antes/Después" permite una comparación en tiempo real del desenfoque de fondo antes y después.'
    },
    {
      title: 'Habilitar Segmentación de Primer Plano y Configuración de Fondo',
      description: 'Habilite "Habilitar Segmentación de Primer Plano" para mejorar la calidad del borde del sujeto, aumente "Difuminado de Bordes" para transiciones más naturales. En "Configuración de Fondo", elija fondo de color sólido, degradado o de imagen, y ajuste transparencia y modos de mezcla cuando sea necesario.',
      note: 'Cuando se selecciona "Preservar Fondo Original", solo se desenfoca el área de fondo mientras el sujeto permanece claro.'
    },
    {
      title: 'Dimensiones y Calidad',
      description: 'En "Tamaño y Calidad de Salida", elija ajustes preestablecidos de redes sociales o dimensiones personalizadas, establezca la calidad JPG/WebP y porcentaje de escala. Para impresión, aumente DPI y exporte píxeles más altos proporcionalmente.',
      note: 'PNG y WebP son más adecuados para escenarios de desenfoque de fondo que requieren preservación de detalles.'
    },
    {
      title: 'Exportar y Descarga por Lotes',
      description: 'Seleccione el formato de exportación para cada imagen y haga clic en "Descargar" para guardar; múltiples imágenes pueden usar "Descarga por Lotes (ZIP)" para exportar todos los resultados de desenfoque de fondo a la vez.',
      note: 'Todo el procesamiento se completa localmente en el navegador, las imágenes no se suben al servidor.'
    },
    {
      title: 'Control de Página',
      description: 'Ordene "páginas" a través de casillas, entrada de rango y mover arriba/abajo, habilite "Saltar Páginas en Blanco" para filtrar automáticamente imágenes inválidas con baja varianza de brillo.',
      note: 'Ejemplo de rango: 1-3,5,7-9.'
    }
  ],
  successTitle: '¡Felicidades!',
  successContent: 'Ha aprendido a usar nuestra herramienta de desenfoque de fondo para lograr efectos profesionales de profundidad de campo y enfoque suave de nivel de cámara, adecuados para varios escenarios creativos y comerciales.',
  relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarte',
  relatedTools: [
    {
      name: 'Compresor de Imágenes',
      description: 'Reducir el tamaño del archivo de imagen sin pérdida significativa de calidad.',
      url: 'https://www.ufreetools.com/tool/image-compressor'
    },
    {
      name: 'Redimensionador de Imágenes',
      description: 'Redimensionar imágenes a dimensiones específicas o escalar por porcentaje.',
      url: 'https://www.ufreetools.com/tool/image-batch-resizer'
    },
    {
      name: 'Generador de Sellos',
      description: 'Creación en línea de varias imágenes de sellos, generando sellos corporativos, sellos personales y otras estampillas digitales.',
      url: 'https://www.ufreetools.com/tool/seal-generator'
    },
    {
      name: 'Generador de Códigos QR',
      description: 'Crear códigos QR personalizados para URLs, texto, información de contacto y más.',
      url: 'https://www.ufreetools.com/tool/qr-code-generator'
    }
  ],
  referencesTitle: 'Recursos de Referencia',
  references: [
    {
      name: 'Segmentación de Retratos MediaPipe',
      description: 'Modelo de segmentación de primer plano humano y uso de Google',
      url: 'https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md'
    },
    {
      name: 'glfx.js',
      description: 'Biblioteca de efectos de imagen en tiempo real basada en WebGL',
      url: 'https://github.com/evanw/glfx.js'
    },
    {
      name: 'StackBlur',
      description: 'Algoritmo de desenfoque de lienzo rápido y controlable, adecuado como solución de respaldo y procesamiento de difuminado',
      url: 'https://github.com/flozz/StackBlur'
    }
  ]
}