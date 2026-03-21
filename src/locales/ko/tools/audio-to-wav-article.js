export default {
  title: '오디오-WAV 변환기 사용 가이드',
  subtitle: 'WAV 형식이란?',
  description: 'WAV(Waveform Audio File Format)는 Microsoft가 개발한 무손실 오디오 형식으로, 전문 오디오 제작, 레코딩 스튜디오, 방송 분야에서 널리 사용됩니다.',
  
  whyConvert: {
    title: '왜 WAV로 변환해야 하나요?',
    reasons: [
      {
        title: '무손실 음질',
        description: 'WAV는 무손실 압축 기술을 사용하여 원본 오디오의 모든 디테일을 보존합니다.'
      },
      {
        title: '전문 편집',
        description: '전문 오디오 편집 소프트웨어가 WAV를 우선 지원합니다.'
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
  
  useCases: {
    title: '일반적인 사용 사례',
    cases: [
      '전문 음악 제작 및 마스터링',
      '스튜디오 녹음 파일 보관',
      '라디오 방송 오디오 아카이브',
      '오디오 후반 작업 및 처리',
      '고품질 오디오 샘플링',
      '게임 사운드 효과 제작',
      '비디오 오디오 트랙 처리'
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
        description: '샘플링 레이트, 비트 깊이, 채널을 조정하세요.'
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
      answer: 'WAV는 무손실로 파일은 크지만 최고 음질; MP3는 손실 압축으로 파일은 작지만 일부 음질 손실.'
    },
    {
      question: '어떤 샘플링 레이트를 선택해야 하나요?',
      answer: '일반 사용은 44100Hz; 전문 녹음은 48000Hz 이상; 음성 녹음은 22050Hz면 충분.'
    },
    {
      question: 'WAV 파일이 왜 이렇게 큰가요?',
      answer: 'WAV는 무손실 형식으로 원본 오디오 데이터를 모두 보존하고 압축하지 않습니다.'
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
      description: '이미지를 ASCII 문자 아트로 변환.',
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
