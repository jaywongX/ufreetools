export default {
  name: 'Áudio para WAV',
  description: 'Converta vários formatos de áudio em arquivos de áudio WAV de alta qualidade sem perdas',
  longDescription: 'Conversor gratuito de áudio para WAV online. Suporta MP3, M4A, FLAC, OGG, AAC, WMA e outros formatos para áudio WAV sem perdas. Ajuste a taxa de amostragem e canais para manter a melhor qualidade.',
  
  selectFile: 'Selecionar arquivo de áudio',
  dropFile: 'Ou arraste e solte arquivos de áudio aqui',
  supportedFormats: 'Formatos suportados: MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE, etc.',
  
  converting: 'Convertendo...',
  convertComplete: 'Conversão concluída!',
  downloadAll: 'Baixar tudo',
  clearAll: 'Limpar tudo',
  
  settings: {
    title: 'Configurações de conversão',
    sampleRate: 'Taxa de amostragem',
    sampleRates: {
      '22050': '22050 Hz (Qualidade de voz)',
      '44100': '44100 Hz (Qualidade CD)',
      '48000': '48000 Hz (Qualidade profissional)',
      '96000': '96000 Hz (Alta resolução)',
      '192000': '192000 Hz (Qualidade de estúdio)'
    },
    channels: 'Canais',
    channelOptions: {
      stereo: 'Estéreo',
      mono: 'Mono'
    },
    bitDepth: 'Profundidade de bits',
    bitDepths: {
      '16': '16 bits (Padrão CD)',
      '24': '24 bits (Profissional)',
      '32': '32 bits (Estúdio)'
    },
    volume: 'Volume',
    volumeLabel: 'Ajuste de volume'
  },
  
  errors: {
    selectFile: 'Por favor, selecione um arquivo de áudio',
    unsupportedFormat: 'Formato de arquivo não suportado',
    conversionFailed: 'Falha na conversão, por favor tente novamente',
    fileTooLarge: 'Arquivo muito grande, por favor selecione arquivos menores que 100MB'
  },
  
  fileInfo: {
    name: 'Nome do arquivo',
    size: 'Tamanho',
    duration: 'Duração',
    format: 'Formato original',
    status: 'Status',
    actions: 'Ações'
  },
  
  status: {
    pending: 'Pendente',
    processing: 'Processando',
    completed: 'Concluído',
    failed: 'Falhou'
  },
  
  features: {
    title: 'Recursos',
    list: [
      'Suporta múltiplos formatos de áudio para WAV',
      'Múltiplas taxas de amostragem (22050Hz-192000Hz)',
      'Profundidade de bits selecionável (16/24/32 bits)',
      'Suporte estéreo e mono',
      'Ajuste de volume',
      'Processamento em lote',
      'Mantém a qualidade original',
      'Completamente gratuito, sem registro'
    ]
  },
  
  article: {
    title: 'Guia do Conversor de Áudio para WAV',
    subtitle: 'O que é o formato WAV?',
    description: 'WAV (Waveform Audio File Format) é um formato de áudio sem perdas desenvolvido pela Microsoft, amplamente utilizado na produção de áudio profissional, estúdios de gravação e radiodifusão. Como um dos formatos de áudio digital mais originais, o WAV preserva todos os dados de áudio, fornecendo a melhor experiência de qualidade.',
    
    whyConvert: {
      title: 'Por que converter para WAV?',
      reasons: [
        {
          title: 'Áudio sem perdas',
          description: 'WAV usa compressão sem perdas, preservando todos os detalhes do áudio original, a primeira escolha de audiófilos e profissionais.'
        },
        {
          title: 'Edição profissional',
          description: 'Software de edição de áudio profissional como Adobe Audition e Pro Tools suportam preferencialmente WAV.'
        },
        {
          title: 'Ampla compatibilidade',
          description: 'Quase todos os players de áudio e sistemas operacionais suportam WAV.'
        },
        {
          title: 'Arquivo de gravações',
          description: 'WAV é o formato ideal para arquivos de gravação.'
        }
      ]
    },
    
    howToUse: {
      title: 'Como usar o conversor de áudio para WAV',
      steps: [
        {
          step: 'Passo 1',
          description: 'Selecione ou arraste os arquivos de áudio que deseja converter.'
        },
        {
          step: 'Passo 2',
          description: 'Ajuste a taxa de amostragem, profundidade de bits e canais conforme necessário.'
        },
        {
          step: 'Passo 3',
          description: 'Clique em "Iniciar conversão" e aguarde a conclusão.'
        },
        {
          step: 'Passo 4',
          description: 'Baixe o arquivo WAV convertido.'
        }
      ]
    },
    
    faqs: [
      {
        question: 'Qual é a diferença entre WAV e MP3?',
        answer: 'WAV é um formato sem perdas que preserva todos os dados de áudio, arquivos maiores mas melhor qualidade; MP3 é um formato com perdas, arquivos menores mas perde parte da qualidade.'
      },
      {
        question: 'Qual taxa de amostragem devo escolher?',
        answer: 'Para uso geral, recomenda-se 44100Hz (qualidade CD); para gravação profissional 48000Hz ou superior; para gravação de voz 22050Hz é suficiente.'
      },
      {
        question: 'Por que os arquivos WAV são tão grandes?',
        answer: 'WAV é um formato sem perdas que preserva todos os dados de áudio originais sem compressão, portanto o tamanho do arquivo é maior.'
      },
      {
        question: 'Posso converter WAV para outros formatos?',
        answer: 'Sim, nossa ferramenta também suporta a conversão de WAV para MP3, M4A e outros formatos.'
      }
    ],
    
    relatedTools: [
      {
        name: 'Áudio para MP3',
        description: 'Converta áudio para o formato MP3 com melhor compatibilidade.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: 'Áudio para M4A',
        description: 'Converta áudio para o formato M4A ideal para dispositivos Apple.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: 'Imagem para Arte ASCII',
        description: 'Converta imagens em arte de caracteres ASCII para efeitos artísticos únicos.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'Wikipedia Formato WAV',
        url: 'https://pt.wikipedia.org/wiki/WAV'
      },
      {
        title: 'Fundamentos do Áudio Digital',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
