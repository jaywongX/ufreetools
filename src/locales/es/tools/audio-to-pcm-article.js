export default {
    title: 'Herramienta de Audio a PCM: Guía del Convertidor de Formato de Audio en Línea',
    functionTitle: '¿Qué es la Herramienta de Audio a PCM y sus Usos?',
    intro: 'Nuestra <strong>Herramienta de Audio a PCM</strong> es un convertidor de formato de audio en línea profesional que puede convertir WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE y otros formatos de audio a datos de audio PCM crudos. PCM (Modulación por Impulsos Codificados) es la forma más original de representación de audio digital, sin ninguna compresión, preservando la información completa del audio. Usando nuestro <strong>convertidor de audio a PCM en línea</strong>, puede controlar con precisión la tasa de muestreo, la profundidad de bits y la configuración de canales para reconocimiento de voz, análisis de audio, procesamiento de audio profesional y más.',
    
    useCasesTitle: 'Casos de Uso Comunes para Conversión de Audio a PCM',
    useCases: [
        'Preparar entrada de audio PCM estándar para sistemas de reconocimiento de voz (ej. Baidu Speech, iFlytek)',
        'Convertir varios formatos de audio a datos PCM crudos para procesamiento y análisis de señales de audio',
        'Preparar datos de audio crudos para dispositivos de audio integrados o motores de juego',
        'Análisis de datos de forma de onda cruda en investigación y educación de audio',
        'Conversión de formato intermedio para software de edición de audio',
        'Preprocesamiento de audio para sistemas de comunicación de voz (ej. VoIP)',
        'Extracción de características de audio y entrenamiento de modelos de machine learning',
        'Generación de señales de prueba de audio y calibración de dispositivos'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Recomendaciones de parámetros de formato PCM: Para reconocimiento de voz, use tasa de muestreo de 16000 Hz, profundidad de bits de 16 bits, mono; el estándar de calidad CD es 44100 Hz, 16 bits, estéreo; para producción de audio profesional se recomienda 48000 Hz o superior, 24 bits. Los archivos PCM son grandes, aproximadamente 10 veces el tamaño de MP3 de igual duración, asegure suficiente espacio de almacenamiento.',
    
    conclusion: 'La herramienta de <strong>conversión de formato de audio a PCM</strong> es particularmente útil para desarrolladores de reconocimiento de voz, ingenieros de algoritmos de audio, desarrolladores de juegos e investigadores de audio. Al usar nuestro convertidor de audio a PCM en línea, puede convertir audio de varios formatos a datos PCM crudos con control preciso sobre la tasa de muestreo y profundidad de bits, cumpliendo los requisitos técnicos para diferentes escenarios de aplicación. Nuestra herramienta admite procesamiento por lotes, todo el procesamiento se realiza localmente en su navegador, asegurando la privacidad y seguridad de sus datos de audio.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de entrada admite la herramienta de audio a PCM?',
            answer: 'Nuestro <strong>convertidor de audio a PCM en línea</strong> admite varios formatos de audio comunes incluyendo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE y más. Puede cargar múltiples archivos de audio de diferentes formatos simultáneamente para conversión por lotes. La herramienta detecta automáticamente el formato de entrada y procesa la conversión.'
        },
        {
            question: '¿Cuál es la diferencia entre los formatos PCM y WAV?',
            answer: 'WAV es un formato contenedor que típicamente contiene datos de audio codificados en PCM, pero los archivos WAV incluyen información de encabezado (metadatos como tasa de muestreo, profundidad de bits, canales). Los datos PCM puros son muestras de audio crudas sin encabezado de archivo. Algunas aplicaciones (como APIs de reconocimiento de voz) requieren entrada de datos PCM puros, donde se necesita eliminar el encabezado del archivo WAV.'
        },
        {
            question: '¿Cómo preparar audio PCM para reconocimiento de voz?',
            answer: 'La mayoría de los sistemas de reconocimiento de voz (ej. Baidu Speech Recognition, iFlytek, Google Speech API) requieren parámetros de formato PCM: <strong>tasa de muestreo de 16000 Hz, profundidad de bits de 16 bits, mono</strong>. Seleccione estos parámetros durante la conversión para obtener audio PCM que cumpla con los requisitos. Algunos sistemas también admiten tasa de muestreo de 8000 Hz.'
        },
        {
            question: '¿Qué son la tasa de muestreo y la profundidad de bits?',
            answer: '<strong>Tasa de muestreo</strong> es el número de muestras de audio recolectadas por segundo, determinando el rango de frecuencia del audio. 8000 Hz es adecuado para voz telefónica, 16000 Hz para reconocimiento de voz, 44100 Hz es el estándar CD, 48000 Hz es el estándar de audio profesional. <strong>Profundidad de bits</strong> determina la precisión de cada punto de muestra, 8 bits es menor precisión, 16 bits es estándar, 24 bits y 32 bits son para producción de audio profesional.'
        },
        {
            question: '¿Por qué los archivos PCM son tan grandes?',
            answer: 'PCM son datos de audio crudos sin comprimir sin ningún procesamiento de compresión. Por ejemplo, 1 minuto de audio PCM estéreo de 16 bits, 44100 Hz es aproximadamente 10 MB. Este es el compromiso del formato PCM para garantizar la integridad del audio. Si necesita reducir el tamaño del archivo, considere convertir a formatos FLAC (compresión sin pérdidas) o MP3 (compresión con pérdidas).'
        },
        {
            question: '¿Es seguro el proceso de conversión? ¿Se subirá el audio a servidores?',
            answer: '¡Completamente seguro! Nuestra herramienta utiliza tecnología puramente frontend, todo el procesamiento de audio se realiza localmente en su navegador. Sus archivos de audio no se suben a ningún servidor, asegurando privacidad y seguridad de datos. Puede procesar con seguridad archivos de audio que contienen contenido sensible.'
        },
        {
            question: '¿Cuál es la diferencia entre PCM con signo y sin signo?',
            answer: 'Este es el formato de almacenamiento de datos PCM. <strong>Formato con signo</strong> (Signed) usa complemento a dos para representar valores positivos y negativos, que es el formato estándar para la mayoría del procesamiento de audio con mejor compatibilidad. <strong>Formato sin signo</strong> (Unsigned) solo representa valores positivos, usado principalmente para cierto hardware específico o sistemas antiguos. Generalmente se recomienda elegir formato con signo.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar la Herramienta de Audio a PCM',
    steps: [
        {
            title: 'Suba Sus Archivos de Audio',
            description: 'Primero, suba los archivos de audio que desea convertir a formato PCM. Puede subir de dos formas: <strong>arrastrar archivos</strong> al área de carga o <strong>clic en examinar</strong> para seleccionar archivos. La herramienta admite WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE y otros formatos, puede subir múltiples archivos a la vez para procesamiento por lotes.',
            note: 'Se pueden subir múltiples archivos de audio de diferentes formatos simultáneamente, la herramienta identificará y procesará automáticamente.'
        },
        {
            title: 'Vista Previa de Archivos de Audio',
            description: 'Después de subir, verá todos los archivos de audio subidos en el área de vista previa a la izquierda. Cada archivo muestra nombre de archivo, formato original, tamaño de archivo y duración. Puede hacer clic en el botón de reproducción para previsualizar el audio y confirmar que los archivos correctos están seleccionados. Para eliminar un archivo, haga clic en el icono de eliminar.',
            note: 'Para procesamiento por lotes, se recomienda previsualizar la lista de audio primero para asegurar que todos los archivos a convertir se hayan subido correctamente.'
        },
        {
            title: 'Configurar Parámetros PCM',
            description: 'Antes de la conversión, necesita configurar los parámetros de salida PCM. Seleccione la <strong>tasa de muestreo</strong> apropiada (8000-48000 Hz), configure la <strong>profundidad de bits</strong> (8 bits, 16 bits, 24 bits, 32 bits), seleccione los <strong>canales</strong> (mono o estéreo). Para aplicaciones de reconocimiento de voz, se recomienda seleccionar tasa de muestreo de 16000 Hz, profundidad de bits de 16 bits, mono.',
            note: 'Diferentes escenarios de aplicación tienen diferentes requisitos de parámetros PCM, elija la combinación de parámetros apropiada según el uso objetivo.'
        },
        {
            title: 'Convertir a Formato PCM',
            description: 'Después de configurar, haga clic en el botón <strong>"Convertir a PCM"</strong> para iniciar el procesamiento. La herramienta procesará todos los archivos de audio subidos secuencialmente, mostrando información de progreso durante el procesamiento por lotes. El tiempo de conversión depende del tamaño y cantidad de archivos, la mayoría del audio se puede completar en segundos a decenas de segundos.',
            note: 'Por favor mantenga la página abierta durante la conversión, no cierre la pestaña del navegador.'
        },
        {
            title: 'Vista Previa de Resultados de Conversión',
            description: 'Una vez completada la conversión, todos los archivos PCM convertidos se mostrarán en el área de salida a la derecha. Cada archivo muestra tamaño original, tamaño convertido y otra información. Como PCM es un formato de datos crudos, algunos navegadores pueden no poder reproducirlo directamente, puede descargarlo y usarlo en software de audio profesional.',
            note: 'Los archivos PCM son grandes, asegure suficiente espacio de almacenamiento.'
        },
        {
            title: 'Descargar Resultados de Conversión',
            description: 'Después de estar satisfecho con los resultados de conversión, puede hacer clic en el botón <strong>"Descargar PCM"</strong> debajo de cada archivo para guardar individualmente, o usar el botón <strong>"Descarga por Lotes (ZIP)"</strong> en la parte superior del área de salida para empaquetar todos los archivos PCM convertidos en un archivo ZIP para descargar de una sola vez. Todo el procesamiento se realiza localmente en su navegador, asegurando la privacidad y seguridad de sus datos de audio.',
            note: 'Los archivos PCM descargados pueden usarse directamente en APIs de reconocimiento de voz, software de análisis de audio u otras aplicaciones que admitan formato PCM.'
        }
    ],
    
    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido exitosamente cómo usar nuestra herramienta de audio a PCM. Ahora puede convertir audio de varios formatos a datos PCM crudos para reconocimiento de voz, análisis de audio, procesamiento de audio profesional y otros escenarios de aplicación.',
    
    relatedToolsTitle: 'Herramientas Relacionadas que Pueden Interesarle',
    relatedTools: [
        {
            name: 'Audio a MP3',
            description: 'Convierta audio a formato MP3 con la mejor compatibilidad para reproducción de música y uso compartido.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio a WAV',
            description: 'Convierta audio a formato WAV sin pérdidas para edición profesional y archivo.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio a M4A',
            description: 'Convierta audio a formato M4A adecuado para dispositivos Apple.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Imagen a Arte ASCII',
            description: 'Convierta imágenes a arte de caracteres ASCII para efectos de arte de texto únicos.',
            url: 'https://www.ufreetools.com/tool/image-to-ascii'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Detalles del Formato de Audio PCM',
            description: 'Conozca los principios y detalles técnicos de la Modulación por Impulsos Codificados',
            url: 'https://es.wikipedia.org/wiki/Modulaci%C3%B3n_por_impulsos_codificados'
        },
        {
            name: 'Requisitos de Audio para Reconocimiento de Voz',
            description: 'Requisitos de formato de audio para las principales plataformas de reconocimiento de voz',
            url: 'https://developer.mozilla.org/es/docs/Web/Media/Formats'
        },
        {
            name: 'Fundamentos de Audio Digital',
            description: 'Explicación detallada de tasa de muestreo, profundidad de bits, canales y otros conceptos',
            url: 'https://es.wikipedia.org/wiki/Audio_digital'
        }
    ]
};
