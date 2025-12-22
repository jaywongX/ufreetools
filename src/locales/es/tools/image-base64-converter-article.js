export default {
    title: 'Convertidor de Imágenes Base64: Guía de Herramienta Online de Codificación y Decodificación de Imágenes',
    functionTitle: '¿Qué es un Convertidor de Imágenes Base64 y sus Usos?',
    intro: 'Nuestro <strong>Convertidor de Imágenes Base64</strong> es una poderosa herramienta online pura de frontend que implementa fácilmente conversión bidireccional entre imágenes y codificación Base64. Esta herramienta soporta múltiples formatos de imagen incluyendo PNG, JPEG, WebP, GIF y SVG, con capacidades de control de calidad y procesamiento por lotes. Usando nuestra <strong>herramienta online de imagen a Base64</strong>, puedes convertir rápidamente imágenes a codificación Base64 para incrustar en web, transmisión API o almacenamiento de datos, y también restaurar codificación Base64 a archivos de imagen. Todo el procesamiento se completa localmente en el navegador sin subir a servidores, asegurando tu privacidad y seguridad de datos.',
    
    useCasesTitle: 'Escenarios de Aplicación Comunes para Conversión de Imágenes Base64',
    useCases: [
        'Incrustar iconos pequeños e imágenes directamente en HTML o CSS en desarrollo web para reducir solicitudes HTTP',
        'Usar imágenes codificadas Base64 para almacenamiento y transmisión en desarrollo de aplicaciones móviles',
        'Pasar datos de imagen en interfaces API para evitar la complejidad de subidas de archivos',
        'Incrustar imágenes en plantillas de correo electrónico para asegurar visualización correcta',
        'Convertir imágenes a formato de texto para almacenamiento en sistemas de almacenamiento de datos',
        'Usar datos de imagen codificados Base64 en estrategias de caché de frontend',
        'Procesar datos de imagen en Web Workers para mejorar rendimiento',
        'Precargar y almacenar recursos de imagen en aplicaciones sin conexión'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Para imágenes que requieren fondos transparentes, se recomienda usar formato PNG y mantener calidad original. Para imágenes tipo foto, puedes usar formato JPEG y ajustar apropiadamente la calidad para reducir tamaño de archivo. Los datos codificados Base64 son aproximadamente 133% del tamaño de archivo original, así que por favor controla el tamaño del archivo para evitar problemas de rendimiento.',
    
    conclusion: 'La herramienta de <strong>conversión de imágenes Base64</strong> es particularmente útil para desarrolladores frontend, desarrolladores de aplicaciones móviles, desarrolladores API y cualquier usuario que necesite procesar datos de imagen. Al usar nuestro convertidor Base64, puedes implementar rápidamente conversión entre imágenes y codificación de texto, simplificar procesos de desarrollo y mejorar eficiencia laboral. Nuestra herramienta hace este proceso simple y eficiente, requiriendo instalación de software y ejecutándose enteramente en el navegador.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué es la codificación Base64? ¿Por qué necesito convertir imágenes a Base64?',
            answer: 'Base64 es un método de codificación que convierte datos binarios en caracteres ASCII. Después de convertir imágenes a codificación Base64, pueden ser incrustadas como cadenas de texto en HTML, CSS, JSON y otros formatos de texto sin solicitudes de archivo separadas. Esto es muy útil para iconos pequeños, imágenes en línea, transmisión de datos API y otros escenarios. Nuestra <strong>herramienta de imagen a Base64</strong> puede completar rápidamente este proceso de conversión.'
        },
        {
            question: '¿La codificación Base64 afectará la calidad de la imagen?',
            answer: 'La codificación Base64 en sí misma no afecta la calidad de la imagen; solo cambia la representación de datos. Sin embargo, si se seleccionan configuraciones de calidad más baja durante el proceso de conversión (solo aplicable a formato JPEG), puede afectar la calidad de la imagen. Nuestra herramienta permite ajustar parámetros de calidad para encontrar un balance entre tamaño de archivo y calidad de imagen. Para PNG, WebP y otros formatos, el proceso de conversión es sin pérdida.'
        },
        {
            question: '¿Qué formatos de imagen puedo procesar?',
            answer: 'Nuestro <strong>convertidor de imágenes Base64</strong> soporta múltiples formatos de imagen comunes, incluyendo PNG (soporta fondo transparente), JPEG/JPG (calidad ajustable), WebP (optimización de formato moderno), GIF (incluyendo animaciones) y SVG (gráficos vectoriales). Puedes convertir estos formatos de imagen a codificación Base64, y también restaurar codificación Base64 a estos formatos de imagen.'
        },
        {
            question: '¿Cómo proceso múltiples imágenes a la vez?',
            answer: 'Nuestra herramienta soporta funcionalidad de procesamiento por lotes. En modo imagen a Base64, puedes arrastrar y soltar múltiples imágenes simultáneamente o usar el selector de archivos para seleccionar múltiples archivos. Después de subir, haz clic en el botón "Iniciar Conversión" para procesar todas las imágenes simultáneamente. Después de completar la conversión, puedes usar la función "Descarga por Lotes" para empaquetar todas las codificaciones Base64 en un archivo ZIP para descargar.'
        },
        {
            question: '¿Cuánto aumentará el tamaño de los datos después de la codificación Base64?',
            answer: 'La codificación Base64 convierte datos binarios originales en formato de texto, y el tamaño de datos codificados es aproximadamente 133% del archivo original (es decir, un aumento de aproximadamente 33%). Esto se debe a que Base64 usa 4 caracteres ASCII para representar 3 bytes de datos originales. Nuestra herramienta mostrará información de tamaño original y relación de compresión para ayudarte a entender el efecto de conversión.'
        },
        {
            question: '¿Puedo convertir la codificación Base64 de vuelta a imágenes?',
            answer: 'Sí, nuestra herramienta soporta conversión bidireccional. En modo Base64 a imagen, puedes pegar cadenas codificadas Base64 (con o sin prefijo data:image), y la herramienta reconocerá automáticamente el formato y generará imágenes. También puedes seleccionar formato de salida (PNG, JPEG o WebP), incluso si el formato original es diferente.'
        },
        {
            question: '¿Habrá problemas de rendimiento al procesar archivos grandes?',
            answer: 'Nuestra herramienta procesa todos los datos localmente en tu navegador y puede procesar rápidamente la mayoría de imágenes de tamaño común (dentro de unos pocos MB). Para imágenes muy grandes, proporcionamos límite de tamaño de archivo máximo y características de ajuste de calidad para ayudar a controlar tiempo de procesamiento y uso de memoria. Si encuentras problemas de rendimiento, se recomienda reducir apropiadamente la calidad de imagen o usar herramientas de compresión de imagen para preprocesamiento.'
        },
        {
            question: '¿Se subirán mis datos de imagen al servidor?',
            answer: 'No. Nuestra <strong>herramienta de conversión Base64 pura de frontend</strong> se ejecuta enteramente en tu navegador, y todo el procesamiento y conversión de imágenes se completan localmente sin subir ningún dato al servidor. Esto asegura tu privacidad y seguridad de datos, especialmente adecuado para procesar imágenes sensibles o privadas.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar el Convertidor de Imágenes Base64',
    steps: [
        {
            title: 'Seleccionar Dirección de Conversión',
            description: 'Primero selecciona la dirección de conversión que necesitas: <strong>Imagen a Base64</strong> o <strong>Base64 a Imagen</strong>. Haz clic en el botón de radio correspondiente según tus necesidades.',
            note: 'Imagen a Base64 es adecuado para convertir archivos de imagen a cadenas codificadas, Base64 a Imagen es adecuado para restaurar cadenas codificadas a archivos de imagen.'
        },
        {
            title: 'Subir Imágenes o Entrada de Codificación Base64',
            description: 'Si seleccionas Imagen a Base64, puedes <strong>arrastrar y soltar imágenes</strong> al área de subida o hacer clic en el área para seleccionar archivos desde tu dispositivo. Soporta seleccionar múltiples archivos simultáneamente para procesamiento por lotes. Si seleccionas Base64 a Imagen, por favor pega la cadena codificada Base64 en el cuadro de texto.',
            note: 'La codificación Base64 puede incluir prefijo data:image, la herramienta reconocerá y procesará automáticamente.'
        },
        {
            title: 'Ajustar Parámetros de Conversión (Opcional)',
            description: 'En modo Imagen a Base64, puedes ajustar el deslizador <strong>Calidad de Imagen</strong> (1%-100%) para controlar calidad de salida, y también establecer límite de <strong>Tamaño Máximo de Archivo</strong>. La herramienta optimizará automáticamente para asegurar que los resultados cumplan tus requisitos.',
            note: 'Las configuraciones de calidad afectan principalmente al formato JPEG, los formatos PNG y WebP generalmente mantienen calidad original.'
        },
        {
            title: 'Ejecutar Conversión',
            description: 'Haz clic en el botón <strong>"Iniciar Conversión"</strong> para comenzar el procesamiento. Para Imagen a Base64, la herramienta convertirá cada imagen a cadena codificada Base64. Para Base64 a Imagen, la herramienta decodificará la cadena y generará vista previa de imagen.',
            note: 'El tiempo de procesamiento depende del número y tamaño de imágenes, la mayoría de conversiones se completan inmediatamente.'
        },
        {
            title: 'Ver Resultados de Conversión',
            description: 'Después de completar la conversión, puedes ver los resultados en el área de salida. Para Imagen a Base64, mostrará vista previa de imagen, texto codificado Base64, longitud de codificación, tamaño original y relación de compresión. Para Base64 a Imagen, mostrará la vista previa de imagen generada, dimensiones de imagen y formato detectado.',
            note: 'Puedes hacer clic en el botón "Copiar Base64" para copiar rápidamente la cadena codificada, o hacer clic en el botón "Descargar" para guardar el archivo de imagen.'
        },
        {
            title: 'Descargar o Usar Resultados',
            description: 'Para resultados de Imagen a Base64, haz clic en el botón <strong>"Copiar Base64"</strong> para copiar la codificación al portapapeles, entonces puedes usarla directamente en código. Si hay múltiples resultados, puedes usar la función <strong>"Descarga por Lotes"</strong> para empaquetar y descargar todos los textos Base64. Para resultados de Base64 a Imagen, haz clic en el botón "Descargar" para guardar el archivo de imagen.',
            note: 'Todo el procesamiento se realiza en tu navegador, asegurando seguridad de datos y protección de privacidad.'
        }
    ],
    
    successTitle: '¡Felicidades!',
    successContent: 'Has aprendido exitosamente cómo usar nuestro Convertidor de Imágenes Base64. Ahora puedes implementar fácilmente conversión entre imágenes y codificación Base64, mejorar eficiencia de desarrollo y simplificar flujos de trabajo.',
    
    relatedToolsTitle: 'Herramientas Relacionadas que Podrían Interesarte',
    relatedTools: [
        {
            name: 'Compresor de Imágenes',
            description: 'Reducir tamaño de archivo de imagen sin pérdida significativa de calidad.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Redimensionador de Imágenes',
            description: 'Redimensionar imágenes a dimensiones específicas o escalar por porcentaje.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Invertir Colores de Imagen',
            description: 'Herramienta online para invertir colores de imagen y crear efectos negativos.',
            url: 'https://www.ufreetools.com/tool/invert-image-colors'
        },
        {
            name: 'Generador de Código QR',
            description: 'Crear códigos QR personalizados para URLs, texto, información de contacto y más.',
            url: 'https://www.ufreetools.com/tool/qr-code-generator'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Estándar de Codificación Base64 (RFC 4648)',
            description: 'Aprende sobre la especificación oficial y detalles de implementación de la codificación Base64',
            url: 'https://datatracker.ietf.org/doc/html/rfc4648'
        },
        {
            name: 'Guía de Formatos de Imagen Web',
            description: 'Documentación técnica sobre PNG, JPEG, WebP y otros formatos de imagen',
            url: 'https://developer.mozilla.org/es/docs/Web/Media/Formats/Image_types'
        },
        {
            name: 'Especificación de URL de Datos',
            description: 'Estándar para formato de URL data: e imágenes en línea Base64',
            url: 'https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/Data_URIs'
        }
    ]
}