export default {
  title: 'Guía del Convertidor de Audio a WAV',
  subtitle: '¿Qué es el formato WAV?',
  description: 'WAV (Waveform Audio File Format) es un formato de audio sin pérdida desarrollado por Microsoft, ampliamente utilizado en producción de audio profesional, estudios de grabación y radiodifusión.',
  
  whyConvert: {
    title: '¿Por qué convertir a WAV?',
    reasons: [
      {
        title: 'Audio sin pérdida',
        description: 'WAV utiliza compresión sin pérdida, conservando todos los detalles del audio original.'
      },
      {
        title: 'Edición profesional',
        description: 'Software de edición de audio profesional soporta preferentemente WAV.'
      },
      {
        title: 'Amplia compatibilidad',
        description: 'Casi todos los reproductores de audio y sistemas operativos soportan WAV.'
      },
      {
        title: 'Archivo de grabaciones',
        description: 'WAV es el formato ideal para archivos de grabación.'
      }
    ]
  },
  
  useCases: {
    title: 'Casos de uso comunes',
    cases: [
      'Producción musical profesional y masterización',
      'Archivo de grabaciones de estudio',
      'Archivo de audio de emisoras de radio',
      'Edición y posprocesamiento de audio',
      'Muestreo de audio de alta calidad',
      'Producción de efectos de sonido para juegos',
      'Procesamiento de pistas de audio de video'
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
        description: 'Ajusta la tasa de muestreo, profundidad de bits y canales.'
      },
      {
        step: 'Paso 3',
        description: 'Haz clic en "Iniciar conversión" y espera.'
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
      answer: 'WAV es un formato sin pérdida con archivos más grandes y mejor calidad; MP3 es con pérdida, archivos más pequeños pero pierde calidad.'
    },
    {
      question: '¿Qué tasa de muestreo debo elegir?',
      answer: 'Para uso general 44100Hz (calidad CD); para grabación profesional 48000Hz o superior; para voz 22050Hz es suficiente.'
    },
    {
      question: '¿Por qué los archivos WAV son tan grandes?',
      answer: 'WAV es sin pérdida y conserva todos los datos de audio originales sin compresión.'
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
      description: 'Convierte imágenes en arte de caracteres ASCII.',
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
