export default {
  name: 'Audio in WAV',
  description: 'Converti vari formati audio in file audio WAV di alta qualità senza perdita',
  longDescription: 'Convertitore gratuito da audio a WAV online. Supporta MP3, M4A, FLAC, OGG, AAC, WMA e altri formati in audio WAV senza perdita. Regola frequenza di campionamento e canali per mantenere la massima qualità.',
  
  selectFile: 'Seleziona file audio',
  dropFile: 'Oppure trascina e rilascia i file audio qui',
  supportedFormats: 'Formati supportati: MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE, ecc.',
  
  converting: 'Conversione in corso...',
  convertComplete: 'Conversione completata!',
  downloadAll: 'Scarica tutto',
  clearAll: 'Cancella tutto',
  
  settings: {
    title: 'Impostazioni conversione',
    sampleRate: 'Frequenza di campionamento',
    sampleRates: {
      '22050': '22050 Hz (Qualità voce)',
      '44100': '44100 Hz (Qualità CD)',
      '48000': '48000 Hz (Qualità professionale)',
      '96000': '96000 Hz (Alta risoluzione)',
      '192000': '192000 Hz (Qualità studio)'
    },
    channels: 'Canali',
    channelOptions: {
      stereo: 'Stereo',
      mono: 'Mono'
    },
    bitDepth: 'Profondità bit',
    bitDepths: {
      '16': '16 bit (Standard CD)',
      '24': '24 bit (Professionale)',
      '32': '32 bit (Studio)'
    },
    volume: 'Volume',
    volumeLabel: 'Regolazione volume'
  },
  
  errors: {
    selectFile: 'Seleziona un file audio',
    unsupportedFormat: 'Formato file non supportato',
    conversionFailed: 'Conversione fallita, riprova',
    fileTooLarge: 'File troppo grande, seleziona file inferiori a 100MB'
  },
  
  fileInfo: {
    name: 'Nome file',
    size: 'Dimensione',
    duration: 'Durata',
    format: 'Formato originale',
    status: 'Stato',
    actions: 'Azioni'
  },
  
  status: {
    pending: 'In attesa',
    processing: 'Elaborazione',
    completed: 'Completato',
    failed: 'Fallito'
  },
  
  features: {
    title: 'Caratteristiche',
    list: [
      'Supporta più formati audio in WAV',
      'Multiple frequenze di campionamento (22050Hz-192000Hz)',
      'Profondità bit selezionabile (16/24/32 bit)',
      'Supporto stereo e mono',
      'Regolazione volume',
      'Elaborazione batch',
      'Mantiene la qualità originale',
      'Completamente gratuito, senza registrazione'
    ]
  },
  
  article: {
    title: 'Guida al Convertitore Audio in WAV',
    subtitle: 'Cos\'è il formato WAV?',
    description: 'WAV (Waveform Audio File Format) è un formato audio senza perdita sviluppato da Microsoft, ampiamente utilizzato nella produzione audio professionale, studi di registrazione e trasmissioni. Come uno dei formati audio digitali più originali, WAV conserva tutti i dati audio, fornendo la massima esperienza di qualità.',
    
    whyConvert: {
      title: 'Perché convertire in WAV?',
      reasons: [
        {
          title: 'Audio senza perdita',
          description: 'WAV utilizza compressione senza perdita, conservando tutti i dettagli dell\'audio originale, la prima scelta per audiofili e professionisti.'
        },
        {
          title: 'Editing professionale',
          description: 'Software di editing audio professionale come Adobe Audition e Pro Tools supportano preferenzialmente WAV.'
        },
        {
          title: 'Ampia compatibilità',
          description: 'Quasi tutti i lettori audio e sistemi operativi supportano WAV.'
        },
        {
          title: 'Archivio registrazioni',
          description: 'WAV è il formato ideale per i file di registrazione.'
        }
      ]
    },
    
    howToUse: {
      title: 'Come usare il convertitore audio in WAV',
      steps: [
        {
          step: 'Passo 1',
          description: 'Seleziona o trascina i file audio che desideri convertire.'
        },
        {
          step: 'Passo 2',
          description: 'Regola frequenza di campionamento, profondità bit e canali secondo necessità.'
        },
        {
          step: 'Passo 3',
          description: 'Clicca "Avvia conversione" e attendi il completamento.'
        },
        {
          step: 'Passo 4',
          description: 'Scarica il file WAV convertito.'
        }
      ]
    },
    
    faqs: [
      {
        question: 'Qual è la differenza tra WAV e MP3?',
        answer: 'WAV è un formato senza perdita che conserva tutti i dati audio, file più grandi ma migliore qualità; MP3 è un formato con perdita, file più piccoli ma perde parte della qualità.'
      },
      {
        question: 'Quale frequenza di campionamento dovrei scegliere?',
        answer: 'Per uso generale si consiglia 44100Hz (qualità CD); per registrazione professionale 48000Hz o superiore; per registrazione vocale 22050Hz è sufficiente.'
      },
      {
        question: 'Perché i file WAV sono così grandi?',
        answer: 'WAV è un formato senza perdita che conserva tutti i dati audio originali senza compressione, quindi la dimensione del file è maggiore.'
      },
      {
        question: 'Posso convertire WAV in altri formati?',
        answer: 'Sì, il nostro strumento supporta anche la conversione da WAV a MP3, M4A e altri formati.'
      }
    ],
    
    relatedTools: [
      {
        name: 'Audio in MP3',
        description: 'Converti audio nel formato MP3 con la migliore compatibilità.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: 'Audio in M4A',
        description: 'Converti audio nel formato M4A ideale per dispositivi Apple.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: 'Immagine in Arte ASCII',
        description: 'Converti immagini in arte a caratteri ASCII per effetti artistici unici.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'Wikipedia Formato WAV',
        url: 'https://it.wikipedia.org/wiki/WAV'
      },
      {
        title: 'Fondamenti Audio Digitale',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
