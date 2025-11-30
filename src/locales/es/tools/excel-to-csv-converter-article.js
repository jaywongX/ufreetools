export default {
    title: 'Convertidor de Excel a CSV: Guía de uso para conversión masiva de archivos Excel en línea',
    functionTitle: '¿Qué es el convertidor de Excel a CSV y para qué sirve?',
    intro: 'Nuestro <strong>convertidor de Excel a CSV</strong> es una herramienta en línea potente que puede convertir rápidamente archivos Excel (.xlsx y .xls) al formato CSV. Esta herramienta admite procesamiento por lotes de múltiples archivos, reconocimiento de múltiples hojas, delimitadores personalizados y formatos de codificación, satisfaciendo las necesidades de importación de datos de diferentes sistemas y software. Al usar nuestra <strong>herramienta en línea Excel a CSV</strong>, puede manejar fácilmente grandes cantidades de archivos de datos sin necesidad de instalar ningún software, todas las conversiones se realizan localmente en el navegador, garantizando la seguridad de los datos.',

    useCasesTitle: 'Escenarios comunes de aplicación de la conversión de Excel a CSV',
    useCases: [
        'Importar datos de Excel a sistemas de bases de datos (MySQL, PostgreSQL, etc.)',
        'Preparar datos en formato CSV para herramientas de análisis de datos (Python pandas, lenguaje R)',
        'Importar datos de usuarios o información de productos en aplicaciones web por lotes',
        'Convertir informes de Excel al formato CSV para ser utilizados por otros sistemas',
        'Procesar archivos Excel de múltiples hojas y exportarlos por separado como CSV',
        'Convertir archivos históricos de Excel por lotes para proyectos de migración de datos',
        'Convertir datos de Excel al formato CSV para control de versiones',
        'Preparar archivos de datos CSV estandarizados para interfaces API'
    ],

    logoAlt: "Vista previa del producto del convertidor de Excel a CSV",
    tipTitle: 'Consejo profesional:',
    tipContent: 'Para datos que contienen caracteres especiales o saltos de línea, se recomienda utilizar comillas dobles como calificador de texto, esto puede asegurar que no ocurran errores de formato al importar archivos CSV a otros sistemas. Para datos en chino, se recomienda usar la codificación UTF-8 BOM, para garantizar que se muestren correctamente los caracteres chinos al abrirlos en Excel.',

    conclusion: 'La herramienta de <strong>conversión de Excel a CSV</strong> es particularmente útil para analistas de datos, desarrolladores, administradores de datos y usuarios que necesitan procesar frecuentemente archivos Excel. Mediante el uso de nuestro convertidor, puede convertir rápidamente datos de Excel al formato CSV, facilitando el intercambio de datos entre diferentes sistemas y herramientas. Nuestra herramienta admite procesamiento por lotes, configuración de formato personalizada y vista previa en tiempo real, haciendo que el proceso de conversión de datos sea simple y eficiente, sin necesidad de instalar ningún software.',

    faqTitle: 'Preguntas frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de Excel admite el convertidor de Excel a CSV?',
            answer: 'Nuestra <strong>herramienta en línea Excel a CSV</strong> admite dos formatos principales de Excel: .xlsx (Office Open XML) y .xls (formato binario tradicional). La herramienta puede identificar automáticamente el formato del archivo y realizar el procesamiento correspondiente, admitiendo archivos Excel de múltiples hojas, donde puede elegir convertir todas las hojas o una hoja específica.'
        },
        {
            question: '¿El archivo CSV convertido conservará el formato de datos original?',
            answer: 'El formato CSV en sí mismo no contiene información de formato (como fuente, color, fórmulas, etc.), pero todo el contenido de los datos se conservará completamente. Las fechas, números y datos de texto se convertirán correctamente. Si una celda de Excel contiene fórmulas, el convertidor extraerá el valor calculado de las fórmulas.'
        },
        {
            question: '¿Cómo manejar datos de Excel que contienen caracteres especiales?',
            answer: 'Nuestra herramienta admite calificadores de texto personalizados (comillas dobles o simples), que pueden manejar correctamente datos que contienen comas, saltos de línea, comillas y otros caracteres especiales. Se recomienda seleccionar comillas dobles como calificador de texto al convertir datos que contienen caracteres especiales, esto puede asegurar que el formato del archivo CSV sea correcto.'
        },
        {
            question: '¿Se pueden convertir múltiples archivos Excel por lotes?',
            answer: 'Sí, nuestra <strong>herramienta de conversión por lotes de Excel a CSV</strong> admite completamente el procesamiento por lotes. Puede cargar varios archivos Excel simultáneamente, la herramienta procesará cada archivo secuencialmente y proporcionará una función de descarga por lotes al finalizar, empaquetando todos los archivos CSV convertidos en un archivo ZIP para descargar.'
        },
        {
            question: '¿Qué formatos de codificación admite el archivo CSV convertido?',
            answer: 'Nuestra herramienta admite múltiples formatos de codificación, incluyendo UTF-8, UTF-8 BOM, GBK y ANSI. El formato UTF-8 BOM es especialmente adecuado para abrir archivos CSV que contienen caracteres chinos en Excel, mientras que el formato UTF-8 es más adecuado para usar en programas. Puede elegir el formato de codificación apropiado según las necesidades del sistema de destino.'
        },
        {
            question: '¿Se pueden procesar archivos Excel cifrados o protegidos?',
            answer: 'Debido a las limitaciones del entorno del navegador, nuestra herramienta no puede procesar archivos Excel protegidos con contraseña. Si sus archivos Excel están cifrados, desencriptelos primero usando el software Excel antes de realizar la conversión. Para archivos Excel no cifrados, nuestra herramienta puede manejarlos perfectamente.'
        }
    ],

    tutorialTitle: 'Cómo usar el convertidor de Excel a CSV',
    steps: [
        {
            title: 'Subir archivos Excel',
            description: 'Primero suba los archivos Excel que desea convertir. Puede <strong>arrastrar y soltar</strong> directamente los archivos en el área de carga, o hacer clic en examinar y seleccionar los archivos desde su dispositivo. Nuestra herramienta admite formatos .xlsx y .xls, y puede cargar varios archivos simultáneamente para conversión por lotes.',
            note: 'También puede usar la función "Importar desde URL" para ingresar directamente la dirección web del archivo Excel y realizar la conversión.'
        },
        {
            title: 'Seleccionar hoja de cálculo (opcional)',
            description: 'Si sus archivos Excel contienen múltiples hojas de cálculo, puede seleccionar la hoja a convertir para cada archivo en la lista de archivos. Por defecto, la herramienta convertirá todas las hojas de cálculo, generando un archivo CSV independiente para cada hoja.',
            note: 'Para archivos Excel grandes, se recomienda primero seleccionar una sola hoja para prueba, confirmando que los resultados de conversión cumplan con las expectativas antes de procesar por lotes.'
        },
        {
            title: 'Configurar opciones de formato CSV',
            description: 'En el área de "Configuración de formato CSV", puede personalizar el delimitador (coma, punto y coma, tabulador, etc.), calificador de texto (comillas dobles, comillas simples o ninguno), final de línea (Windows/Unix/Mac) y formato de codificación (UTF-8, UTF-8 BOM, GBK, ANSI). Estas configuraciones afectarán el formato del archivo CSV convertido.',
            note: 'Para datos en chino, se recomienda usar la codificación UTF-8 BOM; para archivos que se abrirán en Excel, se recomienda usar comillas dobles como calificador de texto.'
        },
        {
            title: 'Vista previa de datos (opcional)',
            description: 'Antes de la conversión, puede hacer clic en "Vista previa de datos" para ver el contenido del archivo Excel. La función de vista previa mostrará las primeras filas de datos, ayudándole a confirmar si el formato y contenido del archivo son correctos.',
            note: 'La función de vista previa puede ayudarle a descubrir problemas de formato de datos, evitando encontrar errores después de la conversión.'
        },
        {
            title: 'Ejecutar conversión',
            description: 'Haga clic en el botón <strong>"Iniciar conversión"</strong> para comenzar a procesar los archivos. La herramienta mostrará el progreso de conversión, incluyendo el archivo actual, hoja de cálculo y número de filas que se están procesando. El proceso de conversión se realiza completamente localmente en el navegador, sin cargar los datos al servidor.',
            note: 'Para archivos grandes, la conversión puede tomar algo de tiempo, tenga paciencia. Puede ver el proceso detallado de conversión en el registro de procesamiento.'
        },
        {
            title: 'Descargar resultados de conversión',
            description: 'Una vez completada la conversión, puede hacer clic en el botón <strong>"Descargar"</strong> debajo de cada archivo CSV para guardarlo individualmente, o usar el botón <strong>"Descarga masiva"</strong> en la parte superior para empaquetar todos los archivos CSV en un archivo ZIP y descargarlo. Los nombres de archivo se generarán automáticamente según su configuración.',
            note: 'Todo el procesamiento se realiza en su navegador, por lo que sus archivos Excel nunca se cargan a ningún servidor, garantizando la privacidad y seguridad de los datos.'
        }
    ],

    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido con éxito cómo usar nuestro convertidor de Excel a CSV. Ahora puede convertir fácilmente archivos Excel al formato CSV para análisis de datos, importación a bases de datos u otros usos.',

    relatedToolsTitle: 'Herramientas relacionadas que pueden interesarle',
    relatedTools: [
        {
            name: 'Convertidor de lectura biónica',
            description: 'Convertidor gratuito en línea de lectura biónica, convierte texto en tiempo real al estilo Bionic Reading.',
            url: 'https://www.ufreetools.com/tool/bionic-reading-converter'
        },
        {
            name: 'Ajustador de imágenes',
            description: 'Ajusta imágenes a dimensiones específicas o las escala por porcentaje.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Generador de sellos',
            description: 'Crea en línea diversos tipos de imágenes de sellos, genera sellos corporativos, sellos personales y otros sellos digitales.',
            url: 'https://www.ufreetools.com/tool/seal-generator'
        },
        {
            name: 'Generador de códigos QR',
            description: 'Crea códigos QR personalizados para URL, texto, información de contacto, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],

    referencesTitle: 'Recursos de referencia',
    references: [
        {
            name: 'Especificaciones del formato de archivo CSV (RFC 4180)',
            description: 'Conozca las especificaciones de formato estándar y mejores prácticas de archivos CSV',
            url: 'https://tools.ietf.org/html/rfc4180'
        },
        {
            name: 'Estándar Office Open XML',
            description: 'Conozca las especificaciones técnicas del formato de archivo Excel .xlsx',
            url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/'
        },
        {
            name: 'Estándares de codificación de caracteres (Unicode)',
            description: 'Conozca los estándares de codificación de caracteres como UTF-8, GBK, etc.',
            url: 'https://www.unicode.org/standard/standard.html'
        }
    ]
}