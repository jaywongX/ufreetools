export default {
    title: 'Convertidor de CSV a Excel: Guía de Conversión por Lotes de Alta Fidelidad y Exportación Multi-Tabla',
    functionTitle: '¿Cómo Resuelve el Convertidor de CSV a Excel los Desafíos de Interacción de Datos entre Sistemas?',
    intro: '<p>El Convertidor de CSV a Excel está diseñado para escenarios de análisis de datos, integración de sistemas e importación por lotes, permitiendo la conversión directa de datos de texto como CSV, TSV y TXT a libros de Excel en el navegador. La herramienta admite detección automática de codificación, detección inteligente de delimitadores, procesamiento por lotes de múltiples archivos, registro en tiempo real y vista previa de datos, permitiendo a los equipos generar rápidamente resultados .xlsx compatibles sin instalar software de escritorio.</p>',
    useCasesTitle: 'Escenarios de Aplicación Típicos',
    useCases: [
        'Convertir datos de pedidos CSV exportados de plataformas de comercio electrónico a informes de Excel para revisión financiera y archivo',
        'Convertir por lotes archivos TSV generados por sistemas de recolección de registros a archivos de Excel de múltiples hojas para análisis de herramientas de BI',
        'Organizar datos históricos de CSV en plantillas de Excel antes del lanzamiento de sistemas CRM o ERP para importación por lotes',
        'Preparar archivos de Excel con formato para colaboración entre departamentos, permitiendo que miembros no técnicos vean datos de forma segura',
        'Generar archivos adjuntos de Excel más legibles para entrega de datos o licitaciones para cumplir con requisitos de auditoría',
        'Convertir por lotes CSV devueltos por APIs a Excel, combinando con plantillas de gráficos o macros para análisis rápido',
        'Organizar registros CSV de dispositivos IoT en documentos de Excel de múltiples hojas según el tipo de dispositivo',
        'Convertir datos de CSV de ejemplo a archivos de práctica de Excel con un solo clic en escenarios de capacitación o enseñanza'
    ],
    logoAlt: "Vista Previa del Producto Convertidor de CSV a Excel",
    tipTitle: 'Consejo Profesional:',
    conclusion: '<p>Basado en implementación puramente front-end, el <strong>Convertidor de CSV a Excel</strong> permite a ingenieros de datos y usuarios comerciales completar conversión por lotes, nomenclatura estandarizada y salida de múltiples hojas sin cargar archivos sensibles. Combinado con registro y detección de codificación, minimiza fallas de importación causadas por inconsistencias de formato. Para limpieza o división adicional de datos, puede usar el <a href="https://www.ufreetools.com/tool/excel-to-csv-converter" target="_blank">Convertidor de Excel a CSV</a> para conversión bidireccional; para entender estándares CSV, consulte <a href="https://tools.ietf.org/html/rfc4180" target="_blank" rel="noopener noreferrer">RFC 4180</a> para especificaciones autoritativas.</p>',
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué delimitadores y calificadores de texto admite el Convertidor de CSV a Excel?',
            answer: '<p>La herramienta tiene opciones integradas de coma, punto y coma, tabulador, barra vertical y delimitadores personalizados, y admite CSV complejos con comillas dobles, simples o sin calificadores. Si selecciona "Detección Automática", el sistema calculará la combinación de delimitadores más probable basada en las primeras filas de datos para asegurar un conteo de columnas preciso en el Excel convertido.</p>'
        },
        {
            question: '¿Cómo manejar archivos CSV con diferentes codificaciones?',
            answer: '<p>Proporcionamos detección automática de codificación y permitimos especificación manual de codificaciones comunes como UTF-8, UTF-8 BOM, UTF-16 LE y GBK. Si encuentra codificaciones especiales, puede convertir a UTF-8 en herramientas externas primero antes de cargar para asegurar que los caracteres chinos o símbolos en Excel no aparezcan distorsionados.</p>'
        },
        {
            question: '¿Se pueden fusionar múltiples archivos CSV en el mismo libro de Excel?',
            answer: '<p>Sí. Marque "Combinar en un Solo Archivo de Excel" en la "Configuración del Libro de Excel", y el sistema generará una hoja de trabajo para cada CSV. Los nombres de hoja pueden basarse en nombres de archivo o prefijos personalizados, y se pueden agregar marcas de tiempo para fácil seguimiento de fuentes.</p>'
        },
        {
            question: '¿Mantendrá el Excel convertido los encabezados y líneas en blanco del CSV?',
            answer: '<p>Por defecto, se mantiene la primera fila como encabezado, y se preservan completamente las líneas en blanco, celdas vacías y el orden de datos originales. Para ignorar encabezados, puede desactivar la opción "La Primera Fila Contiene Encabezado" en configuraciones y reejecutar la conversión, y el sistema generará Excel en modo de datos puros.</p>'
        },
        {
            question: '¿Cómo ver el proceso y solucionar errores durante la conversión por lotes?',
            answer: '<p>Cada conversión genera un registro de proceso que registra archivos analizados, hojas de trabajo creadas, estadísticas de filas/columnas y posibles errores. Puede expandir el panel de registro o hacer clic en "Copiar Registro" para compartir con el equipo, facilitando la solución de problemas antes del despliegue de código o entrega de datos.</p>'
        }
    ],
    tutorialTitle: 'Guía de Operación',
    steps: [
        {
            title: 'Subir o Importar Archivos CSV',
            description: 'Haga clic en el botón de carga o arrastre archivos al área designada, admitiendo procesamiento por lotes de múltiples archivos. También puede pegar enlaces CSV públicos en "Importar desde URL", y el sistema los obtendrá automáticamente y los agregará a la cola.',
            note: 'Se recomienda mantener archivos individuales por debajo de 50MB. Los archivos grandes se pueden dividir y convertir por lotes.'
        },
        {
            title: 'Verificar Resultados de Detección Automática',
            description: 'El sistema intentará detectar codificación y delimitador, y mostrará las primeras filas de datos brutos. Si los resultados de detección no coinciden con las expectativas, puede seleccionar manualmente codificación o delimitador para asegurar conteo de columnas correcto y visualización adecuada de caracteres chinos.',
            note: 'Si es necesario, convierta la codificación en herramientas de terceros antes de cargar nuevamente.'
        },
        {
            title: 'Configurar Opciones de Análisis CSV',
            description: 'Ajuste delimitador, calificador de texto, fin de línea y opciones de encabezado en "Configuración de Análisis CSV". CSV generado por diferentes idiomas o sistemas varía considerablemente, por lo que se recomienda configurar según las reglas de exportación del sistema fuente.',
            note: 'Mantener "La Primera Fila Contiene Encabezado" generará filas de encabezado en Excel.'
        },
        {
            title: 'Establecer Política del Libro de Excel',
            description: 'Personalice el nombre del libro, reglas de nomenclatura de hojas y si combinar en un Excel. Para escenarios de agregación de múltiples archivos, habilite "Combinar en un Solo Archivo de Excel" y agregue marcas de tiempo para fácil seguimiento posterior.',
            note: 'Si se cancela la combinación, la herramienta generará un archivo .xlsx independiente para cada CSV.'
        },
        {
            title: 'Ejecutar Conversión y Monitorear Registros',
            description: 'Después de hacer clic en "Convertir a Excel", el sistema mostrará una barra de progreso en tiempo real y registrará pasos de análisis, creación de tablas, estadísticas, etc. en el registro. Los errores detendrán el procesamiento del archivo actual y mostrarán detalles en el registro.',
            note: 'Los registros admiten expansión, colapso y copia con un solo clic para solución de problemas colaborativa.'
        },
        {
            title: 'Descargar Excel o Paquete por Lotes',
            description: 'Una vez completada la conversión, puede descargar archivos de Excel individualmente, o hacer clic en "Descarga por Lotes (ZIP)" para obtener todos los resultados a la vez. La lista mostrará nombres de hojas de trabajo, tamaños de archivo y fragmentos de vista previa para cada libro para verificación rápida.',
            note: 'Todas las operaciones se completan en el navegador local sin cargar al servidor, asegurando seguridad de datos.'
        }
    ],
    successTitle: 'Conversión Completa',
    successContent: '¡Felicidades! Ha aprendido a usar el Convertidor de CSV a Excel para organizar rápidamente datos de texto dispersos en resultados de Excel estructurados para análisis, informes o integración de sistemas.',
    relatedToolsTitle: 'Herramientas Relacionadas Recomendadas',
    relatedTools: [
        {
            name: 'Convertidor de Excel a CSV',
            description: 'Exporta por lotes libros de Excel a CSV, manteniendo codificación y delimitadores consistentes.',
            url: 'https://www.ufreetools.com/tool/excel-to-csv-converter'
        },
        {
            name: 'Redimensionador de Imágenes',
            description: 'Redimensiona imágenes a dimensiones específicas o escala por porcentaje.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Generador de Sellos',
            description: 'Crea imágenes de sellos varias en línea, generando sellos corporativos, personales y otros sellos digitales.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Generador de Códigos QR',
            description: 'Crea códigos QR personalizados para URLs, texto, información de contacto, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'RFC 4180 - Estándar CSV',
            description: 'Conozca las especificaciones formales y convenciones de campo del formato de archivo CSV.',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Especificación Microsoft Excel Open XML',
            description: 'Obtenga comprensión profunda de la estructura de archivos .xlsx y requisitos de compatibilidad.',
            url: 'https://learn.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/' 
        },
        {
            name: 'Estándar de Codificación WHATWG',
            description: 'Lista de codificaciones de texto compatibles con navegadores y detalles de implementación.',
            url: 'https://encoding.spec.whatwg.org/'
        }
    ]
}