export default {
    title: 'Guía del Rotador de PDF: Herramienta de Rotación de Páginas PDF en Línea',
    functionTitle: '¿Qué es un Rotador de PDF y sus Usos?',
    intro: 'Nuestro <strong>Rotador de PDF</strong> es una poderosa herramienta en línea que puede rotar fácilmente la orientación de las páginas de archivos PDF. Ya sea que necesite cambiar páginas horizontales a verticales, o ajustar por lotes la orientación de páginas de múltiples archivos PDF, nuestra <strong>herramienta de rotación de PDF en línea</strong> puede manejarlo de manera rápida y eficiente. Esta herramienta soporta ángulos de rotación de 90°, 180° y 270°, y puede realizar operaciones de rotación en páginas individuales, múltiples o documentos completos, todo procesado completamente en el navegador para proteger la privacidad de sus archivos.',
    
    useCasesTitle: 'Casos de Uso Comunes para la Rotación de PDF',
    useCases: [
        'Documentos escaneados con orientación incorrecta, necesitan corrección por lotes',
        'Convertir páginas horizontales de PDF a verticales para facilitar la lectura e impresión',
        'Procesar por lotes múltiples archivos PDF para unificar la orientación de páginas',
        'Manejar contratos, facturas y otros documentos escaneados para corregir la orientación',
        'Ajustar la orientación de páginas de libros electrónicos PDF para mejorar la experiencia de lectura',
        'Procesar PDF exportados de teléfonos o escáneres para corregir automáticamente la orientación',
        'Preparar archivos PDF para impresión asegurando la correcta orientación de páginas',
        'Organizar biblioteca de documentos PDF, unificar la orientación de páginas de todos los archivos'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Al procesar una gran cantidad de archivos PDF, se recomienda usar primero la función de vista previa de página única para verificar el efecto de rotación. Confirme que no hay problemas antes de proceder con el procesamiento por lotes. Esto puede evitar operaciones repetitivas y mejorar la eficiencia del trabajo.',
    
    conclusion: 'La herramienta de <strong>rotación de páginas PDF</strong> es particularmente útil para trabajadores de oficina, estudiantes, bibliotecarios y cualquier usuario que necesite procesar documentos PDF. Al usar nuestro rotador de PDF, puede corregir rápidamente problemas de orientación con documentos escaneados, procesar múltiples archivos por lotes, y todas las operaciones se completan localmente en su navegador sin subir archivos a ningún servidor, garantizando la seguridad de sus documentos. Nuestra herramienta hace que la rotación de PDF sea simple y eficiente, sin necesidad de instalación de software.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿La rotación de PDF afecta la calidad del archivo?',
            answer: 'No, nuestra <strong>herramienta de rotación de PDF en línea</strong> usa la biblioteca PDF.js para el procesamiento de rotación, manteniendo la calidad y el formato del archivo original. Las operaciones de rotación solo cambian la dirección de visualización de la página, sin comprimir ni reducir la calidad del PDF. Todo el texto, imágenes y gráficos vectoriales mantienen su claridad original.'
        },
        {
            question: '¿Puedo rotar múltiples archivos PDF simultáneamente?',
            answer: 'Sí, nuestra herramienta soporta el procesamiento por lotes de múltiples archivos PDF. Puede cargar múltiples archivos PDF a la vez, luego establecer diferentes ángulos de rotación y rangos de páginas para cada archivo. Después del procesamiento, puede descargar cada archivo individualmente, o usar la función de descarga por lotes para empaquetar todos los PDF rotados en un archivo ZIP.'
        },
        {
            question: '¿Cómo roto solo ciertas páginas de un PDF?',
            answer: 'Nuestra herramienta proporciona funcionalidad de selección de páginas flexible. Puede elegir "Todas las Páginas" para rotar todo el documento, o seleccionar "Seleccionar Páginas" y especificar un rango de páginas (ej. de la página 3 a la página 10). De esta manera, puede rotar solo las páginas que necesitan ajuste mientras mantiene otras páginas sin cambios.'
        },
        {
            question: '¿Qué ángulos de rotación son compatibles?',
            answer: 'Nuestro <strong>Rotador de PDF</strong> soporta tres ángulos de rotación: 90° en sentido horario, 180° y 90° en sentido antihorario (equivalente a 270° en sentido horario). Estos ángulos son suficientes para manejar la mayoría de problemas comunes de orientación de páginas. Si se necesitan múltiples rotaciones, puede aplicar operaciones de rotación consecutivamente.'
        },
        {
            question: '¿Cambiará el tamaño del archivo PDF rotado?',
            answer: 'El tamaño del archivo puede cambiar ligeramente, dependiendo de la estructura interna del PDF. Sin embargo, el cambio es generalmente mínimo y no afectará significativamente el tamaño del archivo. Nuestra herramienta intenta mantener la configuración de compresión y estructura del archivo original, asegurando que el tamaño del archivo permanezca cercano al original.'
        },
        {
            question: '¿Se subirán mis archivos PDF a un servidor?',
            answer: 'No, todo el procesamiento se completa localmente en su navegador. Sus archivos PDF no se subirán a ningún servidor, garantizando la privacidad y seguridad de sus documentos. Esta es una herramienta puramente frontend que funciona completamente en su dispositivo.'
        },
        {
            question: '¿Puedo procesar archivos PDF cifrados?',
            answer: 'Si el archivo PDF está protegido con contraseña, necesita ingresar la contraseña para desbloquear el archivo antes de realizar operaciones de rotación. Para archivos PDF sin protección de contraseña, pueden cargarse y procesarse directamente.'
        },
        {
            question: '¿Cuánto tiempo tarda en procesar archivos PDF grandes?',
            answer: 'El tiempo de procesamiento depende del tamaño y número de páginas del archivo PDF. Para la mayoría de archivos PDF comunes (menos de 50MB, menos de 100 páginas), el procesamiento generalmente se completa en unos segundos. Para archivos muy grandes, puede tardar un poco más, pero todo el procesamiento se hace localmente y no se ve afectado por la velocidad de red.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar el Rotador de PDF',
    steps: [
        {
            title: 'Cargar Archivos PDF',
            description: 'Primero, cargue los archivos PDF que desea rotar. Puede directamente <strong>arrastrar y soltar</strong> los archivos al área de carga, o hacer clic para navegar y seleccionar archivos de su dispositivo. Nuestra herramienta soporta formatos PDF estándar, y puede cargar múltiples archivos para procesamiento por lotes.',
            note: 'El tamaño de archivo soportado depende del rendimiento de su navegador y dispositivo; se recomienda que los archivos individuales no excedan 100MB.'
        },
        {
            title: 'Vista Previa de Páginas PDF',
            description: 'Después de cargar, puede ver la primera página del PDF en el área de vista previa. Use los botones de navegación de páginas para navegar todas las páginas y entender el contenido del documento. La función de vista previa le ayuda a determinar qué páginas necesitan rotación y en qué ángulo.',
            note: 'Haga clic en el área de vista previa para ampliar detalles de la página; puede hacer zoom usando la rueda del mouse.'
        },
        {
            title: 'Seleccionar Ángulo de Rotación',
            description: 'Elija el ángulo deseado de las opciones de rotación: <strong>90° en sentido horario</strong>, <strong>180°</strong> o <strong>90° en sentido antihorario</strong>. Puede establecer diferentes ángulos de rotación para cada archivo PDF.',
            note: 'Si necesita rotar 360° (volver a la dirección original), puede elegir rotación 180° dos veces, o elegir 90° en sentido antihorario cuatro veces.'
        },
        {
            title: 'Seleccionar Rango de Páginas',
            description: 'Elija el rango de páginas a rotar. Si selecciona "Todas las Páginas", todas las páginas del documento PDF completo se rotarán. Si selecciona "Seleccionar Páginas", puede especificar las páginas de inicio y fin para rotar solo páginas dentro del rango especificado.',
            note: 'La numeración de páginas comienza desde 1, por ejemplo "de la página 1 a la página 5" significa rotar las primeras 5 páginas.'
        },
        {
            title: 'Ejecutar Operación de Rotación',
            description: 'Haga clic en el botón <strong>"Rotar PDF"</strong> para comenzar el procesamiento. La herramienta procesará sus archivos PDF en el navegador, rotando las páginas especificadas. Se mostrará un aviso de progreso durante el procesamiento, y los PDF rotados aparecerán en el área de salida después de que se complete el procesamiento.',
            note: 'El tiempo de procesamiento depende del tamaño y número de páginas del archivo; espere pacientemente a que se complete el procesamiento.'
        },
        {
            title: 'Vista Previa y Descarga de Resultados',
            description: 'Después de que se complete el procesamiento, puede ver el PDF rotado en el área de salida. Use la navegación de páginas para ver todas las páginas y confirmar que el efecto de rotación cumple con sus expectativas. Una vez confirmado, haga clic en el botón <strong>"Descargar"</strong> para guardar archivos individuales, o use el botón <strong>"Descarga por Lotes"</strong> para empaquetar todos los PDF procesados en un archivo ZIP para descargar.',
            note: 'Todo el procesamiento se hace en su navegador, por lo que sus archivos PDF nunca se suben a ningún servidor, garantizando privacidad y seguridad.'
        }
    ],
    
    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido exitosamente cómo usar nuestra herramienta Rotador de PDF. Ahora puede rotar fácilmente la orientación de páginas de archivos PDF, procesar múltiples archivos por lotes, y todas las operaciones se completan localmente para proteger la seguridad de sus documentos.',
    
    relatedToolsTitle: 'Herramientas Relacionadas que Le Pueden Interesar',
    relatedTools: [
        {
            name: 'Combinador de PDF',
            description: 'Combinar múltiples archivos PDF en un documento para facilitar la gestión y el intercambio.',
            url: 'https://www.ufreetools.com/tool/pdf-merger'
        },
        {
            name: 'Divisor de PDF',
            description: 'Dividir un archivo PDF en múltiples documentos PDF independientes.',
            url: 'https://www.ufreetools.com/tool/pdf-splitter'
        },
        {
            name: 'Compresor de PDF',
            description: 'Reducir el tamaño del archivo PDF para facilitar el almacenamiento y la transmisión.',
            url: 'https://www.ufreetools.com/tool/pdf-compressor'
        },
        {
            name: 'PDF a Imagen',
            description: 'Convertir páginas PDF a formatos de imagen, soportando PNG, JPG y otros formatos.',
            url: 'https://www.ufreetools.com/tool/pdf-to-image'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Especificación del Formato PDF',
            description: 'Aprenda sobre especificaciones técnicas y estándares del formato de archivo PDF',
            url: 'https://www.iso.org/standard/51502.html'
        },
        {
            name: 'Documentación Oficial de PDF.js',
            description: 'Biblioteca PDF.js desarrollada por Mozilla para renderizar PDFs en navegadores',
            url: 'https://mozilla.github.io/pdf.js/'
        },
        {
            name: 'Mejores Prácticas de Gestión de Documentos Digitales',
            description: 'Pautas sobre cómo gestionar y procesar eficazmente documentos digitales',
            url: 'https://es.wikipedia.org/wiki/Sistema_de_gestión_documental'
        }
    ]
}
