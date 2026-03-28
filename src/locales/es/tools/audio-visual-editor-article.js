export default {
    title: 'Editor Visual de Audio: Guía del Editor de Forma de Onda de Audio en Línea',
    functionTitle: '¿Qué es el Editor Visual de Audio y sus Usos?',
    intro: 'Nuestro <strong>Editor Visual de Audio</strong> es una aplicación profesional de edición de forma de onda de audio en línea que admite la edición visual de WAV, MP3, FLAC, OGG, AAC, M4A y otros formatos de audio. Con una interfaz intuitiva de visualización de forma de onda, puede seleccionar con precisión segmentos de audio y realizar operaciones de edición profesionales como recortar, eliminar, fundido de entrada/salida, ajuste de volumen, silenciar, normalizar e invertir.',
    
    useCasesTitle: 'Casos de Uso Comunes para Edición Visual de Audio',
    useCases: [
        'Editar y recortar archivos de audio, eliminar partes no deseadas',
        'Producir podcasts y programas de radio con postproducción de audio',
        'Crear música de fondo para videos, ajustar duración y efectos de audio',
        'Hacer tonos de llamada y sonidos de notificación, recortar clips de audio',
        'Procesar grabaciones de voz, eliminar silencio y ruido',
        'Crear mezclas musicales, combinar múltiples clips de audio',
        'Ajustar volumen de audio, realizar normalización',
        'Agregar efectos de fundido de entrada/salida para transiciones más suaves'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Recomendamos hacer una copia de seguridad de los archivos de audio originales antes de editar. Use la función de selección para elegir con precisión los segmentos de audio que desea editar. Los efectos de fundido de entrada/salida hacen que las transiciones de audio sean más naturales. La función de normalizar optimiza el nivel de volumen general del audio.',
    
    conclusion: '<strong>Editor Visual de Audio</strong> es especialmente útil para productores de podcasts, entusiastas de la música, creadores de videos y principiantes en edición de audio. Con nuestro editor de audio en línea, puede realizar edición precisa de audio en una interfaz de forma de onda intuitiva, soportando varias operaciones profesionales como recortar, eliminar, fundido de entrada/salida, silenciar, normalizar e invertir.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de entrada admite el Editor Visual de Audio?',
            answer: 'Nuestro <strong>Editor de Audio en Línea</strong> admite muchos formatos de audio comunes incluyendo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE y más. Puede subir cualquier formato compatible para editarlo, y exportar como WAV o MP3 después de editar.'
        },
        {
            question: '¿Cómo selecciono un segmento de audio para editar?',
            answer: 'En el área de visualización de forma de onda, mantenga presionado el botón izquierdo del ratón y arrastre para seleccionar un segmento de audio. El área seleccionada se resaltará en azul, mostrando el tiempo de inicio, tiempo de finalización y duración de la selección. Después de seleccionar, puede usar herramientas de edición como recortar, eliminar, fundido de entrada/salida, etc.'
        },
        {
            question: '¿Qué hacen los efectos de fundido de entrada/salida?',
            answer: 'El efecto de fundido de entrada aumenta gradualmente el audio desde el silencio hasta el volumen normal, mientras que el efecto de fundido de salida disminuye gradualmente el audio desde el volumen normal hasta el silencio. Estos efectos hacen que el inicio y el final del audio sean más naturales, evitando cambios repentinos de volumen, especialmente adecuados para música de fondo y transiciones de audio.'
        },
        {
            question: '¿Qué es la función de normalizar?',
            answer: 'La normalización es el proceso de ajustar el volumen del audio a un nivel óptimo. Analiza el volumen máximo en el audio, luego ajusta proporcionalmente el volumen general para que el volumen máximo alcance cerca pero no exceda el máximo permitido (generalmente -0.5dB). Esto hace que el volumen general del audio sea más lleno mientras evita la distorsión de recorte.'
        },
        {
            question: '¿Es seguro el proceso de edición? ¿Se subirá el audio a los servidores?',
            answer: '¡Completamente seguro! Nuestra herramienta usa tecnología de frontend pura, todo el procesamiento de audio se realiza localmente en su navegador. Sus archivos de audio no se suben a ningún servidor, garantizando privacidad y seguridad de datos. Puede editar con confianza archivos de audio que contengan contenido sensible.'
        },
        {
            question: '¿Qué formatos puedo exportar?',
            answer: 'Después de editar, puede exportar como WAV (formato sin pérdida) o MP3 (formato comprimido). Si solo seleccionó parte del audio, puede elegir exportar el audio completo o solo la selección. La tasa de muestreo original y el número de canales se preservan durante la exportación.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar el Editor Visual de Audio',
    steps: [
        {
            title: 'Subir Su Archivo de Audio',
            description: 'Primero suba el archivo de audio que desea editar. Puede subir de dos maneras: <strong>arrastrar el archivo</strong> al área de carga o <strong>hacer clic en examinar</strong> para seleccionar un archivo. La herramienta admite WAV, MP3, FLAC, OGG, AAC, M4A y muchos otros formatos.',
            note: 'Recomendamos usar formatos sin pérdida (como WAV, FLAC) para editar para mantener la mejor calidad de audio.'
        },
        {
            title: 'Ver Forma de Onda de Audio',
            description: 'Después de subir, la forma de onda del audio se mostrará automáticamente en el área de edición. La forma de onda muestra los cambios de amplitud del audio, permitiéndole ver visualmente la estructura del audio. La información del archivo se muestra arriba, incluyendo duración, tasa de muestreo y número de canales.',
            note: 'Los picos en la forma de onda representan partes más fuertes, mientras que las áreas planas representan partes más suaves o silenciosas.'
        },
        {
            title: 'Seleccionar Región de Edición',
            description: '<strong>Mantenga presionado el botón izquierdo del ratón y arrastre</strong> sobre la forma de onda para seleccionar un segmento de audio. El área seleccionada se resaltará en azul, mostrando el rango de tiempo de la selección. Puede reproducir la selección para confirmar que es correcta.',
            note: 'Si no se selecciona ninguna región, algunas herramientas de edición (como normalizar) se aplicarán a todo el audio.'
        },
        {
            title: 'Usar Herramientas de Edición',
            description: 'Después de seleccionar una región, use las herramientas de edición a continuación: <strong>Recortar</strong> mantiene la selección y elimina otras partes, <strong>Eliminar</strong> elimina la selección, <strong>Fundido de Entrada/Salida</strong> agrega efectos de gradiente, <strong>Silenciar</strong> silencia la selección, <strong>Normalizar</strong> optimiza el volumen, <strong>Invertir</strong> reproduce el audio al revés.',
            note: 'Las operaciones de edición surten efecto inmediatamente, recomendamos verificar cuidadosamente los resultados antes de exportar.'
        },
        {
            title: 'Reproducir y Previsualizar',
            description: 'Use los controles de reproducción para <strong>reproducir/pausar</strong>, <strong>adelantar/retroceder</strong>, y <strong>detener</strong> el audio. Una línea indicadora roja muestra la posición de reproducción actual. También puede ajustar el control deslizante de volumen para controlar el volumen de reproducción.',
            note: 'El ajuste de volumen de reproducción no afecta el audio exportado, que mantiene el nivel de volumen original.'
        },
        {
            title: 'Exportar Resultados de Edición',
            description: 'Cuando esté satisfecho con los resultados de edición, seleccione el formato de exportación (WAV o MP3), luego haga clic en el botón <strong>"Exportar Audio Completo"</strong> o <strong>"Exportar Selección"</strong>. El archivo se descargará automáticamente a su dispositivo. Todo el procesamiento se realiza localmente en el navegador, garantizando la privacidad y seguridad del audio.',
            note: 'El formato WAV mantiene calidad sin pérdida pero tamaño de archivo más grande; el formato MP3 tiene tamaño de archivo más pequeño, adecuado para compartir.'
        }
    ],
    
    successTitle: '¡Felicitaciones!',
    successContent: 'Ha aprendido con éxito cómo usar nuestro Editor Visual de Audio. Ahora puede editar fácilmente archivos de audio en varios formatos, realizar operaciones profesionales como recortar, fundido de entrada/salida, ajuste de volumen y más, satisfaciendo diversas necesidades como producción de podcasts, edición de música y procesamiento de audio.',
    
    relatedToolsTitle: 'Herramientas Relacionadas',
    relatedTools: [
        {
            name: 'Audio a MP3',
            description: 'Convertir audio a formato MP3, ahorrar espacio de almacenamiento y fácil de compartir.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio a WAV',
            description: 'Convertir audio a formato WAV sin pérdida, adecuado para procesamiento de audio profesional.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        },
        {
            name: 'Audio a M4A',
            description: 'Convertir audio a formato M4A, alta calidad con tamaño pequeño.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Audio a Texto',
            description: 'Convertir el habla en audio a texto, soporta múltiples idiomas.',
            url: 'https://www.ufreetools.com/tool/audio-to-text'
        }
    ],
    
    referencesTitle: 'Referencias',
    references: [
        {
            name: 'Principios de Edición de Forma de Onda de Audio',
            description: 'Aprender sobre los principios técnicos de visualización y edición de forma de onda de audio',
            url: 'https://en.wikipedia.org/wiki/Waveform'
        },
        {
            name: 'Procesamiento de Audio Digital',
            description: 'Profundizar en técnicas de procesamiento y edición de audio digital',
            url: 'https://en.wikipedia.org/wiki/Digital_audio_editing'
        },
        {
            name: 'Guía de Formatos de Audio',
            description: 'Conocer las características y casos de uso de diferentes formatos de audio',
            url: 'https://en.wikipedia.org/wiki/Audio_file_format'
        }
    ]
};
