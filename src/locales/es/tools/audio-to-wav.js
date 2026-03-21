export default {
  name: 'Audio a WAV',
  description: 'Convierte varios formatos de audio a archivos WAV de alta calidad sin pérdida',
  longDescription: 'Convertidor gratuito de audio a WAV en línea. Admite MP3, M4A, FLAC, OGG, AAC, WMA y otros formatos a audio WAV sin pérdida. Ajusta la tasa de muestreo y canales para mantener la máxima calidad.',
  
  selectFile: 'Seleccionar archivo de audio',
  dropFile: 'O arrastra y suelta archivos de audio aquí',
  supportedFormats: 'Formatos compatibles: MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE, etc.',
  
  converting: 'Convirtiendo...',
  convertComplete: '¡Conversión completada!',
  downloadAll: 'Descargar todo',
  clearAll: 'Limpiar todo',
  
  settings: {
    title: 'Configuración de conversión',
    sampleRate: 'Tasa de muestreo',
    sampleRates: {
      '22050': '22050 Hz (Calidad de voz)',
      '44100': '44100 Hz (Calidad CD)',
      '48000': '48000 Hz (Calidad profesional)',
      '96000': '96000 Hz (Alta resolución)',
      '192000': '192000 Hz (Calidad de estudio)'
    },
    channels: 'Canales',
    channelOptions: {
      stereo: 'Estéreo',
      mono: 'Mono'
    },
    bitDepth: 'Profundidad de bits',
    bitDepths: {
      '16': '16 bits (Estándar CD)',
      '24': '24 bits (Profesional)',
      '32': '32 bits (Estudio)'
    },
    volume: 'Volumen',
    volumeLabel: 'Ajuste de volumen'
  },
  
  errors: {
    selectFile: 'Por favor, selecciona un archivo de audio',
    unsupportedFormat: 'Formato de archivo no compatible',
    conversionFailed: 'Error en la conversión, por favor intenta de nuevo',
    fileTooLarge: 'Archivo demasiado grande, por favor selecciona archivos menores a 100MB'
  },
  
  fileInfo: {
    name: 'Nombre del archivo',
    size: 'Tamaño',
    duration: 'Duración',
    format: 'Formato original',
    status: 'Estado',
    actions: 'Acciones'
  },
  
  status: {
    pending: 'Pendiente',
    processing: 'Procesando',
    completed: 'Completado',
    failed: 'Fallido'
  },
  
  features: {
    title: 'Características',
    list: [
      'Admite múltiples formatos de audio a WAV',
      'Múltiples tasas de muestreo (22050Hz-192000Hz)',
      'Profundidad de bits seleccionable (16/24/32 bits)',
      'Soporte para estéreo y mono',
      'Ajuste de volumen',
      'Procesamiento por lotes',
      'Mantiene la calidad original',
      'Completamente gratis, sin registro'
    ]
  },
  
  article: {
    title: 'Guía del Convertidor de Audio a WAV',
    subtitle: '¿Qué es el formato WAV?',
    description: 'WAV (Waveform Audio File Format) es un formato de audio sin pérdida desarrollado por Microsoft, ampliamente utilizado en producción de audio profesional, estudios de grabación y radiodifusión. Como uno de los formatos de audio digital más originales, WAV conserva todos los datos de audio, proporcionando la máxima experiencia de calidad.',
    
    whyConvert: {
      title: '¿Por qué convertir a WAV?',
      reasons: [
        {
          title: 'Audio sin pérdida',
          description: 'WAV utiliza compresión sin pérdida, conservando todos los detalles del audio original, siendo la primera opción para audiófilos y profesionales.'
        },
        {
          title: 'Edición profesional',
          description: 'Software de edición de audio profesional como Adobe Audition y Pro Tools soportan preferentemente WAV, facilitando el posprocesamiento.'
        },
        {
          title: 'Amplia compatibilidad',
          description: 'Casi todos los reproductores de audio y sistemas operativos soportan WAV, sin preocupaciones de compatibilidad.'
        },
        {
          title: 'Archivo de grabaciones',
          description: 'WAV es el formato ideal para archivos de grabación, adecuado para preservar datos de audio importantes a largo plazo.'
        }
      ]
    },
    
    howToUse: {
      title: 'Cómo usar el convertidor de audio a WAV',
      steps: [
        {
          step: 'Paso 1',
          description: 'Selecciona o arrastra los archivos de audio que deseas convertir.'
        },
        {
          step: 'Paso 2',
          description: 'Ajusta la tasa de muestreo, profundidad de bits y configuración de canales según necesites.'
        },
        {
          step: 'Paso 3',
          description: 'Haz clic en "Iniciar conversión" y espera a que se complete.'
        },
        {
          step: 'Paso 4',
          description: 'Descarga el archivo WAV convertido.'
        }
      ]
    },
    
    faqs: [
      {
        question: '¿Cuál es la diferencia entre WAV y MP3?',
        answer: 'WAV es un formato sin pérdida que conserva todos los datos de audio, archivos más grandes pero mejor calidad; MP3 es un formato con pérdida, archivos más pequeños pero pierde algo de calidad.'
      },
      {
        question: '¿Qué tasa de muestreo debo elegir?',
        answer: 'Para uso general se recomienda 44100Hz (calidad CD); para grabación profesional 48000Hz o superior; para grabación de voz 22050Hz es suficiente.'
      },
      {
        question: '¿Por qué los archivos WAV son tan grandes?',
        answer: 'WAV es un formato sin pérdida que conserva todos los datos de audio originales sin compresión, por lo tanto el tamaño del archivo es mayor.'
      },
      {
        question: '¿Puedo convertir WAV a otros formatos?',
        answer: 'Sí, nuestra herramienta también soporta convertir WAV a MP3, M4A y otros formatos.'
      }
    ],
    
    relatedTools: [
      {
        name: 'Audio a MP3',
        description: 'Convierte audio al formato MP3 con mejor compatibilidad.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: 'Audio a M4A',
        description: 'Convierte audio al formato M4A ideal para dispositivos Apple.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: 'Imagen a Arte ASCII',
        description: 'Convierte imágenes en arte de caracteres ASCII para efectos artísticos únicos.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'Wikipedia Formato WAV',
        url: 'https://es.wikipedia.org/wiki/WAV'
      },
      {
        title: 'Fundamentos de Audio Digital',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
