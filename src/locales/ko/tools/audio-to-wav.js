export default {
  name: '오디오를 WAV로 변환',
  description: '다양한 오디오 형식을 고품질 WAV 무손실 오디오 파일로 변환',
  longDescription: '무료 온라인 오디오-WAV 변환기. MP3, M4A, FLAC, OGG, AAC, WMA 등 다양한 형식을 WAV 무손실 오디오로 변환. 샘플링 레이트와 채널을 조정하여 최고 음질 유지.',
  
  selectFile: '오디오 파일 선택',
  dropFile: '또는 오디오 파일을 여기에 드래그 앤 드롭',
  supportedFormats: '지원 형식: MP3, M4A, FLAC, OGG, AAC, WMA, AMR, AIFF, APE 등',
  
  converting: '변환 중...',
  convertComplete: '변환 완료!',
  downloadAll: '모두 다운로드',
  clearAll: '모두 지우기',
  
  settings: {
    title: '변환 설정',
    sampleRate: '샘플링 레이트',
    sampleRates: {
      '22050': '22050 Hz (음성 품질)',
      '44100': '44100 Hz (CD 품질)',
      '48000': '48000 Hz (전문가 품질)',
      '96000': '96000 Hz (고해상도)',
      '192000': '192000 Hz (스튜디오 품질)'
    },
    channels: '채널',
    channelOptions: {
      stereo: '스테레오',
      mono: '모노'
    },
    bitDepth: '비트 깊이',
    bitDepths: {
      '16': '16비트 (CD 표준)',
      '24': '24비트 (전문가)',
      '32': '32비트 (스튜디오)'
    },
    volume: '볼륨',
    volumeLabel: '볼륨 조정'
  },
  
  errors: {
    selectFile: '오디오 파일을 선택해 주세요',
    unsupportedFormat: '지원하지 않는 파일 형식입니다',
    conversionFailed: '변환 실패, 다시 시도해 주세요',
    fileTooLarge: '파일이 너무 큽니다, 100MB 이하의 파일을 선택해 주세요'
  },
  
  fileInfo: {
    name: '파일 이름',
    size: '파일 크기',
    duration: '재생 시간',
    format: '원본 형식',
    status: '상태',
    actions: '작업'
  },
  
  status: {
    pending: '대기 중',
    processing: '처리 중',
    completed: '완료',
    failed: '실패'
  },
  
  features: {
    title: '기능',
    list: [
      '다양한 오디오 형식을 WAV로 변환',
      '다양한 샘플링 레이트 선택 (22050Hz-192000Hz)',
      '비트 깊이 선택 가능 (16/24/32비트)',
      '스테레오 및 모노 지원',
      '볼륨 조정',
      '일괄 처리',
      '원본 음질 유지',
      '완전 무료, 등록 불필요'
    ]
  },
  
  article: {
    title: '오디오-WAV 변환기 사용 가이드',
    subtitle: 'WAV 형식이란?',
    description: 'WAV(Waveform Audio File Format)는 Microsoft가 개발한 무손실 오디오 형식으로, 전문 오디오 제작, 레코딩 스튜디오, 방송 분야에서 널리 사용됩니다. 가장 초기의 디지털 오디오 형식 중 하나로, WAV는 완전한 오디오 데이터를 보존하여 최고 품질의 오디오 경험을 제공합니다.',
    
    whyConvert: {
      title: '왜 WAV로 변환해야 하나요?',
      reasons: [
        {
          title: '무손실 음질',
          description: 'WAV는 무손실 압축 기술을 사용하여 원본 오디오의 모든 디테일을 보존합니다. 오디오파일과 전문가의 첫 번째 선택.'
        },
        {
          title: '전문 편집',
          description: 'Adobe Audition, Pro Tools 등 전문 오디오 편집 소프트웨어가 WAV를 우선 지원합니다.'
        },
        {
          title: '광범위한 호환성',
          description: '거의 모든 오디오 플레이어와 운영체제가 WAV를 지원합니다.'
        },
        {
          title: '녹음 아카이브',
          description: 'WAV는 녹음 파일에 이상적인 형식입니다.'
        }
      ]
    },
    
    howToUse: {
      title: '오디오-WAV 변환기 사용 방법',
      steps: [
        {
          step: '1단계',
          description: '변환할 오디오 파일을 선택하거나 드래그 앤 드롭하세요.'
        },
        {
          step: '2단계',
          description: '필요에 따라 샘플링 레이트, 비트 깊이, 채널을 조정하세요.'
        },
        {
          step: '3단계',
          description: '"변환 시작"을 클릭하고 완료를 기다리세요.'
        },
        {
          step: '4단계',
          description: '변환된 WAV 파일을 다운로드하세요.'
        }
      ]
    },
    
    faqs: [
      {
        question: 'WAV와 MP3의 차이는?',
        answer: 'WAV는 무손실 형식으로 완전한 오디오 데이터를 보존, 파일은 크지만 최고 음질; MP3는 손실 압축 형식, 파일은 작지만 일부 음질 손실.'
      },
      {
        question: '어떤 샘플링 레이트를 선택해야 하나요?',
        answer: '일반 사용은 44100Hz(CD 품질); 전문 녹음은 48000Hz 이상; 음성 녹음은 22050Hz면 충분.'
      },
      {
        question: 'WAV 파일이 왜 이렇게 큰가요?',
        answer: 'WAV는 무손실 형식으로 원본 오디오 데이터를 모두 보존하고 압축하지 않아 파일 크기가 큽니다.'
      },
      {
        question: 'WAV를 다른 형식으로 변환할 수 있나요?',
        answer: '네, 이 도구는 WAV에서 MP3, M4A 등 다른 형식으로의 변환도 지원합니다.'
      }
    ],
    
    relatedTools: [
      {
        name: '오디오를 MP3로 변환',
        description: '오디오를 가장 호환성이 좋은 MP3 형식으로 변환.',
        url: 'https://www.ufreetools.com/tools/audio-to-mp3'
      },
      {
        name: '오디오를 M4A로 변환',
        description: '오디오를 Apple 기기에 적합한 M4A 형식으로 변환.',
        url: 'https://www.ufreetools.com/tools/audio-to-m4a'
      },
      {
        name: '이미지를 ASCII 아트로 변환',
        description: '이미지를 ASCII 문자 아트로 변환하여 독특한 텍스트 아트 효과를 만듭니다.',
        url: 'https://www.ufreetools.com/tools/image-to-ascii'
      }
    ],
    
    references: [
      {
        title: 'WAV 형식 위키백과',
        url: 'https://ko.wikipedia.org/wiki/WAV'
      },
      {
        title: '디지털 오디오 기초',
        url: 'https://www.ufreetools.com/blog/digital-audio-basics'
      }
    ]
  }
}
