export default {
    title: 'Editor de Volumen de Audio: Guía del Ajustador de Volumen de Audio Online',
    functionTitle: '¿Qué es el Editor de Volumen de Audio y sus Usos?',
    intro: 'Nuestro <strong>Editor de Volumen de Audio</strong> es una aplicación profesional online de ajuste de volumen de audio que puede ajustar el volumen de WAV, MP3, FLAC, OGG, AAC, M4A y muchos otros formatos de audio. Admite funciones de aumento, disminución, silencio y normalización de volumen, siendo ideal para procesamiento de audio, doblaje de video, producción de podcasts y edición musical. Con nuestro <strong>Ajustador de Volumen de Audio Online</strong>, puedes ajustar rápidamente los niveles de volumen, con procesamiento por lotes y control preciso de parámetros, sin necesidad de instalar software.',
    
    useCasesTitle: 'Casos de Uso Comunes para Ajuste de Volumen de Audio',
    useCases: [
        'Ajustar el volumen de archivos de audio para reproducción o compartir',
        'Unificar niveles de volumen entre múltiples archivos de audio para evitar diferencias',
        'Aumentar el volumen de audio para resolver problemas de volumen bajo',
        'Disminuir el volumen de audio para evitar incomodidad por volumen alto',
        'Normalizar audio para una experiencia de escucha óptima',
        'Ajustar volumen para doblaje de video para que coincida con las imágenes',
        'Procesar audio de podcasts para asegurar volumen consistente entre segmentos',
        'Procesar por lotes múltiples archivos de audio para mejorar eficiencia'
    ],
    
    tipTitle: 'Consejo Profesional:',
    tipContent: 'Ten cuidado al ajustar el volumen para evitar distorsión (clipping) por establecerlo demasiado alto. Recomendamos usar la función de normalización para ajustar automáticamente el audio a niveles óptimos. Para audio multicanal, la herramienta procesa todos los canales simultáneamente para mantener el balance.',
    
    conclusion: 'El <strong>Editor de Volumen de Audio</strong> es especialmente útil para creadores de video, hosts de podcasts, entusiastas de la música y profesionales de procesamiento de audio. Usando nuestro ajustador de volumen de audio online, puedes ajustar fácilmente el volumen de varios formatos de audio, con soporte para ajuste por multiplicador, ajuste en decibelios y normalización de volumen. Nuestra herramienta admite procesamiento por lotes, con todas las operaciones realizadas localmente en tu navegador para asegurar privacidad y seguridad del audio.',
    
    faqTitle: 'Preguntas Frecuentes',
    faqs: [
        {
            question: '¿Qué formatos de entrada admite el Editor de Volumen de Audio?',
            answer: 'Nuestro <strong>Ajustador de Volumen de Audio Online</strong> admite muchos formatos de audio comunes, incluyendo WAV, MP3, FLAC, OGG, AAC, M4A, WMA, AMR, AIFF, APE y más. Puedes subir múltiples archivos de audio en diferentes formatos para procesamiento por lotes. La herramienta detecta automáticamente el formato de entrada y lo procesa.'
        },
        {
            question: '¿Qué es la normalización de volumen y cómo la uso?',
            answer: 'La normalización de volumen es una técnica que ajusta automáticamente el volumen del audio analizando el nivel de pico y ajustándolo a niveles óptimos. Cuando está activada, la herramienta calcula automáticamente el mejor valor de ganancia para lograr una sonoridad ideal evitando la distorsión. Este es el método recomendado para manejar problemas de volumen.'
        },
        {
            question: '¿Cuál es la diferencia entre multiplicador de volumen y ajuste en decibelios (dB)?',
            answer: 'El multiplicador de volumen es un cambio relativo al volumen original - por ejemplo, 2x significa doble volumen, 0.5x significa mitad de volumen. El decibelio (dB) es una unidad logarítmica que coincide mejor con las características auditivas humanas - +6dB es aproximadamente doble volumen, -6dB es aproximadamente mitad de volumen. El ajuste en decibelios es más adecuado para procesamiento de audio profesional.'
        },
        {
            question: '¿Puedo ajustar el volumen de múltiples archivos de audio por lotes?',
            answer: '¡Por supuesto! Nuestro <strong>Editor de Volumen de Audio</strong> admite procesamiento por lotes. Puedes subir múltiples archivos de audio a la vez (arrastrar y soltar o selección de archivos admitida), y la herramienta procesará todos los archivos secuencialmente. Después del procesamiento, puedes descargar cada archivo ajustado individualmente, o usar la descarga por lotes para obtener todos los resultados en un solo archivo ZIP.'
        },
        {
            question: '¿El ajuste de volumen reducirá la calidad del audio?',
            answer: 'El ajuste de volumen en sí no reduce la calidad, pero ten en cuenta: aumentar el volumen demasiado puede causar distorsión (clipping), y disminuirlo para luego aumentarlo puede hacer que el ruido de fondo sea más notable. Recomendamos usar normalización o ajustes moderados. La herramienta admite salida en formato sin pérdida para la mejor calidad.'
        },
        {
            question: '¿Es seguro el procesamiento? ¿Mi audio se subirá a un servidor?',
            answer: '¡Completamente seguro! Nuestra herramienta usa tecnología puramente de frontend, con todo el procesamiento de audio realizado localmente en tu navegador. Tus archivos de audio nunca se suben a ningún servidor, asegurando privacidad y seguridad de datos. Puedes procesar con confianza archivos de audio que contengan contenido sensible.'
        },
        {
            question: '¿Cómo sé si el volumen del audio es apropiado?',
            answer: 'Para determinar si el volumen del audio es apropiado, considera estos estándares: 1) El nivel de pico no debe exceder 0dB para evitar distorsión; 2) La sonoridad promedio debe estar entre -14 y -16 LUFS (estándar de podcast); 3) Debe sonar cómodo y natural sin necesidad de ajustar frecuentemente el volumen de reproducción. Nuestra herramienta muestra información del volumen original para ayudarte a tomar decisiones informadas.'
        }
    ],
    
    tutorialTitle: 'Cómo Usar el Editor de Volumen de Audio',
    steps: [
        {
            title: 'Sube Tus Archivos de Audio',
            description: 'Primero, sube los archivos de audio que deseas ajustar. Puedes subir <strong>arrastrando archivos</strong> al área de carga o <strong>haciendo clic en examinar</strong> para seleccionar archivos. La herramienta admite WAV, MP3, FLAC, OGG, AAC, M4A y más. Puedes subir múltiples archivos a la vez para procesamiento por lotes.',
            note: 'Recomendamos previsualizar el audio original primero para entender el nivel de volumen actual antes de elegir el método de ajuste apropiado.'
        },
        {
            title: 'Previsualiza Archivos de Audio',
            description: 'Después de subir, verás todos los archivos de audio subidos en el área de previsualización a la izquierda. Cada archivo muestra nombre, formato e información de tamaño. Puedes hacer clic en el botón de reproducción para previsualizar y entender el volumen original. Haz clic en el icono de eliminar para remover archivos no deseados.',
            note: 'Para procesamiento por lotes, previsualiza primero la lista de audio para asegurar que todos los archivos necesarios estén correctamente subidos.'
        },
        {
            title: 'Configura Parámetros de Volumen',
            description: 'Antes de procesar, ajusta la configuración de volumen. Elige <strong>Multiplicador de Volumen</strong> (como 2x, 0.5x, etc.), establece <strong>Ganancia de Volumen (dB)</strong> (como +6dB, -3dB, etc.), o activa <strong>Normalización de Volumen</strong> para que la herramienta calcule automáticamente el volumen óptimo. Selecciona el método apropiado según tus necesidades.',
            note: 'Recomendamos usar la función de normalización - analiza automáticamente el audio y lo ajusta al volumen óptimo.'
        },
        {
            title: 'Ajusta el Volumen',
            description: 'Después de configurar, haz clic en el botón <strong>"Ajustar Volumen"</strong> para comenzar el procesamiento. La herramienta procesará todos los archivos de audio subidos secuencialmente, mostrando el progreso durante el procesamiento por lotes. El tiempo de procesamiento depende del tamaño y cantidad de archivos, con la mayoría de audios completándose en segundos.',
            note: 'Mantén la página abierta durante el procesamiento - no cierres la pestaña del navegador.'
        },
        {
            title: 'Previsualiza Resultados Ajustados',
            description: 'Después del procesamiento, el área de salida a la derecha muestra todos los archivos de audio ajustados. Cada archivo tiene un botón de <strong>Vista Previa</strong> para escuchar el resultado ajustado. Confirma que estés satisfecho antes de descargar.',
            note: 'Si el ajuste no es ideal, puedes volver a subir archivos y ajustar parámetros.'
        },
        {
            title: 'Descarga Resultados',
            description: 'Cuando estés satisfecho con los resultados, haz clic en el botón <strong>"Descargar Audio"</strong> debajo de cada archivo para guardar individualmente, o usa el botón <strong>"Descarga por Lote (ZIP)"</strong> en la parte superior del área de salida para descargar todos los archivos de audio ajustados en un solo archivo ZIP. Todo el procesamiento se realiza localmente en tu navegador, asegurando la privacidad y seguridad de tu audio.',
            note: 'Durante la descarga por lote, los archivos de audio en el ZIP mantienen sus nombres originales.'
        }
    ],
    
    successTitle: '¡Felicitaciones!',
    successContent: 'Has aprendido exitosamente cómo usar nuestro Editor de Volumen de Audio. Ahora puedes ajustar fácilmente el volumen de audio de varios formatos, para doblaje de video, producción de podcasts, edición musical y muchos otros propósitos.',
    
    relatedToolsTitle: 'Herramientas Relacionadas que Pueden Interesarte',
    relatedTools: [
        {
            name: 'Editor Visual de Audio',
            description: 'Editor de forma de onda de audio online con corte, fundido de entrada/salida y más funciones de edición.',
            url: 'https://www.ufreetools.com/tool/audio-visual-editor'
        },
        {
            name: 'Audio a MP3',
            description: 'Convierte audio a formato MP3 para ahorrar espacio de almacenamiento y facilitar compartir.',
            url: 'https://www.ufreetools.com/tool/audio-to-mp3'
        },
        {
            name: 'Audio a M4A',
            description: 'Convierte audio a formato M4A con excelente calidad y tamaño reducido.',
            url: 'https://www.ufreetools.com/tool/audio-to-m4a'
        },
        {
            name: 'Convertidor de Formato de Audio',
            description: 'Convierte entre varios formatos de audio para satisfacer diferentes necesidades.',
            url: 'https://www.ufreetools.com/tool/audio-to-wav'
        }
    ],
    
    referencesTitle: 'Recursos de Referencia',
    references: [
        {
            name: 'Principios de Normalización de Audio',
            description: 'Aprende sobre algoritmos de normalización de audio y mejores prácticas',
            url: 'https://en.wikipedia.org/wiki/Audio_normalization'
        },
        {
            name: 'Decibelio (dB) Explicado',
            description: 'Profundiza en las unidades de decibelio y sus aplicaciones de audio',
            url: 'https://en.wikipedia.org/wiki/Decibel'
        },
        {
            name: 'Fundamentos de Audio Digital',
            description: 'Aprende conceptos fundamentales y técnicas de procesamiento de audio digital',
            url: 'https://en.wikipedia.org/wiki/Digital_audio'
        }
    ]
};
