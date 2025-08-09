export default {
    title: 'Etiquetador AI de Múltiples Rostros: Identifica y Etiqueta Personas en Fotos',
    whatIsTitle: '¿Qué es el Etiquetador AI de Múltiples Rostros?',
    intro: 'Nuestro <strong>Etiquetador AI de Múltiples Rostros</strong> es una potente herramienta en línea que utiliza tecnología avanzada de reconocimiento facial para detectar múltiples rostros en fotos y te permite añadir etiquetas para cada persona. Ya sea que estés organizando colecciones de fotos, creando diagramas de asientos para el aula, o simplemente quieras identificar a todos en una foto grupal, esta herramienta proporciona una manera rápida y eficiente de etiquetar rostros sin necesidad de conocimientos técnicos.',
    
    howItWorksTitle: '¿Cómo Funciona?',
    howItWorksContent: 'El Etiquetador AI de Múltiples Rostros utiliza face-api.js, una API de JavaScript que implementa redes neuronales convolucionales para detectar rostros y analizar características faciales. La herramienta primero identifica todos los rostros en tu imagen subida, luego te permite añadir etiquetas personalizadas o nombres para cada rostro detectado. Todo el procesamiento ocurre directamente en tu navegador, asegurando que tus fotos permanezcan privadas y nunca se suban a ningún servidor.',
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Para obtener mejores resultados, sube fotos con rostros claros, bien iluminados y orientados hacia la cámara. La herramienta funciona mejor con retratos frontales con mínimas obstrucciones o ángulos extremos.',
    
    featuresTitle: 'Características Principales',
    features: [
        'Detección precisa de múltiples rostros en una sola imagen',
        'Sistema de etiquetado personalizado para marcar cada rostro detectado',
        'Soporte para procesamiento por lotes de múltiples fotos',
        'Opción para exportar imágenes con superposiciones visibles de etiquetas faciales',
        'Opción de exportación JSON para integración con sistemas de gestión de fotos',
        'Diseño centrado en la privacidad con todo el procesamiento realizado localmente en tu navegador'
    ],
    
    useCasesTitle: 'Cuándo Usar Esta Herramienta',
    useCase1Title: 'Organización de Fotos',
    useCase1Content: 'Identifica y etiqueta rápidamente personas en colecciones de fotos para hacerlas buscables y más organizadas.',
    
    useCase2Title: 'Gestión de Aulas',
    useCase2Content: 'Los profesores pueden usar esta herramienta para crear fotos de clase etiquetadas para ayudar a recordar nombres de estudiantes o crear diagramas de asientos.',
    
    useCase3Title: 'Fotografía de Eventos',
    useCase3Content: 'Los fotógrafos de eventos pueden etiquetar participantes en fotos grupales para facilitar la distribución e identificación.',
    
    useCase4Title: 'Contenido de Redes Sociales',
    useCase4Content: 'Los creadores de contenido pueden etiquetar colaboradores o miembros del equipo en fotos promocionales para una atribución adecuada.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué tan precisa es la detección facial?',
            answer: 'La IA proporciona una detección facial generalmente precisa en la mayoría de los casos. Sin embargo, los resultados pueden variar dependiendo de factores como la iluminación, la calidad de la imagen, los ángulos faciales y las oclusiones. La herramienta típicamente logra mejor precisión con retratos frontales claros en buenas condiciones de iluminación.'
        },
        {
            question: '¿Están seguros mis datos al usar esta herramienta?',
            answer: 'Sí, todo el procesamiento se realiza localmente en tu navegador. Tus fotos nunca se suben a ningún servidor, asegurando completa privacidad. La herramienta utiliza JavaScript del lado del cliente para analizar imágenes y no almacena ni transmite ningún dato.'
        },
        {
            question: '¿Qué sucede si algunos rostros no son detectados?',
            answer: 'La detección facial depende de varios factores incluyendo iluminación, ángulos y calidad de imagen. Si algunos rostros no son detectados, intenta subir una foto diferente con mejor iluminación y ángulos faciales más directos. Rostros muy pequeños o parcialmente ocultos pueden ser difíciles de detectar para la IA.'
        },
        {
            question: '¿Puedo exportar los datos de etiquetado facial para usarlos en otras aplicaciones?',
            answer: 'Sí, nuestra herramienta proporciona una opción de exportación JSON que incluye coordenadas para cada rostro detectado junto con tus etiquetas personalizadas. Estos datos pueden ser importados a varios sistemas de gestión de fotos o utilizados para aplicaciones personalizadas. También puedes descargar imágenes con superposiciones visibles de etiquetas faciales.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar el Etiquetador AI de Múltiples Rostros',
    steps: [
        {
            title: 'Sube Tu Foto',
            description: 'Comienza subiendo la foto que deseas analizar. Puedes arrastrar y soltar archivos directamente en el área de carga o hacer clic para navegar por tu dispositivo. La herramienta soporta formatos comunes de imagen incluyendo JPG, PNG, WEBP y BMP.',
            note: 'Puedes subir múltiples fotos a la vez para procesamiento por lotes.'
        },
        {
            title: 'Detectar Rostros',
            description: 'Haz clic en el botón "Detectar Rostros" y espera unos segundos para que nuestra IA identifique todos los rostros en la foto. Cada rostro detectado será resaltado con un cuadro y etiquetado con un número para fácil referencia.',
            note: 'El tiempo de procesamiento depende del número y tamaño de las fotos, así como del rendimiento de tu dispositivo.'
        },
        {
            title: 'Añadir Etiquetas',
            description: 'Para cada rostro detectado, ingresa un nombre o etiqueta en el campo de entrada correspondiente. A medida que escribes, las etiquetas se actualizarán automáticamente en la vista previa de la imagen, permitiéndote ver cómo se verá el resultado final.',
            note: 'Puedes dejar algunos rostros sin etiquetar si lo prefieres, o borrar etiquetas haciendo clic en el botón X.'
        },
        {
            title: 'Exportar Tus Resultados',
            description: 'Elige tu formato y opciones de exportación preferidos. Puedes incluir superposiciones de etiquetas faciales directamente en la imagen y/o exportar un archivo JSON que contenga todas las coordenadas faciales y etiquetas. Selecciona tu formato de imagen preferido y, para archivos JPG, ajusta la calidad según sea necesario. Finalmente, descarga imágenes individuales o usa la opción de descarga por lotes para obtener todas las fotos procesadas como un archivo ZIP.',
            note: 'La exportación JSON es particularmente útil si planeas importar los datos faciales a otras aplicaciones o sistemas de gestión de fotos.'
        }
    ],
    
    successTitle: '¿Listo para Probarlo?',
    successContent: '¡Sube tus fotos ahora y descubre cómo nuestro Etiquetador AI de Múltiples Rostros puede ayudarte a identificar y etiquetar personas en tus imágenes!',
    
    relatedToolsTitle: 'Herramientas Relacionadas Que Te Pueden Gustar',
    relatedTools: [
        {
            name: 'Eliminador de Fondos AI Imgly',
            description: 'Elimina inteligentemente fondos de imágenes usando el modelo grande de IA Imgly, con soporte para procesamiento por lotes y múltiples formatos de salida.',
            url: 'https://www.ufreetools.com/tool/imgly-remove-image-background'
        },
        {
            name: 'Analizador AI de Fotos de Perfil',
            description: 'Obtén retroalimentación impulsada por IA sobre tus fotos personales y profesionales para mejorar tu imagen profesional.',
            url: 'https://www.ufreetools.com/tool/ai-profile-photo-analyzer'
        },
        {
            name: 'Estimador AI de Edad y Género',
            description: 'Utiliza tecnología de IA para analizar rostros en fotos y estimar edad y género.',
            url: 'https://www.ufreetools.com/tool/ai-age-gender-estimator'
        },
    ],
    
    techDetailsTitle: 'Detalles Técnicos',
    techDetailsContent: 'El Etiquetador AI de Múltiples Rostros utiliza face-api.js, que implementa los modelos TinyFaceDetector y FaceLandmark68 para analizar características faciales. Estas redes neuronales ligeras están diseñadas para ejecutarse eficientemente en navegadores web mientras proporcionan una precisión razonable.',
    privacyNote: 'Priorizamos tu privacidad procesando todas las imágenes localmente en tu navegador. Tus fotos nunca se envían a ningún servidor para análisis, asegurando que tus datos personales e imágenes permanezcan completamente privados. La herramienta se ejecuta completamente del lado del cliente, haciéndola segura y receptiva incluso sin conexión a internet después de que la página ha cargado.'
};