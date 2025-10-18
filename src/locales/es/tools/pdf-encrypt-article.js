export default {
  title: 'Herramienta de Encriptación PDF: Solución basada en navegador para establecer contraseñas de apertura y permisos',
  functionTitle: '¿Qué es una herramienta de encriptación PDF en línea y cómo protege los documentos?',
  intro: 'Nuestra <strong>herramienta de encriptación PDF en línea</strong> utiliza una tecnología de pila completamente front-end de código abierto, compatible con encriptación <strong>AES-128/AES-256 y RC4-40</strong>. Puede establecer <strong>contraseñas de apertura (contraseñas de usuario)</strong> y <strong>contraseñas de permisos (contraseñas de propietario)</strong>, mientras proporciona opciones de control de permisos para impresión, edición, copia y rellenado de formularios. Admite carga por arrastre, selección múltiple tradicional, importación por lotes de URL y adición por lotes, ofreciendo <strong>vista previa comparativa en tiempo real</strong> y análisis básico para ayudarlo a verificar rápidamente los efectos de encriptación y configuraciones de permisos. Después de la encriptación, puede <span style="font-weight:bold">descargar individualmente</span> o <span style="font-weight:bold">descargar en lote como ZIP</span>. Todas las operaciones se realizan localmente en el navegador sin necesidad de cargar al servidor, garantizando privacidad y eficiencia.',

  useCasesTitle: 'Escenarios comunes de aplicación de encriptación PDF',
  useCases: [
    'Establecer contraseñas de apertura y controles de permisos para documentos compartidos empresariales',
    'Agregar encriptación de alta seguridad AES-256 a PDF sensibles como contratos y facturas',
    'Restringir impresión y copia para prevenir distribución no autorizada',
    'Establecer impresión de baja resolución y edición limitada para materiales de capacitación en línea',
    'Encriptar PDF por lotes y establecer permisos uniformemente',
    'Encriptar rápidamente y obtener vista previa de efectos de encriptación en dispositivos móviles',
    'Encriptación local en navegador sin necesidad de cargar para proteger la privacidad'
  ],

  tipTitle: 'Consejos profesionales:',
  tipContent: 'Se recomienda utilizar <strong>contraseñas fuertes</strong> combinadas con nivel de encriptación <strong>AES-256</strong> para mayor seguridad; para mejor rendimiento de búsqueda, puede completar títulos y palabras clave en metadatos y mantener estrategias de denominación consistentes (la herramienta actual no modifica metadatos de PDF).',

  conclusion: 'La <strong>herramienta de encriptación PDF en línea</strong> puede completar rápidamente encriptación y configuración de permisos en el navegador, adecuada para diversos escenarios como empresas, instituciones educativas y usuarios individuales. Al establecer contraseñas de usuario y contraseñas de propietario y seleccionar algoritmos de encriptación apropiados, puede garantizar seguridad manteniendo buena usabilidad.',

  faqTitle: 'Preguntas frecuentes (FAQ)',
  faqs: [
    {
      question: '¿Qué algoritmos de encriptación admite la herramienta de encriptación PDF en línea?',
      answer: 'Esta herramienta admite encriptación <strong>AES-128</strong>, <strong>AES-256</strong> y encriptación <strong>RC4-40</strong> compatible con versiones anteriores. La selección específica del algoritmo para encriptación de 128 bits (AES o RC4) depende de la configuración y versión de QPDF.'
    },
    {
      question: '¿Cómo establecer contraseñas de apertura (contraseñas de usuario) y contraseñas de permisos (contraseñas de propietario)?',
      answer: 'Ingrese <strong>contraseña de usuario</strong> y <strong>contraseña de propietario</strong> respectivamente en la sección "Protección por Contraseña"; la herramienta actual requiere ambos para realizar la encriptación (esto podría relajarse a solo contraseña de usuario en versiones futuras).'
    },
    {
      question: '¿Admite encriptación por lotes y vista previa comparativa en tiempo real?',
      answer: 'Admite importación por lotes y adición por lotes; después de realizar la encriptación, puede realizar <strong>vista previa comparativa en tiempo real</strong> (primeras páginas de original y encriptado), y proporciona botones de descarga individual (solo se muestran después de completar la encriptación de ese elemento) y <strong>descarga por lotes ZIP</strong>.'
    }
  ],

  tutorialTitle: 'Cómo usar la herramienta de encriptación PDF en línea',
  steps: [
    {
      title: 'Agregar archivos PDF',
      description: 'Cargue mediante <strong>arrastrar y soltar</strong> o haga clic para seleccionar archivos (admite <strong>selección múltiple</strong> y <strong>adición por lotes</strong>); también puede pegar varias URL a la vez en la sección "Importación por Lotes de URLs de PDF en Línea".',
      note: 'Se recomienda primero familiarizarse con el proceso usando PDF de muestra.'
    },
    {
      title: 'Vista previa y análisis',
      description: 'La herramienta renderizará automáticamente la primera página del PDF original y renderizará la primera página del PDF encriptado para comparación después de completar la encriptación; para ver los efectos de permisos, ajuste en la sección "Control de Permisos" izquierda y vuelva a encriptar.',
      note: 'Si la vista previa falla, el archivo puede estar dañado o incompatible.'
    },
    {
      title: 'Establecer contraseñas y permisos',
      description: 'Establezca <strong>contraseña de usuario</strong> y <strong>contraseña de propietario</strong> en "Protección por Contraseña" mientras ve sugerencias de <strong>fortaleza de contraseña</strong>; configure permisos de impresión, edición, copia y rellenado de formularios en "Control de Permisos".',
      note: 'Se recomienda seleccionar AES-256 y usar contraseñas fuertes.'
    }
  ],

  successTitle: '¡Completado!',
  successContent: 'Ha dominado cómo usar la herramienta de encriptación PDF en línea para establecer contraseñas y permisos de documentos, y verificado el efecto de encriptación mediante comparación de vista previa.',

  relatedToolsTitle: 'Herramientas relacionadas que podrían interesarle',
  relatedTools: [
        {
            name: 'Combinador de PDF',
            description: 'Combina múltiples archivos PDF en un documento PDF completo, admitiendo reordenamiento de páginas entre archivos.',
            url: 'https://www.ufreetools.com/tool/merge-pdf-online'
        },
        {
            name: 'Divisor de PDF',
            description: 'Divide documentos PDF grandes en múltiples archivos PDF más pequeños, admitiendo páginas de división personalizadas.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'Convertidor de PDF a Word',
            description: 'Convierte documentos PDF a formato Word editable, preservando el diseño y formato originales.',
            url: 'https://www.ufreetools.com/tool/pdf-to-word-converter'
        },
        {
            name: 'Convertidor de PDF a Imagen',
            description: 'Convierte cada página de un documento PDF a archivos de imagen de alta calidad, admitiendo múltiples formatos de salida.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image-converter'
        }
  ],

  referencesTitle: 'Recursos de referencia',
  references: [
    { title: 'QPDF Oficial', description: 'QPDF es una poderosa herramienta de procesamiento estructural y encriptación de PDF que proporciona capacidades ricas de control de permisos.' },
    { title: 'Documentación de PDF.js', description: 'PDF.js es una biblioteca de código abierto para renderizar PDF en navegadores, adecuada para vista previa y recuperación básica de información.' },
    { title: 'Especificación de Referencia PDF de Adobe', description: 'Los documentos de referencia PDF de Adobe proporcionan detalles de especificaciones PDF y definiciones relacionadas con seguridad.' }
  ],

  coverAlt: 'Imagen de página de producto de herramienta de encriptación PDF en línea'
}