export default {
    title: 'Herramienta de Audio a SRT: Guía del Convertidor de Audio a Subtítulos en Línea',
    functionTitle: '¿Qué es la Herramienta de Audio a SRT y Para Qué Sirve?',
    intro: 'Nuestra <strong>Herramienta de Audio a SRT</strong> es una aplicación profesional en línea que convierte formatos de audio como WAV, MP3, FLAC, OGG, AAC, M4A al formato de subtítulos SRT. SRT (SubRip Text) es uno de los formatos de subtítulos más utilizados, compatible con casi todos los reproductores de video y software de edición. Nuestra <strong>convertidor de audio a subtítulos en línea</strong> detecta automáticamente segmentos de voz mediante análisis de energía de audio y genera códigos de tiempo precisos.',
    
    useCasesTitle: 'Casos de Uso Comunes para la Conversión de Audio a SRT',
    useCases: [
        'Crear archivos de subtítulos SRT para videos en YouTube, Bilibili y otras plataformas',
        'Segmentar automáticamente grabaciones de podcasts para añadir texto posteriormente',
        'Generar líneas de tiempo de subtítulos para videos de cursos en línea',
        'Convertir grabaciones de reuniones en archivos de subtítulos con códigos de tiempo',
        'Preparar subtítulos para videos cortos (TikTok, Instagram Reels)',
        'Segmentar grabaciones de audiolibros para crear subtítulos con texto',
        'Generar códigos de tiempo de subtítulos para videos de letras de canciones',
        'Crear estructuras de subtítulos para material crudo de entrevistas o documentales'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Esta herramienta detecta segmentos de voz mediante análisis de energía de audio y no transcribe automáticamente el habla. El archivo SRT generado contiene códigos de tiempo y texto de marcador que puede reemplazar con contenido real en software como Aegisub o Subtitle Edit.',
    
    conclusion: 'La <strong>Herramienta de Audio a SRT</strong> es especialmente útil para creadores de video, productores de podcasts y cualquier persona que necesite añadir subtítulos. Nuestra herramienta soporta procesamiento por lotes con controles de sensibilidad, duración de subtítulos e intervalo de silencio, todo procesado localmente en su navegador.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de entrada soporta la herramienta?',
            answer: 'Nuestra <strong>convertidor de audio a subtítulos en línea</strong> soporta WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF y APE. Puede cargar múltiples archivos simultáneamente para procesamiento por lotes.'
        },
        {
            question: '¿Qué es el formato SRT?',
            answer: 'SRT (SubRip Text) es uno de los formatos de subtítulos más populares. Utiliza formato de texto plano con números de secuencia, códigos de tiempo y texto de subtítulos. Compatible con casi todos los reproductores y editores de video.'
        },
        {
            question: '¿La herramienta reconoce automáticamente el contenido del habla?',
            answer: 'Actualmente, esta herramienta detecta segmentos de voz y silencio mediante análisis de energía para generar códigos de tiempo, pero no transcribe automáticamente el habla a texto. Necesitará software de edición de subtítulos para añadir el texto real.'
        },
        {
            question: '¿Cómo obtener códigos de tiempo más precisos?',
            answer: 'Para mejores resultados: 1) Use archivos de audio de alta calidad con poco ruido; 2) Seleccione la sensibilidad adecuada; 3) Ajuste el intervalo mínimo de silencio según la velocidad del habla; 4) Aplique reducción de ruido previa si es necesario.'
        },
        {
            question: '¿Puedo convertir múltiples archivos por lotes?',
            answer: '¡Absolutamente! Nuestra herramienta soporta procesamiento por lotes. Puede cargar múltiples archivos a la vez y descargarlos individualmente o como paquete ZIP.'
        },
        {
            question: '¿Es seguro el proceso de conversión?',
            answer: '¡Completamente seguro! Toda el procesamiento se realiza localmente en su navegador. Sus archivos de audio nunca se suben a ningún servidor.'
        },
        {
            question: '¿Dónde puedo usar los archivos SRT convertidos?',
            answer: 'Los archivos SRT son compatibles con Aegisub, Subtitle Edit, VLC, PotPlayer, Adobe Premiere, Final Cut Pro, DaVinci Resolve, y pueden subirse directamente a YouTube, Vimeo y otras plataformas de video.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar la Herramienta de Audio a SRT',
    steps: [
        {
            title: 'Suba Sus Archivos de Audio',
            description: 'Suba los archivos de audio que desea convertir. Puede <strong>arrastrar archivos</strong> al área de carga o <strong>hacer clic para navegar</strong>. Soporta WAV, MP3, FLAC, OGG, AAC, M4A y más formatos.',
            note: 'Para mejores resultados, use archivos de audio claros con poco ruido de fondo.'
        },
        {
            title: 'Vista Previa de los Archivos de Audio',
            description: 'Después de subir, verá la lista de archivos con nombre, formato y tamaño. Puede reproducirlos para confirmar que son los correctos.',
            note: 'En procesamiento por lotes, verifique que todos los archivos estén correctamente cargados.'
        },
        {
            title: 'Configure los Parámetros',
            description: 'Ajuste la <strong>sensibilidad de detección</strong>, <strong>duración máxima de subtítulo</strong>, <strong>intervalo mínimo de silencio</strong> y la <strong>codificación del archivo</strong>.',
            note: 'Sensibilidad media, 5 segundos de duración máxima y 0.5 segundos de silencio son recomendados para la mayoría de audios.'
        },
        {
            title: 'Convertir a SRT',
            description: 'Haga clic en <strong>"Convertir a SRT"</strong> para iniciar el procesamiento. La herramienta analiza los cambios de energía de cada archivo y detecta segmentos de voz.',
            note: 'Mantenga la página abierta durante la conversión.'
        },
        {
            title: 'Vista Previa de los Resultados',
            description: 'Después de la conversión, se mostrarán todos los archivos SRT con <strong>vista previa de subtítulos</strong>, cantidad, duración y tamaño.',
            note: 'Los subtítulos generados contienen texto de marcador que puede reemplazar con contenido real.'
        },
        {
            title: 'Descargar los Resultados',
            description: 'Descargue individualmente con el botón <strong>"Descargar SRT"</strong> o use <strong>"Descarga por Lotes (ZIP)"</strong> para descargar todos juntos.',
            note: 'En descarga por lotes, los archivos mantienen sus nombres originales con extensión .srt.'
        }
    ],
    
    successTitle: '¡Felicidades!',
    successContent: 'Ha aprendido a usar nuestra herramienta de Audio a SRT. Ahora puede generar fácilmente códigos de tiempo de subtítulos precisos para sus archivos de audio.',
    
    relatedToolsTitle: 'Herramientas Relacionadas',
    relatedTools: [
        {
            name: 'Audio a MP3',
            description: 'Convierta audio a formato MP3 para reducir tamaño y facilitar compartir.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio a WAV',
            description: 'Convierta audio a formato WAV sin pérdida para procesamiento profesional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio a MIDI',
            description: 'Convierta audio a formato MIDI para producción musical y análisis.',
            url: 'https://www.ufreetools.com/tool/audio-to-midi'
        },
        {
            name: 'Audio a M4A',
            description: 'Convierta audio a formato M4A compatible con dispositivos Apple.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Especificación del Formato SRT',
            description: 'Conozca la especificación técnica y aplicaciones del formato SRT',
            url: 'https://en.wikipedia.org/wiki/SubRip'
        },
        {
            name: 'Tecnología de Detección de Energía de Audio',
            description: 'Profundice en algoritmos de detección de actividad de voz basados en energía',
            url: 'https://en.wikipedia.org/wiki/Voice_activity_detection'
        },
        {
            name: 'Mejores Prácticas de Creación de Subtítulos',
            description: 'Aprenda flujos de trabajo profesionales de creación de subtítulos',
            url: 'https://en.wikipedia.org/wiki/Subtitle'
        }
    ]
};
