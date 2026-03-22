export default {
    title: 'Herramienta de Audio a MIDI: Guía del Convertidor de Audio a MIDI en Línea',
    functionTitle: '¿Qué es la Herramienta de Audio a MIDI y sus usos?',
    intro: 'Nuestra <strong>Herramienta de Audio a MIDI</strong> es una aplicación profesional de conversión de audio a MIDI en línea que puede convertir WAV, MP3, FLAC, OGG, AAC, M4A y otros formatos de audio a formato MIDI. MIDI (Musical Instrument Digital Interface) es un formato estándar de la industria musical que registra información musical como notas, velocidad y duración en lugar del audio en sí, por lo que es especialmente adecuado para producción musical, aprendizaje de arreglos, análisis musical y procesamiento de música digital. Usando nuestro <strong>Convertidor de Audio a MIDI en Línea</strong>, puede extraer rápidamente melodías del audio a notas MIDI, con soporte para procesamiento por lotes y control preciso de parámetros sin instalar ningún software.',
    
    useCasesTitle: 'Casos de Uso Comunes para Conversión de Audio a MIDI',
    useCases: [
        'Extraer melodías de grabaciones o archivos de audio para arreglos y producción musical',
        'Convertir melodías tarareadas o silbadas a MIDI para composición musical',
        'Analizar la estructura de notas de música existente para aprendizaje e investigación',
        'Crear versiones MIDI de música de fondo para videos o juegos',
        'Convertir interpretaciones de instrumentos reales a música digital para edición posterior',
        'Extraer melodías principales de canciones para producción de karaoke o acompañamiento',
        'Digitalizar canciones antiguas o música de discos de vinilo a formato MIDI',
        'Preparar materiales de partituras editables para educación musical'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'La calidad de conversión MIDI se ve muy afectada por la calidad del audio. El audio monoaural, claro y sin ruido produce los mejores resultados. Para música polifónica compleja, considere separar las pistas primero antes de convertir individualmente. Después de la conversión, puede editar y optimizar aún más los datos MIDI en software DAW.',
    
    conclusion: 'La <strong>herramienta de conversión de Audio a MIDI</strong> es particularmente útil para productores musicales, compositores, educadores musicales y entusiastas de la música. Al usar nuestro convertidor de audio a MIDI en línea, puede extraer melodías de cualquier audio a datos de notas MIDI editables para creación musical, arreglos, aprendizaje y análisis. Nuestra herramienta admite procesamiento por lotes con control de parámetros de sensibilidad, rango de notas y cuantización de tiempo, todo el procesamiento se realiza localmente en su navegador, garantizando la privacidad y seguridad de su audio.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de entrada admite la herramienta de Audio a MIDI?',
            answer: 'Nuestro <strong>Convertidor de Audio a MIDI en Línea</strong> admite múltiples formatos de audio comunes incluyendo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE y más. Puede cargar múltiples archivos de audio de diferentes formatos simultáneamente para conversión por lotes. La herramienta detecta automáticamente el formato de entrada y maneja la conversión.'
        },
        {
            question: '¿Qué es el formato MIDI? ¿Por qué convertir a MIDI?',
            answer: 'MIDI (Musical Instrument Digital Interface) es un formato digital que registra información de interpretación musical en lugar de audio real - registra notas, velocidad, duración, etc. Convertir a MIDI le permite: 1) Editar notas en software DAW; 2) Cambiar sonidos de instrumentos; 3) Ajustar tempo y tonalidad; 4) Usar para aprendizaje y análisis musical. Los archivos MIDI son pequeños y fáciles de editar y compartir.'
        },
        {
            question: '¿Cómo elegir la sensibilidad de conversión?',
            answer: 'La sensibilidad determina la precisión de detección de notas. Alta sensibilidad es adecuada para música compleja, detectando más detalles pero puede producir notas extra; Sensibilidad media es la configuración recomendada, equilibrando precisión y simplicidad; Baja sensibilidad es adecuada para melodías simples, detectando solo notas principales. Elija la sensibilidad apropiada según la complejidad del audio.'
        },
        {
            question: '¿Puedo convertir por lotes múltiples archivos de audio a MIDI?',
            answer: '¡Por supuesto! Nuestra <strong>Herramienta de Audio a MIDI</strong> admite procesamiento por lotes. Puede cargar múltiples archivos de audio a la vez (arrastrar y soltar o selección de archivos admitida), y la herramienta procesará todos los archivos secuencialmente. Después del procesamiento, puede descargar cada archivo MIDI convertido individualmente o usar la función de descarga por lotes para empaquetar todos los resultados en un archivo ZIP para descarga única.'
        },
        {
            question: '¿Qué factores afectan la calidad de conversión?',
            answer: 'La calidad de conversión MIDI se ve principalmente afectada por: 1) Calidad de audio - audio claro y sin ruido produce mejores resultados; 2) Complejidad musical - melodía simple convierte mejor que polifonía; 3) Tipo de instrumento - instrumentos claros como piano y guitarra funcionan mejor; 4) Formato de audio - formatos sin pérdida (WAV, FLAC) funcionan mejor que formatos con pérdida (MP3). Recomendamos usar audio original de alta calidad.'
        },
        {
            question: '¿Es seguro el proceso de conversión? ¿El audio se cargará en servidores?',
            answer: '¡Completamente seguro! Nuestra herramienta usa tecnología frontend pura, y todo el procesamiento de audio se realiza localmente en su navegador. Sus archivos de audio no se cargan en ningún servidor, garantizando privacidad y seguridad de datos. Puede procesar con confianza archivos de audio que contengan contenido sensible.'
        },
        {
            question: '¿En qué software se pueden usar los archivos MIDI convertidos?',
            answer: 'Los archivos MIDI convertidos se pueden usar en casi todo el software musical, incluyendo: Software DAW (Cubase, Logic Pro, FL Studio, Ableton Live, etc.), software de notación (Sibelius, Finale, MuseScore, etc.), instrumentos virtuales, software de aprendizaje musical, etc. MIDI es un formato universal con excelente compatibilidad.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar la Herramienta de Audio a MIDI',
    steps: [
        {
            title: 'Cargar Sus Archivos de Audio',
            description: 'Primero, cargue los archivos de audio que desea convertir a formato MIDI. Puede cargar de dos maneras: <strong>arrastrar y soltar archivos</strong> en el área de carga o <strong>hacer clic para explorar</strong> y seleccionar archivos. La herramienta admite WAV, MP3, FLAC, OGG, AAC, M4A y más formatos. Puede cargar múltiples archivos a la vez para procesamiento por lotes.',
            note: 'Use archivos de audio claros y sin ruido para mejores resultados. El audio monoaural convierte mejor.'
        },
        {
            title: 'Vista Previa de Archivos de Audio',
            description: 'Después de cargar, verá todos los archivos de audio cargados en el área de vista previa a la izquierda. Cada archivo muestra nombre de archivo, formato e información de tamaño. Puede hacer clic en el botón de reproducción para previsualizar el audio y confirmar que ha seleccionado los archivos correctos. Para eliminar un archivo, haga clic en el icono de eliminar.',
            note: 'Para procesamiento por lotes, recomendamos previsualizar la lista de audio primero para asegurar que todos los archivos a convertir estén correctamente cargados.'
        },
        {
            title: 'Configurar Parámetros MIDI',
            description: 'Antes de convertir, puede ajustar la configuración de salida. Seleccione la <strong>sensibilidad de conversión</strong> apropiada (alta/media/baja), configure el <strong>rango de notas</strong> (notas mínima y máxima), y configure la <strong>cuantización de tiempo</strong> (precisión de duración de notas). Estos parámetros le ayudan a lograr mejores resultados de conversión.',
            note: 'Sensibilidad media y rango de notas automático funcionan bien para la mayoría del audio. Si los resultados no son ideales, intente ajustar parámetros.'
        },
        {
            title: 'Convertir a Formato MIDI',
            description: 'Después de configurar, haga clic en el botón <strong>"Convertir a MIDI"</strong> para comenzar el procesamiento. La herramienta procesará todos los archivos de audio cargados secuencialmente, mostrando información de progreso durante el procesamiento por lotes. El tiempo de conversión depende del tamaño y cantidad de archivos, la mayoría del audio se completa en segundos a decenas de segundos.',
            note: 'Mantenga la página abierta durante la conversión. No cierre la pestaña del navegador.'
        },
        {
            title: 'Vista Previa de Resultados de Conversión',
            description: 'Después de completar la conversión, todos los archivos MIDI convertidos se mostrarán en el área de salida a la derecha. Cada archivo proporciona función de <strong>vista previa</strong>, mostrando información de cantidad de notas y duración. Puede abrir el archivo MIDI en software DAW para edición y optimización detallada.',
            note: 'Los archivos MIDI se pueden abrir en cualquier software musical, se recomienda usar DAW profesional para edición posterior.'
        },
        {
            title: 'Descargar Resultados de Conversión',
            description: '¿Satisfecho con los resultados de conversión? Puede hacer clic en el botón <strong>"Descargar MIDI"</strong> debajo de cada archivo para guardar individualmente, o usar el botón <strong>"Descarga por Lotes (ZIP)"</strong> en la parte superior del área de salida para empaquetar todos los archivos MIDI convertidos en un archivo ZIP para descarga única. Todo el procesamiento se realiza localmente en su navegador, garantizando la privacidad y seguridad de su audio.',
            note: 'Durante la descarga por lotes, el audio en el archivo ZIP mantendrá los nombres de archivo originales con extensión .mid añadida automáticamente.'
        }
    ],
    
    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido exitosamente cómo usar nuestra herramienta de Audio a MIDI. Ahora puede convertir fácilmente audio de varios formatos a formato MIDI para creación musical, aprendizaje de arreglos, análisis musical y más.',
    
    relatedToolsTitle: 'Herramientas Relacionadas que Pueden Interesarle',
    relatedTools: [
        {
            name: 'Audio a MP3',
            description: 'Convertir audio a formato MP3, ahorrar espacio de almacenamiento para compartir fácilmente.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio a WAV',
            description: 'Convertir audio a formato WAV sin pérdida, adecuado para procesamiento de audio profesional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio a M4A',
            description: 'Convertir audio a formato M4A, compatible con dispositivos Apple, excelente calidad de sonido.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio a PCM',
            description: 'Convertir audio a formato PCM sin procesar, adecuado para procesamiento y análisis de audio profesional.',
            url: 'https://www.ufreetools.com/tool/audio-to-pcm'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Estándar de Formato MIDI',
            description: 'Conocer las especificaciones técnicas y casos de uso del formato MIDI',
            url: 'https://en.wikipedia.org/wiki/MIDI'
        },
        {
            name: 'Tecnología de Audio a MIDI',
            description: 'Profundizar en detección de tono y algoritmos de conversión MIDI',
            url: 'https://en.wikipedia.org/wiki/Audio_to_score'
        },
        {
            name: 'Recuperación de Información Musical',
            description: 'Explorar recuperación de información musical y tecnología de transcripción musical automática',
            url: 'https://en.wikipedia.org/wiki/Music_information_retrieval'
        }
    ]
};
