export default {
    title: 'Herramienta de Enfoque Facial Automático con IA: Guía del Optimizador Inteligente de Avatares',
    functionTitle: '¿Qué es la Herramienta de Enfoque Facial Automático con IA y cómo funciona?',
    intro: 'Nuestra <strong>Herramienta de Enfoque Facial Automático con IA</strong> es una herramienta inteligente de procesamiento de imágenes basada en inteligencia artificial, diseñada específicamente para detectar posiciones faciales en fotos y realizar automáticamente un recorte óptimo. Esta herramienta utiliza la avanzada tecnología face-api.js para identificar con precisión los puntos característicos faciales, calcular inteligentemente la mejor área de recorte y generar tamaños de avatar optimizados para diferentes plataformas de redes sociales. A través de la tecnología de <strong>recorte automático con reconocimiento facial</strong>, los usuarios pueden transformar rápidamente fotos ordinarias en avatares profesionales para redes sociales, mejorando enormemente la presentación de su imagen personal.',
    
    useCasesTitle: 'Escenarios comunes de aplicación para el Recorte con Enfoque Facial IA',
    useCases: [
        'Optimización de Avatares para Redes Sociales - Crea avatares perfectos para Instagram, LinkedIn, TikTok, Xiaohongshu, WeChat y otras plataformas',
        'Gestión de Imagen Profesional - Crea avatares profesionales de negocios y fotos de perfil',
        'Procesamiento por Lotes de Avatares - Procesa rápidamente múltiples fotos con estilos de avatar consistentes',
        'Imágenes de Productos para E-commerce - Optimiza avatares de servicio al cliente y presentación de imagen de tienda',
        'Presentaciones de Miembros de Equipo - Crea avatares uniformes de empleados para sitios web de empresas',
        'Plataformas de Educación en Línea - Optimiza fotos de perfil de instructores y estudiantes',
        'Optimización de Aplicaciones de Citas - Mejora el atractivo de la imagen personal en software de citas',
        'Creación de Avatares para Juegos - Crea imágenes de avatar personalizadas para cuentas de juegos'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Para obtener los mejores resultados de detección y recorte facial, recomendamos usar fotos de alta calidad con buena iluminación, rasgos faciales claros y un ángulo frontal. Evite usar imágenes demasiado borrosas, perfiles laterales o fotos con obstrucciones faciales.',
    
    conclusion: 'La <strong>Herramienta de Enfoque Facial Automático con IA</strong> es un asistente indispensable de procesamiento de imágenes en la vida digital moderna. Ya sea que seas un entusiasta de las redes sociales, un profesional del ámbito laboral o un creador de contenido, esta herramienta puede ayudarte a crear rápidamente avatares de alta calidad que cumplan con los requisitos de varias plataformas. A través de la tecnología inteligente de detección facial y recorte automático, puedes ahorrar una cantidad significativa de tiempo de edición manual mientras aseguras el profesionalismo y la consistencia de tus avatares. Nuestra herramienta funciona completamente de forma local en tu navegador, protegiendo tu privacidad y seguridad.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Cómo funciona la tecnología de Recorte Automático con Enfoque Facial IA?',
            answer: 'Nuestra <strong>Herramienta de Enfoque Facial Automático con IA</strong> utiliza el modelo TinyFaceDetector de la biblioteca face-api.js para detectar rostros en imágenes. El sistema primero analiza la imagen, identifica áreas faciales y 68 puntos característicos clave, luego calcula el área óptima de recorte basándose en el tamaño del rostro, posición y parámetros definidos por el usuario (como margen, modo de recorte). Finalmente, la herramienta recorta automáticamente la imagen y genera versiones de múltiples tamaños adecuadas para diferentes plataformas de redes sociales.'
        },
        {
            question: '¿Qué tamaños de avatar de plataformas de redes sociales soporta esta herramienta?',
            answer: 'Nuestra herramienta soporta tamaños estándar de avatar para las principales plataformas de redes sociales, incluyendo Instagram (1080×1080), LinkedIn (400×400), YouTube (800×800), Facebook (180×180), Twitter (400×400), TikTok (200×200), Xiaohongshu (400×400), WeChat (132×132) y Reddit (256×256). Puedes elegir tamaños preestablecidos o personalizar tus dimensiones de recorte. La herramienta también proporciona una función de descarga de paquete para redes sociales para obtener todos los tamaños de avatar requeridos por las plataformas de una sola vez.'
        },
        {
            question: '¿Cómo maneja la herramienta las fotos con múltiples rostros?',
            answer: 'Cuando se detectan múltiples rostros, nuestra <strong>Herramienta de Recorte Inteligente de Avatares</strong> selecciona automáticamente el rostro más grande como el sujeto principal de recorte. Esto generalmente corresponde a la persona más prominente o la más cercana a la cámara en la foto. Si necesitas recortar otros rostros, recomendamos recortar manualmente el área de la persona objetivo primero, y luego usar nuestra herramienta para un procesamiento preciso.'
        },
        {
            question: '¿Puedo ajustar los parámetros de recorte para lograr diferentes efectos?',
            answer: 'Sí, proporcionamos un rico conjunto de opciones de ajuste de parámetros. Puedes establecer el margen facial (10%-100%) para controlar el espacio en blanco alrededor del rostro, ajustar la confianza de detección (30%-90%) para optimizar la precisión del reconocimiento facial, y seleccionar diferentes modos de recorte (automático, cuadrado, tamaño personalizado). Todos los ajustes de parámetros surten efecto en tiempo real, permitiéndote ver inmediatamente los cambios en el efecto de recorte.'
        },
        {
            question: '¿Cuáles son los requisitos para la calidad y formato de imagen?',
            answer: 'Nuestra herramienta soporta formatos de imagen PNG, JPEG, BMP y WEBP. Para mejores resultados, recomendamos usar imágenes de alta calidad con una resolución superior a 500×500 píxeles. Las imágenes deben tener buena iluminación con rasgos faciales claramente visibles, evitando excesivo desenfoque, sombras fuertes u obstrucciones faciales. La herramienta procesa automáticamente imágenes de entrada de diferentes tamaños y genera resultados de recorte de alta calidad.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar la Herramienta de Enfoque Facial Automático con IA',
    steps: [
        {
            title: 'Ajustar Parámetros de Recorte',
            description: 'En el panel de configuración de parámetros a la izquierda, selecciona un <strong>modo de recorte</strong> apropiado (automático, cuadrado o tamaño personalizado). Ajusta el deslizador de margen facial para controlar el espacio en blanco alrededor del rostro, y establece la confianza de detección para optimizar la precisión del reconocimiento facial. También puedes hacer clic en los botones preestablecidos de redes sociales para aplicar rápidamente configuraciones de tamaño de plataformas comunes.',
            note: 'Los ajustes de parámetros afectan el resultado del recorte en tiempo real. Recomendamos establecer los parámetros antes de subir imágenes.'
        },
        {
            title: 'Subir Imágenes para Procesamiento',
            description: '<strong>Arrastra y suelta</strong> tus fotos en el área de carga, o haz clic para seleccionar archivos desde tu dispositivo. La herramienta soporta formatos PNG, JPEG, BMP y WEBP, y puede subir múltiples imágenes simultáneamente para procesamiento por lotes. Después de subir, se mostrarán miniaturas en el área de vista previa.',
            note: 'Recomendamos usar fotos frontales bien iluminadas con rasgos faciales claros para mejores resultados.'
        },
        {
            title: 'Iniciar Detección Facial IA y Recorte',
            description: 'Haz clic en el botón <strong>"Iniciar Procesamiento"</strong>, y la herramienta cargará automáticamente el modelo de reconocimiento facial (el primer uso requiere descarga), luego realizará detección facial y recorte inteligente para cada imagen. Se mostrarán el estado de progreso y los resultados de detección durante el procesamiento.',
            note: 'La primera descarga del modelo puede tomar unos minutos. Por favor, sé paciente.'
        },
        {
            title: 'Ver Resultados de Recorte y Vistas Previas de Redes Sociales',
            description: 'Después de completar el procesamiento, el lado derecho mostrará resultados de recorte e información de análisis, incluyendo el número de rostros detectados y niveles de confianza. Cada resultado mostrará efectos de vista previa para plataformas Instagram, LinkedIn y YouTube, ayudándote a entender visualmente cómo aparecerán en diferentes plataformas.',
            note: 'Puedes usar funciones de zoom y desplazamiento para examinar los detalles de los resultados de recorte.'
        },
        {
            title: 'Seleccionar Formato de Exportación y Calidad',
            description: 'Elige un formato de exportación (PNG, JPG, WEBP) para cada imagen procesada. Si seleccionas formato JPG, puedes ajustar el deslizador de calidad de imagen para equilibrar tamaño de archivo y calidad de imagen. El formato PNG es adecuado para escenarios que requieren fondos transparentes, mientras que los archivos en formato JPG son más pequeños y mejores para transmisión en red.',
            note: 'Recomendamos usar formato JPG para avatares de redes sociales, con configuraciones de calidad entre 80%-95%.'
        },
        {
            title: 'Descargar Avatares Optimizados',
            description: 'Haz clic en el botón <strong>"Descargar"</strong> para descargar una sola imagen recortada, o haz clic en <strong>"Descargar Paquete para Redes Sociales"</strong> para obtener un archivo ZIP que contiene tamaños para todas las principales plataformas. Para procesamiento por lotes, también puedes usar la función "Descarga por Lotes" para descargar todos los resultados a la vez.',
            note: 'El paquete para redes sociales contiene tamaños estándar para nueve plataformas: Instagram, LinkedIn, YouTube, Facebook, Twitter, TikTok, Xiaohongshu, WeChat y Reddit.'
        }
    ],
    
    successTitle: '¡Felicitaciones!',
    successContent: '¡Has dominado con éxito la herramienta de Enfoque Facial Automático con IA! Ahora puedes crear rápidamente avatares profesionales para varias plataformas de redes sociales y mejorar tu imagen digital.',
    
    relatedToolsTitle: 'Herramientas Relacionadas Que Podrían Interesarte',
    relatedTools: [
        {
            name: 'Visualizador de Mapa de Calor Facial IA',
            description: 'Analiza la distribución de características faciales, optimiza la composición de fotografía de retratos y efectos de iluminación.',
            url: 'https://www.ufreetools.com/tool/ai-facial-heatmap-visualizer'
        },
        {
            name: 'Compresor de Imágenes',
            description: 'Reduce el tamaño de archivo de imágenes manteniendo la calidad, adecuado para transmisión en red.',
            url: 'https://www.ufreetools.com/tool/image-compressor'
        },
        {
            name: 'Redimensionador de Imágenes por Lotes',
            description: 'Ajusta tamaños de imágenes por lotes, soportando múltiples modos de escalado y conversiones de formato.',
            url: 'https://www.ufreetools.com/tool/image-batch-resizer'
        },
        {
            name: 'Eliminador de Fondos',
            description: 'Usa tecnología IA para eliminar automáticamente fondos de imágenes y crear avatares con fondo transparente.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Documentación Oficial de Face-API.js',
            description: 'Documentación técnica completa para la biblioteca de reconocimiento facial JavaScript utilizada por esta herramienta',
            url: 'https://github.com/vladmandic/face-api'
        },
        {
            name: 'Guía de Tamaños de Avatar para Redes Sociales',
            description: 'Tamaños estándar y mejores prácticas para avatares en las principales plataformas de redes sociales',
            url: 'https://blog.hootsuite.com/social-media-image-sizes-guide/'
        },
        {
            name: 'Técnicas de Composición para Fotografía de Retratos',
            description: 'Principios y técnicas de composición para fotografía profesional de retratos',
            url: 'https://www.theschoolofphotography.com/tutorials/portrait-photography-tips'
        },
        {
            name: 'Principios de Tecnología de Reconocimiento Facial',
            description: 'Comprensión en profundidad de algoritmos de detección y reconocimiento facial en visión por computadora',
            url: 'https://es.wikipedia.org/wiki/Reconocimiento_facial'
        }
    ]
}