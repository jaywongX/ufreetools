export default {
    title: 'Estimador de Edad y Género con IA: Analiza Rostros en tus Fotos',
    intro: 'Nuestro <strong>Estimador de Edad y Género con IA</strong> es una potente herramienta en línea que utiliza tecnología avanzada de reconocimiento facial para analizar los rostros en tus fotos y proporcionar estimaciones de edad y género. Ya sea que tengas curiosidad sobre qué edad aparentas en una foto específica o quieras analizar múltiples rostros en una foto grupal, esta herramienta ofrece resultados rápidos y precisos sin requerir ningún conocimiento técnico.',
    
    whatIsTitle: '¿Qué es el Estimador de Edad y Género con IA?',
    howItWorksTitle: '¿Cómo funciona?',
    howItWorksContent: 'El Estimador de Edad y Género con IA utiliza face-api.js, una API de JavaScript que implementa redes neuronales convolucionales para detectar rostros y analizar características faciales. La herramienta primero identifica los rostros en tus imágenes subidas, luego aplica modelos de aprendizaje automático preentrenados para estimar la edad y el género de cada rostro detectado. Todo el procesamiento ocurre directamente en tu navegador, asegurando que tus fotos permanezcan privadas y nunca sean subidas a ningún servidor.',
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Para obtener los resultados más precisos, sube fotos con rostros claros, bien iluminados y mirando directamente a la cámara. La herramienta funciona mejor con retratos frontales que tienen mínima obstrucción o ángulos extremos.',
    
    featuresTitle: 'Características Principales',
    features: [
        'Detección precisa de rostros en diversas condiciones de iluminación y ángulos',
        'Estimación de edad razonablemente precisa para la mayoría de los grupos de edad',
        'Clasificación de género con porcentaje de confianza',
        'Soporte para múltiples rostros en una sola imagen',
        'Modo divertido con visualizaciones de estilo caricatura y efectos apropiados para la edad',
        'Procesamiento por lotes para analizar múltiples fotos a la vez'
    ],
    
    useCasesTitle: 'Cuándo Usar Esta Herramienta',
    useCase1Title: 'Curiosidad Personal',
    useCase1Content: 'Satisface tu curiosidad sobre qué edad aparentas en diferentes fotos o cómo ha cambiado tu apariencia con el tiempo.',
    
    useCase2Title: 'Creación de Contenido',
    useCase2Content: 'Los creadores de contenido pueden usar esta herramienta para entender la percepción demográfica de las personas que aparecen en su contenido visual.',
    
    useCase3Title: 'Fotografía',
    useCase3Content: 'Los fotógrafos pueden analizar cómo la iluminación, los ángulos y el post-procesamiento afectan la edad percibida de sus sujetos.',
    
    useCase4Title: 'Entretenimiento y Diversión',
    useCase4Content: 'Usa el modo divertido para crear visuales entretenidos para publicaciones en redes sociales o reuniones familiares.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué tan precisa es la estimación de edad y género?',
            answer: 'La IA proporciona estimaciones basadas en características visuales y patrones que ha aprendido de los datos de entrenamiento. Aunque generalmente es precisa, los resultados pueden variar dependiendo de factores como la iluminación, la calidad de la imagen, las expresiones faciales, el maquillaje y las variaciones individuales. La herramienta típicamente logra mejor precisión para adultos que para niños muy pequeños o personas mayores.'
        },
        {
            question: '¿Están seguros mis datos al usar esta herramienta?',
            answer: 'Sí, todo el procesamiento ocurre localmente en tu navegador. Tus fotos nunca se suben a ningún servidor, asegurando completa privacidad. La herramienta utiliza JavaScript del lado del cliente para analizar imágenes, y ningún dato se almacena o transmite a otro lugar.'
        },
        {
            question: '¿Por qué la herramienta a veces da diferentes estimaciones de edad para la misma persona?',
            answer: 'La estimación de edad puede variar según factores como la iluminación, el ángulo, la expresión facial, el maquillaje y la calidad de la imagen. Incluso pequeños cambios en estos factores pueden afectar cómo la IA interpreta las características faciales. Para obtener los resultados más consistentes, usa fotos con iluminación y posicionamiento similares.'
        },
        {
            question: '¿Cuál es la diferencia entre el Modo Estándar y el Modo Divertido?',
            answer: 'El Modo Estándar proporciona un análisis directo con indicadores visuales limpios que muestran la edad y el género estimados. El Modo Divertido añade efectos de estilo caricatura y elementos visuales apropiados para la edad para hacer que los resultados sean más entretenidos y compartibles en redes sociales.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar el Estimador de Edad y Género con IA',
    steps: [
        {
            title: 'Sube Tus Fotos',
            description: 'Comienza subiendo las fotos que quieres analizar. Puedes arrastrar y soltar archivos directamente en el área de carga, o hacer clic para navegar por tu dispositivo. La herramienta soporta formatos comunes de imagen incluyendo JPG, PNG, WEBP y BMP.',
            note: 'Puedes subir múltiples fotos a la vez para procesamiento por lotes.'
        },
        {
            title: 'Selecciona el Modo de Análisis',
            description: 'Elige entre el Modo Estándar para un análisis directo o el Modo Divertido para visualizaciones entretenidas con efectos de estilo caricatura.',
            note: 'El Modo Divertido es excelente para crear contenido compartible para redes sociales.'
        },
        {
            title: 'Analiza las Fotos',
            description: 'Haz clic en el botón "Analizar Fotos" y espera unos segundos mientras nuestra IA detecta rostros y estima la edad y el género de cada persona en tus fotos.',
            note: 'El tiempo de procesamiento depende del número y tamaño de tus fotos, así como del rendimiento de tu dispositivo.'
        },
        {
            title: 'Revisa y Descarga los Resultados',
            description: 'Examina los resultados del análisis para cada rostro detectado, incluyendo edad estimada, género y nivel de confianza. Puedes acercar/alejar y desplazarte por la imagen para ver detalles. Selecciona tu formato de exportación preferido y descarga imágenes individuales o todas las fotos procesadas como un archivo ZIP.',
            note: 'Para compartir en redes sociales, los formatos JPEG o WEBP con configuraciones de calidad media-alta ofrecen un buen equilibrio entre calidad y tamaño de archivo.'
        }
    ],
    
    successTitle: '¿Listo para Probarlo?',
    successContent: '¡Sube tus fotos ahora y descubre qué puede revelar nuestro Estimador de Edad y Género con IA sobre los rostros en tus imágenes!',
    
    relatedToolsTitle: 'Herramientas Relacionadas Que Te Podrían Gustar',
    relatedTools: [
        {
            name: 'Eliminador de Fondos Imgly AI',
            description: 'Elimina inteligentemente los fondos de imágenes utilizando el modelo grande de Imgly AI, con soporte para procesamiento por lotes y múltiples formatos de salida.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'Analizador de Fotos de Perfil AI - Herramienta de Evaluación de Retratos Profesionales',
            description: 'Herramienta gratuita en línea que analiza tus fotos personales y fotos de identificación. Obtén retroalimentación impulsada por IA sobre postura de la cabeza, sonrisa, contacto visual y calidad de iluminación para mejorar tus fotos profesionales.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        }
    ],
    
    techPrivacyTitle: 'Tecnología y Privacidad',
    techPrivacyContent1: 'El Estimador de Edad y Género con IA utiliza face-api.js, que implementa modelos TinyFaceDetector y AgeGenderNet para analizar características faciales. Estas redes neuronales ligeras están diseñadas para ejecutarse eficientemente en navegadores web mientras proporcionan una precisión razonable.',
    techPrivacyContent2: 'Priorizamos tu privacidad procesando todas las imágenes localmente en tu navegador. Tus fotos nunca se envían a ningún servidor para análisis, asegurando que tus datos personales e imágenes permanezcan completamente privados. La herramienta opera completamente del lado del cliente, haciéndola segura y receptiva incluso sin una conexión a internet una vez que la página ha cargado.'
};