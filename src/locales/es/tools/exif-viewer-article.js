export default {
    title: 'Guía del visor EXIF en línea: Herramienta de extracción de metadatos de imágenes',
    imageAlt: 'Visor EXIF en línea - Herramienta de extracción de metadatos de imágenes',
    functionTitle: '¿Qué es el visor EXIF en línea y para qué sirve?',
    intro: 'Nuestro <strong>visor EXIF en línea</strong> es una herramienta potente de extracción de metadatos de imágenes que puede leer y analizar rápidamente la información EXIF (Formato de archivo de imagen intercambiable) incrustada en las imágenes. Los datos EXIF contienen metadatos ricos como parámetros de disparo, información de cámara, ubicación GPS, etc., que son valiosos para fotógrafos, diseñadores, investigadores y usuarios generales. Con nuestro <strong>visor de información EXIF</strong>, puede ver información de metadatos completa de imágenes directamente en su navegador sin instalar ningún software. Todo el procesamiento se realiza localmente, garantizando su privacidad y seguridad.',
    
    useCasesTitle: 'Escenarios comunes de aplicación del visor EXIF',
    useCases: [
        'Los fotógrafos ven y analizan los parámetros de disparo para aprender técnicas excelentes de fotografía',
        'Verificar la autenticidad y fuente de las imágenes, comprobar la información de hora y lugar de disparo',
        'Organizar y archivar fotos, clasificar y organizar automáticamente según la información EXIF',
        'Etiquetado geográfico y seguimiento de ubicación, ver coordenadas GPS y lugares de disparo de fotos',
        'Análisis de rendimiento de cámara y objetivo, comparar efectos de disparo de diferentes dispositivos',
        'Protección de derechos de autor y recopilación de evidencia, extraer información de disparo original de imágenes',
        'Referencia para el posprocesamiento de fotos, comprender los parámetros de disparo originales para un ajuste preciso',
        'Registros de viaje y organización de recuerdos, revisar lugares de disparo a través de información GPS'
    ],
    
    tipTitle: 'Consejo profesional:',
    tipContent: 'La mayoría de las plataformas de redes sociales (como WeChat, Weibo) eliminan automáticamente los datos EXIF al cargar imágenes para proteger la privacidad. Si necesita ver la información EXIF completa, utilice los archivos de imagen originales no procesados.',
    
    conclusion: 'La herramienta de <strong>visualización de metadatos EXIF</strong> es particularmente útil para fotógrafos, diseñadores, investigadores y cualquier persona que necesite comprender información detallada de imágenes. Al usar nuestro visor EXIF, puede obtener información profunda sobre el contexto de las imágenes, verificar la autenticidad o simplemente satisfacer su curiosidad sobre la información de las imágenes. Nuestra herramienta admite múltiples formatos de imagen, incluidos JPEG, HEIC, WebP, PNG y algunos formatos RAW y TIFF, haciendo que este proceso sea simple y eficiente sin instalar ningún software.',
    
    faqTitle: 'Preguntas frecuentes',
    faqs: [
        {
            question: '¿Qué son los datos EXIF?',
            answer: 'EXIF (Formato de archivo de imagen intercambiable) es un estándar para almacenar información de metadatos de fotografías digitales. Esta información incluye hora de disparo, modelo de cámara, información de objetivo, apertura, velocidad de obturador, sensibilidad ISO, ubicación GPS, etc. Cuando toma fotos con una cámara digital o un teléfono móvil, esta información se incrusta automáticamente en el archivo de imagen. Usando nuestro <strong>visor de datos EXIF en línea</strong>, puede leer y analizar fácilmente esta información.'
        },
        {
            question: '¿Ver la información EXIF filtrará mi privacidad?',
            answer: 'No. Nuestra herramienta se ejecuta completamente localmente en su navegador. Todo el procesamiento de imágenes se realiza en su dispositivo y no se carga a ningún servidor. Esto significa que sus imágenes y datos EXIF nunca salen de su dispositivo, garantizando completa privacidad y seguridad.'
        },
        {
            question: '¿Por qué algunas imágenes no tienen información EXIF?',
            answer: 'Las razones por las que algunas imágenes pueden no tener datos EXIF incluyen: información EXIF eliminada después del procesamiento con software de edición, imágenes de plataformas de redes sociales (estas plataformas generalmente eliminan los datos EXIF), formatos de imagen que no admiten EXIF (como ciertos archivos PNG), o imágenes obtenidas de capturas de pantalla web. Usando nuestra <strong>herramienta de extracción de metadatos EXIF</strong> puede verificar rápidamente si las imágenes contienen información EXIF.'
        },
        {
            question: '¿Qué formatos de imagen son compatibles?',
            answer: 'Nuestra herramienta admite múltiples formatos de imagen, incluidos JPEG (compatibilidad EXIF más completa), HEIC (formato de foto de iPhone), WebP, PNG (compatibilidad limitada), TIFF y algunos formatos RAW (como CR2, NEF, ARW, etc.). Para formatos RAW, el nivel de compatibilidad depende del formato específico y la compatibilidad del navegador.'
        },
        {
            question: '¿Cómo se muestra la información GPS?',
            answer: 'Si la imagen contiene información de coordenadas GPS, nuestra herramienta mostrará coordenadas de latitud y longitud (compatible con formato de grados-minutos-segundos y formato de grados decimales) y mostrará la ubicación de disparo en un mapa integrado. También puede usar la función de geocodificación inversa para convertir coordenadas GPS en nombres de ubicaciones geográficas reales (como ciudad, calle, etc.).'
        },
        {
            question: '¿Se pueden procesar múltiples imágenes en lotes?',
            answer: 'Sí, nuestra herramienta admite procesamiento por lotes. Puede cargar múltiples imágenes a la vez, y la información EXIF de cada imagen se mostrará por separado. También puede usar la función de exportación por lotes para exportar la información EXIF de todas las imágenes en formato JSON o CSV para análisis y procesamiento posteriores.'
        },
        {
            question: '¿Qué formatos de datos son compatibles para exportación?',
            answer: 'Admitimos múltiples formatos de exportación: formato JSON (datos estructurados completos adecuados para procesamiento de programas), formato CSV (forma tabular adecuada para abrir en Excel y otros softwares), informe resumen (informe de texto conciso adecuado para lectura) y gráficos de visualización (mostrar parámetros clave en forma de gráfico adecuada para análisis).'
        }
    ],
    
    tutorialTitle: 'Cómo usar el visor EXIF en línea',
    steps: [
        {
            title: 'Suba sus imágenes',
            description: 'Primero, cargue las imágenes cuya información EXIF desea ver. Puede <strong>arrastrar y soltar</strong> archivos directamente en el área de carga, o hacer clic en explorar y seleccionar archivos de su dispositivo. Nuestra herramienta admite múltiples formatos incluyendo JPEG, HEIC, WebP, PNG, RAW y TIFF.',
            note: 'Puede cargar múltiples imágenes a la vez para procesamiento por lotes.'
        },
        {
            title: 'Ver información EXIF',
            description: 'Después de cargar, la herramienta leerá automáticamente los datos EXIF de las imágenes. Si las imágenes contienen información EXIF, verá metadatos detallados, incluyendo información básica de disparo (marca/modelo de cámara, hora de disparo, tamaño de archivo, etc.), parámetros de disparo (apertura, obturador, ISO, etc.), ubicación GPS y metadatos avanzados.',
            note: 'Si las imágenes no contienen datos EXIF, la herramienta mostrará la información de aviso correspondiente.'
        },
        {
            title: 'Ver ubicación GPS',
            description: 'Si las imágenes contienen información de coordenadas GPS, puede ver coordenadas de latitud y longitud (mostradas en formato de grados-minutos-segundos) en la sección de información GPS y ver la ubicación de disparo en un mapa integrado. Haga clic en el botón "Geocodificación inversa" para convertir coordenadas GPS en nombres de ubicaciones geográficas reales.',
            note: 'La visualización del mapa requiere conexión a internet, y la primera carga puede tardar un poco.'
        },
        {
            title: 'Exportar datos EXIF',
            description: 'Puede elegir múltiples formas de exportar información EXIF: haga clic en el botón "Exportar JSON" para descargar datos estructurados completos; haga clic en el botón "Exportar CSV" para descargar datos en formato tabular; haga clic en "Exportar informe resumen" para obtener un informe de texto conciso; o haga clic en "Exportar gráficos de visualización" para ver la visualización de parámetros.',
            note: 'Para el procesamiento por lotes de imágenes, puede usar la función "Descarga por lotes" para exportar todos los datos a la vez.'
        },
        {
            title: 'Analizar parámetros de disparo',
            description: 'En la sección de parámetros de disparo, puede ver información como valor de apertura, velocidad de obturador (visualización legible, como 1/125 seg), sensibilidad ISO, distancia focal, etc. Estos parámetros son muy útiles para aprender técnicas de fotografía, analizar la calidad de las fotos o verificar las condiciones de disparo.',
            note: 'La herramienta convertirá automáticamente la velocidad de obturador a un formato fácil de leer, como "1/125 seg" en lugar de forma decimal.'
        },
        {
            title: 'Guardar y gestionar resultados',
            description: 'Una vez completado el procesamiento, puede descargar la información EXIF de cada imagen individualmente, o usar la función de descarga por lotes para empaquetar y descargar todos los datos. Todos los archivos exportados se guardan localmente en su dispositivo, garantizando la seguridad de los datos.',
            note: 'Se recomienda limpiar regularmente la caché del navegador para liberar espacio de almacenamiento.'
        }
    ],
    
    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido con éxito cómo usar nuestro visor EXIF en línea. Ahora puede ver y analizar fácilmente la información de metadatos de las imágenes, obteniendo información profunda sobre el contexto de disparo y la configuración de parámetros de cada foto.',
    
    relatedToolsTitle: 'Herramientas relacionadas que pueden interesarle',
    relatedTools: [
        {
            name: 'Compresor de imágenes',
            description: 'Reducir el tamaño del archivo de imagen sin pérdida significativa de calidad.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Redimensionador de imágenes',
            description: 'Cambiar el tamaño de las imágenes a dimensiones específicas o escalar por porcentaje.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Inversor de colores de imagen',
            description: 'Herramienta en línea para invertir los colores de las imágenes y crear efectos negativos.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'Generador de códigos QR',
            description: 'Crear códigos QR personalizados para URL, texto, información de contacto, etc.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: 'Recursos de referencia',
    references: [
        {
            name: 'Especificación estándar EXIF',
            description: 'Conozca los estándares oficiales y especificaciones técnicas del formato de datos EXIF',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: 'Metadatos de imagen digital',
            description: 'Explicación detallada de metadatos de imagen e información EXIF',
            url: 'https://en.wikipedia.org/wiki/Exif'
        },
        {
            name: 'Sistema de coordenadas GPS',
            description: 'Conozca los sistemas de coordenadas GPS y la tecnología de geolocalización',
            url: 'https://en.wikipedia.org/wiki/Global_Positioning_System'
        }
    ]
}