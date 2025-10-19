export default {
  title: 'Herramienta de Descifrado de PDF: Solución basada en navegador para eliminar contraseñas de apertura y restricciones de permisos',
  functionTitle: '¿Qué es una herramienta de descifrado de PDF en línea y cuándo se necesita descifrar?',
  intro: 'Nuestra <strong>herramienta de descifrado de PDF en línea</strong> se basa en una pila de tecnología de código abierto puramente front-end. Admite proporcionar una <strong>contraseña de apertura (contraseña de usuario)</strong> para PDF cifrados para realizar el descifrado, eliminando restricciones de permisos como impresión, edición, copia y rellenado de formularios. Admite carga por arrastrar y soltar, selección múltiple tradicional, importación por lotes de URL y adición por lotes, proporcionando <strong>vista previa comparativa en tiempo real</strong> y análisis básico para ayudarlo a verificar rápidamente el efecto de descifrado. Una vez completado el descifrado, puede <span style="font-weight:bold">descargar individualmente</span> o <span style="font-weight:bold">descargar por lotes como ZIP</span>. Todas las operaciones se realizan localmente en el navegador sin cargar al servidor, protegiendo la privacidad y garantizando eficiencia.',

  useCasesTitle: 'Escenarios Comunes de Aplicación para el Descifrado de PDF',
  useCases: [
    'Eliminar restricciones de permisos de documentos compartidos empresariales para edición interna',
    'Realizar descifrado conforme para documentos con configuraciones de permisos de propietario olvidadas',
    'Restaurar capacidades de impresión y copia para corrección y reutilización de contenido',
    'Eliminar restricciones de baja resolución de materiales de capacitación o informes para mejorar la calidad de salida',
    'Descifrar por lotes múltiples PDF y procesarlos uniformemente',
    'Descifrar rápidamente y obtener vista previa de efectos de descifrado en dispositivos móviles',
    'Descifrado local en navegador sin cargar para proteger la privacidad'
  ],

  tipTitle: 'Consejos Profesionales:',
  tipContent: 'Se recomienda descifrar solo PDF para los cuales tenga autorización de uso legítima; para un mejor rendimiento de búsqueda, puede completar títulos y palabras clave en metadatos y mantener estrategias de denominación consistentes (la herramienta actual no modifica metadatos de PDF).',

  conclusion: 'La <strong>herramienta de descifrado de PDF en línea</strong> puede eliminar rápidamente restricciones de permisos y restaurar contenido en el navegador, adecuada para varios escenarios como empresas, instituciones educativas y usuarios individuales. Al proporcionar la contraseña de apertura correcta y realizar el descifrado, puede mejorar la usabilidad del documento dentro de los límites de cumplimiento.',

  faqTitle: 'Preguntas Frecuentes (FAQ)',
  faqs: [
    {
      question: '¿Cómo funciona la herramienta de descifrado de PDF en línea?',
      answer: 'Esta herramienta se basa en las capacidades de descifrado de QPDF. Después de proporcionar la <strong>contraseña de apertura</strong>, realiza la operación <strong>--decrypt</strong> para eliminar las restricciones de permisos del documento y generar un nuevo PDF utilizable.'
    },
    {
      question: '¿Admite descifrado por lotes y vista previa comparativa en tiempo real?',
      answer: 'Admite importación por lotes y adición por lotes; después de realizar el descifrado, puede realizar <strong>vista previa comparativa en tiempo real</strong> (primeras páginas originales y descifradas), y proporciona botones de descarga individual y <strong>descarga por lotes ZIP</strong>.'
    },
    {
      question: '¿Se puede usar esta herramienta si el PDF no está cifrado?',
      answer: 'Sí. Para PDF no cifrados, la herramienta generará directamente un archivo consistente con el contenido original para manejo uniforme del proceso.'
    }
  ],

  tutorialTitle: 'Cómo Usar la Herramienta de Descifrado de PDF en Línea',
  steps: [
    {
      title: 'Agregar Archivos PDF',
      description: 'Cargue mediante <strong>arrastrar y soltar</strong> o haga clic para seleccionar archivos (admite <strong>selección múltiple</strong> y <strong>adición por lotes</strong>); también puede pegar varias URL a la vez en la sección "Importación por Lotes de URL de PDF en Línea".',
      note: 'Se recomienda familiarizarse primero con el proceso usando PDF de muestra.'
    },
    {
      title: 'Proporcionar Contraseña de Apertura (si es necesario)',
      description: 'Si el PDF está cifrado, por favor ingrese la <strong>contraseña de apertura (contraseña de usuario)</strong> en "Contraseña de Descifrado" para realizar el descifrado; si no está cifrado, puede ejecutar directamente.',
      note: 'Contraseñas incorrectas causarán fallas en el descifrado o en la vista previa.'
    },
    {
      title: 'Realizar Descifrado y Vista Previa',
      description: 'Después de hacer clic en "Realizar Descifrado", se genera un nuevo PDF, y las primeras páginas originales y descifradas se comparan en el área de vista previa derecha.',
      note: 'Si la vista previa falla, el archivo puede estar dañado o incompatible.'
    }
  ],

  successTitle: '¡Completado!',
  successContent: 'Ha dominado cómo usar la herramienta de descifrado de PDF en línea para eliminar restricciones de permisos de documentos y verificar efectos de descifrado.',

  relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarte',
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

  referencesTitle: 'Recursos de Referencia',
  references: [
    { title: 'QPDF Oficial', description: 'QPDF proporciona potentes capacidades de procesamiento estructural de PDF, incluyendo cifrado y descifrado.' },
    { title: 'Documentación de PDF.js', description: 'PDF.js es una biblioteca de código abierto para renderizar PDF en navegadores, adecuada para vista previa y recuperación básica de información.' },
    { title: 'Especificación de Referencia PDF de Adobe', description: 'Los documentos de referencia PDF de Adobe proporcionan detalles de especificaciones PDF y definiciones relacionadas con seguridad.' }
  ],

  coverAlt: 'Imagen de Página de Producto de Herramienta de Descifrado de PDF en Línea'
}