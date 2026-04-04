export default {
    title: 'Herramienta de Bucle de Audio: Guía del Creador de Bucles de Audio Online',
    functionTitle: '¿Qué es la Herramienta de Bucle de Audio y sus Usos?',
    intro: 'Nuestra <strong>Herramienta de Bucle de Audio</strong> es una aplicación profesional online para crear bucles de audio que puede procesar WAV, MP3, FLAC, OGG, AAC, M4A y otros formatos de audio. Puedes establecer el número de bucles, el tiempo de intervalo y elegir si añadir efecto de fundido para transiciones más suaves. Con nuestro <strong>Creador de Bucles de Audio Online</strong>, puedes crear rápidamente música de fondo, audio de meditación, tonos de llamada, efectos de sonido de juegos, etc. Admite procesamiento por lotes y control preciso de parámetros sin necesidad de instalar ningún software.',
    
    useCasesTitle: 'Casos de Uso Comunes para Bucle de Audio',
    useCases: [
        'Crear música de fondo en bucle para videos, juegos o aplicaciones',
        'Crear audio en bucle para meditación o relajación',
        'Hacer tonos de llamada o sonidos de notificación',
        'Crear música de fondo en bucle para presentaciones PPT',
        'Crear acompañamiento en bucle para práctica musical',
        'Crear efectos de sonido en bucle para ASMR o ayuda para dormir',
        'Crear música de intro/outro para transmisiones en vivo o podcasts',
        'Crear música de fondo en bucle para clases de fitness o yoga'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Para obtener los mejores resultados, elige clips de audio con buena calidad de sonido y con un inicio y final naturales. Establecer un tiempo de intervalo apropiado (500-1000ms) hace que las transiciones del bucle sean más suaves. Para bucles sin interrupciones, establece el intervalo en 0.',
    
    conclusion: '<strong>El Creador de Bucles de Audio</strong> es especialmente útil para creadores de video, desarrolladores de juegos, creadores de música y entusiastas de la meditación. Con nuestra herramienta de bucle de audio online, puedes convertir cualquier clip de audio en formato de bucle para varios proyectos creativos. Nuestra herramienta admite procesamiento por lotes con parámetros como número de bucles, tiempo de intervalo y efecto de fundido. Todo el procesamiento se realiza localmente en tu navegador, garantizando la privacidad y seguridad de tu audio.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de entrada admite la herramienta de bucle de audio?',
            answer: 'Nuestra <strong>Herramienta de Bucle de Audio Online</strong> admite múltiples formatos de audio comunes incluyendo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE, etc. Puedes cargar múltiples archivos de audio en diferentes formatos para procesamiento por lotes. La herramienta detecta automáticamente el formato de entrada y lo procesa.'
        },
        {
            question: '¿Cuál es el número máximo de bucles?',
            answer: 'Nuestra herramienta admite configurar de 2 a 100 bucles. Puedes ajustar libremente según tus necesidades, ya sea un bucle doble simple o horas de audio en bucle. El sistema calcula automáticamente la duración final de salida para tu referencia.'
        },
        {
            question: '¿Qué hace el tiempo de intervalo de bucle?',
            answer: 'El tiempo de intervalo de bucle es el tiempo de silencio entre cada bucle de audio. Establecer un intervalo apropiado (500-1000ms) hace que las transiciones del bucle sean más naturales, evitando reinicios repentinos. Si necesitas un efecto de bucle sin interrupciones, establece el intervalo en 0.'
        },
        {
            question: '¿Qué es el efecto de fundido?',
            answer: 'El efecto de fundido reduce gradualmente el volumen al final del audio. Cuando está activado, la herramienta añade un fundido al final del último bucle, haciendo que el final del audio sea más suave en lugar de detenerse abruptamente. Esto es especialmente útil para audio de meditación, música de fondo, etc.'
        },
        {
            question: '¿Puedo procesar múltiples archivos de audio por lote?',
            answer: '¡Por supuesto! Nuestra <strong>Herramienta de Bucle de Audio</strong> admite procesamiento por lotes. Puedes cargar múltiples archivos de audio a la vez (arrastrar y soltar o selección de archivos compatible), y la herramienta procesa todos los archivos secuencialmente. Después del procesamiento, puedes descargar cada audio en bucle individualmente o usar la descarga por lote para obtener todos los resultados en un archivo ZIP.'
        },
        {
            question: '¿Es seguro el procesamiento? ¿El audio se carga a servidores?',
            answer: '¡Completamente seguro! Nuestra herramienta usa tecnología puramente frontend, todo el procesamiento de audio se realiza localmente en tu navegador. Tus archivos de audio no se cargan a ningún servidor, garantizando privacidad y seguridad de datos. Puedes procesar con confianza archivos de audio con contenido sensible.'
        },
        {
            question: '¿Cuál es el formato de salida?',
            answer: 'La versión actual produce en formato WAV, que es un formato de audio sin pérdida que preserva la calidad original. El nombre del archivo de audio en bucle de salida añade automáticamente el sufijo "_loop" para facilitar la identificación y organización.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar la Herramienta de Bucle de Audio',
    steps: [
        {
            title: 'Carga Tus Archivos de Audio',
            description: 'Primero carga los archivos de audio que quieres poner en bucle. Puedes cargar de dos formas: <strong>arrastrar y soltar archivos</strong> al área de carga o <strong>hacer clic para explorar</strong> y seleccionar archivos. La herramienta admite WAV, MP3, FLAC, OGG, AAC, M4A y otros formatos. Puedes cargar múltiples archivos a la vez para procesamiento por lotes.',
            note: 'Recomendamos elegir clips de audio con un inicio y final naturales para un mejor efecto de bucle.'
        },
        {
            title: 'Vista Previa de Archivos de Audio',
            description: 'Después de cargar, verás todos los archivos de audio cargados en el área de vista previa izquierda. Cada archivo muestra el nombre del archivo, tamaño y duración. Puedes hacer clic en el botón de reproducción para previsualizar el audio y confirmar que seleccionaste los archivos correctos. Para eliminar un archivo, haz clic en el icono de eliminar.',
            note: 'Para procesamiento por lotes, recomendamos previsualizar primero la lista de audio para asegurar que todos los archivos necesarios se hayan cargado correctamente.'
        },
        {
            title: 'Configura los Parámetros de Bucle',
            description: 'Antes de procesar, puedes ajustar la configuración del bucle. Establece el <strong>número de bucles</strong> (2-100 veces), ajusta el <strong>tiempo de intervalo de bucle</strong> (0-5000 milisegundos), elige si activar el <strong>efecto de fundido</strong>. Estos parámetros te ayudan a obtener el efecto de bucle ideal.',
            note: 'Establecer el intervalo en 0 logra un bucle sin interrupciones, 500-1000ms hace las transiciones más naturales.'
        },
        {
            title: 'Generar Audio en Bucle',
            description: 'Después de configurar, haz clic en el botón <strong>"Crear Audio en Bucle"</strong> para comenzar el procesamiento. La herramienta procesa todos los archivos de audio cargados secuencialmente, mostrando el progreso para procesamiento por lotes. El tiempo de procesamiento depende del tamaño del archivo y la cantidad, la mayoría del audio se puede completar en segundos.',
            note: 'Por favor mantén la página abierta durante el procesamiento, no cierres la pestaña del navegador.'
        },
        {
            title: 'Vista Previa de Resultados de Procesamiento',
            description: 'Después del procesamiento, el área de salida derecha muestra todos los archivos de audio en bucle. Cada archivo proporciona función de <strong>vista previa de reproducción</strong>, mostrando la duración original, duración de salida y número de bucles. Puedes hacer clic en el botón de reproducción para previsualizar y confirmar que cumple con tus necesidades.',
            note: 'Si no estás satisfecho con el resultado, puedes ajustar los parámetros y reprocesar.'
        },
        {
            title: 'Descargar Resultados de Procesamiento',
            description: 'Cuando estés satisfecho con los resultados, puedes hacer clic en el botón <strong>"Descargar Audio"</strong> debajo de cada archivo para guardar individualmente, o usar el botón <strong>"Descarga por Lote (ZIP)"</strong> en la parte superior del área de salida para descargar todos los archivos de audio en bucle en un archivo ZIP de una vez. Todo el procesamiento se realiza localmente en el navegador, garantizando la privacidad y seguridad de tu audio.',
            note: 'Para descarga por lote, el audio en el archivo ZIP mantiene el nombre del archivo original con el sufijo _loop añadido automáticamente.'
        }
    ],
    
    successTitle: '¡Felicitaciones!',
    successContent: 'Has aprendido exitosamente cómo usar nuestra herramienta de bucle de audio. Ahora puedes crear fácilmente audio en bucle para música de fondo, audio de meditación, tonos de llamada y varios otros propósitos.',
    
    relatedToolsTitle: 'Herramientas Relacionadas que Pueden Interesarte',
    relatedTools: [
        {
            name: 'Velocidad de Audio',
            description: 'Ajusta la velocidad de reproducción de audio de 0.25x a 4x.',
            url: 'https://www.ufreetools.com/tool/audio-speed'
        },
        {
            name: 'Unir Audio',
            description: 'Fusiona múltiples archivos de audio en uno.',
            url: 'https://www.ufreetools.com/tool/audio-joiner'
        },
        {
            name: 'Reversar Audio',
            description: 'Reproduce audio al revés para efectos de sonido únicos.',
            url: 'https://www.ufreetools.com/tool/audio-reverse'
        },
        {
            name: 'Editor de Volumen',
            description: 'Ajusta el volumen del audio con soporte de procesamiento por lotes.',
            url: 'https://www.ufreetools.com/tool/audio-volume-editor'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Tecnología de Bucle de Audio',
            description: 'Aprende sobre los principios técnicos y las mejores prácticas del procesamiento de bucles de audio',
            url: 'https://en.wikipedia.org/wiki/Loop_(music)'
        },
        {
            name: 'Estándar de Formato WAV',
            description: 'Profundiza en las especificaciones técnicas del formato de audio WAV',
            url: 'https://en.wikipedia.org/wiki/WAV'
        },
        {
            name: 'Procesamiento de Audio Digital',
            description: 'Explora las técnicas de procesamiento y edición de audio digital',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
